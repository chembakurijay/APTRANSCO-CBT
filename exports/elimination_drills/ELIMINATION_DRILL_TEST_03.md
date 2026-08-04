# Elimination Drill Test 03

**Rules covered:** R11 (Figure-dependency: cover the figure test), R12 (Rankine / Terzaghi / earth-pressure term drop), R13 (Mohr / principal-stress pair consistency), R14 (SFD↔BMD jump / couple vs point-load confusion), R15 (SCR / PE latching vs holding vs firing)
**Questions:** 50 (jumbled across rules; options also reshuffled)
**Streams in this paper:** Civil, Electrical

Instructions: Attempt without the answer key. Use elimination rules as last resort. Each item lists **Source exam** and **Source reference**.

---

## Questions

### Q1

An scr is forward biased and receives a gate pulse. Which statement is correct?

- **A)** It remains latched until current falls below holding current.
- **B)** Holding current exceeds latching current.
- **C)** The gate can turn it off at any anode current.
- **D)** Forward bias alone always turns it on.

- **Source exam:** APTRANSCO CBT · Electrical Subject Test · Power Electronics & Drives
- **Source reference:** `data/electrical/st/ee-st-pe-01.js#Q21`

### Q2

A 6 m high vertical retaining wall retains dry sand with γ = 18 kN/m³ and φ = 30°. Using Rankine Ka = 1/3, total active thrust per metre length is closest to:

- **A)** 162 kN/m
- **B)** 108 kN/m
- **C)** 86.4 kN/m
- **D)** 129.6 kN/m

- **Source exam:** APTRANSCO CBT · Civil Subject Test · Foundation Engineering
- **Source reference:** `data/civil/st/ce-st-fe-01.js#Q5`

### Q3

Referring to the single-line diagram (breakers B1–B8, buses 1–3, directional relays R2–R7), minimum directional units to isolate a fault on the parallel tie between bus 1 and bus 2 while keeping maximum in-service load are:

- **A)** All relays directional
- **B)** No directional relays needed
- **C)** Only R7 on outgoing feeder
- **D)** R3 and R4 looking toward the tie from each bus

- **Source exam:** APTRANSCO CBT · Electrical Full-Length Test 02
- **Source reference:** `data/electrical/ee-flt02.js#Q4`
- **Figure (if used in source bank):** `images/diagrams/electrical-flt02/q04-bus-protection.jpg`

### Q4

At a point in a plate, σx = 102 MPa, σy = 22 MPa and τxy = 34 MPa. The major principal stress is closest to:

- **A)** 114.5 MPa
- **B)** 171.75 MPa
- **C)** 91.6 MPa
- **D)** 137.4 MPa

- **Source exam:** APTRANSCO CBT · Civil Subject Test · Strength of Materials
- **Source reference:** `data/civil/st/ce-st-som-01.js#Q23`

### Q5

In the system shown (breakers B1–B9 with relays R1–R9), some relays are directional. For short-circuit protection between bus 1 and the R–L loads with isolation of the minimum network using the minimum number of directional relays, the necessary condition is:

- **A)** R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2
- **B)** R3 and R4 directional blocking toward bus 2 only
- **C)** R3,R4 directional toward bus 2 and R7 directional toward bus 3
- **D)** R3 and R4 directional toward Line1 and Line2 respectively only

- **Source exam:** APTRANSCO CBT · Electrical Full-Length Test 01
- **Source reference:** `data/electrical/ee-flt01.js#Q4`
- **Figure (if used in source bank):** `images/diagrams/electrical-flt01/q04-directional-relays.jpg`

### Q6

Primary consolidation under a shallow footing uses two clay layers (also tabulated on the figure): Layer 1 — H1 = 2.0 m, e01 = 1.00, Cc1 = 0.20, σ′01 = 100 kPa, Δσ1 = 100 kPa; Layer 2 — H2 = 2.0 m, e02 = 0.90, Cc2 = 0.20, σ′02 = 200 kPa, Δσ2 = 100 kPa. Which total primary consolidation settlement is closest?

- **A)** 95 mm
- **B)** 42 mm
- **C)** 126 mm
- **D)** 68 mm

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 01
- **Source reference:** `data/civil/ce-flt01.js#Q53`
- **Figure (if used in source bank):** `images/diagrams/civil-flt01/q53-layered-footing.jpg`

### Q7

Match limit state with the most relevant evidence: (1) block shear, (2) web crippling, (3) lateral-torsional buckling, (4) weld throat failure; (p) combined shear+tension path near bolts, (q) local bearing fold near reaction, (r) flange lateral displacement with twist, (s) fracture through effective throat.

- **A)** 1-s,2-r,3-q,4-p
- **B)** 1-p,2-q,3-r,4-s
- **C)** 1-r,2-p,3-s,4-q
- **D)** 1-q,2-s,3-p,4-r

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 02
- **Source reference:** `data/civil/ce-flt02.js#Q46`

### Q8

A simply supported beam of span 5 m carries a uniform load of 13 kN/m over the full span. The maximum bending moment is closest to:

- **A)** 32.5 kN m
- **B)** 40.62 kN m
- **C)** 48.75 kN m
- **D)** 60.94 kN m

- **Source exam:** APTRANSCO CBT · Civil Subject Test · Strength of Materials
- **Source reference:** `data/civil/st/ce-st-som-01.js#Q2`

### Q9

After latch, SCR stays on until anode current falls below:

- **A)** Holding current IH
- **B)** Latching current IL always higher only
- **C)** Gate current Ig
- **D)** Surge rating

- **Source exam:** APTRANSCO CBT · Electrical Full-Length Test 02
- **Source reference:** `data/electrical/ee-flt02.js#Q47`

### Q10

A column base plate is 300 mm × 300 mm and transmits 650 kN concentric compression to concrete. Average bearing pressure is closest to:

- **A)** 8.67 N/mm²
- **B)** 5.78 N/mm²
- **C)** 7.22 N/mm²
- **D)** 10.83 N/mm²

- **Source exam:** APTRANSCO CBT · Civil Subject Test · Steel Structures
- **Source reference:** `data/civil/st/ce-st-steel-01.js#Q5`

### Q11

The shown bolted lap joint transfers the load through 4 identical bolts. If each bolt has governing design capacity 45 kN, the concentric joint capacity is closest to:

- **A)** 270 kN
- **B)** 216 kN
- **C)** 144 kN
- **D)** 180 kN

- **Source exam:** APTRANSCO CBT · Civil Subject Test · Steel Structures
- **Source reference:** `data/civil/st/ce-st-steel-01.js#Q3`
- **Figure (if used in source bank):** `images/diagrams/civil-st-steel/steel-bolted-lap.svg`

### Q12

A circular shaft \(d=60\) mm transmits 12 kN·m torque while carrying 80 kN tensile force. Under maximum principal-stress theory, what is the maximum principal stress at the surface?

- **A)** 256 MPa
- **B)** 283 MPa
- **C)** 322 MPa
- **D)** 297 MPa

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 02
- **Source reference:** `data/civil/ce-flt02.js#Q13`

### Q13

An SCR turns off when which condition is met for sufficient time?

- **A)** Voltage zero is never needed in any circuit
- **B)** Anode current falls below holding current
- **C)** Only raising gate current
- **D)** Gate pulse remains forever

- **Source exam:** APTRANSCO CBT · Electrical Full-Length Test 01
- **Source reference:** `data/electrical/ee-flt01.js#Q47`

### Q14

For a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2 m and Nγ = 8. Terzaghi gross ultimate bearing capacity is closest to:

- **A)** 1004 kPa
- **B)** 1204.8 kPa
- **C)** 1506 kPa
- **D)** 803.2 kPa

- **Source exam:** APTRANSCO CBT · Civil Subject Test · Foundation Engineering
- **Source reference:** `data/civil/st/ce-st-fe-01.js#Q1`

### Q15

SCR latching current is:

