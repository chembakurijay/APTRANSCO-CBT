# -*- coding: utf-8 -*-
"""Clean FLT-03 stem corruption + rewrite near-clone; re-sync Non-core."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(r"c:\Users\W520531\Downloads\APTRANSCO-CBT-main\APTRANSCO-CBT-main")


def load(path: Path):
    text = path.read_text(encoding="utf-8")
    m = re.search(r"export const questions = (\[[\s\S]*\]);", text)
    return text[: m.start()], json.loads(m.group(1))


def save(path: Path, header: str, qs: list):
    path.write_text(
        header + "export const questions = " + json.dumps(qs, indent=2, ensure_ascii=False) + ";\n",
        encoding="utf-8",
    )


# Exact stem replacements (before dual-param re-append is already present for imaged Qs)
CE_FIX = {
    22: (
        "A 300 mm square short tied column carries factored Pu=900 kN. "
        "Average factored stress Pu/Ag is nearest to:"
    ),
    30: (
        "The shown venturimeter has D1=0.2 m, D2=0.1 m, Cd=0.98 and manometer head h=0.25 m of water. "
        "Discharge is nearest to: Figure values (also stated here): D1=0.2; D2=0.1; Cd=0.98; h=0.25 m."
    ),
    33: (
        "The shown jump has y1=0.4 m and Fr1=2.5. Sequent depth y2 is nearest to: "
        "Figure values (also stated here): y1=0.4 m; Fr1=2.5."
    ),
}

EE_FIX = {
    9: (
        "For the equal-area curve shown, Pm = 1.0 pu, Pe,max = 1.8 pu and δ0 = 30°. "
        "The pre-fault operating angle is nearest to: "
        "Figure values (also stated here): Pm=1.0; Pemax=1.8; d0=30 deg."
    ),
    18: (
        "On the torque-slip diagram, maximum torque occurs at s = 0.20 while rated slip is 0.04. "
        "In the normal stable operating region, an increase in load torque causes slip to: "
        "Figure values (also stated here): Tmax at s=0.20."
    ),
    41: (
        "For a unity-feedback plant with open-loop transfer function G(s)=K/[s(s+4)], "
        "the steady-state error to a unit-ramp input is:"
    ),
    61: (
        "The shown inverting op-amp has Rin=10 kΩ, Rf=100 kΩ and Vin=0.5 V. Ideal Vout is: "
        "Figure values (also stated here): Rin=10k; Rf=100k; Vin=0.5."
    ),
}


def main():
    h, ce = load(ROOT / "data" / "civil" / "ce-flt03.js")
    for qid, stem in CE_FIX.items():
        ce[qid - 1]["question"] = stem
        assert ce[qid - 1]["id"] == qid
    save(ROOT / "data" / "civil" / "ce-flt03.js", h, ce)

    h, ee = load(ROOT / "data" / "electrical" / "ee-flt03.js")
    for qid, stem in EE_FIX.items():
        ee[qid - 1]["question"] = stem
        assert ee[qid - 1]["id"] == qid
    # Q41 options: for G=K/[s(s+4)], Kv=K/4, ess=1/Kv = 4/K → not a fixed number in options.
    # Original options were Zero/Infinite/One/0.5 for step Type-1.
    # New stem is ramp error for type-1 → finite nonzero (4/K). Rework options:
    ee[40]["options"] = ["4/K", "Zero", "Infinite", "K/4"]
    ee[40]["answer"] = 0
    ee[40]["questionType"] = "Numerical"
    ee[40]["topic"] = "Steady-state error (ramp)"
    # explanation if present
    if "explanation" in ee[40]:
        ee[40]["explanation"] = (
            "Type-1 system: ess to ramp = 1/Kv. Here Kv = lim sG = K/4, so ess = 4/K."
        )

    # re-sync non-core from CE
    for i in range(70, 100):
        ee[i] = json.loads(json.dumps(ce[i]))
        ee[i]["id"] = i + 1
        ee[i]["source"] = "ELECTRICAL_FLT03_v1"
    save(ROOT / "data" / "electrical" / "ee-flt03.js", h, ee)
    print("cleaned stems + Q41 rewrite + Non-core sync")


if __name__ == "__main__":
    main()
