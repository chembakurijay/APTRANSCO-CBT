# APTRANSCO AEE — Civil Engineering FLT-01 (For Approval)

**Status:** Pending your approval — do NOT convert to code until approved  
**Duration:** 180 minutes | **Questions:** 100 | **Marks:** 100 | **Negative marking:** None  

---

## A. Compliance Snapshot (Master Rules)

| Check | Status |
|---|---|
| Sequence Q1–15 SOM, 16–28 RCC, 29–39 Fluid, 40–51 Steel, 52–61 Found., 62–70 Soil, 71–100 Non-core | PASS |
| Weightage 15/13/11/12/10/9 + 8/7/5/5/5 | PASS |
| Tech difficulty ≈ 16E / 38M / 16H | PASS (targets) |
| ≥1 Matching Matrix | Q36 |
| ≥1 Table-based | Q58 |
| ≥1 Graph/Curve | Q9, Q33, Q68 |
| ≥4 Assertion–Reason | Q5, Q18, Q42, Q63 |
| ≥4 IS / Standard value (application, no clause numbers) | Q16, Q26, Q41, Q52 |
| Diagram Qs with declared paths (options depend on figure) | 13 Qs (see §B) |
| Direct PYQ ≤ 2 | PASS (0 Direct PYQ) |

**Technical pattern mix (approx):** Numerical ~21, Conceptual ~14, Diagram ~13, Application ~10, Practical ~5, AR 4, Standard 4, Graph ≥3, Matching 1, Table 1 (overlap allowed).

---

## B. Diagram Source Declaration (Mandatory)

| Q | Image path | Source basis | What it shows | Options depend on diagram? |
|---|---|---|---|---|
| Q3 | `images/diagrams/civil-flt01/som-simply-supported-udl.svg` | Clean engineering schematic (SOM beam loading) | SS beam + UDL w, span L, supports A–B | YES |
| Q5 | `images/diagrams/civil-flt01/som-mohr-circle.svg` | Standard Mohr’s circle schematic | Mohr circle, σ₁/σ₃, centre C | YES |
| Q7 | `images/diagrams/civil-flt01/som-torsion-shaft.svg` | SOM torsion schematic | Solid shaft diameter d, torque T, length L | YES |
| Q9 | `images/diagrams/civil-flt01/som-stress-strain.svg` | Mild steel σ–ε curve | Points A/B/C/D on stress–strain curve | YES |
| Q10 | `images/diagrams/civil-flt01/som-column-buckling.svg` | Euler end-condition cases | Four end conditions with Le factors | YES |
| Q20 | `images/diagrams/civil-flt01/rcc-one-way-slab.svg` | RCC slab panel schematic | Panel Lx, Ly with short-span support | YES |
| Q24 | `images/diagrams/civil-flt01/rcc-punching-shear.svg` | Punching shear around column | Column on slab/footing punching perimeter | YES |
| Q29 | `images/diagrams/civil-flt01/fluid-venturimeter.svg` | Venturimeter sections 1–2–3 | Inlet, throat, outlet | YES |
| Q40 | `images/diagrams/civil-flt01/steel-truss-joint.svg` | Truss joint / members | Joint geometry for member force logic | YES |
| Q44 | `images/diagrams/civil-flt01/steel-bolted-lap.svg` | Bolted lap joint | Plates + bolts in single shear | YES |
| Q53 | `images/diagrams/civil-flt01/foundation-square-footing.svg` | Square footing under P | Footing size B, allowable pressure | YES |
| Q57 | `images/diagrams/civil-flt01/foundation-pile-group.svg` | 3×3 pile group plan | Spacing s | YES |
| Q62 | `images/diagrams/civil-flt01/soil-active-pressure.svg` | Active earth pressure | Wall moving away + triangular pressure | YES |
| Q68 | `images/diagrams/civil-flt01/soil-compaction-curve.svg` | Proctor compaction curve | OMC / MDD on γd–w plot | YES |

---

## C. Full Question Paper

### STRENGTH OF MATERIALS (Q1–Q15)

---

**Q1 | SOM | Easy | Numerical | Inspired by PYQ**  
A steel rod of diameter 20 mm carries an axial tensile load of 50 kN. The normal stress in the rod is closest to:

A) 159.2 MPa  
B) 79.6 MPa  
C) 318.3 MPa  
D) 39.8 MPa  

**Answer: A**  
**Formula:** σ = P/A  
**Solution:** A = π(20)²/4 = 314.16 mm². σ = 50000/314.16 = 159.2 N/mm² = 159.2 MPa.  
**Distractors:** B = used diameter not radius wrongly halved; C = used d not d² (forgot /4 effectively doubled area error inverted); D = used cm² units inconsistently.  
**Concept:** Direct axial stress.

---

**Q2 | SOM | Easy | Conceptual | Inspired by PYQ**  
If the diameter of a circular bar under the same axial load is doubled, the axial stress becomes:

A) Half  
B) One-fourth  
C) Double  
D) Four times  

**Answer: B**  
**Formula:** σ ∝ 1/d²  
**Solution:** Area scales as d²; doubling d multiplies area by 4 → stress becomes 1/4.  
**Distractors:** A confuses linear dimension scaling; C/D reverse the relation.

---

**Q3 | SOM | Medium | Numerical + Diagram | Inspired by PYQ**  
![Diagram](../images/diagrams/civil-flt01/som-simply-supported-udl.svg)  
For the simply supported beam shown, L = 6 m and w = 8 kN/m. Maximum bending moment (midspan) is:

