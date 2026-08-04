# Subject-wise High-Yield Tests (ST-HY) — Framework

**Status:** Locked against MASTER Subject-wise High-Yield Tests section  
**Pack size:** 50 Q · 90 min · ≥75 min solve-time floor  
**Goal:** Highest-predictability syllabus themes for APTRANSCO AEE so mastering these packs maximises exam hit-rate.

---

## 1. Official subject confirmation

### Civil — 6 (exact Transco technical blocks in MASTER)

1. Strength of Materials  
2. Reinforced Concrete (RCC)  
3. Fluid Mechanics & Hydraulic Machinery  
4. Steel Structures  
5. Foundation Engineering  
6. Soil Mechanics  

### Electrical — 7 packs (MASTER 9 line-items → 7 packs)

| Pack | Includes |
|---|---|
| Power Systems + Utilization | Power Systems + Utilization of Electrical Energy (≥6 Util Qs inside the 50) |
| Electrical Machines | Electrical Machines |
| Electric Circuits | Electric Circuits |
| Control Systems | Control Systems |
| Power Electronics & Drives | Power Electronics & Drives |
| Measurements | Measurements |
| Analog & Digital Electronics | Analog + Digital |

### Non-core — 2 shared packs

1. **Aptitude & Reasoning** — Quant + Reasoning  
2. **GA · English · Computer** — remaining Non-core  

---

## 2. Predictability score (use before writing every Q)

```
predictScore = min(10,
    3·boardFamily + 2·sisterBoard + 2·recurringClassic
  + 1·syllabusWeightBoost + 1·highTrapYield + 1·gateEMInSyllabus)
```

| Flag | When true |
|---|---|
| boardFamily | Theme seen in APTRANSCO / APGENCO / AP DISCOM AEE-family |
| sisterBoard | APPSC AEE/AE, TSTRANSCO/TSGENCO/TSPSC AE |
| recurringClassic | Same setup ≥2× in allowed banks / themes |
| syllabusWeightBoost | Top-weight chapter for that subject |
| highTrapYield | Famous distractor path |
| gateEMInSyllabus | GATE Easy–Moderate **and** inside Transco syllabus |

**Ship rule:** prefer `predictScore ≥ 7`. Cap Direct clones ≤ 2 / pack. Stay in syllabus.

**Evidence tags on each Q (recommended):**
`predictScore`, `predictBasis`, `themeId`, `origin`

---

## 3. High-frequency theme registers (must cover ≥80% per pack)

### Civil — Strength of Materials (`civil-st-som-01`)
| themeId | Theme | Typical predict |
|---|---|---:|
| SOM-01 | Axial stress / composite bars / temperature stress | 9 |
| SOM-02 | SFD–BMD / shear & bending stress | 10 |
| SOM-03 | Mohr circle / principal stress | 9 |
| SOM-04 | Torsion of circular shafts | 9 |
| SOM-05 | Columns — Euler / Rankine / end conditions | 9 |
| SOM-06 | Strain energy / impact / resilience | 8 |
| SOM-07 | Deflection (Macaulay / moment-area classics) | 8 |
| SOM-08 | Thin cylinders / spheres | 8 |
| SOM-09 | Springs (close-coiled) | 7 |
| SOM-10 | Pure bending assumptions / transformed section | 8 |
| SOM-11 | Shear centre / unsymmetric bending (moderate) | 7 |
| SOM-12 | Theories of failure (Tresca/von Mises intro) | 7 |

### Civil — RCC (`civil-st-rcc-01`)
| themeId | Theme | Typical predict |
|---|---|---:|
| RCC-01 | LSM flexure singly/doubly (IS 456) | 10 |
| RCC-02 | Shear / stirrups / development length | 10 |
| RCC-03 | Limit state serviceability / deflection / cracking | 8 |
| RCC-04 | Slabs one-way / two-way / torsion reinforcement | 9 |
| RCC-05 | Columns short/slender / interaction basics | 9 |
| RCC-06 | Footings isolated (soil pressure / punching) | 8 |
| RCC-07 | Bond / anchorage / lap / curtailment | 9 |
| RCC-08 | Working stress vs LSM comparison traps | 7 |
| RCC-09 | Prestressed intro (losses / stress concepts in syllabus) | 7 |
| RCC-10 | Durability / exposure / cover / grade selection | 8 |

