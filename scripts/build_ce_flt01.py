#!/usr/bin/env python3
"""Build data/civil/ce-flt01.js + exam SVG diagrams for Civil FLT-01."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_JS = ROOT / "data" / "civil" / "ce-flt01.js"
DIAG_DIR = ROOT / "images" / "diagrams" / "civil-flt01"
IMG = "images/diagrams/civil-flt01"


def q(
    id_,
    subject,
    topic,
    question,
    options,
    answer,
    difficulty,
    question_type,
    explanation="",
    formula="",
    image="",
):
    return {
        "id": id_,
        "subject": subject,
        "topic": topic,
        "question": question,
        "image": image,
        "options": options,
        "answer": answer,  # 0-based index
        "difficulty": difficulty,
        "questionType": question_type,
        "formula": formula,
        "explanation": explanation,
        "source": "CIVIL_FLT01_REGENERATED_v2",
    }


def build_questions():
    qs = []

    # --- SOM Q1–Q15 ---
    qs.append(
        q(
            1,
            "Strength of Materials",
            "Axial tension",
            "A Fe410 hanger, gross diameter 20 mm, carries factored axial tension Pu = 55 kN. Design stress in yielding (γm0 = 1.10) capacity fyd and demand σd are closest to:",
            [
                "fyd = 227 MPa, σd = 175 MPa → adequate",
                "fyd = 250 MPa, σd = 175 MPa → compare to fy",
                "fyd = 227 MPa, σd = 350 MPa → inadequate",
                "fyd = 373 MPa, σd = 175 MPa",
            ],
            0,
            "Easy",
            "Numerical",
            "A = π/4 × 20² = 314.2 mm²; σd = 55000/314.2 ≈ 175 MPa; fyd = 250/1.1 ≈ 227 MPa.",
            "σd = Pu/A; fyd = fy/γm0",
        )
    )
    qs.append(
        q(
            2,
            "Strength of Materials",
            "Axial stress",
            "Two equal-length bars of same E carry the same axial load P: (1) solid diameter d; (2) hollow Do = 2d, Di = √3 d. Ratio of axial stresses σ1 : σ2 is:",
            ["1 : 1", "2 : 1", "4 : 1", "1 : 2"],
            0,
            "Easy",
            "Conceptual",
            "A2 = (π/4)(4d² − 3d²) = πd²/4 = A1, so stresses equal.",
            "σ = P/A",
        )
    )
    qs.append(
        q(
            3,
            "Strength of Materials",
            "Beam reactions",
            "For the beam as shown, the reaction at support A is:",
            ["15 kN", "21 kN", "18 kN", "36 kN"],
            0,
            "Medium",
            "Numerical+Diagram",
            "UDL on CD = 10 kN/m over 3 m → W = 30 kN at mid of CD (3.0 m from A). Span AB = 6 m. RA = 30 × (6 − 3)/6 = 15 kN.",
            "ΣMA = 0",
            f"{IMG}/q03-beam-udl.svg",
        )
    )
    qs.append(
        q(
            4,
            "Strength of Materials",
            "Slenderness",
            "A steel strut L = 4.2 m, both ends fixed, least radius of gyration r = 35 mm. Design slenderness λ = Le/r is closest to:",
            ["60", "120", "240", "84"],
            0,
            "Medium",
            "Application",
            "Both ends fixed → Le = 0.5L = 2100 mm; λ = 2100/35 = 60.",
            "λ = Le/r; Le = 0.5L (fixed–fixed)",
        )
    )
    qs.append(
        q(
            5,
            "Strength of Materials",
            "Mohr circle",
            "Assertion (A): For the element shown, the Mohr centre lies on the p-axis at (px + py)/2.\nReason (R): The centre always lies on the q-axis.\nChoose the correct option:",
            [
                "Both A and R true; R explains A",
                "Both A and R true; R does not explain A",
                "A true, R false",
                "A false, R true",
            ],
            2,
            "Hard",
            "AR+Diagram",
            "Centre is at ((px+py)/2, 0) on the normal-stress (p) axis; it does not lie on the shear (q) axis.",
            "Mohr centre = ((σx+σy)/2, 0)",
            f"{IMG}/q05-mohr-element.svg",
        )
    )
    qs.append(
        q(
            6,
            "Strength of Materials",
            "Shear stress",
            "A rectangular joist b = 100 mm, d = 200 mm carries shear force V = 16 kN. Maximum shear stress (MPa) and where it occurs:",
            ["1.20 at NA", "0.80 uniform", "1.20 at top", "0.80 at NA"],
            0,
            "Medium",
            "Numerical",
            "τmax = 1.5 V/(bd) = 1.5 × 16000 / 20000 = 1.2 MPa at neutral axis.",
            "τmax = 1.5V/bd",
        )
    )
    qs.append(
        q(
            7,
            "Strength of Materials",
            "Torsion",
            "For the shaft ABC as shown, torque in segment BC is:",
            ["1000 N·m", "500 N·m", "1500 N·m", "0"],
            0,
            "Medium",
            "Numerical+Diagram",
            "From free-body of BC: torque transmitted through BC equals the end torque at C = 1000 N·m.",
            "Equilibrium of torques",
            f"{IMG}/q07-shaft-abc.svg",
        )
    )
    qs.append(
        q(
            8,
            "Strength of Materials",
            "Indeterminate beams",
            "For a propped cantilever of span L with UDL w throughout, the prop reaction is:",
            ["3wL/8", "wL/2", "5wL/8", "3wL/4"],
            0,
            "Hard",
            "Numerical",
            "Compatibility δ_prop = 0 gives R = 3wL/8.",
            "R = 3wL/8",
        )
    )
    qs.append(
        q(
            9,
            "Strength of Materials",
            "SFD/BMD",
            "From the UVL example SFD as plotted, the shear just left of the mid-region crossing zero occurs near:",
            [
                "0.577L from the light end",
                "Midspan always",
                "At the heavy support only",
                "At the light support",
            ],
            0,
            "Medium",
            "Graph+Diagram",
            "For triangular load on SS beam, zero shear (max BM) is at x = L/√3 ≈ 0.577L from the light end — read from the plotted SFD.",
            "x = L/√3",
            f"{IMG}/q09-uvl-sfd.svg",
        )
    )
    qs.append(
        q(
            10,
            "Strength of Materials",
            "Matching — BM",
            "Match List-I beams (a)–(d) as sketched with List-II maximum BM:\n1. wl²/2   2. wl²/6   3. wl²/8   4. 3wl²/8\n(a) cantilever with UDL on outer half  (b) cantilever triangular load to fixed end  (c) SS full UDL span l  (d) SS UDL on span 2l\nCorrect code:",
            [
                "a-4, b-2, c-3, d-1",
                "a-3, b-1, c-2, d-4",
                "a-1, b-2, c-3, d-4",
                "a-4, b-1, c-3, d-2",
            ],
            0,
            "Medium",
            "Matching+Diagram",
            "Half-UDL cantilever → 3wl²/8; triangular cantilever → wl²/6; SS UDL → wl²/8; SS span 2l → w(2l)²/8 = wl²/2.",
            "",
            f"{IMG}/q10-beam-match.svg",
        )
    )
    qs.append(
        q(
            11,
            "Strength of Materials",
            "Impact loading",
            "Same bar, same maximum load W: gradually applied vs suddenly applied. Ratio of maximum stresses (sudden : gradual) is:",
            ["2 : 1", "1 : 1", "√2 : 1", "4 : 1"],
            0,
            "Easy",
            "Numerical",
            "Suddenly applied load doubles max stress vs gradual application of same W.",
            "σ_sudden = 2 σ_gradual",
        )
    )
    qs.append(
        q(
            12,
            "Strength of Materials",
            "Temperature stress",
            "A steel bar with fixed ends has α = 12×10⁻⁶ /°C, E = 200 GPa, fy = 250 MPa, γm0 = 1.1. Temperature rise to just start yielding in the design sense (σ = fy/γm0) is closest to:",
            ["95°C", "104°C", "48°C", "200°C"],
            0,
            "Hard",
            "Numerical",
            "σ = fy/γm0 = 227.3 MPa = α E ΔT → ΔT = 227.3/(12e-6 × 2e5) ≈ 94.7°C.",
            "σ = α E ΔT",
        )
    )
    qs.append(
        q(
            13,
            "Strength of Materials",
            "Section modulus",
            "M = 36 kN·m, σall = 150 MPa. Minimum section modulus Z required (mm³):",
            ["2.4×10⁵", "2.4×10⁶", "5.4×10⁵", "150×10³"],
            0,
            "Easy",
            "Numerical",
            "Z = M/σ = 36×10⁶ / 150 = 2.4×10⁵ mm³.",
            "Z = M/σ",
        )
    )
    qs.append(
        q(
            14,
            "Strength of Materials",
            "Transformed section",
            "Timber 100 × 300 mm with two side steel plates 12 × 300 mm, m = Es/Et = 15. Transformed steel width of each plate in timber units is:",
            ["180 mm", "12 mm", "15 mm", "300 mm"],
            0,
            "Medium",
            "Numerical",
            "Transformed width = m × t = 15 × 12 = 180 mm.",
            "b_tr = m t",
        )
    )
    qs.append(
        q(
            15,
            "Strength of Materials",
            "BMD interpretation",
            "Sudden vertical jump in BM at a section (as indicated on the figure) indicates:",
            [
                "A concentrated couple",
                "Zero shear everywhere",
                "UDL start only",
                "Settlement only",
            ],
            0,
            "Hard",
            "Diagram+Conceptual",
            "A concentrated moment causes a jump discontinuity in the BMD.",
            "",
            f"{IMG}/q15-bmd-jump.svg",
        )
    )

    # --- RCC Q16–Q28 ---
    qs.append(
        q(
            16,
            "RCC / DDRC",
            "Durability / cover",
            "Beam cover provided is 15 mm in moderate exposure instead of the required larger cover. The most critical likely issue is:",
            [
                "Early corrosion / durability loss of steel",
                "Higher Mu",
                "Better fire rating",
                "Only denser concrete",
            ],
            0,
            "Easy",
            "Standard Application",
            "Inadequate cover accelerates corrosion and durability failure.",
            "",
        )
    )
    qs.append(
        q(
            17,
            "RCC / DDRC",
            "Limit state flexure",
            "Singly reinforced rectangular section: b = 230 mm, d = 450 mm, fck = 25 MPa, fy = 415 MPa, xu,max/d = 0.48. Limiting Mu (kN·m) closest to:",
            ["138", "97", "200", "50"],
            0,
            "Medium",
            "Numerical",
            "xu = 0.48×450 = 216; Mulim = 0.36 fck b xu (d − 0.42 xu)/10⁶ ≈ 138 kN·m.",
            "Mulim = 0.36 fck b xu (d − 0.42 xu)",
        )
    )
    qs.append(
        q(
            18,
            "RCC / DDRC",
            "LSM behaviour",
            "Assertion (A): LSM over-reinforced flexure sections are avoided.\nReason (R): Concrete reaches limiting strain before steel yields → brittle failure.\nChoose:",
            [
                "Both A and R true; R explains A",
                "Both A and R true; R does not explain A",
                "A true, R false",
                "A false, R true",
            ],
            0,
            "Medium",
            "AR",
            "Over-reinforced sections fail brittle; hence avoided in LSM design.",
            "",
        )
    )
    qs.append(
        q(
            19,
            "RCC / DDRC",
            "Flanged beams",
            "In a continuous T-beam at an intermediate support (hogging), the flange is in tension. Effective compression flange for flexure should be taken as:",
            [
                "Web width only",
                "Full midspan bf always",
                "ly/6 + bw + 6Df always even in hogging",
                "Ignore web",
            ],
            0,
            "Hard",
            "Application",
            "In hogging, flange is in tension; compression is in the web — use web width.",
            "",
        )
    )
    qs.append(
        q(
            20,
            "RCC / DDRC",
            "Two-way slabs",
            "From the simply supported two-way slab coefficient table shown, for ly/lx = 1.5 the value of αx is closest to:",
            ["0.104", "0.062", "0.014", "0.200"],
            0,
            "Medium",
            "Diagram+Application",
            "Read αx from the SS two-way table at ly/lx = 1.5 ≈ 0.104.",
            "Mx = αx w lx²",
            f"{IMG}/q20-twoway-table.svg",
        )
    )
    qs.append(
        q(
            21,
            "RCC / DDRC",
            "Column ties",
            "Column long bars 16 mm, ties 8 mm, least lateral dimension 300 mm. Maximum tie spacing shall not exceed the least of:",
            [
                "300 mm, 16×16 = 256 mm, 300 mm → 256 mm",
                "300 mm, 16×8, 300 mm",
                "48×16 only",
                "d of beam",
            ],
            0,
            "Medium",
            "Practical/Detailing",
            "Max spacing = least of least lateral dimension, 16×longitudinal bar dia, and 300 mm → 256 mm.",
            "",
        )
    )
    qs.append(
        q(
            22,
            "RCC / DDRC",
            "Shear design",
            "Vu = 95 kN, b = 230 mm, d = 400 mm, τc = 0.56 MPa, τc,max = 2.8 MPa. Correct action:",
            [
                "Provide shear steel (τc < τv < τc,max)",
                "No shear steel",
                "Revise section (τv > τc,max)",
                "Torsion steel only",
            ],
            0,
            "Hard",
            "Numerical+Application",
            "τv = 95000/(230×400) ≈ 1.03 MPa; τc < τv < τc,max → provide shear reinforcement.",
            "τv = Vu/(bd)",
        )
    )
    qs.append(
        q(
            23,
            "RCC / DDRC",
            "Development length",
            "Fe415, φ = 16 mm, τbd = 1.2 × 1.6 = 1.92 MPa (deformed, tension), σs = 0.87 fy. Development length Ld (mm) closest to:",
            ["752", "564", "940", "376"],
            0,
            "Medium",
            "Numerical",
            "Ld = φ σs /(4 τbd) = 16×0.87×415/(4×1.92) ≈ 752 mm.",
            "Ld = φσs/(4τbd)",
        )
    )
    qs.append(
        q(
            24,
            "RCC / DDRC",
            "Two-way strips",
            "From the two-way slab strip sketch shown, the middle strip width is:",
            ["3/4 of panel width", "1/8 of panel width", "Full width", "1/2 of panel width"],
            0,
            "Medium",
            "Diagram+Application",
            "Middle strip is commonly three-quarters of the panel width; edge strips take the remainder.",
            "",
            f"{IMG}/q24-slab-strips.svg",
        )
    )
    qs.append(
        q(
            25,
            "RCC / DDRC",
            "Doubly reinforced",
            "If Mu = 160 kN·m and Mulim (singly) = 138 kN·m for the same section, the correct approach is:",
            [
                "Provide compression steel (doubly reinforced)",
                "Ignore and use singly",
                "Reduce d",
                "Use only minimum steel",
            ],
            0,
            "Medium",
            "Numerical+Application",
            "Mu > Mulim → add compression steel (doubly reinforced section).",
            "",
        )
    )
    qs.append(
        q(
            26,
            "RCC / DDRC",
            "Minimum steel",
            "b = 230 mm, d = 450 mm, Fe415. Minimum Ast (mm²) ≈",
            ["212", "276", "391", "104"],
            0,
            "Easy",
            "Standard+Numerical",
            "Ast,min = 0.85 bd/fy = 0.85×230×450/415 ≈ 212 mm².",
            "Ast,min = 0.85 bd/fy",
        )
    )
    qs.append(
        q(
            27,
            "RCC / DDRC",
            "Stirrup spacing",
            "Required stirrup spacing sv = 280 mm; d = 350 mm; code max = 0.75d. Provide:",
            ["262 mm", "280 mm", "350 mm", "0.75 mm"],
            0,
            "Medium",
            "Application",
            "0.75d = 262.5 mm < 280 → provide 262 mm.",
            "sv ≤ 0.75d",
        )
    )
    qs.append(
        q(
            28,
            "RCC / DDRC",
            "Site practice",
            "After deshuttering, a column face shows deep honeycombing with bars visible. Correct immediate action:",
            [
                "Structural assessment — chip to sound concrete and approved repair, not cosmetic plaster",
                "Plaster and paint only",
                "Add water next pour only",
                "Ignore if cubes OK",
            ],
            0,
            "Easy",
            "Practical",
            "Exposed bars with deep honeycombing need assessment and proper structural repair.",
            "",
        )
    )

    # --- Fluid Q29–Q39 ---
    qs.append(
        q(
            29,
            "Fluid Mechanics & Hydraulic Machinery",
            "Jet on plate",
            "A jet of discharge Q0 hits a hinged/inclined plate as shown. One side split shows Q1 = 0.25 Q0. Assuming no impact loss, θ is such that:",
            [
                "tan θ is related to (Q2 − Q1)/Q0 from momentum using the figure split",
                "θ = 0 always",
                "θ = 90° always",
                "θ is independent of Q1",
            ],
            0,
            "Medium",
            "Diagram+Application",
            "Discharge split depends on plate inclination; momentum balance with Q1, Q2 from the figure gives θ.",
            "",
            f"{IMG}/q29-jet-plate.svg",
        )
    )
    qs.append(
        q(
            30,
            "Fluid Mechanics & Hydraulic Machinery",
            "Orifice coefficients",
            "Cd = 0.62, Cc = 0.64. Cv closest to:",
            ["0.97", "1.26", "0.62", "0.40"],
            0,
            "Easy",
            "Numerical",
            "Cv = Cd/Cc = 0.62/0.64 ≈ 0.97.",
            "Cv = Cd/Cc",
        )
    )
    qs.append(
        q(
            31,
            "Fluid Mechanics & Hydraulic Machinery",
            "Continuity",
            "A pipe reduces from 300 mm to 150 mm diameter. Velocity at the larger end V1 = 1.2 m/s. Velocity V2 is:",
            ["4.8 m/s", "2.4 m/s", "1.2 m/s", "0.3 m/s"],
            0,
            "Medium",
            "Numerical",
            "A1V1 = A2V2 → V2 = V1 (D1/D2)² = 1.2 × 4 = 4.8 m/s.",
            "A1V1 = A2V2",
        )
    )
    qs.append(
        q(
            32,
            "Fluid Mechanics & Hydraulic Machinery",
            "Reynolds number",
            "Flow in a 50 mm pipe with V = 0.02 m/s and ν = 1×10⁻⁶ m²/s. The regime is:",
            ["Laminar", "Turbulent", "Ideal only", "Sonic"],
            0,
            "Easy",
            "Conceptual",
            "Re = VD/ν = 0.02 × 0.05 / 1e-6 = 1000 < 2000 → laminar.",
            "Re = VD/ν",
        )
    )
    qs.append(
        q(
            33,
            "Fluid Mechanics & Hydraulic Machinery",
            "Specific energy / q–h",
            "On the shown q–h curve, qmax corresponds to:",
            ["Fr = 1 (critical)", "Fr → ∞", "Dry bed", "Fr = 0"],
            0,
            "Medium",
            "Graph",
            "Maximum discharge for given specific energy occurs at critical flow (Fr = 1).",
            "",
            f"{IMG}/q33-qh-curve.svg",
        )
    )
    qs.append(
        q(
            34,
            "Fluid Mechanics & Hydraulic Machinery",
            "Turbine selection",
            "Site data: H ≈ 320 m, Q small. Preferred turbine:",
            ["Pelton", "Francis", "Kaplan", "Propeller only"],
            0,
            "Hard",
            "Application",
            "High head, low discharge → Pelton.",
            "",
        )
    )
    qs.append(
        q(
            35,
            "Fluid Mechanics & Hydraulic Machinery",
            "Specific speed",
            "If Ns is high (~300–1000 metric) for a turbine, the machine tends to be:",
            ["Axial flow / Kaplan type", "Pelton only", "Reciprocating pump", "Jet pump"],
            0,
            "Medium",
            "Conceptual",
            "High specific speed corresponds to axial-flow (Kaplan) turbines.",
            "",
        )
    )
    qs.append(
        q(
            36,
            "Fluid Mechanics & Hydraulic Machinery",
            "Matching matrix",
            "Match:\n1 Pelton  2 Francis  3 Kaplan  4 Centrifugal pump\nP: low H, high Q   Q: high H, low Q   R: medium H   S: adds energy to liquid\nCorrect matching:",
            [
                "1-Q, 2-R, 3-P, 4-S",
                "1-P, 2-Q, 3-R, 4-S",
                "1-Q, 2-P, 3-R, 4-S",
                "1-R, 2-Q, 3-P, 4-S",
            ],
            0,
            "Medium",
            "Matching Matrix",
            "Pelton → high H low Q; Francis → medium H; Kaplan → low H high Q; pump adds energy.",
            "",
        )
    )
    qs.append(
        q(
            37,
            "Fluid Mechanics & Hydraulic Machinery",
            "Jet force",
            "Vj = 42 m/s, flat vanes u = 14 m/s, Q = 0.06 m³/s, ρ = 1000 kg/m³. Force on vanes ≈",
            ["1680 N", "2520 N", "840 N", "980 N"],
            0,
            "Hard",
            "Numerical",
            "F = ρQ(Vj − u) = 1000 × 0.06 × 28 = 1680 N.",
            "F = ρQ(Vj − u)",
        )
    )
    qs.append(
        q(
            38,
            "Fluid Mechanics & Hydraulic Machinery",
            "NPSH / cavitation",
            "NPSH available falling below NPSH required primarily risks:",
            ["Cavitation", "Higher viscosity", "Laminar only", "Zero density"],
            0,
            "Easy",
            "Conceptual",
            "Insufficient NPSH causes cavitation.",
            "",
        )
    )
    qs.append(
        q(
            39,
            "Fluid Mechanics & Hydraulic Machinery",
            "Water hammer",
            "Long rising main; rapid valve closure caused pressure spikes. Best primary mitigation set:",
            [
                "Slow closure + surge tank/air vessel as designed",
                "Close faster",
                "Remove all valves",
                "Only paint pipe",
            ],
            0,
            "Hard",
            "Practical",
            "Control closure rate and provide surge protection devices.",
            "",
        )
    )

    # --- Steel Q40–Q51 ---
    qs.append(
        q(
            40,
            "Steel Structures",
            "Net area — chain bolting",
            "For the chain bolting path shown, b = 200 mm, t = 10 mm, dh = 18 mm. If the figure shows n = 2 holes on the critical chain path, An = (b − n dh)t equals:",
            ["1640 mm²", "2000 mm²", "164 mm²", "360 mm²"],
            0,
            "Medium",
            "Diagram+Numerical",
            "An = (200 − 2×18)×10 = 1640 mm².",
            "An = (b − n dh)t",
            f"{IMG}/q40-chain-bolting.svg",
        )
    )
    qs.append(
        q(
            41,
            "Steel Structures",
            "Tension capacity",
            "Plate fy = 250 MPa, Ag = 1200 mm². Design yield capacity Tdg = Ag fy/γm0 with γm0 = 1.1 ≈",
            ["273 kN", "300 kN", "180 kN", "250 kN"],
            0,
            "Easy",
            "Standard Application",
            "Tdg = 1200×250/1.1 = 272727 N ≈ 273 kN.",
            "Tdg = Ag fy/γm0",
        )
    )
    qs.append(
        q(
            42,
            "Steel Structures",
            "Lacing",
            "Assertion (A): Lacings make built-up column parts act together.\nReason (R): Lacings never carry shear from transverse loading and are tension-only always.\nChoose:",
            [
                "Both A and R true; R explains A",
                "Both A and R true; R does not explain A",
                "A true, R false",
                "A false, R true",
            ],
            2,
            "Medium",
            "AR",
            "A is true; R is false — lacings are designed for shear force from transverse loading.",
            "",
        )
    )
    qs.append(
        q(
            43,
            "Steel Structures",
            "Tension member checks",
            "A tension member with holes: design must satisfy:",
            [
                "Tdg (yield gross) and Tdn (rupture net) — lesser governs",
                "Euler only",
                "Concrete bearing",
                "Ld only",
            ],
            0,
            "Medium",
            "Application",
            "Both gross yield and net rupture must be checked; lesser capacity governs.",
            "",
        )
    )
    qs.append(
        q(
            44,
            "Steel Structures",
            "Fillet weld",
            "In the fillet weld detail shown, the shortest distance from root to the hypotenuse face is called:",
            ["Throat", "Leg", "Toe only", "Root gap"],
            0,
            "Medium",
            "Diagram",
            "Throat is the perpendicular distance from root to face of the weld.",
            "",
            f"{IMG}/q44-fillet-weld.svg",
        )
    )
    qs.append(
        q(
            45,
            "Steel Structures",
            "Buckling curves",
            "From the buckling curves shown, at the same non-dimensional slenderness λ ≈ 1.0, the highest fcd/fy belongs to curve:",
            ["a", "b", "c", "d"],
            0,
            "Hard",
            "Graph",
            "Curve ‘a’ is the most favourable buckling curve.",
            "",
            f"{IMG}/q45-buckling-curves.svg",
        )
    )
    qs.append(
        q(
            46,
            "Steel Structures",
            "Plastic moment",
            "Zp = 8×10⁵ mm³, fy = 250 MPa, γm0 = 1.1. Design plastic moment Mp ≈",
            ["181.8 kN·m", "200 kN·m", "90.9 kN·m", "250 kN·m"],
            0,
            "Hard",
            "Numerical",
            "Mp = Zp fy/γm0 = 8e5 × 250 / 1.1 = 1.818e8 N·mm ≈ 181.8 kN·m.",
            "Mp = Zp fy/γm0",
        )
    )
    qs.append(
        q(
            47,
            "Steel Structures",
            "Web crippling",
            "Local deformation of the web under concentrated load/reaction as shown is:",
            ["Web crippling", "LTB", "Weld fatigue only", "Bolt corrosion"],
            0,
            "Medium",
            "Diagram+Application",
            "Local web crushing/buckling under concentrated force is web crippling.",
            "",
            f"{IMG}/q47-web-crippling.svg",
        )
    )
    qs.append(
        q(
            48,
            "Steel Structures",
            "Bolt pitch",
            "Bolt diameter 20 mm. Minimum pitch along load ≥",
            ["50 mm", "20 mm", "32 mm", "16 mm"],
            0,
            "Easy",
            "Standard+Numerical",
            "Minimum pitch = 2.5d = 50 mm.",
            "p ≥ 2.5d",
        )
    )
    qs.append(
        q(
            49,
            "Steel Structures",
            "Weld quality",
            "A welded splice shows undercut and incomplete fusion at the root. Site decision:",
            [
                "Reject/repair weld per engineer — do not accept as-is",
                "Paint over",
                "Accept if length OK",
                "Ignore",
            ],
            0,
            "Medium",
            "Practical",
            "Undercut and incomplete fusion are rejectable defects unless repaired/accepted by engineer after assessment.",
            "",
        )
    )
    qs.append(
        q(
            50,
            "Steel Structures",
            "Column buckling",
            "Same section, same effective length about both axes, rx > ry. Buckling governs about:",
            ["y–y (weak)", "x–x", "Either same", "Torsion only always"],
            0,
            "Hard",
            "Application",
            "λ = Le/r is larger for smaller r → weak (y–y) axis governs.",
            "λ = Le/r",
        )
    )
    qs.append(
        q(
            51,
            "Steel Structures",
            "Purlins",
            "Purlin design load path: roof sheet → purlin →",
            ["Truss rafter / top chord", "Pile", "Retaining wall", "Raft"],
            0,
            "Easy",
            "Conceptual",
            "Purlins transfer roof load to the truss rafter/top chord.",
            "",
        )
    )

    # --- Foundation Q52–Q61 ---
    qs.append(
        q(
            52,
            "Foundation Engineering",
            "Terzaghi bearing capacity",
            "φ = 30°, c′ = 0, γ = 18 kN/m³, Df = 1.2 m, B = 2.0 m square. Terzaghi factors Nc = 30.14, Nq = 18.4, Nγ = 15.7. Using qu = 1.3 c Nc + γ Df Nq + 0.4 γ B Nγ with c = 0, qu closest to:",
            ["622 kPa", "398 kPa", "226 kPa", "100 kPa"],
            0,
            "Easy",
            "Standard+Numerical",
            "γDf Nq = 18×1.2×18.4 = 397.4; 0.4γB Nγ = 0.4×18×2×15.7 = 226.1; qu ≈ 623.5 kPa.",
            "qu = γDf Nq + 0.4 γ B Nγ (c=0, square)",
        )
    )
    qs.append(
        q(
            53,
            "Foundation Engineering",
            "Compensated raft",
            "For the compensated raft as shown, net pressure ≈ 0 when:",
            ["Q/A = γ Df", "Q = 0", "Df = 0", "Q = γ"],
            0,
            "Medium",
            "Diagram+Conceptual",
            "Fully compensated when building pressure equals excavated overburden γ Df.",
            "qnet = Q/A − γ Df",
            f"{IMG}/q53-compensated-raft.svg",
        )
    )
    qs.append(
        q(
            54,
            "Foundation Engineering",
            "Settlement",
            "Differential settlement is more critical mainly because:",
            [
                "It causes distortion/cracking",
                "Colour change",
                "It raises fy",
                "Zero stress",
            ],
            0,
            "Medium",
            "Conceptual",
            "Differential settlement induces distortion and structural cracking.",
            "",
        )
    )
    qs.append(
        q(
            55,
            "Foundation Engineering",
            "Foundation selection",
            "Exterior column near a property line with large moment — preferred foundation:",
            [
                "Combined/strap footing to control eccentricity",
                "Tiny isolated always",
                "Ignore moment",
                "Timber sleeper only",
            ],
            0,
            "Hard",
            "Application",
            "Combined or strap footing controls eccentricity near property line.",
            "",
        )
    )
    qs.append(
        q(
            56,
            "Foundation Engineering",
            "Safe bearing capacity",
            "If net ultimate bearing capacity qnu = 600 kPa and FOS = 3, net safe bearing capacity qns is:",
            ["200 kPa", "600 kPa", "1800 kPa", "100 kPa"],
            0,
            "Easy",
            "Conceptual",
            "qns = qnu / FOS = 600/3 = 200 kPa.",
            "qns = qnu/FOS",
        )
    )
    qs.append(
        q(
            57,
            "Foundation Engineering",
            "Layered settlement",
            "For the 2×2 footing on layered soil as shown, the primary concern in the stiff clay layer under the footing is:",
            [
                "Consolidation settlement",
                "Steel rust",
                "Zero always",
                "Only concrete elasticity",
            ],
            0,
            "Hard",
            "Diagram+Application",
            "Clay layers undergo consolidation settlement under sustained load.",
            "",
            f"{IMG}/q57-footing-layers.svg",
        )
    )
    qs.append(
        q(
            58,
            "Foundation Engineering",
            "Contact pressure",
            "From the figure: X is elastic footing, Y is rigid footing, same uniform top pressure on isotropic elastic soil. Soil reaction distribution is:",
            [
                "Uniform for X, not for Y",
                "Uniform for Y, not for X",
                "Both uniform",
                "Both non-uniform",
            ],
            0,
            "Medium",
            "Table/Figure",
            "Flexible (elastic) footing → roughly uniform contact pressure; rigid footing → non-uniform (higher at edges on elastic soil).",
            "",
            f"{IMG}/q58-elastic-rigid.svg",
        )
    )
    qs.append(
        q(
            59,
            "Foundation Engineering",
            "Raft",
            "A raft foundation is typically used when:",
            [
                "Low SBC + heavy loads / settlement control",
                "One tiny column",
                "Rock + tiny loads",
                "No columns",
            ],
            0,
            "Easy",
            "Conceptual",
            "Rafts are preferred for low SBC with heavy loads and settlement control.",
            "",
        )
    )
    qs.append(
        q(
            60,
            "Foundation Engineering",
            "Excavation risk",
            "Excavation beside an existing footing — critical risk:",
            [
                "Undermining the existing foundation",
                "Raise old fy",
                "Reprint code year",
                "Colour only",
            ],
            0,
            "Medium",
            "Practical",
            "Adjacent excavation can undermine and reduce support to existing foundations.",
            "",
        )
    )
    qs.append(
        q(
            61,
            "Foundation Engineering",
            "Immediate settlement",
            "Immediate settlement on clay is mainly controlled by:",
            [
                "Es, influence factors, net pressure, size",
                "Secondary only always",
                "Colour",
                "Ast only",
            ],
            0,
            "Medium",
            "Conceptual",
            "Immediate settlement depends on elastic modulus, geometry, and net pressure.",
            "",
        )
    )

    # --- Soil Q62–Q70 ---
    qs.append(
        q(
            62,
            "Soil Mechanics",
            "Rankine earth pressure",
            "In the Rankine active graphical figure shown, length OP represents:",
            [
                "Lateral earth pressure at the base",
                "Vertical stress at H/3",
                "Wall friction",
                "Passive pressure at top",
            ],
            0,
            "Medium",
            "Diagram",
            "OP is the base of the active pressure triangle = Ka γ H.",
            "pa = Ka γ H",
            f"{IMG}/q62-rankine-op.svg",
        )
    )
    qs.append(
        q(
            63,
            "Soil Mechanics",
            "Compaction",
            "Assertion (A): Compaction increases γd and reduces voids.\nReason (R): OMC is the water content at MDD for a given compaction energy.\nChoose:",
            [
                "Both A and R true; R explains A",
                "Both A and R true; R does not explain A",
                "A true, R false",
                "A false, R true",
            ],
            1,
            "Medium",
            "AR",
            "Both statements are true, but R defines OMC/MDD and does not explain why compaction increases γd.",
            "",
        )
    )
    qs.append(
        q(
            64,
            "Soil Mechanics",
            "Phase relations",
            "G = 2.7, w = 18%, S = 75%. Void ratio e =",
            ["0.648", "0.486", "0.750", "0.200"],
            0,
            "Easy",
            "Numerical",
            "e = wG/S = 0.18×2.7/0.75 = 0.648.",
            "e = wG/S",
        )
    )
    qs.append(
        q(
            65,
            "Soil Mechanics",
            "Phase relations",
            "G = 2.68, e = 0.55, S = 0.80. Water content w (%) ≈",
            ["16.4", "20.5", "12.0", "25"],
            0,
            "Medium",
            "Numerical",
            "w = Se/G = 0.80×0.55/2.68 ≈ 0.164 → 16.4%.",
            "w = Se/G",
        )
    )
    qs.append(
        q(
            66,
            "Soil Mechanics",
            "Active earth pressure",
            "φ = 30°, γ = 18 kN/m³, H = 4 m, c = 0, horizontal backfill. Total active thrust Pa (kN/m) ≈",
            ["48", "72", "96", "36"],
            0,
            "Hard",
            "Numerical",
            "Ka = (1−sinφ)/(1+sinφ) = 1/3; Pa = 0.5 Ka γ H² = 0.5×(1/3)×18×16 = 48 kN/m.",
            "Pa = 0.5 Ka γ H²",
        )
    )
    qs.append(
        q(
            67,
            "Soil Mechanics",
            "Atterberg limits",
            "Plasticity index IP =",
            ["WL − WP", "WP − WS", "WL − WS", "WP only"],
            0,
            "Medium",
            "Conceptual",
            "IP = liquid limit − plastic limit.",
            "IP = WL − WP",
        )
    )
    qs.append(
        q(
            68,
            "Soil Mechanics",
            "Stress–strain behaviour",
            "From the dense sand / OC clay stress–strain curves shown, the typical response is:",
            [
                "Peak then softening",
                "No peak always like loose",
                "Zero strength",
                "φu = 0 always",
            ],
            0,
            "Hard",
            "Graph",
            "Dense sand/OC clay show peak strength followed by strain softening.",
            "",
            f"{IMG}/q68-stress-strain.svg",
        )
    )
    qs.append(
        q(
            69,
            "Soil Mechanics",
            "Seepage / quicksand",
            "Upward seepage making σ′ → 0 in sand causes the phenomenon:",
            ["Quicksand / boiling", "Compaction", "Capillarity rise only", "Overconsolidation"],
            0,
            "Medium",
            "Application",
            "Zero effective stress under upward seepage → quicksand/boiling.",
            "σ′ = σ − u",
        )
    )
    qs.append(
        q(
            70,
            "Soil Mechanics",
            "Consolidation",
            "Primary consolidation of saturated clay is mainly due to:",
            [
                "Pore-water expulsion under load",
                "Elastic water compression alone",
                "Sand boil only",
                "Steel rust",
            ],
            0,
            "Easy",
            "Conceptual",
            "Primary consolidation is expulsion of pore water under load.",
            "",
        )
    )

    # --- Non-core Q71–Q100 ---
    noncore = [
        (
            71,
            "Quantitative Aptitude",
            "Work–time",
            "Easy",
            "12 men can complete a work in 15 days. In how many days can 9 men complete the same work?",
            ["20", "18", "16", "10"],
            0,
            "Men-days constant: 12×15 = 9×d → d = 20.",
            "M1 D1 = M2 D2",
        ),
        (
            72,
            "Quantitative Aptitude",
            "CI–SI",
            "Easy",
            "Difference between CI (annual) and SI on ₹5000 at 10% for 2 years is:",
            ["50", "100", "500", "25"],
            0,
            "CI = 1050, SI = 1000; difference = 50.",
            "CI − SI = P(r/100)² for 2 years",
        ),
        (
            73,
            "Quantitative Aptitude",
            "Alligation / mixture",
            "Medium",
            "An alloy of Cu:Zn = 3:2 has mass 40 kg. How much copper must be added to make Cu:Zn = 2:1?",
            ["8 kg", "10 kg", "6 kg", "4 kg"],
            0,
            "Cu = 24, Zn = 16; need Cu = 2×16 = 32 → add 8 kg.",
            "",
        ),
        (
            74,
            "Quantitative Aptitude",
            "Average",
            "Medium",
            "Average of 8 numbers is 25. One number 40 is replaced by 16. New average is:",
            ["22", "24", "20", "18"],
            0,
            "Change in sum = −24; new avg = 25 − 24/8 = 22.",
            "",
        ),
        (
            75,
            "Quantitative Aptitude",
            "Ratio",
            "Medium",
            "If A:B = 5:7 and B:C = 2:3, then A:C is:",
            ["10:21", "5:3", "2:7", "5:21"],
            0,
            "A:B:C = 10:14:21 → A:C = 10:21.",
            "",
        ),
        (
            76,
            "Quantitative Aptitude",
            "Boats & streams",
            "Hard",
            "Boat speed in still water 15 km/h, stream 3 km/h. Time to go 24 km upstream:",
            ["2 h", "1.6 h", "3 h", "1 h"],
            0,
            "Upstream speed = 12 km/h; t = 24/12 = 2 h.",
            "",
        ),
        (
            77,
            "Quantitative Aptitude",
            "Algebra",
            "Hard",
            "If x² + 1/x² = 7, then x + 1/x (positive) equals:",
            ["3", "√7", "√5", "2"],
            0,
            "(x+1/x)² = x²+2+1/x² = 9 → x+1/x = 3.",
            "",
        ),
        (
            78,
            "Quantitative Aptitude",
            "Series",
            "Medium",
            "Find the next term: 7, 10, 16, 28, 52, ?",
            ["100", "96", "84", "78"],
            0,
            "Differences +3,+6,+12,+24,+48 → next = 52+48 = 100.",
            "",
        ),
        (
            79,
            "General Awareness",
            "APTRANSCO",
            "Easy",
            "APTRANSCO primarily functions as:",
            [
                "Andhra Pradesh transmission utility",
                "Municipal bus operator",
                "RBI subsidiary",
                "NHAI only",
            ],
            0,
            "APTRANSCO is the state transmission utility.",
            "",
        ),
        (
            80,
            "General Awareness",
            "Power system",
            "Easy",
            "Nominal grid frequency in India is:",
            ["50 Hz", "60 Hz", "40 Hz", "100 Hz"],
            0,
            "India operates at 50 Hz.",
            "",
        ),
        (
            81,
            "General Awareness",
            "Polity",
            "Medium",
            "The highest civil court in India is:",
            ["Supreme Court", "High Court only", "District Court", "Lok Adalat only"],
            0,
            "Supreme Court is the apex court.",
            "",
        ),
        (
            82,
            "General Awareness",
            "Economy",
            "Medium",
            "The body that replaced the Planning Commission is:",
            ["NITI Aayog", "RBI", "SEBI", "IRDAI"],
            0,
            "NITI Aayog replaced the Planning Commission.",
            "",
        ),
        (
            83,
            "General Awareness",
            "Science",
            "Medium",
            "SI unit of power is:",
            ["Watt", "Joule", "Pascal", "Coulomb"],
            0,
            "Power unit is watt (J/s).",
            "",
        ),
        (
            84,
            "General Awareness",
            "Energy",
            "Hard",
            "A ‘green corridor’ for RE integration mainly concerns:",
            [
                "Power transmission of renewables",
                "Only forestry roads",
                "Only metro paint",
                "Only banking",
            ],
            0,
            "Green corridors are transmission corridors for renewable energy.",
            "",
        ),
        (
            85,
            "General Awareness",
            "Power system",
            "Hard",
            "A typical ISTS voltage class in India is:",
            ["400/765 kV class", "12 V", "48 V", "5 V USB"],
            0,
            "Inter-state transmission uses EHV classes such as 400/765 kV.",
            "",
        ),
        (
            86,
            "Reasoning",
            "Odd one out",
            "Easy",
            "Odd one out: Rectangle, Square, Rhombus, Sphere",
            ["Sphere", "Square", "Rhombus", "Rectangle"],
            0,
            "Sphere is 3D; others are 2D quadrilaterals.",
            "",
        ),
        (
            87,
            "Reasoning",
            "Ranking",
            "Medium",
            "P is 16th from the left and 15th from the right in a row. Number of persons in the row is:",
            ["30", "31", "32", "29"],
            0,
            "n = 16 + 15 − 1 = 30.",
            "n = L + R − 1",
        ),
        (
            88,
            "Reasoning",
            "Series",
            "Medium",
            "Find next: 5, 11, 24, 51, 106, ?",
            ["217", "215", "220", "212"],
            0,
            "Pattern ×2+1, ×2+2, ×2+3, ×2+4, ×2+5 → 106×2+5 = 217.",
            "",
        ),
        (
            89,
            "Reasoning",
            "Syllogism",
            "Medium",
            "Statements: All A are B; Some B are C. Conclusion: Some A are C.",
            ["Does not follow", "Follows", "Either follows", "Follows if reverse"],
            0,
            "Particular conclusion about A and C is not definite from the given statements.",
            "",
        ),
        (
            90,
            "Reasoning",
            "Ranking",
            "Hard",
            "60 students; A is 18th from left; B is 20th from right. If A is to the left of B, students between A and B:",
            ["22", "21", "23", "19"],
            0,
            "B from left = 60−20+1 = 41; between = 41−18−1 = 22.",
            "",
        ),
        (
            91,
            "English",
            "Spelling",
            "Easy",
            "Choose the correctly spelled word:",
            ["Privileged", "Priviledged", "Priveleged", "Privleged"],
            0,
            "Correct spelling is Privileged.",
            "",
        ),
        (
            92,
            "English",
            "Synonym",
            "Medium",
            "Synonym of Candid:",
            ["Frank", "Biased", "Vague", "Silent"],
            0,
            "Candid means frank/open.",
            "",
        ),
        (
            93,
            "English",
            "Antonym",
            "Medium",
            "Antonym of Scarce:",
            ["Abundant", "Rare", "Lean", "Sparse"],
            0,
            "Scarce ↔ abundant.",
            "",
        ),
        (
            94,
            "English",
            "Grammar",
            "Medium",
            "Neither the engineer nor the officers ___ present.",
            ["were", "was", "is", "be"],
            0,
            "Verb agrees with the nearer subject ‘officers’ → were.",
            "",
        ),
        (
            95,
            "English",
            "One-word",
            "Hard",
            "One word for ‘killing of a king’:",
            ["Regicide", "Homicide", "Patricide", "Infanticide"],
            0,
            "Regicide = killing of a king.",
            "",
        ),
        (
            96,
            "Computer Awareness",
            "Memory",
            "Easy",
            "Which is non-volatile memory?",
            ["ROM", "RAM", "Cache only always", "Registers only"],
            0,
            "ROM retains data without power.",
            "",
        ),
        (
            97,
            "Computer Awareness",
            "OSI",
            "Medium",
            "OSI layer responsible for routing is:",
            ["Network", "Physical", "Session", "Presentation"],
            0,
            "Routing is a Network-layer function.",
            "",
        ),
        (
            98,
            "Computer Awareness",
            "DBMS",
            "Medium",
            "A primary key must be:",
            ["Unique and NOT NULL", "Duplicate OK", "NULL OK", "No constraint"],
            0,
            "Primary key is unique and not null.",
            "",
        ),
        (
            99,
            "Computer Awareness",
            "DBMS ACID",
            "Hard",
            "In ACID properties of DBMS, ‘I’ stands for:",
            ["Isolation", "Indexing", "Internet", "Integer"],
            0,
            "ACID: Atomicity, Consistency, Isolation, Durability.",
            "",
        ),
        (
            100,
            "Computer Awareness",
            "Cryptography",
            "Hard",
            "For confidentiality with public-key encryption, the sender encrypts using:",
            [
                "Recipient’s public key",
                "Sender’s public key only always",
                "Only hashing",
                "Only MAC",
            ],
            0,
            "Encrypt with recipient’s public key so only recipient can decrypt with private key.",
            "",
        ),
    ]

    for (
        id_,
        subject,
        topic,
        difficulty,
        question,
        options,
        answer,
        explanation,
        formula,
    ) in noncore:
        qs.append(
            q(
                id_,
                subject,
                topic,
                question,
                options,
                answer,
                difficulty,
                "Conceptual",
                explanation,
                formula,
            )
        )

    assert len(qs) == 100, len(qs)
    assert [x["id"] for x in qs] == list(range(1, 101))
    return qs


SVGS = {
    "q03-beam-udl.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="920" height="320" viewBox="0 0 920 320">
  <rect width="920" height="320" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20" fill="#0f172a">Simply supported beam with UDL on CD</text>
  <line x1="80" y1="160" x2="840" y2="160" stroke="#0f172a" stroke-width="6"/>
  <polygon points="80,160 60,200 100,200" fill="#334155"/>
  <polygon points="840,160 820,200 860,200" fill="#334155"/>
  <text x="70" y="230" font-family="Segoe UI, Arial" font-size="18">A</text>
  <text x="830" y="230" font-family="Segoe UI, Arial" font-size="18">B</text>
  <text x="250" y="150" font-family="Segoe UI, Arial" font-size="18">C</text>
  <text x="620" y="150" font-family="Segoe UI, Arial" font-size="18">D</text>
  <line x1="270" y1="100" x2="630" y2="100" stroke="#b91c1c" stroke-width="2"/>
  <g stroke="#b91c1c" stroke-width="2">
    <line x1="290" y1="100" x2="290" y2="150"/><line x1="330" y1="100" x2="330" y2="150"/>
    <line x1="370" y1="100" x2="370" y2="150"/><line x1="410" y1="100" x2="410" y2="150"/>
    <line x1="450" y1="100" x2="450" y2="150"/><line x1="490" y1="100" x2="490" y2="150"/>
    <line x1="530" y1="100" x2="530" y2="150"/><line x1="570" y1="100" x2="570" y2="150"/>
    <line x1="610" y1="100" x2="610" y2="150"/>
  </g>
  <text x="400" y="88" font-family="Segoe UI, Arial" font-size="18" fill="#b91c1c">w = 10 kN/m</text>
  <line x1="80" y1="260" x2="270" y2="260" stroke="#0369a1" stroke-width="2"/>
  <line x1="270" y1="260" x2="630" y2="260" stroke="#0369a1" stroke-width="2"/>
  <line x1="630" y1="260" x2="840" y2="260" stroke="#0369a1" stroke-width="2"/>
  <text x="140" y="290" font-family="Segoe UI, Arial" font-size="16" fill="#0369a1">1.5 m</text>
  <text x="420" y="290" font-family="Segoe UI, Arial" font-size="16" fill="#0369a1">3.0 m</text>
  <text x="700" y="290" font-family="Segoe UI, Arial" font-size="16" fill="#0369a1">1.5 m</text>
  <line x1="270" y1="155" x2="270" y2="165" stroke="#0f172a" stroke-width="3"/>
  <line x1="630" y1="155" x2="630" y2="165" stroke="#0f172a" stroke-width="3"/>
</svg>
""",
    "q05-mohr-element.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="900" height="360" viewBox="0 0 900 360">
  <rect width="900" height="360" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">Plane stress element (for Mohr centre)</text>
  <rect x="120" y="100" width="160" height="160" fill="#e2e8f0" stroke="#0f172a" stroke-width="3"/>
  <text x="170" y="90" font-family="Segoe UI, Arial" font-size="16">py</text>
  <text x="300" y="185" font-family="Segoe UI, Arial" font-size="16">px</text>
  <defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0f172a"/></marker></defs>
  <line x1="200" y1="100" x2="200" y2="70" stroke="#0f172a" stroke-width="2" marker-end="url(#a)"/>
  <line x1="280" y1="180" x2="330" y2="180" stroke="#0f172a" stroke-width="2" marker-end="url(#a)"/>
  <line x1="450" y1="260" x2="820" y2="260" stroke="#334155" stroke-width="2"/>
  <line x1="620" y1="80" x2="620" y2="320" stroke="#334155" stroke-width="2"/>
  <text x="800" y="285" font-family="Segoe UI, Arial" font-size="16">p (σ)</text>
  <text x="630" y="95" font-family="Segoe UI, Arial" font-size="16">q (τ)</text>
  <circle cx="680" cy="260" r="5" fill="#b91c1c"/>
  <text x="690" y="250" font-family="Segoe UI, Arial" font-size="16" fill="#b91c1c">Centre on p-axis</text>
  <text x="450" y="340" font-family="Segoe UI, Arial" font-size="15">Centre at ((px+py)/2 , 0) — not on q-axis</text>
