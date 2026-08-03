#!/usr/bin/env python3
"""Attach dataTable / matchingMatrix structured fields for CBT HTML rendering."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_qs(path):
    text = path.read_text(encoding="utf-8")
    m = re.search(r"export const questions = (\[[\s\S]*\]);", text)
    return text, json.loads(m.group(1)), m


def save_qs(path, header_lines, qs):
    path.write_text(
        "\n".join(header_lines) + "\n\n"
        f"export const questions = {json.dumps(qs, indent=2, ensure_ascii=False)};\n",
        encoding="utf-8",
    )


def patch_ee():
    path = ROOT / "data" / "electrical" / "ee-flt01.js"
    text, qs, _ = load_qs(path)

    # Q4 matching
    qs[3]["question"] = "Match List-I (transformer connection sketch) with List-II (name). Select the correct code."
    qs[3]["matchingMatrix"] = {
        "caption": "Match List-I with List-II",
        "listITitle": "List-I (Sketch / type)",
        "listIITitle": "List-II (Description)",
        "listI": [
            {"code": "P", "text": "Δ–Δ"},
            {"code": "Q", "text": "Δ–Y"},
            {"code": "R", "text": "Y–Δ"},
            {"code": "S", "text": "Y–Y"},
        ],
        "listII": [
            {"code": "1", "text": "both sides Δ"},
            {"code": "2", "text": "HV Δ, LV Y"},
            {"code": "3", "text": "HV Y, LV Δ"},
            {"code": "4", "text": "both Y"},
        ],
        "instruction": "Use the diagram sketches with the matrix; choose the correct matching code.",
    }

    # Q10 table
    qs[9]["question"] = "For Newton–Raphson load flow using the bus data table below, unknown voltage magnitude variables among buses 2–3 are:"
    qs[9]["dataTable"] = {
        "caption": "Bus data for NR load flow",
        "headers": ["Bus", "Type", "|V| pu", "P MW"],
        "rows": [
            ["1", "Slack", "1.05", "—"],
            ["2", "PV", "1.02", "50"],
            ["3", "PQ", "—", "30"],
        ],
    }

    # Q65 matching
    qs[64]["question"] = "Match List-I (gate symbols as labelled) with List-II (Boolean expressions). Select the correct code."
    qs[64]["matchingMatrix"] = {
        "caption": "Match List-I with List-II",
        "listITitle": "List-I (Gate)",
        "listIITitle": "List-II (Expression)",
        "listI": [
            {"code": "P", "text": "NAND symbol"},
            {"code": "Q", "text": "NOR symbol"},
            {"code": "R", "text": "XOR symbol"},
            {"code": "S", "text": "AND symbol"},
        ],
        "listII": [
            {"code": "1", "text": "¬(A·B)"},
            {"code": "2", "text": "¬(A+B)"},
            {"code": "3", "text": "A⊕B"},
            {"code": "4", "text": "A·B"},
        ],
        "instruction": "Use the diagram labels with this matrix; choose the correct matching code.",
    }

    save_qs(
        path,
        [
            "// Electrical Engineering FLT-01 — APTRANSCO AEE CBT",
            "// Generated from exports/ELECTRICAL_FLT01_REGENERATED_v2.md",
            "// Diagrams + structured dataTable / matchingMatrix for CBT HTML tables",
            "// answer is 0-based index into options",
        ],
        qs,
    )
    print("Patched EE Q4, Q10, Q65")


def patch_ce():
    path = ROOT / "data" / "civil" / "ce-flt01.js"
    text, qs, _ = load_qs(path)

    # Q10 matching + diagram
    qs[9]["question"] = "Match List-I beams (a)–(d) as sketched with List-II maximum BM. Select the correct code."
    qs[9]["matchingMatrix"] = {
        "caption": "Match List-I with List-II",
        "listITitle": "List-I (Beam)",
        "listIITitle": "List-II (Max BM)",
        "listI": [
            {"code": "a", "text": "Cantilever — UDL on outer half"},
            {"code": "b", "text": "Cantilever — triangular load to fixed end"},
            {"code": "c", "text": "SS — full UDL span l"},
            {"code": "d", "text": "SS — UDL on span 2l"},
        ],
        "listII": [
            {"code": "1", "text": "wl²/2"},
            {"code": "2", "text": "wl²/6"},
            {"code": "3", "text": "wl²/8"},
            {"code": "4", "text": "3wl²/8"},
        ],
        "instruction": "Use the sketches with this matrix; choose the correct matching code.",
    }

    # Q36 matching matrix
    qs[35]["question"] = "Match List-I machines with List-II characteristics. Select the correct matching."
    qs[35]["matchingMatrix"] = {
        "caption": "Match List-I with List-II",
        "listITitle": "List-I",
        "listIITitle": "List-II",
        "listI": [
            {"code": "1", "text": "Pelton"},
            {"code": "2", "text": "Francis"},
            {"code": "3", "text": "Kaplan"},
            {"code": "4", "text": "Centrifugal pump"},
        ],
        "listII": [
            {"code": "P", "text": "low H, high Q"},
            {"code": "Q", "text": "high H, low Q"},
            {"code": "R", "text": "medium H"},
            {"code": "S", "text": "adds energy to liquid"},
        ],
        "instruction": "Select the correct matching code from the options.",
    }

    # Q58 Table/Figure — if no real table, add a simple contact-pressure comparison table
    q58 = qs[57]
    if "Table" in (q58.get("questionType") or ""):
        q58["question"] = (
            "From the footing contact-pressure table below (elastic soil), which statement is correct?"
            if "uniform" in (q58.get("question") or "").lower()
            else q58["question"]
        )
        # Keep original stem if already clear; still add a small table for CBT
        if not q58.get("dataTable"):
            q58["dataTable"] = {
                "caption": "Contact pressure pattern (elastic soil)",
                "headers": ["Footing type", "Contact pressure pattern"],
                "rows": [
                    ["X — Flexible (elastic)", "Approximately uniform"],
                    ["Y — Rigid", "Non-uniform (higher at edges)"],
                ],
            }
            # Soften stem to rely on table
            q58["question"] = "Using the table of footing contact-pressure patterns, which statement is correct?"

    save_qs(
        path,
        [
            "// Civil Engineering FLT-01 — APTRANSCO AEE CBT",
            "// Generated from exports/CIVIL_FLT01_REGENERATED_v2.md",
            "// Includes structured dataTable / matchingMatrix for CBT HTML tables",
            "// answer is 0-based index into options",
        ],
        qs,
    )
    print("Patched CE Q10, Q36, Q58")


if __name__ == "__main__":
    patch_ee()
    patch_ce()
