# Elimination Rules Playbook (Evidence-Based)

> **Purpose:** Last-resort MCQ elimination when full solve is slow.  
> **Basis:** Patterns attested in ST-HY packs, FLT banks, MASTER distractor rules, and VALID PYQ inventory — not folklore (“always pick C”).  
> **Publication gate:** A rule is an **established heuristic** only if it has **≥ 15 independent evidence questions** (FLT + Subject Test + VALID PYQ). Target band for a healthy rule: **15–20+** examples. Rules below this floor are **not published** as established heuristics.

> **Use order:** Solve first → if stuck, apply the matching rule → only then guess among survivors.

## Evidence corpus

| Source | Count |
|---|---:|
| Question banks loaded (ST + FLT) | 1150 Q across 19 files |
| VALID PYQ diagram MCQs (inventory) | 234 |
| MASTER | Golden Rule 3 — Distractor Engineering |
| **Established heuristics published** | **17** (each ≥15 independent hits) |
| Held as insufficient-evidence drafts | 3 |

## Established heuristics — index

| Playbook # | Internal id | Title | Independent evidence (bank+PYQ) |
|---:|---:|---|---:|
| 1 | 2 | Diameter ↔ radius / area geometry slip | 129 |
| 2 | 3 | Service vs factored / partial-factor mix | 104 |
| 3 | 4 | Gross vs net / hole deduction | 95 |
| 4 | 5 | Cover vs effective depth | 40 |
| 5 | 6 | Per-unit base-change scaling | 95 |
| 6 | 8 | Sequence-network connection by fault type | 25 |
| 7 | 9 | √3 / phase-factor forgotten | 24 |
| 8 | 10 | Thevenin / Norton source deactivation | 18 |
| 9 | 11 | Resonance / X_L = X_C identity | 47 |
| 10 | 12 | Sign / sense / tension–compression flip | 270 |
| 11 | 13 | Figure-dependency: cover the figure test | 304 |
| 12 | 14 | Rankine / Terzaghi / earth-pressure term drop | 86 |
| 13 | 15 | Mohr / principal-stress pair consistency | 26 |
| 14 | 16 | SFD↔BMD jump / couple vs point-load confusion | 39 |
| 15 | 18 | SCR / PE latching vs holding vs firing | 18 |
| 16 | 19 | Non-core: option that abandons the asked operation | 37 |
| 17 | 20 | Last-resort: dimensional / absurdity cull (evidence-limited) | 232 |

## How to use this file

1. Classify the stuck item (Civil / EE / Non-core + topic cue).
2. Jump to the rule whose **When** matches (established section only).
3. Apply **How** to strike options.
4. Cross-check with listed **Evidence questions** (same trap family).
5. If two options remain, prefer a units/figure cull among *established* rules that apply — never a letter-position myth.
6. **Drill tests (50 Q per ≤5 rules):** see `exports/elimination_drills/` — jumbled papers with source exam/reference and elimination-only keys.

---

# Part A — Established elimination heuristics

## Elimination Rule 1 — Diameter ↔ radius / area geometry slip

**Evidence status:** ESTABLISHED (≥15; independent hits = **129** = 125 bank + 4 VALID PYQ)  
**Streams:** Civil, Electrical  
**When:** Circular section, shaft, hanger, pipe, or bolt with diameter given in mm.  
**How:** Compute A = πd²/4 (or r = d/2) once on scratch paper. Eliminate options that match P/(πd²), P/(πr), or treating d as r.

**Evidence questions (25 shown of 129 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/civil/ce-flt01.js#Q1` | bank | Civil FLT-01 | Strength of Materials | Following a gantry-tie inspection at a substation, the engineer records a 20 mm diamete… | A |
| `data/civil/ce-flt02.js#Q1` | bank | Civil FLT-02 | Strength of Materials | A 2.0 m long steel tie of uniform 500 mm² area carries a gradually applied 50 kN servic… | C |
| `data/civil/st/ce-st-fm-01.js#Q2` | bank | Civil ST-FM | Fluid Mechanics and Hy | Water flows in a 0.2 m diameter pipe at mean velocity 4 m/s. Discharge is closest to: | A |
| `data/civil/st/ce-st-rcc-01.js#Q1` | bank | Civil ST-RCC | Reinforced Concrete | An RCC beam of M25 and Fe500 has factored Mu = 180 kN m, b = 230 mm and d = 450 mm. Usi… | B |
| `data/civil/st/ce-st-som-01.js#Q1` | bank | Civil ST-SOM | Strength of Materials | A steel rod 20 mm in diameter and 2 m long carries 40 kN tension. Taking E = 200 GPa, i… | B |
| `data/civil/st/ce-st-steel-01.js#Q1` | bank | Civil ST-STEEL | Steel Structures | A 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. … | B |
| `data/electrical/ee-flt02.js#Q6` | bank | Electrical FLT-02 | Power Systems | Corona loss on EHV lines increases most when: | C |
| `data/electrical/st/ee-st-ps-01.js#Q10` | bank | Electrical ST-PS | Power Systems + Utiliz | Corona loss increases when: | D |
| `PYQ:CE_1.pdf#Q7` | pyq | Board VALID PYQ · CE_1.pdf | Civil | In the given figure, 𝑃𝑄 ̅̅̅̅ is the diameter of a circle with center 𝑂. Two points 𝑅 an… | — |
| `PYQ:CE_2.pdf#Q8` | pyq | Board VALID PYQ · CE_2.pdf | Civil | Consider a string P of length 𝑙 that is laid out as a straight-line segment. Another st… | — |
| `PYQ:2023EE.pdf#Q10` | pyq | Board VALID PYQ · 2023EE.pdf | Electrical | A square with sides of length 6 cm is given. The boundary of the shaded region is defin… | — |
| `PYQ:2026EE.pdf#Q7` | pyq | Board VALID PYQ · 2026EE.pdf | Electrical | In the given figure, 𝑃𝑄 ̅̅̅̅ is the diameter of a circle with center 𝑂. Two points 𝑅 an… | — |
| `data/civil/ce-flt01.js#Q2` | bank | Civil FLT-01 | Strength of Materials | While reviewing a rigid-ended hanger, equal-length steel and brass rods are found to ha… | C |
| `data/civil/ce-flt02.js#Q2` | bank | Civil FLT-02 | Strength of Materials | A composite hanger has equal-length brass and steel rods connected by rigid end plates,… | D |
| `data/civil/st/ce-st-fm-01.js#Q3` | bank | Civil ST-FM | Fluid Mechanics and Hy | The shown venturimeter is installed in a 0.2 m diameter inlet pipe. If the inlet veloci… | D |
| `data/civil/st/ce-st-rcc-01.js#Q2` | bank | Civil ST-RCC | Reinforced Concrete | A 230 mm wide beam with effective depth 450 mm carries factored shear 125 kN at a secti… | A |
| `data/civil/st/ce-st-som-01.js#Q3` | bank | Civil ST-SOM | Strength of Materials | The mild-steel stress–strain figure identifies point C as the ultimate point. If a spec… | D |
| `data/civil/st/ce-st-steel-01.js#Q4` | bank | Civil ST-STEEL | Steel Structures | A lap connection has 4 bearing-type bolts, each with governing design shear capacity 48… | C |
| `data/electrical/st/ee-st-ps-01.js#Q23` | bank | Electrical ST-PS | Power Systems + Utiliz | The conductor surface gradient is approaching the corona inception level. Which stateme… | D |
| `data/civil/ce-flt01.js#Q13` | bank | Civil FLT-01 | Strength of Materials | During beam-section selection, the service moment is 36 kN·m and the allowable bending … | A |
| `data/civil/ce-flt02.js#Q4` | bank | Civil FLT-02 | Strength of Materials | Two shafts have the same material, length and mass; one is solid of diameter \(d\), whi… | B |
| `data/civil/st/ce-st-fm-01.js#Q7` | bank | Civil ST-FM | Fluid Mechanics and Hy | Water flows in a 0.2 m diameter pipe at mean velocity 3 m/s. Discharge is closest to: | D |
| `data/civil/st/ce-st-rcc-01.js#Q4` | bank | Civil ST-RCC | Reinforced Concrete | A 300 mm × 300 mm short tied column carries factored axial load 1050 kN. The average fa… | C |
| `data/civil/st/ce-st-som-01.js#Q4` | bank | Civil ST-SOM | Strength of Materials | A solid circular shaft transmits 23 kN m torque through a 46 mm diameter. The maximum t… | C |
| `data/civil/st/ce-st-steel-01.js#Q5` | bank | Civil ST-STEEL | Steel Structures | A column base plate is 300 mm × 300 mm and transmits 650 kN concentric compression to c… | B |

**Worked elimination samples (bank keys only):**

- `data/civil/ce-flt01.js#Q1` — keyed **A** · *Civil FLT-01*
  - Stem: Following a gantry-tie inspection at a substation, the engineer records a 20 mm diameter member under 55 kN service tension in Fe250 steel. Which conclusion is most defensible before accepting the mem
  - A) Stress ≈175 MPa, below yield ← KEEP (key)
  - B) Stress ≈200 MPa, at yield ← strike if rule fires
  - C) Stress ≈350 MPa, above yield ← strike if rule fires
  - D) Stress ≈227 MPa, exactly at design strength ← strike if rule fires

- `data/civil/ce-flt02.js#Q1` — keyed **C** · *Civil FLT-02*
  - Stem: A 2.0 m long steel tie of uniform 500 mm² area carries a gradually applied 50 kN service load. Neglecting self-weight, which stress-extension pair is consistent with \(E=200\) GPa?
  - A) 50 MPa, 2.0 mm ← strike if rule fires
  - B) 100 MPa, 2.0 mm ← strike if rule fires
  - C) 100 MPa, 1.0 mm ← KEEP (key)
  - D) 200 MPa, 1.0 mm ← strike if rule fires

---

## Elimination Rule 2 — Service vs factored / partial-factor mix

**Evidence status:** ESTABLISHED (≥15; independent hits = **104** = 102 bank + 2 VALID PYQ)  
**Streams:** Civil  
**When:** Stem mixes service loads with limit-state options, or quotes fy/fck beside Mu/Vu.  
**How:** Ask: is this SLS or ULS? Strike options that apply γf to an already-factored action, or that treat fy as the computed stress.

**Evidence questions (25 shown of 104 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/civil/ce-flt01.js#Q1` | bank | Civil FLT-01 | Strength of Materials | Following a gantry-tie inspection at a substation, the engineer records a 20 mm diamete… | A |
| `data/civil/ce-flt02.js#Q1` | bank | Civil FLT-02 | Strength of Materials | A 2.0 m long steel tie of uniform 500 mm² area carries a gradually applied 50 kN servic… | C |
| `data/civil/st/ce-st-fe-01.js#Q3` | bank | Civil ST-FE | Foundation Engineering | The shown square footing distributes a concentric service load of 260 kN over a 2.3 m ×… | D |
| `data/civil/st/ce-st-rcc-01.js#Q1` | bank | Civil ST-RCC | Reinforced Concrete | An RCC beam of M25 and Fe500 has factored Mu = 180 kN m, b = 230 mm and d = 450 mm. Usi… | B |
| `data/civil/st/ce-st-steel-01.js#Q13` | bank | Civil ST-STEEL | Steel Structures | An I-section has elastic section modulus 500 × 10³ mm³ and fy = 250 MPa. Its elastic de… | B |
| `PYQ:2022CE2.pdf#Q38` | pyq | Board VALID PYQ · 2022CE2.pdf | Civil | For the square steel beam cross-section shown in the figure, the shape factor about 𝑧−𝑧… | — |
| `PYQ:2023CE2.pdf#Q40` | pyq | Board VALID PYQ · 2023CE2.pdf | Civil | Two plates are connected by fillet welds of size 10 mm and subjected to tension, as sho… | — |
| `data/civil/ce-flt01.js#Q3` | bank | Civil FLT-01 | Strength of Materials | Proof-load planning uses an overhanging beam A–B–C with supports at A and B: AB = 4 m, … | A |
| `data/civil/ce-flt02.js#Q48` | bank | Civil FLT-02 | Steel Structures | A double-cover butt splice places each bolt in double shear, but the connected main pla… | A |
| `data/civil/st/ce-st-fe-01.js#Q8` | bank | Civil ST-FE | Foundation Engineering | The shown square footing distributes a concentric service load of 360 kN over a 2.8 m ×… | C |
| `data/civil/st/ce-st-rcc-01.js#Q2` | bank | Civil ST-RCC | Reinforced Concrete | A 230 mm wide beam with effective depth 450 mm carries factored shear 125 kN at a secti… | A |
| `data/civil/st/ce-st-steel-01.js#Q18` | bank | Civil ST-STEEL | Steel Structures | An I-section has elastic section modulus 500 × 10³ mm³ and fy = 250 MPa. Its elastic de… | A |
| `data/civil/ce-flt01.js#Q7` | bank | Civil FLT-01 | Strength of Materials | During review of a stepped shaft ABC, an end torque of 1000 N·m is applied at C while B… | C |
| `data/civil/ce-flt02.js#Q50` | bank | Civil FLT-02 | Steel Structures | A simply supported I-beam has adequate bending strength but excessive vertical deflecti… | C |
| `data/civil/st/ce-st-fe-01.js#Q13` | bank | Civil ST-FE | Foundation Engineering | A concentric service load of 900 kN is to be carried at allowable net bearing pressure … | B |
| `data/civil/st/ce-st-rcc-01.js#Q4` | bank | Civil ST-RCC | Reinforced Concrete | A 300 mm × 300 mm short tied column carries factored axial load 1050 kN. The average fa… | C |
| `data/civil/st/ce-st-steel-01.js#Q23` | bank | Civil ST-STEEL | Steel Structures | An I-section has elastic section modulus 500 × 10³ mm³ and fy = 250 MPa. Its elastic de… | D |
| `data/civil/ce-flt01.js#Q10` | bank | Civil FLT-01 | Strength of Materials | While preparing a design-aid sheet, match List-I beam cases to List-II max BM (same w, … | A |
| `data/civil/ce-flt02.js#Q51` | bank | Civil FLT-02 | Steel Structures | A roof purlin under gravity and wind is connected so that loading is inclined to its pr… | A |
| `data/civil/st/ce-st-fe-01.js#Q14` | bank | Civil ST-FE | Foundation Engineering | The shown square footing distributes a concentric service load of 480 kN over a 3.4 m ×… | A |
| `data/civil/st/ce-st-rcc-01.js#Q5` | bank | Civil ST-RCC | Reinforced Concrete | A square footing 2.1 m by 2.1 m carries a service column load of 190 kN (self-weight ig… | B |
| `data/civil/st/ce-st-steel-01.js#Q28` | bank | Civil ST-STEEL | Steel Structures | An I-section has elastic section modulus 500 × 10³ mm³ and fy = 250 MPa. Its elastic de… | C |
| `data/civil/ce-flt01.js#Q12` | bank | Civil FLT-01 | Strength of Materials | A steel bar with fixed ends is reviewed for temperature lock-up using α = 12×10⁻⁶ /°C, … | D |
| `data/civil/ce-flt02.js#Q55` | bank | Civil FLT-02 | Foundation Engineering | A 2 m square footing at 1 m depth carries 1050 kN including footing. Soil unit weight i… | A |
| `data/civil/st/ce-st-fe-01.js#Q18` | bank | Civil ST-FE | Foundation Engineering | A concentric service load of 1100 kN is to be carried at allowable net bearing pressure… | A |

**Worked elimination samples (bank keys only):**

- `data/civil/ce-flt01.js#Q1` — keyed **A** · *Civil FLT-01*
  - Stem: Following a gantry-tie inspection at a substation, the engineer records a 20 mm diameter member under 55 kN service tension in Fe250 steel. Which conclusion is most defensible before accepting the mem
  - A) Stress ≈175 MPa, below yield ← KEEP (key)
  - B) Stress ≈200 MPa, at yield ← strike if rule fires
  - C) Stress ≈350 MPa, above yield ← strike if rule fires
  - D) Stress ≈227 MPa, exactly at design strength ← strike if rule fires

