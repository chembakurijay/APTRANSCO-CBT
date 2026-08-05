#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
HOD-grade rule↔question applicability grading.

A mapping is CORRECT only when the rule genuinely explains why wrong options
can be eliminated. Never force a rule onto an unrelated stem.
"""
from __future__ import annotations

import re
from typing import Dict, Optional, Tuple

Grade = str  # CORRECT | WEAK | INCORRECT | RNA


def _t(item: dict) -> str:
    opts = " ".join(str(o) for o in (item.get("options") or []))
    return " ".join(
        [
            item.get("stem") or "",
            opts,
            item.get("subject") or "",
        ]
    )


def _expl(item: dict) -> str:
    return item.get("explanation") or ""


def grade(rule_id: int, item: dict) -> Tuple[Grade, str, Optional[str]]:
    """
    Returns (grade, reason, suggested_better_rule_title_or_None).
    """
    text = _t(item)
    expl = _expl(item)
    blob = f"{text} {expl}"
    has_img = bool(item.get("image_abs") or item.get("image_rel"))

    # --- Rule-specific graders ---
    if rule_id == 2:  # diameter ↔ radius
        if re.search(r"corona|surface\s+gradient|inception", text, re.I):
            return (
                "INCORRECT",
                "Diameter appears only as a conductor/corona geometry cue; d↔r area slip is not the elimination path.",
                "Concept / corona physics (not geometry-area)",
            )
        has_d = bool(re.search(r"\bdiamet|\bradius\b|\b\d+\s*mm\b", text, re.I))
        has_path = bool(
            re.search(
                r"\b(area|stress|tension|torsion|shaft|pipe|bolt|section|π|pi\b|mm²|polar|discharge)\b",
                text,
                re.I,
            )
        )
        if has_d and has_path:
            if re.search(
                r"π|pi\b|d\^?2|/4|r\s*=\s*d/2|treat.*diam.*as.*rad|diameter as radius|A\s*=",
                blob,
                re.I,
            ) or re.search(r"stress|torsion|area|mm²", text, re.I):
                return ("CORRECT", "Circular geometry where d↔r or A=πd²/4 changes the numerical result.", None)
            return (
                "WEAK",
                "Mentions diameter with a mechanical path, but d↔r trap evidence is thin.",
                None,
            )
        return (
            "INCORRECT",
            "No circular area/stress/torsion path where diameter-radius confusion changes the result.",
            "Reassign by asked quantity",
        )

    if rule_id == 3:  # service vs factored
        if re.search(r"factored|service\s+load|partial\s+safety|γ\s*f|limit.?state|\bULS\b|\bSLS\b", text, re.I):
            if re.search(r"\bfy\b|\bfck\b|\bMu\b|\bVu\b|Ast|design\s+strength|0\.87", text, re.I):
                return ("CORRECT", "SLS/ULS or fy-as-stress mix is present in the ask/options.", None)
            return ("WEAK", "Service/factored language present but material-strength mix not clear.", None)
        if re.search(r"\bfy\b|\bfck\b", text, re.I) and not re.search(
            r"factored|service|Mu|Vu|Ast|limit", text, re.I
        ):
            return (
                "INCORRECT",
                "fy/fck appear only as material grades, not as a service-vs-factored elimination trap.",
                "Neighbour-formula / material grade concept",
            )
        return ("INCORRECT", "No service/factored or fy-as-computed-stress trap.", None)

    if rule_id == 4:  # gross vs net
        if re.search(r"net\s+area|gross\s+area|bolt\s+hole|stagger|chain\s+of\s+holes|deduct", text, re.I):
            return ("CORRECT", "Tension/net-section path with hole deduction is the ask.", None)
        if re.search(r"\bbolt\b|\bgross\b|\bnet\b", text, re.I):
            return ("WEAK", "Bolt/net/gross language without clear Anet calculation trap.", None)
        return ("INCORRECT", "Not a net-vs-gross hole-deduction elimination item.", None)

    if rule_id == 5:  # cover vs d
        if re.search(r"effective\s+depth|\bcover\b.{0,40}\b(d|D|depth)\b|overall\s+depth", text, re.I):
            if re.search(r"\bAst\b|τv|shear|lever\s+arm|Mu|Vu|slab|beam", text, re.I):
                return ("CORRECT", "RCC depth uses d vs D/cover — options can confuse overall vs effective depth.", None)
        return ("INCORRECT", "Not an effective-depth vs cover elimination item.", None)

    if rule_id == 6:  # pu base change
        if re.search(r"base\s*(MVA|kV)|Sbase|Vbase|new\s+base|change[sd]?\s+base|referred\s+to\s+.*base", text, re.I):
            if re.search(r"\bpu\b|per-?unit|Zpu|Xpu", text, re.I):
                return ("CORRECT", "Per-unit value must rescale with an explicit base change.", None)
        if re.search(r"\bpu\b|per-?unit", text, re.I) and not re.search(r"base|Sbase|Vbase|MVA", text, re.I):
            return (
                "INCORRECT",
                "Per-unit appears but base MVA/kV does not change — scaling rule must not fire.",
                "Other EE concept / figure rule",
            )
        return ("INCORRECT", "No Zpu/Xpu base-change elimination path.", None)

    if rule_id == 8:  # sequence networks
        if re.search(
            r"(LG|LLG|LL|SLG|line-to-ground|three-phase\s+fault|unsymmetrical).{0,60}(sequence|positive|negative|zero)",
            text,
            re.I | re.S,
        ) or re.search(
            r"(sequence).{0,60}(LG|LLG|LL|fault|series|parallel)",
            text,
            re.I | re.S,
        ):
            return ("CORRECT", "Fault type ↔ sequence-network connection is the elimination path.", None)
        if re.search(r"sequence", text, re.I):
            return ("WEAK", "Sequence mentioned without a clear fault-connection trap.", None)
        return ("INCORRECT", "Not a sequence-network-by-fault-type item.", None)

    if rule_id == 9:  # √3
        if re.search(r"√3|sqrt\s*\(\s*3\s*\)|root-?3", blob, re.I) or (
            re.search(r"three-phase|3-?φ|line\s+current|line\s+voltage", text, re.I)
            and re.search(r"power|kVA|kW|current|voltage", text, re.I)
        ):
            if re.search(r"√3|sqrt\s*\(\s*3\s*\)|3\s*instead|drop.*√|forget.*√", blob, re.I) or re.search(
                r"P\s*=|√3\s*V|line\s+current", text, re.I
            ):
                return ("CORRECT", "Three-phase conversion where √3 (or 3) slip changes the numerical option.", None)
            return ("WEAK", "3-phase context without clear √3 trap evidence.", None)
        return ("INCORRECT", "Not a √3 / phase-factor elimination item.", None)

    if rule_id == 10:  # Thevenin
        if re.search(r"thevenin|norton|\bReq\b|\bRN\b|\bVth\b|equivalent\s+resist", text, re.I):
            return ("CORRECT", "Req/RN/Vth path where source deactivation matters.", None)
        return ("INCORRECT", "Not a Thevenin/Norton deactivation item.", None)

    if rule_id == 11:  # resonance
        if re.search(r"resonanc|X_?L\s*=\s*X_?C|at\s+resonance|\bRLC\b", text, re.I):
            return ("CORRECT", "Resonance identity (XL=XC / Z=R or dual) is the elimination path.", None)
        return ("INCORRECT", "Not a resonance identity item.", None)

    if rule_id == 12:  # sign/sense
        # Pure conceptual corona / definition → RNA
        if re.search(r"corona|which\s+statement|true\s+about", text, re.I) and not re.search(
            r"tension|compression|upward|downward|reaction\s+direction", text, re.I
        ):
            return (
                "INCORRECT",
                "Conceptual item — sign/sense flip is not the primary elimination path.",
                "Concept Rule",
            )
        if re.search(
            r"tension|compression|upward|downward|sense|direction of|member force|reaction.*(up|down)",
            text,
            re.I,
        ):
            return ("CORRECT", "Magnitude-right / sense-wrong distractors are plausible.", None)
        return ("INCORRECT", "No T/C or reaction-sense elimination trap.", None)

    if rule_id == 13:  # figure dependency
        if not has_img:
            return ("INCORRECT", "No figure attached — cover-the-figure test cannot fire.", None)
        stem = item.get("stem") or ""
        if not re.search(r"\b(shown|figure|diagram|accompanying|referring)\b", stem, re.I):
            return (
                "WEAK",
                "Image present but stem does not cue figure dependency; rule is secondary at best.",
                None,
            )
        # Prefer items where labels/dimensions matter
        if re.search(
            r"Detail|Curve\s*\d|label|overhang|support|dimension|as shown",
            text,
            re.I,
        ) or has_img:
            return (
                "CORRECT",
                "Figure is attached and stem cues it — read every label/dimension/symbol before striking.",
                None,
            )
        return ("WEAK", "Figure present; dependency strength uncertain.", None)

    if rule_id == 14:  # Terzaghi/Rankine
        if re.search(r"terzaghi|rankine|\bNc\b|\bNq\b|\bNγ\b|\bKa\b|\bKp\b|bearing\s+capacity|earth\s+pressure", text, re.I):
            return ("CORRECT", "Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.", None)
        return ("INCORRECT", "Not a Rankine/Terzaghi term-drop item.", None)

    if rule_id == 15:  # Mohr
        if re.search(r"mohr|principal\s+stress|σ\s*1|plane\s+stress", text, re.I):
            return ("CORRECT", "Principal-stress pair consistency is the elimination path.", None)
        return ("INCORRECT", "Not a Mohr/principal-stress item.", None)

    if rule_id == 16:  # SFD/BMD jump
        if re.search(r"shear\s+jump|moment\s+jump|concentrated\s+couple|\bSFD\b|\bBMD\b", text, re.I) or (
            re.search(r"couple|point\s+load", text, re.I) and re.search(r"shear|moment|BMD|SFD", text, re.I)
        ):
            return ("CORRECT", "Point-load vs couple jump identity is the elimination path.", None)
        if re.search(r"beam|UDL|bending\s+moment", text, re.I):
            return ("WEAK", "Beam/moment language without clear jump-type trap.", None)
        return ("INCORRECT", "Not an SFD/BMD jump confusion item.", None)

    if rule_id == 18:  # SCR
        if re.search(r"latching|holding|\bSCR\b|thyristor|gate\s+pulse", text, re.I):
            return ("CORRECT", "Latching vs holding vs firing distinction is the elimination path.", None)
        return ("INCORRECT", "Not an SCR latching/holding item.", None)

    if rule_id == 19:  # non-core operation abandon
        if item.get("stream") != "Non-core":
            return ("INCORRECT", "Non-core operation rule only applies to Non-core stream.", None)
        if re.search(
            r"simple interest|compound interest|passive|active voice|average|percent|coding|syllog|direction",
            text,
            re.I,
        ):
            return ("CORRECT", "Asked operation can be abandoned by a neighbouring option.", None)
        return ("WEAK", "Non-core item; operation-abandon trap not explicit.", None)

    if rule_id == 20:  # units last resort
        if re.search(r"wrong unit|unit slip|inconsistent unit|mm² vs|N/mm|kN·m|Ω vs", blob, re.I):
            return ("CORRECT", "Unit/absurdity cull is evidenced in traps.", None)
        return (
            "INCORRECT",
            "Units last-resort must not be forced onto every numerical — only when units mismatch is the remaining cull.",
            None,
        )

    if rule_id == 1:  # neighbour formula
        if re.search(r"neighbouring|different quantity|wrong formula|quotes?\s+fy|SIL.*=", blob, re.I):
            return ("CORRECT", "Options answer a neighbouring syllabus quantity.", None)
        return ("WEAK", "Neighbour-formula evidence thin.", None)

    if rule_id == 7:  # SIL
        if re.search(r"\bSIL\b|surge impedance|\bZc\b", text, re.I):
            return ("CORRECT", "SIL ↔ Zc identity is the elimination path.", None)
        return ("INCORRECT", "Not a SIL/Zc item.", None)

    if rule_id == 17:  # transformer a²
        if re.search(r"referred|turns.?ratio|a\^2|secondary resistance", text, re.I):
            return ("CORRECT", "Referral ×a² is the elimination path.", None)
        return ("INCORRECT", "Not a transformer referral item.", None)

    return ("WEAK", "No specialised grader — treat as weak until manually confirmed.", None)


def stem_opts_blob(item_or_q: dict) -> str:
    """Match blob: stem + options only (exclude explanation to cut false positives)."""
    if "stem" in item_or_q or "question" in item_or_q:
        stem = item_or_q.get("stem") or item_or_q.get("question") or ""
        opts = item_or_q.get("options") or [
            item_or_q.get("option_A") or "",
            item_or_q.get("option_B") or "",
            item_or_q.get("option_C") or "",
            item_or_q.get("option_D") or "",
        ]
        return " ".join([stem] + [str(o) for o in opts])
    return ""
