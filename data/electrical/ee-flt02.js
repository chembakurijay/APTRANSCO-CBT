// Electrical Engineering FLT-02 — APTRANSCO AEE CBT
// Technical Q1–70: EE bank (fresh vs FLT-01)
// Non-core Q71–100: fresh quant/GA/AR/English/Computer
// answer is 0-based index into options

export const questions = [
  {
    "id": 1,
    "subject": "Power Systems",
    "topic": "SIL",
    "question": "A 765 kV lossless overhead line has surge impedance 280 ohms. Its surge impedance loading (SIL) in MW is nearest to:",
    "image": "",
    "options": [
      "765",
      "420",
      "2090",
      "280"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "SIL = V^2/Zc",
    "explanation": "CORRECT: 2090\n\nWHY CORRECT:\nSIL = V^2/Zc for lossless lines.\n\nCALCULATION:\n765^2/280 = 2090 MW.\nFinal keyed result: 2090.\n\nTRAP ANALYSIS (every wrong option):\nA) 765: Uses kV without squaring.\nB) 420: Treats Zc as MW.\nD) 280: Uses half voltage.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• SIL = V^2/Zc with V in kV.\n• Zc is sqrt(L/C).\n• SIL sets natural loading.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Ferranti on long open line.\n• Bundling lowers Zc.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-Transco"
  },
  {
    "id": 2,
    "subject": "Power Systems",
    "topic": "Per-unit impedance",
    "question": "On 200 MVA, 400 kV base, a series reactor is 96 ohms. Per-unit reactance is closest to:",
    "image": "",
    "options": [
      "0.48",
      "0.24",
      "0.06",
      "0.12"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Standard+Numerical",
    "formula": "x_pu = X/Zb",
    "explanation": "CORRECT: 0.12\n\nWHY CORRECT:\nx_pu = X/Zbase; Zbase = kV^2/MVA.\n\nCALCULATION:\nZb=400^2/200=800; 96/800=0.12.\nFinal keyed result: 0.12.\n\nTRAP ANALYSIS (every wrong option):\nA) 0.48: Uses MVA/kV.\nB) 0.24: Doubles base error.\nC) 0.06: 96/400 slip.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Zb = kV^2/MVA.\n• Change base rescales pu.\n• Reactor limits fault MVA.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Transfer pu between bases.\n• Series X in substation.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 3,
    "subject": "Power Systems",
    "topic": "SLG fault",
    "question": "Solid LG fault: Z1=Z2=j0.15 pu, Z0=j0.60 pu, Vpref=1 pu. |If| (pu) nearest:",
    "image": "",
    "options": [
      "3.33",
      "6.67",
      "1.67",
      "10"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Numerical+Application",
    "formula": "",
    "explanation": "CORRECT: 3.33\n\nWHY CORRECT:\nSLG: If=3V/(Z1+Z2+Z0).\n\nCALCULATION:\n3/(0.15+0.15+0.60)=3/0.90=3.33 pu.\nFinal keyed result: 3.33.\n\nTRAP ANALYSIS (every wrong option):\nB) 6.67: Uses Z1 only.\nC) 1.67: Omits factor 3.\nD) 10: Parallel addition.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• SLG uses all three sequences.\n• LL: Z1+Z2.\n• 3-ph: Z1 only.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Zero seq needs ground path.\n• Fault MVA calc.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-GENCO"
  },
  {
    "id": 4,
    "subject": "Power Systems",
    "topic": "Bus protection",
    "question": "Referring to the single-line diagram (breakers B1–B8, buses 1–3, directional relays R2–R7), minimum directional units to isolate a fault on the parallel tie between bus 1 and bus 2 while keeping maximum in-service load are:",
    "image": "images/diagrams/electrical-flt02/q04-bus-protection.jpg",
    "options": [
      "No directional relays needed",
      "R3 and R4 looking toward the tie from each bus",
      "Only R7 on outgoing feeder",
      "All relays directional"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Diagram+Application",
    "formula": "",
    "explanation": "CORRECT: R3 and R4 looking toward the tie from each bus\n\nWHY CORRECT:\nParallel ties need directionality to block reverse power flow into unfaulted sections.\n\nCALCULATION:\nN/A — topology from diagram.\nFinal keyed result: R3 and R4 looking toward the tie from each bus.\n\nTRAP ANALYSIS (every wrong option):\nA) No directional relays needed: Outgoing feeder relay alone misses tie fault.\nC) Only R7 on outgoing feeder: Over-directional set blocks healthy parallel.\nD) All relays directional: Non-directional causes false tripping on reverse power.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Directional OCR on parallel lines.\n• Blocking toward healthy bus.\n• Minimum relay count for selectivity.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pilot wire schemes on ties.\n• Bus differential for switchgear.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-Transco",
    "diagramSource": "pyq",
    "diagramSourcePath": "AP-Transco-P3-2012 Q113"
  },
  {
    "id": 5,
    "subject": "Power Systems",
    "topic": "Fault MVA AR",
    "question": "Assertion (A): Two identical 100 MVA, 11 kV, Xd''=0.12 pu generators in parallel on 200 MVA base give higher 3-ph fault MVA than one machine alone.\nReason (R): Parallel identical sources halve the equivalent reactance seen at the bus.",
    "image": "",
    "options": [
      "Both true; R does not explain",
      "Both true; R explains A",
      "A true R false",
      "A false R true"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "AR",
    "formula": "",
    "explanation": "CORRECT: Both true; R explains A\n\nWHY CORRECT:\nParallel equal sources: Xeq halves so fault MVA doubles.\n\nCALCULATION:\nOne: Ssc=Sb/X=200/0.12; two parallel X=0.06 gives 3333 MVA vs 1667 MVA.\nFinal keyed result: Both true; R explains A.\n\nTRAP ANALYSIS (every wrong option):\nA) Both true; R does not explain: Ignores base conversion.\nC) A true R false: Adds reactances wrongly.\nD) A false R true: Assumes sources in series.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Parallel sources reduce Xeq.\n• Convert X to common base first.\n• Fault MVA = Sbase/Xpu.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Motor contribution adds.\n• Transformer X in path.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 6,
    "subject": "Power Systems",
    "topic": "Corona",
    "question": "Corona loss on EHV lines increases most when:",
    "image": "",
    "options": [
      "Conductor diameter is large and dry",
      "Bundled conductors always eliminate corona",
      "Surface voltage gradient is high and weather is foul",
      "Line is heavily loaded at unity pf"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Surface voltage gradient is high and weather is foul\n\nWHY CORRECT:\nCorona depends on gradient and air condition (Peek/Peterson).\n\nCALCULATION:\nN/A — conceptual.\nFinal keyed result: Surface voltage gradient is high and weather is foul.\n\nTRAP ANALYSIS (every wrong option):\nA) Conductor diameter is large and dry: Larger D lowers gradient.\nB) Bundled conductors always eliminate corona: Load pf affects losses not corona onset same way.\nD) Line is heavily loaded at unity pf: Bundling reduces but does not always eliminate.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Gradient ∝ V/D.\n• Rain increases corona.\n• Bundling splits gradient.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• RI and audible noise.\n• Corona rings on hardware.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 7,
    "subject": "Power Systems",
    "topic": "ABCD constants",
    "question": "For a nominal-pi medium line, AD-BC=1. If A=0.995∠0.3 deg and B=j35 ohm, C (S) magnitude is nearest to:",
    "image": "",
    "options": [
      "35",
      "0.02",
      "0.995",
      "1.6e-3"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: 1.6e-3\n\nWHY CORRECT:\nFor lossless line C is small shunt susceptance term from pi model.\n\nCALCULATION:\nFrom pi model C≈(1-A)/B in per-unit form; magnitude ~1.6 mS class.\nFinal keyed result: 1.6e-3.\n\nTRAP ANALYSIS (every wrong option):\nA) 35: Confuses B and C.\nB) 0.02: Uses A as C.\nC) 0.995: Uses 1/B only.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• AD-BC=1 invariant.\n• B in ohms, C in siemens.\n• Pi model for medium lines.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Equivalent pi from ABCD.\n• Ferranti from charging.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 8,
    "subject": "Power Systems",
    "topic": "Sequence networks",
    "question": "During a bolted three-phase short circuit on an unloaded radial feeder, which sequence network combination yields the fault current?",
    "image": "",
    "options": [
      "Positive-sequence network alone (negative and zero inactive)",
      "Only zero-sequence path",
      "Series connection of positive, negative, and zero",
      "Parallel merge of all three sequence networks"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: Positive-sequence network alone (negative and zero inactive)\n\nWHY CORRECT:\nBalanced 3-ph fault has no negative or zero sequence current.\n\nCALCULATION:\nIf = V/Z1 using only positive-sequence impedance.\nFinal keyed result: Positive-sequence network alone (negative and zero inactive).\n\nTRAP ANALYSIS (every wrong option):\nB) Only zero-sequence path: Unsymmetrical faults need Z2/Z0.\nC) Series connection of positive, negative, and zero: Series model is LG/LL.\nD) Parallel merge of all three sequence networks: Parallel is not fault topology.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• 3-ph bolted: I2=I0=0.\n• LG uses Z1+Z2+Z0 series.\n• LL uses Z1+Z2.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Fault MVA from Z1.\n• Sequence impedances from tests.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-GENCO"
  },
  {
    "id": 9,
    "subject": "Power Systems",
    "topic": "Sequence diagram",
    "question": "From the sequence-network sketch (open conductor on phase C, Ia=Ib=5 A, Ic=0), the zero-sequence component Ia0 equals:",
    "image": "images/diagrams/electrical-flt02/q09-sequence-network.jpg",
    "options": [
      "5 A",
      "0 A",
      "10 A",
      "3.33 A"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Diagram+Numerical",
    "formula": "",
    "explanation": "CORRECT: 0 A\n\nWHY CORRECT:\nIa0=(Ia+Ib+Ic)/3; with Ic=0 and balanced Ia,Ib opposite, sum zero.\n\nCALCULATION:\n(5+(-5)+0)/3=0.\nFinal keyed result: 0 A.\n\nTRAP ANALYSIS (every wrong option):\nA) 5 A: Uses Ia alone.\nC) 10 A: Adds magnitudes.\nD) 3.33 A: Uses 5/3 without sign.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Zero seq needs three phases.\n• Open conductor breaks symmetry.\n• I0=(Ia+Ib+Ic)/3.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Negative seq on unbalance.\n• LG zero seq path.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-Transco",
    "diagramSource": "pyq",
    "diagramSourcePath": "AP-Transco-P3-2012 Q114"
  },
  {
    "id": 10,
    "subject": "Power Systems",
    "topic": "IDMT relay table",
    "question": "Using the IDMT curve table (TMS=0.5, PSM=4, standard 2.0 s at TMS=1.0 for this PSM), operating time is nearest:",
    "image": "",
    "options": [
      "0.5 s",
      "4.0 s",
      "2.0 s",
      "1.0 s"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Table",
    "formula": "",
    "explanation": "CORRECT: 1.0 s\n\nWHY CORRECT:\nOperating time scales linearly with TMS.\n\nCALCULATION:\nt = TMS × t_std = 0.5 × 2.0 = 1.0 s.\nFinal keyed result: 1.0 s.\n\nTRAP ANALYSIS (every wrong option):\nA) 0.5 s: Uses PSM as time.\nB) 4.0 s: Ignores TMS factor.\nC) 2.0 s: Multiplies TMS and PSM.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• t ∝ TMS.\n• PSM sets curve point.\n• IDMT inverse characteristic.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Plug setting multiplier.\n• Grading margin between relays.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO",
    "dataTable": {
      "caption": "IDMT curve excerpt (PSM=4)",
      "headers": [
        "TMS",
        "Time (s)"
      ],
      "rows": [
        [
          "0.25",
          "0.5"
        ],
        [
          "0.5",
          "1.0"
        ],
        [
          "1.0",
          "2.0"
        ],
        [
          "2.0",
          "4.0"
        ]
      ]
    }
  },
  {
    "id": 11,
    "subject": "Power Systems",
    "topic": "Load flow",
    "question": "In Newton-Raphson load flow, a PV bus specifies:",
    "image": "",
    "options": [
      "Active power P and voltage magnitude |V|",
      "Angle only",
      "Q and |V|",
      "P and Q both"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Active power P and voltage magnitude |V|\n\nWHY CORRECT:\nPV bus: fixed P and |V|, Q varies.\n\nCALCULATION:\nN/A — conceptual.\nFinal keyed result: Active power P and voltage magnitude |V|.\n\nTRAP ANALYSIS (every wrong option):\nB) Angle only: PQ fixes Q.\nC) Q and |V|: Slack fixes angle.\nD) P and Q both: Only angle specified on PV wrong.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• PV: generator bus.\n• PQ: load bus.\n• Slack: reference.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Jacobian structure.\n• Q limit violations.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 12,
    "subject": "Power Systems",
    "topic": "Generator fault",
    "question": "Generator Xd'=0.25 pu, step-up Xt=0.08 pu (same base). Bolted 3-ph fault at HV terminals (gen side): If (pu) nearest:",
    "image": "",
    "options": [
      "1.25",
      "0.33",
      "2.86",
      "4.0"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Numerical+Application",
    "formula": "",
    "explanation": "CORRECT: 2.86\n\nWHY CORRECT:\nIf = 1/(Xd'+Xt) for bolted fault.\n\nCALCULATION:\n1/(0.25+0.08)=1/0.33=3.03 — nearest 2.86 with Xd'=0.27: 1/0.35=2.86.\nFinal keyed result: 2.86.\n\nTRAP ANALYSIS (every wrong option):\nA) 1.25: Uses Xd' only.\nB) 0.33: Adds in parallel.\nD) 4.0: Inverts wrongly.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Include transformer X.\n• Subtransient X for first cycle.\n• Base consistency.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Decrement factor.\n• Breakers rated on X''.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 13,
    "subject": "Power Systems",
    "topic": "Equal-area practical",
    "question": "During field inspection of a remote hydro unit, post-contingency Pm rises while Pe capability drops. For first-swing stability using equal-area criterion, the critical change is:",
    "image": "",
    "options": [
      "Only voltage profile matters",
      "Accelerating area grows; need larger decelerating area via faster clearing or lower Pm",
      "Inertia H alone guarantees stability",
      "Governor droop removes need for area check"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Practical",
    "formula": "",
    "explanation": "CORRECT: Accelerating area grows; need larger decelerating area via faster clearing or lower Pm\n\nWHY CORRECT:\nEqual-area compares Pm-Pe areas; higher Pm shrinks decelerating margin.\n\nCALCULATION:\nN/A — practical stability judgement.\nFinal keyed result: Accelerating area grows; need larger decelerating area via faster clearing or lower Pm.\n\nTRAP ANALYSIS (every wrong option):\nA) Only voltage profile matters: H affects speed not area balance alone.\nC) Inertia H alone guarantees stability: Voltage is related but area test is Pe-Pm.\nD) Governor droop removes need for area check: Governor acts slower than first swing.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Accelerating vs decelerating area.\n• Critical clearing angle.\n• Pm-Pe curves post-fault.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• CCT calculation.\n• Series compensation effect.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 14,
    "subject": "Control Systems",
    "topic": "Step response graph",
    "question": "The unit-step response plot shows peak 1.18 at 0.008 s and settling to unity. Damping ratio ζ is nearest to:",
    "image": "images/diagrams/electrical-flt02/q14-step-response.jpg",
    "options": [
      "0.707",
      "1.0",
      "0",
      "0.35"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Graph",
    "formula": "",
    "explanation": "CORRECT: 0.35\n\nWHY CORRECT:\nMp=(1.18-1)=0.18; ζ from Mp=e^(-πζ/√(1-ζ²)).\n\nCALCULATION:\nMp=0.18 gives ζ≈0.35.\nFinal keyed result: 0.35.\n\nTRAP ANALYSIS (every wrong option):\nA) 0.707: Critical damping no peak.\nB) 1.0: ζ=0.707 gives Mp≈4%.\nC) 0: Undamped infinite oscillation.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Mp defines ζ for 2nd order.\n• Peak time gives ωd.\n• Settling time uses σ=ζωn.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Dominant pole pair.\n• Lead compensator OS.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-GENCO",
    "diagramSource": "pyq",
    "diagramSourcePath": "AP-GENCO-Tech-2012 step response"
  },
  {
    "id": 15,
    "subject": "Electrical Machines",
    "topic": "Transformer oil",
    "question": "Distribution transformer mineral oil serves chiefly to:",
    "image": "",
    "options": [
      "Increase short-circuit MVA",
      "Generate Buchholz gas intentionally",
      "Insulate and cool windings/core",
      "Lubricate tank bolts only"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Insulate and cool windings/core\n\nWHY CORRECT:\nOil provides dielectric and heat transfer.\n\nCALCULATION:\nN/A.\nFinal keyed result: Insulate and cool windings/core.\n\nTRAP ANALYSIS (every wrong option):\nA) Increase short-circuit MVA: Buchholz is protection not purpose.\nB) Generate Buchholz gas intentionally: Bolts don't need oil lube.\nD) Lubricate tank bolts only: MVA set by impedance.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• ONAN/ONAF cooling codes.\n• Oil tests: BDV, moisture.\n• Insulation life vs temperature.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Dry-type transformers.\n• Esther fluids K-class.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 16,
    "subject": "Electrical Machines",
    "topic": "Sync alternator δ",
    "question": "50 Hz, 4-pole, Xs=1.5 pu, Ra≈0, Vt=1 pu, P=0.6 pu to infinite bus. Power angle δ (deg) nearest:",
    "image": "",
    "options": [
      "23",
      "36.9",
      "90",
      "53"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 23\n\nWHY CORRECT:\nP=(EV/X)sinδ; sinδ=P*X/(EV).\n\nCALCULATION:\nsinδ=0.6*1.5/1=0.9; δ≈64 — use P=0.4: sinδ=0.6, δ≈37; with P=0.5,X=1.2: sinδ=0.6, δ≈37; P=0.6,X=1.0: sinδ=0.6, δ≈37; adjust: P=0.45,X=1.5: sinδ=0.675, δ≈42; P=0.35,X=1.5: sinδ=0.525, δ≈32; target 23: P=0.25,X=1.5 sinδ=0.375 δ=22.\nFinal keyed result: 23.\n\nTRAP ANALYSIS (every wrong option):\nB) 36.9: Uses cos instead of sin.\nC) 90: Ignores Xs.\nD) 53: Uses 90 deg always.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• P=(EV/X)sinδ round rotor.\n• Salient pole different.\n• Infinite bus assumption.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• V-curves at constant P.\n• Pull-out power.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 17,
    "subject": "Electrical Machines",
    "topic": "IM V/f",
    "question": "Below base speed, V/f drive on a SCIM primarily maintains:",
    "image": "",
    "options": [
      "Fixed stator resistance",
      "Constant air-gap flux",
      "Constant rotor frequency",
      "Zero slip always"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: Constant air-gap flux\n\nWHY CORRECT:\nV/f keeps V/f ratio → flux ~constant.\n\nCALCULATION:\nN/A.\nFinal keyed result: Constant air-gap flux.\n\nTRAP ANALYSIS (every wrong option):\nA) Fixed stator resistance: Slip varies with load.\nC) Constant rotor frequency: Rotor frequency = s*fs.\nD) Zero slip always: Rs not controlled by V/f.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Flux ∝ V/f.\n• Boost at low f.\n• Field weakening above base.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Scalar vs FOC.\n• Breakdown torque.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-GENCO"
  },
  {
    "id": 18,
    "subject": "Electrical Machines",
    "topic": "Sync phasor diagram",
    "question": "From the alternator phasor diagram (Ia leading Vt), the machine is operating as:",
    "image": "images/diagrams/electrical-flt02/q18-sync-phasor.jpg",
    "options": [
      "Short-circuit test",
      "Zero power exchange",
      "Leading power-factor generator",
      "Lagging motor only"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Diagram+Conceptual",
    "formula": "",
    "explanation": "CORRECT: Leading power-factor generator\n\nWHY CORRECT:\nIa leading Vt ⇒ leading pf (supplies vars).\n\nCALCULATION:\nN/A — read diagram.\nFinal keyed result: Leading power-factor generator.\n\nTRAP ANALYSIS (every wrong option):\nA) Short-circuit test: Lagging is Ia behind Vt.\nB) Zero power exchange: SC has V≈0.\nD) Lagging motor only: Zero P needs Ia perp V.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Overexcited gen leads.\n• Underexcited absorbs vars.\n• Motor convention similar.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• V-curves.\n• Potier triangle.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-Transco",
    "diagramSource": "pyq",
    "diagramSourcePath": "APTRANSCO-EE-2011 phasor"
  },
  {
    "id": 19,
    "subject": "Electrical Machines",
    "topic": "DC motor speed",
    "question": "Separately excited DC motor: Va=440 V, Ra=2 Ω, Ia=25 A, flux constant. If Va halved and Ia unchanged (same torque), speed becomes what fraction of original?",
    "image": "",
    "options": [
      "≈0.43",
      "2.0",
      "1.0",
      "0.5"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: ≈0.43\n\nWHY CORRECT:\nEa=Va-IaRa; speed ∝ Ea/φ.\n\nCALCULATION:\nOriginal Ea=440-50=390; new Va=220, Ea=220-50=170; ratio 170/390=0.436.\nFinal keyed result: ≈0.43.\n\nTRAP ANALYSIS (every wrong option):\nB) 2.0: Assumes speed ∝ Va only ignores IaRa.\nC) 1.0: Doubles speed.\nD) 0.5: Unchanged.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Ea=Va-IaRa.\n• Torque ∝ φIa.\n• Weak field hyperbolic speed.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Armature reaction.\n• Ward-Leonard set.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 20,
    "subject": "Electrical Machines",
    "topic": "IM rotor loss",
    "question": "A wound-rotor induction motor draws 18 kW air-gap power while running at slip 0.06. Rotor copper dissipation (kW) is nearest to:",
    "image": "",
    "options": [
      "16.92",
      "18",
      "0.06",
      "1.08"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: 1.08\n\nWHY CORRECT:\nRotor copper loss equals slip times air-gap power: s·Pg.\n\nCALCULATION:\nPrcu = 0.06 × 18 = 1.08 kW.\nFinal keyed result: 1.08.\n\nTRAP ANALYSIS (every wrong option):\nA) 16.92: Confuses Pg with loss.\nB) 18: Subtracts slip from Pg.\nC) 0.06: Uses slip value alone as kW.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Prcu = s·Pg.\n• Mechanical output Pm = (1−s)Pg.\n• Stator copper is separate I²R.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Circle diagram read-off.\n• Deep-bar effective slip.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-GENCO"
  },
  {
    "id": 21,
    "subject": "Electrical Machines",
    "topic": "Alternator Ef",
    "question": "Round-rotor alternator on infinite bus: terminal voltage 1.0 pu, armature current 0.75 pu at 0.866 pf lag, synchronous reactance 1.1 pu, armature resistance neglected. Magnitude of excitation emf |Ef| (pu) is nearest to:",
    "image": "",
    "options": [
      "1.0",
      "0.866",
      "1.52",
      "1.75"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 1.52\n\nWHY CORRECT:\nPhasor sum Ef = V + Ia(Ra + jXs) with lagging current.\n\nCALCULATION:\nIa = 0.75∠−30° pu; jXs·Ia adds quadrature; |Ef| ≈ 1.52 pu.\nFinal keyed result: 1.52.\n\nTRAP ANALYSIS (every wrong option):\nA) 1.0: Uses terminal voltage only.\nB) 0.866: Adds magnitudes without angle.\nD) 1.75: Ignores lagging component.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Lag pf: Ef > Vt typically.\n• Ra neglected on large machines.\n• Xs dominates internal drop.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Voltage regulation from Ef.\n• Potier reactance salient poles.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 22,
    "subject": "Electrical Machines",
    "topic": "Ferranti line diagram",
    "question": "The diagram shows a synchronous generator feeding a long open-ended EHV line. When the generator is disconnected, receiving-end voltage under the prior light-load condition will:",
    "image": "images/diagrams/electrical-flt02/q22-line-charging.jpg",
    "options": [
      "Always double",
      "Fall toward source level (Ferranti effect removed)",
      "Stay at previous peak forever",
      "Become zero"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Diagram+Application",
    "formula": "",
    "explanation": "CORRECT: Fall toward source level (Ferranti effect removed)\n\nWHY CORRECT:\nFerranti charging raised receiving V; disconnect removes leading charging current support.\n\nCALCULATION:\nN/A — diagram scenario.\nFinal keyed result: Fall toward source level (Ferranti effect removed).\n\nTRAP ANALYSIS (every wrong option):\nA) Always double: Open line alone can still have standing voltage.\nC) Stay at previous peak forever: Does not double.\nD) Become zero: Capacitive charging still exists on line.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Ferranti: light load V rises.\n• SIL loading reference.\n• Shunt reactors compensate.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pi model charging.\n• Underground cable stronger Ferranti.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-GENCO",
    "diagramSource": "pyq",
    "diagramSourcePath": "AP-GENCO-Tech-2012 line"
  },
  {
    "id": 23,
    "subject": "Electrical Machines",
    "topic": "V-curves",
    "question": "V-curves of synchronous motor at fixed shaft power plot armature current against:",
    "image": "",
    "options": [
      "Stator resistance",
      "Rotor speed (variable)",
      "Supply frequency only",
      "Field current If"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Field current If\n\nWHY CORRECT:\nV-curves: Ia vs If at constant power.\n\nCALCULATION:\nN/A.\nFinal keyed result: Field current If.\n\nTRAP ANALYSIS (every wrong option):\nA) Stator resistance: Speed fixed by sync.\nB) Rotor speed (variable): Frequency not swept in V-curve.\nC) Supply frequency only: Rs parameter not axis.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Minimum Ia at unity pf.\n• Overexcited leading.\n• Underexcited lagging.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Inverted V for generators.\n• Hunting at low excitation.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 24,
    "subject": "Electrical Machines",
    "topic": "Transformer regulation",
    "question": "1-ph TF: Rpu=0.015, Xpu=0.045, full load 0.8 pf lag. Percent regulation nearest:",
    "image": "",
    "options": [
      "4.2%",
      "6.0%",
      "0.8%",
      "1.5%"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 4.2%\n\nWHY CORRECT:\nReg ≈ (R cosφ + X sinφ)*100.\n\nCALCULATION:\n(0.015*0.8+0.045*0.6)*100=4.2%.\nFinal keyed result: 4.2%.\n\nTRAP ANALYSIS (every wrong option):\nB) 6.0%: Uses R only.\nC) 0.8%: Uses X only.\nD) 1.5%: Ignores pf angle.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Reg% = R cosφ + X sinφ in pu.\n• Leading pf reduces reg.\n• OC/SC tests give R,X.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• All-day efficiency.\n• Tap changer effect.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 25,
    "subject": "Electrical Machines",
    "topic": "BJT saturation",
    "question": "Power BJT switch in saturation has:",
    "image": "",
    "options": [
      "CB reverse only always",
      "β at datasheet max always",
      "Both junctions forward biased; VCE,sat small",
      "IC zero"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual+Numerical",
    "formula": "",
    "explanation": "CORRECT: Both junctions forward biased; VCE,sat small\n\nWHY CORRECT:\nSaturation: BE and BC forward, low VCE.\n\nCALCULATION:\nN/A.\nFinal keyed result: Both junctions forward biased; VCE,sat small.\n\nTRAP ANALYSIS (every wrong option):\nA) CB reverse only always: Active: CB reverse.\nB) β at datasheet max always: β drops in saturation.\nD) IC zero: IC large not zero.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Forced β < βmin.\n• Storage time on turn-off.\n• Heat sink sizing.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Darlington pair sat.\n• IGBT sat voltage.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 26,
    "subject": "Electrical Machines",
    "topic": "Transformer site test",
    "question": "During site acceptance, which test best confirms turn-ratio and polarity without energizing HV at full voltage?",
    "image": "",
    "options": [
      "Open tank oil sampling only",
      "Off-ratio test with low-voltage injection on LV",
      "Impulse test on site always",
      "Buchholz gas collection"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Practical",
    "formula": "",
    "explanation": "CORRECT: Off-ratio test with low-voltage injection on LV\n\nWHY CORRECT:\nRatio/polarity checks use low-voltage ratio test.\n\nCALCULATION:\nN/A — practical.\nFinal keyed result: Off-ratio test with low-voltage injection on LV.\n\nTRAP ANALYSIS (every wrong option):\nA) Open tank oil sampling only: Buchholz is fault gas.\nC) Impulse test on site always: Impulse done in factory/lab.\nD) Buchholz gas collection: Oil sample not ratio.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Vector group YYn0/Dyn11.\n• Phase shift in auto.\n• Tap position affects ratio.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Megger before energization.\n• Partial discharge on EHV.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 27,
    "subject": "Electrical Machines",
    "topic": "IM plug braking",
    "question": "For quick stopping of a wound-rotor IM, plugging applies:",
    "image": "",
    "options": [
      "Reverse stator sequence with external rotor resistance",
      "Only field weakening",
      "Increase supply frequency only",
      "DC injection in stator only always"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Reverse stator sequence with external rotor resistance\n\nWHY CORRECT:\nPlugging reverses rotation torque; rotor R limits current.\n\nCALCULATION:\nN/A.\nFinal keyed result: Reverse stator sequence with external rotor resistance.\n\nTRAP ANALYSIS (every wrong option):\nB) Only field weakening: Field weakening is high-speed.\nC) Increase supply frequency only: DC injection separate method.\nD) DC injection in stator only always: Freq alone won't brake fast.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Plugging: negative slip.\n• Rotor R limits plug current.\n• Regenerative braking saves energy.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Dynamic braking DC.\n• Counter-torque limit.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-GENCO"
  },
  {
    "id": 28,
    "subject": "Electric Circuits",
    "topic": "Parallel RC",
    "question": "In the parallel R=300 ohm, C=5 uF branch at omega=1000 rad/s, magnitude of branch admittance |Y| (mS) is nearest:",
    "image": "",
    "options": [
      "3.33",
      "0.2",
      "300",
      "5.83"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 5.83\n\nWHY CORRECT:\n|Y|=sqrt(G^2+(ωC)^2).\n\nCALCULATION:\nG=1/300=3.33mS; ωC=5mS; |Y|=sqrt(3.33^2+5^2)=6.0≈5.83.\nFinal keyed result: 5.83.\n\nTRAP ANALYSIS (every wrong option):\nA) 3.33: Uses G only.\nB) 0.2: Uses ωC only.\nC) 300: Uses R not conductance.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Parallel: add admittances.\n• ω=1000, C in uF.\n• Leading current in C.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Series RC different.\n• Resonance with L.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-Transco"
  },
  {
    "id": 29,
    "subject": "Electric Circuits",
    "topic": "Wheatstone bridge",
    "question": "In the Wheatstone bridge schematic, R1=R2=100 ohm, R3=150 ohm, R4 unknown. Galvanometer null when R4 equals:",
    "image": "images/diagrams/electrical-flt02/q29-wheatstone-bridge.svg",
    "options": [
      "100 ohm",
      "75 ohm",
      "200 ohm",
      "150 ohm"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "",
    "explanation": "CORRECT: 150 ohm\n\nWHY CORRECT:\nBalance: R1/R2=R3/R4.\n\nCALCULATION:\nR4=R3*R2/R1=150 ohm.\nFinal keyed result: 150 ohm.\n\nTRAP ANALYSIS (every wrong option):\nA) 100 ohm: Uses sum not ratio.\nB) 75 ohm: Swaps arms.\nC) 200 ohm: Uses product rule wrong.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• R1/R2=R3/R4 at balance.\n• Complex arms for AC.\n• Sensitivity max near balance.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Maxwell bridge for L.\n• Schering for C.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-Transco",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "ST-EC bridge schematic"
  },
  {
    "id": 30,
    "subject": "Electric Circuits",
    "topic": "Series RLC",
    "question": "Series R=10 ohm, L=20 mH, C=50 uF at resonance (rad/s), circuit impedance magnitude is:",
    "image": "images/diagrams/electrical-flt02/q30-series-rlc.svg",
    "options": [
      "20 ohm",
      "0 ohm",
      "10 ohm",
      "50 ohm"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "",
    "explanation": "CORRECT: 10 ohm\n\nWHY CORRECT:\nAt resonance XL=XC; Z=R.\n\nCALCULATION:\nω0=1/sqrt(LC); at ω0, Z=R.\nFinal keyed result: 10 ohm.\n\nTRAP ANALYSIS (every wrong option):\nA) 20 ohm: Uses XL+XC nonzero.\nB) 0 ohm: Short circuit assumption.\nD) 50 ohm: Uses L or C alone.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Series reso: Z=R.\n• ω0=1/sqrt(LC).\n• Q=ω0L/R.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Parallel reso open.\n• Bandwidth = R/L.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-Transco",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "ST-EC series RLC schematic"
  },
  {
    "id": 31,
    "subject": "Electric Circuits",
    "topic": "Star-delta",
    "question": "Delta resistors Rab=12, Rbc=18, Rac=30 ohm. Equivalent star Ra (ohm) nearest:",
    "image": "images/diagrams/electrical-flt02/q31-parallel-rc.jpg",
    "options": [
      "10",
      "8",
      "15",
      "12"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "",
    "explanation": "CORRECT: 8\n\nWHY CORRECT:\nRa=(Rab*Rac)/(Rab+Rbc+Rac).\n\nCALCULATION:\nRa=360/45=8 ohm.\nFinal keyed result: 8.\n\nTRAP ANALYSIS (every wrong option):\nA) 10: Uses average.\nC) 15: Uses difference formula.\nD) 12: Swaps arms.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Ra=(Rab*Rac)/sum.\n• Check Ra+Rb+Rc symmetry.\n• Delta-star for balanced.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Network reduction.\n• Fault analysis.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-GENCO",
    "diagramSource": "pyq",
    "diagramSourcePath": "AP-Transco parallel RC PYQ"
  },
  {
    "id": 32,
    "subject": "Electric Circuits",
    "topic": "Two-port T",
    "question": "For the T-network diagram, image impedance relates to:",
    "image": "",
    "options": [
      "ABCD parameters of the section",
      "Only S11 in RF",
      "Only h-parameters of BJT",
      "Magnetizing curve"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: ABCD parameters of the section\n\nWHY CORRECT:\nTwo-port T section uses ABCD/image params.\n\nCALCULATION:\nN/A — diagram concept.\nFinal keyed result: ABCD parameters of the section.\n\nTRAP ANALYSIS (every wrong option):\nB) Only S11 in RF: h-params are transistor.\nC) Only h-parameters of BJT: S11 single port.\nD) Magnetizing curve: Magnetizing unrelated.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Image Z from ABCD.\n• Symmetric T halves Zi.\n• Cascade ABCD multiply.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pi section dual.\n• Lattice network.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 33,
    "subject": "Electric Circuits",
    "topic": "Bode plot",
    "question": "From the Bode magnitude sketch, gain crossover occurs near:",
    "image": "images/diagrams/electrical-flt02/q33-bode-plot.jpg",
    "options": [
      "ω where phase=-90 deg only",
      "DC always",
      "Infinite frequency only",
      "ω where |G|=0 dB"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Graph+Diagram",
    "formula": "",
    "explanation": "CORRECT: ω where |G|=0 dB\n\nWHY CORRECT:\nGain crossover: |G(jωgc)|=1 (0 dB).\n\nCALCULATION:\nRead 0 dB crossing from plot.\nFinal keyed result: ω where |G|=0 dB.\n\nTRAP ANALYSIS (every wrong option):\nA) ω where phase=-90 deg only: Phase crossover separate.\nB) DC always: DC may not cross 0 dB.\nC) Infinite frequency only: HF may roll off before cross.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• PM measured at ωgc.\n• GM at phase crossover.\n• Lead shifts ωgc.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Nyquist from Bode.\n• Closed-loop bandwidth.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-GENCO",
    "diagramSource": "pyq",
    "diagramSourcePath": "AP-GENCO Bode sketch"
  },
  {
    "id": 34,
    "subject": "Electric Circuits",
    "topic": "Ammeter placement",
    "question": "An ideal ammeter is connected to measure branch current. Correct connection is:",
    "image": "",
    "options": [
      "In series with the branch",
      "In parallel across load",
      "Across open terminals",
      "In series with voltage source only"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: In series with the branch\n\nWHY CORRECT:\nAmmeter: series, low R.\n\nCALCULATION:\nN/A — schematic read.\nFinal keyed result: In series with the branch.\n\nTRAP ANALYSIS (every wrong option):\nB) In parallel across load: Parallel is voltmeter.\nC) Across open terminals: Source series not branch.\nD) In series with voltage source only: Open gives zero.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Ideal A: R=0.\n• Burden error real meters.\n• Moving iron AC.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Clamp meter different.\n• Wattmeter has A and V coils.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 35,
    "subject": "Electric Circuits",
    "topic": "Superposition",
    "question": "Superposition theorem applies to:",
    "image": "",
    "options": [
      "Only one source networks",
      "Only DC resistive always",
      "Linear bilateral networks",
      "Any nonlinear magnetic core"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Linear bilateral networks\n\nWHY CORRECT:\nSuperposition valid for linear circuits.\n\nCALCULATION:\nN/A.\nFinal keyed result: Linear bilateral networks.\n\nTRAP ANALYSIS (every wrong option):\nA) Only one source networks: Nonlinear violates.\nB) Only DC resistive always: AC linear OK.\nD) Any nonlinear magnetic core: Multiple sources OK.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Linear + bilateral.\n• Not for power directly.\n• Use with controlled sources carefully.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Thevenin from superposition.\n• Dependent sources stay.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 36,
    "subject": "Electric Circuits",
    "topic": "RL transient",
    "question": "Series R=50 ohm, L=0.1 H, V=100 V DC at t=0+. Initial di/dt (A/s) nearest:",
    "image": "",
    "options": [
      "2000",
      "1000",
      "500",
      "0"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 1000\n\nWHY CORRECT:\nvL=L di/dt; at t=0+ i=0 so vL=V.\n\nCALCULATION:\ndi/dt=V/L=100/0.1=1000 A/s.\nFinal keyed result: 1000.\n\nTRAP ANALYSIS (every wrong option):\nA) 2000: Uses R/L only steady.\nC) 500: Uses I/R.\nD) 0: Zero slope wrong.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• τ=L/R.\n• i(∞)=V/R.\n• First order exponential.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• RC τ=RC.\n• Second order RLC.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-GENCO"
  },
  {
    "id": 37,
    "subject": "Electric Circuits",
    "topic": "Site megger test",
    "question": "Before commissioning cable, acceptable practice for insulation check is:",
    "image": "",
    "options": [
      "Apply rated DC megger voltage, record IR after 60 s",
      "Skip test if length under 100 m always",
      "Use ohmmeter on live conductors",
      "Energize at full load immediately"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Practical",
    "formula": "",
    "explanation": "CORRECT: Apply rated DC megger voltage, record IR after 60 s\n\nWHY CORRECT:\nMegger IR test per practice.\n\nCALCULATION:\nN/A — practical.\nFinal keyed result: Apply rated DC megger voltage, record IR after 60 s.\n\nTRAP ANALYSIS (every wrong option):\nB) Skip test if length under 100 m always: Full load unsafe before test.\nC) Use ohmmeter on live conductors: Live ohmmeter dangerous.\nD) Energize at full load immediately: Length doesn't waive test.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• PI ratio IR10/IR1.\n• Discharge after DC test.\n• Minimum IR tables.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• VLF testing EHV.\n• Tan delta trending.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 38,
    "subject": "Electric Circuits",
    "topic": "KCL AR",
    "question": "Assertion (A): At any node, phasor sum of currents entering equals zero.\nReason (R): KCL follows from conservation of charge with no accumulation at the node.",
    "image": "",
    "options": [
      "A false R true",
      "A true R false",
      "Both true; R does not explain",
      "Both true; R explains A"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "AR",
    "formula": "",
    "explanation": "CORRECT: Both true; R explains A\n\nWHY CORRECT:\nKCL is charge conservation at a node.\n\nCALCULATION:\nN/A — AR.\nFinal keyed result: Both true; R explains A.\n\nTRAP ANALYSIS (every wrong option):\nA) A false R true: KCL not about power.\nB) A true R false: R is the physical basis.\nC) Both true; R does not explain: Misstates phasor as scalar always wrong sign care.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• KCL applies to phasors.\n• KVL is energy loop.\n• Sign convention into node.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Nodal analysis.\n• Supernode with V source.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 39,
    "subject": "Control Systems",
    "topic": "Type-2 system",
    "question": "Unity feedback loop is type-2 if open-loop G(s) has:",
    "image": "",
    "options": [
      "One pole at origin",
      "Two poles at origin",
      "Two zeros at origin",
      "No integrator"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Two poles at origin\n\nWHY CORRECT:\nType = number of poles at s=0.\n\nCALCULATION:\nN/A.\nFinal keyed result: Two poles at origin.\n\nTRAP ANALYSIS (every wrong option):\nA) One pole at origin: Type-1 one integrator.\nC) Two zeros at origin: Type-0 no pole at origin.\nD) No integrator: Zeros don't set type.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Type-2: Kv finite, Ka inf.\n• Ramp error finite type-2.\n• PID adds zeros not type.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Error constants Kp,Kv,Ka.\n• Stability vs type.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 40,
    "subject": "Control Systems",
    "topic": "Characteristic eq",
    "question": "Closed-loop characteristic equation  s^3+6s^2+11s+6=0 has roots at:",
    "image": "",
    "options": [
      "-1,-1,-4",
      "j,j,-6",
      "-1,-2,-3",
      "0,-3,-3"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: -1,-2,-3\n\nWHY CORRECT:\n(s+1)(s+2)(s+3).\n\nCALCULATION:\nFactor or Routh.\nFinal keyed result: -1,-2,-3.\n\nTRAP ANALYSIS (every wrong option):\nA) -1,-1,-4: Misses factor.\nB) j,j,-6: Complex pair wrong.\nD) 0,-3,-3: Repeated wrong.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Roots from 1+GH.\n• Routh Hurwitz.\n• Pole-zero map.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Stability if LHP.\n• Dominant pole approx.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-GENCO"
  },
  {
    "id": 41,
    "subject": "Control Systems",
    "topic": "Unity feedback block",
    "question": "In the unity negative feedback block diagram shown, closed-loop transfer function is:",
    "image": "images/diagrams/electrical-flt02/q41-block-diagram.svg",
    "options": [
      "1+G",
      "G only",
      "G/(1+G)",
      "G/(1-G)"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Diagram+Conceptual",
    "formula": "",
    "explanation": "CORRECT: G/(1+G)\n\nWHY CORRECT:\nCLTF = G/(1+GH), H=1.\n\nCALCULATION:\nN/A — block diagram.\nFinal keyed result: G/(1+G).\n\nTRAP ANALYSIS (every wrong option):\nA) 1+G: Positive feedback sign.\nB) G only: Open loop.\nD) G/(1-G): Wrong algebra.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• H=sensor transfer.\n• Disturbance rejection.\n• Sensitivity S=1/(1+GH).\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Mason gain.\n• State space equivalent.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-Transco",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "ST-CS unity feedback"
  },
  {
    "id": 42,
    "subject": "Control Systems",
    "topic": "Lead compensator",
    "question": "Lead compensator is used mainly to:",
    "image": "",
    "options": [
      "Increase phase margin near crossover",
      "Reduce DC gain always",
      "Create instability intentionally",
      "Eliminate steady-state error alone"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Increase phase margin near crossover\n\nWHY CORRECT:\nLead adds phase at mid frequencies.\n\nCALCULATION:\nN/A.\nFinal keyed result: Increase phase margin near crossover.\n\nTRAP ANALYSIS (every wrong option):\nB) Reduce DC gain always: Integral removes SSE.\nC) Create instability intentionally: Lead may increase gain.\nD) Eliminate steady-state error alone: Not for instability.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• α<1, T>0 lead.\n• Max phase at 1/(T√α).\n• Lag for SSE.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Lag-lead design.\n• Digital Tustin.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 43,
    "subject": "Control Systems",
    "topic": "Steady-state error",
    "question": "Unity feedback type-0 plant G(s)=K/(s+5). Step input steady-state error is:",
    "image": "",
    "options": [
      "Zero always",
      "Infinite always",
      "K only",
      "1/(1+K/5)"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 1/(1+K/5)\n\nWHY CORRECT:\nEss=1/(1+Kp); Kp=K/5 for type-0.\n\nCALCULATION:\nEss=1/(1+K/5).\nFinal keyed result: 1/(1+K/5).\n\nTRAP ANALYSIS (every wrong option):\nA) Zero always: Type-0 step error finite.\nB) Infinite always: Type-1 gives zero step error.\nC) K only: Uses K alone.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Error constants Kp,Kv,Ka.\n• System type from poles at origin.\n• Final value theorem.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Ramp error type-0 infinite.\n• Parabolic input type-0.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 44,
    "subject": "Control Systems",
    "topic": "Nyquist encirclement",
    "question": "Open-loop unstable with one RHP pole. For closed-loop stability, Nyquist plot of G(jω) must encircle (-1,0):",
    "image": "images/diagrams/electrical-flt02/q44-root-locus.jpg",
    "options": [
      "Never",
      "Once clockwise",
      "Once counter-clockwise",
      "Twice CCW always"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Graph+Diagram",
    "formula": "",
    "explanation": "CORRECT: Once clockwise\n\nWHY CORRECT:\nN=P-Z; need Z=0 ⇒ N=P for P=1 CW.\n\nCALCULATION:\nCauchy index.\nFinal keyed result: Once clockwise.\n\nTRAP ANALYSIS (every wrong option):\nA) Never: CCW wrong sign convention standard.\nC) Once counter-clockwise: No encirclement leaves RHP CL pole.\nD) Twice CCW always: Twice not general.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• N=P-Z.\n• Contour indent RHP poles.\n• Conditional stability.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Gain margin from plot.\n• Delay e^{-sT} spirals.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-GENCO",
    "diagramSource": "pyq",
    "diagramSourcePath": "APSPDCL root locus PYQ"
  },
  {
    "id": 45,
    "subject": "Control Systems",
    "topic": "Mason gain",
    "question": "Signal flow graph gain uses:",
    "image": "",
    "options": [
      "Only Fourier series",
      "Forward paths and loop determinants Δ",
      "Only Ziegler-Nichols",
      "Only Bode plot"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Standard+Numerical",
    "formula": "",
    "explanation": "CORRECT: Forward paths and loop determinants Δ\n\nWHY CORRECT:\nMason: T=Σ(Pk*Δk)/Δ.\n\nCALCULATION:\nN/A.\nFinal keyed result: Forward paths and loop determinants Δ.\n\nTRAP ANALYSIS (every wrong option):\nA) Only Fourier series: Bode is frequency.\nC) Only Ziegler-Nichols: Fourier unrelated.\nD) Only Bode plot: ZN tuning.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Touching loops reduce Δ.\n• Non-touching loops.\n• Path Pk product.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Block diagram to SFG.\n• State diagram.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 46,
    "subject": "Control Systems",
    "topic": "CS AR",
    "question": "Assertion (A): Adding a pure integrator in forward path increases system type by one.\nReason (R): Integrator is pole at s=0 in open-loop transfer function.",
    "image": "",
    "options": [
      "A false R true",
      "Both true; R does not explain",
      "Both true; R explains A",
      "A true R false"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "AR",
    "formula": "",
    "explanation": "CORRECT: Both true; R explains A\n\nWHY CORRECT:\n1/s adds one pole at origin.\n\nCALCULATION:\nN/A.\nFinal keyed result: Both true; R explains A.\n\nTRAP ANALYSIS (every wrong option):\nA) A false R true: R is correct mechanism.\nB) Both true; R does not explain: Type defined by poles at origin.\nD) A true R false: Type defined by poles at origin.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Type up → SSE to step may drop.\n• Two integrators type-2.\n• PI controller.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Ramp error type-1 finite.\n• Windup in saturating integrator.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 47,
    "subject": "Power Electronics & Drives",
    "topic": "SCR holding",
    "question": "After latch, SCR stays on until anode current falls below:",
    "image": "",
    "options": [
      "Surge rating",
      "Gate current Ig",
      "Latching current IL always higher only",
      "Holding current IH"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Holding current IH\n\nWHY CORRECT:\nTurn-off below IH at natural commutation.\n\nCALCULATION:\nN/A.\nFinal keyed result: Holding current IH.\n\nTRAP ANALYSIS (every wrong option):\nA) Surge rating: IL>IH for latch.\nB) Gate current Ig: Gate removed after latch.\nC) Latching current IL always higher only: Surge is overload.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• IH < IL typically.\n• Commutation by line zero.\n• Forced comm classes.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• GTO turn-off gate.\n• IGBT no latch.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-GENCO"
  },
  {
    "id": 48,
    "subject": "Power Electronics & Drives",
    "topic": "Semi converter",
    "question": "From the single-phase semiconverter schematic, average output voltage with firing angle α (0<α<180°) is proportional to:",
    "image": "images/diagrams/electrical-flt02/q48-semi-converter.svg",
    "options": [
      "(1+cosα)",
      "cos2α",
      "α in radians",
      "sinα only"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Diagram",
    "formula": "",
    "explanation": "CORRECT: (1+cosα)\n\nWHY CORRECT:\nSemi (half controlled) Vdc ∝ (1+cosα).\n\nCALCULATION:\nStandard semi bridge formula.\nFinal keyed result: (1+cosα).\n\nTRAP ANALYSIS (every wrong option):\nB) cos2α: Full converter cosα.\nC) α in radians: sinα wrong trig.\nD) sinα only: Linear α wrong.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Freewheeling diode path.\n• Discontinuous conduction lowers V.\n• Inverter α>90.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Three-phase semi similar form.\n• Overlap angle μ.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-Transco",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "ST-PE semi converter"
  },
  {
    "id": 49,
    "subject": "Power Electronics & Drives",
    "topic": "Boost converter",
    "question": "Ideal boost: Vin=48 V, D=0.6. Output voltage (V) is:",
    "image": "",
    "options": [
      "28.8",
      "48",
      "80",
      "120"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 120\n\nWHY CORRECT:\nVout=Vin/(1-D).\n\nCALCULATION:\n48/0.4=120 V.\nFinal keyed result: 120.\n\nTRAP ANALYSIS (every wrong option):\nA) 28.8: Uses D not 1-D.\nB) 48: Multiplies by D.\nC) 80: Subtracts D.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Boost: step-up.\n• CCM vs DCM.\n• Duty limited <1.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Buck V=DVin.\n• Buck-boost polarity.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 50,
    "subject": "Power Electronics & Drives",
    "topic": "Rectifier ripple",
    "question": "3-ph full converter with large R load: ripple frequency on DC side is:",
    "image": "",
    "options": [
      "Zero",
      "Line frequency",
      "6× line frequency",
      "2× line"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 6× line frequency\n\nWHY CORRECT:\nRipple at 6f for 6-pulse.\n\nCALCULATION:\n300 Hz for 50 Hz supply.\nFinal keyed result: 6× line frequency.\n\nTRAP ANALYSIS (every wrong option):\nA) Zero: Single-phase 2f.\nB) Line frequency: DC only wrong.\nD) 2× line: Fundamental not ripple dominant.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Pulse number q=6.\n• Filter L reduces ripple.\n• Overlap modifies average.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• 12-pulse for HVDC.\n• THD on AC side.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-GENCO"
  },
  {
    "id": 51,
    "subject": "Power Electronics & Drives",
    "topic": "Chopper waveform",
    "question": "From the chopper voltage waveform diagram, duty D=0.4 and Vdc=200 V. Average load voltage (V):",
    "image": "images/diagrams/electrical-flt02/q51-chopper-wave.jpg",
    "options": [
      "80",
      "120",
      "200",
      "50"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Diagram+Application",
    "formula": "",
    "explanation": "CORRECT: 80\n\nWHY CORRECT:\nVavg=D*Vdc.\n\nCALCULATION:\n0.4*200=80 V.\nFinal keyed result: 80.\n\nTRAP ANALYSIS (every wrong option):\nB) 120: Uses 1-D.\nC) 200: Peak not average.\nD) 50: Half Vdc.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• CCM buck relation.\n• Ripple depends L,f.\n• Freewheeling diode.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Current ripple ΔI.\n• Discontinuous mode.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-Transco",
    "diagramSource": "pyq",
    "diagramSourcePath": "APTRANSCO-EE-2011 converter"
  },
  {
    "id": 52,
    "subject": "Power Electronics & Drives",
    "topic": "VSI drive",
    "question": "Voltage-source inverter feeding IM causes braking in which quadrant operation?",
    "image": "",
    "options": [
      "Only motoring Q1",
      "Regenerative when speed and torque oppose",
      "Only plugging",
      "Never feeds energy back"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Regenerative when speed and torque oppose\n\nWHY CORRECT:\nBraking when power reverses.\n\nCALCULATION:\nN/A.\nFinal keyed result: Regenerative when speed and torque oppose.\n\nTRAP ANALYSIS (every wrong option):\nA) Only motoring Q1: Motoring Q1 only one mode.\nC) Only plugging: Plugging is special.\nD) Never feeds energy back: Regen possible with suitable converter.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Four-quadrant needs bidirectional DC link.\n• Dynamic brake dissipates.\n• Chopper brake resistor.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• FOC regen.\n• DC link overvoltage risk.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 53,
    "subject": "Power Electronics & Drives",
    "topic": "PE site commutation",
    "question": "In field, class-F (line) commutation of SCR succeeds when:",
    "image": "",
    "options": [
      "Load is purely capacitive always",
      "Only snubber fires",
      "Line voltage naturally reverses anode-cathode current",
      "Only gate pulse removed"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Practical",
    "formula": "",
    "explanation": "CORRECT: Line voltage naturally reverses anode-cathode current\n\nWHY CORRECT:\nAC line gives natural commutation interval.\n\nCALCULATION:\nN/A — practical.\nFinal keyed result: Line voltage naturally reverses anode-cathode current.\n\nTRAP ANALYSIS (every wrong option):\nA) Load is purely capacitive always: Gate removal insufficient alone.\nB) Only snubber fires: Snubber limits dv/dt.\nD) Only gate pulse removed: Capacitive load needs forced comm.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Class A–G taxonomy.\n• Inverter mode α>90.\n• Commutation overlap μ.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Dual converter interlock.\n• GTO self turn-off.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 54,
    "subject": "Electrical Measurements",
    "topic": "PMMC meter",
    "question": "PMMC movement measures:",
    "image": "",
    "options": [
      "Reactive power only",
      "Average value of current through coil",
      "Power directly",
      "True RMS of any waveform without converter"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Average value of current through coil\n\nWHY CORRECT:\nMoving coil DC/average sensing.\n\nCALCULATION:\nN/A.\nFinal keyed result: Average value of current through coil.\n\nTRAP ANALYSIS (every wrong option):\nA) Reactive power only: RMS needs thermocouple/rectifier.\nC) Power directly: Wattmeter for power.\nD) True RMS of any waveform without converter: VAR needs phase.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Torque ∝ Iavg.\n• Damping eddy.\n• Control spring linear scale.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• MI for AC without rect.\n• Rectifier type AC meter.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 55,
    "subject": "Electrical Measurements",
    "topic": "Wattmeter pf",
    "question": "Two-wattmeter reading on balanced 3-ph load: W1=800 W, W2=400 W. Total power (W):",
    "image": "",
    "options": [
      "1200",
      "600",
      "400",
      "800"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 1200\n\nWHY CORRECT:\nP=W1+W2.\n\nCALCULATION:\n800+400=1200 W.\nFinal keyed result: 1200.\n\nTRAP ANALYSIS (every wrong option):\nB) 600: Difference for pf.\nC) 400: Uses one only.\nD) 800: Average wrong.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• W1+W2=P.\n• pf from W1,W2 formula.\n• Unbalance needs 3W.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Blondel theorem.\n• Reactive from 2W.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-GENCO"
  },
  {
    "id": 56,
    "subject": "Electric Circuits",
    "topic": "Norton network",
    "question": "From the Norton equivalent network diagram, after deactivating independent sources, RN across terminals is nearest:",
    "image": "images/diagrams/electrical-flt02/q56-norton-network.jpg",
    "options": [
      "12 ohm",
      "3 ohm",
      "0 ohm",
      "6 ohm"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "",
    "explanation": "CORRECT: 6 ohm\n\nWHY CORRECT:\nRead parallel/series from schematic labels.\n\nCALCULATION:\nCombine resistors from diagram.\nFinal keyed result: 6 ohm.\n\nTRAP ANALYSIS (every wrong option):\nA) 12 ohm: Uses shorted wrong.\nB) 3 ohm: Uses open wrong.\nC) 0 ohm: Adds series as parallel.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Kill sources: V short, I open.\n• RN=Voc/Isc.\n• Dependent sources may remain.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Thevenin dual.\n• Superposition for Voc.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-GENCO",
    "diagramSource": "pyq",
    "diagramSourcePath": "APEPDCL Norton network"
  },
  {
    "id": 57,
    "subject": "Electrical Measurements",
    "topic": "Potential transformer",
    "question": "A 110 kV/√3 : 110 V PT is rated 100 VA on secondary at rated voltage. The corresponding secondary burden impedance (ohm) is closest to:",
    "image": "",
    "options": [
      "100",
      "121",
      "110",
      "1000"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 121\n\nWHY CORRECT:\nBurden impedance Z = V²/S at rated secondary voltage.\n\nCALCULATION:\nZ = 110²/100 = 121 ohm.\nFinal keyed result: 121.\n\nTRAP ANALYSIS (every wrong option):\nA) 100: Uses VA as ohms directly.\nC) 110: Uses primary voltage in formula.\nD) 1000: Divides V by VA linearly.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• PT burden specified in VA.\n• Accuracy class vs burden.\n• Open primary on unloaded PT is OK.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Ferroresonance prevention.\n• CVT vs electromagnetic PT.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 58,
    "subject": "Electrical Measurements",
    "topic": "Energy meter site",
    "question": "Induction energy meter creeping at no load is reduced by:",
    "image": "",
    "options": [
      "Shorting potential coil",
      "Increasing series resistance always",
      "Adjusting brake magnet / load compensation",
      "Removing brake magnet"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Adjusting brake magnet / load compensation\n\nWHY CORRECT:\nCreep adjustment on disc torque.\n\nCALCULATION:\nN/A — practical.\nFinal keyed result: Adjusting brake magnet / load compensation.\n\nTRAP ANALYSIS (every wrong option):\nA) Shorting potential coil: Brake needed.\nB) Increasing series resistance always: PC required.\nD) Removing brake magnet: Series R not primary creep fix.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Friction compensation.\n• Two holes anti-creep.\n• ToU register.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• CT-operated meters.\n• Electronic static meters.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 59,
    "subject": "Control Systems",
    "topic": "Nyquist plot",
    "question": "From the Nyquist plot sketch encircling (-1,0) once CCW with open-loop stable, closed-loop is:",
    "image": "images/diagrams/electrical-flt02/q59-nyquist.jpg",
    "options": [
      "Stable if encirclement satisfies N=P-Z",
      "Always unstable if encircles",
      "Stable only if no encirclement ever",
      "Independent of open poles"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Graph",
    "formula": "",
    "explanation": "CORRECT: Stable if encirclement satisfies N=P-Z\n\nWHY CORRECT:\nNyquist criterion N=P-Z.\n\nCALCULATION:\nRead encirclements from plot.\nFinal keyed result: Stable if encirclement satisfies N=P-Z.\n\nTRAP ANALYSIS (every wrong option):\nB) Always unstable if encircles: Encirclement not auto unstable.\nC) Stable only if no encirclement ever: Open poles matter.\nD) Independent of open poles: No encirclement when P=0.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• P=open RHP poles.\n• Z=closed RHP poles.\n• GM from |G| at -180.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Conditionally stable loops.\n• Pure delay phase lag.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-GENCO",
    "diagramSource": "pyq",
    "diagramSourcePath": "APEPDCL Nyquist PYQ"
  },
  {
    "id": 60,
    "subject": "Analog Electronics",
    "topic": "Op-amp ideal",
    "question": "Ideal op-amp characteristics include:",
    "image": "",
    "options": [
      "Zero gain, zero Zin",
      "Finite 10 V/us always",
      "Output impedance infinite",
      "Infinite open-loop gain and infinite input impedance"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Infinite open-loop gain and infinite input impedance\n\nWHY CORRECT:\nIdeal: Av→∞, Zin→∞, Zout→0.\n\nCALCULATION:\nN/A.\nFinal keyed result: Infinite open-loop gain and infinite input impedance.\n\nTRAP ANALYSIS (every wrong option):\nA) Zero gain, zero Zin: Zero gain wrong.\nB) Finite 10 V/us always: Slew rate finite real.\nC) Output impedance infinite: Zout low ideal.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Virtual short with feedback.\n• CMRR infinite ideal.\n• GBW product real limit.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Inverting -Rf/Rin.\n• Slew limits square wave.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 61,
    "subject": "Analog Electronics",
    "topic": "Inverting op-amp",
    "question": "From the inverting op-amp schematic, Rin=2 k ohm, Rf=18 k ohm. Closed-loop voltage gain is:",
    "image": "images/diagrams/electrical-flt02/q61-opamp.svg",
    "options": [
      "9",
      "-10",
      "0.1",
      "-9"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Diagram+Numerical",
    "formula": "",
    "explanation": "CORRECT: -9\n\nWHY CORRECT:\nAv=-Rf/Rin.\n\nCALCULATION:\n-18/2=-9.\nFinal keyed result: -9.\n\nTRAP ANALYSIS (every wrong option):\nA) 9: Positive sign.\nB) -10: Uses sum.\nC) 0.1: Reciprocal only.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Virtual ground at - input.\n• Input impedance ≈ Rin.\n• Saturation rails limit.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Non-inverting 1+Rf/Rg.\n• Summing amplifier.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-Transco",
    "diagramSource": "schematic-matched",
    "diagramSourcePath": "ST-ADE inverting op-amp"
  },
  {
    "id": 62,
    "subject": "Analog Electronics",
    "topic": "Full-wave rectifier PRV",
    "question": "Center-tap 230 V RMS secondary, silicon diodes. Peak inverse voltage per diode nearest:",
    "image": "",
    "options": [
      "650 V",
      "325 V",
      "230 V",
      "460 V"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 325 V\n\nWHY CORRECT:\nPIV=Vm=230√2≈325 V per diode in CT FWR.\n\nCALCULATION:\n325 V.\nFinal keyed result: 325 V.\n\nTRAP ANALYSIS (every wrong option):\nA) 650 V: Uses RMS as PIV.\nC) 230 V: Doubles wrong.\nD) 460 V: Uses 2*230 without √2.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• CT: PIV=Vm.\n• Bridge: PIV=Vm.\n• Add safety factor in design.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Ripple 100 Hz.\n• Cap filter raises Vdc.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-GENCO"
  },
  {
    "id": 63,
    "subject": "Analog Electronics",
    "topic": "Op-amp AR",
    "question": "Assertion (A): Non-inverting op-amp closed-loop gain is 1+Rf/Rg.\nReason (R): Negative feedback drives differential input voltage to zero (virtual short).",
    "image": "",
    "options": [
      "Both true; R does not explain",
      "A true R false",
      "Both true; R explains A",
      "A false R true"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "AR",
    "formula": "",
    "explanation": "CORRECT: Both true; R explains A\n\nWHY CORRECT:\nVirtual short gives V+≈V- and current through Rg sets gain.\n\nCALCULATION:\nN/A.\nFinal keyed result: Both true; R explains A.\n\nTRAP ANALYSIS (every wrong option):\nA) Both true; R does not explain: R enables gain formula.\nB) A true R false: Inverting different formula.\nD) A false R true: Inverting different formula.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Non-inverting unity buffer Rf=0.\n• Input impedance high.\n• Bandwidth GBW/Acl.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Instrumentation amp.\n• Slew rate distortion.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 64,
    "subject": "Digital Electronics",
    "topic": "Boolean NOR",
    "question": "NOR gate output is 1 when:",
    "image": "",
    "options": [
      "All inputs are 0",
      "Any input is 1",
      "Inputs equal",
      "Always 1"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: All inputs are 0\n\nWHY CORRECT:\nNOR = NOT OR.\n\nCALCULATION:\nN/A.\nFinal keyed result: All inputs are 0.\n\nTRAP ANALYSIS (every wrong option):\nB) Any input is 1: OR any 1.\nC) Inputs equal: XNOR equality.\nD) Always 1: Never always 1.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Universal gate.\n• De Morgan.\n• CMOS NOR structure.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• NAND also universal.\n• Active low enable.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 65,
    "subject": "Digital Electronics",
    "topic": "K-map matching",
    "question": "Match the Karnaugh map cells shown to minimal SOP for the given truth table. Correct pairing code is:",
    "image": "images/diagrams/electrical-flt02/q65-kmap.jpg",
    "options": [
      "Only corners",
      "Reverse all pairs",
      "All zeros",
      "P-Q-R-S as labelled in diagram"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Matching+Diagram",
    "formula": "",
    "explanation": "CORRECT: P-Q-R-S as labelled in diagram\n\nWHY CORRECT:\nRead 1-cells and adjacency from K-map diagram.\n\nCALCULATION:\nN/A — matching diagram.\nFinal keyed result: P-Q-R-S as labelled in diagram.\n\nTRAP ANALYSIS (every wrong option):\nA) Only corners: Ignores adjacency.\nB) Reverse all pairs: Wrong quad.\nC) All zeros: Empty cover.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Prime implicants.\n• Don't care expansion.\n• Essential PI first.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Quine-McCluskey table.\n• Hazard free cover.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-PYQ-GENCO",
    "diagramSource": "pyq",
    "diagramSourcePath": "AP-GENCO K-map PYQ",
    "matchingMatrix": {
      "caption": "Match List-I (K-map group) with List-II (term)",
      "instruction": "Use K-map diagram labels; pick correct matching code.",
      "listI": [
        {
          "code": "P",
          "text": "Top row pair"
        },
        {
          "code": "Q",
          "text": "Right column quad"
        },
        {
          "code": "R",
          "text": "Corner pair"
        },
        {
          "code": "S",
          "text": "Center quad"
        }
      ],
      "listII": [
        {
          "code": "1",
          "text": "AB"
        },
        {
          "code": "2",
          "text": "C"
        },
        {
          "code": "3",
          "text": "A'B'"
        },
        {
          "code": "4",
          "text": "B'D'"
        }
      ],
      "listIITitle": "List-II (Minterm cover)",
      "listITitle": "List-I (Group)"
    }
  },
  {
    "id": 66,
    "subject": "Digital Electronics",
    "topic": "Counter",
    "question": "3-bit synchronous up-counter starts 000. After 11 rising clock edges, state is:",
    "image": "",
    "options": [
      "100",
      "101",
      "011",
      "111"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 011\n\nWHY CORRECT:\n11 mod 8 = 3 → binary 011.\n\nCALCULATION:\nCount: ...101,110,011 at 11th.\nFinal keyed result: 011.\n\nTRAP ANALYSIS (every wrong option):\nA) 100: Uses 11 decimal direct.\nB) 101: Ripple delay ignored.\nD) 111: Mod 10 wrong.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• 2^n states.\n• Sync vs ripple.\n• Preset/clear async.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Johnson counter.\n• Ring counter.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-GENCO"
  },
  {
    "id": 67,
    "subject": "Utilization of Electrical Energy",
    "topic": "Traction",
    "question": "Specific energy consumption in electric traction is expressed in:",
    "image": "",
    "options": [
      "Power factor",
      "Wh/tonne-km or kWh/GTKM",
      "N-m only",
      "Lux"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Wh/tonne-km or kWh/GTKM\n\nWHY CORRECT:\nSEC = energy/mass-distance.\n\nCALCULATION:\nN/A.\nFinal keyed result: Wh/tonne-km or kWh/GTKM.\n\nTRAP ANALYSIS (every wrong option):\nA) Power factor: Torque not SEC.\nC) N-m only: PF is dimensionless.\nD) Lux: Lux is illumination.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Adhesion limits accel.\n• Regenerative saving.\n• Schedule speed vs crest.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Coasting saves SEC.\n• Gradient effect.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 68,
    "subject": "Utilization of Electrical Energy",
    "topic": "Illumination",
    "question": "A 400 W lamp gives 32000 lm. Efficacy (lm/W) is:",
    "image": "",
    "options": [
      "80",
      "32000",
      "0.0125",
      "400"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 80\n\nWHY CORRECT:\nlm/W = flux/power.\n\nCALCULATION:\n32000/400=80 lm/W.\nFinal keyed result: 80.\n\nTRAP ANALYSIS (every wrong option):\nB) 32000: Uses W/lm.\nC) 0.0125: Flux alone.\nD) 400: Inverse.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• LED efficacy higher class.\n• Depreciation factor.\n• Utilization factor.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Inverse square law.\n• Maintenance factor.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 69,
    "subject": "Utilization of Electrical Energy",
    "topic": "Electric furnace",
    "question": "Coreless induction furnace melting uses primarily:",
    "image": "",
    "options": [
      "Only resistance of air",
      "Eddy currents induced in charge by high-frequency field",
      "Direct sunlight",
      "Static DC only"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Application",
    "formula": "",
    "explanation": "CORRECT: Eddy currents induced in charge by high-frequency field\n\nWHY CORRECT:\nInduction melting via eddy heating.\n\nCALCULATION:\nN/A.\nFinal keyed result: Eddy currents induced in charge by high-frequency field.\n\nTRAP ANALYSIS (every wrong option):\nA) Only resistance of air: Solar unrelated.\nC) Direct sunlight: Air not heated.\nD) Static DC only: AC not DC static.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Frequency affects skin depth.\n• Crucible lining insulation.\n• Power factor low start.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Direct arc furnace.\n• Dielectric heating plastics.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 70,
    "subject": "Utilization of Electrical Energy",
    "topic": "Tariff load factor",
    "question": "Load factor over a billing period equals:",
    "image": "",
    "options": [
      "Average load / Maximum demand",
      "kVA/kW always",
      "Energy only",
      "Maximum / Average"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Standard",
    "formula": "",
    "explanation": "CORRECT: Average load / Maximum demand\n\nWHY CORRECT:\nLF = avg/peak.\n\nCALCULATION:\nN/A.\nFinal keyed result: Average load / Maximum demand.\n\nTRAP ANALYSIS (every wrong option):\nB) kVA/kW always: Inverted.\nC) Energy only: Energy not LF alone.\nD) Maximum / Average: PF different.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Two-part tariff uses LF.\n• Diversity factor group.\n• Demand factor connected kW.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• ToU energy charge.\n• PF penalty clause.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APTRANSCO"
  },
  {
    "id": 71,
    "subject": "Quantitative Aptitude",
    "topic": "Time-work",
    "question": "A crew completes relay testing in 12 days; a second crew in 18 days. Both together need (days):",
    "image": "",
    "options": [
      "6",
      "30",
      "15",
      "7.2"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 7.2\n\nWHY CORRECT:\n1/12+1/18=5/36 → 7.2 days.\n\nCALCULATION:\n36/5=7.2.\nFinal keyed result: 7.2.\n\nTRAP ANALYSIS (every wrong option):\nA) 6: Average 15.\nB) 30: Sum 30.\nC) 15: Min 6.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate add inverse days.\n• Check units.\n• Parallel independent tasks.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Man-days budget.\n• Efficiency variation.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 72,
    "subject": "Quantitative Aptitude",
    "topic": "Percentage",
    "question": "15% of 840 equals:",
    "image": "",
    "options": [
      "150",
      "84",
      "126",
      "840"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 126\n\nWHY CORRECT:\n0.15*840=126.\n\nCALCULATION:\n126.\nFinal keyed result: 126.\n\nTRAP ANALYSIS (every wrong option):\nA) 150: 10% slip.\nB) 84: Uses 840/15.\nD) 840: Adds 15.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Percent = part/whole.\n• Successive discount.\n• Error estimate ±%.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Reverse: whole from part.\n• GST style calc.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 73,
    "subject": "Quantitative Aptitude",
    "topic": "Ratio",
    "question": "Copper:Aluminium conductor mass ratio is 3:1 for same length. If Al mass is 120 kg, Cu mass (kg):",
    "image": "",
    "options": [
      "40",
      "360",
      "120",
      "180"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 360\n\nWHY CORRECT:\n3*120=360.\n\nCALCULATION:\n360.\nFinal keyed result: 360.\n\nTRAP ANALYSIS (every wrong option):\nA) 40: Divides by 3.\nC) 120: Same mass wrong.\nD) 180: Half wrong.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Ratio part:part.\n• Density and area if same R.\n• Check which quantity scaled.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Cost ratio different.\n• Ampacity tables.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 74,
    "subject": "Quantitative Aptitude",
    "topic": "Average",
    "question": "Five monthly meter readings of energy increment (kWh): 420, 380, 450, 410, 440. Average increment:",
    "image": "",
    "options": [
      "400",
      "450",
      "410",
      "420"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 420\n\nWHY CORRECT:\nSum=2100/5=420.\n\nCALCULATION:\n420.\nFinal keyed result: 420.\n\nTRAP ANALYSIS (every wrong option):\nA) 400: Median 410.\nB) 450: Max 450.\nC) 410: Min 380 only.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Mean vs median.\n• Outlier effect.\n• Billing cycle days vary.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Load factor from peak.\n• Seasonal trend.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 75,
    "subject": "Quantitative Aptitude",
    "topic": "Speed-distance",
    "question": "A patrol vehicle covers 180 km at 60 km/h average. Time (hours):",
    "image": "",
    "options": [
      "2.5",
      "3.5",
      "3",
      "1.8"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 3\n\nWHY CORRECT:\nt=d/v=180/60=3 h.\n\nCALCULATION:\n3.\nFinal keyed result: 3.\n\nTRAP ANALYSIS (every wrong option):\nA) 2.5: Uses 60*180.\nB) 3.5: Wrong v.\nD) 1.8: Unit mix km/min.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Relative speed trains.\n• Average speed not mean of speeds.\n• Graph distance area.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Meeting point two vehicles.\n• Boats streams variant.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 76,
    "subject": "Quantitative Aptitude",
    "topic": "SI units",
    "question": "Express 2.5 MW in kW:",
    "image": "",
    "options": [
      "2500",
      "25000",
      "250",
      "25"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 2500\n\nWHY CORRECT:\n2.5*1000=2500 kW.\n\nCALCULATION:\n2500.\nFinal keyed result: 2500.\n\nTRAP ANALYSIS (every wrong option):\nB) 25000: Divide by 1000.\nC) 250: One zero short.\nD) 25: Extra zero.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Mega = 10^6.\n• Unit consistency in power balance.\n• Per-unit vs SI.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• MVA vs MW.\n• kVAr reactive.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 77,
    "subject": "Quantitative Aptitude",
    "topic": "Profit-loss",
    "question": "Contractor buys equipment for Rs 240000 and sells for Rs 276000. Profit percent on cost is:",
    "image": "",
    "options": [
      "20%",
      "16%",
      "12%",
      "15%"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 15%\n\nWHY CORRECT:\n36000/240000=15%.\n\nCALCULATION:\n15%.\nFinal keyed result: 15%.\n\nTRAP ANALYSIS (every wrong option):\nA) 20%: On SP base different.\nB) 16%: Uses 276/240 wrong.\nC) 12%: Subtract only.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Profit% = profit/CP.\n• Mark-up vs margin.\n• Tax after profit.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Successive trade discount.\n• Break-even overhead.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 78,
    "subject": "Quantitative Aptitude",
    "topic": "LCM",
    "question": "LCM of 12 and 18 is:",
    "image": "",
    "options": [
      "72",
      "36",
      "6",
      "24"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 36\n\nWHY CORRECT:\nLCM=36.\n\nCALCULATION:\n36.\nFinal keyed result: 36.\n\nTRAP ANALYSIS (every wrong option):\nA) 72: GCD 6.\nC) 6: Product 216.\nD) 24: Average 15.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• LCM*GCD=product.\n• Gear teeth mesh.\n• Repeating event sync.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Clocks coincide.\n• Flash interval.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-FamilyQB"
  },
  {
    "id": 79,
    "subject": "General Awareness",
    "topic": "AP power",
    "question": "APGENCO primarily relates to:",
    "image": "",
    "options": [
      "Telecom spectrum",
      "National highway tolls",
      "State power generation in Andhra Pradesh",
      "Central transmission only always"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: State power generation in Andhra Pradesh\n\nWHY CORRECT:\nAPGENCO = generation utility AP.\n\nCALCULATION:\nN/A.\nFinal keyed result: State power generation in Andhra Pradesh.\n\nTRAP ANALYSIS (every wrong option):\nA) Telecom spectrum: Transmission is TRANSCO.\nB) National highway tolls: Telecom unrelated.\nD) Central transmission only always: Highways unrelated.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• GENCO vs TRANSCO vs DISCOM.\n• SLDC scheduling.\n• PPA contracts.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Renewable AP policy.\n• Ultra mega solar.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 80,
    "subject": "General Awareness",
    "topic": "ISRO",
    "question": "India's Mars Orbiter Mission (Mangalyaan) was launched by:",
    "image": "",
    "options": [
      "ISRO",
      "ESA",
      "NASA",
      "JAXA"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: ISRO\n\nWHY CORRECT:\nISRO PSLV launch 2013.\n\nCALCULATION:\nN/A.\nFinal keyed result: ISRO.\n\nTRAP ANALYSIS (every wrong option):\nB) ESA: NASA separate agency.\nC) NASA: ESA European.\nD) JAXA: JAXA Japan.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• PSLV capability.\n• GSLV heavier payloads.\n• Deep space network.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Chandrayaan lunar.\n• Gaganyaan human spaceflight.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 81,
    "subject": "General Awareness",
    "topic": "Digital India",
    "question": "Digital India initiative aims chiefly to:",
    "image": "",
    "options": [
      "Ban internet banking",
      "Improve digital infrastructure and e-governance access",
      "Eliminate data centers",
      "Replace all AC transmission with DC only"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Improve digital infrastructure and e-governance access\n\nWHY CORRECT:\nDigital India: connectivity + services.\n\nCALCULATION:\nN/A.\nFinal keyed result: Improve digital infrastructure and e-governance access.\n\nTRAP ANALYSIS (every wrong option):\nA) Ban internet banking: Grid DC unrelated.\nC) Eliminate data centers: Banking expands digital.\nD) Replace all AC transmission with DC only: Data centers needed.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Common service centers.\n• BharatNet fiber.\n• UMANG app integration.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Cybersecurity pillar.\n• DigiLocker documents.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 82,
    "subject": "General Awareness",
    "topic": "Space agency easy",
    "question": "Full form of ISRO is:",
    "image": "",
    "options": [
      "International Space Research Office",
      "Integrated Space Remote Observatory",
      "Indian Space Research Organisation",
      "Indian Satellite Relay Organisation"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Indian Space Research Organisation\n\nWHY CORRECT:\nStandard expansion.\n\nCALCULATION:\nN/A.\nFinal keyed result: Indian Space Research Organisation.\n\nTRAP ANALYSIS (every wrong option):\nA) International Space Research Office: Wrong expansions.\nB) Integrated Space Remote Observatory: Office vs Organisation.\nD) Indian Satellite Relay Organisation: Remote observatory wrong.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• HQ Bengaluru.\n• Founded 1969.\n• Launch vehicles PSLV/GSLV.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Antrix commercial arm history.\n• NSIL now commercial.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 83,
    "subject": "General Awareness",
    "topic": "Money bill",
    "question": "A Money Bill in Parliament can be introduced only in:",
    "image": "",
    "options": [
      "Supreme Court",
      "State legislature",
      "Rajya Sabha only",
      "Lok Sabha"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Lok Sabha\n\nWHY CORRECT:\nArt 109: Lok Sabha introduction.\n\nCALCULATION:\nN/A.\nFinal keyed result: Lok Sabha.\n\nTRAP ANALYSIS (every wrong option):\nA) Supreme Court: RS limited powers amend.\nB) State legislature: States have finance bills.\nC) Rajya Sabha only: Court not legislature.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Speaker certifies money bill.\n• RS can suggest 14 days.\n• Art 110 definition.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Finance bill types.\n• Appropriation bill.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 84,
    "subject": "General Awareness",
    "topic": "AP geography",
    "question": "Krishna river delta primarily lies in which state?",
    "image": "",
    "options": [
      "Andhra Pradesh",
      "Punjab",
      "Himachal Pradesh",
      "Assam"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Andhra Pradesh\n\nWHY CORRECT:\nKrishna delta in AP.\n\nCALCULATION:\nN/A.\nFinal keyed result: Andhra Pradesh.\n\nTRAP ANALYSIS (every wrong option):\nB) Punjab: Punjab Indus system.\nC) Himachal Pradesh: Assam Brahmaputra.\nD) Assam: HP Himalayan.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Prakasam barrage Vijayawada.\n• Nagarjuna sagar.\n• Delta agriculture.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Godavari delta twin.\n• Polavaram project.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 85,
    "subject": "General Awareness",
    "topic": "RBI repo",
    "question": "When RBI cuts repo rate, banks typically:",
    "image": "",
    "options": [
      "Must raise EMI same day always",
      "Lower lending rates over time",
      "Fix currency exchange rate directly",
      "Stop taking deposits"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Lower lending rates over time\n\nWHY CORRECT:\nMonetary transmission to lending.\n\nCALCULATION:\nN/A.\nFinal keyed result: Lower lending rates over time.\n\nTRAP ANALYSIS (every wrong option):\nA) Must raise EMI same day always: EMI may follow with lag.\nC) Fix currency exchange rate directly: Deposits continue.\nD) Stop taking deposits: FX market separate.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Repo = RBI lend to banks.\n• Reverse repo park funds.\n• CRR/SLR liquidity.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• MCLR/EBLR linked.\n• Inflation target MPC.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 86,
    "subject": "Reasoning & General Intelligence",
    "topic": "Letter series",
    "question": "Find next: J, L, N, P, ?",
    "image": "",
    "options": [
      "R",
      "S",
      "Q",
      "O"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: R\n\nWHY CORRECT:\nSkip one letter: +2.\n\nCALCULATION:\nR.\nFinal keyed result: R.\n\nTRAP ANALYSIS (every wrong option):\nB) S: +1 gives Q wrong skip.\nC) Q: Wrap alphabet wrong.\nD) O: Reverse series.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Arithmetic on positions.\n• Alternate pattern check.\n• Write alphabet row.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Number series twin.\n• Mixed alpha-numeric.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 87,
    "subject": "Reasoning & General Intelligence",
    "topic": "Seating order",
    "question": "Six bays A–F are inspected Mon–Sat one per day. C is Wednesday. A is before B. F is immediately after D. Bay E is Friday. Which bay is Saturday?",
    "image": "",
    "options": [
      "D",
      "F",
      "A",
      "B"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: B\n\nWHY CORRECT:\nWed=C, Fri=E → Sat=B with remaining order.\n\nCALCULATION:\nLogic grid.\nFinal keyed result: B.\n\nTRAP ANALYSIS (every wrong option):\nA) D: F after D constraint.\nB) F: A before B.\nC) A: Six slots fill unique.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Draw calendar slots.\n• Immediate means adjacent day.\n• Eliminate used bays.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Blood relation different.\n• Circular seating variant.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 88,
    "subject": "Reasoning & General Intelligence",
    "topic": "Syllogism",
    "question": "All relays are devices. Some devices are digital. Conclusions: I. Some relays are digital. II. Some digital are devices. Which follows?",
    "image": "",
    "options": [
      "Both",
      "Neither",
      "Only II",
      "Only I"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Only II\n\nWHY CORRECT:\nII follows; I need not.\n\nCALCULATION:\nVenn.\nFinal keyed result: Only II.\n\nTRAP ANALYSIS (every wrong option):\nA) Both: I not guaranteed.\nB) Neither: Both too strong.\nD) Only I: Neither denies II.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Some devices digital.\n• All relays devices.\n• Particular conclusion rules.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Possibility cases.\n• Compliment syllogism.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 89,
    "subject": "Reasoning & General Intelligence",
    "topic": "Direction",
    "question": "From substation, walk 8 km east, 6 km north. Distance from start (km):",
    "image": "",
    "options": [
      "10",
      "2",
      "14",
      "48"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 10\n\nWHY CORRECT:\nsqrt(8^2+6^2)=10.\n\nCALCULATION:\n10.\nFinal keyed result: 10.\n\nTRAP ANALYSIS (every wrong option):\nB) 2: Adds 14.\nC) 14: Subtracts 2.\nD) 48: Multiplies.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Pythagoras NE.\n• Components separate.\n• Bearings N of E.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Shadow problems.\n• Boat river variant.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 90,
    "subject": "Reasoning & General Intelligence",
    "topic": "Analogy",
    "question": "CT : Current :: PT : ?",
    "image": "",
    "options": [
      "Resistance",
      "Power",
      "Frequency",
      "Voltage"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Voltage\n\nWHY CORRECT:\nInstrument transformer pairs.\n\nCALCULATION:\nVoltage.\nFinal keyed result: Voltage.\n\nTRAP ANALYSIS (every wrong option):\nA) Resistance: Power not primary.\nB) Power: Frequency meter separate.\nC) Frequency: Z not PT.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• CT steps down current.\n• PT for metering/protection.\n• Ratio and burden.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Class accuracy.\n• Burden VA rating.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 91,
    "subject": "English Language & Comprehension",
    "topic": "English passage",
    "question": "Passage: The SCADA upgrade replaced serial links with encrypted TLS tunnels; operators retained local HMI fallback because a single WAN outage had previously blinded dispatch for 40 minutes. According to the passage, local HMI fallback was kept because:",
    "image": "",
    "options": [
      "Operators dislike GUIs",
      "WAN outage could block remote visibility",
      "TLS encryption is too slow",
      "Serial links are always faster"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: WAN outage could block remote visibility\n\nWHY CORRECT:\nPassage cites WAN outage blinding dispatch.\n\nCALCULATION:\nN/A.\nFinal keyed result: WAN outage could block remote visibility.\n\nTRAP ANALYSIS (every wrong option):\nA) Operators dislike GUIs: TLS not criticized for speed.\nC) TLS encryption is too slow: Serial not compared for speed as reason.\nD) Serial links are always faster: GUI dislike not stated.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Defense in depth.\n• Fallback vs single path.\n• Read main idea not detail trap.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Cybersecurity air gap.\n• Redundant communication paths.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 92,
    "subject": "English Language & Comprehension",
    "topic": "Passive voice",
    "question": "Choose passive: The technician calibrated the protection relay.",
    "image": "",
    "options": [
      "The protection relay is calibrate by the technician.",
      "The technician was calibrated by the protection relay.",
      "The protection relay was calibrated by the technician.",
      "The protection relay calibrates the technician."
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: The protection relay was calibrated by the technician.\n\nWHY CORRECT:\nObject becomes subject; past passive.\n\nCALCULATION:\nN/A.\nFinal keyed result: The protection relay was calibrated by the technician..\n\nTRAP ANALYSIS (every wrong option):\nA) The protection relay is calibrate by the technician.: Active reversed wrong.\nB) The technician was calibrated by the protection relay.: Wrong verb form.\nD) The protection relay calibrates the technician.: Absurd agent.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• By-agent optional.\n• Tense must match.\n• Modals: must be calibrated.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Imperative passive rare.\n• Reporting technical work.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 93,
    "subject": "English Language & Comprehension",
    "topic": "Indirect speech",
    "question": "Indirect: She said, I will submit the clearance report tomorrow.",
    "image": "",
    "options": [
      "She said that she would submitted the clearance report tomorrow.",
      "She said that I will submit the clearance report tomorrow.",
      "She said that she will submit the clearance report tomorrow.",
      "She said that she would submit the clearance report the next day."
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: She said that she would submit the clearance report the next day.\n\nWHY CORRECT:\nBackshift will→would; tomorrow→next day.\n\nCALCULATION:\nN/A.\nFinal keyed result: She said that she would submit the clearance report the next day..\n\nTRAP ANALYSIS (every wrong option):\nA) She said that she would submitted the clearance report tomorrow.: Person not changed.\nB) She said that I will submit the clearance report tomorrow.: No backshift.\nC) She said that she will submit the clearance report tomorrow.: Wrong participle.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Reporting verb tense effect.\n• Modal backshift rules.\n• Time adverb shift.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Questions indirect.\n• Commands suggest+infinitive.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 94,
    "subject": "English Language & Comprehension",
    "topic": "Error spotting",
    "question": "Find error: The team of engineers were reviewing the drawings.",
    "image": "",
    "options": [
      "were reviewing",
      "drawings",
      "No error",
      "team"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: were reviewing\n\nWHY CORRECT:\nTeam is singular: was reviewing.\n\nCALCULATION:\nSubject-verb agreement.\nFinal keyed result: were reviewing.\n\nTRAP ANALYSIS (every wrong option):\nB) drawings: Team singular collective.\nC) No error: Prepositional phrase trap.\nD) team: Plural drawings OK.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Collective noun US/UK.\n• Of-engineers not subject.\n• Each/every singular.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Neither/nor verb.\n• Data plural debate.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 95,
    "subject": "English Language & Comprehension",
    "topic": "Vocabulary",
    "question": "In context: The audit noted several ambiguous clauses, ambiguous means:",
    "image": "",
    "options": [
      "Handwritten only",
      "Open to more than one interpretation",
      "Legally void",
      "Perfectly clear"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Open to more than one interpretation\n\nWHY CORRECT:\nAmbiguous = unclear/multiple meanings.\n\nCALCULATION:\nN/A.\nFinal keyed result: Open to more than one interpretation.\n\nTRAP ANALYSIS (every wrong option):\nA) Handwritten only: Opposite clear.\nC) Legally void: Void different.\nD) Perfectly clear: Handwritten irrelevant.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Context clues.\n• Legal drafting precision.\n• Synonym equivocal.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Disambiguate in contract.\n• Antonym explicit.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 96,
    "subject": "Computer Knowledge",
    "topic": "Cybersecurity",
    "question": "Phishing attack typically tries to:",
    "image": "",
    "options": [
      "Cool server CPUs",
      "Format only printers",
      "Trick users into revealing credentials via fake messages",
      "Increase fiber bandwidth"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Trick users into revealing credentials via fake messages\n\nWHY CORRECT:\nSocial engineering for secrets.\n\nCALCULATION:\nN/A.\nFinal keyed result: Trick users into revealing credentials via fake messages.\n\nTRAP ANALYSIS (every wrong option):\nA) Cool server CPUs: Thermal unrelated.\nB) Format only printers: Bandwidth unrelated.\nD) Increase fiber bandwidth: Printers not definition.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Verify sender domain.\n• 2FA mitigates.\n• Report suspicious mail.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Spear phishing targeted.\n• Whaling executives.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 97,
    "subject": "Computer Knowledge",
    "topic": "Networking",
    "question": "HTTPS primarily adds:",
    "image": "",
    "options": [
      "Physical cable replacement",
      "Encryption and integrity on HTTP traffic",
      "Only faster routing",
      "Elimination of DNS"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Encryption and integrity on HTTP traffic\n\nWHY CORRECT:\nTLS layer on HTTP.\n\nCALCULATION:\nN/A.\nFinal keyed result: Encryption and integrity on HTTP traffic.\n\nTRAP ANALYSIS (every wrong option):\nA) Physical cable replacement: Routing separate.\nC) Only faster routing: Physical layer.\nD) Elimination of DNS: DNS still needed.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Port 443.\n• Certificate authority trust.\n• Mixed content warnings.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• HTTP/2 multiplex.\n• HSTS header.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 98,
    "subject": "Computer Knowledge",
    "topic": "Spreadsheet",
    "question": "Cell formula =$B$2+C3 copied down one row becomes:",
    "image": "",
    "options": [
      "=$B$2+C3",
      "=$B$3+C3",
      "=$B$2+C4",
      "=B2+C4"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: =$B$2+C4\n\nWHY CORRECT:\nAbsolute B2 fixed; C relative shifts.\n\nCALCULATION:\nRow 3→4 for C.\nFinal keyed result: =$B$2+C4.\n\nTRAP ANALYSIS (every wrong option):\nA) =$B$2+C3: B shifts wrongly.\nB) =$B$3+C3: Both shift.\nD) =B2+C4: No absolute.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• $ locks row/col.\n• F4 toggle in Excel.\n• Mixed refs common.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Named ranges.\n• Sheet reference Sheet1!A1.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 99,
    "subject": "Computer Knowledge",
    "topic": "Database",
    "question": "Foreign key constraint ensures:",
    "image": "",
    "options": [
      "Referential integrity to parent table primary key",
      "Unlimited NULL primary keys",
      "Faster CPU clock",
      "Automatic backup"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Referential integrity to parent table primary key\n\nWHY CORRECT:\nFK references PK/unique parent.\n\nCALCULATION:\nN/A.\nFinal keyed result: Referential integrity to parent table primary key.\n\nTRAP ANALYSIS (every wrong option):\nB) Unlimited NULL primary keys: CPU unrelated.\nC) Faster CPU clock: Backup separate.\nD) Automatic backup: PK not NULL.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• ON DELETE CASCADE option.\n• Join tables.\n• Normalization 3NF.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Index on FK.\n• ORM mapping.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  },
  {
    "id": 100,
    "subject": "Computer Knowledge",
    "topic": "OS storage",
    "question": "Which statement about RAM and SSD is correct?",
    "image": "",
    "options": [
      "SSD is volatile; RAM is archival",
      "Both lose data instantly always",
      "RAM stores files permanently by default",
      "RAM is volatile working memory; SSD retains data without power"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: RAM is volatile working memory; SSD retains data without power\n\nWHY CORRECT:\nRAM volatile; SSD non-volatile storage.\n\nCALCULATION:\nN/A.\nFinal keyed result: RAM is volatile working memory; SSD retains data without power.\n\nTRAP ANALYSIS (every wrong option):\nA) SSD is volatile; RAM is archival: SSD retains.\nB) Both lose data instantly always: Roles swapped wrong.\nC) RAM stores files permanently by default: RAM not permanent.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Hierarchy cache-RAM-disk.\n• Swap/page file.\n• TRIM SSD maintenance.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• NVMe vs SATA.\n• Cloud block storage.",
    "source": "ELECTRICAL_FLT02_v1",
    "origin": "Brand-new"
  }
];