- `data/civil/ce-flt02.js#Q1` — keyed **C** · *Civil FLT-02*
  - Stem: A 2.0 m long steel tie of uniform 500 mm² area carries a gradually applied 50 kN service load. Neglecting self-weight, which stress-extension pair is consistent with \(E=200\) GPa?
  - A) 50 MPa, 2.0 mm ← strike if rule fires
  - B) 100 MPa, 2.0 mm ← strike if rule fires
  - C) 100 MPa, 1.0 mm ← KEEP (key)
  - D) 200 MPa, 1.0 mm ← strike if rule fires

---

## Elimination Rule 3 — Gross vs net / hole deduction

**Evidence status:** ESTABLISHED (≥15; independent hits = **95** = 95 bank + 0 VALID PYQ)  
**Streams:** Civil  
**When:** Tension member, plate with bolt holes, staggered pitch, or chain of holes.  
**How:** Net = gross − holes (± s²/4g). Eliminate options that equal gross area, or that deduct diameter without adding the staggered term when stagger is shown.

**Evidence questions (25 shown of 95 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/civil/ce-flt01.js#Q1` | bank | Civil FLT-01 | Strength of Materials | Following a gantry-tie inspection at a substation, the engineer records a 20 mm diamete… | A |
| `data/civil/ce-flt02.js#Q20` | bank | Civil FLT-02 | RCC / DDRC | Two short tied columns have the same gross area and longitudinal-steel percentage. Colu… | D |
| `data/civil/st/ce-st-fe-01.js#Q1` | bank | Civil ST-FE | Foundation Engineering | For a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2… | B |
| `data/civil/st/ce-st-rcc-01.js#Q4` | bank | Civil ST-RCC | Reinforced Concrete | A 300 mm × 300 mm short tied column carries factored axial load 1050 kN. The average fa… | C |
| `data/civil/st/ce-st-steel-01.js#Q1` | bank | Civil ST-STEEL | Steel Structures | A 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. … | B |
| `data/civil/ce-flt01.js#Q3` | bank | Civil FLT-01 | Strength of Materials | Proof-load planning uses an overhanging beam A–B–C with supports at A and B: AB = 4 m, … | A |
| `data/civil/ce-flt02.js#Q30` | bank | Civil FLT-02 | Fluid Mechanics & Hydr | The differential manometer crop shows water in a pipe and mercury in the limbs; the tap… | C |
| `data/civil/st/ce-st-fe-01.js#Q6` | bank | Civil ST-FE | Foundation Engineering | For a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2… | A |
| `data/civil/st/ce-st-rcc-01.js#Q9` | bank | Civil ST-RCC | Reinforced Concrete | A 300 mm × 300 mm short tied column carries factored axial load 900 kN. The average fac… | B |
| `data/civil/st/ce-st-steel-01.js#Q2` | bank | Civil ST-STEEL | Steel Structures | A steel compression member has effective length 3.25 m and least radius of gyration 35 … | A |
| `data/civil/ce-flt01.js#Q7` | bank | Civil FLT-01 | Strength of Materials | During review of a stepped shaft ABC, an end torque of 1000 N·m is applied at C while B… | C |
| `data/civil/ce-flt02.js#Q41` | bank | Civil FLT-02 | Steel Structures | A tension plate has \(A_g=1800\) mm², \(A_n=1450\) mm², \(f_y=250\) MPa, \(f_u=410\) MP… | C |
| `data/civil/st/ce-st-fe-01.js#Q11` | bank | Civil ST-FE | Foundation Engineering | For a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2… | D |
| `data/civil/st/ce-st-rcc-01.js#Q24` | bank | Civil ST-RCC | Reinforced Concrete | A 300 mm × 300 mm short tied column carries factored axial load 1050 kN. The average fa… | C |
| `data/civil/st/ce-st-steel-01.js#Q3` | bank | Civil ST-STEEL | Steel Structures | The shown bolted lap joint transfers the load through 4 identical bolts. If each bolt h… | D |
| `data/civil/ce-flt01.js#Q10` | bank | Civil FLT-01 | Strength of Materials | While preparing a design-aid sheet, match List-I beam cases to List-II max BM (same w, … | A |
| `data/civil/ce-flt02.js#Q42` | bank | Civil FLT-02 | Steel Structures | A bearing-type bolted splice is subjected to load reversal. Shop inspection finds overs… | A |
| `data/civil/st/ce-st-fe-01.js#Q16` | bank | Civil ST-FE | Foundation Engineering | For a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2… | C |
| `data/civil/st/ce-st-rcc-01.js#Q29` | bank | Civil ST-RCC | Reinforced Concrete | A 300 mm × 300 mm short tied column carries factored axial load 900 kN. The average fac… | B |
| `data/civil/st/ce-st-steel-01.js#Q4` | bank | Civil ST-STEEL | Steel Structures | A lap connection has 4 bearing-type bolts, each with governing design shear capacity 48… | C |
| `data/civil/ce-flt01.js#Q19` | bank | Civil FLT-01 | RCC / DDRC | Mid-pour on a continuous RCC floor, top bars over an interior support are found displac… | C |
| `data/civil/ce-flt02.js#Q43` | bank | Civil FLT-02 | Steel Structures | The staggered plate crop shows two candidate net-section rupture paths P and Q. Using \… | D |
| `data/civil/st/ce-st-fe-01.js#Q21` | bank | Civil ST-FE | Foundation Engineering | For a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2… | B |
| `data/civil/st/ce-st-rcc-01.js#Q34` | bank | Civil ST-RCC | Reinforced Concrete | A 300 mm × 300 mm short tied column carries factored axial load 950 kN. The average fac… | A |
| `data/civil/st/ce-st-steel-01.js#Q6` | bank | Civil ST-STEEL | Steel Structures | A 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. … | A |

**Worked elimination samples (bank keys only):**

- `data/civil/ce-flt01.js#Q1` — keyed **A** · *Civil FLT-01*
  - Stem: Following a gantry-tie inspection at a substation, the engineer records a 20 mm diameter member under 55 kN service tension in Fe250 steel. Which conclusion is most defensible before accepting the mem
  - A) Stress ≈175 MPa, below yield ← KEEP (key)
  - B) Stress ≈200 MPa, at yield ← strike if rule fires
  - C) Stress ≈350 MPa, above yield ← strike if rule fires
  - D) Stress ≈227 MPa, exactly at design strength ← strike if rule fires

- `data/civil/ce-flt02.js#Q20` — keyed **D** · *Civil FLT-02*
  - Stem: Two short tied columns have the same gross area and longitudinal-steel percentage. Column X alone receives higher concrete grade; Column Y alone receives higher steel grade. Which statement correctly 
  - A) both changes have identical effect per MPa ← strike if rule fires
  - B) Only steel grade can change capacity ← strike if rule fires
  - C) neither matters for a short column ← strike if rule fires
  - D) both changes raise capacity, but their gains are weighted by their respective concrete and steel areas ← KEEP (key)

---

## Elimination Rule 4 — Cover vs effective depth

**Evidence status:** ESTABLISHED (≥15; independent hits = **40** = 39 bank + 1 VALID PYQ)  
**Streams:** Civil  
**When:** RCC beam/slab with overall D, cover, bar dia — options in Ast, τv, or lever arm.  
**How:** d = D − cover − φ/2 (or as stem defines). Strike options that use overall depth as effective depth.

**Evidence questions (25 shown of 40 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/civil/ce-flt01.js#Q16` | bank | Civil FLT-01 | RCC / DDRC | Before a pour on an RCC beam in moderate exposure, measured cover is below the durabili… | C |
| `data/civil/ce-flt02.js#Q16` | bank | Civil FLT-02 | RCC / DDRC | An RCC beam in moderate exposure is detailed with nominal cover smaller than the durabi… | A |
| `data/civil/st/ce-st-rcc-01.js#Q1` | bank | Civil ST-RCC | Reinforced Concrete | An RCC beam of M25 and Fe500 has factored Mu = 180 kN m, b = 230 mm and d = 450 mm. Usi… | B |
| `data/civil/st/ce-st-steel-01.js#Q4` | bank | Civil ST-STEEL | Steel Structures | A lap connection has 4 bearing-type bolts, each with governing design shear capacity 48… | C |
| `PYQ:2019CE1.pdf#Q9` | pyq | Board VALID PYQ · 2019CE1.pdf | Civil | In the reinforced beam section shown in the figure (not drawn to scale), the nominal co… | — |
| `data/civil/ce-flt01.js#Q17` | bank | Civil FLT-01 | RCC / DDRC | While checking an Fe415 singly reinforced beam, the trial neutral-axis depth is 225 mm … | A |
| `data/civil/ce-flt02.js#Q19` | bank | Civil FLT-02 | RCC / DDRC | During a pour, the top bars over an interior support of a continuous slab are found dis… | A |
| `data/civil/st/ce-st-rcc-01.js#Q2` | bank | Civil ST-RCC | Reinforced Concrete | A 230 mm wide beam with effective depth 450 mm carries factored shear 125 kN at a secti… | A |
| `data/civil/st/ce-st-steel-01.js#Q9` | bank | Civil ST-STEEL | Steel Structures | A lap connection has 4 bearing-type bolts, each with governing design shear capacity 45… | B |
| `data/civil/ce-flt01.js#Q19` | bank | Civil FLT-01 | RCC / DDRC | Mid-pour on a continuous RCC floor, top bars over an interior support are found displac… | C |
| `data/civil/ce-flt02.js#Q23` | bank | Civil FLT-02 | RCC / DDRC | The crop shows a continuous-beam bar proposed to terminate at section P, with the theor… | D |
| `data/civil/st/ce-st-rcc-01.js#Q6` | bank | Civil ST-RCC | Reinforced Concrete | An RCC beam of M25 and Fe500 has factored Mu = 185 kN m, b = 230 mm and d = 450 mm. Usi… | A |
| `data/civil/st/ce-st-steel-01.js#Q24` | bank | Civil ST-STEEL | Steel Structures | A lap connection has 4 bearing-type bolts, each with governing design shear capacity 48… | C |
| `data/civil/ce-flt01.js#Q22` | bank | Civil FLT-01 | RCC / DDRC | While checking two beams of equal section under IS shear rules, Beam X has nominal shea… | C |
| `data/civil/ce-flt02.js#Q27` | bank | Civil FLT-02 | RCC / DDRC | A one-way slab is made deeper without changing span, loading or steel grade, and is the… | A |
| `data/civil/st/ce-st-rcc-01.js#Q7` | bank | Civil ST-RCC | Reinforced Concrete | A 230 mm wide beam with effective depth 450 mm carries factored shear 130 kN at a secti… | D |
| `data/civil/st/ce-st-steel-01.js#Q29` | bank | Civil ST-STEEL | Steel Structures | A lap connection has 4 bearing-type bolts, each with governing design shear capacity 45… | B |
| `data/civil/ce-flt01.js#Q23` | bank | Civil FLT-01 | RCC / DDRC | Before approving a beam bar cut-off near a support on the shop drawing, the detailing t… | C |
| `data/civil/ce-flt02.js#Q48` | bank | Civil FLT-02 | Steel Structures | A double-cover butt splice places each bolt in double shear, but the connected main pla… | A |
| `data/civil/st/ce-st-rcc-01.js#Q11` | bank | Civil ST-RCC | Reinforced Concrete | An RCC beam of M25 and Fe500 has factored Mu = 190 kN m, b = 230 mm and d = 450 mm. Usi… | D |
| `data/civil/st/ce-st-steel-01.js#Q34` | bank | Civil ST-STEEL | Steel Structures | A lap connection has 4 bearing-type bolts, each with governing design shear capacity 46… | A |
| `data/civil/ce-flt01.js#Q24` | bank | Civil FLT-01 | RCC / DDRC | In design review, factored moment is 160 kN·m while the limiting singly reinforced capa… | C |
| `data/civil/st/ce-st-rcc-01.js#Q12` | bank | Civil ST-RCC | Reinforced Concrete | A 230 mm wide beam with effective depth 450 mm carries factored shear 135 kN at a secti… | C |
| `data/civil/st/ce-st-steel-01.js#Q44` | bank | Civil ST-STEEL | Steel Structures | A lap connection has 4 bearing-type bolts, each with governing design shear capacity 48… | C |
| `data/civil/ce-flt01.js#Q26` | bank | Civil FLT-01 | RCC / DDRC | From the design shear table (also shown), τc = 0.48 MPa at 0.50% tension steel and τc =… | D |

**Worked elimination samples (bank keys only):**

- `data/civil/ce-flt01.js#Q16` — keyed **C** · *Civil FLT-01*
  - Stem: Before a pour on an RCC beam in moderate exposure, measured cover is below the durability requirement although the calculated effective depth is available. Which correction priority is most appropriat
  - A) Accept because depth governs strength ← strike if rule fires
  - B) Increase water-cement ratio ← strike if rule fires
  - C) Restore specified cover before concreting ← KEEP (key)
  - D) Replace stirrups with larger spacing ← strike if rule fires

- `data/civil/ce-flt02.js#Q16` — keyed **A** · *Civil FLT-02*
  - Stem: An RCC beam in moderate exposure is detailed with nominal cover smaller than the durability requirement, though effective depth is adequate. Which concern should govern correction before concreting?
  - A) Premature reinforcement corrosion and reduced fire durability ← KEEP (key)
  - B) Higher lever arm ← strike if rule fires
  - C) Improved ductility ← strike if rule fires
  - D) Lower dead load ← strike if rule fires

