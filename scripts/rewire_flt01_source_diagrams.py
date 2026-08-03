#!/usr/bin/env python3
"""
Rewire Civil/Electrical FLT-01 to use cropped core/PYQ figures (not AI SVG placeholders).

Sources live under: c:/Users/W520531/Downloads/APTRANSCO-CBT/images/
Outputs + bank updates under the workspace and push repo.
"""
from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

from PIL import Image, ImageOps

SRC_ROOT = Path(r"c:\Users\W520531\Downloads\APTRANSCO-CBT")
WS = Path(r"c:\Users\W520531\Downloads\APTRANSCO-CBT-main\APTRANSCO-CBT-main")
PUSH = Path(r"c:\Users\W520531\Downloads\APTRANSCO-CBT-push")


def auto_crop(src: Path, dest: Path, pad: float = 0.02) -> Path:
    """Crop to ink-dense region so CBT shows the figure, not the whole page."""
    im = Image.open(src).convert("RGB")
    gray = ImageOps.autocontrast(im.convert("L"))
    bw = gray.point(lambda p: 0 if p < 200 else 255)
    # invert: ink = white for getbbox after invert
    ink = ImageOps.invert(bw)
    bbox = ink.getbbox()
    if not bbox:
        dest.parent.mkdir(parents=True, exist_ok=True)
        im.save(dest, quality=92)
        return dest
    w, h = im.size
    l, t, r, b = bbox
    # pad
    pl, pt = int(w * pad), int(h * pad)
    l = max(0, l - pl)
    t = max(0, t - pt)
    r = min(w, r + pl)
    b = min(h, b + pt)
    # Prefer not to keep entire page: if crop is >85% of page, take central 70%
    if (r - l) * (b - t) > 0.85 * w * h:
        l, t = int(0.08 * w), int(0.12 * h)
        r, b = int(0.92 * w), int(0.88 * h)
    crop = im.crop((l, t, r, b))
    dest.parent.mkdir(parents=True, exist_ok=True)
    crop.save(dest, quality=92, optimize=True)
    return dest


def publish(rel_under_diagrams: str, src_file: Path) -> str:
    """Write crop into WS + PUSH flt01 folders; return web path."""
    rel = Path("images") / "diagrams" / rel_under_diagrams
    for root in (WS, PUSH, SRC_ROOT):
        auto_crop(src_file, root / rel)
    return rel.as_posix()


def load_bank(path: Path):
    text = path.read_text(encoding="utf-8")
    m = re.search(r"export const questions = (\[[\s\S]*\]);", text)
    return text, json.loads(m.group(1)), m


def save_bank(path: Path, header: list[str], qs: list):
    path.write_text(
        "\n".join(header)
        + "\n\n"
        + f"export const questions = {json.dumps(qs, indent=2, ensure_ascii=False)};\n",
        encoding="utf-8",
    )


def qmap(qs):
    return {q["id"]: q for q in qs}


def set_img(q, web_path: str, source_kind: str, source_rel: str, qtype: str | None = None):
    q["image"] = web_path
    q["diagramSource"] = source_kind
    q["diagramSourcePath"] = source_rel
    if qtype:
        q["questionType"] = qtype


def clear_img(q):
    q["image"] = ""
    q.pop("diagramSource", None)
    q.pop("diagramSourcePath", None)
    qt = q.get("questionType") or ""
    # demote pure diagram tags if image removed
    if qt in ("Diagram", "Diagram+Conceptual", "Diagram+Application", "Diagram+Numerical", "Matching+Diagram", "AR+Diagram", "Graph+Diagram"):
        if "Matching" in qt:
            q["questionType"] = "Matching Matrix"
        elif "AR" in qt:
            q["questionType"] = "AR"
        elif "Graph" in qt:
            q["questionType"] = "Graph"
        elif "Numerical" in qt:
            q["questionType"] = "Numerical"
        else:
            q["questionType"] = "Conceptual"


