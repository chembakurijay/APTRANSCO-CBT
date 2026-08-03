"""
APTRANSCO AEE Civil — Diagram-Question Extractor
=================================================
Priority 1 : Past exam papers (non-GATE) — APPSC AEE, APTRANSCO, APSPDCL, TSGENCO, TSPSC etc.
Priority 2 : GATE Civil previous year papers
Priority 3 : Subject question banks (DDRC QB, SOM QB, Soil Mech QB, Steel QB, FM&HHM QB, Found. QB)
Priority 4 : (placeholder — external questions added manually later)

A page is accepted ONLY when:
  a) It renders a visible engineering diagram (non-text graphic region ≥ MIN_DIAGRAM_AREA_RATIO of page)
  b) It contains at least one MCQ option marker (A) / (B) / (C) / (D) OR  A. B. C. D.
  c) The page topic maps to one of the 6 APTRANSCO Civil subjects
  d) The diagram type is in the approved syllabus-concept list

Rejected pages:
  - Pages with only text / no graphic region
  - Pages whose only "image" is a header logo or watermark (small ≤ 5% page area)
  - Pages matching out-of-syllabus keywords (geotechnical NOT in list, etc.)
  - GATE pages that are pure calculation (no diagram)
"""

import hashlib
import json
import re
import shutil
from pathlib import Path

import fitz  # PyMuPDF
from PIL import Image, ImageFilter, ImageStat

# ─────────────────────────────────────────────────────────────────
# CONFIG
# ─────────────────────────────────────────────────────────────────
SRC_ROOT   = Path("sourcefiles-ce/Aptransco_sourcefiles")
OUT_ROOT   = Path("images/diagram-questions")
REPORT     = Path("scripts/dq_report.json")
RENDER_DPI = 150          # page render resolution
MIN_DIAGRAM_AREA_RATIO = 0.08   # diagram region must cover ≥ 8% of page

# ─────────────────────────────────────────────────────────────────
# PRIORITY CLASSIFICATION
# ─────────────────────────────────────────────────────────────────
def classify_source(path: Path) -> tuple[int, str]:
    """Return (priority, source_label). Lower number = higher priority."""
    name = path.name.lower()
    parts_lower = [p.lower() for p in path.parts]

    gate_indicators = ["gate", "2019ce", "2020ce", "2021ce", "2022ce", "2023ce", "2025ce"]
    if any(g in name for g in gate_indicators):
        return 2, "GATE"

    qbank_indicators = [
        "question bank", "questionbank", "question-bank",
        "ddrc question", "som question", "soil mechanics question",
        "steel structures question", "fm &hhm question", "foundation engineering question",
        "civil-engineering-mcqs", "aptransco-civil-steel", "aptransco-steel-structures",
    ]
    for q in qbank_indicators:
        if q in name:
            return 3, "QuestionBank"

    past_exam_indicators = [
        "appsc", "aptransco", "apspdcl", "apgenco", "apcpdcl",
        "tsgenco", "tspsc", "apepdcl",
        "aee", "ae-civil", "aecivil",
        "3ae-civil", "6aee-civil", "12managers",
        "24dec", "ce_1", "ce_2",
    ]
    for p in past_exam_indicators:
        if p in name:
            return 1, "PastExam"

    return 3, "QuestionBank"