---

## Elimination Rule 5 — Per-unit base-change scaling

**Evidence status:** ESTABLISHED (≥15; independent hits = **95** = 95 bank + 0 VALID PYQ)  
**Streams:** Electrical  
**When:** Zpu / Xpu and base MVA or kV changes.  
**How:** Zpu ∝ Sbase / Vbase². If Sbase doubles and Vbase fixed → Zpu halves. Eliminate ‘unchanged’, ‘doubles’, or ‘squared’ unless the stem changed Vbase too.

**Evidence questions (25 shown of 95 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/electrical/ee-flt01.js#Q1` | bank | Electrical FLT-01 | Power Systems | A lossless 400 kV line has Zc = 250 Ω. Its SIL (MW) is closest to: | A |
| `data/electrical/ee-flt02.js#Q2` | bank | Electrical FLT-02 | Power Systems | On 200 MVA, 400 kV base, a series reactor is 96 ohms. Per-unit reactance is closest to: | D |
| `data/electrical/st/ee-st-ps-01.js#Q1` | bank | Electrical ST-PS | Power Systems + Utiliz | On a common 100 MVA base, if the MVA base is doubled while the base kV is unchanged, a … | C |
| `data/electrical/ee-flt01.js#Q2` | bank | Electrical FLT-01 | Power Systems | On 100 MVA, 220 kV base, a line reactance 48.4 Ω equals how many pu? | B |
| `data/electrical/ee-flt02.js#Q3` | bank | Electrical FLT-02 | Power Systems | Solid LG fault: Z1=Z2=j0.15 pu, Z0=j0.60 pu, Vpref=1 pu. /If/ (pu) nearest: | A |
| `data/electrical/st/ee-st-ps-01.js#Q2` | bank | Electrical ST-PS | Power Systems + Utiliz | For a double line-to-ground fault on an unloaded generator, the sequence networks requi… | D |
| `data/electrical/ee-flt01.js#Q3` | bank | Electrical FLT-01 | Power Systems | A 3-φ feeder has positive-sequence impedance j0.2 pu and zero-sequence j0.5 pu on same … | C |
| `data/electrical/ee-flt02.js#Q5` | bank | Electrical FLT-02 | Power Systems | Assertion (A): Two identical 100 MVA, 11 kV, Xd''=0.12 pu generators in parallel on 200… | B |
| `data/electrical/st/ee-st-ps-01.js#Q3` | bank | Electrical ST-PS | Power Systems + Utiliz | Following a severe three-phase disturbance in a single-machine infinite-bus system, the… | A |
| `data/electrical/ee-flt01.js#Q5` | bank | Electrical FLT-01 | Power Systems | Two identical 50 MVA, 11 kV, Xd″=0.15 pu machines feed a bus. On 100 MVA base, the bus … | A |
| `data/electrical/ee-flt02.js#Q7` | bank | Electrical FLT-02 | Power Systems | For a nominal-pi medium line, AD-BC=1. If A=0.995∠0.3 deg and B=j35 ohm, C (S) magnitud… | D |
| `data/electrical/st/ee-st-ps-01.js#Q4` | bank | Electrical ST-PS | Power Systems + Utiliz | At the receiving end of an EHV transmission line, the Ferranti effect is most likely to… | B |
| `data/electrical/ee-flt01.js#Q6` | bank | Electrical FLT-01 | Power Systems | Ferranti rise on a long EHV line is most severe when: | B |
| `data/electrical/ee-flt02.js#Q12` | bank | Electrical FLT-02 | Power Systems | Generator Xd'=0.25 pu, step-up Xt=0.08 pu (same base). Bolted 3-ph fault at HV terminal… | C |
| `data/electrical/st/ee-st-ps-01.js#Q5` | bank | Electrical ST-PS | Power Systems + Utiliz | Specific energy consumption in traction units often: | B |
| `data/electrical/ee-flt01.js#Q9` | bank | Electrical FLT-01 | Power Systems | From the open-conductor / sequence figure shown (use only labelled phase currents; Ic =… | A |
| `data/electrical/ee-flt02.js#Q16` | bank | Electrical FLT-02 | Electrical Machines | 50 Hz, 4-pole, Xs=1.5 pu, Ra≈0, Vt=1 pu, P=0.6 pu to infinite bus. Power angle δ (deg) … | A |
| `data/electrical/st/ee-st-ps-01.js#Q6` | bank | Electrical ST-PS | Power Systems + Utiliz | Illumination E (lux) is: | C |
| `data/electrical/ee-flt01.js#Q12` | bank | Electrical FLT-01 | Power Systems | A generator Xs = 0.20 pu feeds an infinite bus through a transformer Xt = 0.10 pu (same… | D |
| `data/electrical/ee-flt02.js#Q21` | bank | Electrical FLT-02 | Electrical Machines | Round-rotor alternator on infinite bus: terminal voltage 1.0 pu, armature current 0.75 … | C |
| `data/electrical/st/ee-st-ps-01.js#Q7` | bank | Electrical ST-PS | Power Systems + Utiliz | Load factor =: | D |
| `data/electrical/ee-flt01.js#Q15` | bank | Electrical FLT-01 | Electrical Machines | Service transformer oil is retained primarily because it provides: | C |
| `data/electrical/ee-flt02.js#Q24` | bank | Electrical FLT-02 | Electrical Machines | 1-ph TF: Rpu=0.015, Xpu=0.045, full load 0.8 pf lag. Percent regulation nearest: | A |
| `data/electrical/st/ee-st-ps-01.js#Q8` | bank | Electrical ST-PS | Power Systems + Utiliz | Induction heating uses: | A |
| `data/electrical/ee-flt01.js#Q16` | bank | Electrical FLT-01 | Electrical Machines | A 3-φ, 50 Hz, 4-pole turboalternator has Xs=1.2 pu and Ra≈0. On infinite bus 1.0 pu, de… | D |

**Worked elimination samples (bank keys only):**

- `data/electrical/ee-flt01.js#Q1` — keyed **A** · *Electrical FLT-01*
  - Stem: A lossless 400 kV line has Zc = 250 Ω. Its SIL (MW) is closest to:
  - A) 640 ← KEEP (key)
  - B) 400 ← strike if rule fires
  - C) 250 ← strike if rule fires
  - D) 160 ← strike if rule fires

- `data/electrical/ee-flt02.js#Q2` — keyed **D** · *Electrical FLT-02*
  - Stem: On 200 MVA, 400 kV base, a series reactor is 96 ohms. Per-unit reactance is closest to:
  - A) 0.48 ← strike if rule fires
  - B) 0.24 ← strike if rule fires
  - C) 0.06 ← strike if rule fires
  - D) 0.12 ← KEEP (key)

---

## Elimination Rule 6 — Sequence-network connection by fault type

**Evidence status:** ESTABLISHED (≥15; independent hits = **25** = 18 bank + 7 VALID PYQ)  
**Streams:** Electrical  
**When:** LG / LL / LLG / 3φ fault; options name sequence networks.  
**How:** 3φ → positive only. LG → series 1-2-0. LL → 1 parallel 2. LLG → 1 series (2∥0). Eliminate any option that omits a required sequence or uses only zero-sequence.

**Evidence questions (25 shown of 25 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/electrical/ee-flt01.js#Q3` | bank | Electrical FLT-01 | Power Systems | A 3-φ feeder has positive-sequence impedance j0.2 pu and zero-sequence j0.5 pu on same … | C |
| `data/electrical/ee-flt02.js#Q3` | bank | Electrical FLT-02 | Power Systems | Solid LG fault: Z1=Z2=j0.15 pu, Z0=j0.60 pu, Vpref=1 pu. /If/ (pu) nearest: | A |
| `data/electrical/st/ee-st-em-01.js#Q17` | bank | Electrical ST-EM | Electrical Machines | A synchronous generator is being synchronised with live busbars. Which statement is cor… | A |
| `data/electrical/st/ee-st-ps-01.js#Q2` | bank | Electrical ST-PS | Power Systems + Utiliz | For a double line-to-ground fault on an unloaded generator, the sequence networks requi… | D |
| `PYQ:2022EE.pdf#Q21` | pyq | Board VALID PYQ · 2022EE.pdf | Electrical | In the circuit shown below, a three-phase star-connected unbalanced load is connected t… | — |
| `PYQ:2023EE.pdf#Q39` | pyq | Board VALID PYQ · 2023EE.pdf | Electrical | A 3-phase, star-connected, balanced load is supplied from a 3-phase, 400 V (rms), balan… | — |
| `PYQ:2026EE.pdf#Q19` | pyq | Board VALID PYQ · 2026EE.pdf | Electrical | The initial three-phase voltage phasors (𝑉̅𝐴 , 𝑉̅𝐵 , and 𝑉̅𝐶) at a bus of a power netwo… | — |
| `PYQ:AP-Transco-AEE_ELECTRICAL-ENGINEERING-PAPER-III-2012.pdf#Q113` | pyq | Board VALID PYQ · AP-Transco-AEE_ELE | Electrical | Which of the following figures indicate the zero sequence network of alternator whose s… | — |
| `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q134` | pyq | Board VALID PYQ · APEPDCL-Assistant- | Electrical | Which one of the following is the zero-sequence equivalent circuit of the three-phase t… | — |
| `PYQ:APTRANSCO-EE-2011.pdf#Q26` | pyq | Board VALID PYQ · APTRANSCO-EE-2011. | Electrical | A separately excited d.c. machine is coupled to a 50 Hz, three-phase, 4-pole induction … | — |
| `data/electrical/ee-flt01.js#Q8` | bank | Electrical FLT-01 | Power Systems | For a symmetrical 3-φ fault, sequence networks are connected in: | D |
| `data/electrical/ee-flt02.js#Q8` | bank | Electrical FLT-02 | Power Systems | During a bolted three-phase short circuit on an unloaded radial feeder, which sequence … | A |
| `data/electrical/st/ee-st-em-01.js#Q23` | bank | Electrical ST-EM | Electrical Machines | A synchronous generator is being synchronised with live busbars. Which statement is cor… | B |
| `data/electrical/st/ee-st-ps-01.js#Q12` | bank | Electrical ST-PS | Power Systems + Utiliz | Zero-sequence network of grounded-star alternator through Xn uses: | C |
| `PYQ:2026EE.pdf#Q38` | pyq | Board VALID PYQ · 2026EE.pdf | Electrical | Three single-phase 11kV/3.3kV transformers are connected to form a three-phase transfor… | — |
| `data/electrical/ee-flt01.js#Q9` | bank | Electrical FLT-01 | Power Systems | From the open-conductor / sequence figure shown (use only labelled phase currents; Ic =… | A |
| `data/electrical/ee-flt02.js#Q9` | bank | Electrical FLT-02 | Power Systems | From the sequence-network sketch (open conductor on phase C, Ia=Ib=5 A, Ic=0), the zero… | B |
| `data/electrical/st/ee-st-em-01.js#Q29` | bank | Electrical ST-EM | Electrical Machines | A synchronous generator is being synchronised with live busbars. Which statement is cor… | B |
| `data/electrical/st/ee-st-ps-01.js#Q24` | bank | Electrical ST-PS | Power Systems + Utiliz | An unsymmetrical line-to-line-to-ground fault is being analysed by symmetrical componen… | A |
| `data/electrical/ee-flt02.js#Q27` | bank | Electrical FLT-02 | Electrical Machines | For quick stopping of a wound-rotor IM, plugging applies: | A |
| `data/electrical/st/ee-st-em-01.js#Q35` | bank | Electrical ST-EM | Electrical Machines | A synchronous generator is being synchronised with live busbars. Which statement is cor… | A |
| `data/electrical/st/ee-st-ps-01.js#Q34` | bank | Electrical ST-PS | Power Systems + Utiliz | An unsymmetrical line-to-line-to-ground fault is being analysed by symmetrical componen… | A |
| `data/electrical/st/ee-st-em-01.js#Q41` | bank | Electrical ST-EM | Electrical Machines | A synchronous generator is being synchronised with live busbars. Which statement is cor… | C |
| `data/electrical/st/ee-st-ps-01.js#Q44` | bank | Electrical ST-PS | Power Systems + Utiliz | An unsymmetrical line-to-line-to-ground fault is being analysed by symmetrical componen… | B |
| `data/electrical/st/ee-st-em-01.js#Q47` | bank | Electrical ST-EM | Electrical Machines | A synchronous generator is being synchronised with live busbars. Which statement is cor… | D |

**Worked elimination samples (bank keys only):**

- `data/electrical/ee-flt01.js#Q3` — keyed **C** · *Electrical FLT-01*
  - Stem: A 3-φ feeder has positive-sequence impedance j0.2 pu and zero-sequence j0.5 pu on same base. For a solid SLG fault at the feeder end with prefault Vf=1∠0, |If| (pu) is closest to:
  - A) 2.0 ← strike if rule fires
  - B) 3.33 ← strike if rule fires
  - C) 1.11 ← KEEP (key)
  - D) 5.0 ← strike if rule fires

- `data/electrical/ee-flt02.js#Q3` — keyed **A** · *Electrical FLT-02*
  - Stem: Solid LG fault: Z1=Z2=j0.15 pu, Z0=j0.60 pu, Vpref=1 pu. |If| (pu) nearest:
  - A) 3.33 ← KEEP (key)
  - B) 6.67 ← strike if rule fires
  - C) 1.67 ← strike if rule fires
  - D) 10 ← strike if rule fires

---

## Elimination Rule 7 — √3 / phase-factor forgotten

**Evidence status:** ESTABLISHED (≥15; independent hits = **24** = 18 bank + 6 VALID PYQ)  
**Streams:** Electrical  
**When:** 3-phase power, line vs phase quantities, line current from kVA.  
**How:** P = √3 VL IL cosφ. Eliminate options that drop √3 or use 3 instead of √3 (or vice versa) without stem justification.

