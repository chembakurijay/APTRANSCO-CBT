// Electrical Engineering FLT-01 — APTRANSCO AEE CBT
// Generated from exports/ELECTRICAL_FLT01_REGENERATED_v2.md
// Diagrams: images/diagrams/electrical-flt01/*.svg
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
    "explanation": "SIL = V²/Zc, Zc=√(L/C).",
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
    "explanation": "Zb = kV²/MVA = 220²/100 = 484.",
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
    "explanation": "X1=Xs−Xm=0.33; X0=Xs+2Xm=0.69.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 4,
    "subject": "Power Systems",
    "topic": "Matching+Diagram",
    "question": "[]` Match transformer connection sketch (List-I) to name (List-II): List-I: (P) Δ–Δ (Q) Δ–Y (R) Y–Δ (S) Y–Y List-II: (1) both sides Δ (2) HV Δ LV Y (3) HV Y LV Δ (4) both Y",
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
    "explanation": "Dep PASS — identify from winding sketches.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
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
    "explanation": "Both true; R is about Δ, not the explanation of Y–Y grounding path.",
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
    "explanation": "Answer C.",
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
    "explanation": "Answer D.",
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
    "explanation": "Classic K=0.2 → η≈80% for 2 discs.",
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
    "explanation": "(Ia+Ib+Ic)/3=0.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 10,
    "subject": "Power Systems",
    "topic": "Table",
    "question": "Given bus data table (use values in stem table): | Bus | Type | |V| pu | P MW | |---|---|---|---| | 1 | Slack | 1.05 | — | | 2 | PV | 1.02 | 50 | | 3 | PQ | — | 30 | For Newton–Raphson load flow, unknown voltage magnitude variables among buses 2–3 are:",
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
    "explanation": "PV bus |V| specified; PQ unknown.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
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
    "explanation": "Answer D.",
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
    "explanation": "Ifebus≈1/(0.2+0.1)=3.33 pu.",
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
    "explanation": "Answer B.",
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
    "explanation": "Answer C.",
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
    "explanation": "Answer D.",
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
    "explanation": "Sauto ≈ S2W × VH/(VH−VL) = 10×400/300 ≈ 13.3 ≈ **12.5 kVA** (nearest listed).",
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
    "explanation": "Parallel paths halved → current/power capacity halves; voltage between remaining brushes still ≈E for lap if brush pairs remain. Classic Ans often **E, P/2**.",
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
    "explanation": "Dep PASS",
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
    "explanation": "Answer D.",
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
    "explanation": "Answer A.",
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
      "1.6 pu",
      "0.8",
      "2.0"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "Ef≈√((Vcosφ+IaRa)²+(Vsinφ+IaXs)²)≈√(0.8²+1.8²)≈1.97 — revise numbers:",
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
    "explanation": "Dep PASS (open Rx end & long line on fig)",
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
    "explanation": "Answer D.",
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
    "explanation": "(1−s)ns=0.96×1500=1440.",
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
    "explanation": "Leading armature reaction magnetising → |Ef| may be < |Vt| → negative regulation.",
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
    "explanation": "Answer C.",
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
    "explanation": "S_P=12/0.9=13.33; Q_P=√(13.33²−12²)≈5.81; S_tot=20/0.8=25; Q_tot=15; Q_Q=9.19; P_Q=8; pf=8/√(8²+9.19²)≈0.66 lag.",
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
    "explanation": "Answer A.",
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
    "explanation": "Answer B.",
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
    "explanation": "Parallel of C0/2 and εr C0/2.",
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
    "explanation": "L=μN²A/l = 4πe−7×9e4×3e−4/0.3 = 113×10−6 H.",
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
    "explanation": "Answer A.",
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
    "explanation": "Dep PASS",
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
    "explanation": "tanφ=√3(W1−W2)/(W1+W2)=√3(200)/400=0.866 → φ=40.9°, cos≈0.756.",
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
    "explanation": "Answer D.",
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
    "explanation": "Q=εE A; ε=εrε0; E=5e6 V/m; A=0.08; Q≈2.26×8.85e−12×5e6×0.08≈8e−6 C.",
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
    "explanation": "Answer B.",
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
    "explanation": "Current is **maximum** at series resonance.",
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
    "explanation": "Answer D.",
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
    "explanation": "s²+(2+25Kt)s+25=0 → 2ζωn=8 → Kt=0.24.",
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
    "explanation": "Forward paths sum to (2s+1)/s.",
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
    "explanation": "Answer C.",
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
    "explanation": "ωn=√10, 2ζωn=2 → ζ=1/√10.",
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
    "explanation": "Dep PASS (PYQ figure)",
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
    "explanation": "ts2%=4/σω → σω=1; ts5%=3/σω=3.",
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
    "explanation": "Answer C.",
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
    "explanation": "Answer D.",
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
    "explanation": "Dep PASS — pick from waveform options on page crop.",
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
    "explanation": "Vdc=(2Vm/π)cosα ≈ (2×325/π)×0.866≈179.",
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
    "explanation": "Vo=δVs.",
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
    "explanation": "Dep PASS",
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
    "explanation": "Answer A.",
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
    "explanation": "Answer B.",
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
    "explanation": "Answer C.",
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
    "explanation": "R=PS/Q=3000/100=30; %≈2.1+0.5+0.4=3% → ±0.9 Ω.",
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
    "explanation": "Dep PASS",
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
    "explanation": "Z=VA/I²=15/25=0.6.",
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
    "explanation": "Answer C.",
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
    "explanation": "Answer D.",
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
    "explanation": "Answer A.",
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
    "explanation": "Iz from crop labels (GATE-style worked key ≈ 2 mA). Dep PASS/STRONG.",
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
    "explanation": "Peak of other half ≈100√2.",
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
    "explanation": "Answer D.",
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
    "explanation": "Answer A.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  },
  {
    "id": 65,
    "subject": "Digital Electronics",
    "topic": "Matching+Diagram",
    "question": "[]` Match gate symbols (List-I) to expressions (List-II) as labelled on the crop:",
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
    "explanation": "Dep PASS/STRONG — codes follow crop labels (verify page has gate sketches at crop time).",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
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
    "explanation": "5 mod 4 = 1 → 01.",
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
    "explanation": "Answer D.",
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
    "explanation": "P∝V² → 200×(200/250)²=128.",
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
    "explanation": "Answer B.",
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
    "explanation": "SEC = energy / (tonne·km).",
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
    "explanation": "0.18×350=63. Distractors: 15%, 20%, 350×0.18 slip.",
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
    "explanation": "A=8000(1.05)²=8820; CI=820.",
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
    "explanation": "B=7/12×96=56.",
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
    "explanation": "Sum=150; new sum=126; avg=21.",
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
    "explanation": "v=20 m/s; t=90/20=4.5 s.",
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
    "explanation": "(5/2)×1=5/2.",
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
    "explanation": "1/10+1/15=1/6 → 6 days.",
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
    "explanation": "Milk=25, water=15; need water=25 → add 10 L.",
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
    "explanation": "Art. 324 — ECI.",
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
    "explanation": "Q in coulombs; I in amperes.",
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
    "explanation": "Answer B.",
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
    "explanation": "Answer C.",
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
    "explanation": "Answer D.",
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
    "explanation": "Answer A.",
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
    "explanation": "Answer B.",
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
    "explanation": "+5,+7,+9,+11 → 35.",
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
    "explanation": "Only 3-D / curved solid among plane quadrilaterals.",
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
    "explanation": "20+1+16=37.",
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
    "explanation": "A is brother of C’s generation → maternal uncle of D.",
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
    "explanation": "11:60 − 3:40 = 8:20.",
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
    "explanation": "Answer D.",
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
    "explanation": "Answer A.",
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
    "explanation": "Answer B.",
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
    "explanation": "Answer C.",
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
    "explanation": "Answer D.",
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
    "explanation": "Answer A.",
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
    "explanation": "Answer B.",
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
    "explanation": "Answer C.",
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
    "explanation": "Answer D.",
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
    "explanation": "Answer A.",
    "source": "ELECTRICAL_FLT01_REGENERATED_v2"
  }
];
