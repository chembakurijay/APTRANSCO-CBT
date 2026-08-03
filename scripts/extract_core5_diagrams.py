"""
Civil Core-5 — Vector PDF Diagram Page Extractor
=================================================
PDFs store text as vector paths (non-searchable). Uses vector drawing
analysis and visual rendering to detect pages with engineering diagrams.
A page passes when it has diagonal/curved paths (diagram indicator) spread
across multiple layout zones (diagram zone + question text zone).
"""

import json
import shutil
from collections import defaultdict
from pathlib import Path

import fitz
from PIL import Image

SOURCE_FILES = {
    "SOM":   "sourcefiles-ce/Aptransco_sourcefiles/Civil/SOM.pdf",
    "DDRC":  "sourcefiles-ce/Aptransco_sourcefiles/Civil/DDRC.pdf",
    "Steel": "sourcefiles-ce/Aptransco_sourcefiles/Civil/Steel Structures.pdf",
    "Fluid": "sourcefiles-ce/Aptransco_sourcefiles/Civil/FM&HHM.pdf",
    "Soil":  "sourcefiles-ce/Aptransco_sourcefiles/Civil/Geotech.pdf",
}

OUT_ROOT    = Path("images/civil-core-diagrams")
REPORT_PATH = Path("scripts/civil_core_diag_report.json")
RENDER_DPI  = 200

# A text glyph path is tiny (< 2% of page width or height).
# A real diagram element (beam, SFD line, column, section) spans > 5% of the page.
# LARGE_THRESHOLD: path bounding box must be > this fraction of page dimension.
LARGE_THRESHOLD = 0.05   # 5% of page width or height
MIN_LARGE_PATHS = 40     # pages with <40 large paths are mostly text, not diagram pages
MAX_LARGE_PATHS = 300    # cap: avoid full-page illustration-only pages (no questions)
# Also need evidence of question text: many small paths alongside large ones
MIN_SMALL_PATHS = 200    # text characters give hundreds of small paths


def analyse_page(page) -> dict:
    drawings = page.get_drawings()
    pw = page.rect.width
    ph = page.rect.height

    large = 0   # paths spanning > 5% of page dimension (diagram elements)
    small = 0   # paths spanning < 2% of page dimension (text glyphs)
    total = len(drawings)

    for d in drawings:
        r = d.get("rect")
        if not r:
            continue
        rel_w = r.width  / pw
        rel_h = r.height / ph
        span  = max(rel_w, rel_h)
        if span >= LARGE_THRESHOLD:
            large += 1
        elif span < 0.02:
            small += 1

    return {"total": total, "large": large, "small": small}


def is_diagram_page(s: dict) -> tuple[bool, str]:
    if s["large"] < MIN_LARGE_PATHS:
        return False, f"few_large={s['large']}"
    if s["large"] > MAX_LARGE_PATHS:
        return False, f"too_many_large={s['large']}"
    if s["small"] < MIN_SMALL_PATHS:
        return False, f"few_small={s['small']}"
    return True, f"large={s['large']},small={s['small']},total={s['total']}"


def main() -> None:
    if OUT_ROOT.exists():
        shutil.rmtree(OUT_ROOT)
    REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)

    results: list[dict] = []
    summary: dict       = {}

    for subject, pdf_str in SOURCE_FILES.items():
        pdf_path = Path(pdf_str)
        if not pdf_path.exists():
            print(f"MISSING: {pdf_str}")
            continue

        (OUT_ROOT / subject).mkdir(parents=True, exist_ok=True)
        doc     = fitz.open(pdf_path)
        n_total = len(doc)
        saved   = 0
        rejects = defaultdict(int)

        for idx in range(n_total):
            page  = doc[idx]
            stats = analyse_page(page)
            ok, note = is_diagram_page(stats)
            if not ok:
                rejects[note.split("=")[0]] += 1
                continue

            mat = fitz.Matrix(RENDER_DPI / 72, RENDER_DPI / 72)
            pix = page.get_pixmap(matrix=mat, alpha=False)
            img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)

            fname = f"{subject}_pg{idx+1:04d}.jpg"
            opath = OUT_ROOT / subject / fname
            img.save(opath, "JPEG", quality=93)

            results.append({
                "subject":        subject,
                "source":         pdf_str,
                "page":           idx + 1,
                "large_paths":    stats["large"],
                "small_paths":    stats["small"],
                "file":           str(opath).replace("\\", "/"),
            })
            saved += 1
            print(f"  ✓ [{subject}] pg{idx+1:04d}  {note}")

        doc.close()
        summary[subject] = {
            "source":         pdf_str,
            "total_pages":    n_total,
            "diagram_saved":  saved,
            "rejected":       dict(rejects),
        }
        print(f"  → [{subject}]  saved={saved} / total={n_total}\n")

    REPORT_PATH.write_text(
        json.dumps({"total": len(results), "summary": summary, "items": results}, indent=2),
        encoding="utf-8",
    )

    print("=" * 60)
    print(f"Total diagram pages: {len(results)}")
    for s, d in summary.items():
        print(f"  {s:6s}: {d['diagram_saved']:3d} / {d['total_pages']:3d}")
    print(f"\nImages → {OUT_ROOT}/\nReport → {REPORT_PATH}")


if __name__ == "__main__":
    main()