</svg>
""",
    "q07-shaft-abc.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="900" height="280" viewBox="0 0 900 280">
  <rect width="900" height="280" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">Shaft ABC — torques as shown</text>
  <line x1="100" y1="140" x2="800" y2="140" stroke="#0f172a" stroke-width="10"/>
  <circle cx="100" cy="140" r="18" fill="#94a3b8" stroke="#0f172a"/>
  <circle cx="450" cy="140" r="14" fill="#cbd5e1" stroke="#0f172a"/>
  <circle cx="800" cy="140" r="14" fill="#cbd5e1" stroke="#0f172a"/>
  <text x="90" y="190" font-family="Segoe UI, Arial" font-size="18">A (fixed)</text>
  <text x="440" y="190" font-family="Segoe UI, Arial" font-size="18">B</text>
  <text x="790" y="190" font-family="Segoe UI, Arial" font-size="18">C</text>
  <text x="560" y="100" font-family="Segoe UI, Arial" font-size="18" fill="#b91c1c">T = 1000 N·m at C</text>
  <path d="M780,100 a20,20 0 1,1 -20,0" fill="none" stroke="#b91c1c" stroke-width="3"/>
  <text x="250" y="230" font-family="Segoe UI, Arial" font-size="16">Segment AB</text>
  <text x="580" y="230" font-family="Segoe UI, Arial" font-size="16">Segment BC</text>
</svg>
""",
    "q09-uvl-sfd.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="900" height="360" viewBox="0 0 900 360">
  <rect width="900" height="360" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">SS beam — UVL (light→heavy) with SFD</text>
  <line x1="80" y1="120" x2="820" y2="120" stroke="#0f172a" stroke-width="5"/>
  <polygon points="80,120 60,150 100,150" fill="#334155"/>
  <polygon points="820,120 800,150 840,150" fill="#334155"/>
  <path d="M80,118 L820,60 L820,118 Z" fill="#fecaca" stroke="#b91c1c"/>
  <text x="80" y="175" font-family="Segoe UI, Arial" font-size="14">Light end</text>
  <text x="740" y="175" font-family="Segoe UI, Arial" font-size="14">Heavy end</text>
  <line x1="80" y1="260" x2="820" y2="260" stroke="#334155" stroke-width="2"/>
  <path d="M80,220 Q300,220 507,260 Q650,290 820,300" fill="none" stroke="#0369a1" stroke-width="3"/>
  <line x1="507" y1="250" x2="507" y2="270" stroke="#b91c1c" stroke-width="2"/>
  <text x="420" y="245" font-family="Segoe UI, Arial" font-size="15" fill="#b91c1c">V=0 ≈ 0.577L</text>
  <text x="24" y="320" font-family="Segoe UI, Arial" font-size="15">SFD (schematic) — zero shear near 0.577L from light end</text>