- **A)** gate peak
- **B)** holding only identical always
- **C)** Ig=0
- **D)** min on-current to keep latch after gate removed

- **Source exam:** APTRANSCO CBT · Electrical Subject Test · Power Electronics & Drives
- **Source reference:** `data/electrical/st/ee-st-pe-01.js#Q1`
- **Figure (if used in source bank):** `images/diagrams/electrical-st-pe/pe3.svg`

### Q16

The mild-steel stress–strain figure identifies point C as the ultimate point. If a specimen area is 360 mm² and the plotted ultimate stress is 265 MPa, the load at C is closest to:

- **A)** 95.4 kN
- **B)** 114.48 kN
- **C)** 143.1 kN
- **D)** 76.32 kN

- **Source exam:** APTRANSCO CBT · Civil Subject Test · Strength of Materials
- **Source reference:** `data/civil/st/ce-st-som-01.js#Q3`
- **Figure (if used in source bank):** `images/diagrams/civil-st-som/som-stress-strain.svg`

### Q17

A beam has \(M_{u,\lim}=180\) kN·m and must resist 240 kN·m. The compression-steel couple may be idealized with \(f_{sc}=350\) MPa and lever arm \(d-d'=430\) mm. Ignoring secondary strain refinement, estimate required compression steel for the excess moment.

- **A)** 900 mm²
- **B)** 250 mm²
- **C)** 400 mm²
- **D)** 650 mm²

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 02
- **Source reference:** `data/civil/ce-flt02.js#Q25`

### Q18

Commutation in class B (self) SCR circuit uses:

- **A)** LC resonating current reverse
- **B)** only fuse
- **C)** only relay
- **D)** only line AC

- **Source exam:** APTRANSCO CBT · Electrical Subject Test · Power Electronics & Drives
- **Source reference:** `data/electrical/st/ee-st-pe-01.js#Q8`
- **Figure (if used in source bank):** `images/diagrams/electrical-st-pe/q07-single-phase-semi.svg`

### Q19

In design review, factored moment is 160 kN·m while the limiting singly reinforced capacity of the fixed beam section is 138 kN·m. Section depth cannot increase. Which design route is most appropriate?

- **A)** Use only minimum tension steel
- **B)** Reduce effective depth
- **C)** Treat 138 kN·m as service moment
- **D)** Design the excess moment with compression and additional tension steel

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 01
- **Source reference:** `data/civil/ce-flt01.js#Q24`

### Q20

At a point in a plate, σx = 92 MPa, σy = 22 MPa and τxy = 30 MPa. The major principal stress is closest to:

- **A)** 123.72 MPa
- **B)** 154.65 MPa
- **C)** 82.48 MPa
- **D)** 103.1 MPa

- **Source exam:** APTRANSCO CBT · Civil Subject Test · Strength of Materials
- **Source reference:** `data/civil/st/ce-st-som-01.js#Q13`

### Q21

The shown compaction curve has a distinct peak. A 230 m³ embankment lot is compacted at the moisture content corresponding to that peak. Which field target is indicated by the figure?

- **A)** 0.8 — maximum dry density at OMC
- **B)** 1.5 — maximum dry density at OMC
- **C)** 1.2 — maximum dry density at OMC
- **D)** 1 — maximum dry density at OMC

- **Source exam:** APTRANSCO CBT · Civil Subject Test · Soil Mechanics
- **Source reference:** `data/civil/st/ce-st-soil-01.js#Q3`
- **Figure (if used in source bank):** `images/diagrams/civil-st-soil/soil-compaction-curve.svg`

### Q22

At a point in a plate, σx = 97 MPa, σy = 22 MPa and τxy = 35 MPa. The major principal stress is closest to:

- **A)** 88.64 MPa
- **B)** 166.19 MPa
- **C)** 110.8 MPa
- **D)** 132.95 MPa

- **Source exam:** APTRANSCO CBT · Civil Subject Test · Strength of Materials
- **Source reference:** `data/civil/st/ce-st-som-01.js#Q18`

### Q23

Match loading change with the qualitative SFD/BMD consequence: (1) point load, (2) applied couple, (3) UDL, (4) no distributed load; (p) jump in SFD, (q) jump in BMD, (r) linear SFD, (s) constant SFD.

- **A)** 1-r,2-s,3-p,4-q
- **B)** 1-s,2-r,3-q,4-p
- **C)** 1-p,2-q,3-r,4-s
- **D)** 1-q,2-p,3-s,4-r

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 02
- **Source reference:** `data/civil/ce-flt02.js#Q14`

### Q24

An RCC beam of M25 and Fe500 has factored Mu = 180 kN m, b = 230 mm and d = 450 mm. Using z = 0.9d, the required Ast is closest to:

- **A)** 1021.71 mm²
- **B)** 1226.05 mm²
- **C)** 817.37 mm²
- **D)** 1532.57 mm²

- **Source exam:** APTRANSCO CBT · Civil Subject Test · RCC
- **Source reference:** `data/civil/st/ce-st-rcc-01.js#Q1`

### Q25

At pump inspection during a commissioning hold, crackling noise, fluctuating delivery head and pitting marks are concentrated near the impeller eye, while suction-gauge readings approach the liquid vapour pressure for the operating temperature and suction lift is already high. Which diagnosis is most appropriate before changing impeller clearances or bearings?

- **A)** Water hammer at delivery valve
- **B)** Bearing misalignment only
- **C)** Cavitation
- **D)** Laminar-flow transition

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 01
- **Source reference:** `data/civil/ce-flt01.js#Q38`

### Q26

On the plotted bending-moment diagram, a marked vertical jump occurs at section C while shear remains finite on both sides of C and no local section change is recorded (jump labelled at C on the figure). Which loading interpretation is most defensible?

- **A)** A UDL starts at C
- **B)** A point load acts at C
- **C)** A concentrated couple acts at C
- **D)** The flexural rigidity changes at C

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 01
- **Source reference:** `data/civil/ce-flt01.js#Q9`
- **Figure (if used in source bank):** `images/diagrams/civil-flt01/q09-bmd-jump.jpg`

### Q27

Proof-load planning uses an overhanging beam A–B–C with supports at A and B: AB = 4 m, overhang BC = 2 m, UDL w = 10 kN/m over AB, and a tip load P = 20 kN at C (also shown on the figure). Which support-reaction pair (RA, RB) is closest?

- **A)** 10 kN, 50 kN
- **B)** 20 kN, 40 kN
- **C)** 15 kN, 45 kN
- **D)** 25 kN, 35 kN

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 01
- **Source reference:** `data/civil/ce-flt01.js#Q3`
- **Figure (if used in source bank):** `images/diagrams/civil-flt01/q03-overhang-reactions.jpg`

### Q28

A simply supported beam of span 4 m carries a uniform load of 14 kN/m over the full span. The maximum bending moment is closest to:

- **A)** 42 kN m
- **B)** 28 kN m
- **C)** 22.4 kN m
- **D)** 33.6 kN m

- **Source exam:** APTRANSCO CBT · Civil Subject Test · Strength of Materials
- **Source reference:** `data/civil/st/ce-st-som-01.js#Q7`

### Q29

The shown square footing distributes a concentric service load of 260 kN over a 2.3 m × 2.3 m base. The average contact pressure is closest to:

- **A)** 39.32 kPa
- **B)** 73.72 kPa
- **C)** 58.98 kPa
- **D)** 49.15 kPa

- **Source exam:** APTRANSCO CBT · Civil Subject Test · Foundation Engineering
- **Source reference:** `data/civil/st/ce-st-fe-01.js#Q3`
- **Figure (if used in source bank):** `images/diagrams/civil-st-fe/foundation-square-footing.svg`

### Q30

A square footing sized for allowable net bearing pressure under the service column load still shows a predicted consolidation settlement larger than the project serviceability limit in the geotechnical report, even though bearing-capacity factors of safety remain acceptable on paper for the same footing size. Which conclusion should the approving engineer record?

