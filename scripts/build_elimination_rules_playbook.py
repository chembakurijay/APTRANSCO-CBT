#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build evidence-backed elimination rules MD from ST/FLT banks + PYQ inventory."""
from __future__ import annotations

import csv
import re
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from gate_question_banks import load_bank  # noqa: E402

OUT = ROOT / "exports" / "ELIMINATION_RULES_PLAYBOOK.md"

# Each rule: id, title, when_to_use, how, evidence_patterns (regex on stem+opts+expl), streams
RULES = [
    {
        "id": 1,
        "title": "Kill the neighbour-formula lookalike",
        "when": "Two options look like textbook formulae for the same chapter; only one matches the *asked quantity*.",
        "how": (
            "Underline the asked quantity (stress vs strength, SIL vs surge impedance, Ast vs Mu, Zpu vs Zohm). "
            "Strike any option that answers a neighbouring quantity the stem did not ask."
        ),
        "patterns": [
            r"quotes?\s+fy",
            r"neighbouring syllabus",
            r"wrong formula paired",
            r"answers? a different quantity",
            r"confuses a neighbouring",
            r"treats fy as",
            r"SIL.*=.*V",
        ],
        "require_any": [
            r"fy|SIL|Ast|Zpu|surge|formula|quantity|asked",
        ],
        "streams": ["Civil", "Electrical"],
    },
    {
        "id": 2,
        "title": "Diameter ↔ radius / area geometry slip",
        "when": (
            "Circular area, stress, torsion, pipe discharge, or bolt section where treating diameter as radius "
            "(or forgetting πd²/4) changes the numerical result."
        ),
        "how": (
            "Compute A = πd²/4 (or r = d/2) once on scratch paper. "
            "Eliminate options that match P/(πd²), P/(πr), or treating d as r."
        ),
        "patterns": [
            r"diameter as radius",
            r"πd",
            r"treat(ing)?\s+d\s+as\s+r",
            r"A\s*=\s*π",
            r"solid\s+circular",
            r"circular\s+(shaft|section|rod|pipe|bar)",
            r"\bmm diameter\b",
            r"diameter.*(area|stress|torsion|shaft)",
            r"(area|stress|torsion|shaft).*diameter",
        ],
        "streams": ["Civil", "Electrical"],
        "require_any": [r"diamet", r"radius"],
        "require_all": [],
        "exclude_patterns": [
            r"corona",
            r"surface\s+gradient",
            r"inception\s+level",
            r"which\s+statement\s+is\s+(true|correct)",
        ],
    },
    {
        "id": 3,
        "title": "Service vs factored / partial-factor mix",
        "when": (
            "Stem mixes service (SLS) loads with limit-state (ULS) options, applies γf twice, "
            "or treats fy/fck as the computed member stress."
        ),
        "how": (
            "Ask: is this SLS or ULS? Strike options that apply γf to an already-factored action, "
            "or that treat fy as the computed stress."
        ),
        "patterns": [
            r"factored",
            r"service\s+load",
            r"partial safety",
            r"γf",
            r"limit.?state",
            r"treats?\s+fy\s+as",
            r"already-?factored",
        ],
        "streams": ["Civil"],
        "require_any": [r"factored", r"service", r"γf", r"limit.?state", r"\bMu\b", r"\bVu\b", r"Ast"],
        "exclude_patterns": [],
    },
    {
        "id": 4,
        "title": "Gross vs net / hole deduction",
        "when": "Tension member, plate with bolt holes, staggered pitch, or chain of holes where Anet ≠ Agross.",
        "how": (
            "Net = gross − holes (± s²/4g). Eliminate options that equal gross area, "
            "or that deduct diameter without adding the staggered term when stagger is shown."
        ),
        "patterns": [
            r"net area",
            r"gross area",
            r"bolt hole",
            r"stagger",
            r"chain of holes",
            r"hole deduction",
        ],
        "streams": ["Civil"],
        "require_any": [r"net", r"gross", r"hole", r"stagger"],
        "exclude_patterns": [],
    },
    {
        "id": 5,
        "title": "Cover vs effective depth",
        "when": (
            "RCC beam/slab where overall D, cover, and bar dia are given and options use Ast, τv, or lever arm "
            "that would change if D is mistaken for d."
        ),
        "how": (
            "d = D − cover − φ/2 (or as stem defines). Strike options that use overall depth as effective depth."
        ),
        "patterns": [
            r"effective depth",
            r"overall depth",
            r"\bcover\b",
            r"nominal shear",
            r"τv\s*=",
        ],
        "streams": ["Civil"],
        "require_any": [r"effective depth", r"cover", r"overall depth", r"τv"],
        "exclude_patterns": [],
    },
    {
        "id": 6,
        "title": "Per-unit base-change scaling",
        "when": "Zpu / Xpu must be rescaled because Sbase and/or Vbase explicitly changes in the stem.",
        "how": (
            "Zpu ∝ Sbase / Vbase². If Sbase doubles and Vbase fixed → Zpu halves. "
            "Eliminate ‘unchanged’, ‘doubles’, or ‘squared’ unless the stem changed Vbase too."
        ),
        "patterns": [
            r"base\s*MVA",
            r"MVA\s*base",
            r"Sbase",
            r"Vbase",
            r"new\s+base",
            r"change[sd]?\s+.*base",
            r"referred to a .*base",
        ],
        "streams": ["Electrical"],
        "require_any": [r"pu", r"per-unit", r"Zpu", r"Xpu"],
        "require_all": [],
        "exclude_patterns": [],
    },
    {
        "id": 7,
        "title": "SIL / surge-impedance identity",
        "when": "Lossless line, Zc or SIL asked.",
        "how": (
            "SIL(MW) = V_kV² / Zc. Eliminate V/Zc, V·Zc, or options that treat Zc as SIL."
        ),
        "patterns": [
            r"\bSIL\b",
            r"surge impedance",
            r"Zc",
        ],
        "streams": ["Electrical"],
        "require_any": [r"SIL", r"surge", r"Zc"],
    },
    {
        "id": 8,
        "title": "Sequence-network connection by fault type",
        "when": "LG / LL / LLG / 3φ fault where options name which sequence networks connect and how.",
        "how": (
            "3φ → positive only. LG → series 1-2-0. LL → 1 parallel 2. LLG → 1 series (2∥0). "
            "Eliminate any option that omits a required sequence or uses only zero-sequence."
        ),
        "patterns": [
            r"sequence\s+network",
            r"positive.?sequence",
            r"negative.?sequence",
            r"zero.?sequence",
            r"\bSLG\b",
            r"\bLLG\b",
            r"line-to-ground\s+fault",
            r"unsymmetrical\s+fault",
        ],
        "streams": ["Electrical"],
        "require_any": [r"sequence", r"fault", r"SLG", r"LLG", r"LG", r"LL"],
        "exclude_patterns": [r"corona"],
    },
    {
        "id": 9,
        "title": "√3 / phase-factor forgotten",
        "when": (
            "Three-phase power or current conversion where forgetting √3, or using 3 instead of √3, "
            "produces a wrong numerical option."
        ),
        "how": (
            "P = √3 VL IL cosφ. Eliminate options that drop √3 or use 3 instead of √3 (or vice versa) without stem justification."
        ),
        "patterns": [
            r"√3",
            r"sqrt\(3\)",
            r"root-?3",
            r"line current",
            r"three-phase\s+(power|current|kVA)",
        ],
        "streams": ["Electrical"],
        "require_any": [r"√3", r"sqrt", r"three-phase", r"3-?φ", r"line current", r"line voltage"],
        "exclude_patterns": [],
    },
    {
        "id": 10,
        "title": "Thevenin / Norton source deactivation",
        "when": "Req, RN, or Vth asked with independent sources that must be deactivated for resistance.",
        "how": (
            "Independent voltage sources → short; current sources → open. "
            "Eliminate options that leave sources active while claiming Req/RN."
        ),
        "patterns": [
            r"thevenin",
            r"norton",
            r"deactivat",
            r"\bReq\b",
            r"\bRN\b",
            r"\bVth\b",
            r"equivalent resistance",
        ],
        "streams": ["Electrical"],
        "require_any": [r"thevenin", r"norton", r"Req", r"RN", r"Vth", r"equivalent"],
        "exclude_patterns": [],
    },
    {
        "id": 11,
        "title": "Resonance / X_L = X_C identity",
        "when": "Series/parallel RLC at resonance — XL=XC identity or Z=R (series) / Z max (parallel).",
        "how": (
            "Series resonance → Z = R (min). Parallel → Z max. "
            "Eliminate options that keep j(XL−XC) nonzero at the stated resonance."
        ),
        "patterns": [
            r"resonanc",
            r"X_?L\s*=\s*X_?C",
            r"at resonance",
            r"\bRLC\b",
        ],
        "streams": ["Electrical"],
        "require_any": [r"reson", r"RLC", r"X_?L", r"X_?C"],
        "exclude_patterns": [],
    },
    {
        "id": 12,
        "title": "Sign / sense / tension–compression flip",
        "when": (
            "Reactions, member forces, or BMD signs where a distractor has correct magnitude but wrong "
            "sense (↑/↓, tension/compression)."
        ),
        "how": (
            "Fix one free-body sign convention from the figure. "
            "Eliminate options whose magnitude is right but sense (↑/↓, T/C) contradicts equilibrium."
        ),
        "patterns": [
            r"compression",
            r"tension",
            r"upward",
            r"downward",
            r"sense",
            r"direction of (the )?(reaction|force|moment)",
        ],
        "streams": ["Civil", "Electrical"],
        "require_any": [r"compress", r"tens", r"upward", r"downward", r"reaction"],
        "exclude_patterns": [
            r"corona",
            r"which statement",
            r"true about",
        ],
    },
    {
        "id": 13,
        "title": "Figure-dependency: cover the figure test",
        "when": (
            "A figure is attached AND the stem cues it (shown/figure/diagram) AND the keyed option "
            "depends on labelled lengths, supports, curves, or topology."
        ),
        "how": (
            "Read every label, every dimension, and every symbol on the crop before striking. "
            "If you can pick the answer with the figure covered, stop — stem/figure mismatch. "
            "Eliminate options that ignore a labelled dimension, support, or curve."
        ),
        "patterns": [
            r"\bshown\b",
            r"\bfigure\b",
            r"referring to the",
            r"accompanying",
            r"as shown",
            r"in the (given )?figure",
        ],
        "streams": ["Civil", "Electrical"],
        "require_any": [r"shown", r"figure", r"diagram", r"accompanying", r"as shown"],
        "require_image": True,
        "exclude_patterns": [],
    },
    {
        "id": 14,
        "title": "Rankine / Terzaghi / earth-pressure term drop",
        "when": "Bearing capacity or lateral earth pressure with Nc, Nq, Nγ or Ka/Kp where dropping a term changes the option.",
        "how": (
            "Write the full Terzaghi/Rankine expression. Eliminate options that drop the γBN term, "
            "swap Ka↔Kp, or use dry γ when stem says submerged."
        ),
        "patterns": [
            r"terzaghi",
            r"rankine",
            r"\bNc\b",
            r"\bNq\b",
            r"\bNγ\b",
            r"\bKa\b",
            r"\bKp\b",
            r"bearing capacity",
            r"earth pressure",
        ],
        "streams": ["Civil"],
        "require_any": [r"terzaghi", r"rankine", r"Nc", r"Nq", r"bearing", r"Ka", r"earth pressure"],
        "exclude_patterns": [],
    },
    {
        "id": 15,
        "title": "Mohr / principal-stress pair consistency",
        "when": "σx, σy, τxy given; options are σ1, σ2, or θp where invariant σ1+σ2=σx+σy must hold.",
        "how": (
            "σavg = (σx+σy)/2; R = √[((σx−σy)/2)²+τ²]. Eliminate pairs that violate σ1+σ2 = σx+σy "
            "or that treat τ as a normal stress."
        ),
        "patterns": [
            r"mohr",
            r"principal stress",
            r"σ1",
            r"plane stress",
        ],
        "streams": ["Civil"],
        "require_any": [r"mohr", r"principal"],
        "exclude_patterns": [],
    },
    {
        "id": 16,
        "title": "SFD↔BMD jump / couple vs point-load confusion",
        "when": "Beam singularity where options confuse shear jump (point load) with moment jump (couple).",
        "how": (
            "Point load → shear jump; couple → moment jump (no shear jump). "
            "Eliminate options that swap those rules."
        ),
        "patterns": [
            r"shear jump",
            r"moment jump",
            r"concentrated couple",
            r"concentrated moment",
            r"\bSFD\b",
            r"\bBMD\b",
            r"discontinuity",
        ],
        "streams": ["Civil"],
        "require_any": [r"shear", r"moment", r"couple", r"SFD", r"BMD", r"jump"],
        "exclude_patterns": [],
    },
    {
        "id": 17,
        "title": "Transformer referral / turns-ratio scaling",
        "when": "R2′, X2′, or impedance referred across a:1.",
        "how": (
            "Secondary Ω referred to primary × a² (a = V1/V2). "
            "Eliminate options that multiply by a or 1/a only."
        ),
        "patterns": [
            r"referred",
            r"turns.?ratio",
            r"a\^2",
            r"secondary resistance",
            r"transformer equivalent",
        ],
        "streams": ["Electrical"],
        "require_any": [r"refer", r"transformer", r"turns", r"secondary"],
    },
    {
        "id": 18,
        "title": "SCR / PE latching vs holding vs firing",
        "when": "Thyristor/SCR gate, latching, holding, or commutation options.",
        "how": (
            "Latching > holding; latching is the current to *establish* conduction after gate pulse. "
            "Eliminate options that swap latching↔holding or that set gate width from holding current alone."
        ),
        "patterns": [
            r"latching",
            r"holding",
            r"\bSCR\b",
            r"thyristor",
            r"gate pulse",
        ],
        "streams": ["Electrical"],
        "require_any": [r"latch", r"hold", r"SCR", r"thyristor", r"gate"],
    },
    {
        "id": 19,
        "title": "Non-core: option that abandons the asked operation",
        "when": "Quant / reasoning / English — one option changes the operation (%, SI, tense, code).",
        "how": (
            "Re-state the exact ask (20% of 450; SI for 2 years; passive of present perfect). "
            "Eliminate options that solve a different operation (CI instead of SI, active instead of passive)."
        ),
        "patterns": [
            r"simple interest",
            r"20%",
            r"passive",
            r"average of",
            r"coding",
        ],
        "streams": ["Non-core"],
        "require_any": [r"%", r"interest", r"average", r"passive", r"code", r"syllog", r"direction"],
    },
    {
        "id": 20,
        "title": "Last-resort: dimensional / absurdity cull (evidence-limited)",
        "when": (
            "Time pressure after other established rules already removed options; two remain and one has "
            "impossible units for the asked quantity."
        ),
        "how": (
            "Cull any remaining option whose units cannot match the ask (mm² vs N/mm², Ω vs S, kN vs kN·m). "
            "Then prefer the option consistent with the figure’s boundary conditions. "
            "Do **not** guess from ‘middle value’ myths — our banks do not support that heuristic."
        ),
        "patterns": [
            r"wrong unit",
            r"unit conversion",
            r"units?\s+(do not|don't|cannot|inconsistent)",
            r"mm² vs",
            r"dimensional",
            r"inconsistent units",
            r"unit slip",
        ],
        "require_any": [
            r"unit",
            r"mm² vs",
            r"inconsistent",
            r"dimension",
        ],
        "streams": ["Civil", "Electrical", "Non-core"],
        "max_list": 25,
        "exclude_patterns": [],
    },
]


