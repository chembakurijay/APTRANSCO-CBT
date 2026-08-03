"""
APTRANSCO AEE Electrical — Diagram-Question Extractor
======================================================
Extracts diagram-based MCQ pages (full page render as JPEG) from all Electrical
source PDFs, organised subject-wise with priority labelling.

Priority 1 : Past state exam papers (APTRANSCO, APPSC AEE, APSPDCL, APGENCO,
             APEPDCL, TSGENCO, TSPSC — non-GATE)
Priority 2 : GATE Electrical previous year papers  (2019EE … 2026EE)
Priority 3 : Subject question banks (QB files)
Priority 4 : Notes / reference material (fallback, lower confidence)

Acceptance criteria for a page:
  a) Renders a visible diagram — graphic region ≥ MIN_DIAGRAM_AREA_RATIO
  b) Contains ≥ 3 distinct MCQ option markers
  c) Text matches at least one APTRANSCO syllabus keyword for the subject
"""

import hashlib
import json
import re
import shutil
from collections import defaultdict
from pathlib import Path

import fitz
from PIL import Image, ImageFilter, ImageStat

SRC_ROOT            = Path("sourcefiles-ce/Aptransco_sourcefiles/Electrical")
OUT_ROOT            = Path("images/diagram-questions-EE")
REPORT              = Path("scripts/dq_ee_report.json")
RENDER_DPI          = 150
MIN_DIAGRAM_AREA_RATIO = 0.08

# ─────────────────────────────────────────────────────────────────
# PRIORITY CLASSIFICATION
# ─────────────────────────────────────────────────────────────────
def classify_source(path: Path) -> tuple[int, str]:
    name = path.name.lower()
    gate_indicators = ["2019ee", "2020ee", "2021ee", "2022ee", "2023ee", "2026ee"]
    if any(g in name for g in gate_indicators):
        return 2, "GATE"

    qbank_indicators = [
        "question bank", "questionbank", "question-bank", "questionbank",
        "power systems question", "power electronics question",
        "measurements question", "machines question", "analog question",
        "utilisation & control", "cicuits-incomplrtr",
    ]
    for q in qbank_indicators:
        if q in name:
            return 3, "QuestionBank"

    past_exam_indicators = [
        "aptransco", "appsc", "apspdcl", "apgenco", "apepdcl",
        "tsgenco", "tspsc", "ap-transco", "ap-genco",
        "electronic-engn", "aee", "ae-electrical",
    ]
    for p in past_exam_indicators:
        if p in name:
            return 1, "PastExam"

    return 4, "NotesMaterial"


