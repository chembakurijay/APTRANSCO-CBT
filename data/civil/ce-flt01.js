// Civil Engineering FLT-01 — APTRANSCO AEE CBT
// APPROVED pack: CIVIL_FLT01_AUDITQ_REWRITE.md (Audit Q/R/G/S)
// Diagrams retuned: Q3 SOM_pg0030 overhang; Q9 SOM_pg0026 BMD jump;
// Q33 family pump Q–H schematic (no core Q–H page); Match Q10/Q36; Table Q26/Q58
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
    "explanation": "CORRECT: Stress ≈175 MPa, below yield\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: area = 314.2 mm²; stress = 55,000/314.2 ≈175 MPa. Trap: C uses radius as diameter; B approximates yield wrongly; D confuses demand with fy/γm0.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — SOM: axial stress+service check",
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
    "explanation": "CORRECT: 3/7\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: equal strain makes force proportional to \\(AE\\); brass:steel = 900:1200, so brass share = 3/7. Trap: A reverses the stiffness share.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — SOM: composite bars+compatibility",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 3,
    "subject": "Strength of Materials",
    "topic": "SOM: beam+diagram+equilibrium",
    "question": "Proof-load planning for the overhanging beam uses the crop that carries the point load and UDL at the shown locations. Using only the displayed support geometry and load positions, which reaction pair is closest to that expected by the engineer?",
    "image": "images/diagrams/civil-flt01/q03-overhang-reactions.jpg",
    "options": [
      "15 kN, 45 kN",
      "10 kN, 50 kN",
      "20 kN, 40 kN",
      "25 kN, 35 kN"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "",
    "explanation": "CORRECT: 10 kN, 50 kN\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: AB=4 m with 10 kN/m UDL (40 kN) and 20 kN at tip C on 2 m overhang; ΣMA → RB=50 kN; ΣV → RA=10 kN. Trap: A/C shift the UDL centroid or tip lever.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — SOM: beam+diagram+equilibrium",
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
    "explanation": "CORRECT: 60\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: λ = Le/r = 2100/35 = 60. Trap: B uses full geometric length without the effective-length factor already embedded in 2.1 m; A/C misplace the decimal.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — SOM: slenderness+strut check",
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
    "explanation": "CORRECT: A true, R false\n\nWHY CORRECT / CALCULATION:\nWhy: the centre has zero shear ordinate; R is false. Trap: shear changes radius, not the centre’s vertical coordinate. **Hard justification:** distinguishes circle geometry from stress-component presence.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — SOM: Mohr circle+AR+interpretation",
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
      "0.8 MPa at extreme fibre",
      "1.2 MPa at neutral axis",
      "0.8 MPa uniformly",
      "1.2 MPa at top fibre"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 1.2 MPa at neutral axis\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: average = 0.8 MPa; rectangular maximum = 1.5×average = 1.2 MPa at NA. Trap: C treats shear as uniform.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — SOM: rectangular shear",
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
    "explanation": "CORRECT: 1000 N·m\n\nWHY CORRECT / CALCULATION:\nWhy: free-body of BC must transmit the end torque at C. Trap: D halves the torque without a second load path.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — SOM: torsion+shaft equilibrium",
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
    "explanation": "CORRECT: \\(3wL/16\\)\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: compatibility leaves half the UDL deflection to be cancelled by the prop, giving \\(3wL/16\\). Trap: A is the no-settlement result. **Hard justification:** settlement and force compatibility compete.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — SOM: indeterminate beam+settlement",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-GATE→Transco"
  },
  {
    "id": 9,
    "subject": "Strength of Materials",
    "topic": "SOM: BMD+graph+diagnosis",
    "question": "On the plotted bending-moment diagram, the engineer observes a marked vertical jump at section C while shear remains finite on both sides of C and no local section change is recorded. Which loading interpretation is most defensible?",
    "image": "images/diagrams/civil-flt01/q09-bmd-jump.jpg",
    "options": [
      "A point load acts at C",
      "A concentrated couple acts at C",
      "A UDL starts at C",
      "The flexural rigidity changes at C"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Graph+Application",
    "formula": "",
    "explanation": "CORRECT: A concentrated couple acts at C\n\nWHY CORRECT / CALCULATION:\nWhy: a concentrated moment causes a BMD discontinuity; a point force jumps shear. Trap: stiffness changes curvature, not equilibrium jumps. **Hard justification:** figure signature must be separated from member-property effects.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — SOM: BMD+graph+diagnosis",
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
      "a-4, b-1, c-3, d-2",
      "a-4, b-2, c-3, d-1",
      "a-3, b-1, c-2, d-4",
      "a-1, b-2, c-3, d-4"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Matching Matrix",
    "formula": "",
    "explanation": "CORRECT: a-4, b-2, c-3, d-1\n\nWHY CORRECT / CALCULATION:\nWhy: (a) 3wl²/8; (b) wl²/6; (c) wl²/8; (d) w(2l)²/8 = wl²/2. Trap: A swaps triangular and double-span results.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — SOM: matching+beam BM models",
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
    "topic": "SOM: impact loading+stress ratio",
    "question": "In a materials laboratory note, the same axial load is applied once gradually and once suddenly to identical bars. Neglecting energy losses, which relation between maximum sudden stress and gradual stress should the engineer use?",
    "image": "",
    "options": [
      "Sudden ≈ twice gradual",
      "Sudden equals gradual",
      "Sudden is half gradual",
      "Ratio depends only on Poisson’s ratio"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Sudden ≈ twice gradual\n\nWHY CORRECT / CALCULATION:\nWhy: energy equivalence for sudden loading gives σ_sudden ≈ 2 σ_gradual. Trap: C reverses the factor.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — SOM: impact loading+stress ratio",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
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
    "explanation": "CORRECT: 95°C\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: σ = 227.3 MPa = αEΔT → ΔT ≈ 94.7°C. Trap: A uses fy without γm0; B halves the rise.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — SOM: temperature stress+yield onset",
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
    "explanation": "CORRECT: 2.4×10⁵ mm³\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: Z = M/σ = 36×10⁶/150 = 2.4×10⁵ mm³. Trap: B slips a power of ten. **Hard justification:** unit consistency under a fixed stress limit.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — SOM: section modulus+governing size",
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
    "explanation": "CORRECT: 180 mm\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: transformed width = m×12 = 180 mm. Trap: A uses the plate depth; D quotes m alone.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — SOM: transformed section+compatibility",
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
    "explanation": "CORRECT: Radius rises; slenderness falls; buckling capacity rises\n\nWHY CORRECT / CALCULATION:\nWhy: larger weak-axis second moment raises radius, lowers slenderness and raises buckling resistance. Trap: C reverses the radius-slenderness relation.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — SOM: column stability+application",
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
      "Restore specified cover before concreting",
      "Increase water-cement ratio",
      "Replace stirrups with larger spacing"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Restore specified cover before concreting\n\nWHY CORRECT / CALCULATION:\nWhy: durability/fire cover is an independent requirement. Trap: adequate flexural depth cannot waive exposure protection.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — RCC: durability+decision",
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
    "explanation": "CORRECT: Under-reinforced because 225 mm is below 240 mm\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: limiting depth = 0.48×500 = 240 mm; trial is lower. Trap: C imports an unrelated limit.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — RCC: IS flexure+limit state",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 18,
    "subject": "RCC / DDRC",
    "topic": "RCC: slab+diagram+AR",
    "question": "For the slab panel shown in the crop, edge-support symbols and clear span dimensions are available only from the figure and cannot be recovered from the stem alone. Assertion: the panel should be designed for two-way action. Reason: all four edges support it and the shown longer-to-shorter span ratio is below 2. Which conclusion follows?",
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
    "explanation": "CORRECT: Both true; R explains A\n\nWHY CORRECT / CALCULATION:\nWhy: both support condition and aspect ratio establish two-way action. Trap: the ratio alone is insufficient without four-edge support.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — RCC: slab+diagram+AR",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "core",
    "diagramSourcePath": "civil-core-diagrams/DDRC/DDRC_pg0037.jpg"
  },
  {
    "id": 19,
    "subject": "RCC / DDRC",
    "topic": "RCC: reinforcement+practical+hold point",
    "question": "Mid-pour on a continuous RCC floor, top bars over an interior support are found displaced downward by about 35 mm before concrete reaches that bay, while bottom steel remains in place. The pour gang is waiting on site instructions. Which site direction is most defensible as an immediate hold-point response?",
    "image": "",
    "options": [
      "Continue because slab bottom steel is present",
      "Hold the pour locally, restore chairs/bar level and reverify cover and effective depth",
      "Add extra water for access",
      "Record it only after stripping"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Practical/Application",
    "formula": "",
    "explanation": "CORRECT: Hold the pour locally, restore chairs/bar level and reverify cover and effective depth\n\nWHY CORRECT / CALCULATION:\nWhy: displaced negative steel reduces support capacity and changes cover. Trap: A ignores hogging demand. **Hard/Practical/App justification:** an irreversible hold point requires structural and constructability judgement.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — RCC: reinforcement+practical+hold point",
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
    "explanation": "CORRECT: Web width, unless another compression flange is specifically present\n\nWHY CORRECT / CALCULATION:\nWhy: the slab flange is not in compression under hogging. Trap: B carries the sagging-region model into the support region.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — RCC: T-beam+moment region",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 21,
    "subject": "RCC / DDRC",
    "topic": "RCC: column ties+diagram+detailing",
    "question": "At reinforcement inspection, the tied-column crop shows the actual longitudinal-bar layout and four proposed tie arrangements labelled P–S. Which marked arrangement best satisfies restraint of corner and intermediate bars?",
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
    "explanation": "CORRECT: Detail S\n\nWHY CORRECT / CALCULATION:\nWhy: Detail S uses a closed perimeter tie plus both crossties so every corner and mid-face bar is restrained. Trap: P is perimeter-only; Q omits a crosstie direction; R’s diamond leaves corners unrestrained.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — RCC: column ties+diagram+detailing",
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
      "Minimum shear reinforcement in X; designed shear reinforcement in Y",
      "Redesign both sections immediately",
      "Provide torsion steel only in Y"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Minimum shear reinforcement in X; designed shear reinforcement in Y\n\nWHY CORRECT / CALCULATION:\nWhy: minimum stirrups remain required in X; Y needs the balance carried by shear reinforcement. Trap: C ignores the permitted design range.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — RCC: IS shear+design judgement",
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
    "explanation": "CORRECT: Extend the bar, provide an allowable hook/bend, or revise curtailment so anchorage and the related moment/shear checks are all satisfied\n\nWHY CORRECT / CALCULATION:\nWhy: inadequate development is a structural limit, not a drafting preference. Trap: A confuses location with anchorage. **Hard justification:** competing detailing remedies under code anchorage rules.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — RCC: IS anchorage+governing decision",
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
    "explanation": "CORRECT: Design the excess moment with compression and additional tension steel\n\nWHY CORRECT / CALCULATION:\nWhy: demand exceeds singly reinforced limit; a steel couple must resist the excess. Trap: D mixes design stages.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — RCC: doubly reinforced+capacity decision",
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
    "explanation": "CORRECT: Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials\n\nWHY CORRECT / CALCULATION:\nWhy: Mu > Mu,lim requires a steel couple or a larger section. Trap: B misreads limit-state capacity as a service check. **Hard justification:** recognising when doubly reinforced design is mandatory.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — RCC: doubly reinforced+concept",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 26,
    "subject": "RCC / DDRC",
    "topic": "RCC: table+diagram+interpolation",
    "question": "From the shear-resistance table crop used in design checking, τc is 0.48 MPa at 0.50% tension steel and 0.56 MPa at 0.75%. For 0.625% steel and nominal shear 0.70 MPa, which conclusion is closest?",
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
    "explanation": "CORRECT: 0.52 MPa; stirrups carry the balance, subject to the maximum limit\n\nWHY CORRECT / CALCULATION:\nCALC: midpoint interpolation gives 0.52 MPa; demand exceeds it. Trap: B takes the upper row without interpolation.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — RCC: table+diagram+interpolation",
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
    "explanation": "CORRECT: 260 mm\n\nWHY CORRECT / CALCULATION:\nCALC: ceiling = 262.5 mm; adopt 260 mm. Trap: B accepts analysis spacing without the code ceiling.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — RCC: IS stirrup spacing",
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
    "explanation": "CORRECT: Barricade and map the defect, assess section/bond, then execute an engineer-approved repair or strengthening method\n\nWHY CORRECT / CALCULATION:\nWhy: cubes do not prove in-situ continuity or anchorage. Trap: B conceals rather than characterises the defect. **Practical/App justification:** evidence, structural consequence and repair governance are integrated.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — RCC: honeycombing+practical+assessment",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 29,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "FM: manometer+diagram",
    "question": "At commissioning of two interconnected water mains, the differential manometer crop shows mercury interfaces together with the tap elevations needed for a hydrostatic traverse. Following the indicated columns only, which pressure difference is closest?",
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
    "explanation": "CORRECT: 18.9 kPa\n\nWHY CORRECT / CALCULATION:\nCALC: figure gives mercury difference h=150 mm with x=y=200 mm, water and S_Hg=13.6, g=10 m/s². With equal connecting-limb elevations, p_A−p_B = h(ρ_Hg−ρ_w)g = 0.15×(13600−1000)×10 = 18900 Pa = 18.9 kPa. Trap: B = 12.6 kPa uses (S−1)gh with h=0.10 m or drops g; D doubles the mercury head.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — FM: manometer+diagram",
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
    "explanation": "CORRECT: 0.97\n\nWHY CORRECT / CALCULATION:\nCALC: velocity coefficient = 0.62/0.64 ≈0.97. Trap: B multiplies the two coefficients.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — FM: orifice coefficients",
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
    "explanation": "CORRECT: Both true; R explains A\n\nWHY CORRECT / CALCULATION:\nWhy: the momentum relation permits conjugate-depth analysis, while turbulence explains dissipation. Trap: energy is not conserved across the jump.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — FM: hydraulic jump+AR",
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
    "explanation": "CORRECT: Laminar\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: Re = VD/ν = 0.02×0.05/1e-6 = 1000 < 2300. Trap: A misreads the threshold. **Hard justification:** regime selection before chart use.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — FM: Reynolds regime+interpretation",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 33,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "HHM: pump curves+graph+operation",
    "question": "Pumping-station augmentation studies plot the system curve together with one-pump and two-identical-pumps-in-parallel curves on the crop. Which statement best explains why the marked two-pump discharge is less than twice the single-pump duty?",
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
    "explanation": "CORRECT: The rising system head shifts each pump to a lower individual discharge\n\nWHY CORRECT / CALCULATION:\nWhy: actual duty is the new pump-system intersection, not arithmetic addition at fixed head. Trap: B treats static head as pump-dependent. **Hard/App justification:** curve interaction governs operating output.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — HHM: pump curves+graph+operation",
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
    "explanation": "CORRECT: Pelton\n\nWHY CORRECT / CALCULATION:\nWhy: an impulse Pelton unit suits high head and low flow. Trap: Francis is the plausible medium-head alternative.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — HHM: turbine selection",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 35,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "FM: laminar profile+diagram",
    "question": "Interpreting measured profiles in a circular pipe during a laboratory demonstration, the engineer compares the labelled velocity curves (1–3) and shear curves (A–C) in the crop. Which identified pair is consistent with steady Newtonian laminar flow?",
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
    "explanation": "CORRECT: Parabolic velocity; shear rising linearly to a wall maximum\n\nWHY CORRECT / CALCULATION:\nWhy: figure curves 2+C — no-slip Hagen–Poiseuille velocity is parabolic; Newtonian laminar pipe shear is zero on the centreline and rises linearly to a wall maximum. Trap: 1+A is not laminar pipe; 2+B wrongly zeros wall shear; linear/uniform is Couette-type, not pressure-driven pipe flow.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — FM: laminar profile+diagram",
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
    "explanation": "CORRECT: 1-q,2-r,3-p,4-s\n\nWHY CORRECT / CALCULATION:\nWhy: Pelton-q, Francis-r, Kaplan-p and pump-s. Trap: C interchanges Francis and Kaplan. **Hard justification:** competing machine regimes are distinguished together.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — HHM: matching+selection",
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
    "explanation": "CORRECT: 785 N, 7.85 kW\n\nWHY CORRECT / CALCULATION:\nCALC: relative speed 20 m/s → ṁ≈39.3 kg/s; F≈785 N; power=Fu≈7.85 kW. Trap: C uses absolute jet speed for ṁ; B halves relative speed inconsistently; A underestimates ṁ on the relative-speed path.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — FM: moving vane+momentum",
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
      "Cavitation",
      "Bearing misalignment only",
      "Laminar-flow transition"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Practical/Application",
    "formula": "",
    "explanation": "CORRECT: Cavitation\n\nWHY CORRECT / CALCULATION:\nWhy: vapour formation and collapse at the eye produce the observed signature. Trap: bearing faults do not explain pitting at the hydraulic low-pressure zone. **Practical justification:** multiple observations support the diagnosis.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — HHM: cavitation+practical diagnosis",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 39,
    "subject": "Fluid Mechanics & Hydraulic Machinery",
    "topic": "HHM: turbine triangles+diagram",
    "question": "Turbine performance checking relies on the inlet and outlet velocity triangles in the crop, which show blade speed and whirl components at both sections. Using those displayed components only, which specific-work value is closest?",
    "image": "images/diagrams/civil-flt01/q39-turbine-triangles.jpg",
    "options": [
      "24 kJ/kg",
      "12 kJ/kg",
      "36 kJ/kg",
      "48 kJ/kg"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Numerical+Diagram",
    "formula": "",
    "explanation": "CORRECT: 24 kJ/kg\n\nWHY CORRECT / CALCULATION:\nCALC: applying the displayed inlet/outlet whirl change with blade speed gives about 24 kJ/kg. Trap: C omits the outlet-whirl sign.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — HHM: turbine triangles+diagram",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "core",
    "diagramSourcePath": "civil-core-diagrams/Fluid/Fluid_pg0175.jpg"
  },
  {
    "id": 40,
    "subject": "Steel Structures",
    "topic": "Steel: eccentric bolts+diagram",
    "question": "For the bracket shown in the crop, the load acts eccentrically in the bolt-group plane of the connection. Which bolt should the engineer identify as critical from the displayed coordinates and load direction?",
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
    "explanation": "CORRECT: Bolt 3\n\nWHY CORRECT / CALCULATION:\nWhy: Bolt 3 has the largest adverse vector resultant of direct and moment-induced shear. Trap: the farthest bolt is not automatically critical without vector direction.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Steel: eccentric bolts+diagram",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "core",
    "diagramSourcePath": "civil-core-diagrams/Steel/Steel_pg0016.jpg"
  },
  {
    "id": 41,
    "subject": "Steel Structures",
    "topic": "Steel: IS tension limit states",
    "question": "A tension plate has Ag=1800 mm², An=1450 mm², fy=250 MPa and fu=410 MPa (γm0=1.10, γm1=1.25). Which governing capacity is closest after comparing gross yielding and net rupture?",
    "image": "",
    "options": [
      "428 kN rupture",
      "409 kN yielding",
      "450 kN yielding",
      "380 kN rupture"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 409 kN yielding\n\nWHY CORRECT / CALCULATION:\nCALC: yielding ≈409 kN; rupture ≈428 kN; lesser governs. Trap: A is a valid non-governing value; C ignores γm0; D understates rupture.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Steel: IS tension limit states",
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
    "explanation": "CORRECT: A true, R false\n\nWHY CORRECT / CALCULATION:\nWhy: A is true; lacing is designed for transverse shear and may experience compression. Trap: “tension-only” confuses ideal truss action with design forces.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Steel: lacing+AR",
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
    "explanation": "CORRECT: The axis that produces the larger slenderness ratio Le/r governs the flexural-buckling strength\n\nWHY CORRECT / CALCULATION:\nWhy: buckling strength follows the larger slenderness demand. Trap: A ignores radius; B ignores restraint length. **Hard justification:** competing geometric parameters without a pure numerical plug-in.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Steel: column buckling+governing axis",
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
    "explanation": "CORRECT: Throat\n\nWHY CORRECT / CALCULATION:\nWhy: this is effective throat geometry. Trap: leg is measured along the connected plate surface.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Steel: fillet weld terminology",
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
    "explanation": "CORRECT: Section type, axis of buckling and fabrication class together select the buckling curve\n\nWHY CORRECT / CALCULATION:\nWhy: IS curve selection depends on section/axis/imperfection class. Trap: B oversimplifies to fy only.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Steel: buckling curve+section class",
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
    "explanation": "CORRECT: About 1.12 My\n\nWHY CORRECT / CALCULATION:\nWhy: Mp = Zp fy ≈ (shape factor)×My for the same fy. Trap: D invents a universal factor of 2.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Steel: plastic moment+section capacity",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-GATE→Transco"
  },
  {
    "id": 47,
    "subject": "Steel Structures",
    "topic": "Steel: staggered holes+diagram+paths",
    "question": "Tension-splice review of a bolted plate uses the crop showing two candidate rupture paths through staggered holes. After allowing for the shown stagger credits on gauge lines, which path and net area should the engineer adopt?",
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
    "explanation": "CORRECT: Q, 1810 mm²\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: the displayed hole count, gauge and stagger terms make Q the smaller net area at 1810 mm². Trap: A checks only the straight path. **Hard justification:** competing paths require geometric interpretation.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Steel: staggered holes+diagram+paths",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "core",
    "diagramSourcePath": "civil-core-diagrams/Steel/Steel_pg0026.jpg"
  },
  {
    "id": 48,
    "subject": "Steel Structures",
    "topic": "Steel: IS bolt pitch+detailing",
    "question": "In shop-drawing review of 20 mm bolts on a tension splice, proposed pitch is 45 mm along the load line. The applicable code minimum is 2.5 times nominal diameter. Which direction is most defensible?",
    "image": "",
    "options": [
      "Accept 45 mm because it exceeds twice diameter",
      "Revise pitch to at least 50 mm",
      "Reduce hole diameter only",
      "Accept if plate is thicker than bolt"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: Revise pitch to at least 50 mm\n\nWHY CORRECT / CALCULATION:\nCALC: minimum = 50 mm. Trap: A uses the wrong detailing multiple.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Steel: IS bolt pitch+detailing",
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
    "explanation": "CORRECT: Grind/repair to approved procedure, re-inspect, then accept only if limits are met\n\nWHY CORRECT / CALCULATION:\nWhy: undercut is a rejectable discontinuity on a primary path until repaired to procedure. Trap: B confuses appearance with acceptance criteria. **Hard/Practical justification:** quality limit vs load path.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Steel: weld quality+site acceptance",
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
      "Weak-axis (larger λ) flexural buckling",
      "Local flange buckling only",
      "Shear buckling of the web only"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Weak-axis (larger λ) flexural buckling\n\nWHY CORRECT / CALCULATION:\nWhy: the larger Le/r governs flexural-buckling strength. Trap: A ignores the weak axis.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Steel: column buckling+slenderness path",
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
      "Biaxial bending interaction with stability and serviceability checks",
      "Axial tension only",
      "Minor-axis bending only"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Biaxial bending interaction with stability and serviceability checks\n\nWHY CORRECT / CALCULATION:\nWhy: oblique loading resolves about both axes, and restraint affects stability. Trap: A ignores the weak-axis component.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Steel: biaxial purlin design",
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
    "explanation": "CORRECT: Reduced net stress increase and settlement demand\n\nWHY CORRECT / CALCULATION:\nWhy: excavated soil weight offsets part of structural pressure; it does not cancel gross pressure or eliminate geotechnical checks. Trap: B confuses reduced net pressure with zero gross pressure.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Foundation: compensated raft",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-GATE→Transco"
  },
  {
    "id": 53,
    "subject": "Foundation Engineering",
    "topic": "Foundation: layered settlement+diagram",
    "question": "In settlement assessment for a shallow footing, the cropped figure provides two compressible layers with thicknesses, initial effective stresses and applied stress increments shown only in the figure. Which total primary consolidation settlement is closest?",
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
    "explanation": "CORRECT: 95 mm\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: summing the two layer contributions shown yields 95 mm. Trap: C applies the larger stress increment to both layers.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Foundation: layered settlement+diagram",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "core",
    "diagramSourcePath": "civil-core-diagrams/Soil/Soil_pg0056.jpg"
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
    "explanation": "CORRECT: Combined or strap footing designed about the load resultant\n\nWHY CORRECT / CALCULATION:\nWhy: coupling controls eccentricity and soil-pressure distribution without trespass. Trap: A worsens eccentric pressure.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Foundation: property line+selection",
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
    "explanation": "CORRECT: Bearing may pass while settlement still governs; enlarge/deepen the footing, improve the ground, or revise until both criteria are satisfied\n\nWHY CORRECT / CALCULATION:\nWhy: bearing capacity and settlement are independent acceptance criteria. Trap: B collapses both into one check. **Hard/Practical/App justification:** identifying the governing serviceability limit.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Foundation: bearing vs settlement governing",
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
    "explanation": "CORRECT: 200 kPa\n\nWHY CORRECT / CALCULATION:\nCALC: 600/3 = 200 kPa. Trap: B multiplies by the safety factor.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Foundation: safe bearing",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 57,
    "subject": "Foundation Engineering",
    "topic": "Foundation: pile group+diagram+failure",
    "question": "Pile-group review in clay uses the crop of a closely spaced 3×3 layout together with the enclosing block surface marked for capacity assessment. Which capacity procedure is most defensible for the shown geometry?",
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
    "explanation": "CORRECT: Compare individual sum with block capacity, adopt the lower, then check settlement\n\nWHY CORRECT / CALCULATION:\nWhy: close spacing permits block action; settlement remains separate. Trap: A ignores the figure’s plausible block mechanism. **Hard/App justification:** two failure models and serviceability compete.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Foundation: pile group+diagram+failure",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "core",
    "diagramSourcePath": "civil-core-diagrams/Soil/Soil_pg0091.jpg"
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
    "explanation": "CORRECT: 307 kPa\n\nWHY CORRECT / CALCULATION:\nCALC: from 11 to 25 mm over 100 kPa, one additional millimetre gives about 7.1 kPa; ≈307 kPa. Trap: A is conservative but not the requested interpolation. **Table item:** values are embedded in the stem.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Foundation: plate-load table+interpretation",
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
    "explanation": "CORRECT: 450 kN\n\nWHY CORRECT / CALCULATION:\nCALC: net =12 mm; settlement criterion ≈750 kN, but separate cap =450 kN. Trap: B ignores the second restriction.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Foundation: pile test+criteria",
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
    "explanation": "CORRECT: Pause and secure the work, monitor movement, assess undermining, and design support/underpinning before resuming\n\nWHY CORRECT / CALCULATION:\nWhy: temporary stability and the existing footing’s support must be secured before work resumes. Trap: C treats the symptom, not ground loss. **Practical/App justification:** the evidence requires a construction hold point.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Foundation: adjacent excavation+practical",
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
    "explanation": "CORRECT: Transfer moment so footing reactions are better centred\n\nWHY CORRECT / CALCULATION:\nWhy: the strap couples footing moments/reactions. Trap: B contradicts the stated isolation from soil.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Foundation: strap action",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 62,
    "subject": "Soil Mechanics",
    "topic": "Soil: flow net+diagram",
    "question": "Beneath a sheet-pile cutoff, the seepage crop shows four flow channels, twelve potential drops and a 6 m head loss across the domain. For k = 4×10⁻⁵ m/s per metre width, which seepage discharge is closest?",
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
    "explanation": "CORRECT: \\(8×10^{-5}\\) m³/s\n\nWHY CORRECT / CALCULATION:\nCALC: \\(kH(N_f/N_d)=4×10^{-5}×6×4/12=8×10^{-5}\\). Trap: B omits division by drops.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Soil: flow net+diagram",
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
    "explanation": "CORRECT: 16.0 kN/m³, 82%\n\nWHY CORRECT / CALCULATION:\nCALC: dry =16.0; e≈0.655; S≈82.4%. Trap: B understates γd; D fails to remove water mass.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Soil: phase relations+numerical",
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
    "explanation": "CORRECT: 27%\n\nWHY CORRECT / CALCULATION:\nCALC: 48−21 =27%. Trap: A adds the limits.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Soil: Atterberg limits",
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
    "explanation": "CORRECT: Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly\n\nWHY CORRECT / CALCULATION:\nWhy: water pressure is superposed on effective soil pressure. Trap: B notices buoyancy but omits hydrostatic loading. **Hard/App justification:** total and effective stresses must be separated and recombined.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Soil: retaining wall+water pressure",
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
    "explanation": "CORRECT: 16 years\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: drainage path doubles, so time becomes fourfold =16 years. Trap: B assumes a linear path-time relation.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Soil: consolidation+drainage path",
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
    "explanation": "CORRECT: 1.00\n\nWHY CORRECT / CALCULATION:\nCALC: \\((2.65−1)/(1+0.65)=1.0\\). Trap: C uses only the numerator.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Soil: critical gradient",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 68,
    "subject": "Soil Mechanics",
    "topic": "Soil: Proctor+graph+acceptance",
    "question": "Embankment quality review uses the cropped Proctor curves for two compactive efforts with field point F marked relative to the peaks. Which conclusion about the field compaction state is closest?",
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
    "explanation": "CORRECT: Higher effort gives higher maximum dry density/lower OMC, but F fails the shown relative-compaction criterion\n\nWHY CORRECT / CALCULATION:\nWhy: both peak shift and F’s ratio are read from the graph. Trap: B treats an impossible plotting region as valid. **Hard/Practical/App justification:** laboratory trend and field acceptance are combined.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Soil: Proctor+graph+acceptance",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Diagram-Core/Family",
    "diagramSource": "core",
    "diagramSourcePath": "civil-core-diagrams/Soil/Soil_pg0062.jpg"
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
    "explanation": "CORRECT: Both true; R explains A\n\nWHY CORRECT / CALCULATION:\nWhy: disturbance directly undermines representative mechanical parameters. Trap: index description may remain usable, but structure-sensitive testing is affected. **Practical/App justification:** evidence controls test suitability.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Soil: sample quality+AR+practical",
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
    "explanation": "CORRECT: 48 kN/m\n\nWHY CORRECT / CALCULATION:\nCALC: Ka=1/3; thrust = 0.5×(1/3)×18×16 = 48 kN/m. Trap: C omits Ka; A uses Ka≈0.375; D uses half wrongly.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Soil: earth pressure+numerical",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 71,
    "subject": "Quantitative Aptitude",
    "topic": "Quant: work-rate",
    "question": "A contractor completes 3/8 of a job in 12 days. After productivity rises by 25%, how many additional days are required?",
    "image": "",
    "options": [
      "16",
      "12",
      "14",
      "20"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 16\n\nWHY CORRECT / CALCULATION:\nOld full-job time 32 days; remaining old-time 20 days; at 1.25 rate, 16 days. Trap: D ignores improved productivity.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Quant: work-rate",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 72,
    "subject": "Quantitative Aptitude",
    "topic": "Quant: percentage",
    "question": "An estimate rises from ₹8.0 lakh to ₹9.2 lakh. The percentage increase is:",
    "image": "",
    "options": [
      "12%",
      "20%",
      "15%",
      "10%"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 15%\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: increase \\(1.2/8.0=15\\%\\). Trap: A divides by the new estimate.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Quant: percentage",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 73,
    "subject": "Quantitative Aptitude",
    "topic": "Quant: mixture",
    "question": "An alloy contains copper and zinc in the ratio 3:2 and weighs 40 kg. How much copper must be added to obtain 2:1?",
    "image": "",
    "options": [
      "4 kg",
      "8 kg",
      "6 kg",
      "10 kg"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 8 kg\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: copper 24 kg, zinc 16 kg; target copper 32 kg, so add 8 kg. Trap: D treats 2:1 as a 10 kg addition.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Quant: mixture",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 74,
    "subject": "Quantitative Aptitude",
    "topic": "Quant: data interpretation",
    "question": "Planned/actual monthly outputs are Jan 80/68, Feb 100/110, Mar 120/114 and Apr 150/165. Which month has the greatest absolute percentage deviation from plan?",
    "image": "",
    "options": [
      "February",
      "April",
      "March",
      "January"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: January\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: deviations are 15%, 10%, 5%, 10%. Trap: A compares absolute units rather than percentages. **Hard justification:** deviations require normalization to different bases.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Quant: data interpretation",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 75,
    "subject": "Quantitative Aptitude",
    "topic": "Quant: average speed",
    "question": "A vehicle covers half of a 240 km trip at 40 km/h and half at 60 km/h, then stops 15 minutes. Its overall average speed is closest to:",
    "image": "",
    "options": [
      "48.0 km/h",
      "45.7 km/h",
      "50.5 km/h",
      "52.0 km/h"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 45.7 km/h\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: time \\(=3+2+0.25=5.25\\) h; \\(240/5.25=45.7\\). Trap: A omits the stoppage.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Quant: average speed",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 76,
    "subject": "Quantitative Aptitude",
    "topic": "Quant: algebra",
    "question": "Positive numbers \\(x,y\\) satisfy \\(x+y=10\\) and \\(xy=21\\). The value of \\(x^3+y^3\\) is:",
    "image": "",
    "options": [
      "280",
      "490",
      "630",
      "370"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 370\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: \\(1000−3×21×10=370\\). Trap: B omits the factor 3. **Hard justification:** uses symmetric relations without solving both roots.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Quant: algebra",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 77,
    "subject": "Quantitative Aptitude",
    "topic": "Quant: probability",
    "question": "Two cards are drawn without replacement from cards numbered 1 to 10. The probability that their sum is even is:",
    "image": "",
    "options": [
      "1/2",
      "5/9",
      "4/9",
      "2/5"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 4/9\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: both odd or both even gives \\([10+10]/45=4/9\\). Trap: A assumes parity is exactly balanced without replacement.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Quant: probability",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 78,
    "subject": "Quantitative Aptitude",
    "topic": "Quant: compound change",
    "question": "A price rises 20%, falls 10%, and then attracts 5% tax. Relative to the original price, the final amount is:",
    "image": "",
    "options": [
      "13.4% higher",
      "8% higher",
      "2.6% lower",
      "15% higher"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Numerical",
    "formula": "",
    "explanation": "CORRECT: 13.4% higher\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: \\(1.20×0.90×1.05=1.134\\). Trap: D adds signed percentages. **Hard justification:** sequential changes cannot be added.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Quant: compound change",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 79,
    "subject": "General Awareness",
    "topic": "GA: APTRANSCO",
    "question": "APTRANSCO primarily functions as:",
    "image": "",
    "options": [
      "A generation-only company",
      "A distribution franchisee",
      "Andhra Pradesh’s state transmission utility",
      "A national fuel regulator"
    ],
    "answer": 2,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Andhra Pradesh’s state transmission utility\n\nWHY CORRECT / CALCULATION:\nWhy: it operates the state transmission function. Trap: A confuses transmission with generation.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — GA: APTRANSCO",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 80,
    "subject": "General Awareness",
    "topic": "GA: power system",
    "question": "The nominal frequency of India’s interconnected power system is:",
    "image": "",
    "options": [
      "50 Hz",
      "60 Hz",
      "25 Hz",
      "100 Hz"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: 50 Hz\n\nWHY CORRECT / CALCULATION:\nWhy: India operates nominally at 50 Hz. Trap: B is used in some other national systems.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — GA: power system",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 81,
    "subject": "General Awareness",
    "topic": "GA: economy",
    "question": "When RBI raises the repo rate while other conditions remain unchanged, the intended immediate direction is generally:",
    "image": "",
    "options": [
      "Cheaper bank liquidity",
      "Automatic abolition of CRR",
      "Mandatory currency replacement",
      "Costlier liquidity, moderating credit demand and inflation pressure"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Costlier liquidity, moderating credit demand and inflation pressure\n\nWHY CORRECT / CALCULATION:\nWhy: tightening raises marginal funding cost; it does not mechanically guarantee the final inflation outcome. Trap: A reverses the intended transmission.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — GA: economy",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 82,
    "subject": "General Awareness",
    "topic": "GA: environment",
    "question": "An Indian wetland is recognised under an international convention centred on conservation and wise use. The correct convention is:",
    "image": "",
    "options": [
      "Basel",
      "Ramsar",
      "Montreal",
      "Vienna"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Ramsar\n\nWHY CORRECT / CALCULATION:\nWhy: Ramsar concerns wetlands; Basel concerns hazardous waste. Trap: A assigns the wrong treaty domain.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — GA: environment",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 83,
    "subject": "General Awareness",
    "topic": "GA: space science",
    "question": "A communication satellite appears fixed above one longitude because it is in:",
    "image": "",
    "options": [
      "A circular equatorial orbit matching Earth’s rotation period and direction",
      "A polar orbit with zero speed",
      "Any orbit at 24-hour period",
      "An orbit beyond gravity"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: A circular equatorial orbit matching Earth’s rotation period and direction\n\nWHY CORRECT / CALCULATION:\nWhy: equatorial plane, direction and angular period are all required. Trap: C omits plane and direction.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — GA: space science",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 84,
    "subject": "General Awareness",
    "topic": "GA: polity",
    "question": "For a bill containing only matters constitutionally permitted in a Money Bill and incidental provisions, who gives the final parliamentary certification of its status?",
    "image": "",
    "options": [
      "President of India",
      "Chief Justice of India",
      "Speaker of Lok Sabha",
      "Finance Commission"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Speaker of Lok Sabha\n\nWHY CORRECT / CALCULATION:\nWhy: the Speaker certifies it. Trap: A gives assent but does not issue this parliamentary certification. **Hard justification:** distinguishes bill content from certifying authority.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — GA: polity",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 85,
    "subject": "General Awareness",
    "topic": "GA: history",
    "question": "Choose the correct chronology: Non-Cooperation Movement, Civil Disobedience Movement, Quit India Movement, Independence.",
    "image": "",
    "options": [
      "CDM→NCM→Quit India→Independence",
      "NCM→CDM→Quit India→Independence",
      "NCM→Quit India→CDM→Independence",
      "Quit India→NCM→CDM→Independence"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: NCM→CDM→Quit India→Independence\n\nWHY CORRECT / CALCULATION:\nWhy: the years are 1920, 1930, 1942 and 1947. Trap: C places Quit India before Civil Disobedience.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — GA: history",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 86,
    "subject": "Reasoning & General Intelligence",
    "topic": "Reasoning: coding",
    "question": "In a code, letters are shifted alternately +2, −1, +2, −1. GRID is coded as:",
    "image": "",
    "options": [
      "IQUC",
      "HQKC",
      "ITKF",
      "IQKC"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: IQKC\n\nWHY CORRECT / CALCULATION:\nWhy: G→I, R→Q, I→K, D→C. Trap: A applies the positive shift to every letter.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Reasoning: coding",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 87,
    "subject": "Reasoning & General Intelligence",
    "topic": "Reasoning: scheduling",
    "question": "Inspections P,Q,R,S,T occur Monday–Friday, one daily. R is immediately after P; Q is before S; T is Wednesday; P is not Monday. Which schedule is possible?",
    "image": "",
    "options": [
      "S,Q,T,P,R",
      "Q,P,T,R,S",
      "P,R,T,Q,S",
      "Q,S,T,P,R"
    ],
    "answer": 3,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Q,S,T,P,R\n\nWHY CORRECT / CALCULATION:\nWhy: T is Wednesday, P-R are Thursday-Friday, and Q precedes S. Trap: A reverses Q and S.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Reasoning: scheduling",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 88,
    "subject": "Reasoning & General Intelligence",
    "topic": "Reasoning: syllogism",
    "question": "Statements: All substations are installations. Some installations are automated. No automated system is manual. Which conclusion necessarily follows?",
    "image": "",
    "options": [
      "Some substations are automated",
      "Some installations are not manual",
      "No substation is manual",
      "All installations are substations"
    ],
    "answer": 1,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Some installations are not manual\n\nWHY CORRECT / CALCULATION:\nWhy: the automated installations are non-manual; they need not be substations. Trap: A assumes the existential set lies inside substations. **Hard justification:** preserves the existential link without reversing premises.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Reasoning: syllogism",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 89,
    "subject": "Reasoning & General Intelligence",
    "topic": "Reasoning: row arrangement",
    "question": "Four engineers A,B,C,D face north. A is left of B; C is not at an end; D is immediately right of C; B is at an end. Who must be at the left end?",
    "image": "",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: A\n\nWHY CORRECT / CALCULATION:\nWhy: B must be right end; C-D occupy the middle, leaving A left. Trap: B violates “A left of B.”\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Reasoning: row arrangement",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 90,
    "subject": "Reasoning & General Intelligence",
    "topic": "Reasoning: data sufficiency",
    "question": "What is integer \\(n\\)? I: \\(n^2=49\\). II: \\(n>0\\). Choose the sufficient statement set.",
    "image": "",
    "options": [
      "I alone",
      "II alone",
      "Both together, neither alone",
      "Either alone"
    ],
    "answer": 2,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Both together, neither alone\n\nWHY CORRECT / CALCULATION:\nWhy: I gives ±7; II selects +7 only with I. Trap: A overlooks the negative root. **Hard justification:** sufficiency, not merely truth, is tested.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Reasoning: data sufficiency",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 91,
    "subject": "English Language & Comprehension",
    "topic": "English: grammar",
    "question": "Choose the grammatically correct sentence.",
    "image": "",
    "options": [
      "Each of the drawings are checked.",
      "Each of the drawings has been checked.",
      "Each of the drawings have been checked.",
      "Each of the drawings were checked."
    ],
    "answer": 1,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Each of the drawings has been checked.\n\nWHY CORRECT / CALCULATION:\nWhy: singular “Each” takes “has.” Trap: C agrees with the nearer plural noun instead of the head subject.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — English: grammar",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 92,
    "subject": "English Language & Comprehension",
    "topic": "English: vocabulary",
    "question": "In “The engineer gave a concise account of the failure,” concise most nearly means:",
    "image": "",
    "options": [
      "Repetitive",
      "Doubtful",
      "Confidential",
      "Brief but complete"
    ],
    "answer": 3,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Brief but complete\n\nWHY CORRECT / CALCULATION:\nWhy: “concise” means clear and brief. Trap: “confidential” concerns access, not length.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — English: vocabulary",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 93,
    "subject": "English Language & Comprehension",
    "topic": "English: error detection",
    "question": "Identify the erroneous part: “Neither the contractor / nor the supervisors / was willing / to sign the record.”",
    "image": "",
    "options": [
      "First",
      "Second",
      "Third",
      "Fourth"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Third\n\nWHY CORRECT / CALCULATION:\nWhy: the nearer plural subject requires “were willing.” Trap: the opening singular noun does not control agreement across “nor.”\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — English: error detection",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 94,
    "subject": "English Language & Comprehension",
    "topic": "English: inference",
    "question": "“The reservoir level rose after rain, yet operators retained flood cushion because upstream inflow was still increasing.” Which inference is best supported?",
    "image": "",
    "options": [
      "Level alone was insufficient; inflow trend influenced the decision",
      "Rain had ended permanently",
      "Flood cushion means a full reservoir",
      "Operators ignored forecasts"
    ],
    "answer": 0,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Level alone was insufficient; inflow trend influenced the decision\n\nWHY CORRECT / CALCULATION:\nWhy: the causal phrase links retained capacity to inflow trend. Trap: B claims permanence absent from the passage. **Hard justification:** selects warranted inference over unsupported claims.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — English: inference",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 95,
    "subject": "English Language & Comprehension",
    "topic": "English: sentence order",
    "question": "Arrange: P—Consequently, traffic was diverted. Q—Inspection revealed bearing distress. R—The bridge was closed for emergency assessment. S—A replacement plan was then approved.",
    "image": "",
    "options": [
      "P-Q-R-S",
      "R-Q-S-P",
      "Q-R-P-S",
      "Q-P-S-R"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Q-R-P-S\n\nWHY CORRECT / CALCULATION:\nWhy: detection → closure → diversion → replacement plan. Trap: D diverts traffic before the closure decision.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — English: sentence order",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 96,
    "subject": "Computer Knowledge",
    "topic": "Computer: cyber hygiene",
    "question": "Which control most directly reduces account compromise after a password is stolen?",
    "image": "",
    "options": [
      "Multi-factor authentication",
      "Disk defragmentation",
      "Clearing the print queue",
      "Increasing monitor resolution"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Multi-factor authentication\n\nWHY CORRECT / CALCULATION:\nWhy: MFA requires another independent factor. Trap: the other choices do not protect authentication.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Computer: cyber hygiene",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 97,
    "subject": "Computer Knowledge",
    "topic": "Computer: networking",
    "question": "Which service normally resolves a domain name into an IP address?",
    "image": "",
    "options": [
      "DNS",
      "SMTP",
      "FTP",
      "DHCP"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: DNS\n\nWHY CORRECT / CALCULATION:\nWhy: DNS resolves names; DHCP allocates host configuration. Trap: D confuses addressing with name resolution.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Computer: networking",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  },
  {
    "id": 98,
    "subject": "Computer Knowledge",
    "topic": "Computer: spreadsheet",
    "question": "A spreadsheet formula will be copied both down and across. Which reference keeps column A and row 1 fixed?",
    "image": "",
    "options": [
      "A1",
      "$A$1",
      "A$1",
      "$A1"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: $A$1\n\nWHY CORRECT / CALCULATION:\nWhy: both dollar signs make the reference absolute. Trap: C fixes only the row.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Computer: spreadsheet",
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
      "Foreign key",
      "View",
      "Primary key",
      "Non-unique index"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Primary key\n\nWHY CORRECT / CALCULATION:\nWhy: a primary key enforces unique, non-null row identity. Trap: an ordinary index need not enforce either property.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Computer: database",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Brand-new"
  },
  {
    "id": 100,
    "subject": "Computer Knowledge",
    "topic": "Computer: security judgement",
    "question": "An invoice email has attachment `invoice.pdf.exe` and a supplier domain differing by one character from the known domain. Which response is safest?",
    "image": "",
    "options": [
      "Rename and run it",
      "Forward it for a colleague to test",
      "Disable antivirus temporarily",
      "Do not open; verify through a known channel and report/quarantine it"
    ],
    "answer": 3,
    "difficulty": "Hard",
    "questionType": "Conceptual",
    "formula": "",
    "explanation": "CORRECT: Do not open; verify through a known channel and report/quarantine it\n\nWHY CORRECT / CALCULATION:\nWhy: both indicators suggest phishing/malware. Trap: B spreads the risk instead of containing it. **Hard justification:** combines detection, independent verification and containment.\n\nTOPIC HIGH-YIELD:\n• APTRANSCO AEE Civil — Computer: security judgement",
    "source": "CIVIL_FLT01_AUDITQ_APPROVED_v1",
    "origin": "Inspired-APPSC"
  }
];