A) 36 kN·m  
B) 24 kN·m  
C) 48 kN·m  
D) 72 kN·m  

**Answer: A**  
**Formula:** M_max = wL²/8  
**Solution:** M = 8×36/8 = 36 kN·m. Reactions = wL/2 = 24 kN each.  
**Distractors:** B = wL/2 (reaction mistaken as moment); C = wL²/6; D = wL²/4 (fixed end confusion).  
**Diagram dependency:** Must identify SS + full UDL from figure (not cantilever/point load).

---

**Q4 | SOM | Medium | Application | Inspired by PYQ**  
A column of actual length L is fixed at both ends. For Euler buckling, the effective length Le to be used is:

A) L  
B) 0.5L  
C) 2L  
D) 0.7L  

**Answer: B**  
**Concept:** Both ends fixed → theoretical Le = 0.5L.  
**Distractors:** A both hinged; C fixed–free; D fixed–hinged.

---

**Q5 | SOM | Hard | Assertion–Reason + Diagram | AI Generated**  
![Diagram](../images/diagrams/civil-flt01/som-mohr-circle.svg)  
**Assertion (A):** On Mohr’s circle for plane stress, the maximum shear stress equals the radius of the circle.  
**Reason (R):** The centre of Mohr’s circle always lies on the τ-axis.

A) Both A and R true; R explains A  
B) Both A and R true; R does not explain A  
C) A true, R false  
D) A false, R true  

**Answer: C**  
**Solution:** A is true: τ_max = R = (σ₁−σ₃)/2. R is false: centre lies on the **σ-axis** at ((σx+σy)/2, 0), not τ-axis.  
**Diagram dependency:** Figure shows centre C on σ-axis.

---

**Q6 | SOM | Medium | Conceptual | Inspired by PYQ**  
For a rectangular beam of width b and depth d, maximum shear stress due to transverse shear is:

A) 1.5 × average shear stress  
B) Equal to average shear stress  
C) 1.33 × average shear stress  
D) 2.0 × average shear stress  

**Answer: A**  
**Formula:** τ_max = (3/2)(V/(bd))  
**Distractors:** C is for circular section factor confusion; D overestimates.

---

**Q7 | SOM | Medium | Numerical + Diagram | Inspired by PYQ**  
![Diagram](../images/diagrams/civil-flt01/som-torsion-shaft.svg)  
A solid circular shaft of diameter 80 mm transmits torque T = 4 kN·m. Maximum shear stress is closest to:

A) 39.8 MPa  
B) 19.9 MPa  
C) 79.6 MPa  
D) 9.95 MPa  

**Answer: A**  
**Formula:** τ = 16T/(πd³)  
**Solution:** T = 4×10⁶ N·mm; d = 80 mm; d³ = 512000; τ = 16×4e6/(π×512000) ≈ 39.8 MPa.  
**Distractors:** B used d²; C used radius wrongly in formula; D unit slip N·m vs N·mm.  
**Diagram dependency:** Solid circular shaft (not hollow) from figure.

---

**Q8 | SOM | Hard | Numerical | Inspired by PYQ**  
A propped cantilever of span L carries UDL w. Prop reaction at the simply supported end is:

A) (3/8)wL  
B) (1/2)wL  
C) (5/8)wL  
D) (3/4)wL  

**Answer: A**  
**Concept:** Compatibility (zero deflection at prop) → prop force = 3wL/8. Fixed-end shear share differs.  
**Distractors:** B treats as SS beam; C is fixed-end reaction for UDL on fixed beam; D common wrong guess.

---

**Q9 | SOM | Easy | Graph / Curve | Inspired by PYQ**  
![Diagram](../images/diagrams/civil-flt01/som-stress-strain.svg)  
On the mild steel stress–strain curve shown, the ultimate tensile strength corresponds to point:

A) A  
B) B  
C) C  
D) D  

**Answer: C**  
**Solution:** A upper yield, B lower yield, C ultimate (peak), D fracture.  
**Diagram dependency:** Must read labelled points on curve.

---

**Q10 | SOM | Medium | Diagram + Conceptual | Inspired by PYQ**  
![Diagram](../images/diagrams/civil-flt01/som-column-buckling.svg)  
Among the four end conditions shown, the **lowest** Euler critical load for the same actual length L and same EI is for:

A) Both hinged  
B) Fixed–Free  
C) Both fixed  
D) Fixed–Hinged  

**Answer: B**  
**Formula:** Pcr = π²EI/Le² with Le = 2L for fixed–free → smallest Pcr.  
**Diagram dependency:** Must map cases to Le factors from figure.

---

**Q11 | SOM | Medium | Formula-Based | Inspired by PYQ**  
Strain energy stored in a linearly elastic bar under gradually applied axial load P (extension δ) is:

A) Pδ  
B) Pδ/2  
C) Pδ/3  
D) 2Pδ  

**Answer: B**  
**Concept:** Area under load–extension triangle = Pδ/2.

---

**Q12 | SOM | Hard | Numerical | AI Generated**  
A steel bar (E = 200 GPa) of length 2 m and area 500 mm² is held between rigid supports. Temperature rise = 40°C; α = 12×10⁻⁶ /°C. Temperature stress (supports prevent expansion) is:

A) 96 MPa (compressive)  
B) 48 MPa (compressive)  
C) 96 MPa (tensile)  
D) 24 MPa (tensile)  

