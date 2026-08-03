#!/usr/bin/env python3
"""Fix CE bank header corruption + apply tighter manual crops for key FLT-01 figures."""
from __future__ import annotations

import json
import re
from pathlib import Path

from PIL import Image

WS = Path(r"c:\Users\W520531\Downloads\APTRANSCO-CBT-main\APTRANSCO-CBT-main")
PUSH = Path(r"c:\Users\W520531\Downloads\APTRANSCO-CBT-push")
SRC = Path(r"c:\Users\W520531\Downloads\APTRANSCO-CBT")


def save_bank(path: Path, header: list[str], qs: list):
    path.write_text(
        "\n".join(header)
        + "\n\n"
        + f"export const questions = {json.dumps(qs, indent=2, ensure_ascii=False)};\n",
        encoding="utf-8",
    )


def fix_ce_header():
    for root in (WS, PUSH):
        path = root / "data" / "civil" / "ce-flt01.js"
        raw = path.read_text(encoding="utf-8")
        # recover questions array even if header is broken
        m = re.search(r"export const questions = (\[[\s\S]*\]);", raw)
        if not m:
            raise SystemExit(f"no questions in {path}")
        qs = json.loads(m.group(1))
        # ensure Q10 matching without SOM diagram quota break
        q10 = next(q for q in qs if q["id"] == 10)
        q10["image"] = ""
        q10["questionType"] = "Matching Matrix"
        q10.pop("diagramSource", None)
        q10.pop("diagramSourcePath", None)
        header = [
            "// Civil Engineering FLT-01 — APTRANSCO AEE CBT",
            "// Diagrams rewired to civil-core (priority) + PYQ crops — subject quotas in MASTER_RULES",
            "// SOM diagram count = 2 (Q3, Q5); Q10 matching without extra SOM diagram",
            "// answer is 0-based index into options",
        ]
        save_bank(path, header, qs)
        print("fixed header", path)


def frac_crop(src: Path, dest: Path, box):
    """box = (l,t,r,b) as fractions 0-1 of width/height."""
    im = Image.open(src).convert("RGB")
    w, h = im.size
    l, t, r, b = box
    crop = im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))
    dest.parent.mkdir(parents=True, exist_ok=True)
    crop.save(dest, quality=92, optimize=True)


def publish_crop(rel: str, src: Path, box):
    for root in (WS, PUSH, SRC):
        frac_crop(src, root / "images" / "diagrams" / rel, box)


def tighter_crops():
    ee = SRC / "images" / "diagram-questions-EE"
    core_e = SRC / "images" / "electrical-core-diagrams"
    core_c = SRC / "images" / "civil-core-diagrams"

    # EE — crop figure regions (fractions tuned for known pages)
    publish_crop(
        "electrical-flt01/src-q44-pyq.jpg",
        ee / "Control" / "P2_2022EE_pg014.jpg",
        (0.08, 0.14, 0.92, 0.52),  # Bode plot block
    )
    publish_crop(
        "electrical-flt01/src-q22-pyq.jpg",
        ee / "Machines" / "P4_Electrical_Machines_pg114.jpg",
        (0.05, 0.55, 0.48, 0.78),  # Q12 long-line schematic
    )
    publish_crop(
        "electrical-flt01/src-q41-pyq.jpg",
        ee / "Control" / "P2_2021EE_pg012.jpg",
        (0.08, 0.42, 0.92, 0.78),  # block diagram Q11
    )
    publish_crop(
        "electrical-flt01/src-q09-core.jpg",
        core_e / "PowerSystems" / "PowerSystems_pg0067.jpg",
        (0.05, 0.08, 0.95, 0.55),
    )
    publish_crop(
        "electrical-flt01/src-q18-core.jpg",
        core_e / "Machines" / "Machines_pg0102.jpg",
        (0.05, 0.08, 0.95, 0.55),
    )
    publish_crop(
        "electrical-flt01/src-q30-core.jpg",
        core_e / "Circuits" / "Circuits_pg0148.jpg",
        (0.05, 0.08, 0.95, 0.60),
    )
    publish_crop(
        "electrical-flt01/src-q51-core.jpg",
        core_e / "PowerElectronics" / "PowerElectronics_pg0028.jpg",
        (0.05, 0.08, 0.95, 0.55),
    )
    publish_crop(
        "electrical-flt01/src-q56-core.jpg",
        core_e / "Measurements" / "Measurements_pg0054.jpg",
        (0.05, 0.08, 0.95, 0.55),
    )
    publish_crop(
        "electrical-flt01/src-q65-core.jpg",
        core_e / "AnalogDigital" / "AnalogDigital_pg0088.jpg",
        (0.05, 0.08, 0.95, 0.55),
    )

    # Other EE PYQ pages — take upper technical figure band
    for qid, relsrc in [
        (4, ee / "PowerSystems" / "P2_2023EE_pg016.jpg"),
        (12, ee / "PowerSystems" / "P2_2021EE_pg004.jpg"),
        (23, ee / "Machines" / "P2_2021EE_pg011.jpg"),
        (33, ee / "Circuits" / "P2_2021EE_pg009.jpg"),
        (48, ee / "PowerElectronics" / "P2_2023EE_pg018.jpg"),
        (61, ee / "Analog" / "P2_2021EE_pg018.jpg"),
    ]:
        if relsrc.exists():
            publish_crop(f"electrical-flt01/src-q{qid:02d}-pyq.jpg", relsrc, (0.06, 0.12, 0.94, 0.62))

    # Civil core — prefer upper/mid diagram band (textbook pages are dense)
    ce_map = {
        3: (core_c / "SOM" / "SOM_pg0020.jpg", (0.05, 0.08, 0.55, 0.55)),
        5: (core_c / "SOM" / "SOM_pg0029.jpg", (0.05, 0.08, 0.55, 0.55)),
        29: (None, (0.05, 0.10, 0.55, 0.70)),
        33: (None, (0.45, 0.08, 0.95, 0.55)),
        40: (None, (0.05, 0.08, 0.55, 0.55)),
        44: (None, (0.05, 0.08, 0.55, 0.50)),
        62: (None, (0.05, 0.08, 0.55, 0.55)),
        68: (None, (0.45, 0.08, 0.95, 0.55)),
    }
    # resolve current assigned sources from WS filenames by reading bank
    bank = WS / "data" / "civil" / "ce-flt01.js"
    qs = json.loads(re.search(r"export const questions = (\[[\s\S]*\]);", bank.read_text(encoding="utf-8")).group(1))
    for q in qs:
        src_rel = q.get("diagramSourcePath")
        img = q.get("image") or ""
        if not src_rel or not img.endswith(".jpg"):
            continue
        src = SRC / "images" / src_rel
        if not src.exists():
            continue
        # default tighter band
        box = (0.05, 0.10, 0.95, 0.58)
        if q["id"] in (3, 5):
            box = (0.04, 0.06, 0.52, 0.52)
        elif q["id"] in (33, 68):
            box = (0.40, 0.08, 0.96, 0.55)  # often right-column graphs
        elif "Steel" in (q.get("subject") or ""):
            box = (0.04, 0.06, 0.55, 0.55)
        elif "Fluid" in (q.get("subject") or ""):
            box = (0.04, 0.08, 0.55, 0.65)
        rel = Path(img).relative_to("images/diagrams").as_posix()
        publish_crop(rel, src, box)
        print("recropped CE", q["id"], rel)

    print("tighter crops done")


if __name__ == "__main__":
    fix_ce_header()
    tighter_crops()