</svg>
""",
    "q10-beam-match.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="960" height="520" viewBox="0 0 960 520">
  <rect width="960" height="520" fill="#f8fafc"/>
  <text x="24" y="32" font-family="Segoe UI, Arial" font-size="20">List-I beam sketches (a–d)</text>
  <g transform="translate(40,60)">
    <text x="0" y="0" font-size="16" font-family="Segoe UI, Arial">(a) Cantilever — UDL on outer half</text>
    <line x1="0" y1="40" x2="200" y2="40" stroke="#0f172a" stroke-width="4"/>
    <rect x="-8" y="20" width="8" height="40" fill="#334155"/>
    <path d="M100,20 H200 V40 H100 Z" fill="#fecaca" stroke="#b91c1c"/>
  </g>
  <g transform="translate(500,60)">
    <text x="0" y="0" font-size="16" font-family="Segoe UI, Arial">(b) Cantilever — triangular to fixed</text>
    <line x1="0" y1="40" x2="200" y2="40" stroke="#0f172a" stroke-width="4"/>
    <rect x="-8" y="20" width="8" height="40" fill="#334155"/>
    <path d="M0,10 L0,40 L200,40 Z" fill="#fecaca" stroke="#b91c1c"/>
  </g>
  <g transform="translate(40,260)">
    <text x="0" y="0" font-size="16" font-family="Segoe UI, Arial">(c) SS — full UDL span l</text>
    <line x1="0" y1="50" x2="220" y2="50" stroke="#0f172a" stroke-width="4"/>
    <polygon points="0,50 -10,70 10,70" fill="#334155"/>
    <polygon points="220,50 210,70 230,70" fill="#334155"/>
    <rect x="0" y="20" width="220" height="28" fill="#fecaca" stroke="#b91c1c"/>
  </g>
  <g transform="translate(500,260)">
    <text x="0" y="0" font-size="16" font-family="Segoe UI, Arial">(d) SS — UDL on span 2l</text>
    <line x1="0" y1="50" x2="320" y2="50" stroke="#0f172a" stroke-width="4"/>
    <polygon points="0,50 -10,70 10,70" fill="#334155"/>
    <polygon points="320,50 310,70 330,70" fill="#334155"/>
    <rect x="0" y="20" width="320" height="28" fill="#fecaca" stroke="#b91c1c"/>
    <text x="140" y="95" font-size="14" font-family="Segoe UI, Arial">span = 2l</text>
  </g>
</svg>
""",
    "q15-bmd-jump.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="900" height="300" viewBox="0 0 900 300">
  <rect width="900" height="300" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">BMD with sudden jump at section C</text>
  <line x1="80" y1="80" x2="820" y2="80" stroke="#0f172a" stroke-width="4"/>
  <text x="430" y="70" font-family="Segoe UI, Arial" font-size="16">C (couple)</text>
  <line x1="80" y1="220" x2="820" y2="220" stroke="#334155"/>
  <path d="M80,200 L450,140" stroke="#0369a1" stroke-width="3" fill="none"/>
  <path d="M450,180 L820,200" stroke="#0369a1" stroke-width="3" fill="none"/>
  <line x1="450" y1="140" x2="450" y2="180" stroke="#b91c1c" stroke-width="4"/>
  <text x="460" y="165" font-family="Segoe UI, Arial" font-size="16" fill="#b91c1c">Jump = M</text>