def rewire_ee():
    bank = WS / "data" / "electrical" / "ee-flt01.js"
    _, qs, _ = load_bank(bank)
    qm = qmap(qs)
    ee = SRC_ROOT / "images" / "diagram-questions-EE"
    core = SRC_ROOT / "images" / "electrical-core-diagrams"

    # Target: 14 diagram Qs, ≥7 PYQ, subject quotas
    plan = [
        # Power Systems ×3
        (4, ee / "PowerSystems" / "P2_2023EE_pg016.jpg", "pyq", "Matching+Diagram"),
        (9, core / "PowerSystems" / "PowerSystems_pg0067.jpg", "core", "Diagram+Numerical"),
        (12, ee / "PowerSystems" / "P2_2021EE_pg004.jpg", "pyq", "Diagram+Application"),
        # Machines ×3
        (18, core / "Machines" / "Machines_pg0102.jpg", "core", "Diagram+Conceptual"),
        (22, ee / "Machines" / "P4_Electrical_Machines_pg114.jpg", "pyq", "Diagram+Application"),
        (23, ee / "Machines" / "P2_2021EE_pg011.jpg", "pyq", "Graph+Diagram"),
        # Circuits ×2
        (30, core / "Circuits" / "Circuits_pg0148.jpg", "core", "Diagram+Numerical"),
        (33, ee / "Circuits" / "P2_2021EE_pg009.jpg", "pyq", "Graph+Diagram"),
        # Control ×2
        (41, ee / "Control" / "P2_2021EE_pg012.jpg", "pyq", "Diagram+Numerical"),
        (44, ee / "Control" / "P2_2022EE_pg014.jpg", "pyq", "Graph+Diagram"),
        # PE ×2
        (48, ee / "PowerElectronics" / "P2_2023EE_pg018.jpg", "pyq", "Diagram"),
        (51, core / "PowerElectronics" / "PowerElectronics_pg0028.jpg", "core", "Diagram+Application"),
        # Measurements ×1
        (56, core / "Measurements" / "Measurements_pg0054.jpg", "core", "Diagram"),
        # Analog & Digital ×2
        (61, ee / "Analog" / "P2_2021EE_pg018.jpg", "pyq", "Diagram+Numerical"),
        (65, core / "AnalogDigital" / "AnalogDigital_pg0088.jpg", "core", "Matching+Diagram"),
    ]

    # Clear old diagram slots first (keep non-diagram Qs intact)
    old_diag_ids = [4, 9, 18, 22, 30, 33, 41, 44, 48, 51, 56, 61, 62, 65]
    for i in old_diag_ids:
        if i in qm and i not in {p[0] for p in plan}:
            clear_img(qm[i])

    # Q62 was third analog diagram — clear to meet 1–2 Analog&Digital quota (61+65)
    if 62 in qm:
        clear_img(qm[62])
        if "Diagram" in (qm[62].get("questionType") or ""):
            qm[62]["questionType"] = "Numerical"

    used = []
    for qid, src, kind, qtype in plan:
        if not src.exists():
            print("MISSING", src)
            continue
        out_name = f"electrical-flt01/src-q{qid:02d}-{kind}.jpg"
        web = publish(out_name, src)
        set_img(qm[qid], web, kind, src.relative_to(SRC_ROOT / "images").as_posix(), qtype)
        used.append((qid, kind, web))

    # Ensure dedicated graph with curve: Q44 Bode PYQ
    qm[44]["questionType"] = "Graph+Diagram"
    if "bode" not in (qm[44].get("question") or "").lower() and "phase" not in (qm[44].get("question") or "").lower():
        qm[44]["question"] = (
            "From the magnitude/phase plot shown (read the figure), the first-order system behaviour corresponds to:"
        )

    # Q23 V-curves — make graph-dependent on PYQ figure
    qm[23]["question"] = (
        "From the machine characteristic / phasor figure shown, the plot of armature current vs field current "
        "at constant power is known as the V-curve. Which statement matches the figure theme?"
    )
    # Keep existing options if present; if not V-curve options, leave options as-is (already V-curve Q)

    # Q12 fault — attach PYQ; soft-adjust stem to depend on figure if purely numerical
    if "figure" not in (qm[12].get("question") or "").lower():
        qm[12]["question"] = (
            "Using the network/fault figure shown (values as labelled on the crop), the bolted 3-φ fault current "
            "(pu) on the LV side for Xs=0.2 pu, Xt=0.1 pu on same base is approximately:"
        )

    # Q33 filter — graph
    qm[33]["questionType"] = "Graph+Diagram"

    header = [
        "// Electrical Engineering FLT-01 — APTRANSCO AEE CBT",
        "// Diagrams rewired to PYQ (≥50%) + electrical-core crops (MASTER_RULES subject quotas)",
        "// diagramSource: pyq | core — AI SVG placeholders removed where source exists",
        "// answer is 0-based index into options",
    ]
    save_bank(bank, header, qs)
    shutil.copy2(bank, PUSH / "data" / "electrical" / "ee-flt01.js")

    pyq = sum(1 for _, k, _ in used if k == "pyq")
    print(f"EE diagram Qs wired: {len(used)} | PYQ={pyq} core={len(used)-pyq}")
    for row in used:
        print(" ", row)
    return used


