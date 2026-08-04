# -*- coding: utf-8 -*-
"""Fail-closed quality gates for FLT and ST-HY question banks."""
from __future__ import annotations

import argparse
import json
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(r"c:\Users\W520531\Downloads\APTRANSCO-CBT-main\APTRANSCO-CBT-main")

BANNED = [
    "does not satisfy the governing relation",
    "typical slip that forgets the governing",
    "governing result for this stem",
    "recompute with the same governing relation",
    "mixes up a neighbouring syllabus result with the stem",
    "under the given data/conditions the governing check yields",
]

ALLOWED_DIAG_SRC = {"pyq", "core", "bank", "schematic-last-resort", "schematic-matched", "schematic-family"}

ST_THEME_MIN = {
    "som": ["SOM-01", "SOM-02", "SOM-03", "SOM-04", "SOM-05"],
    "rcc": ["RCC-01", "RCC-02", "RCC-04", "RCC-05", "RCC-07"],
    "fm": ["FM-01", "FM-02", "FM-03", "HHM-01", "HHM-02"],
    "steel": ["ST-01", "ST-02", "ST-03", "ST-04", "ST-08"],
    "fe": ["FE-01", "FE-02", "FE-03", "FE-04"],
    "soil": ["SM-01", "SM-05", "SM-06", "SM-03", "SM-08"],
    "ps": ["PS-01", "PS-04", "PS-05", "UT-01"],
    "em": ["EM-01", "EM-02", "EM-03"],
    "ec": ["EC-01", "EC-02", "EC-03"],
    "cs": ["CS-01", "CS-02"],
    "pe": ["PE-01", "PE-02"],
    "meas": ["ME-01", "ME-02"],
    "ade": ["AD-03", "DG-02"],
}


def load_bank(path: Path) -> list[dict]:
    text = path.read_text(encoding="utf-8")
    lines = [ln for ln in text.splitlines() if not ln.lstrip().startswith("//")]
    text2 = "\n".join(lines)
    ns: dict = {}
    exec(text2.replace("export const questions", "questions"), ns, ns)
    return ns["questions"]


def check_banned(qs: list[dict], errors: list[str]) -> None:
    for q in qs:
        expl = (q.get("explanation") or "").lower()
        for ban in BANNED:
            if ban in expl:
                errors.append(f"Q{q.get('id')}: banned phrase: {ban!r}")


def check_keys(qs: list[dict], errors: list[str], *, st: bool) -> None:
    answers = [int(q.get("answer", -1)) for q in qs]
    n = len(answers)
    if n == 0:
        errors.append("empty bank")
        return
    counts = Counter(answers)
    for letter, idx in zip("ABCD", range(4)):
        c = counts.get(idx, 0)
        pct = 100.0 * c / n
        lo, hi = (15, 35) if st else (15, 40)
        if pct > hi or pct < lo:
            errors.append(f"key {letter}={c}/{n} ({pct:.1f}%) outside {lo}-{hi}%")
    # run of same answer
    run = 1
    for i in range(1, n):
        if answers[i] == answers[i - 1]:
            run += 1
            if run >= 5:
                errors.append(f"same-letter run ≥5 starting near Q{qs[i-4].get('id')}")
                break
        else:
            run = 1


def check_direct(qs: list[dict], errors: list[str]) -> None:
    # Heuristic: questionType containing only Conceptual with Easy and short stem
    directish = 0
    for q in qs:
        qt = (q.get("questionType") or "")
        diff = (q.get("difficulty") or "")
        if qt == "Conceptual" and diff == "Easy":
            directish += 1
        if q.get("origin") == "Direct":
            directish += 1
    if len(qs) and directish / len(qs) > 0.25:
        errors.append(f"Direct-ish share {directish}/{len(qs)} > 25%")


def check_diagrams(qs: list[dict], errors: list[str], *, root: Path) -> None:
    for q in qs:
        qt = (q.get("questionType") or "").lower()
        img = (q.get("image") or "").strip()
        is_diag = "diagram" in qt or "graph" in qt or bool(img)
        if not is_diag:
            continue
        if not img:
            errors.append(f"Q{q.get('id')}: diagram/graph type but empty image")
            continue
        path = root / img
        if not path.exists():
            # also try relative to data parent
            alt = root / img.replace("\\", "/")
            if not alt.exists():
                errors.append(f"Q{q.get('id')}: missing image file {img}")
        src = q.get("diagramSource")
        if src and src not in ALLOWED_DIAG_SRC:
            errors.append(f"Q{q.get('id')}: bad diagramSource {src!r}")
        if img and not src:
            errors.append(f"Q{q.get('id')}: image set but diagramSource missing")