# ─────────────────────────────────────────────────────────────────
# 9-SUBJECT KEYWORD MAP  (APTRANSCO AEE Electrical syllabus)
# ─────────────────────────────────────────────────────────────────
SUBJECT_MAP = {
    "Circuits": {
        "label": "Electric Circuits",
        "keywords": [
            "thevenin", "norton", "superposition", "maximum power transfer",
            "star-delta", "star delta", "delta-star", "ladder network",
            "bridge network", "phasor diagram", "rl circuit", "rc circuit",
            "rlc", "resonance", "impedance", "admittance", "power factor",
            "series circuit", "parallel circuit", "two-port", "t network",
            "pi network", "kirchhoff", "mesh", "nodal", "transient",
            "time constant", "charging", "discharging", "locus diagram",
        ],
    },
    "Machines": {
        "label": "Electrical Machines",
        "keywords": [
            "dc generator", "dc motor", "armature winding", "lap winding",
            "wave winding", "occ", "torque-speed", "torque speed",
            "single-phase transformer", "three-phase transformer",
            "core type", "shell type", "equivalent circuit",
            "open circuit test", "short circuit test", "induction motor",
            "squirrel cage", "slip-ring", "torque-slip", "circle diagram",
            "synchronous machine", "alternator", "v-curve", "salient pole",
            "stepper motor", "servo motor", "bldc", "speed-torque",
        ],
    },
    "PowerSystems": {
        "label": "Power Systems",
        "keywords": [
            "thermal power plant", "hydro power plant", "nuclear power plant",
            "diesel plant", "gas turbine", "transmission line", "sag",
            "tower", "conductor configuration", "radial distribution",
            "ring main", "single line diagram", "sld", "bus bar",
            "substation", "symmetrical fault", "unsymmetrical fault",
            "relay", "protection", "circuit breaker", "isolator",
            "lightning arrester", "insulator", "power angle", "swing curve",
            "load flow", "fault current", "per unit", "ferranti effect",
            "corona", "skin effect", "surge impedance",
        ],
    },
    "Control": {
        "label": "Control Systems",
        "keywords": [
            "block diagram", "signal flow graph", "mason", "open-loop",
            "closed-loop", "feedback", "transfer function", "root locus",
            "bode plot", "nyquist", "polar plot", "routh", "gain margin",
            "phase margin", "first order", "second order", "step response",
            "pid controller", "lag compensator", "lead compensator",
            "steady state error", "type of system", "frequency response",
        ],
    },
    "PowerElectronics": {
        "label": "Power Electronics & Drives",
        "keywords": [
            "scr", "thyristor", "triac", "diac", "ujt", "igbt", "gto",
            "mosfet", "power mosfet", "rectifier", "controlled rectifier",
            "buck converter", "boost converter", "buck-boost",
            "inverter", "chopper", "cycloconverter", "firing angle",
            "commutation", "dc drive", "ac drive", "four-quadrant",
            "pwm", "half wave", "full wave", "bridge rectifier",
        ],
    },
    "Measurements": {
        "label": "Electrical Measurements",
        "keywords": [
            "pmmc", "moving iron", "electrodynamometer", "induction type",
            "energy meter", "wheatstone bridge", "kelvin bridge",
            "maxwell bridge", "schering bridge", "anderson bridge",
            "hay bridge", "instrument transformer", "current transformer",
            "potential transformer", "cro", "oscilloscope", "potentiometer",
            "megger", "instrument", "galvanometer", "wattmeter",
            "power measurement", "lissajous", "q meter",
        ],
    },
    "Analog": {
        "label": "Analog & Digital Electronics",
        "keywords": [
            "pn junction", "zener diode", "bjt", "jfet", "mosfet",
            "common emitter", "common base", "common collector",
            "operational amplifier", "op-amp", "inverting amplifier",
            "non-inverting", "summing amplifier", "integrator",
            "differentiator", "oscillator", "rc oscillator", "lc oscillator",
            "voltage regulator", "rectifier circuit", "filter circuit",
            "logic gate", "and gate", "or gate", "nand", "nor", "xor",
            "flip-flop", "sr flip", "jk flip", "d flip", "t flip",
            "register", "counter", "multiplexer", "demultiplexer",
            "encoder", "decoder", "8085", "microprocessor",
        ],
    },
    "Utilization": {
        "label": "Utilization of Electrical Energy",
        "keywords": [
            "resistance heating", "induction heating", "dielectric heating",
            "arc furnace", "electric welding", "arc welding",
            "resistance welding", "illumination", "lighting scheme",
            "reflector", "polar curve", "electric traction", "locomotive",
            "traction system", "speed-time curve", "load curve",
            "demand curve", "daily load curve", "tariff",
        ],
    },
}


def detect_subject(text_lower: str) -> tuple[str, str] | None:
    for code, info in SUBJECT_MAP.items():
        for kw in info["keywords"]:
            if kw in text_lower:
                return code, kw
    return None


# ─────────────────────────────────────────────────────────────────
# MCQ OPTION DETECTION
# ─────────────────────────────────────────────────────────────────
OPTION_RE = re.compile(
    r"(?:\(a\)|\(b\)|\(c\)|\(d\)|"
    r"\ba\)\s|\bb\)\s|\bc\)\s|\bd\)\s|"
    r"\ba\.\s|\bb\.\s|\bc\.\s|\bd\.\s|"
    r"option\s*[abcd])",
    re.IGNORECASE,
)

def has_mcq_options(text: str) -> bool:
    matches = OPTION_RE.findall(text.lower())
    unique = {m.strip().lower().rstrip(".") for m in matches}
    return len(unique) >= 3