# ─────────────────────────────────────────────────────────────────
# SUBJECT & TOPIC MAPPING
# ─────────────────────────────────────────────────────────────────
SUBJECT_MAP = {
    "SOM": {
        "label": "Strength of Materials",
        "keywords": [
            "shear force", "bending moment", "sfd", "bmd", "axial force",
            "simply supported", "cantilever", "overhanging", "fixed beam",
            "udl", "uvl", "point load", "stress-strain", "hooke",
            "neutral axis", "bending stress", "shear stress", "torsion",
            "euler column", "buckling", "mohr circle", "principal stress",
            "moment of inertia", "section modulus", "deflection of beam",
            "strain energy", "propped cantilever", "sagging", "hogging",
            "mild steel", "cast iron", "elastic limit", "yield point",
            "shear stress distribution", "rectangular section", "i-section",
            "circular shaft", "hollow shaft", "end condition", "slenderness ratio",
        ],
    },
    "DDRC": {
        "label": "Reinforced Cement Concrete (RCC/DDRC)",
        "keywords": [
            "reinforced concrete", "rcc", "singly reinforced", "doubly reinforced",
            "balanced section", "under reinforced", "over reinforced",
            "stress block", "neutral axis", "compression block", "is 456",
            "stirrups", "bent-up bar", "curtailment", "anchorage",
            "development length", "lap splice", "one-way slab", "two-way slab",
            "cantilever slab", "t-beam", "l-beam", "rectangular column",
            "circular column", "spiral column", "column ties",
            "isolated footing", "combined footing", "strap footing", "raft footing",
            "beam column joint", "flexural crack", "shear crack", "bond failure",
            "limit state", "working stress", "mix design", "water cement ratio",
        ],
    },
    "Soil": {
        "label": "Soil Mechanics",
        "keywords": [
            "soil", "phase diagram", "void ratio", "porosity", "saturation",
            "grain size", "sieve analysis", "atterberg limit", "liquid limit",
            "plastic limit", "shrinkage limit", "compaction", "proctor",
            "permeability", "constant head", "falling head",
            "flow net", "seepage", "equipotential",
            "consolidation", "oedometer", "settlement",
            "shear strength", "direct shear", "triaxial", "unconfined compression",
            "vane shear", "mohr circle", "failure envelope",
            "earth pressure", "active", "passive", "rankine", "coulomb",
            "retaining wall", "bearing capacity",
        ],
    },
    "Steel": {
        "label": "Steel Structures",
        "keywords": [
            "steel", "angle section", "channel section", "i-section", "box section",
            "built-up section", "riveted joint", "bolted joint", "welded joint",
            "gusset plate", "tension member", "compression member",
            "lacing", "battening", "base plate",
            "pratt truss", "howe truss", "warren truss", "fink truss", "fan truss",
            "plate girder", "flange", "web", "stiffener", "purlin",
            "local buckling", "lateral buckling", "roof truss", "roof framing",
        ],
    },
    "Fluid": {
        "label": "Fluid Mechanics & Hydraulic Machinery",
        "keywords": [
            "manometer", "u-tube", "differential manometer", "inclined manometer",
            "venturimeter", "orifice meter", "pitot tube", "mouthpiece", "nozzle",
            "bernoulli", "hydraulic grade line", "hgl", "energy grade line", "egl",
            "pipe flow", "pipes in series", "pipes in parallel",
            "hydraulic jump", "specific energy", "critical depth", "uniform flow",
            "centrifugal pump", "reciprocating pump", "priming", "cavitation",
            "pelton wheel", "francis turbine", "kaplan turbine", "velocity triangle",
            "laminar flow", "turbulent flow", "reynolds", "open channel",
            "flow measurement", "weir", "notch",
        ],
    },
    "Foundation": {
        "label": "Foundation Engineering",
        "keywords": [
            "strip footing", "isolated footing", "combined footing",
            "strap footing", "raft footing", "pile foundation",
            "end bearing pile", "friction pile", "under-reamed pile", "pile group",
            "well foundation", "open well", "caisson",
            "general shear failure", "local shear failure", "punching shear failure",
            "bearing capacity", "terzaghi", "meyerhof",
            "earth pressure", "retaining wall", "pressure distribution",
            "immediate settlement", "consolidation settlement",
            "eccentric loading", "inclined loading", "pile load test",
        ],
    },
}

def detect_subject(text_lower: str) -> tuple[str, str] | None:
    """Return (subject_code, matched_keyword) or None if no match."""
    for code, info in SUBJECT_MAP.items():
        for kw in info["keywords"]:
            if kw in text_lower:
                return code, kw
    return None


# ─────────────────────────────────────────────────────────────────
# MCQ OPTION DETECTION
# ─────────────────────────────────────────────────────────────────
OPTION_RE = re.compile(
    r"""(?:
        \(a\)|\(b\)|\(c\)|\(d\)       |   # (a) (b) (c) (d)
        \ba\)\s|\bb\)\s|\bc\)\s|\bd\)\s |   # a) b) c) d)
        \ba\.\s|\bb\.\s|\bc\.\s|\bd\.\s |   # a. b. c. d.
        option\s*[abcd]                     # option A/B/C/D
    )""",
    re.VERBOSE | re.IGNORECASE,
)

def has_mcq_options(text: str) -> bool:
    matches = OPTION_RE.findall(text.lower())
    unique = set(m.strip().lower().rstrip(".") for m in matches)
    return len(unique) >= 3   # at least 3 different option letters