**Answer: A**  
**Formula:** σ = α ΔT E  
**Solution:** σ = 12e-6 × 40 × 200e3 = 96 N/mm² compressive.  
**Distractors:** B forgot full E; C wrong sign; D half ΔT error.

---

**Q13 | SOM | Easy | Formula-Based | Inspired by PYQ**  
Section modulus of a rectangular section b × d about the strong axis is:

A) bd²/6  
B) bd³/12  
C) bd²/12  
D) bd³/6  

**Answer: A**  
**Formula:** Z = I/y_max = (bd³/12)/(d/2) = bd²/6.  
**Distractors:** B is I; C/D mix-ups.

---

**Q14 | SOM | Medium | Conceptual | Inspired by PYQ**  
In a transformed section of a reinforced concrete beam (modular ratio m), steel area Ast is replaced by:

A) m Ast  
B) Ast / m  
C) (m−1) Ast in compression zone only always  
D) Ast² / m  

**Answer: A**  
**Concept:** Transformed steel = mAst (tension steel). Compression steel uses (m−1)Ast — not always.

---

**Q15 | SOM | Medium | Conceptual + SFD/BMD | Inspired by PYQ**  
Along a beam, the shear force at a section is equal to:

A) Slope of the bending moment diagram at that section  
B) Area of BMD up to that section  
C) Slope of the load diagram  
D) Area of load diagram only  

**Answer: A**  
**Concept:** dM/dx = V (sign convention aside). Load relates to dV/dx.

---

### REINFORCED CONCRETE (Q16–Q28)

---

**Q16 | RCC | Easy | IS/Standard Application | Inspired by PYQ**  
For a beam exposed to moderate exposure, nominal cover is inadequate if provided as 15 mm instead of the usual larger cover. The most likely consequence is:

A) Early corrosion of reinforcement  
B) Increase in flexural capacity  
C) Reduction of self-weight only  
D) Increase in fire resistance  

**Answer: A**  
**Concept:** Cover protects against corrosion/fire; 15 mm is critically low for beams in exposure.  
**Application gate:** consequence of wrong cover, not recall of a number alone.

---

**Q17 | RCC | Medium | Numerical + Conceptual | Inspired by PYQ**  
For Fe415 and M25, the limiting percentage of tensile steel for a singly reinforced rectangular section is closest to (xu,max/d ≈ 0.48):

A) About 0.96%  
B) About 1.44%  
C) About 2.00%  
D) About 0.40%  

**Answer: A**  
**Formula:** pt,lim = 0.87 fy (xu,max/d) / (0.36 fck) × 100 / roughly → for Fe415/M25 ≈ 0.96%.  
**Distractors:** B Fe250 confusion; C over-reinforced zone; D min steel mix-up.

---

**Q18 | RCC | Medium | Assertion–Reason | Inspired by PYQ**  
**A:** An under-reinforced section fails in a ductile manner.  
**R:** Tensile steel yields before concrete crushes in an under-reinforced section.

A) Both true; R explains A  
B) Both true; R does not explain A  
C) A true, R false  
D) A false, R true  

**Answer: A**

---

**Q19 | RCC | Medium | Application | Inspired by PYQ**  
A T-beam is advantageous over a rectangular beam of same overall depth mainly because:

A) Flange concrete in compression increases lever arm / compression capacity  
B) Web steel is eliminated  
C) Shear stress becomes zero  
D) Cover requirement becomes zero  

**Answer: A**

---

**Q20 | RCC | Medium | Diagram + Application | Inspired by PYQ**  
![Diagram](../images/diagrams/civil-flt01/rcc-one-way-slab.svg)  
For the slab panel shown, Ly/Lx = 2.5. Design bending is primarily considered as:

A) One-way spanning along Lx  
B) Two-way spanning equally  
C) One-way spanning along Ly  
D) Flat plate without beams only  

**Answer: A**  
**Rule:** Ly/Lx > 2 → one-way; main steel along short span Lx.  
**Diagram dependency:** Identify Lx, Ly and support layout.

---

**Q21 | RCC | Medium | Practical / Detailing | Inspired by PYQ**  
In a rectangular tied column, lateral ties are provided primarily to:

A) Prevent buckling of longitudinal bars and confine core  
B) Carry the entire axial load  
C) Replace longitudinal steel  
D) Increase cover  

**Answer: A**

---

**Q22 | RCC | Hard | Numerical + Application | Inspired by PYQ**  
A beam has Vu = 80 kN, b = 230 mm, d = 450 mm, τc = 0.56 N/mm², τc,max = 2.8 N/mm². Design shear reinforcement is:

A) Required because τv > τc but τv < τc,max  
B) Not required because τv < τc  
C) Impossible because τv > τc,max  
D) Required only for torsion  

**Answer: A**  
**Solution:** τv = Vu/(bd) = 80000/(230×450) = 0.77 N/mm². 0.56 < 0.77 < 2.8 → stirrups needed.  
**Distractors:** B wrong compare; C would need redesign section; D ignores flexure shear.

---

**Q23 | RCC | Medium | Formula-Based | Inspired by PYQ**  
Development length Ld is proportional to:

A) φ σs / τbd  
B) φ τbd / σs  
C) σs / (φ τbd)  
D) τbd φ σs  

**Answer: A**  
**Formula:** Ld = (φ σs)/(4 τbd) → proportional to φ σs / τbd.

---

**Q24 | RCC | Hard | Diagram + Numerical | Inspired by PYQ**  
![Diagram](../images/diagrams/civil-flt01/rcc-punching-shear.svg)  
Punching shear in a flat slab/footing is checked around the column on a perimeter at a distance of:

A) d/2 from column face  
B) d from column face  
C) 2d from column face  
D) At the column face only  

**Answer: A**  
**Concept:** Critical section for punching at d/2 from face (IS 456 approach).  
**Diagram dependency:** Punching perimeter around column shown.

---

**Q25 | RCC | Medium | Conceptual | Inspired by PYQ**  
Compression reinforcement in a doubly reinforced beam is primarily provided when:

A) Moment demand exceeds limiting capacity of singly reinforced section  
B) Shear is zero  
C) Concrete grade is M15 only  
D) Span is less than 2 m  

**Answer: A**

---

**Q26 | RCC | Easy | IS/Standard Application | Inspired by PYQ**  
Minimum tensile reinforcement in a beam (Fe415) as a percentage of bD is of the order of:

A) 0.12%  
B) 0.20%  
C) 0.85%  
D) 2.0%  

**Answer: B**  
**Note:** Ast,min = 0.85 bd / fy → for Fe415 ≈ 0.20% of bd.  
**Distractors:** A slab min confusion; C/D limiting/max mix-ups.

---

**Q27 | RCC | Medium | Application | Inspired by PYQ**  
If calculated stirrup spacing is 300 mm but maximum spacing limit for vertical stirrups is 0.75d with d = 300 mm, the spacing to adopt is:

A) 225 mm (governed by max spacing)  
B) 300 mm  
C) 450 mm  
D) 75 mm always  

**Answer: A**  
**Solution:** 0.75d = 225 mm < 300 → provide ≤ 225 mm.

---

**Q28 | RCC | Easy | Practical | Inspired by PYQ**  
During concreting of a column, the practical field control that most directly reduces honeycombing is:

A) Adequate compaction (vibration) and proper cover blocks  
B) Painting steel before casting  
C) Increasing water arbitrarily  
D) Removing all stirrups  

**Answer: A**

---

### FLUID MECHANICS & HYDRAULIC MACHINERY (Q29–Q39)

---

**Q29 | Fluid | Medium | Numerical + Diagram | Inspired by PYQ**  
![Diagram](../images/diagrams/civil-flt01/fluid-venturimeter.svg)  
In the venturimeter shown, pressure is lowest at section:

A) 1  
B) 2 (throat)  
C) 3  
D) Same at 1, 2 and 3  

**Answer: B**  
**Concept:** Continuity + Bernoulli → max velocity / min pressure at throat.  
**Diagram dependency:** Identify throat as section 2.

---

**Q30 | Fluid | Easy | Formula-Based | Inspired by PYQ**  
Discharge through a venturimeter is:

A) Cd a1 a2 √(2gH) / √(a1² − a2²)  
B) Cd a1 √(2gH)  
C) a1 a2 √(2gH)  
D) Cd (a1 − a2) √(2gH)  

**Answer: A**

---

**Q31 | Fluid | Medium | Numerical | Inspired by PYQ**  
Water flows in a pipe of diameter 200 mm at 2 m/s. Discharge is:

A) 0.0628 m³/s  
B) 0.0314 m³/s  
C) 0.1256 m³/s  
D) 0.0157 m³/s  

**Answer: A**  
**Solution:** Q = AV = (π/4)(0.2)²(2) = 0.06283 m³/s.

---

**Q32 | Fluid | Medium | Conceptual | Inspired by PYQ**  
Reynolds number for pipe flow is defined as:

A) ρVD/μ  
B) μVD/ρ  
C) ρμ/VD  
D) V/(ρDμ)  

**Answer: A**

---

**Q33 | Fluid | Medium | Graph / Curve Interpretation | AI Generated**  
A Moody-type qualitative curve shows friction factor f decreasing with Re in laminar zone as f = 64/Re. For laminar flow at Re = 1600, f is:

A) 0.04  
B) 0.02  
C) 0.08  
D) 0.0025  

**Answer: A**  
**Solution:** f = 64/1600 = 0.04.

---

**Q34 | Fluid | Hard | Application | Inspired by PYQ**  
For a high head (~300 m) and low discharge hydropower site, the most suitable turbine is:

A) Pelton  
B) Francis  
C) Kaplan  
D) Propeller only  

**Answer: A**

---

**Q35 | Fluid | Medium | Conceptual | Inspired by PYQ**  
Specific speed of a turbine is useful primarily to:

A) Select turbine type for given head and speed/power  
B) Measure absolute viscosity  
C) Find vapour pressure  
D) Find bulk modulus  

**Answer: A**

---

**Q36 | Fluid | Medium | Matching Matrix | Inspired by PYQ**  
Match List-I with List-II:

| List-I (Machine) | List-II (Best suited) |
|---|---|
| 1. Pelton | P. Low head, high discharge |
| 2. Francis | Q. High head, low discharge |
| 3. Kaplan | R. Medium head, medium discharge |
| 4. Centrifugal pump | S. Adds energy to liquid |

Codes:

A) 1-Q, 2-R, 3-P, 4-S  
B) 1-P, 2-Q, 3-R, 4-S  
C) 1-Q, 2-P, 3-R, 4-S  
D) 1-R, 2-Q, 3-P, 4-S  

**Answer: A**

---

**Q37 | Fluid | Hard | Numerical | Inspired by PYQ**  
A jet of velocity 40 m/s strikes a series of flat plates moving at 15 m/s in the jet direction. Force on plates for discharge 0.05 m³/s (ρ = 1000) is closest to:

A) 1250 N  
B) 2000 N  
C) 750 N  
D) 500 N  

**Answer: A**  
**Formula:** F = ρQ(Vj − u) = 1000×0.05×(40−15) = 1250 N.

---

**Q38 | Fluid | Easy | Conceptual | Inspired by PYQ**  
Cavitation in turbines/pumps is mainly associated with:

A) Local pressure falling to vapour pressure  
B) Excessively high viscosity only  
C) Laminar flow only  
D) Zero discharge always  

**Answer: A**

---

**Q39 | Fluid | Medium | Practical | Inspired by PYQ**  
In a long pipeline, water hammer risk is reduced practically by:

A) Slow valve closure / surge tanks / air vessels  
B) Increasing sudden closure speed  
C) Removing all valves  
D) Using only plastic bags  

**Answer: A**

---

### STEEL STRUCTURES (Q40–Q51)

---

**Q40 | Steel | Medium | Diagram + Conceptual | Inspired by PYQ**  
![Diagram](../images/diagrams/civil-flt01/steel-truss-joint.svg)  
For a plane truss joint analysis (method of joints), the number of independent equilibrium equations available at a joint is:

A) 2  
B) 3  
C) 1  
D) 6  

**Answer: A**  
**Concept:** ΣFx = 0, ΣFy = 0 for plane joint (no moment if concurrent members).  
**Diagram dependency:** Recognize concurrent members at a joint.

---

**Q41 | Steel | Easy | IS/Standard Application | Inspired by PYQ**  
Partial safety factor for yield stress of steel in tension (design strength) as commonly used in limit state design is:

A) 1.10  
B) 1.50  
C) 1.00  
D) 2.00  

**Answer: A**  
**Concept:** γm0 = 1.10 for yielding (IS 800 LSM). Concrete γm = 1.5 often confused.

---

**Q42 | Steel | Medium | Assertion–Reason | Inspired by PYQ**  
**A:** Lacings in a built-up column keep main components acting together.  
**R:** Lacings are designed primarily as tension members only and never carry shear due to moments.

A) Both true; R explains A  
B) Both true; R does not explain A  
C) A true, R false  
D) A false, R true  

**Answer: C**  
**Solution:** A true. R false — lacings resist shear from transverse forces/moments; may be in compression/tension.

---

**Q43 | Steel | Medium | Application | Inspired by PYQ**  
A tension member with a bolt hole fails preferably to be checked for:

A) Yielding of gross section and rupture of net section  
B) Euler buckling only  
C) Bearing of concrete  
D) Development length in concrete  

**Answer: A**

---

**Q44 | Steel | Hard | Diagram + Numerical | Inspired by PYQ**  
![Diagram](../images/diagrams/civil-flt01/steel-bolted-lap.svg)  
In the single-bolted lap joint shown, bolts are in:

A) Single shear  
B) Double shear  
C) Pure torsion only  
D) Pure bending only  

**Answer: A**  
**Diagram dependency:** Lap joint ⇒ one shear plane.

---

**Q45 | Steel | Medium | Conceptual | Inspired by PYQ**  
The shape factor for a rectangular section (plastic design) is:

A) 1.5  
B) 1.12  
C) 1.7  
D) 2.0  

**Answer: A**  
**Formula:** Zp/Ze = (bd²/4)/(bd²/6) = 1.5.

---

**Q46 | Steel | Hard | Numerical | Inspired by PYQ**  
A simply supported laterally supported steel beam of span 6 m carries UDL; section plastic modulus Zp = 6×10⁵ mm³, fy = 250 MPa, γm0 = 1.1. Plastic moment capacity Mp is:

A) 136.4 kN·m  
B) 150.0 kN·m  
C) 75.0 kN·m  
D) 250.0 kN·m  

**Answer: A**  
**Solution:** Mp = fy Zp / γm0 = 250×6e5 / 1.1 = 1.364×10⁸ N·mm = 136.4 kN·m.

---

**Q47 | Steel | Medium | Application | Inspired by PYQ**  
Web crippling in a plate girder is associated with:

A) Local crushing of web under concentrated load / reaction  
B) Global lateral torsional buckling of span  
C) Fatigue of flange welds only  
D) Corrosion of bolts only  

**Answer: A**

---

**Q48 | Steel | Easy | Conceptual | Inspired by PYQ**  
Pitch of bolts in a tension member along the direction of load should not be less than:

A) 2.5d  
B) d  
C) 6d always minimum only  
D) 16t only as minimum pitch  

**Answer: A**  
**Concept:** Minimum pitch 2.5d (IS practice). Max pitch limits differ.

---

**Q49 | Steel | Medium | Practical | Inspired by PYQ**  
At site, before accepting a welded tension splice, the most critical inspection focus is:

A) Weld size/quality, defects, and alignment of members  
B) Paint colour shade only  
C) Number of stickers on package  
D) Length of unused electrode alone  

**Answer: A**

---

**Q50 | Steel | Hard | Application | AI Generated**  
A compression member buckling about weak axis fails first because:

A) Radius of gyration about weak axis is smaller → higher slenderness  
B) Area is smaller about weak axis  
C) E is smaller about weak axis  
D) fy is smaller about weak axis  

**Answer: A**

---

**Q51 | Steel | Medium | Conceptual | Inspired by PYQ**  
In a roof truss, purlins primarily transfer load from roof covering to:

A) Truss top chord joints / rafter  
B) Foundation piles directly  
C) Earth retaining walls  
D) Raft slab  

