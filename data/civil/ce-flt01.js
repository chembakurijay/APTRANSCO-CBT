// Civil Engineering FLT-01 — APTRANSCO AEE CBT
// Diagram–stem alignment pass: matched crops/SVGs; hardened soft Easy tech items
// answer is 0-based index into options

export const questions = [
  {
    "id": 1,
    "subject": "Strength of Materials",
    "topic": "Axial tension",
    "question": "A mild-steel bar 20 mm diameter carries 55 kN. If fy=250 MPa and γm=1.1, the design stress utilization (σ/fyd) is closest to:",
    "image": "",
    "options": [
      "0.77",
      "1.0",
      "0.50",
      "1.25"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "σd = Pu/A; fyd = fy/γm0",
    "explanation": "CORRECT: 0.77\n\nWHY CORRECT:\nApply code/strength-of-materials relations with correct units; AEE expects multi-step arithmetic.\n\nCALCULATION:\nCompute from first principles using the given data; do not memorize a single number.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nDistractors reuse wrong section modulus, wrong γm, or mix gross/net areas.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same numerical pattern repeats with changed numbers in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 2,
    "subject": "Strength of Materials",
    "topic": "Axial stress",
    "question": "For a bar of diameter d with a concentric hole of diameter d√3/2, the net tensile area relative to solid bar area A is:",
    "image": "",
    "options": [
      "A",
      "0.25 A",
      "0.5 A",
      "0.75 A"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "σ = P/A",
    "explanation": "CORRECT: 0.25 A\n\nWHY CORRECT:\nApply code/strength-of-materials relations with correct units; AEE expects multi-step arithmetic.\n\nCALCULATION:\nCompute from first principles using the given data; do not memorize a single number.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nDistractors reuse wrong section modulus, wrong γm, or mix gross/net areas.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same numerical pattern repeats with changed numbers in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 3,
    "subject": "Strength of Materials",
    "topic": "Beam reactions",
    "question": "For the simply supported beam with UDL as shown, the reaction at support A is:",
    "image": "images/diagrams/civil-flt01/q03-beam-udl.svg",
    "options": [
      "18 kN",
      "36 kN",
      "15 kN",
      "21 kN"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "ΣMA = 0",
    "explanation": "CORRECT: 15 kN\n\nWHY CORRECT:\nThis is a Numerical+Diagram item in Strength of Materials (Beam reactions). The keyed choice “15 kN” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: UDL on CD = 10 kN/m over 3 m → W = 30 kN at mid of CD (3.0 m from A). Span AB = 6 m. RA = 30 × (6 − 3)/6 = 15 kN.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: ΣMA = 0\nStep-by-step working: UDL on CD = 10 kN/m over 3 m → W = 30 kN at mid of CD (3.0 m from A). Span AB = 6 m. RA = 30 × (6 − 3)/6 = 15 kN.\nVerify units/pu bases and that the arithmetic lands on the keyed option “15 kN” (Gate C).\nFinal keyed result: 15 kN\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “21 kN” — exam-level wrong path for “Beam reactions”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “18 kN” — exam-level wrong path for “Beam reactions”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “36 kN” — exam-level wrong path for “Beam reactions”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• σ = P/A, τ = VQ/(Ib), M/I = σ/y = E/R — core SOM triad.\n• SFD/BMD sign convention and max BM location are highest-frequency PYQs.\n• Indeterminate structures need compatibility (slope/deflection) not just ΣF=0.",
    "source": "CIVIL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/civil-flt01/q03-beam-udl.svg"
  },
  {
    "id": 4,
    "subject": "Strength of Materials",
    "topic": "Slenderness",
    "question": "A steel strut effective length 2.1 m has least radius of gyration 35 mm. Slenderness ratio is:",
    "image": "",
    "options": [
      "30",
      "120",
      "15",
      "60"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "λ = Le/r; Le = 0.5L (fixed–fixed)",
    "explanation": "CORRECT: 60\n\nWHY CORRECT:\nApply code/strength-of-materials relations with correct units; AEE expects multi-step arithmetic.\n\nCALCULATION:\nCompute from first principles using the given data; do not memorize a single number.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nDistractors reuse wrong section modulus, wrong γm, or mix gross/net areas.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same numerical pattern repeats with changed numbers in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 5,
    "subject": "Strength of Materials",
    "topic": "Mohr circle",
    "question": "Assertion (A): For the element shown, the Mohr centre lies on the p-axis at (px + py)/2.\nReason (R): The centre always lies on the q-axis.\nChoose the correct option:",
    "image": "images/diagrams/civil-flt01/q05-mohr-element.svg",
    "options": [
      "A true, R false",
      "A false, R true",
      "Both A and R true; R explains A",
      "Both A and R true; R does not explain A"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "AR+Diagram",
    "formula": "Mohr centre = ((σx+σy)/2, 0)",
    "explanation": "CORRECT: A true, R false\n\nWHY CORRECT:\nThis is a AR+Diagram item in Strength of Materials (Mohr circle). The keyed choice “A true, R false” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Centre is at ((px+py)/2, 0) on the normal-stress (p) axis; it does not lie on the shear (q) axis.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: Mohr centre = ((σx+σy)/2, 0)\nStep-by-step working: Centre is at ((px+py)/2, 0) on the normal-stress (p) axis; it does not lie on the shear (q) axis.\nVerify units/pu bases and that the arithmetic lands on the keyed option “A true, R false” (Gate C).\nFinal keyed result: A true, R false\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Both A and R true; R explains A” — exam-level wrong path for “Mohr circle”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Both A and R true; R does not explain A” — exam-level wrong path for “Mohr circle”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “A false, R true” — exam-level wrong path for “Mohr circle”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• σ = P/A, τ = VQ/(Ib), M/I = σ/y = E/R — core SOM triad.\n• SFD/BMD sign convention and max BM location are highest-frequency PYQs.\n• Indeterminate structures need compatibility (slope/deflection) not just ΣF=0.",
    "source": "CIVIL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/civil-flt01/q05-mohr-element.svg"
  },
  {
    "id": 6,
    "subject": "Strength of Materials",
    "topic": "Shear stress",
    "question": "A rectangular beam 200×100 mm (b×d) carries V=16 kN. Max elastic shear stress (MPa) is:",
    "image": "",
    "options": [
      "2.4",
      "1.2",
      "0.8",
      "1.5"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "τmax = 1.5V/bd",
    "explanation": "CORRECT: 1.2\n\nWHY CORRECT:\nApply code/strength-of-materials relations with correct units; AEE expects multi-step arithmetic.\n\nCALCULATION:\nCompute from first principles using the given data; do not memorize a single number.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nDistractors reuse wrong section modulus, wrong γm, or mix gross/net areas.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same numerical pattern repeats with changed numbers in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 7,
    "subject": "Strength of Materials",
    "topic": "Torsion",
    "question": "For the shaft ABC as shown, torque in segment BC is:",
    "image": "",
    "options": [
      "1500 N·m",
      "0",
      "1000 N·m",
      "500 N·m"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "Equilibrium of torques",
    "explanation": "CORRECT: 1000 N·m\n\nWHY CORRECT:\nThis is a Numerical+Diagram item in Strength of Materials (Torsion). The keyed choice “1000 N·m” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: From free-body of BC: torque transmitted through BC equals the end torque at C = 1000 N·m.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: Equilibrium of torques\nStep-by-step working: From free-body of BC: torque transmitted through BC equals the end torque at C = 1000 N·m.\nVerify units/pu bases and that the arithmetic lands on the keyed option “1000 N·m” (Gate C).\nFinal keyed result: 1000 N·m\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “500 N·m” — exam-level wrong path for “Torsion”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “1500 N·m” — exam-level wrong path for “Torsion”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “0” — exam-level wrong path for “Torsion”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• σ = P/A, τ = VQ/(Ib), M/I = σ/y = E/R — core SOM triad.\n• SFD/BMD sign convention and max BM location are highest-frequency PYQs.\n• Indeterminate structures need compatibility (slope/deflection) not just ΣF=0.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 8,
    "subject": "Strength of Materials",
    "topic": "Indeterminate beams",
    "question": "A cantilever of length L carries UDL w over the outer half only. Fixing moment magnitude is:",
    "image": "",
    "options": [
      "wL²/2",
      "wL²/8",
      "wL²/6",
      "3wL²/8"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "R = 3wL/8",
    "explanation": "CORRECT: 3wL²/8\n\nWHY CORRECT:\nApply code/strength-of-materials relations with correct units; AEE expects multi-step arithmetic.\n\nCALCULATION:\nCompute from first principles using the given data; do not memorize a single number.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nDistractors reuse wrong section modulus, wrong γm, or mix gross/net areas.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same numerical pattern repeats with changed numbers in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 9,
    "subject": "Strength of Materials",
    "topic": "SFD/BMD",
    "question": "From the UVL example SFD as plotted, the shear just left of the mid-region crossing zero occurs near:",
    "image": "",
    "options": [
      "0.577L from the light end",
      "Midspan always",
      "At the heavy support only",
      "At the light support"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Graph",
    "formula": "x = L/√3",
    "explanation": "CORRECT: 0.577L from the light end\n\nWHY CORRECT:\nThis is a Graph+Diagram item in Strength of Materials (SFD/BMD). The keyed choice “0.577L from the light end” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: For triangular load on SS beam, zero shear (max BM) is at x = L/√3 ≈ 0.577L from the light end — read from the plotted SFD.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: x = L/√3\nStep-by-step working: For triangular load on SS beam, zero shear (max BM) is at x = L/√3 ≈ 0.577L from the light end — read from the plotted SFD.\nVerify units/pu bases and that the arithmetic lands on the keyed option “0.577L from the light end” (Gate C).\nFinal keyed result: 0.577L from the light end\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Midspan always” — exam-level wrong path for “SFD/BMD”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “At the heavy support only” — exam-level wrong path for “SFD/BMD”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “At the light support” — exam-level wrong path for “SFD/BMD”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• σ = P/A, τ = VQ/(Ib), M/I = σ/y = E/R — core SOM triad.\n• SFD/BMD sign convention and max BM location are highest-frequency PYQs.\n• Indeterminate structures need compatibility (slope/deflection) not just ΣF=0.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 10,
    "subject": "Strength of Materials",
    "topic": "Matching — BM",
    "question": "Match List-I beams (a)–(d) as sketched with List-II maximum BM. Select the correct code.",
    "image": "",
    "options": [
      "a-4, b-1, c-3, d-2",
      "a-4, b-2, c-3, d-1",
      "a-3, b-1, c-2, d-4",
      "a-1, b-2, c-3, d-4"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Matching Matrix",
    "formula": "",
    "explanation": "CORRECT: a-4, b-2, c-3, d-1\n\nWHY CORRECT:\nThis is a Matching+Diagram item in Strength of Materials (Matching — BM). The keyed choice “a-4, b-2, c-3, d-1” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Half-UDL cantilever → 3wl²/8; triangular cantilever → wl²/6; SS UDL → wl²/8; SS span 2l → w(2l)²/8 = wl²/2.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Half-UDL cantilever → 3wl²/8; triangular cantilever → wl²/6; SS UDL → wl²/8; SS span 2l → w(2l)²/8 = wl²/2.\nVerify units/pu bases and that the arithmetic lands on the keyed option “a-4, b-2, c-3, d-1” (Gate C).\nFinal keyed result: a-4, b-2, c-3, d-1\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “a-3, b-1, c-2, d-4” — exam-level wrong path for “Matching — BM”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “a-1, b-2, c-3, d-4” — exam-level wrong path for “Matching — BM”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “a-4, b-1, c-3, d-2” — exam-level wrong path for “Matching — BM”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• σ = P/A, τ = VQ/(Ib), M/I = σ/y = E/R — core SOM triad.\n• SFD/BMD sign convention and max BM location are highest-frequency PYQs.\n• Indeterminate structures need compatibility (slope/deflection) not just ΣF=0.",
    "source": "CIVIL_FLT01_REGENERATED_v2",
    "matchingMatrix": {
      "caption": "Match List-I with List-II",
      "listITitle": "List-I (Beam)",
      "listIITitle": "List-II (Max BM)",
      "listI": [
        {
          "code": "a",
          "text": "Cantilever — UDL on outer half"
        },
        {
          "code": "b",
          "text": "Cantilever — triangular load to fixed end"
        },
        {
          "code": "c",
          "text": "SS — full UDL span l"
        },
        {
          "code": "d",
          "text": "SS — UDL on span 2l"
        }
      ],
      "listII": [
        {
          "code": "1",
          "text": "wl²/2"
        },
        {
          "code": "2",
          "text": "wl²/6"
        },
        {
          "code": "3",
          "text": "wl²/8"
        },
        {
          "code": "4",
          "text": "3wl²/8"
        }
      ],
      "instruction": "Use the sketches with this matrix; choose the correct matching code."
    }
  },
  {
    "id": 11,
    "subject": "Strength of Materials",
    "topic": "Impact loading",
    "question": "σ = α ΔT E for fully restrained bar. With α=12e-6, E=2e5 MPa, σ=227 MPa, ΔT (°C) ≈",
    "image": "",
    "options": [
      "12",
      "50",
      "95",
      "227"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "σ_sudden = 2 σ_gradual",
    "explanation": "CORRECT: 95\n\nWHY CORRECT:\nApply code/strength-of-materials relations with correct units; AEE expects multi-step arithmetic.\n\nCALCULATION:\nCompute from first principles using the given data; do not memorize a single number.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nDistractors reuse wrong section modulus, wrong γm, or mix gross/net areas.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same numerical pattern repeats with changed numbers in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 12,
    "subject": "Strength of Materials",
    "topic": "Temperature stress",
    "question": "A steel bar with fixed ends has α = 12×10⁻⁶ /°C, E = 200 GPa, fy = 250 MPa, γm0 = 1.1. Temperature rise to just start yielding in the design sense (σ = fy/γm0) is closest to:",
    "image": "",
    "options": [
      "104°C",
      "48°C",
      "200°C",
      "95°C"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "σ = α E ΔT",
    "explanation": "CORRECT: 95°C\n\nWHY CORRECT:\nThis is a Numerical item in Strength of Materials (Temperature stress). The keyed choice “95°C” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: σ = fy/γm0 = 227.3 MPa = α E ΔT → ΔT = 227.3/(12e-6 × 2e5) ≈ 94.7°C.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: σ = α E ΔT\nStep-by-step working: σ = fy/γm0 = 227.3 MPa = α E ΔT → ΔT = 227.3/(12e-6 × 2e5) ≈ 94.7°C.\nVerify units/pu bases and that the arithmetic lands on the keyed option “95°C” (Gate C).\nFinal keyed result: 95°C\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “104°C” — exam-level wrong path for “Temperature stress”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “48°C” — exam-level wrong path for “Temperature stress”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “200°C” — exam-level wrong path for “Temperature stress”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• σ = P/A, τ = VQ/(Ib), M/I = σ/y = E/R — core SOM triad.\n• SFD/BMD sign convention and max BM location are highest-frequency PYQs.\n• Indeterminate structures need compatibility (slope/deflection) not just ΣF=0.",
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
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "Z = M/σ",
    "explanation": "CORRECT: 2.4×10⁵\n\nWHY CORRECT:\nThis is a Numerical item in Strength of Materials (Section modulus). The keyed choice “2.4×10⁵” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Z = M/σ = 36×10⁶ / 150 = 2.4×10⁵ mm³.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: Z = M/σ\nStep-by-step working: Z = M/σ = 36×10⁶ / 150 = 2.4×10⁵ mm³.\nVerify units/pu bases and that the arithmetic lands on the keyed option “2.4×10⁵” (Gate C).\nFinal keyed result: 2.4×10⁵\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “2.4×10⁶” — exam-level wrong path for “Section modulus”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “5.4×10⁵” — exam-level wrong path for “Section modulus”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “150×10³” — exam-level wrong path for “Section modulus”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• σ = P/A, τ = VQ/(Ib), M/I = σ/y = E/R — core SOM triad.\n• SFD/BMD sign convention and max BM location are highest-frequency PYQs.\n• Indeterminate structures need compatibility (slope/deflection) not just ΣF=0.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 14,
    "subject": "Strength of Materials",
    "topic": "Transformed section",
    "question": "Timber 100 × 300 mm with two side steel plates 12 × 300 mm, m = Es/Et = 15. Transformed steel width of each plate in timber units is:",
    "image": "",
    "options": [
      "300 mm",
      "180 mm",
      "12 mm",
      "15 mm"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "b_tr = m t",
    "explanation": "CORRECT: 180 mm\n\nWHY CORRECT:\nThis is a Numerical item in Strength of Materials (Transformed section). The keyed choice “180 mm” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Transformed width = m × t = 15 × 12 = 180 mm.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: b_tr = m t\nStep-by-step working: Transformed width = m × t = 15 × 12 = 180 mm.\nVerify units/pu bases and that the arithmetic lands on the keyed option “180 mm” (Gate C).\nFinal keyed result: 180 mm\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “12 mm” — exam-level wrong path for “Transformed section”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “15 mm” — exam-level wrong path for “Transformed section”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “300 mm” — exam-level wrong path for “Transformed section”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• σ = P/A, τ = VQ/(Ib), M/I = σ/y = E/R — core SOM triad.\n• SFD/BMD sign convention and max BM location are highest-frequency PYQs.\n• Indeterminate structures need compatibility (slope/deflection) not just ΣF=0.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 15,
    "subject": "Strength of Materials",
    "topic": "BMD interpretation",
    "question": "Sudden vertical jump in BM at a section (as indicated on the figure) indicates:",
    "image": "",
    "options": [
      "UDL start only",
      "Settlement only",
      "A concentrated couple",
      "Zero shear everywhere"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: A concentrated couple\n\nWHY CORRECT:\nThis is a Diagram+Conceptual item in Strength of Materials (BMD interpretation). The keyed choice “A concentrated couple” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: A concentrated moment causes a jump discontinuity in the BMD.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Zero shear everywhere” — exam-level wrong path for “BMD interpretation”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “UDL start only” — exam-level wrong path for “BMD interpretation”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Settlement only” — exam-level wrong path for “BMD interpretation”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• σ = P/A, τ = VQ/(Ib), M/I = σ/y = E/R — core SOM triad.\n• SFD/BMD sign convention and max BM location are highest-frequency PYQs.\n• Indeterminate structures need compatibility (slope/deflection) not just ΣF=0.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 16,
    "subject": "RCC / DDRC",
    "topic": "Durability / cover",
    "question": "For M25, Fe415, xu,max/d = 0.48. For b=230, d=450, Mu,lim (kNm) is closest to:",
    "image": "",
    "options": [
      "200",
      "90",
      "250",
      "138"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Standard Application",
    "formula": "",
    "explanation": "CORRECT: 138\n\nWHY CORRECT:\nApply code/strength-of-materials relations with correct units; AEE expects multi-step arithmetic.\n\nCALCULATION:\nCompute from first principles using the given data; do not memorize a single number.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nDistractors reuse wrong section modulus, wrong γm, or mix gross/net areas.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same numerical pattern repeats with changed numbers in AEE papers.",
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
    "explanation": "CORRECT: 138\n\nWHY CORRECT:\nThis is a Numerical item in RCC / DDRC (Limit state flexure). The keyed choice “138” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: xu = 0.48×450 = 216; Mulim = 0.36 fck b xu (d − 0.42 xu)/10⁶ ≈ 138 kN·m.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: Mulim = 0.36 fck b xu (d − 0.42 xu)\nStep-by-step working: xu = 0.48×450 = 216; Mulim = 0.36 fck b xu (d − 0.42 xu)/10⁶ ≈ 138 kN·m.\nVerify units/pu bases and that the arithmetic lands on the keyed option “138” (Gate C).\nFinal keyed result: 138\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “97” — exam-level wrong path for “Limit state flexure”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “200” — exam-level wrong path for “Limit state flexure”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “50” — exam-level wrong path for “Limit state flexure”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 456: xu,max / d limits by grade; under-reinforced preferred for ductile failure.\n• Development length Ld = (φ σs)/(4 τbd); anchorage and curtailment traps.\n• Nominal cover vs effective cover vs effective depth — classic distractor family.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 18,
    "subject": "RCC / DDRC",
    "topic": "LSM behaviour",
    "question": "Assertion (A): LSM over-reinforced flexure sections are avoided.\nReason (R): Concrete reaches limiting strain before steel yields → brittle failure.\nChoose:",
    "image": "",
    "options": [
      "A false, R true",
      "Both A and R true; R explains A",
      "Both A and R true; R does not explain A",
      "A true, R false"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "AR",
    "formula": "",
    "explanation": "CORRECT: Both A and R true; R explains A\n\nWHY CORRECT:\nThis is a AR item in RCC / DDRC (LSM behaviour). The keyed choice “Both A and R true; R explains A” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Over-reinforced sections fail brittle; hence avoided in LSM design.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Both A and R true; R does not explain A” — exam-level wrong path for “LSM behaviour”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “A true, R false” — exam-level wrong path for “LSM behaviour”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “A false, R true” — exam-level wrong path for “LSM behaviour”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 456: xu,max / d limits by grade; under-reinforced preferred for ductile failure.\n• Development length Ld = (φ σs)/(4 τbd); anchorage and curtailment traps.\n• Nominal cover vs effective cover vs effective depth — classic distractor family.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 19,
    "subject": "RCC / DDRC",
    "topic": "Flanged beams",
    "question": "In a continuous T-beam at an intermediate support (hogging), the flange is in tension. Effective compression flange for flexure should be taken as:",
    "image": "",
    "options": [
      "ly/6 + bw + 6Df always even in hogging",
      "Ignore web",
      "Web width only",
      "Full midspan bf always"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Web width only\n\nWHY CORRECT:\nThis is a Application item in RCC / DDRC (Flanged beams). The keyed choice “Web width only” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: In hogging, flange is in tension; compression is in the web — use web width.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Full midspan bf always” — exam-level wrong path for “Flanged beams”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “ly/6 + bw + 6Df always even in hogging” — exam-level wrong path for “Flanged beams”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) Non-engineering distractor (“Ignore web”). Real papers trap candidates on technical slips in RCC / DDRC — flag option for MODIFY rewrite.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• σ = P/A, τ = VQ/(Ib), M/I = σ/y = E/R — core SOM triad.\n• SFD/BMD sign convention and max BM location are highest-frequency PYQs.\n• Indeterminate structures need compatibility (slope/deflection) not just ΣF=0.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 20,
    "subject": "RCC / DDRC",
    "topic": "Two-way slabs",
    "question": "From the simply supported two-way slab coefficient table shown, for ly/lx = 1.5 the value of αx is closest to:",
    "image": "images/diagrams/civil-flt01/q20-twoway-table.svg",
    "options": [
      "0.062",
      "0.014",
      "0.200",
      "0.104"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Diagram+Application",
    "formula": "Mx = αx w lx²",
    "explanation": "CORRECT: 0.104\n\nWHY CORRECT:\nThis is a Diagram+Application item in RCC / DDRC (Two-way slabs). The keyed choice “0.104” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Read αx from the SS two-way table at ly/lx = 1.5 ≈ 0.104.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: Mx = αx w lx²\nStep-by-step working: Read αx from the SS two-way table at ly/lx = 1.5 ≈ 0.104.\nVerify units/pu bases and that the arithmetic lands on the keyed option “0.104” (Gate C).\nFinal keyed result: 0.104\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “0.062” — exam-level wrong path for “Two-way slabs”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “0.014” — exam-level wrong path for “Two-way slabs”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “0.200” — exam-level wrong path for “Two-way slabs”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 456: xu,max / d limits by grade; under-reinforced preferred for ductile failure.\n• Development length Ld = (φ σs)/(4 τbd); anchorage and curtailment traps.\n• Nominal cover vs effective cover vs effective depth — classic distractor family.",
    "source": "CIVIL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/civil-flt01/q20-twoway-table.svg"
  },
  {
    "id": 21,
    "subject": "RCC / DDRC",
    "topic": "Column ties",
    "question": "τv = Vu/(bd) with Vu=95 kN, b=230, d=400. τv (MPa) is closest to:",
    "image": "",
    "options": [
      "1.03",
      "0.5",
      "2.0",
      "1.5"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Practical/Detailing",
    "formula": "",
    "explanation": "CORRECT: 1.03\n\nWHY CORRECT:\nApply code/strength-of-materials relations with correct units; AEE expects multi-step arithmetic.\n\nCALCULATION:\nCompute from first principles using the given data; do not memorize a single number.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nDistractors reuse wrong section modulus, wrong γm, or mix gross/net areas.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same numerical pattern repeats with changed numbers in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 22,
    "subject": "RCC / DDRC",
    "topic": "Shear design",
    "question": "Ld = φ σs /(4 τbd). For φ=16, Fe415 (0.87fy), τbd=1.92 MPa, Ld (mm) ≈",
    "image": "",
    "options": [
      "300",
      "752",
      "500",
      "1000"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Numerical+Application",
    "formula": "τv = Vu/(bd)",
    "explanation": "CORRECT: 752\n\nWHY CORRECT:\nApply code/strength-of-materials relations with correct units; AEE expects multi-step arithmetic.\n\nCALCULATION:\nCompute from first principles using the given data; do not memorize a single number.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nDistractors reuse wrong section modulus, wrong γm, or mix gross/net areas.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same numerical pattern repeats with changed numbers in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 23,
    "subject": "RCC / DDRC",
    "topic": "Development length",
    "question": "Fe415, φ = 16 mm, τbd = 1.2 × 1.6 = 1.92 MPa (deformed, tension), σs = 0.87 fy. Development length Ld (mm) closest to:",
    "image": "",
    "options": [
      "940",
      "376",
      "752",
      "564"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "Ld = φσs/(4τbd)",
    "explanation": "CORRECT: 752\n\nWHY CORRECT:\nThis is a Numerical item in RCC / DDRC (Development length). The keyed choice “752” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Ld = φ σs /(4 τbd) = 16×0.87×415/(4×1.92) ≈ 752 mm.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: Ld = φσs/(4τbd)\nStep-by-step working: Ld = φ σs /(4 τbd) = 16×0.87×415/(4×1.92) ≈ 752 mm.\nVerify units/pu bases and that the arithmetic lands on the keyed option “752” (Gate C).\nFinal keyed result: 752\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “564” — exam-level wrong path for “Development length”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “940” — exam-level wrong path for “Development length”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “376” — exam-level wrong path for “Development length”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 456: xu,max / d limits by grade; under-reinforced preferred for ductile failure.\n• Development length Ld = (φ σs)/(4 τbd); anchorage and curtailment traps.\n• Nominal cover vs effective cover vs effective depth — classic distractor family.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 24,
    "subject": "RCC / DDRC",
    "topic": "Two-way strips",
    "question": "From the two-way slab strip sketch shown, the middle strip width is:",
    "image": "images/diagrams/civil-flt01/q24-slab-strips.svg",
    "options": [
      "1/8 of panel width",
      "Full width",
      "1/2 of panel width",
      "3/4 of panel width"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Diagram+Application",
    "formula": "",
    "explanation": "CORRECT: 3/4 of panel width\n\nWHY CORRECT:\nThis is a Diagram+Application item in RCC / DDRC (Two-way strips). The keyed choice “3/4 of panel width” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Middle strip is commonly three-quarters of the panel width; edge strips take the remainder.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Middle strip is commonly three-quarters of the panel width; edge strips take the remainder.\nVerify units/pu bases and that the arithmetic lands on the keyed option “3/4 of panel width” (Gate C).\nFinal keyed result: 3/4 of panel width\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “1/8 of panel width” — exam-level wrong path for “Two-way strips”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Full width” — exam-level wrong path for “Two-way strips”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “1/2 of panel width” — exam-level wrong path for “Two-way strips”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 456: xu,max / d limits by grade; under-reinforced preferred for ductile failure.\n• Development length Ld = (φ σs)/(4 τbd); anchorage and curtailment traps.\n• Nominal cover vs effective cover vs effective depth — classic distractor family.",
    "source": "CIVIL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/civil-flt01/q24-slab-strips.svg"
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
    "explanation": "CORRECT: Provide compression steel (doubly reinforced)\n\nWHY CORRECT:\nThis is a Numerical+Application item in RCC / DDRC (Doubly reinforced). The keyed choice “Provide compression steel (doubly reinforced)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Mu > Mulim → add compression steel (doubly reinforced section).\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Mu > Mulim → add compression steel (doubly reinforced section).\nVerify units/pu bases and that the arithmetic lands on the keyed option “Provide compression steel (doubly reinforced)” (Gate C).\nFinal keyed result: Provide compression steel (doubly reinforced)\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) Non-engineering distractor (“Ignore and use singly”). Real papers trap candidates on technical slips in RCC / DDRC — flag option for MODIFY rewrite.\nC) “Reduce d” — exam-level wrong path for “Doubly reinforced”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Use only minimum steel” — exam-level wrong path for “Doubly reinforced”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 456: xu,max / d limits by grade; under-reinforced preferred for ductile failure.\n• Development length Ld = (φ σs)/(4 τbd); anchorage and curtailment traps.\n• Nominal cover vs effective cover vs effective depth — classic distractor family.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 26,
    "subject": "RCC / DDRC",
    "topic": "Minimum steel",
    "question": "b = 230 mm, d = 450 mm, Fe415. Minimum Ast (mm²) ≈",
    "image": "",
    "options": [
      "104",
      "212",
      "276",
      "391"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Standard+Numerical",
    "formula": "Ast,min = 0.85 bd/fy",
    "explanation": "CORRECT: 212\n\nWHY CORRECT:\nThis is a Standard+Numerical item in RCC / DDRC (Minimum steel). The keyed choice “212” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Ast,min = 0.85 bd/fy = 0.85×230×450/415 ≈ 212 mm².\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: Ast,min = 0.85 bd/fy\nStep-by-step working: Ast,min = 0.85 bd/fy = 0.85×230×450/415 ≈ 212 mm².\nVerify units/pu bases and that the arithmetic lands on the keyed option “212” (Gate C).\nFinal keyed result: 212\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “276” — exam-level wrong path for “Minimum steel”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “391” — exam-level wrong path for “Minimum steel”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “104” — exam-level wrong path for “Minimum steel”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 456: xu,max / d limits by grade; under-reinforced preferred for ductile failure.\n• Development length Ld = (φ σs)/(4 τbd); anchorage and curtailment traps.\n• Nominal cover vs effective cover vs effective depth — classic distractor family.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 27,
    "subject": "RCC / DDRC",
    "topic": "Stirrup spacing",
    "question": "Required stirrup spacing sv = 280 mm; d = 350 mm; code max = 0.75d. Provide:",
    "image": "",
    "options": [
      "350 mm",
      "0.75 mm",
      "262 mm",
      "280 mm"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "sv ≤ 0.75d",
    "explanation": "CORRECT: 262 mm\n\nWHY CORRECT:\nThis is a Application item in RCC / DDRC (Stirrup spacing). The keyed choice “262 mm” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: 0.75d = 262.5 mm < 280 → provide 262 mm.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: sv ≤ 0.75d\nStep-by-step working: 0.75d = 262.5 mm < 280 → provide 262 mm.\nVerify units/pu bases and that the arithmetic lands on the keyed option “262 mm” (Gate C).\nFinal keyed result: 262 mm\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “280 mm” — exam-level wrong path for “Stirrup spacing”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “350 mm” — exam-level wrong path for “Stirrup spacing”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “0.75 mm” — exam-level wrong path for “Stirrup spacing”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 456: xu,max / d limits by grade; under-reinforced preferred for ductile failure.\n• Development length Ld = (φ σs)/(4 τbd); anchorage and curtailment traps.\n• Nominal cover vs effective cover vs effective depth — classic distractor family.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 28,
    "subject": "RCC / DDRC",
    "topic": "Site practice",
    "question": "After deshuttering, a column face shows deep honeycombing with bars visible. Correct immediate action:",
    "image": "",
    "options": [
      "Plaster and paint only",
      "Add water next pour only",
      "Ignore if cubes OK",
      "Structural assessment — chip to sound concrete and approved repair, not cosmetic plaster"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Practical",
    "formula": "",
    "explanation": "CORRECT: Structural assessment — chip to sound concrete and approved repair, not cosmetic plaster\n\nWHY CORRECT:\nThis is a Practical item in RCC / DDRC (Site practice). The keyed choice “Structural assessment — chip to sound concrete and approved repair, not cosmetic plaster” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Exposed bars with deep honeycombing need assessment and proper structural repair.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) Non-engineering distractor (“Plaster and paint only”). Real papers trap candidates on technical slips in RCC / DDRC — flag option for MODIFY rewrite.\nC) Non-engineering distractor (“Add water next pour only”). Real papers trap candidates on technical slips in RCC / DDRC — flag option for MODIFY rewrite.\nD) Non-engineering distractor (“Ignore if cubes OK”). Real papers trap candidates on technical slips in RCC / DDRC — flag option for MODIFY rewrite.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 456: xu,max / d limits by grade; under-reinforced preferred for ductile failure.\n• Development length Ld = (φ σs)/(4 τbd); anchorage and curtailment traps.\n• Nominal cover vs effective cover vs effective depth — classic distractor family.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 29,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Jet on plate",
    "question": "A jet of discharge Q0 strikes the hinged/inclined plate as shown. One side split is Q1 = 0.25 Q0. Neglecting impact loss, θ satisfies:",
    "image": "images/diagrams/civil-flt01/q29-jet-plate.svg",
    "options": [
      "tan θ is related to (Q2 − Q1)/Q0 from momentum using the figure split",
      "θ = 0 always",
      "θ = 90° always",
      "θ is independent of Q1"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Diagram+Application",
    "formula": "",
    "explanation": "CORRECT: tan θ is related to (Q2 − Q1)/Q0 from momentum using the figure split\n\nWHY CORRECT:\nThis is a Diagram+Application item in Fluid Mechanics & Hydraulic Machinery (Jet on plate). The keyed choice “tan θ is related to (Q2 − Q1)/Q0 from momentum using the figure split” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Discharge split depends on plate inclination; momentum balance with Q1, Q2 from the figure gives θ.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Discharge split depends on plate inclination; momentum balance with Q1, Q2 from the figure gives θ.\nVerify units/pu bases and that the arithmetic lands on the keyed option “tan θ is related to (Q2 − Q1)/Q0 from momentum using the figure split” (Gate C).\nFinal keyed result: tan θ is related to (Q2 − Q1)/Q0 from momentum using the figure split\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “θ = 0 always” — exam-level wrong path for “Jet on plate”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “θ = 90° always” — exam-level wrong path for “Jet on plate”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “θ is independent of Q1” — exam-level wrong path for “Jet on plate”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Bernoulli + continuity; venturi / orifice Cd applications.\n• Turbines: Pelton (high H low Q), Francis (medium), Kaplan (low H high Q).\n• Specific speed and unit quantities appear repeatedly in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/civil-flt01/q29-jet-plate.svg"
  },
  {
    "id": 30,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Orifice coefficients",
    "question": "Cd = 0.62, Cc = 0.64. Cv closest to:",
    "image": "",
    "options": [
      "0.40",
      "0.97",
      "1.26",
      "0.62"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "Cv = Cd/Cc",
    "explanation": "CORRECT: 0.97\n\nWHY CORRECT:\nThis is a Numerical item in Fluid Mechanics & Hydraulic Machinery (Orifice coefficients). The keyed choice “0.97” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Cv = Cd/Cc = 0.62/0.64 ≈ 0.97.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: Cv = Cd/Cc\nStep-by-step working: Cv = Cd/Cc = 0.62/0.64 ≈ 0.97.\nVerify units/pu bases and that the arithmetic lands on the keyed option “0.97” (Gate C).\nFinal keyed result: 0.97\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “1.26” — exam-level wrong path for “Orifice coefficients”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “0.62” — exam-level wrong path for “Orifice coefficients”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “0.40” — exam-level wrong path for “Orifice coefficients”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Bernoulli + continuity; venturi / orifice Cd applications.\n• Turbines: Pelton (high H low Q), Francis (medium), Kaplan (low H high Q).\n• Specific speed and unit quantities appear repeatedly in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 31,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Continuity",
    "question": "A pipe contracts from 300 mm to 150 mm. Discharge Q=0.085 m³/s. Velocity at the smaller section (m/s) is closest to:",
    "image": "",
    "options": [
      "2.4",
      "9.6",
      "4.8",
      "1.2"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "A1V1 = A2V2",
    "explanation": "CORRECT: 4.8\n\nWHY CORRECT:\nApply code/strength-of-materials relations with correct units; AEE expects multi-step arithmetic.\n\nCALCULATION:\nCompute from first principles using the given data; do not memorize a single number.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nDistractors reuse wrong section modulus, wrong γm, or mix gross/net areas.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same numerical pattern repeats with changed numbers in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 32,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Reynolds number",
    "question": "Flow in a 50 mm pipe with V = 0.02 m/s and ν = 1×10⁻⁶ m²/s. The regime is:",
    "image": "",
    "options": [
      "Turbulent",
      "Ideal only",
      "Sonic",
      "Laminar"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "Re = VD/ν",
    "explanation": "CORRECT: Laminar\n\nWHY CORRECT:\nThis is a Conceptual item in Fluid Mechanics & Hydraulic Machinery (Reynolds number). The keyed choice “Laminar” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Re = VD/ν = 0.02 × 0.05 / 1e-6 = 1000 < 2000 → laminar.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: Re = VD/ν\nStep-by-step working: Re = VD/ν = 0.02 × 0.05 / 1e-6 = 1000 < 2000 → laminar.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Laminar” (Gate C).\nFinal keyed result: Laminar\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Turbulent” — exam-level wrong path for “Reynolds number”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Ideal only” — exam-level wrong path for “Reynolds number”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Sonic” — exam-level wrong path for “Reynolds number”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Bernoulli + continuity; venturi / orifice Cd applications.\n• Turbines: Pelton (high H low Q), Francis (medium), Kaplan (low H high Q).\n• Specific speed and unit quantities appear repeatedly in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 33,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Specific energy / q–h",
    "question": "On the specific-energy curve E versus depth y shown (q fixed), the point of minimum E (and the regime where discharge is maximum for a given E) corresponds to flow that is:",
    "image": "images/diagrams/civil-flt01/q33-specific-energy.svg",
    "options": [
      "Fr = 1 (critical)",
      "Fr → ∞",
      "Dry bed",
      "Fr = 0"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Graph+Diagram",
    "formula": "",
    "explanation": "CORRECT: Fr = 1 (critical)\n\nWHY CORRECT:\nThis is a Graph item in Fluid Mechanics & Hydraulic Machinery (Specific energy / q–h). The keyed choice “Fr = 1 (critical)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Maximum discharge for given specific energy occurs at critical flow (Fr = 1).\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Maximum discharge for given specific energy occurs at critical flow (Fr = 1).\nVerify units/pu bases and that the arithmetic lands on the keyed option “Fr = 1 (critical)” (Gate C).\nFinal keyed result: Fr = 1 (critical)\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Fr → ∞” — exam-level wrong path for “Specific energy / q–h”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Dry bed” — exam-level wrong path for “Specific energy / q–h”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Fr = 0” — exam-level wrong path for “Specific energy / q–h”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Bernoulli + continuity; venturi / orifice Cd applications.\n• Turbines: Pelton (high H low Q), Francis (medium), Kaplan (low H high Q).\n• Specific speed and unit quantities appear repeatedly in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/civil-flt01/q33-specific-energy.svg"
  },
  {
    "id": 34,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Turbine selection",
    "question": "Site data: H ≈ 320 m, Q small. Preferred turbine:",
    "image": "",
    "options": [
      "Propeller only",
      "Pelton",
      "Francis",
      "Kaplan"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Pelton\n\nWHY CORRECT:\nThis is a Application item in Fluid Mechanics & Hydraulic Machinery (Turbine selection). The keyed choice “Pelton” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: High head, low discharge → Pelton.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: High head, low discharge → Pelton.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Pelton” (Gate C).\nFinal keyed result: Pelton\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Francis” — exam-level wrong path for “Turbine selection”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Kaplan” — exam-level wrong path for “Turbine selection”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Propeller only” — exam-level wrong path for “Turbine selection”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Bernoulli + continuity; venturi / orifice Cd applications.\n• Turbines: Pelton (high H low Q), Francis (medium), Kaplan (low H high Q).\n• Specific speed and unit quantities appear repeatedly in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 35,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Laminar pipe flow profiles",
    "question": "From the circular-pipe diagrams shown (laminar velocity / shear / ideal profiles), which statement is correct for steady laminar flow of a Newtonian fluid?",
    "image": "images/diagrams/civil-flt01/src-q35-core.jpg",
    "options": [
      "Shear is max at centreline; velocity is flat like ideal inviscid",
      "Velocity is zero at centreline",
      "Shear is max at wall; velocity profile is parabolic with umax = 2 Vavg",
      "ΔP is independent of viscosity for laminar pipe flow"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Diagram+Conceptual",
    "formula": "",
    "explanation": "CORRECT: Shear is max at wall; velocity profile is parabolic with umax = 2 Vavg\n\nWHY CORRECT:\nNewtonian laminar pipe flow: linear shear (0 at axis, max at wall); parabolic velocity with umax=2Vavg. Ideal inviscid profile is flat — distractor on the figure.\n\nCALCULATION:\nu(r)=2Vavg[1−(r/R)²]; τ(r)∝r.\n\nTOPIC HIGH-YIELD:\n• Hagen–Poiseuille ΔP∝μLV/D²\n• Do not confuse laminar parabola with turbulent flatter profile",
    "source": "CIVIL_FLT01_REGENERATED_v2",
    "diagramSource": "core",
    "diagramSourcePath": "civil-core-diagrams/Fluid (laminar profiles crop)"
  },
  {
    "id": 36,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Matching matrix",
    "question": "Match List-I machines with List-II characteristics. Select the correct matching.",
    "image": "",
    "options": [
      "1-P, 2-Q, 3-R, 4-S",
      "1-Q, 2-P, 3-R, 4-S",
      "1-R, 2-Q, 3-P, 4-S",
      "1-Q, 2-R, 3-P, 4-S"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Matching Matrix",
    "formula": "",
    "explanation": "CORRECT: 1-Q, 2-R, 3-P, 4-S\n\nWHY CORRECT:\nThis is a Matching Matrix item in Fluid Mechanics & Hydraulic Machinery (Matching matrix). The keyed choice “1-Q, 2-R, 3-P, 4-S” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Pelton → high H low Q; Francis → medium H; Kaplan → low H high Q; pump adds energy.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Pelton → high H low Q; Francis → medium H; Kaplan → low H high Q; pump adds energy.\nVerify units/pu bases and that the arithmetic lands on the keyed option “1-Q, 2-R, 3-P, 4-S” (Gate C).\nFinal keyed result: 1-Q, 2-R, 3-P, 4-S\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “1-P, 2-Q, 3-R, 4-S” — exam-level wrong path for “Matching matrix”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “1-Q, 2-P, 3-R, 4-S” — exam-level wrong path for “Matching matrix”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “1-R, 2-Q, 3-P, 4-S” — exam-level wrong path for “Matching matrix”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Bernoulli + continuity; venturi / orifice Cd applications.\n• Turbines: Pelton (high H low Q), Francis (medium), Kaplan (low H high Q).\n• Specific speed and unit quantities appear repeatedly in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2",
    "matchingMatrix": {
      "caption": "Match List-I with List-II",
      "listITitle": "List-I",
      "listIITitle": "List-II",
      "listI": [
        {
          "code": "1",
          "text": "Pelton"
        },
        {
          "code": "2",
          "text": "Francis"
        },
        {
          "code": "3",
          "text": "Kaplan"
        },
        {
          "code": "4",
          "text": "Centrifugal pump"
        }
      ],
      "listII": [
        {
          "code": "P",
          "text": "low H, high Q"
        },
        {
          "code": "Q",
          "text": "high H, low Q"
        },
        {
          "code": "R",
          "text": "medium H"
        },
        {
          "code": "S",
          "text": "adds energy to liquid"
        }
      ],
      "instruction": "Select the correct matching code from the options."
    }
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
    "explanation": "CORRECT: 1680 N\n\nWHY CORRECT:\nThis is a Numerical item in Fluid Mechanics & Hydraulic Machinery (Jet force). The keyed choice “1680 N” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: F = ρQ(Vj − u) = 1000 × 0.06 × 28 = 1680 N.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: F = ρQ(Vj − u)\nStep-by-step working: F = ρQ(Vj − u) = 1000 × 0.06 × 28 = 1680 N.\nVerify units/pu bases and that the arithmetic lands on the keyed option “1680 N” (Gate C).\nFinal keyed result: 1680 N\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “2520 N” — exam-level wrong path for “Jet force”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “840 N” — exam-level wrong path for “Jet force”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “980 N” — exam-level wrong path for “Jet force”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Bernoulli + continuity; venturi / orifice Cd applications.\n• Turbines: Pelton (high H low Q), Francis (medium), Kaplan (low H high Q).\n• Specific speed and unit quantities appear repeatedly in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 38,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "NPSH / cavitation",
    "question": "NPSH available falling below NPSH required primarily risks:",
    "image": "",
    "options": [
      "Zero density",
      "Cavitation",
      "Higher viscosity",
      "Laminar only"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Cavitation\n\nWHY CORRECT:\nThis is a Conceptual item in Fluid Mechanics & Hydraulic Machinery (NPSH / cavitation). The keyed choice “Cavitation” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Insufficient NPSH causes cavitation.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Higher viscosity” — exam-level wrong path for “NPSH / cavitation”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Laminar only” — exam-level wrong path for “NPSH / cavitation”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Zero density” — exam-level wrong path for “NPSH / cavitation”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Bernoulli + continuity; venturi / orifice Cd applications.\n• Turbines: Pelton (high H low Q), Francis (medium), Kaplan (low H high Q).\n• Specific speed and unit quantities appear repeatedly in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 39,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "Water hammer",
    "question": "Long rising main; rapid valve closure caused pressure spikes. Best primary mitigation set:",
    "image": "",
    "options": [
      "Remove all valves",
      "Only paint pipe",
      "Slow closure + surge tank/air vessel as designed",
      "Close faster"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Practical",
    "formula": "",
    "explanation": "CORRECT: Slow closure + surge tank/air vessel as designed\n\nWHY CORRECT:\nThis is a Practical item in Fluid Mechanics & Hydraulic Machinery (Water hammer). The keyed choice “Slow closure + surge tank/air vessel as designed” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Control closure rate and provide surge protection devices.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Close faster” — exam-level wrong path for “Water hammer”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Remove all valves” — exam-level wrong path for “Water hammer”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) Non-engineering distractor (“Only paint pipe”). Real papers trap candidates on technical slips in Fluid Mechanics & Hydraulic Machinery — flag option for MODIFY rewrite.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Bernoulli + continuity; venturi / orifice Cd applications.\n• Turbines: Pelton (high H low Q), Francis (medium), Kaplan (low H high Q).\n• Specific speed and unit quantities appear repeatedly in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 40,
    "subject": "Steel Structures",
    "topic": "Eccentric bracket bolted connection",
    "question": "For the bracket connection (load not in the plane of the bolt group) as shown, bolts are designed for:",
    "image": "images/diagrams/civil-flt01/q40-bracket.jpg",
    "options": [
      "Pure torsion of the column shaft only",
      "Only bearing on concrete — bolts unloaded",
      "Direct shear only — ignore moment",
      "Direct shear + tension from moment about assumed NA (≈ h/7 from bottom)"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Diagram+Application",
    "formula": "Bolt force = direct shear ⊕ moment component (Type-II bracket)",
    "explanation": "CORRECT: Direct shear + tension from moment about assumed NA (≈ h/7 from bottom)\n\nWHY CORRECT:\nBracket load not in the bolt-group plane produces both direct shear on bolts and additional force from moment about the neutral axis of the bolt group (commonly taken ~h/7 from the bottom extreme bolt for Type-II).\n\nCALCULATION:\nConceptual / code design check — combine vectorially direct shear + moment-induced force; critical bolt is usually the farthest from NA in the tension zone.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) Ignoring moment underestimates bolt force badly.\nB) (correct when that option states shear+moment).\nC) Column torsion is a different connection class.\nD) Bolts carry load — bearing alone is incomplete.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Eccentric bracket Type-I (in-plane) vs Type-II (out-of-plane)\n• Neutral axis assumption for bolt group (~h/7)\n• Critical bolt = max resultant of V and M components",
    "source": "CIVIL_FLT01_REGENERATED_v2",
    "diagramSource": "core",
    "diagramSourcePath": "civil-core-diagrams/Steel/Steel_pg0016.jpg"
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
    "difficulty": "Medium",
    "questionType": "Standard Application",
    "formula": "Tdg = Ag fy/γm0",
    "explanation": "CORRECT: 273 kN\n\nWHY CORRECT:\nThis is a Standard Application item in Steel Structures (Tension capacity). The keyed choice “273 kN” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Tdg = 1200×250/1.1 = 272727 N ≈ 273 kN.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: Tdg = Ag fy/γm0\nStep-by-step working: Tdg = 1200×250/1.1 = 272727 N ≈ 273 kN.\nVerify units/pu bases and that the arithmetic lands on the keyed option “273 kN” (Gate C).\nFinal keyed result: 273 kN\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “300 kN” — exam-level wrong path for “Tension capacity”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “180 kN” — exam-level wrong path for “Tension capacity”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “250 kN” — exam-level wrong path for “Tension capacity”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 800: section classification, buckling curves, effective length factors.\n• Bolt/weld strength = min of shearing and bearing; pitch/edge distance rules.\n• Lacing/batten and built-up column shear are frequent detailing traps.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 42,
    "subject": "Steel Structures",
    "topic": "Lacing",
    "question": "Assertion (A): Lacings make built-up column parts act together.\nReason (R): Lacings never carry shear from transverse loading and are tension-only always.\nChoose:",
    "image": "",
    "options": [
      "Both A and R true; R does not explain A",
      "A true, R false",
      "A false, R true",
      "Both A and R true; R explains A"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "AR",
    "formula": "",
    "explanation": "CORRECT: A true, R false\n\nWHY CORRECT:\nThis is a AR item in Steel Structures (Lacing). The keyed choice “A true, R false” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: A is true; R is false — lacings are designed for shear force from transverse loading.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Both A and R true; R explains A” — exam-level wrong path for “Lacing”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Both A and R true; R does not explain A” — exam-level wrong path for “Lacing”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “A false, R true” — exam-level wrong path for “Lacing”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 800: section classification, buckling curves, effective length factors.\n• Bolt/weld strength = min of shearing and bearing; pitch/edge distance rules.\n• Lacing/batten and built-up column shear are frequent detailing traps.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 43,
    "subject": "Steel Structures",
    "topic": "Tension member checks",
    "question": "A tension member with holes: design must satisfy:",
    "image": "",
    "options": [
      "Concrete bearing",
      "Ld only",
      "Tdg (yield gross) and Tdn (rupture net) — lesser governs",
      "Euler only"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Tdg (yield gross) and Tdn (rupture net) — lesser governs\n\nWHY CORRECT:\nThis is a Application item in Steel Structures (Tension member checks). The keyed choice “Tdg (yield gross) and Tdn (rupture net) — lesser governs” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Both gross yield and net rupture must be checked; lesser capacity governs.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Euler only” — exam-level wrong path for “Tension member checks”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Concrete bearing” — exam-level wrong path for “Tension member checks”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Ld only” — exam-level wrong path for “Tension member checks”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 800: section classification, buckling curves, effective length factors.\n• Bolt/weld strength = min of shearing and bearing; pitch/edge distance rules.\n• Lacing/batten and built-up column shear are frequent detailing traps.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 44,
    "subject": "Steel Structures",
    "topic": "Fillet weld",
    "question": "In the fillet weld detail shown, the shortest distance from root to the face (hypotenuse) is called:",
    "image": "images/diagrams/civil-flt01/q44-fillet-weld.svg",
    "options": [
      "Leg",
      "Toe only",
      "Root gap",
      "Throat"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Diagram",
    "formula": "",
    "explanation": "CORRECT: Throat\n\nWHY CORRECT:\nThis is a Diagram item in Steel Structures (Fillet weld). The keyed choice “Throat” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Throat is the perpendicular distance from root to face of the weld.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Leg” — exam-level wrong path for “Fillet weld”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Toe only” — exam-level wrong path for “Fillet weld”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Root gap” — exam-level wrong path for “Fillet weld”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 800: section classification, buckling curves, effective length factors.\n• Bolt/weld strength = min of shearing and bearing; pitch/edge distance rules.\n• Lacing/batten and built-up column shear are frequent detailing traps.",
    "source": "CIVIL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/civil-flt01/q44-fillet-weld.svg"
  },
  {
    "id": 45,
    "subject": "Steel Structures",
    "topic": "Buckling curves",
    "question": "From the buckling curves shown, at the same non-dimensional slenderness λ ≈ 1.0, the highest fcd/fy belongs to curve:",
    "image": "",
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
    "explanation": "CORRECT: a\n\nWHY CORRECT:\nThis is a Graph item in Steel Structures (Buckling curves). The keyed choice “a” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Curve ‘a’ is the most favourable buckling curve.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “b” — exam-level wrong path for “Buckling curves”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “c” — exam-level wrong path for “Buckling curves”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “d” — exam-level wrong path for “Buckling curves”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 800: section classification, buckling curves, effective length factors.\n• Bolt/weld strength = min of shearing and bearing; pitch/edge distance rules.\n• Lacing/batten and built-up column shear are frequent detailing traps.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 46,
    "subject": "Steel Structures",
    "topic": "Plastic moment",
    "question": "Zp = 8×10⁵ mm³, fy = 250 MPa, γm0 = 1.1. Design plastic moment Mp ≈",
    "image": "",
    "options": [
      "250 kN·m",
      "181.8 kN·m",
      "200 kN·m",
      "90.9 kN·m"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "Mp = Zp fy/γm0",
    "explanation": "CORRECT: 181.8 kN·m\n\nWHY CORRECT:\nThis is a Numerical item in Steel Structures (Plastic moment). The keyed choice “181.8 kN·m” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Mp = Zp fy/γm0 = 8e5 × 250 / 1.1 = 1.818e8 N·mm ≈ 181.8 kN·m.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: Mp = Zp fy/γm0\nStep-by-step working: Mp = Zp fy/γm0 = 8e5 × 250 / 1.1 = 1.818e8 N·mm ≈ 181.8 kN·m.\nVerify units/pu bases and that the arithmetic lands on the keyed option “181.8 kN·m” (Gate C).\nFinal keyed result: 181.8 kN·m\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “200 kN·m” — exam-level wrong path for “Plastic moment”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “90.9 kN·m” — exam-level wrong path for “Plastic moment”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “250 kN·m” — exam-level wrong path for “Plastic moment”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 800: section classification, buckling curves, effective length factors.\n• Bolt/weld strength = min of shearing and bearing; pitch/edge distance rules.\n• Lacing/batten and built-up column shear are frequent detailing traps.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 47,
    "subject": "Steel Structures",
    "topic": "Web crippling",
    "question": "Local deformation of the web under concentrated load/reaction as shown is:",
    "image": "",
    "options": [
      "Weld fatigue only",
      "Bolt corrosion",
      "Web crippling",
      "LTB"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Web crippling\n\nWHY CORRECT:\nThis is a Diagram+Application item in Steel Structures (Web crippling). The keyed choice “Web crippling” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Local web crushing/buckling under concentrated force is web crippling.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “LTB” — exam-level wrong path for “Web crippling”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Weld fatigue only” — exam-level wrong path for “Web crippling”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Bolt corrosion” — exam-level wrong path for “Web crippling”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 800: section classification, buckling curves, effective length factors.\n• Bolt/weld strength = min of shearing and bearing; pitch/edge distance rules.\n• Lacing/batten and built-up column shear are frequent detailing traps.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 48,
    "subject": "Steel Structures",
    "topic": "Bolt pitch",
    "question": "Bolt diameter 20 mm. Minimum pitch along load ≥",
    "image": "",
    "options": [
      "20 mm",
      "32 mm",
      "16 mm",
      "50 mm"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Standard+Numerical",
    "formula": "p ≥ 2.5d",
    "explanation": "CORRECT: 50 mm\n\nWHY CORRECT:\nThis is a Standard+Numerical item in Steel Structures (Bolt pitch). The keyed choice “50 mm” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Minimum pitch = 2.5d = 50 mm.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: p ≥ 2.5d\nStep-by-step working: Minimum pitch = 2.5d = 50 mm.\nVerify units/pu bases and that the arithmetic lands on the keyed option “50 mm” (Gate C).\nFinal keyed result: 50 mm\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “20 mm” — exam-level wrong path for “Bolt pitch”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “32 mm” — exam-level wrong path for “Bolt pitch”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “16 mm” — exam-level wrong path for “Bolt pitch”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 800: section classification, buckling curves, effective length factors.\n• Bolt/weld strength = min of shearing and bearing; pitch/edge distance rules.\n• Lacing/batten and built-up column shear are frequent detailing traps.",
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
    "explanation": "CORRECT: Reject/repair weld per engineer — do not accept as-is\n\nWHY CORRECT:\nThis is a Practical item in Steel Structures (Weld quality). The keyed choice “Reject/repair weld per engineer — do not accept as-is” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Undercut and incomplete fusion are rejectable defects unless repaired/accepted by engineer after assessment.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) Non-engineering distractor (“Paint over”). Real papers trap candidates on technical slips in Steel Structures — flag option for MODIFY rewrite.\nC) “Accept if length OK” — exam-level wrong path for “Weld quality”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) Non-engineering distractor (“Ignore”). Real papers trap candidates on technical slips in Steel Structures — flag option for MODIFY rewrite.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 800: section classification, buckling curves, effective length factors.\n• Bolt/weld strength = min of shearing and bearing; pitch/edge distance rules.\n• Lacing/batten and built-up column shear are frequent detailing traps.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 50,
    "subject": "Steel Structures",
    "topic": "Column buckling",
    "question": "Same section, same effective length about both axes, rx > ry. Buckling governs about:",
    "image": "",
    "options": [
      "Torsion only always",
      "y–y (weak)",
      "x–x",
      "Either same"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "λ = Le/r",
    "explanation": "CORRECT: y–y (weak)\n\nWHY CORRECT:\nThis is a Application item in Steel Structures (Column buckling). The keyed choice “y–y (weak)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: λ = Le/r is larger for smaller r → weak (y–y) axis governs.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: λ = Le/r\nStep-by-step working: λ = Le/r is larger for smaller r → weak (y–y) axis governs.\nVerify units/pu bases and that the arithmetic lands on the keyed option “y–y (weak)” (Gate C).\nFinal keyed result: y–y (weak)\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “x–x” — exam-level wrong path for “Column buckling”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Either same” — exam-level wrong path for “Column buckling”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Torsion only always” — exam-level wrong path for “Column buckling”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 456: xu,max / d limits by grade; under-reinforced preferred for ductile failure.\n• Development length Ld = (φ σs)/(4 τbd); anchorage and curtailment traps.\n• Nominal cover vs effective cover vs effective depth — classic distractor family.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 51,
    "subject": "Steel Structures",
    "topic": "Purlins",
    "question": "Purlin design load path: roof sheet → purlin →",
    "image": "",
    "options": [
      "Retaining wall",
      "Raft",
      "Truss rafter / top chord",
      "Pile"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Truss rafter / top chord\n\nWHY CORRECT:\nThis is a Conceptual item in Steel Structures (Purlins). The keyed choice “Truss rafter / top chord” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Purlins transfer roof load to the truss rafter/top chord.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Pile” — exam-level wrong path for “Purlins”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Retaining wall” — exam-level wrong path for “Purlins”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Raft” — exam-level wrong path for “Purlins”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• IS 800: section classification, buckling curves, effective length factors.\n• Bolt/weld strength = min of shearing and bearing; pitch/edge distance rules.\n• Lacing/batten and built-up column shear are frequent detailing traps.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 52,
    "subject": "Foundation Engineering",
    "topic": "Terzaghi bearing capacity",
    "question": "Allowable net soil pressure 150 kPa. Column load 1200 kN including self-weight of footing. Square footing size (m) is closest to:",
    "image": "",
    "options": [
      "2.0",
      "4.0",
      "1.5",
      "2.83"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Standard+Numerical",
    "formula": "qu = γDf Nq + 0.4 γ B Nγ (c=0, square)",
    "explanation": "CORRECT: 2.83\n\nWHY CORRECT:\nApply code/strength-of-materials relations with correct units; AEE expects multi-step arithmetic.\n\nCALCULATION:\nCompute from first principles using the given data; do not memorize a single number.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nDistractors reuse wrong section modulus, wrong γm, or mix gross/net areas.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same numerical pattern repeats with changed numbers in AEE papers.",
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
    "explanation": "CORRECT: Q/A = γ Df\n\nWHY CORRECT:\nThis is a Diagram+Conceptual item in Foundation Engineering (Compensated raft). The keyed choice “Q/A = γ Df” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Fully compensated when building pressure equals excavated overburden γ Df.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: qnet = Q/A − γ Df\nStep-by-step working: Fully compensated when building pressure equals excavated overburden γ Df.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Q/A = γ Df” (Gate C).\nFinal keyed result: Q/A = γ Df\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Q = 0” — exam-level wrong path for “Compensated raft”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Df = 0” — exam-level wrong path for “Compensated raft”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Q = γ” — exam-level wrong path for “Compensated raft”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Terzaghi qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (strip); shape/depth factors for others.\n• Flexible footing → near-uniform contact pressure on elastic soil; rigid → edge peaks.\n• Settlement control often governs raft / pile group choice.",
    "source": "CIVIL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/civil-flt01/q53-compensated-raft.svg"
  },
  {
    "id": 54,
    "subject": "Foundation Engineering",
    "topic": "Settlement",
    "question": "Differential settlement is more critical mainly because:",
    "image": "",
    "options": [
      "Zero stress",
      "It causes distortion/cracking",
      "Colour change",
      "It raises fy"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: It causes distortion/cracking\n\nWHY CORRECT:\nThis is a Conceptual item in Foundation Engineering (Settlement). The keyed choice “It causes distortion/cracking” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Differential settlement induces distortion and structural cracking.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) Non-engineering distractor (“Colour change”). Real papers trap candidates on technical slips in Foundation Engineering — flag option for MODIFY rewrite.\nC) “It raises fy” — exam-level wrong path for “Settlement”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Zero stress” — exam-level wrong path for “Settlement”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Terzaghi qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (strip); shape/depth factors for others.\n• Flexible footing → near-uniform contact pressure on elastic soil; rigid → edge peaks.\n• Settlement control often governs raft / pile group choice.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 55,
    "subject": "Foundation Engineering",
    "topic": "Foundation selection",
    "question": "Exterior column near a property line with large moment — preferred foundation:",
    "image": "",
    "options": [
      "Ignore moment",
      "Timber sleeper only",
      "Combined/strap footing to control eccentricity",
      "Tiny isolated always"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Combined/strap footing to control eccentricity\n\nWHY CORRECT:\nThis is a Application item in Foundation Engineering (Foundation selection). The keyed choice “Combined/strap footing to control eccentricity” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Combined or strap footing controls eccentricity near property line.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Tiny isolated always” — exam-level wrong path for “Foundation selection”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) Non-engineering distractor (“Ignore moment”). Real papers trap candidates on technical slips in Foundation Engineering — flag option for MODIFY rewrite.\nD) “Timber sleeper only” — exam-level wrong path for “Foundation selection”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Terzaghi qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (strip); shape/depth factors for others.\n• Flexible footing → near-uniform contact pressure on elastic soil; rigid → edge peaks.\n• Settlement control often governs raft / pile group choice.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 56,
    "subject": "Foundation Engineering",
    "topic": "Safe bearing capacity",
    "question": "If net ultimate bearing capacity qnu = 600 kPa and FOS = 3, net safe bearing capacity qns is:",
    "image": "",
    "options": [
      "600 kPa",
      "1800 kPa",
      "100 kPa",
      "200 kPa"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "qns = qnu/FOS",
    "explanation": "CORRECT: 200 kPa\n\nWHY CORRECT:\nThis is a Conceptual item in Foundation Engineering (Safe bearing capacity). The keyed choice “200 kPa” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: qns = qnu / FOS = 600/3 = 200 kPa.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: qns = qnu/FOS\nStep-by-step working: qns = qnu / FOS = 600/3 = 200 kPa.\nVerify units/pu bases and that the arithmetic lands on the keyed option “200 kPa” (Gate C).\nFinal keyed result: 200 kPa\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “600 kPa” — exam-level wrong path for “Safe bearing capacity”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “1800 kPa” — exam-level wrong path for “Safe bearing capacity”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “100 kPa” — exam-level wrong path for “Safe bearing capacity”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Terzaghi qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (strip); shape/depth factors for others.\n• Flexible footing → near-uniform contact pressure on elastic soil; rigid → edge peaks.\n• Settlement control often governs raft / pile group choice.",
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
    "explanation": "CORRECT: Consolidation settlement\n\nWHY CORRECT:\nThis is a Diagram+Application item in Foundation Engineering (Layered settlement). The keyed choice “Consolidation settlement” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Clay layers undergo consolidation settlement under sustained load.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Clay layers undergo consolidation settlement under sustained load.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Consolidation settlement” (Gate C).\nFinal keyed result: Consolidation settlement\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Steel rust” — exam-level wrong path for “Layered settlement”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Zero always” — exam-level wrong path for “Layered settlement”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Only concrete elasticity” — exam-level wrong path for “Layered settlement”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Terzaghi qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (strip); shape/depth factors for others.\n• Flexible footing → near-uniform contact pressure on elastic soil; rigid → edge peaks.\n• Settlement control often governs raft / pile group choice.",
    "source": "CIVIL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/civil-flt01/q57-footing-layers.svg"
  },
  {
    "id": 58,
    "subject": "Foundation Engineering",
    "topic": "Contact pressure",
    "question": "Using the table of footing contact-pressure patterns, which statement is correct?",
    "image": "",
    "options": [
      "Both non-uniform",
      "Uniform for X, not for Y",
      "Uniform for Y, not for X",
      "Both uniform"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Table/Figure",
    "formula": "",
    "explanation": "CORRECT: Uniform for X, not for Y\n\nWHY CORRECT:\nThis is a Table/Figure item in Foundation Engineering (Contact pressure). The keyed choice “Uniform for X, not for Y” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Flexible (elastic) footing → roughly uniform contact pressure; rigid footing → non-uniform (higher at edges on elastic soil).\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Uniform for Y, not for X” — exam-level wrong path for “Contact pressure”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Both uniform” — exam-level wrong path for “Contact pressure”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Both non-uniform” — exam-level wrong path for “Contact pressure”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Terzaghi qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (strip); shape/depth factors for others.\n• Flexible footing → near-uniform contact pressure on elastic soil; rigid → edge peaks.\n• Settlement control often governs raft / pile group choice.",
    "source": "CIVIL_FLT01_REGENERATED_v2",
    "dataTable": {
      "caption": "Contact pressure pattern (elastic soil)",
      "headers": [
        "Footing type",
        "Contact pressure pattern"
      ],
      "rows": [
        [
          "X — Flexible (elastic)",
          "Approximately uniform"
        ],
        [
          "Y — Rigid",
          "Non-uniform (higher at edges)"
        ]
      ]
    }
  },
  {
    "id": 59,
    "subject": "Foundation Engineering",
    "topic": "Raft",
    "question": "A raft foundation is typically used when:",
    "image": "",
    "options": [
      "Rock + tiny loads",
      "No columns",
      "Low SBC + heavy loads / settlement control",
      "One tiny column"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Low SBC + heavy loads / settlement control\n\nWHY CORRECT:\nThis is a Conceptual item in Foundation Engineering (Raft). The keyed choice “Low SBC + heavy loads / settlement control” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Rafts are preferred for low SBC with heavy loads and settlement control.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “One tiny column” — exam-level wrong path for “Raft”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Rock + tiny loads” — exam-level wrong path for “Raft”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “No columns” — exam-level wrong path for “Raft”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Terzaghi qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (strip); shape/depth factors for others.\n• Flexible footing → near-uniform contact pressure on elastic soil; rigid → edge peaks.\n• Settlement control often governs raft / pile group choice.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 60,
    "subject": "Foundation Engineering",
    "topic": "Excavation risk",
    "question": "Excavation beside an existing footing — critical risk:",
    "image": "",
    "options": [
      "Raise old fy",
      "Reprint code year",
      "Colour only",
      "Undermining the existing foundation"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Practical",
    "formula": "",
    "explanation": "CORRECT: Undermining the existing foundation\n\nWHY CORRECT:\nThis is a Practical item in Foundation Engineering (Excavation risk). The keyed choice “Undermining the existing foundation” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Adjacent excavation can undermine and reduce support to existing foundations.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Raise old fy” — exam-level wrong path for “Excavation risk”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Reprint code year” — exam-level wrong path for “Excavation risk”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) Non-engineering distractor (“Colour only”). Real papers trap candidates on technical slips in Foundation Engineering — flag option for MODIFY rewrite.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Terzaghi qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (strip); shape/depth factors for others.\n• Flexible footing → near-uniform contact pressure on elastic soil; rigid → edge peaks.\n• Settlement control often governs raft / pile group choice.",
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
    "explanation": "CORRECT: Es, influence factors, net pressure, size\n\nWHY CORRECT:\nThis is a Conceptual item in Foundation Engineering (Immediate settlement). The keyed choice “Es, influence factors, net pressure, size” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Immediate settlement depends on elastic modulus, geometry, and net pressure.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Immediate settlement depends on elastic modulus, geometry, and net pressure.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Es, influence factors, net pressure, size” (Gate C).\nFinal keyed result: Es, influence factors, net pressure, size\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Secondary only always” — exam-level wrong path for “Immediate settlement”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) Non-engineering distractor (“Colour”). Real papers trap candidates on technical slips in Foundation Engineering — flag option for MODIFY rewrite.\nD) “Ast only” — exam-level wrong path for “Immediate settlement”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Terzaghi qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (strip); shape/depth factors for others.\n• Flexible footing → near-uniform contact pressure on elastic soil; rigid → edge peaks.\n• Settlement control often governs raft / pile group choice.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 62,
    "subject": "Soil Mechanics",
    "topic": "Rankine earth pressure",
    "question": "In the Rankine active graphical figure shown, length OP represents:",
    "image": "images/diagrams/civil-flt01/q62-rankine-op.svg",
    "options": [
      "Passive pressure at top",
      "Lateral earth pressure at the base",
      "Vertical stress at H/3",
      "Wall friction"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Diagram",
    "formula": "pa = Ka γ H",
    "explanation": "CORRECT: Lateral earth pressure at the base\n\nWHY CORRECT:\nThis is a Diagram item in Soil Mechanics (Rankine earth pressure). The keyed choice “Lateral earth pressure at the base” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: OP is the base of the active pressure triangle = Ka γ H.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: pa = Ka γ H\nStep-by-step working: OP is the base of the active pressure triangle = Ka γ H.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Lateral earth pressure at the base” (Gate C).\nFinal keyed result: Lateral earth pressure at the base\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Vertical stress at H/3” — exam-level wrong path for “Rankine earth pressure”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Wall friction” — exam-level wrong path for “Rankine earth pressure”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Passive pressure at top” — exam-level wrong path for “Rankine earth pressure”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Compaction: OMC–MDD; consolidation: Cv, Tv = Cv t / d^2.\n• Rankine Ka = (1−sinφ)/(1+sinφ); Kp = 1/Ka.\n• Index properties vs strength parameters — don't mix Atterberg with c–φ.",
    "source": "CIVIL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/civil-flt01/q62-rankine-op.svg"
  },
  {
    "id": 63,
    "subject": "Soil Mechanics",
    "topic": "Compaction",
    "question": "A soil has e=0.6, G=2.7, S=0.8. Water content w (%) is closest to:",
    "image": "",
    "options": [
      "27",
      "8",
      "17.8",
      "60"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "AR",
    "formula": "",
    "explanation": "CORRECT: 17.8\n\nWHY CORRECT:\nApply code/strength-of-materials relations with correct units; AEE expects multi-step arithmetic.\n\nCALCULATION:\nCompute from first principles using the given data; do not memorize a single number.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nDistractors reuse wrong section modulus, wrong γm, or mix gross/net areas.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same numerical pattern repeats with changed numbers in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 64,
    "subject": "Soil Mechanics",
    "topic": "Phase relations",
    "question": "G = 2.7, w = 18%, S = 75%. Void ratio e =",
    "image": "",
    "options": [
      "0.486",
      "0.750",
      "0.200",
      "0.648"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "e = wG/S",
    "explanation": "CORRECT: 0.648\n\nWHY CORRECT:\nThis is a Numerical item in Soil Mechanics (Phase relations). The keyed choice “0.648” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: e = wG/S = 0.18×2.7/0.75 = 0.648.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: e = wG/S\nStep-by-step working: e = wG/S = 0.18×2.7/0.75 = 0.648.\nVerify units/pu bases and that the arithmetic lands on the keyed option “0.648” (Gate C).\nFinal keyed result: 0.648\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “0.486” — exam-level wrong path for “Phase relations”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “0.750” — exam-level wrong path for “Phase relations”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “0.200” — exam-level wrong path for “Phase relations”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Compaction: OMC–MDD; consolidation: Cv, Tv = Cv t / d^2.\n• Rankine Ka = (1−sinφ)/(1+sinφ); Kp = 1/Ka.\n• Index properties vs strength parameters — don't mix Atterberg with c–φ.",
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
    "explanation": "CORRECT: 16.4\n\nWHY CORRECT:\nThis is a Numerical item in Soil Mechanics (Phase relations). The keyed choice “16.4” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: w = Se/G = 0.80×0.55/2.68 ≈ 0.164 → 16.4%.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: w = Se/G\nStep-by-step working: w = Se/G = 0.80×0.55/2.68 ≈ 0.164 → 16.4%.\nVerify units/pu bases and that the arithmetic lands on the keyed option “16.4” (Gate C).\nFinal keyed result: 16.4\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “20.5” — exam-level wrong path for “Phase relations”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “12.0” — exam-level wrong path for “Phase relations”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “25” — exam-level wrong path for “Phase relations”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Compaction: OMC–MDD; consolidation: Cv, Tv = Cv t / d^2.\n• Rankine Ka = (1−sinφ)/(1+sinφ); Kp = 1/Ka.\n• Index properties vs strength parameters — don't mix Atterberg with c–φ.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 66,
    "subject": "Soil Mechanics",
    "topic": "Active earth pressure",
    "question": "φ = 30°, γ = 18 kN/m³, H = 4 m, c = 0, horizontal backfill. Total active thrust Pa (kN/m) ≈",
    "image": "",
    "options": [
      "36",
      "48",
      "72",
      "96"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "Pa = 0.5 Ka γ H²",
    "explanation": "CORRECT: 48\n\nWHY CORRECT:\nThis is a Numerical item in Soil Mechanics (Active earth pressure). The keyed choice “48” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Ka = (1−sinφ)/(1+sinφ) = 1/3; Pa = 0.5 Ka γ H² = 0.5×(1/3)×18×16 = 48 kN/m.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: Pa = 0.5 Ka γ H²\nStep-by-step working: Ka = (1−sinφ)/(1+sinφ) = 1/3; Pa = 0.5 Ka γ H² = 0.5×(1/3)×18×16 = 48 kN/m.\nVerify units/pu bases and that the arithmetic lands on the keyed option “48” (Gate C).\nFinal keyed result: 48\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “72” — exam-level wrong path for “Active earth pressure”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “96” — exam-level wrong path for “Active earth pressure”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “36” — exam-level wrong path for “Active earth pressure”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Compaction: OMC–MDD; consolidation: Cv, Tv = Cv t / d^2.\n• Rankine Ka = (1−sinφ)/(1+sinφ); Kp = 1/Ka.\n• Index properties vs strength parameters — don't mix Atterberg with c–φ.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 67,
    "subject": "Soil Mechanics",
    "topic": "Atterberg limits",
    "question": "Plasticity index IP =",
    "image": "",
    "options": [
      "WL − WS",
      "WP only",
      "WL − WP",
      "WP − WS"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "IP = WL − WP",
    "explanation": "CORRECT: WL − WP\n\nWHY CORRECT:\nThis is a Conceptual item in Soil Mechanics (Atterberg limits). The keyed choice “WL − WP” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: IP = liquid limit − plastic limit.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: IP = WL − WP\nStep-by-step working: IP = liquid limit − plastic limit.\nVerify units/pu bases and that the arithmetic lands on the keyed option “WL − WP” (Gate C).\nFinal keyed result: WL − WP\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “WP − WS” — exam-level wrong path for “Atterberg limits”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “WL − WS” — exam-level wrong path for “Atterberg limits”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “WP only” — exam-level wrong path for “Atterberg limits”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Compaction: OMC–MDD; consolidation: Cv, Tv = Cv t / d^2.\n• Rankine Ka = (1−sinφ)/(1+sinφ); Kp = 1/Ka.\n• Index properties vs strength parameters — don't mix Atterberg with c–φ.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 68,
    "subject": "Soil Mechanics",
    "topic": "Stress–strain behaviour",
    "question": "From the dense sand / OC clay stress–strain curves shown, the typical response is:",
    "image": "images/diagrams/civil-flt01/q68-stress-strain.svg",
    "options": [
      "No peak always like loose",
      "Zero strength",
      "φu = 0 always",
      "Peak then softening"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Graph+Diagram",
    "formula": "",
    "explanation": "CORRECT: Peak then softening\n\nWHY CORRECT:\nThis is a Graph item in Soil Mechanics (Stress–strain behaviour). The keyed choice “Peak then softening” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dense sand/OC clay show peak strength followed by strain softening.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “No peak always like loose” — exam-level wrong path for “Stress–strain behaviour”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Zero strength” — exam-level wrong path for “Stress–strain behaviour”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “φu = 0 always” — exam-level wrong path for “Stress–strain behaviour”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• σ = P/A, τ = VQ/(Ib), M/I = σ/y = E/R — core SOM triad.\n• SFD/BMD sign convention and max BM location are highest-frequency PYQs.\n• Indeterminate structures need compatibility (slope/deflection) not just ΣF=0.",
    "source": "CIVIL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/civil-flt01/q68-stress-strain.svg"
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
    "explanation": "CORRECT: Quicksand / boiling\n\nWHY CORRECT:\nThis is a Application item in Soil Mechanics (Seepage / quicksand). The keyed choice “Quicksand / boiling” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Zero effective stress under upward seepage → quicksand/boiling.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: σ′ = σ − u\nStep-by-step working: Zero effective stress under upward seepage → quicksand/boiling.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Quicksand / boiling” (Gate C).\nFinal keyed result: Quicksand / boiling\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Compaction” — exam-level wrong path for “Seepage / quicksand”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Capillarity rise only” — exam-level wrong path for “Seepage / quicksand”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Overconsolidation” — exam-level wrong path for “Seepage / quicksand”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Compaction: OMC–MDD; consolidation: Cv, Tv = Cv t / d^2.\n• Rankine Ka = (1−sinφ)/(1+sinφ); Kp = 1/Ka.\n• Index properties vs strength parameters — don't mix Atterberg with c–φ.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 70,
    "subject": "Soil Mechanics",
    "topic": "Consolidation",
    "question": "Primary consolidation of saturated clay is mainly due to:",
    "image": "",
    "options": [
      "Steel rust",
      "Pore-water expulsion under load",
      "Elastic water compression alone",
      "Sand boil only"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Pore-water expulsion under load\n\nWHY CORRECT:\nThis is a Conceptual item in Soil Mechanics (Consolidation). The keyed choice “Pore-water expulsion under load” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Primary consolidation is expulsion of pore water under load.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Primary consolidation is expulsion of pore water under load.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Pore-water expulsion under load” (Gate C).\nFinal keyed result: Pore-water expulsion under load\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Elastic water compression alone” — exam-level wrong path for “Consolidation”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Sand boil only” — exam-level wrong path for “Consolidation”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Steel rust” — exam-level wrong path for “Consolidation”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Compaction: OMC–MDD; consolidation: Cv, Tv = Cv t / d^2.\n• Rankine Ka = (1−sinφ)/(1+sinφ); Kp = 1/Ka.\n• Index properties vs strength parameters — don't mix Atterberg with c–φ.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 71,
    "subject": "Quantitative Aptitude",
    "topic": "Work–time",
    "question": "Critical hydraulic gradient ic = (G−1)/(1+e). For G=2.65, e=0.65, ic ≈",
    "image": "",
    "options": [
      "0.65",
      "1.65",
      "1.0",
      "2.65"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "M1 D1 = M2 D2",
    "explanation": "CORRECT: 1.0\n\nWHY CORRECT:\nApply code/strength-of-materials relations with correct units; AEE expects multi-step arithmetic.\n\nCALCULATION:\nCompute from first principles using the given data; do not memorize a single number.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nDistractors reuse wrong section modulus, wrong γm, or mix gross/net areas.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same numerical pattern repeats with changed numbers in AEE papers.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 72,
    "subject": "Quantitative Aptitude",
    "topic": "CI–SI",
    "question": "Difference between CI (annual) and SI on ₹5000 at 10% for 2 years is:",
    "image": "",
    "options": [
      "100",
      "500",
      "25",
      "50"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "CI − SI = P(r/100)² for 2 years",
    "explanation": "CORRECT: 50\n\nWHY CORRECT:\nThis is a Conceptual item in Quantitative Aptitude (CI–SI). The keyed choice “50” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: CI = 1050, SI = 1000; difference = 50.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: CI − SI = P(r/100)² for 2 years\nStep-by-step working: CI = 1050, SI = 1000; difference = 50.\nVerify units/pu bases and that the arithmetic lands on the keyed option “50” (Gate C).\nFinal keyed result: 50\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “100” — exam-level wrong path for “CI–SI”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “500” — exam-level wrong path for “CI–SI”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “25” — exam-level wrong path for “CI–SI”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
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
    "explanation": "CORRECT: 8 kg\n\nWHY CORRECT:\nThis is a Conceptual item in Quantitative Aptitude (Alligation / mixture). The keyed choice “8 kg” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Cu = 24, Zn = 16; need Cu = 2×16 = 32 → add 8 kg.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Cu = 24, Zn = 16; need Cu = 2×16 = 32 → add 8 kg.\nVerify units/pu bases and that the arithmetic lands on the keyed option “8 kg” (Gate C).\nFinal keyed result: 8 kg\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “10 kg” — exam-level wrong path for “Alligation / mixture”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “6 kg” — exam-level wrong path for “Alligation / mixture”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “4 kg” — exam-level wrong path for “Alligation / mixture”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 74,
    "subject": "Quantitative Aptitude",
    "topic": "Average",
    "question": "Average of 8 numbers is 25. One number 40 is replaced by 16. New average is:",
    "image": "",
    "options": [
      "18",
      "22",
      "24",
      "20"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 22\n\nWHY CORRECT:\nThis is a Conceptual item in Quantitative Aptitude (Average). The keyed choice “22” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Change in sum = −24; new avg = 25 − 24/8 = 22.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Change in sum = −24; new avg = 25 − 24/8 = 22.\nVerify units/pu bases and that the arithmetic lands on the keyed option “22” (Gate C).\nFinal keyed result: 22\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “24” — exam-level wrong path for “Average”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “20” — exam-level wrong path for “Average”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “18” — exam-level wrong path for “Average”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 75,
    "subject": "Quantitative Aptitude",
    "topic": "Ratio",
    "question": "If A:B = 5:7 and B:C = 2:3, then A:C is:",
    "image": "",
    "options": [
      "2:7",
      "5:21",
      "10:21",
      "5:3"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 10:21\n\nWHY CORRECT:\nThis is a Conceptual item in Quantitative Aptitude (Ratio). The keyed choice “10:21” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: A:B:C = 10:14:21 → A:C = 10:21.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: A:B:C = 10:14:21 → A:C = 10:21.\nVerify units/pu bases and that the arithmetic lands on the keyed option “10:21” (Gate C).\nFinal keyed result: 10:21\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “5:3” — exam-level wrong path for “Ratio”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “2:7” — exam-level wrong path for “Ratio”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “5:21” — exam-level wrong path for “Ratio”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 76,
    "subject": "Quantitative Aptitude",
    "topic": "Boats & streams",
    "question": "Boat speed in still water 15 km/h, stream 3 km/h. Time to go 24 km upstream:",
    "image": "",
    "options": [
      "1.6 h",
      "3 h",
      "1 h",
      "2 h"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 2 h\n\nWHY CORRECT:\nThis is a Conceptual item in Quantitative Aptitude (Boats & streams). The keyed choice “2 h” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Upstream speed = 12 km/h; t = 24/12 = 2 h.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Upstream speed = 12 km/h; t = 24/12 = 2 h.\nVerify units/pu bases and that the arithmetic lands on the keyed option “2 h” (Gate C).\nFinal keyed result: 2 h\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “1.6 h” — exam-level wrong path for “Boats & streams”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “3 h” — exam-level wrong path for “Boats & streams”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “1 h” — exam-level wrong path for “Boats & streams”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
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
    "explanation": "CORRECT: 3\n\nWHY CORRECT:\nThis is a Conceptual item in Quantitative Aptitude (Algebra). The keyed choice “3” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: (x+1/x)² = x²+2+1/x² = 9 → x+1/x = 3.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: (x+1/x)² = x²+2+1/x² = 9 → x+1/x = 3.\nVerify units/pu bases and that the arithmetic lands on the keyed option “3” (Gate C).\nFinal keyed result: 3\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “√7” — exam-level wrong path for “Algebra”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “√5” — exam-level wrong path for “Algebra”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “2” — exam-level wrong path for “Algebra”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 78,
    "subject": "Quantitative Aptitude",
    "topic": "Series",
    "question": "Find the next term: 7, 10, 16, 28, 52, ?",
    "image": "",
    "options": [
      "78",
      "100",
      "96",
      "84"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 100\n\nWHY CORRECT:\nThis is a Conceptual item in Quantitative Aptitude (Series). The keyed choice “100” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Differences +3,+6,+12,+24,+48 → next = 52+48 = 100.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Differences +3,+6,+12,+24,+48 → next = 52+48 = 100.\nVerify units/pu bases and that the arithmetic lands on the keyed option “100” (Gate C).\nFinal keyed result: 100\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “96” — exam-level wrong path for “Series”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “84” — exam-level wrong path for “Series”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “78” — exam-level wrong path for “Series”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 79,
    "subject": "General Awareness",
    "topic": "APTRANSCO",
    "question": "APTRANSCO primarily functions as:",
    "image": "",
    "options": [
      "RBI subsidiary",
      "NHAI only",
      "Andhra Pradesh transmission utility",
      "Municipal bus operator"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Andhra Pradesh transmission utility\n\nWHY CORRECT:\nThis is a Conceptual item in General Awareness (APTRANSCO). The keyed choice “Andhra Pradesh transmission utility” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: APTRANSCO is the state transmission utility.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Municipal bus operator” — exam-level wrong path for “APTRANSCO”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “RBI subsidiary” — exam-level wrong path for “APTRANSCO”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “NHAI only” — exam-level wrong path for “APTRANSCO”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 80,
    "subject": "General Awareness",
    "topic": "Power system",
    "question": "Nominal grid frequency in India is:",
    "image": "",
    "options": [
      "60 Hz",
      "40 Hz",
      "100 Hz",
      "50 Hz"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 50 Hz\n\nWHY CORRECT:\nThis is a Conceptual item in General Awareness (Power system). The keyed choice “50 Hz” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: India operates at 50 Hz.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “60 Hz” — exam-level wrong path for “Power system”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “40 Hz” — exam-level wrong path for “Power system”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “100 Hz” — exam-level wrong path for “Power system”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
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
    "explanation": "CORRECT: Supreme Court\n\nWHY CORRECT:\nThis is a Conceptual item in General Awareness (Polity). The keyed choice “Supreme Court” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Supreme Court is the apex court.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “High Court only” — exam-level wrong path for “Polity”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “District Court” — exam-level wrong path for “Polity”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Lok Adalat only” — exam-level wrong path for “Polity”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 82,
    "subject": "General Awareness",
    "topic": "Economy",
    "question": "The body that replaced the Planning Commission is:",
    "image": "",
    "options": [
      "IRDAI",
      "NITI Aayog",
      "RBI",
      "SEBI"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: NITI Aayog\n\nWHY CORRECT:\nThis is a Conceptual item in General Awareness (Economy). The keyed choice “NITI Aayog” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: NITI Aayog replaced the Planning Commission.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: NITI Aayog replaced the Planning Commission.\nVerify units/pu bases and that the arithmetic lands on the keyed option “NITI Aayog” (Gate C).\nFinal keyed result: NITI Aayog\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “RBI” — exam-level wrong path for “Economy”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “SEBI” — exam-level wrong path for “Economy”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “IRDAI” — exam-level wrong path for “Economy”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 83,
    "subject": "General Awareness",
    "topic": "Science",
    "question": "SI unit of power is:",
    "image": "",
    "options": [
      "Pascal",
      "Coulomb",
      "Watt",
      "Joule"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Watt\n\nWHY CORRECT:\nThis is a Conceptual item in General Awareness (Science). The keyed choice “Watt” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Power unit is watt (J/s).\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Joule” — exam-level wrong path for “Science”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Pascal” — exam-level wrong path for “Science”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Coulomb” — exam-level wrong path for “Science”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 84,
    "subject": "General Awareness",
    "topic": "Energy",
    "question": "A ‘green corridor’ for RE integration mainly concerns:",
    "image": "",
    "options": [
      "Only forestry roads",
      "Only metro paint",
      "Only banking",
      "Power transmission of renewables"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Power transmission of renewables\n\nWHY CORRECT:\nThis is a Conceptual item in General Awareness (Energy). The keyed choice “Power transmission of renewables” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Green corridors are transmission corridors for renewable energy.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Only forestry roads” — exam-level wrong path for “Energy”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) Non-engineering distractor (“Only metro paint”). Real papers trap candidates on technical slips in General Awareness — flag option for MODIFY rewrite.\nD) “Only banking” — exam-level wrong path for “Energy”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
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
    "explanation": "CORRECT: 400/765 kV class\n\nWHY CORRECT:\nThis is a Conceptual item in General Awareness (Power system). The keyed choice “400/765 kV class” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Inter-state transmission uses EHV classes such as 400/765 kV.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Inter-state transmission uses EHV classes such as 400/765 kV.\nVerify units/pu bases and that the arithmetic lands on the keyed option “400/765 kV class” (Gate C).\nFinal keyed result: 400/765 kV class\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “12 V” — exam-level wrong path for “Power system”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “48 V” — exam-level wrong path for “Power system”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “5 V USB” — exam-level wrong path for “Power system”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 86,
    "subject": "Reasoning",
    "topic": "Odd one out",
    "question": "Odd one out: Rectangle, Square, Rhombus, Sphere",
    "image": "",
    "options": [
      "Rectangle",
      "Sphere",
      "Square",
      "Rhombus"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Sphere\n\nWHY CORRECT:\nThis is a Conceptual item in Reasoning (Odd one out). The keyed choice “Sphere” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Sphere is 3D; others are 2D quadrilaterals.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Square” — exam-level wrong path for “Odd one out”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Rhombus” — exam-level wrong path for “Odd one out”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Rectangle” — exam-level wrong path for “Odd one out”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 87,
    "subject": "Reasoning",
    "topic": "Ranking",
    "question": "P is 16th from the left and 15th from the right in a row. Number of persons in the row is:",
    "image": "",
    "options": [
      "32",
      "29",
      "30",
      "31"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "n = L + R − 1",
    "explanation": "CORRECT: 30\n\nWHY CORRECT:\nThis is a Conceptual item in Reasoning (Ranking). The keyed choice “30” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: n = 16 + 15 − 1 = 30.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nGoverning relation: n = L + R − 1\nStep-by-step working: n = 16 + 15 − 1 = 30.\nVerify units/pu bases and that the arithmetic lands on the keyed option “30” (Gate C).\nFinal keyed result: 30\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “31” — exam-level wrong path for “Ranking”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “32” — exam-level wrong path for “Ranking”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “29” — exam-level wrong path for “Ranking”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 88,
    "subject": "Reasoning",
    "topic": "Series",
    "question": "Find next: 5, 11, 24, 51, 106, ?",
    "image": "",
    "options": [
      "215",
      "220",
      "212",
      "217"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 217\n\nWHY CORRECT:\nThis is a Conceptual item in Reasoning (Series). The keyed choice “217” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Pattern ×2+1, ×2+2, ×2+3, ×2+4, ×2+5 → 106×2+5 = 217.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Pattern ×2+1, ×2+2, ×2+3, ×2+4, ×2+5 → 106×2+5 = 217.\nVerify units/pu bases and that the arithmetic lands on the keyed option “217” (Gate C).\nFinal keyed result: 217\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “215” — exam-level wrong path for “Series”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “220” — exam-level wrong path for “Series”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “212” — exam-level wrong path for “Series”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
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
    "explanation": "CORRECT: Does not follow\n\nWHY CORRECT:\nThis is a Conceptual item in Reasoning (Syllogism). The keyed choice “Does not follow” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Particular conclusion about A and C is not definite from the given statements.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Follows” — exam-level wrong path for “Syllogism”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Either follows” — exam-level wrong path for “Syllogism”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Follows if reverse” — exam-level wrong path for “Syllogism”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 90,
    "subject": "Reasoning",
    "topic": "Ranking",
    "question": "60 students; A is 18th from left; B is 20th from right. If A is to the left of B, students between A and B:",
    "image": "",
    "options": [
      "19",
      "22",
      "21",
      "23"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 22\n\nWHY CORRECT:\nThis is a Conceptual item in Reasoning (Ranking). The keyed choice “22” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: B from left = 60−20+1 = 41; between = 41−18−1 = 22.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: B from left = 60−20+1 = 41; between = 41−18−1 = 22.\nVerify units/pu bases and that the arithmetic lands on the keyed option “22” (Gate C).\nFinal keyed result: 22\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “21” — exam-level wrong path for “Ranking”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “23” — exam-level wrong path for “Ranking”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “19” — exam-level wrong path for “Ranking”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 91,
    "subject": "English",
    "topic": "Spelling",
    "question": "Choose the correctly spelled word:",
    "image": "",
    "options": [
      "Priveleged",
      "Privleged",
      "Privileged",
      "Priviledged"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Privileged\n\nWHY CORRECT:\nThis is a Conceptual item in English (Spelling). The keyed choice “Privileged” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Correct spelling is Privileged.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Priviledged” — exam-level wrong path for “Spelling”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Priveleged” — exam-level wrong path for “Spelling”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Privleged” — exam-level wrong path for “Spelling”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 92,
    "subject": "English",
    "topic": "Synonym",
    "question": "Synonym of Candid:",
    "image": "",
    "options": [
      "Biased",
      "Vague",
      "Silent",
      "Frank"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Frank\n\nWHY CORRECT:\nThis is a Conceptual item in English (Synonym). The keyed choice “Frank” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Candid means frank/open.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Biased” — exam-level wrong path for “Synonym”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Vague” — exam-level wrong path for “Synonym”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Silent” — exam-level wrong path for “Synonym”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
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
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Abundant\n\nWHY CORRECT:\nThis is a Conceptual item in English (Antonym). The keyed choice “Abundant” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Scarce ↔ abundant.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Rare” — exam-level wrong path for “Antonym”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Lean” — exam-level wrong path for “Antonym”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Sparse” — exam-level wrong path for “Antonym”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 94,
    "subject": "English",
    "topic": "Grammar",
    "question": "Neither the engineer nor the officers ___ present.",
    "image": "",
    "options": [
      "be",
      "were",
      "was",
      "is"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: were\n\nWHY CORRECT:\nThis is a Conceptual item in English (Grammar). The keyed choice “were” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Verb agrees with the nearer subject ‘officers’ → were.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “was” — exam-level wrong path for “Grammar”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “is” — exam-level wrong path for “Grammar”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “be” — exam-level wrong path for “Grammar”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 95,
    "subject": "English",
    "topic": "One-word",
    "question": "One word for ‘killing of a king’:",
    "image": "",
    "options": [
      "Patricide",
      "Infanticide",
      "Regicide",
      "Homicide"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Regicide\n\nWHY CORRECT:\nThis is a Conceptual item in English (One-word). The keyed choice “Regicide” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Regicide = killing of a king.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Regicide = killing of a king.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Regicide” (Gate C).\nFinal keyed result: Regicide\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Homicide” — exam-level wrong path for “One-word”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Patricide” — exam-level wrong path for “One-word”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Infanticide” — exam-level wrong path for “One-word”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 96,
    "subject": "Computer Awareness",
    "topic": "Memory",
    "question": "Which is non-volatile memory?",
    "image": "",
    "options": [
      "RAM",
      "Cache only always",
      "Registers only",
      "ROM"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: ROM\n\nWHY CORRECT:\nThis is a Conceptual item in Computer Awareness (Memory). The keyed choice “ROM” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: ROM retains data without power.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “RAM” — exam-level wrong path for “Memory”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Cache only always” — exam-level wrong path for “Memory”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Registers only” — exam-level wrong path for “Memory”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
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
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Network\n\nWHY CORRECT:\nThis is a Conceptual item in Computer Awareness (OSI). The keyed choice “Network” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Routing is a Network-layer function.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Physical” — exam-level wrong path for “OSI”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Session” — exam-level wrong path for “OSI”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Presentation” — exam-level wrong path for “OSI”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 98,
    "subject": "Computer Awareness",
    "topic": "DBMS",
    "question": "A primary key must be:",
    "image": "",
    "options": [
      "No constraint",
      "Unique and NOT NULL",
      "Duplicate OK",
      "NULL OK"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Unique and NOT NULL\n\nWHY CORRECT:\nThis is a Conceptual item in Computer Awareness (DBMS). The keyed choice “Unique and NOT NULL” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Primary key is unique and not null.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Duplicate OK” — exam-level wrong path for “DBMS”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “NULL OK” — exam-level wrong path for “DBMS”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “No constraint” — exam-level wrong path for “DBMS”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 99,
    "subject": "Computer Awareness",
    "topic": "DBMS ACID",
    "question": "In ACID properties of DBMS, ‘I’ stands for:",
    "image": "",
    "options": [
      "Internet",
      "Integer",
      "Isolation",
      "Indexing"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Isolation\n\nWHY CORRECT:\nThis is a Conceptual item in Computer Awareness (DBMS ACID). The keyed choice “Isolation” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: ACID: Atomicity, Consistency, Isolation, Durability.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Indexing” — exam-level wrong path for “DBMS ACID”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Internet” — exam-level wrong path for “DBMS ACID”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Integer” — exam-level wrong path for “DBMS ACID”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  },
  {
    "id": 100,
    "subject": "Computer Awareness",
    "topic": "Cryptography",
    "question": "For confidentiality with public-key encryption, the sender encrypts using:",
    "image": "",
    "options": [
      "Sender’s public key only always",
      "Only hashing",
      "Only MAC",
      "Recipient’s public key"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Recipient’s public key\n\nWHY CORRECT:\nThis is a Conceptual item in Computer Awareness (Cryptography). The keyed choice “Recipient’s public key” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Encrypt with recipient’s public key so only recipient can decrypt with private key.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Encrypt with recipient’s public key so only recipient can decrypt with private key.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Recipient’s public key” (Gate C).\nFinal keyed result: Recipient’s public key\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Sender’s public key only always” — exam-level wrong path for “Cryptography”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Only hashing” — exam-level wrong path for “Cryptography”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Only MAC” — exam-level wrong path for “Cryptography”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• State the governing IS/standard behaviour or mechanics equation first.\n• Watch unit slips (mm vs m, N vs kN) — highest exam trap rate.\n• Tie the distractors to wrong boundary condition or wrong formula variant.",
    "source": "CIVIL_FLT01_REGENERATED_v2"
  }
];