def check_st_extras(qs: list[dict], errors: list[str], warnings: list[str], pack_key: str) -> None:
    if len(qs) != 50:
        errors.append(f"ST pack must have 50 Qs, got {len(qs)}")
    # difficulty bands
    d = Counter(q.get("difficulty") for q in qs)
    for band, lo, hi in [("Easy", 11, 14), ("Medium", 23, 27), ("Hard", 11, 14)]:
        c = d.get(band, 0)
        if c < lo or c > hi:
            warnings.append(f"difficulty {band}={c} outside {lo}-{hi}")
    # predictScore
    low = [q.get("id") for q in qs if int(q.get("predictScore") or 0) < 7]
    if len(low) > 10:
        warnings.append(f"{len(low)} Qs with predictScore<7")
    for q in qs:
        if "predictScore" not in q or "predictBasis" not in q:
            errors.append(f"Q{q.get('id')}: missing predictScore/predictBasis")
    # theme coverage
    themes = {q.get("themeId") for q in qs if q.get("themeId")}
    need = ST_THEME_MIN.get(pack_key, [])
    missing = [t for t in need if t not in themes]
    if missing and need:
        errors.append(f"theme coverage missing required: {missing}")
    # pattern diagram count (technical ST only)
    if pack_key not in ("ar", "gec"):
        diag = sum(1 for q in qs if "diagram" in (q.get("questionType") or "").lower() or (q.get("image") or "").strip())
        if diag < 8:
            errors.append(f"diagram Qs {diag} < 8")
    if pack_key == "ps":
        util = sum(1 for q in qs if "util" in (q.get("topic") or "").lower() or (q.get("themeId") or "").startswith("UT"))
        if util < 6:
            errors.append(f"PS pack Util Qs {util} < 6")
    if pack_key == "ec":
        schem = sum(
            1
            for q in qs
            if ("diagram" in (q.get("questionType") or "").lower() or (q.get("image") or "").strip())
            and (
                "circuit" in (q.get("topic") or "").lower()
                or "schematic" in (q.get("topic") or "").lower()
                or "network" in (q.get("topic") or "").lower()
                or (q.get("themeId") or "").startswith("EC")
            )
        )
        if schem < 2:
            errors.append(f"Circuits schematic Diagram Qs {schem} < 2")


def check_anti_clone(qs: list[dict], flt_qs: list[dict], errors: list[str]) -> None:
    flt_stems = {(q.get("question") or "").strip().lower() for q in flt_qs}

    def tokens(s: str) -> set[str]:
        return set(re.findall(r"[a-z0-9]+", s.lower()))

    for q in qs:
        stem = (q.get("question") or "").strip()
        if stem.lower() in flt_stems:
            errors.append(f"Q{q.get('id')}: exact FLT stem clone")
            continue
        tq = tokens(stem)
        for fs in list(flt_stems)[:200]:
            tf = tokens(fs)
            if not tq or not tf:
                continue
            j = len(tq & tf) / len(tq | tf)
            if j >= 0.92 and len(tq) > 12:
                errors.append(f"Q{q.get('id')}: near-clone FLT stem (Jaccard {j:.2f})")
                break


def gate_file(path: Path, *, mode: str, pack_key: str = "", flt_path: Path | None = None) -> int:
    errors: list[str] = []
    warnings: list[str] = []
    qs = load_bank(path)
    check_banned(qs, errors)
    check_keys(qs, errors, st=(mode == "st"))
    check_direct(qs, errors)
    check_diagrams(qs, errors, root=ROOT)
    if mode == "st":
        check_st_extras(qs, errors, warnings, pack_key)
        if flt_path and flt_path.exists():
            check_anti_clone(qs, load_bank(flt_path), errors)
    print(f"== {path.relative_to(ROOT)} ({len(qs)} Q) ==")
    for w in warnings:
        print(" WARN:", w)
    for e in errors:
        print(" FAIL:", e)
    if errors:
        print(f"RESULT: FAIL ({len(errors)} errors)")
        return 1
    print("RESULT: PASS")
    return 0


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("paths", nargs="+", type=Path)
    ap.add_argument("--mode", choices=["flt", "st"], default="flt")
    ap.add_argument("--pack-key", default="")
    ap.add_argument("--flt-ref", type=Path, default=None)
    args = ap.parse_args()
    code = 0
    for p in args.paths:
        path = p if p.is_absolute() else ROOT / p
        code |= gate_file(path, mode=args.mode, pack_key=args.pack_key, flt_path=args.flt_ref)
    sys.exit(code)


if __name__ == "__main__":
    main()