**Evidence questions (24 shown of 24 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/electrical/ee-flt01.js#Q3` | bank | Electrical FLT-01 | Power Systems | A 3-φ feeder has positive-sequence impedance j0.2 pu and zero-sequence j0.5 pu on same … | C |
| `data/electrical/ee-flt02.js#Q8` | bank | Electrical FLT-02 | Power Systems | During a bolted three-phase short circuit on an unloaded radial feeder, which sequence … | A |
| `data/electrical/st/ee-st-ec-01.js#Q17` | bank | Electrical ST-EC | Electric Circuits | A balanced three-phase load is measured with the two-wattmeter method. Which statement … | B |
| `data/electrical/st/ee-st-meas-01.js#Q8` | bank | Electrical ST-MEAS | Measurements | Two-wattmeter method pf=: | D |
| `data/electrical/st/ee-st-pe-01.js#Q9` | bank | Electrical ST-PE | Power Electronics & Dr | 180° mode three-phase VSI line voltage steps: | C |
| `data/electrical/st/ee-st-ps-01.js#Q3` | bank | Electrical ST-PS | Power Systems + Utiliz | Following a severe three-phase disturbance in a single-machine infinite-bus system, the… | A |
| `PYQ:2022EE.pdf#Q21` | pyq | Board VALID PYQ · 2022EE.pdf | Electrical | In the circuit shown below, a three-phase star-connected unbalanced load is connected t… | — |
| `PYQ:2023EE.pdf#Q39` | pyq | Board VALID PYQ · 2023EE.pdf | Electrical | A 3-phase, star-connected, balanced load is supplied from a 3-phase, 400 V (rms), balan… | — |
| `PYQ:2026EE.pdf#Q19` | pyq | Board VALID PYQ · 2026EE.pdf | Electrical | The initial three-phase voltage phasors (𝑉̅𝐴 , 𝑉̅𝐵 , and 𝑉̅𝐶) at a bus of a power netwo… | — |
| `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q134` | pyq | Board VALID PYQ · APEPDCL-Assistant- | Electrical | Which one of the following is the zero-sequence equivalent circuit of the three-phase t… | — |
| `PYQ:APTRANSCO-EE-2011.pdf#Q26` | pyq | Board VALID PYQ · APTRANSCO-EE-2011. | Electrical | A separately excited d.c. machine is coupled to a 50 Hz, three-phase, 4-pole induction … | — |
| `data/electrical/ee-flt01.js#Q5` | bank | Electrical FLT-01 | Power Systems | Two identical 50 MVA, 11 kV, Xd″=0.15 pu machines feed a bus. On 100 MVA base, the bus … | A |
| `data/electrical/ee-flt02.js#Q48` | bank | Electrical FLT-02 | Power Electronics & Dr | From the single-phase semiconverter schematic, average output voltage with firing angle… | A |
| `data/electrical/st/ee-st-ec-01.js#Q23` | bank | Electrical ST-EC | Electric Circuits | A balanced three-phase load is measured with the two-wattmeter method. Which statement … | D |
| `PYQ:2026EE.pdf#Q38` | pyq | Board VALID PYQ · 2026EE.pdf | Electrical | Three single-phase 11kV/3.3kV transformers are connected to form a three-phase transfor… | — |
| `data/electrical/ee-flt01.js#Q8` | bank | Electrical FLT-01 | Power Systems | For a symmetrical 3-φ fault, sequence networks are connected in: | D |
| `data/electrical/ee-flt02.js#Q57` | bank | Electrical FLT-02 | Electrical Measurement | A 110 kV/√3 : 110 V PT is rated 100 VA on secondary at rated voltage. The corresponding… | B |
| `data/electrical/st/ee-st-ec-01.js#Q29` | bank | Electrical ST-EC | Electric Circuits | A balanced three-phase load is measured with the two-wattmeter method. Which statement … | C |
| `data/electrical/ee-flt01.js#Q12` | bank | Electrical FLT-01 | Power Systems | A generator Xs = 0.20 pu feeds an infinite bus through a transformer Xt = 0.10 pu (same… | D |
| `data/electrical/st/ee-st-ec-01.js#Q35` | bank | Electrical ST-EC | Electric Circuits | A balanced three-phase load is measured with the two-wattmeter method. Which statement … | A |
| `data/electrical/ee-flt01.js#Q16` | bank | Electrical FLT-01 | Electrical Machines | A 3-φ, 50 Hz, 4-pole turboalternator has Xs=1.2 pu and Ra≈0. On infinite bus 1.0 pu, de… | D |
| `data/electrical/st/ee-st-ec-01.js#Q41` | bank | Electrical ST-EC | Electric Circuits | A balanced three-phase load is measured with the two-wattmeter method. Which statement … | C |
| `data/electrical/ee-flt01.js#Q20` | bank | Electrical FLT-01 | Electrical Machines | In a 3-φ induction motor, air-gap power Pg = 12 kW, slip s=0.04. Rotor copper loss (kW)… | D |
| `data/electrical/st/ee-st-ec-01.js#Q47` | bank | Electrical ST-EC | Electric Circuits | A balanced three-phase load is measured with the two-wattmeter method. Which statement … | A |

**Worked elimination samples (bank keys only):**

- `data/electrical/ee-flt01.js#Q3` — keyed **C** · *Electrical FLT-01*
  - Stem: A 3-φ feeder has positive-sequence impedance j0.2 pu and zero-sequence j0.5 pu on same base. For a solid SLG fault at the feeder end with prefault Vf=1∠0, |If| (pu) is closest to:
  - A) 2.0 ← strike if rule fires
  - B) 3.33 ← strike if rule fires
  - C) 1.11 ← KEEP (key)
  - D) 5.0 ← strike if rule fires

- `data/electrical/ee-flt02.js#Q8` — keyed **A** · *Electrical FLT-02*
  - Stem: During a bolted three-phase short circuit on an unloaded radial feeder, which sequence network combination yields the fault current?
  - A) Positive-sequence network alone (negative and zero inactive) ← KEEP (key)
  - B) Only zero-sequence path ← strike if rule fires
  - C) Series connection of positive, negative, and zero ← strike if rule fires
  - D) Parallel merge of all three sequence networks ← strike if rule fires

---

## Elimination Rule 8 — Thevenin / Norton source deactivation

**Evidence status:** ESTABLISHED (≥15; independent hits = **18** = 14 bank + 4 VALID PYQ)  
**Streams:** Electrical  
**When:** Req, RN, or Vth with independent sources in the figure.  
**How:** Independent voltage sources → short; current sources → open. Eliminate options that leave sources active while claiming Req/RN.

**Evidence questions (18 shown of 18 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/electrical/ee-flt01.js#Q29` | bank | Electrical FLT-01 | Electric Circuits | In the resistor network shown driven by Vs, the equivalent resistance Req looking into … | C |
| `data/electrical/ee-flt02.js#Q35` | bank | Electrical FLT-02 | Electric Circuits | Superposition theorem applies to: | C |
| `data/electrical/st/ee-st-ec-01.js#Q3` | bank | Electrical ST-EC | Electric Circuits | After independent sources are deactivated, the Norton resistance seen at the output ter… | A |
| `PYQ:2021EE.pdf#Q4` | pyq | Board VALID PYQ · 2021EE.pdf | Electrical | For the network shown, the equivalent Thevenin voltage and Thevenin impedance as seen a… | — |
| `PYQ:2026EE.pdf#Q24` | pyq | Board VALID PYQ · 2026EE.pdf | Electrical | For the circuit shown, which one of the following options correctly identifies the Thev… | — |
| `PYQ:AP-GENCO-Tech-2012.pdf#Q56` | pyq | Board VALID PYQ · AP-GENCO-Tech-2012 | Electrical | The Norton's resistance of the circuit shown is | — |
| `data/electrical/ee-flt01.js#Q34` | bank | Electrical FLT-01 | Electric Circuits | An ideal ammeter is connected between terminals A and B in the circuit shown. The ammet… | B |
| `data/electrical/ee-flt02.js#Q56` | bank | Electrical FLT-02 | Electric Circuits | From the Norton equivalent network diagram, after deactivating independent sources, RN … | D |
| `data/electrical/st/ee-st-ec-01.js#Q12` | bank | Electrical ST-EC | Electric Circuits | Maximum power transfer for Thevenin DC: | A |
| `PYQ:2026EE.pdf#Q44` | pyq | Board VALID PYQ · 2026EE.pdf | Electrical | The terminal voltage and current of a linear electrical network shown in Figure | — |
| `data/electrical/ee-flt01.js#Q56` | bank | Electrical FLT-01 | Electric Circuits | For the network shown, Norton’s resistance RN seen at the open terminals is: | B |
| `data/electrical/st/ee-st-ec-01.js#Q13` | bank | Electrical ST-EC | Electric Circuits | A linear two-terminal network is to be replaced as seen from a load terminal. Which sta… | B |
| `data/electrical/st/ee-st-ec-01.js#Q19` | bank | Electrical ST-EC | Electric Circuits | During a relay-setting review, A linear two-terminal network is to be replaced as seen … | D |
| `data/electrical/st/ee-st-ec-01.js#Q25` | bank | Electrical ST-EC | Electric Circuits | A linear two-terminal network is to be replaced as seen from a load terminal. Which sta… | C |
| `data/electrical/st/ee-st-ec-01.js#Q31` | bank | Electrical ST-EC | Electric Circuits | A linear two-terminal network is to be replaced as seen from a load terminal. Which sta… | D |
| `data/electrical/st/ee-st-ec-01.js#Q37` | bank | Electrical ST-EC | Electric Circuits | A linear two-terminal network is to be replaced as seen from a load terminal. Which sta… | A |
| `data/electrical/st/ee-st-ec-01.js#Q43` | bank | Electrical ST-EC | Electric Circuits | A linear two-terminal network is to be replaced as seen from a load terminal. Which sta… | B |
| `data/electrical/st/ee-st-ec-01.js#Q49` | bank | Electrical ST-EC | Electric Circuits | A linear two-terminal network is to be replaced as seen from a load terminal. Which sta… | A |

**Worked elimination samples (bank keys only):**

- `data/electrical/ee-flt01.js#Q29` — keyed **C** · *Electrical FLT-01*
  - Stem: In the resistor network shown driven by Vs, the equivalent resistance Req looking into the right-hand terminals is:
  - A) 5 Ω ← strike if rule fires
  - B) 2 Ω ← strike if rule fires
  - C) 4 Ω ← KEEP (key)
  - D) 6 Ω ← strike if rule fires

- `data/electrical/ee-flt02.js#Q35` — keyed **C** · *Electrical FLT-02*
  - Stem: Superposition theorem applies to:
  - A) Only one source networks ← strike if rule fires
  - B) Only DC resistive always ← strike if rule fires
  - C) Linear bilateral networks ← KEEP (key)
  - D) Any nonlinear magnetic core ← strike if rule fires

---

## Elimination Rule 9 — Resonance / X_L = X_C identity

**Evidence status:** ESTABLISHED (≥15; independent hits = **47** = 44 bank + 3 VALID PYQ)  
**Streams:** Electrical  
**When:** Series/parallel RLC, ω0, or impedance at resonance.  
**How:** Series resonance → Z = R (min). Parallel → Z max. Eliminate options that keep j(XL−XC) nonzero at the stated resonance.

**Evidence questions (25 shown of 47 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/electrical/ee-flt01.js#Q13` | bank | Electrical FLT-01 | Power Systems | In equal-area criterion, for a sudden load rejection on a machine, accelerating area is… | A |
| `data/electrical/ee-flt02.js#Q18` | bank | Electrical FLT-02 | Electrical Machines | From the alternator phasor diagram (Ia leading Vt), the machine is operating as: | C |
| `data/electrical/st/ee-st-ec-01.js#Q11` | bank | Electrical ST-EC | Electric Circuits | Source-free series RLC underdamped ωd=: | B |
| `data/electrical/st/ee-st-em-01.js#Q3` | bank | Electrical ST-EM | Electrical Machines | Sync machine: overexcited on infinite bus behaves as: | C |
| `data/electrical/st/ee-st-pe-01.js#Q11` | bank | Electrical ST-PE | Power Electronics & Dr | At a 132/33 kV station, An scr is forward biased and receives a gate pulse. Which state… | B |
| `PYQ:APEPDCL-2014-A.ES-QUESTION-PAPER-17-08-2014.pdf#Q10` | pyq | Board VALID PYQ · APEPDCL-2014-A.ES- | Electrical | The angular frequency of resonance of the circuit is: | — |
| `PYQ:APSPDCL-AEE-2019-QUESTION-PAPER.pdf#Q10` | pyq | Board VALID PYQ · APSPDCL-AEE-2019-Q | Electrical | The graph shown in the figure represents. (\(R\), \(L\) and \(C\) have constant values) | — |
| `data/electrical/ee-flt01.js#Q19` | bank | Electrical FLT-01 | Electrical Machines | A separately excited DC motor has Va=220 V, Ra=1 Ω, Ia=20 A, φ constant. If Va is halve… | C |
| `data/electrical/ee-flt02.js#Q19` | bank | Electrical FLT-02 | Electrical Machines | Separately excited DC motor: Va=440 V, Ra=2 Ω, Ia=25 A, flux constant. If Va halved and… | A |
| `data/electrical/st/ee-st-ec-01.js#Q14` | bank | Electrical ST-EC | Electric Circuits | A series rlc circuit is adjusted to resonance. Which statement is correct? | A |
| `data/electrical/st/ee-st-em-01.js#Q14` | bank | Electrical ST-EM | Electrical Machines | A synchronous generator is operated at fixed terminal voltage and real power while exci… | D |
| `data/electrical/st/ee-st-pe-01.js#Q13` | bank | Electrical ST-PE | Power Electronics & Dr | A step-down chopper supplies a dc motor from a fixed dc source. Which statement is corr… | D |
| `PYQ:APEPDCL-2014-A.ES-QUESTION-PAPER-17-08-2014.pdf#Q54` | pyq | Board VALID PYQ · APEPDCL-2014-A.ES- | Electrical | The graph represents which of the following characteristics of DC shunt generator? | — |
| `data/electrical/ee-flt01.js#Q21` | bank | Electrical FLT-01 | Electrical Machines | Alternator: Vt=1 pu, Ia=1 pu, Xs=1.0 pu, Ra≈0, pf=0.8 lag. /Ef/ ≈: | A |
| `data/electrical/ee-flt02.js#Q21` | bank | Electrical FLT-02 | Electrical Machines | Round-rotor alternator on infinite bus: terminal voltage 1.0 pu, armature current 0.75 … | C |
| `data/electrical/st/ee-st-ec-01.js#Q20` | bank | Electrical ST-EC | Electric Circuits | A series rlc circuit is adjusted to resonance. Which statement is correct? | C |
| `data/electrical/st/ee-st-em-01.js#Q20` | bank | Electrical ST-EM | Electrical Machines | A synchronous generator is operated at fixed terminal voltage and real power while exci… | C |
| `data/electrical/st/ee-st-pe-01.js#Q16` | bank | Electrical ST-PE | Power Electronics & Dr | An scr is forward biased and receives a gate pulse. Which statement is correct? | C |
| `data/electrical/ee-flt01.js#Q32` | bank | Electrical FLT-01 | Electric Circuits | The two-port network shown has series arms Z1 and Z2 with a single shunt Z3 to the comm… | D |
| `data/electrical/ee-flt02.js#Q23` | bank | Electrical FLT-02 | Electrical Machines | V-curves of synchronous motor at fixed shaft power plot armature current against: | D |
| `data/electrical/st/ee-st-ec-01.js#Q26` | bank | Electrical ST-EC | Electric Circuits | A series rlc circuit is adjusted to resonance. Which statement is correct? | B |
| `data/electrical/st/ee-st-em-01.js#Q26` | bank | Electrical ST-EM | Electrical Machines | A synchronous generator is operated at fixed terminal voltage and real power while exci… | C |
| `data/electrical/st/ee-st-pe-01.js#Q18` | bank | Electrical ST-PE | Power Electronics & Dr | A step-down chopper supplies a dc motor from a fixed dc source. Which statement is corr… | D |
| `data/electrical/ee-flt02.js#Q28` | bank | Electrical FLT-02 | Electric Circuits | In the parallel R=300 ohm, C=5 uF branch at omega=1000 rad/s, magnitude of branch admit… | D |
| `data/electrical/st/ee-st-ec-01.js#Q32` | bank | Electrical ST-EC | Electric Circuits | A series rlc circuit is adjusted to resonance. Which statement is correct? | A |

**Worked elimination samples (bank keys only):**

- `data/electrical/ee-flt01.js#Q13` — keyed **A** · *Electrical FLT-01*
  - Stem: In equal-area criterion, for a sudden load rejection on a machine, accelerating area is bounded by:
  - A) Pm increase above Pe until δmax with equal decelerating area ← KEEP (key)
  - B) Only Pe curve below Pm forever ← strike if rule fires
  - C) Fault clearing angle alone with no Pm ← strike if rule fires
  - D) Inertia H only — angles irrelevant ← strike if rule fires