- **A)** Reduce only the concrete grade of the footing
- **B)** Bearing may pass while settlement still governs; enlarge/deepen the footing, improve the ground, or revise until both criteria are satisfied
- **C)** Accept because bearing pressure governs all foundation checks
- **D)** Ignore settlement for footings shallower than 1.5 m

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 01
- **Source reference:** `data/civil/ce-flt01.js#Q55`

### Q31

At a point, \(\sigma_x=80\) MPa tension, \(\sigma_y=20\) MPa compression and \(\tau_{xy}=30\) MPa. Determine the major principal stress and the approximate angle of its plane normal from the x-axis.

- **A)** 88.3 MPa, 15.5°
- **B)** 50 MPa, 45°
- **C)** 108.3 MPa, 74.5°
- **D)** 100 MPa, 30°

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 02
- **Source reference:** `data/civil/ce-flt02.js#Q12`

### Q32

A built-up column reviewed in the design office has different effective lengths and different radii of gyration about the two principal axes. Which statement correctly identifies the governing buckling check?

- **A)** Both axes may be ignored if the section is compact
- **B)** The axis with the larger radius of gyration always governs
- **C)** The axis that produces the larger slenderness ratio Le/r governs the flexural-buckling strength
- **D)** The axis with the larger effective length always governs

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 01
- **Source reference:** `data/civil/ce-flt01.js#Q43`

### Q33

A roof purlin under gravity and wind is connected so that loading is inclined to its principal axes. Which design approach is appropriate?

- **A)** check biaxial bending interaction and relevant stability/serviceability limits
- **B)** check major-axis bending only
- **C)** use axial tension capacity
- **D)** ignore wind if gravity governs once

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 02
- **Source reference:** `data/civil/ce-flt02.js#Q51`

### Q34

In preliminary footing sizing for a lightly loaded column, the net ultimate bearing capacity from the soil report is 600 kPa and the adopted factor of safety against bearing failure is 3. Which net safe bearing value is closest?

- **A)** 1800 kPa
- **B)** 100 kPa
- **C)** 600 kPa
- **D)** 200 kPa

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 01
- **Source reference:** `data/civil/ce-flt01.js#Q56`

### Q35

A bearing-type bolted splice is subjected to load reversal. Shop inspection finds oversized holes but design assumed standard holes without slip-critical treatment. What is the central concern?

- **A)** bolt strength doubles
- **B)** larger holes increase net area
- **C)** slip/deformation and reduced net/bearing capacity require redesign or approved correction
- **D)** only paint quantity changes

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 02
- **Source reference:** `data/civil/ce-flt02.js#Q42`

### Q36

A lap connection has 4 bearing-type bolts, each with governing design shear capacity 48 kN. Ignoring eccentricity, connection shear capacity is closest to:

- **A)** 230.4 kN
- **B)** 153.6 kN
- **C)** 288 kN
- **D)** 192 kN

- **Source exam:** APTRANSCO CBT · Civil Subject Test · Steel Structures
- **Source reference:** `data/civil/st/ce-st-steel-01.js#Q4`

### Q37

A 230 mm wide beam with effective depth 450 mm carries factored shear 125 kN at a section. Nominal shear stress τv is closest to:

- **A)** 0.97 N/mm²
- **B)** 1.21 N/mm²
- **C)** 1.45 N/mm²
- **D)** 1.81 N/mm²

- **Source exam:** APTRANSCO CBT · Civil Subject Test · RCC
- **Source reference:** `data/civil/st/ce-st-rcc-01.js#Q2`

### Q38

In the shown slab panel, supports are along the long edges and Lx = 3.3 m while Ly = 6.9 m. The ratio used to confirm one-way action is closest to:

- **A)** 2.09 
- **B)** 1.67 
- **C)** 2.51 
- **D)** 3.14 

- **Source exam:** APTRANSCO CBT · Civil Subject Test · RCC
- **Source reference:** `data/civil/st/ce-st-rcc-01.js#Q3`
- **Figure (if used in source bank):** `images/diagrams/civil-st-rcc/rcc-one-way-slab.svg`

### Q39

At the suction eye of a centrifugal pump, measured absolute head falls close to vapour-pressure head. Which combined observation most strongly supports cavitation rather than ordinary bearing noise?

- **A)** smooth pressure rise and no damage
- **B)** crackling noise, fluctuating head and pitting near the eye
- **C)** lower viscosity only
- **D)** constant discharge with polished bearings

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 02
- **Source reference:** `data/civil/ce-flt02.js#Q38`

### Q40

While interpreting a strain-rosette investigation on a critical plane-stress element, the engineer reviews Mohr-circle geometry against competing claims about circle placement. Assertion: the centre of Mohr’s circle lies on the normal-stress axis at the mean of the two normal stresses. Reason: the centre lies on the shear-stress axis whenever shear is present. Which conclusion follows?

- **A)** A false, R true
- **B)** Both true; R explains A
- **C)** Both true; R does not explain A
- **D)** A true, R false

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 01
- **Source reference:** `data/civil/ce-flt01.js#Q5`

### Q41

The shown venturimeter is installed in a 0.2 m diameter inlet pipe. If the inlet velocity is 3 m/s, the discharge entering the convergent section is closest to:

- **A)** 0.11 m³/s
- **B)** 0.09 m³/s
- **C)** 0.14 m³/s
- **D)** 0.08 m³/s

- **Source exam:** APTRANSCO CBT · Civil Subject Test · Fluid Mechanics & HHM
- **Source reference:** `data/civil/st/ce-st-fm-01.js#Q3`
- **Figure (if used in source bank):** `images/diagrams/civil-st-fm/fluid-venturimeter.svg`

### Q42

An scr is forward biased and receives a gate pulse. Which statement is correct?

- **A)** It remains latched until current falls below holding current.
- **B)** Forward bias alone always turns it on.
- **C)** Holding current exceeds latching current.
- **D)** The gate can turn it off at any anode current.

- **Source exam:** APTRANSCO CBT · Electrical Subject Test · Power Electronics & Drives
- **Source reference:** `data/electrical/st/ee-st-pe-01.js#Q16`

### Q43

While checking an inclined-roof purlin under combined gravity and wind-reversal actions, the resultant loading is found to be oblique to the section principal axes. Which design approach is most appropriate for the strength check?

- **A)** Biaxial bending interaction with stability and serviceability checks
- **B)** Major-axis bending only
- **C)** Minor-axis bending only
- **D)** Axial tension only

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 01
- **Source reference:** `data/civil/ce-flt01.js#Q51`

### Q44

The overhanging beam in the crop carries the shown point load and UDL; span lengths and load locations appear only in the figure. Taking moments about the left support, which listed pair gives the two support reactions in the directions shown?

- **A)** 18 kN, 32 kN
- **B)** 14 kN, 36 kN
- **C)** 24 kN, 26 kN
- **D)** 30 kN, 20 kN

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 02
- **Source reference:** `data/civil/ce-flt02.js#Q3`
- **Figure (if used in source bank):** `images/diagrams/civil-flt02/q03-cantilever-beam.jpg`

### Q45

An scr is forward biased and receives a gate pulse. Which statement is correct?

- **A)** It remains latched until current falls below holding current.
- **B)** Forward bias alone always turns it on.
- **C)** The gate can turn it off at any anode current.
- **D)** Holding current exceeds latching current.

- **Source exam:** APTRANSCO CBT · Electrical Subject Test · Power Electronics & Drives
- **Source reference:** `data/electrical/st/ee-st-pe-01.js#Q26`

### Q46

A design review finds that the factored moment exceeds the limiting capacity of the same section as a singly reinforced member, while overall depth cannot be increased. Which design interpretation is correct?