</svg>
""",
    "q20-twoway-table.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="720" height="420" viewBox="0 0 720 420">
  <rect width="720" height="420" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">Simply supported two-way — αx (excerpt)</text>
  <rect x="80" y="70" width="560" height="280" fill="#fff" stroke="#0f172a"/>
  <line x1="80" y1="120" x2="640" y2="120" stroke="#0f172a"/>
  <line x1="220" y1="70" x2="220" y2="350" stroke="#0f172a"/>
  <line x1="360" y1="70" x2="360" y2="350" stroke="#0f172a"/>
  <line x1="500" y1="70" x2="500" y2="350" stroke="#0f172a"/>
  <text x="100" y="105" font-family="Segoe UI, Arial" font-size="16">ly/lx</text>
  <text x="250" y="105" font-family="Segoe UI, Arial" font-size="16">1.0</text>
  <text x="390" y="105" font-family="Segoe UI, Arial" font-size="16">1.5</text>
  <text x="540" y="105" font-family="Segoe UI, Arial" font-size="16">2.0</text>
  <text x="100" y="170" font-family="Segoe UI, Arial" font-size="16">αx</text>
  <text x="245" y="170" font-family="Segoe UI, Arial" font-size="16">0.062</text>
  <rect x="360" y="140" width="140" height="50" fill="#fef08a"/>
  <text x="390" y="170" font-family="Segoe UI, Arial" font-size="16">0.104</text>
  <text x="540" y="170" font-family="Segoe UI, Arial" font-size="16">0.125</text>
  <text x="80" y="390" font-family="Segoe UI, Arial" font-size="15">Use highlighted αx for ly/lx = 1.5</text>
</svg>
""",
    "q24-slab-strips.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="720" height="420" viewBox="0 0 720 420">
  <rect width="720" height="420" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">Two-way slab — middle &amp; edge strips</text>
  <rect x="80" y="70" width="560" height="280" fill="#e2e8f0" stroke="#0f172a" stroke-width="2"/>
  <rect x="150" y="70" width="420" height="280" fill="#bfdbfe" stroke="#0369a1" stroke-width="2"/>
  <text x="300" y="220" font-family="Segoe UI, Arial" font-size="18">Middle strip = 3/4 panel</text>
  <text x="90" y="220" font-family="Segoe UI, Arial" font-size="14" transform="rotate(-90 100 220)">Edge</text>
  <text x="600" y="220" font-family="Segoe UI, Arial" font-size="14">Edge</text>