def stream_of(path: Path, subject: str) -> str:
    s = (subject or "").lower()
    if "aptitude" in s or "reasoning" in s or "english" in s or "awareness" in s or "computer" in s:
        return "Non-core"
    if path.as_posix().startswith("data/civil") or any(
        k in s for k in ["strength", "rcc", "soil", "steel", "fluid", "foundation", "concrete"]
    ):
        return "Civil"
    if path.as_posix().startswith("data/electrical") or any(
        k in s for k in ["power", "machine", "circuit", "control", "electronic", "measure", "utiliz"]
    ):
        return "Electrical"
    if "noncore" in path.as_posix():
        return "Non-core"
    return "Other"


def _exam_label(path: Path) -> str:
    name = path.name
    if name.startswith("ce-flt"):
        return f"Civil FLT-{name[6:8]}"
    if name.startswith("ee-flt"):
        return f"Electrical FLT-{name[6:8]}"
    if name.startswith("ce-st-"):
        return f"Civil ST-{name.replace('ce-st-', '').replace('-01.js', '').upper()}"
    if name.startswith("ee-st-"):
        return f"Electrical ST-{name.replace('ee-st-', '').replace('-01.js', '').upper()}"
    if name.startswith("nc-st-ar"):
        return "Non-core ST-AR"
    if name.startswith("nc-st-gec"):
        return "Non-core ST-GEC"
    return name