### Civil — Fluid + HHM (`civil-st-fm-01`)
| themeId | Theme | Typical predict |
|---|---|---:|
| FM-01 | Hydrostatics / manometers / forces on surfaces | 9 |
| FM-02 | Bernoulli / venturi / orifice | 10 |
| FM-03 | Laminar pipe flow / Hagen–Poiseuille / Darcy–Weisbach | 9 |
| FM-04 | Momentum equation / force on vanes | 8 |
| FM-05 | Dimensional analysis / similitude | 8 |
| FM-06 | Boundary layer / drag basics | 7 |
| HHM-01 | Pelton / Francis / Kaplan selection & heads | 9 |
| HHM-02 | Centrifugal pump / specific speed / NPSH | 9 |
| HHM-03 | Reciprocating pump / air vessels | 7 |
| HHM-04 | Draft tube / cavitation | 8 |

### Civil — Steel (`civil-st-steel-01`)
| themeId | Theme | Typical predict |
|---|---|---:|
| ST-01 | Tension members / net area / block shear | 10 |
| ST-02 | Compression members / buckling class / lacings | 9 |
| ST-03 | Beams — plastic / elastic / shear lag / web buckling | 9 |
| ST-04 | Bolted & welded connections | 10 |
| ST-05 | Column bases / beam-column | 8 |
| ST-06 | Plate girders / stiffeners | 8 |
| ST-07 | Roof truss / purlin / gantry basics | 7 |
| ST-08 | IS 800 partial factors / design strengths | 9 |

### Civil — Foundation (`civil-st-fe-01`)
| themeId | Theme | Typical predict |
|---|---|---:|
| FE-01 | Bearing capacity — Terzaghi / IS factors | 10 |
| FE-02 | Settlement (immediate / consolidation) | 9 |
| FE-03 | Shallow foundations sizing | 9 |
| FE-04 | Pile capacity / group / negative skin | 9 |
| FE-05 | Sheet pile / retaining / Rankine at foundation | 8 |
| FE-06 | Machine foundation / dynamic intro (syllabus) | 7 |
| FE-07 | SPT / plate load interpretation | 8 |

### Civil — Soil (`civil-st-soil-01`)
| themeId | Theme | Typical predict |
|---|---|---:|
| SM-01 | Index properties / Atterberg / classification | 10 |
| SM-02 | Compaction / Proctor / OMC–MDD | 9 |
| SM-03 | Permeability / seepage / flow nets | 9 |
| SM-04 | Effective stress / capillarity | 9 |
| SM-05 | Consolidation / Terzaghi 1-D / Cv Tv | 10 |
| SM-06 | Shear strength / Mohr–Coulomb / UU-CU-CD | 10 |
| SM-07 | Stress distribution / Boussinesq / Newmark | 8 |
| SM-08 | Earth pressure Rankine/Coulomb | 9 |

### Electrical — Power Systems + Util (`electrical-st-ps-01`)
| themeId | Theme | Typical predict |
|---|---|---:|
| PS-01 | pu system / Zbase change | 10 |
| PS-02 | Transmission params / Ferranti / SIL | 9 |
| PS-03 | Corona / bundling / sag-tension | 8 |
| PS-04 | Faults / symmetrical components | 10 |
| PS-05 | Load flow types / Ybus intro | 8 |
| PS-06 | Stability / swing / equal area | 8 |
| PS-07 | Protection & relays / CT-PT | 9 |
| PS-08 | Transformers in system / tap / parallel | 9 |
| UT-01 | Illumination / lamps / laws | 8 |
| UT-02 | Electric heating / welding | 7 |
| UT-03 | Traction / specific energy | 8 |
| UT-04 | Tariffs / power factor improvement | 8 |

