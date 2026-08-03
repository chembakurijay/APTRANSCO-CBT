// Electrical Engineering FLT-01 — APTRANSCO AEE CBT
// Detailed Explanation Standard + Q21 |Ef|≈1.79 keyed as 1.8 pu
// answer is 0-based index into options

export const questions = [
  {
    "id": 1,
    "subject": "Power Systems",
    "topic": "Conceptual",
    "question": "Surge impedance loading (SIL) of a lossless line depends primarily on:",
    "image": "",
    "options": [
      "Only conductor colour",
      "√(L/C) and V²",
      "Only tower height always",
      "Transformer vector group only"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: √(L/C) and V²\n\nWHY CORRECT:\nThis is a Conceptual item in Power Systems (Conceptual). The keyed choice “√(L/C) and V²” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: SIL = V²/Zc, Zc=√(L/C).\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: SIL = V²/Zc, Zc=√(L/C).\nVerify units/pu bases and that the arithmetic lands on the keyed option “√(L/C) and V²” (Gate C).\nFinal keyed result: √(L/C) and V²\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) Non-engineering distractor (“Only conductor colour”) — MODIFY later; real trap is confusing SIL with thermal/ampacity limits.\nB) (correct)\nC) Non-engineering distractor (“Only tower height always”) — real trap is thinking SIL depends on tower geometry rather than L,C,V.\nD) “Transformer vector group only” — vector group affects winding connections/zero-sequence paths, not SIL of the line.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 2,
    "subject": "Power Systems",
    "topic": "Standard+Numerical",
    "question": "For a 220 kV line, base voltage 220 kV, base MVA 100. Base impedance (Ω) is:",
    "image": "",
    "options": [
      "220",
      "100",
      "484",
      "48.4"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Standard+Numerical",
    "formula": "",
    "explanation": "CORRECT: 484\n\nWHY CORRECT:\nThis is a Standard+Numerical item in Power Systems (Standard+Numerical). The keyed choice “484” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Zb = kV²/MVA = 220²/100 = 484.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Zb = kV²/MVA = 220²/100 = 484.\nVerify units/pu bases and that the arithmetic lands on the keyed option “484” (Gate C).\nFinal keyed result: 484\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “220” — exam-level wrong path for “Standard+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “100” — exam-level wrong path for “Standard+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “48.4” — exam-level wrong path for “Standard+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Link the stem to the governing law (KCL/KVL, Faraday, power balance, stability criterion).\n• Check units / pu base consistency before comparing options.\n• Eliminate options that violate conservation, passivity, or bus-type definitions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 3,
    "subject": "Power Systems",
    "topic": "Numerical",
    "question": "Xs=0.45 Ω/km, Xm=0.12 Ω/km (transposed line). Positive- and zero-sequence reactances (Ω/km) are:",
    "image": "",
    "options": [
      "0.69, 0.33",
      "0.33, 0.66",
      "0.57, 0.33",
      "0.33, 0.69"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 0.33, 0.69\n\nWHY CORRECT:\nThis is a Numerical item in Power Systems (Numerical). The keyed choice “0.33, 0.69” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: X1=Xs−Xm=0.33; X0=Xs+2Xm=0.69.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: X1=Xs−Xm=0.33; X0=Xs+2Xm=0.69.\nVerify units/pu bases and that the arithmetic lands on the keyed option “0.33, 0.69” (Gate C).\nFinal keyed result: 0.33, 0.69\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “0.69, 0.33” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “0.33, 0.66” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “0.57, 0.33” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Link the stem to the governing law (KCL/KVL, Faraday, power balance, stability criterion).\n• Check units / pu base consistency before comparing options.\n• Eliminate options that violate conservation, passivity, or bus-type definitions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 4,
    "subject": "Power Systems",
    "topic": "Matching+Diagram",
    "question": "Match List-I (transformer connection sketch) with List-II (name). Select the correct code.",
    "image": "images/diagrams/electrical-flt01/q04-xfmr-connections.svg",
    "options": [
      "P-1,Q-2,R-3,S-4",
      "P-2,Q-1,R-4,S-3",
      "P-1,Q-3,R-2,S-4",
      "P-4,Q-2,R-3,S-1"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Matching+Diagram",
    "formula": "",
    "explanation": "CORRECT: P-1,Q-2,R-3,S-4\n\nWHY CORRECT:\nThis is a Matching+Diagram item in Power Systems (Matching+Diagram). The keyed choice “P-1,Q-2,R-3,S-4” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dep PASS — identify from winding sketches.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “P-2,Q-1,R-4,S-3” — exam-level wrong path for “Matching+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “P-1,Q-3,R-2,S-4” — exam-level wrong path for “Matching+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “P-4,Q-2,R-3,S-1” — exam-level wrong path for “Matching+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Link the stem to the governing law (KCL/KVL, Faraday, power balance, stability criterion).\n• Check units / pu base consistency before comparing options.\n• Eliminate options that violate conservation, passivity, or bus-type definitions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "matchingMatrix": {
      "caption": "Match List-I with List-II",
      "listITitle": "List-I (Sketch / type)",
      "listIITitle": "List-II (Description)",
      "listI": [
        {
          "code": "P",
          "text": "Δ–Δ"
        },
        {
          "code": "Q",
          "text": "Δ–Y"
        },
        {
          "code": "R",
          "text": "Y–Δ"
        },
        {
          "code": "S",
          "text": "Y–Y"
        }
      ],
      "listII": [
        {
          "code": "1",
          "text": "both sides Δ"
        },
        {
          "code": "2",
          "text": "HV Δ, LV Y"
        },
        {
          "code": "3",
          "text": "HV Y, LV Δ"
        },
        {
          "code": "4",
          "text": "both Y"
        }
      ],
      "instruction": "Use the diagram sketches with the matrix; choose the correct matching code."
    }
  },
  {
    "id": 5,
    "subject": "Power Systems",
    "topic": "AR",
    "question": "**A:** For a solidly grounded Y–Y transformer, zero-sequence currents can flow if a path exists through neutrals. **R:** Δ winding always blocks zero-sequence from transferring to the other side as line currents of that sequence in the usual model.",
    "image": "",
    "options": [
      "Both; R explains A",
      "Both; R not explain",
      "A true R false",
      "A false R true"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "AR",
    "formula": "",
    "explanation": "CORRECT: Both; R not explain\n\nWHY CORRECT:\nThis is a AR item in Power Systems (AR). The keyed choice “Both; R not explain” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Both true; R is about Δ, not the explanation of Y–Y grounding path.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Both; R explains A” — exam-level wrong path for “AR”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “A true R false” — exam-level wrong path for “AR”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “A false R true” — exam-level wrong path for “AR”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Link the stem to the governing law (KCL/KVL, Faraday, power balance, stability criterion).\n• Check units / pu base consistency before comparing options.\n• Eliminate options that violate conservation, passivity, or bus-type definitions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 6,
    "subject": "Power Systems",
    "topic": "Conceptual",
    "question": "Ferranti effect is more pronounced when:",
    "image": "",
    "options": [
      "Heavy load always",
      "Short cable only always",
      "Line lightly loaded / open receiving end + long line",
      "Zero capacitance"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Line lightly loaded / open receiving end + long line\n\nWHY CORRECT:\nThis is a Conceptual item in Power Systems (Conceptual). The keyed choice “Line lightly loaded / open receiving end + long line” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Systems principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Heavy load always” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Short cable only always” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “Zero capacitance” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 7,
    "subject": "Power Systems",
    "topic": "Application",
    "question": "Long EHV line with receiving-end overvoltage at light load — preferred first measure:",
    "image": "",
    "options": [
      "Series capacitors always only",
      "Remove all ground wires",
      "Increase SIL by lowering V",
      "Shunt reactors at receiving end"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Shunt reactors at receiving end\n\nWHY CORRECT:\nThis is a Application item in Power Systems (Application). The keyed choice “Shunt reactors at receiving end” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Systems principle for “Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Series capacitors always only” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Remove all ground wires” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Increase SIL by lowering V” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Link the stem to the governing law (KCL/KVL, Faraday, power balance, stability criterion).\n• Check units / pu base consistency before comparing options.\n• Eliminate options that violate conservation, passivity, or bus-type definitions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 8,
    "subject": "Power Systems",
    "topic": "Numerical",
    "question": "String of 2 discs, self C, pin-earth 0.2C, each disc max 11 kV. String efficiency ≈",
    "image": "",
    "options": [
      "80%",
      "100%",
      "50%",
      "20%"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 80%\n\nWHY CORRECT:\nThis is a Numerical item in Power Systems (Numerical). The keyed choice “80%” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Classic K=0.2 → η≈80% for 2 discs.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Classic K=0.2 → η≈80% for 2 discs.\nVerify units/pu bases and that the arithmetic lands on the keyed option “80%” (Gate C).\nFinal keyed result: 80%\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “100%” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “50%” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “20%” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Link the stem to the governing law (KCL/KVL, Faraday, power balance, stability criterion).\n• Check units / pu base consistency before comparing options.\n• Eliminate options that violate conservation, passivity, or bus-type definitions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 9,
    "subject": "Power Systems",
    "topic": "Diagram+Numerical",
    "question": "[]` With Ic=0 and phase currents Ia, Ib as labelled on the figure only, Ia⁰ is:",
    "image": "images/diagrams/electrical-flt01/q09-open-conductor.svg",
    "options": [
      "10 A",
      "0 A",
      "5.78 A",
      "3.33 A"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Diagram+Numerical",
    "formula": "",
    "explanation": "CORRECT: 0 A\n\nWHY CORRECT:\nThis is a Diagram+Numerical item in Power Systems (Diagram+Numerical). The keyed choice “0 A” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Systems principle for “Diagram+Numerical”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: (Ia+Ib+Ic)/3=0.\nVerify units/pu bases and that the arithmetic lands on the keyed option “0 A” (Gate C).\nFinal keyed result: 0 A\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “10 A” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “5.78 A” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “3.33 A” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Link the stem to the governing law (KCL/KVL, Faraday, power balance, stability criterion).\n• Check units / pu base consistency before comparing options.\n• Eliminate options that violate conservation, passivity, or bus-type definitions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 10,
    "subject": "Power Systems",
    "topic": "Table",
    "question": "For Newton–Raphson load flow using the bus data table below, unknown voltage magnitude variables among buses 2–3 are:",
    "image": "",
    "options": [
      "|V2| and |V3|",
      "None",
      "Only |V3|",
      "Only |V2|"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Table",
    "formula": "",
    "explanation": "CORRECT: Only |V3|\n\nWHY CORRECT:\nThis is a Table item in Power Systems (Table). The keyed choice “Only |V3|” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: PV bus |V| specified; PQ unknown.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “|V2| and |V3|” — treats PV bus |V| as unknown (classic NR trap).\nB) “None” — forgets that PQ bus voltage magnitude is unknown.\nC) (correct)\nD) “Only |V2|” — swaps PV/PQ roles.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Link the stem to the governing law (KCL/KVL, Faraday, power balance, stability criterion).\n• Check units / pu base consistency before comparing options.\n• Eliminate options that violate conservation, passivity, or bus-type definitions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "dataTable": {
      "caption": "Bus data for NR load flow",
      "headers": [
        "Bus",
        "Type",
        "|V| pu",
        "P MW"
      ],
      "rows": [
        [
          "1",
          "Slack",
          "1.05",
          "—"
        ],
        [
          "2",
          "PV",
          "1.02",
          "50"
        ],
        [
          "3",
          "PQ",
          "—",
          "30"
        ]
      ]
    }
  },
  {
    "id": 11,
    "subject": "Power Systems",
    "topic": "Conceptual",
    "question": "Equal-area criterion is primarily used for:",
    "image": "",
    "options": [
      "Steady-state economic dispatch only",
      "Corona loss only",
      "Cable sizing only",
      "Transient stability swing assessment"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Transient stability swing assessment\n\nWHY CORRECT:\nThis is a Conceptual item in Power Systems (Conceptual). The keyed choice “Transient stability swing assessment” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Systems principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Steady-state economic dispatch only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Corona loss only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Cable sizing only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 12,
    "subject": "Power Systems",
    "topic": "Numerical+Application",
    "question": "Generator Xs=0.2 pu, transformer Xt=0.1 pu on same base, infinite bus behind Xt. Bolted 3φ fault on LV side of transformer (gen+Xt series): fault current (pu) ≈",
    "image": "",
    "options": [
      "3.33",
      "5",
      "10",
      "1"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Numerical+Application",
    "formula": "",
    "explanation": "CORRECT: 3.33\n\nWHY CORRECT:\nThis is a Numerical+Application item in Power Systems (Numerical+Application). The keyed choice “3.33” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Ifebus≈1/(0.2+0.1)=3.33 pu.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Ifebus≈1/(0.2+0.1)=3.33 pu.\nVerify units/pu bases and that the arithmetic lands on the keyed option “3.33” (Gate C).\nFinal keyed result: 3.33\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “5” — exam-level wrong path for “Numerical+Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “10” — exam-level wrong path for “Numerical+Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “1” — exam-level wrong path for “Numerical+Application”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Link the stem to the governing law (KCL/KVL, Faraday, power balance, stability criterion).\n• Check units / pu base consistency before comparing options.\n• Eliminate options that violate conservation, passivity, or bus-type definitions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 13,
    "subject": "Power Systems",
    "topic": "Practical",
    "question": "During live-line insulator replacement on a 220 kV tower, the critical site control is:",
    "image": "",
    "options": [
      "Ignore induction",
      "Maintain clearances / equipotential & earthing discipline",
      "Paint tower mid-job",
      "Bypass all PPE"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Practical",
    "formula": "",
    "explanation": "CORRECT: Maintain clearances / equipotential & earthing discipline\n\nWHY CORRECT:\nThis is a Practical item in Power Systems (Practical). The keyed choice “Maintain clearances / equipotential & earthing discipline” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Systems principle for “Practical”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) Non-engineering distractor (“Ignore induction”). Real papers trap candidates on technical slips in Power Systems — flag option for MODIFY rewrite.\nB) (correct)\nC) Non-engineering distractor (“Paint tower mid-job”). Real papers trap candidates on technical slips in Power Systems — flag option for MODIFY rewrite.\nD) Non-engineering distractor (“Bypass all PPE”). Real papers trap candidates on technical slips in Power Systems — flag option for MODIFY rewrite.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 14,
    "subject": "Power Systems",
    "topic": "Graph",
    "question": "For a power-angle curve Pe=Pmax sinδ with sudden Pm step, the new steady δ exists only if:",
    "image": "",
    "options": [
      "Pm>Pmax always",
      "δ jumps to 180° always",
      "Accelerating area can be balanced by decelerating area before δcrit",
      "Inertia infinite always"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Graph",
    "formula": "",
    "explanation": "CORRECT: Accelerating area can be balanced by decelerating area before δcrit\n\nWHY CORRECT:\nThis is a Graph item in Power Systems (Graph). The keyed choice “Accelerating area can be balanced by decelerating area before δcrit” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Systems principle for “Graph”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Pm>Pmax always” — exam-level wrong path for “Graph”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “δ jumps to 180° always” — exam-level wrong path for “Graph”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “Inertia infinite always” — exam-level wrong path for “Graph”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Link the stem to the governing law (KCL/KVL, Faraday, power balance, stability criterion).\n• Check units / pu base consistency before comparing options.\n• Eliminate options that violate conservation, passivity, or bus-type definitions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 15,
    "subject": "Electrical Machines",
    "topic": "Conceptual",
    "question": "In a transformer, oil primarily provides:",
    "image": "",
    "options": [
      "Lubrication of core only",
      "Lightning protection only",
      "Short-circuit protection relay",
      "Insulation and cooling"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Insulation and cooling\n\nWHY CORRECT:\nThis is a Conceptual item in Electrical Machines (Conceptual). The keyed choice “Insulation and cooling” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Machines principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Lubrication of core only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Lightning protection only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Short-circuit protection relay” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Alternator regulation: Ef phasor = V + Ia(Ra + jXs); lagging → Ef > V usually.\n• Leading pf can give negative regulation (Ef < V possible).\n• Sync motor V-curves: Ia vs If at constant power — under/over excitation.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 16,
    "subject": "Electrical Machines",
    "topic": "Numerical",
    "question": "400/100 V, 10 kVA two-winding transformer connected as autotransformer (VH=400 V, VL=100 V series portion). Approximate autotransformer rating is:",
    "image": "",
    "options": [
      "12.5 kVA",
      "10 kVA",
      "40 kVA",
      "8.75 kVA"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 12.5 kVA\n\nWHY CORRECT:\nThis is a Numerical item in Electrical Machines (Numerical). The keyed choice “12.5 kVA” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Sauto ≈ S2W × VH/(VH−VL) = 10×400/300 ≈ 13.3 ≈ **12.5 kVA** (nearest listed).\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Sauto ≈ S2W × VH/(VH−VL) = 10×400/300 ≈ 13.3 ≈ **12.5 kVA** (nearest listed).\nVerify units/pu bases and that the arithmetic lands on the keyed option “12.5 kVA” (Gate C).\nFinal keyed result: 12.5 kVA\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “10 kVA” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “40 kVA” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “8.75 kVA” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Alternator regulation: Ef phasor = V + Ia(Ra + jXs); lagging → Ef > V usually.\n• Leading pf can give negative regulation (Ef < V possible).\n• Sync motor V-curves: Ia vs If at constant power — under/over excitation.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 17,
    "subject": "Electrical Machines",
    "topic": "Numerical",
    "question": "4-pole lap-wound DC generator, developed power P, brush voltage E. Two adjacent brushes removed; with remaining brushes, developed voltage & power:",
    "image": "",
    "options": [
      "E/2, P/2",
      "E, P/2",
      "E, P/4",
      "E/2, P"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: E, P/2\n\nWHY CORRECT:\nThis is a Numerical item in Electrical Machines (Numerical). The keyed choice “E, P/2” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Parallel paths halved → current/power capacity halves; voltage between remaining brushes still ≈E for lap if brush pairs remain. Classic Ans often **E, P/2**.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Parallel paths halved → current/power capacity halves; voltage between remaining brushes still ≈E for lap if brush pairs remain. Classic Ans often **E, P/2**.\nVerify units/pu bases and that the arithmetic lands on the keyed option “E, P/2” (Gate C).\nFinal keyed result: E, P/2\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “E/2, P/2” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “E, P/4” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “E/2, P” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Alternator regulation: Ef phasor = V + Ia(Ra + jXs); lagging → Ef > V usually.\n• Leading pf can give negative regulation (Ef < V possible).\n• Sync motor V-curves: Ia vs If at constant power — under/over excitation.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 18,
    "subject": "Electrical Machines",
    "topic": "Diagram+Conceptual",
    "question": "[]` The phasor set shown (Ia leading Vt) corresponds to:",
    "image": "images/diagrams/electrical-flt01/q18-alt-phasor-lead.svg",
    "options": [
      "Lagging pf load",
      "Unity only",
      "Leading pf load",
      "Short-circuit only"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Diagram+Conceptual",
    "formula": "",
    "explanation": "CORRECT: Leading pf load\n\nWHY CORRECT:\nThis is a Diagram+Conceptual item in Electrical Machines (Diagram+Conceptual). The keyed choice “Leading pf load” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Machines principle for “Diagram+Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Lagging pf load” — exam-level wrong path for “Diagram+Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Unity only” — exam-level wrong path for “Diagram+Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “Short-circuit only” — exam-level wrong path for “Diagram+Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Alternator regulation: Ef phasor = V + Ia(Ra + jXs); lagging → Ef > V usually.\n• Leading pf can give negative regulation (Ef < V possible).\n• Sync motor V-curves: Ia vs If at constant power — under/over excitation.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 19,
    "subject": "Electrical Machines",
    "topic": "Conceptual",
    "question": "Cylindrical-rotor sync motor switched on with field shorted will:",
    "image": "",
    "options": [
      "Never start",
      "Immediately sync only",
      "Run as DC motor",
      "Start as induction (damper) then pull into sync when field excited"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Start as induction (damper) then pull into sync when field excited\n\nWHY CORRECT:\nThis is a Conceptual item in Electrical Machines (Conceptual). The keyed choice “Start as induction (damper) then pull into sync when field excited” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Machines principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Never start” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Immediately sync only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Run as DC motor” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Alternator regulation: Ef phasor = V + Ia(Ra + jXs); lagging → Ef > V usually.\n• Leading pf can give negative regulation (Ef < V possible).\n• Sync motor V-curves: Ia vs If at constant power — under/over excitation.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 20,
    "subject": "Electrical Machines",
    "topic": "Application",
    "question": "Identical main & auxiliary windings — starting torque by:",
    "image": "",
    "options": [
      "Capacitor in series with auxiliary",
      "Capacitor across mains only",
      "Short auxiliary",
      "Reverse field only"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Capacitor in series with auxiliary\n\nWHY CORRECT:\nThis is a Application item in Electrical Machines (Application). The keyed choice “Capacitor in series with auxiliary” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Machines principle for “Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Capacitor across mains only” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Short auxiliary” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Reverse field only” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Alternator regulation: Ef phasor = V + Ia(Ra + jXs); lagging → Ef > V usually.\n• Leading pf can give negative regulation (Ef < V possible).\n• Sync motor V-curves: Ia vs If at constant power — under/over excitation.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 21,
    "subject": "Electrical Machines",
    "topic": "Numerical",
    "question": "Alternator: Vt=1 pu, Ia=1 pu, Xs=1.0 pu, Ra≈0, pf=0.8 lag. |Ef| ≈",
    "image": "",
    "options": [
      "1.0",
      "1.8 pu",
      "0.8",
      "1.6"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "|Ef|=|V+Ia(Ra+jXs)|",
    "explanation": "CORRECT: 1.8 pu\n\nWHY CORRECT:\nSynchronous generator internal voltage on lagging pf exceeds terminal voltage. Assemble Ef = V + Ia(Ra + jXs). With Ra≈0, pf=0.8 lag: Ia=0.8−j0.6, jXs Ia=0.6+j0.8, Ef=1.6+j0.8, |Ef|=sqrt(1.6^2+0.8^2)=sqrt(3.2)≈1.79 ≈ 1.8 pu.\n\nCALCULATION:\nVt=1 pu, Ia=1 pu, Xs=1.0 pu, Ra≈0, cosφ=0.8, sinφ=0.6.\nTake V on real axis; Ia=0.8−j0.6.\nj Xs Ia = j(0.8−j0.6)=0.6+j0.8.\nEf = 1 + 0.6 + j0.8 = 1.6 + j0.8.\n|Ef| = sqrt(2.56+0.64)=sqrt(3.2)≈1.789 ≈ 1.8 pu.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “1.0” — confuses |Ef| with |Vt| (forgets j Xs Ia drop on lagging load).\nB) (correct)\nC) “0.8” — confuses |Ef| with cosφ.\nD) “1.6” — takes only Re(Ef)=1.6 and drops the quadrature 0.8 component (classic trap).\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Alternator regulation: Ef phasor = V + Ia(Ra + jXs); lagging → |Ef| > |V| usually.\n• Leading pf can give negative regulation (|Ef| < |V| possible).\n• Sync motor V-curves: Ia vs If at constant power — under/over excitation.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 22,
    "subject": "Electrical Machines",
    "topic": "Diagram+Application",
    "question": "[]` From the figure (long line, receiving end condition shown only on the crop — do not assume from memory), generator field voltage held constant. When the generator is disconnected from the line, steady |Vt|:",
    "image": "images/diagrams/electrical-flt01/q22-ferranti-line.svg",
    "options": [
      "Increases always",
      "Unchanged always",
      "Decreases (Ferranti charging removed)",
      "Becomes zero always"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Diagram+Application",
    "formula": "",
    "explanation": "CORRECT: Decreases (Ferranti charging removed)\n\nWHY CORRECT:\nThis is a Diagram+Application item in Electrical Machines (Diagram+Application). The keyed choice “Decreases (Ferranti charging removed)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dep PASS (open Rx end & long line on fig)\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Increases always” — exam-level wrong path for “Diagram+Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Unchanged always” — exam-level wrong path for “Diagram+Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “Becomes zero always” — exam-level wrong path for “Diagram+Application”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Alternator regulation: Ef phasor = V + Ia(Ra + jXs); lagging → Ef > V usually.\n• Leading pf can give negative regulation (Ef < V possible).\n• Sync motor V-curves: Ia vs If at constant power — under/over excitation.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 23,
    "subject": "Electrical Machines",
    "topic": "Conceptual",
    "question": "V-curves of sync motor plot:",
    "image": "",
    "options": [
      "T vs speed",
      "V vs I armature short only",
      "Efficiency vs load always flat",
      "Ia vs If for constant power"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Ia vs If for constant power\n\nWHY CORRECT:\nThis is a Conceptual item in Electrical Machines (Conceptual). The keyed choice “Ia vs If for constant power” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Machines principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “T vs speed” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “V vs I armature short only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Efficiency vs load always flat” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Alternator regulation: Ef phasor = V + Ia(Ra + jXs); lagging → Ef > V usually.\n• Leading pf can give negative regulation (Ef < V possible).\n• Sync motor V-curves: Ia vs If at constant power — under/over excitation.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 24,
    "subject": "Electrical Machines",
    "topic": "Numerical",
    "question": "3φ IM: ns=1500 rpm, s=0.04. Rotor speed:",
    "image": "",
    "options": [
      "1440 rpm",
      "1500",
      "1560",
      "1000"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 1440 rpm\n\nWHY CORRECT:\nThis is a Numerical item in Electrical Machines (Numerical). The keyed choice “1440 rpm” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: (1−s)ns=0.96×1500=1440.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: (1−s)ns=0.96×1500=1440.\nVerify units/pu bases and that the arithmetic lands on the keyed option “1440 rpm” (Gate C).\nFinal keyed result: 1440 rpm\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “1500” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “1560” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “1000” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Alternator regulation: Ef phasor = V + Ia(Ra + jXs); lagging → Ef > V usually.\n• Leading pf can give negative regulation (Ef < V possible).\n• Sync motor V-curves: Ia vs If at constant power — under/over excitation.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 25,
    "subject": "Electrical Machines",
    "topic": "Conceptual+Numerical",
    "question": "For an alternator on **leading** pf load, voltage regulation is typically:",
    "image": "",
    "options": [
      "Always +50%",
      "Negative (Ef < Vt possible)",
      "Always zero",
      "Always infinite"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual+Numerical",
    "formula": "",
    "explanation": "CORRECT: Negative (Ef < Vt possible)\n\nWHY CORRECT:\nThis is a Conceptual+Numerical item in Electrical Machines (Conceptual+Numerical). The keyed choice “Negative (Ef < Vt possible)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Leading armature reaction magnetising → |Ef| may be < |Vt| → negative regulation.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Leading armature reaction magnetising → |Ef| may be < |Vt| → negative regulation.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Negative (Ef < Vt possible)” (Gate C).\nFinal keyed result: Negative (Ef < Vt possible)\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Always +50%” — exam-level wrong path for “Conceptual+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “Always zero” — exam-level wrong path for “Conceptual+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Always infinite” — exam-level wrong path for “Conceptual+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Alternator regulation: Ef phasor = V + Ia(Ra + jXs); lagging → Ef > V usually.\n• Leading pf can give negative regulation (Ef < V possible).\n• Sync motor V-curves: Ia vs If at constant power — under/over excitation.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 26,
    "subject": "Electrical Machines",
    "topic": "Practical",
    "question": "On site, transformer oil BDV low and moisture high. Immediate engineering action:",
    "image": "",
    "options": [
      "Ignore",
      "Add water",
      "Dry/filter or replace oil; do not energise until OK",
      "Bypass Buchholz forever"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Practical",
    "formula": "",
    "explanation": "CORRECT: Dry/filter or replace oil; do not energise until OK\n\nWHY CORRECT:\nThis is a Practical item in Electrical Machines (Practical). The keyed choice “Dry/filter or replace oil; do not energise until OK” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Machines principle for “Practical”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) Non-engineering distractor (“Ignore”). Real papers trap candidates on technical slips in Electrical Machines — flag option for MODIFY rewrite.\nB) Non-engineering distractor (“Add water”). Real papers trap candidates on technical slips in Electrical Machines — flag option for MODIFY rewrite.\nC) (correct)\nD) Non-engineering distractor (“Bypass Buchholz forever”). Real papers trap candidates on technical slips in Electrical Machines — flag option for MODIFY rewrite.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Alternator regulation: Ef phasor = V + Ia(Ra + jXs); lagging → Ef > V usually.\n• Leading pf can give negative regulation (Ef < V possible).\n• Sync motor V-curves: Ia vs If at constant power — under/over excitation.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 27,
    "subject": "Electrical Machines",
    "topic": "Application",
    "question": "Two alts share 20 MW at 0.8 lag; P delivers 12 MW at 0.9 lag. pf of Q ≈",
    "image": "",
    "options": [
      "0.9 lead",
      "unity",
      "0.8 lead",
      "0.66 lag"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: 0.66 lag\n\nWHY CORRECT:\nThis is a Application item in Electrical Machines (Application). The keyed choice “0.66 lag” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: S_P=12/0.9=13.33; Q_P=√(13.33²−12²)≈5.81; S_tot=20/0.8=25; Q_tot=15; Q_Q=9.19; P_Q=8; pf=8/√(8²+9.19²)≈0.66 lag.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: S_P=12/0.9=13.33; Q_P=√(13.33²−12²)≈5.81; S_tot=20/0.8=25; Q_tot=15; Q_Q=9.19; P_Q=8; pf=8/√(8²+9.19²)≈0.66 lag.\nVerify units/pu bases and that the arithmetic lands on the keyed option “0.66 lag” (Gate C).\nFinal keyed result: 0.66 lag\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “0.9 lead” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “unity” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “0.8 lead” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Alternator regulation: Ef phasor = V + Ia(Ra + jXs); lagging → Ef > V usually.\n• Leading pf can give negative regulation (Ef < V possible).\n• Sync motor V-curves: Ia vs If at constant power — under/over excitation.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 28,
    "subject": "Electric Circuits",
    "topic": "Conceptual",
    "question": "At series RLC resonance, VC relative to Vin:",
    "image": "",
    "options": [
      "Can exceed Vin and is 90° to Vin",
      "Always 0",
      "Always in phase and ≤Vin",
      "Always infinite resistance"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Can exceed Vin and is 90° to Vin\n\nWHY CORRECT:\nThis is a Conceptual item in Electric Circuits (Conceptual). The keyed choice “Can exceed Vin and is 90° to Vin” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electric Circuits principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Always 0” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Always in phase and ≤Vin” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Always infinite resistance” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Series resonance: Z min ≈ R, I max; VC and VL can exceed Vin (Q magnification).\n• Two-wattmeter pf: tan φ = √3 (W1−W2)/(W1+W2).\n• Max power transfer: RL = Rs (DC) or RL = Rs* (AC conjugate).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 29,
    "subject": "Electric Circuits",
    "topic": "Conceptual",
    "question": "Mutual inductance of two coils satisfies:",
    "image": "",
    "options": [
      "M > √(L1 L2) always",
      "M ≤ √(L1 L2)",
      "M=L1+L2",
      "M=√(L1²+L2²)"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: M ≤ √(L1 L2)\n\nWHY CORRECT:\nThis is a Conceptual item in Electric Circuits (Conceptual). The keyed choice “M ≤ √(L1 L2)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electric Circuits principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “M > √(L1 L2) always” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “M=L1+L2” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “M=√(L1²+L2²)” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Series resonance: Z min ≈ R, I max; VC and VL can exceed Vin (Q magnification).\n• Two-wattmeter pf: tan φ = √3 (W1−W2)/(W1+W2).\n• Max power transfer: RL = Rs (DC) or RL = Rs* (AC conjugate).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 30,
    "subject": "Electric Circuits",
    "topic": "Diagram+Numerical",
    "question": "[]` C0 = air capacitance (Fig a). Half gap filled as in Fig(b) with εr. Modified C =",
    "image": "images/diagrams/electrical-flt01/q30-cap-dielectric.svg",
    "options": [
      "C0+εr",
      "(C0/2)εr",
      "(C0/2)(1+εr)",
      "C0(1+εr)"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Diagram+Numerical",
    "formula": "",
    "explanation": "CORRECT: (C0/2)(1+εr)\n\nWHY CORRECT:\nThis is a Diagram+Numerical item in Electric Circuits (Diagram+Numerical). The keyed choice “(C0/2)(1+εr)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Parallel of C0/2 and εr C0/2.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Parallel of C0/2 and εr C0/2.\nVerify units/pu bases and that the arithmetic lands on the keyed option “(C0/2)(1+εr)” (Gate C).\nFinal keyed result: (C0/2)(1+εr)\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “C0+εr” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “(C0/2)εr” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “C0(1+εr)” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Series resonance: Z min ≈ R, I max; VC and VL can exceed Vin (Q magnification).\n• Two-wattmeter pf: tan φ = √3 (W1−W2)/(W1+W2).\n• Max power transfer: RL = Rs (DC) or RL = Rs* (AC conjugate).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 31,
    "subject": "Electric Circuits",
    "topic": "Numerical",
    "question": "Coil N=300, l=300 mm, A=300 mm², μ=μ0, I=3 A. L ≈",
    "image": "",
    "options": [
      "37.7 μH",
      "113 mH",
      "37.7 mH",
      "113 μH"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 113 μH\n\nWHY CORRECT:\nThis is a Numerical item in Electric Circuits (Numerical). The keyed choice “113 μH” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: L=μN²A/l = 4πe−7×9e4×3e−4/0.3 = 113×10−6 H.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: L=μN²A/l = 4πe−7×9e4×3e−4/0.3 = 113×10−6 H.\nVerify units/pu bases and that the arithmetic lands on the keyed option “113 μH” (Gate C).\nFinal keyed result: 113 μH\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “37.7 μH” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “113 mH” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “37.7 mH” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Series resonance: Z min ≈ R, I max; VC and VL can exceed Vin (Q magnification).\n• Two-wattmeter pf: tan φ = √3 (W1−W2)/(W1+W2).\n• Max power transfer: RL = Rs (DC) or RL = Rs* (AC conjugate).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 32,
    "subject": "Electric Circuits",
    "topic": "Application",
    "question": "For max power transfer from Thevenin source with Rs, RL should be:",
    "image": "",
    "options": [
      "RL=Rs* (conjugate match; DC: RL=Rs)",
      "RL=0 always",
      "RL=∞ always",
      "RL=2Rs only always"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: RL=Rs* (conjugate match; DC: RL=Rs)\n\nWHY CORRECT:\nThis is a Application item in Electric Circuits (Application). The keyed choice “RL=Rs* (conjugate match; DC: RL=Rs)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electric Circuits principle for “Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “RL=0 always” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “RL=∞ always” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “RL=2Rs only always” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Series resonance: Z min ≈ R, I max; VC and VL can exceed Vin (Q magnification).\n• Two-wattmeter pf: tan φ = √3 (W1−W2)/(W1+W2).\n• Max power transfer: RL = Rs (DC) or RL = Rs* (AC conjugate).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 33,
    "subject": "Electric Circuits",
    "topic": "Graph+Diagram",
    "question": "[]` The plot with a central pass band and stop bands on both sides is:",
    "image": "images/diagrams/electrical-flt01/q33-filter-types.svg",
    "options": [
      "Low-pass",
      "Band-pass",
      "High-pass",
      "Band-elimination"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Graph+Diagram",
    "formula": "",
    "explanation": "CORRECT: Band-pass\n\nWHY CORRECT:\nThis is a Graph+Diagram item in Electric Circuits (Graph+Diagram). The keyed choice “Band-pass” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electric Circuits principle for “Graph+Diagram”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Low-pass” — exam-level wrong path for “Graph+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “High-pass” — exam-level wrong path for “Graph+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Band-elimination” — exam-level wrong path for “Graph+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Series resonance: Z min ≈ R, I max; VC and VL can exceed Vin (Q magnification).\n• Two-wattmeter pf: tan φ = √3 (W1−W2)/(W1+W2).\n• Max power transfer: RL = Rs (DC) or RL = Rs* (AC conjugate).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 34,
    "subject": "Electric Circuits",
    "topic": "Numerical",
    "question": "Two wattmeters on 3φ 3-wire read W1=300 W, W2=100 W. pf ≈",
    "image": "",
    "options": [
      "1",
      "0",
      "0.756",
      "0.5"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 0.756\n\nWHY CORRECT:\nThis is a Numerical item in Electric Circuits (Numerical). The keyed choice “0.756” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: tanφ=√3(W1−W2)/(W1+W2)=√3(200)/400=0.866 → φ=40.9°, cos≈0.756.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: tanφ=√3(W1−W2)/(W1+W2)=√3(200)/400=0.866 → φ=40.9°, cos≈0.756.\nVerify units/pu bases and that the arithmetic lands on the keyed option “0.756” (Gate C).\nFinal keyed result: 0.756\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “1” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “0” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “0.5” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Series resonance: Z min ≈ R, I max; VC and VL can exceed Vin (Q magnification).\n• Two-wattmeter pf: tan φ = √3 (W1−W2)/(W1+W2).\n• Max power transfer: RL = Rs (DC) or RL = Rs* (AC conjugate).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 35,
    "subject": "Electric Circuits",
    "topic": "Conceptual",
    "question": "Passive network steady-state output vs input cannot offer:",
    "image": "",
    "options": [
      "Lower voltage always",
      "Lower impedance always",
      "Phase shift never",
      "Greater average power"
    ],
    "answer": 3,
    "difficulty": "Easy→raise Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Greater average power\n\nWHY CORRECT:\nThis is a Conceptual item in Electric Circuits (Conceptual). The keyed choice “Greater average power” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electric Circuits principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Lower voltage always” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Lower impedance always” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Phase shift never” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Series resonance: Z min ≈ R, I max; VC and VL can exceed Vin (Q magnification).\n• Two-wattmeter pf: tan φ = √3 (W1−W2)/(W1+W2).\n• Max power transfer: RL = Rs (DC) or RL = Rs* (AC conjugate).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 36,
    "subject": "Electric Circuits",
    "topic": "Numerical",
    "question": "εr=2.26, Ebd=50 kV/cm, plates 20×40 cm. Max charge ≈",
    "image": "",
    "options": [
      "8 μC",
      "2",
      "4",
      "10"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 8 μC\n\nWHY CORRECT:\nThis is a Numerical item in Electric Circuits (Numerical). The keyed choice “8 μC” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Q=εE A; ε=εrε0; E=5e6 V/m; A=0.08; Q≈2.26×8.85e−12×5e6×0.08≈8e−6 C.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Q=εE A; ε=εrε0; E=5e6 V/m; A=0.08; Q≈2.26×8.85e−12×5e6×0.08≈8e−6 C.\nVerify units/pu bases and that the arithmetic lands on the keyed option “8 μC” (Gate C).\nFinal keyed result: 8 μC\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “2” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “4” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “10” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Series resonance: Z min ≈ R, I max; VC and VL can exceed Vin (Q magnification).\n• Two-wattmeter pf: tan φ = √3 (W1−W2)/(W1+W2).\n• Max power transfer: RL = Rs (DC) or RL = Rs* (AC conjugate).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 37,
    "subject": "Electric Circuits",
    "topic": "Practical",
    "question": "Commissioning a new LV panel — insulation resistance test fails one feeder. Action:",
    "image": "",
    "options": [
      "Energise anyway",
      "Isolate, dry/repair, retest before load",
      "Bypass earth",
      "Ignore IR"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Practical",
    "formula": "",
    "explanation": "CORRECT: Isolate, dry/repair, retest before load\n\nWHY CORRECT:\nThis is a Practical item in Electric Circuits (Practical). The keyed choice “Isolate, dry/repair, retest before load” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electric Circuits principle for “Practical”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Energise anyway” — exam-level wrong path for “Practical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “Bypass earth” — exam-level wrong path for “Practical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) Non-engineering distractor (“Ignore IR”). Real papers trap candidates on technical slips in Electric Circuits — flag option for MODIFY rewrite.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Series resonance: Z min ≈ R, I max; VC and VL can exceed Vin (Q magnification).\n• Two-wattmeter pf: tan φ = √3 (W1−W2)/(W1+W2).\n• Max power transfer: RL = Rs (DC) or RL = Rs* (AC conjugate).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 38,
    "subject": "Electric Circuits",
    "topic": "AR",
    "question": "**A:** At series resonance, circuit impedance is minimum (≈R). **R:** Therefore source current is minimum at resonance.",
    "image": "",
    "options": [
      "Both; R explains",
      "Both; R not",
      "A true R false",
      "A false R true"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "AR",
    "formula": "",
    "explanation": "CORRECT: A true R false\n\nWHY CORRECT:\nThis is a AR item in Electric Circuits (AR). The keyed choice “A true R false” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Current is **maximum** at series resonance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Both; R explains” — exam-level wrong path for “AR”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Both; R not” — exam-level wrong path for “AR”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “A false R true” — exam-level wrong path for “AR”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Series resonance: Z min ≈ R, I max; VC and VL can exceed Vin (Q magnification).\n• Two-wattmeter pf: tan φ = √3 (W1−W2)/(W1+W2).\n• Max power transfer: RL = Rs (DC) or RL = Rs* (AC conjugate).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 39,
    "subject": "Control Systems",
    "topic": "Conceptual",
    "question": "Type-1 unity feedback system ess to step:",
    "image": "",
    "options": [
      "Infinite",
      "1/K always only",
      "Unstable always",
      "0"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 0\n\nWHY CORRECT:\nThis is a Conceptual item in Control Systems (Conceptual). The keyed choice “0” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Control Systems principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Infinite” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “1/K always only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Unstable always” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Type-1 system: ess to step = 0; ramp error = 1/Kv.\n• RHP zero → inverse response / initial undershoot.\n• Settling: ts(2%) ≈ 4/σω, ts(5%) ≈ 3/σω.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 40,
    "subject": "Control Systems",
    "topic": "Numerical",
    "question": "G=25/(s(s+2)), tach Ht=Kt s in minor loop. For ζ=0.8, Kt=",
    "image": "",
    "options": [
      "0.24",
      "0.12",
      "0.48",
      "0.36"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 0.24\n\nWHY CORRECT:\nThis is a Numerical item in Control Systems (Numerical). The keyed choice “0.24” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: s²+(2+25Kt)s+25=0 → 2ζωn=8 → Kt=0.24.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: s²+(2+25Kt)s+25=0 → 2ζωn=8 → Kt=0.24.\nVerify units/pu bases and that the arithmetic lands on the keyed option “0.24” (Gate C).\nFinal keyed result: 0.24\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “0.12” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “0.48” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “0.36” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Type-1 system: ess to step = 0; ramp error = 1/Kv.\n• RHP zero → inverse response / initial undershoot.\n• Settling: ts(2%) ≈ 4/σω, ts(5%) ≈ 3/σω.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 41,
    "subject": "Control Systems",
    "topic": "Diagram+Numerical",
    "question": "[]` For the block diagram shown, C(s)/R(s) =",
    "image": "images/diagrams/electrical-flt01/q41-block-diagram.svg",
    "options": [
      "s/(2s+1)",
      "(2s+1)/s",
      "s+1/s",
      "s/(s²+1)"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Diagram+Numerical",
    "formula": "",
    "explanation": "CORRECT: (2s+1)/s\n\nWHY CORRECT:\nThis is a Diagram+Numerical item in Control Systems (Diagram+Numerical). The keyed choice “(2s+1)/s” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Forward paths sum to (2s+1)/s.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Forward paths sum to (2s+1)/s.\nVerify units/pu bases and that the arithmetic lands on the keyed option “(2s+1)/s” (Gate C).\nFinal keyed result: (2s+1)/s\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “s/(2s+1)” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “s+1/s” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “s/(s²+1)” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Type-1 system: ess to step = 0; ramp error = 1/Kv.\n• RHP zero → inverse response / initial undershoot.\n• Settling: ts(2%) ≈ 4/σω, ts(5%) ≈ 3/σω.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 42,
    "subject": "Control Systems",
    "topic": "Application",
    "question": "T(s)=(−s+4)/(s²+2s+16). RHP zero effect on step response:",
    "image": "",
    "options": [
      "Always no overshoot",
      "Eliminates oscillation always",
      "Initial undershoot",
      "Infinite ess"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Initial undershoot\n\nWHY CORRECT:\nThis is a Application item in Control Systems (Application). The keyed choice “Initial undershoot” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Control Systems principle for “Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Answer C.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Initial undershoot” (Gate C).\nFinal keyed result: Initial undershoot\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Always no overshoot” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Eliminates oscillation always” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “Infinite ess” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Type-1 system: ess to step = 0; ramp error = 1/Kv.\n• RHP zero → inverse response / initial undershoot.\n• Settling: ts(2%) ≈ 4/σω, ts(5%) ≈ 3/σω.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 43,
    "subject": "Control Systems",
    "topic": "Conceptual",
    "question": "Dominant poles −1±j3, third pole −40. Approx ζ:",
    "image": "",
    "options": [
      "0.707",
      "0.1",
      "0.95",
      "0.316"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 0.316\n\nWHY CORRECT:\nThis is a Conceptual item in Control Systems (Conceptual). The keyed choice “0.316” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: ωn=√10, 2ζωn=2 → ζ=1/√10.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: ωn=√10, 2ζωn=2 → ζ=1/√10.\nVerify units/pu bases and that the arithmetic lands on the keyed option “0.316” (Gate C).\nFinal keyed result: 0.316\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “0.707” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “0.1” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “0.95” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Type-1 system: ess to step = 0; ramp error = 1/Kv.\n• RHP zero → inverse response / initial undershoot.\n• Settling: ts(2%) ≈ 4/σω, ts(5%) ≈ 3/σω.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 44,
    "subject": "Control Systems",
    "topic": "Graph+Diagram",
    "question": "[]` First-order stable system, |G| constant vs f, high-freq phase → −180°. System has:",
    "image": "images/diagrams/electrical-flt01/q44-bode-allpass.svg",
    "options": [
      "One LHP pole and one RHP zero at same frequency",
      "LHP pole+LHP zero same f",
      "Two LHP poles + RHP zero",
      "Two RHP poles + LHP zero"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Graph+Diagram",
    "formula": "",
    "explanation": "CORRECT: One LHP pole and one RHP zero at same frequency\n\nWHY CORRECT:\nThis is a Graph+Diagram item in Control Systems (Graph+Diagram). The keyed choice “One LHP pole and one RHP zero at same frequency” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dep PASS (PYQ figure)\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Dep PASS (PYQ figure)\nVerify units/pu bases and that the arithmetic lands on the keyed option “One LHP pole and one RHP zero at same frequency” (Gate C).\nFinal keyed result: One LHP pole and one RHP zero at same frequency\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “LHP pole+LHP zero same f” — exam-level wrong path for “Graph+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Two LHP poles + RHP zero” — exam-level wrong path for “Graph+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Two RHP poles + LHP zero” — exam-level wrong path for “Graph+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Type-1 system: ess to step = 0; ramp error = 1/Kv.\n• RHP zero → inverse response / initial undershoot.\n• Settling: ts(2%) ≈ 4/σω, ts(5%) ≈ 3/σω.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 45,
    "subject": "Control Systems",
    "topic": "Standard+Numerical",
    "question": "Settling time 4 s (2% criterion). ts for 5% criterion ≈",
    "image": "",
    "options": [
      "4.0",
      "3.0 s",
      "5.33",
      "2.0"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Standard+Numerical",
    "formula": "",
    "explanation": "CORRECT: 3.0 s\n\nWHY CORRECT:\nThis is a Standard+Numerical item in Control Systems (Standard+Numerical). The keyed choice “3.0 s” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: ts2%=4/σω → σω=1; ts5%=3/σω=3.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: ts2%=4/σω → σω=1; ts5%=3/σω=3.\nVerify units/pu bases and that the arithmetic lands on the keyed option “3.0 s” (Gate C).\nFinal keyed result: 3.0 s\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “4.0” — exam-level wrong path for “Standard+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “5.33” — exam-level wrong path for “Standard+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “2.0” — exam-level wrong path for “Standard+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Type-1 system: ess to step = 0; ramp error = 1/Kv.\n• RHP zero → inverse response / initial undershoot.\n• Settling: ts(2%) ≈ 4/σω, ts(5%) ≈ 3/σω.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 46,
    "subject": "Control Systems",
    "topic": "AR",
    "question": "**A:** CE s²−2s+25=0 is unstable. **R:** Negative damping (ζ<0) yields growing oscillations.",
    "image": "",
    "options": [
      "Both; R not",
      "A true R false",
      "Both; R explains",
      "A false R true"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "AR",
    "formula": "",
    "explanation": "CORRECT: Both; R explains\n\nWHY CORRECT:\nThis is a AR item in Control Systems (AR). The keyed choice “Both; R explains” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Control Systems principle for “AR”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Both; R not” — exam-level wrong path for “AR”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “A true R false” — exam-level wrong path for “AR”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “A false R true” — exam-level wrong path for “AR”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Type-1 system: ess to step = 0; ramp error = 1/Kv.\n• RHP zero → inverse response / initial undershoot.\n• Settling: ts(2%) ≈ 4/σω, ts(5%) ≈ 3/σω.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 47,
    "subject": "Power Electronics & Drives",
    "topic": "Conceptual",
    "question": "SCR turns off when:",
    "image": "",
    "options": [
      "Gate pulse forever",
      "Only by raising gate",
      "Voltage zero never needed",
      "Anode current < holding current for sufficient time"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Anode current < holding current for sufficient time\n\nWHY CORRECT:\nThis is a Conceptual item in Power Electronics & Drives (Conceptual). The keyed choice “Anode current < holding current for sufficient time” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Electronics & Drives principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) Non-engineering distractor (“Gate pulse forever”). Real papers trap candidates on technical slips in Power Electronics & Drives — flag option for MODIFY rewrite.\nB) “Only by raising gate” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Voltage zero never needed” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 48,
    "subject": "Power Electronics & Drives",
    "topic": "Diagram",
    "question": "[]` Single-phase semi-converter, α=30°, RL load — correct Vo waveform is the one that:",
    "image": "images/diagrams/electrical-flt01/q48-semi-waveforms.svg",
    "options": [
      "Stays non-negative with delayed conduction each half-cycle (option C on source page)",
      "Full negative sine",
      "Always flat DC at Vm",
      "Triangular only"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Diagram",
    "formula": "",
    "explanation": "CORRECT: Stays non-negative with delayed conduction each half-cycle (option C on source page)\n\nWHY CORRECT:\nThis is a Diagram item in Power Electronics & Drives (Diagram). The keyed choice “Stays non-negative with delayed conduction each half-cycle (option C on source page)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dep PASS — pick from waveform options on page crop.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Dep PASS — pick from waveform options on page crop.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Stays non-negative with delayed conduction each half-cycle (option C on source page)” (Gate C).\nFinal keyed result: Stays non-negative with delayed conduction each half-cycle (option C on source page)\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Full negative sine” — exam-level wrong path for “Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Always flat DC at Vm” — exam-level wrong path for “Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Triangular only” — exam-level wrong path for “Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 49,
    "subject": "Power Electronics & Drives",
    "topic": "Numerical",
    "question": "1φ full converter, α=30°, Vm=√2×230, R load. Vdc ≈",
    "image": "",
    "options": [
      "230",
      "179 V",
      "325",
      "0"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 179 V\n\nWHY CORRECT:\nThis is a Numerical item in Power Electronics & Drives (Numerical). The keyed choice “179 V” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Vdc=(2Vm/π)cosα ≈ (2×325/π)×0.866≈179.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Vdc=(2Vm/π)cosα ≈ (2×325/π)×0.866≈179.\nVerify units/pu bases and that the arithmetic lands on the keyed option “179 V” (Gate C).\nFinal keyed result: 179 V\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “230” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “325” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “0” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 50,
    "subject": "Power Electronics & Drives",
    "topic": "Numerical",
    "question": "Buck chopper Vs=200 V, duty 0.4, continuous conduction. Vo ≈",
    "image": "",
    "options": [
      "200",
      "500",
      "80 V",
      "40"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 80 V\n\nWHY CORRECT:\nThis is a Numerical item in Power Electronics & Drives (Numerical). The keyed choice “80 V” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Electronics & Drives principle for “Numerical”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nSubstitute stem values into the governing relation for “Numerical”. Complete the arithmetic carefully; final result = “80 V”.\nFinal keyed result: 80 V\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “200” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “500” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “40” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 51,
    "subject": "Power Electronics & Drives",
    "topic": "Diagram+Application",
    "question": "[]` Firing α must lie between:",
    "image": "images/diagrams/electrical-flt01/q51-rle-angles.svg",
    "options": [
      "0 and θ1 only",
      "θ2 and 360 only",
      "Anywhere",
      "θ1 and θ2"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Diagram+Application",
    "formula": "",
    "explanation": "CORRECT: θ1 and θ2\n\nWHY CORRECT:\nThis is a Diagram+Application item in Power Electronics & Drives (Diagram+Application). The keyed choice “θ1 and θ2” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Electronics & Drives principle for “Diagram+Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “0 and θ1 only” — exam-level wrong path for “Diagram+Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “θ2 and 360 only” — exam-level wrong path for “Diagram+Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Anywhere” — exam-level wrong path for “Diagram+Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 52,
    "subject": "Power Electronics & Drives",
    "topic": "Application",
    "question": "Fully controlled bridge feeding DC motor; α=120° (continuous current) means:",
    "image": "",
    "options": [
      "Inverting / regenerative possible (Vo negative average)",
      "Always motoring positive Vo",
      "Device open always",
      "α invalid always"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Inverting / regenerative possible (Vo negative average)\n\nWHY CORRECT:\nThis is a Application item in Power Electronics & Drives (Application). The keyed choice “Inverting / regenerative possible (Vo negative average)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Electronics & Drives principle for “Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Answer A.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Inverting / regenerative possible (Vo negative average)” (Gate C).\nFinal keyed result: Inverting / regenerative possible (Vo negative average)\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Always motoring positive Vo” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Device open always” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “α invalid always” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 53,
    "subject": "Power Electronics & Drives",
    "topic": "Practical",
    "question": "IGBT module overheats on drive — first checks:",
    "image": "",
    "options": [
      "Ignore heatsink",
      "Cooling path, switching freq, load current, gate drive",
      "Raise ambient on purpose",
      "Remove snubber always"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Practical",
    "formula": "",
    "explanation": "CORRECT: Cooling path, switching freq, load current, gate drive\n\nWHY CORRECT:\nThis is a Practical item in Power Electronics & Drives (Practical). The keyed choice “Cooling path, switching freq, load current, gate drive” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Electronics & Drives principle for “Practical”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) Non-engineering distractor (“Ignore heatsink”). Real papers trap candidates on technical slips in Power Electronics & Drives — flag option for MODIFY rewrite.\nB) (correct)\nC) “Raise ambient on purpose” — exam-level wrong path for “Practical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Remove snubber always” — exam-level wrong path for “Practical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 54,
    "subject": "Electrical Measurements",
    "topic": "Conceptual",
    "question": "Inductance is commonly measured by:",
    "image": "",
    "options": [
      "Schering",
      "Kelvin",
      "Maxwell bridge",
      "Wien"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Maxwell bridge\n\nWHY CORRECT:\nThis is a Conceptual item in Electrical Measurements (Conceptual). The keyed choice “Maxwell bridge” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Measurements principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Schering” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Kelvin” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “Wien” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 55,
    "subject": "Electrical Measurements",
    "topic": "Numerical",
    "question": "Wheatstone: P=1 kΩ±2.1%, Q=100 Ω±0.5%, S=300 Ω±0.4%, R unknown. R≈",
    "image": "",
    "options": [
      "3000 Ω",
      "3 Ω",
      "300 Ω ±90",
      "30 Ω ±0.9 Ω class"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 30 Ω ±0.9 Ω class\n\nWHY CORRECT:\nThis is a Numerical item in Electrical Measurements (Numerical). The keyed choice “30 Ω ±0.9 Ω class” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: R=PS/Q=3000/100=30; %≈2.1+0.5+0.4=3% → ±0.9 Ω.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: R=PS/Q=3000/100=30; %≈2.1+0.5+0.4=3% → ±0.9 Ω.\nVerify units/pu bases and that the arithmetic lands on the keyed option “30 Ω ±0.9 Ω class” (Gate C).\nFinal keyed result: 30 Ω ±0.9 Ω class\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “3000 Ω” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “3 Ω” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “300 Ω ±90” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 56,
    "subject": "Electrical Measurements",
    "topic": "Diagram",
    "question": "[]` Vertical input reaches CRT vertical plates mainly via:",
    "image": "images/diagrams/electrical-flt01/q56-cro-blocks.svg",
    "options": [
      "Attenuator → vertical amp → (delay) → vertical plates",
      "Time-base only",
      "Blanking only",
      "Horizontal amp only"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Diagram",
    "formula": "",
    "explanation": "CORRECT: Attenuator → vertical amp → (delay) → vertical plates\n\nWHY CORRECT:\nThis is a Diagram item in Electrical Measurements (Diagram). The keyed choice “Attenuator → vertical amp → (delay) → vertical plates” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Measurements principle for “Diagram”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Time-base only” — exam-level wrong path for “Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Blanking only” — exam-level wrong path for “Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Horizontal amp only” — exam-level wrong path for “Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 57,
    "subject": "Electrical Measurements",
    "topic": "Numerical",
    "question": "CT 100/5, burden 15 VA. Secondary current rated 5 A. Rated burden impedance ≈",
    "image": "",
    "options": [
      "3 Ω",
      "0.6 Ω",
      "15 Ω",
      "100 Ω"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 0.6 Ω\n\nWHY CORRECT:\nThis is a Numerical item in Electrical Measurements (Numerical). The keyed choice “0.6 Ω” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Z=VA/I²=15/25=0.6.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Z=VA/I²=15/25=0.6.\nVerify units/pu bases and that the arithmetic lands on the keyed option “0.6 Ω” (Gate C).\nFinal keyed result: 0.6 Ω\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “3 Ω” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “15 Ω” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “100 Ω” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 58,
    "subject": "Electrical Measurements",
    "topic": "Application",
    "question": "Four-terminal (Kelvin) method preferred when measuring:",
    "image": "",
    "options": [
      "Very high MΩ only",
      "Capacitance only",
      "Very low resistance",
      "Frequency only"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Very low resistance\n\nWHY CORRECT:\nThis is a Application item in Electrical Measurements (Application). The keyed choice “Very low resistance” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Measurements principle for “Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Very high MΩ only” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Capacitance only” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “Frequency only” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 59,
    "subject": "Electrical Measurements",
    "topic": "Graph",
    "question": "To extend ammeter range, shunt is used because:",
    "image": "",
    "options": [
      "Series multiplies current in coil",
      "Increases coil R always for higher I",
      "Open coil",
      "Most current bypasses meter movement"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Graph",
    "formula": "",
    "explanation": "CORRECT: Most current bypasses meter movement\n\nWHY CORRECT:\nThis is a Graph item in Electrical Measurements (Graph). The keyed choice “Most current bypasses meter movement” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Measurements principle for “Graph”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Series multiplies current in coil” — exam-level wrong path for “Graph”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Increases coil R always for higher I” — exam-level wrong path for “Graph”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Open coil” — exam-level wrong path for “Graph”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 60,
    "subject": "Analog Electronics",
    "topic": "Conceptual",
    "question": "Ideal op-amp differential gain and input impedance:",
    "image": "",
    "options": [
      "Infinite, infinite",
      "Zero, zero",
      "1, 0",
      "Finite fixed always 10"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Infinite, infinite\n\nWHY CORRECT:\nThis is a Conceptual item in Analog Electronics (Conceptual). The keyed choice “Infinite, infinite” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Analog Electronics principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Zero, zero” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “1, 0” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Finite fixed always 10” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 61,
    "subject": "Analog Electronics",
    "topic": "Diagram+Numerical",
    "question": "[]` With Vs, Rz, Vz as labelled on the figure, diode current Iz is closest to:",
    "image": "images/diagrams/electrical-flt01/q61-zener-iz.svg",
    "options": [
      "5 mA",
      "2 mA",
      "10 mA",
      "0 mA"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Diagram+Numerical",
    "formula": "",
    "explanation": "CORRECT: 2 mA\n\nWHY CORRECT:\nThis is a Diagram+Numerical item in Analog Electronics (Diagram+Numerical). The keyed choice “2 mA” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Iz from crop labels (GATE-style worked key ≈ 2 mA). Dep PASS/STRONG.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Iz from crop labels (GATE-style worked key ≈ 2 mA). Dep PASS/STRONG.\nVerify units/pu bases and that the arithmetic lands on the keyed option “2 mA” (Gate C).\nFinal keyed result: 2 mA\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “5 mA” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “10 mA” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “0 mA” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 62,
    "subject": "Analog Electronics",
    "topic": "Diagram+Numerical",
    "question": "[]` 230 V / 50-0-50 secondary; PRV on D1/D2 ≈",
    "image": "images/diagrams/electrical-flt01/q62-fwr-prv.svg",
    "options": [
      "50 V",
      "50√2",
      "100√2 V",
      "100 V"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Diagram+Numerical",
    "formula": "",
    "explanation": "CORRECT: 100√2 V\n\nWHY CORRECT:\nThis is a Diagram+Numerical item in Analog Electronics (Diagram+Numerical). The keyed choice “100√2 V” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Peak of other half ≈100√2.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Peak of other half ≈100√2.\nVerify units/pu bases and that the arithmetic lands on the keyed option “100√2 V” (Gate C).\nFinal keyed result: 100√2 V\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “50 V” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “50√2” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “100 V” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 63,
    "subject": "Analog Electronics",
    "topic": "AR",
    "question": "**A:** In an inverting op-amp amplifier, closed-loop gain ≈ −Rf/Rin for ideal. **R:** Virtual ground appears at inverting input due to infinite open-loop gain and negative feedback.",
    "image": "",
    "options": [
      "Both; R not",
      "A true R false",
      "A false R true",
      "Both; R explains"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "AR",
    "formula": "",
    "explanation": "CORRECT: Both; R explains\n\nWHY CORRECT:\nThis is a AR item in Analog Electronics (AR). The keyed choice “Both; R explains” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Analog Electronics principle for “AR”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Both; R not” — exam-level wrong path for “AR”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “A true R false” — exam-level wrong path for “AR”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “A false R true” — exam-level wrong path for “AR”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 64,
    "subject": "Digital Electronics",
    "topic": "Conceptual",
    "question": "De Morgan: (A·B)′ =",
    "image": "",
    "options": [
      "A′+B′",
      "A′·B′",
      "A+B",
      "A·B"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: A′+B′\n\nWHY CORRECT:\nThis is a Conceptual item in Digital Electronics (Conceptual). The keyed choice “A′+B′” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Digital Electronics principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “A′·B′” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “A+B” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “A·B” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 65,
    "subject": "Digital Electronics",
    "topic": "Matching+Diagram",
    "question": "Match List-I (gate symbols as labelled) with List-II (Boolean expressions). Select the correct code.",
    "image": "images/diagrams/electrical-flt01/q65-logic-match.svg",
    "options": [
      "P-NOR, Q-NAND, R-AND, S-XOR",
      "P-NAND, Q-NOR, R-XOR, S-AND",
      "P-XOR, Q-AND, R-NAND, S-NOR",
      "P-AND, Q-XOR, R-NOR, S-NAND"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Matching+Diagram",
    "formula": "",
    "explanation": "CORRECT: P-NAND, Q-NOR, R-XOR, S-AND\n\nWHY CORRECT:\nThis is a Matching+Diagram item in Digital Electronics (Matching+Diagram). The keyed choice “P-NAND, Q-NOR, R-XOR, S-AND” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dep PASS/STRONG — codes follow crop labels (verify page has gate sketches at crop time).\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “P-NOR, Q-NAND, R-AND, S-XOR” — exam-level wrong path for “Matching+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “P-XOR, Q-AND, R-NAND, S-NOR” — exam-level wrong path for “Matching+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “P-AND, Q-XOR, R-NOR, S-NAND” — exam-level wrong path for “Matching+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "matchingMatrix": {
      "caption": "Match List-I with List-II",
      "listITitle": "List-I (Gate)",
      "listIITitle": "List-II (Expression)",
      "listI": [
        {
          "code": "P",
          "text": "NAND symbol"
        },
        {
          "code": "Q",
          "text": "NOR symbol"
        },
        {
          "code": "R",
          "text": "XOR symbol"
        },
        {
          "code": "S",
          "text": "AND symbol"
        }
      ],
      "listII": [
        {
          "code": "1",
          "text": "¬(A·B)"
        },
        {
          "code": "2",
          "text": "¬(A+B)"
        },
        {
          "code": "3",
          "text": "A⊕B"
        },
        {
          "code": "4",
          "text": "A·B"
        }
      ],
      "instruction": "Use the diagram labels with this matrix; choose the correct matching code."
    }
  },
  {
    "id": 66,
    "subject": "Digital Electronics",
    "topic": "Numerical",
    "question": "2-bit up-counter clocked; after 5 clocks from 00, state:",
    "image": "",
    "options": [
      "00",
      "10",
      "01",
      "11"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 01\n\nWHY CORRECT:\nThis is a Numerical item in Digital Electronics (Numerical). The keyed choice “01” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: 5 mod 4 = 1 → 01.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: 5 mod 4 = 1 → 01.\nVerify units/pu bases and that the arithmetic lands on the keyed option “01” (Gate C).\nFinal keyed result: 01\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “00” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “10” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “11” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 67,
    "subject": "Utilization of Electrical Energy",
    "topic": "Conceptual",
    "question": "Tractive effort for train starting on gradient must overcome:",
    "image": "",
    "options": [
      "Only corona",
      "Only transformer magnetising",
      "Only skin effect",
      "Gravity + resistance + acceleration force"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Gravity + resistance + acceleration force\n\nWHY CORRECT:\nThis is a Conceptual item in Utilization of Electrical Energy (Conceptual). The keyed choice “Gravity + resistance + acceleration force” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Utilization of Electrical Energy principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Only corona” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Only transformer magnetising” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Only skin effect” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 68,
    "subject": "Utilization of Electrical Energy",
    "topic": "Numerical",
    "question": "Lamp 200 W, 250 V; used on 200 V (assume R const). Power ≈",
    "image": "",
    "options": [
      "128 W",
      "200",
      "250",
      "160"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 128 W\n\nWHY CORRECT:\nThis is a Numerical item in Utilization of Electrical Energy (Numerical). The keyed choice “128 W” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: P∝V² → 200×(200/250)²=128.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: P∝V² → 200×(200/250)²=128.\nVerify units/pu bases and that the arithmetic lands on the keyed option “128 W” (Gate C).\nFinal keyed result: 128 W\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “200” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “250” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “160” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 69,
    "subject": "Utilization of Electrical Energy",
    "topic": "Application",
    "question": "Preferred for frequent reversing + regeneration:",
    "image": "",
    "options": [
      "Soft starter only DOL forever",
      "Ward–Leonard / 4Q converter drive",
      "Fixed 1φ dimmer only",
      "Open-loop heater"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Ward–Leonard / 4Q converter drive\n\nWHY CORRECT:\nThis is a Application item in Utilization of Electrical Energy (Application). The keyed choice “Ward–Leonard / 4Q converter drive” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Utilization of Electrical Energy principle for “Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) Non-engineering distractor (“Soft starter only DOL forever”). Real papers trap candidates on technical slips in Utilization of Electrical Energy — flag option for MODIFY rewrite.\nB) (correct)\nC) “Fixed 1φ dimmer only” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Open-loop heater” — exam-level wrong path for “Application”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 70,
    "subject": "Utilization of Electrical Energy",
    "topic": "Standard",
    "question": "Specific energy consumption of a train is energy per:",
    "image": "",
    "options": [
      "tonne only",
      "volt-ampere only",
      "tonne-km",
      "km only"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Standard",
    "formula": "",
    "explanation": "CORRECT: tonne-km\n\nWHY CORRECT:\nThis is a Standard item in Utilization of Electrical Energy (Standard). The keyed choice “tonne-km” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: SEC = energy / (tonne·km).\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: SEC = energy / (tonne·km).\nVerify units/pu bases and that the arithmetic lands on the keyed option “tonne-km” (Gate C).\nFinal keyed result: tonne-km\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “tonne only” — exam-level wrong path for “Standard”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “volt-ampere only” — exam-level wrong path for “Standard”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “km only” — exam-level wrong path for “Standard”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 71,
    "subject": "Quantitative Aptitude",
    "topic": "Numerical",
    "question": "What is 18% of 350?",
    "image": "",
    "options": [
      "54",
      "70",
      "45",
      "63"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 63\n\nWHY CORRECT:\nThis is a Numerical item in Quantitative Aptitude (Numerical). The keyed choice “63” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: 0.18×350=63. Distractors: 15%, 20%, 350×0.18 slip.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: 0.18×350=63. Distractors: 15%, 20%, 350×0.18 slip.\nVerify units/pu bases and that the arithmetic lands on the keyed option “63” (Gate C).\nFinal keyed result: 63\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “54” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “70” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “45” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 72,
    "subject": "Quantitative Aptitude",
    "topic": "Numerical",
    "question": "Compound interest on ₹8000 at 5% p.a. for 2 years (annual compounding) is:",
    "image": "",
    "options": [
      "₹820",
      "₹800",
      "₹400",
      "₹840"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: ₹820\n\nWHY CORRECT:\nThis is a Numerical item in Quantitative Aptitude (Numerical). The keyed choice “₹820” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: A=8000(1.05)²=8820; CI=820.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: A=8000(1.05)²=8820; CI=820.\nVerify units/pu bases and that the arithmetic lands on the keyed option “₹820” (Gate C).\nFinal keyed result: ₹820\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “₹800” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “₹400” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “₹840” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 73,
    "subject": "Quantitative Aptitude",
    "topic": "Numerical",
    "question": "A:B = 5:7 and A+B = 96. Find B.",
    "image": "",
    "options": [
      "40",
      "56",
      "48",
      "60"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 56\n\nWHY CORRECT:\nThis is a Numerical item in Quantitative Aptitude (Numerical). The keyed choice “56” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Quantitative Aptitude principle for “Numerical”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: B=7/12×96=56.\nVerify units/pu bases and that the arithmetic lands on the keyed option “56” (Gate C).\nFinal keyed result: 56\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “40” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “48” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “60” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 74,
    "subject": "Quantitative Aptitude",
    "topic": "Numerical",
    "question": "Average of 6 numbers is 25. If one number 40 is replaced by 16, new average is:",
    "image": "",
    "options": [
      "22",
      "23",
      "21",
      "24"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 21\n\nWHY CORRECT:\nThis is a Numerical item in Quantitative Aptitude (Numerical). The keyed choice “21” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Sum=150; new sum=126; avg=21.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Sum=150; new sum=126; avg=21.\nVerify units/pu bases and that the arithmetic lands on the keyed option “21” (Gate C).\nFinal keyed result: 21\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “22” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “23” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “24” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 75,
    "subject": "Quantitative Aptitude",
    "topic": "Numerical",
    "question": "A 90 m train at 72 km/h crosses a pole in:",
    "image": "",
    "options": [
      "3.5 s",
      "5 s",
      "6 s",
      "4.5 s"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 4.5 s\n\nWHY CORRECT:\nThis is a Numerical item in Quantitative Aptitude (Numerical). The keyed choice “4.5 s” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: v=20 m/s; t=90/20=4.5 s.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: v=20 m/s; t=90/20=4.5 s.\nVerify units/pu bases and that the arithmetic lands on the keyed option “4.5 s” (Gate C).\nFinal keyed result: 4.5 s\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “3.5 s” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “5 s” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “6 s” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 76,
    "subject": "Quantitative Aptitude",
    "topic": "Numerical",
    "question": "(2/5)⁻¹ × (3/4)⁰ =",
    "image": "",
    "options": [
      "5/2",
      "2/5",
      "1",
      "3/4"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 5/2\n\nWHY CORRECT:\nThis is a Numerical item in Quantitative Aptitude (Numerical). The keyed choice “5/2” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Quantitative Aptitude principle for “Numerical”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: (5/2)×1=5/2.\nVerify units/pu bases and that the arithmetic lands on the keyed option “5/2” (Gate C).\nFinal keyed result: 5/2\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “2/5” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “1” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “3/4” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 77,
    "subject": "Quantitative Aptitude",
    "topic": "Numerical",
    "question": "A finishes work in 10 days, B in 15 days. Days together:",
    "image": "",
    "options": [
      "5",
      "6",
      "7.5",
      "8"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 6\n\nWHY CORRECT:\nThis is a Numerical item in Quantitative Aptitude (Numerical). The keyed choice “6” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: 1/10+1/15=1/6 → 6 days.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: 1/10+1/15=1/6 → 6 days.\nVerify units/pu bases and that the arithmetic lands on the keyed option “6” (Gate C).\nFinal keyed result: 6\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “5” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “7.5” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “8” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 78,
    "subject": "Quantitative Aptitude",
    "topic": "Numerical",
    "question": "In 40 L milk–water 5:3, water added to make milk:water 1:1. Water added (L):",
    "image": "",
    "options": [
      "5",
      "15",
      "10",
      "8"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 10\n\nWHY CORRECT:\nThis is a Numerical item in Quantitative Aptitude (Numerical). The keyed choice “10” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Milk=25, water=15; need water=25 → add 10 L.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Milk=25, water=15; need water=25 → add 10 L.\nVerify units/pu bases and that the arithmetic lands on the keyed option “10” (Gate C).\nFinal keyed result: 10\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “5” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “15” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “8” — exam-level wrong path for “Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 79,
    "subject": "General Awareness",
    "topic": "Conceptual",
    "question": "Which body conducts elections to the Lok Sabha under the Constitution of India?",
    "image": "",
    "options": [
      "Supreme Court",
      "NITI Aayog",
      "CAG",
      "Election Commission of India"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Election Commission of India\n\nWHY CORRECT:\nThis is a Conceptual item in General Awareness (Conceptual). The keyed choice “Election Commission of India” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard General Awareness principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Supreme Court” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “NITI Aayog” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “CAG” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 80,
    "subject": "General Awareness",
    "topic": "Conceptual",
    "question": "The SI unit of electric charge is:",
    "image": "",
    "options": [
      "Coulomb",
      "Ampere",
      "Volt",
      "Ohm"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Coulomb\n\nWHY CORRECT:\nThis is a Conceptual item in General Awareness (Conceptual). The keyed choice “Coulomb” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Q in coulombs; I in amperes.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Ampere” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Volt” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Ohm” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 81,
    "subject": "General Awareness",
    "topic": "Conceptual",
    "question": "APTRANSCO’s core statutory function is:",
    "image": "",
    "options": [
      "Retail milk distribution",
      "Intra-state power transmission",
      "Commercial banking",
      "Telecom spectrum auction"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Intra-state power transmission\n\nWHY CORRECT:\nThis is a Conceptual item in General Awareness (Conceptual). The keyed choice “Intra-state power transmission” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard General Awareness principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Retail milk distribution” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “Commercial banking” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Telecom spectrum auction” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 82,
    "subject": "General Awareness",
    "topic": "Conceptual",
    "question": "The Montreal Protocol primarily addresses:",
    "image": "",
    "options": [
      "Nuclear non-proliferation",
      "Maritime piracy",
      "Ozone-depleting substances",
      "WTO tariffs only"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Ozone-depleting substances\n\nWHY CORRECT:\nThis is a Conceptual item in General Awareness (Conceptual). The keyed choice “Ozone-depleting substances” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard General Awareness principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Nuclear non-proliferation” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Maritime piracy” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “WTO tariffs only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 83,
    "subject": "General Awareness",
    "topic": "Conceptual",
    "question": "Which Indian river is associated with the Hirakud Dam?",
    "image": "",
    "options": [
      "Narmada",
      "Godavari",
      "Krishna",
      "Mahanadi"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Mahanadi\n\nWHY CORRECT:\nThis is a Conceptual item in General Awareness (Conceptual). The keyed choice “Mahanadi” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard General Awareness principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Narmada” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Godavari” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Krishna” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 84,
    "subject": "General Awareness",
    "topic": "Conceptual",
    "question": "Article 51A of the Constitution deals with:",
    "image": "",
    "options": [
      "Fundamental Duties",
      "Directive Principles only",
      "Emergency provisions",
      "Official language schedule only"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Fundamental Duties\n\nWHY CORRECT:\nThis is a Conceptual item in General Awareness (Conceptual). The keyed choice “Fundamental Duties” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard General Awareness principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Directive Principles only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Emergency provisions” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Official language schedule only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 85,
    "subject": "General Awareness",
    "topic": "Conceptual",
    "question": "RBI’s primary mandate among the following is:",
    "image": "",
    "options": [
      "Conducting Lok Sabha polls",
      "Monetary policy / currency issuer",
      "Income-tax assessment",
      "Railway freight tariffs"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Monetary policy / currency issuer\n\nWHY CORRECT:\nThis is a Conceptual item in General Awareness (Conceptual). The keyed choice “Monetary policy / currency issuer” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard General Awareness principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Conducting Lok Sabha polls” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “Income-tax assessment” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Railway freight tariffs” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 86,
    "subject": "Reasoning",
    "topic": "Conceptual",
    "question": "Find the next term: 3, 8, 15, 24, ?",
    "image": "",
    "options": [
      "33",
      "32",
      "35",
      "36"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 35\n\nWHY CORRECT:\nThis is a Conceptual item in Reasoning (Conceptual). The keyed choice “35” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: +5,+7,+9,+11 → 35.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “33” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “32” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “36” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 87,
    "subject": "Reasoning",
    "topic": "Conceptual",
    "question": "Odd one out:",
    "image": "",
    "options": [
      "Rectangle",
      "Square",
      "Rhombus",
      "Sphere"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Sphere\n\nWHY CORRECT:\nThis is a Conceptual item in Reasoning (Conceptual). The keyed choice “Sphere” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Only 3-D / curved solid among plane quadrilaterals.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Rectangle” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Square” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Rhombus” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 88,
    "subject": "Reasoning",
    "topic": "Conceptual",
    "question": "If in a code, P=16, A=1, T=20, then TAP equals (sum of positions):",
    "image": "",
    "options": [
      "37",
      "36",
      "35",
      "38"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 37\n\nWHY CORRECT:\nThis is a Conceptual item in Reasoning (Conceptual). The keyed choice “37” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Reasoning principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: 20+1+16=37.\nVerify units/pu bases and that the arithmetic lands on the keyed option “37” (Gate C).\nFinal keyed result: 37\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “36” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “35” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “38” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 89,
    "subject": "Reasoning",
    "topic": "Conceptual",
    "question": "A is brother of B. B is sister of C. C is mother of D. How is A related to D?",
    "image": "",
    "options": [
      "Father",
      "Maternal uncle",
      "Cousin",
      "Brother"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Maternal uncle\n\nWHY CORRECT:\nThis is a Conceptual item in Reasoning (Conceptual). The keyed choice “Maternal uncle” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: A is brother of C’s generation → maternal uncle of D.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Father” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “Cousin” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Brother” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 90,
    "subject": "Reasoning",
    "topic": "Conceptual",
    "question": "What is the mirror image of 3:40 on a standard clock (exam convention 11:60 − time)?",
    "image": "",
    "options": [
      "7:20",
      "9:20",
      "8:20",
      "8:40"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 8:20\n\nWHY CORRECT:\nThis is a Conceptual item in Reasoning (Conceptual). The keyed choice “8:20” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: 11:60 − 3:40 = 8:20.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: 11:60 − 3:40 = 8:20.\nVerify units/pu bases and that the arithmetic lands on the keyed option “8:20” (Gate C).\nFinal keyed result: 8:20\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “7:20” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “9:20” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “8:40” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 91,
    "subject": "English",
    "topic": "Conceptual",
    "question": "Synonym of **Precise**:",
    "image": "",
    "options": [
      "Vague",
      "Rough",
      "Loose",
      "Exact"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Exact\n\nWHY CORRECT:\nThis is a Conceptual item in English (Conceptual). The keyed choice “Exact” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard English principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Vague” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Rough” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Loose” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 92,
    "subject": "English",
    "topic": "Conceptual",
    "question": "Antonym of **Expand**:",
    "image": "",
    "options": [
      "Contract",
      "Enlarge",
      "Inflate",
      "Widen"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Contract\n\nWHY CORRECT:\nThis is a Conceptual item in English (Conceptual). The keyed choice “Contract” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard English principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Enlarge” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Inflate” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Widen” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 93,
    "subject": "English",
    "topic": "Conceptual",
    "question": "Choose the correctly spelled word:",
    "image": "",
    "options": [
      "Accomodate",
      "Accommodate",
      "Acommodate",
      "Acomodate"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Accommodate\n\nWHY CORRECT:\nThis is a Conceptual item in English (Conceptual). The keyed choice “Accommodate” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard English principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Accomodate” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “Acommodate” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Acomodate” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 94,
    "subject": "English",
    "topic": "Conceptual",
    "question": "Fill blank: She is good ___ mathematics.",
    "image": "",
    "options": [
      "in",
      "on",
      "at",
      "over"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: at\n\nWHY CORRECT:\nThis is a Conceptual item in English (Conceptual). The keyed choice “at” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard English principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “in” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “on” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “over” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 95,
    "subject": "English",
    "topic": "Conceptual",
    "question": "One-word substitution — a person who loves books:",
    "image": "",
    "options": [
      "Bibliophobe",
      "Philatelist",
      "Cartographer",
      "Bibliophile"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Bibliophile\n\nWHY CORRECT:\nThis is a Conceptual item in English (Conceptual). The keyed choice “Bibliophile” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard English principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Bibliophobe” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Philatelist” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Cartographer” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 96,
    "subject": "Computer Awareness",
    "topic": "Conceptual",
    "question": "Which device permanently stores data when power is off?",
    "image": "",
    "options": [
      "HDD / SSD (secondary storage)",
      "RAM",
      "Cache only",
      "CPU registers only"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: HDD / SSD (secondary storage)\n\nWHY CORRECT:\nThis is a Conceptual item in Computer Awareness (Conceptual). The keyed choice “HDD / SSD (secondary storage)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Computer Awareness principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “RAM” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Cache only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “CPU registers only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 97,
    "subject": "Computer Awareness",
    "topic": "Conceptual",
    "question": "HTTPS primarily adds which security layer over HTTP?",
    "image": "",
    "options": [
      "Compression only",
      "TLS/SSL encryption",
      "Faster DNS only",
      "Larger MTU only"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: TLS/SSL encryption\n\nWHY CORRECT:\nThis is a Conceptual item in Computer Awareness (Conceptual). The keyed choice “TLS/SSL encryption” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Computer Awareness principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Compression only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “Faster DNS only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Larger MTU only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 98,
    "subject": "Computer Awareness",
    "topic": "Conceptual",
    "question": "In MS Excel, a cell reference that does not change when copied uses:",
    "image": "",
    "options": [
      "Relative ref only",
      "Circular ref only",
      "Absolute ref with $ (e.g. $A$1)",
      "Array formula only"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Absolute ref with $ (e.g. $A$1)\n\nWHY CORRECT:\nThis is a Conceptual item in Computer Awareness (Conceptual). The keyed choice “Absolute ref with $ (e.g. $A$1)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Computer Awareness principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Relative ref only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Circular ref only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “Array formula only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 99,
    "subject": "Computer Awareness",
    "topic": "Conceptual",
    "question": "Phishing attacks typically aim to:",
    "image": "",
    "options": [
      "Cool the CPU",
      "Increase RAM size",
      "Defragment disks",
      "Steal credentials via deceptive messages"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Steal credentials via deceptive messages\n\nWHY CORRECT:\nThis is a Conceptual item in Computer Awareness (Conceptual). The keyed choice “Steal credentials via deceptive messages” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Computer Awareness principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Cool the CPU” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Increase RAM size” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Defragment disks” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 100,
    "subject": "Computer Awareness",
    "topic": "Conceptual",
    "question": "IPv4 address size is:",
    "image": "",
    "options": [
      "32 bits",
      "64 bits",
      "128 bits",
      "16 bits"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 32 bits\n\nWHY CORRECT:\nThis is a Conceptual item in Computer Awareness (Conceptual). The keyed choice “32 bits” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Computer Awareness principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “64 bits” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “128 bits” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “16 bits” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  }
];