- **A)** Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials
- **B)** Treat the limiting singly reinforced capacity as a serviceability ceiling and stop
- **C)** Provide only minimum tension steel and ignore the excess
- **D)** Reduce the load factor instead of changing reinforcement

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 01
- **Source reference:** `data/civil/ce-flt01.js#Q25`

### Q47

Gate pulse width for SCR with inductive load must ensure:

- **A)** negative gate only
- **B)** only dc gate forever
- **C)** current reaches IL before gate ends
- **D)** zero width always ok

- **Source exam:** APTRANSCO CBT · Electrical Subject Test · Power Electronics & Drives
- **Source reference:** `data/electrical/st/ee-st-pe-01.js#Q6`
- **Figure (if used in source bank):** `images/diagrams/electrical-st-pe/pe3.svg`

### Q48

At a 132/33 kV station, An scr is forward biased and receives a gate pulse. Which statement is correct?

- **A)** Holding current exceeds latching current.
- **B)** Forward bias alone always turns it on.
- **C)** It remains latched until current falls below holding current.
- **D)** The gate can turn it off at any anode current.

- **Source exam:** APTRANSCO CBT · Electrical Subject Test · Power Electronics & Drives
- **Source reference:** `data/electrical/st/ee-st-pe-01.js#Q11`

### Q49

A one-way slab is made deeper without changing span, loading or steel grade, and is then redesigned. Which coupled effect is generally expected before minimum-steel constraints intervene?

- **A)** Required steel rises and deflection worsens
- **B)** Required steel falls and deflection control improves
- **C)** Both remain identical
- **D)** Only cover changes

- **Source exam:** APTRANSCO CBT · Civil Full-Length Test 02
- **Source reference:** `data/civil/ce-flt02.js#Q27`

### Q50

In field, class-F (line) commutation of SCR succeeds when:

- **A)** Load is purely capacitive always
- **B)** Line voltage naturally reverses anode-cathode current
- **C)** Only snubber fires
- **D)** Only gate pulse removed

- **Source exam:** APTRANSCO CBT · Electrical Full-Length Test 02
- **Source reference:** `data/electrical/ee-flt02.js#Q53`

---

## Answer key (elimination tricks only)

### Q1 — Answer

**Keyed answer:** A — It remains latched until current falls below holding current.

**Governing elimination rule:** Playbook Rule 15 — SCR / PE latching vs holding vs firing

**Why this option (under Rule 15):**
It is the only choice consistent with the rule’s check: Latching > holding; latching is the current to *establish* conduction after gate pulse. Eliminate options that swap latching↔holding or that set gate width from holding current alone.

**Why not the other options (elimination):**
- **B)** Holding current exceeds latching current. — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **C)** The gate can turn it off at any anode current. — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **D)** Forward bias alone always turns it on. — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.

**Takeaway:** When you see this pattern again, apply Rule 15 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Electrical Subject Test · Power Electronics & Drives  
**Source reference:** `data/electrical/st/ee-st-pe-01.js#Q21`

---

### Q2 — Answer

**Keyed answer:** B — 108 kN/m

**Governing elimination rule:** Playbook Rule 12 — Rankine / Terzaghi / earth-pressure term drop

**Why this option (under Rule 12):**
It is the only choice consistent with the rule’s check: Write the full Terzaghi/Rankine expression. Eliminate options that drop the γBN term, swap Ka↔Kp, or use dry γ when stem says submerged.

**Why not the other options (elimination):**
- **A)** 162 kN/m — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **C)** 86.4 kN/m — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **D)** 129.6 kN/m — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.

**Takeaway:** When you see this pattern again, apply Rule 12 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · Foundation Engineering  
**Source reference:** `data/civil/st/ce-st-fe-01.js#Q5`

---

### Q3 — Answer

**Keyed answer:** D — R3 and R4 looking toward the tie from each bus

**Governing elimination rule:** Playbook Rule 11 — Figure-dependency: cover the figure test

**Why this option (under Rule 11):**
It is the only choice consistent with the rule’s check: If you can pick the answer without the figure, stop — stem/figure mismatch. Otherwise eliminate options that ignore a labelled dimension, support, or curve on the crop.

**Why not the other options (elimination):**
- **A)** All relays directional — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **B)** No directional relays needed — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **C)** Only R7 on outgoing feeder — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.

**Takeaway:** When you see this pattern again, apply Rule 11 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Electrical Full-Length Test 02  
**Source reference:** `data/electrical/ee-flt02.js#Q4`

---

### Q4 — Answer

**Keyed answer:** A — 114.5 MPa

**Governing elimination rule:** Playbook Rule 13 — Mohr / principal-stress pair consistency

**Why this option (under Rule 13):**
It is the only choice consistent with the rule’s check: σavg = (σx+σy)/2; R = √[((σx−σy)/2)²+τ²]. Eliminate pairs that violate σ1+σ2 = σx+σy or that treat τ as a normal stress.

**Why not the other options (elimination):**
- **B)** 171.75 MPa — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **C)** 91.6 MPa — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **D)** 137.4 MPa — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.

**Takeaway:** When you see this pattern again, apply Rule 13 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · Strength of Materials  
**Source reference:** `data/civil/st/ce-st-som-01.js#Q23`

---

### Q5 — Answer

**Keyed answer:** A — R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2

**Governing elimination rule:** Playbook Rule 11 — Figure-dependency: cover the figure test

**Why this option (under Rule 11):**
It is the only choice consistent with the rule’s check: If you can pick the answer without the figure, stop — stem/figure mismatch. Otherwise eliminate options that ignore a labelled dimension, support, or curve on the crop.

**Why not the other options (elimination):**
- **B)** R3 and R4 directional blocking toward bus 2 only — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **C)** R3,R4 directional toward bus 2 and R7 directional toward bus 3 — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **D)** R3 and R4 directional toward Line1 and Line2 respectively only — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.

**Takeaway:** When you see this pattern again, apply Rule 11 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Electrical Full-Length Test 01  
**Source reference:** `data/electrical/ee-flt01.js#Q4`

---

### Q6 — Answer

**Keyed answer:** A — 95 mm

**Governing elimination rule:** Playbook Rule 13 — Mohr / principal-stress pair consistency

**Why this option (under Rule 13):**
It is the only choice consistent with the rule’s check: σavg = (σx+σy)/2; R = √[((σx−σy)/2)²+τ²]. Eliminate pairs that violate σ1+σ2 = σx+σy or that treat τ as a normal stress.

**Why not the other options (elimination):**
- **B)** 42 mm — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **C)** 126 mm — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **D)** 68 mm — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.

**Takeaway:** When you see this pattern again, apply Rule 13 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 01  
**Source reference:** `data/civil/ce-flt01.js#Q53`

---

### Q7 — Answer

**Keyed answer:** B — 1-p,2-q,3-r,4-s

**Governing elimination rule:** Playbook Rule 12 — Rankine / Terzaghi / earth-pressure term drop

**Why this option (under Rule 12):**
It is the only choice consistent with the rule’s check: Write the full Terzaghi/Rankine expression. Eliminate options that drop the γBN term, swap Ka↔Kp, or use dry γ when stem says submerged.

**Why not the other options (elimination):**
- **A)** 1-s,2-r,3-q,4-p — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **C)** 1-r,2-p,3-s,4-q — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **D)** 1-q,2-s,3-p,4-r — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.

**Takeaway:** When you see this pattern again, apply Rule 12 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 02  
**Source reference:** `data/civil/ce-flt02.js#Q46`

---

### Q8 — Answer

**Keyed answer:** B — 40.62 kN m

**Governing elimination rule:** Playbook Rule 14 — SFD↔BMD jump / couple vs point-load confusion

**Why this option (under Rule 14):**
It is the only choice consistent with the rule’s check: Point load → shear jump; couple → moment jump (no shear jump). Eliminate options that swap those rules.

**Why not the other options (elimination):**
- **A)** 32.5 kN m — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **C)** 48.75 kN m — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **D)** 60.94 kN m — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.

