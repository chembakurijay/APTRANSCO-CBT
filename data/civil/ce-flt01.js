// Civil Engineering FLT-01 — APTRANSCO AEE CBT
// Generated from exports/CIVIL_FLT01_REGENERATED_v2.md
// answer is 0-based index into options

export const questions = [
  {
    "id": 1,
    "subject": "Strength of Materials",
    "topic": "Axial tension",
    "question": "A Fe410 hanger, gross diameter 20 mm, carries factored axial tension Pu = 55 kN. Design stress in yielding (γm0 = 1.10) capacity fyd and demand σd are closest to:",
    "image": "",
    "options": [
      "fyd = 227 MPa, σd = 175 MPa → adequate",
      "fyd = 250 MPa, σd = 175 MPa → compare to fy",
      "fyd = 227 MPa, σd = 350 MPa → inadequate",
      "fyd = 373 MPa, σd = 175 MPa"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "σd = Pu/A; fyd = fy/γm0",
    "explanation": "A = π/4 × 20² = 314.2 mm²; σd = 55000/314.2 ≈ 175 MPa; fyd = 250/1.1 ≈ 227 MPa.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 2,
    "subject": "Strength of Materials",
    "topic": "Axial stress",
    "question": "Two equal-length bars of same E carry the same axial load P: (1) solid diameter d; (2) hollow Do = 2d, Di = √3 d. Ratio of axial stresses σ1 : σ2 is:",
    "image": "",
    "options": [
      "1 : 1",
      "2 : 1",
      "4 : 1",
      "1 : 2"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "σ = P/A",
    "explanation": "A2 = (π/4)(4d² − 3d²) = πd²/4 = A1, so stresses equal.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 3,
    "subject": "Strength of Materials",
    "topic": "Beam reactions",
    "question": "For the beam as shown, the reaction at support A is:",
    "image": "images/diagrams/civil-flt01/q03-beam-udl.svg",
    "options": [
      "15 kN",
      "21 kN",
      "18 kN",
      "36 kN"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "ΣMA = 0",
    "explanation": "UDL on CD = 10 kN/m over 3 m → W = 30 kN at mid of CD (3.0 m from A). Span AB = 6 m. RA = 30 × (6 − 3)/6 = 15 kN.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 4,
    "subject": "Strength of Materials",
    "topic": "Slenderness",
    "question": "A steel strut L = 4.2 m, both ends fixed, least radius of gyration r = 35 mm. Design slenderness λ = Le/r is closest to:",
    "image": "",
    "options": [
      "60",
      "120",
      "240",
      "84"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "λ = Le/r; Le = 0.5L (fixed–fixed)",
    "explanation": "Both ends fixed → Le = 0.5L = 2100 mm; λ = 2100/35 = 60.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 5,
    "subject": "Strength of Materials",
    "topic": "Mohr circle",
    "question": "Assertion (A): For the element shown, the Mohr centre lies on the p-axis at (px + py)/2.\nReason (R): The centre always lies on the q-axis.\nChoose the correct option:",
    "image": "images/diagrams/civil-flt01/q05-mohr-element.svg",
    "options": [
      "Both A and R true; R explains A",
      "Both A and R true; R does not explain A",
      "A true, R false",
      "A false, R true"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "AR+Diagram",
    "formula": "Mohr centre = ((σx+σy)/2, 0)",
    "explanation": "Centre is at ((px+py)/2, 0) on the normal-stress (p) axis; it does not lie on the shear (q) axis.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 6,
    "subject": "Strength of Materials",
    "topic": "Shear stress",
    "question": "A rectangular joist b = 100 mm, d = 200 mm carries shear force V = 16 kN. Maximum shear stress (MPa) and where it occurs:",
    "image": "",
    "options": [
      "1.20 at NA",
      "0.80 uniform",
      "1.20 at top",
      "0.80 at NA"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "τmax = 1.5V/bd",
    "explanation": "τmax = 1.5 V/(bd) = 1.5 × 16000 / 20000 = 1.2 MPa at neutral axis.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 7,
    "subject": "Strength of Materials",
    "topic": "Torsion",
    "question": "For the shaft ABC as shown, torque in segment BC is:",
    "image": "images/diagrams/civil-flt01/q07-shaft-abc.svg",
    "options": [
      "1000 N·m",
      "500 N·m",
      "1500 N·m",
      "0"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "Equilibrium of torques",
    "explanation": "From free-body of BC: torque transmitted through BC equals the end torque at C = 1000 N·m.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 8,
    "subject": "Strength of Materials",
    "topic": "Indeterminate beams",
    "question": "For a propped cantilever of span L with UDL w throughout, the prop reaction is:",
    "image": "",
    "options": [
      "3wL/8",
      "wL/2",
      "5wL/8",
      "3wL/4"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "R = 3wL/8",
    "explanation": "Compatibility δ_prop = 0 gives R = 3wL/8.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 9,
    "subject": "Strength of Materials",
    "topic": "SFD/BMD",
    "question": "From the UVL example SFD as plotted, the shear just left of the mid-region crossing zero occurs near:",
    "image": "images/diagrams/civil-flt01/q09-uvl-sfd.svg",
    "options": [
      "0.577L from the light end",
      "Midspan always",
      "At the heavy support only",
      "At the light support"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Graph+Diagram",
    "formula": "x = L/√3",
    "explanation": "For triangular load on SS beam, zero shear (max BM) is at x = L/√3 ≈ 0.577L from the light end — read from the plotted SFD.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 10,
    "subject": "Strength of Materials",
    "topic": "Matching — BM",
    "question": "Match List-I beams (a)–(d) as sketched with List-II maximum BM:\n1. wl²/2   2. wl²/6   3. wl²/8   4. 3wl²/8\n(a) cantilever with UDL on outer half  (b) cantilever triangular load to fixed end  (c) SS full UDL span l  (d) SS UDL on span 2l\nCorrect code:",
    "image": "images/diagrams/civil-flt01/q10-beam-match.svg",
    "options": [
      "a-4, b-2, c-3, d-1",
      "a-3, b-1, c-2, d-4",
      "a-1, b-2, c-3, d-4",
      "a-4, b-1, c-3, d-2"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Matching+Diagram",
    "formula": "",
    "explanation": "Half-UDL cantilever → 3wl²/8; triangular cantilever → wl²/6; SS UDL → wl²/8; SS span 2l → w(2l)²/8 = wl²/2.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 11,
    "subject": "Strength of Materials",
    "topic": "Impact loading",
    "question": "Same bar, same maximum load W: gradually applied vs suddenly applied. Ratio of maximum stresses (sudden : gradual) is:",
    "image": "",
    "options": [
      "2 : 1",
      "1 : 1",
      "√2 : 1",
      "4 : 1"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "σ_sudden = 2 σ_gradual",
    "explanation": "Suddenly applied load doubles max stress vs gradual application of same W.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 12,
    "subject": "Strength of Materials",
    "topic": "Temperature stress",
    "question": "A steel bar with fixed ends has α = 12×10⁻⁶ /°C, E = 200 GPa, fy = 250 MPa, γm0 = 1.1. Temperature rise to just start yielding in the design sense (σ = fy/γm0) is closest to:",
    "image": "",
    "options": [
      "95°C",
      "104°C",
      "48°C",
      "200°C"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "σ = α E ΔT",
    "explanation": "σ = fy/γm0 = 227.3 MPa = α E ΔT → ΔT = 227.3/(12e-6 × 2e5) ≈ 94.7°C.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 13,
    "subject": "Strength of Materials",
    "topic": "Section modulus",
    "question": "M = 36 kN·m, σall = 150 MPa. Minimum section modulus Z required (mm³):",
    "image": "",
    "options": [
      "2.4×10⁵",
      "2.4×10⁶",
      "5.4×10⁵",
      "150×10³"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "Z = M/σ",
    "explanation": "Z = M/σ = 36×10⁶ / 150 = 2.4×10⁵ mm³.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 14,
    "subject": "Strength of Materials",
    "topic": "Transformed section",
    "question": "Timber 100 × 300 mm with two side steel plates 12 × 300 mm, m = Es/Et = 15. Transformed steel width of each plate in timber units is:",
    "image": "",
    "options": [
      "180 mm",
      "12 mm",
      "15 mm",
      "300 mm"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "b_tr = m t",
    "explanation": "Transformed width = m × t = 15 × 12 = 180 mm.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 15,
    "subject": "Strength of Materials",
    "topic": "BMD interpretation",
    "question": "Sudden vertical jump in BM at a section (as indicated on the figure) indicates:",
    "image": "images/diagrams/civil-flt01/q15-bmd-jump.svg",
    "options": [
      "A concentrated couple",
      "Zero shear everywhere",
      "UDL start only",
      "Settlement only"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Diagram+Conceptual",
    "formula": "",
    "explanation": "A concentrated moment causes a jump discontinuity in the BMD.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 16,
    "subject": "RCC / DDRC",
    "topic": "Durability / cover",
    "question": "Beam cover provided is 15 mm in moderate exposure instead of the required larger cover. The most critical likely issue is:",
    "image": "",
    "options": [
      "Early corrosion / durability loss of steel",
      "Higher Mu",
      "Better fire rating",
      "Only denser concrete"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Standard Application",
    "formula": "",
    "explanation": "Inadequate cover accelerates corrosion and durability failure.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 17,
    "subject": "RCC / DDRC",
    "topic": "Limit state flexure",
    "question": "Singly reinforced rectangular section: b = 230 mm, d = 450 mm, fck = 25 MPa, fy = 415 MPa, xu,max/d = 0.48. Limiting Mu (kN·m) closest to:",
    "image": "",
    "options": [
      "138",
      "97",
      "200",
      "50"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "Mulim = 0.36 fck b xu (d − 0.42 xu)",
    "explanation": "xu = 0.48×450 = 216; Mulim = 0.36 fck b xu (d − 0.42 xu)/10⁶ ≈ 138 kN·m.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 18,
    "subject": "RCC / DDRC",
    "topic": "LSM behaviour",
    "question": "Assertion (A): LSM over-reinforced flexure sections are avoided.\nReason (R): Concrete reaches limiting strain before steel yields → brittle failure.\nChoose:",
    "image": "",
    "options": [
      "Both A and R true; R explains A",
      "Both A and R true; R does not explain A",
      "A true, R false",
      "A false, R true"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "AR",
    "formula": "",
    "explanation": "Over-reinforced sections fail brittle; hence avoided in LSM design.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 19,
    "subject": "RCC / DDRC",
    "topic": "Flanged beams",
    "question": "In a continuous T-beam at an intermediate support (hogging), the flange is in tension. Effective compression flange for flexure should be taken as:",
    "image": "",
    "options": [
      "Web width only",
      "Full midspan bf always",
      "ly/6 + bw + 6Df always even in hogging",
      "Ignore web"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "",
    "explanation": "In hogging, flange is in tension; compression is in the web — use web width.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 20,
    "subject": "RCC / DDRC",
    "topic": "Two-way slabs",
    "question": "From the simply supported two-way slab coefficient table shown, for ly/lx = 1.5 the value of αx is closest to:",
    "image": "images/diagrams/civil-flt01/q20-twoway-table.svg",
    "options": [
      "0.104",
      "0.062",
      "0.014",
      "0.200"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Diagram+Application",
    "formula": "Mx = αx w lx²",
    "explanation": "Read αx from the SS two-way table at ly/lx = 1.5 ≈ 0.104.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 21,
    "subject": "RCC / DDRC",
    "topic": "Column ties",
    "question": "Column long bars 16 mm, ties 8 mm, least lateral dimension 300 mm. Maximum tie spacing shall not exceed the least of:",
    "image": "",
    "options": [
      "300 mm, 16×16 = 256 mm, 300 mm → 256 mm",
      "300 mm, 16×8, 300 mm",
      "48×16 only",
      "d of beam"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Practical/Detailing",
    "formula": "",
    "explanation": "Max spacing = least of least lateral dimension, 16×longitudinal bar dia, and 300 mm → 256 mm.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 22,
    "subject": "RCC / DDRC",
    "topic": "Shear design",
    "question": "Vu = 95 kN, b = 230 mm, d = 400 mm, τc = 0.56 MPa, τc,max = 2.8 MPa. Correct action:",
    "image": "",
    "options": [
      "Provide shear steel (τc < τv < τc,max)",
      "No shear steel",
      "Revise section (τv > τc,max)",
      "Torsion steel only"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Numerical+Application",
    "formula": "τv = Vu/(bd)",
    "explanation": "τv = 95000/(230×400) ≈ 1.03 MPa; τc < τv < τc,max → provide shear reinforcement.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 23,
    "subject": "RCC / DDRC",
    "topic": "Development length",
    "question": "Fe415, φ = 16 mm, τbd = 1.2 × 1.6 = 1.92 MPa (deformed, tension), σs = 0.87 fy. Development length Ld (mm) closest to:",
    "image": "",
    "options": [
      "752",
      "564",
      "940",
      "376"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "Ld = φσs/(4τbd)",
    "explanation": "Ld = φ σs /(4 τbd) = 16×0.87×415/(4×1.92) ≈ 752 mm.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 24,
    "subject": "RCC / DDRC",
    "topic": "Two-way strips",
    "question": "From the two-way slab strip sketch shown, the middle strip width is:",
    "image": "images/diagrams/civil-flt01/q24-slab-strips.svg",
    "options": [
      "3/4 of panel width",
      "1/8 of panel width",
      "Full width",
      "1/2 of panel width"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Diagram+Application",
    "formula": "",
    "explanation": "Middle strip is commonly three-quarters of the panel width; edge strips take the remainder.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 25,
    "subject": "RCC / DDRC",
    "topic": "Doubly reinforced",
    "question": "If Mu = 160 kN·m and Mulim (singly) = 138 kN·m for the same section, the correct approach is:",
    "image": "",
    "options": [
      "Provide compression steel (doubly reinforced)",
      "Ignore and use singly",
      "Reduce d",
      "Use only minimum steel"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical+Application",
    "formula": "",
    "explanation": "Mu > Mulim → add compression steel (doubly reinforced section).",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 26,
    "subject": "RCC / DDRC",
    "topic": "Minimum steel",
    "question": "b = 230 mm, d = 450 mm, Fe415. Minimum Ast (mm²) ≈",
    "image": "",
    "options": [
      "212",
      "276",
      "391",
      "104"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Standard+Numerical",
    "formula": "Ast,min = 0.85 bd/fy",
    "explanation": "Ast,min = 0.85 bd/fy = 0.85×230×450/415 ≈ 212 mm².",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 27,
    "subject": "RCC / DDRC",
    "topic": "Stirrup spacing",
    "question": "Required stirrup spacing sv = 280 mm; d = 350 mm; code max = 0.75d. Provide:",
    "image": "",
    "options": [
      "262 mm",
      "280 mm",
      "350 mm",
      "0.75 mm"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "sv ≤ 0.75d",
    "explanation": "0.75d = 262.5 mm < 280 → provide 262 mm.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 28,
    "subject": "RCC / DDRC",
    "topic": "Site practice",
    "question": "After deshuttering, a column face shows deep honeycombing with bars visible. Correct immediate action:",
    "image": "",
    "options": [
      "Structural assessment — chip to sound concrete and approved repair, not cosmetic plaster",
      "Plaster and paint only",
      "Add water next pour only",
      "Ignore if cubes OK"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Practical",
    "formula": "",
    "explanation": "Exposed bars with deep honeycombing need assessment and proper structural repair.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 29,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Jet on plate",
    "question": "A jet of discharge Q0 hits a hinged/inclined plate as shown. One side split shows Q1 = 0.25 Q0. Assuming no impact loss, θ is such that:",
    "image": "images/diagrams/civil-flt01/q29-jet-plate.svg",
    "options": [
      "tan θ is related to (Q2 − Q1)/Q0 from momentum using the figure split",
      "θ = 0 always",
      "θ = 90° always",
      "θ is independent of Q1"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Diagram+Application",
    "formula": "",
    "explanation": "Discharge split depends on plate inclination; momentum balance with Q1, Q2 from the figure gives θ.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 30,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Orifice coefficients",
    "question": "Cd = 0.62, Cc = 0.64. Cv closest to:",
    "image": "",
    "options": [
      "0.97",
      "1.26",
      "0.62",
      "0.40"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "Cv = Cd/Cc",
    "explanation": "Cv = Cd/Cc = 0.62/0.64 ≈ 0.97.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 31,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Continuity",
    "question": "A pipe reduces from 300 mm to 150 mm diameter. Velocity at the larger end V1 = 1.2 m/s. Velocity V2 is:",
    "image": "",
    "options": [
      "4.8 m/s",
      "2.4 m/s",
      "1.2 m/s",
      "0.3 m/s"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "A1V1 = A2V2",
    "explanation": "A1V1 = A2V2 → V2 = V1 (D1/D2)² = 1.2 × 4 = 4.8 m/s.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 32,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Reynolds number",
    "question": "Flow in a 50 mm pipe with V = 0.02 m/s and ν = 1×10⁻⁶ m²/s. The regime is:",
    "image": "",
    "options": [
      "Laminar",
      "Turbulent",
      "Ideal only",
      "Sonic"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "Re = VD/ν",
    "explanation": "Re = VD/ν = 0.02 × 0.05 / 1e-6 = 1000 < 2000 → laminar.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 33,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Specific energy / q–h",
    "question": "On the shown q–h curve, qmax corresponds to:",
    "image": "images/diagrams/civil-flt01/q33-qh-curve.svg",
    "options": [
      "Fr = 1 (critical)",
      "Fr → ∞",
      "Dry bed",
      "Fr = 0"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Graph",
    "formula": "",
    "explanation": "Maximum discharge for given specific energy occurs at critical flow (Fr = 1).",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 34,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Turbine selection",
    "question": "Site data: H ≈ 320 m, Q small. Preferred turbine:",
    "image": "",
    "options": [
      "Pelton",
      "Francis",
      "Kaplan",
      "Propeller only"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "",
    "explanation": "High head, low discharge → Pelton.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 35,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Specific speed",
    "question": "If Ns is high (~300–1000 metric) for a turbine, the machine tends to be:",
    "image": "",
    "options": [
      "Axial flow / Kaplan type",
      "Pelton only",
      "Reciprocating pump",
      "Jet pump"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "High specific speed corresponds to axial-flow (Kaplan) turbines.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 36,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Matching matrix",
    "question": "Match:\n1 Pelton  2 Francis  3 Kaplan  4 Centrifugal pump\nP: low H, high Q   Q: high H, low Q   R: medium H   S: adds energy to liquid\nCorrect matching:",
    "image": "",
    "options": [
      "1-Q, 2-R, 3-P, 4-S",
      "1-P, 2-Q, 3-R, 4-S",
      "1-Q, 2-P, 3-R, 4-S",
      "1-R, 2-Q, 3-P, 4-S"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Matching Matrix",
    "formula": "",
    "explanation": "Pelton → high H low Q; Francis → medium H; Kaplan → low H high Q; pump adds energy.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 37,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Jet force",
    "question": "Vj = 42 m/s, flat vanes u = 14 m/s, Q = 0.06 m³/s, ρ = 1000 kg/m³. Force on vanes ≈",
    "image": "",
    "options": [
      "1680 N",
      "2520 N",
      "840 N",
      "980 N"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "F = ρQ(Vj − u)",
    "explanation": "F = ρQ(Vj − u) = 1000 × 0.06 × 28 = 1680 N.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 38,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "NPSH / cavitation",
    "question": "NPSH available falling below NPSH required primarily risks:",
    "image": "",
    "options": [
      "Cavitation",
      "Higher viscosity",
      "Laminar only",
      "Zero density"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Insufficient NPSH causes cavitation.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 39,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Water hammer",
    "question": "Long rising main; rapid valve closure caused pressure spikes. Best primary mitigation set:",
    "image": "",
    "options": [
      "Slow closure + surge tank/air vessel as designed",
      "Close faster",
      "Remove all valves",
      "Only paint pipe"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Practical",
    "formula": "",
    "explanation": "Control closure rate and provide surge protection devices.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 40,
    "subject": "Steel Structures",
    "topic": "Net area — chain bolting",
    "question": "For the chain bolting path shown, b = 200 mm, t = 10 mm, dh = 18 mm. If the figure shows n = 2 holes on the critical chain path, An = (b − n dh)t equals:",
    "image": "images/diagrams/civil-flt01/q40-chain-bolting.svg",
    "options": [
      "1640 mm²",
      "2000 mm²",
      "164 mm²",
      "360 mm²"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Diagram+Numerical",
    "formula": "An = (b − n dh)t",
    "explanation": "An = (200 − 2×18)×10 = 1640 mm².",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 41,
    "subject": "Steel Structures",
    "topic": "Tension capacity",
    "question": "Plate fy = 250 MPa, Ag = 1200 mm². Design yield capacity Tdg = Ag fy/γm0 with γm0 = 1.1 ≈",
    "image": "",
    "options": [
      "273 kN",
      "300 kN",
      "180 kN",
      "250 kN"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Standard Application",
    "formula": "Tdg = Ag fy/γm0",
    "explanation": "Tdg = 1200×250/1.1 = 272727 N ≈ 273 kN.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 42,
    "subject": "Steel Structures",
    "topic": "Lacing",
    "question": "Assertion (A): Lacings make built-up column parts act together.\nReason (R): Lacings never carry shear from transverse loading and are tension-only always.\nChoose:",
    "image": "",
    "options": [
      "Both A and R true; R explains A",
      "Both A and R true; R does not explain A",
      "A true, R false",
      "A false, R true"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "AR",
    "formula": "",
    "explanation": "A is true; R is false — lacings are designed for shear force from transverse loading.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 43,
    "subject": "Steel Structures",
    "topic": "Tension member checks",
    "question": "A tension member with holes: design must satisfy:",
    "image": "",
    "options": [
      "Tdg (yield gross) and Tdn (rupture net) — lesser governs",
      "Euler only",
      "Concrete bearing",
      "Ld only"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "",
    "explanation": "Both gross yield and net rupture must be checked; lesser capacity governs.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 44,
    "subject": "Steel Structures",
    "topic": "Fillet weld",
    "question": "In the fillet weld detail shown, the shortest distance from root to the hypotenuse face is called:",
    "image": "images/diagrams/civil-flt01/q44-fillet-weld.svg",
    "options": [
      "Throat",
      "Leg",
      "Toe only",
      "Root gap"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Diagram",
    "formula": "",
    "explanation": "Throat is the perpendicular distance from root to face of the weld.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 45,
    "subject": "Steel Structures",
    "topic": "Buckling curves",
    "question": "From the buckling curves shown, at the same non-dimensional slenderness λ ≈ 1.0, the highest fcd/fy belongs to curve:",
    "image": "images/diagrams/civil-flt01/q45-buckling-curves.svg",
    "options": [
      "a",
      "b",
      "c",
      "d"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Graph",
    "formula": "",
    "explanation": "Curve ‘a’ is the most favourable buckling curve.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 46,
    "subject": "Steel Structures",
    "topic": "Plastic moment",
    "question": "Zp = 8×10⁵ mm³, fy = 250 MPa, γm0 = 1.1. Design plastic moment Mp ≈",
    "image": "",
    "options": [
      "181.8 kN·m",
      "200 kN·m",
      "90.9 kN·m",
      "250 kN·m"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "Mp = Zp fy/γm0",
    "explanation": "Mp = Zp fy/γm0 = 8e5 × 250 / 1.1 = 1.818e8 N·mm ≈ 181.8 kN·m.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 47,
    "subject": "Steel Structures",
    "topic": "Web crippling",
    "question": "Local deformation of the web under concentrated load/reaction as shown is:",
    "image": "images/diagrams/civil-flt01/q47-web-crippling.svg",
    "options": [
      "Web crippling",
      "LTB",
      "Weld fatigue only",
      "Bolt corrosion"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Diagram+Application",
    "formula": "",
    "explanation": "Local web crushing/buckling under concentrated force is web crippling.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 48,
    "subject": "Steel Structures",
    "topic": "Bolt pitch",
    "question": "Bolt diameter 20 mm. Minimum pitch along load ≥",
    "image": "",
    "options": [
      "50 mm",
      "20 mm",
      "32 mm",
      "16 mm"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Standard+Numerical",
    "formula": "p ≥ 2.5d",
    "explanation": "Minimum pitch = 2.5d = 50 mm.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 49,
    "subject": "Steel Structures",
    "topic": "Weld quality",
    "question": "A welded splice shows undercut and incomplete fusion at the root. Site decision:",
    "image": "",
    "options": [
      "Reject/repair weld per engineer — do not accept as-is",
      "Paint over",
      "Accept if length OK",
      "Ignore"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Practical",
    "formula": "",
    "explanation": "Undercut and incomplete fusion are rejectable defects unless repaired/accepted by engineer after assessment.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 50,
    "subject": "Steel Structures",
    "topic": "Column buckling",
    "question": "Same section, same effective length about both axes, rx > ry. Buckling governs about:",
    "image": "",
    "options": [
      "y–y (weak)",
      "x–x",
      "Either same",
      "Torsion only always"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "λ = Le/r",
    "explanation": "λ = Le/r is larger for smaller r → weak (y–y) axis governs.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 51,
    "subject": "Steel Structures",
    "topic": "Purlins",
    "question": "Purlin design load path: roof sheet → purlin →",
    "image": "",
    "options": [
      "Truss rafter / top chord",
      "Pile",
      "Retaining wall",
      "Raft"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Purlins transfer roof load to the truss rafter/top chord.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 52,
    "subject": "Foundation Engineering",
    "topic": "Terzaghi bearing capacity",
    "question": "φ = 30°, c′ = 0, γ = 18 kN/m³, Df = 1.2 m, B = 2.0 m square. Terzaghi factors Nc = 30.14, Nq = 18.4, Nγ = 15.7. Using qu = 1.3 c Nc + γ Df Nq + 0.4 γ B Nγ with c = 0, qu closest to:",
    "image": "",
    "options": [
      "622 kPa",
      "398 kPa",
      "226 kPa",
      "100 kPa"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Standard+Numerical",
    "formula": "qu = γDf Nq + 0.4 γ B Nγ (c=0, square)",
    "explanation": "γDf Nq = 18×1.2×18.4 = 397.4; 0.4γB Nγ = 0.4×18×2×15.7 = 226.1; qu ≈ 623.5 kPa.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 53,
    "subject": "Foundation Engineering",
    "topic": "Compensated raft",
    "question": "For the compensated raft as shown, net pressure ≈ 0 when:",
    "image": "images/diagrams/civil-flt01/q53-compensated-raft.svg",
    "options": [
      "Q/A = γ Df",
      "Q = 0",
      "Df = 0",
      "Q = γ"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Diagram+Conceptual",
    "formula": "qnet = Q/A − γ Df",
    "explanation": "Fully compensated when building pressure equals excavated overburden γ Df.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 54,
    "subject": "Foundation Engineering",
    "topic": "Settlement",
    "question": "Differential settlement is more critical mainly because:",
    "image": "",
    "options": [
      "It causes distortion/cracking",
      "Colour change",
      "It raises fy",
      "Zero stress"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Differential settlement induces distortion and structural cracking.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 55,
    "subject": "Foundation Engineering",
    "topic": "Foundation selection",
    "question": "Exterior column near a property line with large moment — preferred foundation:",
    "image": "",
    "options": [
      "Combined/strap footing to control eccentricity",
      "Tiny isolated always",
      "Ignore moment",
      "Timber sleeper only"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "",
    "explanation": "Combined or strap footing controls eccentricity near property line.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 56,
    "subject": "Foundation Engineering",
    "topic": "Safe bearing capacity",
    "question": "If net ultimate bearing capacity qnu = 600 kPa and FOS = 3, net safe bearing capacity qns is:",
    "image": "",
    "options": [
      "200 kPa",
      "600 kPa",
      "1800 kPa",
      "100 kPa"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "qns = qnu/FOS",
    "explanation": "qns = qnu / FOS = 600/3 = 200 kPa.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 57,
    "subject": "Foundation Engineering",
    "topic": "Layered settlement",
    "question": "For the 2×2 footing on layered soil as shown, the primary concern in the stiff clay layer under the footing is:",
    "image": "images/diagrams/civil-flt01/q57-footing-layers.svg",
    "options": [
      "Consolidation settlement",
      "Steel rust",
      "Zero always",
      "Only concrete elasticity"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Diagram+Application",
    "formula": "",
    "explanation": "Clay layers undergo consolidation settlement under sustained load.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 58,
    "subject": "Foundation Engineering",
    "topic": "Contact pressure",
    "question": "From the figure: X is elastic footing, Y is rigid footing, same uniform top pressure on isotropic elastic soil. Soil reaction distribution is:",
    "image": "images/diagrams/civil-flt01/q58-elastic-rigid.svg",
    "options": [
      "Uniform for X, not for Y",
      "Uniform for Y, not for X",
      "Both uniform",
      "Both non-uniform"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Table/Figure",
    "formula": "",
    "explanation": "Flexible (elastic) footing → roughly uniform contact pressure; rigid footing → non-uniform (higher at edges on elastic soil).",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 59,
    "subject": "Foundation Engineering",
    "topic": "Raft",
    "question": "A raft foundation is typically used when:",
    "image": "",
    "options": [
      "Low SBC + heavy loads / settlement control",
      "One tiny column",
      "Rock + tiny loads",
      "No columns"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Rafts are preferred for low SBC with heavy loads and settlement control.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 60,
    "subject": "Foundation Engineering",
    "topic": "Excavation risk",
    "question": "Excavation beside an existing footing — critical risk:",
    "image": "",
    "options": [
      "Undermining the existing foundation",
      "Raise old fy",
      "Reprint code year",
      "Colour only"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Practical",
    "formula": "",
    "explanation": "Adjacent excavation can undermine and reduce support to existing foundations.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 61,
    "subject": "Foundation Engineering",
    "topic": "Immediate settlement",
    "question": "Immediate settlement on clay is mainly controlled by:",
    "image": "",
    "options": [
      "Es, influence factors, net pressure, size",
      "Secondary only always",
      "Colour",
      "Ast only"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Immediate settlement depends on elastic modulus, geometry, and net pressure.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 62,
    "subject": "Soil Mechanics",
    "topic": "Rankine earth pressure",
    "question": "In the Rankine active graphical figure shown, length OP represents:",
    "image": "images/diagrams/civil-flt01/q62-rankine-op.svg",
    "options": [
      "Lateral earth pressure at the base",
      "Vertical stress at H/3",
      "Wall friction",
      "Passive pressure at top"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Diagram",
    "formula": "pa = Ka γ H",
    "explanation": "OP is the base of the active pressure triangle = Ka γ H.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 63,
    "subject": "Soil Mechanics",
    "topic": "Compaction",
    "question": "Assertion (A): Compaction increases γd and reduces voids.\nReason (R): OMC is the water content at MDD for a given compaction energy.\nChoose:",
    "image": "",
    "options": [
      "Both A and R true; R explains A",
      "Both A and R true; R does not explain A",
      "A true, R false",
      "A false, R true"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "AR",
    "formula": "",
    "explanation": "Both statements are true, but R defines OMC/MDD and does not explain why compaction increases γd.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 64,
    "subject": "Soil Mechanics",
    "topic": "Phase relations",
    "question": "G = 2.7, w = 18%, S = 75%. Void ratio e =",
    "image": "",
    "options": [
      "0.648",
      "0.486",
      "0.750",
      "0.200"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "e = wG/S",
    "explanation": "e = wG/S = 0.18×2.7/0.75 = 0.648.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 65,
    "subject": "Soil Mechanics",
    "topic": "Phase relations",
    "question": "G = 2.68, e = 0.55, S = 0.80. Water content w (%) ≈",
    "image": "",
    "options": [
      "16.4",
      "20.5",
      "12.0",
      "25"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "w = Se/G",
    "explanation": "w = Se/G = 0.80×0.55/2.68 ≈ 0.164 → 16.4%.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 66,
    "subject": "Soil Mechanics",
    "topic": "Active earth pressure",
    "question": "φ = 30°, γ = 18 kN/m³, H = 4 m, c = 0, horizontal backfill. Total active thrust Pa (kN/m) ≈",
    "image": "",
    "options": [
      "48",
      "72",
      "96",
      "36"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "Pa = 0.5 Ka γ H²",
    "explanation": "Ka = (1−sinφ)/(1+sinφ) = 1/3; Pa = 0.5 Ka γ H² = 0.5×(1/3)×18×16 = 48 kN/m.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 67,
    "subject": "Soil Mechanics",
    "topic": "Atterberg limits",
    "question": "Plasticity index IP =",
    "image": "",
    "options": [
      "WL − WP",
      "WP − WS",
      "WL − WS",
      "WP only"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "IP = WL − WP",
    "explanation": "IP = liquid limit − plastic limit.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 68,
    "subject": "Soil Mechanics",
    "topic": "Stress–strain behaviour",
    "question": "From the dense sand / OC clay stress–strain curves shown, the typical response is:",
    "image": "images/diagrams/civil-flt01/q68-stress-strain.svg",
    "options": [
      "Peak then softening",
      "No peak always like loose",
      "Zero strength",
      "φu = 0 always"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Graph",
    "formula": "",
    "explanation": "Dense sand/OC clay show peak strength followed by strain softening.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 69,
    "subject": "Soil Mechanics",
    "topic": "Seepage / quicksand",
    "question": "Upward seepage making σ′ → 0 in sand causes the phenomenon:",
    "image": "",
    "options": [
      "Quicksand / boiling",
      "Compaction",
      "Capillarity rise only",
      "Overconsolidation"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "σ′ = σ − u",
    "explanation": "Zero effective stress under upward seepage → quicksand/boiling.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 70,
    "subject": "Soil Mechanics",
    "topic": "Consolidation",
    "question": "Primary consolidation of saturated clay is mainly due to:",
    "image": "",
    "options": [
      "Pore-water expulsion under load",
      "Elastic water compression alone",
      "Sand boil only",
      "Steel rust"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Primary consolidation is expulsion of pore water under load.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 71,
    "subject": "Quantitative Aptitude",
    "topic": "Work–time",
    "question": "12 men can complete a work in 15 days. In how many days can 9 men complete the same work?",
    "image": "",
    "options": [
      "20",
      "18",
      "16",
      "10"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "M1 D1 = M2 D2",
    "explanation": "Men-days constant: 12×15 = 9×d → d = 20.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 72,
    "subject": "Quantitative Aptitude",
    "topic": "CI–SI",
    "question": "Difference between CI (annual) and SI on ₹5000 at 10% for 2 years is:",
    "image": "",
    "options": [
      "50",
      "100",
      "500",
      "25"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "CI − SI = P(r/100)² for 2 years",
    "explanation": "CI = 1050, SI = 1000; difference = 50.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 73,
    "subject": "Quantitative Aptitude",
    "topic": "Alligation / mixture",
    "question": "An alloy of Cu:Zn = 3:2 has mass 40 kg. How much copper must be added to make Cu:Zn = 2:1?",
    "image": "",
    "options": [
      "8 kg",
      "10 kg",
      "6 kg",
      "4 kg"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Cu = 24, Zn = 16; need Cu = 2×16 = 32 → add 8 kg.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 74,
    "subject": "Quantitative Aptitude",
    "topic": "Average",
    "question": "Average of 8 numbers is 25. One number 40 is replaced by 16. New average is:",
    "image": "",
    "options": [
      "22",
      "24",
      "20",
      "18"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Change in sum = −24; new avg = 25 − 24/8 = 22.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 75,
    "subject": "Quantitative Aptitude",
    "topic": "Ratio",
    "question": "If A:B = 5:7 and B:C = 2:3, then A:C is:",
    "image": "",
    "options": [
      "10:21",
      "5:3",
      "2:7",
      "5:21"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "A:B:C = 10:14:21 → A:C = 10:21.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 76,
    "subject": "Quantitative Aptitude",
    "topic": "Boats & streams",
    "question": "Boat speed in still water 15 km/h, stream 3 km/h. Time to go 24 km upstream:",
    "image": "",
    "options": [
      "2 h",
      "1.6 h",
      "3 h",
      "1 h"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Upstream speed = 12 km/h; t = 24/12 = 2 h.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 77,
    "subject": "Quantitative Aptitude",
    "topic": "Algebra",
    "question": "If x² + 1/x² = 7, then x + 1/x (positive) equals:",
    "image": "",
    "options": [
      "3",
      "√7",
      "√5",
      "2"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "(x+1/x)² = x²+2+1/x² = 9 → x+1/x = 3.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 78,
    "subject": "Quantitative Aptitude",
    "topic": "Series",
    "question": "Find the next term: 7, 10, 16, 28, 52, ?",
    "image": "",
    "options": [
      "100",
      "96",
      "84",
      "78"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Differences +3,+6,+12,+24,+48 → next = 52+48 = 100.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 79,
    "subject": "General Awareness",
    "topic": "APTRANSCO",
    "question": "APTRANSCO primarily functions as:",
    "image": "",
    "options": [
      "Andhra Pradesh transmission utility",
      "Municipal bus operator",
      "RBI subsidiary",
      "NHAI only"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "APTRANSCO is the state transmission utility.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 80,
    "subject": "General Awareness",
    "topic": "Power system",
    "question": "Nominal grid frequency in India is:",
    "image": "",
    "options": [
      "50 Hz",
      "60 Hz",
      "40 Hz",
      "100 Hz"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "India operates at 50 Hz.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 81,
    "subject": "General Awareness",
    "topic": "Polity",
    "question": "The highest civil court in India is:",
    "image": "",
    "options": [
      "Supreme Court",
      "High Court only",
      "District Court",
      "Lok Adalat only"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Supreme Court is the apex court.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 82,
    "subject": "General Awareness",
    "topic": "Economy",
    "question": "The body that replaced the Planning Commission is:",
    "image": "",
    "options": [
      "NITI Aayog",
      "RBI",
      "SEBI",
      "IRDAI"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "NITI Aayog replaced the Planning Commission.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 83,
    "subject": "General Awareness",
    "topic": "Science",
    "question": "SI unit of power is:",
    "image": "",
    "options": [
      "Watt",
      "Joule",
      "Pascal",
      "Coulomb"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Power unit is watt (J/s).",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 84,
    "subject": "General Awareness",
    "topic": "Energy",
    "question": "A ‘green corridor’ for RE integration mainly concerns:",
    "image": "",
    "options": [
      "Power transmission of renewables",
      "Only forestry roads",
      "Only metro paint",
      "Only banking"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Green corridors are transmission corridors for renewable energy.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 85,
    "subject": "General Awareness",
    "topic": "Power system",
    "question": "A typical ISTS voltage class in India is:",
    "image": "",
    "options": [
      "400/765 kV class",
      "12 V",
      "48 V",
      "5 V USB"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Inter-state transmission uses EHV classes such as 400/765 kV.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 86,
    "subject": "Reasoning",
    "topic": "Odd one out",
    "question": "Odd one out: Rectangle, Square, Rhombus, Sphere",
    "image": "",
    "options": [
      "Sphere",
      "Square",
      "Rhombus",
      "Rectangle"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Sphere is 3D; others are 2D quadrilaterals.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 87,
    "subject": "Reasoning",
    "topic": "Ranking",
    "question": "P is 16th from the left and 15th from the right in a row. Number of persons in the row is:",
    "image": "",
    "options": [
      "30",
      "31",
      "32",
      "29"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "n = L + R − 1",
    "explanation": "n = 16 + 15 − 1 = 30.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 88,
    "subject": "Reasoning",
    "topic": "Series",
    "question": "Find next: 5, 11, 24, 51, 106, ?",
    "image": "",
    "options": [
      "217",
      "215",
      "220",
      "212"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Pattern ×2+1, ×2+2, ×2+3, ×2+4, ×2+5 → 106×2+5 = 217.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 89,
    "subject": "Reasoning",
    "topic": "Syllogism",
    "question": "Statements: All A are B; Some B are C. Conclusion: Some A are C.",
    "image": "",
    "options": [
      "Does not follow",
      "Follows",
      "Either follows",
      "Follows if reverse"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Particular conclusion about A and C is not definite from the given statements.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 90,
    "subject": "Reasoning",
    "topic": "Ranking",
    "question": "60 students; A is 18th from left; B is 20th from right. If A is to the left of B, students between A and B:",
    "image": "",
    "options": [
      "22",
      "21",
      "23",
      "19"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "B from left = 60−20+1 = 41; between = 41−18−1 = 22.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 91,
    "subject": "English",
    "topic": "Spelling",
    "question": "Choose the correctly spelled word:",
    "image": "",
    "options": [
      "Privileged",
      "Priviledged",
      "Priveleged",
      "Privleged"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Correct spelling is Privileged.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 92,
    "subject": "English",
    "topic": "Synonym",
    "question": "Synonym of Candid:",
    "image": "",
    "options": [
      "Frank",
      "Biased",
      "Vague",
      "Silent"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Candid means frank/open.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 93,
    "subject": "English",
    "topic": "Antonym",
    "question": "Antonym of Scarce:",
    "image": "",
    "options": [
      "Abundant",
      "Rare",
      "Lean",
      "Sparse"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Scarce ↔ abundant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 94,
    "subject": "English",
    "topic": "Grammar",
    "question": "Neither the engineer nor the officers ___ present.",
    "image": "",
    "options": [
      "were",
      "was",
      "is",
      "be"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Verb agrees with the nearer subject ‘officers’ → were.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 95,
    "subject": "English",
    "topic": "One-word",
    "question": "One word for ‘killing of a king’:",
    "image": "",
    "options": [
      "Regicide",
      "Homicide",
      "Patricide",
      "Infanticide"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Regicide = killing of a king.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 96,
    "subject": "Computer Awareness",
    "topic": "Memory",
    "question": "Which is non-volatile memory?",
    "image": "",
    "options": [
      "ROM",
      "RAM",
      "Cache only always",
      "Registers only"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "ROM retains data without power.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 97,
    "subject": "Computer Awareness",
    "topic": "OSI",
    "question": "OSI layer responsible for routing is:",
    "image": "",
    "options": [
      "Network",
      "Physical",
      "Session",
      "Presentation"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Routing is a Network-layer function.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 98,
    "subject": "Computer Awareness",
    "topic": "DBMS",
    "question": "A primary key must be:",
    "image": "",
    "options": [
      "Unique and NOT NULL",
      "Duplicate OK",
      "NULL OK",
      "No constraint"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Primary key is unique and not null.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 99,
    "subject": "Computer Awareness",
    "topic": "DBMS ACID",
    "question": "In ACID properties of DBMS, ‘I’ stands for:",
    "image": "",
    "options": [
      "Isolation",
      "Indexing",
      "Internet",
      "Integer"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "ACID: Atomicity, Consistency, Isolation, Durability.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 100,
    "subject": "Computer Awareness",
    "topic": "Cryptography",
    "question": "For confidentiality with public-key encryption, the sender encrypts using:",
    "image": "",
    "options": [
      "Recipient’s public key",
      "Sender’s public key only always",
      "Only hashing",
      "Only MAC"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "Encrypt with recipient’s public key so only recipient can decrypt with private key.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  }
];