</svg>
""",
    "q29-jet-plate.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="900" height="360" viewBox="0 0 900 360">
  <rect width="900" height="360" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">Jet on inclined plate — discharge split</text>
  <line x1="80" y1="180" x2="320" y2="180" stroke="#0369a1" stroke-width="8"/>
  <text x="150" y="160" font-family="Segoe UI, Arial" font-size="16">Q0</text>
  <line x1="360" y1="80" x2="520" y2="280" stroke="#0f172a" stroke-width="8"/>
  <text x="500" y="120" font-family="Segoe UI, Arial" font-size="16">θ</text>
  <path d="M480,140 L560,100" stroke="#b91c1c" stroke-width="5"/>
  <text x="570" y="100" font-family="Segoe UI, Arial" font-size="16" fill="#b91c1c">Q1 = 0.25 Q0</text>
  <path d="M480,220 L560,280" stroke="#15803d" stroke-width="5"/>
  <text x="570" y="290" font-family="Segoe UI, Arial" font-size="16" fill="#15803d">Q2 = 0.75 Q0</text>
</svg>
""",
    "q33-qh-curve.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
  <rect width="800" height="400" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">Discharge q vs depth h (specific energy fixed)</text>
  <line x1="100" y1="340" x2="720" y2="340" stroke="#334155" stroke-width="2"/>
  <line x1="100" y1="340" x2="100" y2="60" stroke="#334155" stroke-width="2"/>
  <text x="700" y="365" font-family="Segoe UI, Arial" font-size="16">h</text>
  <text x="40" y="80" font-family="Segoe UI, Arial" font-size="16">q</text>
  <path d="M140,300 Q280,80 400,80 Q520,80 660,300" fill="none" stroke="#0369a1" stroke-width="3"/>
  <circle cx="400" cy="80" r="6" fill="#b91c1c"/>
  <text x="320" y="70" font-family="Segoe UI, Arial" font-size="16" fill="#b91c1c">qmax at Fr=1</text>