**Takeaway:** When you see this pattern again, apply Rule 14 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · Strength of Materials  
**Source reference:** `data/civil/st/ce-st-som-01.js#Q2`

---

### Q9 — Answer

**Keyed answer:** A — Holding current IH

**Governing elimination rule:** Playbook Rule 15 — SCR / PE latching vs holding vs firing

**Why this option (under Rule 15):**
It is the only choice consistent with the rule’s check: Latching > holding; latching is the current to *establish* conduction after gate pulse. Eliminate options that swap latching↔holding or that set gate width from holding current alone.

**Why not the other options (elimination):**
- **B)** Latching current IL always higher only — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **C)** Gate current Ig — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **D)** Surge rating — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.

**Takeaway:** When you see this pattern again, apply Rule 15 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Electrical Full-Length Test 02  
**Source reference:** `data/electrical/ee-flt02.js#Q47`

---

### Q10 — Answer

**Keyed answer:** C — 7.22 N/mm²

**Governing elimination rule:** Playbook Rule 12 — Rankine / Terzaghi / earth-pressure term drop

**Why this option (under Rule 12):**
It is the only choice consistent with the rule’s check: Write the full Terzaghi/Rankine expression. Eliminate options that drop the γBN term, swap Ka↔Kp, or use dry γ when stem says submerged.

**Why not the other options (elimination):**
- **A)** 8.67 N/mm² — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **B)** 5.78 N/mm² — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **D)** 10.83 N/mm² — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.

**Takeaway:** When you see this pattern again, apply Rule 12 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · Steel Structures  
**Source reference:** `data/civil/st/ce-st-steel-01.js#Q5`

---

### Q11 — Answer

**Keyed answer:** D — 180 kN

**Governing elimination rule:** Playbook Rule 11 — Figure-dependency: cover the figure test

**Why this option (under Rule 11):**
It is the only choice consistent with the rule’s check: If you can pick the answer without the figure, stop — stem/figure mismatch. Otherwise eliminate options that ignore a labelled dimension, support, or curve on the crop.

**Why not the other options (elimination):**
- **A)** 270 kN — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **B)** 216 kN — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **C)** 144 kN — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.

**Takeaway:** When you see this pattern again, apply Rule 11 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · Steel Structures  
**Source reference:** `data/civil/st/ce-st-steel-01.js#Q3`

---

### Q12 — Answer

**Keyed answer:** D — 297 MPa

**Governing elimination rule:** Playbook Rule 13 — Mohr / principal-stress pair consistency

**Why this option (under Rule 13):**
It is the only choice consistent with the rule’s check: σavg = (σx+σy)/2; R = √[((σx−σy)/2)²+τ²]. Eliminate pairs that violate σ1+σ2 = σx+σy or that treat τ as a normal stress.

**Why not the other options (elimination):**
- **A)** 256 MPa — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **B)** 283 MPa — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **C)** 322 MPa — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.

**Takeaway:** When you see this pattern again, apply Rule 13 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 02  
**Source reference:** `data/civil/ce-flt02.js#Q13`

---

### Q13 — Answer

**Keyed answer:** B — Anode current falls below holding current

**Governing elimination rule:** Playbook Rule 15 — SCR / PE latching vs holding vs firing

**Why this option (under Rule 15):**
It is the only choice consistent with the rule’s check: Latching > holding; latching is the current to *establish* conduction after gate pulse. Eliminate options that swap latching↔holding or that set gate width from holding current alone.

**Why not the other options (elimination):**
- **A)** Voltage zero is never needed in any circuit — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **C)** Only raising gate current — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **D)** Gate pulse remains forever — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.

**Takeaway:** When you see this pattern again, apply Rule 15 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Electrical Full-Length Test 01  
**Source reference:** `data/electrical/ee-flt01.js#Q47`

---

### Q14 — Answer

**Keyed answer:** A — 1004 kPa

**Governing elimination rule:** Playbook Rule 12 — Rankine / Terzaghi / earth-pressure term drop

**Why this option (under Rule 12):**
It is the only choice consistent with the rule’s check: Write the full Terzaghi/Rankine expression. Eliminate options that drop the γBN term, swap Ka↔Kp, or use dry γ when stem says submerged.

**Why not the other options (elimination):**
- **B)** 1204.8 kPa — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **C)** 1506 kPa — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **D)** 803.2 kPa — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.

**Takeaway:** When you see this pattern again, apply Rule 12 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · Foundation Engineering  
**Source reference:** `data/civil/st/ce-st-fe-01.js#Q1`

---

### Q15 — Answer

**Keyed answer:** D — min on-current to keep latch after gate removed

**Governing elimination rule:** Playbook Rule 15 — SCR / PE latching vs holding vs firing

**Why this option (under Rule 15):**
It is the only choice consistent with the rule’s check: Latching > holding; latching is the current to *establish* conduction after gate pulse. Eliminate options that swap latching↔holding or that set gate width from holding current alone.

**Why not the other options (elimination):**
- **A)** gate peak — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **B)** holding only identical always — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **C)** Ig=0 — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.

**Takeaway:** When you see this pattern again, apply Rule 15 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Electrical Subject Test · Power Electronics & Drives  
**Source reference:** `data/electrical/st/ee-st-pe-01.js#Q1`

---

### Q16 — Answer

**Keyed answer:** A — 95.4 kN

**Governing elimination rule:** Playbook Rule 11 — Figure-dependency: cover the figure test

**Why this option (under Rule 11):**
It is the only choice consistent with the rule’s check: If you can pick the answer without the figure, stop — stem/figure mismatch. Otherwise eliminate options that ignore a labelled dimension, support, or curve on the crop.

**Why not the other options (elimination):**
- **B)** 114.48 kN — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **C)** 143.1 kN — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **D)** 76.32 kN — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.

**Takeaway:** When you see this pattern again, apply Rule 11 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · Strength of Materials  
**Source reference:** `data/civil/st/ce-st-som-01.js#Q3`

---

### Q17 — Answer

**Keyed answer:** C — 400 mm²

**Governing elimination rule:** Playbook Rule 14 — SFD↔BMD jump / couple vs point-load confusion

**Why this option (under Rule 14):**
It is the only choice consistent with the rule’s check: Point load → shear jump; couple → moment jump (no shear jump). Eliminate options that swap those rules.

**Why not the other options (elimination):**
- **A)** 900 mm² — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **B)** 250 mm² — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **D)** 650 mm² — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.

**Takeaway:** When you see this pattern again, apply Rule 14 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 02  
**Source reference:** `data/civil/ce-flt02.js#Q25`

---

### Q18 — Answer

**Keyed answer:** A — LC resonating current reverse

**Governing elimination rule:** Playbook Rule 15 — SCR / PE latching vs holding vs firing

**Why this option (under Rule 15):**
It is the only choice consistent with the rule’s check: Latching > holding; latching is the current to *establish* conduction after gate pulse. Eliminate options that swap latching↔holding or that set gate width from holding current alone.

**Why not the other options (elimination):**
- **B)** only fuse — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **C)** only relay — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **D)** only line AC — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.

**Takeaway:** When you see this pattern again, apply Rule 15 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Electrical Subject Test · Power Electronics & Drives  
**Source reference:** `data/electrical/st/ee-st-pe-01.js#Q8`

---

### Q19 — Answer

**Keyed answer:** D — Design the excess moment with compression and additional tension steel

**Governing elimination rule:** Playbook Rule 14 — SFD↔BMD jump / couple vs point-load confusion

**Why this option (under Rule 14):**
It is the only choice consistent with the rule’s check: Point load → shear jump; couple → moment jump (no shear jump). Eliminate options that swap those rules.

**Why not the other options (elimination):**
- **A)** Use only minimum tension steel — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **B)** Reduce effective depth — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **C)** Treat 138 kN·m as service moment — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.

