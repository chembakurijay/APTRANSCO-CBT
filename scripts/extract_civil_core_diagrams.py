"""
Civil Core-5 — Vector PDF Diagram Page Extractor v2
========================================
Scans exactly 5 approved source textbooks for pages that contain BOTH:
  a) A real engineering diagram (graphic region >= MIN_DIAG_RATIO of page)
  b) MCQ option markers (A, B, C, D)
  c) At least one APTRANSCO-syllabus keyword

Output is organised by subject folder with a full audit report.
"""

import hashlib
import json
import re
import shutil
from collections import defaultdict
from pathlib import Path

import fitz
from PIL import Image, ImageFilter, ImageStat

# ── Config ─────────────────────────────────────────────────────────────────
SOURCE_FILES = {
    "DDRC":   "sourcefiles-ce/Aptransco_sourcefiles/Civil/DDRC.pdf",
    "SOM":    "sourcefiles-ce/Aptransco_sourcefiles/Civil/SOM.pdf",
    "Soil":   "sourcefiles-ce/Aptransco_sourcefiles/Civil/Geotech.pdf",
    "Steel":  "sourcefiles-ce/Aptransco_sourcefiles/Civil/Steel Structures.pdf",
    "Fluid":  "sourcefiles-ce/Aptransco_sourcefiles/Civil/FM&HHM.pdf",
}

OUT_ROOT    = Path("images/civil-core-diagrams")
REPORT_PATH = Path("scripts/civil_core_diag_report.json")
RENDER_DPI  = 200          # higher DPI for crisper saves
MIN_DIAG_RATIO = 0.07      # diagram region >= 7% of page area

# ── Syllabus keywords per subject ─────────────────────────────────────────
KEYWORDS = {
    "DDRC": [
        "reinforced concrete", "rcc", "singly reinforced", "doubly reinforced",
        "balanced section", "neutral axis", "stress block", "limit state",
        "stirrups", "bent-up", "curtailment", "development length", "anchorage",
        "lap splice", "one-way slab", "two-way slab", "t-beam", "l-beam",
        "isolated footing", "combined footing", "column reinforcement",
        "is 456", "shear crack", "flexural crack", "design of beam",
        "modular ratio", "moment of resistance",
    ],
    "SOM": [
        "shear force", "bending moment", "sfd", "bmd", "axial force",
        "simply supported", "cantilever", "overhanging", "fixed beam",
        "udl", "uvl", "point load", "neutral axis", "bending stress",
        "shear stress", "torsion", "buckling", "euler", "mohr circle",
        "principal stress", "deflection", "slope", "strain energy",
        "moment of inertia", "section modulus", "stress-strain",
        "elastic", "plastic", "poisson", "young's modulus",
    ],
    "Soil": [
        "soil", "phase diagram", "void ratio", "porosity", "saturation",
        "grain size", "sieve analysis", "atterberg limit", "liquid limit",
        "plastic limit", "shrinkage limit", "compaction", "proctor",
        "permeability", "constant head", "falling head", "flow net",
        "seepage", "consolidation", "oedometer", "settlement",
        "shear strength", "direct shear", "triaxial", "vane shear",
        "mohr circle", "failure envelope", "earth pressure", "active",
        "passive", "rankine", "coulomb", "retaining wall",
    ],
    "Steel": [
        "steel", "angle section", "channel section", "i-section",
        "riveted", "bolted", "welded", "gusset plate",
        "tension member", "compression member", "lacing", "battening",
        "base plate", "pratt truss", "howe truss", "warren truss",
        "plate girder", "flange", "web", "stiffener", "purlin",
        "buckling", "lateral torsional", "roof truss", "slenderness",
    ],
    "Fluid": [
        "manometer", "venturimeter", "orifice", "pitot tube", "weir",
        "notch", "bernoulli", "hydraulic grade line", "hgl", "egl",
        "pipe flow", "hydraulic jump", "critical depth", "specific energy",
        "centrifugal pump", "reciprocating pump", "cavitation",
        "pelton", "francis", "kaplan", "velocity triangle",
        "reynolds", "laminar", "turbulent", "open channel",
    ],
}

OPTION_RE = re.compile(
    r"(?:\(a\)|\(b\)|\(c\)|\(d\)|"
    r"\ba\)\s|\bb\)\s|\bc\)\s|\bd\)\s|"
    r"\ba\.\s|\bb\.\s|\bc\.\s|\bd\.\s)",
    re.IGNORECASE,
)


