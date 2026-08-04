// Electrical Engineering FLT-01 — APTRANSCO AEE CBT
// Diagram–stem alignment pass: tight crops; Circuits schematics Q30+Q32; hardened soft items
// answer is 0-based index into options

export const questions = [
  {
    "id": 1,
    "subject": "Power Systems",
    "topic": "SIL",
    "question": "A lossless 400 kV line has Zc = 250 Ω. Its SIL (MW) is closest to:",
    "image": "",
    "options": [
      "640",
      "400",
      "250",
      "160"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "SIL = V^2 / Zc",
    "explanation": "CORRECT: 640\n\nWHY CORRECT:\nThis is a Conceptual item in Power Systems (Conceptual). The keyed choice “√(L/C) and V²” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: SIL = V²/Zc, Zc=√(L/C).\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: SIL = V²/Zc, Zc=√(L/C).\nVerify units/pu bases and that the arithmetic lands on the keyed option “√(L/C) and V²” (Gate C).\nFinal keyed result: √(L/C) and V²\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) Non-engineering distractor (“Only conductor colour”) — MODIFY later; real trap is confusing SIL with thermal/ampacity limits.\nB) (correct)\nC) Non-engineering distractor (“Only tower height always”) — real trap is thinking SIL depends on tower geometry rather than L,C,V.\nD) “Transformer vector group only” — vector group affects winding connections/zero-sequence paths, not SIL of the line.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 2,
    "subject": "Power Systems",
    "topic": "Standard+Numerical",
    "question": "On 100 MVA, 220 kV base, a line reactance 48.4 Ω equals how many pu?",
    "image": "",
    "options": [
      "0.5",
      "0.1",
      "0.2",
      "1.0"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Standard+Numerical",
    "formula": "x_pu = XΩ / (kV^2/MVA)",
    "explanation": "CORRECT: 0.1\n\nWHY CORRECT:\nThis is a Standard+Numerical item in Power Systems (Standard+Numerical). The keyed choice “484” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Zb = kV²/MVA = 220²/100 = 484.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Zb = kV²/MVA = 220²/100 = 484.\nVerify units/pu bases and that the arithmetic lands on the keyed option “484” (Gate C).\nFinal keyed result: 484\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “220” — exam-level wrong path for “Standard+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “100” — exam-level wrong path for “Standard+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “48.4” — exam-level wrong path for “Standard+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Link the stem to the governing law (KCL/KVL, Faraday, power balance, stability criterion).\n• Check units / pu base consistency before comparing options.\n• Eliminate options that violate conservation, passivity, or bus-type definitions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 3,
    "subject": "Power Systems",
    "topic": "Numerical",
    "question": "A 3-φ feeder has positive-sequence impedance j0.2 pu and zero-sequence j0.5 pu on same base. For a solid SLG fault at the feeder end with prefault Vf=1∠0, |If| (pu) is closest to:",
    "image": "",
    "options": [
      "2.0",
      "3.33",
      "1.11",
      "5.0"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Numerical+Application",
    "formula": "",
    "explanation": "CORRECT: 1.11\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 4,
    "subject": "Power Systems",
    "topic": "Directional overcurrent protection",
    "question": "In the system shown (breakers B1–B9 with relays R1–R9), some relays are directional. For short-circuit protection between bus 1 and the R–L loads with isolation of the minimum network using the minimum number of directional relays, the necessary condition is:",
    "image": "images/diagrams/electrical-flt01/q04-directional-relays.jpg",
    "options": [
      "R3 and R4 directional toward Line1 and Line2 respectively only",
      "R3 and R4 directional blocking toward bus 2 only",
      "R3,R4 directional toward bus 2 and R7 directional toward bus 3",
      "R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Diagram+Application",
    "formula": "Directional OCR selectivity on parallel + radial feeders",
    "explanation": "CORRECT: R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2\n\nWHY CORRECT:\nParallel feeders between buses need directional discrimination so only the faulted path is isolated; radial outbound feeders also need directional units at critical locations. Option C places the minimum directional set that covers parallel Lines 1–2 and the outbound Line 3 / bus-2 backfeed path.\n\nCALCULATION:\nN/A — protection logic from SLD topology (diagram-dependent).\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) Incomplete — misses Line 3 / bus-3 path directional need.\nB) Incomplete relative to selectivity on Line 3 vs bus-2 backfeed.\nC) (correct)\nD) Covers only parallel feeder ends; insufficient for full zone.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Directional OCR needed on parallel feeders for selectivity.\n• Minimum directional count is a classic TRANSCO/GATE protection theme.\n• Read breaker numbering on the SLD — do not invent topology from memory.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "pyq",
    "diagramSourcePath": "diagram-questions-EE/PowerSystems/P2_2023EE_pg016.jpg"
  },
  {
    "id": 5,
    "subject": "Power Systems",
    "topic": "AR",
    "question": "Two identical 50 MVA, 11 kV, Xd″=0.15 pu machines feed a bus. On 100 MVA base, the bus short-circuit MVA for a 3-φ fault (neglecting feeder Z) is closest to:",
    "image": "",
    "options": [
      "667",
      "333",
      "1333",
      "100"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "AR",
    "formula": "",
    "explanation": "CORRECT: 667\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 6,
    "subject": "Power Systems",
    "topic": "Conceptual",
    "question": "Ferranti rise on a long EHV line is most severe when:",
    "image": "",
    "options": [
      "Heavy load + short cable",
      "Light/no load + long line + open receiving end",
      "Unity pf near SIL always",
      "Zero shunt capacitance"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Light/no load + long line + open receiving end\n\nWHY CORRECT:\nThis is a Conceptual item in Power Systems (Conceptual). The keyed choice “Line lightly loaded / open receiving end + long line” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Systems principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Heavy load always” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Short cable only always” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “Zero capacitance” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 7,
    "subject": "Power Systems",
    "topic": "Application",
    "question": "ABCD constants of a medium line (nominal-π) satisfy AD−BC = 1. If A = D = 0.98∠0.5°, |B|≈80 Ω, then |C| (S) is closest to:",
    "image": "",
    "options": [
      "80",
      "1.0",
      "5.0e-4",
      "0.02"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: 5.0e-4\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 8,
    "subject": "Power Systems",
    "topic": "Numerical",
    "question": "For a symmetrical 3-φ fault, sequence networks are connected in:",
    "image": "",
    "options": [
      "Parallel of all three",
      "Negative alone",
      "Series (Z1+Z2+Z0)",
      "Only positive-sequence network"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: Only positive-sequence network\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 9,
    "subject": "Power Systems",
    "topic": "Diagram+Numerical",
    "question": "From the open-conductor / sequence figure shown (use only labelled phase currents; Ic = 0), the zero-sequence current Ia0 is:",
    "image": "images/diagrams/electrical-flt01/q09-open-conductor.svg",
    "options": [
      "0 A",
      "5.78 A",
      "3.33 A",
      "10 A"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Diagram+Numerical",
    "formula": "",
    "explanation": "CORRECT: 0 A\n\nWHY CORRECT:\nThis is a Diagram+Numerical item in Power Systems (Diagram+Numerical). The keyed choice “0 A” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Systems principle for “Diagram+Numerical”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: (Ia+Ib+Ic)/3=0.\nVerify units/pu bases and that the arithmetic lands on the keyed option “0 A” (Gate C).\nFinal keyed result: 0 A\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “10 A” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “5.78 A” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “3.33 A” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Link the stem to the governing law (KCL/KVL, Faraday, power balance, stability criterion).\n• Check units / pu base consistency before comparing options.\n• Eliminate options that violate conservation, passivity, or bus-type definitions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/electrical-flt01/q09-open-conductor.svg"
  },
  {
    "id": 10,
    "subject": "Power Systems",
    "topic": "Table",
    "question": "A relay has TMS=0.3 and PSM=5. If operating time at TMS=1 for this PSM is 2.5 s (from IDMT curve), actual operating time (s) is:",
    "image": "",
    "options": [
      "0.3",
      "0.75",
      "2.5",
      "5.0"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Table",
    "formula": "",
    "explanation": "CORRECT: 0.75\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
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
    "question": "Surge impedance loading of an overhead line is 400 MW at 400 kV. If voltage is raised 5% with Zc unchanged, new SIL (MW) is closest to:",
    "image": "",
    "options": [
      "420",
      "380",
      "441",
      "400"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 441\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 12,
    "subject": "Power Systems",
    "topic": "Numerical+Application",
    "question": "A generator Xs = 0.20 pu feeds an infinite bus through a transformer Xt = 0.10 pu (same base). For a bolted 3-φ fault on the LV terminals of the transformer (generator side), the fault current in pu is closest to:",
    "image": "",
    "options": [
      "5",
      "10",
      "1",
      "3.33"
    ],
    "answer": 3,
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
    "question": "In equal-area criterion, for a sudden load rejection on a machine, accelerating area is bounded by:",
    "image": "",
    "options": [
      "Pm increase above Pe until δmax with equal decelerating area",
      "Only Pe curve below Pm forever",
      "Fault clearing angle alone with no Pm",
      "Inertia H only — angles irrelevant"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Practical",
    "formula": "",
    "explanation": "CORRECT: Pm increase above Pe until δmax with equal decelerating area\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 14,
    "subject": "Power Systems",
    "topic": "Graph",
    "question": "A CT of ratio 500/5 has secondary burden 15 VA at rated current. Secondary current at rated primary is 5 A; secondary impedance (Ω) is closest to:",
    "image": "",
    "options": [
      "75",
      "0.6",
      "3.0",
      "15"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Graph",
    "formula": "",
    "explanation": "CORRECT: 0.6\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 15,
    "subject": "Electrical Machines",
    "topic": "Conceptual",
    "question": "Service transformer oil is retained primarily because it provides:",
    "image": "",
    "options": [
      "Only intentional Buchholz gas generation",
      "Only mechanical lubrication of core bolts",
      "Insulation and cooling of windings/core",
      "Only lightning surge diversion"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Insulation and cooling of windings/core\n\nWHY CORRECT:\nThis is a Conceptual item in Electrical Machines (Conceptual). The keyed choice “Insulation and cooling” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Machines principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Lubrication of core only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Lightning protection only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Short-circuit protection relay” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Alternator regulation: Ef phasor = V + Ia(Ra + jXs); lagging → Ef > V usually.\n• Leading pf can give negative regulation (Ef < V possible).\n• Sync motor V-curves: Ia vs If at constant power — under/over excitation.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 16,
    "subject": "Electrical Machines",
    "topic": "Numerical",
    "question": "A 3-φ, 50 Hz, 4-pole turboalternator has Xs=1.2 pu and Ra≈0. On infinite bus 1.0 pu, delivering 0.8 pu at 0.8 lagging pf, |δ| (elec. deg) is closest to:",
    "image": "",
    "options": [
      "53.1",
      "18",
      "72",
      "36.9"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 36.9\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 17,
    "subject": "Electrical Machines",
    "topic": "Numerical",
    "question": "V/f control of an induction motor primarily keeps which nearly constant below base speed?",
    "image": "",
    "options": [
      "Air-gap flux",
      "Slip frequency always zero",
      "Rotor copper loss only",
      "Stator current independent of torque"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: Air-gap flux\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 18,
    "subject": "Electrical Machines",
    "topic": "Diagram+Conceptual",
    "question": "From the alternator phasor diagram shown (Ia leading Vt), the operating power factor is:",
    "image": "images/diagrams/electrical-flt01/q18-alt-phasor-lead.svg",
    "options": [
      "Unity only",
      "Leading pf load",
      "Short-circuit only",
      "Lagging pf load"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Diagram+Conceptual",
    "formula": "",
    "explanation": "CORRECT: Leading pf load\n\nWHY CORRECT:\nThis is a Diagram+Conceptual item in Electrical Machines (Diagram+Conceptual). The keyed choice “Leading pf load” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Machines principle for “Diagram+Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Lagging pf load” — exam-level wrong path for “Diagram+Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Unity only” — exam-level wrong path for “Diagram+Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “Short-circuit only” — exam-level wrong path for “Diagram+Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Alternator regulation: Ef phasor = V + Ia(Ra + jXs); lagging → Ef > V usually.\n• Leading pf can give negative regulation (Ef < V possible).\n• Sync motor V-curves: Ia vs If at constant power — under/over excitation.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/electrical-flt01/q18-alt-phasor-lead.svg"
  },
  {
    "id": 19,
    "subject": "Electrical Machines",
    "topic": "Conceptual",
    "question": "A separately excited DC motor has Va=220 V, Ra=1 Ω, Ia=20 A, φ constant. If Va is halved and torque kept same (Ia same), new speed as fraction of original is closest to:",
    "image": "",
    "options": [
      "1.0",
      "2.0",
      "0.45",
      "0.5"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 0.45\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 20,
    "subject": "Electrical Machines",
    "topic": "Application",
    "question": "In a 3-φ induction motor, air-gap power Pg = 12 kW, slip s=0.04. Rotor copper loss (kW) is:",
    "image": "",
    "options": [
      "12",
      "0.04",
      "11.52",
      "0.48"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: 0.48\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 21,
    "subject": "Electrical Machines",
    "topic": "Numerical",
    "question": "Alternator: Vt=1 pu, Ia=1 pu, Xs=1.0 pu, Ra≈0, pf=0.8 lag. |Ef| ≈",
    "image": "",
    "options": [
      "1.8 pu",
      "0.8",
      "1.6",
      "1.0"
    ],
    "answer": 0,
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
    "question": "A 50 Hz alternator is connected to a long lossless line open at the receiving end as shown. With field voltage held constant, the generator is disconnected from the line. Steady |Vt|:",
    "image": "images/diagrams/electrical-flt01/q22-ferranti-line.svg",
    "options": [
      "Unchanged always",
      "Decreases (Ferranti charging removed)",
      "Becomes zero always",
      "Increases always"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Diagram+Application",
    "formula": "",
    "explanation": "CORRECT: Decreases (Ferranti charging removed)\n\nWHY CORRECT:\nThis is a Diagram+Application item in Electrical Machines (Diagram+Application). The keyed choice “Decreases (Ferranti charging removed)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dep PASS (open Rx end & long line on fig)\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Increases always” — exam-level wrong path for “Diagram+Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “Unchanged always” — exam-level wrong path for “Diagram+Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) (correct)\nD) “Becomes zero always” — exam-level wrong path for “Diagram+Application”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Alternator regulation: Ef phasor = V + Ia(Ra + jXs); lagging → Ef > V usually.\n• Leading pf can give negative regulation (Ef < V possible).\n• Sync motor V-curves: Ia vs If at constant power — under/over excitation.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/electrical-flt01/q22-ferranti-line.svg"
  },
  {
    "id": 23,
    "subject": "Electrical Machines",
    "topic": "Conceptual",
    "question": "V-curves of a synchronous motor at constant mechanical power plot:",
    "image": "",
    "options": [
      "V vs I armature short only",
      "Efficiency vs load always flat",
      "Ia vs If for constant power",
      "T vs speed"
    ],
    "answer": 2,
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
    "question": "A single-phase transformer has leakage reactance 0.05 pu and resistance 0.01 pu. Voltage regulation at full load 0.8 lagging is closest to (pu):",
    "image": "",
    "options": [
      "0.05",
      "0.01",
      "0.06",
      "0.038"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 0.038\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 25,
    "subject": "Electrical Machines",
    "topic": "Conceptual+Numerical",
    "question": "For a BJT used as a switch, saturation implies:",
    "image": "",
    "options": [
      "Both junctions forward-biased; VCE,sat small",
      "Only collector-base reverse forever",
      "β always equals manufacturer max",
      "IC independent of IB in active region only labeled sat"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual+Numerical",
    "formula": "",
    "explanation": "CORRECT: Both junctions forward-biased; VCE,sat small\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 26,
    "subject": "Electrical Machines",
    "topic": "Practical",
    "question": "An ideal op-amp integrator with R=10 kΩ, C=0.1 µF has input −1 V step. Output ramp slope (V/s) magnitude is:",
    "image": "",
    "options": [
      "100",
      "1000",
      "10",
      "1"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Practical",
    "formula": "",
    "explanation": "CORRECT: 1000\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 27,
    "subject": "Electrical Machines",
    "topic": "Application",
    "question": "In a full-wave controlled rectifier with R-load, firing delay α increases. Average output:",
    "image": "",
    "options": [
      "Independent of α",
      "Becomes AC with zero mean always",
      "Decreases as (1+cosα)/2 factor",
      "Increases linearly with α"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Decreases as (1+cosα)/2 factor\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 28,
    "subject": "Electric Circuits",
    "topic": "Conceptual",
    "question": "At series RLC resonance with a sinusoidal source:",
    "image": "",
    "options": [
      "Z is maximum and current is minimum",
      "Current is always zero",
      "VC is always in phase with Vin and ≤ Vin",
      "Z ≈ R (minimum) and |VC|,|VL| can exceed |Vin|"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Z ≈ R (minimum) and |VC|,|VL| can exceed |Vin|\n\nWHY CORRECT:\nThis is a Conceptual item in Electric Circuits (Conceptual). The keyed choice “Can exceed Vin and is 90° to Vin” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electric Circuits principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Always 0” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Always in phase and ≤Vin” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Always infinite resistance” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Series resonance: Z min ≈ R, I max; VC and VL can exceed Vin (Q magnification).\n• Two-wattmeter pf: tan φ = √3 (W1−W2)/(W1+W2).\n• Max power transfer: RL = Rs (DC) or RL = Rs* (AC conjugate).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 29,
    "subject": "Electric Circuits",
    "topic": "Conceptual",
    "question": "Two-port Z-parameters: if Z11=Z22=3 Ω, Z12=Z21=1 Ω, input impedance with 2 Ω load is:",
    "image": "",
    "options": [
      "2.67 Ω",
      "3 Ω",
      "4 Ω",
      "1 Ω"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 2.67 Ω\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 30,
    "subject": "Electric Circuits",
    "topic": "Parallel-plate capacitor with partial dielectric",
    "question": "C0 is the air capacitance of the parallel-plate capacitor in Fig (a). If half the gap is filled as in Fig (b) with dielectric permittivity εr (side-by-side halves between the plates), the modified capacitance is:",
    "image": "images/diagrams/electrical-flt01/q30-cap-dielectric.svg",
    "options": [
      "(C0/2) εr",
      "(C0/2)(1 + εr)",
      "C0 (1 + εr)",
      "C0 + εr"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Diagram+Numerical",
    "formula": "C = (C0/2)(1+εr) for side-by-side half fill",
    "explanation": "CORRECT: (C0/2)(1 + εr)\n\nWHY CORRECT:\nFig (b) places two capacitors in parallel: air half (C0/2) and dielectric half (εr C0/2). Hence C = (C0/2)(1+εr). Series stacking would give a different formula — read the figure.\n\nCALCULATION:\nC_air = C0/2; C_d = εr C0/2; parallel ⇒ C = (C0/2)(1+εr).\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) Dimensionally/structurally wrong mix of C0 and εr.\nB) Keeps only dielectric half — forgets air half in parallel.\nC) (correct)\nD) Treats full plate as dielectric or wrong parallel factor.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Parallel vs series dielectric fill is a classic trap — figure decides.\n• C0 definition is air-only reference capacitance.\n• Always redraw Fig (b) as two capacitors before writing C.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/electrical-flt01/q30-cap-dielectric.svg"
  },
  {
    "id": 31,
    "subject": "Electric Circuits",
    "topic": "Numerical",
    "question": "A series R=10 Ω, L=0.1 H, C=100 µF circuit is driven at 50 Hz. Whether the current leads or lags Vin is decided by comparing ω with:",
    "image": "",
    "options": [
      "Always lags for any RLC",
      "Only C value ignoring L",
      "1/√(LC) — here ω < ω0 so current leads (capacitive)",
      "R only"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 1/√(LC) — here ω < ω0 so current leads (capacitive)\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 32,
    "subject": "Electric Circuits",
    "topic": "Two-port T-section",
    "question": "The two-port network shown has series arms Z1 and Z2 with a single shunt Z3 to the common return. It is best classified as:",
    "image": "images/diagrams/electrical-flt01/q32-t-section.svg",
    "options": [
      "π-section (two shunts, one series)",
      "Lattice section with crossed arms",
      "Symmetrical T only if Z1 = Z2; otherwise unsymmetrical T",
      "Only a series RLC tank"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Diagram+Conceptual",
    "formula": "Two-port T / π / lattice topologies",
    "explanation": "CORRECT: Symmetrical T only if Z1 = Z2; otherwise unsymmetrical T\n\nWHY CORRECT:\nA T-section has two series arms and one shunt to common return. Symmetry requires Z1 = Z2; unequal series arms make it an unsymmetrical T.\n\nCALCULATION:\nTopology ID from schematic — not a numerical.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) π has two shunts.\nB) Lattice has crossed arms.\nC) Incomplete / wrong exclusive claim.\nD) (correct)\n\nTOPIC HIGH-YIELD:\n• T vs π vs lattice\n• Symmetry ↔ equal series arms",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/electrical-flt01/q32-t-section.svg"
  },
  {
    "id": 33,
    "subject": "Electric Circuits",
    "topic": "Graph+Diagram",
    "question": "From the frequency-response plot shown (pass band in the middle with stop bands on both sides), the filter type is:",
    "image": "images/diagrams/electrical-flt01/q33-filter-types.svg",
    "options": [
      "Band-pass",
      "High-pass",
      "Band-elimination",
      "Low-pass"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Graph+Diagram",
    "formula": "",
    "explanation": "CORRECT: Band-pass\n\nWHY CORRECT:\nThis is a Graph+Diagram item in Electric Circuits (Graph+Diagram). The keyed choice “Band-pass” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electric Circuits principle for “Graph+Diagram”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Low-pass” — exam-level wrong path for “Graph+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “High-pass” — exam-level wrong path for “Graph+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Band-elimination” — exam-level wrong path for “Graph+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Series resonance: Z min ≈ R, I max; VC and VL can exceed Vin (Q magnification).\n• Two-wattmeter pf: tan φ = √3 (W1−W2)/(W1+W2).\n• Max power transfer: RL = Rs (DC) or RL = Rs* (AC conjugate).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/electrical-flt01/q33-filter-types.svg"
  },
  {
    "id": 34,
    "subject": "Electric Circuits",
    "topic": "Numerical",
    "question": "Nyquist stability for open-loop stable plant: closed-loop stable iff N encirclements of −1 are:",
    "image": "",
    "options": [
      "Equal to open-loop poles in RHP",
      "0",
      "1 clockwise",
      "∞"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 0\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 35,
    "subject": "Electric Circuits",
    "topic": "Conceptual",
    "question": "G(s)=K/(s(s+2)(s+8)). Using Routh, the range of K for stability is:",
    "image": "",
    "options": [
      "K < 0",
      "All K > 0",
      "0 < K < 160",
      "K > 160"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 0 < K < 160\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 36,
    "subject": "Electric Circuits",
    "topic": "Numerical",
    "question": "Phase margin is measured at the frequency where:",
    "image": "",
    "options": [
      "∠G = −180° only",
      "ω → 0",
      "Real(G)=0 always",
      "|G(jω)H(jω)| = 1 (0 dB crossover)"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: |G(jω)H(jω)| = 1 (0 dB crossover)\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 37,
    "subject": "Electric Circuits",
    "topic": "Practical",
    "question": "For G(s)=10/(s+1)^3, gain crossover is near ω where |G|=1. Approximate phase at that ω (deg) is closest to:",
    "image": "",
    "options": [
      "−135",
      "−90",
      "−180",
      "0"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Practical",
    "formula": "",
    "explanation": "CORRECT: −135\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 38,
    "subject": "Electric Circuits",
    "topic": "AR",
    "question": "Derivative control (PD) primarily improves:",
    "image": "",
    "options": [
      "Removes all sensor noise beneficially",
      "Transient damping / reduces overshoot tendency",
      "Eliminates steady-state error to ramp alone always",
      "Increases type number by 2"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "AR",
    "formula": "",
    "explanation": "CORRECT: Transient damping / reduces overshoot tendency\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 39,
    "subject": "Control Systems",
    "topic": "Conceptual",
    "question": "A Type-1 unity-feedback system has ess to a unit step of:",
    "image": "",
    "options": [
      "1/K always",
      "Unstable always",
      "0",
      "∞"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 0\n\nWHY CORRECT:\nThis is a Conceptual item in Control Systems (Conceptual). The keyed choice “0” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Control Systems principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “Infinite” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “1/K always only” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Unstable always” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Type-1 system: ess to step = 0; ramp error = 1/Kv.\n• RHP zero → inverse response / initial undershoot.\n• Settling: ts(2%) ≈ 4/σω, ts(5%) ≈ 3/σω.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 40,
    "subject": "Control Systems",
    "topic": "Numerical",
    "question": "State equation ẋ = Ax + Bu with A = [[0,1],[-2,-3]]. Eigenvalues of A are:",
    "image": "",
    "options": [
      "1, 2",
      "−2±j",
      "0, −3",
      "−1, −2"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: −1, −2\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 41,
    "subject": "Control Systems",
    "topic": "Diagram+Numerical",
    "question": "For the closed-loop system shown, the transfer function E(s)/R(s) is:",
    "image": "images/diagrams/electrical-flt01/q41-block-diagram.svg",
    "options": [
      "1/(1+GH)",
      "1/(1+G)",
      "G/(1+GH)",
      "GH/(1+GH)"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Diagram+Conceptual",
    "formula": "E/R = 1/(1+GH)",
    "explanation": "CORRECT: 1/(1+GH)\n\nWHY CORRECT:\nE = R − H C and C = G E ⇒ E = R − HG E ⇒ E/R = 1/(1+GH) for negative unity feedback structure shown.\n\nCALCULATION:\nE = R − HC; C = GE → E(1+GH)=R → E/R=1/(1+GH).\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) That is C/R, not E/R — classic trap.\nB) Closed-loop complementary sensitivity form — not E/R.\nC) (correct)\nD) Drops H — only if H=1 still wrong form vs options.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Always check whether the stem asks C/R or E/R.\n• Unity feedback: E/R = 1/(1+G) when H=1.\n• Read the block labels on the figure — do not assume H=1 if H is drawn.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/electrical-flt01/q41-block-diagram.svg"
  },
  {
    "id": 42,
    "subject": "Control Systems",
    "topic": "Application",
    "question": "A buck converter Vin=48 V, D=0.4, continuous conduction, ideal. Vout is:",
    "image": "",
    "options": [
      "12 V",
      "19.2 V",
      "48 V",
      "120 V"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: 19.2 V\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 43,
    "subject": "Control Systems",
    "topic": "Conceptual",
    "question": "In a single-phase fully controlled bridge with constant current Id, input PF is:",
    "image": "",
    "options": [
      "sinα only",
      "Independent of α",
      "cosα (displacement) for continuous Id ideal case",
      "Always unity"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: cosα (displacement) for continuous Id ideal case\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 44,
    "subject": "Control Systems",
    "topic": "Graph+Diagram",
    "question": "The Bode magnitude of a first-order stable system is constant vs frequency; high-frequency phase asymptote is −180°. The system has:",
    "image": "images/diagrams/electrical-flt01/q44-bode-allpass.svg",
    "options": [
      "LHP pole+LHP zero same f",
      "Two LHP poles + RHP zero",
      "Two RHP poles + LHP zero",
      "One LHP pole and one RHP zero at same frequency"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Graph+Diagram",
    "formula": "",
    "explanation": "CORRECT: One LHP pole and one RHP zero at same frequency\n\nWHY CORRECT:\nThis is a Graph+Diagram item in Control Systems (Graph+Diagram). The keyed choice “One LHP pole and one RHP zero at same frequency” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dep PASS (PYQ figure)\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Dep PASS (PYQ figure)\nVerify units/pu bases and that the arithmetic lands on the keyed option “One LHP pole and one RHP zero at same frequency” (Gate C).\nFinal keyed result: One LHP pole and one RHP zero at same frequency\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “LHP pole+LHP zero same f” — exam-level wrong path for “Graph+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Two LHP poles + RHP zero” — exam-level wrong path for “Graph+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Two RHP poles + LHP zero” — exam-level wrong path for “Graph+Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Type-1 system: ess to step = 0; ramp error = 1/Kv.\n• RHP zero → inverse response / initial undershoot.\n• Settling: ts(2%) ≈ 4/σω, ts(5%) ≈ 3/σω.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/electrical-flt01/q44-bode-allpass.svg"
  },
  {
    "id": 45,
    "subject": "Control Systems",
    "topic": "Standard+Numerical",
    "question": "IGBT vs power MOSFET at high voltage (>600 V) conduction: IGBT is preferred mainly because:",
    "image": "",
    "options": [
      "Lower conduction drop via conductivity modulation",
      "Faster than MOSFET always at every voltage",
      "No gate drive needed",
      "It is a current-controlled BJT only"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Standard+Numerical",
    "formula": "",
    "explanation": "CORRECT: Lower conduction drop via conductivity modulation\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 46,
    "subject": "Control Systems",
    "topic": "AR",
    "question": "In DCM of a boost converter, voltage conversion ratio vs D:",
    "image": "",
    "options": [
      "Independent of inductance",
      "Depends on load/R and is higher than CCM formula for same D",
      "Exactly 1/(1−D) always",
      "Equals D as buck"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "AR",
    "formula": "",
    "explanation": "CORRECT: Depends on load/R and is higher than CCM formula for same D\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 47,
    "subject": "Power Electronics & Drives",
    "topic": "Conceptual",
    "question": "An SCR turns off when which condition is met for sufficient time?",
    "image": "",
    "options": [
      "Gate pulse remains forever",
      "Only raising gate current",
      "Anode current falls below holding current",
      "Voltage zero is never needed in any circuit"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Anode current falls below holding current\n\nWHY CORRECT:\nThis is a Conceptual item in Power Electronics & Drives (Conceptual). The keyed choice “Anode current < holding current for sufficient time” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Electronics & Drives principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) Non-engineering distractor (“Gate pulse forever”). Real papers trap candidates on technical slips in Power Electronics & Drives — flag option for MODIFY rewrite.\nB) “Only by raising gate” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Voltage zero never needed” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 48,
    "subject": "Power Electronics & Drives",
    "topic": "Diagram",
    "question": "Single-phase semi-converter, α=30°, RL load — correct Vo waveform is the one that:",
    "image": "images/diagrams/electrical-flt01/q48-semi-waveforms.svg",
    "options": [
      "Full negative sine",
      "Always flat DC at Vm",
      "Triangular only",
      "Stays non-negative with delayed conduction each half-cycle (option C on source page)"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Diagram",
    "formula": "",
    "explanation": "CORRECT: Stays non-negative with delayed conduction each half-cycle (option C on source page)\n\nWHY CORRECT:\nThis is a Diagram item in Power Electronics & Drives (Diagram). The keyed choice “Stays non-negative with delayed conduction each half-cycle (option C on source page)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dep PASS — pick from waveform options on page crop.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Dep PASS — pick from waveform options on page crop.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Stays non-negative with delayed conduction each half-cycle (option C on source page)” (Gate C).\nFinal keyed result: Stays non-negative with delayed conduction each half-cycle (option C on source page)\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Full negative sine” — exam-level wrong path for “Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Always flat DC at Vm” — exam-level wrong path for “Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Triangular only” — exam-level wrong path for “Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/electrical-flt01/q48-semi-waveforms.svg"
  },
  {
    "id": 49,
    "subject": "Power Electronics & Drives",
    "topic": "Numerical",
    "question": "A PMMC meter reads average of |i| for full-wave rectified current. For pure sine peak Im, reading proportional to:",
    "image": "",
    "options": [
      "2Im/π",
      "Im/√2",
      "Im",
      "Im/π"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 2Im/π\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 50,
    "subject": "Power Electronics & Drives",
    "topic": "Numerical",
    "question": "Maxwell’s inductance bridge is particularly suitable when unknown is:",
    "image": "",
    "options": [
      "Very high Q only — Hay never used",
      "Medium-Q coil (compared with Hay for high-Q)",
      "Only pure resistance",
      "Only capacitance standards alone"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: Medium-Q coil (compared with Hay for high-Q)\n\nWHY CORRECT:\nExam-level multi-concept item; apply definitions carefully — not a one-line recall.\n\nCALCULATION:\nUse standard GATE/ESE formula chain for this micro-topic; check units and base.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA–D) Common distractors swap bases, neglect sequence connection rules, or misuse SIL∝V².\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• Same micro-topic appears repeatedly in AEE/GATE — practice numerical variants.\n• Always state assumptions (lossless, continuous conduction, rated burden).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 51,
    "subject": "Power Electronics & Drives",
    "topic": "Diagram+Application",
    "question": "For the single-phase controlled converter / RLE waveform figure shown, the allowable firing angle α must lie between:",
    "image": "images/diagrams/electrical-flt01/q51-rle-angles.svg",
    "options": [
      "θ2 and 360 only",
      "Anywhere",
      "θ1 and θ2",
      "0 and θ1 only"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Diagram+Application",
    "formula": "",
    "explanation": "CORRECT: θ1 and θ2\n\nWHY CORRECT:\nThis is a Diagram+Application item in Power Electronics & Drives (Diagram+Application). The keyed choice “θ1 and θ2” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Electronics & Drives principle for “Diagram+Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “0 and θ1 only” — exam-level wrong path for “Diagram+Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) “θ2 and 360 only” — exam-level wrong path for “Diagram+Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Anywhere” — exam-level wrong path for “Diagram+Application”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) (correct)\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/electrical-flt01/q51-rle-angles.svg"
  },
  {
    "id": 52,
    "subject": "Power Electronics & Drives",
    "topic": "Application",
    "question": "Fully controlled bridge feeding DC motor; α=120° (continuous current) means:",
    "image": "",
    "options": [
      "Always motoring positive Vo",
      "Device open always",
      "α invalid always",
      "Inverting / regenerative possible (Vo negative average)"
    ],
    "answer": 3,
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
      "Cooling path, switching freq, load current, gate drive",
      "Raise ambient on purpose",
      "Remove snubber always",
      "Ignore heatsink"
    ],
    "answer": 0,
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
      "Kelvin",
      "Maxwell bridge",
      "Wien",
      "Schering"
    ],
    "answer": 1,
    "difficulty": "Medium",
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
      "3 Ω",
      "300 Ω ±90",
      "30 Ω ±0.9 Ω class",
      "3000 Ω"
    ],
    "answer": 2,
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
    "question": "From the CRO block diagram shown, the vertical input reaches the CRT vertical plates mainly via:",
    "image": "images/diagrams/electrical-flt01/q56-cro-blocks.svg",
    "options": [
      "Time-base only",
      "Blanking only",
      "Horizontal amp only",
      "Attenuator → vertical amp → (delay) → vertical plates"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Diagram",
    "formula": "",
    "explanation": "CORRECT: Attenuator → vertical amp → (delay) → vertical plates\n\nWHY CORRECT:\nThis is a Diagram item in Electrical Measurements (Diagram). The keyed choice “Attenuator → vertical amp → (delay) → vertical plates” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Measurements principle for “Diagram”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “Time-base only” — exam-level wrong path for “Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “Blanking only” — exam-level wrong path for “Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “Horizontal amp only” — exam-level wrong path for “Diagram”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/electrical-flt01/q56-cro-blocks.svg"
  },
  {
    "id": 57,
    "subject": "Electrical Measurements",
    "topic": "Numerical",
    "question": "CT 100/5, burden 15 VA. Secondary current rated 5 A. Rated burden impedance ≈",
    "image": "",
    "options": [
      "0.6 Ω",
      "15 Ω",
      "100 Ω",
      "3 Ω"
    ],
    "answer": 0,
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
      "Capacitance only",
      "Very low resistance",
      "Frequency only",
      "Very high MΩ only"
    ],
    "answer": 1,
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
      "Increases coil R always for higher I",
      "Open coil",
      "Most current bypasses meter movement",
      "Series multiplies current in coil"
    ],
    "answer": 2,
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
      "Zero, zero",
      "1, 0",
      "Finite fixed always 10",
      "Infinite, infinite"
    ],
    "answer": 3,
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
    "question": "With Vs, Rz, Vz as labelled on the figure, diode current Iz is closest to:",
    "image": "images/diagrams/electrical-flt01/q61-zener-iz.svg",
    "options": [
      "2 mA",
      "10 mA",
      "0 mA",
      "5 mA"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Diagram+Numerical",
    "formula": "",
    "explanation": "CORRECT: 2 mA\n\nWHY CORRECT:\nThis is a Diagram+Numerical item in Analog Electronics (Diagram+Numerical). The keyed choice “2 mA” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Iz from crop labels (GATE-style worked key ≈ 2 mA). Dep PASS/STRONG.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Iz from crop labels (GATE-style worked key ≈ 2 mA). Dep PASS/STRONG.\nVerify units/pu bases and that the arithmetic lands on the keyed option “2 mA” (Gate C).\nFinal keyed result: 2 mA\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) “5 mA” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nB) (correct)\nC) “10 mA” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “0 mA” — exam-level wrong path for “Diagram+Numerical”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/electrical-flt01/q61-zener-iz.svg"
  },
  {
    "id": 62,
    "subject": "Analog Electronics",
    "topic": "Diagram+Numerical",
    "question": "230 V / 50-0-50 secondary; PRV on D1/D2 ≈",
    "image": "",
    "options": [
      "50√2",
      "100√2 V",
      "100 V",
      "50 V"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Numerical",
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
      "A true R false",
      "A false R true",
      "Both; R explains",
      "Both; R not"
    ],
    "answer": 2,
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
      "A′·B′",
      "A+B",
      "A·B",
      "A′+B′"
    ],
    "answer": 3,
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
      "P-NAND, Q-NOR, R-XOR, S-AND",
      "P-XOR, Q-AND, R-NAND, S-NOR",
      "P-AND, Q-XOR, R-NOR, S-NAND",
      "P-NOR, Q-NAND, R-AND, S-XOR"
    ],
    "answer": 0,
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
    },
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/electrical-flt01/q65-logic-match.svg"
  },
  {
    "id": 66,
    "subject": "Digital Electronics",
    "topic": "Numerical",
    "question": "2-bit up-counter clocked; after 5 clocks from 00, state:",
    "image": "",
    "options": [
      "10",
      "01",
      "11",
      "00"
    ],
    "answer": 1,
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
      "Only transformer magnetising",
      "Only skin effect",
      "Gravity + resistance + acceleration force",
      "Only corona"
    ],
    "answer": 2,
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
      "200",
      "250",
      "160",
      "128 W"
    ],
    "answer": 3,
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
      "Ward–Leonard / 4Q converter drive",
      "Fixed 1φ dimmer only",
      "Open-loop heater",
      "Soft starter only DOL forever"
    ],
    "answer": 0,
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
      "volt-ampere only",
      "tonne-km",
      "km only",
      "tonne only"
    ],
    "answer": 1,
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
      "70",
      "45",
      "63",
      "54"
    ],
    "answer": 2,
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
      "₹800",
      "₹400",
      "₹840",
      "₹820"
    ],
    "answer": 3,
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
      "56",
      "48",
      "60",
      "40"
    ],
    "answer": 0,
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
      "23",
      "21",
      "24",
      "22"
    ],
    "answer": 1,
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
      "5 s",
      "6 s",
      "4.5 s",
      "3.5 s"
    ],
    "answer": 2,
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
      "2/5",
      "1",
      "3/4",
      "5/2"
    ],
    "answer": 3,
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
      "6",
      "7.5",
      "8",
      "5"
    ],
    "answer": 0,
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
      "15",
      "10",
      "8",
      "5"
    ],
    "answer": 1,
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
      "NITI Aayog",
      "CAG",
      "Election Commission of India",
      "Supreme Court"
    ],
    "answer": 2,
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
      "Ampere",
      "Volt",
      "Ohm",
      "Coulomb"
    ],
    "answer": 3,
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
      "Intra-state power transmission",
      "Commercial banking",
      "Telecom spectrum auction",
      "Retail milk distribution"
    ],
    "answer": 0,
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
      "Maritime piracy",
      "Ozone-depleting substances",
      "WTO tariffs only",
      "Nuclear non-proliferation"
    ],
    "answer": 1,
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
      "Godavari",
      "Krishna",
      "Mahanadi",
      "Narmada"
    ],
    "answer": 2,
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
      "Directive Principles only",
      "Emergency provisions",
      "Official language schedule only",
      "Fundamental Duties"
    ],
    "answer": 3,
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
      "Monetary policy / currency issuer",
      "Income-tax assessment",
      "Railway freight tariffs",
      "Conducting Lok Sabha polls"
    ],
    "answer": 0,
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
      "32",
      "35",
      "36",
      "33"
    ],
    "answer": 1,
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
      "Square",
      "Rhombus",
      "Sphere",
      "Rectangle"
    ],
    "answer": 2,
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
      "36",
      "35",
      "38",
      "37"
    ],
    "answer": 3,
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
      "Maternal uncle",
      "Cousin",
      "Brother",
      "Father"
    ],
    "answer": 0,
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
      "9:20",
      "8:20",
      "8:40",
      "7:20"
    ],
    "answer": 1,
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
      "Rough",
      "Loose",
      "Exact",
      "Vague"
    ],
    "answer": 2,
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
      "Enlarge",
      "Inflate",
      "Widen",
      "Contract"
    ],
    "answer": 3,
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
      "Accommodate",
      "Acommodate",
      "Acomodate",
      "Accomodate"
    ],
    "answer": 0,
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
      "on",
      "at",
      "over",
      "in"
    ],
    "answer": 1,
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
      "Philatelist",
      "Cartographer",
      "Bibliophile",
      "Bibliophobe"
    ],
    "answer": 2,
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
      "RAM",
      "Cache only",
      "CPU registers only",
      "HDD / SSD (secondary storage)"
    ],
    "answer": 3,
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
      "TLS/SSL encryption",
      "Faster DNS only",
      "Larger MTU only",
      "Compression only"
    ],
    "answer": 0,
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
      "Circular ref only",
      "Absolute ref with $ (e.g. $A$1)",
      "Array formula only",
      "Relative ref only"
    ],
    "answer": 1,
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
      "Increase RAM size",
      "Defragment disks",
      "Steal credentials via deceptive messages",
      "Cool the CPU"
    ],
    "answer": 2,
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
      "64 bits",
      "128 bits",
      "16 bits",
      "32 bits"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 32 bits\n\nWHY CORRECT:\nThis is a Conceptual item in Computer Awareness (Conceptual). The keyed choice “32 bits” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Computer Awareness principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION: N/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (exam-level only — no LKG jokes):\nA) (correct)\nB) “64 bits” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nC) “128 bits” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\nD) “16 bits” — exam-level wrong path for “Conceptual”: applies a neighbouring formula/definition that does not satisfy this stem.\n\nTOPIC HIGH-YIELD (same micro-topic — high exam probability):\n• CT secondary must never be open on load — dangerous voltage.\n• Wattmeter / energy meter connection polarity and phase sequence traps are classic.\n• CRO / bridge questions test sensitivity and null conditions.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  }
];