**Takeaway:** When you see this pattern again, apply Rule 14 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 01  
**Source reference:** `data/civil/ce-flt01.js#Q24`

---

### Q20 — Answer

**Keyed answer:** D — 103.1 MPa

**Governing elimination rule:** Playbook Rule 13 — Mohr / principal-stress pair consistency

**Why this option (under Rule 13):**
It is the only choice consistent with the rule’s check: σavg = (σx+σy)/2; R = √[((σx−σy)/2)²+τ²]. Eliminate pairs that violate σ1+σ2 = σx+σy or that treat τ as a normal stress.

**Why not the other options (elimination):**
- **A)** 123.72 MPa — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **B)** 154.65 MPa — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **C)** 82.48 MPa — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.

**Takeaway:** When you see this pattern again, apply Rule 13 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · Strength of Materials  
**Source reference:** `data/civil/st/ce-st-som-01.js#Q13`

---

### Q21 — Answer

**Keyed answer:** D — 1 — maximum dry density at OMC

**Governing elimination rule:** Playbook Rule 11 — Figure-dependency: cover the figure test

**Why this option (under Rule 11):**
It is the only choice consistent with the rule’s check: If you can pick the answer without the figure, stop — stem/figure mismatch. Otherwise eliminate options that ignore a labelled dimension, support, or curve on the crop.

**Why not the other options (elimination):**
- **A)** 0.8 — maximum dry density at OMC — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **B)** 1.5 — maximum dry density at OMC — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **C)** 1.2 — maximum dry density at OMC — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.

**Takeaway:** When you see this pattern again, apply Rule 11 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · Soil Mechanics  
**Source reference:** `data/civil/st/ce-st-soil-01.js#Q3`

---

### Q22 — Answer

**Keyed answer:** C — 110.8 MPa

**Governing elimination rule:** Playbook Rule 13 — Mohr / principal-stress pair consistency

**Why this option (under Rule 13):**
It is the only choice consistent with the rule’s check: σavg = (σx+σy)/2; R = √[((σx−σy)/2)²+τ²]. Eliminate pairs that violate σ1+σ2 = σx+σy or that treat τ as a normal stress.

**Why not the other options (elimination):**
- **A)** 88.64 MPa — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **B)** 166.19 MPa — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **D)** 132.95 MPa — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.

**Takeaway:** When you see this pattern again, apply Rule 13 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · Strength of Materials  
**Source reference:** `data/civil/st/ce-st-som-01.js#Q18`

---

### Q23 — Answer

**Keyed answer:** C — 1-p,2-q,3-r,4-s

**Governing elimination rule:** Playbook Rule 14 — SFD↔BMD jump / couple vs point-load confusion

**Why this option (under Rule 14):**
It is the only choice consistent with the rule’s check: Point load → shear jump; couple → moment jump (no shear jump). Eliminate options that swap those rules.

**Why not the other options (elimination):**
- **A)** 1-r,2-s,3-p,4-q — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **B)** 1-s,2-r,3-q,4-p — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **D)** 1-q,2-p,3-s,4-r — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.

**Takeaway:** When you see this pattern again, apply Rule 14 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 02  
**Source reference:** `data/civil/ce-flt02.js#Q14`

---

### Q24 — Answer

**Keyed answer:** A — 1021.71 mm²

**Governing elimination rule:** Playbook Rule 14 — SFD↔BMD jump / couple vs point-load confusion

**Why this option (under Rule 14):**
It is the only choice consistent with the rule’s check: Point load → shear jump; couple → moment jump (no shear jump). Eliminate options that swap those rules.

**Why not the other options (elimination):**
- **B)** 1226.05 mm² — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **C)** 817.37 mm² — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **D)** 1532.57 mm² — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.

**Takeaway:** When you see this pattern again, apply Rule 14 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · RCC  
**Source reference:** `data/civil/st/ce-st-rcc-01.js#Q1`

---

### Q25 — Answer

**Keyed answer:** C — Cavitation

**Governing elimination rule:** Playbook Rule 12 — Rankine / Terzaghi / earth-pressure term drop

**Why this option (under Rule 12):**
It is the only choice consistent with the rule’s check: Write the full Terzaghi/Rankine expression. Eliminate options that drop the γBN term, swap Ka↔Kp, or use dry γ when stem says submerged.

**Why not the other options (elimination):**
- **A)** Water hammer at delivery valve — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **B)** Bearing misalignment only — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **D)** Laminar-flow transition — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.

**Takeaway:** When you see this pattern again, apply Rule 12 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 01  
**Source reference:** `data/civil/ce-flt01.js#Q38`

---

### Q26 — Answer

**Keyed answer:** C — A concentrated couple acts at C

**Governing elimination rule:** Playbook Rule 14 — SFD↔BMD jump / couple vs point-load confusion

**Why this option (under Rule 14):**
It is the only choice consistent with the rule’s check: Point load → shear jump; couple → moment jump (no shear jump). Eliminate options that swap those rules.

**Why not the other options (elimination):**
- **A)** A UDL starts at C — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **B)** A point load acts at C — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **D)** The flexural rigidity changes at C — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.

**Takeaway:** When you see this pattern again, apply Rule 14 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 01  
**Source reference:** `data/civil/ce-flt01.js#Q9`

---

### Q27 — Answer

**Keyed answer:** A — 10 kN, 50 kN

**Governing elimination rule:** Playbook Rule 11 — Figure-dependency: cover the figure test

**Why this option (under Rule 11):**
It is the only choice consistent with the rule’s check: If you can pick the answer without the figure, stop — stem/figure mismatch. Otherwise eliminate options that ignore a labelled dimension, support, or curve on the crop.

**Why not the other options (elimination):**
- **B)** 20 kN, 40 kN — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **C)** 15 kN, 45 kN — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **D)** 25 kN, 35 kN — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.

**Takeaway:** When you see this pattern again, apply Rule 11 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 01  
**Source reference:** `data/civil/ce-flt01.js#Q3`

---

### Q28 — Answer

**Keyed answer:** B — 28 kN m

**Governing elimination rule:** Playbook Rule 14 — SFD↔BMD jump / couple vs point-load confusion

**Why this option (under Rule 14):**
It is the only choice consistent with the rule’s check: Point load → shear jump; couple → moment jump (no shear jump). Eliminate options that swap those rules.

**Why not the other options (elimination):**
- **A)** 42 kN m — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **C)** 22.4 kN m — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **D)** 33.6 kN m — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.

**Takeaway:** When you see this pattern again, apply Rule 14 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · Strength of Materials  
**Source reference:** `data/civil/st/ce-st-som-01.js#Q7`

---

### Q29 — Answer

**Keyed answer:** D — 49.15 kPa

**Governing elimination rule:** Playbook Rule 11 — Figure-dependency: cover the figure test

**Why this option (under Rule 11):**
It is the only choice consistent with the rule’s check: If you can pick the answer without the figure, stop — stem/figure mismatch. Otherwise eliminate options that ignore a labelled dimension, support, or curve on the crop.

**Why not the other options (elimination):**
- **A)** 39.32 kPa — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **B)** 73.72 kPa — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **C)** 58.98 kPa — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.

**Takeaway:** When you see this pattern again, apply Rule 11 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · Foundation Engineering  
**Source reference:** `data/civil/st/ce-st-fe-01.js#Q3`

---

### Q30 — Answer

**Keyed answer:** B — Bearing may pass while settlement still governs; enlarge/deepen the footing, improve the ground, or revise until both criteria are satisfied

**Governing elimination rule:** Playbook Rule 12 — Rankine / Terzaghi / earth-pressure term drop

**Why this option (under Rule 12):**
It is the only choice consistent with the rule’s check: Write the full Terzaghi/Rankine expression. Eliminate options that drop the γBN term, swap Ka↔Kp, or use dry γ when stem says submerged.