- `data/electrical/ee-flt02.js#Q18` — keyed **C** · *Electrical FLT-02*
  - Stem: From the alternator phasor diagram (Ia leading Vt), the machine is operating as:
  - A) Short-circuit test ← strike if rule fires
  - B) Zero power exchange ← strike if rule fires
  - C) Leading power-factor generator ← KEEP (key)
  - D) Lagging motor only ← strike if rule fires

---

## Elimination Rule 10 — Sign / sense / tension–compression flip

**Evidence status:** ESTABLISHED (≥15; independent hits = **270** = 259 bank + 11 VALID PYQ)  
**Streams:** Civil, Electrical  
**When:** Reactions, BMD jump, member force T/C, or direction in options.  
**How:** Fix one free-body sign convention from the figure. Eliminate options whose magnitude is right but sense (↑/↓, T/C) contradicts equilibrium.

**Evidence questions (25 shown of 270 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/civil/ce-flt01.js#Q1` | bank | Civil FLT-01 | Strength of Materials | Following a gantry-tie inspection at a substation, the engineer records a 20 mm diamete… | A |
| `data/civil/ce-flt02.js#Q1` | bank | Civil FLT-02 | Strength of Materials | A 2.0 m long steel tie of uniform 500 mm² area carries a gradually applied 50 kN servic… | C |
| `data/civil/st/ce-st-fe-01.js#Q4` | bank | Civil ST-FE | Foundation Engineering | A pile group contains 4 piles. Each pile has ultimate base resistance 600 kPa over toe … | C |
| `data/civil/st/ce-st-fm-01.js#Q2` | bank | Civil ST-FM | Fluid Mechanics and Hy | Water flows in a 0.2 m diameter pipe at mean velocity 4 m/s. Discharge is closest to: | A |
| `data/civil/st/ce-st-rcc-01.js#Q1` | bank | Civil ST-RCC | Reinforced Concrete | An RCC beam of M25 and Fe500 has factored Mu = 180 kN m, b = 230 mm and d = 450 mm. Usi… | B |
| `data/civil/st/ce-st-som-01.js#Q1` | bank | Civil ST-SOM | Strength of Materials | A steel rod 20 mm in diameter and 2 m long carries 40 kN tension. Taking E = 200 GPa, i… | B |
| `data/civil/st/ce-st-steel-01.js#Q1` | bank | Civil ST-STEEL | Steel Structures | A 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. … | B |
| `data/electrical/ee-flt01.js#Q1` | bank | Electrical FLT-01 | Power Systems | A lossless 400 kV line has Zc = 250 Ω. Its SIL (MW) is closest to: | A |
| `data/electrical/st/ee-st-em-01.js#Q10` | bank | Electrical ST-EM | Electrical Machines | Transformer cooling ONAN means: | B |
| `PYQ:2019CE1.pdf#Q7` | pyq | Board VALID PYQ · 2019CE1.pdf | Civil | Consider the pin-jointed plane truss shown in the figure (not drawn to scale). Let RP, … | — |
| `PYQ:2021CE1.pdf#Q29` | pyq | Board VALID PYQ · 2021CE1.pdf | Civil | A wedge M and a block N are subjected to forces P and Q as shown in the figure. If forc… | — |
| `PYQ:2023CE1.pdf#Q18` | pyq | Board VALID PYQ · 2023CE1.pdf | Civil | A possible slope failure is shown in the figure. Three soil samples are taken from diff… | — |
| `PYQ:2023CE2.pdf#Q40` | pyq | Board VALID PYQ · 2023CE2.pdf | Civil | Two plates are connected by fillet welds of size 10 mm and subjected to tension, as sho… | — |
| `PYQ:2025CE2.pdf#Q38` | pyq | Board VALID PYQ · 2025CE2.pdf | Civil | The figure shows a propped cantilever with uniform flexural rigidity 𝐸𝐼 (in N.m2) and s… | — |
| `PYQ:CE_2.pdf#Q18` | pyq | Board VALID PYQ · CE_2.pdf | Civil | The horizontal beam shown in the figure has fixed supports at F and L. Internal hinges … | — |
| `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q68` | pyq | Board VALID PYQ · APEPDCL-Assistant- | Electrical | Which figure represents the load characteristic of DC shunt generator? | — |
| `PYQ:3AE-CIVIL.pdf#Q41` | pyq | Board VALID PYQ · 3AE-CIVIL.pdf | Civil | For the force system shown below, the tension T1 in the rope is | — |
| `PYQ:12Managers-CIVIL.pdf#Q95` | pyq | Board VALID PYQ · 12Managers-CIVIL.p | Civil | For the L bent shown in Fig. 1, the flexural rigidity of both arms AB and BC is EI, car… | — |
| `data/civil/ce-flt01.js#Q3` | bank | Civil FLT-01 | Strength of Materials | Proof-load planning uses an overhanging beam A–B–C with supports at A and B: AB = 4 m, … | A |
| `data/civil/ce-flt02.js#Q2` | bank | Civil FLT-02 | Strength of Materials | A composite hanger has equal-length brass and steel rods connected by rigid end plates,… | D |
| `data/civil/st/ce-st-fe-01.js#Q9` | bank | Civil ST-FE | Foundation Engineering | A pile group contains 4 piles. Each pile has ultimate base resistance 600 kPa over toe … | B |
| `data/civil/st/ce-st-fm-01.js#Q3` | bank | Civil ST-FM | Fluid Mechanics and Hy | The shown venturimeter is installed in a 0.2 m diameter inlet pipe. If the inlet veloci… | D |
| `data/civil/st/ce-st-rcc-01.js#Q2` | bank | Civil ST-RCC | Reinforced Concrete | A 230 mm wide beam with effective depth 450 mm carries factored shear 125 kN at a secti… | A |
| `data/civil/st/ce-st-som-01.js#Q2` | bank | Civil ST-SOM | Strength of Materials | A simply supported beam of span 5 m carries a uniform load of 13 kN/m over the full spa… | A |
| `data/civil/st/ce-st-steel-01.js#Q2` | bank | Civil ST-STEEL | Steel Structures | A steel compression member has effective length 3.25 m and least radius of gyration 35 … | A |

**Worked elimination samples (bank keys only):**

- `data/civil/ce-flt01.js#Q1` — keyed **A** · *Civil FLT-01*
  - Stem: Following a gantry-tie inspection at a substation, the engineer records a 20 mm diameter member under 55 kN service tension in Fe250 steel. Which conclusion is most defensible before accepting the mem
  - A) Stress ≈175 MPa, below yield ← KEEP (key)
  - B) Stress ≈200 MPa, at yield ← strike if rule fires
  - C) Stress ≈350 MPa, above yield ← strike if rule fires
  - D) Stress ≈227 MPa, exactly at design strength ← strike if rule fires

- `data/civil/ce-flt02.js#Q1` — keyed **C** · *Civil FLT-02*
  - Stem: A 2.0 m long steel tie of uniform 500 mm² area carries a gradually applied 50 kN service load. Neglecting self-weight, which stress-extension pair is consistent with \(E=200\) GPa?
  - A) 50 MPa, 2.0 mm ← strike if rule fires
  - B) 100 MPa, 2.0 mm ← strike if rule fires
  - C) 100 MPa, 1.0 mm ← KEEP (key)
  - D) 200 MPa, 1.0 mm ← strike if rule fires

---

## Elimination Rule 11 — Figure-dependency: cover the figure test

**Evidence status:** ESTABLISHED (≥15; independent hits = **304** = 109 bank + 195 VALID PYQ)  
**Streams:** Civil, Electrical  
**When:** Stem says ‘shown’, ‘figure’, or options name Detail/Curve labels.  
**How:** If you can pick the answer without the figure, stop — stem/figure mismatch. Otherwise eliminate options that ignore a labelled dimension, support, or curve on the crop.

**Evidence questions (25 shown of 304 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/civil/ce-flt01.js#Q3` | bank | Civil FLT-01 | Strength of Materials | Proof-load planning uses an overhanging beam A–B–C with supports at A and B: AB = 4 m, … | A |
| `data/civil/ce-flt02.js#Q3` | bank | Civil FLT-02 | Strength of Materials | The overhanging beam in the crop carries the shown point load and UDL; span lengths and… | A |
| `data/civil/st/ce-st-fe-01.js#Q3` | bank | Civil ST-FE | Foundation Engineering | The shown square footing distributes a concentric service load of 260 kN over a 2.3 m ×… | D |
| `data/civil/st/ce-st-fm-01.js#Q3` | bank | Civil ST-FM | Fluid Mechanics and Hy | The shown venturimeter is installed in a 0.2 m diameter inlet pipe. If the inlet veloci… | D |
| `data/civil/st/ce-st-rcc-01.js#Q3` | bank | Civil ST-RCC | Reinforced Concrete | In the shown slab panel, supports are along the long edges and Lx = 3.3 m while Ly = 6.… | D |
| `data/civil/st/ce-st-soil-01.js#Q3` | bank | Civil ST-SOIL | Soil Mechanics | The shown compaction curve has a distinct peak. A 230 m³ embankment lot is compacted at… | D |
| `data/civil/st/ce-st-som-01.js#Q3` | bank | Civil ST-SOM | Strength of Materials | The mild-steel stress–strain figure identifies point C as the ultimate point. If a spec… | D |
| `data/civil/st/ce-st-steel-01.js#Q3` | bank | Civil ST-STEEL | Steel Structures | The shown bolted lap joint transfers the load through 4 identical bolts. If each bolt h… | D |
| `data/electrical/ee-flt01.js#Q4` | bank | Electrical FLT-01 | Power Systems | In the system shown (breakers B1–B9 with relays R1–R9), some relays are directional. Fo… | D |
| `data/electrical/ee-flt02.js#Q4` | bank | Electrical FLT-02 | Power Systems | Referring to the single-line diagram (breakers B1–B8, buses 1–3, directional relays R2–… | B |
| `PYQ:2019CE1.pdf#Q5` | pyq | Board VALID PYQ · 2019CE1.pdf | Civil | A plane truss is shown in the figure (not drawn to scale). Which one of the options con… | — |
| `PYQ:2019CE2.pdf#Q27` | pyq | Board VALID PYQ · 2019CE2.pdf | Civil | Consider the hemi-spherical tank of radius 13 m as shown in the figure (not drawn to sc… | — |
| `PYQ:2021CE1.pdf#Q8` | pyq | Board VALID PYQ · 2021CE1.pdf | Civil | Five line segments of equal lengths, PR, PS, QS, QT and RT are used to form a star as s… | — |
| `PYQ:2021CE2.pdf#Q9` | pyq | Board VALID PYQ · 2021CE2.pdf | Civil | In the figure shown above, PQRS is a square. The shaded portion is formed by the inters… | — |
| `PYQ:2022CE1.pdf#Q5` | pyq | Board VALID PYQ · 2022CE1.pdf | Civil | In the following diagram, the point R is the center of the circle. The lines PQ and ZV … | — |
| `PYQ:2022CE2.pdf#Q16` | pyq | Board VALID PYQ · 2022CE2.pdf | Civil | Consider a beam PQ fixed at P, hinged at Q, and subjected to a load F as shown in figur… | — |
| `PYQ:2023CE1.pdf#Q3` | pyq | Board VALID PYQ · 2023CE1.pdf | Civil | In the given figure, PQRSTV is a regular hexagon with each side of length 5 cm. A circl… | — |
| `PYQ:2023CE2.pdf#Q17` | pyq | Board VALID PYQ · 2023CE2.pdf | Civil | Muller-Breslau principle is used in analysis of structures for _______________. | — |
| `PYQ:2025CE1.pdf#Q17` | pyq | Board VALID PYQ · 2025CE1.pdf | Civil | The results of a consolidated drained triaxial test on a normally consolidated clay are… | — |
| `PYQ:2025CE2.pdf#Q4` | pyq | Board VALID PYQ · 2025CE2.pdf | Civil | In the context of the given figure, which one of the following options correctly repres… | — |
| `PYQ:CE_1.pdf#Q2` | pyq | Board VALID PYQ · CE_1.pdf | Civil | The figure below is supposed to show three non-overlapping shapes – one oval and two tr… | — |
| `PYQ:CE_2.pdf#Q8` | pyq | Board VALID PYQ · CE_2.pdf | Civil | Consider a string P of length 𝑙 that is laid out as a straight-line segment. Another st… | — |
| `PYQ:2019EE.pdf#Q12` | pyq | Board VALID PYQ · 2019EE.pdf | Electrical | In the circuit shown below, the switch is closed at t = 0. The value of θ in degrees wh… | — |
| `PYQ:2021EE.pdf#Q7` | pyq | Board VALID PYQ · 2021EE.pdf | Electrical | In the figure shown above, each inside square is formed by joining the midpoints of the… | — |
| `PYQ:2022EE.pdf#Q5` | pyq | Board VALID PYQ · 2022EE.pdf | Electrical | The figure below shows the front and rear view of a disc, which is shaded with identica… | — |

**Worked elimination samples (bank keys only):**

- `data/civil/ce-flt01.js#Q3` — keyed **A** · *Civil FLT-01*
  - Stem: Proof-load planning uses an overhanging beam A–B–C with supports at A and B: AB = 4 m, overhang BC = 2 m, UDL w = 10 kN/m over AB, and a tip load P = 20 kN at C (also shown on the figure). Which suppo
  - A) 10 kN, 50 kN ← KEEP (key)
  - B) 15 kN, 45 kN ← strike if rule fires
  - C) 20 kN, 40 kN ← strike if rule fires
  - D) 25 kN, 35 kN ← strike if rule fires