def has_mcq(text: str) -> bool:
    hits = set()
    for m in OPTION_RE.finditer(text.lower()):
        ch = m.group().strip().lower().rstrip(").").strip()
        hits.add(ch)
    return len(hits) >= 3


def has_diagram(pil_img: Image.Image) -> tuple[bool, float]:
    w, h = pil_img.size
    gray  = pil_img.convert("L")
    edges = gray.filter(ImageFilter.FIND_EDGES)
    bw, bh = max(w // 20, 10), max(h // 20, 10)
    diag = tot = 0
    for by in range(0, h - bh, bh):
        for bx in range(0, w - bw, bw):
            tot += 1
            r = edges.crop((bx, by, bx + bw, by + bh))
            if ImageStat.Stat(r).mean[0] > 7 and (bw / bh) < 5:
                diag += 1
    ratio = diag / max(tot, 1)
    return ratio >= MIN_DIAG_RATIO, round(ratio, 3)


def sha1(data: bytes) -> str:
    return hashlib.sha1(data).hexdigest()


def slugify(text: str) -> str:
    return re.sub(r"[^\w]", "_", text.lower()).strip("_")[:50]


def main() -> None:
    if OUT_ROOT.exists():
        shutil.rmtree(OUT_ROOT)
    REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)

    seen: set[str] = set()
    results: list[dict] = []
    subject_stats: dict[str, dict] = {}

    for subject, pdf_path_str in SOURCE_FILES.items():
        pdf_path = Path(pdf_path_str)
        if not pdf_path.exists():
            print(f"  MISSING: {pdf_path_str}")
            continue

        out_dir = OUT_ROOT / subject
        out_dir.mkdir(parents=True, exist_ok=True)
        kws = KEYWORDS[subject]

        try:
            doc = fitz.open(pdf_path)
        except Exception as e:
            print(f"  ERROR opening {pdf_path.name}: {e}")
            continue

        n_pages = len(doc)
        n_saved = n_mcq_no_diag = n_diag_no_mcq = n_no_kw = 0

        for pg in range(n_pages):
            page = doc[pg]
            try:
                text = page.get_text("text") or ""
            except Exception:
                text = ""

            text_lower = text.lower()

            # keyword gate first (cheap)
            matched_kw = next((k for k in kws if k in text_lower), None)
            if matched_kw is None:
                n_no_kw += 1
                continue

            # MCQ gate
            if not has_mcq(text):
                n_diag_no_mcq += 1
                continue

            # render and check diagram
            mat = fitz.Matrix(RENDER_DPI / 72, RENDER_DPI / 72)
            try:
                pix = page.get_pixmap(matrix=mat, alpha=False)
            except Exception:
                continue

            img_bytes = pix.tobytes("png")
            pil_img   = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)

            found, ratio = has_diagram(pil_img)
            if not found:
                n_mcq_no_diag += 1
                continue

            h = sha1(img_bytes)
            if h in seen:
                continue
            seen.add(h)

            fname = f"{subject}_pg{pg+1:04d}.jpg"
            out_path = out_dir / fname
            pil_img.save(out_path, "JPEG", quality=92)

            results.append({
                "subject":        subject,
                "source_file":    pdf_path_str,
                "page":           pg + 1,
                "matched_keyword": matched_kw,
                "diagram_ratio":  ratio,
                "output_file":    str(out_path).replace("\\", "/"),
                "sha1":           h,
            })
            n_saved += 1
            print(f"  ✓ [{subject}] pg{pg+1} (diag={ratio}, kw={matched_kw})")

        doc.close()
        subject_stats[subject] = {
            "source":           pdf_path_str,
            "total_pages":      n_pages,
            "diagram_questions_extracted": n_saved,
            "rejected_no_keyword": n_no_kw,
            "rejected_no_mcq":  n_mcq_no_diag,
            "rejected_no_diagram": n_mcq_no_diag,
        }
        print(f"  [{subject}] {n_pages} pages → {n_saved} diagram-questions saved")

    report = {
        "sources_scanned": list(SOURCE_FILES.keys()),
        "total_extracted":  len(results),
        "by_subject":       subject_stats,
        "items":            results,
    }
    REPORT_PATH.write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(f"\nDone. {len(results)} diagram-question pages saved to {OUT_ROOT}/")
    print(f"Report: {REPORT_PATH}")


if __name__ == "__main__":
    main()