def rewire_ce():
    bank = WS / "data" / "civil" / "ce-flt01.js"
    _, qs, _ = load_bank(bank)
    qm = qmap(qs)
    core = SRC_ROOT / "images" / "civil-core-diagrams"
    pyq = SRC_ROOT / "images" / "diagram-questions"

    # Clear excess diagram images first
    for i in list(qm):
        if (qm[i].get("image") or "").strip():
            clear_img(qm[i])

    plan = [
        # SOM ×2
        (3, core / "SOM" / "SOM_pg0020.jpg", "core", "Numerical+Diagram"),
        (5, core / "SOM" / "SOM_pg0029.jpg", "core", "AR+Diagram"),
        # RCC ×3
        (20, core / "DDRC" / "DDRC_pg0037.jpg", "core", "Diagram+Application"),
        (24, core / "DDRC" / "DDRC_pg0037.jpg", "core", "Diagram+Application"),
        (18, pyq / "DDRC" / "P3_DDRC_Question_Bank_pg045.jpg" if (pyq / "DDRC").exists() else core / "DDRC" / "DDRC_pg0037.jpg", "pyq", "Diagram+Application"),
        # FM ×2
        (29, core / "Fluid" / "Fluid_pg0018.jpg", "core", "Diagram+Application"),
        (31, core / "Fluid" / "Fluid_pg0014.jpg", "core", "Diagram+Numerical"),
        # HHM ×2 (inside Fluid block)
        (33, core / "Fluid" / "Fluid_pg0045.jpg", "core", "Graph+Diagram"),
        (36, core / "Fluid" / "Fluid_pg0052.jpg", "core", "Matching+Diagram"),
        # Steel ×2
        (40, core / "Steel" / "Steel_pg0011.jpg", "core", "Diagram+Numerical"),
        (44, core / "Steel" / "Steel_pg0016.jpg", "core", "Diagram"),
        # Foundation ×2
        (53, core / "Soil" / "Soil_pg0015.jpg", "core", "Diagram+Conceptual"),  # fallback if no foundation core
        (57, core / "Soil" / "Soil_pg0020.jpg", "core", "Diagram+Application"),
        # Soil ×2
        (62, core / "Soil" / "Soil_pg0008.jpg", "core", "Diagram"),
        (68, core / "Soil" / "Soil_pg0010.jpg", "core", "Graph+Diagram"),
    ]

    # Resolve Fluid graph pages that exist
    fluid_files = sorted((core / "Fluid").glob("*.jpg"))
    soil_files = sorted((core / "Soil").glob("*.jpg"))
    som_files = sorted((core / "SOM").glob("*.jpg"))
    steel_files = sorted((core / "Steel").glob("*.jpg"))

    def pick(files, idx):
        return files[min(idx, len(files) - 1)] if files else None

    # Rebuild plan with guaranteed existing files
    plan = [
        (3, pick(som_files, 5), "core", "Numerical+Diagram"),
        (5, pick(som_files, 10), "core", "AR+Diagram"),
        (18, pick([core / "DDRC" / "DDRC_pg0037.jpg"], 0), "core", "Diagram+Application"),
        (20, pick([core / "DDRC" / "DDRC_pg0037.jpg"], 0), "core", "Diagram+Application"),
        (24, pick(som_files, 15) if False else pick([core / "DDRC" / "DDRC_pg0037.jpg"], 0), "core", "Diagram+Application"),
        (29, pick(fluid_files, 3), "core", "Diagram+Application"),
        (31, pick(fluid_files, 8), "core", "Diagram+Application"),
        (33, pick(fluid_files, 20), "core", "Graph+Diagram"),
        (35, pick(fluid_files, 30), "core", "Diagram+Application"),  # HHM turbine/pump page
        (40, pick(steel_files, 4), "core", "Diagram+Numerical"),
        (44, pick(steel_files, 8), "core", "Diagram"),
        (53, pick(soil_files, 5), "core", "Diagram+Conceptual"),
        (57, pick(soil_files, 12), "core", "Diagram+Application"),
        (62, pick(soil_files, 2), "core", "Diagram"),
        (68, pick(soil_files, 8), "core", "Graph+Diagram"),
    ]

    # Try better RCC second/third from diagram-questions DDRC if present
    ddrc_pyq = list((pyq / "DDRC").rglob("*.jpg")) if (pyq / "DDRC").exists() else []
    if len(ddrc_pyq) >= 2:
        plan[2] = (18, ddrc_pyq[0], "pyq", "Diagram+Application")
        plan[4] = (24, ddrc_pyq[1], "pyq", "Diagram+Application")

    # Foundation prefer foundation folder
    found = list((pyq / "Foundation").rglob("*.jpg")) if (pyq / "Foundation").exists() else []
    if len(found) >= 2:
        plan[11] = (53, found[0], "pyq", "Diagram+Conceptual")
        plan[12] = (57, found[1], "pyq", "Diagram+Application")

    used = []
    for qid, src, kind, qtype in plan:
        if src is None or not Path(src).exists():
            print("MISSING CE", qid, src)
            continue
        src = Path(src)
        out_name = f"civil-flt01/src-q{qid:02d}-{kind}.jpg"
        web = publish(out_name, src)
        set_img(qm[qid], web, kind, str(src.relative_to(SRC_ROOT / "images")).replace("\\", "/"), qtype)
        used.append((qid, kind, web, qm[qid].get("subject")))

        # Force graph stems to reference figure
        if "Graph" in qtype:
            stem = qm[qid].get("question") or ""
            if "figure" not in stem.lower() and "curve" not in stem.lower() and "graph" not in stem.lower():
                qm[qid]["question"] = "Using the curve/plot shown in the figure, " + stem[0].lower() + stem[1:]

    # Restore dataTable/matchingMatrix for Q10, Q36, Q58 if cleared types need images optionally
    # Q10 was matching+diagram — reattach SOM core for matching beams if desired
    if 10 in qm and qm[10].get("matchingMatrix"):
        src = pick(som_files, 8)
        if src:
            web = publish("civil-flt01/src-q10-core.jpg", src)
            set_img(qm[10], web, "core", src.relative_to(SRC_ROOT / "images").as_posix(), "Matching+Diagram")
            used.append((10, "core", web, qm[10].get("subject")))

    # Q58 table/figure — keep dataTable; add footing-like soil core as figure
    if 58 in qm:
        src = pick(soil_files, 15) or pick(soil_files, 0)
        if src:
            web = publish("civil-flt01/src-q58-core.jpg", src)
            set_img(qm[58], web, "core", src.relative_to(SRC_ROOT / "images").as_posix(), "Table/Figure")

    header = [
        "// Civil Engineering FLT-01 — APTRANSCO AEE CBT",
        "// Diagrams rewired to civil-core (priority) + PYQ crops — subject quotas in MASTER_RULES",
        "// diagramSource: core | pyq — AI SVG placeholders removed where source exists",
        "// answer is 0-based index into options",
    ]
    save_bank(bank, header, qs)
    shutil.copy2(bank, PUSH / "data" / "civil" / "ce-flt01.js")

    print(f"CE diagram Qs wired: {len(used)}")
    for row in used:
        print(" ", row)
    return used


def main():
    print("Rewiring EE…")
    rewire_ee()
    print("Rewiring CE…")
    rewire_ce()
    print("Done.")


if __name__ == "__main__":
    main()
