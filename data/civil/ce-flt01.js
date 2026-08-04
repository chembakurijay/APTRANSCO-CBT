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
    "explanation": "CORRECT: Stress ≈175 MPa, below yield\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: area = 314.2 mm²; stress = 55,000/314.2 ≈175 MPa. Trap: C uses radius as diameter; B approximates yield wrongly; D confuses demand with fy/γm0.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: σ=P/A; δ=PL/AE; M/I=σ/y=E/R; τ=VQ/(Ib); T/J=τ/r=Gθ/L as applicable.\n• REMEMBER: Sign conventions for BM/SF; ductile yield vs allowable; units N–mm vs N–m.\n• ALSO ASKED FROM THIS TOPIC: Pure bending stress; combined axial+bending; torsion of shafts; Mohr’s circle centre/radius.",
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
    "explanation": "CORRECT: 3/7\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: equal strain makes force proportional to \\(AE\\); brass:steel = 900:1200, so brass share = 3/7. Trap: A reverses the stiffness share.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: σ=P/A; δ=PL/AE; M/I=σ/y=E/R; τ=VQ/(Ib); T/J=τ/r=Gθ/L as applicable.\n• REMEMBER: Sign conventions for BM/SF; ductile yield vs allowable; units N–mm vs N–m.\n• ALSO ASKED FROM THIS TOPIC: Pure bending stress; combined axial+bending; torsion of shafts; Mohr’s circle centre/radius.",
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
    "explanation": "CORRECT: 10 kN, 50 kN\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: AB=4 m with 10 kN/m UDL (40 kN) and 20 kN at tip C on 2 m overhang; ΣMA → RB=50 kN; ΣV → RA=10 kN. Trap: A/C shift the UDL centroid or tip lever.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: σ=P/A; δ=PL/AE; M/I=σ/y=E/R; τ=VQ/(Ib); T/J=τ/r=Gθ/L as applicable.\n• REMEMBER: Sign conventions for BM/SF; ductile yield vs allowable; units N–mm vs N–m.\n• ALSO ASKED FROM THIS TOPIC: Pure bending stress; combined axial+bending; torsion of shafts; Mohr’s circle centre/radius.",
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
    "explanation": "CORRECT: 60\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: λ = Le/r = 2100/35 = 60. Trap: B uses full geometric length without the effective-length factor already embedded in 2.1 m; A/C misplace the decimal.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: σ=P/A; δ=PL/AE; M/I=σ/y=E/R; τ=VQ/(Ib); T/J=τ/r=Gθ/L as applicable.\n• REMEMBER: Sign conventions for BM/SF; ductile yield vs allowable; units N–mm vs N–m.\n• ALSO ASKED FROM THIS TOPIC: Pure bending stress; combined axial+bending; torsion of shafts; Mohr’s circle centre/radius.",
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
    "explanation": "CORRECT: A true, R false\n\nWHY CORRECT / CALCULATION:\nWhy: the centre has zero shear ordinate; R is false. Trap: shear changes radius, not the centre’s vertical coordinate. **Hard justification:** distinguishes circle geometry from stress-component presence.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: σ=P/A; δ=PL/AE; M/I=σ/y=E/R; τ=VQ/(Ib); T/J=τ/r=Gθ/L as applicable.\n• REMEMBER: Sign conventions for BM/SF; ductile yield vs allowable; units N–mm vs N–m.\n• ALSO ASKED FROM THIS TOPIC: Pure bending stress; combined axial+bending; torsion of shafts; Mohr’s circle centre/radius.",
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
    "explanation": "CORRECT: 1.2 MPa at neutral axis\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: average = 0.8 MPa; rectangular maximum = 1.5×average = 1.2 MPa at NA. Trap: C treats shear as uniform.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: σ=P/A; δ=PL/AE; M/I=σ/y=E/R; τ=VQ/(Ib); T/J=τ/r=Gθ/L as applicable.\n• REMEMBER: Sign conventions for BM/SF; ductile yield vs allowable; units N–mm vs N–m.\n• ALSO ASKED FROM THIS TOPIC: Pure bending stress; combined axial+bending; torsion of shafts; Mohr’s circle centre/radius.",
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
    "explanation": "CORRECT: 1000 N·m\n\nWHY CORRECT / CALCULATION:\nWhy: free-body of BC must transmit the end torque at C. Trap: D halves the torque without a second load path.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: σ=P/A; δ=PL/AE; M/I=σ/y=E/R; τ=VQ/(Ib); T/J=τ/r=Gθ/L as applicable.\n• REMEMBER: Sign conventions for BM/SF; ductile yield vs allowable; units N–mm vs N–m.\n• ALSO ASKED FROM THIS TOPIC: Pure bending stress; combined axial+bending; torsion of shafts; Mohr’s circle centre/radius.",
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
    "explanation": "CORRECT: \\(3wL/16\\)\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: compatibility leaves half the UDL deflection to be cancelled by the prop, giving \\(3wL/16\\). Trap: A is the no-settlement result. **Hard justification:** settlement and force compatibility compete.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: σ=P/A; δ=PL/AE; M/I=σ/y=E/R; τ=VQ/(Ib); T/J=τ/r=Gθ/L as applicable.\n• REMEMBER: Sign conventions for BM/SF; ductile yield vs allowable; units N–mm vs N–m.\n• ALSO ASKED FROM THIS TOPIC: Pure bending stress; combined axial+bending; torsion of shafts; Mohr’s circle centre/radius.",
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
    "explanation": "CORRECT: A concentrated couple acts at C\n\nWHY CORRECT / CALCULATION:\nWhy: a concentrated moment causes a BMD discontinuity; a point force jumps shear. Trap: stiffness changes curvature, not equilibrium jumps. **Hard justification:** figure signature must be separated from member-property effects.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: σ=P/A; δ=PL/AE; M/I=σ/y=E/R; τ=VQ/(Ib); T/J=τ/r=Gθ/L as applicable.\n• REMEMBER: Sign conventions for BM/SF; ductile yield vs allowable; units N–mm vs N–m.\n• ALSO ASKED FROM THIS TOPIC: Pure bending stress; combined axial+bending; torsion of shafts; Mohr’s circle centre/radius.",
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
    "explanation": "CORRECT: a-4, b-2, c-3, d-1\n\nWHY CORRECT / CALCULATION:\nWhy: (a) 3wl²/8; (b) wl²/6; (c) wl²/8; (d) w(2l)²/8 = wl²/2. Trap: A swaps triangular and double-span results.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: σ=P/A; δ=PL/AE; M/I=σ/y=E/R; τ=VQ/(Ib); T/J=τ/r=Gθ/L as applicable.\n• REMEMBER: Sign conventions for BM/SF; ductile yield vs allowable; units N–mm vs N–m.\n• ALSO ASKED FROM THIS TOPIC: Pure bending stress; combined axial+bending; torsion of shafts; Mohr’s circle centre/radius.",
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
    "explanation": "CORRECT: Sudden ≈ twice gradual\n\nWHY CORRECT / CALCULATION:\nWhy: energy equivalence for sudden loading gives σ_sudden ≈ 2 σ_gradual. Trap: C reverses the factor.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: σ=P/A; δ=PL/AE; M/I=σ/y=E/R; τ=VQ/(Ib); T/J=τ/r=Gθ/L as applicable.\n• REMEMBER: Sign conventions for BM/SF; ductile yield vs allowable; units N–mm vs N–m.\n• ALSO ASKED FROM THIS TOPIC: Pure bending stress; combined axial+bending; torsion of shafts; Mohr’s circle centre/radius.",
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
    "explanation": "CORRECT: 95°C\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: σ = 227.3 MPa = αEΔT → ΔT ≈ 94.7°C. Trap: A uses fy without γm0; B halves the rise.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: σ=P/A; δ=PL/AE; M/I=σ/y=E/R; τ=VQ/(Ib); T/J=τ/r=Gθ/L as applicable.\n• REMEMBER: Sign conventions for BM/SF; ductile yield vs allowable; units N–mm vs N–m.\n• ALSO ASKED FROM THIS TOPIC: Pure bending stress; combined axial+bending; torsion of shafts; Mohr’s circle centre/radius.",
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
    "explanation": "CORRECT: 2.4×10⁵ mm³\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: Z = M/σ = 36×10⁶/150 = 2.4×10⁵ mm³. Trap: B slips a power of ten. **Hard justification:** unit consistency under a fixed stress limit.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: σ=P/A; δ=PL/AE; M/I=σ/y=E/R; τ=VQ/(Ib); T/J=τ/r=Gθ/L as applicable.\n• REMEMBER: Sign conventions for BM/SF; ductile yield vs allowable; units N–mm vs N–m.\n• ALSO ASKED FROM THIS TOPIC: Pure bending stress; combined axial+bending; torsion of shafts; Mohr’s circle centre/radius.",
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
    "explanation": "CORRECT: 180 mm\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: transformed width = m×12 = 180 mm. Trap: A uses the plate depth; D quotes m alone.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: σ=P/A; δ=PL/AE; M/I=σ/y=E/R; τ=VQ/(Ib); T/J=τ/r=Gθ/L as applicable.\n• REMEMBER: Sign conventions for BM/SF; ductile yield vs allowable; units N–mm vs N–m.\n• ALSO ASKED FROM THIS TOPIC: Pure bending stress; combined axial+bending; torsion of shafts; Mohr’s circle centre/radius.",
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
    "explanation": "CORRECT: Radius rises; slenderness falls; buckling capacity rises\n\nWHY CORRECT / CALCULATION:\nWhy: larger weak-axis second moment raises radius, lowers slenderness and raises buckling resistance. Trap: C reverses the radius-slenderness relation.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: σ=P/A; δ=PL/AE; M/I=σ/y=E/R; τ=VQ/(Ib); T/J=τ/r=Gθ/L as applicable.\n• REMEMBER: Sign conventions for BM/SF; ductile yield vs allowable; units N–mm vs N–m.\n• ALSO ASKED FROM THIS TOPIC: Pure bending stress; combined axial+bending; torsion of shafts; Mohr’s circle centre/radius.",
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
    "explanation": "CORRECT: Restore specified cover before concreting\n\nWHY CORRECT / CALCULATION:\nWhy: durability/fire cover is an independent requirement. Trap: adequate flexural depth cannot waive exposure protection.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Limit-state flexure xu,max/d; τv=V/(bd); Ld=φσs/(4τbd); τc from pt table.\n• REMEMBER: Cover ≠ effective depth; min shear steel even if τv<τc; Fe415 xu,max/d≈0.48.\n• ALSO ASKED FROM THIS TOPIC: Doubly reinforced when Mu>Mu,lim; development at cut-off; two-way vs one-way ly/lx.",
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
    "explanation": "CORRECT: Under-reinforced because 225 mm is below 240 mm\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: limiting depth = 0.48×500 = 240 mm; trial is lower. Trap: C imports an unrelated limit.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Limit-state flexure xu,max/d; τv=V/(bd); Ld=φσs/(4τbd); τc from pt table.\n• REMEMBER: Cover ≠ effective depth; min shear steel even if τv<τc; Fe415 xu,max/d≈0.48.\n• ALSO ASKED FROM THIS TOPIC: Doubly reinforced when Mu>Mu,lim; development at cut-off; two-way vs one-way ly/lx.",
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
    "explanation": "CORRECT: Both true; R explains A\n\nWHY CORRECT / CALCULATION:\nWhy: both support condition and aspect ratio establish two-way action. Trap: the ratio alone is insufficient without four-edge support.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Limit-state flexure xu,max/d; τv=V/(bd); Ld=φσs/(4τbd); τc from pt table.\n• REMEMBER: Cover ≠ effective depth; min shear steel even if τv<τc; Fe415 xu,max/d≈0.48.\n• ALSO ASKED FROM THIS TOPIC: Doubly reinforced when Mu>Mu,lim; development at cut-off; two-way vs one-way ly/lx.",
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
    "explanation": "CORRECT: Hold the pour locally, restore chairs/bar level and reverify cover and effective depth\n\nWHY CORRECT / CALCULATION:\nWhy: displaced negative steel reduces support capacity and changes cover. Trap: A ignores hogging demand. **Hard/Practical/App justification:** an irreversible hold point requires structural and constructability judgement.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Limit-state flexure xu,max/d; τv=V/(bd); Ld=φσs/(4τbd); τc from pt table.\n• REMEMBER: Cover ≠ effective depth; min shear steel even if τv<τc; Fe415 xu,max/d≈0.48.\n• ALSO ASKED FROM THIS TOPIC: Doubly reinforced when Mu>Mu,lim; development at cut-off; two-way vs one-way ly/lx.",
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
    "explanation": "CORRECT: Web width, unless another compression flange is specifically present\n\nWHY CORRECT / CALCULATION:\nWhy: the slab flange is not in compression under hogging. Trap: B carries the sagging-region model into the support region.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Limit-state flexure xu,max/d; τv=V/(bd); Ld=φσs/(4τbd); τc from pt table.\n• REMEMBER: Cover ≠ effective depth; min shear steel even if τv<τc; Fe415 xu,max/d≈0.48.\n• ALSO ASKED FROM THIS TOPIC: Doubly reinforced when Mu>Mu,lim; development at cut-off; two-way vs one-way ly/lx.",
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
    "explanation": "CORRECT: Detail S\n\nWHY CORRECT / CALCULATION:\nWhy: Detail S uses a closed perimeter tie plus both crossties so every corner and mid-face bar is restrained. Trap: P is perimeter-only; Q omits a crosstie direction; R’s diamond leaves corners unrestrained.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Limit-state flexure xu,max/d; τv=V/(bd); Ld=φσs/(4τbd); τc from pt table.\n• REMEMBER: Cover ≠ effective depth; min shear steel even if τv<τc; Fe415 xu,max/d≈0.48.\n• ALSO ASKED FROM THIS TOPIC: Doubly reinforced when Mu>Mu,lim; development at cut-off; two-way vs one-way ly/lx.",
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
    "explanation": "CORRECT: Minimum shear reinforcement in X; designed shear reinforcement in Y\n\nWHY CORRECT / CALCULATION:\nWhy: minimum stirrups remain required in X; Y needs the balance carried by shear reinforcement. Trap: C ignores the permitted design range.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Limit-state flexure xu,max/d; τv=V/(bd); Ld=φσs/(4τbd); τc from pt table.\n• REMEMBER: Cover ≠ effective depth; min shear steel even if τv<τc; Fe415 xu,max/d≈0.48.\n• ALSO ASKED FROM THIS TOPIC: Doubly reinforced when Mu>Mu,lim; development at cut-off; two-way vs one-way ly/lx.",
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
    "explanation": "CORRECT: Extend the bar, provide an allowable hook/bend, or revise curtailment so anchorage and the related moment/shear checks are all satisfied\n\nWHY CORRECT / CALCULATION:\nWhy: inadequate development is a structural limit, not a drafting preference. Trap: A confuses location with anchorage. **Hard justification:** competing detailing remedies under code anchorage rules.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Limit-state flexure xu,max/d; τv=V/(bd); Ld=φσs/(4τbd); τc from pt table.\n• REMEMBER: Cover ≠ effective depth; min shear steel even if τv<τc; Fe415 xu,max/d≈0.48.\n• ALSO ASKED FROM THIS TOPIC: Doubly reinforced when Mu>Mu,lim; development at cut-off; two-way vs one-way ly/lx.",
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
    "explanation": "CORRECT: Design the excess moment with compression and additional tension steel\n\nWHY CORRECT / CALCULATION:\nWhy: demand exceeds singly reinforced limit; a steel couple must resist the excess. Trap: D mixes design stages.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Limit-state flexure xu,max/d; τv=V/(bd); Ld=φσs/(4τbd); τc from pt table.\n• REMEMBER: Cover ≠ effective depth; min shear steel even if τv<τc; Fe415 xu,max/d≈0.48.\n• ALSO ASKED FROM THIS TOPIC: Doubly reinforced when Mu>Mu,lim; development at cut-off; two-way vs one-way ly/lx.",
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
    "explanation": "CORRECT: Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials\n\nWHY CORRECT / CALCULATION:\nWhy: Mu > Mu,lim requires a steel couple or a larger section. Trap: B misreads limit-state capacity as a service check. **Hard justification:** recognising when doubly reinforced design is mandatory.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Limit-state flexure xu,max/d; τv=V/(bd); Ld=φσs/(4τbd); τc from pt table.\n• REMEMBER: Cover ≠ effective depth; min shear steel even if τv<τc; Fe415 xu,max/d≈0.48.\n• ALSO ASKED FROM THIS TOPIC: Doubly reinforced when Mu>Mu,lim; development at cut-off; two-way vs one-way ly/lx.",
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
    "explanation": "CORRECT: 0.52 MPa; stirrups carry the balance, subject to the maximum limit\n\nWHY CORRECT / CALCULATION:\nCALC: midpoint interpolation gives 0.52 MPa; demand exceeds it. Trap: B takes the upper row without interpolation.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Limit-state flexure xu,max/d; τv=V/(bd); Ld=φσs/(4τbd); τc from pt table.\n• REMEMBER: Cover ≠ effective depth; min shear steel even if τv<τc; Fe415 xu,max/d≈0.48.\n• ALSO ASKED FROM THIS TOPIC: Doubly reinforced when Mu>Mu,lim; development at cut-off; two-way vs one-way ly/lx.",
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
    "explanation": "CORRECT: 260 mm\n\nWHY CORRECT / CALCULATION:\nCALC: ceiling = 262.5 mm; adopt 260 mm. Trap: B accepts analysis spacing without the code ceiling.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Limit-state flexure xu,max/d; τv=V/(bd); Ld=φσs/(4τbd); τc from pt table.\n• REMEMBER: Cover ≠ effective depth; min shear steel even if τv<τc; Fe415 xu,max/d≈0.48.\n• ALSO ASKED FROM THIS TOPIC: Doubly reinforced when Mu>Mu,lim; development at cut-off; two-way vs one-way ly/lx.",
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
    "explanation": "CORRECT: Barricade and map the defect, assess section/bond, then execute an engineer-approved repair or strengthening method\n\nWHY CORRECT / CALCULATION:\nWhy: cubes do not prove in-situ continuity or anchorage. Trap: B conceals rather than characterises the defect. **Practical/App justification:** evidence, structural consequence and repair governance are integrated.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Limit-state flexure xu,max/d; τv=V/(bd); Ld=φσs/(4τbd); τc from pt table.\n• REMEMBER: Cover ≠ effective depth; min shear steel even if τv<τc; Fe415 xu,max/d≈0.48.\n• ALSO ASKED FROM THIS TOPIC: Doubly reinforced when Mu>Mu,lim; development at cut-off; two-way vs one-way ly/lx.",
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
    "explanation": "CORRECT: 18.9 kPa\n\nWHY CORRECT / CALCULATION:\nCALC: h=150 mm, x=y=200 mm, S_Hg=13.6, g=10. With equal limbs, p_A−p_B = h(ρ_Hg−ρ_w)g = 0.15×(13600−1000)×10 = 18900 Pa = 18.9 kPa. Trap: B = 12.6 kPa uses wrong h; D doubles mercury head.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Continuity; Bernoulli; ΔP=ρgh; Re=VD/ν; pump/turbine power as applicable.\n• REMEMBER: Mercury S≈13.6; laminar Re≲2000; velocity parabolic & τ∝r in pipe laminar flow.\n• ALSO ASKED FROM THIS TOPIC: Manometer traverse; orifice Cd=CcCv; turbine selection by head; NPSH/cavitation.",
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
    "explanation": "CORRECT: 0.97\n\nWHY CORRECT / CALCULATION:\nCALC: velocity coefficient = 0.62/0.64 ≈0.97. Trap: B multiplies the two coefficients.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Continuity; Bernoulli; ΔP=ρgh; Re=VD/ν; pump/turbine power as applicable.\n• REMEMBER: Mercury S≈13.6; laminar Re≲2000; velocity parabolic & τ∝r in pipe laminar flow.\n• ALSO ASKED FROM THIS TOPIC: Manometer traverse; orifice Cd=CcCv; turbine selection by head; NPSH/cavitation.",
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
    "explanation": "CORRECT: Both true; R explains A\n\nWHY CORRECT / CALCULATION:\nWhy: the momentum relation permits conjugate-depth analysis, while turbulence explains dissipation. Trap: energy is not conserved across the jump.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Continuity; Bernoulli; ΔP=ρgh; Re=VD/ν; pump/turbine power as applicable.\n• REMEMBER: Mercury S≈13.6; laminar Re≲2000; velocity parabolic & τ∝r in pipe laminar flow.\n• ALSO ASKED FROM THIS TOPIC: Manometer traverse; orifice Cd=CcCv; turbine selection by head; NPSH/cavitation.",
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
    "explanation": "CORRECT: Laminar\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: Re = VD/ν = 0.02×0.05/1e-6 = 1000 < 2300. Trap: A misreads the threshold. **Hard justification:** regime selection before chart use.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Continuity; Bernoulli; ΔP=ρgh; Re=VD/ν; pump/turbine power as applicable.\n• REMEMBER: Mercury S≈13.6; laminar Re≲2000; velocity parabolic & τ∝r in pipe laminar flow.\n• ALSO ASKED FROM THIS TOPIC: Manometer traverse; orifice Cd=CcCv; turbine selection by head; NPSH/cavitation.",
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
    "explanation": "CORRECT: The rising system head shifts each pump to a lower individual discharge\n\nWHY CORRECT / CALCULATION:\nWhy: actual duty is the new pump-system intersection, not arithmetic addition at fixed head. Trap: B treats static head as pump-dependent. **Hard/App justification:** curve interaction governs operating output.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Continuity; Bernoulli; ΔP=ρgh; Re=VD/ν; pump/turbine power as applicable.\n• REMEMBER: Mercury S≈13.6; laminar Re≲2000; velocity parabolic & τ∝r in pipe laminar flow.\n• ALSO ASKED FROM THIS TOPIC: Manometer traverse; orifice Cd=CcCv; turbine selection by head; NPSH/cavitation.",
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
    "explanation": "CORRECT: Pelton\n\nWHY CORRECT / CALCULATION:\nWhy: an impulse Pelton unit suits high head and low flow. Trap: Francis is the plausible medium-head alternative.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Continuity; Bernoulli; ΔP=ρgh; Re=VD/ν; pump/turbine power as applicable.\n• REMEMBER: Mercury S≈13.6; laminar Re≲2000; velocity parabolic & τ∝r in pipe laminar flow.\n• ALSO ASKED FROM THIS TOPIC: Manometer traverse; orifice Cd=CcCv; turbine selection by head; NPSH/cavitation.",
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
    "explanation": "CORRECT: Parabolic velocity; shear rising linearly to a wall maximum\n\nWHY CORRECT / CALCULATION:\nWhy: figure curves 2+C — no-slip Hagen–Poiseuille velocity is parabolic; Newtonian laminar pipe shear is zero on the centreline and rises linearly to a wall maximum. Trap: 1+A is not laminar pipe; 2+B wrongly zeros wall shear; linear/uniform is Couette-type, not pressure-driven pipe flow.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Continuity; Bernoulli; ΔP=ρgh; Re=VD/ν; pump/turbine power as applicable.\n• REMEMBER: Mercury S≈13.6; laminar Re≲2000; velocity parabolic & τ∝r in pipe laminar flow.\n• ALSO ASKED FROM THIS TOPIC: Manometer traverse; orifice Cd=CcCv; turbine selection by head; NPSH/cavitation.",
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
    "explanation": "CORRECT: 1-q,2-r,3-p,4-s\n\nWHY CORRECT / CALCULATION:\nWhy: Pelton-q, Francis-r, Kaplan-p and pump-s. Trap: C interchanges Francis and Kaplan. **Hard justification:** competing machine regimes are distinguished together.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Continuity; Bernoulli; ΔP=ρgh; Re=VD/ν; pump/turbine power as applicable.\n• REMEMBER: Mercury S≈13.6; laminar Re≲2000; velocity parabolic & τ∝r in pipe laminar flow.\n• ALSO ASKED FROM THIS TOPIC: Manometer traverse; orifice Cd=CcCv; turbine selection by head; NPSH/cavitation.",
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
    "explanation": "CORRECT: 785 N, 7.85 kW\n\nWHY CORRECT / CALCULATION:\nCALC: relative speed 20 m/s → ṁ≈39.3 kg/s; F≈785 N; power=Fu≈7.85 kW. Trap: C uses absolute jet speed for ṁ; B halves relative speed inconsistently; A underestimates ṁ on the relative-speed path.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Continuity; Bernoulli; ΔP=ρgh; Re=VD/ν; pump/turbine power as applicable.\n• REMEMBER: Mercury S≈13.6; laminar Re≲2000; velocity parabolic & τ∝r in pipe laminar flow.\n• ALSO ASKED FROM THIS TOPIC: Manometer traverse; orifice Cd=CcCv; turbine selection by head; NPSH/cavitation.",
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
    "explanation": "CORRECT: Cavitation\n\nWHY CORRECT / CALCULATION:\nWhy: vapour formation and collapse at the eye produce the observed signature. Trap: bearing faults do not explain pitting at the hydraulic low-pressure zone. **Practical justification:** multiple observations support the diagnosis.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Continuity; Bernoulli; ΔP=ρgh; Re=VD/ν; pump/turbine power as applicable.\n• REMEMBER: Mercury S≈13.6; laminar Re≲2000; velocity parabolic & τ∝r in pipe laminar flow.\n• ALSO ASKED FROM THIS TOPIC: Manometer traverse; orifice Cd=CcCv; turbine selection by head; NPSH/cavitation.",
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
    "explanation": "CORRECT: 2.4 kJ/kg\n\nWHY CORRECT / CALCULATION:\nCALC: W = u(Vw1 − Vw2)/1000 = 40×(80 − 20)/1000 = 2.4 kJ/kg. Trap: C = 3.2 omits outlet whirl; D = 4.0 adds Vw2; A = 1.2 halves the whirl change.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Continuity; Bernoulli; ΔP=ρgh; Re=VD/ν; pump/turbine power as applicable.\n• REMEMBER: Mercury S≈13.6; laminar Re≲2000; velocity parabolic & τ∝r in pipe laminar flow.\n• ALSO ASKED FROM THIS TOPIC: Manometer traverse; orifice Cd=CcCv; turbine selection by head; NPSH/cavitation.",
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
    "explanation": "CORRECT: Bolt 3\n\nWHY CORRECT / CALCULATION:\nWhy: Bolt 3 (lower-right) has the largest adverse vector sum of direct shear P/4 and torsional shear from M = P e. Trap: farthest bolt is not automatic without vector direction.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Tdg/Tdn; block shear; bolt Vsb/Vdb; eccentric √((H/n)²+(Ted/Σr²)²).\n• REMEMBER: Net section with stagger credit s²/4g; critical bolt ≠ always farthest.\n• ALSO ASKED FROM THIS TOPIC: Lug angle; welding strength; column buckling curves χ.",
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
    "explanation": "CORRECT: 409 kN yielding\n\nWHY CORRECT / CALCULATION:\nCALC: yielding ≈409 kN; rupture ≈428 kN; lesser governs. Trap: A is a valid non-governing value; C ignores γm0; D understates rupture.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Tdg/Tdn; block shear; bolt Vsb/Vdb; eccentric √((H/n)²+(Ted/Σr²)²).\n• REMEMBER: Net section with stagger credit s²/4g; critical bolt ≠ always farthest.\n• ALSO ASKED FROM THIS TOPIC: Lug angle; welding strength; column buckling curves χ.",
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
    "explanation": "CORRECT: A true, R false\n\nWHY CORRECT / CALCULATION:\nWhy: A is true; lacing is designed for transverse shear and may experience compression. Trap: “tension-only” confuses ideal truss action with design forces.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Tdg/Tdn; block shear; bolt Vsb/Vdb; eccentric √((H/n)²+(Ted/Σr²)²).\n• REMEMBER: Net section with stagger credit s²/4g; critical bolt ≠ always farthest.\n• ALSO ASKED FROM THIS TOPIC: Lug angle; welding strength; column buckling curves χ.",
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
    "explanation": "CORRECT: The axis that produces the larger slenderness ratio Le/r governs the flexural-buckling strength\n\nWHY CORRECT / CALCULATION:\nWhy: buckling strength follows the larger slenderness demand. Trap: A ignores radius; B ignores restraint length. **Hard justification:** competing geometric parameters without a pure numerical plug-in.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Tdg/Tdn; block shear; bolt Vsb/Vdb; eccentric √((H/n)²+(Ted/Σr²)²).\n• REMEMBER: Net section with stagger credit s²/4g; critical bolt ≠ always farthest.\n• ALSO ASKED FROM THIS TOPIC: Lug angle; welding strength; column buckling curves χ.",
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
    "explanation": "CORRECT: Throat\n\nWHY CORRECT / CALCULATION:\nWhy: this is effective throat geometry. Trap: leg is measured along the connected plate surface.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Tdg/Tdn; block shear; bolt Vsb/Vdb; eccentric √((H/n)²+(Ted/Σr²)²).\n• REMEMBER: Net section with stagger credit s²/4g; critical bolt ≠ always farthest.\n• ALSO ASKED FROM THIS TOPIC: Lug angle; welding strength; column buckling curves χ.",
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
    "explanation": "CORRECT: Section type, axis of buckling and fabrication class together select the buckling curve\n\nWHY CORRECT / CALCULATION:\nWhy: IS curve selection depends on section/axis/imperfection class. Trap: B oversimplifies to fy only.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Tdg/Tdn; block shear; bolt Vsb/Vdb; eccentric √((H/n)²+(Ted/Σr²)²).\n• REMEMBER: Net section with stagger credit s²/4g; critical bolt ≠ always farthest.\n• ALSO ASKED FROM THIS TOPIC: Lug angle; welding strength; column buckling curves χ.",
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
    "explanation": "CORRECT: About 1.12 My\n\nWHY CORRECT / CALCULATION:\nWhy: Mp = Zp fy ≈ (shape factor)×My for the same fy. Trap: D invents a universal factor of 2.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Tdg/Tdn; block shear; bolt Vsb/Vdb; eccentric √((H/n)²+(Ted/Σr²)²).\n• REMEMBER: Net section with stagger credit s²/4g; critical bolt ≠ always farthest.\n• ALSO ASKED FROM THIS TOPIC: Lug angle; welding strength; column buckling curves χ.",
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
    "explanation": "CORRECT: Q, 1810 mm²\n\nWHY CORRECT / CALCULATION:\nCALC: Path P: An=(240−2×22)×10=1960 mm². Path Q: credits 2×(30²)/(4×60)=7.5 mm → An=(240−66+7.5)×10≈1815 mm² ≈1810. Adopt smaller An → Q. Trap: A checks only the straight path.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Tdg/Tdn; block shear; bolt Vsb/Vdb; eccentric √((H/n)²+(Ted/Σr²)²).\n• REMEMBER: Net section with stagger credit s²/4g; critical bolt ≠ always farthest.\n• ALSO ASKED FROM THIS TOPIC: Lug angle; welding strength; column buckling curves χ.",
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
    "explanation": "CORRECT: Revise pitch to at least 50 mm\n\nWHY CORRECT / CALCULATION:\nCALC: minimum = 50 mm. Trap: A uses the wrong detailing multiple.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Tdg/Tdn; block shear; bolt Vsb/Vdb; eccentric √((H/n)²+(Ted/Σr²)²).\n• REMEMBER: Net section with stagger credit s²/4g; critical bolt ≠ always farthest.\n• ALSO ASKED FROM THIS TOPIC: Lug angle; welding strength; column buckling curves χ.",
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
    "explanation": "CORRECT: Grind/repair to approved procedure, re-inspect, then accept only if limits are met\n\nWHY CORRECT / CALCULATION:\nWhy: undercut is a rejectable discontinuity on a primary path until repaired to procedure. Trap: B confuses appearance with acceptance criteria. **Hard/Practical justification:** quality limit vs load path.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Tdg/Tdn; block shear; bolt Vsb/Vdb; eccentric √((H/n)²+(Ted/Σr²)²).\n• REMEMBER: Net section with stagger credit s²/4g; critical bolt ≠ always farthest.\n• ALSO ASKED FROM THIS TOPIC: Lug angle; welding strength; column buckling curves χ.",
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
    "explanation": "CORRECT: Weak-axis (larger λ) flexural buckling\n\nWHY CORRECT / CALCULATION:\nWhy: the larger Le/r governs flexural-buckling strength. Trap: A ignores the weak axis.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Tdg/Tdn; block shear; bolt Vsb/Vdb; eccentric √((H/n)²+(Ted/Σr²)²).\n• REMEMBER: Net section with stagger credit s²/4g; critical bolt ≠ always farthest.\n• ALSO ASKED FROM THIS TOPIC: Lug angle; welding strength; column buckling curves χ.",
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
    "explanation": "CORRECT: Biaxial bending interaction with stability and serviceability checks\n\nWHY CORRECT / CALCULATION:\nWhy: oblique loading resolves about both axes, and restraint affects stability. Trap: A ignores the weak-axis component.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: Tdg/Tdn; block shear; bolt Vsb/Vdb; eccentric √((H/n)²+(Ted/Σr²)²).\n• REMEMBER: Net section with stagger credit s²/4g; critical bolt ≠ always farthest.\n• ALSO ASKED FROM THIS TOPIC: Lug angle; welding strength; column buckling curves χ.",
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
    "explanation": "CORRECT: Reduced net stress increase and settlement demand\n\nWHY CORRECT / CALCULATION:\nWhy: excavated soil weight offsets part of structural pressure; it does not cancel gross pressure or eliminate geotechnical checks. Trap: B confuses reduced net pressure with zero gross pressure.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: 95 mm\n\nWHY CORRECT / CALCULATION:\nCALC: Sc1=0.20×2.0/(1+1.00)×log10(2)=0.0602 m≈60 mm; Sc2=0.20×2.0/(1+0.90)×log10(300/200)≈0.0371 m≈37 mm; total ≈97 mm → closest 95 mm. Trap: C applies the larger stress increment to both layers.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: Combined or strap footing designed about the load resultant\n\nWHY CORRECT / CALCULATION:\nWhy: coupling controls eccentricity and soil-pressure distribution without trespass. Trap: A worsens eccentric pressure.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: Bearing may pass while settlement still governs; enlarge/deepen the footing, improve the ground, or revise until both criteria are satisfied\n\nWHY CORRECT / CALCULATION:\nWhy: bearing capacity and settlement are independent acceptance criteria. Trap: B collapses both into one check. **Hard/Practical/App justification:** identifying the governing serviceability limit.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: 200 kPa\n\nWHY CORRECT / CALCULATION:\nCALC: 600/3 = 200 kPa. Trap: B multiplies by the safety factor.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: Compare individual sum with block capacity, adopt the lower, then check settlement\n\nWHY CORRECT / CALCULATION:\nWhy: close spacing permits block action; settlement remains separate. Trap: A ignores the figure’s plausible block mechanism. **Hard/App justification:** two failure models and serviceability compete.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: 307 kPa\n\nWHY CORRECT / CALCULATION:\nCALC: from 11 to 25 mm over 100 kPa, one additional millimetre gives about 7.1 kPa; ≈307 kPa. Trap: A is conservative but not the requested interpolation. **Table item:** values are embedded in the stem.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: 450 kN\n\nWHY CORRECT / CALCULATION:\nCALC: net =12 mm; settlement criterion ≈750 kN, but separate cap =450 kN. Trap: B ignores the second restriction.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: Pause and secure the work, monitor movement, assess undermining, and design support/underpinning before resuming\n\nWHY CORRECT / CALCULATION:\nWhy: temporary stability and the existing footing’s support must be secured before work resumes. Trap: C treats the symptom, not ground loss. **Practical/App justification:** the evidence requires a construction hold point.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: Transfer moment so footing reactions are better centred\n\nWHY CORRECT / CALCULATION:\nWhy: the strap couples footing moments/reactions. Trap: B contradicts the stated isolation from soil.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: \\(8×10^{-5}\\) m³/s\n\nWHY CORRECT / CALCULATION:\nCALC: \\(kH(N_f/N_d)=4×10^{-5}×6×4/12=8×10^{-5}\\). Trap: B omits division by drops.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: 16.0 kN/m³, 82%\n\nWHY CORRECT / CALCULATION:\nCALC: dry =16.0; e≈0.655; S≈82.4%. Trap: B understates γd; D fails to remove water mass.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: 27%\n\nWHY CORRECT / CALCULATION:\nCALC: 48−21 =27%. Trap: A adds the limits.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly\n\nWHY CORRECT / CALCULATION:\nWhy: water pressure is superposed on effective soil pressure. Trap: B notices buoyancy but omits hydrostatic loading. **Hard/App justification:** total and effective stresses must be separated and recombined.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: 16 years\n\nWHY CORRECT / CALCULATION:\nWhy/CALC: drainage path doubles, so time becomes fourfold =16 years. Trap: B assumes a linear path-time relation.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: 1.00\n\nWHY CORRECT / CALCULATION:\nCALC: \\((2.65−1)/(1+0.65)=1.0\\). Trap: C uses only the numerator.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: Higher effort gives higher maximum dry density/lower OMC, but F fails the shown relative-compaction criterion\n\nWHY CORRECT / CALCULATION:\nWhy: higher effort raises MDD and lowers OMC; F is below the 95% MDD acceptance line of the higher-effort curve. Trap: B treats an impossible region above ZAV as valid.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: Both true; R explains A\n\nWHY CORRECT / CALCULATION:\nWhy: disturbance directly undermines representative mechanical parameters. Trap: index description may remain usable, but structure-sensitive testing is affected. **Practical/App justification:** evidence controls test suitability.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
    "explanation": "CORRECT: 48 kN/m\n\nWHY CORRECT / CALCULATION:\nCALC: Ka=1/3; thrust = 0.5×(1/3)×18×16 = 48 kN/m. Trap: C omits Ka; A uses Ka≈0.375; D uses half wrongly.\n\nTOPIC REVISION NOTES (learn / quick revise this micro-topic):\n• FORMULAS / KEY RELATIONS: τ=c+σtanφ; qnet; consolidation Sc=CcH/(1+e0)log((σ0'+Δσ)/σ0'); seepage q=kH Nf/Nd.\n• REMEMBER: Compaction MDD/OMC; flow-net exit gradient; pile group vs block failure.\n• ALSO ASKED FROM THIS TOPIC: Plate load; Rankine Ka/Kp; Proctor effort effect; liquefaction screening slogans.",
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