# ─────────────────────────────────────────────────────────────────
# DIAGRAM DETECTION
# ─────────────────────────────────────────────────────────────────
def has_significant_diagram(pil_img: Image.Image) -> tuple[bool, float]:
    w, h = pil_img.size
    gray  = pil_img.convert("L")
    edges = gray.filter(ImageFilter.FIND_EDGES)

    block_w = max(w // 20, 10)
    block_h = max(h // 20, 10)
    diagram_blocks = total_blocks = 0

    for by in range(0, h - block_h, block_h):
        for bx in range(0, w - block_w, block_w):
            total_blocks += 1
            region = edges.crop((bx, by, bx + block_w, by + block_h))
            if ImageStat.Stat(region).mean[0] > 8 and (block_w / block_h) < 5:
                diagram_blocks += 1

    ratio = diagram_blocks / max(total_blocks, 1)
    return ratio >= MIN_DIAGRAM_AREA_RATIO, ratio


# ─────────────────────────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────────────────────────
def sha1(data: bytes) -> str:
    return hashlib.sha1(data).hexdigest()


def main() -> None:
    if OUT_ROOT.exists():
        shutil.rmtree(OUT_ROOT)
    REPORT.parent.mkdir(parents=True, exist_ok=True)

    for code in SUBJECT_MAP:
        (OUT_ROOT / code).mkdir(parents=True, exist_ok=True)

    pdfs = sorted(SRC_ROOT.rglob("*.pdf"))
    print(f"Electrical PDFs to scan: {len(pdfs)}")

    seen: set[str] = set()
    results: list[dict] = []

    for pdf_path in pdfs:
        priority, src_label = classify_source(pdf_path)
        rel = str(pdf_path).replace("\\", "/")

        try:
            doc = fitz.open(pdf_path)
        except Exception as e:
            print(f"  SKIP {pdf_path.name}: {e}")
            continue

        for pg_idx in range(len(doc)):
            page = doc[pg_idx]
            try:
                text = page.get_text("text")
            except Exception:
                text = ""

            if not has_mcq_options(text):
                continue

            subj_match = detect_subject(text.lower())
            if subj_match is None:
                continue
            subj_code, matched_kw = subj_match

            mat = fitz.Matrix(RENDER_DPI / 72, RENDER_DPI / 72)
            try:
                pix = page.get_pixmap(matrix=mat, alpha=False)
            except Exception:
                continue

            img_bytes = pix.tobytes("png")
            pil_img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)

            found_diag, diag_ratio = has_significant_diagram(pil_img)
            if not found_diag:
                continue

            h = sha1(img_bytes)
            if h in seen:
                continue
            seen.add(h)

            safe_stem = re.sub(r"[^\w\-]", "_", pdf_path.stem)[:60]
            fname = f"P{priority}_{safe_stem}_pg{pg_idx+1:03d}.jpg"
            out_path = OUT_ROOT / subj_code / fname
            pil_img.save(out_path, "JPEG", quality=90)

            results.append({
                "priority": priority,
                "source_label": src_label,
                "subject": subj_code,
                "subject_name": SUBJECT_MAP[subj_code]["label"],
                "matched_keyword": matched_kw,
                "source_file": rel,
                "page": pg_idx + 1,
                "diagram_area_ratio": round(diag_ratio, 3),
                "output_file": str(out_path).replace("\\", "/"),
                "sha1": h,
            })
            print(f"  ✓ P{priority} [{subj_code}] {pdf_path.name} "
                  f"pg{pg_idx+1} (diag={diag_ratio:.2f}, kw={matched_kw})")

        doc.close()

    # ── Summary ───────────────────────────────────────────────────
    by_subj: dict[str, dict[int, int]] = defaultdict(lambda: defaultdict(int))
    for r in results:
        by_subj[r["subject"]][r["priority"]] += 1

    summary = {}
    for code, pmap in sorted(by_subj.items()):
        summary[code] = {
            "subject_name": SUBJECT_MAP[code]["label"],
            "P1_PastExam": pmap.get(1, 0),
            "P2_GATE": pmap.get(2, 0),
            "P3_QuestionBank": pmap.get(3, 0),
            "P4_Notes": pmap.get(4, 0),
            "total": sum(pmap.values()),
        }

    REPORT.write_text(
        json.dumps({"total_extracted": len(results), "summary_by_subject": summary, "items": results}, indent=2),
        encoding="utf-8",
    )

    print("\n=== ELECTRICAL EXTRACTION COMPLETE ===")
    print(f"Total diagram questions saved : {len(results)}")
    print(f"\n{'Subject':<35} {'P1':>5} {'P2':>5} {'P3':>5} {'P4':>5} {'Total':>7}")
    print("-" * 62)
    for code, row in summary.items():
        print(f"{row['subject_name']:<35} {row['P1_PastExam']:>5} {row['P2_GATE']:>5} "
              f"{row['P3_QuestionBank']:>5} {row['P4_Notes']:>5} {row['total']:>7}")
    print(f"\nReport: {REPORT}")


if __name__ == "__main__":
    main()