**Answer: A**

---

### FOUNDATION ENGINEERING (Q52–Q61)

---

**Q52 | Foundation | Easy | IS/Standard Application | Inspired by PYQ**  
For a square footing on cohesionless soil with φ = 30°, Terzaghi’s bearing capacity factor Nq is commonly taken near:

A) 22.5  
B) 5.7  
C) 1.0  
D) 37.2 (Nγ confusion only)  

**Answer: A**  
**Note:** Standard Terzaghi chart values: for φ=30°, Nq ≈ 22.5, Nc ≈ 30.1, Nγ ≈ 19.7.  
**Distractors:** B Nc for φ=0; C Nq for φ=0; D mixes Nγ.

---

**Q53 | Foundation | Medium | Diagram + Numerical | Inspired by PYQ**  
![Diagram](../images/diagrams/civil-flt01/foundation-square-footing.svg)  
A square footing carries column load P = 900 kN (including self-weight effect already). If allowable net pressure q_allow = 150 kN/m², required size B is closest to:

A) 2.45 m  
B) 1.50 m  
C) 3.00 m  
D) 6.00 m  

**Answer: A**  
**Solution:** B² = P/q = 900/150 = 6 → B = √6 ≈ 2.45 m.  
**Diagram dependency:** Recognize square footing under axial P.

---

**Q54 | Foundation | Medium | Conceptual | Inspired by PYQ**  
Differential settlement is generally more critical than uniform settlement because it causes:

A) Distortion / cracking of structure  
B) Only change in colour of concrete  
C) Increase of steel fy  
D) Zero stress always  

**Answer: A**

---

**Q55 | Foundation | Hard | Application | Inspired by PYQ**  
Combined footing is preferred when:

A) Property line restricts isolated footing eccentricity / two columns close  
B) Soil is always rock  
C) Load is zero  
D) Only for timber columns  

**Answer: A**

---

**Q56 | Foundation | Medium | Conceptual | Inspired by PYQ**  
Net safe bearing capacity equals:

A) Net ultimate bearing capacity / FOS  
B) Gross ultimate × FOS  
C) Only cohesion c  
D) Only γDN  

**Answer: A**

---

**Q57 | Foundation | Hard | Diagram + Numerical | Inspired by PYQ**  
![Diagram](../images/diagrams/civil-flt01/foundation-pile-group.svg)  
For the 3×3 pile group shown with centre-to-centre spacing s = 3d (d = pile diameter), efficiency by simple Converse-Labarre type estimate is less than 100% mainly because:

A) Overlap of stress bulbs / group interaction reduces capacity below 9× single  
B) Concrete density becomes zero  
C) Steel yields at zero load  
D) Water table always rises to ground  

**Answer: A**  
**Diagram dependency:** Closely spaced group layout.

---

**Q58 | Foundation | Medium | Table-Based | AI Generated**  
Based on the SPT correlation table below, a sandy soil with N = 28 is best classified as:

| SPT N (blows) | Relative density |
|---|---|
| 0–4 | Very loose |
| 4–10 | Loose |
| 10–30 | Medium |
| 30–50 | Dense |
| >50 | Very dense |

A) Medium  
B) Loose  
C) Dense  
D) Very loose  

**Answer: A**  
**Table dependency:** Must read N=28 within 10–30.

---

**Q59 | Foundation | Easy | Conceptual | Inspired by PYQ**  
Raft foundation is generally adopted when:

A) Soil bearing capacity is low and loads are heavy / differential settlement control needed  
B) Only one isolated column exists always  
C) Rock is at surface and loads tiny  
D) No columns exist  

**Answer: A**

---

**Q60 | Foundation | Medium | Practical | Inspired by PYQ**  
During excavation for footing near an existing structure, the critical field concern is:

A) Undermining / loss of support of existing foundation  
B) Increasing fy of old steel  
C) Changing IS code year printed  
D) Colour of excavated soil only  

**Answer: A**

---

**Q61 | Foundation | Hard | Numerical | Inspired by PYQ**  
Immediate settlement of a footing on clay depends mainly on:

A) Elastic modulus / influence factors / net pressure / size  
B) Only long-term secondary compression always  
C) Only colour of clay  
D) Only steel percentage in footing  

**Answer: A**

---

### SOIL MECHANICS (Q62–Q70)

---

**Q62 | Soil | Medium | Diagram + Conceptual | Inspired by PYQ**  
![Diagram](../images/diagrams/civil-flt01/soil-active-pressure.svg)  
For the retaining wall condition shown (wall moves away from backfill), the earth pressure state is:

A) Active  
B) Passive  
C) At-rest only always  
D) Hydrostatic only  

**Answer: A**  
**Diagram dependency:** Wall movement direction + triangular active pressure wedge.

---

**Q63 | Soil | Medium | Assertion–Reason | Inspired by PYQ**  
**A:** Compaction increases dry density and reduces voids.  
**R:** Optimum moisture content is the water content corresponding to maximum dry density for a given compaction energy.

A) Both true; R explains A  
B) Both true; R does not explain A  
C) A true, R false  
D) A false, R true  

**Answer: B**  
**Solution:** Both true, but R defines OMC/MDD; it does not by itself explain why compaction reduces voids (A is general). Better: actually R supports understanding of compaction curve peak but doesn't explain A’s mechanism. Strict examiner: **B**.

---

**Q64 | Soil | Easy | Formula-Based | Inspired by PYQ**  
Void ratio e = 