</svg>
""",
    "q40-chain-bolting.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="820" height="360" viewBox="0 0 820 360">
  <rect width="820" height="360" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">Plate — critical chain bolting path (n = 2)</text>
  <rect x="80" y="100" width="600" height="160" fill="#e2e8f0" stroke="#0f172a" stroke-width="2"/>
  <circle cx="220" cy="180" r="18" fill="#fff" stroke="#0f172a" stroke-width="3"/>
  <circle cx="420" cy="180" r="18" fill="#fff" stroke="#0f172a" stroke-width="3"/>
  <path d="M80,180 L220,180 L420,180 L680,180" stroke="#b91c1c" stroke-width="3" stroke-dasharray="8 6" fill="none"/>
  <text x="250" y="90" font-family="Segoe UI, Arial" font-size="16">b = 200 mm, t = 10 mm, dh = 18 mm</text>
  <text x="250" y="300" font-family="Segoe UI, Arial" font-size="16" fill="#b91c1c">Critical path crosses n = 2 holes</text>
</svg>
""",
    "q44-fillet-weld.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="720" height="360" viewBox="0 0 720 360">
  <rect width="720" height="360" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">Fillet weld detail</text>
  <rect x="120" y="200" width="400" height="40" fill="#94a3b8"/>
  <rect x="120" y="80" width="40" height="160" fill="#94a3b8"/>
  <path d="M160,200 L280,200 L160,80 Z" fill="#fde68a" stroke="#0f172a" stroke-width="2"/>
  <line x1="160" y1="200" x2="210" y2="150" stroke="#b91c1c" stroke-width="3"/>
  <text x="220" y="150" font-family="Segoe UI, Arial" font-size="16" fill="#b91c1c">Throat</text>
  <text x="200" y="230" font-family="Segoe UI, Arial" font-size="16">Leg</text>