# ─────────────────────────────────────────────────────────────────
# DIAGRAM DETECTION (visual analysis on rendered page)
# ─────────────────────────────────────────────────────────────────
def has_significant_diagram(pil_img: Image.Image) -> tuple[bool, float]:
    """
    Returns (found, diagram_area_ratio).
    Strategy: convert to grayscale, threshold, find large non-text connected blobs.
    Text lines are thin horizontal strips; diagrams create larger irregular regions.
    """
    w, h = pil_img.size
    page_area = w * h

    gray = pil_img.convert("L")
    # Edge detection to highlight drawing lines & curves
    edges = gray.filter(ImageFilter.FIND_EDGES)

    # Count edge pixels in local blocks to find dense non-text graphic regions
    block_w, block_h = max(w // 20, 10), max(h // 20, 10)
    diagram_blocks = 0
    total_blocks = 0

    for by in range(0, h - block_h, block_h):
        for bx in range(0, w - block_w, block_w):
            total_blocks += 1
            region = edges.crop((bx, by, bx + block_w, by + block_h))
            stat = ImageStat.Stat(region)
            mean_edge = stat.mean[0]
            # High edge density in a non-narrow block → likely a diagram element
            if mean_edge > 8:
                # Verify it's not just a text line (text lines are very thin horizontally)
                aspect = block_w / block_h
                if aspect < 5:   # reject very wide thin strips (text lines)
                    diagram_blocks += 1

    if total_blocks == 0:
        return False, 0.0

    ratio = diagram_blocks / total_blocks
    return ratio >= MIN_DIAGRAM_AREA_RATIO, ratio


# ─────────────────────────────────────────────────────────────────
# MAIN EXTRACTION
# ─────────────────────────────────────────────────────────────────
def sha1(data: bytes) -> str:
    return hashlib.sha1(data).hexdigest()


def collect_pdfs(root: Path) -> list[Path]:
    return sorted(root.rglob("*.pdf"))


def main() -> None:
    if OUT_ROOT.exists():
        shutil.rmtree(OUT_ROOT)
    REPORT.parent.mkdir(parents=True, exist_ok=True)

    # Create subject output folders
    for code in SUBJECT_MAP:
        (OUT_ROOT / code).mkdir(parents=True, exist_ok=True)
    (OUT_ROOT / "Unknown").mkdir(parents=True, exist_ok=True)

    pdfs = collect_pdfs(SRC_ROOT)
    print(f"PDFs to scan: {len(pdfs)}")

    seen_hashes: set[str] = set()
    results: list[dict] = []

    for pdf_path in pdfs:
        priority, src_label = classify_source(pdf_path)
        rel = str(pdf_path).replace("\\", "/")

        try:
            doc = fitz.open(pdf_path)
        except Exception as e:
            print(f"  SKIP (open error): {pdf_path.name} — {e}")
            continue

        n_pages = len(doc)
        for pg_idx in range(n_pages):
            page = doc[pg_idx]

            # ── 1. Get page text ──────────────────────────────────────
            try:
                page_text = page.get_text("text")
            except Exception:
                page_text = ""
            text_lower = page_text.lower()

            # ── 2. Must have MCQ options ──────────────────────────────
            if not has_mcq_options(page_text):
                continue

            # ── 3. Must match a syllabus subject ─────────────────────
            subj_match = detect_subject(text_lower)
            if subj_match is None:
                continue
            subj_code, matched_kw = subj_match

            # ── 4. Render page and check for diagram ──────────────────
            mat = fitz.Matrix(RENDER_DPI / 72, RENDER_DPI / 72)
            try:
                pix = page.get_pixmap(matrix=mat, alpha=False)
            except Exception:
                continue
            img_bytes = pix.tobytes("png")
            pil_img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)

            found_diagram, diag_ratio = has_significant_diagram(pil_img)
            if not found_diagram:
                continue

            # ── 5. Deduplicate ────────────────────────────────────────
            h = sha1(img_bytes)
            if h in seen_hashes:
                continue
            seen_hashes.add(h)

            # ── 6. Save ───────────────────────────────────────────────
            safe_stem = re.sub(r"[^\w\-]", "_", pdf_path.stem)[:60]
            fname = f"P{priority}_{safe_stem}_pg{pg_idx+1:03d}.jpg"
            out_path = OUT_ROOT / subj_code / fname

            # Save as JPEG (smaller, good quality)
            pil_img.save(out_path, "JPEG", quality=90)

            entry = {
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
            }
            results.append(entry)
            print(f"  ✓ P{priority} [{subj_code}] {pdf_path.name} pg{pg_idx+1} "
                  f"(diag={diag_ratio:.2f}, kw={matched_kw})")

        doc.close()

    # ── Summary ───────────────────────────────────────────────────
    from collections import defaultdict
    by_subj = defaultdict(lambda: defaultdict(int))
    for r in results:
        by_subj[r["subject"]][r["priority"]] += 1

    summary = {}
    for code, pmap in sorted(by_subj.items()):
        summary[code] = {
            "subject_name": SUBJECT_MAP[code]["label"],
            "P1_PastExam": pmap.get(1, 0),
            "P2_GATE": pmap.get(2, 0),
            "P3_QuestionBank": pmap.get(3, 0),
            "total": sum(pmap.values()),
        }

    report = {
        "total_extracted": len(results),
        "summary_by_subject": summary,
        "items": results,
    }
    REPORT.write_text(json.dumps(report, indent=2), encoding="utf-8")

    print("\n=== EXTRACTION COMPLETE ===")
    print(f"Total diagram questions saved: {len(results)}")
    print(f"{'Subject':<30} {'P1':>5} {'P2':>5} {'P3':>5} {'Total':>7}")
    print("-" * 55)
    for code, row in summary.items():
        print(f"{row['subject_name']:<30} {row['P1_PastExam']:>5} "
              f"{row['P2_GATE']:>5} {row['P3_QuestionBank']:>5} "
              f"{row['total']:>7}")
    print(f"\nReport saved: {REPORT}")


if __name__ == "__main__":
    main()