### Electrical — Machines (`electrical-st-em-01`)
| themeId | Theme | Typical predict |
|---|---|---:|
| EM-01 | Transformer — equiv, OC/SC, efficiency, auto | 10 |
| EM-02 | Sync machine — phasor, V-curves, regulation | 9 |
| EM-03 | Induction motor — slip, torque, circle, starters | 10 |
| EM-04 | DC machines — characteristics, starters | 8 |
| EM-05 | Parallel operation / hunting | 8 |

### Electrical — Circuits (`electrical-st-ec-01`)
| themeId | Theme | Typical predict |
|---|---|---:|
| EC-01 | Network theorems (Thevenin/Norton/max power) | 10 |
| EC-02 | Resonance series/parallel | 10 |
| EC-03 | Transients RL/RC/RLC | 9 |
| EC-04 | Coupled circuits / mutual M | 8 |
| EC-05 | 3-ph power / two-wattmeter | 9 |
| EC-06 | Filters / Bode of simple networks | 7 |

### Electrical — Control (`electrical-st-cs-01`)
| themeId | Theme | Typical predict |
|---|---|---:|
| CS-01 | Block diagram / SFG / Mason | 9 |
| CS-02 | Time response / ζ ωn / ess / type | 10 |
| CS-03 | Routh / root locus | 9 |
| CS-04 | Bode / Nyquist / gain-phase margin | 9 |
| CS-05 | Controllers P/PI/PD/PID / lead-lag | 8 |

### Electrical — PE (`electrical-st-pe-01`)
| themeId | Theme | Typical predict |
|---|---|---:|
| PE-01 | SCR / triggering / commutation | 10 |
| PE-02 | Controlled rectifiers | 9 |
| PE-03 | Choppers | 9 |
| PE-04 | Inverters / PWM basics | 8 |
| PE-05 | Drives / braking / thermal | 8 |

### Electrical — Measurements (`electrical-st-meas-01`)
| themeId | Theme | Typical predict |
|---|---|---:|
| ME-01 | Bridges (Wheatstone/Kelvin/Maxwell/Schering) | 9 |
| ME-02 | PMMC / MI / dynamometer / errors | 9 |
| ME-03 | Wattmeter / energy meter / PF meter | 9 |
| ME-04 | CT/PT / burden / polarity | 10 |
| ME-05 | CRO / digital meters | 8 |

### Electrical — Analog & Digital (`electrical-st-ade-01`)
| themeId | Theme | Typical predict |
|---|---|---:|
| AD-01 | Diode/Zener/clipper/clamper | 9 |
| AD-02 | BJT/FET biasing / small-signal | 8 |
| AD-03 | Op-amp ideal / inverting / integrator | 10 |
| AD-04 | Oscillators / feedback basics | 7 |
| DG-01 | Number systems / codes | 8 |
| DG-02 | Gates / Boolean / K-map | 9 |
| DG-03 | Flip-flops / counters / registers | 9 |

### Non-core — Aptitude & Reasoning (`noncore-st-ar-01`)
Quant themes: %, ratio, averages, time-work, SI/CI, speed-distance, profit-loss, number system, ages, pipes, mixtures, mensuration 2D/3D, data interpretation table.  
Reasoning: series, coding-decoding, blood relation, direction, syllogism, seating, analogy, odd-one, calendar/clock, puzzle.

### Non-core — GEC (`noncore-st-gec-01`)
GA: Indian polity, economy basics, science everyday, AP power/Transco-relevant static, geography, awards/sports rotate.  
English: RC passage, grammar, vocab, Active/Passive, Direct/Indirect, error spotting, fillers.  
Computer: hardware, OS, MS Office, networking, internet, security, shortcuts, file types, DBMS intro.

---

## 4. Build order (recommended)

1. Civil SOM → RCC → Soil → Steel → FM → Foundation  
2. EE PS+Util → Machines → Circuits → Control → PE → Meas → ADE  
3. Non-core AR → GEC  

Each pack: theme coverage sheet → draft 50 → Audit C/N/O/Q/R/S → diagrams → APPROVED → ship.

---

## 5. Anti-clone vs FLT

ST-HY may share **themes** with FLT-01 but must change numerical data, stem framing, and option traps. Exact stem+options match = Fail Audit I.