</svg>
""",
    "q45-buckling-curves.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="800" height="420" viewBox="0 0 800 420">
  <rect width="800" height="420" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">Buckling curves a–d</text>
  <line x1="80" y1="360" x2="720" y2="360" stroke="#334155"/>
  <line x1="80" y1="360" x2="80" y2="60" stroke="#334155"/>
  <text x="700" y="385" font-family="Segoe UI, Arial" font-size="16">λ</text>
  <text x="30" y="80" font-family="Segoe UI, Arial" font-size="16">fcd/fy</text>
  <path d="M80,100 Q300,120 500,220 T720,340" fill="none" stroke="#15803d" stroke-width="3"/>
  <path d="M80,110 Q300,140 500,250 T720,350" fill="none" stroke="#0369a1" stroke-width="3"/>
  <path d="M80,125 Q300,165 500,280 T720,360" fill="none" stroke="#b45309" stroke-width="3"/>
  <path d="M80,145 Q300,195 500,310 T720,370" fill="none" stroke="#b91c1c" stroke-width="3"/>
  <line x1="400" y1="60" x2="400" y2="360" stroke="#94a3b8" stroke-dasharray="6 4"/>
  <text x="410" y="80" font-family="Segoe UI, Arial" font-size="14">λ≈1.0</text>
  <text x="600" y="150" font-family="Segoe UI, Arial" font-size="16" fill="#15803d">a (highest)</text>
  <text x="600" y="180" font-family="Segoe UI, Arial" font-size="16" fill="#0369a1">b</text>
  <text x="600" y="210" font-family="Segoe UI, Arial" font-size="16" fill="#b45309">c</text>
  <text x="600" y="240" font-family="Segoe UI, Arial" font-size="16" fill="#b91c1c">d</text>
</svg>
""",
    "q47-web-crippling.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="800" height="360" viewBox="0 0 800 360">
  <rect width="800" height="360" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">Web under concentrated reaction</text>
  <rect x="200" y="80" width="400" height="24" fill="#64748b"/>
  <rect x="380" y="104" width="40" height="160" fill="#94a3b8"/>
  <rect x="200" y="264" width="400" height="24" fill="#64748b"/>
  <path d="M360,220 L400,180 L440,220" fill="none" stroke="#b91c1c" stroke-width="3"/>
  <line x1="400" y1="300" x2="400" y2="340" stroke="#0f172a" stroke-width="4"/>
  <text x="410" y="330" font-family="Segoe UI, Arial" font-size="16">Reaction</text>
  <text x="450" y="200" font-family="Segoe UI, Arial" font-size="16" fill="#b91c1c">Web crippling</text>