**Why not the other options (elimination):**
- **A)** Reduce only the concrete grade of the footing — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **C)** Accept because bearing pressure governs all foundation checks — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **D)** Ignore settlement for footings shallower than 1.5 m — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.

**Takeaway:** When you see this pattern again, apply Rule 12 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 01  
**Source reference:** `data/civil/ce-flt01.js#Q55`

---

### Q31 — Answer

**Keyed answer:** A — 88.3 MPa, 15.5°

**Governing elimination rule:** Playbook Rule 13 — Mohr / principal-stress pair consistency

**Why this option (under Rule 13):**
It is the only choice consistent with the rule’s check: σavg = (σx+σy)/2; R = √[((σx−σy)/2)²+τ²]. Eliminate pairs that violate σ1+σ2 = σx+σy or that treat τ as a normal stress.

**Why not the other options (elimination):**
- **B)** 50 MPa, 45° — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **C)** 108.3 MPa, 74.5° — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **D)** 100 MPa, 30° — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.

**Takeaway:** When you see this pattern again, apply Rule 13 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 02  
**Source reference:** `data/civil/ce-flt02.js#Q12`

---

### Q32 — Answer

**Keyed answer:** C — The axis that produces the larger slenderness ratio Le/r governs the flexural-buckling strength

**Governing elimination rule:** Playbook Rule 13 — Mohr / principal-stress pair consistency

**Why this option (under Rule 13):**
It is the only choice consistent with the rule’s check: σavg = (σx+σy)/2; R = √[((σx−σy)/2)²+τ²]. Eliminate pairs that violate σ1+σ2 = σx+σy or that treat τ as a normal stress.

**Why not the other options (elimination):**
- **A)** Both axes may be ignored if the section is compact — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **B)** The axis with the larger radius of gyration always governs — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **D)** The axis with the larger effective length always governs — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.

**Takeaway:** When you see this pattern again, apply Rule 13 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 01  
**Source reference:** `data/civil/ce-flt01.js#Q43`

---

### Q33 — Answer

**Keyed answer:** A — check biaxial bending interaction and relevant stability/serviceability limits

**Governing elimination rule:** Playbook Rule 13 — Mohr / principal-stress pair consistency

**Why this option (under Rule 13):**
It is the only choice consistent with the rule’s check: σavg = (σx+σy)/2; R = √[((σx−σy)/2)²+τ²]. Eliminate pairs that violate σ1+σ2 = σx+σy or that treat τ as a normal stress.

**Why not the other options (elimination):**
- **B)** check major-axis bending only — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **C)** use axial tension capacity — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **D)** ignore wind if gravity governs once — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.

**Takeaway:** When you see this pattern again, apply Rule 13 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 02  
**Source reference:** `data/civil/ce-flt02.js#Q51`

---

### Q34 — Answer

**Keyed answer:** D — 200 kPa

**Governing elimination rule:** Playbook Rule 12 — Rankine / Terzaghi / earth-pressure term drop

**Why this option (under Rule 12):**
It is the only choice consistent with the rule’s check: Write the full Terzaghi/Rankine expression. Eliminate options that drop the γBN term, swap Ka↔Kp, or use dry γ when stem says submerged.

**Why not the other options (elimination):**
- **A)** 1800 kPa — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **B)** 100 kPa — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **C)** 600 kPa — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.

**Takeaway:** When you see this pattern again, apply Rule 12 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 01  
**Source reference:** `data/civil/ce-flt01.js#Q56`

---

### Q35 — Answer

**Keyed answer:** C — slip/deformation and reduced net/bearing capacity require redesign or approved correction

**Governing elimination rule:** Playbook Rule 12 — Rankine / Terzaghi / earth-pressure term drop

**Why this option (under Rule 12):**
It is the only choice consistent with the rule’s check: Write the full Terzaghi/Rankine expression. Eliminate options that drop the γBN term, swap Ka↔Kp, or use dry γ when stem says submerged.

**Why not the other options (elimination):**
- **A)** bolt strength doubles — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **B)** larger holes increase net area — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **D)** only paint quantity changes — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.

**Takeaway:** When you see this pattern again, apply Rule 12 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 02  
**Source reference:** `data/civil/ce-flt02.js#Q42`

---

### Q36 — Answer

**Keyed answer:** D — 192 kN

**Governing elimination rule:** Playbook Rule 12 — Rankine / Terzaghi / earth-pressure term drop

**Why this option (under Rule 12):**
It is the only choice consistent with the rule’s check: Write the full Terzaghi/Rankine expression. Eliminate options that drop the γBN term, swap Ka↔Kp, or use dry γ when stem says submerged.

**Why not the other options (elimination):**
- **A)** 230.4 kN — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **B)** 153.6 kN — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **C)** 288 kN — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.

**Takeaway:** When you see this pattern again, apply Rule 12 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · Steel Structures  
**Source reference:** `data/civil/st/ce-st-steel-01.js#Q4`

---

### Q37 — Answer

**Keyed answer:** B — 1.21 N/mm²

**Governing elimination rule:** Playbook Rule 14 — SFD↔BMD jump / couple vs point-load confusion

**Why this option (under Rule 14):**
It is the only choice consistent with the rule’s check: Point load → shear jump; couple → moment jump (no shear jump). Eliminate options that swap those rules.

**Why not the other options (elimination):**
- **A)** 0.97 N/mm² — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **C)** 1.45 N/mm² — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **D)** 1.81 N/mm² — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.

**Takeaway:** When you see this pattern again, apply Rule 14 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · RCC  
**Source reference:** `data/civil/st/ce-st-rcc-01.js#Q2`

---

### Q38 — Answer

**Keyed answer:** A — 2.09 

**Governing elimination rule:** Playbook Rule 11 — Figure-dependency: cover the figure test

**Why this option (under Rule 11):**
It is the only choice consistent with the rule’s check: If you can pick the answer without the figure, stop — stem/figure mismatch. Otherwise eliminate options that ignore a labelled dimension, support, or curve on the crop.

**Why not the other options (elimination):**
- **B)** 1.67  — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **C)** 2.51  — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **D)** 3.14  — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.

**Takeaway:** When you see this pattern again, apply Rule 11 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · RCC  
**Source reference:** `data/civil/st/ce-st-rcc-01.js#Q3`

---

### Q39 — Answer

**Keyed answer:** B — crackling noise, fluctuating head and pitting near the eye

**Governing elimination rule:** Playbook Rule 12 — Rankine / Terzaghi / earth-pressure term drop

**Why this option (under Rule 12):**
It is the only choice consistent with the rule’s check: Write the full Terzaghi/Rankine expression. Eliminate options that drop the γBN term, swap Ka↔Kp, or use dry γ when stem says submerged.

**Why not the other options (elimination):**
- **A)** smooth pressure rise and no damage — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **C)** lower viscosity only — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.
- **D)** constant discharge with polished bearings — *Eliminate:* Drops an Nc/Nq/Nγ or Ka/Kp term, or uses dry γ when submerged is required.

**Takeaway:** When you see this pattern again, apply Rule 12 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 02  
**Source reference:** `data/civil/ce-flt02.js#Q38`

---

### Q40 — Answer

**Keyed answer:** D — A true, R false

**Governing elimination rule:** Playbook Rule 13 — Mohr / principal-stress pair consistency

**Why this option (under Rule 13):**
It is the only choice consistent with the rule’s check: σavg = (σx+σy)/2; R = √[((σx−σy)/2)²+τ²]. Eliminate pairs that violate σ1+σ2 = σx+σy or that treat τ as a normal stress.

**Why not the other options (elimination):**
- **A)** A false, R true — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **B)** Both true; R explains A — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **C)** Both true; R does not explain A — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.

**Takeaway:** When you see this pattern again, apply Rule 13 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 01  
**Source reference:** `data/civil/ce-flt01.js#Q5`

---

### Q41 — Answer

**Keyed answer:** B — 0.09 m³/s

**Governing elimination rule:** Playbook Rule 11 — Figure-dependency: cover the figure test