def blob(q: dict) -> str:
    """Full blob (legacy). Prefer match_blob for rule matching."""
    return " ".join(
        [
            q.get("question") or "",
            " ".join(q.get("options") or []),
            q.get("explanation") or "",
            q.get("topic") or "",
            q.get("themeId") or "",
        ]
    )


def match_blob(q: dict) -> str:
    """Stem + options only — excludes explanation to cut false-positive rule hits."""
    return " ".join(
        [
            q.get("question") or q.get("stem") or "",
            " ".join(str(o) for o in (q.get("options") or [])),
        ]
    )


MIN_EVIDENCE = 15  # established heuristic floor (target band 15–20+)
PUBLISH_LIST_CAP = 25  # show up to this many independent refs per published rule


def pyq_stream(row: dict) -> str:
    s = (row.get("stream") or "").strip()
    if s in ("EE", "Electrical"):
        return "Electrical"
    if s in ("CE", "Civil"):
        return "Civil"
    if s in ("Non-core", "Noncore", "AR", "GA"):
        return "Non-core"
    return s or "Other"


def pyq_blob(row: dict) -> str:
    return " ".join(
        [
            row.get("stem") or "",
            row.get("option_A") or "",
            row.get("option_B") or "",
            row.get("option_C") or "",
            row.get("option_D") or "",
        ]
    )