- `data/civil/ce-flt02.js#Q3` — keyed **A** · *Civil FLT-02*
  - Stem: The overhanging beam in the crop carries the shown point load and UDL; span lengths and load locations appear only in the figure. Taking moments about the left support, which listed pair gives the two
  - A) 14 kN, 36 kN ← KEEP (key)
  - B) 18 kN, 32 kN ← strike if rule fires
  - C) 24 kN, 26 kN ← strike if rule fires
  - D) 30 kN, 20 kN ← strike if rule fires

---

## Elimination Rule 12 — Rankine / Terzaghi / earth-pressure term drop

**Evidence status:** ESTABLISHED (≥15; independent hits = **86** = 85 bank + 1 VALID PYQ)  
**Streams:** Civil  
**When:** Bearing capacity or lateral earth pressure with Nc, Nq, Nγ or Ka/Kp.  
**How:** Write the full Terzaghi/Rankine expression. Eliminate options that drop the γBN term, swap Ka↔Kp, or use dry γ when stem says submerged.

**Evidence questions (25 shown of 86 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/civil/ce-flt01.js#Q11` | bank | Civil FLT-01 | Strength of Materials | During buckling checks for a slender pin-ended strut, a junior engineer proposes to use… | C |
| `data/civil/ce-flt02.js#Q9` | bank | Civil FLT-02 | Strength of Materials | A simply supported deep timber beam develops horizontal cracks near the neutral axis al… | B |
| `data/civil/st/ce-st-fe-01.js#Q1` | bank | Civil ST-FE | Foundation Engineering | For a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2… | B |
| `data/civil/st/ce-st-rcc-01.js#Q5` | bank | Civil ST-RCC | Reinforced Concrete | A square footing 2.1 m by 2.1 m carries a service column load of 190 kN (self-weight ig… | B |
| `data/civil/st/ce-st-steel-01.js#Q3` | bank | Civil ST-STEEL | Steel Structures | The shown bolted lap joint transfers the load through 4 identical bolts. If each bolt h… | D |
| `PYQ:2023CE1.pdf#Q46` | pyq | Board VALID PYQ · 2023CE1.pdf | Civil | A plot of speed-density relationship (linear) of two roads (Road A and Road B) is shown… | — |
| `data/civil/ce-flt01.js#Q38` | bank | Civil FLT-01 | Fluid Mechanics & Hydr | At pump inspection during a commissioning hold, crackling noise, fluctuating delivery h… | C |
| `data/civil/ce-flt02.js#Q38` | bank | Civil FLT-02 | Fluid Mechanics & Hydr | At the suction eye of a centrifugal pump, measured absolute head falls close to vapour-… | D |
| `data/civil/st/ce-st-fe-01.js#Q3` | bank | Civil ST-FE | Foundation Engineering | The shown square footing distributes a concentric service load of 260 kN over a 2.3 m ×… | D |
| `data/civil/st/ce-st-rcc-01.js#Q10` | bank | Civil ST-RCC | Reinforced Concrete | A square footing 2 m by 2 m carries a service column load of 180 kN (self-weight ignore… | A |
| `data/civil/st/ce-st-steel-01.js#Q4` | bank | Civil ST-STEEL | Steel Structures | A lap connection has 4 bearing-type bolts, each with governing design shear capacity 48… | C |
| `data/civil/ce-flt01.js#Q53` | bank | Civil FLT-01 | Foundation Engineering | Primary consolidation under a shallow footing uses two clay layers (also tabulated on t… | D |
| `data/civil/ce-flt02.js#Q42` | bank | Civil FLT-02 | Steel Structures | A bearing-type bolted splice is subjected to load reversal. Shop inspection finds overs… | A |
| `data/civil/st/ce-st-fe-01.js#Q5` | bank | Civil ST-FE | Foundation Engineering | A 6 m high vertical retaining wall retains dry sand with γ = 18 kN/m³ and φ = 30°. Usin… | B |
| `data/civil/st/ce-st-rcc-01.js#Q15` | bank | Civil ST-RCC | Reinforced Concrete | A square footing 2.2 m by 2.2 m carries a service column load of 200 kN (self-weight ig… | D |
| `data/civil/st/ce-st-steel-01.js#Q5` | bank | Civil ST-STEEL | Steel Structures | A column base plate is 300 mm × 300 mm and transmits 650 kN concentric compression to c… | B |
| `data/civil/ce-flt01.js#Q55` | bank | Civil FLT-01 | Foundation Engineering | A square footing sized for allowable net bearing pressure under the service column load… | A |
| `data/civil/ce-flt02.js#Q46` | bank | Civil FLT-02 | Steel Structures | Match limit state with the most relevant evidence: (1) block shear, (2) web crippling, … | C |
| `data/civil/st/ce-st-fe-01.js#Q6` | bank | Civil ST-FE | Foundation Engineering | For a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2… | A |
| `data/civil/st/ce-st-rcc-01.js#Q20` | bank | Civil ST-RCC | Reinforced Concrete | A square footing 2.1 m by 2.1 m carries a service column load of 190 kN (self-weight ig… | C |
| `data/civil/st/ce-st-steel-01.js#Q8` | bank | Civil ST-STEEL | Steel Structures | The shown bolted lap joint transfers the load through 6 identical bolts. If each bolt h… | C |
| `data/civil/ce-flt01.js#Q56` | bank | Civil FLT-01 | Foundation Engineering | In preliminary footing sizing for a lightly loaded column, the net ultimate bearing cap… | C |
| `data/civil/ce-flt02.js#Q48` | bank | Civil FLT-02 | Steel Structures | A double-cover butt splice places each bolt in double shear, but the connected main pla… | A |
| `data/civil/st/ce-st-fe-01.js#Q8` | bank | Civil ST-FE | Foundation Engineering | The shown square footing distributes a concentric service load of 360 kN over a 2.8 m ×… | C |
| `data/civil/st/ce-st-rcc-01.js#Q30` | bank | Civil ST-RCC | Reinforced Concrete | A square footing 2.2 m by 2.2 m carries a service column load of 200 kN (self-weight ig… | A |

**Worked elimination samples (bank keys only):**

- `data/civil/ce-flt01.js#Q11` — keyed **C** · *Civil FLT-01*
  - Stem: During buckling checks for a slender pin-ended strut, a junior engineer proposes to use the classical Euler formula. Which statement is NOT an assumption of elementary Euler column theory?
  - A) The column is initially straight and the axial load is concentric ← strike if rule fires
  - B) The material remains linearly elastic up to the buckling load ← strike if rule fires
  - C) The column’s self-weight is included as a distributed axial compressive load in the ideal Euler model ← KEEP (key)
  - D) Plane sections remain plane and shear deformation is neglected in the bending idealisation ← strike if rule fires

- `data/civil/ce-flt02.js#Q9` — keyed **B** · *Civil FLT-02*
  - Stem: A simply supported deep timber beam develops horizontal cracks near the neutral axis although bending stresses at the extreme fibres remain below allowable values. Which diagnosis and strengthening di
  - A) Flexural crushing; remove support blocks ← strike if rule fires
  - B) Shear splitting; improve web/shear transfer near supports ← KEEP (key)
  - C) Torsional buckling; reduce width ← strike if rule fires
  - D) Bearing failure; cut a notch at the support ← strike if rule fires

---

## Elimination Rule 13 — Mohr / principal-stress pair consistency

**Evidence status:** ESTABLISHED (≥15; independent hits = **26** = 23 bank + 3 VALID PYQ)  
**Streams:** Civil  
**When:** σx, σy, τxy given; options are σ1, σ2, or θp.  
**How:** σavg = (σx+σy)/2; R = √[((σx−σy)/2)²+τ²]. Eliminate pairs that violate σ1+σ2 = σx+σy or that treat τ as a normal stress.

**Evidence questions (25 shown of 26 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/civil/ce-flt01.js#Q5` | bank | Civil FLT-01 | Strength of Materials | While interpreting a strain-rosette investigation on a critical plane-stress element, t… | D |
| `data/civil/ce-flt02.js#Q12` | bank | Civil FLT-02 | Strength of Materials | At a point, \(\sigma_x=80\) MPa tension, \(\sigma_y=20\) MPa compression and \(\tau_{xy… | C |
| `data/civil/st/ce-st-rcc-01.js#Q4` | bank | Civil ST-RCC | Reinforced Concrete | A 300 mm × 300 mm short tied column carries factored axial load 1050 kN. The average fa… | C |
| `data/civil/st/ce-st-som-01.js#Q13` | bank | Civil ST-SOM | Strength of Materials | At a point in a plate, σx = 92 MPa, σy = 22 MPa and τxy = 30 MPa. The major principal s… | B |
| `PYQ:2019CE2.pdf#Q29` | pyq | Board VALID PYQ · 2019CE2.pdf | Civil | For a plane stress problem, the state of stress at a point P is represented by the stre… | — |
| `PYQ:2022CE2.pdf#Q18` | pyq | Board VALID PYQ · 2022CE2.pdf | Civil | Stresses acting on an infinitesimal soil element are shown in the figure (with 𝜎௭> 𝜎௫ )… | — |
| `PYQ:2023CE2.pdf#Q39` | pyq | Board VALID PYQ · 2023CE2.pdf | Civil | In a two-dimensional stress analysis, the state of stress at a point is shown in the fi… | — |
| `data/civil/ce-flt01.js#Q43` | bank | Civil FLT-01 | Steel Structures | A built-up column reviewed in the design office has different effective lengths and dif… | C |
| `data/civil/ce-flt02.js#Q13` | bank | Civil FLT-02 | Strength of Materials | A circular shaft \(d=60\) mm transmits 12 kN·m torque while carrying 80 kN tensile forc… | B |
| `data/civil/st/ce-st-rcc-01.js#Q9` | bank | Civil ST-RCC | Reinforced Concrete | A 300 mm × 300 mm short tied column carries factored axial load 900 kN. The average fac… | B |
| `data/civil/st/ce-st-som-01.js#Q18` | bank | Civil ST-SOM | Strength of Materials | At a point in a plate, σx = 97 MPa, σy = 22 MPa and τxy = 35 MPa. The major principal s… | A |
| `data/civil/ce-flt01.js#Q51` | bank | Civil FLT-01 | Steel Structures | While checking an inclined-roof purlin under combined gravity and wind-reversal actions… | D |
| `data/civil/ce-flt02.js#Q51` | bank | Civil FLT-02 | Steel Structures | A roof purlin under gravity and wind is connected so that loading is inclined to its pr… | A |
| `data/civil/st/ce-st-rcc-01.js#Q24` | bank | Civil ST-RCC | Reinforced Concrete | A 300 mm × 300 mm short tied column carries factored axial load 1050 kN. The average fa… | C |
| `data/civil/st/ce-st-som-01.js#Q23` | bank | Civil ST-SOM | Strength of Materials | At a point in a plate, σx = 102 MPa, σy = 22 MPa and τxy = 34 MPa. The major principal … | D |
| `data/civil/ce-flt01.js#Q53` | bank | Civil FLT-01 | Foundation Engineering | Primary consolidation under a shallow footing uses two clay layers (also tabulated on t… | D |
| `data/civil/ce-flt02.js#Q52` | bank | Civil FLT-02 | Foundation Engineering | A footing is called “compensated” when excavation removes soil weight that offsets part… | B |
| `data/civil/st/ce-st-rcc-01.js#Q29` | bank | Civil ST-RCC | Reinforced Concrete | A 300 mm × 300 mm short tied column carries factored axial load 900 kN. The average fac… | B |
| `data/civil/st/ce-st-som-01.js#Q28` | bank | Civil ST-SOM | Strength of Materials | At a point in a plate, σx = 107 MPa, σy = 22 MPa and τxy = 33 MPa. The major principal … | C |
| `data/civil/st/ce-st-rcc-01.js#Q34` | bank | Civil ST-RCC | Reinforced Concrete | A 300 mm × 300 mm short tied column carries factored axial load 950 kN. The average fac… | A |
| `data/civil/st/ce-st-som-01.js#Q33` | bank | Civil ST-SOM | Strength of Materials | At a point in a plate, σx = 112 MPa, σy = 22 MPa and τxy = 32 MPa. The major principal … | B |
| `data/civil/st/ce-st-rcc-01.js#Q44` | bank | Civil ST-RCC | Reinforced Concrete | A 300 mm × 300 mm short tied column carries factored axial load 1050 kN. The average fa… | C |
| `data/civil/st/ce-st-som-01.js#Q38` | bank | Civil ST-SOM | Strength of Materials | At a point in a plate, σx = 117 MPa, σy = 22 MPa and τxy = 31 MPa. The major principal … | A |
| `data/civil/st/ce-st-rcc-01.js#Q49` | bank | Civil ST-RCC | Reinforced Concrete | A 300 mm × 300 mm short tied column carries factored axial load 900 kN. The average fac… | B |
| `data/civil/st/ce-st-som-01.js#Q43` | bank | Civil ST-SOM | Strength of Materials | At a point in a plate, σx = 122 MPa, σy = 22 MPa and τxy = 30 MPa. The major principal … | D |

**Worked elimination samples (bank keys only):**

- `data/civil/ce-flt01.js#Q5` — keyed **D** · *Civil FLT-01*
  - Stem: While interpreting a strain-rosette investigation on a critical plane-stress element, the engineer reviews Mohr-circle geometry against competing claims about circle placement. Assertion: the centre o
  - A) Both true; R explains A ← strike if rule fires
  - B) Both true; R does not explain A ← strike if rule fires
  - C) A false, R true ← strike if rule fires
  - D) A true, R false ← KEEP (key)

- `data/civil/ce-flt02.js#Q12` — keyed **C** · *Civil FLT-02*
  - Stem: At a point, \(\sigma_x=80\) MPa tension, \(\sigma_y=20\) MPa compression and \(\tau_{xy}=30\) MPa. Determine the major principal stress and the approximate angle of its plane normal from the x-axis.
  - A) 108.3 MPa, 74.5° ← strike if rule fires
  - B) 100 MPa, 30° ← strike if rule fires
  - C) 88.3 MPa, 15.5° ← KEEP (key)
  - D) 50 MPa, 45° ← strike if rule fires

---

## Elimination Rule 14 — SFD↔BMD jump / couple vs point-load confusion

**Evidence status:** ESTABLISHED (≥15; independent hits = **39** = 34 bank + 5 VALID PYQ)  
**Streams:** Civil  
**When:** Beam figure with point load, UDL, or couple; options describe jumps.  
**How:** Point load → shear jump; couple → moment jump (no shear jump). Eliminate options that swap those rules.

