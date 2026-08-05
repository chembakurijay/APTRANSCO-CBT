#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Pedagogy metadata + engineering elimination text (HOD review standard)."""
from __future__ import annotations

import re
from typing import Dict, List, Optional

from elimination_applicability import grade

# Per internal rule id
PEDAGOGY: Dict[int, dict] = {
    2: {
        "explain": (
            "Circular geometry questions hide a diameter-versus-radius mistake. "
            "Area is A = π·d²/4. Treating the given diameter as a radius yields areas four times too large "
            "(or stresses four times too small)."
        ),
        "trigger": (
            "Use when the asked quantity is circular area, axial/torsional stress, pipe discharge, or bolt "
            "section capacity AND a numeric diameter is given AND distractors match the d↔r or πd² (not πd²/4) slip."
        ),
        "do_not_use": (
            "Do NOT use for corona / conductor surface-gradient items that merely mention diameter; "
            "pure conceptual true/false; or non-circular sections."
        ),
        "false_positives": (
            "Any stem containing the word 'diameter' (corona, pipe nominal size without area calc)."
        ),
        "confidence": "High when πd²/4 or r=d/2 appears in traps; Low if diameter is only descriptive.",
        "apply": [
            "Circle the numeric diameter; write r = d/2 once.",
            "Compute A = πd²/4 (or J = πd⁴/32 for torsion) before matching options.",
            "Strike options that equal P/(πd²), P/(πr), or 4×/0.25× the correct stress/area.",
        ],
        "formula": "A = πd²/4 ; σ = P/A ; τ = 16T/(πd³)",
        "scores": {"tech": 9, "applicability": 8, "fp_rate": 7, "edu": 9, "reuse": 9},
    },
    3: {
        "explain": (
            "Limit-state design mixes service loads, factored loads, and material strengths (fy, fck). "
            "Classic traps: treat fy as computed stress, or apply γf twice to an already-factored Mu/Vu."
        ),
        "trigger": (
            "Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress."
        ),
        "do_not_use": (
            "Do NOT use merely because fy/fck appear as material grades in an otherwise correct ULS Ast calculation "
            "with no service/factored confusion."
        ),
        "false_positives": "Any RCC stem containing fy.",
        "confidence": "High when both service and factored language (or fy-as-stress) appear in options.",
        "apply": [
            "Label the stem: SLS or ULS.",
            "If Mu/Vu is already factored, do not multiply by γf again.",
            "Strike options equal to fy or 0.87 fy when the ask is computed stress from P/A or M/Z.",
        ],
        "formula": "ULS uses γf; design steel stress typically 0.87 fy (IS 456 path)",
        "scores": {"tech": 9, "applicability": 8, "fp_rate": 6, "edu": 9, "reuse": 8},
    },
    4: {
        "explain": (
            "Bolted tension capacity uses net area. Staggered holes add s²/(4g). "
            "Gross-area options ignore holes entirely."
        ),
        "trigger": "Tension plate/member with bolt holes; ask is Anet or net-section capacity.",
        "do_not_use": "Do NOT use for bearing-type bolt shear capacity alone, or compression members without netting.",
        "false_positives": "Any steel stem mentioning 'bolt'.",
        "confidence": "High when Anet vs Agross options are explicit.",
        "apply": [
            "Write Anet = (b − n·dh)·t (+ Σ s²/4g if stagger shown).",
            "Strike the gross-area option immediately.",
            "Include stagger credit only when stagger is drawn/stated.",
        ],
        "formula": "Anet ≈ (b − n·dh)·t ; staggered + Σ s²/(4g)",
        "scores": {"tech": 9, "applicability": 9, "fp_rate": 8, "edu": 9, "reuse": 9},
    },
    5: {
        "explain": (
            "IS 456 flexural/shear formulas use effective depth d, not overall D. "
            "d = D − cover − φ/2 (as stem defines)."
        ),
        "trigger": "Overall D, cover, bar size given; Ast or τv options change if D is used as d.",
        "do_not_use": "Do NOT use when the stem already states effective depth d and no cover conversion is needed.",
        "false_positives": "Any beam/slab stem with the word 'cover' in detailing without depth calc.",
        "confidence": "High when D and cover both numeric and options span D-based vs d-based results.",
        "apply": [
            "Extract D, cover, φ; compute d before Ast or τv.",
            "Strike options that use D in Mu = 0.87 fy Ast z or τv = Vu/(b d).",
        ],
        "formula": "d = D − cover − φ/2 ; τv = Vu/(b d)",
        "scores": {"tech": 9, "applicability": 8, "fp_rate": 7, "edu": 9, "reuse": 8},
    },
    6: {
        "explain": (
            "Zpu = Zohm · Sbase / Vbase². Changing only Sbase scales Zpu in direct proportion."
        ),
        "trigger": "Stem explicitly changes Sbase and/or Vbase and asks for the new Zpu/Xpu.",
        "do_not_use": (
            "Do NOT use when a quantity is merely stated in pu with no base change "
            "(e.g. fault level in pu, machine Xd in pu on its own base with no rescaling ask)."
        ),
        "false_positives": "Any stem containing 'pu'.",
        "confidence": "High only with explicit old/new bases.",
        "apply": [
            "Note old and new Sbase and Vbase.",
            "If Sbase doubles and Vbase fixed → Zpu halves; strike 'unchanged'/'doubles'/'squared' as appropriate.",
        ],
        "formula": "Zpu = Zohm · Sbase / Vbase²",
        "scores": {"tech": 10, "applicability": 9, "fp_rate": 8, "edu": 9, "reuse": 9},
    },
    8: {
        "explain": (
            "Unsymmetrical faults require specific sequence-network connections. "
            "Memorising the four classics eliminates most wrong options."
        ),
        "trigger": "Fault type (3φ/LG/LL/LLG) asked with options describing sequence connections.",
        "do_not_use": "Do NOT use for balanced three-phase load flow, corona, or 'sequence' in non-fault contexts.",
        "false_positives": "Any stem with the substring 'LG' or 'sequence'.",
        "confidence": "High when options name Z1/Z2/Z0 connections.",
        "apply": [
            "Identify fault: 3φ / LG / LL / LLG.",
            "3φ→positive only; LG→1-2-0 series; LL→1∥2; LLG→1 series (2∥0).",
            "Strike options missing a required sequence or using only zero-sequence.",
        ],
        "formula": "LG: Z1+Z2+Z0 ; LL: Z1∥Z2 ; LLG: Z1+(Z2∥Z0)",
        "scores": {"tech": 10, "applicability": 9, "fp_rate": 8, "edu": 10, "reuse": 9},
    },
    9: {
        "explain": (
            "Three-phase power/current carries √3. Forgetting it or using 3 produces classic distractors."
        ),
        "trigger": "P = √3 VL IL cosφ (or line current from three-phase kVA) with numeric options.",
        "do_not_use": "Do NOT use for single-phase items or conceptual 3φ questions with no √3 arithmetic.",
        "false_positives": "Any stem saying 'three-phase'.",
        "confidence": "High when √3 appears in calc path or traps.",
        "apply": [
            "Write the correct 3φ identity for the asked quantity.",
            "Strike options that drop √3 or replace it with 3 without justification.",
        ],
        "formula": "P = √3 · VL · IL · cosφ",
        "scores": {"tech": 9, "applicability": 8, "fp_rate": 7, "edu": 9, "reuse": 9},
    },
    10: {
        "explain": (
            "Thevenin/Norton resistance: deactivate independent sources — V→short, I→open."
        ),
        "trigger": "Ask is Req/RN (or finding resistance with sources off) with independent sources present.",
        "do_not_use": "Do NOT use when only Vth (open-circuit voltage) is asked without resistance deactivation.",
        "false_positives": "Any circuit stem with 'equivalent'.",
        "confidence": "High for Req/RN asks.",
        "apply": [
            "For Req/RN, deactivate independent sources first.",
            "Strike options that leave sources 'on' while claiming equivalent resistance.",
        ],
        "formula": "Independent V → short; independent I → open; then Req",
        "scores": {"tech": 10, "applicability": 9, "fp_rate": 8, "edu": 9, "reuse": 9},
    },
    11: {
        "explain": (
            "Series resonance: XL = XC → Z = R (minimum). Parallel resonance is the dual (Z maximum)."
        ),
        "trigger": "Stem states resonance (or ω0) for series/parallel RLC and options keep reactive leftover.",
        "do_not_use": "Do NOT use for ordinary RLC phasor problems that never claim resonance.",
        "false_positives": "Any RLC stem.",
        "confidence": "High when 'resonance' or XL=XC is explicit.",
        "apply": [
            "Confirm series vs parallel.",
            "At series resonance strike options with j(XL−XC) ≠ 0.",
        ],
        "formula": "Series resonance: XL = XC → Z = R",
        "scores": {"tech": 10, "applicability": 9, "fp_rate": 8, "edu": 9, "reuse": 9},
    },
    12: {
        "explain": (
            "Equilibrium sense matters. Options may share magnitude but reverse tension/compression or ↑/↓."
        ),
        "trigger": "Free-body / member force / reaction direction with T↔C or up↔down distractors.",
        "do_not_use": "Do NOT use for pure conceptual statements (corona, definitions) with no sense choice.",
        "false_positives": "Any stem containing 'force' or 'tension' as a material property word.",
        "confidence": "Medium–High when opposite-sense options exist.",
        "apply": [
            "Fix one sign convention from the figure/FBD.",
            "Eliminate correct-magnitude wrong-sense options.",
        ],
        "formula": "ΣFx=0, ΣFy=0, ΣM=0 (sense matters)",
        "scores": {"tech": 8, "applicability": 6, "fp_rate": 5, "edu": 8, "reuse": 7},
    },
    13: {
        "explain": (
            "If a figure is attached and cued, the keyed answer usually depends on labelled lengths, "
            "supports, curves, or topology. Solving from stem text alone fails the cover-the-figure test."
        ),
        "trigger": (
            "Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology."
        ),
        "do_not_use": (
            "Do NOT force this rule onto every imaged question whose stem is fully self-contained numerically "
            "with a decorative figure."
        ),
        "false_positives": "Any question with an image field.",
        "confidence": "High when stem cues the figure; Low for decorative attachments.",
        "apply": [
            "Read every label on the crop.",
            "Read every dimension / load callout.",
            "Read every symbol (supports, sources, switches, curve IDs).",
            "Strike options that ignore a labelled overhang, load, Detail/Curve ID, or connection.",
        ],
        "formula": "Cover-the-figure test: cannot answer correctly with figure hidden",
        "scores": {"tech": 8, "applicability": 7, "fp_rate": 5, "edu": 9, "reuse": 8},
    },
    14: {
        "explain": (
            "Terzaghi bearing and Rankine earth pressure have additive terms. "
            "Dropping Nγ, swapping Ka/Kp, or using dry γ when submerged are classic traps."
        ),
        "trigger": "Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.",
        "do_not_use": "Do NOT use for general foundation detailing without capacity/pressure formula.",
        "false_positives": "Any stem with 'bearing'.",
        "confidence": "High when Terzaghi/Rankine terms appear.",
        "apply": [
            "Write the full expression used.",
            "Strike omitted-term or Ka↔Kp swaps; use buoyant γ when submerged.",
        ],
        "formula": "qu = c Nc + q Nq + 0.5 γ B Nγ (Terzaghi)",
        "scores": {"tech": 9, "applicability": 9, "fp_rate": 8, "edu": 9, "reuse": 8},
    },
    15: {
        "explain": (
            "Principal stresses must satisfy σ1+σ2 = σx+σy. Treating shear as normal breaks the invariant."
        ),
        "trigger": "Plane stress with σx,σy,τxy; options are principal pairs or θp.",
        "do_not_use": "Do NOT use for uniaxial-only stress without Mohr/principal ask.",
        "false_positives": "Any SOM stem with 'stress'.",
        "confidence": "High for Mohr/principal items.",
        "apply": [
            "Compute σavg and R; σ1,2 = σavg ± R.",
            "Strike pairs that violate σ1+σ2 = σx+σy.",
        ],
        "formula": "σ1,2 = (σx+σy)/2 ± √[((σx−σy)/2)² + τ²]",
        "scores": {"tech": 10, "applicability": 9, "fp_rate": 9, "edu": 9, "reuse": 9},
    },
    16: {
        "explain": (
            "Point load → shear jump; concentrated couple → moment jump (no shear jump)."
        ),
        "trigger": "SFD/BMD singularity; options name point load vs couple vs UDL start.",
        "do_not_use": "Do NOT use for ordinary max-moment location without jump-type options.",
        "false_positives": "Any beam/UDL stem.",
        "confidence": "High for jump-signature questions.",
        "apply": [
            "Identify force vs couple singularity.",
            "Strike swapped shear-jump / moment-jump statements.",
        ],
        "formula": "Point load → ΔV ; Couple → ΔM",
        "scores": {"tech": 10, "applicability": 9, "fp_rate": 8, "edu": 9, "reuse": 9},
    },
    18: {
        "explain": (
            "SCR latching current > holding current. Latching establishes conduction after the gate pulse; "
            "holding keeps it on."
        ),
        "trigger": "Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.",
        "do_not_use": "Do NOT use for general converter topology without latching/holding ask.",
        "false_positives": "Any PE stem with 'SCR'.",
        "confidence": "High for IL vs IH items.",
        "apply": [
            "Remember IL > IH.",
            "Strike swapped latching/holding or gate-width sized from holding alone.",
        ],
        "formula": "Latching current > holding current",
        "scores": {"tech": 9, "applicability": 9, "fp_rate": 8, "edu": 8, "reuse": 8},
    },
    19: {
        "explain": (
            "Non-core traps often solve a different operation (CI vs SI, active vs passive, wrong % base)."
        ),
        "trigger": "Quant/English/reasoning where one option changes the asked operation.",
        "do_not_use": "Do NOT use on technical Civil/EE items.",
        "false_positives": "Any Non-core stem.",
        "confidence": "Medium–High when operation words differ across options.",
        "apply": [
            "Re-state the exact ask in one sentence.",
            "Strike options that change the operation.",
        ],
        "formula": "Match the asked operation exactly",
        "scores": {"tech": 7, "applicability": 7, "fp_rate": 6, "edu": 8, "reuse": 7},
    },
    20: {
        "explain": (
            "Last resort after other rules: cull survivors whose units cannot equal the asked quantity."
        ),
        "trigger": "Two options remain; one has impossible units (mm² vs N/mm², Ω vs S, kN vs kN·m).",
        "do_not_use": "Do NOT spray this rule onto every numerical as primary elimination.",
        "false_positives": "Any stem with units words.",
        "confidence": "Medium — use only as last resort.",
        "apply": [
            "Write the unit of the asked quantity.",
            "Strike unit-impossible survivors.",
            "Never use letter-position myths.",
        ],
        "formula": "Units(asked) must equal Units(option)",
        "scores": {"tech": 7, "applicability": 5, "fp_rate": 4, "edu": 6, "reuse": 6},
    },
}


