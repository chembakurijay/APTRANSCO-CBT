#!/usr/bin/env python3
"""Merge Detailed Explanation Standard overlays into FLT question banks."""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

JOBS = [
    {
        "bank": ROOT / "data" / "electrical" / "ee-flt01.js",
        "overlay": ROOT / "exports" / "ELECTRICAL_FLT01_EXPLANATIONS_v1.json",
        "header": [
            "// Electrical Engineering FLT-01 — APTRANSCO AEE CBT",
            "// Generated from exports/ELECTRICAL_FLT01_REGENERATED_v2.md",
            "// Detailed explanations: CORRECT / WHY / CALC / TRAPS / TOPIC HIGH-YIELD",
            "// answer is 0-based index into options",
        ],
    },
    {
        "bank": ROOT / "data" / "civil" / "ce-flt01.js",
        "overlay": ROOT / "exports" / "CIVIL_FLT01_EXPLANATIONS_v1.json",
        "header": [
            "// Civil Engineering FLT-01 — APTRANSCO AEE CBT",
            "// Generated from exports/CIVIL_FLT01_REGENERATED_v2.md",
            "// Detailed explanations: CORRECT / WHY / CALC / TRAPS / TOPIC HIGH-YIELD",
            "// answer is 0-based index into options",
        ],
    },
]


def load_qs(path: Path):
    text = path.read_text(encoding="utf-8")
    m = re.search(r"export const questions = (\[[\s\S]*\]);", text)
    if not m:
        raise SystemExit(f"No questions array in {path}")
    return json.loads(m.group(1))


def save_qs(path: Path, header, qs):
    path.write_text(
        "\n".join(header) + "\n\n"
        f"export const questions = {json.dumps(qs, indent=2, ensure_ascii=False)};\n",
        encoding="utf-8",
    )


def merge_one(job):
    overlay_path = job["overlay"]
    if not overlay_path.exists():
        print(f"SKIP (missing overlay): {overlay_path.name}")
        return False
    overlay = json.loads(overlay_path.read_text(encoding="utf-8"))
    qs = load_qs(job["bank"])
    missing = []
    short = []
    for q in qs:
        key = str(q["id"])
        item = overlay.get(key) or overlay.get(q["id"])
        if not item:
            missing.append(key)
            continue
        exp = (item.get("explanation") or "").strip()
        if len(exp) < 350:
            short.append((key, len(exp)))
        q["explanation"] = exp
        if "formula" in item:
            q["formula"] = item.get("formula") or ""
    if missing:
        raise SystemExit(f"{job['bank'].name}: missing overlay ids {missing[:10]}…")
    if short:
        print(f"WARN short explanations: {short[:10]}")
    save_qs(job["bank"], job["header"], qs)
    lens = [len(q.get("explanation") or "") for q in qs]
    print(
        f"OK {job['bank'].name}: n={len(qs)} avg={sum(lens)//len(lens)} "
        f"min={min(lens)} max={max(lens)}"
    )
    return True


def main():
    ok = 0
    for job in JOBS:
        if merge_one(job):
            ok += 1
    if ok == 0:
        sys.exit(2)
    print(f"Merged {ok} bank(s).")


if __name__ == "__main__":
    main()
