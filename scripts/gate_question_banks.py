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
    # Template filler that polluted ST-HY generators
    "aptransco-style check on",
    "field data give index",
    "check using the recorded data",
    "high-yield reinforcement",
    # Formulaic wrapper openers (also Fail — not examiner voice)
    "the following engineering condition is recorded",
    "the recorded condition is:",
    "which response is technically correct",
    "during the design review, an aee is reviewing",
    "the records include",
    "in a competitive examination,",
    "select the correct response",
    "which result or interpretation should be selected",
    "the design note addresses",
    "which engineering conclusion is most defensible",
    "competing limit state is plausible",
    "retains the physical load path",
    "use the governing relation selected from the stated condition",
    "referring to the figure, assess a",
    "while checking the calculation sheet, the reviewer encounters",
    "on a pre-pour inspection, the field engineer must clear",
    "which recommendation is appropriate before approval",
    "which interpretation is technically correct?",
    "for the network configuration and operating condition under consideration",
    "during commissioning of the stated electrical machine or transformer",
    "for the feedback-control system being analysed by the engineer",
    "in the specified converter-fed drive or power-electronic circuit",
    "while selecting or connecting the indicated measuring instrument",
    "for the electronic circuit or digital logic condition stated below",
    "for the following quantitative aptitude calculation",
    "during a field-work calculation",
    "in the following reasoning problem",
    "while solving a reasoning test item",
    "choose the grammatically correct response for this language item",
    "for the stated computer-knowledge situation",
    "in the following general-awareness question",
    "the deciding condition is the one stated in this item",
    "which conclusion is most defensible",
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
        blob = " ".join(
            [
                q.get("question") or "",
                q.get("explanation") or "",
                q.get("predictBasis") or "",
                " ".join(q.get("options") or []),
            ]
        ).lower()
        for ban in BANNED:
            if ban in blob:
                errors.append(f"Q{q.get('id')}: banned phrase: {ban!r}")
                break
    # Cross-pack identical filler template detection within one bank
    stems = [(q.get("id"), (q.get("question") or "").strip().lower()) for q in qs]
    template_hits = sum(1 for _, s in stems if "field data give index" in s or "aptransco-style check on" in s)
    if template_hits:
        errors.append(f"template filler stems: {template_hits} (must be 0)")
    # Reject exact duplicated leading clauses, the failure mode that created
    # “For the network ... for the network ...” stems in the EE packs.
    for qid, stem in stems:
        words = re.findall(r"[a-z0-9]+", stem)
        for width in range(3, min(15, len(words) // 2) + 1):
            if words[:width] == words[width:width * 2]:
                errors.append(f"Q{qid}: duplicated opening wrapper")
                break

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


def check_anti_clone(qs: list[dict], flt_qs: list[dict], errors: list[str], *, jaccard_thresh: float = 0.92) -> None:
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
            if j >= jaccard_thresh and len(tq) > 12:
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
        jt = 0.55 if mode == "flt" else 0.92
        check_anti_clone(qs, load_bank(flt_path), errors, jaccard_thresh=jt)
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
