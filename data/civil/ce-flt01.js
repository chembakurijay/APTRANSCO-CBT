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
    "explanation": "CORRECT: Stress ≈175 MPa, below yield\n\nWHY CORRECT:\narea = 314.2 mm²; stress = 55,000/314.2 ≈175 MPa. That uniquely matches “Stress ≈175 MPa, below yield”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\narea = 314.2 mm²; stress = 55,000/314.2 ≈175 MPa.\nFinal keyed result: Stress ≈175 MPa, below yield.\n\nTRAP ANALYSIS (every wrong option):\nB) Stress ≈200 MPa, at yield: equates service stress to fy or to a rounded yield without computing P/A.\nC) Stress ≈350 MPa, above yield: equates service stress to fy or to a rounded yield without computing P/A.\nD) Stress ≈227 MPa, exactly at design strength: compares demand to fy/γm0 design strength instead of reporting the computed service stress check asked.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• σ = P/A with A = πd²/4 for solid round bars; keep P in N and A in mm² → σ in N/mm² (=MPa). (stem data include: 20 mm, 55 kN, 250 ).\n• Service check vs fy is not the same as design check vs fy/γm0 (e.g. Fe250 → 250/1.1 ≈ 227 MPa).\n• Using radius instead of diameter understates A by 4× and overstates stress by 4×.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Same bar under sudden axial load: σ_sudden ≈ 2 σ_gradual from energy equivalence (ideal).\n• Temperature lock-up with fixed ends: σ = α E ΔT; set equal to fy/γm0 to find limiting ΔT.",
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
    "explanation": "CORRECT: 3/7\n\nWHY CORRECT:\nEqual strain makes force proportional to \\(AE\\); brass:steel = 900:1200, so brass share = 3/7.\n\nCALCULATION:\nequal strain makes force proportional to \\(AE\\); brass:steel = 900:1200, so brass share = 3/7.\nFinal keyed result: 3/7.\n\nTRAP ANALYSIS (every wrong option):\nA) 3/5: reverses AE stiffness shares between the two materials.\nB) 1/2: reverses AE stiffness shares between the two materials.\nD) 2/3: reverses AE stiffness shares between the two materials.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Equal strain → force share ∝ AE; for equal L, F_i / ΣF = (A_i E_i) / Σ(AE). (stem data include: 600, 900, 2).\n• Transformed width of steel in timber units = m·t_steel with m = Es/Et.\n• Modular ratio m scales only the width (or area) in the transformed section — not the physical depth.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• If brass area doubles at constant Es/Eb, recompute AE shares — brass fraction rises but not to 1.\n• Flitch beam: locate NA of transformed section then σ = My/I with steel stress = m·σ_timber.",
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
    "explanation": "CORRECT: 10 kN, 50 kN\n\nWHY CORRECT:\nAB=4 m with 10 kN/m UDL (40 kN) and 20 kN at tip C on 2 m overhang; ΣMA → RB=50 kN; ΣV → RA=10 kN.\n\nCALCULATION:\nAB=4 m with 10 kN/m UDL (40 kN) and 20 kN at tip C on 2 m overhang; ΣMA → RB=50 kN; ΣV → RA=10 kN.\nFinal keyed result: 10 kN, 50 kN.\n\nTRAP ANALYSIS (every wrong option):\nB) 15 kN, 45 kN: is a standard distractor for this stem (A/C shift the UDL centroid or tip lever). It does not produce “10 kN, 50 kN” under the correct governing relation.\nC) 20 kN, 40 kN: is a standard distractor for this stem (A/C shift the UDL centroid or tip lever). It does not produce “10 kN, 50 kN” under the correct governing relation.\nD) 25 kN, 35 kN: is a standard distractor for this stem (A/C shift the UDL centroid or tip lever). It does not produce “10 kN, 50 kN” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• ΣMA = 0: take moments of all vertical loads about A; solve RB; then RA = ΣV − RB. (stem data include: 4 m, 2 m, 10 kN, 20 kN).\n• UDL resultant = w·length acts at mid-span of the loaded segment.\n• Tip load on overhang BC contributes RB·AB = P·(AB+BC) style levers — draw free-body carefully.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Same geometry: find max BM between A and B and on the overhang.\n• If UDL also covers the overhang, recompute resultants and centroids before ΣM.",
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
    "explanation": "CORRECT: 60\n\nWHY CORRECT:\nλ = Le/r = 2100/35 = 60. That uniquely matches “60”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nλ = Le/r = 2100/35 = 60.\nFinal keyed result: 60.\n\nTRAP ANALYSIS (every wrong option):\nA) 30: uses half the effective length (or doubles r), giving λ≈30 instead of 2100/35=60.\nB) 120: effectively doubles Le (or halves r), e.g. treating 2.1 m as if an extra end-factor were still needed → λ≈120.\nC) 15: misplaces the decimal / unit conversion (metres vs millimetres) in λ = Le/r.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Slenderness λ = Le / rmin with Le and r in the same length unit (usually mm). (stem data include: 2.1 m, 35 mm).\n• If the stem already gives effective length Le, do not multiply again by an end-fix K.\n• Buckling capacity falls as λ rises; moving area away from the weak axis raises rmin and lowers λ.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Both ends fixed → approximate K≈0.65 (IS 800) so Le=K·L; recompute λ with that Le.\n• Which Euler assumption fails if the strut has measurable initial crookedness or load eccentricity?\n• Compare λ against the limiting non-dimensional effective slenderness for the section class / curve.",
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
    "explanation": "CORRECT: A true, R false\n\nWHY CORRECT:\nthe centre has zero shear ordinate; R is false. That uniquely matches “A true, R false”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Both true; R explains A: is a standard distractor for this stem (shear changes radius, not the centre’s vertical coordinate). It does not produce “A true, R false” under the correct governing relation.\nB) Both true; R does not explain A: is a standard distractor for this stem (shear changes radius, not the centre’s vertical coordinate). It does not produce “A true, R false” under the correct governing relation.\nC) A false, R true: is a standard distractor for this stem (shear changes radius, not the centre’s vertical coordinate). It does not produce “A true, R false” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Mohr centre lies on the σ-axis at ((σx+σy)/2, 0); its τ-coordinate is always 0.\n• Radius R = √[((σx−σy)/2)² + τxy²]; principal stresses = centre ± R.\n• Changing τxy changes R (and principals), not the vertical position of the centre.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Find σ1, σ2 and the principal-plane angle 2θp = tan⁻¹(2τxy/(σx−σy)).\n• Maximum shear = R; its planes are 90° in Mohr space from the principal planes.",
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
    "explanation": "CORRECT: 1.2 MPa at neutral axis\n\nWHY CORRECT:\naverage = 0.8 MPa; rectangular maximum = 1.5×average = 1.2 MPa at NA. That uniquely matches “1.2 MPa at neutral axis”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\naverage = 0.8 MPa; rectangular maximum = 1.5×average = 1.2 MPa at NA.\nFinal keyed result: 1.2 MPa at neutral axis.\n\nTRAP ANALYSIS (every wrong option):\nB) 0.8 MPa at extreme fibre: places maximum beam shear at the extreme fibre where elastic τ is zero for a rectangle.\nC) 0.8 MPa uniformly: assumes uniform shear across the depth instead of parabolic distribution with τmax at NA.\nD) 1.2 MPa at top fibre: places maximum beam shear at the extreme fibre where elastic τ is zero for a rectangle.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Average shear τavg = V/(bd); for rectangle τmax = (3/2)τavg at the neutral axis. (stem data include: 100 mm, 200 mm, 16 kN).\n• τ = 0 at the extreme fibres for elastic rectangular shear distribution.\n• Do not treat beam shear as uniform across depth unless the stem says average only.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Circular section: τmax = (4/3)τavg on the NA.\n• I-beam: web carries nearly all shear; flange shear is small — use τ ≈ V/(d·tw) as estimate.",
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
    "explanation": "CORRECT: 1000 N·m\n\nWHY CORRECT:\nfree-body of BC must transmit the end torque at C. That uniquely matches “1000 N·m”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) 1500 N·m: invents an extra torque path or halves the end torque without equilibrium on BC.\nB) 0: is a standard distractor for this stem (D halves the torque without a second load path). It does not produce “1000 N·m” under the correct governing relation.\nD) 500 N·m: invents an extra torque path or halves the end torque without equilibrium on BC.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Free-body of a shaft segment: the internal torque equals the algebraic sum of external torques on that free body. (stem data include: 1000 ).\n• T/J = τ/r = Gθ/L for elastic circular shafts.\n• Stepped shafts: same T through a continuous segment unless a torque is applied/removed at a coupling.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Power P = T·ω; with ω = 2πN/60 find T then τmax at outer radius.\n• Two shafts in series share the same torque; in parallel share twist.",
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
    "explanation": "CORRECT: \\(3wL/16\\)\n\nWHY CORRECT:\nCompatibility leaves half the UDL deflection to be cancelled by the prop, giving \\(3wL/16\\).\n\nCALCULATION:\ncompatibility leaves half the UDL deflection to be cancelled by the prop, giving \\(3wL/16\\).\nFinal keyed result: \\(3wL/16\\).\n\nTRAP ANALYSIS (every wrong option):\nA) \\(3wL/8\\): uses the no-settlement propped-cantilever reaction 3wL/8, ignoring the given settlement.\nB) \\(wL/4\\): uses another classic prop formula that does not match Δ = ½ δ_free compatibility.\nC) \\(5wL/8\\): uses another classic prop formula that does not match Δ = ½ δ_free compatibility.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Propped cantilever under UDL: without settlement Rp = 3wL/8; compatibility reduces Rp if the prop settles.\n• If settlement Δ = (1/2)δ_free, the prop cancels only half the free deflection → Rp = 3wL/16.\n• Always write δ_load + δ_Rp = Δ_support (signs consistent).\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Prop settlement zero → recover classic 3wL/8.\n• Point load at midspan propped cantilever: different Rp — do not reuse UDL formula.",
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
    "explanation": "CORRECT: A concentrated couple acts at C\n\nWHY CORRECT:\na concentrated moment causes a BMD discontinuity; a point force jumps shear. That uniquely matches “A concentrated couple acts at C”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: A concentrated couple acts at C.\n\nTRAP ANALYSIS (every wrong option):\nB) A point load acts at C: reverses AE stiffness shares between the two materials.\nC) A UDL starts at C: reverses AE stiffness shares between the two materials.\nD) The flexural rigidity changes at C: reverses AE stiffness shares between the two materials.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Concentrated couple → finite jump in BMD; SFD continuous if no point force there.\n• Point force → jump in SFD equal to the force; BMD kink (slope change) but no jump.\n• EI change alters curvature M/EI, not equilibrium jumps on SFD/BMD.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• UDL start/stop → kink in SFD (change of slope), smooth BMD curvature change.\n• Relate dM/dx = V and dV/dx = −w to diagnose diagram signatures.",
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
    "explanation": "CORRECT: a-4, b-2, c-3, d-1\n\nWHY CORRECT:\n(a) 3wl²/8; (b) wl²/6; (c) wl²/8; (d) w(2l)²/8 = wl²/2. That uniquely matches “a-4, b-2, c-3, d-1”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\n(a) 3wl²/8; (b) wl²/6; (c) wl²/8; (d) w(2l)²/8 = wl²/2.\nFinal keyed result: a-4, b-2, c-3, d-1.\n\nTRAP ANALYSIS (every wrong option):\nB) a-4, b-1, c-3, d-2: is a standard distractor for this stem (A swaps triangular and double-span results). It does not produce “a-4, b-2, c-3, d-1” under the correct governing relation.\nC) a-3, b-1, c-2, d-4: is a standard distractor for this stem (A swaps triangular and double-span results). It does not produce “a-4, b-2, c-3, d-1” under the correct governing relation.\nD) a-1, b-2, c-3, d-4: is a standard distractor for this stem (A swaps triangular and double-span results). It does not produce “a-4, b-2, c-3, d-1” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• SS beam full UDL: Mmax = wl²/8 at midspan. (stem data include: 2, 1, 2, 2).\n• Cantilever triangular load to free end: Mmax = wl²/6 at fixed end.\n• Cantilever UDL on outer half and double-span cases use their own resultants — do not reuse wl²/8 blindly.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• SS beam point load at midspan: Mmax = PL/4.\n• Cantilever end point load: Mmax = PL.",
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
    "explanation": "CORRECT: The column’s self-weight is included as a distributed axial compressive load in the ideal Euler model\n\nWHY CORRECT:\nElementary Euler theory idealises a weightless, initially straight, concentrically loaded, linearly elastic column with small-slope bending and no shear deformation. Self-weight as a distributed axial load is a different, more advanced problem — it is NOT part of the standard Euler-assumption list tested in AEE papers.\n\nCALCULATION:\nN/A — theory-assumptions recognition (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) The column is initially straight and the axial load is concentric: this IS a core Euler assumption; eliminating initial crookedness/eccentricity is required for the classical bifurcation model.\nB) The material remains linearly elastic up to the buckling load: this IS assumed — Euler Pcr uses EI in the elastic range.\nD) Plane sections remain plane and shear deformation is neglected: this IS the Euler–Bernoulli bending idealisation used to derive Pcr = π²EI/Le².\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Euler Pcr = π²EI/Le² with Le = K L; hinged–hinged K=1, fixed–fixed K=0.5 (ideal), fixed–free K=2.\n• Assumptions: straight + concentric load + linear elasticity + small slopes + neglect shear deformation; NOT self-weight loading.\n• If residual stress, crookedness, or yielding matters → use IS 800 column curves, not bare Euler.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Which end condition gives Pcr = 4π²EI/L² vs π²EI/L²?\n• Rankine–Gordon: 1/P_r = 1/Pc + 1/Pe — when does pure Euler overestimate capacity?\n• If load is eccentric from the start, which Euler assumption is violated and what replaces Pcr?",
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
    "explanation": "CORRECT: 95°C\n\nWHY CORRECT:\nσ = 227.3 MPa = αEΔT → ΔT ≈ 94.7°C. That uniquely matches “95°C”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nσ = 227.3 MPa = αEΔT → ΔT ≈ 94.7°C.\nFinal keyed result: 95°C.\n\nTRAP ANALYSIS (every wrong option):\nA) 104°C: is a standard distractor for this stem (A uses fy without γm0; B halves the rise). It does not produce “95°C” under the correct governing relation.\nB) 48°C: is a standard distractor for this stem (A uses fy without γm0; B halves the rise). It does not produce “95°C” under the correct governing relation.\nC) 200°C: is a standard distractor for this stem (A uses fy without γm0; B halves the rise). It does not produce “95°C” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Fixed-end temperature rise: free expansion αΔT L is fully suppressed → σ = α E ΔT (compression on heating for steel). (stem data include: 12, 10, 200 , 250 MPa).\n• Design onset often compared with fy/γm0, not bare fy.\n• α_steel ≈ 12×10⁻⁶ /°C; E ≈ 200 GPa are standard exam values.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• If one end yields or slips, stress is less than αEΔT — compatibility changes.\n• Composite rails: redundant force from unequal α or ΔT between materials.",
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
    "explanation": "CORRECT: 2.4×10⁵ mm³\n\nWHY CORRECT:\nZ = M/σ = 36×10⁶/150 = 2.4×10⁵ mm³. That uniquely matches “2.4×10⁵ mm³”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nZ = M/σ = 36×10⁶/150 = 2.4×10⁵ mm³.\nFinal keyed result: 2.4×10⁵ mm³.\n\nTRAP ANALYSIS (every wrong option):\nB) 2.4×10⁶ mm³: slips a power of ten in unit conversion for Z = M/σ (mm³ vs ×10).\nC) 5.4×10⁵ mm³: is a standard distractor for this stem (B slips a power of ten). It does not produce “2.4×10⁵ mm³” under the correct governing relation.\nD) 150×10³ mm³: is a standard distractor for this stem (B slips a power of ten). It does not produce “2.4×10⁵ mm³” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Required Z = M / σ_allow with consistent units (N·mm and N/mm² → mm³). (stem data include: 36 kN, 150 MPa).\n• 36 kN·m = 36×10⁶ N·mm; 150 MPa = 150 N/mm² → Z = 2.4×10⁵ mm³.\n• Watch power-of-ten slips (10⁵ vs 10⁶) — a classic CBT trap.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• For rectangle Z = bd²/6; solve b or d when the other is fixed.\n• Compare elastic Z vs plastic modulus Zp = bd²/4 for rectangles.",
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
    "explanation": "CORRECT: 180 mm\n\nWHY CORRECT:\ntransformed width = m×12 = 180 mm. That uniquely matches “180 mm”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\ntransformed width = m×12 = 180 mm.\nFinal keyed result: 180 mm.\n\nTRAP ANALYSIS (every wrong option):\nA) 300 mm: is a standard distractor for this stem (A uses the plate depth; D quotes m alone). It does not produce “180 mm” under the correct governing relation.\nB) 12 mm: is a standard distractor for this stem (A uses the plate depth; D quotes m alone). It does not produce “180 mm” under the correct governing relation.\nD) 15 mm: is a standard distractor for this stem (A uses the plate depth; D quotes m alone). It does not produce “180 mm” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Equal strain → force share ∝ AE; for equal L, F_i / ΣF = (A_i E_i) / Σ(AE). (stem data include: 100, 300 mm, 12, 300 mm).\n• Transformed width of steel in timber units = m·t_steel with m = Es/Et.\n• Modular ratio m scales only the width (or area) in the transformed section — not the physical depth.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• If brass area doubles at constant Es/Eb, recompute AE shares — brass fraction rises but not to 1.\n• Flitch beam: locate NA of transformed section then σ = My/I with steel stress = m·σ_timber.",
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
    "explanation": "CORRECT: Radius rises; slenderness falls; buckling capacity rises\n\nWHY CORRECT:\nLarger weak-axis second moment raises radius, lowers slenderness and raises buckling resistance.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Radius decreases; slenderness decreases; capacity rises: reverses AE stiffness shares between the two materials.\nB) All unchanged: reverses AE stiffness shares between the two materials.\nC) Radius rises; slenderness rises; capacity falls: reverses AE stiffness shares between the two materials.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• rmin = √(Imin/A); increasing Imin at constant A raises rmin.\n• λ = Le/rmin falls when rmin rises → Euler/IS buckling strength rises.\n• Spreading material from the weak axis is the usual way to improve slender-column capacity without adding area.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Same A but stronger axis wrongly improved → weak-axis λ still governs.\n• Effective length change (bracing) can reduce Le more effectively than tiny r gains.",
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
    "explanation": "CORRECT: Restore specified cover before concreting\n\nWHY CORRECT:\ndurability/fire cover is an independent requirement. That uniquely matches “Restore specified cover before concreting”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Accept because depth governs strength: waives durability cover because flexural depth looks adequate — not permitted.\nB) Increase water-cement ratio: worsens durability by increasing w/c instead of restoring cover.\nD) Replace stirrups with larger spacing: is a standard distractor for this stem (adequate flexural depth cannot waive exposure protection). It does not produce “Restore specified cover before concreting” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Nominal cover is a durability/fire requirement independent of flexural effective depth.\n• If measured cover is short, restore cover (chairs/spacers) before concrete — do not waive for ‘depth OK’.\n• Raising w/c worsens durability; widening stirrup spacing worsens shear/confinement.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Moderate vs severe exposure → different minimum covers (IS 456 table) — apply the governing exposure.\n• Effective depth d = overall depth − cover − φ/2 (or link) — cover error also shifts d.",
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
    "explanation": "CORRECT: Under-reinforced because 225 mm is below 240 mm\n\nWHY CORRECT:\nlimiting depth = 0.48×500 = 240 mm; trial is lower. That uniquely matches “Under-reinforced because 225 mm is below 240 mm”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nlimiting depth = 0.48×500 = 240 mm; trial is lower.\nFinal keyed result: Under-reinforced because 225 mm is below 240 mm.\n\nTRAP ANALYSIS (every wrong option):\nB) Balanced because ratio is 0.50: is a standard distractor for this stem (C imports an unrelated limit). It does not produce “Under-reinforced because 225 mm is below 240 mm” under the correct governing relation.\nC) Over-reinforced because any depth above 200 mm fails: is a standard distractor for this stem (C imports an unrelated limit). It does not produce “Under-reinforced because 225 mm is below 240 mm” under the correct governing relation.\nD) Classification needs beam width only: is a standard distractor for this stem (C imports an unrelated limit). It does not produce “Under-reinforced because 225 mm is below 240 mm” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Fe415: xu,max/d ≈ 0.48; compare trial xu with xu,max·d. (stem data include: 415 , 225 mm, 500 mm).\n• xu < xu,max → under-reinforced (steel yields first) — preferred for ductility.\n• Classification does not need b once xu and d are known for the limiting-ratio test.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Fe250 → xu,max/d ≈ 0.53; Fe500 → ≈ 0.46 — grade changes the limit.\n• Doubly reinforced when Mu demand > Mu,lim of the singly reinforced section.",
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
    "explanation": "CORRECT: Both true; R explains A\n\nWHY CORRECT:\nboth support condition and aspect ratio establish two-way action. That uniquely matches “Both true; R explains A”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Both true; R explains A.\n\nTRAP ANALYSIS (every wrong option):\nA) Both true; R does not explain A: is a standard distractor for this stem (the ratio alone is insufficient without four-edge support). It does not produce “Both true; R explains A” under the correct governing relation.\nB) A true, R false: is a standard distractor for this stem (the ratio alone is insufficient without four-edge support). It does not produce “Both true; R explains A” under the correct governing relation.\nD) A false, R true: is a standard distractor for this stem (the ratio alone is insufficient without four-edge support). It does not produce “Both true; R explains A” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Two-way if supported on four sides and ly/lx ≤ 2; one-way if ly/lx > 2 (even with four supports). (stem data include: 3.5 m, 5.0 m, 1.43, 2).\n• Aspect ratio alone is not enough without the four-edge support condition.\n• Short span lx carries the larger share of load in two-way action.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Corners held down vs not held down changes torsion reinforcement detailing.\n• Compute bending moments using IS α coefficients for the edge condition case.",
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
    "explanation": "CORRECT: Hold the pour locally, restore chairs/bar level and reverify cover and effective depth\n\nWHY CORRECT:\ndisplaced negative steel reduces support capacity and changes cover. That uniquely matches “Hold the pour locally, restore chairs/bar level and reverify cover and effective depth”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Hold the pour locally, restore chairs/bar level and reverify cover and effective depth.\n\nTRAP ANALYSIS (every wrong option):\nA) Continue because slab bottom steel is present: is a standard distractor for this stem (A ignores hogging demand). It does not produce “Hold the pour locally, restore chairs/bar level and reverify cover and effective depth” under the correct governing relation.\nB) Add extra water for access: is a standard distractor for this stem (A ignores hogging demand). It does not produce “Hold the pour locally, restore chairs/bar level and reverify cover and effective depth” under the correct governing relation.\nD) Record it only after stripping: is a standard distractor for this stem (A ignores hogging demand). It does not produce “Hold the pour locally, restore chairs/bar level and reverify cover and effective depth” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Limit-state flexure: compare xu with xu,max(d); shear: compare τv with τc(pt). (stem data include: 35 mm).\n• Cover and d are linked but durability cover cannot be waived by strength depth.\n• Detailing (ties, development, curtailment) fails many site stems.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Development length Ld = φσs/(4τbd) style checks at cut-offs.\n• Two-way vs one-way: ly/lx and support conditions together.",
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
    "explanation": "CORRECT: Web width, unless another compression flange is specifically present\n\nWHY CORRECT:\nthe slab flange is not in compression under hogging. That uniquely matches “Web width, unless another compression flange is specifically present”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Full slab width: is a standard distractor for this stem (B carries the sagging-region model into the support region). It does not produce “Web width, unless another compression flange is specifically present” under the correct governing relation.\nB) Midspan effective flange width: is a standard distractor for this stem (B carries the sagging-region model into the support region). It does not produce “Web width, unless another compression flange is specifically present” under the correct governing relation.\nC) Half panel width: reverses or halves the correct factor without an energy/equilibrium basis.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Limit-state flexure: compare xu with xu,max(d); shear: compare τv with τc(pt).\n• Cover and d are linked but durability cover cannot be waived by strength depth.\n• Detailing (ties, development, curtailment) fails many site stems.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Development length Ld = φσs/(4τbd) style checks at cut-offs.\n• Two-way vs one-way: ly/lx and support conditions together.",
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
    "explanation": "CORRECT: Detail S\n\nWHY CORRECT:\nDetail S uses a closed perimeter tie plus both crossties so every corner and mid-face bar is restrained. That uniquely matches “Detail S”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Detail P: is a standard distractor for this stem (P is perimeter-only; Q omits a crosstie direction; R’s diamond leaves corners unrestrained). It does not produce “Detail S” under the correct governing relation.\nB) Detail Q: is a standard distractor for this stem (P is perimeter-only; Q omits a crosstie direction; R’s diamond leaves corners unrestrained). It does not produce “Detail S” under the correct governing relation.\nC) Detail R: is a standard distractor for this stem (P is perimeter-only; Q omits a crosstie direction; R’s diamond leaves corners unrestrained). It does not produce “Detail S” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Every corner bar and alternate intermediate bar must be restrained by a tie bend ≤135° with adequate extension.\n• Perimeter tie alone is not enough when intermediate bars exist on a face — need crossties.\n• Diamond-only ties can leave corners poorly restrained — check the labelled detail.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Tie spacing limits: least of 16φ_long, 48φ_tie, least lateral dimension (IS 456).\n• Larger column → more crossties so no bar is farther than 75 mm from a restrained bar (detailing rule of thumb in exams).",
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
    "explanation": "CORRECT: Minimum shear reinforcement in X; designed shear reinforcement in Y\n\nWHY CORRECT:\nMinimum stirrups remain required in X; Y needs the balance carried by shear reinforcement.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) No stirrups in either: is a standard distractor for this stem (C ignores the permitted design range). It does not produce “Minimum shear reinforcement in X; designed shear reinforcement in Y” under the correct governing relation.\nB) Redesign both sections immediately: is a standard distractor for this stem (C ignores the permitted design range). It does not produce “Minimum shear reinforcement in X; designed shear reinforcement in Y” under the correct governing relation.\nD) Provide torsion steel only in Y: is a standard distractor for this stem (C ignores the permitted design range). It does not produce “Minimum shear reinforcement in X; designed shear reinforcement in Y” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Limit-state flexure: compare xu with xu,max(d); shear: compare τv with τc(pt).\n• Cover and d are linked but durability cover cannot be waived by strength depth.\n• Detailing (ties, development, curtailment) fails many site stems.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Development length Ld = φσs/(4τbd) style checks at cut-offs.\n• Two-way vs one-way: ly/lx and support conditions together.",
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
    "explanation": "CORRECT: Extend the bar, provide an allowable hook/bend, or revise curtailment so anchorage and the related moment/shear checks are all satisfied\n\nWHY CORRECT:\ninadequate development is a structural limit, not a drafting preference. That uniquely matches “Extend the bar, provide an allowable hook/bend, or revise curtailment so anchorage and the related moment/shear checks are all satisfied”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Accept because the bar has already entered the support region: is a standard distractor for this stem (A confuses location with anchorage). It does not produce “Extend the bar, provide an allowable hook/bend, or revise curtailment so anchorage and the related moment/shear checks are all satisfied” under the correct governing relation.\nB) Increase only the clear cover and leave the cut-off unchanged: is a standard distractor for this stem (A confuses location with anchorage). It does not produce “Extend the bar, provide an allowable hook/bend, or revise curtailment so anchorage and the related moment/shear checks are all satisfied” under the correct governing relation.\nD) Replace stirrups with larger spacing to free anchorage length: is a standard distractor for this stem (A confuses location with anchorage). It does not produce “Extend the bar, provide an allowable hook/bend, or revise curtailment so anchorage and the related moment/shear checks are all satisfied” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Limit-state flexure: compare xu with xu,max(d); shear: compare τv with τc(pt).\n• Cover and d are linked but durability cover cannot be waived by strength depth.\n• Detailing (ties, development, curtailment) fails many site stems.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Development length Ld = φσs/(4τbd) style checks at cut-offs.\n• Two-way vs one-way: ly/lx and support conditions together.",
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
    "explanation": "CORRECT: Design the excess moment with compression and additional tension steel\n\nWHY CORRECT:\ndemand exceeds singly reinforced limit; a steel couple must resist the excess. That uniquely matches “Design the excess moment with compression and additional tension steel”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Use only minimum tension steel: is a standard distractor for this stem (D mixes design stages). It does not produce “Design the excess moment with compression and additional tension steel” under the correct governing relation.\nB) Reduce effective depth: is a standard distractor for this stem (D mixes design stages). It does not produce “Design the excess moment with compression and additional tension steel” under the correct governing relation.\nD) Treat 138 kN·m as service moment: is a standard distractor for this stem (D mixes design stages). It does not produce “Design the excess moment with compression and additional tension steel” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Limit-state flexure: compare xu with xu,max(d); shear: compare τv with τc(pt). (stem data include: 160 kN, 138 kN).\n• Cover and d are linked but durability cover cannot be waived by strength depth.\n• Detailing (ties, development, curtailment) fails many site stems.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Development length Ld = φσs/(4τbd) style checks at cut-offs.\n• Two-way vs one-way: ly/lx and support conditions together.",
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
    "explanation": "CORRECT: Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials\n\nWHY CORRECT:\nMu > Mu,lim requires a steel couple or a larger section. That uniquely matches “Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Provide only minimum tension steel and ignore the excess: is a standard distractor for this stem (B misreads limit-state capacity as a service check). It does not produce “Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials” under the correct governing relation.\nB) Treat the limiting singly reinforced capacity as a serviceability ceiling and stop: is a standard distractor for this stem (B misreads limit-state capacity as a service check). It does not produce “Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials” under the correct governing relation.\nD) Reduce the load factor instead of changing reinforcement: is a standard distractor for this stem (B misreads limit-state capacity as a service check). It does not produce “Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Limit-state flexure: compare xu with xu,max(d); shear: compare τv with τc(pt).\n• Cover and d are linked but durability cover cannot be waived by strength depth.\n• Detailing (ties, development, curtailment) fails many site stems.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Development length Ld = φσs/(4τbd) style checks at cut-offs.\n• Two-way vs one-way: ly/lx and support conditions together.",
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
    "explanation": "CORRECT: 0.52 MPa; stirrups carry the balance, subject to the maximum limit\n\nWHY CORRECT:\nmidpoint interpolation gives 0.52 MPa; demand exceeds it. That uniquely matches “0.52 MPa; stirrups carry the balance, subject to the maximum limit”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nmidpoint interpolation gives 0.52 MPa; demand exceeds it.\nFinal keyed result: 0.52 MPa; stirrups carry the balance, subject to the maximum limit.\n\nTRAP ANALYSIS (every wrong option):\nA) 0.48 MPa; minimum stirrups only: is a standard distractor for this stem (B takes the upper row without interpolation). It does not produce “0.52 MPa; stirrups carry the balance, subject to the maximum limit” under the correct governing relation.\nB) 0.56 MPa; no stirrups: is a standard distractor for this stem (B takes the upper row without interpolation). It does not produce “0.52 MPa; stirrups carry the balance, subject to the maximum limit” under the correct governing relation.\nC) 0.70 MPa; concrete alone: is a standard distractor for this stem (B takes the upper row without interpolation). It does not produce “0.52 MPa; stirrups carry the balance, subject to the maximum limit” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Limit-state flexure: compare xu with xu,max(d); shear: compare τv with τc(pt). (stem data include: 0.48 MPa, 0.50%, 0.56 MPa, 0.75%).\n• Cover and d are linked but durability cover cannot be waived by strength depth.\n• Detailing (ties, development, curtailment) fails many site stems.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Development length Ld = φσs/(4τbd) style checks at cut-offs.\n• Two-way vs one-way: ly/lx and support conditions together.",
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
    "explanation": "CORRECT: 260 mm\n\nWHY CORRECT:\nceiling = 262.5 mm; adopt 260 mm. That uniquely matches “260 mm”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nceiling = 262.5 mm; adopt 260 mm.\nFinal keyed result: 260 mm.\n\nTRAP ANALYSIS (every wrong option):\nA) 300 mm: is a standard distractor for this stem (B accepts analysis spacing without the code ceiling). It does not produce “260 mm” under the correct governing relation.\nB) 280 mm: is a standard distractor for this stem (B accepts analysis spacing without the code ceiling). It does not produce “260 mm” under the correct governing relation.\nD) 350 mm: is a standard distractor for this stem (B accepts analysis spacing without the code ceiling). It does not produce “260 mm” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Limit-state flexure: compare xu with xu,max(d); shear: compare τv with τc(pt). (stem data include: 280 mm, 350 mm).\n• Cover and d are linked but durability cover cannot be waived by strength depth.\n• Detailing (ties, development, curtailment) fails many site stems.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Development length Ld = φσs/(4τbd) style checks at cut-offs.\n• Two-way vs one-way: ly/lx and support conditions together.",
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
    "explanation": "CORRECT: Barricade and map the defect, assess section/bond, then execute an engineer-approved repair or strengthening method\n\nWHY CORRECT:\ncubes do not prove in-situ continuity or anchorage. That uniquely matches “Barricade and map the defect, assess section/bond, then execute an engineer-approved repair or strengthening method”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) Apply rich plaster after wetting: is a standard distractor for this stem (B conceals rather than characterises the defect). It does not produce “Barricade and map the defect, assess section/bond, then execute an engineer-approved repair or strengthening method” under the correct governing relation.\nC) Accept solely from cube results: waives durability cover because flexural depth looks adequate — not permitted.\nD) Load the beam before documenting the defect: is a standard distractor for this stem (B conceals rather than characterises the defect). It does not produce “Barricade and map the defect, assess section/bond, then execute an engineer-approved repair or strengthening method” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Nominal cover is a durability/fire requirement independent of flexural effective depth.\n• If measured cover is short, restore cover (chairs/spacers) before concrete — do not waive for ‘depth OK’.\n• Raising w/c worsens durability; widening stirrup spacing worsens shear/confinement.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Moderate vs severe exposure → different minimum covers (IS 456 table) — apply the governing exposure.\n• Effective depth d = overall depth − cover − φ/2 (or link) — cover error also shifts d.",
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
    "explanation": "CORRECT: 18.9 kPa\n\nWHY CORRECT:\nH=150 mm, x=y=200 mm, S_Hg=13.6, g=10. With equal limbs, p_A−p_B = h(ρ_Hg−ρ_w)g = 0.15×(13600−1000)×10 = 18900 Pa = 18.9 kPa.\n\nCALCULATION:\nh=150 mm, x=y=200 mm, S_Hg=13.6, g=10. With equal limbs, p_A−p_B = h(ρ_Hg−ρ_w)g = 0.15×(13600−1000)×10 = 18900 Pa = 18.9 kPa.\nFinal keyed result: 18.9 kPa.\n\nTRAP ANALYSIS (every wrong option):\nA) 8.4 kPa: is a standard distractor for this stem (B = 12.6 kPa uses wrong h; D doubles mercury head). It does not produce “18.9 kPa” under the correct governing relation.\nB) 12.6 kPa: is a standard distractor for this stem (B = 12.6 kPa uses wrong h; D doubles mercury head). It does not produce “18.9 kPa” under the correct governing relation.\nD) 25.2 kPa: is a standard distractor for this stem (B = 12.6 kPa uses wrong h; D doubles mercury head). It does not produce “18.9 kPa” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Equal limb elevations: pA − pB = h(ρm − ρ)g with h in metres. (stem data include: 13.6, 10 m, 150 mm, 200 mm).\n• SHg ≈ 13.6 → ρm = 13600 kg/m³; with g=10, h=0.15 → 0.15×12600×10 = 18900 Pa = 18.9 kPa.\n• Wrong h or dropping (S−1) vs (ρm−ρ) are the usual traps.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Inclined manometer: use vertical component h = L sinθ.\n• Single-column / micromanometer forms — identify which head appears in ΔP.",
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
    "explanation": "CORRECT: 0.97\n\nWHY CORRECT:\nvelocity coefficient = 0.62/0.64 ≈0.97. That uniquely matches “0.97”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nvelocity coefficient = 0.62/0.64 ≈0.97.\nFinal keyed result: 0.97.\n\nTRAP ANALYSIS (every wrong option):\nB) 0.40: is a standard distractor for this stem (B multiplies the two coefficients). It does not produce “0.97” under the correct governing relation.\nC) 0.62: is a standard distractor for this stem (B multiplies the two coefficients). It does not produce “0.97” under the correct governing relation.\nD) 1.26: is a standard distractor for this stem (B multiplies the two coefficients). It does not produce “0.97” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Write continuity / Bernoulli / momentum / Euler turbine equation matching the stem. (stem data include: 0.62 , 0.64 ).\n• Manometer: identify which heads cancel when elevations match.\n• Pump/turbine operating point = curve intersection, not nameplate arithmetic.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Re regime before friction-factor charts.\n• Cavitation / NPSH when local pressure approaches vapour pressure.",
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
    "explanation": "CORRECT: Both true; R explains A\n\nWHY CORRECT:\nThe momentum relation permits conjugate-depth analysis, while turbulence explains dissipation.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) A true, R false: is a standard distractor for this stem (energy is not conserved across the jump). It does not produce “Both true; R explains A” under the correct governing relation.\nB) Both true; R does not explain A: is a standard distractor for this stem (energy is not conserved across the jump). It does not produce “Both true; R explains A” under the correct governing relation.\nC) A false, R true: is a standard distractor for this stem (energy is not conserved across the jump). It does not produce “Both true; R explains A” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Concentrated couple → finite jump in BMD; SFD continuous if no point force there.\n• Point force → jump in SFD equal to the force; BMD kink (slope change) but no jump.\n• EI change alters curvature M/EI, not equilibrium jumps on SFD/BMD.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• UDL start/stop → kink in SFD (change of slope), smooth BMD curvature change.\n• Relate dM/dx = V and dV/dx = −w to diagnose diagram signatures.",
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
    "explanation": "CORRECT: Laminar\n\nWHY CORRECT:\nRe = VD/ν = 0.02×0.05/1e-6 = 1000 < 2300. That uniquely matches “Laminar”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nRe = VD/ν = 0.02×0.05/1e-6 = 1000 < 2300.\nFinal keyed result: Laminar.\n\nTRAP ANALYSIS (every wrong option):\nA) Turbulent: is a standard distractor for this stem (A misreads the threshold). It does not produce “Laminar” under the correct governing relation.\nB) Ideal/inviscid only: is a standard distractor for this stem (A misreads the threshold). It does not produce “Laminar” under the correct governing relation.\nD) Sonic: is a standard distractor for this stem (A misreads the threshold). It does not produce “Laminar” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Write continuity / Bernoulli / momentum / Euler turbine equation matching the stem. (stem data include: 50 mm, 0.02 m, 1, 10).\n• Manometer: identify which heads cancel when elevations match.\n• Pump/turbine operating point = curve intersection, not nameplate arithmetic.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Re regime before friction-factor charts.\n• Cavitation / NPSH when local pressure approaches vapour pressure.",
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
    "explanation": "CORRECT: The rising system head shifts each pump to a lower individual discharge\n\nWHY CORRECT:\nActual duty is the new pump-system intersection, not arithmetic addition at fixed head.\n\nCALCULATION:\nFinal keyed result: The rising system head shifts each pump to a lower individual discharge.\n\nTRAP ANALYSIS (every wrong option):\nB) Parallel operation halves static head: treats static head as pump-dependent; static head is a system property.\nC) Pump speed automatically halves: invents an automatic speed/area change not stated in the stem.\nD) Pipe area doubles: invents an automatic speed/area change not stated in the stem.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Parallel identical pumps: Q adds at a given head, but the operating point is intersection with the system curve.\n• Rising system head means each pump runs at lower individual Q than the single-pump duty — total < 2× single.\n• Static head is a system property — parallel operation does not halve static head.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Series pumps add head at a given Q; intersect system curve again.\n• Affinity laws: Q∝N, H∝N², P∝N³ for similar conditions.",
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
    "explanation": "CORRECT: Pelton\n\nWHY CORRECT:\nan impulse Pelton unit suits high head and low flow. That uniquely matches “Pelton”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Kaplan: is a standard distractor for this stem (Francis is the plausible medium-head alternative). It does not produce “Pelton” under the correct governing relation.\nB) Francis: is a standard distractor for this stem (Francis is the plausible medium-head alternative). It does not produce “Pelton” under the correct governing relation.\nD) Propeller: is a standard distractor for this stem (Francis is the plausible medium-head alternative). It does not produce “Pelton” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Write continuity / Bernoulli / momentum / Euler turbine equation matching the stem. (stem data include: 320 m).\n• Manometer: identify which heads cancel when elevations match.\n• Pump/turbine operating point = curve intersection, not nameplate arithmetic.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Re regime before friction-factor charts.\n• Cavitation / NPSH when local pressure approaches vapour pressure.",
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
    "explanation": "CORRECT: Parabolic velocity; shear rising linearly to a wall maximum\n\nWHY CORRECT:\nFigure curves 2+C — no-slip Hagen–Poiseuille velocity is parabolic; Newtonian laminar pipe shear is zero on the centreline and rises linearly to a wall maximum.\n\nCALCULATION:\nfigure curves 2+C — no-slip Hagen–Poiseuille velocity is parabolic; Newtonian laminar pipe shear is zero on the centreline and rises linearly to a wall maximum.\nFinal keyed result: Parabolic velocity; shear rising linearly to a wall maximum.\n\nTRAP ANALYSIS (every wrong option):\nA) Flat velocity; maximum centreline shear: describes a turbulent-like flat profile / wrong shear pairing for laminar pipe flow.\nB) Parabolic velocity; zero wall shear: picks parabolic velocity but wrongly zeros wall shear (wall shear is maximum).\nC) Linear velocity; uniform shear: describes Couette-type linear profile, not Hagen–Poiseuille pipe flow.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Hagen–Poiseuille: u(r) = umax(1−(r/R)²) — parabolic; no-slip at wall. (stem data include: 1, 3 ).\n• Newtonian laminar pipe: τ(r) = τw·(r/R) — zero on centreline, max at wall.\n• Flat velocity ≈ turbulent core; linear velocity + uniform shear ≈ Couette — not pressure-driven pipe laminar.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Re = VD/ν; laminar if Re ≲ 2000 for pipes.\n• τw = (ΔP)·R/(2L) from axial force balance.",
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
    "explanation": "CORRECT: 1-q,2-r,3-p,4-s\n\nWHY CORRECT:\nPelton-q, Francis-r, Kaplan-p and pump-s. That uniquely matches “1-q,2-r,3-p,4-s”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) 1-p,2-q,3-r,4-s: is a standard distractor for this stem (C interchanges Francis and Kaplan). It does not produce “1-q,2-r,3-p,4-s” under the correct governing relation.\nB) 1-r,2-p,3-q,4-s: is a standard distractor for this stem (C interchanges Francis and Kaplan). It does not produce “1-q,2-r,3-p,4-s” under the correct governing relation.\nC) 1-q,2-p,3-r,4-s: is a standard distractor for this stem (C interchanges Francis and Kaplan). It does not produce “1-q,2-r,3-p,4-s” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Write continuity / Bernoulli / momentum / Euler turbine equation matching the stem. (stem data include: 1, 2, 3, 4).\n• Manometer: identify which heads cancel when elevations match.\n• Pump/turbine operating point = curve intersection, not nameplate arithmetic.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Re regime before friction-factor charts.\n• Cavitation / NPSH when local pressure approaches vapour pressure.",
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
    "explanation": "CORRECT: 785 N, 7.85 kW\n\nWHY CORRECT:\nrelative speed 20 m/s → ṁ≈39.3 kg/s; F≈785 N; power=Fu≈7.85 kW. That uniquely matches “785 N, 7.85 kW”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nrelative speed 20 m/s → ṁ≈39.3 kg/s; F≈785 N; power=Fu≈7.85 kW.\nFinal keyed result: 785 N, 7.85 kW.\n\nTRAP ANALYSIS (every wrong option):\nA) 900 N, 9.0 kW: is a standard distractor for this stem (C uses absolute jet speed for ṁ; B halves relative speed inconsistently; A underestimates ṁ on the relative-speed path). It does not produce “785 N, 7.85 kW” under the correct governing relation.\nB) 1178 N, 11.8 kW: is a standard distractor for this stem (C uses absolute jet speed for ṁ; B halves relative speed inconsistently; A underestimates ṁ on the relative-speed path). It does not produce “785 N, 7.85 kW” under the correct governing relation.\nC) 1571 N, 15.7 kW: is a standard distractor for this stem (C uses absolute jet speed for ṁ; B halves relative speed inconsistently; A underestimates ṁ on the relative-speed path). It does not produce “785 N, 7.85 kW” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Write continuity / Bernoulli / momentum / Euler turbine equation matching the stem. (stem data include: 50 mm, 30 m, 10 m).\n• Manometer: identify which heads cancel when elevations match.\n• Pump/turbine operating point = curve intersection, not nameplate arithmetic.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Re regime before friction-factor charts.\n• Cavitation / NPSH when local pressure approaches vapour pressure.",
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
    "explanation": "CORRECT: Cavitation\n\nWHY CORRECT:\nvapour formation and collapse at the eye produce the observed signature. That uniquely matches “Cavitation”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Water hammer at delivery valve: is a standard distractor for this stem (bearing faults do not explain pitting at the hydraulic low-pressure zone). It does not produce “Cavitation” under the correct governing relation.\nB) Bearing misalignment only: is a standard distractor for this stem (bearing faults do not explain pitting at the hydraulic low-pressure zone). It does not produce “Cavitation” under the correct governing relation.\nD) Laminar-flow transition: is a standard distractor for this stem (bearing faults do not explain pitting at the hydraulic low-pressure zone). It does not produce “Cavitation” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Write continuity / Bernoulli / momentum / Euler turbine equation matching the stem.\n• Manometer: identify which heads cancel when elevations match.\n• Pump/turbine operating point = curve intersection, not nameplate arithmetic.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Re regime before friction-factor charts.\n• Cavitation / NPSH when local pressure approaches vapour pressure.",
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
    "explanation": "CORRECT: 2.4 kJ/kg\n\nWHY CORRECT:\nW = u(Vw1 − Vw2)/1000 = 40×(80 − 20)/1000 = 2.4 kJ/kg. That uniquely matches “2.4 kJ/kg”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nW = u(Vw1 − Vw2)/1000 = 40×(80 − 20)/1000 = 2.4 kJ/kg.\nFinal keyed result: 2.4 kJ/kg.\n\nTRAP ANALYSIS (every wrong option):\nA) 1.2 kJ/kg: is a standard distractor for this stem (C = 3.2 omits outlet whirl; D = 4.0 adds Vw2; A = 1.2 halves the whirl change). It does not produce “2.4 kJ/kg” under the correct governing relation.\nC) 3.2 kJ/kg: is a standard distractor for this stem (C = 3.2 omits outlet whirl; D = 4.0 adds Vw2; A = 1.2 halves the whirl change). It does not produce “2.4 kJ/kg” under the correct governing relation.\nD) 4.0 kJ/kg: is a standard distractor for this stem (C = 3.2 omits outlet whirl; D = 4.0 adds Vw2; A = 1.2 halves the whirl change). It does not produce “2.4 kJ/kg” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Euler work W = u(Vw1 − Vw2)/1000 kJ/kg when u,Vw in m/s (same-sense Vw2 subtracts). (stem data include: 40 m, 1 , 80 m, 2 ).\n• Omitting outlet whirl or flipping its sign are classic traps (3.2 vs 2.4 vs 4.0 in this FLT).\n• For Pelton, Vw2 often small; reaction turbines need both triangles.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Hydraulic efficiency ηh = u(Vw1−Vw2)/ (V1²/2) forms — know the definition used in the stem.\n• Degree of reaction = static enthalpy drop / total enthalpy drop in runner.",
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
    "explanation": "CORRECT: Bolt 3\n\nWHY CORRECT:\nBolt 3 (lower-right) has the largest adverse vector sum of direct shear P/4 and torsional shear from M = P e. That uniquely matches “Bolt 3”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nBolt 3 (lower-right) has the largest adverse vector sum of direct shear P/4 and torsional shear from M = P e.\nFinal keyed result: Bolt 3.\n\nTRAP ANALYSIS (every wrong option):\nA) Bolt 1: is a standard distractor for this stem (farthest bolt is not automatic without vector direction). It does not produce “Bolt 3” under the correct governing relation.\nB) Bolt 2: is a standard distractor for this stem (farthest bolt is not automatic without vector direction). It does not produce “Bolt 3” under the correct governing relation.\nD) Bolt 4: is a standard distractor for this stem (farthest bolt is not automatic without vector direction). It does not produce “Bolt 3” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• In-plane eccentric load: each bolt gets primary shear P/n plus secondary (torsional) shear M·r / Σr². (stem data include: 50 kN, 120 mm, 180 mm, 250 mm).\n• Critical bolt maximises the vector sum of primary and secondary shear — not always the farthest alone.\n• M = P·e about the bolt-group CG.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Out-of-plane bracket (Type II): bolts in tension+shear — interaction (Vb/Vdb)²+(Tb/Tdb)² ≤ 1.\n• Pitch/gauge limits and edge distances still apply after force check.",
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
    "explanation": "CORRECT: 409 kN yielding\n\nWHY CORRECT:\nyielding ≈409 kN; rupture ≈428 kN; lesser governs. That uniquely matches “409 kN yielding”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nyielding ≈409 kN; rupture ≈428 kN; lesser governs.\nFinal keyed result: 409 kN yielding.\n\nTRAP ANALYSIS (every wrong option):\nA) 428 kN rupture: is a standard distractor for this stem (A is a valid non-governing value; C ignores γm0; D understates rupture). It does not produce “409 kN yielding” under the correct governing relation.\nB) 450 kN yielding: is a standard distractor for this stem (A is a valid non-governing value; C ignores γm0; D understates rupture). It does not produce “409 kN yielding” under the correct governing relation.\nC) 380 kN rupture: is a standard distractor for this stem (A is a valid non-governing value; C ignores γm0; D understates rupture). It does not produce “409 kN yielding” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Tension: min of yielding Ag fy/γm0 and rupture 0.9 An fu/γm1. (stem data include: 1800 mm, 1450 mm, 250 MPa, 410 MPa).\n• Bolts: shear / bearing / interaction; eccentric → vector resultant.\n• Net section with stagger: An = [b − ndh + Σs²/4g] t.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Block shear path selection.\n• Weld throat = 0.7 S for fillet; length and end returns.",
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
    "explanation": "CORRECT: A true, R false\n\nWHY CORRECT:\nA is true; lacing is designed for transverse shear and may experience compression.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Both true; R explains A: is a standard distractor for this stem (“tension-only” confuses ideal truss action with design forces). It does not produce “A true, R false” under the correct governing relation.\nB) Both true; R does not explain A: is a standard distractor for this stem (“tension-only” confuses ideal truss action with design forces). It does not produce “A true, R false” under the correct governing relation.\nC) A false, R true: is a standard distractor for this stem (“tension-only” confuses ideal truss action with design forces). It does not produce “A true, R false” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Tension: min of yielding Ag fy/γm0 and rupture 0.9 An fu/γm1.\n• Bolts: shear / bearing / interaction; eccentric → vector resultant.\n• Net section with stagger: An = [b − ndh + Σs²/4g] t.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Block shear path selection.\n• Weld throat = 0.7 S for fillet; length and end returns.",
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
    "explanation": "CORRECT: The axis that produces the larger slenderness ratio Le/r governs the flexural-buckling strength\n\nWHY CORRECT:\nbuckling strength follows the larger slenderness demand. That uniquely matches “The axis that produces the larger slenderness ratio Le/r governs the flexural-buckling strength”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) The axis with the larger effective length always governs: is a standard distractor for this stem (A ignores radius; B ignores restraint length). It does not produce “The axis that produces the larger slenderness ratio Le/r governs the flexural-buckling strength” under the correct governing relation.\nB) The axis with the larger radius of gyration always governs: is a standard distractor for this stem (A ignores radius; B ignores restraint length). It does not produce “The axis that produces the larger slenderness ratio Le/r governs the flexural-buckling strength” under the correct governing relation.\nD) Both axes may be ignored if the section is compact: is a standard distractor for this stem (A ignores radius; B ignores restraint length). It does not produce “The axis that produces the larger slenderness ratio Le/r governs the flexural-buckling strength” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Tension: min of yielding Ag fy/γm0 and rupture 0.9 An fu/γm1.\n• Bolts: shear / bearing / interaction; eccentric → vector resultant.\n• Net section with stagger: An = [b − ndh + Σs²/4g] t.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Block shear path selection.\n• Weld throat = 0.7 S for fillet; length and end returns.",
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
    "explanation": "CORRECT: Throat\n\nWHY CORRECT:\nthis is effective throat geometry. That uniquely matches “Throat”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) Leg: is a standard distractor for this stem (leg is measured along the connected plate surface). It does not produce “Throat” under the correct governing relation.\nC) Toe: is a standard distractor for this stem (leg is measured along the connected plate surface). It does not produce “Throat” under the correct governing relation.\nD) Root gap: is a standard distractor for this stem (leg is measured along the connected plate surface). It does not produce “Throat” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Tension: min of yielding Ag fy/γm0 and rupture 0.9 An fu/γm1.\n• Bolts: shear / bearing / interaction; eccentric → vector resultant.\n• Net section with stagger: An = [b − ndh + Σs²/4g] t.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Block shear path selection.\n• Weld throat = 0.7 S for fillet; length and end returns.",
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
    "explanation": "CORRECT: Section type, axis of buckling and fabrication class together select the buckling curve\n\nWHY CORRECT:\nIS curve selection depends on section/axis/imperfection class. That uniquely matches “Section type, axis of buckling and fabrication class together select the buckling curve”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) Yield stress alone fixes the curve for every section: is a standard distractor for this stem (B oversimplifies to fy only). It does not produce “Section type, axis of buckling and fabrication class together select the buckling curve” under the correct governing relation.\nC) Any curve may be used if λ < 40: is a standard distractor for this stem (B oversimplifies to fy only). It does not produce “Section type, axis of buckling and fabrication class together select the buckling curve” under the correct governing relation.\nD) Curves apply only to angles: is a standard distractor for this stem (B oversimplifies to fy only). It does not produce “Section type, axis of buckling and fabrication class together select the buckling curve” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Tension: min of yielding Ag fy/γm0 and rupture 0.9 An fu/γm1.\n• Bolts: shear / bearing / interaction; eccentric → vector resultant.\n• Net section with stagger: An = [b − ndh + Σs²/4g] t.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Block shear path selection.\n• Weld throat = 0.7 S for fillet; length and end returns.",
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
    "explanation": "CORRECT: About 1.12 My\n\nWHY CORRECT:\nMp = Zp fy ≈ (shape factor)×My for the same fy. That uniquely matches “About 1.12 My”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nMp = Zp fy ≈ (shape factor)×My for the same fy.\nFinal keyed result: About 1.12 My.\n\nTRAP ANALYSIS (every wrong option):\nB) Equal to My always: is a standard distractor for this stem (D invents a universal factor of 2). It does not produce “About 1.12 My” under the correct governing relation.\nC) 0.5 My: is a standard distractor for this stem (D invents a universal factor of 2). It does not produce “About 1.12 My” under the correct governing relation.\nD) Twice My for all I-sections: is a standard distractor for this stem (D invents a universal factor of 2). It does not produce “About 1.12 My” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Tension: min of yielding Ag fy/γm0 and rupture 0.9 An fu/γm1. (stem data include: 1.12 ).\n• Bolts: shear / bearing / interaction; eccentric → vector resultant.\n• Net section with stagger: An = [b − ndh + Σs²/4g] t.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Block shear path selection.\n• Weld throat = 0.7 S for fillet; length and end returns.",
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
    "explanation": "CORRECT: Q, 1810 mm²\n\nWHY CORRECT:\nPath P: An=(240−2×22)×10=1960 mm². Path Q: credits 2×(30²)/(4×60)=7.5 mm → An=(240−66+7.5)×10≈1815 mm² ≈1810. Adopt smaller An → Q.\n\nCALCULATION:\nPath P: An=(240−2×22)×10=1960 mm². Path Q: credits 2×(30²)/(4×60)=7.5 mm → An=(240−66+7.5)×10≈1815 mm² ≈1810. Adopt smaller An → Q.\nFinal keyed result: Q, 1810 mm².\n\nTRAP ANALYSIS (every wrong option):\nA) P, 1960 mm²: checks only the straight (chain) path and misses the governing zig-zag net area.\nB) P, 1740 mm²: is a standard distractor for this stem (A checks only the straight path). It does not produce “Q, 1810 mm²” under the correct governing relation.\nC) Q, 2030 mm²: is a standard distractor for this stem (A checks only the straight path). It does not produce “Q, 1810 mm²” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• An = [b − n dh + Σ(s²/(4g))] t ; adopt the path with minimum An. (stem data include: 240 mm, 10 mm, 22 mm, 2 ).\n• Chain path: no stagger credit; zig-zag path: add each s²/(4g) along that path.\n• dh = hole diameter for design (bolt dia + clearance as per code practice in the stem).\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Block shear: separate tear-out paths in shear and tension — compare with net section rupture.\n• Stagger credit cannot make An > gross area.",
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
    "explanation": "CORRECT: Revise pitch to at least 50 mm\n\nWHY CORRECT:\nminimum = 50 mm. That uniquely matches “Revise pitch to at least 50 mm”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nminimum = 50 mm.\nFinal keyed result: Revise pitch to at least 50 mm.\n\nTRAP ANALYSIS (every wrong option):\nA) Accept 45 mm because it exceeds twice diameter: is a standard distractor for this stem (A uses the wrong detailing multiple). It does not produce “Revise pitch to at least 50 mm” under the correct governing relation.\nB) Reduce hole diameter only: is a standard distractor for this stem (A uses the wrong detailing multiple). It does not produce “Revise pitch to at least 50 mm” under the correct governing relation.\nC) Accept if plate is thicker than bolt: is a standard distractor for this stem (A uses the wrong detailing multiple). It does not produce “Revise pitch to at least 50 mm” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• In-plane eccentric load: each bolt gets primary shear P/n plus secondary (torsional) shear M·r / Σr². (stem data include: 20 mm, 45 mm, 2.5 ).\n• Critical bolt maximises the vector sum of primary and secondary shear — not always the farthest alone.\n• M = P·e about the bolt-group CG.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Out-of-plane bracket (Type II): bolts in tension+shear — interaction (Vb/Vdb)²+(Tb/Tdb)² ≤ 1.\n• Pitch/gauge limits and edge distances still apply after force check.",
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
    "explanation": "CORRECT: Grind/repair to approved procedure, re-inspect, then accept only if limits are met\n\nWHY CORRECT:\nundercut is a rejectable discontinuity on a primary path until repaired to procedure. That uniquely matches “Grind/repair to approved procedure, re-inspect, then accept only if limits are met”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) Accept because the throat looks large: is a standard distractor for this stem (B confuses appearance with acceptance criteria). It does not produce “Grind/repair to approved procedure, re-inspect, then accept only if limits are met” under the correct governing relation.\nC) Fill undercut with paint only: is a standard distractor for this stem (B confuses appearance with acceptance criteria). It does not produce “Grind/repair to approved procedure, re-inspect, then accept only if limits are met” under the correct governing relation.\nD) Ignore undercut on the compression side always: is a standard distractor for this stem (B confuses appearance with acceptance criteria). It does not produce “Grind/repair to approved procedure, re-inspect, then accept only if limits are met” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Tension: min of yielding Ag fy/γm0 and rupture 0.9 An fu/γm1.\n• Bolts: shear / bearing / interaction; eccentric → vector resultant.\n• Net section with stagger: An = [b − ndh + Σs²/4g] t.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Block shear path selection.\n• Weld throat = 0.7 S for fillet; length and end returns.",
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
    "explanation": "CORRECT: Weak-axis (larger λ) flexural buckling\n\nWHY CORRECT:\nthe larger Le/r governs flexural-buckling strength. That uniquely matches “Weak-axis (larger λ) flexural buckling”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Strong-axis curve only: does not equal Le/r = 2100/35 = 60 for the given effective length and rmin.\nB) Local flange buckling only: does not equal Le/r = 2100/35 = 60 for the given effective length and rmin.\nC) Shear buckling of the web only: does not equal Le/r = 2100/35 = 60 for the given effective length and rmin.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Slenderness λ = Le / rmin with Le and r in the same length unit (usually mm).\n• If the stem already gives effective length Le, do not multiply again by an end-fix K.\n• Buckling capacity falls as λ rises; moving area away from the weak axis raises rmin and lowers λ.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Both ends fixed → approximate K≈0.65 (IS 800) so Le=K·L; recompute λ with that Le.\n• Which Euler assumption fails if the strut has measurable initial crookedness or load eccentricity?\n• Compare λ against the limiting non-dimensional effective slenderness for the section class / curve.",
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
    "explanation": "CORRECT: Biaxial bending interaction with stability and serviceability checks\n\nWHY CORRECT:\noblique loading resolves about both axes, and restraint affects stability. That uniquely matches “Biaxial bending interaction with stability and serviceability checks”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Major-axis bending only: is a standard distractor for this stem (A ignores the weak-axis component). It does not produce “Biaxial bending interaction with stability and serviceability checks” under the correct governing relation.\nB) Axial tension only: is a standard distractor for this stem (A ignores the weak-axis component). It does not produce “Biaxial bending interaction with stability and serviceability checks” under the correct governing relation.\nC) Minor-axis bending only: is a standard distractor for this stem (A ignores the weak-axis component). It does not produce “Biaxial bending interaction with stability and serviceability checks” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• σ = P/A with A = πd²/4 for solid round bars; keep P in N and A in mm² → σ in N/mm² (=MPa).\n• Service check vs fy is not the same as design check vs fy/γm0 (e.g. Fe250 → 250/1.1 ≈ 227 MPa).\n• Using radius instead of diameter understates A by 4× and overstates stress by 4×.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Same bar under sudden axial load: σ_sudden ≈ 2 σ_gradual from energy equivalence (ideal).\n• Temperature lock-up with fixed ends: σ = α E ΔT; set equal to fy/γm0 to find limiting ΔT.",
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
    "explanation": "CORRECT: Reduced net stress increase and settlement demand\n\nWHY CORRECT:\nExcavated soil weight offsets part of structural pressure; it does not cancel gross pressure or eliminate geotechnical checks.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Guaranteed absence of heave: is a standard distractor for this stem (B confuses reduced net pressure with zero gross pressure). It does not produce “Reduced net stress increase and settlement demand” under the correct governing relation.\nB) Zero gross contact pressure: is a standard distractor for this stem (B confuses reduced net pressure with zero gross pressure). It does not produce “Reduced net stress increase and settlement demand” under the correct governing relation.\nC) No bearing-capacity check: is a standard distractor for this stem (B confuses reduced net pressure with zero gross pressure). It does not produce “Reduced net stress increase and settlement demand” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Bearing: qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (+ shape/depth factors as required).\n• Settlement: sum layer Sc with Cc, e0, σ′0, Δσ.\n• Seepage: q=kH Nf/Nd; exit gradient vs icritical.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Plate load interpretation limits for clay vs sand.\n• Rankine Ka=(1−sinφ)/(1+sinφ); active vs passive.",
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
    "explanation": "CORRECT: 95 mm\n\nWHY CORRECT:\nSc1=0.20×2.0/(1+1.00)×log10(2)=0.0602 m≈60 mm; Sc2=0.20×2.0/(1+0.90)×log10(300/200)≈0.0371 m≈37 mm; total ≈97 mm → closest 95 mm.\n\nCALCULATION:\nSc1=0.20×2.0/(1+1.00)×log10(2)=0.0602 m≈60 mm; Sc2=0.20×2.0/(1+0.90)×log10(300/200)≈0.0371 m≈37 mm; total ≈97 mm → closest 95 mm.\nFinal keyed result: 95 mm.\n\nTRAP ANALYSIS (every wrong option):\nA) 42 mm: applies the larger stress increment (or wrong σ′0) to both layers.\nB) 68 mm: applies the larger stress increment (or wrong σ′0) to both layers.\nC) 126 mm: applies the larger stress increment (or wrong σ′0) to both layers.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Sc = [Cc H/(1+e0)] log10((σ′0+Δσ)/σ′0) per layer; sum layers. (stem data include: 1 , 1 , 2.0 m, 01 ).\n• Use log10; wrong stress increment on both layers is a common trap.\n• Normally consolidated clay uses Cc; overconsolidated may need Cr until σ′p.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Time factor Tv = cv t / d²; drainage path d halves for double drainage → t/4.\n• Immediate settlement vs consolidation settlement — which dominates for sand vs clay?",
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
    "explanation": "CORRECT: Combined or strap footing designed about the load resultant\n\nWHY CORRECT:\ncoupling controls eccentricity and soil-pressure distribution without trespass. That uniquely matches “Combined or strap footing designed about the load resultant”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Smaller eccentric isolated footing: is a standard distractor for this stem (A worsens eccentric pressure). It does not produce “Combined or strap footing designed about the load resultant” under the correct governing relation.\nC) Unconnected pedestal: is a standard distractor for this stem (A worsens eccentric pressure). It does not produce “Combined or strap footing designed about the load resultant” under the correct governing relation.\nD) Interior-column pile only: is a standard distractor for this stem (A worsens eccentric pressure). It does not produce “Combined or strap footing designed about the load resultant” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Bearing: qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (+ shape/depth factors as required).\n• Settlement: sum layer Sc with Cc, e0, σ′0, Δσ.\n• Seepage: q=kH Nf/Nd; exit gradient vs icritical.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Plate load interpretation limits for clay vs sand.\n• Rankine Ka=(1−sinφ)/(1+sinφ); active vs passive.",
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
    "explanation": "CORRECT: Bearing may pass while settlement still governs; enlarge/deepen the footing, improve the ground, or revise until both criteria are satisfied\n\nWHY CORRECT:\nbearing capacity and settlement are independent acceptance criteria. That uniquely matches “Bearing may pass while settlement still governs; enlarge/deepen the footing, improve the ground, or revise until both criteria are satisfied”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) Accept because bearing pressure governs all foundation checks: is a standard distractor for this stem (B collapses both into one check). It does not produce “Bearing may pass while settlement still governs; enlarge/deepen the footing, improve the ground, or revise until both criteria are satisfied” under the correct governing relation.\nC) Reduce only the concrete grade of the footing: is a standard distractor for this stem (B collapses both into one check). It does not produce “Bearing may pass while settlement still governs; enlarge/deepen the footing, improve the ground, or revise until both criteria are satisfied” under the correct governing relation.\nD) Ignore settlement for footings shallower than 1.5 m: is a standard distractor for this stem (B collapses both into one check). It does not produce “Bearing may pass while settlement still governs; enlarge/deepen the footing, improve the ground, or revise until both criteria are satisfied” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Sc = [Cc H/(1+e0)] log10((σ′0+Δσ)/σ′0) per layer; sum layers.\n• Use log10; wrong stress increment on both layers is a common trap.\n• Normally consolidated clay uses Cc; overconsolidated may need Cr until σ′p.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Time factor Tv = cv t / d²; drainage path d halves for double drainage → t/4.\n• Immediate settlement vs consolidation settlement — which dominates for sand vs clay?",
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
    "explanation": "CORRECT: 200 kPa\n\nWHY CORRECT:\n600/3 = 200 kPa. That uniquely matches “200 kPa”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\n600/3 = 200 kPa.\nFinal keyed result: 200 kPa.\n\nTRAP ANALYSIS (every wrong option):\nA) 600 kPa: is a standard distractor for this stem (B multiplies by the safety factor). It does not produce “200 kPa” under the correct governing relation.\nB) 1800 kPa: is a standard distractor for this stem (B multiplies by the safety factor). It does not produce “200 kPa” under the correct governing relation.\nD) 100 kPa: is a standard distractor for this stem (B multiplies by the safety factor). It does not produce “200 kPa” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Bearing: qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (+ shape/depth factors as required). (stem data include: 600 kPa, 3).\n• Settlement: sum layer Sc with Cc, e0, σ′0, Δσ.\n• Seepage: q=kH Nf/Nd; exit gradient vs icritical.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Plate load interpretation limits for clay vs sand.\n• Rankine Ka=(1−sinφ)/(1+sinφ); active vs passive.",
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
    "explanation": "CORRECT: Compare individual sum with block capacity, adopt the lower, then check settlement\n\nWHY CORRECT:\nclose spacing permits block action; settlement remains separate. That uniquely matches “Compare individual sum with block capacity, adopt the lower, then check settlement”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nFinal keyed result: Compare individual sum with block capacity, adopt the lower, then check settlement.\n\nTRAP ANALYSIS (every wrong option):\nA) Use individual-pile sum only: is a standard distractor for this stem (A ignores the figure’s plausible block mechanism). It does not produce “Compare individual sum with block capacity, adopt the lower, then check settlement” under the correct governing relation.\nC) Use block capacity only and ignore settlement: uses only one failure model and skips the lesser-of capacity / settlement checks.\nD) Assume group efficiency exceeds unity: assumes group efficiency > 1 without justification.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Close spacing (e.g. s≈3D): check block failure around the group perimeter as well as ΣQ_single. (stem data include: 3, 3 , 9 , 3).\n• Adopt the lesser of Σ individual and block capacity; settlement is a separate serviceability check.\n• Group efficiency need not exceed 1 — do not assume η>1 without basis.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Block capacity uses cohesion on the block perimeter × length + tip on block area (clay α-method variants).\n• Negative skin friction when fill settles around piles — reduces available capacity.",
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
    "explanation": "CORRECT: 307 kPa\n\nWHY CORRECT:\nFrom 11 to 25 mm over 100 kPa, one additional millimetre gives about 7.1 kPa; ≈307 kPa.\n\nCALCULATION:\nfrom 11 to 25 mm over 100 kPa, one additional millimetre gives about 7.1 kPa; ≈307 kPa.\nFinal keyed result: 307 kPa.\n\nTRAP ANALYSIS (every wrong option):\nA) 300 kPa: is a standard distractor for this stem (A is conservative but not the requested interpolation). It does not produce “307 kPa” under the correct governing relation.\nB) 400 kPa: is a standard distractor for this stem (A is conservative but not the requested interpolation). It does not produce “307 kPa” under the correct governing relation.\nC) 325 kPa: is a standard distractor for this stem (A is conservative but not the requested interpolation). It does not produce “307 kPa” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Bearing: qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (+ shape/depth factors as required). (stem data include: 100, 200, 300 , 400 kPa).\n• Settlement: sum layer Sc with Cc, e0, σ′0, Δσ.\n• Seepage: q=kH Nf/Nd; exit gradient vs icritical.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Plate load interpretation limits for clay vs sand.\n• Rankine Ka=(1−sinφ)/(1+sinφ); active vs passive.",
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
    "explanation": "CORRECT: 450 kN\n\nWHY CORRECT:\nnet =12 mm; settlement criterion ≈750 kN, but separate cap =450 kN. That uniquely matches “450 kN”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nnet =12 mm; settlement criterion ≈750 kN, but separate cap =450 kN.\nFinal keyed result: 450 kN.\n\nTRAP ANALYSIS (every wrong option):\nA) 900 kN: is a standard distractor for this stem (B ignores the second restriction). It does not produce “450 kN” under the correct governing relation.\nB) 750 kN: is a standard distractor for this stem (B ignores the second restriction). It does not produce “450 kN” under the correct governing relation.\nD) 300 kN: is a standard distractor for this stem (B ignores the second restriction). It does not produce “450 kN” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Close spacing (e.g. s≈3D): check block failure around the group perimeter as well as ΣQ_single. (stem data include: 18 mm, 900 kN, 6 mm, 10 mm).\n• Adopt the lesser of Σ individual and block capacity; settlement is a separate serviceability check.\n• Group efficiency need not exceed 1 — do not assume η>1 without basis.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Block capacity uses cohesion on the block perimeter × length + tip on block area (clay α-method variants).\n• Negative skin friction when fill settles around piles — reduces available capacity.",
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
    "explanation": "CORRECT: Pause and secure the work, monitor movement, assess undermining, and design support/underpinning before resuming\n\nWHY CORRECT:\nTemporary stability and the existing footing’s support must be secured before work resumes.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) Deepen excavation quickly: is a standard distractor for this stem (C treats the symptom, not ground loss). It does not produce “Pause and secure the work, monitor movement, assess undermining, and design support/underpinning before resuming” under the correct governing relation.\nC) Grout cracks cosmetically: is a standard distractor for this stem (C treats the symptom, not ground loss). It does not produce “Pause and secure the work, monitor movement, assess undermining, and design support/underpinning before resuming” under the correct governing relation.\nD) Reduce concrete grade in the new footing: is a standard distractor for this stem (C treats the symptom, not ground loss). It does not produce “Pause and secure the work, monitor movement, assess undermining, and design support/underpinning before resuming” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Bearing: qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (+ shape/depth factors as required).\n• Settlement: sum layer Sc with Cc, e0, σ′0, Δσ.\n• Seepage: q=kH Nf/Nd; exit gradient vs icritical.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Plate load interpretation limits for clay vs sand.\n• Rankine Ka=(1−sinφ)/(1+sinφ); active vs passive.",
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
    "explanation": "CORRECT: Transfer moment so footing reactions are better centred\n\nWHY CORRECT:\nthe strap couples footing moments/reactions. That uniquely matches “Transfer moment so footing reactions are better centred”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Drain groundwater: is a standard distractor for this stem (B contradicts the stated isolation from soil). It does not produce “Transfer moment so footing reactions are better centred” under the correct governing relation.\nB) Carry uniform soil pressure as a raft: is a standard distractor for this stem (B contradicts the stated isolation from soil). It does not produce “Transfer moment so footing reactions are better centred” under the correct governing relation.\nD) Remove the exterior column load: is a standard distractor for this stem (B contradicts the stated isolation from soil). It does not produce “Transfer moment so footing reactions are better centred” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Bearing: qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (+ shape/depth factors as required).\n• Settlement: sum layer Sc with Cc, e0, σ′0, Δσ.\n• Seepage: q=kH Nf/Nd; exit gradient vs icritical.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Plate load interpretation limits for clay vs sand.\n• Rankine Ka=(1−sinφ)/(1+sinφ); active vs passive.",
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
    "explanation": "CORRECT: \\(8×10^{-5}\\) m³/s\n\nWHY CORRECT:\n\\(kH(N_f/N_d)=4×10^{-5}×6×4/12=8×10^{-5}\\). That uniquely matches “\\(8×10^{-5}\\) m³/s”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\n\\(kH(N_f/N_d)=4×10^{-5}×6×4/12=8×10^{-5}\\).\nFinal keyed result: \\(8×10^{-5}\\) m³/s.\n\nTRAP ANALYSIS (every wrong option):\nB) \\(2.4×10^{-4}\\) m³/s: is a standard distractor for this stem (B omits division by drops). It does not produce “\\(8×10^{-5}\\) m³/s” under the correct governing relation.\nC) \\(1.2×10^{-4}\\) m³/s: is a standard distractor for this stem (B omits division by drops). It does not produce “\\(8×10^{-5}\\) m³/s” under the correct governing relation.\nD) \\(4×10^{-5}\\) m³/s: is a standard distractor for this stem (B omits division by drops). It does not produce “\\(8×10^{-5}\\) m³/s” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• q = k H (Nf/Nd) per unit width; count Nf channels and Nd drops carefully. (stem data include: 4 , 12 , 6 m, 4).\n• Omitting /Nd inflates discharge (classic trap).\n• Exit gradient ie = Δh / Δl at exit; compare with critical ic = (G−1)/(1+e).\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Anisotropic soil: transform section before drawing the net.\n• Sheet pile: deeper embedment increases Nd and lowers q and exit gradient.",
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
    "explanation": "CORRECT: 16.0 kN/m³, 82%\n\nWHY CORRECT:\ndry =16.0; e≈0.655; S≈82.4%. That uniquely matches “16.0 kN/m³, 82%”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\ndry =16.0; e≈0.655; S≈82.4%.\nFinal keyed result: 16.0 kN/m³, 82%.\n\nTRAP ANALYSIS (every wrong option):\nB) 15.4 kN/m³, 75%: is a standard distractor for this stem (B understates γd; D fails to remove water mass). It does not produce “16.0 kN/m³, 82%” under the correct governing relation.\nC) 17.0 kN/m³, 96%: is a standard distractor for this stem (B understates γd; D fails to remove water mass). It does not produce “16.0 kN/m³, 82%” under the correct governing relation.\nD) 19.2 kN/m³, 100%: is a standard distractor for this stem (B understates γd; D fails to remove water mass). It does not produce “16.0 kN/m³, 82%” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Bearing: qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (+ shape/depth factors as required). (stem data include: 19.2 kN, 20%, 2.70 , 9.81 kN).\n• Settlement: sum layer Sc with Cc, e0, σ′0, Δσ.\n• Seepage: q=kH Nf/Nd; exit gradient vs icritical.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Plate load interpretation limits for clay vs sand.\n• Rankine Ka=(1−sinφ)/(1+sinφ); active vs passive.",
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
    "explanation": "CORRECT: 27%\n\nWHY CORRECT:\n48−21 =27%. That uniquely matches “27%”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\n48−21 =27%.\nFinal keyed result: 27%.\n\nTRAP ANALYSIS (every wrong option):\nA) 69%: is a standard distractor for this stem (A adds the limits). It does not produce “27%” under the correct governing relation.\nC) 21%: is a standard distractor for this stem (A adds the limits). It does not produce “27%” under the correct governing relation.\nD) 2.29%: is a standard distractor for this stem (A adds the limits). It does not produce “27%” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Bearing: qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (+ shape/depth factors as required). (stem data include: 48%, 21%).\n• Settlement: sum layer Sc with Cc, e0, σ′0, Δσ.\n• Seepage: q=kH Nf/Nd; exit gradient vs icritical.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Plate load interpretation limits for clay vs sand.\n• Rankine Ka=(1−sinφ)/(1+sinφ); active vs passive.",
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
    "explanation": "CORRECT: Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly\n\nWHY CORRECT:\nwater pressure is superposed on effective soil pressure. That uniquely matches “Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) Soil thrust becomes zero because submerged unit weight is lower: is a standard distractor for this stem (B notices buoyancy but omits hydrostatic loading). It does not produce “Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly” under the correct governing relation.\nC) Only wall self-weight changes: is a standard distractor for this stem (B notices buoyancy but omits hydrostatic loading). It does not produce “Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly” under the correct governing relation.\nD) Active coefficient becomes unity automatically: is a standard distractor for this stem (B notices buoyancy but omits hydrostatic loading). It does not produce “Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Bearing: qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (+ shape/depth factors as required).\n• Settlement: sum layer Sc with Cc, e0, σ′0, Δσ.\n• Seepage: q=kH Nf/Nd; exit gradient vs icritical.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Plate load interpretation limits for clay vs sand.\n• Rankine Ka=(1−sinφ)/(1+sinφ); active vs passive.",
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
    "explanation": "CORRECT: 16 years\n\nWHY CORRECT:\ndrainage path doubles, so time becomes fourfold =16 years. That uniquely matches “16 years”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\ndrainage path doubles, so time becomes fourfold =16 years.\nFinal keyed result: 16 years.\n\nTRAP ANALYSIS (every wrong option):\nA) 2 years: is a standard distractor for this stem (B assumes a linear path-time relation). It does not produce “16 years” under the correct governing relation.\nB) 8 years: is a standard distractor for this stem (B assumes a linear path-time relation). It does not produce “16 years” under the correct governing relation.\nD) 4 years: is a standard distractor for this stem (B assumes a linear path-time relation). It does not produce “16 years” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Sc = [Cc H/(1+e0)] log10((σ′0+Δσ)/σ′0) per layer; sum layers. (stem data include: 90%, 4 ).\n• Use log10; wrong stress increment on both layers is a common trap.\n• Normally consolidated clay uses Cc; overconsolidated may need Cr until σ′p.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Time factor Tv = cv t / d²; drainage path d halves for double drainage → t/4.\n• Immediate settlement vs consolidation settlement — which dominates for sand vs clay?",
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
    "explanation": "CORRECT: 1.00\n\nWHY CORRECT:\n\\((2.65−1)/(1+0.65)=1.0\\). That uniquely matches “1.00”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\n\\((2.65−1)/(1+0.65)=1.0\\).\nFinal keyed result: 1.00.\n\nTRAP ANALYSIS (every wrong option):\nA) 0.65: is a standard distractor for this stem (C uses only the numerator). It does not produce “1.00” under the correct governing relation.\nC) 1.65: is a standard distractor for this stem (C uses only the numerator). It does not produce “1.00” under the correct governing relation.\nD) 2.65: is a standard distractor for this stem (C uses only the numerator). It does not produce “1.00” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Bearing: qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (+ shape/depth factors as required). (stem data include: 2.65 , 0.65 ).\n• Settlement: sum layer Sc with Cc, e0, σ′0, Δσ.\n• Seepage: q=kH Nf/Nd; exit gradient vs icritical.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Plate load interpretation limits for clay vs sand.\n• Rankine Ka=(1−sinφ)/(1+sinφ); active vs passive.",
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
    "explanation": "CORRECT: Higher effort gives higher maximum dry density/lower OMC, but F fails the shown relative-compaction criterion\n\nWHY CORRECT:\nHigher effort raises MDD and lowers OMC; F is below the 95% MDD acceptance line of the higher-effort curve.\n\nCALCULATION:\nhigher effort raises MDD and lowers OMC; F is below the 95% MDD acceptance line of the higher-effort curve.\nFinal keyed result: Higher effort gives higher maximum dry density/lower OMC, but F fails the shown relative-compaction criterion.\n\nTRAP ANALYSIS (every wrong option):\nA) Higher effort lowers maximum dry density: reverses the MDD trend with compactive effort.\nB) F lies above the zero-air-void line: accepts a state above the zero-air-voids line, which is physically impossible.\nC) Effort does not shift OMC: denies the OMC shift that accompanies higher MDD under higher effort.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Higher compactive effort → higher MDD and lower OMC (curves shift up and left). (stem data include: 95%).\n• Relative compaction = γd,field / γd,MDD × 100%; specs often ≥95% of MDD.\n• No soil state plots above the zero-air-voids (ZAV) line.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Standard vs modified Proctor — which MDD to use in the acceptance clause?\n• Field dry density from sand replacement / core cutter + water content.",
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
    "explanation": "CORRECT: Both true; R explains A\n\nWHY CORRECT:\ndisturbance directly undermines representative mechanical parameters. That uniquely matches “Both true; R explains A”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Both true; R does not explain A: is a standard distractor for this stem (index description may remain usable, but structure-sensitive testing is affected). It does not produce “Both true; R explains A” under the correct governing relation.\nC) A true, R false: is a standard distractor for this stem (index description may remain usable, but structure-sensitive testing is affected). It does not produce “Both true; R explains A” under the correct governing relation.\nD) A false, R true: is a standard distractor for this stem (index description may remain usable, but structure-sensitive testing is affected). It does not produce “Both true; R explains A” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Bearing: qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (+ shape/depth factors as required).\n• Settlement: sum layer Sc with Cc, e0, σ′0, Δσ.\n• Seepage: q=kH Nf/Nd; exit gradient vs icritical.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Plate load interpretation limits for clay vs sand.\n• Rankine Ka=(1−sinφ)/(1+sinφ); active vs passive.",
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
    "explanation": "CORRECT: 48 kN/m\n\nWHY CORRECT:\nKa=1/3; thrust = 0.5×(1/3)×18×16 = 48 kN/m. That uniquely matches “48 kN/m”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nKa=1/3; thrust = 0.5×(1/3)×18×16 = 48 kN/m.\nFinal keyed result: 48 kN/m.\n\nTRAP ANALYSIS (every wrong option):\nA) 54 kN/m: is a standard distractor for this stem (C omits Ka; A uses Ka≈0.375; D uses half wrongly). It does not produce “48 kN/m” under the correct governing relation.\nC) 72 kN/m: is a standard distractor for this stem (C omits Ka; A uses Ka≈0.375; D uses half wrongly). It does not produce “48 kN/m” under the correct governing relation.\nD) 36 kN/m: is a standard distractor for this stem (C omits Ka; A uses Ka≈0.375; D uses half wrongly). It does not produce “48 kN/m” under the correct governing relation.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Bearing: qnu = c Nc + γ Df Nq + 0.5 γ B Nγ (+ shape/depth factors as required). (stem data include: 4 m, 30, 18 kN).\n• Settlement: sum layer Sc with Cc, e0, σ′0, Δσ.\n• Seepage: q=kH Nf/Nd; exit gradient vs icritical.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Plate load interpretation limits for clay vs sand.\n• Rankine Ka=(1−sinφ)/(1+sinφ); active vs passive.",
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
    "explanation": "CORRECT: 3 days\n\nWHY CORRECT:\nCORRECT: 3 days That uniquely matches “3 days”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 3 days\nFinal keyed result: 3 days.\n\nTRAP ANALYSIS (every wrong option):\nA) 2 days: uses a wrong idealisation or arithmetic path for this stem and does not yield “3 days”.\nC) 4 days: uses a wrong idealisation or arithmetic path for this stem and does not yield “3 days”.\nD) 6 days: uses a wrong idealisation or arithmetic path for this stem and does not yield “3 days”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Work: rate = 1/T; remaining work = 1 − done; time = remaining / combined rate. (stem data include: 12 , 3 ).\n• Average speed for equal distances = 2ab/(a+b), not (a+b)/2.\n• Percentage change: always identify the correct base.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Pipe/cistern: fill positive, leak negative rates.\n• CI/SI difference and successive percentage changes.",
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
    "explanation": "CORRECT: 15%\n\nWHY CORRECT:\nCORRECT: 15% That uniquely matches “15%”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 15%\nFinal keyed result: 15%.\n\nTRAP ANALYSIS (every wrong option):\nA) 12%: uses a wrong idealisation or arithmetic path for this stem and does not yield “15%”.\nC) 18%: uses a wrong idealisation or arithmetic path for this stem and does not yield “15%”.\nD) 20%: uses a wrong idealisation or arithmetic path for this stem and does not yield “15%”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Work: rate = 1/T; remaining work = 1 − done; time = remaining / combined rate. (stem data include: 8.0 , 9.2 ).\n• Average speed for equal distances = 2ab/(a+b), not (a+b)/2.\n• Percentage change: always identify the correct base.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Pipe/cistern: fill positive, leak negative rates.\n• CI/SI difference and successive percentage changes.",
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
    "explanation": "CORRECT: 12\n\nWHY CORRECT:\nCORRECT: 12 That uniquely matches “12”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 12\nFinal keyed result: 12.\n\nTRAP ANALYSIS (every wrong option):\nA) 7: uses a wrong idealisation or arithmetic path for this stem and does not yield “12”.\nB) 8: uses a wrong idealisation or arithmetic path for this stem and does not yield “12”.\nC) 10: uses a wrong idealisation or arithmetic path for this stem and does not yield “12”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Work: rate = 1/T; remaining work = 1 − done; time = remaining / combined rate. (stem data include: 5, 2 , 28 , 4).\n• Average speed for equal distances = 2ab/(a+b), not (a+b)/2.\n• Percentage change: always identify the correct base.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Pipe/cistern: fill positive, leak negative rates.\n• CI/SI difference and successive percentage changes.",
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
    "explanation": "CORRECT: 41 MU\n\nWHY CORRECT:\nCORRECT: 41 MU That uniquely matches “41 MU”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 41 MU\nFinal keyed result: 41 MU.\n\nTRAP ANALYSIS (every wrong option):\nA) 40 MU: uses a wrong idealisation or arithmetic path for this stem and does not yield “41 MU”.\nC) 42 MU: uses a wrong idealisation or arithmetic path for this stem and does not yield “41 MU”.\nD) 43 MU: uses a wrong idealisation or arithmetic path for this stem and does not yield “41 MU”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Work: rate = 1/T; remaining work = 1 − done; time = remaining / combined rate. (stem data include: 42, 38, 45 , 39).\n• Average speed for equal distances = 2ab/(a+b), not (a+b)/2.\n• Percentage change: always identify the correct base.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Pipe/cistern: fill positive, leak negative rates.\n• CI/SI difference and successive percentage changes.",
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
    "explanation": "CORRECT: 48 km/h\n\nWHY CORRECT:\nCORRECT: 48 km/h That uniquely matches “48 km/h”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 48 km/h\nFinal keyed result: 48 km/h.\n\nTRAP ANALYSIS (every wrong option):\nB) 50 km/h: uses a wrong idealisation or arithmetic path for this stem and does not yield “48 km/h”.\nC) 52 km/h: uses a wrong idealisation or arithmetic path for this stem and does not yield “48 km/h”.\nD) 45 km/h: uses a wrong idealisation or arithmetic path for this stem and does not yield “48 km/h”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Work: rate = 1/T; remaining work = 1 − done; time = remaining / combined rate. (stem data include: 120 , 40 , 60 ).\n• Average speed for equal distances = 2ab/(a+b), not (a+b)/2.\n• Percentage change: always identify the correct base.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Pipe/cistern: fill positive, leak negative rates.\n• CI/SI difference and successive percentage changes.",
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
    "explanation": "CORRECT: ₹40,000\n\nWHY CORRECT:\nCORRECT: ₹40,000 That uniquely matches “₹40,000”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: ₹40,000\nFinal keyed result: ₹40,000.\n\nTRAP ANALYSIS (every wrong option):\nA) ₹30,000: uses a wrong idealisation or arithmetic path for this stem and does not yield “₹40,000”.\nC) ₹48,000: uses a wrong idealisation or arithmetic path for this stem and does not yield “₹40,000”.\nD) ₹50,000: uses a wrong idealisation or arithmetic path for this stem and does not yield “₹40,000”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Work: rate = 1/T; remaining work = 1 − done; time = remaining / combined rate. (stem data include: 5, 00, 000 , 12%).\n• Average speed for equal distances = 2ab/(a+b), not (a+b)/2.\n• Percentage change: always identify the correct base.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Pipe/cistern: fill positive, leak negative rates.\n• CI/SI difference and successive percentage changes.",
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
    "explanation": "CORRECT: ₹9.0 lakh\n\nWHY CORRECT:\nCORRECT: ₹9.0 lakh That uniquely matches “₹9.0 lakh”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: ₹9.0 lakh\nFinal keyed result: ₹9.0 lakh.\n\nTRAP ANALYSIS (every wrong option):\nA) ₹8.0 lakh: uses a wrong idealisation or arithmetic path for this stem and does not yield “₹9.0 lakh”.\nC) ₹10.0 lakh: uses a wrong idealisation or arithmetic path for this stem and does not yield “₹9.0 lakh”.\nD) ₹11.0 lakh: uses a wrong idealisation or arithmetic path for this stem and does not yield “₹9.0 lakh”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Work: rate = 1/T; remaining work = 1 − done; time = remaining / combined rate. (stem data include: 12 , 10%, 20%).\n• Average speed for equal distances = 2ab/(a+b), not (a+b)/2.\n• Percentage change: always identify the correct base.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Pipe/cistern: fill positive, leak negative rates.\n• CI/SI difference and successive percentage changes.",
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
    "explanation": "CORRECT: 24\n\nWHY CORRECT:\nCORRECT: 24 That uniquely matches “24”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 24\nFinal keyed result: 24.\n\nTRAP ANALYSIS (every wrong option):\nA) 12: uses a wrong idealisation or arithmetic path for this stem and does not yield “24”.\nB) 18: uses a wrong idealisation or arithmetic path for this stem and does not yield “24”.\nD) 48: uses a wrong idealisation or arithmetic path for this stem and does not yield “24”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Work: rate = 1/T; remaining work = 1 − done; time = remaining / combined rate. (stem data include: 4, 6 , 8 ).\n• Average speed for equal distances = 2ab/(a+b), not (a+b)/2.\n• Percentage change: always identify the correct base.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Pipe/cistern: fill positive, leak negative rates.\n• CI/SI difference and successive percentage changes.",
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
    "explanation": "CORRECT: ₹3,500 crore\n\nWHY CORRECT:\nCORRECT: ₹3,500 crore That uniquely matches “₹3,500 crore”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: ₹3,500 crore\nFinal keyed result: ₹3,500 crore.\n\nTRAP ANALYSIS (every wrong option):\nA) ₹350 crore: uses a wrong idealisation or arithmetic path for this stem and does not yield “₹3,500 crore”.\nC) ₹35,000 crore: uses a wrong idealisation or arithmetic path for this stem and does not yield “₹3,500 crore”.\nD) ₹350,000 crore: uses a wrong idealisation or arithmetic path for this stem and does not yield “₹3,500 crore”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Verify the exact claim (year, institution, magnitude) — distractors shift one digit or nearby scheme. (stem data include: 2026 , 2026 ).\n• DNS maps names→IP; primary key = unique + NOT NULL; absolute Excel ref uses $A$1.\n• Polity/economy: match article/body to function — not similar-sounding bodies.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Shortcut keys / file extensions appear as pure recall — memorise the exact pair.\n• CA: note AP vs National and whether the item is power-sector or not.",
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
    "explanation": "CORRECT: 2028\n\nWHY CORRECT:\nCORRECT: 2028 That uniquely matches “2028”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 2028\nFinal keyed result: 2028.\n\nTRAP ANALYSIS (every wrong option):\nA) 2024: uses a wrong idealisation or arithmetic path for this stem and does not yield “2028”.\nB) 2026: uses a wrong idealisation or arithmetic path for this stem and does not yield “2028”.\nD) 2035: uses a wrong idealisation or arithmetic path for this stem and does not yield “2028”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Verify the exact claim (year, institution, magnitude) — distractors shift one digit or nearby scheme. (stem data include: 2025, 26 ).\n• DNS maps names→IP; primary key = unique + NOT NULL; absolute Excel ref uses $A$1.\n• Polity/economy: match article/body to function — not similar-sounding bodies.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Shortcut keys / file extensions appear as pure recall — memorise the exact pair.\n• CA: note AP vs National and whether the item is power-sector or not.",
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
    "explanation": "CORRECT: About ₹30 lakh crore\n\nWHY CORRECT:\nCORRECT: About ₹30 lakh crore That uniquely matches “About ₹30 lakh crore”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: About ₹30 lakh crore\nFinal keyed result: About ₹30 lakh crore.\n\nTRAP ANALYSIS (every wrong option):\nA) About ₹3 lakh crore: uses a wrong idealisation or arithmetic path for this stem and does not yield “About ₹30 lakh crore”.\nC) About ₹300 lakh crore: uses a wrong idealisation or arithmetic path for this stem and does not yield “About ₹30 lakh crore”.\nD) About ₹30,000 crore: uses a wrong idealisation or arithmetic path for this stem and does not yield “About ₹30 lakh crore”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Verify the exact claim (year, institution, magnitude) — distractors shift one digit or nearby scheme. (stem data include: 2026, 23).\n• DNS maps names→IP; primary key = unique + NOT NULL; absolute Excel ref uses $A$1.\n• Polity/economy: match article/body to function — not similar-sounding bodies.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Shortcut keys / file extensions appear as pure recall — memorise the exact pair.\n• CA: note AP vs National and whether the item is power-sector or not.",
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
    "explanation": "CORRECT: Gaganyaan\n\nWHY CORRECT:\nCORRECT: Gaganyaan That uniquely matches “Gaganyaan”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Chandrayaan: uses a wrong idealisation or arithmetic path for this stem and does not yield “Gaganyaan”.\nC) Aditya-L1: uses a wrong idealisation or arithmetic path for this stem and does not yield “Gaganyaan”.\nD) NISAR: uses a wrong idealisation or arithmetic path for this stem and does not yield “Gaganyaan”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Verify the exact claim (year, institution, magnitude) — distractors shift one digit or nearby scheme.\n• DNS maps names→IP; primary key = unique + NOT NULL; absolute Excel ref uses $A$1.\n• Polity/economy: match article/body to function — not similar-sounding bodies.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Shortcut keys / file extensions appear as pure recall — memorise the exact pair.\n• CA: note AP vs National and whether the item is power-sector or not.",
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
    "explanation": "CORRECT: President of India\n\nWHY CORRECT:\nCORRECT: President of India That uniquely matches “President of India”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Chief Justice of India: uses a wrong idealisation or arithmetic path for this stem and does not yield “President of India”.\nC) Speaker of the Lok Sabha only: uses a wrong idealisation or arithmetic path for this stem and does not yield “President of India”.\nD) Chairman of the Rajya Sabha: uses a wrong idealisation or arithmetic path for this stem and does not yield “President of India”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Verify the exact claim (year, institution, magnitude) — distractors shift one digit or nearby scheme.\n• DNS maps names→IP; primary key = unique + NOT NULL; absolute Excel ref uses $A$1.\n• Polity/economy: match article/body to function — not similar-sounding bodies.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Shortcut keys / file extensions appear as pure recall — memorise the exact pair.\n• CA: note AP vs National and whether the item is power-sector or not.",
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
    "explanation": "CORRECT: Amaravati\n\nWHY CORRECT:\nCORRECT: Amaravati That uniquely matches “Amaravati”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Visakhapatnam: uses a wrong idealisation or arithmetic path for this stem and does not yield “Amaravati”.\nC) Tirupati: uses a wrong idealisation or arithmetic path for this stem and does not yield “Amaravati”.\nD) Kurnool: uses a wrong idealisation or arithmetic path for this stem and does not yield “Amaravati”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Verify the exact claim (year, institution, magnitude) — distractors shift one digit or nearby scheme.\n• DNS maps names→IP; primary key = unique + NOT NULL; absolute Excel ref uses $A$1.\n• Polity/economy: match article/body to function — not similar-sounding bodies.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Shortcut keys / file extensions appear as pure recall — memorise the exact pair.\n• CA: note AP vs National and whether the item is power-sector or not.",
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
    "explanation": "CORRECT: Make policy borrowing costlier and cool demand-side pressure\n\nWHY CORRECT:\nCORRECT: Make policy borrowing costlier and cool demand-side pressure That uniquely matches “Make policy borrowing costlier and cool demand-side pressure”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Make borrowing cheaper and boost demand: uses a wrong idealisation or arithmetic path for this stem and does not yield “Make policy borrowing costlier and cool demand-side pressure”.\nC) Directly fix retail petrol prices: uses a wrong idealisation or arithmetic path for this stem and does not yield “Make policy borrowing costlier and cool demand-side pressure”.\nD) Abolish CRR: uses a wrong idealisation or arithmetic path for this stem and does not yield “Make policy borrowing costlier and cool demand-side pressure”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Verify the exact claim (year, institution, magnitude) — distractors shift one digit or nearby scheme.\n• DNS maps names→IP; primary key = unique + NOT NULL; absolute Excel ref uses $A$1.\n• Polity/economy: match article/body to function — not similar-sounding bodies.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Shortcut keys / file extensions appear as pure recall — memorise the exact pair.\n• CA: note AP vs National and whether the item is power-sector or not.",
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
    "explanation": "CORRECT: CBZ\n\nWHY CORRECT:\nCORRECT: CBZ That uniquely matches “CBZ”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) CBX: uses a wrong idealisation or arithmetic path for this stem and does not yield “CBZ”.\nB) ABZ: uses a wrong idealisation or arithmetic path for this stem and does not yield “CBZ”.\nD) AAX: uses a wrong idealisation or arithmetic path for this stem and does not yield “CBZ”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Code the exact mapping rule before decoding options. (stem data include: 1, 1, 1, 1).\n• Blood relation: draw a small tree; do not reverse ‘of’ relations.\n• Syllogism: use Venn; ‘some’ does not imply ‘all’.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Seating: fix one person, place constraints clockwise/anticlockwise carefully.\n• Direction: track facing turns; final displacement ≠ path length.",
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
    "explanation": "CORRECT: Friday\n\nWHY CORRECT:\nCORRECT: Friday That uniquely matches “Friday”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Monday: uses a wrong idealisation or arithmetic path for this stem and does not yield “Friday”.\nB) Tuesday: uses a wrong idealisation or arithmetic path for this stem and does not yield “Friday”.\nC) Thursday: uses a wrong idealisation or arithmetic path for this stem and does not yield “Friday”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Code the exact mapping rule before decoding options.\n• Blood relation: draw a small tree; do not reverse ‘of’ relations.\n• Syllogism: use Venn; ‘some’ does not imply ‘all’.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Seating: fix one person, place constraints clockwise/anticlockwise carefully.\n• Direction: track facing turns; final displacement ≠ path length.",
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
    "explanation": "CORRECT: Only II\n\nWHY CORRECT:\nCORRECT: Only II That uniquely matches “Only II”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Only I: uses a wrong idealisation or arithmetic path for this stem and does not yield “Only II”.\nC) Both I and II: uses a wrong idealisation or arithmetic path for this stem and does not yield “Only II”.\nD) Neither I nor II: uses a wrong idealisation or arithmetic path for this stem and does not yield “Only II”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Code the exact mapping rule before decoding options.\n• Blood relation: draw a small tree; do not reverse ‘of’ relations.\n• Syllogism: use Venn; ‘some’ does not imply ‘all’.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Seating: fix one person, place constraints clockwise/anticlockwise carefully.\n• Direction: track facing turns; final displacement ≠ path length.",
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
    "explanation": "CORRECT: 3 km east\n\nWHY CORRECT:\nCORRECT: 3 km east That uniquely matches “3 km east”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: 3 km east\nFinal keyed result: 3 km east.\n\nTRAP ANALYSIS (every wrong option):\nB) 3 km west: uses a wrong idealisation or arithmetic path for this stem and does not yield “3 km east”.\nC) 5 km east: uses a wrong idealisation or arithmetic path for this stem and does not yield “3 km east”.\nD) 4 km north: uses a wrong idealisation or arithmetic path for this stem and does not yield “3 km east”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Code the exact mapping rule before decoding options. (stem data include: 5 , 3 , 5 ).\n• Blood relation: draw a small tree; do not reverse ‘of’ relations.\n• Syllogism: use Venn; ‘some’ does not imply ‘all’.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Seating: fix one person, place constraints clockwise/anticlockwise carefully.\n• Direction: track facing turns; final displacement ≠ path length.",
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
    "explanation": "CORRECT: Fault current interruption\n\nWHY CORRECT:\nCORRECT: Fault current interruption That uniquely matches “Fault current interruption”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Frequency: uses a wrong idealisation or arithmetic path for this stem and does not yield “Fault current interruption”.\nC) Power factor: uses a wrong idealisation or arithmetic path for this stem and does not yield “Fault current interruption”.\nD) Reactive power only: uses a wrong idealisation or arithmetic path for this stem and does not yield “Fault current interruption”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Code the exact mapping rule before decoding options.\n• Blood relation: draw a small tree; do not reverse ‘of’ relations.\n• Syllogism: use Venn; ‘some’ does not imply ‘all’.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Seating: fix one person, place constraints clockwise/anticlockwise carefully.\n• Direction: track facing turns; final displacement ≠ path length.",
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
    "explanation": "CORRECT: Lose section capacity faster under wind loads\n\nWHY CORRECT:\nCORRECT: Lose section capacity faster under wind loads That uniquely matches “Lose section capacity faster under wind loads”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Increase transformer oil acidity: uses a wrong idealisation or arithmetic path for this stem and does not yield “Lose section capacity faster under wind loads”.\nC) Reduce busbar ampacity only: uses a wrong idealisation or arithmetic path for this stem and does not yield “Lose section capacity faster under wind loads”.\nD) Eliminate the need for drainage checks: uses a wrong idealisation or arithmetic path for this stem and does not yield “Lose section capacity faster under wind loads”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Active→passive: object becomes subject; tense shifts with be+V3; agent optional with by.\n• Direct→indirect: backshift tenses after past reporting verbs; change pronouns/time words.\n• Passage MCQs: prefer options supported by stated lines — avoid outside inference.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Error spotting: subject–verb agreement with neither/either, collective nouns.\n• One-word substitutes and idiom traps common in SSC-style papers.",
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
    "explanation": "CORRECT: The relay settings were verified by the engineer.\n\nWHY CORRECT:\nCORRECT: The relay settings were verified by the engineer. That uniquely matches “The relay settings were verified by the engineer.”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) The relay settings verified the engineer.: uses a wrong idealisation or arithmetic path for this stem and does not yield “The relay settings were verified by the engineer.”.\nC) The relay settings are verify by the engineer.: uses a wrong idealisation or arithmetic path for this stem and does not yield “The relay settings were verified by the engineer.”.\nD) The engineer was verified by the relay settings.: uses a wrong idealisation or arithmetic path for this stem and does not yield “The relay settings were verified by the engineer.”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Active→passive: object becomes subject; tense shifts with be+V3; agent optional with by.\n• Direct→indirect: backshift tenses after past reporting verbs; change pronouns/time words.\n• Passage MCQs: prefer options supported by stated lines — avoid outside inference.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Error spotting: subject–verb agreement with neither/either, collective nouns.\n• One-word substitutes and idiom traps common in SSC-style papers.",
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
    "explanation": "CORRECT: He said that he was checking the earthing.\n\nWHY CORRECT:\nCORRECT: He said that he was checking the earthing. That uniquely matches “He said that he was checking the earthing.”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nB) He said that he is checking the earthing.: uses a wrong idealisation or arithmetic path for this stem and does not yield “He said that he was checking the earthing.”.\nC) He said that I am checking the earthing.: uses a wrong idealisation or arithmetic path for this stem and does not yield “He said that he was checking the earthing.”.\nD) He said that he will checking the earthing.: uses a wrong idealisation or arithmetic path for this stem and does not yield “He said that he was checking the earthing.”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Active→passive: object becomes subject; tense shifts with be+V3; agent optional with by.\n• Direct→indirect: backshift tenses after past reporting verbs; change pronouns/time words.\n• Passage MCQs: prefer options supported by stated lines — avoid outside inference.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Error spotting: subject–verb agreement with neither/either, collective nouns.\n• One-word substitutes and idiom traps common in SSC-style papers.",
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
    "explanation": "CORRECT: was willing\n\nWHY CORRECT:\nCORRECT: was willing That uniquely matches “was willing”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Neither the contractor: uses a wrong idealisation or arithmetic path for this stem and does not yield “was willing”.\nB) nor the supervisors: uses a wrong idealisation or arithmetic path for this stem and does not yield “was willing”.\nD) to sign the record.: uses a wrong idealisation or arithmetic path for this stem and does not yield “was willing”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Active→passive: object becomes subject; tense shifts with be+V3; agent optional with by.\n• Direct→indirect: backshift tenses after past reporting verbs; change pronouns/time words.\n• Passage MCQs: prefer options supported by stated lines — avoid outside inference.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Error spotting: subject–verb agreement with neither/either, collective nouns.\n• One-word substitutes and idiom traps common in SSC-style papers.",
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
    "explanation": "CORRECT: Brief and clear\n\nWHY CORRECT:\nCORRECT: Brief and clear That uniquely matches “Brief and clear”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Lengthy and detailed: uses a wrong idealisation or arithmetic path for this stem and does not yield “Brief and clear”.\nC) Vague and delayed: uses a wrong idealisation or arithmetic path for this stem and does not yield “Brief and clear”.\nD) Hostile: uses a wrong idealisation or arithmetic path for this stem and does not yield “Brief and clear”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Active→passive: object becomes subject; tense shifts with be+V3; agent optional with by.\n• Direct→indirect: backshift tenses after past reporting verbs; change pronouns/time words.\n• Passage MCQs: prefer options supported by stated lines — avoid outside inference.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Error spotting: subject–verb agreement with neither/either, collective nouns.\n• One-word substitutes and idiom traps common in SSC-style papers.",
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
    "explanation": "CORRECT: Multi-factor authentication\n\nWHY CORRECT:\nCORRECT: Multi-factor authentication That uniquely matches “Multi-factor authentication”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Larger monitor: uses a wrong idealisation or arithmetic path for this stem and does not yield “Multi-factor authentication”.\nC) Defragmenting the disk: uses a wrong idealisation or arithmetic path for this stem and does not yield “Multi-factor authentication”.\nD) Increasing screen brightness: uses a wrong idealisation or arithmetic path for this stem and does not yield “Multi-factor authentication”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Verify the exact claim (year, institution, magnitude) — distractors shift one digit or nearby scheme.\n• DNS maps names→IP; primary key = unique + NOT NULL; absolute Excel ref uses $A$1.\n• Polity/economy: match article/body to function — not similar-sounding bodies.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Shortcut keys / file extensions appear as pure recall — memorise the exact pair.\n• CA: note AP vs National and whether the item is power-sector or not.",
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
    "explanation": "CORRECT: DNS\n\nWHY CORRECT:\nCORRECT: DNS That uniquely matches “DNS”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) FTP: uses a wrong idealisation or arithmetic path for this stem and does not yield “DNS”.\nC) SMTP: uses a wrong idealisation or arithmetic path for this stem and does not yield “DNS”.\nD) DHCP only for printing: uses a wrong idealisation or arithmetic path for this stem and does not yield “DNS”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Work: rate = 1/T; remaining work = 1 − done; time = remaining / combined rate.\n• Average speed for equal distances = 2ab/(a+b), not (a+b)/2.\n• Percentage change: always identify the correct base.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Pipe/cistern: fill positive, leak negative rates.\n• CI/SI difference and successive percentage changes.",
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
    "explanation": "CORRECT: $A$1\n\nWHY CORRECT:\nCORRECT: $A$1 That uniquely matches “$A$1”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nCORRECT: $A$1\nFinal keyed result: $A$1.\n\nTRAP ANALYSIS (every wrong option):\nA) A1: uses a wrong idealisation or arithmetic path for this stem and does not yield “$A$1”.\nB) $A1: uses a wrong idealisation or arithmetic path for this stem and does not yield “$A$1”.\nC) A$1: uses a wrong idealisation or arithmetic path for this stem and does not yield “$A$1”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Verify the exact claim (year, institution, magnitude) — distractors shift one digit or nearby scheme. (stem data include: 1 ).\n• DNS maps names→IP; primary key = unique + NOT NULL; absolute Excel ref uses $A$1.\n• Polity/economy: match article/body to function — not similar-sounding bodies.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Shortcut keys / file extensions appear as pure recall — memorise the exact pair.\n• CA: note AP vs National and whether the item is power-sector or not.",
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
    "explanation": "CORRECT: Primary key\n\nWHY CORRECT:\nCORRECT: Primary key That uniquely matches “Primary key”. Other options come from wrong length basis, unit slips, or reversing the governing share/factor — see TRAP ANALYSIS.\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) Foreign key only: uses a wrong idealisation or arithmetic path for this stem and does not yield “Primary key”.\nC) Default value only: uses a wrong idealisation or arithmetic path for this stem and does not yield “Primary key”.\nD) Check constraint for colour: uses a wrong idealisation or arithmetic path for this stem and does not yield “Primary key”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Verify the exact claim (year, institution, magnitude) — distractors shift one digit or nearby scheme.\n• DNS maps names→IP; primary key = unique + NOT NULL; absolute Excel ref uses $A$1.\n• Polity/economy: match article/body to function — not similar-sounding bodies.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Shortcut keys / file extensions appear as pure recall — memorise the exact pair.\n• CA: note AP vs National and whether the item is power-sector or not.",
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
    "explanation": "CORRECT: RAM is typically volatile working memory; disk provides persistent storage\n\nWHY CORRECT:\nCORRECT: RAM is typically volatile working memory; disk provides persistent storage\n\nCALCULATION:\nN/A — conceptual / judgement / matching / theory-assumptions (no arithmetic key).\n\nTRAP ANALYSIS (every wrong option):\nA) RAM is non-volatile long-term storage; disk is only for CPU registers: uses a wrong idealisation or arithmetic path for this stem and does not yield “RAM is typically volatile working memory; disk provides persistent storage”.\nC) Both are identical in volatility and speed: uses a wrong idealisation or arithmetic path for this stem and does not yield “RAM is typically volatile working memory; disk provides persistent storage”.\nD) Disk contents are erased every time power is on: uses a wrong idealisation or arithmetic path for this stem and does not yield “RAM is typically volatile working memory; disk provides persistent storage”.\n\nWHAT TO REMEMBER (inner content — not topic titles):\n• Verify the exact claim (year, institution, magnitude) — distractors shift one digit or nearby scheme.\n• DNS maps names→IP; primary key = unique + NOT NULL; absolute Excel ref uses $A$1.\n• Polity/economy: match article/body to function — not similar-sounding bodies.\n\nALSO ASKED / HIGH CHANCE (inner angles):\n• Shortcut keys / file extensions appear as pure recall — memorise the exact pair.\n• CA: note AP vs National and whether the item is power-sector or not.",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  }
];
