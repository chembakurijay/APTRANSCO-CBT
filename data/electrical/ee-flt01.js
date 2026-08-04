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
    "explanation": "CORRECT: 640\n\nWHY CORRECT:\nThis is a Conceptual item in Power Systems (Conceptual). The keyed choice “√(L/C) and V²” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: SIL = V²/Zc, Zc=√(L/C).\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: SIL = V²/Zc, Zc=√(L/C).\nVerify units/pu bases and that the arithmetic lands on the keyed option “√(L/C) and V²” (Gate C).\nFinal keyed result: √(L/C) and V²\n\nTRAP ANALYSIS (every wrong option):\nB) 400: Selecting “400” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “640”, not “400” (different quantity, basis, or operating regime).\nC) 250: Selecting “250” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “640”, not “250” (different quantity, basis, or operating regime).\nD) 160: Selecting “160” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “640”, not “160” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “640”.\n• For SIL: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same SIL with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for SIL (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 0.1\n\nWHY CORRECT:\nThis is a Standard+Numerical item in Power Systems (Standard+Numerical). The keyed choice “484” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Zb = kV²/MVA = 220²/100 = 484.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Zb = kV²/MVA = 220²/100 = 484.\nVerify units/pu bases and that the arithmetic lands on the keyed option “484” (Gate C).\nFinal keyed result: 484\n\nTRAP ANALYSIS (every wrong option):\nA) 0.5: Selecting “0.5” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.1”, not “0.5” (different quantity, basis, or operating regime).\nC) 0.2: Classic ×2 slip on “0.2” (doubled length/load/share or used diameter as radius).\nD) 1.0: Selecting “1.0” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.1”, not “1.0” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Equal length + common rigid ends ⇒ ε_brass = ε_steel ⇒ force share ∝ A·E (not area alone).\n• Brass share = (Ab·Eb) / (Ab·Eb + As·Es). With Es/Eb=2, As=600, Ab=900 → AEs=1200, AEb=900 → brass = 900/2100 = 3/7.\n• Steel share is the complement 4/7. Doubling only Ab changes the AE weights — recompute the fraction; do not keep 3/7.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same data: steel share = 4/7 (always check both sum to 1).\n• If Es/Eb becomes 1 (same E), shares collapse to area ratio 900:(600+900)=900/1500=3/5.\n• Temperature rise with fixed composite ends: redundant force from Δ = αΔT L compatibility — different equation set.",
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
    "explanation": "CORRECT: 1.11\n\nWHY CORRECT:\n“1.11” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 1.11.\n\nTRAP ANALYSIS (every wrong option):\nA) 2.0: Selecting “2.0” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “1.11”, not “2.0” (different quantity, basis, or operating regime).\nB) 3.33: Selecting “3.33” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “1.11”, not “3.33” (different quantity, basis, or operating regime).\nD) 5.0: Selecting “5.0” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “1.11”, not “5.0” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “1.11”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2\n\nWHY CORRECT:\nParallel feeders between buses need directional discrimination so only the faulted path is isolated; radial outbound feeders also need directional units at critical locations. Option C places the minimum directional set that covers parallel Lines 1–2 and the outbound Line 3 / bus-2 backfeed path.\n\nCALCULATION:\nN/A — protection logic from SLD topology (diagram-dependent).\n\nTRAP ANALYSIS (every wrong option):\nA) R3 and R4 directional toward Line1 and Line2 respectively only: Selecting “R3 and R4 directional toward Line1 and Line2 respectively only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2”, not “R3 and R4 directional toward Line1 and Line2 respectively only” (different quantity, basis, or operating regime).\nB) R3 and R4 directional blocking toward bus 2 only: Selecting “R3 and R4 directional blocking toward bus 2 only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2”, not “R3 and R4 directional blocking toward bus 2 only” (different quantity, basis, or operating regime).\nC) R3,R4 directional toward bus 2 and R7 directional toward bus 3: Selecting “R3,R4 directional toward bus 2 and R7 directional toward bus 3” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2”, not “R3,R4 directional toward bus 2 and R7 directional toward bus 3” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• λ = Le / r_min with Le and r in the SAME unit (convert 2.1 m → 2100 mm before dividing by 35 mm).\n• If the stem already gives effective length Le, do NOT multiply again by end-factor K.\n• Larger r_min ⇒ smaller λ ⇒ higher buckling strength (for the same Le).\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Both-ends-fixed ideal K=0.5 (IS often ~0.65 practical) → Le=K·L_geo, then λ=Le/r.\n• If r is halved, λ doubles (e.g. 60 → 120) — classic distractor.\n• Euler assumes straight + concentric + elastic; crookedness/eccentricity voids bare Euler.",
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
    "explanation": "CORRECT: 667\n\nWHY CORRECT:\n“667” matches the stem’s asked duty/quantity under the syllabus relation for AR. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 667.\n\nTRAP ANALYSIS (every wrong option):\nB) 333: Classic ÷2 slip on “333” (halved length/share or used radius as diameter).\nC) 1333: Classic ×2 slip on “1333” (doubled length/load/share or used diameter as radius).\nD) 100: Selecting “100” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “667”, not “100” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “667”.\n• For AR: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same AR with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for AR (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Light/no load + long line + open receiving end\n\nWHY CORRECT:\nThis is a Conceptual item in Power Systems (Conceptual). The keyed choice “Line lightly loaded / open receiving end + long line” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Systems principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Heavy load + short cable: Selecting “Heavy load + short cable” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Light/no load + long line + open receiving end”, not “Heavy load + short cable” (different quantity, basis, or operating regime).\nC) Unity pf near SIL always: Power factor is a load/operating-state quantity (kW/kVA); it is not the interrupting duty named by the correct option.\nD) Zero shunt capacitance: Selecting “Zero shunt capacitance” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Light/no load + long line + open receiving end”, not “Zero shunt capacitance” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• τ_avg = V/(b d). For 100×200 mm and V=16 kN → τ_avg=16000/(100·200)=0.8 MPa.\n• Rectangle elastic: τ_max = (3/2) τ_avg = 1.2 MPa, located at the neutral axis.\n• At extreme fibres of a rectangle, elastic beam shear stress is 0 — never put τ_max there.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Circular section: τ_max=(4/3)τ_avg on NA.\n• I-section: almost all shear in web ≈ V/(d·tw) estimate.",
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
    "explanation": "CORRECT: 5.0e-4\n\nWHY CORRECT:\n“5.0e-4” matches the stem’s asked duty/quantity under the syllabus relation for Application. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 5.0e-4.\n\nTRAP ANALYSIS (every wrong option):\nA) 80: Selecting “80” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “5.0e-4”, not “80” (different quantity, basis, or operating regime).\nB) 1.0: Selecting “1.0” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “5.0e-4”, not “1.0” (different quantity, basis, or operating regime).\nD) 0.02: Selecting “0.02” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “5.0e-4”, not “0.02” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “5.0e-4”.\n• For Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Only positive-sequence network\n\nWHY CORRECT:\n“Only positive-sequence network” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Only positive-sequence network.\n\nTRAP ANALYSIS (every wrong option):\nA) Parallel of all three: Selecting “Parallel of all three” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Only positive-sequence network”, not “Parallel of all three” (different quantity, basis, or operating regime).\nB) Negative alone: Selecting “Negative alone” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Only positive-sequence network”, not “Negative alone” (different quantity, basis, or operating regime).\nC) Series (Z1+Z2+Z0): Selecting “Series (Z1+Z2+Z0)” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Only positive-sequence network”, not “Series (Z1+Z2+Z0)” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Only positive-sequence network”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 0 A\n\nWHY CORRECT:\nThis is a Diagram+Numerical item in Power Systems (Diagram+Numerical). The keyed choice “0 A” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Systems principle for “Diagram+Numerical”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: (Ia+Ib+Ic)/3=0.\nVerify units/pu bases and that the arithmetic lands on the keyed option “0 A” (Gate C).\nFinal keyed result: 0 A\n\nTRAP ANALYSIS (every wrong option):\nB) 5.78 A: Selecting “5.78 A” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0 A”, not “5.78 A” (different quantity, basis, or operating regime).\nC) 3.33 A: Selecting “3.33 A” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0 A”, not “3.33 A” (different quantity, basis, or operating regime).\nD) 10 A: Selecting “10 A” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0 A”, not “10 A” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0 A”.\n• For Diagram+Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Diagram+Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Diagram+Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 0.75\n\nWHY CORRECT:\n“0.75” matches the stem’s asked duty/quantity under the syllabus relation for Table. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 0.75.\n\nTRAP ANALYSIS (every wrong option):\nA) 0.3: Selecting “0.3” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.75”, not “0.3” (different quantity, basis, or operating regime).\nC) 2.5: Selecting “2.5” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.75”, not “2.5” (different quantity, basis, or operating regime).\nD) 5.0: Selecting “5.0” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.75”, not “5.0” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0.75”.\n• For Table: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Table with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Table (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 441\n\nWHY CORRECT:\n“441” matches the stem’s asked duty/quantity under the syllabus relation for Conceptual. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) 420: Selecting “420” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “441”, not “420” (different quantity, basis, or operating regime).\nB) 380: Selecting “380” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “441”, not “380” (different quantity, basis, or operating regime).\nD) 400: Selecting “400” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “441”, not “400” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “441”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 3.33\n\nWHY CORRECT:\nThis is a Numerical+Application item in Power Systems (Numerical+Application). The keyed choice “3.33” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Ifebus≈1/(0.2+0.1)=3.33 pu.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Ifebus≈1/(0.2+0.1)=3.33 pu.\nVerify units/pu bases and that the arithmetic lands on the keyed option “3.33” (Gate C).\nFinal keyed result: 3.33\n\nTRAP ANALYSIS (every wrong option):\nA) 5: Selecting “5” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “3.33”, not “5” (different quantity, basis, or operating regime).\nB) 10: Selecting “10” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “3.33”, not “10” (different quantity, basis, or operating regime).\nC) 1: Selecting “1” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “3.33”, not “1” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “3.33”.\n• For Numerical+Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical+Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical+Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Pm increase above Pe until δmax with equal decelerating area\n\nWHY CORRECT:\nFirst-swing stability uses the equal-area criterion: accelerating area while Pm > Pe during/after the fault must be balanced by a decelerating area after clearing. If mechanical power Pm is raised, the accelerating region grows and the available decelerating region shrinks — δ must swing farther (to a new δmax) so the areas can still balance. That is exactly the keyed statement.\n\nCALCULATION:\nN/A — conceptual equal-area / swing judgement (qualitative Pm–Pe area balance).\n\nTRAP ANALYSIS (every wrong option):\nB) Only Pe curve below Pm forever: That picture means continuous acceleration with no decelerating area — first-swing unstable. It is not the equal-area recovery description after a Pm increase.\nC) Fault clearing angle alone with no Pm: Clearing angle/time matters, but without relating Pm to the Pe curves you cannot judge whether decelerating area still exists after the Pm change.\nD) Inertia H only — angles irrelevant: Inertia H scales how fast δ(t) moves; it does not replace the Pe–Pm equal-area test for whether a stable δmax exists.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Equal-area: accelerating area (Pm>Pe) must equal decelerating area after clearing for critical stability.\n• Raising Pm shrinks available decelerating region → δmax increases for the areas to balance.\n• If Pm > Pe,max post-fault, no decelerating area exists → unstable regardless of quoting H alone.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Critical clearing angle/time from equal-area with pre-fault / during-fault / post-fault Pe curves.\n• Effect of fault clearing delay: larger accelerating area → may exceed available decelerating area.\n• Role of H: affects swing period / CCT in seconds, not the geometric area test itself.",
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
    "explanation": "CORRECT: 0.6\n\nWHY CORRECT:\n“0.6” matches the stem’s asked duty/quantity under the syllabus relation for Graph. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 0.6.\n\nTRAP ANALYSIS (every wrong option):\nA) 75: Selecting “75” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.6”, not “75” (different quantity, basis, or operating regime).\nC) 3.0: Selecting “3.0” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.6”, not “3.0” (different quantity, basis, or operating regime).\nD) 15: Selecting “15” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.6”, not “15” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0.6”.\n• For Graph: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Graph with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Graph (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Insulation and cooling of windings/core\n\nWHY CORRECT:\nThis is a Conceptual item in Electrical Machines (Conceptual). The keyed choice “Insulation and cooling” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Machines principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Only intentional Buchholz gas generation: Selecting “Only intentional Buchholz gas generation” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Insulation and cooling of windings/core”, not “Only intentional Buchholz gas generation” (different quantity, basis, or operating regime).\nB) Only mechanical lubrication of core bolts: Selecting “Only mechanical lubrication of core bolts” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Insulation and cooling of windings/core”, not “Only mechanical lubrication of core bolts” (different quantity, basis, or operating regime).\nD) Only lightning surge diversion: Selecting “Only lightning surge diversion” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Insulation and cooling of windings/core”, not “Only lightning surge diversion” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Insulation and cooling of windings/core”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 36.9\n\nWHY CORRECT:\n“36.9” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 36.9.\n\nTRAP ANALYSIS (every wrong option):\nA) 53.1: Selecting “53.1” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “36.9”, not “53.1” (different quantity, basis, or operating regime).\nB) 18: Classic ÷2 slip on “18” (halved length/share or used radius as diameter).\nC) 72: Classic ×2 slip on “72” (doubled length/load/share or used diameter as radius).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “36.9”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Air-gap flux\n\nWHY CORRECT:\n“Air-gap flux” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Air-gap flux.\n\nTRAP ANALYSIS (every wrong option):\nB) Slip frequency always zero: System frequency / cycle timing — not the quantity this stem asks; CB/protection primary duty is interrupting fault current, not “frequency” as an answer label.\nC) Rotor copper loss only: Selecting “Rotor copper loss only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Air-gap flux”, not “Rotor copper loss only” (different quantity, basis, or operating regime).\nD) Stator current independent of torque: Current alone without the stem’s required operation/check — incomplete vs “Air-gap flux”.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Air-gap flux”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Leading pf load\n\nWHY CORRECT:\nThis is a Diagram+Conceptual item in Electrical Machines (Diagram+Conceptual). The keyed choice “Leading pf load” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Machines principle for “Diagram+Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Unity only: Selecting “Unity only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Leading pf load”, not “Unity only” (different quantity, basis, or operating regime).\nC) Short-circuit only: Selecting “Short-circuit only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Leading pf load”, not “Short-circuit only” (different quantity, basis, or operating regime).\nD) Lagging pf load: Power factor is a load/operating-state quantity (kW/kVA); it is not the interrupting duty named by the correct option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Leading pf load”.\n• For Diagram+Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Diagram+Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Diagram+Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 0.45\n\nWHY CORRECT:\n“0.45” matches the stem’s asked duty/quantity under the syllabus relation for Conceptual. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) 1.0: Selecting “1.0” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.45”, not “1.0” (different quantity, basis, or operating regime).\nB) 2.0: Selecting “2.0” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.45”, not “2.0” (different quantity, basis, or operating regime).\nD) 0.5: Selecting “0.5” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.45”, not “0.5” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0.45”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 0.48\n\nWHY CORRECT:\n“0.48” matches the stem’s asked duty/quantity under the syllabus relation for Application. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 0.48.\n\nTRAP ANALYSIS (every wrong option):\nA) 12: Selecting “12” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.48”, not “12” (different quantity, basis, or operating regime).\nB) 0.04: Selecting “0.04” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.48”, not “0.04” (different quantity, basis, or operating regime).\nC) 11.52: Selecting “11.52” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.48”, not “11.52” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0.48”.\n• For Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 1.8 pu\n\nWHY CORRECT:\nSynchronous generator internal voltage on lagging pf exceeds terminal voltage. Assemble Ef = V + Ia(Ra + jXs). With Ra≈0, pf=0.8 lag: Ia=0.8−j0.6, jXs Ia=0.6+j0.8, Ef=1.6+j0.8, |Ef|=sqrt(1.6^2+0.8^2)=sqrt(3.2)≈1.79 ≈ 1.8 pu.\n\nCALCULATION:\nVt=1 pu, Ia=1 pu, Xs=1.0 pu, Ra≈0, cosφ=0.8, sinφ=0.6.\nTake V on real axis; Ia=0.8−j0.6.\nj Xs Ia = j(0.8−j0.6)=0.6+j0.8.\nEf = 1 + 0.6 + j0.8 = 1.6 + j0.8.\n|Ef| = sqrt(2.56+0.64)=sqrt(3.2)≈1.789 ≈ 1.8 pu.\n\nTRAP ANALYSIS (every wrong option):\nB) 0.8: Selecting “0.8” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “1.8 pu”, not “0.8” (different quantity, basis, or operating regime).\nC) 1.6: Selecting “1.6” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “1.8 pu”, not “1.6” (different quantity, basis, or operating regime).\nD) 1.0: Selecting “1.0” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “1.8 pu”, not “1.0” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “1.8 pu”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Decreases (Ferranti charging removed)\n\nWHY CORRECT:\nThis is a Diagram+Application item in Electrical Machines (Diagram+Application). The keyed choice “Decreases (Ferranti charging removed)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dep PASS (open Rx end & long line on fig)\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Unchanged always: Selecting “Unchanged always” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Decreases (Ferranti charging removed)”, not “Unchanged always” (different quantity, basis, or operating regime).\nC) Becomes zero always: Selecting “Becomes zero always” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Decreases (Ferranti charging removed)”, not “Becomes zero always” (different quantity, basis, or operating regime).\nD) Increases always: Selecting “Increases always” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Decreases (Ferranti charging removed)”, not “Increases always” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Decreases (Ferranti charging removed)”.\n• For Diagram+Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Diagram+Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Diagram+Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Ia vs If for constant power\n\nWHY CORRECT:\nThis is a Conceptual item in Electrical Machines (Conceptual). The keyed choice “Ia vs If for constant power” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Machines principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) V vs I armature short only: Selecting “V vs I armature short only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Ia vs If for constant power”, not “V vs I armature short only” (different quantity, basis, or operating regime).\nB) Efficiency vs load always flat: Efficiency is output/input — wrong figure of merit for this stem.\nD) T vs speed: Selecting “T vs speed” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Ia vs If for constant power”, not “T vs speed” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Ia vs If for constant power”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 0.038\n\nWHY CORRECT:\n“0.038” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 0.038.\n\nTRAP ANALYSIS (every wrong option):\nA) 0.05: Selecting “0.05” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.038”, not “0.05” (different quantity, basis, or operating regime).\nB) 0.01: Selecting “0.01” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.038”, not “0.01” (different quantity, basis, or operating regime).\nC) 0.06: Selecting “0.06” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.038”, not “0.06” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0.038”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Both junctions forward-biased; VCE,sat small\n\nWHY CORRECT:\n“Both junctions forward-biased; VCE,sat small” matches the stem’s asked duty/quantity under the syllabus relation for Conceptual+Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) Only collector-base reverse forever: Selecting “Only collector-base reverse forever” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Both junctions forward-biased; VCE,sat small”, not “Only collector-base reverse forever” (different quantity, basis, or operating regime).\nC) β always equals manufacturer max: Selecting “β always equals manufacturer max” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Both junctions forward-biased; VCE,sat small”, not “β always equals manufacturer max” (different quantity, basis, or operating regime).\nD) IC independent of IB in active region only labeled sat: Selecting “IC independent of IB in active region only labeled sat” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Both junctions forward-biased; VCE,sat small”, not “IC independent of IB in active region only labeled sat” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Both junctions forward-biased; VCE,sat small”.\n• For Conceptual+Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual+Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual+Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 1000\n\nWHY CORRECT:\n“1000” matches the stem’s asked duty/quantity under the syllabus relation for Practical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 1000.\n\nTRAP ANALYSIS (every wrong option):\nA) 100: Selecting “100” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “1000”, not “100” (different quantity, basis, or operating regime).\nC) 10: Selecting “10” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “1000”, not “10” (different quantity, basis, or operating regime).\nD) 1: Selecting “1” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “1000”, not “1” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “1000”.\n• For Practical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Practical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Practical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Decreases as (1+cosα)/2 factor\n\nWHY CORRECT:\n“Decreases as (1+cosα)/2 factor” matches the stem’s asked duty/quantity under the syllabus relation for Application. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Decreases as (1+cosα)/2 factor.\n\nTRAP ANALYSIS (every wrong option):\nA) Independent of α: Selecting “Independent of α” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Decreases as (1+cosα)/2 factor”, not “Independent of α” (different quantity, basis, or operating regime).\nB) Becomes AC with zero mean always: Selecting “Becomes AC with zero mean always” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Decreases as (1+cosα)/2 factor”, not “Becomes AC with zero mean always” (different quantity, basis, or operating regime).\nD) Increases linearly with α: Selecting “Increases linearly with α” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Decreases as (1+cosα)/2 factor”, not “Increases linearly with α” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Decreases as (1+cosα)/2 factor”.\n• For Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Z ≈ R (minimum) and |VC|,|VL| can exceed |Vin|\n\nWHY CORRECT:\nThis is a Conceptual item in Electric Circuits (Conceptual). The keyed choice “Can exceed Vin and is 90° to Vin” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electric Circuits principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Z is maximum and current is minimum: Current alone without the stem’s required operation/check — incomplete vs “Z ≈ R (minimum) and |VC|,|VL| can exceed |Vin|”.\nB) Current is always zero: Current alone without the stem’s required operation/check — incomplete vs “Z ≈ R (minimum) and |VC|,|VL| can exceed |Vin|”.\nC) VC is always in phase with Vin and ≤ Vin: Selecting “VC is always in phase with Vin and ≤ Vin” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Z ≈ R (minimum) and |VC|,|VL| can exceed |Vin|”, not “VC is always in phase with Vin and ≤ Vin” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Z ≈ R (minimum) and |VC|,|VL| can exceed |Vin|”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 2.67 Ω\n\nWHY CORRECT:\n“2.67 Ω” matches the stem’s asked duty/quantity under the syllabus relation for Conceptual. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) 3 Ω: Selecting “3 Ω” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “2.67 Ω”, not “3 Ω” (different quantity, basis, or operating regime).\nC) 4 Ω: Selecting “4 Ω” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “2.67 Ω”, not “4 Ω” (different quantity, basis, or operating regime).\nD) 1 Ω: Selecting “1 Ω” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “2.67 Ω”, not “1 Ω” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “2.67 Ω”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: (C0/2)(1 + εr)\n\nWHY CORRECT:\nFig (b) places two capacitors in parallel: air half (C0/2) and dielectric half (εr C0/2). Hence C = (C0/2)(1+εr). Series stacking would give a different formula — read the figure.\n\nCALCULATION:\nC_air = C0/2; C_d = εr C0/2; parallel ⇒ C = (C0/2)(1+εr).\n\nTRAP ANALYSIS (every wrong option):\nA) (C0/2) εr: Selecting “(C0/2) εr” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “(C0/2)(1 + εr)”, not “(C0/2) εr” (different quantity, basis, or operating regime).\nC) C0 (1 + εr): Selecting “C0 (1 + εr)” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “(C0/2)(1 + εr)”, not “C0 (1 + εr)” (different quantity, basis, or operating regime).\nD) C0 + εr: Selecting “C0 + εr” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “(C0/2)(1 + εr)”, not “C0 + εr” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “(C0/2)(1 + εr)”.\n• For Parallel-plate capacitor with partial dielectric: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Parallel-plate capacitor with partial dielectric with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Parallel-plate capacitor with partial dielectric (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 1/√(LC) — here ω < ω0 so current leads (capacitive)\n\nWHY CORRECT:\n“1/√(LC) — here ω < ω0 so current leads (capacitive)” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 1/√(LC) — here ω < ω0 so current leads (capacitive).\n\nTRAP ANALYSIS (every wrong option):\nA) Always lags for any RLC: Selecting “Always lags for any RLC” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “1/√(LC) — here ω < ω0 so current leads (capacitive)”, not “Always lags for any RLC” (different quantity, basis, or operating regime).\nB) Only C value ignoring L: Selecting “Only C value ignoring L” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “1/√(LC) — here ω < ω0 so current leads (capacitive)”, not “Only C value ignoring L” (different quantity, basis, or operating regime).\nD) R only: Selecting “R only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “1/√(LC) — here ω < ω0 so current leads (capacitive)”, not “R only” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “1/√(LC) — here ω < ω0 so current leads (capacitive)”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Only a series RLC tank\n\nWHY CORRECT:\nA T-section has two series arms and one shunt to common return. Symmetry requires Z1 = Z2; unequal series arms make it an unsymmetrical T.\n\nCALCULATION:\nTopology ID from schematic — not a numerical.\n\nTRAP ANALYSIS (every wrong option):\nA) π-section (two shunts, one series): Selecting “π-section (two shunts, one series)” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Only a series RLC tank”, not “π-section (two shunts, one series)” (different quantity, basis, or operating regime).\nB) Lattice section with crossed arms: Selecting “Lattice section with crossed arms” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Only a series RLC tank”, not “Lattice section with crossed arms” (different quantity, basis, or operating regime).\nC) Symmetrical T only if Z1 = Z2; otherwise unsymmetrical T: Selecting “Symmetrical T only if Z1 = Z2; otherwise unsymmetrical T” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Only a series RLC tank”, not “Symmetrical T only if Z1 = Z2; otherwise unsymmetrical T” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Only a series RLC tank”.\n• For Two-port T-section: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Two-port T-section with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Two-port T-section (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Band-pass\n\nWHY CORRECT:\nThis is a Graph+Diagram item in Electric Circuits (Graph+Diagram). The keyed choice “Band-pass” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electric Circuits principle for “Graph+Diagram”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nB) High-pass: Selecting “High-pass” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Band-pass”, not “High-pass” (different quantity, basis, or operating regime).\nC) Band-elimination: Selecting “Band-elimination” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Band-pass”, not “Band-elimination” (different quantity, basis, or operating regime).\nD) Low-pass: Selecting “Low-pass” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Band-pass”, not “Low-pass” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Band-pass”.\n• For Graph+Diagram: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Graph+Diagram with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Graph+Diagram (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 0\n\nWHY CORRECT:\n“0” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 0.\n\nTRAP ANALYSIS (every wrong option):\nA) Equal to open-loop poles in RHP: Selecting “Equal to open-loop poles in RHP” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0”, not “Equal to open-loop poles in RHP” (different quantity, basis, or operating regime).\nC) 1 clockwise: Selecting “1 clockwise” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0”, not “1 clockwise” (different quantity, basis, or operating regime).\nD) ∞: Selecting “∞” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0”, not “∞” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 0 < K < 160\n\nWHY CORRECT:\n“0 < K < 160” matches the stem’s asked duty/quantity under the syllabus relation for Conceptual. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) K < 0: Selecting “K < 0” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0 < K < 160”, not “K < 0” (different quantity, basis, or operating regime).\nB) All K > 0: Selecting “All K > 0” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0 < K < 160”, not “All K > 0” (different quantity, basis, or operating regime).\nD) K > 160: Selecting “K > 160” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0 < K < 160”, not “K > 160” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0 < K < 160”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: |G(jω)H(jω)| = 1 (0 dB crossover)\n\nWHY CORRECT:\n“|G(jω)H(jω)| = 1 (0 dB crossover)” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: |G(jω)H(jω)| = 1 (0 dB crossover).\n\nTRAP ANALYSIS (every wrong option):\nA) ∠G = −180° only: Selecting “∠G = −180° only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “|G(jω)H(jω)| = 1 (0 dB crossover)”, not “∠G = −180° only” (different quantity, basis, or operating regime).\nB) ω → 0: Selecting “ω → 0” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “|G(jω)H(jω)| = 1 (0 dB crossover)”, not “ω → 0” (different quantity, basis, or operating regime).\nC) Real(G)=0 always: Selecting “Real(G)=0 always” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “|G(jω)H(jω)| = 1 (0 dB crossover)”, not “Real(G)=0 always” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “|G(jω)H(jω)| = 1 (0 dB crossover)”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: −135\n\nWHY CORRECT:\n“−135” matches the stem’s asked duty/quantity under the syllabus relation for Practical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: −135.\n\nTRAP ANALYSIS (every wrong option):\nB) −90: Selecting “−90” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “−135”, not “−90” (different quantity, basis, or operating regime).\nC) −180: Selecting “−180” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “−135”, not “−180” (different quantity, basis, or operating regime).\nD) 0: Selecting “0” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “−135”, not “0” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “−135”.\n• For Practical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Practical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Practical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Transient damping / reduces overshoot tendency\n\nWHY CORRECT:\n“Transient damping / reduces overshoot tendency” matches the stem’s asked duty/quantity under the syllabus relation for AR. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Transient damping / reduces overshoot tendency.\n\nTRAP ANALYSIS (every wrong option):\nA) Removes all sensor noise beneficially: Selecting “Removes all sensor noise beneficially” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Transient damping / reduces overshoot tendency”, not “Removes all sensor noise beneficially” (different quantity, basis, or operating regime).\nC) Eliminates steady-state error to ramp alone always: Selecting “Eliminates steady-state error to ramp alone always” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Transient damping / reduces overshoot tendency”, not “Eliminates steady-state error to ramp alone always” (different quantity, basis, or operating regime).\nD) Increases type number by 2: Selecting “Increases type number by 2” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Transient damping / reduces overshoot tendency”, not “Increases type number by 2” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Transient damping / reduces overshoot tendency”.\n• For AR: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same AR with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for AR (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 0\n\nWHY CORRECT:\nThis is a Conceptual item in Control Systems (Conceptual). The keyed choice “0” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Control Systems principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) 1/K always: Selecting “1/K always” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0”, not “1/K always” (different quantity, basis, or operating regime).\nB) Unstable always: Selecting “Unstable always” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0”, not “Unstable always” (different quantity, basis, or operating regime).\nD) ∞: Selecting “∞” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0”, not “∞” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: −1, −2\n\nWHY CORRECT:\n“−1, −2” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: −1, −2.\n\nTRAP ANALYSIS (every wrong option):\nA) 1, 2: Squared a linear quantity to land on “1, 2” — wrong power of the governing variable.\nB) −2±j: Classic ×2 slip on “−2±j” (doubled length/load/share or used diameter as radius).\nC) 0, −3: Selecting “0, −3” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “−1, −2”, not “0, −3” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “−1, −2”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 1/(1+GH)\n\nWHY CORRECT:\nE = R − H C and C = G E ⇒ E = R − HG E ⇒ E/R = 1/(1+GH) for negative unity feedback structure shown.\n\nCALCULATION:\nE = R − HC; C = GE → E(1+GH)=R → E/R=1/(1+GH).\n\nTRAP ANALYSIS (every wrong option):\nB) 1/(1+G): Squared a linear quantity to land on “1/(1+G)” — wrong power of the governing variable.\nC) G/(1+GH): Squared a linear quantity to land on “G/(1+GH)” — wrong power of the governing variable.\nD) GH/(1+GH): Squared a linear quantity to land on “GH/(1+GH)” — wrong power of the governing variable.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “1/(1+GH)”.\n• For Diagram+Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Diagram+Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Diagram+Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 19.2 V\n\nWHY CORRECT:\n“19.2 V” matches the stem’s asked duty/quantity under the syllabus relation for Application. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 19.2 V.\n\nTRAP ANALYSIS (every wrong option):\nA) 12 V: Selecting “12 V” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “19.2 V”, not “12 V” (different quantity, basis, or operating regime).\nC) 48 V: Selecting “48 V” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “19.2 V”, not “48 V” (different quantity, basis, or operating regime).\nD) 120 V: Selecting “120 V” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “19.2 V”, not “120 V” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “19.2 V”.\n• For Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: cosα (displacement) for continuous Id ideal case\n\nWHY CORRECT:\n“cosα (displacement) for continuous Id ideal case” matches the stem’s asked duty/quantity under the syllabus relation for Conceptual. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) sinα only: Selecting “sinα only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “cosα (displacement) for continuous Id ideal case”, not “sinα only” (different quantity, basis, or operating regime).\nB) Independent of α: Selecting “Independent of α” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “cosα (displacement) for continuous Id ideal case”, not “Independent of α” (different quantity, basis, or operating regime).\nD) Always unity: Selecting “Always unity” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “cosα (displacement) for continuous Id ideal case”, not “Always unity” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “cosα (displacement) for continuous Id ideal case”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: One LHP pole and one RHP zero at same frequency\n\nWHY CORRECT:\nThis is a Graph+Diagram item in Control Systems (Graph+Diagram). The keyed choice “One LHP pole and one RHP zero at same frequency” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dep PASS (PYQ figure)\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Dep PASS (PYQ figure)\nVerify units/pu bases and that the arithmetic lands on the keyed option “One LHP pole and one RHP zero at same frequency” (Gate C).\nFinal keyed result: One LHP pole and one RHP zero at same frequency\n\nTRAP ANALYSIS (every wrong option):\nA) LHP pole+LHP zero same f: Selecting “LHP pole+LHP zero same f” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “One LHP pole and one RHP zero at same frequency”, not “LHP pole+LHP zero same f” (different quantity, basis, or operating regime).\nB) Two LHP poles + RHP zero: Selecting “Two LHP poles + RHP zero” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “One LHP pole and one RHP zero at same frequency”, not “Two LHP poles + RHP zero” (different quantity, basis, or operating regime).\nC) Two RHP poles + LHP zero: Selecting “Two RHP poles + LHP zero” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “One LHP pole and one RHP zero at same frequency”, not “Two RHP poles + LHP zero” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “One LHP pole and one RHP zero at same frequency”.\n• For Graph+Diagram: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Graph+Diagram with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Graph+Diagram (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Lower conduction drop via conductivity modulation\n\nWHY CORRECT:\n“Lower conduction drop via conductivity modulation” matches the stem’s asked duty/quantity under the syllabus relation for Standard+Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Lower conduction drop via conductivity modulation.\n\nTRAP ANALYSIS (every wrong option):\nB) Faster than MOSFET always at every voltage: Voltage magnitude/regulation topic — plausible neighbour, but the stem’s asked function/result is “Lower conduction drop via conductivity modulation”.\nC) No gate drive needed: Selecting “No gate drive needed” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Lower conduction drop via conductivity modulation”, not “No gate drive needed” (different quantity, basis, or operating regime).\nD) It is a current-controlled BJT only: Current alone without the stem’s required operation/check — incomplete vs “Lower conduction drop via conductivity modulation”.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Lower conduction drop via conductivity modulation”.\n• For Standard+Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Standard+Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Standard+Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Depends on load/R and is higher than CCM formula for same D\n\nWHY CORRECT:\n“Depends on load/R and is higher than CCM formula for same D” matches the stem’s asked duty/quantity under the syllabus relation for AR. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Depends on load/R and is higher than CCM formula for same D.\n\nTRAP ANALYSIS (every wrong option):\nA) Independent of inductance: Selecting “Independent of inductance” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Depends on load/R and is higher than CCM formula for same D”, not “Independent of inductance” (different quantity, basis, or operating regime).\nC) Exactly 1/(1−D) always: Selecting “Exactly 1/(1−D) always” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Depends on load/R and is higher than CCM formula for same D”, not “Exactly 1/(1−D) always” (different quantity, basis, or operating regime).\nD) Equals D as buck: Selecting “Equals D as buck” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Depends on load/R and is higher than CCM formula for same D”, not “Equals D as buck” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Depends on load/R and is higher than CCM formula for same D”.\n• For AR: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same AR with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for AR (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Anode current falls below holding current\n\nWHY CORRECT:\nThis is a Conceptual item in Power Electronics & Drives (Conceptual). The keyed choice “Anode current < holding current for sufficient time” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Electronics & Drives principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Gate pulse remains forever: Selecting “Gate pulse remains forever” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Anode current falls below holding current”, not “Gate pulse remains forever” (different quantity, basis, or operating regime).\nB) Only raising gate current: Current alone without the stem’s required operation/check — incomplete vs “Anode current falls below holding current”.\nD) Voltage zero is never needed in any circuit: Voltage magnitude/regulation topic — plausible neighbour, but the stem’s asked function/result is “Anode current falls below holding current”.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Anode current falls below holding current”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Stays non-negative with delayed conduction each half-cycle (option C on source page)\n\nWHY CORRECT:\nThis is a Diagram item in Power Electronics & Drives (Diagram). The keyed choice “Stays non-negative with delayed conduction each half-cycle (option C on source page)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dep PASS — pick from waveform options on page crop.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Dep PASS — pick from waveform options on page crop.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Stays non-negative with delayed conduction each half-cycle (option C on source page)” (Gate C).\nFinal keyed result: Stays non-negative with delayed conduction each half-cycle (option C on source page)\n\nTRAP ANALYSIS (every wrong option):\nA) Full negative sine: Selecting “Full negative sine” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Stays non-negative with delayed conduction each half-cycle (option C on source page)”, not “Full negative sine” (different quantity, basis, or operating regime).\nB) Always flat DC at Vm: Selecting “Always flat DC at Vm” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Stays non-negative with delayed conduction each half-cycle (option C on source page)”, not “Always flat DC at Vm” (different quantity, basis, or operating regime).\nC) Triangular only: Selecting “Triangular only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Stays non-negative with delayed conduction each half-cycle (option C on source page)”, not “Triangular only” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Stays non-negative with delayed conduction each half-cycle (option C on source page)”.\n• For Diagram: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Diagram with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Diagram (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 2Im/π\n\nWHY CORRECT:\n“2Im/π” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 2Im/π.\n\nTRAP ANALYSIS (every wrong option):\nB) Im/√2: Selecting “Im/√2” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “2Im/π”, not “Im/√2” (different quantity, basis, or operating regime).\nC) Im: Selecting “Im” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “2Im/π”, not “Im” (different quantity, basis, or operating regime).\nD) Im/π: Selecting “Im/π” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “2Im/π”, not “Im/π” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “2Im/π”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Medium-Q coil (compared with Hay for high-Q)\n\nWHY CORRECT:\n“Medium-Q coil (compared with Hay for high-Q)” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Medium-Q coil (compared with Hay for high-Q).\n\nTRAP ANALYSIS (every wrong option):\nA) Very high Q only — Hay never used: Selecting “Very high Q only — Hay never used” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Medium-Q coil (compared with Hay for high-Q)”, not “Very high Q only — Hay never used” (different quantity, basis, or operating regime).\nC) Only pure resistance: Selecting “Only pure resistance” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Medium-Q coil (compared with Hay for high-Q)”, not “Only pure resistance” (different quantity, basis, or operating regime).\nD) Only capacitance standards alone: Selecting “Only capacitance standards alone” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Medium-Q coil (compared with Hay for high-Q)”, not “Only capacitance standards alone” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Medium-Q coil (compared with Hay for high-Q)”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: θ1 and θ2\n\nWHY CORRECT:\nThis is a Diagram+Application item in Power Electronics & Drives (Diagram+Application). The keyed choice “θ1 and θ2” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Electronics & Drives principle for “Diagram+Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) θ2 and 360 only: Classic ×2 slip on “θ2 and 360 only” (doubled length/load/share or used diameter as radius).\nB) Anywhere: Selecting “Anywhere” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “θ1 and θ2”, not “Anywhere” (different quantity, basis, or operating regime).\nD) 0 and θ1 only: Selecting “0 and θ1 only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “θ1 and θ2”, not “0 and θ1 only” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “θ1 and θ2”.\n• For Diagram+Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Diagram+Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Diagram+Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Inverting / regenerative possible (Vo negative average)\n\nWHY CORRECT:\nThis is a Application item in Power Electronics & Drives (Application). The keyed choice “Inverting / regenerative possible (Vo negative average)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Electronics & Drives principle for “Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Answer A.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Inverting / regenerative possible (Vo negative average)” (Gate C).\nFinal keyed result: Inverting / regenerative possible (Vo negative average)\n\nTRAP ANALYSIS (every wrong option):\nA) Always motoring positive Vo: Selecting “Always motoring positive Vo” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Inverting / regenerative possible (Vo negative average)”, not “Always motoring positive Vo” (different quantity, basis, or operating regime).\nB) Device open always: Selecting “Device open always” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Inverting / regenerative possible (Vo negative average)”, not “Device open always” (different quantity, basis, or operating regime).\nC) α invalid always: Selecting “α invalid always” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Inverting / regenerative possible (Vo negative average)”, not “α invalid always” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Inverting / regenerative possible (Vo negative average)”.\n• For Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Cooling path, switching freq, load current, gate drive\n\nWHY CORRECT:\nThis is a Practical item in Power Electronics & Drives (Practical). The keyed choice “Cooling path, switching freq, load current, gate drive” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Electronics & Drives principle for “Practical”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nB) Raise ambient on purpose: Selecting “Raise ambient on purpose” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Cooling path, switching freq, load current, gate drive”, not “Raise ambient on purpose” (different quantity, basis, or operating regime).\nC) Remove snubber always: Selecting “Remove snubber always” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Cooling path, switching freq, load current, gate drive”, not “Remove snubber always” (different quantity, basis, or operating regime).\nD) Ignore heatsink: Selecting “Ignore heatsink” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Cooling path, switching freq, load current, gate drive”, not “Ignore heatsink” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Cooling path, switching freq, load current, gate drive”.\n• For Practical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Practical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Practical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Maxwell bridge\n\nWHY CORRECT:\nThis is a Conceptual item in Electrical Measurements (Conceptual). The keyed choice “Maxwell bridge” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Measurements principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Kelvin: Selecting “Kelvin” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Maxwell bridge”, not “Kelvin” (different quantity, basis, or operating regime).\nC) Wien: Selecting “Wien” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Maxwell bridge”, not “Wien” (different quantity, basis, or operating regime).\nD) Schering: Selecting “Schering” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Maxwell bridge”, not “Schering” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Maxwell bridge”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 30 Ω ±0.9 Ω class\n\nWHY CORRECT:\nThis is a Numerical item in Electrical Measurements (Numerical). The keyed choice “30 Ω ±0.9 Ω class” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: R=PS/Q=3000/100=30; %≈2.1+0.5+0.4=3% → ±0.9 Ω.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: R=PS/Q=3000/100=30; %≈2.1+0.5+0.4=3% → ±0.9 Ω.\nVerify units/pu bases and that the arithmetic lands on the keyed option “30 Ω ±0.9 Ω class” (Gate C).\nFinal keyed result: 30 Ω ±0.9 Ω class\n\nTRAP ANALYSIS (every wrong option):\nA) 3 Ω: Selecting “3 Ω” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “30 Ω ±0.9 Ω class”, not “3 Ω” (different quantity, basis, or operating regime).\nB) 300 Ω ±90: Selecting “300 Ω ±90” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “30 Ω ±0.9 Ω class”, not “300 Ω ±90” (different quantity, basis, or operating regime).\nD) 3000 Ω: Selecting “3000 Ω” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “30 Ω ±0.9 Ω class”, not “3000 Ω” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “30 Ω ±0.9 Ω class”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Attenuator → vertical amp → (delay) → vertical plates\n\nWHY CORRECT:\nThis is a Diagram item in Electrical Measurements (Diagram). The keyed choice “Attenuator → vertical amp → (delay) → vertical plates” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Measurements principle for “Diagram”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Time-base only: Selecting “Time-base only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Attenuator → vertical amp → (delay) → vertical plates”, not “Time-base only” (different quantity, basis, or operating regime).\nB) Blanking only: Selecting “Blanking only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Attenuator → vertical amp → (delay) → vertical plates”, not “Blanking only” (different quantity, basis, or operating regime).\nC) Horizontal amp only: Selecting “Horizontal amp only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Attenuator → vertical amp → (delay) → vertical plates”, not “Horizontal amp only” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Attenuator → vertical amp → (delay) → vertical plates”.\n• For Diagram: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Diagram with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Diagram (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 0.6 Ω\n\nWHY CORRECT:\nThis is a Numerical item in Electrical Measurements (Numerical). The keyed choice “0.6 Ω” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Z=VA/I²=15/25=0.6.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Z=VA/I²=15/25=0.6.\nVerify units/pu bases and that the arithmetic lands on the keyed option “0.6 Ω” (Gate C).\nFinal keyed result: 0.6 Ω\n\nTRAP ANALYSIS (every wrong option):\nB) 15 Ω: Selecting “15 Ω” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.6 Ω”, not “15 Ω” (different quantity, basis, or operating regime).\nC) 100 Ω: Selecting “100 Ω” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.6 Ω”, not “100 Ω” (different quantity, basis, or operating regime).\nD) 3 Ω: Selecting “3 Ω” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “0.6 Ω”, not “3 Ω” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0.6 Ω”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Very low resistance\n\nWHY CORRECT:\nThis is a Application item in Electrical Measurements (Application). The keyed choice “Very low resistance” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Measurements principle for “Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Capacitance only: Selecting “Capacitance only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Very low resistance”, not “Capacitance only” (different quantity, basis, or operating regime).\nC) Frequency only: System frequency / cycle timing — not the quantity this stem asks; CB/protection primary duty is interrupting fault current, not “frequency” as an answer label.\nD) Very high MΩ only: Selecting “Very high MΩ only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Very low resistance”, not “Very high MΩ only” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Very low resistance”.\n• For Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Most current bypasses meter movement\n\nWHY CORRECT:\nThis is a Graph item in Electrical Measurements (Graph). The keyed choice “Most current bypasses meter movement” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Measurements principle for “Graph”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Increases coil R always for higher I: Selecting “Increases coil R always for higher I” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Most current bypasses meter movement”, not “Increases coil R always for higher I” (different quantity, basis, or operating regime).\nB) Open coil: Selecting “Open coil” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Most current bypasses meter movement”, not “Open coil” (different quantity, basis, or operating regime).\nD) Series multiplies current in coil: Current alone without the stem’s required operation/check — incomplete vs “Most current bypasses meter movement”.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Most current bypasses meter movement”.\n• For Graph: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Graph with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Graph (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Infinite, infinite\n\nWHY CORRECT:\nThis is a Conceptual item in Analog Electronics (Conceptual). The keyed choice “Infinite, infinite” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Analog Electronics principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Zero, zero: Selecting “Zero, zero” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Infinite, infinite”, not “Zero, zero” (different quantity, basis, or operating regime).\nB) 1, 0: Selecting “1, 0” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Infinite, infinite”, not “1, 0” (different quantity, basis, or operating regime).\nC) Finite fixed always 10: Selecting “Finite fixed always 10” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Infinite, infinite”, not “Finite fixed always 10” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Infinite, infinite”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 2 mA\n\nWHY CORRECT:\nThis is a Diagram+Numerical item in Analog Electronics (Diagram+Numerical). The keyed choice “2 mA” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Iz from crop labels (GATE-style worked key ≈ 2 mA). Dep PASS/STRONG.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Iz from crop labels (GATE-style worked key ≈ 2 mA). Dep PASS/STRONG.\nVerify units/pu bases and that the arithmetic lands on the keyed option “2 mA” (Gate C).\nFinal keyed result: 2 mA\n\nTRAP ANALYSIS (every wrong option):\nB) 10 mA: Selecting “10 mA” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “2 mA”, not “10 mA” (different quantity, basis, or operating regime).\nC) 0 mA: Selecting “0 mA” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “2 mA”, not “0 mA” (different quantity, basis, or operating regime).\nD) 5 mA: Selecting “5 mA” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “2 mA”, not “5 mA” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “2 mA”.\n• For Diagram+Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Diagram+Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Diagram+Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 100√2 V\n\nWHY CORRECT:\nThis is a Diagram+Numerical item in Analog Electronics (Diagram+Numerical). The keyed choice “100√2 V” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Peak of other half ≈100√2.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Peak of other half ≈100√2.\nVerify units/pu bases and that the arithmetic lands on the keyed option “100√2 V” (Gate C).\nFinal keyed result: 100√2 V\n\nTRAP ANALYSIS (every wrong option):\nA) 50√2: Classic ÷2 slip on “50√2” (halved length/share or used radius as diameter).\nC) 100 V: Selecting “100 V” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “100√2 V”, not “100 V” (different quantity, basis, or operating regime).\nD) 50 V: Classic ÷2 slip on “50 V” (halved length/share or used radius as diameter).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “100√2 V”.\n• For Diagram+Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Diagram+Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Diagram+Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Both; R explains\n\nWHY CORRECT:\nThis is a AR item in Analog Electronics (AR). The keyed choice “Both; R explains” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Analog Electronics principle for “AR”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) A true R false: Selecting “A true R false” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Both; R explains”, not “A true R false” (different quantity, basis, or operating regime).\nB) A false R true: Selecting “A false R true” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Both; R explains”, not “A false R true” (different quantity, basis, or operating regime).\nD) Both; R not: Selecting “Both; R not” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Both; R explains”, not “Both; R not” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Both; R explains”.\n• For AR: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same AR with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for AR (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: A′+B′\n\nWHY CORRECT:\nThis is a Conceptual item in Digital Electronics (Conceptual). The keyed choice “A′+B′” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Digital Electronics principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) A′·B′: Selecting “A′·B′” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “A′+B′”, not “A′·B′” (different quantity, basis, or operating regime).\nB) A+B: Selecting “A+B” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “A′+B′”, not “A+B” (different quantity, basis, or operating regime).\nC) A·B: Selecting “A·B” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “A′+B′”, not “A·B” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “A′+B′”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: P-NAND, Q-NOR, R-XOR, S-AND\n\nWHY CORRECT:\nThis is a Matching+Diagram item in Digital Electronics (Matching+Diagram). The keyed choice “P-NAND, Q-NOR, R-XOR, S-AND” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dep PASS/STRONG — codes follow crop labels (verify page has gate sketches at crop time).\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nB) P-XOR, Q-AND, R-NAND, S-NOR: Selecting “P-XOR, Q-AND, R-NAND, S-NOR” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “P-NAND, Q-NOR, R-XOR, S-AND”, not “P-XOR, Q-AND, R-NAND, S-NOR” (different quantity, basis, or operating regime).\nC) P-AND, Q-XOR, R-NOR, S-NAND: Selecting “P-AND, Q-XOR, R-NOR, S-NAND” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “P-NAND, Q-NOR, R-XOR, S-AND”, not “P-AND, Q-XOR, R-NOR, S-NAND” (different quantity, basis, or operating regime).\nD) P-NOR, Q-NAND, R-AND, S-XOR: Selecting “P-NOR, Q-NAND, R-AND, S-XOR” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “P-NAND, Q-NOR, R-XOR, S-AND”, not “P-NOR, Q-NAND, R-AND, S-XOR” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “P-NAND, Q-NOR, R-XOR, S-AND”.\n• For Matching+Diagram: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Matching+Diagram with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Matching+Diagram (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 01\n\nWHY CORRECT:\nThis is a Numerical item in Digital Electronics (Numerical). The keyed choice “01” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: 5 mod 4 = 1 → 01.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: 5 mod 4 = 1 → 01.\nVerify units/pu bases and that the arithmetic lands on the keyed option “01” (Gate C).\nFinal keyed result: 01\n\nTRAP ANALYSIS (every wrong option):\nA) 10: Selecting “10” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “01”, not “10” (different quantity, basis, or operating regime).\nC) 11: Selecting “11” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “01”, not “11” (different quantity, basis, or operating regime).\nD) 00: Selecting “00” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “01”, not “00” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “01”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Gravity + resistance + acceleration force\n\nWHY CORRECT:\nThis is a Conceptual item in Utilization of Electrical Energy (Conceptual). The keyed choice “Gravity + resistance + acceleration force” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Utilization of Electrical Energy principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Only transformer magnetising: Selecting “Only transformer magnetising” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Gravity + resistance + acceleration force”, not “Only transformer magnetising” (different quantity, basis, or operating regime).\nB) Only skin effect: Selecting “Only skin effect” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Gravity + resistance + acceleration force”, not “Only skin effect” (different quantity, basis, or operating regime).\nD) Only corona: Selecting “Only corona” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Gravity + resistance + acceleration force”, not “Only corona” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Gravity + resistance + acceleration force”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 128 W\n\nWHY CORRECT:\nThis is a Numerical item in Utilization of Electrical Energy (Numerical). The keyed choice “128 W” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: P∝V² → 200×(200/250)²=128.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: P∝V² → 200×(200/250)²=128.\nVerify units/pu bases and that the arithmetic lands on the keyed option “128 W” (Gate C).\nFinal keyed result: 128 W\n\nTRAP ANALYSIS (every wrong option):\nA) 200: Selecting “200” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “128 W”, not “200” (different quantity, basis, or operating regime).\nB) 250: Classic ×2 slip on “250” (doubled length/load/share or used diameter as radius).\nC) 160: Selecting “160” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “128 W”, not “160” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “128 W”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Ward–Leonard / 4Q converter drive\n\nWHY CORRECT:\nThis is a Application item in Utilization of Electrical Energy (Application). The keyed choice “Ward–Leonard / 4Q converter drive” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Utilization of Electrical Energy principle for “Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nB) Fixed 1φ dimmer only: Selecting “Fixed 1φ dimmer only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Ward–Leonard / 4Q converter drive”, not “Fixed 1φ dimmer only” (different quantity, basis, or operating regime).\nC) Open-loop heater: Selecting “Open-loop heater” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Ward–Leonard / 4Q converter drive”, not “Open-loop heater” (different quantity, basis, or operating regime).\nD) Soft starter only DOL forever: Selecting “Soft starter only DOL forever” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Ward–Leonard / 4Q converter drive”, not “Soft starter only DOL forever” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Ward–Leonard / 4Q converter drive”.\n• For Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: tonne-km\n\nWHY CORRECT:\nThis is a Standard item in Utilization of Electrical Energy (Standard). The keyed choice “tonne-km” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: SEC = energy / (tonne·km).\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: SEC = energy / (tonne·km).\nVerify units/pu bases and that the arithmetic lands on the keyed option “tonne-km” (Gate C).\nFinal keyed result: tonne-km\n\nTRAP ANALYSIS (every wrong option):\nA) volt-ampere only: Selecting “volt-ampere only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “tonne-km”, not “volt-ampere only” (different quantity, basis, or operating regime).\nC) km only: Selecting “km only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “tonne-km”, not “km only” (different quantity, basis, or operating regime).\nD) tonne only: Selecting “tonne only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “tonne-km”, not “tonne only” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “tonne-km”.\n• For Standard: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Standard with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Standard (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 3 days\n\nWHY CORRECT:\n3 days This uniquely selects “3 days”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 3 days\nFinal keyed result: 3 days.\n\nTRAP ANALYSIS (every wrong option):\nA) 2 days: Selecting “2 days” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “3 days”, not “2 days” (different quantity, basis, or operating regime).\nC) 4 days: Selecting “4 days” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “3 days”, not “4 days” (different quantity, basis, or operating regime).\nD) 6 days: Classic ×2 slip on “6 days” (doubled length/load/share or used diameter as radius).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: 15%\n\nWHY CORRECT:\n15% This uniquely selects “15%”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 15%\nFinal keyed result: 15%.\n\nTRAP ANALYSIS (every wrong option):\nA) 12%: Selecting “12%” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “15%”, not “12%” (different quantity, basis, or operating regime).\nC) 18%: Selecting “18%” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “15%”, not “18%” (different quantity, basis, or operating regime).\nD) 20%: Selecting “20%” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “15%”, not “20%” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: 12\n\nWHY CORRECT:\n12 This uniquely selects “12”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 12\nFinal keyed result: 12.\n\nTRAP ANALYSIS (every wrong option):\nA) 7: Selecting “7” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “12”, not “7” (different quantity, basis, or operating regime).\nB) 8: Selecting “8” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “12”, not “8” (different quantity, basis, or operating regime).\nC) 10: Selecting “10” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “12”, not “10” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: 41 MU\n\nWHY CORRECT:\n41 MU This uniquely selects “41 MU”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 41 MU\nFinal keyed result: 41 MU.\n\nTRAP ANALYSIS (every wrong option):\nA) 40 MU: Selecting “40 MU” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “41 MU”, not “40 MU” (different quantity, basis, or operating regime).\nC) 42 MU: Selecting “42 MU” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “41 MU”, not “42 MU” (different quantity, basis, or operating regime).\nD) 43 MU: Selecting “43 MU” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “41 MU”, not “43 MU” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: 48 km/h\n\nWHY CORRECT:\n48 km/h This uniquely selects “48 km/h”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 48 km/h\nFinal keyed result: 48 km/h.\n\nTRAP ANALYSIS (every wrong option):\nB) 50 km/h: Selecting “50 km/h” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “48 km/h”, not “50 km/h” (different quantity, basis, or operating regime).\nC) 52 km/h: Selecting “52 km/h” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “48 km/h”, not “52 km/h” (different quantity, basis, or operating regime).\nD) 45 km/h: Selecting “45 km/h” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “48 km/h”, not “45 km/h” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: ₹40,000\n\nWHY CORRECT:\n₹40,000 This uniquely selects “₹40,000”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: ₹40,000\nFinal keyed result: ₹40,000.\n\nTRAP ANALYSIS (every wrong option):\nA) ₹30,000: Selecting “₹30,000” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “₹40,000”, not “₹30,000” (different quantity, basis, or operating regime).\nC) ₹48,000: Selecting “₹48,000” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “₹40,000”, not “₹48,000” (different quantity, basis, or operating regime).\nD) ₹50,000: Selecting “₹50,000” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “₹40,000”, not “₹50,000” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: ₹9.0 lakh\n\nWHY CORRECT:\n₹9.0 lakh This uniquely selects “₹9.0 lakh”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: ₹9.0 lakh\nFinal keyed result: ₹9.0 lakh.\n\nTRAP ANALYSIS (every wrong option):\nA) ₹8.0 lakh: Selecting “₹8.0 lakh” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “₹9.0 lakh”, not “₹8.0 lakh” (different quantity, basis, or operating regime).\nC) ₹10.0 lakh: Selecting “₹10.0 lakh” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “₹9.0 lakh”, not “₹10.0 lakh” (different quantity, basis, or operating regime).\nD) ₹11.0 lakh: Selecting “₹11.0 lakh” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “₹9.0 lakh”, not “₹11.0 lakh” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: 24\n\nWHY CORRECT:\n24 This uniquely selects “24”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 24\nFinal keyed result: 24.\n\nTRAP ANALYSIS (every wrong option):\nA) 12: Classic ÷2 slip on “12” (halved length/share or used radius as diameter).\nB) 18: Selecting “18” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “24”, not “18” (different quantity, basis, or operating regime).\nD) 48: Classic ×2 slip on “48” (doubled length/load/share or used diameter as radius).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: ₹3,500 crore\n\nWHY CORRECT:\n₹3,500 crore This uniquely selects “₹3,500 crore”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: ₹3,500 crore\nFinal keyed result: ₹3,500 crore.\n\nTRAP ANALYSIS (every wrong option):\nA) ₹350 crore: Selecting “₹350 crore” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “₹3,500 crore”, not “₹350 crore” (different quantity, basis, or operating regime).\nC) ₹35,000 crore: Selecting “₹35,000 crore” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “₹3,500 crore”, not “₹35,000 crore” (different quantity, basis, or operating regime).\nD) ₹350,000 crore: Selecting “₹350,000 crore” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “₹3,500 crore”, not “₹350,000 crore” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “₹3,500 crore”.\n• For CA-AP power transmission: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same CA-AP power transmission with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for CA-AP power transmission (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 2028\n\nWHY CORRECT:\n2028 This uniquely selects “2028”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 2028\nFinal keyed result: 2028.\n\nTRAP ANALYSIS (every wrong option):\nA) 2024: Selecting “2024” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “2028”, not “2024” (different quantity, basis, or operating regime).\nB) 2026: Selecting “2026” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “2028”, not “2026” (different quantity, basis, or operating regime).\nD) 2035: Selecting “2035” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “2028”, not “2035” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “2028”.\n• For CA-AP capital region: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same CA-AP capital region with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for CA-AP capital region (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: About ₹30 lakh crore\n\nWHY CORRECT:\nAbout ₹30 lakh crore This uniquely selects “About ₹30 lakh crore”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: About ₹30 lakh crore\nFinal keyed result: About ₹30 lakh crore.\n\nTRAP ANALYSIS (every wrong option):\nA) About ₹3 lakh crore: Selecting “About ₹3 lakh crore” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “About ₹30 lakh crore”, not “About ₹3 lakh crore” (different quantity, basis, or operating regime).\nC) About ₹300 lakh crore: Selecting “About ₹300 lakh crore” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “About ₹30 lakh crore”, not “About ₹300 lakh crore” (different quantity, basis, or operating regime).\nD) About ₹30,000 crore: Selecting “About ₹30,000 crore” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “About ₹30 lakh crore”, not “About ₹30,000 crore” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “About ₹30 lakh crore”.\n• For CA-National digital payments: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same CA-National digital payments with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for CA-National digital payments (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Gaganyaan\n\nWHY CORRECT:\nGaganyaan This uniquely selects “Gaganyaan”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Chandrayaan: Selecting “Chandrayaan” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Gaganyaan”, not “Chandrayaan” (different quantity, basis, or operating regime).\nC) Aditya-L1: Selecting “Aditya-L1” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Gaganyaan”, not “Aditya-L1” (different quantity, basis, or operating regime).\nD) NISAR: Selecting “NISAR” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Gaganyaan”, not “NISAR” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Gaganyaan”.\n• For CA-National space: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same CA-National space with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for CA-National space (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: President of India\n\nWHY CORRECT:\nPresident of India This uniquely selects “President of India”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Chief Justice of India: Selecting “Chief Justice of India” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “President of India”, not “Chief Justice of India” (different quantity, basis, or operating regime).\nC) Speaker of the Lok Sabha only: Selecting “Speaker of the Lok Sabha only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “President of India”, not “Speaker of the Lok Sabha only” (different quantity, basis, or operating regime).\nD) Chairman of the Rajya Sabha: Selecting “Chairman of the Rajya Sabha” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “President of India”, not “Chairman of the Rajya Sabha” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “President of India”.\n• For polity (Money Bill): write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same polity (Money Bill) with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for polity (Money Bill) (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Amaravati\n\nWHY CORRECT:\nAmaravati This uniquely selects “Amaravati”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Visakhapatnam: Selecting “Visakhapatnam” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Amaravati”, not “Visakhapatnam” (different quantity, basis, or operating regime).\nC) Tirupati: Selecting “Tirupati” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Amaravati”, not “Tirupati” (different quantity, basis, or operating regime).\nD) Kurnool: Selecting “Kurnool” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Amaravati”, not “Kurnool” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Amaravati”.\n• For geography (AP): write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same geography (AP) with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for geography (AP) (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Make policy borrowing costlier and cool demand-side pressure\n\nWHY CORRECT:\nMake policy borrowing costlier and cool demand-side pressure\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Make borrowing cheaper and boost demand: Selecting “Make borrowing cheaper and boost demand” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Make policy borrowing costlier and cool demand-side pressure”, not “Make borrowing cheaper and boost demand” (different quantity, basis, or operating regime).\nC) Directly fix retail petrol prices: Selecting “Directly fix retail petrol prices” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Make policy borrowing costlier and cool demand-side pressure”, not “Directly fix retail petrol prices” (different quantity, basis, or operating regime).\nD) Abolish CRR: Selecting “Abolish CRR” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Make policy borrowing costlier and cool demand-side pressure”, not “Abolish CRR” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Make policy borrowing costlier and cool demand-side pressure”.\n• For economy (RBI tool): write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same economy (RBI tool) with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for economy (RBI tool) (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: CBZ\n\nWHY CORRECT:\nCBZ This uniquely selects “CBZ”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) CBX: Selecting “CBX” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “CBZ”, not “CBX” (different quantity, basis, or operating regime).\nB) ABZ: Selecting “ABZ” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “CBZ”, not “ABZ” (different quantity, basis, or operating regime).\nD) AAX: Selecting “AAX” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “CBZ”, not “AAX” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “CBZ”.\n• For coding (station code): write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same coding (station code) with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for coding (station code) (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Friday\n\nWHY CORRECT:\nFriday This uniquely selects “Friday”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Monday: Selecting “Monday” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Friday”, not “Monday” (different quantity, basis, or operating regime).\nB) Tuesday: Selecting “Tuesday” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Friday”, not “Tuesday” (different quantity, basis, or operating regime).\nC) Thursday: Selecting “Thursday” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Friday”, not “Thursday” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Friday”.\n• For scheduling (outage slots): write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same scheduling (outage slots) with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for scheduling (outage slots) (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Only II\n\nWHY CORRECT:\nOnly II This uniquely selects “Only II”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Only I: Selecting “Only I” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Only II”, not “Only I” (different quantity, basis, or operating regime).\nC) Both I and II: Selecting “Both I and II” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Only II”, not “Both I and II” (different quantity, basis, or operating regime).\nD) Neither I nor II: Selecting “Neither I nor II” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Only II”, not “Neither I nor II” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Only II”.\n• For syllogism: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same syllogism with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for syllogism (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 3 km east\n\nWHY CORRECT:\n3 km east This uniquely selects “3 km east”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 3 km east\nFinal keyed result: 3 km east.\n\nTRAP ANALYSIS (every wrong option):\nB) 3 km west: Selecting “3 km west” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “3 km east”, not “3 km west” (different quantity, basis, or operating regime).\nC) 5 km east: Selecting “5 km east” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “3 km east”, not “5 km east” (different quantity, basis, or operating regime).\nD) 4 km north: Selecting “4 km north” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “3 km east”, not “4 km north” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “3 km east”.\n• For direction (feeder route): write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same direction (feeder route) with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for direction (feeder route) (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Fault current interruption\n\nWHY CORRECT:\nAnalogy A:B :: C:? means B is the primary function of A. Transformer pairs with voltage transformation; a circuit breaker pairs with interrupting fault current (its defining protective duty). Frequency, power factor, and reactive power are neighbouring power-system quantities, not that duty.\n\nCALCULATION:\nN/A — conceptual analogy (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Frequency: System frequency (Hz) is an operating quantity. A CB does not transform/regulate frequency the way a transformer acts on voltage — wrong analogy mapping.\nC) Power factor: PF = kW/kVA is a load/operating state. Capacitors/SVC manage PF/VARs; that is not the CB’s primary role in the Transformer:Voltage pairing.\nD) Reactive power only: VAR flow is a power-component concept. Breaker duty is clearing fault current (breaking capacity in kA), not “reactive power only”.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Analogy form A:B :: C:? → B is the primary function/effect of A; ? is the primary function of C.\n• Transformer ↔ voltage transformation; Circuit breaker ↔ fault-current interruption (breaking/making capacity).\n• Isolator/disconnector isolates on no-load — it is NOT a fault-breaking CB.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Relay : detection/initiation :: Circuit breaker : interruption (clearing).\n• Isolator vs CB: no-load isolation vs fault break — classic twin distractor.\n• Transformer : voltage :: CT : current (instrument-transformer analogy).",
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
    "explanation": "CORRECT: Lose section capacity faster under wind loads\n\nWHY CORRECT:\nLose section capacity faster under wind loads\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Increase transformer oil acidity: Selecting “Increase transformer oil acidity” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Lose section capacity faster under wind loads”, not “Increase transformer oil acidity” (different quantity, basis, or operating regime).\nC) Reduce busbar ampacity only: Selecting “Reduce busbar ampacity only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Lose section capacity faster under wind loads”, not “Reduce busbar ampacity only” (different quantity, basis, or operating regime).\nD) Eliminate the need for drainage checks: Selecting “Eliminate the need for drainage checks” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Lose section capacity faster under wind loads”, not “Eliminate the need for drainage checks” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Lose section capacity faster under wind loads”.\n• For passage comprehension: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same passage comprehension with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for passage comprehension (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: The relay settings were verified by the engineer.\n\nWHY CORRECT:\nThe relay settings were verified by the engineer.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) The relay settings verified the engineer.: Selecting “The relay settings verified the engineer.” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “The relay settings were verified by the engineer.”, not “The relay settings verified the engineer.” (different quantity, basis, or operating regime).\nC) The relay settings are verify by the engineer.: Selecting “The relay settings are verify by the engineer.” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “The relay settings were verified by the engineer.”, not “The relay settings are verify by the engineer.” (different quantity, basis, or operating regime).\nD) The engineer was verified by the relay settings.: Selecting “The engineer was verified by the relay settings.” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “The relay settings were verified by the engineer.”, not “The engineer was verified by the relay settings.” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “The relay settings were verified by the engineer.”.\n• For active-passive: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same active-passive with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for active-passive (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: He said that he was checking the earthing.\n\nWHY CORRECT:\nHe said that he was checking the earthing.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) He said that he is checking the earthing.: Selecting “He said that he is checking the earthing.” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “He said that he was checking the earthing.”, not “He said that he is checking the earthing.” (different quantity, basis, or operating regime).\nC) He said that I am checking the earthing.: Selecting “He said that I am checking the earthing.” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “He said that he was checking the earthing.”, not “He said that I am checking the earthing.” (different quantity, basis, or operating regime).\nD) He said that he will checking the earthing.: Selecting “He said that he will checking the earthing.” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “He said that he was checking the earthing.”, not “He said that he will checking the earthing.” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “He said that he was checking the earthing.”.\n• For direct-indirect: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same direct-indirect with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for direct-indirect (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: was willing\n\nWHY CORRECT:\nwas willing This uniquely selects “was willing”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Neither the contractor: Selecting “Neither the contractor” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “was willing”, not “Neither the contractor” (different quantity, basis, or operating regime).\nB) nor the supervisors: Selecting “nor the supervisors” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “was willing”, not “nor the supervisors” (different quantity, basis, or operating regime).\nD) to sign the record.: Selecting “to sign the record.” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “was willing”, not “to sign the record.” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “was willing”.\n• For error spotting: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same error spotting with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for error spotting (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Brief and clear\n\nWHY CORRECT:\nBrief and clear This uniquely selects “Brief and clear”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Lengthy and detailed: Selecting “Lengthy and detailed” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Brief and clear”, not “Lengthy and detailed” (different quantity, basis, or operating regime).\nC) Vague and delayed: Selecting “Vague and delayed” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Brief and clear”, not “Vague and delayed” (different quantity, basis, or operating regime).\nD) Hostile: Selecting “Hostile” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Brief and clear”, not “Hostile” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Brief and clear”.\n• For vocabulary-in-context: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same vocabulary-in-context with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for vocabulary-in-context (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Multi-factor authentication\n\nWHY CORRECT:\nMulti-factor authentication This uniquely selects “Multi-factor authentication”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Larger monitor: Selecting “Larger monitor” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Multi-factor authentication”, not “Larger monitor” (different quantity, basis, or operating regime).\nC) Defragmenting the disk: Selecting “Defragmenting the disk” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Multi-factor authentication”, not “Defragmenting the disk” (different quantity, basis, or operating regime).\nD) Increasing screen brightness: Selecting “Increasing screen brightness” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Multi-factor authentication”, not “Increasing screen brightness” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Multi-factor authentication”.\n• For cybersecurity: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same cybersecurity with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for cybersecurity (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: DNS\n\nWHY CORRECT:\nDNS This uniquely selects “DNS”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) FTP: Selecting “FTP” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “DNS”, not “FTP” (different quantity, basis, or operating regime).\nC) SMTP: Selecting “SMTP” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “DNS”, not “SMTP” (different quantity, basis, or operating regime).\nD) DHCP only for printing: Selecting “DHCP only for printing” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “DNS”, not “DHCP only for printing” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “DNS”.\n• For networking: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same networking with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for networking (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: $A$1\n\nWHY CORRECT:\n$A$1 This uniquely selects “$A$1”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: $A$1\nFinal keyed result: $A$1.\n\nTRAP ANALYSIS (every wrong option):\nA) A1: Squared a linear quantity to land on “A1” — wrong power of the governing variable.\nB) $A1: Squared a linear quantity to land on “$A1” — wrong power of the governing variable.\nC) A$1: Squared a linear quantity to land on “A$1” — wrong power of the governing variable.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “$A$1”.\n• For spreadsheet: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same spreadsheet with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for spreadsheet (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Primary key\n\nWHY CORRECT:\nPrimary key This uniquely selects “Primary key”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Foreign key only: Selecting “Foreign key only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Primary key”, not “Foreign key only” (different quantity, basis, or operating regime).\nC) Default value only: Selecting “Default value only” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Primary key”, not “Default value only” (different quantity, basis, or operating regime).\nD) Check constraint for colour: Selecting “Check constraint for colour” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “Primary key”, not “Check constraint for colour” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Primary key”.\n• For database: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same database with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for database (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: RAM is typically volatile working memory; disk provides persistent storage\n\nWHY CORRECT:\nRAM is typically volatile working memory; disk provides persistent storage\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) RAM is non-volatile long-term storage; disk is only for CPU registers: Selecting “RAM is non-volatile long-term storage; disk is only for CPU registers” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “RAM is typically volatile working memory; disk provides persistent storage”, not “RAM is non-volatile long-term storage; disk is only for CPU registers” (different quantity, basis, or operating regime).\nC) Both are identical in volatility and speed: Selecting “Both are identical in volatility and speed” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “RAM is typically volatile working memory; disk provides persistent storage”, not “Both are identical in volatility and speed” (different quantity, basis, or operating regime).\nD) Disk contents are erased every time power is on: Selecting “Disk contents are erased every time power is on” mixes up a neighbouring syllabus result with the stem’s actual ask. Under the given data/conditions the governing check yields “RAM is typically volatile working memory; disk provides persistent storage”, not “Disk contents are erased every time power is on” (different quantity, basis, or operating regime).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “RAM is typically volatile working memory; disk provides persistent storage”.\n• For OS / files: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same OS / files with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for OS / files (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  }
];