**Why this option (under Rule 11):**
It is the only choice consistent with the rule’s check: If you can pick the answer without the figure, stop — stem/figure mismatch. Otherwise eliminate options that ignore a labelled dimension, support, or curve on the crop.

**Why not the other options (elimination):**
- **A)** 0.11 m³/s — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **C)** 0.14 m³/s — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **D)** 0.08 m³/s — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.

**Takeaway:** When you see this pattern again, apply Rule 11 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Subject Test · Fluid Mechanics & HHM  
**Source reference:** `data/civil/st/ce-st-fm-01.js#Q3`

---

### Q42 — Answer

**Keyed answer:** A — It remains latched until current falls below holding current.

**Governing elimination rule:** Playbook Rule 15 — SCR / PE latching vs holding vs firing

**Why this option (under Rule 15):**
It is the only choice consistent with the rule’s check: Latching > holding; latching is the current to *establish* conduction after gate pulse. Eliminate options that swap latching↔holding or that set gate width from holding current alone.

**Why not the other options (elimination):**
- **B)** Forward bias alone always turns it on. — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **C)** Holding current exceeds latching current. — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **D)** The gate can turn it off at any anode current. — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.

**Takeaway:** When you see this pattern again, apply Rule 15 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Electrical Subject Test · Power Electronics & Drives  
**Source reference:** `data/electrical/st/ee-st-pe-01.js#Q16`

---

### Q43 — Answer

**Keyed answer:** A — Biaxial bending interaction with stability and serviceability checks

**Governing elimination rule:** Playbook Rule 13 — Mohr / principal-stress pair consistency

**Why this option (under Rule 13):**
It is the only choice consistent with the rule’s check: σavg = (σx+σy)/2; R = √[((σx−σy)/2)²+τ²]. Eliminate pairs that violate σ1+σ2 = σx+σy or that treat τ as a normal stress.

**Why not the other options (elimination):**
- **B)** Major-axis bending only — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **C)** Minor-axis bending only — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.
- **D)** Axial tension only — *Eliminate:* Principal-stress pair breaks σ1+σ2=σx+σy or treats τ as normal stress.

**Takeaway:** When you see this pattern again, apply Rule 13 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 01  
**Source reference:** `data/civil/ce-flt01.js#Q51`

---

### Q44 — Answer

**Keyed answer:** B — 14 kN, 36 kN

**Governing elimination rule:** Playbook Rule 11 — Figure-dependency: cover the figure test

**Why this option (under Rule 11):**
It is the only choice consistent with the rule’s check: If you can pick the answer without the figure, stop — stem/figure mismatch. Otherwise eliminate options that ignore a labelled dimension, support, or curve on the crop.

**Why not the other options (elimination):**
- **A)** 18 kN, 32 kN — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **C)** 24 kN, 26 kN — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.
- **D)** 30 kN, 20 kN — *Eliminate:* Ignores a labelled dimension/support/curve that the figure requires.

**Takeaway:** When you see this pattern again, apply Rule 11 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 02  
**Source reference:** `data/civil/ce-flt02.js#Q3`

---

### Q45 — Answer

**Keyed answer:** A — It remains latched until current falls below holding current.

**Governing elimination rule:** Playbook Rule 15 — SCR / PE latching vs holding vs firing

**Why this option (under Rule 15):**
It is the only choice consistent with the rule’s check: Latching > holding; latching is the current to *establish* conduction after gate pulse. Eliminate options that swap latching↔holding or that set gate width from holding current alone.

**Why not the other options (elimination):**
- **B)** Forward bias alone always turns it on. — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **C)** The gate can turn it off at any anode current. — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **D)** Holding current exceeds latching current. — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.

**Takeaway:** When you see this pattern again, apply Rule 15 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Electrical Subject Test · Power Electronics & Drives  
**Source reference:** `data/electrical/st/ee-st-pe-01.js#Q26`

---

### Q46 — Answer

**Keyed answer:** A — Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials

**Governing elimination rule:** Playbook Rule 14 — SFD↔BMD jump / couple vs point-load confusion

**Why this option (under Rule 14):**
It is the only choice consistent with the rule’s check: Point load → shear jump; couple → moment jump (no shear jump). Eliminate options that swap those rules.

**Why not the other options (elimination):**
- **B)** Treat the limiting singly reinforced capacity as a serviceability ceiling and stop — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **C)** Provide only minimum tension steel and ignore the excess — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **D)** Reduce the load factor instead of changing reinforcement — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.

**Takeaway:** When you see this pattern again, apply Rule 14 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 01  
**Source reference:** `data/civil/ce-flt01.js#Q25`

---

### Q47 — Answer

**Keyed answer:** C — current reaches IL before gate ends

**Governing elimination rule:** Playbook Rule 15 — SCR / PE latching vs holding vs firing

**Why this option (under Rule 15):**
It is the only choice consistent with the rule’s check: Latching > holding; latching is the current to *establish* conduction after gate pulse. Eliminate options that swap latching↔holding or that set gate width from holding current alone.

**Why not the other options (elimination):**
- **A)** negative gate only — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **B)** only dc gate forever — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **D)** zero width always ok — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.

**Takeaway:** When you see this pattern again, apply Rule 15 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Electrical Subject Test · Power Electronics & Drives  
**Source reference:** `data/electrical/st/ee-st-pe-01.js#Q6`

---

### Q48 — Answer

**Keyed answer:** C — It remains latched until current falls below holding current.

**Governing elimination rule:** Playbook Rule 15 — SCR / PE latching vs holding vs firing

**Why this option (under Rule 15):**
It is the only choice consistent with the rule’s check: Latching > holding; latching is the current to *establish* conduction after gate pulse. Eliminate options that swap latching↔holding or that set gate width from holding current alone.

**Why not the other options (elimination):**
- **A)** Holding current exceeds latching current. — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **B)** Forward bias alone always turns it on. — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **D)** The gate can turn it off at any anode current. — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.

**Takeaway:** When you see this pattern again, apply Rule 15 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Electrical Subject Test · Power Electronics & Drives  
**Source reference:** `data/electrical/st/ee-st-pe-01.js#Q11`

---

### Q49 — Answer

**Keyed answer:** B — Required steel falls and deflection control improves

**Governing elimination rule:** Playbook Rule 14 — SFD↔BMD jump / couple vs point-load confusion

**Why this option (under Rule 14):**
It is the only choice consistent with the rule’s check: Point load → shear jump; couple → moment jump (no shear jump). Eliminate options that swap those rules.

**Why not the other options (elimination):**
- **A)** Required steel rises and deflection worsens — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **C)** Both remain identical — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.
- **D)** Only cover changes — *Eliminate:* Swaps shear-jump (point load) with moment-jump (couple) rules.

**Takeaway:** When you see this pattern again, apply Rule 14 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Civil Full-Length Test 02  
**Source reference:** `data/civil/ce-flt02.js#Q27`

---

### Q50 — Answer

**Keyed answer:** B — Line voltage naturally reverses anode-cathode current

**Governing elimination rule:** Playbook Rule 15 — SCR / PE latching vs holding vs firing

**Why this option (under Rule 15):**
It is the only choice consistent with the rule’s check: Latching > holding; latching is the current to *establish* conduction after gate pulse. Eliminate options that swap latching↔holding or that set gate width from holding current alone.

**Why not the other options (elimination):**
- **A)** Load is purely capacitive always — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **C)** Only snubber fires — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.
- **D)** Only gate pulse removed — *Eliminate:* Swaps latching ↔ holding or misuses gate-pulse width vs current thresholds.

**Takeaway:** When you see this pattern again, apply Rule 15 before full algebra — strike lookalikes that violate the rule, then confirm the survivor.

**Source exam:** APTRANSCO CBT · Electrical Full-Length Test 02  
**Source reference:** `data/electrical/ee-flt02.js#Q53`

---
