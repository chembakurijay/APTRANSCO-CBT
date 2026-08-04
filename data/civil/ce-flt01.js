// Civil Engineering FLT-01 — APTRANSCO AEE CBT
// Technical Q1–70: Civil bank
// Shared Non-core Q71–100: identical to Electrical FLT-01 (MASTER P0)
// answer is 0-based index into options

export const questions = [
  {
    "id": 1,
    "subject": "Strength of Materials",
    "topic": "SOM: axial stress+service check",
    "question": "Following a gantry-tie inspection at a substation, the engineer records a 20 mm diameter member under 55 kN service tension in Fe250 steel. Which conclusion is most defensible before accepting the member on a gross-section stress basis?",
    "image": "",
    "options": [
      "Stress ≈175 MPa, below yield",
      "Stress ≈200 MPa, at yield",
      "Stress ≈350 MPa, above yield",
      "Stress ≈227 MPa, exactly at design strength"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: Stress ≈175 MPa, below yield\n\nWHY CORRECT:\nArea = 314.2 mm²; stress = 55,000/314.2 ≈175 MPa. This uniquely selects “Stress ≈175 MPa, below yield”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\narea = 314.2 mm²; stress = 55,000/314.2 ≈175 MPa.\nFinal keyed result: Stress ≈175 MPa, below yield.\n\nTRAP ANALYSIS (every wrong option):\nB) Stress ≈200 MPa, at yield: Does not satisfy the governing relation that produces “Stress ≈175 MPa, below yield”. Typical slip: wrong share/basis, unit conversion, or omitted term (C uses radius as diameter; B approximates yield wrongly; D confuses demand with fy/γm0.).\nC) Stress ≈350 MPa, above yield: Does not satisfy the governing relation that produces “Stress ≈175 MPa, below yield”. Typical slip: wrong share/basis, unit conversion, or omitted term (C uses radius as diameter; B approximates yield wrongly; D confuses demand with fy/γm0.).\nD) Stress ≈227 MPa, exactly at design strength: Does not satisfy the governing relation that produces “Stress ≈175 MPa, below yield”. Typical slip: wrong share/basis, unit conversion, or omitted term (C uses radius as diameter; B approximates yield wrongly; D confuses demand with fy/γm0.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• σ = P/A; solid round A=πd²/4. With d=20 mm → A=π·100=314.16 mm².\n• 55 kN = 55000 N → σ=55000/314.16≈175 MPa (service stress).\n• Design strength fy/γm0 for Fe250 is ≈227 MPa — that is NOT the computed service stress asked here.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• If someone uses radius 10 mm as diameter, A falls ×4 and σ jumps ×4 ≈700 MPa class error.\n• Sudden axial load (ideal): σ_sudden≈2·σ_gradual from energy equivalence — different stem.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 2,
    "subject": "Strength of Materials",
    "topic": "SOM: composite bars+compatibility",
    "question": "While reviewing a rigid-ended hanger, equal-length steel and brass rods are found to have \\(A_s=600\\) mm², \\(A_b=900\\) mm² and \\(E_s/E_b=2\\). Under a concentric load, which brass load share should the engineer expect?",
    "image": "",
    "options": [
      "3/5",
      "1/2",
      "3/7",
      "2/3"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 3/7\n\nWHY CORRECT:\nEqual strain makes force proportional to \\(AE\\); brass:steel = 900:1200, so brass share = 3/7.\n\nCALCULATION:\nequal strain makes force proportional to \\(AE\\); brass:steel = 900:1200, so brass share = 3/7.\nFinal keyed result: 3/7.\n\nTRAP ANALYSIS (every wrong option):\nA) 3/5: Uses area ratio Ab:(As+Ab)=900:1500=3/5 and ignores Es/Eb=2 (stiffness weights).\nB) 1/2: Assumes equal force share; wrong unless AE values are equal.\nD) 2/3: Uses As·(Es/Eb):Ab style mix-up or reverses which AE belongs to brass (1200/1800=2/3 on steel side).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Equal length + common rigid ends ⇒ ε_brass = ε_steel ⇒ force share ∝ A·E (not area alone).\n• Brass share = (Ab·Eb) / (Ab·Eb + As·Es). With Es/Eb=2, As=600, Ab=900 → AEs=1200, AEb=900 → brass = 900/2100 = 3/7.\n• Steel share is the complement 4/7. Doubling only Ab changes the AE weights — recompute the fraction; do not keep 3/7.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Same data: steel share = 4/7 (always check both sum to 1).\n• If Es/Eb becomes 1 (same E), shares collapse to area ratio 900:(600+900)=900/1500=3/5.\n• Temperature rise with fixed composite ends: redundant force from Δ = αΔT L compatibility — different equation set.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 3,
    "subject": "Strength of Materials",
    "topic": "SOM: beam+diagram+equilibrium",
    "question": "Proof-load planning uses an overhanging beam A–B–C with supports at A and B: AB = 4 m, overhang BC = 2 m, UDL w = 10 kN/m over AB, and a tip load P = 20 kN at C (also shown on the figure). Which support-reaction pair (RA, RB) is closest?",
    "image": "images/diagrams/civil-flt01/q03-overhang-reactions.jpg",
    "options": [
      "10 kN, 50 kN",
      "15 kN, 45 kN",
      "20 kN, 40 kN",
      "25 kN, 35 kN"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "",
    "explanation": "CORRECT: 10 kN, 50 kN\n\nWHY CORRECT:\nAB=4 m with 10 kN/m UDL (40 kN) and 20 kN at tip C on 2 m overhang; ΣMA → RB=50 kN; ΣV → RA=10 kN.\n\nCALCULATION:\nAB=4 m with 10 kN/m UDL (40 kN) and 20 kN at tip C on 2 m overhang; ΣMA → RB=50 kN; ΣV → RA=10 kN.\nFinal keyed result: 10 kN, 50 kN.\n\nTRAP ANALYSIS (every wrong option):\nB) 15 kN, 45 kN: Does not satisfy the governing relation that produces “10 kN, 50 kN”. Typical slip: wrong share/basis, unit conversion, or omitted term (A/C shift the UDL centroid or tip lever.).\nC) 20 kN, 40 kN: Does not satisfy the governing relation that produces “10 kN, 50 kN”. Typical slip: wrong share/basis, unit conversion, or omitted term (A/C shift the UDL centroid or tip lever.).\nD) 25 kN, 35 kN: Does not satisfy the governing relation that produces “10 kN, 50 kN”. Typical slip: wrong share/basis, unit conversion, or omitted term (A/C shift the UDL centroid or tip lever.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: AB=4 m with 10 kN/m UDL (40 kN) and 20 kN at tip C on 2 m overhang; ΣMA → RB=50 kN; ΣV → RA=10 kN.\n• Keyed answer to lock: 10 kN, 50 kN.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "core",
    "diagramSourcePath": "civil-core-diagrams/SOM/SOM_pg0030.jpg"
  },
  {
    "id": 4,
    "subject": "Strength of Materials",
    "topic": "SOM: slenderness+strut check",
    "question": "In the design office, a steel strut is recorded with effective length 2.1 m and least radius of gyration 35 mm under the adopted end-restraint. Which slenderness ratio should the engineer report before entering the buckling tables?",
    "image": "",
    "options": [
      "30",
      "120",
      "15",
      "60"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 60\n\nWHY CORRECT:\nΛ = Le/r = 2100/35 = 60. This uniquely selects “60”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nλ = Le/r = 2100/35 = 60.\nFinal keyed result: 60.\n\nTRAP ANALYSIS (every wrong option):\nA) 30: Uses half Le (1050/35) or doubles r → λ≈30.\nB) 120: Doubles Le or halves r (2100/17.5 or 4200/35) → λ≈120.\nC) 15: Unit/decimal slip (e.g. 2.1/0.14 style) → λ≈15.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• λ = Le / r_min with Le and r in the SAME unit (convert 2.1 m → 2100 mm before dividing by 35 mm).\n• If the stem already gives effective length Le, do NOT multiply again by end-factor K.\n• Larger r_min ⇒ smaller λ ⇒ higher buckling strength (for the same Le).\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Both-ends-fixed ideal K=0.5 (IS often ~0.65 practical) → Le=K·L_geo, then λ=Le/r.\n• If r is halved, λ doubles (e.g. 60 → 120) — classic distractor.\n• Euler assumes straight + concentric + elastic; crookedness/eccentricity voids bare Euler.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 5,
    "subject": "Strength of Materials",
    "topic": "SOM: Mohr circle+AR+interpretation",
    "question": "While interpreting a strain-rosette investigation on a critical plane-stress element, the engineer reviews Mohr-circle geometry against competing claims about circle placement. Assertion: the centre of Mohr’s circle lies on the normal-stress axis at the mean of the two normal stresses. Reason: the centre lies on the shear-stress axis whenever shear is present. Which conclusion follows?",
    "image": "",
    "options": [
      "Both true; R explains A",
      "Both true; R does not explain A",
      "A false, R true",
      "A true, R false"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Assertion-Reason",
    "formula": "",
    "explanation": "CORRECT: A true, R false\n\nWHY CORRECT:\nThe centre has zero shear ordinate; R is false. This uniquely selects “A true, R false”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Both true; R explains A: Does not satisfy the governing relation that produces “A true, R false”. Typical slip: wrong share/basis, unit conversion, or omitted term (shear changes radius, not the centre’s vertical coordinate.).\nB) Both true; R does not explain A: Does not satisfy the governing relation that produces “A true, R false”. Typical slip: wrong share/basis, unit conversion, or omitted term (shear changes radius, not the centre’s vertical coordinate.).\nC) A false, R true: Does not satisfy the governing relation that produces “A true, R false”. Typical slip: wrong share/basis, unit conversion, or omitted term (shear changes radius, not the centre’s vertical coordinate.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Mohr centre is always on the σ-axis at ((σx+σy)/2 , 0) — its shear coordinate is 0.\n• Radius R=√[((σx−σy)/2)² + τxy²]; principals = centre±R.\n• Changing τxy changes R (and principals), not the vertical position of the centre.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Principal angle: tan 2θp = 2τxy/(σx−σy).\n• Max shear stress = R; planes 90° (Mohr) from principal planes.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-GATE→Transco"
  },
  {
    "id": 6,
    "subject": "Strength of Materials",
    "topic": "SOM: rectangular shear",
    "question": "A timber joist 100 mm × 200 mm is checked for 16 kN shear during a floor renovation in an existing building. Which maximum elastic shear stress and location should be expected?",
    "image": "",
    "options": [
      "1.2 MPa at neutral axis",
      "0.8 MPa at extreme fibre",
      "0.8 MPa uniformly",
      "1.2 MPa at top fibre"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 1.2 MPa at neutral axis\n\nWHY CORRECT:\nAverage = 0.8 MPa; rectangular maximum = 1.5×average = 1.2 MPa at NA.\n\nCALCULATION:\naverage = 0.8 MPa; rectangular maximum = 1.5×average = 1.2 MPa at NA.\nFinal keyed result: 1.2 MPa at neutral axis.\n\nTRAP ANALYSIS (every wrong option):\nB) 0.8 MPa at extreme fibre: Does not satisfy the governing relation that produces “1.2 MPa at neutral axis”. Typical slip: wrong share/basis, unit conversion, or omitted term (C treats shear as uniform.).\nC) 0.8 MPa uniformly: Does not satisfy the governing relation that produces “1.2 MPa at neutral axis”. Typical slip: wrong share/basis, unit conversion, or omitted term (C treats shear as uniform.).\nD) 1.2 MPa at top fibre: Does not satisfy the governing relation that produces “1.2 MPa at neutral axis”. Typical slip: wrong share/basis, unit conversion, or omitted term (C treats shear as uniform.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• τ_avg = V/(b d). For 100×200 mm and V=16 kN → τ_avg=16000/(100·200)=0.8 MPa.\n• Rectangle elastic: τ_max = (3/2) τ_avg = 1.2 MPa, located at the neutral axis.\n• At extreme fibres of a rectangle, elastic beam shear stress is 0 — never put τ_max there.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Circular section: τ_max=(4/3)τ_avg on NA.\n• I-section: almost all shear in web ≈ V/(d·tw) estimate.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 7,
    "subject": "Strength of Materials",
    "topic": "SOM: torsion+shaft equilibrium",
    "question": "During review of a stepped shaft ABC, an end torque of 1000 N·m is applied at C while B is an intermediate coupling and A is the drive end. From equilibrium of segment BC alone, which torque should the engineer assign to BC before sizing that segment?",
    "image": "",
    "options": [
      "1500 N·m",
      "0",
      "1000 N·m",
      "500 N·m"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 1000 N·m\n\nWHY CORRECT:\nFree-body of BC must transmit the end torque at C.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) 1500 N·m: Does not satisfy the governing relation that produces “1000 N·m”. Typical slip: wrong share/basis, unit conversion, or omitted term (D halves the torque without a second load path.).\nB) 0: Does not satisfy the governing relation that produces “1000 N·m”. Typical slip: wrong share/basis, unit conversion, or omitted term (D halves the torque without a second load path.).\nD) 500 N·m: Does not satisfy the governing relation that produces “1000 N·m”. Typical slip: wrong share/basis, unit conversion, or omitted term (D halves the torque without a second load path.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: free-body of BC must transmit the end torque at C.\n• Keyed answer to lock: 1000 N·m.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 8,
    "subject": "Strength of Materials",
    "topic": "SOM: indeterminate beam+settlement",
    "question": "While assessing a propped cantilever under full-span UDL, the prop is found to settle downward by half the free-end deflection that the corresponding unpropped cantilever would have under that UDL. Which upward prop reaction should the analyst obtain?",
    "image": "",
    "options": [
      "\\(3wL/8\\)",
      "\\(wL/4\\)",
      "\\(5wL/8\\)",
      "\\(3wL/16\\)"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: \\(3wL/16\\)\n\nWHY CORRECT:\nCompatibility leaves half the UDL deflection to be cancelled by the prop, giving \\(3wL/16\\).\n\nCALCULATION:\ncompatibility leaves half the UDL deflection to be cancelled by the prop, giving \\(3wL/16\\).\nFinal keyed result: \\(3wL/16\\).\n\nTRAP ANALYSIS (every wrong option):\nA) \\(3wL/8\\): Does not satisfy the governing relation that produces “\\(3wL/16\\)”. Typical slip: wrong share/basis, unit conversion, or omitted term (A is the no-settlement result.).\nB) \\(wL/4\\): Does not satisfy the governing relation that produces “\\(3wL/16\\)”. Typical slip: wrong share/basis, unit conversion, or omitted term (A is the no-settlement result.).\nC) \\(5wL/8\\): Does not satisfy the governing relation that produces “\\(3wL/16\\)”. Typical slip: wrong share/basis, unit conversion, or omitted term (A is the no-settlement result.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• No settlement propped cantilever + full UDL: Rp=3wL/8 upward.\n• If prop settlement Δ = ½ of unpropped free-end deflection, compatibility halves the cancelled deflection ⇒ Rp=3wL/16.\n• Always write δ_UDL − δ_Rp = Δ_prop with consistent signs.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Δ=0 recovers Rp=3wL/8.\n• Point load at tip/midspan uses different Rp formulas — do not reuse UDL result.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-GATE→Transco"
  },
  {
    "id": 9,
    "subject": "Strength of Materials",
    "topic": "SOM: BMD+graph+diagnosis",
    "question": "On the plotted bending-moment diagram, a marked vertical jump occurs at section C while shear remains finite on both sides of C and no local section change is recorded (jump labelled at C on the figure). Which loading interpretation is most defensible?",
    "image": "images/diagrams/civil-flt01/q09-bmd-jump.jpg",
    "options": [
      "A concentrated couple acts at C",
      "A point load acts at C",
      "A UDL starts at C",
      "The flexural rigidity changes at C"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Graph+Application",
    "formula": "",
    "explanation": "CORRECT: A concentrated couple acts at C\n\nWHY CORRECT:\nA concentrated moment causes a BMD discontinuity; a point force jumps shear.\n\nCALCULATION:\nFinal keyed result: A concentrated couple acts at C.\n\nTRAP ANALYSIS (every wrong option):\nB) A point load acts at C: Does not satisfy the governing relation that produces “A concentrated couple acts at C”. Typical slip: wrong share/basis, unit conversion, or omitted term (stiffness changes curvature, not equilibrium jumps.).\nC) A UDL starts at C: Does not satisfy the governing relation that produces “A concentrated couple acts at C”. Typical slip: wrong share/basis, unit conversion, or omitted term (stiffness changes curvature, not equilibrium jumps.).\nD) The flexural rigidity changes at C: Does not satisfy the governing relation that produces “A concentrated couple acts at C”. Typical slip: wrong share/basis, unit conversion, or omitted term (stiffness changes curvature, not equilibrium jumps.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Concentrated couple ⇒ vertical jump in BMD; SFD stays continuous if no point force there.\n• Point force ⇒ jump in SFD (=force); BMD has a kink (slope change), not a jump.\n• EI change alters curvature M/EI only — it does not create equilibrium jumps on SFD/BMD.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• UDL start/stop ⇒ change in slope of SFD (dV/dx=−w), smooth change in BMD curvature.\n• Relations: dM/dx=V and dV/dx=−w diagnose diagram signatures.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "core",
    "diagramSourcePath": "civil-core-diagrams/SOM/SOM_pg0026.jpg"
  },
  {
    "id": 10,
    "subject": "Strength of Materials",
    "topic": "SOM: matching+beam BM models",
    "question": "While preparing a design-aid sheet, match List-I beam cases to List-II max BM (same w, length l): (a) cantilever UDL on outer half; (b) cantilever triangular to free end; (c) SS full UDL on l; (d) SS full UDL on 2l — with (1) wl²/2; (2) wl²/6; (3) wl²/8; (4) 3wl²/8. Which code is correct?",
    "image": "",
    "options": [
      "a-4, b-2, c-3, d-1",
      "a-4, b-1, c-3, d-2",
      "a-3, b-1, c-2, d-4",
      "a-1, b-2, c-3, d-4"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Matching Matrix",
    "formula": "",
    "explanation": "CORRECT: a-4, b-2, c-3, d-1\n\nWHY CORRECT:\n(a) 3wl²/8; (b) wl²/6; (c) wl²/8; (d) w(2l)²/8 = wl²/2.\n\nCALCULATION:\n(a) 3wl²/8; (b) wl²/6; (c) wl²/8; (d) w(2l)²/8 = wl²/2.\nFinal keyed result: a-4, b-2, c-3, d-1.\n\nTRAP ANALYSIS (every wrong option):\nB) a-4, b-1, c-3, d-2: Does not satisfy the governing relation that produces “a-4, b-2, c-3, d-1”. Typical slip: wrong share/basis, unit conversion, or omitted term (A swaps triangular and double-span results.).\nC) a-3, b-1, c-2, d-4: Does not satisfy the governing relation that produces “a-4, b-2, c-3, d-1”. Typical slip: wrong share/basis, unit conversion, or omitted term (A swaps triangular and double-span results.).\nD) a-1, b-2, c-3, d-4: Does not satisfy the governing relation that produces “a-4, b-2, c-3, d-1”. Typical slip: wrong share/basis, unit conversion, or omitted term (A swaps triangular and double-span results.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: (a) 3wl²/8; (b) wl²/6; (c) wl²/8; (d) w(2l)²/8 = wl²/2.\n• Keyed answer to lock: a-4, b-2, c-3, d-1.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC",
    "matchingMatrix": {
      "caption": "Match List-I beam cases with List-II maximum BM",
      "listITitle": "List-I (Beam)",
      "listIITitle": "List-II (Max BM)",
      "listI": [
        {
          "code": "a",
          "text": "Cantilever — UDL on outer half"
        },
        {
          "code": "b",
          "text": "Cantilever — triangular load to free end"
        },
        {
          "code": "c",
          "text": "Simply supported — full UDL on span l"
        },
        {
          "code": "d",
          "text": "Simply supported — full UDL on span 2l"
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
      "instruction": "Select the correct matching code."
    }
  },
  {
    "id": 11,
    "subject": "Strength of Materials",
    "topic": "SOM: Euler theory+assumptions",
    "question": "During buckling checks for a slender pin-ended strut, a junior engineer proposes to use the classical Euler formula. Which statement is NOT an assumption of elementary Euler column theory?",
    "image": "",
    "options": [
      "The column is initially straight and the axial load is concentric",
      "The material remains linearly elastic up to the buckling load",
      "The column’s self-weight is included as a distributed axial compressive load in the ideal Euler model",
      "Plane sections remain plane and shear deformation is neglected in the bending idealisation"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Theory-Assumptions",
    "formula": "Pcr = π²EI/(Le)² (Euler); assumptions exclude self-weight loading in the elementary model",
    "explanation": "CORRECT: The column’s self-weight is included as a distributed axial compressive load in the ideal Euler model\n\nWHY CORRECT:\nEnergy equivalence for sudden loading gives σ_sudden ≈ 2 σ_gradual.\n\nCALCULATION:\nenergy equivalence for sudden loading gives σ_sudden ≈ 2 σ_gradual.\nFinal keyed result: The column’s self-weight is included as a distributed axial compressive load in the ideal Euler model.\n\nTRAP ANALYSIS (every wrong option):\nA) The column is initially straight and the axial load is concentric: Does not satisfy the governing relation that produces “The column’s self-weight is included as a distributed axial compressive load in the ideal Euler model”. Typical slip: wrong share/basis, unit conversion, or omitted term (C reverses the factor.).\nB) The material remains linearly elastic up to the buckling load: Does not satisfy the governing relation that produces “The column’s self-weight is included as a distributed axial compressive load in the ideal Euler model”. Typical slip: wrong share/basis, unit conversion, or omitted term (C reverses the factor.).\nD) Plane sections remain plane and shear deformation is neglected in the bending idealisation: Does not satisfy the governing relation that produces “The column’s self-weight is included as a distributed axial compressive load in the ideal Euler model”. Typical slip: wrong share/basis, unit conversion, or omitted term (C reverses the factor.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Euler Pcr=π²EI/Le². Core assumptions: initially straight, concentric axial load, linear elasticity, small slopes, neglect shear deformation.\n• Self-weight as distributed axial load is NOT in the elementary Euler ideal column model.\n• End factors: hinged–hinged Le=L; fixed–fixed ideal Le=L/2; fixed–free Le=2L.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Rankine–Gordon: 1/Pr=1/Pc+1/Pe — use when crushing and buckling both matter.\n• Initial crookedness/eccentricity ⇒ use IS 800 column curves, not bare Euler.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Theory-Assumptions-mandate"
  },
  {
    "id": 12,
    "subject": "Strength of Materials",
    "topic": "SOM: temperature stress+yield onset",
    "question": "A steel bar with fixed ends is reviewed for temperature lock-up using α = 12×10⁻⁶ /°C, E = 200 GPa, fy = 250 MPa and γm0 = 1.1. Which temperature rise is closest to the onset of design yielding (σ = fy/γm0) if the bar remains fully restrained?",
    "image": "",
    "options": [
      "104°C",
      "48°C",
      "200°C",
      "95°C"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 95°C\n\nWHY CORRECT:\nΣ = 227.3 MPa = αEΔT → ΔT ≈ 94.7°C. This uniquely selects “95°C”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nσ = 227.3 MPa = αEΔT → ΔT ≈ 94.7°C.\nFinal keyed result: 95°C.\n\nTRAP ANALYSIS (every wrong option):\nA) 104°C: Does not satisfy the governing relation that produces “95°C”. Typical slip: wrong share/basis, unit conversion, or omitted term (A uses fy without γm0; B halves the rise.).\nB) 48°C: Does not satisfy the governing relation that produces “95°C”. Typical slip: wrong share/basis, unit conversion, or omitted term (A uses fy without γm0; B halves the rise.).\nC) 200°C: Does not satisfy the governing relation that produces “95°C”. Typical slip: wrong share/basis, unit conversion, or omitted term (A uses fy without γm0; B halves the rise.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Fixed-end heating: free expansion αΔTL fully suppressed ⇒ compressive σ=α E ΔT.\n• Onset vs design yield: set α E ΔT = fy/γm0 (Fe250⇒≈227 MPa), not bare fy=250.\n• α_steel≈12×10⁻⁶ /°C and E≈200 GPa are the usual exam constants.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• If one end can slip, stress < αEΔT (compatibility releases).\n• Composite rails: solve redundant force from unequal α or ΔT.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 13,
    "subject": "Strength of Materials",
    "topic": "SOM: section modulus+governing size",
    "question": "During beam-section selection, the service moment is 36 kN·m and the allowable bending stress is 150 MPa. Depth cannot increase in the architectural envelope, so the engineer must size by section modulus. Which minimum Z is closest?",
    "image": "",
    "options": [
      "2.4×10⁵ mm³",
      "2.4×10⁶ mm³",
      "5.4×10⁵ mm³",
      "150×10³ mm³"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 2.4×10⁵ mm³\n\nWHY CORRECT:\nZ = M/σ = 36×10⁶/150 = 2.4×10⁵ mm³. This uniquely selects “2.4×10⁵ mm³”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nZ = M/σ = 36×10⁶/150 = 2.4×10⁵ mm³.\nFinal keyed result: 2.4×10⁵ mm³.\n\nTRAP ANALYSIS (every wrong option):\nB) 2.4×10⁶ mm³: Does not satisfy the governing relation that produces “2.4×10⁵ mm³”. Typical slip: wrong share/basis, unit conversion, or omitted term (B slips a power of ten.).\nC) 5.4×10⁵ mm³: Does not satisfy the governing relation that produces “2.4×10⁵ mm³”. Typical slip: wrong share/basis, unit conversion, or omitted term (B slips a power of ten.).\nD) 150×10³ mm³: Does not satisfy the governing relation that produces “2.4×10⁵ mm³”. Typical slip: wrong share/basis, unit conversion, or omitted term (B slips a power of ten.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Required elastic Z = M/σ_allow with consistent units.\n• 36 kN·m = 36×10⁶ N·mm; σ=150 N/mm² ⇒ Z=36e6/150=2.4×10⁵ mm³.\n• Power-of-ten slip 2.4×10⁶ mm³ is the classic wrong option.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Rectangle Z=bd²/6; solve missing b or d when the other is fixed.\n• Plastic modulus for rectangle Zp=bd²/4 (>Z).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 14,
    "subject": "Strength of Materials",
    "topic": "SOM: transformed section+compatibility",
    "question": "In flitch-beam checking, a timber core 100×300 mm has two side steel plates 12×300 mm with modular ratio m = Es/Et = 15. Which transformed width of each steel plate, when expressed in equivalent timber units, should the analyst use?",
    "image": "",
    "options": [
      "300 mm",
      "12 mm",
      "180 mm",
      "15 mm"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 180 mm\n\nWHY CORRECT:\nTransformed width = m×12 = 180 mm. This uniquely selects “180 mm”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\ntransformed width = m×12 = 180 mm.\nFinal keyed result: 180 mm.\n\nTRAP ANALYSIS (every wrong option):\nA) 300 mm: Quotes the plate depth 300 mm instead of m×thickness.\nB) 12 mm: Leaves thickness untransformed (forgets modular ratio).\nD) 15 mm: Quotes m itself as a length.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Transformed timber width of a steel plate = m·t_steel with m=Es/Et (depth unchanged).\n• Build one transformed section, find NA and I, then σ_timber=My/I and σ_steel=m·σ_timber at the same y.\n• m scales width/area only — never replace plate thickness by m alone as the answer for width.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Given m=15 and t=12 mm → transformed width = 180 mm (this FLT item).\n• If two plates, transform both sides then recompute NA of the flitch beam.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-GATE→Transco"
  },
  {
    "id": 15,
    "subject": "Strength of Materials",
    "topic": "SOM: column stability+application",
    "question": "When a slender compression member is redesigned, the same area and material are retained but material is moved away from the weak centroidal axis. With length and end restraint unchanged, which linked outcome should the engineer expect?",
    "image": "",
    "options": [
      "Radius decreases; slenderness decreases; capacity rises",
      "All unchanged",
      "Radius rises; slenderness rises; capacity falls",
      "Radius rises; slenderness falls; buckling capacity rises"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Radius rises; slenderness falls; buckling capacity rises\n\nWHY CORRECT:\nLarger weak-axis second moment raises radius, lowers slenderness and raises buckling resistance.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Radius decreases; slenderness decreases; capacity rises: Does not satisfy the governing relation that produces “Radius rises; slenderness falls; buckling capacity rises”. Typical slip: wrong share/basis, unit conversion, or omitted term (C reverses the radius-slenderness relation.).\nB) All unchanged: Does not satisfy the governing relation that produces “Radius rises; slenderness falls; buckling capacity rises”. Typical slip: wrong share/basis, unit conversion, or omitted term (C reverses the radius-slenderness relation.).\nC) Radius rises; slenderness rises; capacity falls: Does not satisfy the governing relation that produces “Radius rises; slenderness falls; buckling capacity rises”. Typical slip: wrong share/basis, unit conversion, or omitted term (C reverses the radius-slenderness relation.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• r_min=√(I_min/A). Moving area away from the weak axis raises I_min and r_min at constant A.\n• λ=Le/r_min falls when r_min rises ⇒ buckling capacity rises.\n• Improving the strong-axis I while weak-axis I is unchanged does not help — weak axis still governs.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Adding a brace that shortens Le often raises capacity more than a small r gain.\n• Check which axis has smaller r before redesigning the shape.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 16,
    "subject": "RCC / DDRC",
    "topic": "RCC: durability+decision",
    "question": "Before a pour on an RCC beam in moderate exposure, measured cover is below the durability requirement although the calculated effective depth is available. Which correction priority is most appropriate?",
    "image": "",
    "options": [
      "Accept because depth governs strength",
      "Increase water-cement ratio",
      "Restore specified cover before concreting",
      "Replace stirrups with larger spacing"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Restore specified cover before concreting\n\nWHY CORRECT:\nDurability/fire cover is an independent requirement.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Accept because depth governs strength: Does not satisfy the governing relation that produces “Restore specified cover before concreting”. Typical slip: wrong share/basis, unit conversion, or omitted term (adequate flexural depth cannot waive exposure protection.).\nB) Increase water-cement ratio: Does not satisfy the governing relation that produces “Restore specified cover before concreting”. Typical slip: wrong share/basis, unit conversion, or omitted term (adequate flexural depth cannot waive exposure protection.).\nD) Replace stirrups with larger spacing: Does not satisfy the governing relation that produces “Restore specified cover before concreting”. Typical slip: wrong share/basis, unit conversion, or omitted term (adequate flexural depth cannot waive exposure protection.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Nominal cover is a durability/fire limit independent of flexural strength depth.\n• If cover is short on site: restore chairs/spacers before pour — do not waive because ‘d is OK’.\n• Increasing w/c worsens durability; widening stirrup spacing hurts shear/confinement.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• d = D − cover − φ/2 (approx) — cover error also shifts effective depth.\n• Exposure class sets minimum cover (IS 456 table) — use the governing exposure.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 17,
    "subject": "RCC / DDRC",
    "topic": "RCC: IS flexure+limit state",
    "question": "While checking an Fe415 singly reinforced beam, the trial neutral-axis depth is 225 mm for an effective depth of 500 mm. Under the IS limiting depth ratio for this steel grade, which conclusion should the designer record?",
    "image": "",
    "options": [
      "Under-reinforced because 225 mm is below 240 mm",
      "Balanced because ratio is 0.50",
      "Over-reinforced because any depth above 200 mm fails",
      "Classification needs beam width only"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: Under-reinforced because 225 mm is below 240 mm\n\nWHY CORRECT:\nLimiting depth = 0.48×500 = 240 mm; trial is lower.\n\nCALCULATION:\nlimiting depth = 0.48×500 = 240 mm; trial is lower.\nFinal keyed result: Under-reinforced because 225 mm is below 240 mm.\n\nTRAP ANALYSIS (every wrong option):\nB) Balanced because ratio is 0.50: Does not satisfy the governing relation that produces “Under-reinforced because 225 mm is below 240 mm”. Typical slip: wrong share/basis, unit conversion, or omitted term (C imports an unrelated limit.).\nC) Over-reinforced because any depth above 200 mm fails: Does not satisfy the governing relation that produces “Under-reinforced because 225 mm is below 240 mm”. Typical slip: wrong share/basis, unit conversion, or omitted term (C imports an unrelated limit.).\nD) Classification needs beam width only: Does not satisfy the governing relation that produces “Under-reinforced because 225 mm is below 240 mm”. Typical slip: wrong share/basis, unit conversion, or omitted term (C imports an unrelated limit.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Fe415 limiting NA: xu,max/d ≈ 0.48. For d=500 mm → xu,max≈240 mm.\n• Trial xu=225 mm < 240 mm ⇒ under-reinforced (steel yields first) — preferred for ductility.\n• The xu vs xu,max test does not need breadth b.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Fe250 → xu,max/d≈0.53; Fe500 → ≈0.46.\n• If Mu demand > Mu,lim of singly reinforced section → go doubly reinforced.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 18,
    "subject": "RCC / DDRC",
    "topic": "RCC: slab+diagram+AR",
    "question": "An RC slab panel has clear spans lx = 3.5 m (short) and ly = 5.0 m (long), so ly/lx ≈ 1.43, and all four edges are continuously supported (dimensions and edge-support ticks also shown on the figure). Assertion: the panel should be designed for two-way action. Reason: four-edge support and ly/lx < 2. Which conclusion follows?",
    "image": "images/diagrams/civil-flt01/q18-slab-supports.jpg",
    "options": [
      "Both true; R does not explain A",
      "A true, R false",
      "Both true; R explains A",
      "A false, R true"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Diagram+Conceptual",
    "formula": "",
    "explanation": "CORRECT: Both true; R explains A\n\nWHY CORRECT:\nBoth support condition and aspect ratio establish two-way action.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Both true; R does not explain A: Does not satisfy the governing relation that produces “Both true; R explains A”. Typical slip: wrong share/basis, unit conversion, or omitted term (the ratio alone is insufficient without four-edge support.).\nB) A true, R false: Does not satisfy the governing relation that produces “Both true; R explains A”. Typical slip: wrong share/basis, unit conversion, or omitted term (the ratio alone is insufficient without four-edge support.).\nD) A false, R true: Does not satisfy the governing relation that produces “Both true; R explains A”. Typical slip: wrong share/basis, unit conversion, or omitted term (the ratio alone is insufficient without four-edge support.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Two-way action needs BOTH: support on four sides AND ly/lx ≤ 2.\n• Here lx=3.5 m, ly=5.0 m ⇒ ly/lx≈1.43 < 2 with four-edge support ⇒ two-way.\n• ly/lx>2 even on four supports ⇒ design as one-way spanning short side.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Short span lx carries the larger load share in two-way slabs.\n• Corners held down vs not held down changes torsion reinforcement detailing.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "schematic-family",
    "diagramSourcePath": "schematic-family/dual-params-q18"
  },
  {
    "id": 19,
    "subject": "RCC / DDRC",
    "topic": "RCC: reinforcement+practical+hold point",
    "question": "Mid-pour on a continuous RCC floor, top bars over an interior support are found displaced downward by about 35 mm before concrete reaches that bay, while bottom steel remains in place. The pour gang is waiting on site instructions. Which site direction is most defensible as an immediate hold-point response?",
    "image": "",
    "options": [
      "Continue because slab bottom steel is present",
      "Add extra water for access",
      "Hold the pour locally, restore chairs/bar level and reverify cover and effective depth",
      "Record it only after stripping"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Practical/Application",
    "formula": "",
    "explanation": "CORRECT: Hold the pour locally, restore chairs/bar level and reverify cover and effective depth\n\nWHY CORRECT:\nDisplaced negative steel reduces support capacity and changes cover.\n\nCALCULATION:\nFinal keyed result: Hold the pour locally, restore chairs/bar level and reverify cover and effective depth.\n\nTRAP ANALYSIS (every wrong option):\nA) Continue because slab bottom steel is present: Does not satisfy the governing relation that produces “Hold the pour locally, restore chairs/bar level and reverify cover and effective depth”. Typical slip: wrong share/basis, unit conversion, or omitted term (A ignores hogging demand.).\nB) Add extra water for access: Does not satisfy the governing relation that produces “Hold the pour locally, restore chairs/bar level and reverify cover and effective depth”. Typical slip: wrong share/basis, unit conversion, or omitted term (A ignores hogging demand.).\nD) Record it only after stripping: Does not satisfy the governing relation that produces “Hold the pour locally, restore chairs/bar level and reverify cover and effective depth”. Typical slip: wrong share/basis, unit conversion, or omitted term (A ignores hogging demand.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: displaced negative steel reduces support capacity and changes cover.\n• Keyed answer to lock: Hold the pour locally, restore chairs/bar level and reverify cover and effective depth.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 20,
    "subject": "RCC / DDRC",
    "topic": "RCC: T-beam+moment region",
    "question": "At an interior support of a continuous T-beam, the moment is hogging and the slab flange lies in tension. Which compression width is most appropriate for flexural resistance there?",
    "image": "",
    "options": [
      "Full slab width",
      "Midspan effective flange width",
      "Half panel width",
      "Web width, unless another compression flange is specifically present"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Web width, unless another compression flange is specifically present\n\nWHY CORRECT:\nThe slab flange is not in compression under hogging.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Full slab width: Does not satisfy the governing relation that produces “Web width, unless another compression flange is specifically present”. Typical slip: wrong share/basis, unit conversion, or omitted term (B carries the sagging-region model into the support region.).\nB) Midspan effective flange width: Does not satisfy the governing relation that produces “Web width, unless another compression flange is specifically present”. Typical slip: wrong share/basis, unit conversion, or omitted term (B carries the sagging-region model into the support region.).\nC) Half panel width: Does not satisfy the governing relation that produces “Web width, unless another compression flange is specifically present”. Typical slip: wrong share/basis, unit conversion, or omitted term (B carries the sagging-region model into the support region.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Fe415 limiting NA: xu,max/d ≈ 0.48. For d=500 mm → xu,max≈240 mm.\n• Trial xu=225 mm < 240 mm ⇒ under-reinforced (steel yields first) — preferred for ductility.\n• The xu vs xu,max test does not need breadth b.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Fe250 → xu,max/d≈0.53; Fe500 → ≈0.46.\n• If Mu demand > Mu,lim of singly reinforced section → go doubly reinforced.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 21,
    "subject": "RCC / DDRC",
    "topic": "RCC: column ties+diagram+detailing",
    "question": "At reinforcement inspection, a tied column shows the longitudinal-bar layout with intermediate bars on each face, and four proposed tie arrangements labelled Detail P, Q, R and S on the figure. Which marked arrangement best restrains every corner and intermediate bar?",
    "image": "images/diagrams/civil-flt01/q21-column-tie-detail.jpg",
    "options": [
      "Detail P",
      "Detail Q",
      "Detail R",
      "Detail S"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Diagram+Conceptual",
    "formula": "",
    "explanation": "CORRECT: Detail S\n\nWHY CORRECT:\nDetail S uses a closed perimeter tie plus both crossties so every corner and mid-face bar is restrained.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Detail P: Does not satisfy the governing relation that produces “Detail S”. Typical slip: wrong share/basis, unit conversion, or omitted term (P is perimeter-only; Q omits a crosstie direction; R’s diamond leaves corners unrestrained.).\nB) Detail Q: Does not satisfy the governing relation that produces “Detail S”. Typical slip: wrong share/basis, unit conversion, or omitted term (P is perimeter-only; Q omits a crosstie direction; R’s diamond leaves corners unrestrained.).\nC) Detail R: Does not satisfy the governing relation that produces “Detail S”. Typical slip: wrong share/basis, unit conversion, or omitted term (P is perimeter-only; Q omits a crosstie direction; R’s diamond leaves corners unrestrained.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: Detail S uses a closed perimeter tie plus both crossties so every corner and mid-face bar is restrained.\n• Keyed answer to lock: Detail S.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "schematic-family",
    "diagramSourcePath": "schematic-family/column-ties-P-S (DDRC core has no column-tie page; slab page was incorrect)"
  },
  {
    "id": 22,
    "subject": "RCC / DDRC",
    "topic": "RCC: IS shear+design judgement",
    "question": "While checking two beams of equal section under IS shear rules, Beam X has nominal shear below concrete design shear strength, whereas Beam Y lies above that value but below the maximum permitted shear stress. Which detailing decision is most appropriate?",
    "image": "",
    "options": [
      "No stirrups in either",
      "Redesign both sections immediately",
      "Minimum shear reinforcement in X; designed shear reinforcement in Y",
      "Provide torsion steel only in Y"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Minimum shear reinforcement in X; designed shear reinforcement in Y\n\nWHY CORRECT:\nMinimum stirrups remain required in X; Y needs the balance carried by shear reinforcement.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) No stirrups in either: Does not satisfy the governing relation that produces “Minimum shear reinforcement in X; designed shear reinforcement in Y”. Typical slip: wrong share/basis, unit conversion, or omitted term (C ignores the permitted design range.).\nB) Redesign both sections immediately: Does not satisfy the governing relation that produces “Minimum shear reinforcement in X; designed shear reinforcement in Y”. Typical slip: wrong share/basis, unit conversion, or omitted term (C ignores the permitted design range.).\nD) Provide torsion steel only in Y: Does not satisfy the governing relation that produces “Minimum shear reinforcement in X; designed shear reinforcement in Y”. Typical slip: wrong share/basis, unit conversion, or omitted term (C ignores the permitted design range.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: minimum stirrups remain required in X; Y needs the balance carried by shear reinforcement.\n• Keyed answer to lock: Minimum shear reinforcement in X; designed shear reinforcement in Y.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 23,
    "subject": "RCC / DDRC",
    "topic": "RCC: IS anchorage+governing decision",
    "question": "Before approving a beam bar cut-off near a support on the shop drawing, the detailing team finds that available embedment beyond the theoretical cut-off is shorter than the development length implied by bar diameter, design steel stress and design bond stress. Adjacent shear and moment checks are otherwise complete. Which action is most appropriate?",
    "image": "",
    "options": [
      "Accept because the bar has already entered the support region",
      "Increase only the clear cover and leave the cut-off unchanged",
      "Extend the bar, provide an allowable hook/bend, or revise curtailment so anchorage and the related moment/shear checks are all satisfied",
      "Replace stirrups with larger spacing to free anchorage length"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Extend the bar, provide an allowable hook/bend, or revise curtailment so anchorage and the related moment/shear checks are all satisfied\n\nWHY CORRECT:\nInadequate development is a structural limit, not a drafting preference.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Accept because the bar has already entered the support region: Does not satisfy the governing relation that produces “Extend the bar, provide an allowable hook/bend, or revise curtailment so anchorage and the related moment/shear checks are all satisfied”. Typical slip: wrong share/basis, unit conversion, or omitted term (A confuses location with anchorage.).\nB) Increase only the clear cover and leave the cut-off unchanged: Does not satisfy the governing relation that produces “Extend the bar, provide an allowable hook/bend, or revise curtailment so anchorage and the related moment/shear checks are all satisfied”. Typical slip: wrong share/basis, unit conversion, or omitted term (A confuses location with anchorage.).\nD) Replace stirrups with larger spacing to free anchorage length: Does not satisfy the governing relation that produces “Extend the bar, provide an allowable hook/bend, or revise curtailment so anchorage and the related moment/shear checks are all satisfied”. Typical slip: wrong share/basis, unit conversion, or omitted term (A confuses location with anchorage.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: inadequate development is a structural limit, not a drafting preference.\n• Keyed answer to lock: Extend the bar, provide an allowable hook/bend, or revise curtailment so anchorage and the related moment/shear checks are all satisfied.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 24,
    "subject": "RCC / DDRC",
    "topic": "RCC: doubly reinforced+capacity decision",
    "question": "In design review, factored moment is 160 kN·m while the limiting singly reinforced capacity of the fixed beam section is 138 kN·m. Section depth cannot increase. Which design route is most appropriate?",
    "image": "",
    "options": [
      "Use only minimum tension steel",
      "Reduce effective depth",
      "Design the excess moment with compression and additional tension steel",
      "Treat 138 kN·m as service moment"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Design the excess moment with compression and additional tension steel\n\nWHY CORRECT:\nDemand exceeds singly reinforced limit; a steel couple must resist the excess.\n\nCALCULATION:\nFinal keyed result: Design the excess moment with compression and additional tension steel.\n\nTRAP ANALYSIS (every wrong option):\nA) Use only minimum tension steel: Does not satisfy the governing relation that produces “Design the excess moment with compression and additional tension steel”. Typical slip: wrong share/basis, unit conversion, or omitted term (D mixes design stages.).\nB) Reduce effective depth: Does not satisfy the governing relation that produces “Design the excess moment with compression and additional tension steel”. Typical slip: wrong share/basis, unit conversion, or omitted term (D mixes design stages.).\nD) Treat 138 kN·m as service moment: Does not satisfy the governing relation that produces “Design the excess moment with compression and additional tension steel”. Typical slip: wrong share/basis, unit conversion, or omitted term (D mixes design stages.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: demand exceeds singly reinforced limit; a steel couple must resist the excess.\n• Keyed answer to lock: Design the excess moment with compression and additional tension steel.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 25,
    "subject": "RCC / DDRC",
    "topic": "RCC: doubly reinforced+concept",
    "question": "A design review finds that the factored moment exceeds the limiting capacity of the same section as a singly reinforced member, while overall depth cannot be increased. Which design interpretation is correct?",
    "image": "",
    "options": [
      "Provide only minimum tension steel and ignore the excess",
      "Treat the limiting singly reinforced capacity as a serviceability ceiling and stop",
      "Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials",
      "Reduce the load factor instead of changing reinforcement"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials\n\nWHY CORRECT:\nMu > Mu,lim requires a steel couple or a larger section.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Provide only minimum tension steel and ignore the excess: Does not satisfy the governing relation that produces “Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials”. Typical slip: wrong share/basis, unit conversion, or omitted term (B misreads limit-state capacity as a service check.).\nB) Treat the limiting singly reinforced capacity as a serviceability ceiling and stop: Does not satisfy the governing relation that produces “Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials”. Typical slip: wrong share/basis, unit conversion, or omitted term (B misreads limit-state capacity as a service check.).\nD) Reduce the load factor instead of changing reinforcement: Does not satisfy the governing relation that produces “Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials”. Typical slip: wrong share/basis, unit conversion, or omitted term (B misreads limit-state capacity as a service check.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: Mu > Mu,lim requires a steel couple or a larger section.\n• Keyed answer to lock: Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 26,
    "subject": "RCC / DDRC",
    "topic": "RCC: table+diagram+interpolation",
    "question": "From the design shear table (also shown), τc = 0.48 MPa at 0.50% tension steel and τc = 0.56 MPa at 0.75%. For pt = 0.625% and nominal shear stress τv = 0.70 MPa, which conclusion is closest?",
    "image": "images/diagrams/civil-flt01/q26-shear-table.jpg",
    "options": [
      "0.48 MPa; minimum stirrups only",
      "0.56 MPa; no stirrups",
      "0.70 MPa; concrete alone",
      "0.52 MPa; stirrups carry the balance, subject to the maximum limit"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Table+Diagram",
    "formula": "",
    "explanation": "CORRECT: 0.52 MPa; stirrups carry the balance, subject to the maximum limit\n\nWHY CORRECT:\nMidpoint interpolation gives 0.52 MPa; demand exceeds it.\n\nCALCULATION:\nmidpoint interpolation gives 0.52 MPa; demand exceeds it.\nFinal keyed result: 0.52 MPa; stirrups carry the balance, subject to the maximum limit.\n\nTRAP ANALYSIS (every wrong option):\nA) 0.48 MPa; minimum stirrups only: Does not satisfy the governing relation that produces “0.52 MPa; stirrups carry the balance, subject to the maximum limit”. Typical slip: wrong share/basis, unit conversion, or omitted term (B takes the upper row without interpolation.).\nB) 0.56 MPa; no stirrups: Does not satisfy the governing relation that produces “0.52 MPa; stirrups carry the balance, subject to the maximum limit”. Typical slip: wrong share/basis, unit conversion, or omitted term (B takes the upper row without interpolation.).\nC) 0.70 MPa; concrete alone: Does not satisfy the governing relation that produces “0.52 MPa; stirrups carry the balance, subject to the maximum limit”. Typical slip: wrong share/basis, unit conversion, or omitted term (B takes the upper row without interpolation.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: midpoint interpolation gives 0.52 MPa; demand exceeds it.\n• Keyed answer to lock: 0.52 MPa; stirrups carry the balance, subject to the maximum limit.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "core",
    "diagramSourcePath": "civil-core-diagrams/DDRC/DDRC_pg0037.jpg",
    "dataTable": {
      "caption": "Design shear strength of concrete τc (MPa) excerpt",
      "headers": [
        "pt (%)",
        "τc (MPa)"
      ],
      "rows": [
        [
          "0.50",
          "0.48"
        ],
        [
          "0.75",
          "0.56"
        ]
      ]
    }
  },
  {
    "id": 27,
    "subject": "RCC / DDRC",
    "topic": "RCC: IS stirrup spacing",
    "question": "On a beam drawing check, analysis suggests 280 mm stirrup spacing, effective depth is 350 mm, and the applicable spacing ceiling is three-quarters of effective depth. Which practical spacing should be issued?",
    "image": "",
    "options": [
      "300 mm",
      "280 mm",
      "260 mm",
      "350 mm"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 260 mm\n\nWHY CORRECT:\nCeiling = 262.5 mm; adopt 260 mm. This uniquely selects “260 mm”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nceiling = 262.5 mm; adopt 260 mm.\nFinal keyed result: 260 mm.\n\nTRAP ANALYSIS (every wrong option):\nA) 300 mm: Does not satisfy the governing relation that produces “260 mm”. Typical slip: wrong share/basis, unit conversion, or omitted term (B accepts analysis spacing without the code ceiling.).\nB) 280 mm: Does not satisfy the governing relation that produces “260 mm”. Typical slip: wrong share/basis, unit conversion, or omitted term (B accepts analysis spacing without the code ceiling.).\nD) 350 mm: Does not satisfy the governing relation that produces “260 mm”. Typical slip: wrong share/basis, unit conversion, or omitted term (B accepts analysis spacing without the code ceiling.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: ceiling = 262.5 mm; adopt 260 mm.\n• Keyed answer to lock: 260 mm.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 28,
    "subject": "RCC / DDRC",
    "topic": "RCC: honeycombing+practical+assessment",
    "question": "After deshuttering of an RCC beam, continuous deep honeycombing is visible around congested anchorage bars near the support, and sounding suggests voids through much of the cover zone, although companion cube strengths meet the specified grade. Temporary props are still in place. Which response is most defensible before allowing further loading or cladding works?",
    "image": "",
    "options": [
      "Barricade and map the defect, assess section/bond, then execute an engineer-approved repair or strengthening method",
      "Apply rich plaster after wetting",
      "Accept solely from cube results",
      "Load the beam before documenting the defect"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Practical/Application",
    "formula": "",
    "explanation": "CORRECT: Barricade and map the defect, assess section/bond, then execute an engineer-approved repair or strengthening method\n\nWHY CORRECT:\nCubes do not prove in-situ continuity or anchorage.\n\nCALCULATION:\nFinal keyed result: Barricade and map the defect, assess section/bond, then execute an engineer-approved repair or strengthening method.\n\nTRAP ANALYSIS (every wrong option):\nB) Apply rich plaster after wetting: Does not satisfy the governing relation that produces “Barricade and map the defect, assess section/bond, then execute an engineer-approved repair or strengthening method”. Typical slip: wrong share/basis, unit conversion, or omitted term (B conceals rather than characterises the defect.).\nC) Accept solely from cube results: Does not satisfy the governing relation that produces “Barricade and map the defect, assess section/bond, then execute an engineer-approved repair or strengthening method”. Typical slip: wrong share/basis, unit conversion, or omitted term (B conceals rather than characterises the defect.).\nD) Load the beam before documenting the defect: Does not satisfy the governing relation that produces “Barricade and map the defect, assess section/bond, then execute an engineer-approved repair or strengthening method”. Typical slip: wrong share/basis, unit conversion, or omitted term (B conceals rather than characterises the defect.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Nominal cover is a durability/fire limit independent of flexural strength depth.\n• If cover is short on site: restore chairs/spacers before pour — do not waive because ‘d is OK’.\n• Increasing w/c worsens durability; widening stirrup spacing hurts shear/confinement.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• d = D − cover − φ/2 (approx) — cover error also shifts effective depth.\n• Exposure class sets minimum cover (IS 456 table) — use the governing exposure.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 29,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "FM: manometer+diagram",
    "question": "A differential mercury manometer between water mains A and B has mercury specific gravity S = 13.6, connecting fluid water, g = 10 m/s², mercury-level difference h = 150 mm, and equal limb elevations x = y = 200 mm (all marked on the figure). Which pressure difference pA − pB is closest?",
    "image": "images/diagrams/civil-flt01/q29-manometer.jpg",
    "options": [
      "8.4 kPa",
      "12.6 kPa",
      "18.9 kPa",
      "25.2 kPa"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Numerical+Diagram",
    "formula": "",
    "explanation": "CORRECT: 18.9 kPa\n\nWHY CORRECT:\nH=150 mm, x=y=200 mm, S_Hg=13.6, g=10. With equal limbs, p_A−p_B = h(ρ_Hg−ρ_w)g = 0.15×(13600−1000)×10 = 18900 Pa = 18.9 kPa.\n\nCALCULATION:\nh=150 mm, x=y=200 mm, S_Hg=13.6, g=10. With equal limbs, p_A−p_B = h(ρ_Hg−ρ_w)g = 0.15×(13600−1000)×10 = 18900 Pa = 18.9 kPa.\nFinal keyed result: 18.9 kPa.\n\nTRAP ANALYSIS (every wrong option):\nA) 8.4 kPa: Does not satisfy the governing relation that produces “18.9 kPa”. Typical slip: wrong share/basis, unit conversion, or omitted term (B = 12.6 kPa uses wrong h; D doubles mercury head.).\nB) 12.6 kPa: Does not satisfy the governing relation that produces “18.9 kPa”. Typical slip: wrong share/basis, unit conversion, or omitted term (B = 12.6 kPa uses wrong h; D doubles mercury head.).\nD) 25.2 kPa: Does not satisfy the governing relation that produces “18.9 kPa”. Typical slip: wrong share/basis, unit conversion, or omitted term (B = 12.6 kPa uses wrong h; D doubles mercury head.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Equal limb elevations: pA−pB = h(ρm−ρ)g with h in metres.\n• SHg=13.6 ⇒ ρm=13600 kg/m³; h=0.15 m, g=10 → 0.15×(13600−1000)×10=18900 Pa=18.9 kPa.\n• Using (S−1)gh with wrong h (0.10 m) or dropping g produces the classic 12.6 kPa trap.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Inclined manometer: vertical head = L sinθ.\n• If limb elevations differ, add/subtract ρgΔz of the connecting fluid before the mercury term.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "schematic-family",
    "diagramSourcePath": "schematic-family/differential-manometer-numeric (Fluid_pg0018 is symbolic-only)"
  },
  {
    "id": 30,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "FM: orifice coefficients",
    "question": "Laboratory observations show that an orifice meter under steady calibration yields a discharge coefficient of 0.62 and a contraction coefficient of 0.64 for the same run. Which velocity coefficient should the laboratory engineer report as closest?",
    "image": "",
    "options": [
      "0.97",
      "0.40",
      "0.62",
      "1.26"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 0.97\n\nWHY CORRECT:\nVelocity coefficient = 0.62/0.64 ≈0.97. This uniquely selects “0.97”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nvelocity coefficient = 0.62/0.64 ≈0.97.\nFinal keyed result: 0.97.\n\nTRAP ANALYSIS (every wrong option):\nB) 0.40: Does not satisfy the governing relation that produces “0.97”. Typical slip: wrong share/basis, unit conversion, or omitted term (B multiplies the two coefficients.).\nC) 0.62: Does not satisfy the governing relation that produces “0.97”. Typical slip: wrong share/basis, unit conversion, or omitted term (B multiplies the two coefficients.).\nD) 1.26: Does not satisfy the governing relation that produces “0.97”. Typical slip: wrong share/basis, unit conversion, or omitted term (B multiplies the two coefficients.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: velocity coefficient = 0.62/0.64 ≈0.97.\n• Keyed answer to lock: 0.97.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 31,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "FM: hydraulic jump+AR",
    "question": "In a spillway stilling-basin design review, the hydraulic engineer debates energy dissipation across a free hydraulic jump under flood-release conditions. Assertion: a hydraulic jump can dissipate excess kinetic energy. Reason: momentum is approximately conserved across the control volume while substantial specific energy is lost in turbulence. Which conclusion follows from the two statements?",
    "image": "",
    "options": [
      "A true, R false",
      "Both true; R does not explain A",
      "A false, R true",
      "Both true; R explains A"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Assertion-Reason",
    "formula": "",
    "explanation": "CORRECT: Both true; R explains A\n\nWHY CORRECT:\nThe momentum relation permits conjugate-depth analysis, while turbulence explains dissipation.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) A true, R false: Does not satisfy the governing relation that produces “Both true; R explains A”. Typical slip: wrong share/basis, unit conversion, or omitted term (energy is not conserved across the jump.).\nB) Both true; R does not explain A: Does not satisfy the governing relation that produces “Both true; R explains A”. Typical slip: wrong share/basis, unit conversion, or omitted term (energy is not conserved across the jump.).\nC) A false, R true: Does not satisfy the governing relation that produces “Both true; R explains A”. Typical slip: wrong share/basis, unit conversion, or omitted term (energy is not conserved across the jump.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Concentrated couple ⇒ vertical jump in BMD; SFD stays continuous if no point force there.\n• Point force ⇒ jump in SFD (=force); BMD has a kink (slope change), not a jump.\n• EI change alters curvature M/EI only — it does not create equilibrium jumps on SFD/BMD.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• UDL start/stop ⇒ change in slope of SFD (dV/dx=−w), smooth change in BMD curvature.\n• Relations: dM/dx=V and dV/dx=−w diagnose diagram signatures.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-GATE→Transco"
  },
  {
    "id": 32,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "FM: Reynolds regime+interpretation",
    "question": "For a pipeline commissioning check, the engineer records diameter 50 mm, mean velocity 0.02 m/s and kinematic viscosity 1×10⁻⁶ m²/s for water at the test temperature. Which flow regime conclusion is most defensible before applying friction-factor charts?",
    "image": "",
    "options": [
      "Turbulent",
      "Ideal/inviscid only",
      "Laminar",
      "Sonic"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: Laminar\n\nWHY CORRECT:\nRe = VD/ν = 0.02×0.05/1e-6 = 1000 < 2300. This uniquely selects “Laminar”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nRe = VD/ν = 0.02×0.05/1e-6 = 1000 < 2300.\nFinal keyed result: Laminar.\n\nTRAP ANALYSIS (every wrong option):\nA) Turbulent: Does not satisfy the governing relation that produces “Laminar”. Typical slip: wrong share/basis, unit conversion, or omitted term (A misreads the threshold.).\nB) Ideal/inviscid only: Does not satisfy the governing relation that produces “Laminar”. Typical slip: wrong share/basis, unit conversion, or omitted term (A misreads the threshold.).\nD) Sonic: Does not satisfy the governing relation that produces “Laminar”. Typical slip: wrong share/basis, unit conversion, or omitted term (A misreads the threshold.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: Re = VD/ν = 0.02×0.05/1e-6 = 1000 < 2300.\n• Keyed answer to lock: Laminar.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 33,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "HHM: pump curves+graph+operation",
    "question": "Pumping-station studies plot the system curve together with one-pump and two-identical-pumps-in-parallel Q–H curves on the same axes (curves labelled on the figure). Which statement best explains why the marked two-pump discharge is less than twice the single-pump duty?",
    "image": "images/diagrams/civil-flt01/q33-pump-system-curves.jpg",
    "options": [
      "The rising system head shifts each pump to a lower individual discharge",
      "Parallel operation halves static head",
      "Pump speed automatically halves",
      "Pipe area doubles"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Graph+Application",
    "formula": "",
    "explanation": "CORRECT: The rising system head shifts each pump to a lower individual discharge\n\nWHY CORRECT:\nActual duty is the new pump-system intersection, not arithmetic addition at fixed head.\n\nCALCULATION:\nFinal keyed result: The rising system head shifts each pump to a lower individual discharge.\n\nTRAP ANALYSIS (every wrong option):\nB) Parallel operation halves static head: Does not satisfy the governing relation that produces “The rising system head shifts each pump to a lower individual discharge”. Typical slip: wrong share/basis, unit conversion, or omitted term (B treats static head as pump-dependent.).\nC) Pump speed automatically halves: Does not satisfy the governing relation that produces “The rising system head shifts each pump to a lower individual discharge”. Typical slip: wrong share/basis, unit conversion, or omitted term (B treats static head as pump-dependent.).\nD) Pipe area doubles: Does not satisfy the governing relation that produces “The rising system head shifts each pump to a lower individual discharge”. Typical slip: wrong share/basis, unit conversion, or omitted term (B treats static head as pump-dependent.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Operating point = intersection of pump curve(s) with the system curve — not arithmetic nameplate addition at fixed head.\n• Two identical pumps in parallel: total Q < 2× single-pump duty because the system head rises.\n• Static head is a system property; parallel operation does not halve static head.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Series pumps add head at a given Q; re-intersect the system curve.\n• Affinity: Q∝N, H∝N², P∝N³ under similarity.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "schematic-family",
    "diagramSourcePath": "schematic-family/pump-QH-system-parallel (no core Q–H page in extract)"
  },
  {
    "id": 34,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "HHM: turbine selection",
    "question": "Based on the site screening note for a small hydropower scheme, available head is about 320 m while the design discharge remains comparatively small. Which turbine type is the most appropriate first choice for further layout studies?",
    "image": "",
    "options": [
      "Kaplan",
      "Francis",
      "Pelton",
      "Propeller"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Pelton\n\nWHY CORRECT:\nAn impulse Pelton unit suits high head and low flow.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Kaplan: Does not satisfy the governing relation that produces “Pelton”. Typical slip: wrong share/basis, unit conversion, or omitted term (Francis is the plausible medium-head alternative.).\nB) Francis: Does not satisfy the governing relation that produces “Pelton”. Typical slip: wrong share/basis, unit conversion, or omitted term (Francis is the plausible medium-head alternative.).\nD) Propeller: Does not satisfy the governing relation that produces “Pelton”. Typical slip: wrong share/basis, unit conversion, or omitted term (Francis is the plausible medium-head alternative.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: an impulse Pelton unit suits high head and low flow.\n• Keyed answer to lock: Pelton.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 35,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "FM: laminar profile+diagram",
    "question": "For steady Newtonian flow in a circular pipe, the figure shows velocity profiles labelled 1–3 and shear profiles labelled A–C. Which identified pair is consistent with laminar pipe flow?",
    "image": "images/diagrams/civil-flt01/q35-laminar-profiles.jpg",
    "options": [
      "Flat velocity; maximum centreline shear",
      "Parabolic velocity; zero wall shear",
      "Linear velocity; uniform shear",
      "Parabolic velocity; shear rising linearly to a wall maximum"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Diagram+Conceptual",
    "formula": "",
    "explanation": "CORRECT: Parabolic velocity; shear rising linearly to a wall maximum\n\nWHY CORRECT:\nFigure curves 2+C — no-slip Hagen–Poiseuille velocity is parabolic; Newtonian laminar pipe shear is zero on the centreline and rises linearly to a wall maximum.\n\nCALCULATION:\nfigure curves 2+C — no-slip Hagen–Poiseuille velocity is parabolic; Newtonian laminar pipe shear is zero on the centreline and rises linearly to a wall maximum.\nFinal keyed result: Parabolic velocity; shear rising linearly to a wall maximum.\n\nTRAP ANALYSIS (every wrong option):\nA) Flat velocity; maximum centreline shear: Does not satisfy the governing relation that produces “Parabolic velocity; shear rising linearly to a wall maximum”. Typical slip: wrong share/basis, unit conversion, or omitted term (1+A is not laminar pipe; 2+B wrongly zeros wall).\nB) Parabolic velocity; zero wall shear: Does not satisfy the governing relation that produces “Parabolic velocity; shear rising linearly to a wall maximum”. Typical slip: wrong share/basis, unit conversion, or omitted term (1+A is not laminar pipe; 2+B wrongly zeros wall).\nC) Linear velocity; uniform shear: Does not satisfy the governing relation that produces “Parabolic velocity; shear rising linearly to a wall maximum”. Typical slip: wrong share/basis, unit conversion, or omitted term (1+A is not laminar pipe; 2+B wrongly zeros wall).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Pipe laminar (Hagen–Poiseuille): u(r)=umax(1−(r/R)²) — parabola, no-slip at wall.\n• Newtonian laminar shear: τ(r)=τw·(r/R) — zero on centreline, maximum at wall.\n• Flat velocity ≈ turbulent core; linear u + uniform τ ≈ Couette — not this case.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Re=VD/ν; laminar if Re≲2000 for pipes.\n• Wall shear from force balance: τw=(ΔP)R/(2L).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "schematic-family",
    "diagramSourcePath": "schematic-family/laminar-u-tau-profiles (Fluid_pg0024 is manometer MCQs, not profiles)"
  },
  {
    "id": 36,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "HHM: matching+selection",
    "question": "On an equipment-schedule sheet, match (1) Pelton, (2) Francis, (3) Kaplan, (4) centrifugal pump with (p) low-head/high-flow reaction turbine, (q) high-head impulse turbine, (r) medium-head mixed-flow turbine, (s) adds energy to liquid. Which schedule is correct?",
    "image": "",
    "options": [
      "1-p,2-q,3-r,4-s",
      "1-r,2-p,3-q,4-s",
      "1-q,2-p,3-r,4-s",
      "1-q,2-r,3-p,4-s"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Matching Matrix",
    "formula": "",
    "explanation": "CORRECT: 1-q,2-r,3-p,4-s\n\nWHY CORRECT:\nPelton-q, Francis-r, Kaplan-p and pump-s. This uniquely selects “1-q,2-r,3-p,4-s”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) 1-p,2-q,3-r,4-s: Does not satisfy the governing relation that produces “1-q,2-r,3-p,4-s”. Typical slip: wrong share/basis, unit conversion, or omitted term (C interchanges Francis and Kaplan.).\nB) 1-r,2-p,3-q,4-s: Does not satisfy the governing relation that produces “1-q,2-r,3-p,4-s”. Typical slip: wrong share/basis, unit conversion, or omitted term (C interchanges Francis and Kaplan.).\nC) 1-q,2-p,3-r,4-s: Does not satisfy the governing relation that produces “1-q,2-r,3-p,4-s”. Typical slip: wrong share/basis, unit conversion, or omitted term (C interchanges Francis and Kaplan.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: Pelton-q, Francis-r, Kaplan-p and pump-s.\n• Keyed answer to lock: 1-q,2-r,3-p,4-s.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC",
    "matchingMatrix": {
      "caption": "Match hydraulic machines with their descriptions",
      "listITitle": "List-I (Machine)",
      "listIITitle": "List-II (Description)",
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
          "code": "p",
          "text": "Low-head / high-flow reaction turbine"
        },
        {
          "code": "q",
          "text": "High-head impulse turbine"
        },
        {
          "code": "r",
          "text": "Medium-head mixed-flow turbine"
        },
        {
          "code": "s",
          "text": "Adds energy to liquid"
        }
      ],
      "instruction": "Select the correct schedule."
    }
  },
  {
    "id": 37,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "FM: moving vane+momentum",
    "question": "A laboratory jet-impact demonstration uses a 50 mm water jet at 30 m/s striking a flat plate that moves in the jet direction at 10 m/s, with water leaving at the plate’s streamwise speed. Which force-power pair is closest?",
    "image": "",
    "options": [
      "900 N, 9.0 kW",
      "1178 N, 11.8 kW",
      "1571 N, 15.7 kW",
      "785 N, 7.85 kW"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 785 N, 7.85 kW\n\nWHY CORRECT:\nRelative speed 20 m/s → ṁ≈39.3 kg/s; F≈785 N; power=Fu≈7.85 kW.\n\nCALCULATION:\nrelative speed 20 m/s → ṁ≈39.3 kg/s; F≈785 N; power=Fu≈7.85 kW.\nFinal keyed result: 785 N, 7.85 kW.\n\nTRAP ANALYSIS (every wrong option):\nA) 900 N, 9.0 kW: Does not satisfy the governing relation that produces “785 N, 7.85 kW”. Typical slip: wrong share/basis, unit conversion, or omitted term (C uses absolute jet speed for ṁ; B halves relative speed inconsistently; A underestimates ṁ on the r).\nB) 1178 N, 11.8 kW: Does not satisfy the governing relation that produces “785 N, 7.85 kW”. Typical slip: wrong share/basis, unit conversion, or omitted term (C uses absolute jet speed for ṁ; B halves relative speed inconsistently; A underestimates ṁ on the r).\nC) 1571 N, 15.7 kW: Does not satisfy the governing relation that produces “785 N, 7.85 kW”. Typical slip: wrong share/basis, unit conversion, or omitted term (C uses absolute jet speed for ṁ; B halves relative speed inconsistently; A underestimates ṁ on the r).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: relative speed 20 m/s → ṁ≈39.3 kg/s; F≈785 N; power=Fu≈7.85 kW.\n• Keyed answer to lock: 785 N, 7.85 kW.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-GATE→Transco"
  },
  {
    "id": 38,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "HHM: cavitation+practical diagnosis",
    "question": "At pump inspection during a commissioning hold, crackling noise, fluctuating delivery head and pitting marks are concentrated near the impeller eye, while suction-gauge readings approach the liquid vapour pressure for the operating temperature and suction lift is already high. Which diagnosis is most appropriate before changing impeller clearances or bearings?",
    "image": "",
    "options": [
      "Water hammer at delivery valve",
      "Bearing misalignment only",
      "Cavitation",
      "Laminar-flow transition"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Practical/Application",
    "formula": "",
    "explanation": "CORRECT: Cavitation\n\nWHY CORRECT:\nVapour formation and collapse at the eye produce the observed signature.\n\nCALCULATION:\nFinal keyed result: Cavitation.\n\nTRAP ANALYSIS (every wrong option):\nA) Water hammer at delivery valve: Does not satisfy the governing relation that produces “Cavitation”. Typical slip: wrong share/basis, unit conversion, or omitted term (bearing faults do not explain pitting at the hydraulic low-pressure zone.).\nB) Bearing misalignment only: Does not satisfy the governing relation that produces “Cavitation”. Typical slip: wrong share/basis, unit conversion, or omitted term (bearing faults do not explain pitting at the hydraulic low-pressure zone.).\nD) Laminar-flow transition: Does not satisfy the governing relation that produces “Cavitation”. Typical slip: wrong share/basis, unit conversion, or omitted term (bearing faults do not explain pitting at the hydraulic low-pressure zone.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: vapour formation and collapse at the eye produce the observed signature.\n• Keyed answer to lock: Cavitation.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 39,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "HHM: turbine triangles+diagram",
    "question": "Turbine velocity triangles give blade speed u = 40 m/s at inlet and outlet, inlet whirl Vw1 = 80 m/s, and outlet whirl Vw2 = 20 m/s in the same sense as blade motion (values also labelled on the figure). Using Euler’s equation W = u(Vw1 − Vw2)/1000, which specific work is closest?",
    "image": "images/diagrams/civil-flt01/q39-turbine-triangles.jpg",
    "options": [
      "1.2 kJ/kg",
      "2.4 kJ/kg",
      "3.2 kJ/kg",
      "4.0 kJ/kg"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "",
    "explanation": "CORRECT: 2.4 kJ/kg\n\nWHY CORRECT:\nW = u(Vw1 − Vw2)/1000 = 40×(80 − 20)/1000 = 2.4 kJ/kg.\n\nCALCULATION:\nW = u(Vw1 − Vw2)/1000 = 40×(80 − 20)/1000 = 2.4 kJ/kg.\nFinal keyed result: 2.4 kJ/kg.\n\nTRAP ANALYSIS (every wrong option):\nA) 1.2 kJ/kg: Does not satisfy the governing relation that produces “2.4 kJ/kg”. Typical slip: wrong share/basis, unit conversion, or omitted term (C = 3.2 omits outlet whirl; D = 4.0 adds Vw2; A = 1.2 halves the whirl change.).\nC) 3.2 kJ/kg: Does not satisfy the governing relation that produces “2.4 kJ/kg”. Typical slip: wrong share/basis, unit conversion, or omitted term (C = 3.2 omits outlet whirl; D = 4.0 adds Vw2; A = 1.2 halves the whirl change.).\nD) 4.0 kJ/kg: Does not satisfy the governing relation that produces “2.4 kJ/kg”. Typical slip: wrong share/basis, unit conversion, or omitted term (C = 3.2 omits outlet whirl; D = 4.0 adds Vw2; A = 1.2 halves the whirl change.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Euler specific work W=u(Vw1−Vw2)/1000 kJ/kg when u,Vw are in m/s and Vw2 is same-sense as u.\n• This item: u=40, Vw1=80, Vw2=20 → W=40×60/1000=2.4 kJ/kg.\n• Omitting Vw2 → 3.2; adding Vw2 instead of subtracting → 4.0; half whirl change → 1.2.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• If Vw2 is opposite to blade motion, the sign flips to addition inside Euler’s equation.\n• Hydraulic efficiency definitions vary — read whether denominator is V1²/2 or gH.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "schematic-family",
    "diagramSourcePath": "schematic-family/dual-params-q39"
  },
  {
    "id": 40,
    "subject": "Steel Structures",
    "topic": "Steel: eccentric bolts+diagram",
    "question": "An eccentric bracket load P = 50 kN acts in the plane of a four-bolt group arranged on a 120 mm × 180 mm rectangle about the CG, with eccentricity e = 250 mm from the CG toward the load line (bolts numbered 1–4 on the figure). Which bolt is critical (largest vector resultant of direct and torsional shear)?",
    "image": "images/diagrams/civil-flt01/q40-eccentric-bolt-group.jpg",
    "options": [
      "Bolt 1",
      "Bolt 2",
      "Bolt 3",
      "Bolt 4"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Diagram+Conceptual",
    "formula": "",
    "explanation": "CORRECT: Bolt 3\n\nWHY CORRECT:\nBolt 3 (lower-right) has the largest adverse vector sum of direct shear P/4 and torsional shear from M = P e.\n\nCALCULATION:\nBolt 3 (lower-right) has the largest adverse vector sum of direct shear P/4 and torsional shear from M = P e.\nFinal keyed result: Bolt 3.\n\nTRAP ANALYSIS (every wrong option):\nA) Bolt 1: Does not satisfy the governing relation that produces “Bolt 3”. Typical slip: wrong share/basis, unit conversion, or omitted term (farthest bolt is not automatic without vector direction.).\nB) Bolt 2: Does not satisfy the governing relation that produces “Bolt 3”. Typical slip: wrong share/basis, unit conversion, or omitted term (farthest bolt is not automatic without vector direction.).\nD) Bolt 4: Does not satisfy the governing relation that produces “Bolt 3”. Typical slip: wrong share/basis, unit conversion, or omitted term (farthest bolt is not automatic without vector direction.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• In-plane eccentricity: each bolt gets primary shear P/n plus secondary shear (M ri)/Σr² with M=P·e.\n• Critical bolt = largest vector sum of primary and secondary components — not automatically the farthest bolt.\n• Compute about the bolt-group centroid.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Out-of-plane brackets: bolts in tension+shear → interaction (Vb/Vdb)²+(Tb/Tdb)²≤1.\n• Still check pitch, gauge, edge distance after force sizing.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "schematic-family",
    "diagramSourcePath": "schematic-family/dual-params-q40"
  },
  {
    "id": 41,
    "subject": "Steel Structures",
    "topic": "Steel: IS tension limit states",
    "question": "A tension plate has Ag=1800 mm², An=1450 mm², fy=250 MPa and fu=410 MPa (γm0=1.10, γm1=1.25). Which governing capacity is closest after comparing gross yielding and net rupture?",
    "image": "",
    "options": [
      "428 kN rupture",
      "450 kN yielding",
      "380 kN rupture",
      "409 kN yielding"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 409 kN yielding\n\nWHY CORRECT:\nYielding ≈409 kN; rupture ≈428 kN; lesser governs.\n\nCALCULATION:\nyielding ≈409 kN; rupture ≈428 kN; lesser governs.\nFinal keyed result: 409 kN yielding.\n\nTRAP ANALYSIS (every wrong option):\nA) 428 kN rupture: Does not satisfy the governing relation that produces “409 kN yielding”. Typical slip: wrong share/basis, unit conversion, or omitted term (A is a valid non-governing value; C ignores γm0; D understates rupture.).\nB) 450 kN yielding: Does not satisfy the governing relation that produces “409 kN yielding”. Typical slip: wrong share/basis, unit conversion, or omitted term (A is a valid non-governing value; C ignores γm0; D understates rupture.).\nC) 380 kN rupture: Does not satisfy the governing relation that produces “409 kN yielding”. Typical slip: wrong share/basis, unit conversion, or omitted term (A is a valid non-governing value; C ignores γm0; D understates rupture.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: yielding ≈409 kN; rupture ≈428 kN; lesser governs.\n• Keyed answer to lock: 409 kN yielding.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 42,
    "subject": "Steel Structures",
    "topic": "Steel: lacing+AR",
    "question": "In review of a built-up laced column for a workshop building, the designer must confirm whether the lacing system is correctly understood for force transfer under transverse shear. Assertion: lacing makes the component sections act together. Reason: lacing members are always tension-only and need not resist transverse shear. Which conclusion follows?",
    "image": "",
    "options": [
      "Both true; R explains A",
      "Both true; R does not explain A",
      "A false, R true",
      "A true, R false"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Assertion-Reason",
    "formula": "",
    "explanation": "CORRECT: A true, R false\n\nWHY CORRECT:\nA is true; lacing is designed for transverse shear and may experience compression.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Both true; R explains A: Does not satisfy the governing relation that produces “A true, R false”. Typical slip: wrong share/basis, unit conversion, or omitted term (“tension-only” confuses ideal truss action with design forces.).\nB) Both true; R does not explain A: Does not satisfy the governing relation that produces “A true, R false”. Typical slip: wrong share/basis, unit conversion, or omitted term (“tension-only” confuses ideal truss action with design forces.).\nC) A false, R true: Does not satisfy the governing relation that produces “A true, R false”. Typical slip: wrong share/basis, unit conversion, or omitted term (“tension-only” confuses ideal truss action with design forces.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: A is true; lacing is designed for transverse shear and may experience compression.\n• Keyed answer to lock: A true, R false.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 43,
    "subject": "Steel Structures",
    "topic": "Steel: column buckling+governing axis",
    "question": "A built-up column reviewed in the design office has different effective lengths and different radii of gyration about the two principal axes. Which statement correctly identifies the governing buckling check?",
    "image": "",
    "options": [
      "The axis with the larger effective length always governs",
      "The axis with the larger radius of gyration always governs",
      "The axis that produces the larger slenderness ratio Le/r governs the flexural-buckling strength",
      "Both axes may be ignored if the section is compact"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: The axis that produces the larger slenderness ratio Le/r governs the flexural-buckling strength\n\nWHY CORRECT:\nBuckling strength follows the larger slenderness demand.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) The axis with the larger effective length always governs: Does not satisfy the governing relation that produces “The axis that produces the larger slenderness ratio Le/r governs the flexural-buckling strength”. Typical slip: wrong share/basis, unit conversion, or omitted term (A ignores radius; B ignores restraint length.).\nB) The axis with the larger radius of gyration always governs: Does not satisfy the governing relation that produces “The axis that produces the larger slenderness ratio Le/r governs the flexural-buckling strength”. Typical slip: wrong share/basis, unit conversion, or omitted term (A ignores radius; B ignores restraint length.).\nD) Both axes may be ignored if the section is compact: Does not satisfy the governing relation that produces “The axis that produces the larger slenderness ratio Le/r governs the flexural-buckling strength”. Typical slip: wrong share/basis, unit conversion, or omitted term (A ignores radius; B ignores restraint length.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: buckling strength follows the larger slenderness demand.\n• Keyed answer to lock: The axis that produces the larger slenderness ratio Le/r governs the flexural-buckling strength.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 44,
    "subject": "Steel Structures",
    "topic": "Steel: fillet weld terminology",
    "question": "A quality-control engineer records fillet-weld gauge readings and measures the shortest distance from the fillet root to the weld face on a shop connection. Which term is most appropriate for that measured dimension?",
    "image": "",
    "options": [
      "Throat",
      "Leg",
      "Toe",
      "Root gap"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Throat\n\nWHY CORRECT:\nThis is effective throat geometry. This uniquely selects “Throat”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) Leg: Does not satisfy the governing relation that produces “Throat”. Typical slip: wrong share/basis, unit conversion, or omitted term (leg is measured along the connected plate surface.).\nC) Toe: Does not satisfy the governing relation that produces “Throat”. Typical slip: wrong share/basis, unit conversion, or omitted term (leg is measured along the connected plate surface.).\nD) Root gap: Does not satisfy the governing relation that produces “Throat”. Typical slip: wrong share/basis, unit conversion, or omitted term (leg is measured along the connected plate surface.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: this is effective throat geometry.\n• Keyed answer to lock: Throat.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 45,
    "subject": "Steel Structures",
    "topic": "Steel: buckling curve+section class",
    "question": "While selecting the flexural-buckling design curve for a hot-rolled I-section column, the engineer must use the appropriate IS buckling class for the axis considered. Which statement best guides the curve choice?",
    "image": "",
    "options": [
      "Section type, axis of buckling and fabrication class together select the buckling curve",
      "Yield stress alone fixes the curve for every section",
      "Any curve may be used if λ < 40",
      "Curves apply only to angles"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Section type, axis of buckling and fabrication class together select the buckling curve\n\nWHY CORRECT:\nIS curve selection depends on section/axis/imperfection class.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) Yield stress alone fixes the curve for every section: Does not satisfy the governing relation that produces “Section type, axis of buckling and fabrication class together select the buckling curve”. Typical slip: wrong share/basis, unit conversion, or omitted term (B oversimplifies to fy only.).\nC) Any curve may be used if λ < 40: Does not satisfy the governing relation that produces “Section type, axis of buckling and fabrication class together select the buckling curve”. Typical slip: wrong share/basis, unit conversion, or omitted term (B oversimplifies to fy only.).\nD) Curves apply only to angles: Does not satisfy the governing relation that produces “Section type, axis of buckling and fabrication class together select the buckling curve”. Typical slip: wrong share/basis, unit conversion, or omitted term (B oversimplifies to fy only.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Fe415 limiting NA: xu,max/d ≈ 0.48. For d=500 mm → xu,max≈240 mm.\n• Trial xu=225 mm < 240 mm ⇒ under-reinforced (steel yields first) — preferred for ductility.\n• The xu vs xu,max test does not need breadth b.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Fe250 → xu,max/d≈0.53; Fe500 → ≈0.46.\n• If Mu demand > Mu,lim of singly reinforced section → go doubly reinforced.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 46,
    "subject": "Steel Structures",
    "topic": "Steel: plastic moment+section capacity",
    "question": "In plastic-design screening of a compact I-beam, the shape factor about the strong axis is about 1.12 and the elastic section modulus is known. Which plastic moment estimate should the engineer expect relative to the yield moment?",
    "image": "",
    "options": [
      "About 1.12 My",
      "Equal to My always",
      "0.5 My",
      "Twice My for all I-sections"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: About 1.12 My\n\nWHY CORRECT:\nMp = Zp fy ≈ (shape factor)×My for the same fy. This uniquely selects “About 1.12 My”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nMp = Zp fy ≈ (shape factor)×My for the same fy.\nFinal keyed result: About 1.12 My.\n\nTRAP ANALYSIS (every wrong option):\nB) Equal to My always: Does not satisfy the governing relation that produces “About 1.12 My”. Typical slip: wrong share/basis, unit conversion, or omitted term (D invents a universal factor of 2.).\nC) 0.5 My: Does not satisfy the governing relation that produces “About 1.12 My”. Typical slip: wrong share/basis, unit conversion, or omitted term (D invents a universal factor of 2.).\nD) Twice My for all I-sections: Does not satisfy the governing relation that produces “About 1.12 My”. Typical slip: wrong share/basis, unit conversion, or omitted term (D invents a universal factor of 2.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: Mp = Zp fy ≈ (shape factor)×My for the same fy.\n• Keyed answer to lock: About 1.12 My.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-GATE→Transco"
  },
  {
    "id": 47,
    "subject": "Steel Structures",
    "topic": "Steel: staggered holes+diagram+paths",
    "question": "A bolted tension plate has width b = 240 mm, thickness t = 10 mm and hole diameter dh = 22 mm. Path P is a chain section through 2 holes; path Q zig-zags through 3 holes with two stagger credits s = 30 mm on gauge g = 60 mm (paths marked on the figure). Using An = (b − n dh + Σ s²/(4g)) t, which path and net area should be adopted?",
    "image": "images/diagrams/civil-flt01/q47-staggered-net-paths.jpg",
    "options": [
      "P, 1960 mm²",
      "P, 1740 mm²",
      "Q, 2030 mm²",
      "Q, 1810 mm²"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Diagram+Conceptual",
    "formula": "",
    "explanation": "CORRECT: Q, 1810 mm²\n\nWHY CORRECT:\nPath P: An=(240−2×22)×10=1960 mm². Path Q: credits 2×(30²)/(4×60)=7.5 mm → An=(240−66+7.5)×10≈1815 mm² ≈1810. Adopt smaller An → Q.\n\nCALCULATION:\nPath P: An=(240−2×22)×10=1960 mm². Path Q: credits 2×(30²)/(4×60)=7.5 mm → An=(240−66+7.5)×10≈1815 mm² ≈1810. Adopt smaller An → Q.\nFinal keyed result: Q, 1810 mm².\n\nTRAP ANALYSIS (every wrong option):\nA) P, 1960 mm²: Does not satisfy the governing relation that produces “Q, 1810 mm²”. Typical slip: wrong share/basis, unit conversion, or omitted term (A checks only the straight path.).\nB) P, 1740 mm²: Does not satisfy the governing relation that produces “Q, 1810 mm²”. Typical slip: wrong share/basis, unit conversion, or omitted term (A checks only the straight path.).\nC) Q, 2030 mm²: Does not satisfy the governing relation that produces “Q, 1810 mm²”. Typical slip: wrong share/basis, unit conversion, or omitted term (A checks only the straight path.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Net area An=[b − n·dh + Σ(s²/(4g))]·t ; adopt the path with the smaller An.\n• Chain path: no stagger credit. Zig-zag path: add each s²/(4g) along that path.\n• With b=240, t=10, dh=22: path P (2 holes)=1960 mm²; path Q (3 holes + two s=30 on g=60)≈1815≈1810 mm² → adopt Q.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Block shear is a different failure path (shear+tension) — compare separately.\n• Stagger credit cannot make An exceed gross area bt.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "schematic-family",
    "diagramSourcePath": "schematic-family/dual-params-q47"
  },
  {
    "id": 48,
    "subject": "Steel Structures",
    "topic": "Steel: IS bolt pitch+detailing",
    "question": "In shop-drawing review of 20 mm bolts on a tension splice, proposed pitch is 45 mm along the load line. The applicable code minimum is 2.5 times nominal diameter. Which direction is most defensible?",
    "image": "",
    "options": [
      "Accept 45 mm because it exceeds twice diameter",
      "Reduce hole diameter only",
      "Accept if plate is thicker than bolt",
      "Revise pitch to at least 50 mm"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: Revise pitch to at least 50 mm\n\nWHY CORRECT:\nMinimum = 50 mm. This uniquely selects “Revise pitch to at least 50 mm”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nminimum = 50 mm.\nFinal keyed result: Revise pitch to at least 50 mm.\n\nTRAP ANALYSIS (every wrong option):\nA) Accept 45 mm because it exceeds twice diameter: Does not satisfy the governing relation that produces “Revise pitch to at least 50 mm”. Typical slip: wrong share/basis, unit conversion, or omitted term (A uses the wrong detailing multiple.).\nB) Reduce hole diameter only: Does not satisfy the governing relation that produces “Revise pitch to at least 50 mm”. Typical slip: wrong share/basis, unit conversion, or omitted term (A uses the wrong detailing multiple.).\nC) Accept if plate is thicker than bolt: Does not satisfy the governing relation that produces “Revise pitch to at least 50 mm”. Typical slip: wrong share/basis, unit conversion, or omitted term (A uses the wrong detailing multiple.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• In-plane eccentricity: each bolt gets primary shear P/n plus secondary shear (M ri)/Σr² with M=P·e.\n• Critical bolt = largest vector sum of primary and secondary components — not automatically the farthest bolt.\n• Compute about the bolt-group centroid.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Out-of-plane brackets: bolts in tension+shear → interaction (Vb/Vdb)²+(Tb/Tdb)²≤1.\n• Still check pitch, gauge, edge distance after force sizing.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 49,
    "subject": "Steel Structures",
    "topic": "Steel: weld quality+site acceptance",
    "question": "During site weld inspection of a fillet connecting a bracket to a column flange, undercut depth exceeds the project acceptance limit along a primary load path, although visual appearance is otherwise neat. Which action is most defensible before loading?",
    "image": "",
    "options": [
      "Grind/repair to approved procedure, re-inspect, then accept only if limits are met",
      "Accept because the throat looks large",
      "Fill undercut with paint only",
      "Ignore undercut on the compression side always"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Grind/repair to approved procedure, re-inspect, then accept only if limits are met\n\nWHY CORRECT:\nUndercut is a rejectable discontinuity on a primary path until repaired to procedure.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) Accept because the throat looks large: Does not satisfy the governing relation that produces “Grind/repair to approved procedure, re-inspect, then accept only if limits are met”. Typical slip: wrong share/basis, unit conversion, or omitted term (B confuses appearance with acceptance criteria.).\nC) Fill undercut with paint only: Does not satisfy the governing relation that produces “Grind/repair to approved procedure, re-inspect, then accept only if limits are met”. Typical slip: wrong share/basis, unit conversion, or omitted term (B confuses appearance with acceptance criteria.).\nD) Ignore undercut on the compression side always: Does not satisfy the governing relation that produces “Grind/repair to approved procedure, re-inspect, then accept only if limits are met”. Typical slip: wrong share/basis, unit conversion, or omitted term (B confuses appearance with acceptance criteria.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: undercut is a rejectable discontinuity on a primary path until repaired to procedure.\n• Keyed answer to lock: Grind/repair to approved procedure, re-inspect, then accept only if limits are met.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 50,
    "subject": "Steel Structures",
    "topic": "Steel: column buckling+slenderness path",
    "question": "At a design-review meeting for a pinned–pinned steel strut, the governing slenderness about the weak axis is clearly larger than about the strong axis. Which buckling check should control the member design strength?",
    "image": "",
    "options": [
      "Strong-axis curve only",
      "Local flange buckling only",
      "Shear buckling of the web only",
      "Weak-axis (larger λ) flexural buckling"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Weak-axis (larger λ) flexural buckling\n\nWHY CORRECT:\nThe larger Le/r governs flexural-buckling strength.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Strong-axis curve only: Does not satisfy the governing relation that produces “Weak-axis (larger λ) flexural buckling”. Typical slip: wrong share/basis, unit conversion, or omitted term (A ignores the weak axis.).\nB) Local flange buckling only: Does not satisfy the governing relation that produces “Weak-axis (larger λ) flexural buckling”. Typical slip: wrong share/basis, unit conversion, or omitted term (A ignores the weak axis.).\nC) Shear buckling of the web only: Does not satisfy the governing relation that produces “Weak-axis (larger λ) flexural buckling”. Typical slip: wrong share/basis, unit conversion, or omitted term (A ignores the weak axis.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• λ = Le / r_min with Le and r in the SAME unit (convert 2.1 m → 2100 mm before dividing by 35 mm).\n• If the stem already gives effective length Le, do NOT multiply again by end-factor K.\n• Larger r_min ⇒ smaller λ ⇒ higher buckling strength (for the same Le).\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Both-ends-fixed ideal K=0.5 (IS often ~0.65 practical) → Le=K·L_geo, then λ=Le/r.\n• If r is halved, λ doubles (e.g. 60 → 120) — classic distractor.\n• Euler assumes straight + concentric + elastic; crookedness/eccentricity voids bare Euler.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 51,
    "subject": "Steel Structures",
    "topic": "Steel: biaxial purlin design",
    "question": "While checking an inclined-roof purlin under combined gravity and wind-reversal actions, the resultant loading is found to be oblique to the section principal axes. Which design approach is most appropriate for the strength check?",
    "image": "",
    "options": [
      "Major-axis bending only",
      "Axial tension only",
      "Minor-axis bending only",
      "Biaxial bending interaction with stability and serviceability checks"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Biaxial bending interaction with stability and serviceability checks\n\nWHY CORRECT:\nOblique loading resolves about both axes, and restraint affects stability.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Major-axis bending only: Does not satisfy the governing relation that produces “Biaxial bending interaction with stability and serviceability checks”. Typical slip: wrong share/basis, unit conversion, or omitted term (A ignores the weak-axis component.).\nB) Axial tension only: Does not satisfy the governing relation that produces “Biaxial bending interaction with stability and serviceability checks”. Typical slip: wrong share/basis, unit conversion, or omitted term (A ignores the weak-axis component.).\nC) Minor-axis bending only: Does not satisfy the governing relation that produces “Biaxial bending interaction with stability and serviceability checks”. Typical slip: wrong share/basis, unit conversion, or omitted term (A ignores the weak-axis component.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: oblique loading resolves about both axes, and restraint affects stability.\n• Keyed answer to lock: Biaxial bending interaction with stability and serviceability checks.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 52,
    "subject": "Foundation Engineering",
    "topic": "Foundation: compensated raft",
    "question": "Concept design of a basement raft notes that excavation removes a substantial overburden before building loads are applied to the compensated foundation. Which benefit should the geotechnical engineer expect from that compensation approach?",
    "image": "",
    "options": [
      "Guaranteed absence of heave",
      "Zero gross contact pressure",
      "No bearing-capacity check",
      "Reduced net stress increase and settlement demand"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Reduced net stress increase and settlement demand\n\nWHY CORRECT:\nExcavated soil weight offsets part of structural pressure; it does not cancel gross pressure or eliminate geotechnical checks.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Guaranteed absence of heave: Does not satisfy the governing relation that produces “Reduced net stress increase and settlement demand”. Typical slip: wrong share/basis, unit conversion, or omitted term (B confuses reduced net pressure with zero gross pressure.).\nB) Zero gross contact pressure: Does not satisfy the governing relation that produces “Reduced net stress increase and settlement demand”. Typical slip: wrong share/basis, unit conversion, or omitted term (B confuses reduced net pressure with zero gross pressure.).\nC) No bearing-capacity check: Does not satisfy the governing relation that produces “Reduced net stress increase and settlement demand”. Typical slip: wrong share/basis, unit conversion, or omitted term (B confuses reduced net pressure with zero gross pressure.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: excavated soil weight offsets part of structural pressure; it does not cancel gross pressure or eliminate geotechnical checks.\n• Keyed answer to lock: Reduced net stress increase and settlement demand.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-GATE→Transco"
  },
  {
    "id": 53,
    "subject": "Foundation Engineering",
    "topic": "Foundation: layered settlement+diagram",
    "question": "Primary consolidation under a shallow footing uses two clay layers (also tabulated on the figure): Layer 1 — H1 = 2.0 m, e01 = 1.00, Cc1 = 0.20, σ′01 = 100 kPa, Δσ1 = 100 kPa; Layer 2 — H2 = 2.0 m, e02 = 0.90, Cc2 = 0.20, σ′02 = 200 kPa, Δσ2 = 100 kPa. Which total primary consolidation settlement is closest?",
    "image": "images/diagrams/civil-flt01/q53-layered-footing.jpg",
    "options": [
      "42 mm",
      "68 mm",
      "126 mm",
      "95 mm"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "",
    "explanation": "CORRECT: 95 mm\n\nWHY CORRECT:\nSc1=0.20×2.0/(1+1.00)×log10(2)=0.0602 m≈60 mm; Sc2=0.20×2.0/(1+0.90)×log10(300/200)≈0.0371 m≈37 mm; total ≈97 mm → closest 95 mm.\n\nCALCULATION:\nSc1=0.20×2.0/(1+1.00)×log10(2)=0.0602 m≈60 mm; Sc2=0.20×2.0/(1+0.90)×log10(300/200)≈0.0371 m≈37 mm; total ≈97 mm → closest 95 mm.\nFinal keyed result: 95 mm.\n\nTRAP ANALYSIS (every wrong option):\nA) 42 mm: Does not satisfy the governing relation that produces “95 mm”. Typical slip: wrong share/basis, unit conversion, or omitted term (C applies the larger stress increment to both layers.).\nB) 68 mm: Does not satisfy the governing relation that produces “95 mm”. Typical slip: wrong share/basis, unit conversion, or omitted term (C applies the larger stress increment to both layers.).\nC) 126 mm: Does not satisfy the governing relation that produces “95 mm”. Typical slip: wrong share/basis, unit conversion, or omitted term (C applies the larger stress increment to both layers.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Primary consolidation per layer: Sc=[Cc·H/(1+e0)]·log10((σ′0+Δσ)/σ′0); sum layers.\n• Use log10 (not ln). Wrong Δσ or σ′0 on a layer is the usual trap.\n• NC clay uses Cc; OC clay may use Cr until preconsolidation pressure.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Time: Tv=cv t / d²; double drainage halves d ⇒ time /4 for same U.\n• Sand: immediate settlement dominates; clay: consolidation often governs.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "schematic-family",
    "diagramSourcePath": "schematic-family/dual-params-q53"
  },
  {
    "id": 54,
    "subject": "Foundation Engineering",
    "topic": "Foundation: property line+selection",
    "question": "Layout review for an exterior column near a property boundary shows a large moment, and a centred isolated footing would cross the boundary line. Which foundation arrangement is most appropriate for the given constraints?",
    "image": "",
    "options": [
      "Smaller eccentric isolated footing",
      "Combined or strap footing designed about the load resultant",
      "Unconnected pedestal",
      "Interior-column pile only"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Combined or strap footing designed about the load resultant\n\nWHY CORRECT:\nCoupling controls eccentricity and soil-pressure distribution without trespass.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Smaller eccentric isolated footing: Does not satisfy the governing relation that produces “Combined or strap footing designed about the load resultant”. Typical slip: wrong share/basis, unit conversion, or omitted term (A worsens eccentric pressure.).\nC) Unconnected pedestal: Does not satisfy the governing relation that produces “Combined or strap footing designed about the load resultant”. Typical slip: wrong share/basis, unit conversion, or omitted term (A worsens eccentric pressure.).\nD) Interior-column pile only: Does not satisfy the governing relation that produces “Combined or strap footing designed about the load resultant”. Typical slip: wrong share/basis, unit conversion, or omitted term (A worsens eccentric pressure.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: coupling controls eccentricity and soil-pressure distribution without trespass.\n• Keyed answer to lock: Combined or strap footing designed about the load resultant.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 55,
    "subject": "Foundation Engineering",
    "topic": "Foundation: bearing vs settlement governing",
    "question": "A square footing sized for allowable net bearing pressure under the service column load still shows a predicted consolidation settlement larger than the project serviceability limit in the geotechnical report, even though bearing-capacity factors of safety remain acceptable on paper for the same footing size. Which conclusion should the approving engineer record?",
    "image": "",
    "options": [
      "Bearing may pass while settlement still governs; enlarge/deepen the footing, improve the ground, or revise until both criteria are satisfied",
      "Accept because bearing pressure governs all foundation checks",
      "Reduce only the concrete grade of the footing",
      "Ignore settlement for footings shallower than 1.5 m"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Bearing may pass while settlement still governs; enlarge/deepen the footing, improve the ground, or revise until both criteria are satisfied\n\nWHY CORRECT:\nBearing capacity and settlement are independent acceptance criteria.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) Accept because bearing pressure governs all foundation checks: Does not satisfy the governing relation that produces “Bearing may pass while settlement still governs; enlarge/deepen the footing, improve the ground, or revise until both criteria are satisfied”. Typical slip: wrong share/basis, unit conversion, or omitted term (B collapses both into one check.).\nC) Reduce only the concrete grade of the footing: Does not satisfy the governing relation that produces “Bearing may pass while settlement still governs; enlarge/deepen the footing, improve the ground, or revise until both criteria are satisfied”. Typical slip: wrong share/basis, unit conversion, or omitted term (B collapses both into one check.).\nD) Ignore settlement for footings shallower than 1.5 m: Does not satisfy the governing relation that produces “Bearing may pass while settlement still governs; enlarge/deepen the footing, improve the ground, or revise until both criteria are satisfied”. Typical slip: wrong share/basis, unit conversion, or omitted term (B collapses both into one check.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Primary consolidation per layer: Sc=[Cc·H/(1+e0)]·log10((σ′0+Δσ)/σ′0); sum layers.\n• Use log10 (not ln). Wrong Δσ or σ′0 on a layer is the usual trap.\n• NC clay uses Cc; OC clay may use Cr until preconsolidation pressure.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Time: Tv=cv t / d²; double drainage halves d ⇒ time /4 for same U.\n• Sand: immediate settlement dominates; clay: consolidation often governs.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 56,
    "subject": "Foundation Engineering",
    "topic": "Foundation: safe bearing",
    "question": "In preliminary footing sizing for a lightly loaded column, the net ultimate bearing capacity from the soil report is 600 kPa and the adopted factor of safety against bearing failure is 3. Which net safe bearing value is closest?",
    "image": "",
    "options": [
      "600 kPa",
      "1800 kPa",
      "200 kPa",
      "100 kPa"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 200 kPa\n\nWHY CORRECT:\n600/3 = 200 kPa. This uniquely selects “200 kPa”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\n600/3 = 200 kPa.\nFinal keyed result: 200 kPa.\n\nTRAP ANALYSIS (every wrong option):\nA) 600 kPa: Does not satisfy the governing relation that produces “200 kPa”. Typical slip: wrong share/basis, unit conversion, or omitted term (B multiplies by the safety factor.).\nB) 1800 kPa: Does not satisfy the governing relation that produces “200 kPa”. Typical slip: wrong share/basis, unit conversion, or omitted term (B multiplies by the safety factor.).\nD) 100 kPa: Does not satisfy the governing relation that produces “200 kPa”. Typical slip: wrong share/basis, unit conversion, or omitted term (B multiplies by the safety factor.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: 600/3 = 200 kPa.\n• Keyed answer to lock: 200 kPa.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 57,
    "subject": "Foundation Engineering",
    "topic": "Foundation: pile group+diagram+failure",
    "question": "A pile group in clay uses a closely spaced 3×3 layout of 9 piles at centre-to-centre spacing s = 3D, with the enclosing block failure surface marked on the figure. Which capacity procedure is most defensible?",
    "image": "images/diagrams/civil-flt01/q57-pile-group.jpg",
    "options": [
      "Use individual-pile sum only",
      "Compare individual sum with block capacity, adopt the lower, then check settlement",
      "Use block capacity only and ignore settlement",
      "Assume group efficiency exceeds unity"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Diagram+Conceptual",
    "formula": "",
    "explanation": "CORRECT: Compare individual sum with block capacity, adopt the lower, then check settlement\n\nWHY CORRECT:\nClose spacing permits block action; settlement remains separate.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Use individual-pile sum only: Does not satisfy the governing relation that produces “Compare individual sum with block capacity, adopt the lower, then check settlement”. Typical slip: wrong share/basis, unit conversion, or omitted term (A ignores the figure’s plausible block mechanism.).\nC) Use block capacity only and ignore settlement: Does not satisfy the governing relation that produces “Compare individual sum with block capacity, adopt the lower, then check settlement”. Typical slip: wrong share/basis, unit conversion, or omitted term (A ignores the figure’s plausible block mechanism.).\nD) Assume group efficiency exceeds unity: Does not satisfy the governing relation that produces “Compare individual sum with block capacity, adopt the lower, then check settlement”. Typical slip: wrong share/basis, unit conversion, or omitted term (A ignores the figure’s plausible block mechanism.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Close spacing (e.g. s=3D): compute BOTH ΣQ_individual and block capacity; adopt the lesser.\n• Settlement of the group is a separate serviceability check — not skipped when capacity governs.\n• Do not assume group efficiency η>1 without a stated basis.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Block capacity in clay ≈ perimeter cohesion×length×α + tip on block area (method as per stem).\n• Negative skin friction when surrounding fill settles around piles.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "schematic-family",
    "diagramSourcePath": "schematic-family/dual-params-q57"
  },
  {
    "id": 58,
    "subject": "Foundation Engineering",
    "topic": "Foundation: plate-load table+interpretation",
    "question": "From a plate-load test table, shows pressure 100, 200, 300 and 400 kPa with settlements 2, 5, 11 and 25 mm. If allowable settlement is 12 mm and no clear shear break occurs, which reported allowable pressure is most defensible by interpolation?",
    "image": "",
    "options": [
      "300 kPa",
      "400 kPa",
      "325 kPa",
      "307 kPa"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Table-Based",
    "formula": "",
    "explanation": "CORRECT: 307 kPa\n\nWHY CORRECT:\nFrom 11 to 25 mm over 100 kPa, one additional millimetre gives about 7.1 kPa; ≈307 kPa.\n\nCALCULATION:\nfrom 11 to 25 mm over 100 kPa, one additional millimetre gives about 7.1 kPa; ≈307 kPa.\nFinal keyed result: 307 kPa.\n\nTRAP ANALYSIS (every wrong option):\nA) 300 kPa: Does not satisfy the governing relation that produces “307 kPa”. Typical slip: wrong share/basis, unit conversion, or omitted term (A is conservative but not the requested interpolation.).\nB) 400 kPa: Does not satisfy the governing relation that produces “307 kPa”. Typical slip: wrong share/basis, unit conversion, or omitted term (A is conservative but not the requested interpolation.).\nC) 325 kPa: Does not satisfy the governing relation that produces “307 kPa”. Typical slip: wrong share/basis, unit conversion, or omitted term (A is conservative but not the requested interpolation.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: from 11 to 25 mm over 100 kPa, one additional millimetre gives about 7.1 kPa; ≈307 kPa.\n• Keyed answer to lock: 307 kPa.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC",
    "dataTable": {
      "caption": "Plate-load test pressure–settlement record",
      "headers": [
        "Pressure (kPa)",
        "Settlement (mm)"
      ],
      "rows": [
        [
          "100",
          "2"
        ],
        [
          "200",
          "5"
        ],
        [
          "300",
          "11"
        ],
        [
          "400",
          "25"
        ]
      ]
    }
  },
  {
    "id": 59,
    "subject": "Foundation Engineering",
    "topic": "Foundation: pile test+criteria",
    "question": "In proof-load review, a pile settles 18 mm at 900 kN and rebounds 6 mm. A settlement rule permits 10 mm net settlement by linear scaling, while a separate working-load cap is half the test load. Which restriction governs?",
    "image": "",
    "options": [
      "900 kN",
      "750 kN",
      "450 kN",
      "300 kN"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 450 kN\n\nWHY CORRECT:\nNet =12 mm; settlement criterion ≈750 kN, but separate cap =450 kN.\n\nCALCULATION:\nnet =12 mm; settlement criterion ≈750 kN, but separate cap =450 kN.\nFinal keyed result: 450 kN.\n\nTRAP ANALYSIS (every wrong option):\nA) 900 kN: Does not satisfy the governing relation that produces “450 kN”. Typical slip: wrong share/basis, unit conversion, or omitted term (B ignores the second restriction.).\nB) 750 kN: Does not satisfy the governing relation that produces “450 kN”. Typical slip: wrong share/basis, unit conversion, or omitted term (B ignores the second restriction.).\nD) 300 kN: Does not satisfy the governing relation that produces “450 kN”. Typical slip: wrong share/basis, unit conversion, or omitted term (B ignores the second restriction.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Close spacing (e.g. s=3D): compute BOTH ΣQ_individual and block capacity; adopt the lesser.\n• Settlement of the group is a separate serviceability check — not skipped when capacity governs.\n• Do not assume group efficiency η>1 without a stated basis.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Block capacity in clay ≈ perimeter cohesion×length×α + tip on block area (method as per stem).\n• Negative skin friction when surrounding fill settles around piles.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 60,
    "subject": "Foundation Engineering",
    "topic": "Foundation: adjacent excavation+practical",
    "question": "Beside an existing shallow footing supporting a masonry wall, excavation for a new service trench has produced local ground loss and fresh stair-step cracks in the wall, with no temporary support yet installed and vibration from construction plant still ongoing nearby. Which immediate engineering response is most defensible before works continue?",
    "image": "",
    "options": [
      "Pause and secure the work, monitor movement, assess undermining, and design support/underpinning before resuming",
      "Deepen excavation quickly",
      "Grout cracks cosmetically",
      "Reduce concrete grade in the new footing"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Practical/Application",
    "formula": "",
    "explanation": "CORRECT: Pause and secure the work, monitor movement, assess undermining, and design support/underpinning before resuming\n\nWHY CORRECT:\nTemporary stability and the existing footing’s support must be secured before work resumes.\n\nCALCULATION:\nFinal keyed result: Pause and secure the work, monitor movement, assess undermining, and design support/underpinning before resuming.\n\nTRAP ANALYSIS (every wrong option):\nB) Deepen excavation quickly: Does not satisfy the governing relation that produces “Pause and secure the work, monitor movement, assess undermining, and design support/underpinning before resuming”. Typical slip: wrong share/basis, unit conversion, or omitted term (C treats the symptom, not ground loss.).\nC) Grout cracks cosmetically: Does not satisfy the governing relation that produces “Pause and secure the work, monitor movement, assess undermining, and design support/underpinning before resuming”. Typical slip: wrong share/basis, unit conversion, or omitted term (C treats the symptom, not ground loss.).\nD) Reduce concrete grade in the new footing: Does not satisfy the governing relation that produces “Pause and secure the work, monitor movement, assess undermining, and design support/underpinning before resuming”. Typical slip: wrong share/basis, unit conversion, or omitted term (C treats the symptom, not ground loss.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: temporary stability and the existing footing’s support must be secured before work resumes.\n• Keyed answer to lock: Pause and secure the work, monitor movement, assess undermining, and design support/underpinning before resuming.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 61,
    "subject": "Foundation Engineering",
    "topic": "Foundation: strap action",
    "question": "Detailing of a property-line foundation uses a stiff strap that connects the exterior and interior footings and is intentionally isolated from soil bearing along its length. Which role should the designer assign to the strap?",
    "image": "",
    "options": [
      "Drain groundwater",
      "Carry uniform soil pressure as a raft",
      "Transfer moment so footing reactions are better centred",
      "Remove the exterior column load"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Transfer moment so footing reactions are better centred\n\nWHY CORRECT:\nThe strap couples footing moments/reactions. This uniquely selects “Transfer moment so footing reactions are better centred”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Drain groundwater: Does not satisfy the governing relation that produces “Transfer moment so footing reactions are better centred”. Typical slip: wrong share/basis, unit conversion, or omitted term (B contradicts the stated isolation from soil.).\nB) Carry uniform soil pressure as a raft: Does not satisfy the governing relation that produces “Transfer moment so footing reactions are better centred”. Typical slip: wrong share/basis, unit conversion, or omitted term (B contradicts the stated isolation from soil.).\nD) Remove the exterior column load: Does not satisfy the governing relation that produces “Transfer moment so footing reactions are better centred”. Typical slip: wrong share/basis, unit conversion, or omitted term (B contradicts the stated isolation from soil.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: the strap couples footing moments/reactions.\n• Keyed answer to lock: Transfer moment so footing reactions are better centred.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 62,
    "subject": "Soil Mechanics",
    "topic": "Soil: flow net+diagram",
    "question": "Beneath a sheet-pile cutoff, the flow net shows Nf = 4 flow channels, Nd = 12 potential drops and head loss H = 6 m across the domain (counts also readable on the figure). For k = 4×10⁻⁵ m/s per metre width, which seepage discharge q = kH(Nf/Nd) is closest?",
    "image": "images/diagrams/civil-flt01/q62-flow-net.jpg",
    "options": [
      "\\(8×10^{-5}\\) m³/s",
      "\\(2.4×10^{-4}\\) m³/s",
      "\\(1.2×10^{-4}\\) m³/s",
      "\\(4×10^{-5}\\) m³/s"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Numerical+Diagram",
    "formula": "",
    "explanation": "CORRECT: \\(8×10^{-5}\\) m³/s\n\nWHY CORRECT:\n\\(kH(N_f/N_d)=4×10^{-5}×6×4/12=8×10^{-5}\\). This uniquely selects “\\(8×10^{-5}\\) m³/s”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\n\\(kH(N_f/N_d)=4×10^{-5}×6×4/12=8×10^{-5}\\).\nFinal keyed result: \\(8×10^{-5}\\) m³/s.\n\nTRAP ANALYSIS (every wrong option):\nB) \\(2.4×10^{-4}\\) m³/s: Does not satisfy the governing relation that produces “\\(8×10^{-5}\\) m³/s”. Typical slip: wrong share/basis, unit conversion, or omitted term (B omits division by drops.).\nC) \\(1.2×10^{-4}\\) m³/s: Does not satisfy the governing relation that produces “\\(8×10^{-5}\\) m³/s”. Typical slip: wrong share/basis, unit conversion, or omitted term (B omits division by drops.).\nD) \\(4×10^{-5}\\) m³/s: Does not satisfy the governing relation that produces “\\(8×10^{-5}\\) m³/s”. Typical slip: wrong share/basis, unit conversion, or omitted term (B omits division by drops.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Discharge per unit width q = k H (Nf/Nd).\n• With k=4×10⁻⁵, H=6, Nf=4, Nd=12 → q=4e-5·6·4/12=8×10⁻⁵ m³/s.\n• Omitting /Nd inflates q (e.g. to 2.4×10⁻⁴) — classic trap.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Exit gradient ie=Δh/Δl at exit; compare with ic=(G−1)/(1+e).\n• Deeper sheet-pile embedment usually increases Nd and lowers q and ie.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "core",
    "diagramSourcePath": "civil-core-diagrams/Soil/Soil_pg0076.jpg"
  },
  {
    "id": 63,
    "subject": "Soil Mechanics",
    "topic": "Soil: phase relations+numerical",
    "question": "Laboratory reporting gives moist unit weight 19.2 kN/m³, water content 20%, Gs=2.70 and γw=9.81 kN/m³. Which dry unit weight and degree of saturation pair is closest?",
    "image": "",
    "options": [
      "16.0 kN/m³, 82%",
      "15.4 kN/m³, 75%",
      "17.0 kN/m³, 96%",
      "19.2 kN/m³, 100%"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 16.0 kN/m³, 82%\n\nWHY CORRECT:\nDry =16.0; e≈0.655; S≈82.4%. This uniquely selects “16.0 kN/m³, 82%”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\ndry =16.0; e≈0.655; S≈82.4%.\nFinal keyed result: 16.0 kN/m³, 82%.\n\nTRAP ANALYSIS (every wrong option):\nB) 15.4 kN/m³, 75%: Does not satisfy the governing relation that produces “16.0 kN/m³, 82%”. Typical slip: wrong share/basis, unit conversion, or omitted term (B understates γd; D fails to remove water mass.).\nC) 17.0 kN/m³, 96%: Does not satisfy the governing relation that produces “16.0 kN/m³, 82%”. Typical slip: wrong share/basis, unit conversion, or omitted term (B understates γd; D fails to remove water mass.).\nD) 19.2 kN/m³, 100%: Does not satisfy the governing relation that produces “16.0 kN/m³, 82%”. Typical slip: wrong share/basis, unit conversion, or omitted term (B understates γd; D fails to remove water mass.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: dry =16.0; e≈0.655; S≈82.4%.\n• Keyed answer to lock: 16.0 kN/m³, 82%.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 64,
    "subject": "Soil Mechanics",
    "topic": "Soil: Atterberg limits",
    "question": "From Atterberg classification tests on a remoulded clay sample, the liquid limit is recorded as 48% and the plastic limit as 21%. Which plasticity index should the engineer report for classification?",
    "image": "",
    "options": [
      "69%",
      "27%",
      "21%",
      "2.29%"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 27%\n\nWHY CORRECT:\n48−21 =27%. This uniquely selects “27%”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\n48−21 =27%.\nFinal keyed result: 27%.\n\nTRAP ANALYSIS (every wrong option):\nA) 69%: Does not satisfy the governing relation that produces “27%”. Typical slip: wrong share/basis, unit conversion, or omitted term (A adds the limits.).\nC) 21%: Does not satisfy the governing relation that produces “27%”. Typical slip: wrong share/basis, unit conversion, or omitted term (A adds the limits.).\nD) 2.29%: Does not satisfy the governing relation that produces “27%”. Typical slip: wrong share/basis, unit conversion, or omitted term (A adds the limits.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: 48−21 =27%.\n• Keyed answer to lock: 27%.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 65,
    "subject": "Soil Mechanics",
    "topic": "Soil: retaining wall+water pressure",
    "question": "After heavy rain, granular backfill drains behind a retaining wall are found blocked and the water level in the backfill has risen markedly. Which consequence should the engineer expect for lateral earth pressure demand?",
    "image": "",
    "options": [
      "Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly",
      "Soil thrust becomes zero because submerged unit weight is lower",
      "Only wall self-weight changes",
      "Active coefficient becomes unity automatically"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly\n\nWHY CORRECT:\nWater pressure is superposed on effective soil pressure.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) Soil thrust becomes zero because submerged unit weight is lower: Does not satisfy the governing relation that produces “Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly”. Typical slip: wrong share/basis, unit conversion, or omitted term (B notices buoyancy but omits hydrostatic loading.).\nC) Only wall self-weight changes: Does not satisfy the governing relation that produces “Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly”. Typical slip: wrong share/basis, unit conversion, or omitted term (B notices buoyancy but omits hydrostatic loading.).\nD) Active coefficient becomes unity automatically: Does not satisfy the governing relation that produces “Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly”. Typical slip: wrong share/basis, unit conversion, or omitted term (B notices buoyancy but omits hydrostatic loading.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: water pressure is superposed on effective soil pressure.\n• Keyed answer to lock: Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 66,
    "subject": "Soil Mechanics",
    "topic": "Soil: consolidation+drainage path",
    "question": "Ground-improvement review of a clay layer shows that 90% consolidation was achieved in 4 years with vertical drains of a given spacing under the embankment loading. Which interpretation of drain effectiveness is most appropriate?",
    "image": "",
    "options": [
      "2 years",
      "8 years",
      "16 years",
      "4 years"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 16 years\n\nWHY CORRECT:\nDrainage path doubles, so time becomes fourfold =16 years.\n\nCALCULATION:\ndrainage path doubles, so time becomes fourfold =16 years.\nFinal keyed result: 16 years.\n\nTRAP ANALYSIS (every wrong option):\nA) 2 years: Does not satisfy the governing relation that produces “16 years”. Typical slip: wrong share/basis, unit conversion, or omitted term (B assumes a linear path-time relation.).\nB) 8 years: Does not satisfy the governing relation that produces “16 years”. Typical slip: wrong share/basis, unit conversion, or omitted term (B assumes a linear path-time relation.).\nD) 4 years: Does not satisfy the governing relation that produces “16 years”. Typical slip: wrong share/basis, unit conversion, or omitted term (B assumes a linear path-time relation.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Primary consolidation per layer: Sc=[Cc·H/(1+e0)]·log10((σ′0+Δσ)/σ′0); sum layers.\n• Use log10 (not ln). Wrong Δσ or σ′0 on a layer is the usual trap.\n• NC clay uses Cc; OC clay may use Cr until preconsolidation pressure.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Time: Tv=cv t / d²; double drainage halves d ⇒ time /4 for same U.\n• Sand: immediate settlement dominates; clay: consolidation often governs.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-GATE→Transco"
  },
  {
    "id": 67,
    "subject": "Soil Mechanics",
    "topic": "Soil: critical gradient",
    "question": "For excavation dewatering in a sand stratum, laboratory tests give specific gravity 2.65 and void ratio 0.65 for the in-situ state. Which upward hydraulic gradient is closest to the onset of boiling?",
    "image": "",
    "options": [
      "0.65",
      "1.00",
      "1.65",
      "2.65"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 1.00\n\nWHY CORRECT:\n\\((2.65−1)/(1+0.65)=1.0\\). This uniquely selects “1.00”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\n\\((2.65−1)/(1+0.65)=1.0\\).\nFinal keyed result: 1.00.\n\nTRAP ANALYSIS (every wrong option):\nA) 0.65: Does not satisfy the governing relation that produces “1.00”. Typical slip: wrong share/basis, unit conversion, or omitted term (C uses only the numerator.).\nC) 1.65: Does not satisfy the governing relation that produces “1.00”. Typical slip: wrong share/basis, unit conversion, or omitted term (C uses only the numerator.).\nD) 2.65: Does not satisfy the governing relation that produces “1.00”. Typical slip: wrong share/basis, unit conversion, or omitted term (C uses only the numerator.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: \\((2.65−1)/(1+0.65)=1.0\\).\n• Keyed answer to lock: 1.00.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 68,
    "subject": "Soil Mechanics",
    "topic": "Soil: Proctor+graph+acceptance",
    "question": "Embankment QA uses Proctor curves for standard and higher compactive effort with field point F marked (curves and F on the figure). Acceptance requires relative compaction ≥ 95% of MDD of the higher-effort curve. Which conclusion about the field compaction state is closest?",
    "image": "images/diagrams/civil-flt01/q68-proctor-curves.jpg",
    "options": [
      "Higher effort lowers maximum dry density",
      "F lies above the zero-air-void line",
      "Effort does not shift OMC",
      "Higher effort gives higher maximum dry density/lower OMC, but F fails the shown relative-compaction criterion"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Graph+Application",
    "formula": "",
    "explanation": "CORRECT: Higher effort gives higher maximum dry density/lower OMC, but F fails the shown relative-compaction criterion\n\nWHY CORRECT:\nHigher effort raises MDD and lowers OMC; F is below the 95% MDD acceptance line of the higher-effort curve.\n\nCALCULATION:\nhigher effort raises MDD and lowers OMC; F is below the 95% MDD acceptance line of the higher-effort curve.\nFinal keyed result: Higher effort gives higher maximum dry density/lower OMC, but F fails the shown relative-compaction criterion.\n\nTRAP ANALYSIS (every wrong option):\nA) Higher effort lowers maximum dry density: Does not satisfy the governing relation that produces “Higher effort gives higher maximum dry density/lower OMC, but F fails the shown relative-compaction criterion”. Typical slip: wrong share/basis, unit conversion, or omitted term (B treats an impossible region above ZAV as valid.).\nB) F lies above the zero-air-void line: Does not satisfy the governing relation that produces “Higher effort gives higher maximum dry density/lower OMC, but F fails the shown relative-compaction criterion”. Typical slip: wrong share/basis, unit conversion, or omitted term (B treats an impossible region above ZAV as valid.).\nC) Effort does not shift OMC: Does not satisfy the governing relation that produces “Higher effort gives higher maximum dry density/lower OMC, but F fails the shown relative-compaction criterion”. Typical slip: wrong share/basis, unit conversion, or omitted term (B treats an impossible region above ZAV as valid.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Higher compactive effort → higher MDD and lower OMC (curve shifts up and left).\n• Relative compaction = (γd,field / γd,MDD)×100%; many specs require ≥95% of the governing MDD.\n• No valid soil state plots above the zero-air-voids line.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Know whether acceptance uses standard or modified Proctor MDD.\n• Field γd from sand-replacement/core-cutter + water content.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "schematic-family",
    "diagramSourcePath": "schematic-family/dual-params-q68"
  },
  {
    "id": 69,
    "subject": "Soil Mechanics",
    "topic": "Soil: sample quality+AR+practical",
    "question": "On receipt of a sensitive-clay tube sample for laboratory strength testing, the engineer notes edge smearing, disturbance of the outer fabric and a substantial area-ratio exceedance relative to recommended sampler practice, although the moisture content appears intact on visual check. Which conclusion about sample quality and subsequent testing is most defensible?",
    "image": "",
    "options": [
      "Both true; R does not explain A",
      "Both true; R explains A",
      "A true, R false",
      "A false, R true"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Practical/Application",
    "formula": "",
    "explanation": "CORRECT: Both true; R explains A\n\nWHY CORRECT:\nDisturbance directly undermines representative mechanical parameters.\n\nCALCULATION:\nFinal keyed result: Both true; R explains A.\n\nTRAP ANALYSIS (every wrong option):\nA) Both true; R does not explain A: Does not satisfy the governing relation that produces “Both true; R explains A”. Typical slip: wrong share/basis, unit conversion, or omitted term (index description may remain usable, but structure-sensitive testing is affected.).\nC) A true, R false: Does not satisfy the governing relation that produces “Both true; R explains A”. Typical slip: wrong share/basis, unit conversion, or omitted term (index description may remain usable, but structure-sensitive testing is affected.).\nD) A false, R true: Does not satisfy the governing relation that produces “Both true; R explains A”. Typical slip: wrong share/basis, unit conversion, or omitted term (index description may remain usable, but structure-sensitive testing is affected.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: disturbance directly undermines representative mechanical parameters.\n• Keyed answer to lock: Both true; R explains A.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 70,
    "subject": "Soil Mechanics",
    "topic": "Soil: earth pressure+numerical",
    "question": "A 4 m retaining wall with level dry cohesionless backfill (φ=30°, γ=18 kN/m³) is under preliminary design for a compound boundary. Which total active thrust per metre run is closest?",
    "image": "",
    "options": [
      "54 kN/m",
      "48 kN/m",
      "72 kN/m",
      "36 kN/m"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 48 kN/m\n\nWHY CORRECT:\nKa=1/3; thrust = 0.5×(1/3)×18×16 = 48 kN/m. This uniquely selects “48 kN/m”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nKa=1/3; thrust = 0.5×(1/3)×18×16 = 48 kN/m.\nFinal keyed result: 48 kN/m.\n\nTRAP ANALYSIS (every wrong option):\nA) 54 kN/m: Does not satisfy the governing relation that produces “48 kN/m”. Typical slip: wrong share/basis, unit conversion, or omitted term (C omits Ka; A uses Ka≈0.375; D uses half wrongly.).\nC) 72 kN/m: Does not satisfy the governing relation that produces “48 kN/m”. Typical slip: wrong share/basis, unit conversion, or omitted term (C omits Ka; A uses Ka≈0.375; D uses half wrongly.).\nD) 36 kN/m: Does not satisfy the governing relation that produces “48 kN/m”. Typical slip: wrong share/basis, unit conversion, or omitted term (C omits Ka; A uses Ka≈0.375; D uses half wrongly.).\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: Ka=1/3; thrust = 0.5×(1/3)×18×16 = 48 kN/m.\n• Keyed answer to lock: 48 kN/m.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
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
    "explanation": "CORRECT: 3 days\n\nWHY CORRECT:\nCORRECT: 3 days This uniquely selects “3 days”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 3 days\nFinal keyed result: 3 days.\n\nTRAP ANALYSIS (every wrong option):\nA) 2 days: Does not satisfy the governing relation that produces “3 days”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) 4 days: Does not satisfy the governing relation that produces “3 days”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) 6 days: Does not satisfy the governing relation that produces “3 days”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: 15%\n\nWHY CORRECT:\nCORRECT: 15% This uniquely selects “15%”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 15%\nFinal keyed result: 15%.\n\nTRAP ANALYSIS (every wrong option):\nA) 12%: Does not satisfy the governing relation that produces “15%”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) 18%: Does not satisfy the governing relation that produces “15%”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) 20%: Does not satisfy the governing relation that produces “15%”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: 12\n\nWHY CORRECT:\nCORRECT: 12 This uniquely selects “12”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 12\nFinal keyed result: 12.\n\nTRAP ANALYSIS (every wrong option):\nA) 7: Does not satisfy the governing relation that produces “12”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nB) 8: Does not satisfy the governing relation that produces “12”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) 10: Does not satisfy the governing relation that produces “12”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: 41 MU\n\nWHY CORRECT:\nCORRECT: 41 MU This uniquely selects “41 MU”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 41 MU\nFinal keyed result: 41 MU.\n\nTRAP ANALYSIS (every wrong option):\nA) 40 MU: Does not satisfy the governing relation that produces “41 MU”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) 42 MU: Does not satisfy the governing relation that produces “41 MU”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) 43 MU: Does not satisfy the governing relation that produces “41 MU”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: 48 km/h\n\nWHY CORRECT:\nCORRECT: 48 km/h This uniquely selects “48 km/h”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 48 km/h\nFinal keyed result: 48 km/h.\n\nTRAP ANALYSIS (every wrong option):\nB) 50 km/h: Does not satisfy the governing relation that produces “48 km/h”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) 52 km/h: Does not satisfy the governing relation that produces “48 km/h”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) 45 km/h: Does not satisfy the governing relation that produces “48 km/h”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: ₹40,000\n\nWHY CORRECT:\nCORRECT: ₹40,000 This uniquely selects “₹40,000”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: ₹40,000\nFinal keyed result: ₹40,000.\n\nTRAP ANALYSIS (every wrong option):\nA) ₹30,000: Does not satisfy the governing relation that produces “₹40,000”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) ₹48,000: Does not satisfy the governing relation that produces “₹40,000”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) ₹50,000: Does not satisfy the governing relation that produces “₹40,000”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: ₹9.0 lakh\n\nWHY CORRECT:\nCORRECT: ₹9.0 lakh This uniquely selects “₹9.0 lakh”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: ₹9.0 lakh\nFinal keyed result: ₹9.0 lakh.\n\nTRAP ANALYSIS (every wrong option):\nA) ₹8.0 lakh: Does not satisfy the governing relation that produces “₹9.0 lakh”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) ₹10.0 lakh: Does not satisfy the governing relation that produces “₹9.0 lakh”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) ₹11.0 lakh: Does not satisfy the governing relation that produces “₹9.0 lakh”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: 24\n\nWHY CORRECT:\nCORRECT: 24 This uniquely selects “24”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 24\nFinal keyed result: 24.\n\nTRAP ANALYSIS (every wrong option):\nA) 12: Does not satisfy the governing relation that produces “24”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nB) 18: Does not satisfy the governing relation that produces “24”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) 48: Does not satisfy the governing relation that produces “24”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Work rate = 1/T per person/crew; remaining = 1 − work already done; time = remaining / new combined rate.\n• Equal-distance average speed = 2ab/(a+b), not (a+b)/2.\n• Percentage change: identify the correct base before applying %.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Pipes: inlet positive, leak negative rates on the same tank equation.\n• Successive % changes: multiply factors (1±p/100), do not add p’s blindly.",
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
    "explanation": "CORRECT: ₹3,500 crore\n\nWHY CORRECT:\nCORRECT: ₹3,500 crore This uniquely selects “₹3,500 crore”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: ₹3,500 crore\nFinal keyed result: ₹3,500 crore.\n\nTRAP ANALYSIS (every wrong option):\nA) ₹350 crore: Does not satisfy the governing relation that produces “₹3,500 crore”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) ₹35,000 crore: Does not satisfy the governing relation that produces “₹3,500 crore”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) ₹350,000 crore: Does not satisfy the governing relation that produces “₹3,500 crore”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: ₹3,500 crore\n• Keyed answer to lock: ₹3,500 crore.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: 2028\n\nWHY CORRECT:\nCORRECT: 2028 This uniquely selects “2028”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 2028\nFinal keyed result: 2028.\n\nTRAP ANALYSIS (every wrong option):\nA) 2024: Does not satisfy the governing relation that produces “2028”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nB) 2026: Does not satisfy the governing relation that produces “2028”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) 2035: Does not satisfy the governing relation that produces “2028”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: 2028\n• Keyed answer to lock: 2028.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: About ₹30 lakh crore\n\nWHY CORRECT:\nCORRECT: About ₹30 lakh crore This uniquely selects “About ₹30 lakh crore”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: About ₹30 lakh crore\nFinal keyed result: About ₹30 lakh crore.\n\nTRAP ANALYSIS (every wrong option):\nA) About ₹3 lakh crore: Does not satisfy the governing relation that produces “About ₹30 lakh crore”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) About ₹300 lakh crore: Does not satisfy the governing relation that produces “About ₹30 lakh crore”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) About ₹30,000 crore: Does not satisfy the governing relation that produces “About ₹30 lakh crore”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: About ₹30 lakh crore\n• Keyed answer to lock: About ₹30 lakh crore.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: Gaganyaan\n\nWHY CORRECT:\nCORRECT: Gaganyaan This uniquely selects “Gaganyaan”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Chandrayaan: Does not satisfy the governing relation that produces “Gaganyaan”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) Aditya-L1: Does not satisfy the governing relation that produces “Gaganyaan”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) NISAR: Does not satisfy the governing relation that produces “Gaganyaan”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: Gaganyaan\n• Keyed answer to lock: Gaganyaan.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: President of India\n\nWHY CORRECT:\nCORRECT: President of India This uniquely selects “President of India”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Chief Justice of India: Does not satisfy the governing relation that produces “President of India”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) Speaker of the Lok Sabha only: Does not satisfy the governing relation that produces “President of India”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) Chairman of the Rajya Sabha: Does not satisfy the governing relation that produces “President of India”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: President of India\n• Keyed answer to lock: President of India.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: Amaravati\n\nWHY CORRECT:\nCORRECT: Amaravati This uniquely selects “Amaravati”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Visakhapatnam: Does not satisfy the governing relation that produces “Amaravati”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) Tirupati: Does not satisfy the governing relation that produces “Amaravati”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) Kurnool: Does not satisfy the governing relation that produces “Amaravati”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: Amaravati\n• Keyed answer to lock: Amaravati.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: Make policy borrowing costlier and cool demand-side pressure\n\nWHY CORRECT:\nCORRECT: Make policy borrowing costlier and cool demand-side pressure\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Make borrowing cheaper and boost demand: Does not satisfy the governing relation that produces “Make policy borrowing costlier and cool demand-side pressure”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) Directly fix retail petrol prices: Does not satisfy the governing relation that produces “Make policy borrowing costlier and cool demand-side pressure”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) Abolish CRR: Does not satisfy the governing relation that produces “Make policy borrowing costlier and cool demand-side pressure”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: Make policy borrowing costlier and cool demand-side pressure\n• Keyed answer to lock: Make policy borrowing costlier and cool demand-side pressure.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: CBZ\n\nWHY CORRECT:\nCORRECT: CBZ This uniquely selects “CBZ”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) CBX: Does not satisfy the governing relation that produces “CBZ”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nB) ABZ: Does not satisfy the governing relation that produces “CBZ”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) AAX: Does not satisfy the governing relation that produces “CBZ”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: CBZ\n• Keyed answer to lock: CBZ.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: Friday\n\nWHY CORRECT:\nCORRECT: Friday This uniquely selects “Friday”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Monday: Does not satisfy the governing relation that produces “Friday”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nB) Tuesday: Does not satisfy the governing relation that produces “Friday”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) Thursday: Does not satisfy the governing relation that produces “Friday”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: Friday\n• Keyed answer to lock: Friday.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: Only II\n\nWHY CORRECT:\nCORRECT: Only II This uniquely selects “Only II”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Only I: Does not satisfy the governing relation that produces “Only II”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) Both I and II: Does not satisfy the governing relation that produces “Only II”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) Neither I nor II: Does not satisfy the governing relation that produces “Only II”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: Only II\n• Keyed answer to lock: Only II.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: 3 km east\n\nWHY CORRECT:\nCORRECT: 3 km east This uniquely selects “3 km east”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 3 km east\nFinal keyed result: 3 km east.\n\nTRAP ANALYSIS (every wrong option):\nB) 3 km west: Does not satisfy the governing relation that produces “3 km east”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) 5 km east: Does not satisfy the governing relation that produces “3 km east”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) 4 km north: Does not satisfy the governing relation that produces “3 km east”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: 3 km east\n• Keyed answer to lock: 3 km east.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: Fault current interruption\n\nWHY CORRECT:\nCORRECT: Fault current interruption This uniquely selects “Fault current interruption”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Frequency: Does not satisfy the governing relation that produces “Fault current interruption”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) Power factor: Does not satisfy the governing relation that produces “Fault current interruption”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) Reactive power only: Does not satisfy the governing relation that produces “Fault current interruption”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: Fault current interruption\n• Keyed answer to lock: Fault current interruption.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: Lose section capacity faster under wind loads\n\nWHY CORRECT:\nCORRECT: Lose section capacity faster under wind loads\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Increase transformer oil acidity: Does not satisfy the governing relation that produces “Lose section capacity faster under wind loads”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) Reduce busbar ampacity only: Does not satisfy the governing relation that produces “Lose section capacity faster under wind loads”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) Eliminate the need for drainage checks: Does not satisfy the governing relation that produces “Lose section capacity faster under wind loads”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: Lose section capacity faster under wind loads\n• Keyed answer to lock: Lose section capacity faster under wind loads.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: The relay settings were verified by the engineer.\n\nWHY CORRECT:\nCORRECT: The relay settings were verified by the engineer.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) The relay settings verified the engineer.: Does not satisfy the governing relation that produces “The relay settings were verified by the engineer.”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) The relay settings are verify by the engineer.: Does not satisfy the governing relation that produces “The relay settings were verified by the engineer.”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) The engineer was verified by the relay settings.: Does not satisfy the governing relation that produces “The relay settings were verified by the engineer.”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: The relay settings were verified by the engineer.\n• Keyed answer to lock: The relay settings were verified by the engineer..\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: He said that he was checking the earthing.\n\nWHY CORRECT:\nCORRECT: He said that he was checking the earthing.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) He said that he is checking the earthing.: Does not satisfy the governing relation that produces “He said that he was checking the earthing.”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) He said that I am checking the earthing.: Does not satisfy the governing relation that produces “He said that he was checking the earthing.”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) He said that he will checking the earthing.: Does not satisfy the governing relation that produces “He said that he was checking the earthing.”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: He said that he was checking the earthing.\n• Keyed answer to lock: He said that he was checking the earthing..\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: was willing\n\nWHY CORRECT:\nCORRECT: was willing This uniquely selects “was willing”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Neither the contractor: Does not satisfy the governing relation that produces “was willing”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nB) nor the supervisors: Does not satisfy the governing relation that produces “was willing”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) to sign the record.: Does not satisfy the governing relation that produces “was willing”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: was willing\n• Keyed answer to lock: was willing.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: Brief and clear\n\nWHY CORRECT:\nCORRECT: Brief and clear This uniquely selects “Brief and clear”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Lengthy and detailed: Does not satisfy the governing relation that produces “Brief and clear”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) Vague and delayed: Does not satisfy the governing relation that produces “Brief and clear”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) Hostile: Does not satisfy the governing relation that produces “Brief and clear”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: Brief and clear\n• Keyed answer to lock: Brief and clear.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: Multi-factor authentication\n\nWHY CORRECT:\nCORRECT: Multi-factor authentication This uniquely selects “Multi-factor authentication”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Larger monitor: Does not satisfy the governing relation that produces “Multi-factor authentication”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) Defragmenting the disk: Does not satisfy the governing relation that produces “Multi-factor authentication”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) Increasing screen brightness: Does not satisfy the governing relation that produces “Multi-factor authentication”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: Multi-factor authentication\n• Keyed answer to lock: Multi-factor authentication.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: DNS\n\nWHY CORRECT:\nCORRECT: DNS This uniquely selects “DNS”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) FTP: Does not satisfy the governing relation that produces “DNS”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) SMTP: Does not satisfy the governing relation that produces “DNS”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) DHCP only for printing: Does not satisfy the governing relation that produces “DNS”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: DNS\n• Keyed answer to lock: DNS.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: $A$1\n\nWHY CORRECT:\nCORRECT: $A$1 This uniquely selects “$A$1”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: $A$1\nFinal keyed result: $A$1.\n\nTRAP ANALYSIS (every wrong option):\nA) A1: Does not satisfy the governing relation that produces “$A$1”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nB) $A1: Does not satisfy the governing relation that produces “$A$1”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) A$1: Does not satisfy the governing relation that produces “$A$1”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: $A$1\n• Keyed answer to lock: $A$1.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: Primary key\n\nWHY CORRECT:\nCORRECT: Primary key This uniquely selects “Primary key”. Wrong options follow the slips listed under TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Foreign key only: Does not satisfy the governing relation that produces “Primary key”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) Default value only: Does not satisfy the governing relation that produces “Primary key”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) Check constraint for colour: Does not satisfy the governing relation that produces “Primary key”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: Primary key\n• Keyed answer to lock: Primary key.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
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
    "explanation": "CORRECT: RAM is typically volatile working memory; disk provides persistent storage\n\nWHY CORRECT:\nCORRECT: RAM is typically volatile working memory; disk provides persistent storage\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) RAM is non-volatile long-term storage; disk is only for CPU registers: Does not satisfy the governing relation that produces “RAM is typically volatile working memory; disk provides persistent storage”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nC) Both are identical in volatility and speed: Does not satisfy the governing relation that produces “RAM is typically volatile working memory; disk provides persistent storage”. Typical slip: wrong share/basis, unit conversion, or omitted term.\nD) Disk contents are erased every time power is on: Does not satisfy the governing relation that produces “RAM is typically volatile working memory; disk provides persistent storage”. Typical slip: wrong share/basis, unit conversion, or omitted term.\n\nWHAT TO REMEMBER (concrete facts — not topic headings):\n• Governing result for this stem: CORRECT: RAM is typically volatile working memory; disk provides persistent storage\n• Keyed answer to lock: RAM is typically volatile working memory; disk provides persistent storage.\n• Recompute with the same governing relation if any one given number changes; do not switch formulas mid-way.\n\nALSO ASKED / HIGH CHANCE (concrete alternate angles):\n• Change one stem number and re-apply the same method until you recover a neighbouring option trap.\n• Ask the complementary check that examiners pair with this item (unit conversion / sign / share vs total).",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  }
];