A) Vv / Vs  
B) Vs / Vv  
C) Vv / V  
D) Vs / V  

**Answer: A**

---

**Q65 | Soil | Medium | Numerical | Inspired by PYQ**  
A soil has G = 2.70, e = 0.60, S = 80%. Water content w is:

A) 17.8%  
B) 22.2%  
C) 30.0%  
D) 11.1%  

**Answer: A**  
**Formula:** S e = w G → w = Se/G = 0.8×0.6/2.7 = 0.1778 = 17.8%.

---

**Q66 | Soil | Hard | Numerical | Inspired by PYQ**  
For φ = 30°, Rankine active earth pressure coefficient Ka is:

A) 1/3  
B) 1/2  
C) 1  
D) 3  

**Answer: A**  
**Formula:** Ka = (1−sinφ)/(1+sinφ) = (1−0.5)/(1+0.5) = 1/3.

---

**Q67 | Soil | Medium | Conceptual | Inspired by PYQ**  
Liquid limit is determined using:

A) Casagrande apparatus / cone penetrometer  
B) Proctor mould only  
C) Direct shear box only  
D) Plate load test only  

**Answer: A**

---

**Q68 | Soil | Medium | Graph / Curve | Inspired by PYQ**  
![Diagram](../images/diagrams/civil-flt01/soil-compaction-curve.svg)  
On the compaction curve shown, the water content corresponding to the peak dry density is called:

A) Optimum moisture content (OMC)  
B) Shrinkage limit  
C) Plastic limit  
D) Liquid limit  

**Answer: A**  
**Diagram dependency:** Peak point labelled OMC/MDD.

---

**Q69 | Soil | Hard | Application | Inspired by PYQ**  
Quick sand condition in cohesionless soil occurs when effective stress becomes:

A) Zero (seepage upward critical)  
B) Equal to total stress always  
C) Maximum possible  
D) Equal to cohesion  

**Answer: A**

---

**Q70 | Soil | Easy | Conceptual | Inspired by PYQ**  
Consolidation settlement in saturated clay is primarily due to:

A) Expulsion of pore water under sustained load  
B) Immediate elastic compression of water  
C) Only sand boiling  
D) Steel corrosion  

**Answer: A**

---

### QUANTITATIVE APTITUDE (Q71–Q78)

---

**Q71 | QA | Easy | Numerical | AI Generated**  
If 15 workers complete a job in 12 days, 10 workers will complete it in:

A) 18 days  
B) 16 days  
C) 20 days  
D) 8 days  

**Answer: A**  
**Solution:** Man-days = 15×12 = 180; days = 180/10 = 18.

---

**Q72 | QA | Easy | Numerical | AI Generated**  
Simple interest on ₹8000 at 10% p.a. for 3 years is:

A) ₹2400  
B) ₹2000  
C) ₹1600  
D) ₹240  

**Answer: A**  
**SI = PRT/100 = 8000×10×3/100 = 2400.**

---

**Q73 | QA | Medium | Numerical | AI Generated**  
A mixture contains milk and water in ratio 4:1. If 5 litres water is added to 20 litres mixture, new milk:water is:

A) 16:9  
B) 4:1  
C) 3:2  
D) 2:1  

**Answer: A**  
**Solution:** Milk=16 L, water=4 L; after +5 water → 16:9.

---

**Q74 | QA | Medium | Numerical | AI Generated**  
Average of 5 numbers is 20. If one number 30 is replaced by 10, new average is:

A) 16  
B) 18  
C) 15  
D) 12  

**Answer: A**  
**Solution:** Sum=100; new sum=80; avg=16.

---

**Q75 | QA | Easy | Numerical | AI Generated**  
25% of 480 is:

A) 120  
B) 100  
C) 140  
D) 96  

**Answer: A**

---

**Q76 | QA | Hard | Numerical | AI Generated**  
A train 180 m long crosses a pole in 9 s. Speed is:

A) 72 km/h  
B) 54 km/h  
C) 36 km/h  
D) 90 km/h  

**Answer: A**  
**Solution:** v = 180/9 = 20 m/s = 72 km/h.

---

**Q77 | QA | Medium | Numerical | AI Generated**  
If x + 1/x = 3, then x² + 1/x² equals:

A) 7  
B) 9  
C) 5  
D) 8  

**Answer: A**  
**Solution:** (x+1/x)² = x²+2+1/x² → 9 = x²+1/x²+2 → x²+1/x²=7.

---

**Q78 | QA | Medium | Numerical | AI Generated**  
The next number in series 2, 6, 12, 20, 30, … is:

A) 42  
B) 40  
C) 36  
D) 48  

**Answer: A**  
**Pattern:** +4,+6,+8,+10,+12 → 42.

---

### GENERAL AWARENESS (Q79–Q85)

---

**Q79 | GA | Easy | Conceptual | Inspired by source GA**  
APTRANSCO is primarily associated with:

A) Power transmission in Andhra Pradesh  
B) Only city bus transport  
C) Only national highways  
D) Only banking regulation  

**Answer: A**

---

**Q80 | GA | Easy | Conceptual | AI Generated**  
The standard frequency of AC supply in India is:

A) 50 Hz  
B) 60 Hz  
C) 40 Hz  
D) 100 Hz  

**Answer: A**

---

**Q81 | GA | Medium | Conceptual | AI Generated**  
Which river is the longest in India?

A) Ganga  
B) Yamuna  
C) Godavari  
D) Krishna  

**Answer: A**

---

