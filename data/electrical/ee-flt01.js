// Electrical Engineering FLT-01 — APTRANSCO AEE CBT
// Technical Q1–70: EE bank
// Shared Non-core Q71–100: identical to Civil FLT-01 (MASTER P0)
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
    "topic": "Quant: time-work (maintenance crew)",
    "question": "A line-maintenance crew can complete a scheduled feeder-bay overhaul in 12 days. After 3 days of work by this single crew, two more identical crews join. How many more days are required to finish the remaining work?",
    "image": "",
    "options": [
      "2 days",
      "3 days",
      "4 days",
      "6 days"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "t_rem = W_rem / (n/T)",
    "explanation": "CORRECT: 3 days\n\nWHY CORRECT:\nOne crew’s rate = 1/12 per day. Work done in 3 days = 3/12 = 1/4. Remaining = 3/4. Three crews rate = 3/12 = 1/4 per day. Days more = (3/4)/(1/4) = 3.\n\nCALCULATION: Rate₁=1/12; done=3/12=1/4; left=3/4; rate₃=3/12=1/4; t=(3/4)/(1/4)=3 days.\n\nTRAP ANALYSIS:\nA) Treats remaining as 1/2. C) Uses total days from start as “more days”. D) Uses one-crew rate on remaining.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Work = rate × time; remaining = 1 − work done; combined rate = n/T for n identical crews.\n• REMEMBER: After partial work, recompute remaining before applying joined rate.\n• ALSO ASKED FROM THIS TOPIC: Efficiency increase mid-job; A+B together finish in n days; pipes fill/empty.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 72,
    "subject": "Quantitative Aptitude",
    "topic": "Quant: percentage (estimate revision)",
    "question": "A transmission-estimate package rises from ₹8.0 crore to ₹9.2 crore after a design revision. The percentage increase is:",
    "image": "",
    "options": [
      "12%",
      "15%",
      "18%",
      "20%"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "%inc=(Δ/base)×100",
    "explanation": "CORRECT: 15%\n\nWHY CORRECT:\nIncrease = 1.2 on base 8.0 → (1.2/8)×100 = 15%.\n\nCALCULATION: % increase = (9.2−8.0)/8.0 × 100 = 1.2/8 × 100 = 15%.\n\nTRAP ANALYSIS:\nA) Uses 1.2/10. C) (1.2/6.67). D) Treats absolute 1.2 crore as 20% of 6.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: % change = (new−old)/old × 100.\n• REMEMBER: Always divide by the original base, not the new value.\n• ALSO ASKED FROM THIS TOPIC: Successive % changes; % profit on cost; reverse % (what was original).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 73,
    "subject": "Quantitative Aptitude",
    "topic": "Quant: ratio (conductor alloy)",
    "question": "An overhead-conductor alloy sample contains aluminium and steel by weight in the ratio 5:2 and weighs 28 kg. How much aluminium (kg) must be added to make the ratio 4:1?",
    "image": "",
    "options": [
      "7",
      "8",
      "10",
      "12"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "(A+x):S = m:n",
    "explanation": "CORRECT: 12\n\nWHY CORRECT:\nInitially Al:Steel = 5:2 of 28 kg → Al=20, Steel=8. Add x kg Al: (20+x)/8 = 4/1 → 20+x = 32 → x = 12 kg.\n\nCALCULATION: Al=5/7×28=20; St=8; (20+x)/8=4 ⇒ x=12.\n\nTRAP ANALYSIS:\nA/B) Mis-split 28 kg. C) Solves for 3:1 or average.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: (A+x):S = required ratio; S unchanged if only A added.\n• REMEMBER: Convert ratio to absolute masses before adding.\n• ALSO ASKED FROM THIS TOPIC: Alligation; removal problems; three-component mixtures.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 74,
    "subject": "Quantitative Aptitude",
    "topic": "Quant: average (monthly energy)",
    "question": "Monthly energy sent-out readings (MU) for four months are 42, 38, 45 and 39. The average monthly sent-out is:",
    "image": "",
    "options": [
      "40 MU",
      "41 MU",
      "42 MU",
      "43 MU"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "avg=Σx/n",
    "explanation": "CORRECT: 41 MU\n\nWHY CORRECT:\nSum = 42+38+45+39 = 164; average = 164/4 = 41 MU.\n\nCALCULATION: 164/4 = 41.\n\nTRAP ANALYSIS:\nA) Floors down. C) Uses median-ish 42. D) Adds wrongly.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Average = Σxᵢ / n.\n• REMEMBER: Check sum before dividing; units stay MU.\n• ALSO ASKED FROM THIS TOPIC: Weighted average; moving average; % deviation from mean.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 75,
    "subject": "Quantitative Aptitude",
    "topic": "Quant: speed-distance (patrol)",
    "question": "A patrol vehicle covers 120 km to a substation at 40 km/h and returns by the same route at 60 km/h. Its average speed for the round trip is:",
    "image": "",
    "options": [
      "48 km/h",
      "50 km/h",
      "52 km/h",
      "45 km/h"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "v_avg=2ab/(a+b)",
    "explanation": "CORRECT: 48 km/h\n\nWHY CORRECT:\nEqual distances: harmonic mean. Average = 2ab/(a+b) = 2×40×60/(100) = 48 km/h.\n\nCALCULATION: t₁=120/40=3 h; t₂=120/60=2 h; total dist=240; total t=5; v=240/5=48.\n\nTRAP ANALYSIS:\nB) Arithmetic mean of 40 and 60. C/D) Wrong harmonic setup.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: For equal distances: v_avg = 2ab/(a+b).\n• REMEMBER: Never average the two speeds arithmetically for round trip on same route.\n• ALSO ASKED FROM THIS TOPIC: With stoppage time; three-leg journey; upstream/downstream.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 76,
    "subject": "Quantitative Aptitude",
    "topic": "Quant: SI (project mobilisation)",
    "question": "A mobilisation advance of ₹5,00,000 is charged simple interest at 12% per annum for 8 months. The interest amount is:",
    "image": "",
    "options": [
      "₹30,000",
      "₹40,000",
      "₹48,000",
      "₹50,000"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "SI=PRT/100",
    "explanation": "CORRECT: ₹40,000\n\nWHY CORRECT:\nSI = P×R×T/100 with T=8/12 year → 500000×12×(8/12)/100 = 500000×0.08 = 40,000.\n\nCALCULATION: SI=500000×12×8/(100×12)=40,000.\n\nTRAP ANALYSIS:\nA) Uses 6%. C) Uses T=1 year on 12% of 4L. D) 10% of principal.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: SI=PRT/100; months → years as m/12.\n• REMEMBER: Distinguish SI vs CI; rate is annual unless stated.\n• ALSO ASKED FROM THIS TOPIC: CI for 2 years; difference CI−SI; banker’s discount.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 77,
    "subject": "Quantitative Aptitude",
    "topic": "Quant: profit-loss (contract)",
    "question": "A contractor’s quoted cost for a bay package is ₹12 lakh. He allows 10% discount on the quote and still makes 20% profit on cost. His cost price is closest to:",
    "image": "",
    "options": [
      "₹8.0 lakh",
      "₹9.0 lakh",
      "₹10.0 lakh",
      "₹11.0 lakh"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "CP=SP/(1+p)",
    "explanation": "CORRECT: ₹9.0 lakh\n\nWHY CORRECT:\nSP after 10% discount = 0.9×12 = 10.8 lakh. If profit 20% on CP: SP=1.2 CP → CP=10.8/1.2=9.0 lakh.\n\nCALCULATION: SP=0.9×12=10.8; CP=10.8/1.2=9.\n\nTRAP ANALYSIS:\nA) Uses 25% profit. C) Ignores discount. D) Uses quote as CP.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: SP = quote×(1−d); SP = CP×(1+p); eliminate SP.\n• REMEMBER: Discount is on quoted/marked price; profit is on cost.\n• ALSO ASKED FROM THIS TOPIC: Two successive discounts; false weight; marked-price finding.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 78,
    "subject": "Quantitative Aptitude",
    "topic": "Quant: number system (LCM outage window)",
    "question": "Three inspection cycles repeat every 4, 6 and 8 days. If all three fall on the same day today, they next coincide after how many days?",
    "image": "",
    "options": [
      "12",
      "18",
      "24",
      "48"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "LCM by primes",
    "explanation": "CORRECT: 24\n\nWHY CORRECT:\nLCM(4,6,8)=24.\n\nCALCULATION: 4=2²; 6=2×3; 8=2³ → LCM=2³×3=24.\n\nTRAP ANALYSIS:\nA) GCD mix-up. B) LCM(6,9)-style. D) Product without reducing.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: LCM via prime factors; coincidence period = LCM of cycle lengths.\n• REMEMBER: LCM ≥ each number; for 2 numbers LCM=a×b/GCD.\n• ALSO ASKED FROM THIS TOPIC: HCF word problems; bells toll together; traffic lights.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 79,
    "subject": "General Awareness",
    "topic": "GA: CA-AP power transmission",
    "question": "As per 2026 state energy reviews reported in the press, Andhra Pradesh planned commissioning of about two dozen APTRANSCO transmission projects in the June–December 2026 window with an aggregate order-of-magnitude investment near:",
    "image": "",
    "options": [
      "₹350 crore",
      "₹3,500 crore",
      "₹35,000 crore",
      "₹350,000 crore"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: ₹3,500 crore\n\nWHY CORRECT:\nOfficial/press briefings on AP transmission commissioning (2026) cite about 24 projects worth roughly ₹3,507 crore — closest to ₹3,500 crore.\n\nCALCULATION: N/A — current-affairs fact (order-of-magnitude).\n\nTRAP ANALYSIS:\nA) Off by 10× low. C/D) Off by 10×/100× high.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: CA facts: verify year, agency (APTRANSCO), and ₹ crore scale.\n• REMEMBER: Only one power-sector CA is intended in this FLT’s CA set.\n• ALSO ASKED FROM THIS TOPIC: Substation voltage class (400/220/132 kV); MVA addition; ckt-km lines.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 80,
    "subject": "General Awareness",
    "topic": "GA: CA-AP capital region",
    "question": "In 2025–26 public statements on Andhra Pradesh’s capital works, the state leadership indicated a target horizon around which year for completing major Amaravati capital-development works?",
    "image": "",
    "options": [
      "2024",
      "2026",
      "2028",
      "2035"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 2028\n\nWHY CORRECT:\nPress coverage of Amaravati revival works quotes a March 2028 completion horizon for major capital-development works.\n\nCALCULATION: N/A — current-affairs fact.\n\nTRAP ANALYSIS:\nA/B) Too early vs stated horizon. D) Confuses long-term RE/national plans.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: APCA/APCRDA capital works ≠ Transmission project lists.\n• REMEMBER: Separate capital-city infrastructure CA from power-utility CA.\n• ALSO ASKED FROM THIS TOPIC: Land pooling phases; APCRDA role; national-highway links to capital region.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 81,
    "subject": "General Awareness",
    "topic": "GA: CA-National digital payments",
    "question": "As per NPCI data widely reported for July 2026, UPI processed on the order of 23+ billion transactions in that month with transaction value near which landmark level?",
    "image": "",
    "options": [
      "About ₹3 lakh crore",
      "About ₹30 lakh crore",
      "About ₹300 lakh crore",
      "About ₹30,000 crore"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: About ₹30 lakh crore\n\nWHY CORRECT:\nJuly 2026 NPCI figures reported ~23.66 billion UPI transactions with value about ₹29.9 lakh crore — closest to ₹30 lakh crore.\n\nCALCULATION: N/A — current-affairs fact.\n\nTRAP ANALYSIS:\nA/D) Off by ~10×. C) Off by ~10× high.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: UPI volume vs value; NPCI publishes monthly stats.\n• REMEMBER: UPI ≠ NEFT/RTGS product UX; international UPI linkages are separate CA.\n• ALSO ASKED FROM THIS TOPIC: IMPS; CBDC pilots; QR interoperability.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 82,
    "subject": "General Awareness",
    "topic": "GA: CA-National space",
    "question": "India’s human spaceflight programme, aimed at sending Indian astronauts to low Earth orbit on an indigenous mission stack, is known as:",
    "image": "",
    "options": [
      "Chandrayaan",
      "Gaganyaan",
      "Aditya-L1",
      "NISAR"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Gaganyaan\n\nWHY CORRECT:\nGaganyaan is ISRO’s human spaceflight programme. Chandrayaan is lunar; Aditya-L1 is solar observatory; NISAR is Earth-observation (ISRO–NASA).\n\nCALCULATION: N/A — current/static CA.\n\nTRAP ANALYSIS:\nA/C/D) Wrong mission class.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Map mission name → destination/objective.\n• REMEMBER: Crew module vs launch vehicle roles; LEO vs lunar.\n• ALSO ASKED FROM THIS TOPIC: Chandrayaan-3 landing site themes; SSLV; Gaganyaan test flights.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 83,
    "subject": "General Awareness",
    "topic": "GA: polity (Money Bill)",
    "question": "Under the Constitution of India, a Money Bill can be introduced only in the Lok Sabha and requires whose prior recommendation?",
    "image": "",
    "options": [
      "Chief Justice of India",
      "President of India",
      "Speaker of the Lok Sabha only",
      "Chairman of the Rajya Sabha"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: President of India\n\nWHY CORRECT:\nArt. 117: Money Bill needs President’s recommendation for introduction; Speaker certifies Money Bill character.\n\nCALCULATION: N/A — polity.\n\nTRAP ANALYSIS:\nA) Judicial, not introduction. C) Certification ≠ prior recommendation to introduce. D) Rajya Sabha has limited Money Bill role.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Money Bill: introduction only in LS; President’s recommendation; Speaker’s certificate.\n• REMEMBER: Rajya Sabha can only recommend, not amend/reject finally within timelines.\n• ALSO ASKED FROM THIS TOPIC: Finance Bill vs Money Bill; Annual Financial Statement.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 84,
    "subject": "General Awareness",
    "topic": "GA: geography (AP)",
    "question": "Which of the following is the capital city of Andhra Pradesh (legislative/executive seat as currently designated for the state)?",
    "image": "",
    "options": [
      "Visakhapatnam",
      "Amaravati",
      "Tirupati",
      "Kurnool"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Amaravati\n\nWHY CORRECT:\nAndhra Pradesh’s planned/greenfield capital is Amaravati (capital-region development ongoing).\n\nCALCULATION: N/A — geography/GK.\n\nTRAP ANALYSIS:\nA) Major port city, not the designated capital project seat. C/D) Important cities, not the capital designation.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Distinguish economic hubs vs capital designation.\n• REMEMBER: AP capital debates are exam-sensitive — stick to officially stated capital-region name.\n• ALSO ASKED FROM THIS TOPIC: AP districts reorganisation; coastal vs Rayalaseema.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 85,
    "subject": "General Awareness",
    "topic": "GA: economy (RBI tool)",
    "question": "If the Reserve Bank of India raises the repo rate, other things equal, the intended near-term effect is generally to:",
    "image": "",
    "options": [
      "Make borrowing cheaper and boost demand",
      "Make policy borrowing costlier and cool demand-side pressure",
      "Directly fix retail petrol prices",
      "Abolish CRR"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Make policy borrowing costlier and cool demand-side pressure\n\nWHY CORRECT:\nHigher repo raises the policy rate corridor signal → costlier liquidity → tends to moderate demand/inflation pressures.\n\nCALCULATION: N/A — economy.\n\nTRAP ANALYSIS:\nA) Opposite of hike. C) Not RBI’s direct retail fuel mandate. D) Unrelated instrument.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Repo = rate at which RBI lends to banks against collateral.\n• REMEMBER: Hike → tighten; cut → ease. Pair with CRR/SLR/MSF basics.\n• ALSO ASKED FROM THIS TOPIC: CPI inflation targeting; transmission lags; standing deposit facility.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 86,
    "subject": "Reasoning & General Intelligence",
    "topic": "Reasoning: coding (station code)",
    "question": "In a certain code used in a mock dispatch sheet, each letter is shifted +1, −1, +1, −1… alternately. The code for BAY is:",
    "image": "",
    "options": [
      "CBX",
      "ABZ",
      "CBZ",
      "AAX"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: CBZ\n\nWHY CORRECT:\nB→C (+1), A→Z (−1 wraps? Standard exam often A−1=Z), Y→Z (+1) → CBZ. If A−1=Z: yes CBZ.\n\nCALCULATION: B+1=C; A−1=Z; Y+1=Z → CBZ.\n\nTRAP ANALYSIS:\nA) Y−1. B) No shift. D) Wrong wrap.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Alternate +1/−1 on successive letters; wrap A↔Z.\n• REMEMBER: Write positions 1–26 before shifting.\n• ALSO ASKED FROM THIS TOPIC: Reverse order coding; +2 constant shift; symbol coding.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 87,
    "subject": "Reasoning & General Intelligence",
    "topic": "Reasoning: scheduling (outage slots)",
    "question": "Five outage blocks P,Q,R,S,T are scheduled Monday–Friday, one per day. R is immediately after P; Q is before S; T is on Wednesday; P is not Monday. Which is the correct day for R?",
    "image": "",
    "options": [
      "Monday",
      "Tuesday",
      "Thursday",
      "Friday"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Friday\n\nWHY CORRECT:\nT=Wednesday. Consecutive P,R ⇒ possible (Mon–Tue), (Tue–Wed), (Thu–Fri). (Tue–Wed) hits T. P≠Monday eliminates (Mon–Tue). Hence P=Thursday, R=Friday. Remaining Mon/Tue for Q then S.\n\nCALCULATION: Enumerate consecutive slots; eliminate conflicts with T and P≠Mon.\n\nTRAP ANALYSIS:\nA/B) Consecutive pairs already eliminated. C) Would be P’s day, not R.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Linear day order; ‘immediately after’ = next calendar day in the set.\n• REMEMBER: Place fixed day first; then consecutive pair; then before/after constraints.\n• ALSO ASKED FROM THIS TOPIC: Week seating; two rows; circular order.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 88,
    "subject": "Reasoning & General Intelligence",
    "topic": "Reasoning: syllogism",
    "question": "Statements: All towers are structures. Some structures are automated. Conclusions: I. Some towers are automated. II. Some structures are towers. Which follows?",
    "image": "",
    "options": [
      "Only I",
      "Only II",
      "Both I and II",
      "Neither I nor II"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Only II\n\nWHY CORRECT:\nAll towers⊂structures ⇒ some structures are towers (II) follows (conversion of universal affirmative in exam syllogism with ‘some’). I does not follow: ‘some structures automated’ need not intersect towers.\n\nCALCULATION: N/A — Venn syllogism.\n\nTRAP ANALYSIS:\nA/C) Assume illicit distribution. D) Misses II.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: All A are B ⇒ Some B are A (standard bank exam). Some B are C ⇏ Some A are C.\n• REMEMBER: Draw two circles; avoid assuming overlap not forced.\n• ALSO ASKED FROM THIS TOPIC: Possibilities cases; either–or conclusions; negatives.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 89,
    "subject": "Reasoning & General Intelligence",
    "topic": "Reasoning: direction (feeder route)",
    "question": "From a control centre, an engineer goes 5 km north, then 3 km east, then 5 km south. How far and in which direction is he from the start?",
    "image": "",
    "options": [
      "3 km east",
      "3 km west",
      "5 km east",
      "4 km north"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 3 km east\n\nWHY CORRECT:\nNorth 5 and south 5 cancel; net displacement = 3 km east.\n\nCALCULATION: Vector: +5N −5S +3E = 3E.\n\nTRAP ANALYSIS:\nB) Sign error on east. C) Uses north leg. D) Cancels wrongly.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Resolve N/S and E/W separately; net = resultant.\n• REMEMBER: Equal opposite legs cancel.\n• ALSO ASKED FROM THIS TOPIC: Shortest path; directions with turns (left/right facing).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 90,
    "subject": "Reasoning & General Intelligence",
    "topic": "Reasoning: analogy",
    "question": "Transformer : Voltage :: Circuit breaker : ?",
    "image": "",
    "options": [
      "Frequency",
      "Fault current interruption",
      "Power factor",
      "Reactive power only"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Fault current interruption\n\nWHY CORRECT:\nAnalogy of primary function: transformer transforms voltage; circuit breaker interrupts fault/load current.\n\nCALCULATION: N/A — analogy.\n\nTRAP ANALYSIS:\nA/C/D) Not CB’s defining analogy pair.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Function-based analogies common in AEE Non-core.\n• REMEMBER: Stay with primary role, not secondary effects.\n• ALSO ASKED FROM THIS TOPIC: Instrument transformer : measurement; isolator : visible isolation (no break load).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 91,
    "subject": "English Language & Comprehension",
    "topic": "English: passage comprehension",
    "question": "Passage: “During the pre-monsoon inspection, the team noted that several tower stubs showed early corrosion at the ground line. The report recommended cleaning, recoating, and closer soil-drainage checks before the next storm season, because untreated stubs can lose section capacity faster than expected under wind loads.” According to the passage, untreated corroded stubs are a concern mainly because they may:",
    "image": "",
    "options": [
      "Increase transformer oil acidity",
      "Lose section capacity faster under wind loads",
      "Reduce busbar ampacity only",
      "Eliminate the need for drainage checks"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Lose section capacity faster under wind loads\n\nWHY CORRECT:\nThe last clause states untreated stubs can lose section capacity faster under wind loads — direct comprehension.\n\nCALCULATION: N/A — passage-based.\n\nTRAP ANALYSIS:\nA/C) Not in passage. D) Contradicts recommendation.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Answer only from passage; ignore outside technical guesses.\n• REMEMBER: Look for causal ‘because’ clauses.\n• ALSO ASKED FROM THIS TOPIC: Inference vs stated fact; tone questions; vocab-in-context from passage.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 92,
    "subject": "English Language & Comprehension",
    "topic": "English: active-passive",
    "question": "Choose the correct passive form of: “The engineer verified the relay settings.”",
    "image": "",
    "options": [
      "The relay settings were verified by the engineer.",
      "The relay settings verified the engineer.",
      "The relay settings are verify by the engineer.",
      "The engineer was verified by the relay settings."
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: The relay settings were verified by the engineer.\n\nWHY CORRECT:\nActive SVO → Passive: object becomes subject; verb = was/were + V3; agent = by + old subject.\n\nCALCULATION: N/A — grammar transform.\n\nTRAP ANALYSIS:\nB) Reversed roles. C) Wrong verb form. D) Nonsense agent swap.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Passive = obj + be + past participle (+ by agent).\n• REMEMBER: Tense of be matches original tense (past → were).\n• ALSO ASKED FROM THIS TOPIC: Direct↔Indirect; subject-verb agreement; voice with modals (must be done).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 93,
    "subject": "English Language & Comprehension",
    "topic": "English: direct-indirect",
    "question": "Choose the correct indirect speech: He said, “I am checking the earthing.”",
    "image": "",
    "options": [
      "He said that he was checking the earthing.",
      "He said that he is checking the earthing.",
      "He said that I am checking the earthing.",
      "He said that he will checking the earthing."
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: He said that he was checking the earthing.\n\nWHY CORRECT:\nReporting verb past → backshift present continuous to past continuous; pronoun I→he.\n\nCALCULATION: N/A — narration.\n\nTRAP ANALYSIS:\nB) No backshift. C) Pronoun not changed. D) Wrong verb pattern.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: said + that + backshifted clause; pronouns follow sense.\n• REMEMBER: Universal truths sometimes skip backshift — not applicable here.\n• ALSO ASKED FROM THIS TOPIC: Active↔Passive; interrogative narration; imperative narration.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 94,
    "subject": "English Language & Comprehension",
    "topic": "English: error spotting",
    "question": "Identify the part with a grammatical error: “Neither the contractor / nor the supervisors / was willing / to sign the record.”",
    "image": "",
    "options": [
      "Neither the contractor",
      "nor the supervisors",
      "was willing",
      "to sign the record."
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: was willing\n\nWHY CORRECT:\nWith neither…nor, the verb agrees with the nearer subject: supervisors (plural) → were willing.\n\nCALCULATION: N/A — grammar.\n\nTRAP ANALYSIS:\nA/B/D) Grammatically fine; error is verb agreement.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Neither…nor → verb agrees with nearest subject.\n• REMEMBER: Either…or same rule; each/every take singular.\n• ALSO ASKED FROM THIS TOPIC: Subject–verb with collective nouns; tense consistency.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 95,
    "subject": "English Language & Comprehension",
    "topic": "English: vocabulary-in-context",
    "question": "In “The engineer gave a concise account of the failure,” concise most nearly means:",
    "image": "",
    "options": [
      "Lengthy and detailed",
      "Brief and clear",
      "Vague and delayed",
      "Hostile"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Brief and clear\n\nWHY CORRECT:\nConcise = short yet clear; antonym of lengthy/verbose.\n\nCALCULATION: N/A — vocab.\n\nTRAP ANALYSIS:\nA) Opposite. C/D) Unrelated senses.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Use context clues: ‘account of the failure’ suggests clarity + brevity.\n• REMEMBER: Concise ≠ abrupt/rude.\n• ALSO ASKED FROM THIS TOPIC: One-word substitutes; idioms; antonyms in context.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 96,
    "subject": "Computer Knowledge",
    "topic": "Computer: cybersecurity",
    "question": "Which control most directly reduces account compromise after a password is stolen?",
    "image": "",
    "options": [
      "Larger monitor",
      "Multi-factor authentication",
      "Defragmenting the disk",
      "Increasing screen brightness"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Multi-factor authentication\n\nWHY CORRECT:\nMFA requires a second factor beyond the password, so a stolen password alone is insufficient.\n\nCALCULATION: N/A — cyber hygiene.\n\nTRAP ANALYSIS:\nA/C/D) Unrelated to authentication.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Factors: knowledge / possession / inherence.\n• REMEMBER: MFA ≠ only longer password; phishing still a risk for OTP.\n• ALSO ASKED FROM THIS TOPIC: Phishing vs vishing; HTTPS padlock meaning; password managers.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 97,
    "subject": "Computer Knowledge",
    "topic": "Computer: networking",
    "question": "Which service normally resolves a human-readable domain name into an IP address?",
    "image": "",
    "options": [
      "FTP",
      "DNS",
      "SMTP",
      "DHCP only for printing"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: DNS\n\nWHY CORRECT:\nDNS maps domain names to IP addresses. FTP=file transfer; SMTP=mail; DHCP=address lease (not name resolution).\n\nCALCULATION: N/A — networking.\n\nTRAP ANALYSIS:\nA/C/D) Wrong application-layer roles.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: DNS query → IP; reverse DNS exists but less tested.\n• REMEMBER: DHCP ≠ DNS though both help hosts join networks.\n• ALSO ASKED FROM THIS TOPIC: HTTP vs HTTPS; TCP vs UDP; private IP ranges.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 98,
    "subject": "Computer Knowledge",
    "topic": "Computer: spreadsheet",
    "question": "In a spreadsheet, which reference keeps column A and row 1 fixed when the formula is copied both down and across?",
    "image": "",
    "options": [
      "A1",
      "$A1",
      "A$1",
      "$A$1"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: $A$1\n\nWHY CORRECT:\nAbsolute reference $A$1 locks both column and row under fill/copy.\n\nCALCULATION: N/A — Office skill.\n\nTRAP ANALYSIS:\nA) Fully relative. B) Locks column only. C) Locks row only.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: $ before col locks col; $ before row locks row.\n• REMEMBER: Mixed refs ($A1 / A$1) common in exam traps.\n• ALSO ASKED FROM THIS TOPIC: COUNTIF; pivot basics; freeze panes (UI, not formula).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 99,
    "subject": "Computer Knowledge",
    "topic": "Computer: database",
    "question": "A table requires a field that uniquely identifies every row and cannot be NULL. Which constraint is most appropriate?",
    "image": "",
    "options": [
      "Foreign key only",
      "Primary key",
      "Default value only",
      "Check constraint for colour"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Primary key\n\nWHY CORRECT:\nPrimary key uniquely identifies rows and disallows NULL (standard relational definition).\n\nCALCULATION: N/A — DBMS awareness.\n\nTRAP ANALYSIS:\nA) FK references a PK elsewhere. C/D) Don’t guarantee uniqueness+NOT NULL together as PK does.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: PK = unique + not null; FK references PK/UK.\n• REMEMBER: A table has one PK (may be composite).\n• ALSO ASKED FROM THIS TOPIC: Normalization 1NF–3NF slogans; candidate key vs PK.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 100,
    "subject": "Computer Knowledge",
    "topic": "Computer: OS / files",
    "question": "Which statement about RAM and a magnetic/SSD hard disk is correct at awareness level?",
    "image": "",
    "options": [
      "RAM is non-volatile long-term storage; disk is only for CPU registers",
      "RAM is typically volatile working memory; disk provides persistent storage",
      "Both are identical in volatility and speed",
      "Disk contents are erased every time power is on"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: RAM is typically volatile working memory; disk provides persistent storage\n\nWHY CORRECT:\nRAM loses data on power loss (volatile); disk/SSD keeps files persistently.\n\nCALCULATION: N/A — hardware/OS.\n\nTRAP ANALYSIS:\nA) Reversed. C) False. D) Opposite of persistent storage.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Volatile vs non-volatile; primary vs secondary memory.\n• REMEMBER: Cache/registers are faster/smaller than RAM; disk slower/larger.\n• ALSO ASKED FROM THIS TOPIC: Virtual memory basics; file extensions; USB class.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  }
];