def parse_expl(expl: str) -> dict:
    out = {"why": "", "calc": "", "traps": {}}
    if not expl:
        return out
    m = re.search(r"WHY CORRECT:\s*(.*?)(?=\n\n[A-Z]|\nCALCULATION:|\nTRAP ANALYSIS|$)", expl, re.S)
    if m:
        out["why"] = re.sub(r"\s+", " ", m.group(1)).strip()
    m = re.search(r"CALCULATION:\s*(.*?)(?=\n\n[A-Z]|\nTRAP ANALYSIS|$)", expl, re.S)
    if m:
        out["calc"] = re.sub(r"\s+", " ", m.group(1)).strip()
    m = re.search(r"TRAP ANALYSIS.*?:\s*(.*?)(?=\n\nWHAT TO REMEMBER|\n\nALSO ASKED|$)", expl, re.S)
    if m:
        block = m.group(1)
        for let in "ABCD":
            tm = re.search(rf"{let}\)\s*(.*?)(?=\n[A-D]\)|\Z)", block, re.S)
            if tm:
                out["traps"][let] = re.sub(r"\s+", " ", tm.group(1)).strip()
    return out


def _clean_trap(text: str) -> str:
    t = text or ""
    t = re.sub(
        r"^Choosing this option usually means applying the wrong basis/formula for what the stem asks[^.]+\.\s*",
        "",
        t,
        flags=re.I,
    )
    t = re.sub(r"Re-derive from the stem quantities before matching an option\.\s*", "", t, flags=re.I)
    t = re.sub(r"\s+", " ", t).strip()
    return t