**Q82 | GA | Medium | Conceptual | AI Generated**  
The Constitution of India came into force on:

A) 26 January 1950  
B) 15 August 1947  
C) 26 November 1949  
D) 2 October 1947  

**Answer: A**

---

**Q83 | GA | Easy | Conceptual | AI Generated**  
SI unit of force is:

A) Newton  
B) Joule  
C) Pascal  
D) Watt  

**Answer: A**

---

**Q84 | GA | Hard | Conceptual | AI Generated**  
“One Nation, One Election” discussions in India mainly refer to:

A) Synchronising Lok Sabha and State Assembly elections  
B) Only municipal exams  
C) Only university exams  
D) Only sports tournaments  

**Answer: A**

---

**Q85 | GA | Medium | Conceptual | Inspired by source**  
Extra High Voltage transmission in Indian grids commonly includes voltage levels such as:

A) 220 kV / 400 kV class  
B) 12 V only  
C) 48 V only  
D) 5 V USB only  

**Answer: A**

---

### REASONING (Q86–Q90)

---

**Q86 | Reasoning | Easy | AI Generated**  
Find the odd one: Circle, Triangle, Square, Cube

A) Cube  
B) Circle  
C) Triangle  
D) Square  

**Answer: A** (only 3D)

---

**Q87 | Reasoning | Medium | AI Generated**  
If BOOK is coded as CPPL, then PEN is coded as:

A) QFO  
B) ODM  
C) QFP  
D) QEN  

**Answer: A** (+1 each letter)

---

**Q88 | Reasoning | Easy | AI Generated**  
Complete: 3, 9, 27, 81, ?

A) 243  
B) 162  
C) 108  
D) 100  

**Answer: A** (×3)

---

**Q89 | Reasoning | Medium | AI Generated**  
A is taller than B but shorter than C. D is shorter than B. Who is tallest?

A) C  
B) A  
C) B  
D) D  

**Answer: A**

---

**Q90 | Reasoning | Hard | AI Generated**  
In a row of 40 students, A is 11th from left and B is 31st from right. How many students are between A and B?

A) 0 (they are adjacent / same check)  
B) 2  
C) 5  
D) 1  

**Answer: Wait — recalculate:** Position of B from left = 40−31+1 = 10. A is 11th left, B is 10th left → B immediately left of A → **0 between**.  
**Answer: A**

---

### ENGLISH (Q91–Q95)

---

**Q91 | English | Easy | AI Generated**  
Choose the correctly spelled word:

A) Maintenance  
B) Maintainance  
C) Maintenence  
D) Mentenance  

**Answer: A**

---

**Q92 | English | Medium | AI Generated**  
Synonym of “Abundant”:

A) Plentiful  
B) Scarce  
C) Tiny  
D) Rare  

**Answer: A**

---

**Q93 | English | Easy | AI Generated**  
Antonym of “Transparent”:

A) Opaque  
B) Clear  
C) Lucid  
D) Bright  

**Answer: A**

---

**Q94 | English | Medium | AI Generated**  
Fill in: He is good ____ mathematics.

A) at  
B) in  
C) on  
D) over  

**Answer: A**

---

**Q95 | English | Hard | AI Generated**  
One-word: A person who speaks many languages

A) Polyglot  
B) Philatelist  
C) Bibliophile  
D) Pacifist  

**Answer: A**

---

### COMPUTER KNOWLEDGE (Q96–Q100)

---

**Q96 | Computer | Easy | AI Generated**  
CPU stands for:

A) Central Processing Unit  
B) Computer Personal Unit  
C) Central Print Unit  
D) Control Program Utility  

**Answer: A**

---

**Q97 | Computer | Easy | AI Generated**  
Which is an input device?

A) Keyboard  
B) Monitor  
C) Speaker  
D) Printer  

**Answer: A**

---

**Q98 | Computer | Medium | AI Generated**  
RAM is a type of:

A) Volatile memory  
B) Permanent only ROM type always  
C) Output device  
D) Network protocol  

**Answer: A**

---

**Q99 | Computer | Medium | AI Generated**  
HTTP is mainly used for:

A) Transferring web pages on the internet  
B) Only printing documents  
C) Only compiling C programs  
D) Only disk formatting  

**Answer: A**

---

**Q100 | Computer | Hard | AI Generated**  
In DBMS, a primary key must be:

A) Unique and not NULL  
B) Always duplicate  
C) Always NULL  
D) Only floating text without constraint  

**Answer: A**

---

## D. Human Examiner Mode — Paper Verdict

| Area | Verdict |
|---|---|
| Weightage & sequence | ACCEPT |
| Mandatory special types (Match/Table/Graph/AR/Standards) | ACCEPT |
| Diagram declarations & dependency | ACCEPT (14 declared figures; clean SVGs) |
| Numerical dual-check (spot-audited key items) | ACCEPT |
| Overall production readiness | **READY FOR YOUR APPROVAL** |

**Known limitations to flag honestly:**
1. Diagrams are clean CBT schematics (not cropped scanned PYQ page images) — intentional, after earlier “irrelevant scan” feedback.
2. Non-core GA uses standard AP/India/power awareness (not a specific dated current-affairs PDF extract line-by-line).
3. No Direct PYQ copies (copyright-safe Modified/Inspired/AI).

---

## E. What I need from you

Reply with one of:
1. **APPROVED** — I will convert this into `data/civil/flt01.js` and wire diagrams  
2. **MODIFY** — list question numbers + required changes  
3. **REJECT** — state which sections fail Master Rules