</svg>
""",
    "q53-compensated-raft.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="800" height="360" viewBox="0 0 800 360">
  <rect width="800" height="360" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">Compensated raft</text>
  <rect x="120" y="80" width="500" height="80" fill="#cbd5e1" stroke="#0f172a"/>
  <text x="300" y="125" font-family="Segoe UI, Arial" font-size="16">Building load Q</text>
  <rect x="120" y="160" width="500" height="40" fill="#64748b"/>
  <text x="300" y="185" font-family="Segoe UI, Arial" font-size="16" fill="#fff">Raft area A</text>
  <rect x="120" y="200" width="500" height="100" fill="#fef3c7" stroke="#b45309"/>
  <text x="280" y="255" font-family="Segoe UI, Arial" font-size="16">Excavation Df · γ</text>
  <text x="120" y="340" font-family="Segoe UI, Arial" font-size="16">qnet ≈ 0 when Q/A = γ Df</text>
</svg>
""",
    "q57-footing-layers.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
  <rect width="800" height="400" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">Footing on layered soil</text>
  <rect x="300" y="60" width="160" height="40" fill="#64748b"/>
  <text x="340" y="85" font-family="Segoe UI, Arial" font-size="14" fill="#fff">Footing</text>
  <rect x="80" y="100" width="600" height="70" fill="#e7e5e4" stroke="#0f172a"/>
  <text x="300" y="140" font-family="Segoe UI, Arial" font-size="16">Sand fill</text>
  <rect x="80" y="170" width="600" height="120" fill="#a8a29e" stroke="#0f172a"/>
  <text x="260" y="235" font-family="Segoe UI, Arial" font-size="16">Stiff clay (Cc layer)</text>
  <rect x="80" y="290" width="600" height="60" fill="#78716c" stroke="#0f172a"/>
  <text x="320" y="325" font-family="Segoe UI, Arial" font-size="16">Dense sand</text>
</svg>
""",
    "q58-elastic-rigid.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="900" height="360" viewBox="0 0 900 360">
  <rect width="900" height="360" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">X elastic footing vs Y rigid footing</text>
  <text x="120" y="80" font-family="Segoe UI, Arial" font-size="18">X — elastic</text>
  <rect x="80" y="100" width="280" height="20" fill="#93c5fd"/>
  <path d="M80,160 H360" stroke="#0f172a"/>
  <path d="M80,160 H360 V200 H80 Z" fill="#fde68a"/>
  <text x="140" y="190" font-family="Segoe UI, Arial" font-size="14">≈ uniform reaction</text>
  <text x="560" y="80" font-family="Segoe UI, Arial" font-size="18">Y — rigid</text>
  <rect x="520" y="100" width="280" height="20" fill="#64748b"/>
  <path d="M520,160 H800" stroke="#0f172a"/>
  <path d="M520,200 L560,160 L760,160 L800,200 Z" fill="#fecaca"/>
  <text x="580" y="220" font-family="Segoe UI, Arial" font-size="14">non-uniform reaction</text>
</svg>
""",
    "q62-rankine-op.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="720" height="400" viewBox="0 0 720 400">
  <rect width="720" height="400" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">Rankine active pressure diagram</text>
  <line x1="160" y1="60" x2="160" y2="320" stroke="#0f172a" stroke-width="4"/>
  <path d="M160,60 L360,320 L160,320 Z" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/>
  <text x="150" y="50" font-family="Segoe UI, Arial" font-size="16">O</text>
  <text x="150" y="345" font-family="Segoe UI, Arial" font-size="16">Wall base</text>
  <text x="370" y="330" font-family="Segoe UI, Arial" font-size="16">P</text>
  <line x1="160" y1="320" x2="360" y2="320" stroke="#b91c1c" stroke-width="3"/>
  <text x="220" y="360" font-family="Segoe UI, Arial" font-size="16" fill="#b91c1c">OP = Ka γ H (at base)</text>
</svg>
""",
    "q68-stress-strain.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
  <rect width="800" height="400" fill="#f8fafc"/>
  <text x="24" y="36" font-family="Segoe UI, Arial" font-size="20">Dense sand / OC clay vs loose sand</text>
  <line x1="80" y1="340" x2="720" y2="340" stroke="#334155"/>
  <line x1="80" y1="340" x2="80" y2="60" stroke="#334155"/>
  <text x="700" y="365" font-family="Segoe UI, Arial" font-size="16">ε</text>
  <text x="30" y="80" font-family="Segoe UI, Arial" font-size="16">σ</text>
  <path d="M80,340 Q200,100 280,90 T500,160 T700,200" fill="none" stroke="#b91c1c" stroke-width="3"/>
  <path d="M80,340 Q300,220 700,180" fill="none" stroke="#0369a1" stroke-width="3"/>
  <text x="300" y="80" font-family="Segoe UI, Arial" font-size="15" fill="#b91c1c">Dense/OC — peak then softening</text>
  <text x="480" y="250" font-family="Segoe UI, Arial" font-size="15" fill="#0369a1">Loose — no sharp peak</text>
</svg>
""",
}


def write_svgs():
    DIAG_DIR.mkdir(parents=True, exist_ok=True)
    for name, content in SVGS.items():
        (DIAG_DIR / name).write_text(content, encoding="utf-8")


def write_js(questions):
    OUT_JS.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(questions, ensure_ascii=False, indent=2)
    # Keep as valid JS module with exported const
    body = (
        "// Civil Engineering FLT-01 — APTRANSCO AEE CBT\n"
        "// Generated from exports/CIVIL_FLT01_REGENERATED_v2.md\n"
        "// answer is 0-based index into options\n\n"
        f"export const questions = {payload};\n"
    )
    OUT_JS.write_text(body, encoding="utf-8")


def main():
    questions = build_questions()
    write_svgs()
    write_js(questions)
    print(f"Wrote {len(questions)} questions -> {OUT_JS}")
    print(f"Wrote {len(SVGS)} diagrams -> {DIAG_DIR}")


if __name__ == "__main__":
    main()