def engineering_strike(rule: dict, ped: dict, opt_text: str, trap: str, key_letter: str, let: str) -> str:
    """Build a non-boilerplate strike reason."""
    cleaned = _clean_trap(trap)
    if cleaned and len(cleaned) > 20:
        return cleaned
    # Rule-flavoured fallbacks tied to option text — still specific, not "violates Rule N"
    title = rule["title"]
    rid = rule["id"]
    ot = opt_text.lower()
    if rid == 2:
        if re.search(r"4\s*×|four times|πd²(?!/4)|as radius", ot + " " + cleaned, re.I):
            return "Uses diameter as radius or omits /4 in A=πd²/4, so area/stress is off by a factor of 4."
        return "Does not match A=πd²/4 (or the consistent stress/torsion from that area) for the given diameter."
    if rid == 3:
        return "Mixes service with factored actions or treats fy/fck as the computed member stress rather than the material grade."
    if rid == 4:
        return "Corresponds to gross area or an incomplete hole deduction (missing stagger term or wrong hole count)."
    if rid == 5:
        return "Uses overall depth D where effective depth d = D−cover−φ/2 is required."
    if rid == 6:
        return "Ignores the stated base change (Zpu ∝ Sbase/Vbase²) or applies the wrong power of the base ratio."
    if rid == 8:
        return "Connects the wrong sequence networks for the stated fault type (missing a sequence or wrong series/parallel)."
    if rid == 9:
        return "Drops √3 or replaces it with 3 in the three-phase conversion, so the numeric value cannot match."
    if rid == 10:
        return "Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance."
    if rid == 11:
        return "Keeps a nonzero (XL−XC) at the stated resonance, or confuses series (Z=R) with parallel (Z max)."
    if rid == 12:
        return "Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium."
    if rid == 13:
        return "Ignores a labelled length, support, curve ID, or topology that is visible on the figure."
    if rid == 14:
        return "Drops a Terzaghi/Rankine term, swaps Ka↔Kp, or uses the wrong unit weight (dry vs submerged)."
    if rid == 15:
        return "Principal pair breaks σ1+σ2=σx+σy or treats shear as a normal stress."
    if rid == 16:
        return "Swaps the singularity rule: point load causes shear jump; couple causes moment jump."
    if rid == 18:
        return "Swaps latching with holding, or sizes the gate requirement from holding current alone."
    if rid == 19:
        return "Solves a different operation than the one asked (e.g. CI vs SI, active vs passive, wrong % base)."
    if rid == 20:
        return "Units cannot equal the asked quantity (dimensional mismatch)."
    return f"Inconsistent with the governing relation for this ask ({title})."


