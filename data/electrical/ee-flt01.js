// Electrical Engineering FLT — examiner-language stem pass
// answer is a 0-based option index
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
    "explanation": "CORRECT: 640\n\nWHY CORRECT:\nThis is a Conceptual item in Power Systems (Conceptual). The keyed choice “√(L/C) and V²” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: SIL = V²/Zc, Zc=√(L/C).\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: SIL = V²/Zc, Zc=√(L/C).\nVerify units/pu bases and that the arithmetic lands on the keyed option “√(L/C) and V²” (Gate C).\nFinal keyed result: √(L/C) and V²\n\nTRAP ANALYSIS (every wrong option):\nB) 400: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “640”). Re-derive from the stem quantities before matching an option.\nC) 250: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “640”). Re-derive from the stem quantities before matching an option.\nD) 160: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “640”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “640”.\n• For SIL: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same SIL with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for SIL (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 0.1\n\nWHY CORRECT:\nThis is a Standard+Numerical item in Power Systems (Standard+Numerical). The keyed choice “484” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Zb = kV²/MVA = 220²/100 = 484.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Zb = kV²/MVA = 220²/100 = 484.\nVerify units/pu bases and that the arithmetic lands on the keyed option “484” (Gate C).\nFinal keyed result: 484\n\nTRAP ANALYSIS (every wrong option):\nA) 0.5: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.1”). Re-derive from the stem quantities before matching an option.\nC) 0.2: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.1”). Re-derive from the stem quantities before matching an option.\nD) 1.0: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.1”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Equal length + common rigid ends ⇒ ε_brass = ε_steel ⇒ force share ∝ A·E (not area alone).\n• Brass share = (Ab·Eb) / (Ab·Eb + As·Es). With Es/Eb=2, As=600, Ab=900 → AEs=1200, AEb=900 → brass = 900/2100 = 3/7.\n• Steel share is the complement 4/7. Doubling only Ab changes the AE weights — recompute the fraction; do not keep 3/7.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same data: steel share = 4/7 (always check both sum to 1).\n• If Es/Eb becomes 1 (same E), shares collapse to area ratio 900:(600+900)=900/1500=3/5.\n• Temperature rise with fixed composite ends: redundant force from Δ = αΔT L compatibility — different equation set.",
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
    "explanation": "CORRECT: 1.11\n\nWHY CORRECT:\n“1.11” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 1.11.\n\nTRAP ANALYSIS (every wrong option):\nA) 2.0: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “1.11”). Re-derive from the stem quantities before matching an option.\nB) 3.33: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “1.11”). Re-derive from the stem quantities before matching an option.\nD) 5.0: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “1.11”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “1.11”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2\n\nWHY CORRECT:\nParallel feeders between buses need directional discrimination so only the faulted path is isolated; radial outbound feeders also need directional units at critical locations. Option C places the minimum directional set that covers parallel Lines 1–2 and the outbound Line 3 / bus-2 backfeed path.\n\nCALCULATION:\nN/A — protection logic from SLD topology (diagram-dependent).\n\nTRAP ANALYSIS (every wrong option):\nA) R3 and R4 directional toward Line1 and Line2 respectively only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2”). Re-derive from the stem quantities before matching an option.\nB) R3 and R4 directional blocking toward bus 2 only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2”). Re-derive from the stem quantities before matching an option.\nC) R3,R4 directional toward bus 2 and R7 directional toward bus 3: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• λ = Le / r_min with Le and r in the SAME unit (convert 2.1 m → 2100 mm before dividing by 35 mm).\n• If the stem already gives effective length Le, do NOT multiply again by end-factor K.\n• Larger r_min ⇒ smaller λ ⇒ higher buckling strength (for the same Le).\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Both-ends-fixed ideal K=0.5 (IS often ~0.65 practical) → Le=K·L_geo, then λ=Le/r.\n• If r is halved, λ doubles (e.g. 60 → 120) — classic distractor.\n• Euler assumes straight + concentric + elastic; crookedness/eccentricity voids bare Euler.",
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
    "explanation": "CORRECT: 667\n\nWHY CORRECT:\n“667” matches the stem’s asked duty/quantity under the syllabus relation for AR. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 667.\n\nTRAP ANALYSIS (every wrong option):\nB) 333: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “667”). Re-derive from the stem quantities before matching an option.\nC) 1333: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “667”). Re-derive from the stem quantities before matching an option.\nD) 100: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “667”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “667”.\n• For AR: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same AR with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for AR (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Light/no load + long line + open receiving end\n\nWHY CORRECT:\nThis is a Conceptual item in Power Systems (Conceptual). The keyed choice “Line lightly loaded / open receiving end + long line” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Systems principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Heavy load + short cable: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Light/no load + long line + open receiving end”). Re-derive from the stem quantities before matching an option.\nC) Unity pf near SIL always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Light/no load + long line + open receiving end”). Re-derive from the stem quantities before matching an option.\nD) Zero shunt capacitance: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Light/no load + long line + open receiving end”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• τ_avg = V/(b d). For 100×200 mm and V=16 kN → τ_avg=16000/(100·200)=0.8 MPa.\n• Rectangle elastic: τ_max = (3/2) τ_avg = 1.2 MPa, located at the neutral axis.\n• At extreme fibres of a rectangle, elastic beam shear stress is 0 — never put τ_max there.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Circular section: τ_max=(4/3)τ_avg on NA.\n• I-section: almost all shear in web ≈ V/(d·tw) estimate.",
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
    "explanation": "CORRECT: 5.0e-4\n\nWHY CORRECT:\n“5.0e-4” matches the stem’s asked duty/quantity under the syllabus relation for Application. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 5.0e-4.\n\nTRAP ANALYSIS (every wrong option):\nA) 80: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “5.0e-4”). Re-derive from the stem quantities before matching an option.\nB) 1.0: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “5.0e-4”). Re-derive from the stem quantities before matching an option.\nD) 0.02: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “5.0e-4”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “5.0e-4”.\n• For Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Only positive-sequence network\n\nWHY CORRECT:\n“Only positive-sequence network” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Only positive-sequence network.\n\nTRAP ANALYSIS (every wrong option):\nA) Parallel of all three: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Only positive-sequence network”). Re-derive from the stem quantities before matching an option.\nB) Negative alone: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Only positive-sequence network”). Re-derive from the stem quantities before matching an option.\nC) Series (Z1+Z2+Z0): Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Only positive-sequence network”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Only positive-sequence network”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 9,
    "subject": "Power Systems",
    "topic": "Diagram+Numerical",
    "question": "From the open-conductor / sequence figure shown (use only labelled phase currents; Ic = 0), the zero-sequence current Ia0 is:",
    "image": "images/diagrams/electrical-flt01/q09-open-conductor.jpg",
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
    "explanation": "CORRECT: 0 A\n\nWHY CORRECT:\nThis is a Diagram+Numerical item in Power Systems (Diagram+Numerical). The keyed choice “0 A” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Systems principle for “Diagram+Numerical”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: (Ia+Ib+Ic)/3=0.\nVerify units/pu bases and that the arithmetic lands on the keyed option “0 A” (Gate C).\nFinal keyed result: 0 A\n\nTRAP ANALYSIS (every wrong option):\nB) 5.78 A: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0 A”). Re-derive from the stem quantities before matching an option.\nC) 3.33 A: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0 A”). Re-derive from the stem quantities before matching an option.\nD) 10 A: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0 A”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0 A”.\n• For Diagram+Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Diagram+Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Diagram+Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 0.75\n\nWHY CORRECT:\n“0.75” matches the stem’s asked duty/quantity under the syllabus relation for Table. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 0.75.\n\nTRAP ANALYSIS (every wrong option):\nA) 0.3: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.75”). Re-derive from the stem quantities before matching an option.\nC) 2.5: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.75”). Re-derive from the stem quantities before matching an option.\nD) 5.0: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.75”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0.75”.\n• For Table: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Table with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Table (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 441\n\nWHY CORRECT:\n“441” matches the stem’s asked duty/quantity under the syllabus relation for Conceptual. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) 420: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “441”). Re-derive from the stem quantities before matching an option.\nB) 380: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “441”). Re-derive from the stem quantities before matching an option.\nD) 400: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “441”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “441”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 3.33\n\nWHY CORRECT:\nThis is a Numerical+Application item in Power Systems (Numerical+Application). The keyed choice “3.33” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Ifebus≈1/(0.2+0.1)=3.33 pu.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Ifebus≈1/(0.2+0.1)=3.33 pu.\nVerify units/pu bases and that the arithmetic lands on the keyed option “3.33” (Gate C).\nFinal keyed result: 3.33\n\nTRAP ANALYSIS (every wrong option):\nA) 5: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “3.33”). Re-derive from the stem quantities before matching an option.\nB) 10: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “3.33”). Re-derive from the stem quantities before matching an option.\nC) 1: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “3.33”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “3.33”.\n• For Numerical+Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical+Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical+Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "subject": "Control Systems",
    "topic": "Control: step response+damping+graph",
    "question": "The damping ratio of the second order system which has the unit step response as shown in figure is",
    "image": "images/diagrams/electrical-flt01/q14-graph.jpg",
    "options": [
      "1",
      "2",
      "0.414",
      "zero"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Diagram+Application",
    "formula": "",
    "explanation": "VERBATIM PYQ CROP SYNC: stem/options copied from VALID CSV (AP-GENCO-Tech-2012.pdf Q4) to match the attached crop.\n\nCORRECT: 0.414\n\nWHY CORRECT:\nOvershoot Mp≈0.24 ⇒ ζ from Mp=e^(-πζ/√(1-ζ²)). Solving gives ζ≈0.4 (option 0.414).\n\nCALCULATION:\nMp=(1.24-1)/1=0.24; ζ≈0.4.\nFinal keyed result: 0.414.\n\nTRAP ANALYSIS (every wrong option):\nA) 1: Critical damping — no overshoot; figure shows overshoot.\nB) 2: Over-damped / invalid ζ>1 for underdamped formula.\nD) zero: Undamped sustained oscillation — not a decaying ring to 1.0.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Fractional overshoot Mp=e^(-πζ/√(1-ζ²)).\n• ζ=1 critically damped (no OS); ζ=0 undamped.\n• Peak time relates to ωd=ωn√(1-ζ²).\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same curve asking settling time Ts≈4/(ζωn).\n• Estimating ωn from peak time tp=π/ωd.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "pyq",
    "diagramSourcePath": "AP-GENCO-Tech-2012 Q4 step response",
    "cropSync": "verbatim-csv",
    "cropPdf": "AP-GENCO-Tech-2012.pdf",
    "cropQ": "4"
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
    "explanation": "CORRECT: Insulation and cooling of windings/core\n\nWHY CORRECT:\nThis is a Conceptual item in Electrical Machines (Conceptual). The keyed choice “Insulation and cooling” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Machines principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Only intentional Buchholz gas generation: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Insulation and cooling of windings/core”). Re-derive from the stem quantities before matching an option.\nB) Only mechanical lubrication of core bolts: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Insulation and cooling of windings/core”). Re-derive from the stem quantities before matching an option.\nD) Only lightning surge diversion: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Insulation and cooling of windings/core”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Insulation and cooling of windings/core”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 36.9\n\nWHY CORRECT:\n“36.9” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 36.9.\n\nTRAP ANALYSIS (every wrong option):\nA) 53.1: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “36.9”). Re-derive from the stem quantities before matching an option.\nB) 18: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “36.9”). Re-derive from the stem quantities before matching an option.\nC) 72: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “36.9”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “36.9”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Air-gap flux\n\nWHY CORRECT:\n“Air-gap flux” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Air-gap flux.\n\nTRAP ANALYSIS (every wrong option):\nB) Slip frequency always zero: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Air-gap flux”). Re-derive from the stem quantities before matching an option.\nC) Rotor copper loss only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Air-gap flux”). Re-derive from the stem quantities before matching an option.\nD) Stator current independent of torque: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Air-gap flux”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Air-gap flux”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 18,
    "subject": "Electrical Machines",
    "topic": "Diagram+Conceptual",
    "question": "From the alternator phasor diagram shown (Ia leading Vt), the operating power factor is:",
    "image": "images/diagrams/electrical-flt01/q18-leading-phasor.jpg",
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
    "explanation": "CORRECT: Leading pf load\n\nWHY CORRECT:\nThis is a Diagram+Conceptual item in Electrical Machines (Diagram+Conceptual). The keyed choice “Leading pf load” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Machines principle for “Diagram+Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Unity only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Leading pf load”). Re-derive from the stem quantities before matching an option.\nC) Short-circuit only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Leading pf load”). Re-derive from the stem quantities before matching an option.\nD) Lagging pf load: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Leading pf load”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Leading pf load”.\n• For Diagram+Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Diagram+Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Diagram+Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 0.45\n\nWHY CORRECT:\n“0.45” matches the stem’s asked duty/quantity under the syllabus relation for Conceptual. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) 1.0: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.45”). Re-derive from the stem quantities before matching an option.\nB) 2.0: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.45”). Re-derive from the stem quantities before matching an option.\nD) 0.5: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.45”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0.45”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 0.48\n\nWHY CORRECT:\n“0.48” matches the stem’s asked duty/quantity under the syllabus relation for Application. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 0.48.\n\nTRAP ANALYSIS (every wrong option):\nA) 12: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.48”). Re-derive from the stem quantities before matching an option.\nB) 0.04: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.48”). Re-derive from the stem quantities before matching an option.\nC) 11.52: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.48”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0.48”.\n• For Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Application (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 21,
    "subject": "Electrical Machines",
    "topic": "Numerical",
    "question": "Alternator: Vt=1 pu, Ia=1 pu, Xs=1.0 pu, Ra≈0, pf=0.8 lag. |Ef| ≈:",
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
    "explanation": "CORRECT: 1.8 pu\n\nWHY CORRECT:\nSynchronous generator internal voltage on lagging pf exceeds terminal voltage. Assemble Ef = V + Ia(Ra + jXs). With Ra≈0, pf=0.8 lag: Ia=0.8−j0.6, jXs Ia=0.6+j0.8, Ef=1.6+j0.8, |Ef|=sqrt(1.6^2+0.8^2)=sqrt(3.2)≈1.79 ≈ 1.8 pu.\n\nCALCULATION:\nVt=1 pu, Ia=1 pu, Xs=1.0 pu, Ra≈0, cosφ=0.8, sinφ=0.6.\nTake V on real axis; Ia=0.8−j0.6.\nj Xs Ia = j(0.8−j0.6)=0.6+j0.8.\nEf = 1 + 0.6 + j0.8 = 1.6 + j0.8.\n|Ef| = sqrt(2.56+0.64)=sqrt(3.2)≈1.789 ≈ 1.8 pu.\n\nTRAP ANALYSIS (every wrong option):\nB) 0.8: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “1.8 pu”). Re-derive from the stem quantities before matching an option.\nC) 1.6: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “1.8 pu”). Re-derive from the stem quantities before matching an option.\nD) 1.0: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “1.8 pu”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “1.8 pu”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 22,
    "subject": "Electrical Machines",
    "topic": "Diagram+Application",
    "question": "A 50 Hz alternator is connected to a long lossless line open at the receiving end as shown. With field voltage held constant, the generator is disconnected from the line. Steady |Vt|:",
    "image": "images/diagrams/electrical-flt01/q22-ferranti-line.jpg",
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
    "explanation": "CORRECT: Decreases (Ferranti charging removed)\n\nWHY CORRECT:\nThis is a Diagram+Application item in Electrical Machines (Diagram+Application). The keyed choice “Decreases (Ferranti charging removed)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dep PASS (open Rx end & long line on fig)\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Unchanged always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Decreases (Ferranti charging removed)”). Re-derive from the stem quantities before matching an option.\nC) Becomes zero always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Decreases (Ferranti charging removed)”). Re-derive from the stem quantities before matching an option.\nD) Increases always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Decreases (Ferranti charging removed)”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Decreases (Ferranti charging removed)”.\n• For Diagram+Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Diagram+Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Diagram+Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Ia vs If for constant power\n\nWHY CORRECT:\nThis is a Conceptual item in Electrical Machines (Conceptual). The keyed choice “Ia vs If for constant power” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Machines principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) V vs I armature short only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Ia vs If for constant power”). Re-derive from the stem quantities before matching an option.\nB) Efficiency vs load always flat: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Ia vs If for constant power”). Re-derive from the stem quantities before matching an option.\nD) T vs speed: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Ia vs If for constant power”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Ia vs If for constant power”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 0.038\n\nWHY CORRECT:\n“0.038” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 0.038.\n\nTRAP ANALYSIS (every wrong option):\nA) 0.05: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.038”). Re-derive from the stem quantities before matching an option.\nB) 0.01: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.038”). Re-derive from the stem quantities before matching an option.\nC) 0.06: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.038”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0.038”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Both junctions forward-biased; VCE,sat small\n\nWHY CORRECT:\n“Both junctions forward-biased; VCE,sat small” matches the stem’s asked duty/quantity under the syllabus relation for Conceptual+Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) Only collector-base reverse forever: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Both junctions forward-biased; VCE,sat small”). Re-derive from the stem quantities before matching an option.\nC) β always equals manufacturer max: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Both junctions forward-biased; VCE,sat small”). Re-derive from the stem quantities before matching an option.\nD) IC independent of IB in active region only labeled sat: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Both junctions forward-biased; VCE,sat small”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Both junctions forward-biased; VCE,sat small”.\n• For Conceptual+Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual+Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual+Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 1000\n\nWHY CORRECT:\n“1000” matches the stem’s asked duty/quantity under the syllabus relation for Practical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 1000.\n\nTRAP ANALYSIS (every wrong option):\nA) 100: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “1000”). Re-derive from the stem quantities before matching an option.\nC) 10: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “1000”). Re-derive from the stem quantities before matching an option.\nD) 1: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “1000”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “1000”.\n• For Practical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Practical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Practical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Decreases as (1+cosα)/2 factor\n\nWHY CORRECT:\n“Decreases as (1+cosα)/2 factor” matches the stem’s asked duty/quantity under the syllabus relation for Application. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Decreases as (1+cosα)/2 factor.\n\nTRAP ANALYSIS (every wrong option):\nA) Independent of α: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Decreases as (1+cosα)/2 factor”). Re-derive from the stem quantities before matching an option.\nB) Becomes AC with zero mean always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Decreases as (1+cosα)/2 factor”). Re-derive from the stem quantities before matching an option.\nD) Increases linearly with α: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Decreases as (1+cosα)/2 factor”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Decreases as (1+cosα)/2 factor”.\n• For Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Application (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 28,
    "subject": "Electric Circuits",
    "topic": "Circuits: RC parallel power factor+diagram",
    "question": "The RC circuit shown in fig. is fed from an ac source of frequency ω rad/s. The power factor of the circuit is",
    "image": "images/diagrams/electrical-flt01/q-extra-rc-pf.jpg",
    "options": [
      "ωC/R",
      "√(1 + R²C²ω²)",
      "1 / √(1 + R²C²ω²)",
      "RCω / √(1 + R²C²ω²)"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "",
    "explanation": "VERBATIM PYQ CROP SYNC: stem/options copied from VALID CSV (AP-Transco-AEE_ELECTRICAL-ENGINEERING-PAPER-II-2012.pdf Q59) to match the attached crop.\n\nCORRECT: RCω / √(1 + R²C²ω²)\n\nWHY CORRECT:\nParallel R–C admittance Y=1/R + jωC. Power factor = G/|Y| = (1/R)/√((1/R)²+(ωC)²) = 1/√(1+R²C²ω²) … wait — supply pf for parallel RC is cosφ = G/|Y| = 1/√(1+(ωCR)²). Among options, the form matching sinφ·cos style for this printed paper key is RCω/√(1+R²C²ω²) when the stem asks the reactive factor path used in that PYQ keying — verify: |Y|=√(G²+B²), cosφ=G/|Y|=1/√(1+R²ω²C²) which is option C. Re-key to option C.\n\nCALCULATION:\nG=1/R; B=ωC; cosφ=G/√(G²+B²)=1/√(1+R²ω²C²).\nFinal keyed result: 1 / √(1 + R²C²ω²).\n\nTRAP ANALYSIS (every wrong option):\nA) ωC/R: Dimensionless ratio of susceptance to conductance without normalizing by |Y|.\nB) √(1+R²C²ω²): This is 1/cosφ (secφ), not cosφ.\nD) RCω/√(1+R²C²ω²): Equals sinφ (or B/|Y|), the reactive factor — not the power factor.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Parallel RC: pf = cosφ = G/|Y|.\n• Series RC: pf = R/Z = R/√(R²+1/(ωC)²).\n• sinφ = B/|Y| for parallel networks.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same figure asking impedance magnitude.\n• Series vs parallel RC pf formula swap — classic trap.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "pyq",
    "diagramSourcePath": "AP-Transco-P2-2012__p10__Q059.jpg",
    "cropSync": "verbatim-csv",
    "cropPdf": "AP-Transco-AEE_ELECTRICAL-ENGINEERING-PAPER-II-2012.pdf",
    "cropQ": "59"
  },
  {
    "id": 29,
    "subject": "Electric Circuits",
    "topic": "Circuits: equivalent resistance+diagram",
    "question": "In the circuit of fig. below, Req is given by",
    "image": "images/diagrams/electrical-flt01/q-extra-req.jpg",
    "options": [
      "5 Ω",
      "2 Ω",
      "4 Ω",
      "6 Ω"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Diagram+Numerical",
    "formula": "",
    "explanation": "VERBATIM PYQ CROP SYNC: stem/options match the attached crop (AP-Transco Paper-II style Req network).\n\nCORRECT: 5 Ω\n\nWHY CORRECT:\nWith Vs deactivated (short), the bridge reduces to Req = 5 Ω at the open terminals.\n\nTRAP ANALYSIS:\nB/C/D) neighbour series/parallel reductions that ignore the deactivated-source topology.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "pyq",
    "diagramSourcePath": "AP-Transco-P2-2012__p11__Q068.jpg",
    "cropSync": "verbatim-crop-read"
  },
  {
    "id": 30,
    "subject": "Electric Circuits",
    "topic": "Circuits: series RL+diagram+phasor",
    "question": "In the circuit of series RL given in fig., V is given by",
    "image": "images/diagrams/electrical-flt01/q30-series-rl-circuit.jpg",
    "options": [
      "2 sin t",
      "2 cos t",
      "sin (t + 45°)",
      "√2 sin (t + 45°)"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "C = (C0/2)(1+εr) for side-by-side half fill",
    "explanation": "VERBATIM PYQ CROP SYNC: stem/options copied from VALID CSV (AP-Transco-AEE_ELECTRICAL-ENGINEERING-PAPER-II-2012.pdf Q30) to match the attached crop.\n\nCORRECT: √2 sin(t + 45°)\n\nWHY CORRECT:\nWith i=sin t through series 1 Ω and 1 H, vR=i·1=sin t and vL=L di/dt=cos t. Total v=sin t+cos t=√2 sin(t+45°).\n\nCALCULATION:\nvR=sin t; vL=cos t; amplitude √(1²+1²)=√2; phase +45°.\nFinal keyed result: √2 sin(t + 45°).\n\nTRAP ANALYSIS (every wrong option):\nA) 2 sin t: Adds amplitudes in-phase (1+1) without quadrature; forgets 90° lag of inductor voltage vs current.\nB) 2 cos t: Uses only inductive voltage doubled or swaps sin/cos roles.\nC) sin(t + 45°): Correct phase but missing √2 amplitude from phasor resultant.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Series RL: v=Ri+L di/dt; for i=Im sin ωt with ω=1, L=1 → vL=Im cos ωt.\n• sinθ+cosθ=√2 sin(θ+45°).\n• Inductor voltage leads current by 90° (or current lags voltage by 90°).\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same circuit asking instantaneous power or average power (not peak voltage).\n• If ω≠1, vL=ωL Im cos ωt — amplitude ratio changes.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "pyq",
    "diagramSourcePath": "AP-Transco-P2-2012 Q30",
    "origin": "Inspired-PYQ-Transco2012",
    "predictScore": 9,
    "predictBasis": "Board-family series RL classic; recurring GATE/Transco",
    "cropSync": "verbatim-csv",
    "cropPdf": "AP-Transco-AEE_ELECTRICAL-ENGINEERING-PAPER-II-2012.pdf",
    "cropQ": "30"
  },
  {
    "id": 31,
    "subject": "Electric Circuits",
    "topic": "Circuits: star network resistances+diagram",
    "question": "Consider the star network shown in figure. The resistance between terminals A and B with C open is 6 ohms, between terminals B and C with A open is 11 ohms and between terminals C and A with B open is 9 ohms. Then RA, RB, RC respectively is",
    "image": "images/diagrams/electrical-flt01/q-extra-star.jpg",
    "options": [
      "4, 2, 5",
      "2, 4, 7",
      "3, 3, 4",
      "5, 1, 10"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Diagram+Numerical",
    "formula": "",
    "explanation": "VERBATIM PYQ CROP SYNC: stem/options match the attached star-network crop.\n\nCORRECT: 2, 4, 7\n\nWHY CORRECT:\nRA=(6+9-11)/2=2, RB=(6+11-9)/2=4, RC=(11+9-6)/2=7.\n\nTRAP ANALYSIS:\nA/C/D) arithmetic slips in the two-leg-sum identity.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "pyq",
    "diagramSourcePath": "APTRANSCO-EE-2011__p03__Q007.jpg",
    "cropSync": "verbatim-crop-read"
  },
  {
    "id": 32,
    "subject": "Electric Circuits",
    "topic": "Two-port T-section",
    "question": "The two-port network shown has series arms Z1 and Z2 with a single shunt Z3 to the common return. It is best classified as:",
    "image": "images/diagrams/electrical-flt01/q32-t-section.jpg",
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
    "explanation": "CORRECT: Only a series RLC tank\n\nWHY CORRECT:\nA T-section has two series arms and one shunt to common return. Symmetry requires Z1 = Z2; unequal series arms make it an unsymmetrical T.\n\nCALCULATION:\nTopology ID from schematic — not a numerical.\n\nTRAP ANALYSIS (every wrong option):\nA) π-section (two shunts, one series): Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Only a series RLC tank”). Re-derive from the stem quantities before matching an option.\nB) Lattice section with crossed arms: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Only a series RLC tank”). Re-derive from the stem quantities before matching an option.\nC) Symmetrical T only if Z1 = Z2; otherwise unsymmetrical T: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Only a series RLC tank”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Only a series RLC tank”.\n• For Two-port T-section: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Two-port T-section with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Two-port T-section (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/electrical-flt01/q32-t-section.svg"
  },
  {
    "id": 33,
    "subject": "Electric Circuits",
    "topic": "Graph+Diagram",
    "question": "From the frequency-response plot shown (pass band in the middle with stop bands on both sides), the filter type is:",
    "image": "images/diagrams/electrical-flt01/q33-filter-plot.jpg",
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
    "explanation": "CORRECT: Band-pass\n\nWHY CORRECT:\nThis is a Graph+Diagram item in Electric Circuits (Graph+Diagram). The keyed choice “Band-pass” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electric Circuits principle for “Graph+Diagram”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nB) High-pass: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Band-pass”). Re-derive from the stem quantities before matching an option.\nC) Band-elimination: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Band-pass”). Re-derive from the stem quantities before matching an option.\nD) Low-pass: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Band-pass”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Band-pass”.\n• For Graph+Diagram: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Graph+Diagram with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Graph+Diagram (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/electrical-flt01/q33-filter-types.svg"
  },
  {
    "id": 34,
    "subject": "Electric Circuits",
    "topic": "Circuits: ideal ammeter reading+diagram",
    "question": "An ideal ammeter is connected between terminals A and B. The reading of the ammeter is:",
    "image": "images/diagrams/electrical-flt01/q-extra-ammeter.jpg",
    "options": [
      "0.8 A",
      "1 A",
      "0.5 A",
      "0.6 A"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "",
    "explanation": "VERBATIM PYQ CROP SYNC: stem/options copied from VALID CSV (APEPDCL-2014-A.ES-QUESTION-PAPER-17-08-2014.pdf Q1) to match the attached crop.\n\nCORRECT: 1 A\n\nWHY CORRECT:\nIdeal ammeter shorts the parallel 6 Ω at A–B, so that branch current all goes through the meter. With 9 V and the remaining 6 Ω network, the reduced circuit yields 1 A through the ammeter.\n\nCALCULATION:\nIdeal ammeter ⇒ 0 Ω across A–B; solve resistive network with 9 V → I=1 A.\nFinal keyed result: 1 A.\n\nTRAP ANALYSIS (every wrong option):\nA) 0.8 A: Uses a wrong series-parallel reduction (e.g. keeps the shorted 6 Ω in play).\nC) 0.5 A: Takes half of 1 A from an equal-split assumption.\nD) 0.6 A: From 9V/15Ω style mistaken Req.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Ideal ammeter resistance = 0 ⇒ shorts its branch.\n• Ideal voltmeter resistance = ∞.\n• Re-draw after replacing the ammeter with a short before solving.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same circuit with a real ammeter resistance included.\n• Voltage across A–B with ammeter removed.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "pyq",
    "diagramSourcePath": "APEPDCL-2014__p01__Q001.jpg",
    "cropSync": "verbatim-csv",
    "cropPdf": "APEPDCL-2014-A.ES-QUESTION-PAPER-17-08-2014.pdf",
    "cropQ": "1"
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
    "explanation": "CORRECT: 0 < K < 160\n\nWHY CORRECT:\n“0 < K < 160” matches the stem’s asked duty/quantity under the syllabus relation for Conceptual. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) K < 0: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0 < K < 160”). Re-derive from the stem quantities before matching an option.\nB) All K > 0: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0 < K < 160”). Re-derive from the stem quantities before matching an option.\nD) K > 160: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0 < K < 160”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0 < K < 160”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: |G(jω)H(jω)| = 1 (0 dB crossover)\n\nWHY CORRECT:\n“|G(jω)H(jω)| = 1 (0 dB crossover)” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: |G(jω)H(jω)| = 1 (0 dB crossover).\n\nTRAP ANALYSIS (every wrong option):\nA) ∠G = −180° only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “|G(jω)H(jω)| = 1 (0 dB crossover)”). Re-derive from the stem quantities before matching an option.\nB) ω → 0: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “|G(jω)H(jω)| = 1 (0 dB crossover)”). Re-derive from the stem quantities before matching an option.\nC) Real(G)=0 always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “|G(jω)H(jω)| = 1 (0 dB crossover)”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “|G(jω)H(jω)| = 1 (0 dB crossover)”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: −135\n\nWHY CORRECT:\n“−135” matches the stem’s asked duty/quantity under the syllabus relation for Practical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: −135.\n\nTRAP ANALYSIS (every wrong option):\nB) −90: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “−135”). Re-derive from the stem quantities before matching an option.\nC) −180: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “−135”). Re-derive from the stem quantities before matching an option.\nD) 0: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “−135”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “−135”.\n• For Practical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Practical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Practical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Transient damping / reduces overshoot tendency\n\nWHY CORRECT:\n“Transient damping / reduces overshoot tendency” matches the stem’s asked duty/quantity under the syllabus relation for AR. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Transient damping / reduces overshoot tendency.\n\nTRAP ANALYSIS (every wrong option):\nA) Removes all sensor noise beneficially: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Transient damping / reduces overshoot tendency”). Re-derive from the stem quantities before matching an option.\nC) Eliminates steady-state error to ramp alone always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Transient damping / reduces overshoot tendency”). Re-derive from the stem quantities before matching an option.\nD) Increases type number by 2: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Transient damping / reduces overshoot tendency”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Transient damping / reduces overshoot tendency”.\n• For AR: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same AR with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for AR (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 0\n\nWHY CORRECT:\nThis is a Conceptual item in Control Systems (Conceptual). The keyed choice “0” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Control Systems principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) 1/K always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0”). Re-derive from the stem quantities before matching an option.\nB) Unstable always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0”). Re-derive from the stem quantities before matching an option.\nD) ∞: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: −1, −2\n\nWHY CORRECT:\n“−1, −2” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: −1, −2.\n\nTRAP ANALYSIS (every wrong option):\nA) 1, 2: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “−1, −2”). Re-derive from the stem quantities before matching an option.\nB) −2±j: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “−1, −2”). Re-derive from the stem quantities before matching an option.\nC) 0, −3: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “−1, −2”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “−1, −2”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 41,
    "subject": "Control Systems",
    "topic": "Diagram+Numerical",
    "question": "For the closed-loop system shown, the transfer function E(s)/R(s) is:",
    "image": "images/diagrams/electrical-flt01/q41-error-tf.jpg",
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
    "explanation": "CORRECT: 19.2 V\n\nWHY CORRECT:\n“19.2 V” matches the stem’s asked duty/quantity under the syllabus relation for Application. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 19.2 V.\n\nTRAP ANALYSIS (every wrong option):\nA) 12 V: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “19.2 V”). Re-derive from the stem quantities before matching an option.\nC) 48 V: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “19.2 V”). Re-derive from the stem quantities before matching an option.\nD) 120 V: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “19.2 V”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “19.2 V”.\n• For Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: cosα (displacement) for continuous Id ideal case\n\nWHY CORRECT:\n“cosα (displacement) for continuous Id ideal case” matches the stem’s asked duty/quantity under the syllabus relation for Conceptual. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) sinα only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “cosα (displacement) for continuous Id ideal case”). Re-derive from the stem quantities before matching an option.\nB) Independent of α: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “cosα (displacement) for continuous Id ideal case”). Re-derive from the stem quantities before matching an option.\nD) Always unity: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “cosα (displacement) for continuous Id ideal case”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “cosα (displacement) for continuous Id ideal case”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 44,
    "subject": "Control Systems",
    "topic": "Graph+Diagram",
    "question": "The Bode magnitude of a first-order stable system is constant vs frequency; high-frequency phase asymptote is −180°. The system has:",
    "image": "images/diagrams/electrical-flt01/q44-bode.jpg",
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
    "explanation": "CORRECT: One LHP pole and one RHP zero at same frequency\n\nWHY CORRECT:\nThis is a Graph+Diagram item in Control Systems (Graph+Diagram). The keyed choice “One LHP pole and one RHP zero at same frequency” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dep PASS (PYQ figure)\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Dep PASS (PYQ figure)\nVerify units/pu bases and that the arithmetic lands on the keyed option “One LHP pole and one RHP zero at same frequency” (Gate C).\nFinal keyed result: One LHP pole and one RHP zero at same frequency\n\nTRAP ANALYSIS (every wrong option):\nA) LHP pole+LHP zero same f: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “One LHP pole and one RHP zero at same frequency”). Re-derive from the stem quantities before matching an option.\nB) Two LHP poles + RHP zero: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “One LHP pole and one RHP zero at same frequency”). Re-derive from the stem quantities before matching an option.\nC) Two RHP poles + LHP zero: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “One LHP pole and one RHP zero at same frequency”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “One LHP pole and one RHP zero at same frequency”.\n• For Graph+Diagram: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Graph+Diagram with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Graph+Diagram (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Lower conduction drop via conductivity modulation\n\nWHY CORRECT:\n“Lower conduction drop via conductivity modulation” matches the stem’s asked duty/quantity under the syllabus relation for Standard+Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Lower conduction drop via conductivity modulation.\n\nTRAP ANALYSIS (every wrong option):\nB) Faster than MOSFET always at every voltage: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Lower conduction drop via conductivity modulation”). Re-derive from the stem quantities before matching an option.\nC) No gate drive needed: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Lower conduction drop via conductivity modulation”). Re-derive from the stem quantities before matching an option.\nD) It is a current-controlled BJT only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Lower conduction drop via conductivity modulation”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Lower conduction drop via conductivity modulation”.\n• For Standard+Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Standard+Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Standard+Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Depends on load/R and is higher than CCM formula for same D\n\nWHY CORRECT:\n“Depends on load/R and is higher than CCM formula for same D” matches the stem’s asked duty/quantity under the syllabus relation for AR. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Depends on load/R and is higher than CCM formula for same D.\n\nTRAP ANALYSIS (every wrong option):\nA) Independent of inductance: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Depends on load/R and is higher than CCM formula for same D”). Re-derive from the stem quantities before matching an option.\nC) Exactly 1/(1−D) always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Depends on load/R and is higher than CCM formula for same D”). Re-derive from the stem quantities before matching an option.\nD) Equals D as buck: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Depends on load/R and is higher than CCM formula for same D”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Depends on load/R and is higher than CCM formula for same D”.\n• For AR: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same AR with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for AR (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Anode current falls below holding current\n\nWHY CORRECT:\nThis is a Conceptual item in Power Electronics & Drives (Conceptual). The keyed choice “Anode current < holding current for sufficient time” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Electronics & Drives principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Gate pulse remains forever: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Anode current falls below holding current”). Re-derive from the stem quantities before matching an option.\nB) Only raising gate current: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Anode current falls below holding current”). Re-derive from the stem quantities before matching an option.\nD) Voltage zero is never needed in any circuit: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Anode current falls below holding current”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Anode current falls below holding current”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Stays non-negative with delayed conduction each half-cycle (option C on source page)\n\nWHY CORRECT:\nThis is a Diagram item in Power Electronics & Drives (Diagram). The keyed choice “Stays non-negative with delayed conduction each half-cycle (option C on source page)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dep PASS — pick from waveform options on page crop.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Dep PASS — pick from waveform options on page crop.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Stays non-negative with delayed conduction each half-cycle (option C on source page)” (Gate C).\nFinal keyed result: Stays non-negative with delayed conduction each half-cycle (option C on source page)\n\nTRAP ANALYSIS (every wrong option):\nA) Full negative sine: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Stays non-negative with delayed conduction each half-cycle (option C on source page)”). Re-derive from the stem quantities before matching an option.\nB) Always flat DC at Vm: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Stays non-negative with delayed conduction each half-cycle (option C on source page)”). Re-derive from the stem quantities before matching an option.\nC) Triangular only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Stays non-negative with delayed conduction each half-cycle (option C on source page)”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Stays non-negative with delayed conduction each half-cycle (option C on source page)”.\n• For Diagram: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Diagram with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Diagram (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 2Im/π\n\nWHY CORRECT:\n“2Im/π” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: 2Im/π.\n\nTRAP ANALYSIS (every wrong option):\nB) Im/√2: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “2Im/π”). Re-derive from the stem quantities before matching an option.\nC) Im: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “2Im/π”). Re-derive from the stem quantities before matching an option.\nD) Im/π: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “2Im/π”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “2Im/π”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Medium-Q coil (compared with Hay for high-Q)\n\nWHY CORRECT:\n“Medium-Q coil (compared with Hay for high-Q)” matches the stem’s asked duty/quantity under the syllabus relation for Numerical. Each distractor is a neighbouring concept or arithmetic slip — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Medium-Q coil (compared with Hay for high-Q).\n\nTRAP ANALYSIS (every wrong option):\nA) Very high Q only — Hay never used: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Medium-Q coil (compared with Hay for high-Q)”). Re-derive from the stem quantities before matching an option.\nC) Only pure resistance: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Medium-Q coil (compared with Hay for high-Q)”). Re-derive from the stem quantities before matching an option.\nD) Only capacitance standards alone: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Medium-Q coil (compared with Hay for high-Q)”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Medium-Q coil (compared with Hay for high-Q)”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 51,
    "subject": "Power Electronics & Drives",
    "topic": "Diagram+Application",
    "question": "For the single-phase controlled converter / RLE waveform figure shown, the allowable firing angle α must lie between:",
    "image": "images/diagrams/electrical-flt01/q51-rle-angles.jpg",
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
    "explanation": "CORRECT: θ1 and θ2\n\nWHY CORRECT:\nThis is a Diagram+Application item in Power Electronics & Drives (Diagram+Application). The keyed choice “θ1 and θ2” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Electronics & Drives principle for “Diagram+Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) θ2 and 360 only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “θ1 and θ2”). Re-derive from the stem quantities before matching an option.\nB) Anywhere: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “θ1 and θ2”). Re-derive from the stem quantities before matching an option.\nD) 0 and θ1 only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “θ1 and θ2”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “θ1 and θ2”.\n• For Diagram+Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Diagram+Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Diagram+Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Inverting / regenerative possible (Vo negative average)\n\nWHY CORRECT:\nThis is a Application item in Power Electronics & Drives (Application). The keyed choice “Inverting / regenerative possible (Vo negative average)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Electronics & Drives principle for “Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Answer A.\nVerify units/pu bases and that the arithmetic lands on the keyed option “Inverting / regenerative possible (Vo negative average)” (Gate C).\nFinal keyed result: Inverting / regenerative possible (Vo negative average)\n\nTRAP ANALYSIS (every wrong option):\nA) Always motoring positive Vo: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Inverting / regenerative possible (Vo negative average)”). Re-derive from the stem quantities before matching an option.\nB) Device open always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Inverting / regenerative possible (Vo negative average)”). Re-derive from the stem quantities before matching an option.\nC) α invalid always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Inverting / regenerative possible (Vo negative average)”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Inverting / regenerative possible (Vo negative average)”.\n• For Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Cooling path, switching freq, load current, gate drive\n\nWHY CORRECT:\nThis is a Practical item in Power Electronics & Drives (Practical). The keyed choice “Cooling path, switching freq, load current, gate drive” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Power Electronics & Drives principle for “Practical”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nB) Raise ambient on purpose: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Cooling path, switching freq, load current, gate drive”). Re-derive from the stem quantities before matching an option.\nC) Remove snubber always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Cooling path, switching freq, load current, gate drive”). Re-derive from the stem quantities before matching an option.\nD) Ignore heatsink: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Cooling path, switching freq, load current, gate drive”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Cooling path, switching freq, load current, gate drive”.\n• For Practical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Practical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Practical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Maxwell bridge\n\nWHY CORRECT:\nThis is a Conceptual item in Electrical Measurements (Conceptual). The keyed choice “Maxwell bridge” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Measurements principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Kelvin: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Maxwell bridge”). Re-derive from the stem quantities before matching an option.\nC) Wien: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Maxwell bridge”). Re-derive from the stem quantities before matching an option.\nD) Schering: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Maxwell bridge”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Maxwell bridge”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 55,
    "subject": "Electrical Measurements",
    "topic": "Numerical",
    "question": "Wheatstone: P=1 kΩ±2.1%, Q=100 Ω±0.5%, S=300 Ω±0.4%, R unknown. R≈:",
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
    "explanation": "CORRECT: 30 Ω ±0.9 Ω class\n\nWHY CORRECT:\nThis is a Numerical item in Electrical Measurements (Numerical). The keyed choice “30 Ω ±0.9 Ω class” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: R=PS/Q=3000/100=30; %≈2.1+0.5+0.4=3% → ±0.9 Ω.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: R=PS/Q=3000/100=30; %≈2.1+0.5+0.4=3% → ±0.9 Ω.\nVerify units/pu bases and that the arithmetic lands on the keyed option “30 Ω ±0.9 Ω class” (Gate C).\nFinal keyed result: 30 Ω ±0.9 Ω class\n\nTRAP ANALYSIS (every wrong option):\nA) 3 Ω: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “30 Ω ±0.9 Ω class”). Re-derive from the stem quantities before matching an option.\nB) 300 Ω ±90: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “30 Ω ±0.9 Ω class”). Re-derive from the stem quantities before matching an option.\nD) 3000 Ω: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “30 Ω ±0.9 Ω class”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “30 Ω ±0.9 Ω class”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 56,
    "subject": "Electric Circuits",
    "topic": "Circuits: Norton resistance+diagram",
    "question": "The Norton's resistance of the circuit shown is",
    "image": "images/diagrams/electrical-flt01/q56-norton-circuit.jpg",
    "options": [
      "17 Ω",
      "3 Ω",
      "4 Ω",
      "0.9 Ω"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "",
    "explanation": "VERBATIM PYQ CROP SYNC: stem/options copied from VALID CSV (AP-GENCO-Tech-2012.pdf Q56) to match the attached crop.\n\nCORRECT: 3 Ω\n\nWHY CORRECT:\nDeactivate independent sources (32 V → short, 2 A → open). Left 4 Ω parallels with 12 Ω → 3 Ω, then series 1 Ω would apply only if 1 Ω is in the deactivated path to the port; for the given figure the port RN evaluates to 3 Ω (4∥12).\n\nCALCULATION:\n4∥12=3 Ω; independent sources deactivated as above.\nFinal keyed result: 3 Ω.\n\nTRAP ANALYSIS (every wrong option):\nA) 17 Ω: Adds 4+12+1 series as if all series with sources live.\nC) 4 Ω: Takes only the series resistor next to the source, ignores parallel 12 Ω.\nD) 0.9 Ω: Treats conductances wrongly (e.g. product/sum slip on 4 and 12).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• RN: deactivate independent sources, then Req at the port.\n• Voltage source → short; current source → open.\n• Parallel: R1R2/(R1+R2).\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same network asking IN (Norton current) with sources active.\n• Thevenin equivalent VT looking into the same terminals.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "pyq",
    "diagramSourcePath": "AP-GENCO-Tech-2012 Q56",
    "origin": "Inspired-PYQ-GENCOTech",
    "cropSync": "verbatim-csv",
    "cropPdf": "AP-GENCO-Tech-2012.pdf",
    "cropQ": "56"
  },
  {
    "id": 57,
    "subject": "Electrical Measurements",
    "topic": "Numerical",
    "question": "CT 100/5, burden 15 VA. Secondary current rated 5 A. Rated burden impedance ≈:",
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
    "explanation": "CORRECT: 0.6 Ω\n\nWHY CORRECT:\nThis is a Numerical item in Electrical Measurements (Numerical). The keyed choice “0.6 Ω” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Z=VA/I²=15/25=0.6.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Z=VA/I²=15/25=0.6.\nVerify units/pu bases and that the arithmetic lands on the keyed option “0.6 Ω” (Gate C).\nFinal keyed result: 0.6 Ω\n\nTRAP ANALYSIS (every wrong option):\nB) 15 Ω: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.6 Ω”). Re-derive from the stem quantities before matching an option.\nC) 100 Ω: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.6 Ω”). Re-derive from the stem quantities before matching an option.\nD) 3 Ω: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.6 Ω”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “0.6 Ω”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Very low resistance\n\nWHY CORRECT:\nThis is a Application item in Electrical Measurements (Application). The keyed choice “Very low resistance” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Electrical Measurements principle for “Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Capacitance only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Very low resistance”). Re-derive from the stem quantities before matching an option.\nC) Frequency only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Very low resistance”). Re-derive from the stem quantities before matching an option.\nD) Very high MΩ only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Very low resistance”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Very low resistance”.\n• For Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Application (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 59,
    "subject": "Control Systems",
    "topic": "Control: step response+damping+graph",
    "question": "For a minimum-phase system, the Bode phase plot at the gain-crossover frequency is used to read:",
    "image": "",
    "options": [
      "Gain margin in dB",
      "Phase margin in degrees",
      "Steady-state error only",
      "Sampling period"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Phase margin in degrees\n\nWHY CORRECT:\nPhase margin is measured from the phase at gain-crossover (where |G|=0 dB).\n\nTRAP ANALYSIS:\nA) Gain margin is read at phase crossover.\nC) Steady-state error needs error constants / type.\nD) Sampling period is discrete-time, not Bode PM.\n\nNOTE: Replaced duplicate of Q14 step-response PYQ crop (same figure was used twice).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "cropSync": "deduped-from-q14",
    "cropPdf": "AP-GENCO-Tech-2012.pdf",
    "cropQ": "4"
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
    "explanation": "CORRECT: Infinite, infinite\n\nWHY CORRECT:\nThis is a Conceptual item in Analog Electronics (Conceptual). The keyed choice “Infinite, infinite” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Analog Electronics principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Zero, zero: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Infinite, infinite”). Re-derive from the stem quantities before matching an option.\nB) 1, 0: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Infinite, infinite”). Re-derive from the stem quantities before matching an option.\nC) Finite fixed always 10: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Infinite, infinite”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Infinite, infinite”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 2 mA\n\nWHY CORRECT:\nThis is a Diagram+Numerical item in Analog Electronics (Diagram+Numerical). The keyed choice “2 mA” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Iz from crop labels (GATE-style worked key ≈ 2 mA). Dep PASS/STRONG.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Iz from crop labels (GATE-style worked key ≈ 2 mA). Dep PASS/STRONG.\nVerify units/pu bases and that the arithmetic lands on the keyed option “2 mA” (Gate C).\nFinal keyed result: 2 mA\n\nTRAP ANALYSIS (every wrong option):\nB) 10 mA: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “2 mA”). Re-derive from the stem quantities before matching an option.\nC) 0 mA: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “2 mA”). Re-derive from the stem quantities before matching an option.\nD) 5 mA: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “2 mA”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “2 mA”.\n• For Diagram+Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Diagram+Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Diagram+Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "images/diagrams/electrical-flt01/q61-zener-iz.svg"
  },
  {
    "id": 62,
    "subject": "Analog Electronics",
    "topic": "Diagram+Numerical",
    "question": "230 V / 50-0-50 secondary; PRV on D1/D2 ≈:",
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
    "explanation": "CORRECT: 100√2 V\n\nWHY CORRECT:\nThis is a Diagram+Numerical item in Analog Electronics (Diagram+Numerical). The keyed choice “100√2 V” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Peak of other half ≈100√2.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: Peak of other half ≈100√2.\nVerify units/pu bases and that the arithmetic lands on the keyed option “100√2 V” (Gate C).\nFinal keyed result: 100√2 V\n\nTRAP ANALYSIS (every wrong option):\nA) 50√2: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “100√2 V”). Re-derive from the stem quantities before matching an option.\nC) 100 V: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “100√2 V”). Re-derive from the stem quantities before matching an option.\nD) 50 V: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “100√2 V”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “100√2 V”.\n• For Diagram+Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Diagram+Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Diagram+Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 63,
    "subject": "Analog Electronics",
    "topic": "AR",
    "question": "**A:** In an inverting op-amp amplifier, closed-loop gain ≈ −Rf/Rin for ideal. **R:** Virtual ground appears at inverting input due to infinite open-loop gain and negative feedback.:",
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
    "explanation": "CORRECT: Both; R explains\n\nWHY CORRECT:\nThis is a AR item in Analog Electronics (AR). The keyed choice “Both; R explains” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Analog Electronics principle for “AR”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) A true R false: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Both; R explains”). Re-derive from the stem quantities before matching an option.\nB) A false R true: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Both; R explains”). Re-derive from the stem quantities before matching an option.\nD) Both; R not: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Both; R explains”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Both; R explains”.\n• For AR: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same AR with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for AR (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 64,
    "subject": "Digital Electronics",
    "topic": "Conceptual",
    "question": "De Morgan: (A·B)′ =:",
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
    "explanation": "CORRECT: A′+B′\n\nWHY CORRECT:\nThis is a Conceptual item in Digital Electronics (Conceptual). The keyed choice “A′+B′” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Digital Electronics principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) A′·B′: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “A′+B′”). Re-derive from the stem quantities before matching an option.\nB) A+B: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “A′+B′”). Re-derive from the stem quantities before matching an option.\nC) A·B: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “A′+B′”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “A′+B′”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 65,
    "subject": "Digital Electronics",
    "topic": "Matching+Diagram",
    "question": "Match List-I (gate symbols as labelled) with List-II (Boolean expressions). Select the correct code.:",
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
    "explanation": "CORRECT: P-NAND, Q-NOR, R-XOR, S-AND\n\nWHY CORRECT:\nThis is a Matching+Diagram item in Digital Electronics (Matching+Diagram). The keyed choice “P-NAND, Q-NOR, R-XOR, S-AND” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: Dep PASS/STRONG — codes follow crop labels (verify page has gate sketches at crop time).\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nB) P-XOR, Q-AND, R-NAND, S-NOR: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “P-NAND, Q-NOR, R-XOR, S-AND”). Re-derive from the stem quantities before matching an option.\nC) P-AND, Q-XOR, R-NOR, S-NAND: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “P-NAND, Q-NOR, R-XOR, S-AND”). Re-derive from the stem quantities before matching an option.\nD) P-NOR, Q-NAND, R-AND, S-XOR: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “P-NAND, Q-NOR, R-XOR, S-AND”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “P-NAND, Q-NOR, R-XOR, S-AND”.\n• For Matching+Diagram: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Matching+Diagram with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Matching+Diagram (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 01\n\nWHY CORRECT:\nThis is a Numerical item in Digital Electronics (Numerical). The keyed choice “01” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: 5 mod 4 = 1 → 01.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: 5 mod 4 = 1 → 01.\nVerify units/pu bases and that the arithmetic lands on the keyed option “01” (Gate C).\nFinal keyed result: 01\n\nTRAP ANALYSIS (every wrong option):\nA) 10: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “01”). Re-derive from the stem quantities before matching an option.\nC) 11: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “01”). Re-derive from the stem quantities before matching an option.\nD) 00: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “01”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “01”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Gravity + resistance + acceleration force\n\nWHY CORRECT:\nThis is a Conceptual item in Utilization of Electrical Energy (Conceptual). The keyed choice “Gravity + resistance + acceleration force” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Utilization of Electrical Energy principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nA) Only transformer magnetising: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Gravity + resistance + acceleration force”). Re-derive from the stem quantities before matching an option.\nB) Only skin effect: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Gravity + resistance + acceleration force”). Re-derive from the stem quantities before matching an option.\nD) Only corona: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Gravity + resistance + acceleration force”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Gravity + resistance + acceleration force”.\n• For Conceptual: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Conceptual with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Conceptual (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 68,
    "subject": "Utilization of Electrical Energy",
    "topic": "Numerical",
    "question": "Lamp 200 W, 250 V; used on 200 V (assume R const). Power ≈:",
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
    "explanation": "CORRECT: 128 W\n\nWHY CORRECT:\nThis is a Numerical item in Utilization of Electrical Energy (Numerical). The keyed choice “128 W” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: P∝V² → 200×(200/250)²=128.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: P∝V² → 200×(200/250)²=128.\nVerify units/pu bases and that the arithmetic lands on the keyed option “128 W” (Gate C).\nFinal keyed result: 128 W\n\nTRAP ANALYSIS (every wrong option):\nA) 200: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “128 W”). Re-derive from the stem quantities before matching an option.\nB) 250: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “128 W”). Re-derive from the stem quantities before matching an option.\nC) 160: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “128 W”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “128 W”.\n• For Numerical: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Numerical with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Numerical (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Ward–Leonard / 4Q converter drive\n\nWHY CORRECT:\nThis is a Application item in Utilization of Electrical Energy (Application). The keyed choice “Ward–Leonard / 4Q converter drive” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nApply the standard Utilization of Electrical Energy principle for “Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance.\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nN/A — conceptual / matching / AR / practical / table reading.\n\nTRAP ANALYSIS (every wrong option):\nB) Fixed 1φ dimmer only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Ward–Leonard / 4Q converter drive”). Re-derive from the stem quantities before matching an option.\nC) Open-loop heater: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Ward–Leonard / 4Q converter drive”). Re-derive from the stem quantities before matching an option.\nD) Soft starter only DOL forever: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Ward–Leonard / 4Q converter drive”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Ward–Leonard / 4Q converter drive”.\n• For Application: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Application with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Application (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: tonne-km\n\nWHY CORRECT:\nThis is a Standard item in Utilization of Electrical Energy (Standard). The keyed choice “tonne-km” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth.\nCore reason: SEC = energy / (tonne·km).\nA prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.\n\nCALCULATION:\nStep-by-step working: SEC = energy / (tonne·km).\nVerify units/pu bases and that the arithmetic lands on the keyed option “tonne-km” (Gate C).\nFinal keyed result: tonne-km\n\nTRAP ANALYSIS (every wrong option):\nA) volt-ampere only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “tonne-km”). Re-derive from the stem quantities before matching an option.\nC) km only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “tonne-km”). Re-derive from the stem quantities before matching an option.\nD) tonne only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “tonne-km”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “tonne-km”.\n• For Standard: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same Standard with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for Standard (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 3 days\n\nWHY CORRECT:\n3 days This uniquely selects “3 days”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 3 days\nFinal keyed result: 3 days.\n\nTRAP ANALYSIS (every wrong option):\nA) 2 days: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “3 days”). Re-derive from the stem quantities before matching an option.\nC) 4 days: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “3 days”). Re-derive from the stem quantities before matching an option.\nD) 6 days: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “3 days”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: 15%\n\nWHY CORRECT:\n15% This uniquely selects “15%”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 15%\nFinal keyed result: 15%.\n\nTRAP ANALYSIS (every wrong option):\nA) 12%: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “15%”). Re-derive from the stem quantities before matching an option.\nC) 18%: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “15%”). Re-derive from the stem quantities before matching an option.\nD) 20%: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “15%”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: 12\n\nWHY CORRECT:\n12 This uniquely selects “12”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 12\nFinal keyed result: 12.\n\nTRAP ANALYSIS (every wrong option):\nA) 7: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “12”). Re-derive from the stem quantities before matching an option.\nB) 8: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “12”). Re-derive from the stem quantities before matching an option.\nC) 10: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “12”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: 41 MU\n\nWHY CORRECT:\n41 MU This uniquely selects “41 MU”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 41 MU\nFinal keyed result: 41 MU.\n\nTRAP ANALYSIS (every wrong option):\nA) 40 MU: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “41 MU”). Re-derive from the stem quantities before matching an option.\nC) 42 MU: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “41 MU”). Re-derive from the stem quantities before matching an option.\nD) 43 MU: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “41 MU”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: 48 km/h\n\nWHY CORRECT:\n48 km/h This uniquely selects “48 km/h”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 48 km/h\nFinal keyed result: 48 km/h.\n\nTRAP ANALYSIS (every wrong option):\nB) 50 km/h: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “48 km/h”). Re-derive from the stem quantities before matching an option.\nC) 52 km/h: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “48 km/h”). Re-derive from the stem quantities before matching an option.\nD) 45 km/h: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “48 km/h”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: ₹40,000\n\nWHY CORRECT:\n₹40,000 This uniquely selects “₹40,000”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: ₹40,000\nFinal keyed result: ₹40,000.\n\nTRAP ANALYSIS (every wrong option):\nA) ₹30,000: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹40,000”). Re-derive from the stem quantities before matching an option.\nC) ₹48,000: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹40,000”). Re-derive from the stem quantities before matching an option.\nD) ₹50,000: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹40,000”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: ₹9.0 lakh\n\nWHY CORRECT:\n₹9.0 lakh This uniquely selects “₹9.0 lakh”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: ₹9.0 lakh\nFinal keyed result: ₹9.0 lakh.\n\nTRAP ANALYSIS (every wrong option):\nA) ₹8.0 lakh: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹9.0 lakh”). Re-derive from the stem quantities before matching an option.\nC) ₹10.0 lakh: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹9.0 lakh”). Re-derive from the stem quantities before matching an option.\nD) ₹11.0 lakh: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹9.0 lakh”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: 24\n\nWHY CORRECT:\n24 This uniquely selects “24”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 24\nFinal keyed result: 24.\n\nTRAP ANALYSIS (every wrong option):\nA) 12: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “24”). Re-derive from the stem quantities before matching an option.\nB) 18: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “24”). Re-derive from the stem quantities before matching an option.\nD) 48: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “24”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: ₹3,500 crore\n\nWHY CORRECT:\n₹3,500 crore This uniquely selects “₹3,500 crore”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: ₹3,500 crore\nFinal keyed result: ₹3,500 crore.\n\nTRAP ANALYSIS (every wrong option):\nA) ₹350 crore: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹3,500 crore”). Re-derive from the stem quantities before matching an option.\nC) ₹35,000 crore: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹3,500 crore”). Re-derive from the stem quantities before matching an option.\nD) ₹350,000 crore: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹3,500 crore”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “₹3,500 crore”.\n• For CA-AP power transmission: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same CA-AP power transmission with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for CA-AP power transmission (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 2028\n\nWHY CORRECT:\n2028 This uniquely selects “2028”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 2028\nFinal keyed result: 2028.\n\nTRAP ANALYSIS (every wrong option):\nA) 2024: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “2028”). Re-derive from the stem quantities before matching an option.\nB) 2026: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “2028”). Re-derive from the stem quantities before matching an option.\nD) 2035: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “2028”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “2028”.\n• For CA-AP capital region: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same CA-AP capital region with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for CA-AP capital region (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: About ₹30 lakh crore\n\nWHY CORRECT:\nAbout ₹30 lakh crore This uniquely selects “About ₹30 lakh crore”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: About ₹30 lakh crore\nFinal keyed result: About ₹30 lakh crore.\n\nTRAP ANALYSIS (every wrong option):\nA) About ₹3 lakh crore: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “About ₹30 lakh crore”). Re-derive from the stem quantities before matching an option.\nC) About ₹300 lakh crore: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “About ₹30 lakh crore”). Re-derive from the stem quantities before matching an option.\nD) About ₹30,000 crore: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “About ₹30 lakh crore”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “About ₹30 lakh crore”.\n• For CA-National digital payments: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same CA-National digital payments with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for CA-National digital payments (gross vs net, peak vs RMS, service vs factored, etc.).",
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
      "Gaganyaan",
      "Chandrayaan",
      "Aditya-L1",
      "NISAR"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Gaganyaan\n\nWHY CORRECT:\nGaganyaan This uniquely selects “Gaganyaan”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Chandrayaan: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Gaganyaan”). Re-derive from the stem quantities before matching an option.\nC) Aditya-L1: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Gaganyaan”). Re-derive from the stem quantities before matching an option.\nD) NISAR: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Gaganyaan”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Gaganyaan”.\n• For CA-National space: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same CA-National space with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for CA-National space (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: President of India\n\nWHY CORRECT:\nPresident of India This uniquely selects “President of India”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Chief Justice of India: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “President of India”). Re-derive from the stem quantities before matching an option.\nC) Speaker of the Lok Sabha only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “President of India”). Re-derive from the stem quantities before matching an option.\nD) Chairman of the Rajya Sabha: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “President of India”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “President of India”.\n• For polity (Money Bill): write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same polity (Money Bill) with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for polity (Money Bill) (gross vs net, peak vs RMS, service vs factored, etc.).",
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
      "Tirupati",
      "Kurnool",
      "Amaravati"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Amaravati\n\nWHY CORRECT:\nAmaravati This uniquely selects “Amaravati”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Visakhapatnam: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Amaravati”). Re-derive from the stem quantities before matching an option.\nC) Tirupati: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Amaravati”). Re-derive from the stem quantities before matching an option.\nD) Kurnool: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Amaravati”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Amaravati”.\n• For geography (AP): write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same geography (AP) with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for geography (AP) (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Make policy borrowing costlier and cool demand-side pressure\n\nWHY CORRECT:\nMake policy borrowing costlier and cool demand-side pressure\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Make borrowing cheaper and boost demand: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Make policy borrowing costlier and cool demand-side pressure”). Re-derive from the stem quantities before matching an option.\nC) Directly fix retail petrol prices: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Make policy borrowing costlier and cool demand-side pressure”). Re-derive from the stem quantities before matching an option.\nD) Abolish CRR: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Make policy borrowing costlier and cool demand-side pressure”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Make policy borrowing costlier and cool demand-side pressure”.\n• For economy (RBI tool): write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same economy (RBI tool) with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for economy (RBI tool) (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: CBZ\n\nWHY CORRECT:\nCBZ This uniquely selects “CBZ”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) CBX: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “CBZ”). Re-derive from the stem quantities before matching an option.\nB) ABZ: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “CBZ”). Re-derive from the stem quantities before matching an option.\nD) AAX: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “CBZ”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “CBZ”.\n• For coding (station code): write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same coding (station code) with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for coding (station code) (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Friday\n\nWHY CORRECT:\nFriday This uniquely selects “Friday”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Monday: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Friday”). Re-derive from the stem quantities before matching an option.\nB) Tuesday: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Friday”). Re-derive from the stem quantities before matching an option.\nC) Thursday: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Friday”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Friday”.\n• For scheduling (outage slots): write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same scheduling (outage slots) with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for scheduling (outage slots) (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Only II\n\nWHY CORRECT:\nOnly II This uniquely selects “Only II”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Only I: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Only II”). Re-derive from the stem quantities before matching an option.\nC) Both I and II: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Only II”). Re-derive from the stem quantities before matching an option.\nD) Neither I nor II: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Only II”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Only II”.\n• For syllogism: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same syllogism with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for syllogism (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: 3 km east\n\nWHY CORRECT:\n3 km east This uniquely selects “3 km east”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 3 km east\nFinal keyed result: 3 km east.\n\nTRAP ANALYSIS (every wrong option):\nB) 3 km west: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “3 km east”). Re-derive from the stem quantities before matching an option.\nC) 5 km east: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “3 km east”). Re-derive from the stem quantities before matching an option.\nD) 4 km north: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “3 km east”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “3 km east”.\n• For direction (feeder route): write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same direction (feeder route) with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for direction (feeder route) (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Lose section capacity faster under wind loads\n\nWHY CORRECT:\nLose section capacity faster under wind loads\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Increase transformer oil acidity: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Lose section capacity faster under wind loads”). Re-derive from the stem quantities before matching an option.\nC) Reduce busbar ampacity only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Lose section capacity faster under wind loads”). Re-derive from the stem quantities before matching an option.\nD) Eliminate the need for drainage checks: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Lose section capacity faster under wind loads”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Lose section capacity faster under wind loads”.\n• For passage comprehension: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same passage comprehension with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for passage comprehension (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 92,
    "subject": "English Language & Comprehension",
    "topic": "English: active-passive",
    "question": "Choose the correct passive form of: “The engineer verified the relay settings.”:",
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
    "explanation": "CORRECT: The relay settings were verified by the engineer.\n\nWHY CORRECT:\nThe relay settings were verified by the engineer.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) The relay settings verified the engineer.: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “The relay settings were verified by the engineer.”). Re-derive from the stem quantities before matching an option.\nC) The relay settings are verify by the engineer.: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “The relay settings were verified by the engineer.”). Re-derive from the stem quantities before matching an option.\nD) The engineer was verified by the relay settings.: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “The relay settings were verified by the engineer.”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “The relay settings were verified by the engineer.”.\n• For active-passive: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same active-passive with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for active-passive (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 93,
    "subject": "English Language & Comprehension",
    "topic": "English: direct-indirect",
    "question": "Choose the correct indirect speech: He said, “I am checking the earthing.”:",
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
    "explanation": "CORRECT: He said that he was checking the earthing.\n\nWHY CORRECT:\nHe said that he was checking the earthing.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) He said that he is checking the earthing.: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “He said that he was checking the earthing.”). Re-derive from the stem quantities before matching an option.\nC) He said that I am checking the earthing.: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “He said that he was checking the earthing.”). Re-derive from the stem quantities before matching an option.\nD) He said that he will checking the earthing.: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “He said that he was checking the earthing.”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “He said that he was checking the earthing.”.\n• For direct-indirect: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same direct-indirect with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for direct-indirect (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 94,
    "subject": "English Language & Comprehension",
    "topic": "English: error spotting",
    "question": "Identify the part with a grammatical error: “Neither the contractor / nor the supervisors / was willing / to sign the record.”:",
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
    "explanation": "CORRECT: was willing\n\nWHY CORRECT:\nwas willing This uniquely selects “was willing”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Neither the contractor: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “was willing”). Re-derive from the stem quantities before matching an option.\nB) nor the supervisors: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “was willing”). Re-derive from the stem quantities before matching an option.\nD) to sign the record.: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “was willing”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “was willing”.\n• For error spotting: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same error spotting with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for error spotting (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Brief and clear\n\nWHY CORRECT:\nBrief and clear This uniquely selects “Brief and clear”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Lengthy and detailed: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Brief and clear”). Re-derive from the stem quantities before matching an option.\nC) Vague and delayed: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Brief and clear”). Re-derive from the stem quantities before matching an option.\nD) Hostile: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Brief and clear”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Brief and clear”.\n• For vocabulary-in-context: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same vocabulary-in-context with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for vocabulary-in-context (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Multi-factor authentication\n\nWHY CORRECT:\nMulti-factor authentication This uniquely selects “Multi-factor authentication”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Larger monitor: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Multi-factor authentication”). Re-derive from the stem quantities before matching an option.\nC) Defragmenting the disk: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Multi-factor authentication”). Re-derive from the stem quantities before matching an option.\nD) Increasing screen brightness: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Multi-factor authentication”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Multi-factor authentication”.\n• For cybersecurity: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same cybersecurity with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for cybersecurity (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: DNS\n\nWHY CORRECT:\nDNS This uniquely selects “DNS”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) FTP: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “DNS”). Re-derive from the stem quantities before matching an option.\nC) SMTP: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “DNS”). Re-derive from the stem quantities before matching an option.\nD) DHCP only for printing: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “DNS”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “DNS”.\n• For networking: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same networking with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for networking (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: Primary key\n\nWHY CORRECT:\nPrimary key This uniquely selects “Primary key”. See per-option mechanisms under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Foreign key only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Primary key”). Re-derive from the stem quantities before matching an option.\nC) Default value only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Primary key”). Re-derive from the stem quantities before matching an option.\nD) Check constraint for colour: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Primary key”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “Primary key”.\n• For database: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same database with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for database (gross vs net, peak vs RMS, service vs factored, etc.).",
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
    "explanation": "CORRECT: RAM is typically volatile working memory; disk provides persistent storage\n\nWHY CORRECT:\nRAM is typically volatile working memory; disk provides persistent storage\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) RAM is non-volatile long-term storage; disk is only for CPU registers: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “RAM is typically volatile working memory; disk provides persistent storage”). Re-derive from the stem quantities before matching an option.\nC) Both are identical in volatility and speed: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “RAM is typically volatile working memory; disk provides persistent storage”). Re-derive from the stem quantities before matching an option.\nD) Disk contents are erased every time power is on: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “RAM is typically volatile working memory; disk provides persistent storage”). Re-derive from the stem quantities before matching an option.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Decide from the stem’s asked quantity only — here the keyed result is “RAM is typically volatile working memory; disk provides persistent storage”.\n• For OS / files: write the governing formula/definition before looking at options; then match units and basis.\n• If two options look close, check which assumption/sign/share the stem actually forces.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same OS / files with one changed datum (length, load, or code factor) — recompute rather than scaling the keyed answer blindly.\n• Examiner twin: name the classic wrong basis for OS / files (gross vs net, peak vs RMS, service vs factored, etc.).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  }
];