def matches_rule(rule: dict, text: str, *, has_image: bool, stream: str) -> bool:
    if stream not in rule["streams"]:
        return False
    if rule.get("require_image") and not has_image:
        return False
    for ex in rule.get("exclude_patterns") or []:
        if re.search(ex, text, re.I):
            return False
    req = rule.get("require_any")
    if req and not any(re.search(r, text, re.I) for r in req):
        return False
    req_all = rule.get("require_all")
    if req_all and not all(re.search(r, text, re.I) for r in req_all):
        return False
    return any(re.search(p, text, re.I) for p in rule["patterns"])


def dedupe_diverse(items: list[dict], cap: int) -> list[dict]:
    seen: set[str] = set()
    uniq: list[dict] = []
    for item in items:
        if item["ref"] in seen:
            continue
        seen.add(item["ref"])
        uniq.append(item)
    by_bank: dict[str, list] = defaultdict(list)
    for it in uniq:
        by_bank[it["bank"]].append(it)
    picked: list[dict] = []
    while len(picked) < cap and any(by_bank.values()):
        for bank in list(by_bank.keys()):
            if not by_bank[bank]:
                continue
            picked.append(by_bank[bank].pop(0))
            if len(picked) >= cap:
                break
    return picked


def main() -> None:
    banks: list[tuple[Path, list[dict]]] = []
    for p in sorted((ROOT / "data").rglob("*.js")):
        try:
            banks.append((p.relative_to(ROOT), load_bank(p)))
        except Exception:
            continue

    pyq_rows: list[dict] = []
    pyq_csv = ROOT / "exports" / "PYQ_VALID_DIAGRAM_QUESTIONS.csv"
    if pyq_csv.exists():
        pyq_rows = list(csv.DictReader(pyq_csv.open(encoding="utf-8")))

    matched: dict[int, list[dict]] = defaultdict(list)

    # --- FLT + Subject Test evidence ---
    for path, qs in banks:
        for q in qs:
            b = match_blob(q)
            st = stream_of(path, q.get("subject") or "")
            has_img = bool((q.get("image") or "").strip())
            for rule in RULES:
                if not matches_rule(rule, b, has_image=has_img, stream=st):
                    continue
                matched[rule["id"]].append(
                    {
                        "ref": f"{path.as_posix()}#Q{q.get('id')}",
                        "bank": path.name,
                        "source_kind": "bank",
                        "source_exam": _exam_label(path),
                        "qid": q.get("id"),
                        "subject": q.get("subject"),
                        "theme": q.get("themeId") or q.get("topic") or "",
                        "stem": (q.get("question") or "").replace("\n", " ").strip(),
                        "answer": q.get("answer"),
                        "options": q.get("options") or [],
                        "stream": st,
                        "image": has_img,
                        "explanation": q.get("explanation") or "",
                    }
                )

    # --- VALID PYQ evidence (independent of our authored banks) ---
    for row in pyq_rows:
        st = pyq_stream(row)
        text = pyq_blob(row)
        pdf = row.get("pdf") or row.get("rel_path") or "PYQ"
        qn = row.get("q_number") or "?"
        for rule in RULES:
            # PYQ rows are diagram VALID by definition
            if not matches_rule(rule, text, has_image=True, stream=st):
                continue
            matched[rule["id"]].append(
                {
                    "ref": f"PYQ:{pdf}#Q{qn}",
                    "bank": f"PYQ:{pdf}",
                    "source_kind": "pyq",
                    "source_exam": f"Board VALID PYQ · {pdf}",
                    "qid": qn,
                    "subject": st,
                    "theme": row.get("confirm") or "VALID-PYQ",
                    "stem": (row.get("stem") or "").replace("\n", " ").strip(),
                    "answer": None,
                    "options": [
                        row.get("option_A") or "",
                        row.get("option_B") or "",
                        row.get("option_C") or "",
                        row.get("option_D") or "",
                    ],
                    "stream": st,
                    "image": True,
                }
            )

    # Dedupe + stats
    full_unique: dict[int, list[dict]] = {}
    for rule in RULES:
        seen: set[str] = set()
        uniq: list[dict] = []
        for item in matched[rule["id"]]:
            if item["ref"] in seen:
                continue
            seen.add(item["ref"])
            uniq.append(item)
        full_unique[rule["id"]] = uniq

    established: list[dict] = []
    insufficient: list[tuple[dict, int, int, int]] = []
    for rule in RULES:
        items = full_unique[rule["id"]]
        n_bank = sum(1 for it in items if it["source_kind"] == "bank")
        n_pyq = sum(1 for it in items if it["source_kind"] == "pyq")
        n = len(items)
        if n >= MIN_EVIDENCE:
            established.append(rule)
            matched[rule["id"]] = dedupe_diverse(items, rule.get("max_list", PUBLISH_LIST_CAP))
        else:
            insufficient.append((rule, n, n_bank, n_pyq))
            matched[rule["id"]] = dedupe_diverse(items, min(10, n))

    # Renumber established rules for student playbook (Rule 1..N)
    publish_map = {rule["id"]: i for i, rule in enumerate(established, 1)}

    lines: list[str] = []
    lines.append("# Elimination Rules Playbook (Evidence-Based)")
    lines.append("")
    lines.append("> **Purpose:** Last-resort MCQ elimination when full solve is slow.  ")
    lines.append(
        "> **Basis:** Patterns attested in ST-HY packs, FLT banks, MASTER distractor rules, "
        "and VALID PYQ inventory — not folklore (“always pick C”).  "
    )
    lines.append(
        f"> **Publication gate:** A rule is an **established heuristic** only if it has "
        f"**≥ {MIN_EVIDENCE} independent evidence questions** (FLT + Subject Test + VALID PYQ). "
        f"Target band for a healthy rule: **15–20+** examples. "
        f"Rules below this floor are **not published** as established heuristics."
    )
    lines.append("")
    lines.append("> **Use order:** Solve first → if stuck, apply the matching rule → only then guess among survivors.")
    lines.append("")
    lines.append("## Evidence corpus")
    lines.append("")
    lines.append("| Source | Count |")
    lines.append("|---|---:|")
    lines.append(f"| Question banks loaded (ST + FLT) | {sum(len(q) for _, q in banks)} Q across {len(banks)} files |")
    lines.append(f"| VALID PYQ diagram MCQs (inventory) | {len(pyq_rows)} |")
    lines.append("| MASTER | Golden Rule 3 — Distractor Engineering |")
    lines.append(f"| **Established heuristics published** | **{len(established)}** (each ≥{MIN_EVIDENCE} independent hits) |")
    lines.append(f"| Held as insufficient-evidence drafts | {len(insufficient)} |")
    lines.append("")
    lines.append("## Established heuristics — index")
    lines.append("")
    lines.append("| Playbook # | Internal id | Title | Independent evidence (bank+PYQ) |")
    lines.append("|---:|---:|---|---:|")
    for rule in established:
        items = full_unique[rule["id"]]
        n = len(items)
        lines.append(
            f"| {publish_map[rule['id']]} | {rule['id']} | {rule['title']} | {n} |"
        )
    lines.append("")
    lines.append("## How to use this file")
    lines.append("")
    lines.append("1. Classify the stuck item (Civil / EE / Non-core + topic cue).")
    lines.append("2. Jump to the rule whose **When** matches (established section only).")
    lines.append("3. Apply **How** to strike options.")
    lines.append("4. Cross-check with listed **Evidence questions** (same trap family).")
    lines.append("5. If two options remain, prefer a units/figure cull among *established* rules that apply — never a letter-position myth.")
    lines.append("6. **Drill tests (50 Q per ≤5 rules):** see `exports/elimination_drills/` — jumbled papers with source exam/reference and elimination-only keys.")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("# Part A — Established elimination heuristics")
    lines.append("")

    for rule in established:
        items = matched[rule["id"]]
        all_n = len(full_unique[rule["id"]])
        n_bank = sum(1 for it in full_unique[rule["id"]] if it["source_kind"] == "bank")
        n_pyq = sum(1 for it in full_unique[rule["id"]] if it["source_kind"] == "pyq")
        pub = publish_map[rule["id"]]
        lines.append(f"## Elimination Rule {pub} — {rule['title']}")
        lines.append("")
        lines.append(f"**Evidence status:** ESTABLISHED (≥{MIN_EVIDENCE}; independent hits = **{all_n}** = {n_bank} bank + {n_pyq} VALID PYQ)  ")
        lines.append(f"**Streams:** {', '.join(rule['streams'])}  ")
        lines.append(f"**When:** {rule['when']}  ")
        lines.append(f"**How:** {rule['how']}")
        lines.append("")
        lines.append(f"**Evidence questions ({len(items)} shown of {all_n} independent):**")
        lines.append("")
        lines.append("| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |")
        lines.append("|---|---|---|---|---|---|")
        for it in items:
            stem = it["stem"]
            if len(stem) > 90:
                stem = stem[:87] + "…"
            stem = stem.replace("|", "/")
            if it["answer"] in (0, 1, 2, 3):
                key = "ABCD"[int(it["answer"])]
            else:
                key = "—"
            sub = (it["subject"] or "")[:22]
            kind = it["source_kind"]
            exam = (it.get("source_exam") or "")[:36]
            lines.append(f"| `{it['ref']}` | {kind} | {exam} | {sub} | {stem} | {key} |")
        lines.append("")
        bank_samples = [it for it in items if it["source_kind"] == "bank" and it["options"]][:2]
        if bank_samples:
            lines.append("**Worked elimination samples (bank keys only):**")
            lines.append("")
            for it in bank_samples:
                key = "ABCD"[int(it["answer"])]
                lines.append(f"- `{it['ref']}` — keyed **{key}** · *{it.get('source_exam','')}*")
                lines.append(f"  - Stem: {it['stem'][:200]}")
                for i, opt in enumerate(it["options"]):
                    tag = " ← KEEP (key)" if i == it["answer"] else " ← strike if rule fires"
                    lines.append(f"  - {'ABCD'[i]}) {opt}{tag}")
                lines.append("")
        lines.append("---")
        lines.append("")

    lines.append("# Part B — Insufficient evidence (not established heuristics)")
    lines.append("")
    lines.append(
        f"The following candidate rules have **fewer than {MIN_EVIDENCE} independent** "
        "supporting questions in FLT + Subject Tests + VALID PYQ. "
        "They are retained only as **draft / watchlist** items and must **not** be taught "
        "as established elimination heuristics until the evidence floor is met."
    )
    lines.append("")
    lines.append("| Draft title | Independent | Bank | VALID PYQ | Status |")
    lines.append("|---|---:|---:|---:|---|")
    for rule, n, n_bank, n_pyq in insufficient:
        lines.append(
            f"| {rule['title']} | {n} | {n_bank} | {n_pyq} | NOT ESTABLISHED (<{MIN_EVIDENCE}) |"
        )
    lines.append("")
    if insufficient:
        lines.append("### Draft detail (≤10 sample refs each — for maintainers)")
        lines.append("")
        for rule, n, n_bank, n_pyq in insufficient:
            lines.append(f"#### Draft — {rule['title']} ({n} independent)")
            lines.append("")
            lines.append(f"**When:** {rule['when']}  ")
            lines.append(f"**How:** {rule['how']}")
            lines.append("")
            for it in matched[rule["id"]]:
                lines.append(f"- `{it['ref']}` ({it['source_kind']}) — {it['stem'][:90]}")
            lines.append("")

    lines.append("## Anti-rules (do **not** use — no evidence in our corpus)")
    lines.append("")
    lines.append("| Myth | Why rejected |")
    lines.append("|---|---|")
    lines.append("| “Pick C when unsure” | Key distribution is deliberately balanced (~25% each); letter myths fail Audit keys. |")
    lines.append("| “Longest option is correct” | MASTER distractors are equal-length plausible engineering mistakes. |")
    lines.append("| “Always middle numerical value” | Options are engineered from real slips (×2, ÷2, wrong formula) — middle is often a trap. |")
    lines.append("| “Ignore the figure if stem looks complete” | Diagram-dependency gate: if imaged, figure is required. |")
    lines.append("")
    lines.append("## Maintenance")
    lines.append("")
    lines.append("- Regenerate: `python scripts/build_elimination_rules_playbook.py`")
    lines.append(f"- Publication floor: `MIN_EVIDENCE = {MIN_EVIDENCE}` independent refs (FLT/ST bank Qs + VALID PYQ rows).")
    lines.append("- After new FLT/ST/PYQ evidence ships, re-run; promote drafts only when they clear the floor.")
    lines.append("")

    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(
        "Wrote",
        OUT,
        "| established",
        len(established),
        "| drafts",
        len(insufficient),
        "| evidence listed",
        sum(len(matched[r["id"]]) for r in established),
    )
    for rule in established:
        n = len(full_unique[rule["id"]])
        print(f"  EST R{publish_map[rule['id']]} (id {rule['id']}): {n} — {rule['title']}")
    for rule, n, n_bank, n_pyq in insufficient:
        print(f"  DRAFT id {rule['id']}: {n} (bank {n_bank}+pyq {n_pyq}) — {rule['title']}")


if __name__ == "__main__":
    main()