**Evidence questions (25 shown of 39 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/civil/ce-flt01.js#Q9` | bank | Civil FLT-01 | Strength of Materials | On the plotted bending-moment diagram, a marked vertical jump occurs at section C while… | A |
| `data/civil/ce-flt02.js#Q14` | bank | Civil FLT-02 | Strength of Materials | Match loading change with the qualitative SFD/BMD consequence: (1) point load, (2) appl… | D |
| `data/civil/st/ce-st-rcc-01.js#Q1` | bank | Civil ST-RCC | Reinforced Concrete | An RCC beam of M25 and Fe500 has factored Mu = 180 kN m, b = 230 mm and d = 450 mm. Usi… | B |
| `data/civil/st/ce-st-som-01.js#Q2` | bank | Civil ST-SOM | Strength of Materials | A simply supported beam of span 5 m carries a uniform load of 13 kN/m over the full spa… | A |
| `PYQ:2022CE1.pdf#Q37` | pyq | Board VALID PYQ · 2022CE1.pdf | Civil | A semi-circular bar of radius R m, in a vertical plane, is fixed at the end G, as shown… | — |
| `PYQ:2023CE1.pdf#Q49` | pyq | Board VALID PYQ · 2023CE1.pdf | Civil | Consider the beam shown in the figure (not to scale), on a hinge support at end A and a… | — |
| `PYQ:2025CE1.pdf#Q29` | pyq | Board VALID PYQ · 2025CE1.pdf | Civil | Consider the frame shown in the figure under the loading of 100 kN.m couples at the joi… | — |
| `PYQ:CE_1.pdf#Q39` | pyq | Board VALID PYQ · CE_1.pdf | Civil | The plane frame has a hinge and a roller support, and is loaded as shown in the figure.… | — |
| `data/civil/ce-flt01.js#Q24` | bank | Civil FLT-01 | RCC / DDRC | In design review, factored moment is 160 kN·m while the limiting singly reinforced capa… | C |
| `data/civil/ce-flt02.js#Q25` | bank | Civil FLT-02 | RCC / DDRC | A beam has \(M_{u,\lim}=180\) kN·m and must resist 240 kN·m. The compression-steel coup… | C |
| `data/civil/st/ce-st-rcc-01.js#Q2` | bank | Civil ST-RCC | Reinforced Concrete | A 230 mm wide beam with effective depth 450 mm carries factored shear 125 kN at a secti… | A |
| `data/civil/st/ce-st-som-01.js#Q7` | bank | Civil ST-SOM | Strength of Materials | A simply supported beam of span 4 m carries a uniform load of 14 kN/m over the full spa… | D |
| `PYQ:2025CE1.pdf#Q41` | pyq | Board VALID PYQ · 2025CE1.pdf | Civil | Consider the beam ACDEB given in the figure. Which of the following statements is/are c… | — |
| `data/civil/ce-flt01.js#Q25` | bank | Civil FLT-01 | RCC / DDRC | A design review finds that the factored moment exceeds the limiting capacity of the sam… | C |
| `data/civil/ce-flt02.js#Q27` | bank | Civil FLT-02 | RCC / DDRC | A one-way slab is made deeper without changing span, loading or steel grade, and is the… | A |
| `data/civil/st/ce-st-rcc-01.js#Q6` | bank | Civil ST-RCC | Reinforced Concrete | An RCC beam of M25 and Fe500 has factored Mu = 185 kN m, b = 230 mm and d = 450 mm. Usi… | A |
| `data/civil/st/ce-st-som-01.js#Q12` | bank | Civil ST-SOM | Strength of Materials | A simply supported beam of span 6 m carries a uniform load of 15 kN/m over the full spa… | C |
| `data/civil/ce-flt01.js#Q31` | bank | Civil FLT-01 | Fluid Mechanics & Hydr | In a spillway stilling-basin design review, the hydraulic engineer debates energy dissi… | D |
| `data/civil/st/ce-st-rcc-01.js#Q7` | bank | Civil ST-RCC | Reinforced Concrete | A 230 mm wide beam with effective depth 450 mm carries factored shear 130 kN at a secti… | D |
| `data/civil/st/ce-st-som-01.js#Q17` | bank | Civil ST-SOM | Strength of Materials | A simply supported beam of span 5 m carries a uniform load of 12 kN/m over the full spa… | B |
| `data/civil/ce-flt01.js#Q61` | bank | Civil FLT-01 | Foundation Engineering | Detailing of a property-line foundation uses a stiff strap that connects the exterior a… | C |
| `data/civil/st/ce-st-rcc-01.js#Q11` | bank | Civil ST-RCC | Reinforced Concrete | An RCC beam of M25 and Fe500 has factored Mu = 190 kN m, b = 230 mm and d = 450 mm. Usi… | D |
| `data/civil/st/ce-st-som-01.js#Q22` | bank | Civil ST-SOM | Strength of Materials | A simply supported beam of span 4 m carries a uniform load of 13 kN/m over the full spa… | A |
| `data/civil/st/ce-st-rcc-01.js#Q12` | bank | Civil ST-RCC | Reinforced Concrete | A 230 mm wide beam with effective depth 450 mm carries factored shear 135 kN at a secti… | C |
| `data/civil/st/ce-st-som-01.js#Q27` | bank | Civil ST-SOM | Strength of Materials | A simply supported beam of span 6 m carries a uniform load of 14 kN/m over the full spa… | D |

**Worked elimination samples (bank keys only):**

- `data/civil/ce-flt01.js#Q9` — keyed **A** · *Civil FLT-01*
  - Stem: On the plotted bending-moment diagram, a marked vertical jump occurs at section C while shear remains finite on both sides of C and no local section change is recorded (jump labelled at C on the figur
  - A) A concentrated couple acts at C ← KEEP (key)
  - B) A point load acts at C ← strike if rule fires
  - C) A UDL starts at C ← strike if rule fires
  - D) The flexural rigidity changes at C ← strike if rule fires

- `data/civil/ce-flt02.js#Q14` — keyed **D** · *Civil FLT-02*
  - Stem: Match loading change with the qualitative SFD/BMD consequence: (1) point load, (2) applied couple, (3) UDL, (4) no distributed load; (p) jump in SFD, (q) jump in BMD, (r) linear SFD, (s) constant SFD.
  - A) 1-q,2-p,3-s,4-r ← strike if rule fires
  - B) 1-r,2-s,3-p,4-q ← strike if rule fires
  - C) 1-s,2-r,3-q,4-p ← strike if rule fires
  - D) 1-p,2-q,3-r,4-s ← KEEP (key)

---

## Elimination Rule 15 — SCR / PE latching vs holding vs firing

**Evidence status:** ESTABLISHED (≥15; independent hits = **18** = 14 bank + 4 VALID PYQ)  
**Streams:** Electrical  
**When:** Thyristor/SCR gate, latching, holding, or commutation options.  
**How:** Latching > holding; latching is the current to *establish* conduction after gate pulse. Eliminate options that swap latching↔holding or that set gate width from holding current alone.

**Evidence questions (18 shown of 18 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/electrical/ee-flt01.js#Q47` | bank | Electrical FLT-01 | Power Electronics & Dr | An SCR turns off when which condition is met for sufficient time? | C |
| `data/electrical/ee-flt02.js#Q47` | bank | Electrical FLT-02 | Power Electronics & Dr | After latch, SCR stays on until anode current falls below: | D |
| `data/electrical/st/ee-st-pe-01.js#Q1` | bank | Electrical ST-PE | Power Electronics & Dr | SCR latching current is: | C |
| `PYQ:2026EE.pdf#Q28` | pyq | Board VALID PYQ · 2026EE.pdf | Electrical | Consider the circuit shown in Figure | — |
| `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q77` | pyq | Board VALID PYQ · APEPDCL-Assistant- | Electrical | For the converter shown below, firing angle for thyristors `T1` and `T2` is `π/6`; firi… | — |
| `PYQ:AP-GENCO-Tech-2012.pdf#Q10` | pyq | Board VALID PYQ · AP-GENCO-Tech-2012 | Electrical | The latching current of T1 is 1 mA. The minimum width of gate pulse required to turn on… | — |
| `data/electrical/ee-flt02.js#Q53` | bank | Electrical FLT-02 | Power Electronics & Dr | In field, class-F (line) commutation of SCR succeeds when: | C |
| `data/electrical/st/ee-st-pe-01.js#Q6` | bank | Electrical ST-PE | Power Electronics & Dr | Gate pulse width for SCR with inductive load must ensure: | B |
| `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q78` | pyq | Board VALID PYQ · APEPDCL-Assistant- | Electrical | In the figure shown below, a thyristor-based 1-φ voltage regulator with firing angle `α… | — |
| `data/electrical/st/ee-st-pe-01.js#Q8` | bank | Electrical ST-PE | Power Electronics & Dr | Commutation in class B (self) SCR circuit uses: | A |
| `data/electrical/st/ee-st-pe-01.js#Q11` | bank | Electrical ST-PE | Power Electronics & Dr | At a 132/33 kV station, An scr is forward biased and receives a gate pulse. Which state… | B |
| `data/electrical/st/ee-st-pe-01.js#Q16` | bank | Electrical ST-PE | Power Electronics & Dr | An scr is forward biased and receives a gate pulse. Which statement is correct? | C |
| `data/electrical/st/ee-st-pe-01.js#Q21` | bank | Electrical ST-PE | Power Electronics & Dr | An scr is forward biased and receives a gate pulse. Which statement is correct? | C |
| `data/electrical/st/ee-st-pe-01.js#Q26` | bank | Electrical ST-PE | Power Electronics & Dr | An scr is forward biased and receives a gate pulse. Which statement is correct? | D |
| `data/electrical/st/ee-st-pe-01.js#Q31` | bank | Electrical ST-PE | Power Electronics & Dr | An scr is forward biased and receives a gate pulse. Which statement is correct? | D |
| `data/electrical/st/ee-st-pe-01.js#Q36` | bank | Electrical ST-PE | Power Electronics & Dr | An scr is forward biased and receives a gate pulse. Which statement is correct? | B |
| `data/electrical/st/ee-st-pe-01.js#Q41` | bank | Electrical ST-PE | Power Electronics & Dr | An scr is forward biased and receives a gate pulse. Which statement is correct? | D |
| `data/electrical/st/ee-st-pe-01.js#Q46` | bank | Electrical ST-PE | Power Electronics & Dr | An scr is forward biased and receives a gate pulse. Which statement is correct? | B |

**Worked elimination samples (bank keys only):**

- `data/electrical/ee-flt01.js#Q47` — keyed **C** · *Electrical FLT-01*
  - Stem: An SCR turns off when which condition is met for sufficient time?
  - A) Gate pulse remains forever ← strike if rule fires
  - B) Only raising gate current ← strike if rule fires
  - C) Anode current falls below holding current ← KEEP (key)
  - D) Voltage zero is never needed in any circuit ← strike if rule fires

- `data/electrical/ee-flt02.js#Q47` — keyed **D** · *Electrical FLT-02*
  - Stem: After latch, SCR stays on until anode current falls below:
  - A) Surge rating ← strike if rule fires
  - B) Gate current Ig ← strike if rule fires
  - C) Latching current IL always higher only ← strike if rule fires
  - D) Holding current IH ← KEEP (key)

---

## Elimination Rule 16 — Non-core: option that abandons the asked operation

**Evidence status:** ESTABLISHED (≥15; independent hits = **37** = 37 bank + 0 VALID PYQ)  
**Streams:** Non-core  
**When:** Quant / reasoning / English — one option changes the operation (%, SI, tense, code).  
**How:** Re-state the exact ask (20% of 450; SI for 2 years; passive of present perfect). Eliminate options that solve a different operation (CI instead of SI, active instead of passive).

**Evidence questions (25 shown of 37 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/civil/ce-flt01.js#Q72` | bank | Civil FLT-01 | Quantitative Aptitude | A transmission-estimate package rises from ₹8.0 crore to ₹9.2 crore after a design revi… | B |
| `data/civil/ce-flt02.js#Q73` | bank | Civil FLT-02 | Quantitative Aptitude | A price rises 20%, falls 10%, then attracts 5% tax. Relative to the original pre-tax pr… | B |
| `data/electrical/ee-flt01.js#Q72` | bank | Electrical FLT-01 | Quantitative Aptitude | A transmission-estimate package rises from ₹8.0 crore to ₹9.2 crore after a design revi… | B |
| `data/electrical/ee-flt02.js#Q77` | bank | Electrical FLT-02 | Quantitative Aptitude | Contractor buys equipment for Rs 240000 and sells for Rs 276000. Profit percent on cost… | D |
| `data/noncore/st/nc-st-ar-01.js#Q1` | bank | Non-core ST-AR | Aptitude & Reasoning | A stores ledger records 450 cable drums. The value of 20% of this quantity is: | A |
| `data/noncore/st/nc-st-gec-01.js#Q4` | bank | Non-core ST-GEC | GA · English · Compute | Choose correct passive: 'They are repairing the line.': | B |
| `data/civil/ce-flt01.js#Q76` | bank | Civil FLT-01 | Quantitative Aptitude | A mobilisation advance of ₹5,00,000 is charged simple interest at 12% per annum for 8 m… | B |
| `data/civil/ce-flt02.js#Q78` | bank | Civil FLT-02 | Quantitative Aptitude | A square’s diagonal is increased by 10% while shape remains square. By what percentage … | B |
| `data/electrical/ee-flt01.js#Q76` | bank | Electrical FLT-01 | Quantitative Aptitude | A mobilisation advance of ₹5,00,000 is charged simple interest at 12% per annum for 8 m… | B |
| `data/electrical/ee-flt02.js#Q92` | bank | Electrical FLT-02 | English Language & Com | Choose passive: The technician calibrated the protection relay.: | C |
| `data/noncore/st/nc-st-ar-01.js#Q2` | bank | Non-core ST-AR | Aptitude & Reasoning | Simple interest on ₹10,000 at 10% per annum for 2 years is: | C |
| `data/noncore/st/nc-st-gec-01.js#Q13` | bank | Non-core ST-GEC | GA · English · Compute | The sentence 'the engineer completed the report' is converted to passive voice. Which s… | B |
| `data/civil/ce-flt01.js#Q77` | bank | Civil FLT-01 | Quantitative Aptitude | A contractor’s quoted cost for a bay package is ₹12 lakh. He allows 10% discount on the… | B |
| `data/civil/ce-flt02.js#Q88` | bank | Civil FLT-02 | Reasoning & General In | In a code, each letter is shifted alternately +2, −1, +2, −1. How is GRID coded? | C |
| `data/electrical/ee-flt01.js#Q77` | bank | Electrical FLT-01 | Quantitative Aptitude | A contractor’s quoted cost for a bay package is ₹12 lakh. He allows 10% discount on the… | B |
| `data/noncore/st/nc-st-ar-01.js#Q3` | bank | Non-core ST-AR | Aptitude & Reasoning | Average of 5,7,9,11,13: | D |
| `data/noncore/st/nc-st-gec-01.js#Q22` | bank | Non-core ST-GEC | GA · English · Compute | The sentence 'the engineer completed the report' is converted to passive voice. Which s… | D |
| `data/civil/ce-flt01.js#Q86` | bank | Civil FLT-01 | Reasoning & General In | In a certain code used in a mock dispatch sheet, each letter is shifted +1, −1, +1, −1…… | C |
| `data/electrical/ee-flt01.js#Q86` | bank | Electrical FLT-01 | Reasoning & General In | In a certain code used in a mock dispatch sheet, each letter is shifted +1, −1, +1, −1…… | C |
| `data/noncore/st/nc-st-ar-01.js#Q7` | bank | Non-core ST-AR | Aptitude & Reasoning | CP 800 SP 1000 profit%: | A |
| `data/noncore/st/nc-st-gec-01.js#Q31` | bank | Non-core ST-GEC | GA · English · Compute | The sentence 'the engineer completed the report' is converted to passive voice. Which s… | B |
| `data/civil/ce-flt01.js#Q92` | bank | Civil FLT-01 | English Language & Com | Choose the correct passive form of: “The engineer verified the relay settings.” | A |
| `data/electrical/ee-flt01.js#Q92` | bank | Electrical FLT-01 | English Language & Com | Choose the correct passive form of: “The engineer verified the relay settings.”: | A |
| `data/noncore/st/nc-st-ar-01.js#Q19` | bank | Non-core ST-AR | Aptitude & Reasoning | During a relay-setting review, A candidate allocates 20% of a quantity of 450 units. Wh… | B |
| `data/noncore/st/nc-st-gec-01.js#Q40` | bank | Non-core ST-GEC | GA · English · Compute | The sentence 'the engineer completed the report' is converted to passive voice. Which s… | C |

**Worked elimination samples (bank keys only):**

- `data/civil/ce-flt01.js#Q72` — keyed **B** · *Civil FLT-01*
  - Stem: A transmission-estimate package rises from ₹8.0 crore to ₹9.2 crore after a design revision. The percentage increase is:
  - A) 12% ← strike if rule fires
  - B) 15% ← KEEP (key)
  - C) 18% ← strike if rule fires
  - D) 20% ← strike if rule fires