def elim_solution_lines(rule: dict, pub_n: int, item: dict, ped: dict) -> List[str]:
    """
    Elimination-only write-up.
    Separates ELIMINATION from SCRATCH CHECK (verification).
    Marks Rule Not Applicable when grader says INCORRECT.
    """
    g, reason, suggest = grade(rule["id"], item)
    key_i = item.get("answer")
    key_letter = "ABCD"[int(key_i)] if key_i in (0, 1, 2, 3) else None
    opts = list(item.get("options") or [])
    parsed = parse_expl(item.get("explanation") or "")
    lines: List[str] = []

    lines.append(f"Applicability grade: {g}")
    lines.append(f"Why this grade: {reason}")
    if suggest:
        lines.append(f"Better rule / approach: {suggest}")

    if g == "INCORRECT":
        lines.append("")
        lines.append("RULE NOT APPLICABLE")
        lines.append(
            "This question must not be forced under this rule. "
            "Do not eliminate options using this rule’s narrative."
        )
        if suggest:
            lines.append(f"Reassign to: {suggest}")
        if key_letter:
            lines.append(f"(Bank key remains {key_letter} — defend it with the correct rule/concept, not this one.)")
        return lines

    lines.append("")
    lines.append(f"=== ELIMINATION (Rule {pub_n}: {rule['title']}) ===")
    lines.append(f"Trigger check: {ped.get('trigger', rule['when'])}")
    if item.get("image_abs") or item.get("image_rel"):
        lines.append(
            "Figure protocol: read every label, every dimension, and every symbol on the crop before striking."
        )

    lines.append("Option walk:")
    for i, opt in enumerate(opts[:4]):
        let = "ABCD"[i]
        text = str(opt).strip()
        if key_letter and let == key_letter:
            keep_why = _clean_trap(parsed.get("why") or "")
            if not keep_why:
                keep_why = (
                    "Survives because it is the only option consistent with this rule’s governing relation "
                    "for the asked quantity."
                )
            lines.append(f"  {let}) {text}")
            lines.append(f"     → KEEP — {keep_why}")
        else:
            strike = engineering_strike(
                rule, ped, text, parsed.get("traps", {}).get(let, ""), key_letter or "", let
            )
            lines.append(f"  {let}) {text}")
            lines.append(f"     → STRIKE — {strike}")

    if key_letter:
        lines.append(f"Survivors after this rule: {key_letter} only → keyed {key_letter}.")
    else:
        lines.append("Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.")

    # Scratch check = verification, NOT the elimination itself
    calc = parsed.get("calc") or ""
    if calc and not calc.upper().startswith("N/A"):
        lines.append("")
        lines.append("=== SCRATCH CHECK (verification only — not the elimination) ===")
        lines.append(calc)

    if g == "WEAK":
        lines.append("")
        lines.append(
            "Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better."
        )
    return lines


def overall_score(scores: dict) -> float:
    # Lower fp_rate score in dict means worse FP control in our schema — we stored "fp_rate" as quality of control (higher=better)
    vals = [
        scores.get("tech", 5),
        scores.get("applicability", 5),
        scores.get("fp_rate", 5),
        scores.get("edu", 5),
        scores.get("reuse", 5),
    ]
    return round(sum(vals) / len(vals), 1)