- `data/civil/ce-flt02.js#Q73` — keyed **B** · *Civil FLT-02*
  - Stem: A price rises 20%, falls 10%, then attracts 5% tax. Relative to the original pre-tax price, the final amount changes by:
  - A) 8% increase ← strike if rule fires
  - B) 13.4% increase ← KEEP (key)
  - C) 15% increase ← strike if rule fires
  - D) 2.6% decrease ← strike if rule fires

---

## Elimination Rule 17 — Last-resort: dimensional / absurdity cull (evidence-limited)

**Evidence status:** ESTABLISHED (≥15; independent hits = **232** = 231 bank + 1 VALID PYQ)  
**Streams:** Civil, Electrical, Non-core  
**When:** Time pressure; two options already killed by other established rules; two remain.  
**How:** Cull any remaining option whose units cannot match the ask (mm² vs N/mm², Ω vs S, kN vs kN·m). Then prefer the option consistent with the figure’s boundary conditions. Do **not** guess from ‘middle value’ myths — our banks do not support that heuristic.

**Evidence questions (25 shown of 232 independent):**

| Ref | Kind | Source exam | Subject | Stem (truncated) | Key |
|---|---|---|---|---|---|
| `data/civil/ce-flt01.js#Q41` | bank | Civil FLT-01 | Steel Structures | The plane truss shown carries load W and moment M at apex B. Force in member AB is: | A |
| `data/civil/ce-flt02.js#Q47` | bank | Civil FLT-02 | Steel Structures | The design buckling-curve crop plots reduction factor \(\chi\) against nondimensional s… | D |
| `data/civil/st/ce-st-fe-01.js#Q1` | bank | Civil ST-FE | Foundation Engineering | For a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2… | B |
| `data/civil/st/ce-st-fm-01.js#Q1` | bank | Civil ST-FM | Fluid Mechanics and Hy | A mercury manometer connected to water shows a level difference of 0.4 m. Taking mercur… | B |
| `data/civil/st/ce-st-rcc-01.js#Q1` | bank | Civil ST-RCC | Reinforced Concrete | An RCC beam of M25 and Fe500 has factored Mu = 180 kN m, b = 230 mm and d = 450 mm. Usi… | B |
| `data/civil/st/ce-st-soil-01.js#Q1` | bank | Civil ST-SOIL | Soil Mechanics | A fine-grained soil has liquid limit 48% and plastic limit 22%. Its plasticity index is… | B |
| `data/civil/st/ce-st-som-01.js#Q1` | bank | Civil ST-SOM | Strength of Materials | A steel rod 20 mm in diameter and 2 m long carries 40 kN tension. Taking E = 200 GPa, i… | B |
| `data/civil/st/ce-st-steel-01.js#Q1` | bank | Civil ST-STEEL | Steel Structures | A 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. … | B |
| `PYQ:2023CE2.pdf#Q39` | pyq | Board VALID PYQ · 2023CE2.pdf | Civil | In a two-dimensional stress analysis, the state of stress at a point is shown in the fi… | — |
| `data/civil/st/ce-st-fe-01.js#Q2` | bank | Civil ST-FE | Foundation Engineering | A 2 m clay layer drains from both faces. With Cv = 0.004 m²/day and Tv = 0.197 for 50% … | A |
| `data/civil/st/ce-st-fm-01.js#Q2` | bank | Civil ST-FM | Fluid Mechanics and Hy | Water flows in a 0.2 m diameter pipe at mean velocity 4 m/s. Discharge is closest to: | A |
| `data/civil/st/ce-st-rcc-01.js#Q2` | bank | Civil ST-RCC | Reinforced Concrete | A 230 mm wide beam with effective depth 450 mm carries factored shear 125 kN at a secti… | A |
| `data/civil/st/ce-st-soil-01.js#Q2` | bank | Civil ST-SOIL | Soil Mechanics | A compacted soil has dry unit weight 18.7 kN/m³ and specific gravity Gs = 2.7. Its void… | A |
| `data/civil/st/ce-st-som-01.js#Q2` | bank | Civil ST-SOM | Strength of Materials | A simply supported beam of span 5 m carries a uniform load of 13 kN/m over the full spa… | A |
| `data/civil/st/ce-st-steel-01.js#Q2` | bank | Civil ST-STEEL | Steel Structures | A steel compression member has effective length 3.25 m and least radius of gyration 35 … | A |
| `data/civil/st/ce-st-fe-01.js#Q3` | bank | Civil ST-FE | Foundation Engineering | The shown square footing distributes a concentric service load of 260 kN over a 2.3 m ×… | D |
| `data/civil/st/ce-st-fm-01.js#Q3` | bank | Civil ST-FM | Fluid Mechanics and Hy | The shown venturimeter is installed in a 0.2 m diameter inlet pipe. If the inlet veloci… | D |
| `data/civil/st/ce-st-rcc-01.js#Q3` | bank | Civil ST-RCC | Reinforced Concrete | In the shown slab panel, supports are along the long edges and Lx = 3.3 m while Ly = 6.… | D |
| `data/civil/st/ce-st-soil-01.js#Q3` | bank | Civil ST-SOIL | Soil Mechanics | The shown compaction curve has a distinct peak. A 230 m³ embankment lot is compacted at… | D |
| `data/civil/st/ce-st-som-01.js#Q3` | bank | Civil ST-SOM | Strength of Materials | The mild-steel stress–strain figure identifies point C as the ultimate point. If a spec… | D |
| `data/civil/st/ce-st-steel-01.js#Q3` | bank | Civil ST-STEEL | Steel Structures | The shown bolted lap joint transfers the load through 4 identical bolts. If each bolt h… | D |
| `data/civil/st/ce-st-fe-01.js#Q5` | bank | Civil ST-FE | Foundation Engineering | A 6 m high vertical retaining wall retains dry sand with γ = 18 kN/m³ and φ = 30°. Usin… | B |
| `data/civil/st/ce-st-fm-01.js#Q5` | bank | Civil ST-FM | Fluid Mechanics and Hy | A centrifugal pump delivers 0.08 m³/s against 35 m head at overall efficiency 0.75. Wat… | B |
| `data/civil/st/ce-st-rcc-01.js#Q5` | bank | Civil ST-RCC | Reinforced Concrete | A square footing 2.1 m by 2.1 m carries a service column load of 190 kN (self-weight ig… | B |
| `data/civil/st/ce-st-soil-01.js#Q5` | bank | Civil ST-SOIL | Soil Mechanics | A uniform load of 110 kN is applied through a square area 2 m by 2 m. The average conta… | B |

**Worked elimination samples (bank keys only):**

- `data/civil/ce-flt01.js#Q41` — keyed **A** · *Civil FLT-01*
  - Stem: The plane truss shown carries load W and moment M at apex B. Force in member AB is:
  - A) 5W/6 (compressive) ← KEEP (key)
  - B) W/2 (compressive) ← strike if rule fires
  - C) 5W/6 + M/L (compressive) ← strike if rule fires
  - D) W/2 − M/2 (compressive) ← strike if rule fires

- `data/civil/ce-flt02.js#Q47` — keyed **D** · *Civil FLT-02*
  - Stem: The design buckling-curve crop plots reduction factor \(\chi\) against nondimensional slenderness for curves a–d. A column’s section/fabrication class and \(\bar\lambda\) are marked on the figure; rea
  - A) 682 kN ← strike if rule fires
  - B) 455 kN ← strike if rule fires
  - C) 364 kN ← strike if rule fires
  - D) 545 kN ← KEEP (key)

---

# Part B — Insufficient evidence (not established heuristics)

The following candidate rules have **fewer than 15 independent** supporting questions in FLT + Subject Tests + VALID PYQ. They are retained only as **draft / watchlist** items and must **not** be taught as established elimination heuristics until the evidence floor is met.

| Draft title | Independent | Bank | VALID PYQ | Status |
|---|---:|---:|---:|---|
| Kill the neighbour-formula lookalike | 4 | 3 | 1 | NOT ESTABLISHED (<15) |
| SIL / surge-impedance identity | 5 | 5 | 0 | NOT ESTABLISHED (<15) |
| Transformer referral / turns-ratio scaling | 7 | 5 | 2 | NOT ESTABLISHED (<15) |

### Draft detail (≤10 sample refs each — for maintainers)

#### Draft — Kill the neighbour-formula lookalike (4 independent)

**When:** Two options look like textbook formulae for the same chapter; only one matches the *asked quantity*.  
**How:** Underline the asked quantity (stress vs strength, SIL vs surge impedance, Ast vs Mu, Zpu vs Zohm). Strike any option that answers a neighbouring quantity the stem did not ask.

- `data/civil/ce-flt02.js#Q10` (bank) — The plotted bilinear stress–strain curve gives the yield point and post-yield tangent; bot
- `data/electrical/ee-flt01.js#Q1` (bank) — A lossless 400 kV line has Zc = 250 Ω. Its SIL (MW) is closest to:
- `data/electrical/ee-flt02.js#Q1` (bank) — A 765 kV lossless overhead line has surge impedance 280 ohms. Its surge impedance loading 
- `PYQ:2022CE1.pdf#Q38` (pyq) — A weld is used for joining an angle section ISA 100 mm × 100 mm × 10 mm to a gusset plate 

#### Draft — SIL / surge-impedance identity (5 independent)

**When:** Lossless line, Zc or SIL asked.  
**How:** SIL(MW) = V_kV² / Zc. Eliminate V/Zc, V·Zc, or options that treat Zc as SIL.

- `data/electrical/ee-flt01.js#Q1` (bank) — A lossless 400 kV line has Zc = 250 Ω. Its SIL (MW) is closest to:
- `data/electrical/ee-flt02.js#Q1` (bank) — A 765 kV lossless overhead line has surge impedance 280 ohms. Its surge impedance loading 
- `data/electrical/ee-flt01.js#Q6` (bank) — Ferranti rise on a long EHV line is most severe when:
- `data/electrical/ee-flt02.js#Q22` (bank) — The diagram shows a synchronous generator feeding a long open-ended EHV line. When the gen
- `data/electrical/ee-flt01.js#Q11` (bank) — Surge impedance loading of an overhead line is 400 MW at 400 kV. If voltage is raised 5% w

#### Draft — Transformer referral / turns-ratio scaling (7 independent)

**When:** R2′, X2′, or impedance referred across a:1.  
**How:** Secondary Ω referred to primary × a² (a = V1/V2). Eliminate options that multiply by a or 1/a only.

- `data/electrical/ee-flt01.js#Q45` (bank) — IGBT vs power MOSFET at high voltage (>600 V) conduction: IGBT is preferred mainly because
- `data/electrical/st/ee-st-em-01.js#Q1` (bank) — In a transformer equivalent circuit referred to the primary side, secondary resistance is 
- `PYQ:2026EE.pdf#Q39` (pyq) — In the circuit shown, the phase currents are 572.812 50.115 A I j   A 254.525 459.175 BI
- `PYQ:APTRANSCO-EE-2011.pdf#Q25` (pyq) — A single-phase transformer has a turns ratio of 1:2 and is connected to a purely resistive
- `data/electrical/ee-flt01.js#Q58` (bank) — Four-terminal (Kelvin) method preferred when measuring:
- `data/electrical/st/ee-st-em-01.js#Q11` (bank) — SC test on TF mainly gives:
- `data/electrical/ee-flt01.js#Q69` (bank) — Preferred for frequent reversing + regeneration:

## Anti-rules (do **not** use — no evidence in our corpus)

| Myth | Why rejected |
|---|---|
| “Pick C when unsure” | Key distribution is deliberately balanced (~25% each); letter myths fail Audit keys. |
| “Longest option is correct” | MASTER distractors are equal-length plausible engineering mistakes. |
| “Always middle numerical value” | Options are engineered from real slips (×2, ÷2, wrong formula) — middle is often a trap. |
| “Ignore the figure if stem looks complete” | Diagram-dependency gate: if imaged, figure is required. |

## Maintenance

- Regenerate: `python scripts/build_elimination_rules_playbook.py`
- Publication floor: `MIN_EVIDENCE = 15` independent refs (FLT/ST bank Qs + VALID PYQ rows).
- After new FLT/ST/PYQ evidence ships, re-run; promote drafts only when they clear the floor.
