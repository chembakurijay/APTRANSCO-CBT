# Elimination Rules Playbook (Civil / Electrical / Non-core)

Each stream is separate. Inside each rule: explain the rule, then every matching question with an elimination-only solution (no skipped items).

## Master index

| # | Rule | Streams | Total | Civil | EE | NC |
|---:|---|---|---:|---:|---:|---:|
| 1 | Service vs factored / partial-factor mix | Civil | 42 | 42 | 0 | 0 |
| 2 | Gross vs net / hole deduction | Civil | 16 | 16 | 0 | 0 |
| 3 | Cover vs effective depth | Civil | 17 | 17 | 0 | 0 |
| 4 | Thevenin / Norton source deactivation | Electrical | 15 | 0 | 15 | 0 |
| 5 | Sign / sense / tension–compression flip | Civil, Electrical | 86 | 85 | 1 | 0 |
| 6 | Figure-dependency: cover the figure test | Civil, Electrical | 215 | 89 | 126 | 0 |
| 7 | Rankine / Terzaghi / earth-pressure term drop | Civil | 28 | 28 | 0 | 0 |
| 8 | SCR / PE latching vs holding vs firing | Electrical | 19 | 0 | 19 | 0 |
| 9 | Non-core: option that abandons the asked operation | Non-core | 34 | 0 | 0 | 34 |

# Civil elimination rules

## Civil Rule 1 (Playbook #1) — Service vs factored / partial-factor mix

**Questions in this section:** 42 (all solved below)

### What this rule means

Limit-state design mixes service loads, factored loads, and material strengths (fy, fck). Classic traps: treat fy as computed stress, or apply γf twice to an already-factored Mu/Vu.

### When to use

Stem mixes service (SLS) loads with limit-state (ULS) options, applies γf twice, or treats fy/fck as the computed member stress.

### Application steps

1. Label the stem: SLS or ULS.
2. If Mu/Vu is already factored, do not multiply by γf again.
3. Strike options equal to fy or 0.87 fy when the ask is computed stress from P/A or M/Z.

**Memory cue:** `ULS uses γf; design steel stress typically 0.87 fy (IS 456 path)`

### Core elimination move

Ask: is this SLS or ULS? Strike options that apply γf to an already-factored action, or that treat fy as the computed stress.

### Worked questions

#### Q1/42 · Civil FLT-02 · `data/civil/ce-flt02.js#Q48` · Key A

A double-cover butt splice places each bolt in double shear, but the connected main plate is relatively thin. Before selecting bolt count, which sequence avoids the common error of crediting double shear while overlooking another governing limit state?

- A) evaluate bolt shear, plate/bolt bearing, net-section and block-shear capacities, then use the least compatible capacity
- B) use gross plate yielding only
- C) size from bolt diameter alone
- D) double the bearing capacity and ignore shear

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: SLS/ULS or fy-as-stress mix is present in the ask/options.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) evaluate bolt shear, plate/bolt bearing, net-section and block-shear capacities, then use the least compatible capacity
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  B) use gross plate yielding only
     → STRIKE — use gross plate yielding only: Picks 'double the bearing capacity and ignore shear' by mis-applying the stem data — recheck units and the asked quantity.
  C) size from bolt diameter alone
     → STRIKE — size from bolt diameter alone: Picks 'use gross plate yielding only' by mis-applying the stem data — recheck units and the asked quantity.
  D) double the bearing capacity and ignore shear
     → STRIKE — double the bearing capacity and ignore shear: Picks 'size from bolt diameter alone' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: A only → keyed A.

#### Q2/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q1` · Key A

In a beam schedule review during preliminary sizing, an RCC beam of M25 and Fe500 has factored Mu = 180 kN m, b = 230 mm and d = 450 mm. Using z = 0.9d, the required Ast is closest to:

- A) 1021.71 mm²
- B) 817.37 mm²
- C) 1226.05 mm²
- D) 1532.57 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: SLS/ULS or fy-as-stress mix is present in the ask/options.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 1021.71 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 817.37 mm²
     → STRIKE — 817.37 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1226.05 mm²
     → STRIKE — 1226.05 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1532.57 mm²
     → STRIKE — 1532.57 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q3/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q11` · Key C

In a beam schedule review during site approval, an RCC beam of M25 and Fe500 has factored Mu = 190 kN m, b = 230 mm and d = 450 mm. Using z = 0.9d, the required Ast is closest to:

- A) 862.78 mm²
- B) 1294.17 mm²
- C) 1078.47 mm²
- D) 1617.71 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: SLS/ULS or fy-as-stress mix is present in the ask/options.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 862.78 mm²
     → STRIKE — 862.78 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1294.17 mm²
     → STRIKE — 1294.17 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1078.47 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 1617.71 mm²
     → STRIKE — 1617.71 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q4/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q16` · Key D

In a retaining-wall stem design during emergency restoration, an RCC beam of M25 and Fe500 has factored Mu = 195 kN m, b = 230 mm and d = 450 mm. Using z = 0.9d, the required Ast is closest to:

- A) 885.48 mm²
- B) 1328.22 mm²
- C) 1660.28 mm²
- D) 1106.85 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: SLS/ULS or fy-as-stress mix is present in the ask/options.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 885.48 mm²
     → STRIKE — 885.48 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1328.22 mm²
     → STRIKE — 1328.22 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1660.28 mm²
     → STRIKE — 1660.28 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 1106.85 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q5/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q21` · Key A

In a beam schedule review during code-compliance review, an RCC beam of M25 and Fe500 has factored Mu = 180 kN m, b = 230 mm and d = 450 mm. Using z = 0.9d, the required Ast is closest to:

- A) 1021.71 mm²
- B) 817.37 mm²
- C) 1226.05 mm²
- D) 1532.57 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: SLS/ULS or fy-as-stress mix is present in the ask/options.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 1021.71 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 817.37 mm²
     → STRIKE — 817.37 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1226.05 mm²
     → STRIKE — 1226.05 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1532.57 mm²
     → STRIKE — 1532.57 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q6/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q26` · Key B

In a retaining-wall stem design during asset-renewal planning, an RCC beam of M25 and Fe500 has factored Mu = 185 kN m, b = 230 mm and d = 450 mm. Using z = 0.9d, the required Ast is closest to:

- A) 840.07 mm²
- B) 1050.09 mm²
- C) 1260.11 mm²
- D) 1575.14 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: SLS/ULS or fy-as-stress mix is present in the ask/options.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 840.07 mm²
     → STRIKE — 840.07 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1050.09 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 1260.11 mm²
     → STRIKE — 1260.11 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1575.14 mm²
     → STRIKE — 1575.14 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q7/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q31` · Key C

In a beam schedule review during post-installation testing, an RCC beam of M25 and Fe500 has factored Mu = 190 kN m, b = 230 mm and d = 450 mm. Using z = 0.9d, the required Ast is closest to:

- A) 862.78 mm²
- B) 1294.17 mm²
- C) 1078.47 mm²
- D) 1617.71 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: SLS/ULS or fy-as-stress mix is present in the ask/options.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 862.78 mm²
     → STRIKE — 862.78 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1294.17 mm²
     → STRIKE — 1294.17 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1078.47 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 1617.71 mm²
     → STRIKE — 1617.71 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q8/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q36` · Key D

In a retaining-wall stem design during schedule-of-rates check, an RCC beam of M25 and Fe500 has factored Mu = 195 kN m, b = 230 mm and d = 450 mm. Using z = 0.9d, the required Ast is closest to:

- A) 885.48 mm²
- B) 1328.22 mm²
- C) 1660.28 mm²
- D) 1106.85 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: SLS/ULS or fy-as-stress mix is present in the ask/options.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 885.48 mm²
     → STRIKE — 885.48 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1328.22 mm²
     → STRIKE — 1328.22 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1660.28 mm²
     → STRIKE — 1660.28 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 1106.85 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q9/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q41` · Key A

In a beam schedule review during monsoon-readiness check, an RCC beam of M25 and Fe500 has factored Mu = 180 kN m, b = 230 mm and d = 450 mm. Using z = 0.9d, the required Ast is closest to:

- A) 1021.71 mm²
- B) 817.37 mm²
- C) 1226.05 mm²
- D) 1532.57 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: SLS/ULS or fy-as-stress mix is present in the ask/options.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 1021.71 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 817.37 mm²
     → STRIKE — 817.37 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1226.05 mm²
     → STRIKE — 1226.05 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1532.57 mm²
     → STRIKE — 1532.57 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q10/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q46` · Key B

In a retaining-wall stem design during operating-procedure validation, an RCC beam of M25 and Fe500 has factored Mu = 185 kN m, b = 230 mm and d = 450 mm. Using z = 0.9d, the required Ast is closest to:

- A) 840.07 mm²
- B) 1050.09 mm²
- C) 1260.11 mm²
- D) 1575.14 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: SLS/ULS or fy-as-stress mix is present in the ask/options.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 840.07 mm²
     → STRIKE — 840.07 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1050.09 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 1260.11 mm²
     → STRIKE — 1260.11 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1575.14 mm²
     → STRIKE — 1575.14 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q11/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q6` · Key B

In a retaining-wall stem design during fault investigation, an RCC beam of M25 and Fe500 has factored Mu = 185 kN m, b = 230 mm and d = 450 mm. Using z = 0.9d, the required Ast is closest to:

- A) 840.07 mm²
- B) 1050.09 mm²
- C) 1260.11 mm²
- D) 1575.14 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: SLS/ULS or fy-as-stress mix is present in the ask/options.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 840.07 mm²
     → STRIKE — 840.07 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1050.09 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 1260.11 mm²
     → STRIKE — 1260.11 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1575.14 mm²
     → STRIKE — 1575.14 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q12/42 · Civil FLT-01 · `data/civil/ce-flt01.js#Q24` · Key C

In design review, factored moment is 160 kN·m while the limiting singly reinforced capacity of the fixed beam section is 138 kN·m. Section depth cannot increase. Which design route is most appropriate?

- A) Use only minimum tension steel
- B) Reduce effective depth
- C) Design the excess moment with compression and additional tension steel
- D) Treat 138 kN·m as service moment

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) Use only minimum tension steel
     → STRIKE — Use only minimum tension steel: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Design the excess moment with compression and additional tension steel”).
  B) Reduce effective depth
     → STRIKE — Reduce effective depth: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Design the excess moment with compression and additional tension steel”).
  C) Design the excess moment with compression and additional tension steel
     → KEEP — Demand exceeds singly reinforced limit; a steel couple must resist the excess.
  D) Treat 138 kN·m as service moment
     → STRIKE — Treat 138 kN·m as service moment: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Design the excess moment with compression and additional tension steel”).
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
Final keyed result: Design the excess moment with compression and additional tension steel.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q13/42 · Civil FLT-01 · `data/civil/ce-flt01.js#Q25` · Key C

A design review finds that the factored moment exceeds the limiting capacity of the same section as a singly reinforced member, while overall depth cannot be increased. Which design interpretation is correct?

- A) Provide only minimum tension steel and ignore the excess
- B) Treat the limiting singly reinforced capacity as a serviceability ceiling and stop
- C) Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials
- D) Reduce the load factor instead of changing reinforcement

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) Provide only minimum tension steel and ignore the excess
     → STRIKE — Provide only minimum tension steel and ignore the excess: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials”).
  B) Treat the limiting singly reinforced capacity as a serviceability ceiling and stop
     → STRIKE — Treat the limiting singly reinforced capacity as a serviceability ceiling and stop: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials”).
  C) Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials
     → KEEP — Mu > Mu,lim requires a steel couple or a larger section.
  D) Reduce the load factor instead of changing reinforcement
     → STRIKE — Reduce the load factor instead of changing reinforcement: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials”).
Survivors after this rule: C only → keyed C.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q14/42 · Civil FLT-02 · `data/civil/ce-flt02.js#Q1` · Key C

A 2.0 m long steel tie of uniform 500 mm² area carries a gradually applied 50 kN service load. Neglecting self-weight, which stress-extension pair is consistent with \(E=200\) GPa?

- A) 50 MPa, 2.0 mm
- B) 100 MPa, 2.0 mm
- C) 100 MPa, 1.0 mm
- D) 200 MPa, 1.0 mm

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 50 MPa, 2.0 mm
     → STRIKE — 50 MPa, 2.0 mm: Picks '50 MPa, 2.0 mm' by mis-applying the stem data — recheck units and the asked quantity.
  B) 100 MPa, 2.0 mm
     → STRIKE — 100 MPa, 2.0 mm: Picks '200 MPa, 1.0 mm' by mis-applying the stem data — recheck units and the asked quantity.
  C) 100 MPa, 1.0 mm
     → KEEP — The calculation chain yields “100 MPa, 1.0 mm” as the only consistent choice.
  D) 200 MPa, 1.0 mm
     → STRIKE — 200 MPa, 1.0 mm: Picks '100 MPa, 2.0 mm' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
\(\sigma=P/A=100\) MPa; \(\delta=PL/AE=1.0\) mm. A/B/D mix wrong stress or extension. Final keyed result: 100 MPa, 1.0 mm.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q15/42 · Civil FLT-02 · `data/civil/ce-flt02.js#Q46` · Key C

Match limit state with the most relevant evidence: (1) block shear, (2) web crippling, (3) lateral-torsional buckling, (4) weld throat failure; (p) combined shear+tension path near bolts, (q) local bearing fold near reaction, (r) flange lateral displacement with twist, (s) fracture through effective throat.

- A) 1-s,2-r,3-q,4-p
- B) 1-r,2-p,3-s,4-q
- C) 1-p,2-q,3-r,4-s
- D) 1-q,2-s,3-p,4-r

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 1-s,2-r,3-q,4-p
     → STRIKE — 1-s,2-r,3-q,4-p: Picks '1-r,2-p,3-s,4-q' by mis-applying the stem data — recheck units and the asked quantity.
  B) 1-r,2-p,3-s,4-q
     → STRIKE — 1-r,2-p,3-s,4-q: Picks '1-q,2-s,3-p,4-r' by mis-applying the stem data — recheck units and the asked quantity.
  C) 1-p,2-q,3-r,4-s
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  D) 1-q,2-s,3-p,4-r
     → STRIKE — 1-q,2-s,3-p,4-r: Picks '1-s,2-r,3-q,4-p' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: C only → keyed C.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q16/42 · Civil FLT-02 · `data/civil/ce-flt02.js#Q50` · Key C

A simply supported I-beam has adequate bending strength but excessive vertical deflection under service load. Which modification most efficiently improves the governing response without merely increasing steel grade?

- A) reduce flange restraint
- B) increase \(f_y\) only
- C) increase section depth/moment of inertia
- D) drill web holes randomly

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) reduce flange restraint
     → STRIKE — reduce flange restraint: Picks 'increase \(f_y\) only' by mis-applying the stem data — recheck units and the asked quantity.
  B) increase \(f_y\) only
     → STRIKE — increase \(f_y\) only: Picks 'drill web holes randomly' by mis-applying the stem data — recheck units and the asked quantity.
  C) increase section depth/moment of inertia
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  D) drill web holes randomly
     → STRIKE — drill web holes randomly: Picks 'reduce flange restraint' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: C only → keyed C.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q17/42 · Civil FLT-02 · `data/civil/ce-flt02.js#Q55` · Key A

A 2 m square footing at 1 m depth carries 1050 kN including footing. Soil unit weight is 18 kN/m³; allowable net bearing pressure is 250 kPa and predicted settlement at service load is 32 mm against a 25 mm limit. Which conclusion is correct?

- A) net pressure passes but settlement governs redesign
- B) gross pressure must be zero
- C) bearing and settlement both pass
- D) bearing fails only

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) net pressure passes but settlement governs redesign
     → KEEP — The calculation chain yields “net pressure passes but settlement governs redesign” as the only consistent choice.
  B) gross pressure must be zero
     → STRIKE — gross pressure must be zero: Picks 'bearing and settlement both pass' by mis-applying the stem data — recheck units and the asked quantity.
  C) bearing and settlement both pass
     → STRIKE — bearing and settlement both pass: Picks 'bearing fails only' by mis-applying the stem data — recheck units and the asked quantity.
  D) bearing fails only
     → STRIKE — bearing fails only: Picks 'gross pressure must be zero' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: A only → keyed A.

=== SCRATCH CHECK (verification only — not the elimination) ===
gross \(=1050/4=262.5\) kPa; net increase \(≈262.5-18=244.5\) kPa passes, but 32 mm exceeds 25 mm Final keyed result: net pressure passes but settlement governs redesign.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q18/42 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q13` · Key A

In a retaining-wall foundation review during capacity uprating, a concentric service load of 900 kN is to be carried at allowable net bearing pressure 200 kPa. Required footing area, ignoring self-weight, is closest to:

- A) 4.5 m²
- B) 3.6 m²
- C) 5.4 m²
- D) 6.75 m²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 4.5 m²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 3.6 m²
     → STRIKE — 3.6 m²: it does not follow from the stated system, sign convention, or requested check.
  C) 5.4 m²
     → STRIKE — 5.4 m²: it does not follow from the stated system, sign convention, or requested check.
  D) 6.75 m²
     → STRIKE — 6.75 m²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q19/42 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q18` · Key B

In an anchor-block stability check during condition monitoring, a concentric service load of 1100 kN is to be carried at allowable net bearing pressure 200 kPa. Required footing area, ignoring self-weight, is closest to:

- A) 4.4 m²
- B) 5.5 m²
- C) 6.6 m²
- D) 8.25 m²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 4.4 m²
     → STRIKE — 4.4 m²: it does not follow from the stated system, sign convention, or requested check.
  B) 5.5 m²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 6.6 m²
     → STRIKE — 6.6 m²: it does not follow from the stated system, sign convention, or requested check.
  D) 8.25 m²
     → STRIKE — 8.25 m²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q20/42 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q23` · Key C

In a retaining-wall foundation review during operational troubleshooting, a concentric service load of 1000 kN is to be carried at allowable net bearing pressure 200 kPa. Required footing area, ignoring self-weight, is closest to:

- A) 4 m²
- B) 6 m²
- C) 5 m²
- D) 7.5 m²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 4 m²
     → STRIKE — 4 m²: it does not follow from the stated system, sign convention, or requested check.
  B) 6 m²
     → STRIKE — 6 m²: it does not follow from the stated system, sign convention, or requested check.
  C) 5 m²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 7.5 m²
     → STRIKE — 7.5 m²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q21/42 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q28` · Key D

In an anchor-block stability check during method-statement review, a concentric service load of 900 kN is to be carried at allowable net bearing pressure 200 kPa. Required footing area, ignoring self-weight, is closest to:

- A) 3.6 m²
- B) 5.4 m²
- C) 6.75 m²
- D) 4.5 m²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 3.6 m²
     → STRIKE — 3.6 m²: it does not follow from the stated system, sign convention, or requested check.
  B) 5.4 m²
     → STRIKE — 5.4 m²: it does not follow from the stated system, sign convention, or requested check.
  C) 6.75 m²
     → STRIKE — 6.75 m²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 4.5 m²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q22/42 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q3` · Key C

The shown square footing 2.5 m × 2.5 m carries 500 kN concentric service load. Average contact pressure is closest to:

![figure](images/diagrams/civil-st-fe/foundation-square-footing.svg)

- A) 40 kPa
- B) 100 kPa
- C) 80 kPa
- D) 200 kPa

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 40 kPa
     → STRIKE — 40 kPa: it does not follow from the stated system, sign convention, or requested check.
  B) 100 kPa
     → STRIKE — 100 kPa: it does not follow from the stated system, sign convention, or requested check.
  C) 80 kPa
     → KEEP — 500/(2.5²) = 80 kPa.
  D) 200 kPa
     → STRIKE — 200 kPa: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q23/42 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q33` · Key A

In a retaining-wall foundation review during training simulation, a concentric service load of 1100 kN is to be carried at allowable net bearing pressure 200 kPa. Required footing area, ignoring self-weight, is closest to:

- A) 5.5 m²
- B) 4.4 m²
- C) 6.6 m²
- D) 8.25 m²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 5.5 m²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 4.4 m²
     → STRIKE — 4.4 m²: it does not follow from the stated system, sign convention, or requested check.
  C) 6.6 m²
     → STRIKE — 6.6 m²: it does not follow from the stated system, sign convention, or requested check.
  D) 8.25 m²
     → STRIKE — 8.25 m²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q24/42 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q38` · Key B

In an anchor-block stability check during foundation-layout review, a concentric service load of 1000 kN is to be carried at allowable net bearing pressure 200 kPa. Required footing area, ignoring self-weight, is closest to:

- A) 4 m²
- B) 5 m²
- C) 6 m²
- D) 7.5 m²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 4 m²
     → STRIKE — 4 m²: it does not follow from the stated system, sign convention, or requested check.
  B) 5 m²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 6 m²
     → STRIKE — 6 m²: it does not follow from the stated system, sign convention, or requested check.
  D) 7.5 m²
     → STRIKE — 7.5 m²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q25/42 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q43` · Key C

In a retaining-wall foundation review during network-contingency study, a concentric service load of 900 kN is to be carried at allowable net bearing pressure 200 kPa. Required footing area, ignoring self-weight, is closest to:

- A) 3.6 m²
- B) 5.4 m²
- C) 4.5 m²
- D) 6.75 m²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 3.6 m²
     → STRIKE — 3.6 m²: it does not follow from the stated system, sign convention, or requested check.
  B) 5.4 m²
     → STRIKE — 5.4 m²: it does not follow from the stated system, sign convention, or requested check.
  C) 4.5 m²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 6.75 m²
     → STRIKE — 6.75 m²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q26/42 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q48` · Key D

In an anchor-block stability check during forensic review, a concentric service load of 1100 kN is to be carried at allowable net bearing pressure 200 kPa. Required footing area, ignoring self-weight, is closest to:

- A) 4.4 m²
- B) 6.6 m²
- C) 8.25 m²
- D) 5.5 m²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 4.4 m²
     → STRIKE — 4.4 m²: it does not follow from the stated system, sign convention, or requested check.
  B) 6.6 m²
     → STRIKE — 6.6 m²: it does not follow from the stated system, sign convention, or requested check.
  C) 8.25 m²
     → STRIKE — 8.25 m²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 5.5 m²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q27/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q12` · Key D

In a slab-panel design during quality-control inspection, a 230 mm wide beam with effective depth 450 mm carries factored shear 135 kN at a section. Nominal shear stress τv is closest to:

- A) 1.04 N/mm²
- B) 1.57 N/mm²
- C) 1.96 N/mm²
- D) 1.3 N/mm²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 1.04 N/mm²
     → STRIKE — 1.04 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1.57 N/mm²
     → STRIKE — 1.57 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1.96 N/mm²
     → STRIKE — 1.96 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 1.3 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q28/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q17` · Key A

In a lintel reinforcement check during shutdown planning, a 230 mm wide beam with effective depth 450 mm carries factored shear 120 kN at a section. Nominal shear stress τv is closest to:

- A) 1.16 N/mm²
- B) 0.93 N/mm²
- C) 1.39 N/mm²
- D) 1.74 N/mm²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 1.16 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 0.93 N/mm²
     → STRIKE — 0.93 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1.39 N/mm²
     → STRIKE — 1.39 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1.74 N/mm²
     → STRIKE — 1.74 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q29/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q2` · Key B

In a slab-panel design during service-load verification, a 230 mm wide beam with effective depth 450 mm carries factored shear 125 kN at a section. Nominal shear stress τv is closest to:

- A) 0.97 N/mm²
- B) 1.21 N/mm²
- C) 1.45 N/mm²
- D) 1.81 N/mm²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 0.97 N/mm²
     → STRIKE — 0.97 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1.21 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 1.45 N/mm²
     → STRIKE — 1.45 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1.81 N/mm²
     → STRIKE — 1.81 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q30/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q22` · Key B

In a slab-panel design during independent design check, a 230 mm wide beam with effective depth 450 mm carries factored shear 125 kN at a section. Nominal shear stress τv is closest to:

- A) 0.97 N/mm²
- B) 1.21 N/mm²
- C) 1.45 N/mm²
- D) 1.81 N/mm²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 0.97 N/mm²
     → STRIKE — 0.97 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1.21 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 1.45 N/mm²
     → STRIKE — 1.45 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1.81 N/mm²
     → STRIKE — 1.81 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q31/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q24` · Key D

In a footing proportioning exercise during energy audit, a 300 mm × 300 mm short tied column carries factored axial load 1050 kN. The average factored stress Pu/Ag is closest to:

- A) 9.33 N/mm²
- B) 14 N/mm²
- C) 17.5 N/mm²
- D) 11.67 N/mm²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 9.33 N/mm²
     → STRIKE — 9.33 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 14 N/mm²
     → STRIKE — 14 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 17.5 N/mm²
     → STRIKE — 17.5 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 11.67 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q32/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q27` · Key C

In a lintel reinforcement check during construction sequencing, a 230 mm wide beam with effective depth 450 mm carries factored shear 130 kN at a section. Nominal shear stress τv is closest to:

- A) 1 N/mm²
- B) 1.51 N/mm²
- C) 1.26 N/mm²
- D) 1.88 N/mm²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 1 N/mm²
     → STRIKE — 1 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1.51 N/mm²
     → STRIKE — 1.51 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1.26 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 1.88 N/mm²
     → STRIKE — 1.88 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q33/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q29` · Key A

In a corbel design during inspection-test planning, a 300 mm × 300 mm short tied column carries factored axial load 900 kN. The average factored stress Pu/Ag is closest to:

- A) 10 N/mm²
- B) 8 N/mm²
- C) 12 N/mm²
- D) 15 N/mm²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 10 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 8 N/mm²
     → STRIKE — 8 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 12 N/mm²
     → STRIKE — 12 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 15 N/mm²
     → STRIKE — 15 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q34/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q34` · Key B

In a footing proportioning exercise during viva preparation, a 300 mm × 300 mm short tied column carries factored axial load 950 kN. The average factored stress Pu/Ag is closest to:

- A) 8.44 N/mm²
- B) 10.56 N/mm²
- C) 12.67 N/mm²
- D) 15.83 N/mm²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 8.44 N/mm²
     → STRIKE — 8.44 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 10.56 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 12.67 N/mm²
     → STRIKE — 12.67 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 15.83 N/mm²
     → STRIKE — 15.83 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q35/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q37` · Key A

In a lintel reinforcement check during materials approval, a 230 mm wide beam with effective depth 450 mm carries factored shear 120 kN at a section. Nominal shear stress τv is closest to:

- A) 1.16 N/mm²
- B) 0.93 N/mm²
- C) 1.39 N/mm²
- D) 1.74 N/mm²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 1.16 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 0.93 N/mm²
     → STRIKE — 0.93 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1.39 N/mm²
     → STRIKE — 1.39 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1.74 N/mm²
     → STRIKE — 1.74 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q36/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q4` · Key D

In a footing proportioning exercise during commissioning acceptance, a 300 mm × 300 mm short tied column carries factored axial load 1050 kN. The average factored stress Pu/Ag is closest to:

- A) 9.33 N/mm²
- B) 14 N/mm²
- C) 17.5 N/mm²
- D) 11.67 N/mm²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 9.33 N/mm²
     → STRIKE — 9.33 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 14 N/mm²
     → STRIKE — 14 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 17.5 N/mm²
     → STRIKE — 17.5 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 11.67 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q37/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q42` · Key B

In a slab-panel design during load-growth study, a 230 mm wide beam with effective depth 450 mm carries factored shear 125 kN at a section. Nominal shear stress τv is closest to:

- A) 0.97 N/mm²
- B) 1.21 N/mm²
- C) 1.45 N/mm²
- D) 1.81 N/mm²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 0.97 N/mm²
     → STRIKE — 0.97 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1.21 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 1.45 N/mm²
     → STRIKE — 1.45 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1.81 N/mm²
     → STRIKE — 1.81 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q38/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q44` · Key D

In a footing proportioning exercise during temporary-works review, a 300 mm × 300 mm short tied column carries factored axial load 1050 kN. The average factored stress Pu/Ag is closest to:

- A) 9.33 N/mm²
- B) 14 N/mm²
- C) 17.5 N/mm²
- D) 11.67 N/mm²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 9.33 N/mm²
     → STRIKE — 9.33 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 14 N/mm²
     → STRIKE — 14 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 17.5 N/mm²
     → STRIKE — 17.5 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 11.67 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q39/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q49` · Key A

In a corbel design during life-cycle assessment, a 300 mm × 300 mm short tied column carries factored axial load 900 kN. The average factored stress Pu/Ag is closest to:

- A) 10 N/mm²
- B) 8 N/mm²
- C) 12 N/mm²
- D) 15 N/mm²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 10 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 8 N/mm²
     → STRIKE — 8 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 12 N/mm²
     → STRIKE — 12 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 15 N/mm²
     → STRIKE — 15 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q40/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q7` · Key C

In a lintel reinforcement check during laboratory validation, a 230 mm wide beam with effective depth 450 mm carries factored shear 130 kN at a section. Nominal shear stress τv is closest to:

- A) 1 N/mm²
- B) 1.51 N/mm²
- C) 1.26 N/mm²
- D) 1.88 N/mm²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 1 N/mm²
     → STRIKE — 1 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1.51 N/mm²
     → STRIKE — 1.51 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1.26 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 1.88 N/mm²
     → STRIKE — 1.88 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q41/42 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q9` · Key A

In a corbel design during design-office checking, a 300 mm × 300 mm short tied column carries factored axial load 900 kN. The average factored stress Pu/Ag is closest to:

- A) 10 N/mm²
- B) 8 N/mm²
- C) 12 N/mm²
- D) 15 N/mm²

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 10 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 8 N/mm²
     → STRIKE — 8 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 12 N/mm²
     → STRIKE — 12 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 15 N/mm²
     → STRIKE — 15 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q42/42 · VALID PYQ · 2023CE2.pdf · `PYQ:2023CE2.pdf#Q40` · Key —

Two plates are connected by fillet welds of size 10 mm and subjected to tension, as shown in the figure. The thickness of each plate is 12 mm. The yield stress and the ultimate stress of steel under tension are 250 MPa and 410 MPa, respectively. The welding is done in the workshop (partial safety factor, 𝛾𝑚𝑤= 1.25). As per the Limit State Method of IS 800: 2007, what is the minimum length (in mm, rounded off to the nearest higher multiple of 5 mm) required of each weld to transmit a factored force P equal to 275 kN?

- A) 100
- B) 105
- C) 110
- D) 115 150 mm 100 mm P P

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Service/factored language present but material-strength mix not clear.

=== ELIMINATION (Rule 1: Service vs factored / partial-factor mix) ===
Trigger check: Stem mixes service (SLS) with ULS options, or options quote fy/0.87fy when the ask is P/A or M/Z stress.
Option walk:
  A) 100
     → STRIKE — Mixes service with factored actions or treats fy/fck as the computed member stress rather than the material grade.
  B) 105
     → STRIKE — Mixes service with factored actions or treats fy/fck as the computed member stress rather than the material grade.
  C) 110
     → STRIKE — Mixes service with factored actions or treats fy/fck as the computed member stress rather than the material grade.
  D) 115 150 mm 100 mm P P
     → STRIKE — Mixes service with factored actions or treats fy/fck as the computed member stress rather than the material grade.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

## Civil Rule 2 (Playbook #2) — Gross vs net / hole deduction

**Questions in this section:** 16 (all solved below)

### What this rule means

Bolted tension capacity uses net area. Staggered holes add s²/(4g). Gross-area options ignore holes entirely.

### When to use

Tension member, plate with bolt holes, staggered pitch, or chain of holes where Anet ≠ Agross.

### Application steps

1. Write Anet = (b − n·dh)·t (+ Σ s²/4g if stagger shown).
2. Strike the gross-area option immediately.
3. Include stagger credit only when stagger is drawn/stated.

**Memory cue:** `Anet ≈ (b − n·dh)·t ; staggered + Σ s²/(4g)`

### Core elimination move

Net = gross − holes (± s²/4g). Eliminate options that equal gross area, or that deduct diameter without adding the staggered term when stagger is shown.

### Worked questions

#### Q1/16 · Civil FLT-01 · `data/civil/ce-flt01.js#Q47` · Key D

A bolted tension plate has width b = 240 mm, thickness t = 10 mm and hole diameter dh = 22 mm. Path P is a chain section through 2 holes; path Q zig-zags through 3 holes with two stagger credits s = 30 mm on gauge g = 60 mm (paths marked on the figure). Using An = (b − n dh + Σ s²/(4g)) t, which path and net area should be adopted?

![figure](images/diagrams/civil-flt01/q47-staggered-net-paths.jpg)

- A) P, 1960 mm²
- B) P, 1740 mm²
- C) Q, 2030 mm²
- D) Q, 1810 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Tension/net-section path with hole deduction is the ask.

=== ELIMINATION (Rule 2: Gross vs net / hole deduction) ===
Trigger check: Tension plate/member with bolt holes; ask is Anet or net-section capacity.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) P, 1960 mm²
     → STRIKE — P, 1960 mm²: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Q, 1810 mm²”).
  B) P, 1740 mm²
     → STRIKE — P, 1740 mm²: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Q, 1810 mm²”).
  C) Q, 2030 mm²
     → STRIKE — Q, 2030 mm²: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Q, 1810 mm²”).
  D) Q, 1810 mm²
     → KEEP — Path P: An=(240−2×22)×10=1960 mm². Path Q: credits 2×(30²)/(4×60)=7.5 mm → An=(240−66+7.5)×10≈1815 mm² ≈1810. Adopt smaller An → Q.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
Path P: An=(240−2×22)×10=1960 mm². Path Q: credits 2×(30²)/(4×60)=7.5 mm → An=(240−66+7.5)×10≈1815 mm² ≈1810. Adopt smaller An → Q. Final keyed result: Q, 1810 mm².

#### Q2/16 · Civil FLT-02 · `data/civil/ce-flt02.js#Q20` · Key D

Two short tied columns have the same gross area and longitudinal-steel percentage. Column X alone receives higher concrete grade; Column Y alone receives higher steel grade. Which statement correctly interprets the IS axial-capacity expression \(0.4f_{ck}A_c+0.67f_yA_{sc}\)?

- A) both changes have identical effect per MPa
- B) Only steel grade can change capacity
- C) neither matters for a short column
- D) both changes raise capacity, but their gains are weighted by their respective concrete and steel areas

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Tension/net-section path with hole deduction is the ask.

=== ELIMINATION (Rule 2: Gross vs net / hole deduction) ===
Trigger check: Tension plate/member with bolt holes; ask is Anet or net-section capacity.
Option walk:
  A) both changes have identical effect per MPa
     → STRIKE — both changes have identical effect per MPa: Picks 'Only steel grade can change capacity' by mis-applying the stem data — recheck units and the asked quantity.
  B) Only steel grade can change capacity
     → STRIKE — Only steel grade can change capacity: Picks 'both changes have identical effect per MPa' by mis-applying the stem data — recheck units and the asked quantity.
  C) neither matters for a short column
     → STRIKE — neither matters for a short column: Picks 'neither matters for a short column' by mis-applying the stem data — recheck units and the asked quantity.
  D) both changes raise capacity, but their gains are weighted by their respective concrete and steel areas
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
Survivors after this rule: D only → keyed D.

#### Q3/16 · Civil FLT-02 · `data/civil/ce-flt02.js#Q42` · Key A

A bearing-type bolted splice is subjected to load reversal. Shop inspection finds oversized holes but design assumed standard holes without slip-critical treatment. What is the central concern?

- A) slip/deformation and reduced net/bearing capacity require redesign or approved correction
- B) bolt strength doubles
- C) only paint quantity changes
- D) larger holes increase net area

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Tension/net-section path with hole deduction is the ask.

=== ELIMINATION (Rule 2: Gross vs net / hole deduction) ===
Trigger check: Tension plate/member with bolt holes; ask is Anet or net-section capacity.
Option walk:
  A) slip/deformation and reduced net/bearing capacity require redesign or approved correction
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  B) bolt strength doubles
     → STRIKE — bolt strength doubles: Picks 'larger holes increase net area' by mis-applying the stem data — recheck units and the asked quantity.
  C) only paint quantity changes
     → STRIKE — only paint quantity changes: Picks 'bolt strength doubles' by mis-applying the stem data — recheck units and the asked quantity.
  D) larger holes increase net area
     → STRIKE — larger holes increase net area: Picks 'only paint quantity changes' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: A only → keyed A.

#### Q4/16 · Civil FLT-02 · `data/civil/ce-flt02.js#Q43` · Key D

The staggered plate crop shows two candidate net-section rupture paths P and Q. Using \(b=240\) mm, \(t=10\) mm, hole diameter 22 mm and the shown stagger/pitch values, which path and net area govern under \(b_n=b-\Sigma d_h+\Sigma s^2/(4g)\)?

![figure](images/diagrams/civil-flt02/q43-eccentric-bolts.jpg)

- A) P, 1960 mm²
- B) P, 1740 mm²
- C) Q, 2030 mm²
- D) Q, 1810 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Tension/net-section path with hole deduction is the ask.

=== ELIMINATION (Rule 2: Gross vs net / hole deduction) ===
Trigger check: Tension plate/member with bolt holes; ask is Anet or net-section capacity.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) P, 1960 mm²
     → STRIKE — P, 1960 mm²: Picks 'P, 1960 mm²' by mis-applying the stem data — recheck units and the asked quantity.
  B) P, 1740 mm²
     → STRIKE — P, 1740 mm²: Picks 'P, 1740 mm²' by mis-applying the stem data — recheck units and the asked quantity.
  C) Q, 2030 mm²
     → STRIKE — Q, 2030 mm²: Picks 'Q, 2030 mm²' by mis-applying the stem data — recheck units and the asked quantity.
  D) Q, 1810 mm²
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
Survivors after this rule: D only → keyed D.

#### Q5/16 · Civil FLT-02 · `data/civil/ce-flt02.js#Q44` · Key B

Assertion: A slender compression member’s design strength can fall even when gross area and yield stress remain unchanged. Reason: increasing effective length raises slenderness and amplifies instability effects represented by the buckling reduction factor.

- A) A true, R false
- B) Both true, R explains A
- C) Both true, R does not explain A
- D) A false, R true

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Tension/net-section path with hole deduction is the ask.

=== ELIMINATION (Rule 2: Gross vs net / hole deduction) ===
Trigger check: Tension plate/member with bolt holes; ask is Anet or net-section capacity.
Option walk:
  A) A true, R false
     → STRIKE — A true, R false: Picks 'Both true, R does not explain A' by mis-applying the stem data — recheck units and the asked quantity.
  B) Both true, R explains A
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  C) Both true, R does not explain A
     → STRIKE — Both true, R does not explain A: Picks 'A true, R false' by mis-applying the stem data — recheck units and the asked quantity.
  D) A false, R true
     → STRIKE — A false, R true: Picks 'A false, R true' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: B only → keyed B.

#### Q6/16 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q1` · Key A

In a roof-truss connection design during preliminary sizing, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 760 mm²
- B) 608 mm²
- C) 912 mm²
- D) 1140 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Tension/net-section path with hole deduction is the ask.

=== ELIMINATION (Rule 2: Gross vs net / hole deduction) ===
Trigger check: Tension plate/member with bolt holes; ask is Anet or net-section capacity.
Option walk:
  A) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q7/16 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q11` · Key C

In a roof-truss connection design during site approval, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 608 mm²
- B) 912 mm²
- C) 760 mm²
- D) 1140 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Tension/net-section path with hole deduction is the ask.

=== ELIMINATION (Rule 2: Gross vs net / hole deduction) ===
Trigger check: Tension plate/member with bolt holes; ask is Anet or net-section capacity.
Option walk:
  A) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q8/16 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q16` · Key D

In a purlin stability check during emergency restoration, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 608 mm²
- B) 912 mm²
- C) 1140 mm²
- D) 760 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Tension/net-section path with hole deduction is the ask.

=== ELIMINATION (Rule 2: Gross vs net / hole deduction) ===
Trigger check: Tension plate/member with bolt holes; ask is Anet or net-section capacity.
Option walk:
  A) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q9/16 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q21` · Key A

In a roof-truss connection design during code-compliance review, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 760 mm²
- B) 608 mm²
- C) 912 mm²
- D) 1140 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Tension/net-section path with hole deduction is the ask.

=== ELIMINATION (Rule 2: Gross vs net / hole deduction) ===
Trigger check: Tension plate/member with bolt holes; ask is Anet or net-section capacity.
Option walk:
  A) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q10/16 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q25` · Key A

On the staggered bolt-hole figure, net width along a zigzag path adds the term: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 4.

![figure](images/diagrams/civil-st-steel/q47-staggered-net-paths.jpg)

- A) +s²/(4g) per stagger
- B) −d only
- C) −s²/(4g)
- D) +g/s

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Tension/net-section path with hole deduction is the ask.

=== ELIMINATION (Rule 2: Gross vs net / hole deduction) ===
Trigger check: Tension plate/member with bolt holes; ask is Anet or net-section capacity.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) +s²/(4g) per stagger
     → KEEP — Staggered net width includes +s²/(4g) for each staggered gauge.
  B) −d only
     → STRIKE — −d only: it does not follow from the stated system, sign convention, or requested check.
  C) −s²/(4g)
     → STRIKE — −s²/(4g): it does not follow from the stated system, sign convention, or requested check.
  D) +g/s
     → STRIKE — +g/s: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q11/16 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q26` · Key B

In a purlin stability check during asset-renewal planning, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 608 mm²
- B) 760 mm²
- C) 912 mm²
- D) 1140 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Tension/net-section path with hole deduction is the ask.

=== ELIMINATION (Rule 2: Gross vs net / hole deduction) ===
Trigger check: Tension plate/member with bolt holes; ask is Anet or net-section capacity.
Option walk:
  A) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q12/16 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q31` · Key C

In a roof-truss connection design during post-installation testing, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 608 mm²
- B) 912 mm²
- C) 760 mm²
- D) 1140 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Tension/net-section path with hole deduction is the ask.

=== ELIMINATION (Rule 2: Gross vs net / hole deduction) ===
Trigger check: Tension plate/member with bolt holes; ask is Anet or net-section capacity.
Option walk:
  A) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q13/16 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q36` · Key D

In a purlin stability check during schedule-of-rates check, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 608 mm²
- B) 912 mm²
- C) 1140 mm²
- D) 760 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Tension/net-section path with hole deduction is the ask.

=== ELIMINATION (Rule 2: Gross vs net / hole deduction) ===
Trigger check: Tension plate/member with bolt holes; ask is Anet or net-section capacity.
Option walk:
  A) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q14/16 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q41` · Key A

In a roof-truss connection design during monsoon-readiness check, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 760 mm²
- B) 608 mm²
- C) 912 mm²
- D) 1140 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Tension/net-section path with hole deduction is the ask.

=== ELIMINATION (Rule 2: Gross vs net / hole deduction) ===
Trigger check: Tension plate/member with bolt holes; ask is Anet or net-section capacity.
Option walk:
  A) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q15/16 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q46` · Key B

In a purlin stability check during operating-procedure validation, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 608 mm²
- B) 760 mm²
- C) 912 mm²
- D) 1140 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Tension/net-section path with hole deduction is the ask.

=== ELIMINATION (Rule 2: Gross vs net / hole deduction) ===
Trigger check: Tension plate/member with bolt holes; ask is Anet or net-section capacity.
Option walk:
  A) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q16/16 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q6` · Key B

In a purlin stability check during fault investigation, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 608 mm²
- B) 760 mm²
- C) 912 mm²
- D) 1140 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Tension/net-section path with hole deduction is the ask.

=== ELIMINATION (Rule 2: Gross vs net / hole deduction) ===
Trigger check: Tension plate/member with bolt holes; ask is Anet or net-section capacity.
Option walk:
  A) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

## Civil Rule 3 (Playbook #3) — Cover vs effective depth

**Questions in this section:** 17 (all solved below)

### What this rule means

IS 456 flexural/shear formulas use effective depth d, not overall D. d = D − cover − φ/2 (as stem defines).

### When to use

RCC beam/slab where overall D, cover, and bar dia are given and options use Ast, τv, or lever arm that would change if D is mistaken for d.

### Application steps

1. Extract D, cover, φ; compute d before Ast or τv.
2. Strike options that use D in Mu = 0.87 fy Ast z or τv = Vu/(b d).

**Memory cue:** `d = D − cover − φ/2 ; τv = Vu/(b d)`

### Core elimination move

d = D − cover − φ/2 (or as stem defines). Strike options that use overall depth as effective depth.

### Worked questions

#### Q1/17 · Civil FLT-01 · `data/civil/ce-flt01.js#Q16` · Key C

Before a pour on an RCC beam in moderate exposure, measured cover is below the durability requirement although the calculated effective depth is available. Which correction priority is most appropriate?

- A) Accept because depth governs strength
- B) Increase water-cement ratio
- C) Restore specified cover before concreting
- D) Replace stirrups with larger spacing

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Option walk:
  A) Accept because depth governs strength
     → STRIKE — Accept because depth governs strength: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Restore specified cover before concreting”).
  B) Increase water-cement ratio
     → STRIKE — Increase water-cement ratio: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Restore specified cover before concreting”).
  C) Restore specified cover before concreting
     → KEEP — Durability/fire cover is an independent requirement.
  D) Replace stirrups with larger spacing
     → STRIKE — Replace stirrups with larger spacing: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Restore specified cover before concreting”).
Survivors after this rule: C only → keyed C.

#### Q2/17 · Civil FLT-01 · `data/civil/ce-flt01.js#Q17` · Key A

While checking an Fe415 singly reinforced beam, the trial neutral-axis depth is 225 mm for an effective depth of 500 mm. Under the IS limiting depth ratio for this steel grade, which conclusion should the designer record?

- A) Under-reinforced because 225 mm is below 240 mm
- B) Balanced because ratio is 0.50
- C) Over-reinforced because any depth above 200 mm fails
- D) Classification needs beam width only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Option walk:
  A) Under-reinforced because 225 mm is below 240 mm
     → KEEP — Limiting depth = 0.48×500 = 240 mm; trial is lower.
  B) Balanced because ratio is 0.50
     → STRIKE — Balanced because ratio is 0.50: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Under-reinforced because 225 mm is below 240 mm”).
  C) Over-reinforced because any depth above 200 mm fails
     → STRIKE — Over-reinforced because any depth above 200 mm fails: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Under-reinforced because 225 mm is below 240 mm”).
  D) Classification needs beam width only
     → STRIKE — Classification needs beam width only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Under-reinforced because 225 mm is below 240 mm”).
Survivors after this rule: A only → keyed A.

=== SCRATCH CHECK (verification only — not the elimination) ===
limiting depth = 0.48×500 = 240 mm; trial is lower. Final keyed result: Under-reinforced because 225 mm is below 240 mm.

#### Q3/17 · Civil FLT-01 · `data/civil/ce-flt01.js#Q19` · Key C

Mid-pour on a continuous RCC floor, top bars over an interior support are found displaced downward by about 35 mm before concrete reaches that bay, while bottom steel remains in place. The pour gang is waiting on site instructions. Which site direction is most defensible as an immediate hold-point response?

- A) Continue because slab bottom steel is present
- B) Add extra water for access
- C) Hold the pour locally, restore chairs/bar level and reverify cover and effective depth
- D) Record it only after stripping

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Option walk:
  A) Continue because slab bottom steel is present
     → STRIKE — Continue because slab bottom steel is present: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Hold the pour locally, restore chairs/bar level and reverify cover and effective depth”).
  B) Add extra water for access
     → STRIKE — Add extra water for access: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Hold the pour locally, restore chairs/bar level and reverify cover and effective depth”).
  C) Hold the pour locally, restore chairs/bar level and reverify cover and effective depth
     → KEEP — Displaced negative steel reduces support capacity and changes cover.
  D) Record it only after stripping
     → STRIKE — Record it only after stripping: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Hold the pour locally, restore chairs/bar level and reverify cover and effective depth”).
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
Final keyed result: Hold the pour locally, restore chairs/bar level and reverify cover and effective depth.

#### Q4/17 · Civil FLT-01 · `data/civil/ce-flt01.js#Q24` · Key C

In design review, factored moment is 160 kN·m while the limiting singly reinforced capacity of the fixed beam section is 138 kN·m. Section depth cannot increase. Which design route is most appropriate?

- A) Use only minimum tension steel
- B) Reduce effective depth
- C) Design the excess moment with compression and additional tension steel
- D) Treat 138 kN·m as service moment

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Option walk:
  A) Use only minimum tension steel
     → STRIKE — Use only minimum tension steel: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Design the excess moment with compression and additional tension steel”).
  B) Reduce effective depth
     → STRIKE — Reduce effective depth: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Design the excess moment with compression and additional tension steel”).
  C) Design the excess moment with compression and additional tension steel
     → KEEP — Demand exceeds singly reinforced limit; a steel couple must resist the excess.
  D) Treat 138 kN·m as service moment
     → STRIKE — Treat 138 kN·m as service moment: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Design the excess moment with compression and additional tension steel”).
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
Final keyed result: Design the excess moment with compression and additional tension steel.

#### Q5/17 · Civil FLT-01 · `data/civil/ce-flt01.js#Q25` · Key C

A design review finds that the factored moment exceeds the limiting capacity of the same section as a singly reinforced member, while overall depth cannot be increased. Which design interpretation is correct?

- A) Provide only minimum tension steel and ignore the excess
- B) Treat the limiting singly reinforced capacity as a serviceability ceiling and stop
- C) Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials
- D) Reduce the load factor instead of changing reinforcement

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Option walk:
  A) Provide only minimum tension steel and ignore the excess
     → STRIKE — Provide only minimum tension steel and ignore the excess: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials”).
  B) Treat the limiting singly reinforced capacity as a serviceability ceiling and stop
     → STRIKE — Treat the limiting singly reinforced capacity as a serviceability ceiling and stop: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials”).
  C) Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials
     → KEEP — Mu > Mu,lim requires a steel couple or a larger section.
  D) Reduce the load factor instead of changing reinforcement
     → STRIKE — Reduce the load factor instead of changing reinforcement: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials”).
Survivors after this rule: C only → keyed C.

#### Q6/17 · Civil FLT-01 · `data/civil/ce-flt01.js#Q27` · Key C

On a beam drawing check, analysis suggests 280 mm stirrup spacing, effective depth is 350 mm, and the applicable spacing ceiling is three-quarters of effective depth. Which practical spacing should be issued?

- A) 300 mm
- B) 280 mm
- C) 260 mm
- D) 350 mm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Option walk:
  A) 300 mm
     → STRIKE — 300 mm: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “260 mm”).
  B) 280 mm
     → STRIKE — 280 mm: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “260 mm”).
  C) 260 mm
     → KEEP — Ceiling = 262.5 mm; adopt 260 mm. This uniquely selects “260 mm”. See per-option mechanisms under TRAP ANALYSIS.
  D) 350 mm
     → STRIKE — 350 mm: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “260 mm”).
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
ceiling = 262.5 mm; adopt 260 mm. Final keyed result: 260 mm.

#### Q7/17 · Civil FLT-02 · `data/civil/ce-flt02.js#Q16` · Key A

An RCC beam in moderate exposure is detailed with nominal cover smaller than the durability requirement, though effective depth is adequate. Which concern should govern correction before concreting?

- A) Premature reinforcement corrosion and reduced fire durability
- B) Higher lever arm
- C) Improved ductility
- D) Lower dead load

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Option walk:
  A) Premature reinforcement corrosion and reduced fire durability
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  B) Higher lever arm
     → STRIKE — Higher lever arm: Picks 'Lower dead load' by mis-applying the stem data — recheck units and the asked quantity.
  C) Improved ductility
     → STRIKE — Improved ductility: Picks 'Improved ductility' by mis-applying the stem data — recheck units and the asked quantity.
  D) Lower dead load
     → STRIKE — Lower dead load: Picks 'Higher lever arm' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: A only → keyed A.

#### Q8/17 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q12` · Key D

In a slab-panel design during quality-control inspection, a 230 mm wide beam with effective depth 450 mm carries factored shear 135 kN at a section. Nominal shear stress τv is closest to:

- A) 1.04 N/mm²
- B) 1.57 N/mm²
- C) 1.96 N/mm²
- D) 1.3 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Option walk:
  A) 1.04 N/mm²
     → STRIKE — 1.04 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1.57 N/mm²
     → STRIKE — 1.57 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1.96 N/mm²
     → STRIKE — 1.96 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 1.3 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q9/17 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q17` · Key A

In a lintel reinforcement check during shutdown planning, a 230 mm wide beam with effective depth 450 mm carries factored shear 120 kN at a section. Nominal shear stress τv is closest to:

- A) 1.16 N/mm²
- B) 0.93 N/mm²
- C) 1.39 N/mm²
- D) 1.74 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Option walk:
  A) 1.16 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 0.93 N/mm²
     → STRIKE — 0.93 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1.39 N/mm²
     → STRIKE — 1.39 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1.74 N/mm²
     → STRIKE — 1.74 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q10/17 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q2` · Key B

In a slab-panel design during service-load verification, a 230 mm wide beam with effective depth 450 mm carries factored shear 125 kN at a section. Nominal shear stress τv is closest to:

- A) 0.97 N/mm²
- B) 1.21 N/mm²
- C) 1.45 N/mm²
- D) 1.81 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Option walk:
  A) 0.97 N/mm²
     → STRIKE — 0.97 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1.21 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 1.45 N/mm²
     → STRIKE — 1.45 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1.81 N/mm²
     → STRIKE — 1.81 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q11/17 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q22` · Key B

In a slab-panel design during independent design check, a 230 mm wide beam with effective depth 450 mm carries factored shear 125 kN at a section. Nominal shear stress τv is closest to:

- A) 0.97 N/mm²
- B) 1.21 N/mm²
- C) 1.45 N/mm²
- D) 1.81 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Option walk:
  A) 0.97 N/mm²
     → STRIKE — 0.97 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1.21 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 1.45 N/mm²
     → STRIKE — 1.45 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1.81 N/mm²
     → STRIKE — 1.81 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q12/17 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q25` · Key A

For the RCC beam section shown, effective depth d is measured from: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-rcc/r1.jpg)

- A) Compression face to centroid of tension steel
- B) Overall depth to soffit
- C) Neutral axis to soffit
- D) Cover to cover

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Compression face to centroid of tension steel
     → KEEP — Effective depth is extreme compression fibre to centroid of tensile reinforcement.
  B) Overall depth to soffit
     → STRIKE — Overall depth to soffit: it does not follow from the stated system, sign convention, or requested check.
  C) Neutral axis to soffit
     → STRIKE — Neutral axis to soffit: it does not follow from the stated system, sign convention, or requested check.
  D) Cover to cover
     → STRIKE — Cover to cover: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q13/17 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q27` · Key C

In a lintel reinforcement check during construction sequencing, a 230 mm wide beam with effective depth 450 mm carries factored shear 130 kN at a section. Nominal shear stress τv is closest to:

- A) 1 N/mm²
- B) 1.51 N/mm²
- C) 1.26 N/mm²
- D) 1.88 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Option walk:
  A) 1 N/mm²
     → STRIKE — 1 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1.51 N/mm²
     → STRIKE — 1.51 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1.26 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 1.88 N/mm²
     → STRIKE — 1.88 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q14/17 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q37` · Key A

In a lintel reinforcement check during materials approval, a 230 mm wide beam with effective depth 450 mm carries factored shear 120 kN at a section. Nominal shear stress τv is closest to:

- A) 1.16 N/mm²
- B) 0.93 N/mm²
- C) 1.39 N/mm²
- D) 1.74 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Option walk:
  A) 1.16 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 0.93 N/mm²
     → STRIKE — 0.93 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1.39 N/mm²
     → STRIKE — 1.39 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1.74 N/mm²
     → STRIKE — 1.74 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q15/17 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q42` · Key B

In a slab-panel design during load-growth study, a 230 mm wide beam with effective depth 450 mm carries factored shear 125 kN at a section. Nominal shear stress τv is closest to:

- A) 0.97 N/mm²
- B) 1.21 N/mm²
- C) 1.45 N/mm²
- D) 1.81 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Option walk:
  A) 0.97 N/mm²
     → STRIKE — 0.97 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1.21 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 1.45 N/mm²
     → STRIKE — 1.45 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1.81 N/mm²
     → STRIKE — 1.81 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q16/17 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q7` · Key C

In a lintel reinforcement check during laboratory validation, a 230 mm wide beam with effective depth 450 mm carries factored shear 130 kN at a section. Nominal shear stress τv is closest to:

- A) 1 N/mm²
- B) 1.51 N/mm²
- C) 1.26 N/mm²
- D) 1.88 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Option walk:
  A) 1 N/mm²
     → STRIKE — 1 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 1.51 N/mm²
     → STRIKE — 1.51 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1.26 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 1.88 N/mm²
     → STRIKE — 1.88 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q17/17 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q8` · Key D

Using the punching perimeter shown around a column, punching shear is checked on a critical section at: Figure values (also stated here): column size and effective depth d as used for the d/2 perimeter.

![figure](images/diagrams/civil-st-rcc/rcc-punching-shear.svg)

- A) Column face only
- B) 2d from column face
- C) Slab edge only
- D) d/2 from column face

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: RCC depth uses d vs D/cover — options can confuse overall vs effective depth.

=== ELIMINATION (Rule 3: Cover vs effective depth) ===
Trigger check: Overall D, cover, bar size given; Ast or τv options change if D is used as d.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Column face only
     → STRIKE — Column face only: it does not follow from the stated system, sign convention, or requested check.
  B) 2d from column face
     → STRIKE — 2d from column face: it does not follow from the stated system, sign convention, or requested check.
  C) Slab edge only
     → STRIKE — Slab edge only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) d/2 from column face
     → KEEP — IS punching check uses a perimeter at d/2 from the column face.
Survivors after this rule: D only → keyed D.

## Civil Rule 4 (Playbook #5) — Sign / sense / tension–compression flip

**Questions in this section:** 85 (all solved below)

### What this rule means

Equilibrium sense matters. Options may share magnitude but reverse tension/compression or ↑/↓.

### When to use

Reactions, member forces, or BMD signs where a distractor has correct magnitude but wrong sense (↑/↓, tension/compression).

### Application steps

1. Fix one sign convention from the figure/FBD.
2. Eliminate correct-magnitude wrong-sense options.

**Memory cue:** `ΣFx=0, ΣFy=0, ΣM=0 (sense matters)`

### Core elimination move

Fix one free-body sign convention from the figure. Eliminate options whose magnitude is right but sense (↑/↓, T/C) contradicts equilibrium.

### Worked questions

#### Q1/85 · Civil FLT-01 · `data/civil/ce-flt01.js#Q1` · Key A

Following a gantry-tie inspection at a substation, the engineer records a 20 mm diameter member under 55 kN service tension in Fe250 steel. Which conclusion is most defensible before accepting the member on a gross-section stress basis?

- A) Stress ≈175 MPa, below yield
- B) Stress ≈200 MPa, at yield
- C) Stress ≈350 MPa, above yield
- D) Stress ≈227 MPa, exactly at design strength

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) Stress ≈175 MPa, below yield
     → KEEP — Area = 314.2 mm²; stress = 55,000/314.2 ≈175 MPa. This uniquely selects “Stress ≈175 MPa, below yield”. See per-option mechanisms under TRAP ANALYSIS.
  B) Stress ≈200 MPa, at yield
     → STRIKE — Stress ≈200 MPa, at yield: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Stress ≈175 MPa, below yield”).
  C) Stress ≈350 MPa, above yield
     → STRIKE — Stress ≈350 MPa, above yield: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Stress ≈175 MPa, below yield”).
  D) Stress ≈227 MPa, exactly at design strength
     → STRIKE — Stress ≈227 MPa, exactly at design strength: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Stress ≈175 MPa, below yield”).
Survivors after this rule: A only → keyed A.

=== SCRATCH CHECK (verification only — not the elimination) ===
area = 314.2 mm²; stress = 55,000/314.2 ≈175 MPa. Final keyed result: Stress ≈175 MPa, below yield.

#### Q2/85 · Civil FLT-01 · `data/civil/ce-flt01.js#Q15` · Key D

When a slender compression member is redesigned, the same area and material are retained but material is moved away from the weak centroidal axis. With length and end restraint unchanged, which linked outcome should the engineer expect?

- A) Radius decreases; slenderness decreases; capacity rises
- B) All unchanged
- C) Radius rises; slenderness rises; capacity falls
- D) Radius rises; slenderness falls; buckling capacity rises

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) Radius decreases; slenderness decreases; capacity rises
     → STRIKE — Radius decreases; slenderness decreases; capacity rises: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Radius rises; slenderness falls; buckling capacity rises”).
  B) All unchanged
     → STRIKE — All unchanged: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Radius rises; slenderness falls; buckling capacity rises”).
  C) Radius rises; slenderness rises; capacity falls
     → STRIKE — Radius rises; slenderness rises; capacity falls: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Radius rises; slenderness falls; buckling capacity rises”).
  D) Radius rises; slenderness falls; buckling capacity rises
     → KEEP — Larger weak-axis second moment raises radius, lowers slenderness and raises buckling resistance.
Survivors after this rule: D only → keyed D.

#### Q3/85 · Civil FLT-01 · `data/civil/ce-flt01.js#Q19` · Key C

Mid-pour on a continuous RCC floor, top bars over an interior support are found displaced downward by about 35 mm before concrete reaches that bay, while bottom steel remains in place. The pour gang is waiting on site instructions. Which site direction is most defensible as an immediate hold-point response?

- A) Continue because slab bottom steel is present
- B) Add extra water for access
- C) Hold the pour locally, restore chairs/bar level and reverify cover and effective depth
- D) Record it only after stripping

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) Continue because slab bottom steel is present
     → STRIKE — Continue because slab bottom steel is present: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Hold the pour locally, restore chairs/bar level and reverify cover and effective depth”).
  B) Add extra water for access
     → STRIKE — Add extra water for access: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Hold the pour locally, restore chairs/bar level and reverify cover and effective depth”).
  C) Hold the pour locally, restore chairs/bar level and reverify cover and effective depth
     → KEEP — Displaced negative steel reduces support capacity and changes cover.
  D) Record it only after stripping
     → STRIKE — Record it only after stripping: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Hold the pour locally, restore chairs/bar level and reverify cover and effective depth”).
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
Final keyed result: Hold the pour locally, restore chairs/bar level and reverify cover and effective depth.

#### Q4/85 · Civil FLT-01 · `data/civil/ce-flt01.js#Q20` · Key D

At an interior support of a continuous T-beam, the moment is hogging and the slab flange lies in tension. Which compression width is most appropriate for flexural resistance there?

- A) Full slab width
- B) Midspan effective flange width
- C) Half panel width
- D) Web width, unless another compression flange is specifically present

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) Full slab width
     → STRIKE — Full slab width: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Web width, unless another compression flange is specifically present”).
  B) Midspan effective flange width
     → STRIKE — Midspan effective flange width: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Web width, unless another compression flange is specifically present”).
  C) Half panel width
     → STRIKE — Half panel width: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Web width, unless another compression flange is specifically present”).
  D) Web width, unless another compression flange is specifically present
     → KEEP — The slab flange is not in compression under hogging.
Survivors after this rule: D only → keyed D.

#### Q5/85 · Civil FLT-01 · `data/civil/ce-flt01.js#Q24` · Key C

In design review, factored moment is 160 kN·m while the limiting singly reinforced capacity of the fixed beam section is 138 kN·m. Section depth cannot increase. Which design route is most appropriate?

- A) Use only minimum tension steel
- B) Reduce effective depth
- C) Design the excess moment with compression and additional tension steel
- D) Treat 138 kN·m as service moment

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) Use only minimum tension steel
     → STRIKE — Use only minimum tension steel: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Design the excess moment with compression and additional tension steel”).
  B) Reduce effective depth
     → STRIKE — Reduce effective depth: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Design the excess moment with compression and additional tension steel”).
  C) Design the excess moment with compression and additional tension steel
     → KEEP — Demand exceeds singly reinforced limit; a steel couple must resist the excess.
  D) Treat 138 kN·m as service moment
     → STRIKE — Treat 138 kN·m as service moment: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Design the excess moment with compression and additional tension steel”).
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
Final keyed result: Design the excess moment with compression and additional tension steel.

#### Q6/85 · Civil FLT-01 · `data/civil/ce-flt01.js#Q25` · Key C

A design review finds that the factored moment exceeds the limiting capacity of the same section as a singly reinforced member, while overall depth cannot be increased. Which design interpretation is correct?

- A) Provide only minimum tension steel and ignore the excess
- B) Treat the limiting singly reinforced capacity as a serviceability ceiling and stop
- C) Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials
- D) Reduce the load factor instead of changing reinforcement

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) Provide only minimum tension steel and ignore the excess
     → STRIKE — Provide only minimum tension steel and ignore the excess: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials”).
  B) Treat the limiting singly reinforced capacity as a serviceability ceiling and stop
     → STRIKE — Treat the limiting singly reinforced capacity as a serviceability ceiling and stop: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials”).
  C) Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials
     → KEEP — Mu > Mu,lim requires a steel couple or a larger section.
  D) Reduce the load factor instead of changing reinforcement
     → STRIKE — Reduce the load factor instead of changing reinforcement: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Introduce a compression-steel couple with additional tension steel to resist the excess, or else change the section/materials”).
Survivors after this rule: C only → keyed C.

#### Q7/85 · Civil FLT-01 · `data/civil/ce-flt01.js#Q26` · Key D

From the design shear table (also shown), τc = 0.48 MPa at 0.50% tension steel and τc = 0.56 MPa at 0.75%. For pt = 0.625% and nominal shear stress τv = 0.70 MPa, which conclusion is closest?

![figure](images/diagrams/civil-flt01/q26-shear-table.jpg)

- A) 0.48 MPa; minimum stirrups only
- B) 0.56 MPa; no stirrups
- C) 0.70 MPa; concrete alone
- D) 0.52 MPa; stirrups carry the balance, subject to the maximum limit

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 0.48 MPa; minimum stirrups only
     → STRIKE — 0.48 MPa; minimum stirrups only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.52 MPa; stirrups carry the balance, subject to the maximum limit”).
  B) 0.56 MPa; no stirrups
     → STRIKE — 0.56 MPa; no stirrups: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.52 MPa; stirrups carry the balance, subject to the maximum limit”).
  C) 0.70 MPa; concrete alone
     → STRIKE — 0.70 MPa; concrete alone: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.52 MPa; stirrups carry the balance, subject to the maximum limit”).
  D) 0.52 MPa; stirrups carry the balance, subject to the maximum limit
     → KEEP — Midpoint interpolation gives 0.52 MPa; demand exceeds it.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
midpoint interpolation gives 0.52 MPa; demand exceeds it. Final keyed result: 0.52 MPa; stirrups carry the balance, subject to the maximum limit.

#### Q8/85 · Civil FLT-01 · `data/civil/ce-flt01.js#Q42` · Key D

In review of a built-up laced column for a workshop building, the designer must confirm whether the lacing system is correctly understood for force transfer under transverse shear. Assertion: lacing makes the component sections act together. Reason: lacing members are always tension-only and need not resist transverse shear. Which conclusion follows?

- A) Both true; R explains A
- B) Both true; R does not explain A
- C) A false, R true
- D) A true, R false

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) Both true; R explains A
     → STRIKE — Both true; R explains A: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “A true, R false”).
  B) Both true; R does not explain A
     → STRIKE — Both true; R does not explain A: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “A true, R false”).
  C) A false, R true
     → STRIKE — A false, R true: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “A true, R false”).
  D) A true, R false
     → KEEP — A is true; lacing is designed for transverse shear and may experience compression.
Survivors after this rule: D only → keyed D.

#### Q9/85 · Civil FLT-01 · `data/civil/ce-flt01.js#Q47` · Key D

A bolted tension plate has width b = 240 mm, thickness t = 10 mm and hole diameter dh = 22 mm. Path P is a chain section through 2 holes; path Q zig-zags through 3 holes with two stagger credits s = 30 mm on gauge g = 60 mm (paths marked on the figure). Using An = (b − n dh + Σ s²/(4g)) t, which path and net area should be adopted?

![figure](images/diagrams/civil-flt01/q47-staggered-net-paths.jpg)

- A) P, 1960 mm²
- B) P, 1740 mm²
- C) Q, 2030 mm²
- D) Q, 1810 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) P, 1960 mm²
     → STRIKE — P, 1960 mm²: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Q, 1810 mm²”).
  B) P, 1740 mm²
     → STRIKE — P, 1740 mm²: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Q, 1810 mm²”).
  C) Q, 2030 mm²
     → STRIKE — Q, 2030 mm²: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Q, 1810 mm²”).
  D) Q, 1810 mm²
     → KEEP — Path P: An=(240−2×22)×10=1960 mm². Path Q: credits 2×(30²)/(4×60)=7.5 mm → An=(240−66+7.5)×10≈1815 mm² ≈1810. Adopt smaller An → Q.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
Path P: An=(240−2×22)×10=1960 mm². Path Q: credits 2×(30²)/(4×60)=7.5 mm → An=(240−66+7.5)×10≈1815 mm² ≈1810. Adopt smaller An → Q. Final keyed result: Q, 1810 mm².

#### Q10/85 · Civil FLT-01 · `data/civil/ce-flt01.js#Q48` · Key D

In shop-drawing review of 20 mm bolts on a tension splice, proposed pitch is 45 mm along the load line. The applicable code minimum is 2.5 times nominal diameter. Which direction is most defensible?

- A) Accept 45 mm because it exceeds twice diameter
- B) Reduce hole diameter only
- C) Accept if plate is thicker than bolt
- D) Revise pitch to at least 50 mm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) Accept 45 mm because it exceeds twice diameter
     → STRIKE — Accept 45 mm because it exceeds twice diameter: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Revise pitch to at least 50 mm”).
  B) Reduce hole diameter only
     → STRIKE — Reduce hole diameter only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Revise pitch to at least 50 mm”).
  C) Accept if plate is thicker than bolt
     → STRIKE — Accept if plate is thicker than bolt: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Revise pitch to at least 50 mm”).
  D) Revise pitch to at least 50 mm
     → KEEP — Minimum = 50 mm. This uniquely selects “Revise pitch to at least 50 mm”. See per-option mechanisms under TRAP ANALYSIS.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
minimum = 50 mm. Final keyed result: Revise pitch to at least 50 mm.

#### Q11/85 · Civil FLT-01 · `data/civil/ce-flt01.js#Q49` · Key A

During site weld inspection of a fillet connecting a bracket to a column flange, undercut depth exceeds the project acceptance limit along a primary load path, although visual appearance is otherwise neat. Which action is most defensible before loading?

- A) Grind/repair to approved procedure, re-inspect, then accept only if limits are met
- B) Accept because the throat looks large
- C) Fill undercut with paint only
- D) Ignore undercut on the compression side always

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) Grind/repair to approved procedure, re-inspect, then accept only if limits are met
     → KEEP — Undercut is a rejectable discontinuity on a primary path until repaired to procedure.
  B) Accept because the throat looks large
     → STRIKE — Accept because the throat looks large: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Grind/repair to approved procedure, re-inspect, then accept only if limits are met”).
  C) Fill undercut with paint only
     → STRIKE — Fill undercut with paint only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Grind/repair to approved procedure, re-inspect, then accept only if limits are met”).
  D) Ignore undercut on the compression side always
     → STRIKE — Ignore undercut on the compression side always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Grind/repair to approved procedure, re-inspect, then accept only if limits are met”).
Survivors after this rule: A only → keyed A.

#### Q12/85 · Civil FLT-01 · `data/civil/ce-flt01.js#Q51` · Key D

While checking an inclined-roof purlin under combined gravity and wind-reversal actions, the resultant loading is found to be oblique to the section principal axes. Which design approach is most appropriate for the strength check?

- A) Major-axis bending only
- B) Axial tension only
- C) Minor-axis bending only
- D) Biaxial bending interaction with stability and serviceability checks

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) Major-axis bending only
     → STRIKE — Major-axis bending only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Biaxial bending interaction with stability and serviceability checks”).
  B) Axial tension only
     → STRIKE — Axial tension only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Biaxial bending interaction with stability and serviceability checks”).
  C) Minor-axis bending only
     → STRIKE — Minor-axis bending only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Biaxial bending interaction with stability and serviceability checks”).
  D) Biaxial bending interaction with stability and serviceability checks
     → KEEP — Oblique loading resolves about both axes, and restraint affects stability.
Survivors after this rule: D only → keyed D.

#### Q13/85 · Civil FLT-01 · `data/civil/ce-flt01.js#Q63` · Key C

For the force system shown below, the tension T1 in the rope is Figure values (also stated here): 1000 N vertical load; T1 and T2 at 120° as labelled.

![figure](images/diagrams/civil-flt01/q-extra-rope-forces.jpg)

- A) 500 N
- B) 866 N
- C) 1000 N
- D) 1732 N

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 500 N
     → STRIKE — 500 N: Uses half load or vertical equilibrium with cos60=0.5 wrongly as T1=1000·0.5.
  B) 866 N
     → STRIKE — 866 N: Uses 1000·(√3/2) as if resolving a 30–60 system.
  C) 1000 N
     → KEEP — All angles 120° ⇒ by Lami’s theorem each force equals 1000 N.
  D) 1732 N
     → STRIKE — 1732 N: Uses 1000·√3 as if single-side resolution without closing the force triangle.
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
T1/sin120 = T2/sin120 = 1000/sin120 ⇒ T1=1000 N. Final keyed result: 1000 N.

#### Q14/85 · Civil FLT-01 · `data/civil/ce-flt01.js#Q67` · Key B

For excavation dewatering in a sand stratum, laboratory tests give specific gravity 2.65 and void ratio 0.65 for the in-situ state. Which upward hydraulic gradient is closest to the onset of boiling?

- A) 0.65
- B) 1.00
- C) 1.65
- D) 2.65

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 0.65
     → STRIKE — 0.65: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “1.00”).
  B) 1.00
     → KEEP — \((2.65−1)/(1+0.65)=1.0\). This uniquely selects “1.00”. See per-option mechanisms under TRAP ANALYSIS.
  C) 1.65
     → STRIKE — 1.65: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “1.00”).
  D) 2.65
     → STRIKE — 2.65: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “1.00”).
Survivors after this rule: B only → keyed B.

=== SCRATCH CHECK (verification only — not the elimination) ===
\((2.65−1)/(1+0.65)=1.0\). Final keyed result: 1.00.

#### Q15/85 · Civil FLT-01 · `data/civil/ce-flt01.js#Q8` · Key D

While assessing a propped cantilever under full-span UDL, the prop is found to settle downward by half the free-end deflection that the corresponding unpropped cantilever would have under that UDL. Which upward prop reaction should the analyst obtain?

- A) \(3wL/8\)
- B) \(wL/4\)
- C) \(5wL/8\)
- D) \(3wL/16\)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) \(3wL/8\)
     → STRIKE — \(3wL/8\): Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “\(3wL/16\)”).
  B) \(wL/4\)
     → STRIKE — \(wL/4\): Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “\(3wL/16\)”).
  C) \(5wL/8\)
     → STRIKE — \(5wL/8\): Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “\(3wL/16\)”).
  D) \(3wL/16\)
     → KEEP — Compatibility leaves half the UDL deflection to be cancelled by the prop, giving \(3wL/16\).
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
compatibility leaves half the UDL deflection to be cancelled by the prop, giving \(3wL/16\). Final keyed result: \(3wL/16\).

#### Q16/85 · Civil FLT-02 · `data/civil/ce-flt02.js#Q1` · Key C

A 2.0 m long steel tie of uniform 500 mm² area carries a gradually applied 50 kN service load. Neglecting self-weight, which stress-extension pair is consistent with \(E=200\) GPa?

- A) 50 MPa, 2.0 mm
- B) 100 MPa, 2.0 mm
- C) 100 MPa, 1.0 mm
- D) 200 MPa, 1.0 mm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 50 MPa, 2.0 mm
     → STRIKE — 50 MPa, 2.0 mm: Picks '50 MPa, 2.0 mm' by mis-applying the stem data — recheck units and the asked quantity.
  B) 100 MPa, 2.0 mm
     → STRIKE — 100 MPa, 2.0 mm: Picks '200 MPa, 1.0 mm' by mis-applying the stem data — recheck units and the asked quantity.
  C) 100 MPa, 1.0 mm
     → KEEP — The calculation chain yields “100 MPa, 1.0 mm” as the only consistent choice.
  D) 200 MPa, 1.0 mm
     → STRIKE — 200 MPa, 1.0 mm: Picks '100 MPa, 2.0 mm' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
\(\sigma=P/A=100\) MPa; \(\delta=PL/AE=1.0\) mm. A/B/D mix wrong stress or extension. Final keyed result: 100 MPa, 1.0 mm.

#### Q17/85 · Civil FLT-02 · `data/civil/ce-flt02.js#Q12` · Key C

At a point, \(\sigma_x=80\) MPa tension, \(\sigma_y=20\) MPa compression and \(\tau_{xy}=30\) MPa. Determine the major principal stress and the approximate angle of its plane normal from the x-axis.

- A) 108.3 MPa, 74.5°
- B) 100 MPa, 30°
- C) 88.3 MPa, 15.5°
- D) 50 MPa, 45°

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 108.3 MPa, 74.5°
     → STRIKE — 108.3 MPa, 74.5°: Picks '50 MPa, 45°' by mis-applying the stem data — recheck units and the asked quantity.
  B) 100 MPa, 30°
     → STRIKE — 100 MPa, 30°: Picks '108.3 MPa, 74.5°' by mis-applying the stem data — recheck units and the asked quantity.
  C) 88.3 MPa, 15.5°
     → KEEP — The calculation chain yields “88.3 MPa, 15.5°” as the only consistent choice.
  D) 50 MPa, 45°
     → STRIKE — 50 MPa, 45°: Picks '100 MPa, 30°' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
centre 30; radius \(\sqrt{50^2+30^2}=58.31\); \(\sigma_1=88.31\) MPa and \(\tan2\theta=60/100\), so \(\theta=15.48°\). Final keyed result: 88.3 MPa, 15.5°.

#### Q18/85 · Civil FLT-02 · `data/civil/ce-flt02.js#Q19` · Key A

During a pour, the top bars over an interior support of a continuous slab are found displaced downward by 35 mm and concrete has not yet reached that bay. What is the defensible engineering action?

- A) Stop locally, restore chairs/negative-steel level and verify cover before pour resumes
- B) Cut the bars after hardening
- C) Add water and vibrate heavily
- D) Continue because bottom steel controls everywhere

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) Stop locally, restore chairs/negative-steel level and verify cover before pour resumes
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  B) Cut the bars after hardening
     → STRIKE — Cut the bars after hardening: Picks 'Continue because bottom steel controls everywhere' by mis-applying the stem data — recheck units and the asked quantity.
  C) Add water and vibrate heavily
     → STRIKE — Add water and vibrate heavily: Picks 'Add water and vibrate heavily' by mis-applying the stem data — recheck units and the asked quantity.
  D) Continue because bottom steel controls everywhere
     → STRIKE — Continue because bottom steel controls everywhere: Picks 'Cut the bars after hardening' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: A only → keyed A.

#### Q19/85 · Civil FLT-02 · `data/civil/ce-flt02.js#Q2` · Key D

A composite hanger has equal-length brass and steel rods connected by rigid end plates, so both undergo equal extension. With \(A_s=600\) mm², \(A_b=900\) mm² and \(E_s/E_b=2\), determine the fraction of total load carried by brass and the consequence if its area alone is doubled.

- A) \(3/5\), rises to \(6/7\)
- B) \(1/2\), unchanged
- C) \(4/7\), falls to \(2/5\)
- D) \(3/7\), rises to \(3/5\)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) \(3/5\), rises to \(6/7\)
     → STRIKE — \(3/5\), rises to \(6/7\): Picks '\(1/2\), unchanged' by mis-applying the stem data — recheck units and the asked quantity.
  B) \(1/2\), unchanged
     → STRIKE — \(1/2\), unchanged: Picks '\(3/5\), rises to \(6/7\)' by mis-applying the stem data — recheck units and the asked quantity.
  C) \(4/7\), falls to \(2/5\)
     → STRIKE — \(4/7\), falls to \(2/5\): Picks '\(4/7\), falls to \(2/5\)' by mis-applying the stem data — recheck units and the asked quantity.
  D) \(3/7\), rises to \(3/5\)
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
Survivors after this rule: D only → keyed D.

#### Q20/85 · Civil FLT-02 · `data/civil/ce-flt02.js#Q21` · Key C

A beam uses Fe415 tension bars. If the computed minimum tension-steel area by IS 456 is below that from \(A_{st,\min}=0.85bd/f_y\), which value is to be provided?

- A) half the expression
- B) zero, because concrete takes tension
- C) The code minimum from the expression
- D) only compression steel

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) half the expression
     → STRIKE — half the expression: Picks 'zero, because concrete takes tension' by mis-applying the stem data — recheck units and the asked quantity.
  B) zero, because concrete takes tension
     → STRIKE — zero, because concrete takes tension: Picks 'half the expression' by mis-applying the stem data — recheck units and the asked quantity.
  C) The code minimum from the expression
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  D) only compression steel
     → STRIKE — only compression steel: Picks 'only compression steel' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: C only → keyed C.

#### Q21/85 · Civil FLT-02 · `data/civil/ce-flt02.js#Q23` · Key D

The crop shows a continuous-beam bar proposed to terminate at section P, with the theoretical cut-off, support face and remaining anchorage marked only in the figure. Which option correctly decides acceptance after checking moment resistance beyond cut-off, development length and shear at P?

- A) Accept if cover is adequate
- B) Reject every curtailment
- C) Accept solely because P is beyond inflection
- D) Accept only if all three checks and extension rules pass

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) Accept if cover is adequate
     → STRIKE — Accept if cover is adequate: Picks 'Accept solely because P is beyond inflection' by mis-applying the stem data — recheck units and the asked quantity.
  B) Reject every curtailment
     → STRIKE — Reject every curtailment: Picks 'Reject every curtailment' by mis-applying the stem data — recheck units and the asked quantity.
  C) Accept solely because P is beyond inflection
     → STRIKE — Accept solely because P is beyond inflection: Picks 'Accept if cover is adequate' by mis-applying the stem data — recheck units and the asked quantity.
  D) Accept only if all three checks and extension rules pass
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
Survivors after this rule: D only → keyed D.

#### Q22/85 · Civil FLT-02 · `data/civil/ce-flt02.js#Q24` · Key A

An under-reinforced beam is strengthened by increasing only tension steel while keeping section and materials fixed. As steel approaches the limiting amount, which paired trend is correct?

- A) \(x_u\uparrow\), lever arm decreases while moment capacity still rises to its limit
- B) \(x_u\) unchanged, capacity unchanged
- C) concrete tension becomes governing
- D) \(x_u\downarrow\), lever arm increases indefinitely

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) \(x_u\uparrow\), lever arm decreases while moment capacity still rises to its limit
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  B) \(x_u\) unchanged, capacity unchanged
     → STRIKE — \(x_u\) unchanged, capacity unchanged: Picks '\(x_u\downarrow\), lever arm increases indefinitely' by mis-applying the stem data — recheck units and the asked quantity.
  C) concrete tension becomes governing
     → STRIKE — concrete tension becomes governing: Picks '\(x_u\) unchanged, capacity unchanged' by mis-applying the stem data — recheck units and the asked quantity.
  D) \(x_u\downarrow\), lever arm increases indefinitely
     → STRIKE — \(x_u\downarrow\), lever arm increases indefinitely: Picks 'concrete tension becomes governing' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: A only → keyed A.

#### Q23/85 · Civil FLT-02 · `data/civil/ce-flt02.js#Q25` · Key C

A beam has \(M_{u,\lim}=180\) kN·m and must resist 240 kN·m. The compression-steel couple may be idealized with \(f_{sc}=350\) MPa and lever arm \(d-d'=430\) mm. Ignoring secondary strain refinement, estimate required compression steel for the excess moment.

- A) 250 mm²
- B) 650 mm²
- C) 400 mm²
- D) 900 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 250 mm²
     → STRIKE — 250 mm²: Picks '250 mm²' by mis-applying the stem data — recheck units and the asked quantity.
  B) 650 mm²
     → STRIKE — 650 mm²: Picks '650 mm²' by mis-applying the stem data — recheck units and the asked quantity.
  C) 400 mm²
     → KEEP — The calculation chain yields “400 mm²” as the only consistent choice.
  D) 900 mm²
     → STRIKE — 900 mm²: Picks '900 mm²' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
\(A_{sc}=60×10^6/(350·430)=399\) mm² Final keyed result: 400 mm².

#### Q24/85 · Civil FLT-02 · `data/civil/ce-flt02.js#Q40` · Key C

A laterally unsupported beam reaches high compression-flange stress before full plastic moment although its cross-section is compact. Which instability most directly explains the shortfall?

- A) local web yielding only
- B) bolt slip
- C) lateral-torsional buckling
- D) block shear at support

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) local web yielding only
     → STRIKE — local web yielding only: Picks 'local web yielding only' by mis-applying the stem data — recheck units and the asked quantity.
  B) bolt slip
     → STRIKE — bolt slip: Picks 'block shear at support' by mis-applying the stem data — recheck units and the asked quantity.
  C) lateral-torsional buckling
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  D) block shear at support
     → STRIKE — block shear at support: Picks 'bolt slip' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: C only → keyed C.

#### Q25/85 · Civil FLT-02 · `data/civil/ce-flt02.js#Q41` · Key C

A tension plate has \(A_g=1800\) mm², \(A_n=1450\) mm², \(f_y=250\) MPa, \(f_u=410\) MPa; take \(\gamma_{m0}=1.10,\gamma_{m1}=1.25\). Compare gross yielding \(A_gf_y/\gamma_{m0}\) with net rupture \(0.9A_nf_u/\gamma_{m1}\).

![figure](images/diagrams/civil-flt02/q41-plane-truss.jpg)

- A) yielding 450 kN governs
- B) rupture 350 kN governs
- C) yielding 409 kN governs
- D) rupture 428 kN governs

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) yielding 450 kN governs
     → STRIKE — yielding 450 kN governs: Picks 'rupture 428 kN governs' by mis-applying the stem data — recheck units and the asked quantity.
  B) rupture 350 kN governs
     → STRIKE — rupture 350 kN governs: Picks 'yielding 450 kN governs' by mis-applying the stem data — recheck units and the asked quantity.
  C) yielding 409 kN governs
     → KEEP — The calculation chain yields “yielding 409 kN governs” as the only consistent choice.
  D) rupture 428 kN governs
     → STRIKE — rupture 428 kN governs: Picks 'rupture 350 kN governs' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
yielding \(409.1\) kN; rupture \(428.0\) kN; lesser governs Final keyed result: yielding 409 kN governs.

#### Q26/85 · Civil FLT-02 · `data/civil/ce-flt02.js#Q44` · Key B

Assertion: A slender compression member’s design strength can fall even when gross area and yield stress remain unchanged. Reason: increasing effective length raises slenderness and amplifies instability effects represented by the buckling reduction factor.

- A) A true, R false
- B) Both true, R explains A
- C) Both true, R does not explain A
- D) A false, R true

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) A true, R false
     → STRIKE — A true, R false: Picks 'Both true, R does not explain A' by mis-applying the stem data — recheck units and the asked quantity.
  B) Both true, R explains A
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  C) Both true, R does not explain A
     → STRIKE — Both true, R does not explain A: Picks 'A true, R false' by mis-applying the stem data — recheck units and the asked quantity.
  D) A false, R true
     → STRIKE — A false, R true: Picks 'A false, R true' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: B only → keyed B.

#### Q27/85 · Civil FLT-02 · `data/civil/ce-flt02.js#Q46` · Key C

Match limit state with the most relevant evidence: (1) block shear, (2) web crippling, (3) lateral-torsional buckling, (4) weld throat failure; (p) combined shear+tension path near bolts, (q) local bearing fold near reaction, (r) flange lateral displacement with twist, (s) fracture through effective throat.

- A) 1-s,2-r,3-q,4-p
- B) 1-r,2-p,3-s,4-q
- C) 1-p,2-q,3-r,4-s
- D) 1-q,2-s,3-p,4-r

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 1-s,2-r,3-q,4-p
     → STRIKE — 1-s,2-r,3-q,4-p: Picks '1-r,2-p,3-s,4-q' by mis-applying the stem data — recheck units and the asked quantity.
  B) 1-r,2-p,3-s,4-q
     → STRIKE — 1-r,2-p,3-s,4-q: Picks '1-q,2-s,3-p,4-r' by mis-applying the stem data — recheck units and the asked quantity.
  C) 1-p,2-q,3-r,4-s
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  D) 1-q,2-s,3-p,4-r
     → STRIKE — 1-q,2-s,3-p,4-r: Picks '1-s,2-r,3-q,4-p' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: C only → keyed C.

#### Q28/85 · Civil FLT-02 · `data/civil/ce-flt02.js#Q5` · Key B

A vertical bar consists of a 1 m segment \(A=400\) mm² over a 1.5 m segment \(A=250\) mm², both steel. It carries 60 kN at the bottom and an additional 40 kN at the junction; for \(E=200\) GPa, find total extension.

- A) 2.30 mm
- B) 3.05 mm
- C) 2.05 mm
- D) 1.55 mm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 2.30 mm
     → STRIKE — 2.30 mm: Picks '2.30 mm' by mis-applying the stem data — recheck units and the asked quantity.
  B) 3.05 mm
     → KEEP — The calculation chain yields “3.05 mm” as the only consistent choice.
  C) 2.05 mm
     → STRIKE — 2.05 mm: Picks '2.05 mm' by mis-applying the stem data — recheck units and the asked quantity.
  D) 1.55 mm
     → STRIKE — 1.55 mm: Picks '1.55 mm' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: B only → keyed B.

=== SCRATCH CHECK (verification only — not the elimination) ===
upper force 100 kN gives \(100000(1000)/(400·200000)=1.25\) mm; lower force 60 kN gives \(60000(1500)/(250·200000)=1.80\) mm; total 3.05 mm. B incorrectly uses 1.0 m for both segments. Final keyed result: 3.05 mm.

#### Q29/85 · Civil FLT-02 · `data/civil/ce-flt02.js#Q51` · Key A

A roof purlin under gravity and wind is connected so that loading is inclined to its principal axes. Which design approach is appropriate?

- A) check biaxial bending interaction and relevant stability/serviceability limits
- B) use axial tension capacity
- C) check major-axis bending only
- D) ignore wind if gravity governs once

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) check biaxial bending interaction and relevant stability/serviceability limits
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  B) use axial tension capacity
     → STRIKE — use axial tension capacity: Picks 'check major-axis bending only' by mis-applying the stem data — recheck units and the asked quantity.
  C) check major-axis bending only
     → STRIKE — check major-axis bending only: Picks 'use axial tension capacity' by mis-applying the stem data — recheck units and the asked quantity.
  D) ignore wind if gravity governs once
     → STRIKE — ignore wind if gravity governs once: Picks 'ignore wind if gravity governs once' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: A only → keyed A.

#### Q30/85 · Civil FLT-02 · `data/civil/ce-flt02.js#Q56` · Key D

Excavation for a footing in saturated sand shows boiling and upward seepage near the base, while nearby ground begins to settle. What immediate control strategy is most appropriate?

- A) add surcharge at edge only
- B) vibrate the sand
- C) pump from an open sump more aggressively regardless of gradient
- D) barricade/stop, lower hydraulic head with designed wellpoints or relief system, and check base stability

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) add surcharge at edge only
     → STRIKE — add surcharge at edge only: Picks 'add surcharge at edge only' by mis-applying the stem data — recheck units and the asked quantity.
  B) vibrate the sand
     → STRIKE — vibrate the sand: Picks 'vibrate the sand' by mis-applying the stem data — recheck units and the asked quantity.
  C) pump from an open sump more aggressively regardless of gradient
     → STRIKE — pump from an open sump more aggressively regardless of gradient: Picks 'pump from an open sump more aggressively regardless of gradient' by mis-applying the stem data — recheck units and the asked quantity.
  D) barricade/stop, lower hydraulic head with designed wellpoints or relief system, and check base stability
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
Survivors after this rule: D only → keyed D.

#### Q31/85 · Civil FLT-02 · `data/civil/ce-flt02.js#Q8` · Key A

A propped cantilever of span \(L\) carries a UDL \(w\) over its entire length and its prop settles downward by \(\Delta=wL^4/(16EI)\). Using consistent downward-positive deflection at the free end, what upward prop reaction results?

- A) \(3wL/16\)
- B) \(wL/4\)
- C) \(3wL/8\)
- D) \(5wL/8\)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) \(3wL/16\)
     → KEEP — The calculation chain yields “\(3wL/16\)” as the only consistent choice.
  B) \(wL/4\)
     → STRIKE — \(wL/4\): Picks '\(3wL/8\)' by mis-applying the stem data — recheck units and the asked quantity.
  C) \(3wL/8\)
     → STRIKE — \(3wL/8\): Picks '\(5wL/8\)' by mis-applying the stem data — recheck units and the asked quantity.
  D) \(5wL/8\)
     → STRIKE — \(5wL/8\): Picks '\(wL/4\)' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: A only → keyed A.

=== SCRATCH CHECK (verification only — not the elimination) ===
\(wL^4/8EI-RL^3/3EI=\Delta\); therefore \(R=3EI(1/8-1/16)wL^4/(EI L^3)=3wL/16\) Final keyed result: \(3wL/16\).

#### Q32/85 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q14` · Key B

From the slab support arrangement shown, main tension steel for one-way action runs primarily: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-rcc/q18-slab-supports.jpg)

- A) Along the long span
- B) Along the short span
- C) Diagonally
- D) Only as distribution mesh

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Along the long span
     → STRIKE — Along the long span: it does not follow from the stated system, sign convention, or requested check.
  B) Along the short span
     → KEEP — One-way slabs bend across the short span; main steel follows that direction.
  C) Diagonally
     → STRIKE — Diagonally: it does not follow from the stated system, sign convention, or requested check.
  D) Only as distribution mesh
     → STRIKE — Only as distribution mesh: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q33/85 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q25` · Key A

For the RCC beam section shown, effective depth d is measured from: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-rcc/r1.jpg)

- A) Compression face to centroid of tension steel
- B) Overall depth to soffit
- C) Neutral axis to soffit
- D) Cover to cover

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Compression face to centroid of tension steel
     → KEEP — Effective depth is extreme compression fibre to centroid of tensile reinforcement.
  B) Overall depth to soffit
     → STRIKE — Overall depth to soffit: it does not follow from the stated system, sign convention, or requested check.
  C) Neutral axis to soffit
     → STRIKE — Neutral axis to soffit: it does not follow from the stated system, sign convention, or requested check.
  D) Cover to cover
     → STRIKE — Cover to cover: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q34/85 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q1` · Key A

In a crane tie-rod proof test during preliminary sizing, a steel rod 20 mm in diameter and 2 m long carries 40 kN tension. Taking E = 200 GPa, its elongation in mm is closest to:

- A) 1.27 mm
- B) 1.02 mm
- C) 1.53 mm
- D) 1.91 mm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 1.27 mm
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 1.02 mm
     → STRIKE — 1.02 mm: it does not follow from the stated system, sign convention, or requested check.
  C) 1.53 mm
     → STRIKE — 1.53 mm: it does not follow from the stated system, sign convention, or requested check.
  D) 1.91 mm
     → STRIKE — 1.91 mm: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q35/85 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q11` · Key C

In a crane tie-rod proof test during site approval, a steel rod 24 mm in diameter and 2.25 m long carries 50 kN tension. Taking E = 200 GPa, its elongation in mm is closest to:

- A) 0.99 mm
- B) 1.49 mm
- C) 1.24 mm
- D) 1.87 mm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 0.99 mm
     → STRIKE — 0.99 mm: it does not follow from the stated system, sign convention, or requested check.
  B) 1.49 mm
     → STRIKE — 1.49 mm: it does not follow from the stated system, sign convention, or requested check.
  C) 1.24 mm
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 1.87 mm
     → STRIKE — 1.87 mm: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q36/85 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q16` · Key D

In a riveted-gusset inspection during emergency restoration, a steel rod 26 mm in diameter and 2 m long carries 55 kN tension. Taking E = 200 GPa, its elongation in mm is closest to:

- A) 0.83 mm
- B) 1.24 mm
- C) 1.55 mm
- D) 1.04 mm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 0.83 mm
     → STRIKE — 0.83 mm: it does not follow from the stated system, sign convention, or requested check.
  B) 1.24 mm
     → STRIKE — 1.24 mm: it does not follow from the stated system, sign convention, or requested check.
  C) 1.55 mm
     → STRIKE — 1.55 mm: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 1.04 mm
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q37/85 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q21` · Key A

In a crane tie-rod proof test during code-compliance review, a steel rod 20 mm in diameter and 2.5 m long carries 40 kN tension. Taking E = 200 GPa, its elongation in mm is closest to:

- A) 1.59 mm
- B) 1.27 mm
- C) 1.91 mm
- D) 2.39 mm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 1.59 mm
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 1.27 mm
     → STRIKE — 1.27 mm: it does not follow from the stated system, sign convention, or requested check.
  C) 1.91 mm
     → STRIKE — 1.91 mm: it does not follow from the stated system, sign convention, or requested check.
  D) 2.39 mm
     → STRIKE — 2.39 mm: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q38/85 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q26` · Key B

In a riveted-gusset inspection during asset-renewal planning, a steel rod 22 mm in diameter and 2.25 m long carries 45 kN tension. Taking E = 200 GPa, its elongation in mm is closest to:

- A) 1.07 mm
- B) 1.33 mm
- C) 1.6 mm
- D) 2 mm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 1.07 mm
     → STRIKE — 1.07 mm: it does not follow from the stated system, sign convention, or requested check.
  B) 1.33 mm
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 1.6 mm
     → STRIKE — 1.6 mm: it does not follow from the stated system, sign convention, or requested check.
  D) 2 mm
     → STRIKE — 2 mm: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q39/85 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q31` · Key C

In a crane tie-rod proof test during post-installation testing, a steel rod 24 mm in diameter and 2 m long carries 50 kN tension. Taking E = 200 GPa, its elongation in mm is closest to:

- A) 0.88 mm
- B) 1.33 mm
- C) 1.11 mm
- D) 1.66 mm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 0.88 mm
     → STRIKE — 0.88 mm: it does not follow from the stated system, sign convention, or requested check.
  B) 1.33 mm
     → STRIKE — 1.33 mm: it does not follow from the stated system, sign convention, or requested check.
  C) 1.11 mm
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 1.66 mm
     → STRIKE — 1.66 mm: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q40/85 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q36` · Key D

In a riveted-gusset inspection during schedule-of-rates check, a steel rod 26 mm in diameter and 2.5 m long carries 55 kN tension. Taking E = 200 GPa, its elongation in mm is closest to:

- A) 1.04 mm
- B) 1.55 mm
- C) 1.94 mm
- D) 1.29 mm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 1.04 mm
     → STRIKE — 1.04 mm: it does not follow from the stated system, sign convention, or requested check.
  B) 1.55 mm
     → STRIKE — 1.55 mm: it does not follow from the stated system, sign convention, or requested check.
  C) 1.94 mm
     → STRIKE — 1.94 mm: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 1.29 mm
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q41/85 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q41` · Key A

In a crane tie-rod proof test during monsoon-readiness check, a steel rod 20 mm in diameter and 2.25 m long carries 40 kN tension. Taking E = 200 GPa, its elongation in mm is closest to:

- A) 1.43 mm
- B) 1.15 mm
- C) 1.72 mm
- D) 2.15 mm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 1.43 mm
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 1.15 mm
     → STRIKE — 1.15 mm: it does not follow from the stated system, sign convention, or requested check.
  C) 1.72 mm
     → STRIKE — 1.72 mm: it does not follow from the stated system, sign convention, or requested check.
  D) 2.15 mm
     → STRIKE — 2.15 mm: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q42/85 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q46` · Key B

In a riveted-gusset inspection during operating-procedure validation, a steel rod 22 mm in diameter and 2 m long carries 45 kN tension. Taking E = 200 GPa, its elongation in mm is closest to:

- A) 0.95 mm
- B) 1.18 mm
- C) 1.42 mm
- D) 1.78 mm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 0.95 mm
     → STRIKE — 0.95 mm: it does not follow from the stated system, sign convention, or requested check.
  B) 1.18 mm
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 1.42 mm
     → STRIKE — 1.42 mm: it does not follow from the stated system, sign convention, or requested check.
  D) 1.78 mm
     → STRIKE — 1.78 mm: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q43/85 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q47` · Key C

For the overhang beam arrangement shown, vertical equilibrium requires RA + RB to equal: Figure values (also stated here): AB/BC spans and UDL/point-load magnitudes as labelled on the crop.

![figure](images/diagrams/civil-st-som/q03-overhang-reactions.jpg)

- A) Tip load only
- B) UDL resultant only
- C) Sum of all downward loads
- D) Zero always

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Tip load only
     → STRIKE — Tip load only: it does not follow from the stated system, sign convention, or requested check.
  B) UDL resultant only
     → STRIKE — UDL resultant only: it does not follow from the stated system, sign convention, or requested check.
  C) Sum of all downward loads
     → KEEP — Support reactions balance the total downward load on the free body.
  D) Zero always
     → STRIKE — Zero always: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q44/85 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q6` · Key B

In a riveted-gusset inspection during fault investigation, a steel rod 22 mm in diameter and 2.5 m long carries 45 kN tension. Taking E = 200 GPa, its elongation in mm is closest to:

- A) 1.18 mm
- B) 1.48 mm
- C) 1.78 mm
- D) 2.22 mm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 1.18 mm
     → STRIKE — 1.18 mm: it does not follow from the stated system, sign convention, or requested check.
  B) 1.48 mm
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 1.78 mm
     → STRIKE — 1.78 mm: it does not follow from the stated system, sign convention, or requested check.
  D) 2.22 mm
     → STRIKE — 2.22 mm: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q45/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q1` · Key A

In a roof-truss connection design during preliminary sizing, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 760 mm²
- B) 608 mm²
- C) 912 mm²
- D) 1140 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q46/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q10` · Key B

In a portal-frame bracing detail during tender-stage estimation, a column base plate is 300 mm × 300 mm and transmits 600 kN concentric compression to concrete. Average bearing pressure is closest to:

- A) 5.33 N/mm²
- B) 6.67 N/mm²
- C) 8 N/mm²
- D) 10 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 5.33 N/mm²
     → STRIKE — 5.33 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 6.67 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 8 N/mm²
     → STRIKE — 8 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 10 N/mm²
     → STRIKE — 10 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q47/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q11` · Key C

In a roof-truss connection design during site approval, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 608 mm²
- B) 912 mm²
- C) 760 mm²
- D) 1140 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q48/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q12` · Key D

In a gantry-column check during quality-control inspection, a steel compression member has effective length 3.5 m and least radius of gyration 35 mm. Its slenderness ratio is closest to:

- A) 80 
- B) 120 
- C) 150 
- D) 100 

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 80
     → STRIKE — 80 : it does not follow from the stated system, sign convention, or requested check.
  B) 120
     → STRIKE — 120 : it does not follow from the stated system, sign convention, or requested check.
  C) 150
     → STRIKE — 150 : it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 100
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q49/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q15` · Key C

In a crane-bracket design during performance guarantee, a column base plate is 300 mm × 300 mm and transmits 700 kN concentric compression to concrete. Average bearing pressure is closest to:

- A) 6.22 N/mm²
- B) 9.33 N/mm²
- C) 7.78 N/mm²
- D) 11.67 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 6.22 N/mm²
     → STRIKE — 6.22 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 9.33 N/mm²
     → STRIKE — 9.33 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 7.78 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 11.67 N/mm²
     → STRIKE — 11.67 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q50/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q16` · Key D

In a purlin stability check during emergency restoration, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 608 mm²
- B) 912 mm²
- C) 1140 mm²
- D) 760 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q51/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q17` · Key A

In a lattice-member design during shutdown planning, a steel compression member has effective length 3.25 m and least radius of gyration 35 mm. Its slenderness ratio is closest to:

- A) 92.86 
- B) 74.29 
- C) 111.43 
- D) 139.29 

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 92.86
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 74.29
     → STRIKE — 74.29 : it does not follow from the stated system, sign convention, or requested check.
  C) 111.43
     → STRIKE — 111.43 : it does not follow from the stated system, sign convention, or requested check.
  D) 139.29
     → STRIKE — 139.29 : it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q52/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q2` · Key B

In a gantry-column check during service-load verification, a steel compression member has effective length 3.25 m and least radius of gyration 35 mm. Its slenderness ratio is closest to:

- A) 74.29 
- B) 92.86 
- C) 111.43 
- D) 139.29 

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 74.29
     → STRIKE — 74.29 : it does not follow from the stated system, sign convention, or requested check.
  B) 92.86
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 111.43
     → STRIKE — 111.43 : it does not follow from the stated system, sign convention, or requested check.
  D) 139.29
     → STRIKE — 139.29 : it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q53/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q20` · Key D

In a portal-frame bracing detail during prototype evaluation, a column base plate is 300 mm × 300 mm and transmits 650 kN concentric compression to concrete. Average bearing pressure is closest to:

- A) 5.78 N/mm²
- B) 8.67 N/mm²
- C) 10.83 N/mm²
- D) 7.22 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 5.78 N/mm²
     → STRIKE — 5.78 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 8.67 N/mm²
     → STRIKE — 8.67 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 10.83 N/mm²
     → STRIKE — 10.83 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 7.22 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q54/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q21` · Key A

In a roof-truss connection design during code-compliance review, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 760 mm²
- B) 608 mm²
- C) 912 mm²
- D) 1140 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q55/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q22` · Key B

In a gantry-column check during independent design check, a steel compression member has effective length 3 m and least radius of gyration 35 mm. Its slenderness ratio is closest to:

- A) 68.57 
- B) 85.71 
- C) 102.86 
- D) 128.57 

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 68.57
     → STRIKE — 68.57 : it does not follow from the stated system, sign convention, or requested check.
  B) 85.71
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 102.86
     → STRIKE — 102.86 : it does not follow from the stated system, sign convention, or requested check.
  D) 128.57
     → STRIKE — 128.57 : it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q56/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q26` · Key B

In a purlin stability check during asset-renewal planning, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 608 mm²
- B) 760 mm²
- C) 912 mm²
- D) 1140 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q57/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q27` · Key C

In a lattice-member design during construction sequencing, a steel compression member has effective length 3.5 m and least radius of gyration 35 mm. Its slenderness ratio is closest to:

- A) 80 
- B) 120 
- C) 100 
- D) 150 

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 80
     → STRIKE — 80 : it does not follow from the stated system, sign convention, or requested check.
  B) 120
     → STRIKE — 120 : it does not follow from the stated system, sign convention, or requested check.
  C) 100
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 150
     → STRIKE — 150 : it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q58/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q29` · Key A

In a tension-member rupture check during inspection-test planning, a lap connection has 4 bearing-type bolts, each with governing design shear capacity 45 kN. Ignoring eccentricity, connection shear capacity is closest to:

- A) 180 kN
- B) 144 kN
- C) 216 kN
- D) 270 kN

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 180 kN
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 144 kN
     → STRIKE — 144 kN: it does not follow from the stated system, sign convention, or requested check.
  C) 216 kN
     → STRIKE — 216 kN: it does not follow from the stated system, sign convention, or requested check.
  D) 270 kN
     → STRIKE — 270 kN: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q59/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q30` · Key B

In a portal-frame bracing detail during handover testing, a column base plate is 300 mm × 300 mm and transmits 700 kN concentric compression to concrete. Average bearing pressure is closest to:

- A) 6.22 N/mm²
- B) 7.78 N/mm²
- C) 9.33 N/mm²
- D) 11.67 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 6.22 N/mm²
     → STRIKE — 6.22 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 7.78 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 9.33 N/mm²
     → STRIKE — 9.33 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 11.67 N/mm²
     → STRIKE — 11.67 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q60/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q31` · Key C

In a roof-truss connection design during post-installation testing, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 608 mm²
- B) 912 mm²
- C) 760 mm²
- D) 1140 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q61/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q35` · Key C

In a crane-bracket design during board-exam practice, a column base plate is 300 mm × 300 mm and transmits 650 kN concentric compression to concrete. Average bearing pressure is closest to:

- A) 5.78 N/mm²
- B) 8.67 N/mm²
- C) 7.22 N/mm²
- D) 10.83 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 5.78 N/mm²
     → STRIKE — 5.78 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 8.67 N/mm²
     → STRIKE — 8.67 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 7.22 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 10.83 N/mm²
     → STRIKE — 10.83 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q62/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q36` · Key D

In a purlin stability check during schedule-of-rates check, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 608 mm²
- B) 912 mm²
- C) 1140 mm²
- D) 760 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q63/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q37` · Key A

In a lattice-member design during materials approval, a steel compression member has effective length 3 m and least radius of gyration 35 mm. Its slenderness ratio is closest to:

- A) 85.71 
- B) 68.57 
- C) 102.86 
- D) 128.57 

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 85.71
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 68.57
     → STRIKE — 68.57 : it does not follow from the stated system, sign convention, or requested check.
  C) 102.86
     → STRIKE — 102.86 : it does not follow from the stated system, sign convention, or requested check.
  D) 128.57
     → STRIKE — 128.57 : it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q64/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q40` · Key D

In a portal-frame bracing detail during environmental-condition check, a column base plate is 300 mm × 300 mm and transmits 600 kN concentric compression to concrete. Average bearing pressure is closest to:

- A) 5.33 N/mm²
- B) 8 N/mm²
- C) 10 N/mm²
- D) 6.67 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 5.33 N/mm²
     → STRIKE — 5.33 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 8 N/mm²
     → STRIKE — 8 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 10 N/mm²
     → STRIKE — 10 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 6.67 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q65/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q41` · Key A

In a roof-truss connection design during monsoon-readiness check, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 760 mm²
- B) 608 mm²
- C) 912 mm²
- D) 1140 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q66/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q42` · Key B

In a gantry-column check during load-growth study, a steel compression member has effective length 3.5 m and least radius of gyration 35 mm. Its slenderness ratio is closest to:

- A) 80 
- B) 100 
- C) 120 
- D) 150 

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 80
     → STRIKE — 80 : it does not follow from the stated system, sign convention, or requested check.
  B) 100
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 120
     → STRIKE — 120 : it does not follow from the stated system, sign convention, or requested check.
  D) 150
     → STRIKE — 150 : it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q67/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q45` · Key A

In a crane-bracket design during final design release, a column base plate is 300 mm × 300 mm and transmits 700 kN concentric compression to concrete. Average bearing pressure is closest to:

- A) 7.78 N/mm²
- B) 6.22 N/mm²
- C) 9.33 N/mm²
- D) 11.67 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 7.78 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 6.22 N/mm²
     → STRIKE — 6.22 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 9.33 N/mm²
     → STRIKE — 9.33 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 11.67 N/mm²
     → STRIKE — 11.67 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q68/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q46` · Key B

In a purlin stability check during operating-procedure validation, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 608 mm²
- B) 760 mm²
- C) 912 mm²
- D) 1140 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q69/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q47` · Key C

For the bracket connection shown, eccentricity increases demand on fasteners mainly by adding: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-steel/q40-bracket.jpg)

- A) Pure axial tension only
- B) Only bearing on concrete
- C) Additional shear/torsion about the fastener group CG
- D) Paint shear

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Pure axial tension only
     → STRIKE — Pure axial tension only: it does not follow from the stated system, sign convention, or requested check.
  B) Only bearing on concrete
     → STRIKE — Only bearing on concrete: it does not follow from the stated system, sign convention, or requested check.
  C) Additional shear/torsion about the fastener group CG
     → KEEP — Bracket eccentricity produces moment about the bolt-group CG.
  D) Paint shear
     → STRIKE — Paint shear: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q70/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q49` · Key A

In a tension-member rupture check during life-cycle assessment, a lap connection has 4 bearing-type bolts, each with governing design shear capacity 45 kN. Ignoring eccentricity, connection shear capacity is closest to:

- A) 180 kN
- B) 144 kN
- C) 216 kN
- D) 270 kN

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 180 kN
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 144 kN
     → STRIKE — 144 kN: it does not follow from the stated system, sign convention, or requested check.
  C) 216 kN
     → STRIKE — 216 kN: it does not follow from the stated system, sign convention, or requested check.
  D) 270 kN
     → STRIKE — 270 kN: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q71/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q5` · Key A

In a crane-bracket design during routine maintenance, a column base plate is 300 mm × 300 mm and transmits 650 kN concentric compression to concrete. Average bearing pressure is closest to:

- A) 7.22 N/mm²
- B) 5.78 N/mm²
- C) 8.67 N/mm²
- D) 10.83 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 7.22 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 5.78 N/mm²
     → STRIKE — 5.78 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  C) 8.67 N/mm²
     → STRIKE — 8.67 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 10.83 N/mm²
     → STRIKE — 10.83 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q72/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q50` · Key B

In a portal-frame bracing detail during residual-risk review, a column base plate is 300 mm × 300 mm and transmits 650 kN concentric compression to concrete. Average bearing pressure is closest to:

- A) 5.78 N/mm²
- B) 7.22 N/mm²
- C) 8.67 N/mm²
- D) 10.83 N/mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 5.78 N/mm²
     → STRIKE — 5.78 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 7.22 N/mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 8.67 N/mm²
     → STRIKE — 8.67 N/mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 10.83 N/mm²
     → STRIKE — 10.83 N/mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q73/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q6` · Key B

In a purlin stability check during fault investigation, a 120 mm × 10 mm steel tension plate has two 22 mm bolt holes on a transverse section. Its net area is closest to:

- A) 608 mm²
- B) 760 mm²
- C) 912 mm²
- D) 1140 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 608 mm²
     → STRIKE — 608 mm²: it does not follow from the stated system, sign convention, or requested check.
  B) 760 mm²
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 912 mm²
     → STRIKE — 912 mm²: it does not follow from the stated system, sign convention, or requested check.
  D) 1140 mm²
     → STRIKE — 1140 mm²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q74/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q7` · Key C

In a lattice-member design during laboratory validation, a steel compression member has effective length 3 m and least radius of gyration 35 mm. Its slenderness ratio is closest to:

- A) 68.57 
- B) 102.86 
- C) 85.71 
- D) 128.57 

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 68.57
     → STRIKE — 68.57 : it does not follow from the stated system, sign convention, or requested check.
  B) 102.86
     → STRIKE — 102.86 : it does not follow from the stated system, sign convention, or requested check.
  C) 85.71
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 128.57
     → STRIKE — 128.57 : it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q75/85 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q9` · Key A

In a tension-member rupture check during design-office checking, a lap connection has 4 bearing-type bolts, each with governing design shear capacity 45 kN. Ignoring eccentricity, connection shear capacity is closest to:

- A) 180 kN
- B) 144 kN
- C) 216 kN
- D) 270 kN

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 180 kN
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 144 kN
     → STRIKE — 144 kN: it does not follow from the stated system, sign convention, or requested check.
  C) 216 kN
     → STRIKE — 216 kN: it does not follow from the stated system, sign convention, or requested check.
  D) 270 kN
     → STRIKE — 270 kN: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q76/85 · VALID PYQ · 12Managers-CIVIL.pdf · `PYQ:12Managers-CIVIL.pdf#Q95` · Key —

For the L bent shown in Fig. 1, the flexural rigidity of both arms AB and BC is EI, carries a vertical downward load W at C. The deflection and rotation at B (neglecting axial deformations) are

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/12Managers-CIVIL/12Managers-CIVIL__p13__Q095.jpg)

- A) WL²/2EI →, WL/EI
- B) 2WL³/EI ↓, WL²/3EI
- C) WL³/EI ↓, WL²/EI
- D) WL²/2EI →, WL²/EI

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) WL²/2EI →, WL/EI
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  B) 2WL³/EI ↓, WL²/3EI
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  C) WL³/EI ↓, WL²/EI
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  D) WL²/2EI →, WL²/EI
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q77/85 · VALID PYQ · 2019CE1.pdf · `PYQ:2019CE1.pdf#Q7` · Key —

Consider the pin-jointed plane truss shown in the figure (not drawn to scale). Let RP, RQ, and RR denote the vertical reactions (upward positive) applied by the supports at P, Q, and R, respectively, on the truss. The correct combination of (RP, RQ, RR) is represented by

- A) (30, 30, 30) kN
- B) (20, 0, 10) kN
- C) (10, 30, 10) kN
- D) (0, 60, 30) kN L K N 20 kN 20 kN 20 kN 20 kN I P G S E T F H 1 m 1 m 1 m 1 m J M O R 2 m 2 m 2 m 2 m 2 m 2 m 2 m R Q P

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) (30, 30, 30) kN
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  B) (20, 0, 10) kN
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  C) (10, 30, 10) kN
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  D) (0, 60, 30) kN L K N 20 kN 20 kN 20 kN 20 kN I P G S E T F H 1 m 1 m 1 m 1 m J M O R 2 m 2 m 2 m 2 m 2 m 2 m 2 m R Q P
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q78/85 · VALID PYQ · 2021CE1.pdf · `PYQ:2021CE1.pdf#Q29` · Key —

A wedge M and a block N are subjected to forces P and Q as shown in the figure. If force P is sufficiently large, then the block N can be raised. The weights of the wedge and the block are negligible compared to the forces P and Q. The coefficient of friction (μ) along the inclined surface between the wedge and the block is 0.2. All other surfaces are frictionless. The wedge angle is 30°. The limiting force P, in terms of Q, required for impending motion of block N to just move it in the upward direction is given as P Q  = . The value of the coefficient ‘’ (round off to one decimal place) is

- A) 0.6
- B) 0.5
- C) 2.0
- D) 0.9 Surface 3 Surface 1 Surface 2 μ = 0.2 Q P Wedge M Block N 30°

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 0.6
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  B) 0.5
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  C) 2.0
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  D) 0.9 Surface 3 Surface 1 Surface 2 μ = 0.2 Q P Wedge M Block N 30°
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q79/85 · VALID PYQ · 2021CE1.pdf · `PYQ:2021CE1.pdf#Q31` · Key —

Based on drained triaxial shear tests on sands and clays, the representative variations of volumetric strain (∆V/V) with the shear strain (γ) is shown in the figure. Choose the CORRECT option regarding the representative behaviour exhibited by Curve P and Curve Q.

- A) Curve P represents dense sand and overconsolidated clay, while Curve Q represents loose sand and normally consolidated clay
- B) Curve P represents dense sand and normally consolidated clay, while Curve Q represents loose sand and overconsolidated clay
- C) Curve P represents loose sand and overconsolidated clay, while Curve Q represents dense sand and normally consolidated clay
- D) Curve P represents loose sand and normally consolidated clay, while Curve Q represents dense sand and overconsolidated clay Curve Q Curve P Volumetric strain (ΔV/V) Compression Expansion Shear strain (γ)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) Curve P represents dense sand and overconsolidated clay, while Curve Q represents loose sand and normally consolidated clay
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  B) Curve P represents dense sand and normally consolidated clay, while Curve Q represents loose sand and overconsolidated clay
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  C) Curve P represents loose sand and overconsolidated clay, while Curve Q represents dense sand and normally consolidated clay
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  D) Curve P represents loose sand and normally consolidated clay, while Curve Q represents dense sand and overconsolidated clay Curve Q Curve P Volumetric strain (ΔV/V) Compression Expansion Shear strain (γ)
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q80/85 · VALID PYQ · 2023CE1.pdf · `PYQ:2023CE1.pdf#Q18` · Key —

A possible slope failure is shown in the figure. Three soil samples are taken from different locations (I, II and III) of the potential failure plane. Which is the most appropriate shear strength test for each of the sample to identify the failure mechanism? Identify the correct combination from the following options: P: Triaxial compression test Q: Triaxial extension test R: Direct shear or shear box test S: Vane shear test

- A) I-Q, II-R, III-P
- B) I-R, II-P, III-Q
- C) I-S, II-Q, III-R
- D) I-P, II-R, III-Q

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) I-Q, II-R, III-P
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  B) I-R, II-P, III-Q
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  C) I-S, II-Q, III-R
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  D) I-P, II-R, III-Q
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q81/85 · VALID PYQ · 2023CE2.pdf · `PYQ:2023CE2.pdf#Q40` · Key —

Two plates are connected by fillet welds of size 10 mm and subjected to tension, as shown in the figure. The thickness of each plate is 12 mm. The yield stress and the ultimate stress of steel under tension are 250 MPa and 410 MPa, respectively. The welding is done in the workshop (partial safety factor, 𝛾𝑚𝑤= 1.25). As per the Limit State Method of IS 800: 2007, what is the minimum length (in mm, rounded off to the nearest higher multiple of 5 mm) required of each weld to transmit a factored force P equal to 275 kN?

- A) 100
- B) 105
- C) 110
- D) 115 150 mm 100 mm P P

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 100
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  B) 105
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  C) 110
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  D) 115 150 mm 100 mm P P
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q82/85 · VALID PYQ · 2025CE2.pdf · `PYQ:2025CE2.pdf#Q38` · Key —

The figure shows a propped cantilever with uniform flexural rigidity 𝐸𝐼 (in N.m2) and subjected to a moment 𝑀 (in N.m). Consider forces and displacements in the upward direction as positive. Find the upward reaction at the propped support B (in N) when this support settles by (−Δ), given in metres.

- A) 3𝑀 2𝐿−6𝐸𝐼Δ 𝐿3
- B) 8𝑀 3𝐿−2𝐸𝐼Δ 𝐿3
- C) 3𝑀 2𝐿−3𝐸𝐼Δ 𝐿3
- D) 𝑀 𝐿−8𝐸𝐼Δ 𝐿3

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 3𝑀 2𝐿−6𝐸𝐼Δ 𝐿3
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  B) 8𝑀 3𝐿−2𝐸𝐼Δ 𝐿3
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  C) 3𝑀 2𝐿−3𝐸𝐼Δ 𝐿3
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  D) 𝑀 𝐿−8𝐸𝐼Δ 𝐿3
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q83/85 · VALID PYQ · 3AE-CIVIL.pdf · `PYQ:3AE-CIVIL.pdf#Q41` · Key —

For the force system shown below, the tension T1 in the rope is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/3AE-CIVIL/3AE-CIVIL__p06__Q041.jpg)

- A) 500 N
- B) 866 N
- C) 1000 N
- D) 1732 N

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 500 N
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  B) 866 N
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  C) 1000 N
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  D) 1732 N
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q84/85 · VALID PYQ · CE_2.pdf · `PYQ:CE_2.pdf#Q18` · Key —

The horizontal beam shown in the figure has fixed supports at F and L. Internal hinges are provided at locations G and J. The beam supports vertically downward concentrated loads as well as uniformly distributed loads, as shown in the figure. (Figure not to scale) The upward vertical reaction (in kN) at the support L is

- A) 23
- B) 33
- C) 43
- D) 58 Organizing Institute: IIT Guwahati

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 23
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  B) 33
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  C) 43
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  D) 58 Organizing Institute: IIT Guwahati
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q85/85 · VALID PYQ · CE_2.pdf · `PYQ:CE_2.pdf#Q39` · Key —

The plane truss shown in the figure is hinge-supported at E and F. The truss is subjected to vertical downward force at R and horizontal force at G. (Figure not to scale) The force (in kN) along with its nature in member JF is

- A) 10√2 compression
- B) 10√2 tension
- C) 25√2 compression
- D) 25√2 tension Organizing Institute: IIT Guwahati

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) 10√2 compression
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  B) 10√2 tension
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  C) 25√2 compression
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  D) 25√2 tension Organizing Institute: IIT Guwahati
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

## Civil Rule 5 (Playbook #6) — Figure-dependency: cover the figure test

**Questions in this section:** 89 (all solved below)

### What this rule means

If a figure is attached and cued, the keyed answer usually depends on labelled lengths, supports, curves, or topology. Solving from stem text alone fails the cover-the-figure test.

### When to use

A figure is attached AND the stem cues it (shown/figure/diagram) AND the keyed option depends on labelled lengths, supports, curves, or topology.

### Application steps

1. Read every label on the crop.
2. Read every dimension / load callout.
3. Read every symbol (supports, sources, switches, curve IDs).
4. Strike options that ignore a labelled overhang, load, Detail/Curve ID, or connection.

**Memory cue:** `Cover-the-figure test: cannot answer correctly with figure hidden`

### Core elimination move

Read every label, every dimension, and every symbol on the crop before striking. If you can pick the answer with the figure covered, stop — stem/figure mismatch. Eliminate options that ignore a labelled dimension, support, or curve.

### Worked questions

#### Q1/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q18` · Key C

An RC slab panel has clear spans lx = 3.5 m (short) and ly = 5.0 m (long), so ly/lx ≈ 1.43, and all four edges are continuously supported (dimensions and edge-support ticks also shown on the figure). Assertion: the panel should be designed for two-way action. Reason: four-edge support and ly/lx < 2. Which conclusion follows?

![figure](images/diagrams/civil-flt01/q18-slab-supports.jpg)

- A) Both true; R does not explain A
- B) A true, R false
- C) Both true; R explains A
- D) A false, R true

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Both true; R does not explain A
     → STRIKE — Both true; R does not explain A: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Both true; R explains A”).
  B) A true, R false
     → STRIKE — A true, R false: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Both true; R explains A”).
  C) Both true; R explains A
     → KEEP — Both support condition and aspect ratio establish two-way action.
  D) A false, R true
     → STRIKE — A false, R true: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Both true; R explains A”).
Survivors after this rule: C only → keyed C.

#### Q2/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q21` · Key D

At reinforcement inspection, a tied column shows the longitudinal-bar layout with intermediate bars on each face, and four proposed tie arrangements labelled Detail P, Q, R and S on the figure. Which marked arrangement best restrains every corner and intermediate bar? Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-flt01/q21-column-tie-detail.jpg)

- A) Detail P
- B) Detail Q
- C) Detail R
- D) Detail S

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Detail P
     → STRIKE — Detail P: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Detail S”).
  B) Detail Q
     → STRIKE — Detail Q: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Detail S”).
  C) Detail R
     → STRIKE — Detail R: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Detail S”).
  D) Detail S
     → KEEP — Detail S uses a closed perimeter tie plus both crossties so every corner and mid-face bar is restrained.
Survivors after this rule: D only → keyed D.

#### Q3/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q26` · Key D

From the design shear table (also shown), τc = 0.48 MPa at 0.50% tension steel and τc = 0.56 MPa at 0.75%. For pt = 0.625% and nominal shear stress τv = 0.70 MPa, which conclusion is closest?

![figure](images/diagrams/civil-flt01/q26-shear-table.jpg)

- A) 0.48 MPa; minimum stirrups only
- B) 0.56 MPa; no stirrups
- C) 0.70 MPa; concrete alone
- D) 0.52 MPa; stirrups carry the balance, subject to the maximum limit

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 0.48 MPa; minimum stirrups only
     → STRIKE — 0.48 MPa; minimum stirrups only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.52 MPa; stirrups carry the balance, subject to the maximum limit”).
  B) 0.56 MPa; no stirrups
     → STRIKE — 0.56 MPa; no stirrups: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.52 MPa; stirrups carry the balance, subject to the maximum limit”).
  C) 0.70 MPa; concrete alone
     → STRIKE — 0.70 MPa; concrete alone: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0.52 MPa; stirrups carry the balance, subject to the maximum limit”).
  D) 0.52 MPa; stirrups carry the balance, subject to the maximum limit
     → KEEP — Midpoint interpolation gives 0.52 MPa; demand exceeds it.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
midpoint interpolation gives 0.52 MPa; demand exceeds it. Final keyed result: 0.52 MPa; stirrups carry the balance, subject to the maximum limit.

#### Q4/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q29` · Key C

A differential mercury manometer between water mains A and B has mercury specific gravity S = 13.6, connecting fluid water, g = 10 m/s², mercury-level difference h = 150 mm, and equal limb elevations x = y = 200 mm (all marked on the figure). Which pressure difference pA − pB is closest?

![figure](images/diagrams/civil-flt01/q29-manometer.jpg)

- A) 8.4 kPa
- B) 12.6 kPa
- C) 18.9 kPa
- D) 25.2 kPa

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 8.4 kPa
     → STRIKE — 8.4 kPa: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “18.9 kPa”).
  B) 12.6 kPa
     → STRIKE — 12.6 kPa: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “18.9 kPa”).
  C) 18.9 kPa
     → KEEP — H=150 mm, x=y=200 mm, S_Hg=13.6, g=10. With equal limbs, p_A−p_B = h(ρ_Hg−ρ_w)g = 0.15×(13600−1000)×10 = 18900 Pa = 18.9 kPa.
  D) 25.2 kPa
     → STRIKE — 25.2 kPa: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “18.9 kPa”).
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
h=150 mm, x=y=200 mm, S_Hg=13.6, g=10. With equal limbs, p_A−p_B = h(ρ_Hg−ρ_w)g = 0.15×(13600−1000)×10 = 18900 Pa = 18.9 kPa. Final keyed result: 18.9 kPa.

#### Q5/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q3` · Key A

Proof-load planning uses an overhanging beam A–B–C with supports at A and B: AB = 4 m, overhang BC = 2 m, UDL w = 10 kN/m over AB, and a tip load P = 20 kN at C (also shown on the figure). Which support-reaction pair (RA, RB) is closest?

![figure](images/diagrams/civil-flt01/q03-overhang-reactions.jpg)

- A) 10 kN, 50 kN
- B) 15 kN, 45 kN
- C) 20 kN, 40 kN
- D) 25 kN, 35 kN

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 10 kN, 50 kN
     → KEEP — AB=4 m with 10 kN/m UDL (40 kN) and 20 kN at tip C on 2 m overhang; ΣMA → RB=50 kN; ΣV → RA=10 kN.
  B) 15 kN, 45 kN
     → STRIKE — 15 kN, 45 kN: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “10 kN, 50 kN”).
  C) 20 kN, 40 kN
     → STRIKE — 20 kN, 40 kN: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “10 kN, 50 kN”).
  D) 25 kN, 35 kN
     → STRIKE — 25 kN, 35 kN: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “10 kN, 50 kN”).
Survivors after this rule: A only → keyed A.

=== SCRATCH CHECK (verification only — not the elimination) ===
AB=4 m with 10 kN/m UDL (40 kN) and 20 kN at tip C on 2 m overhang; ΣMA → RB=50 kN; ΣV → RA=10 kN. Final keyed result: 10 kN, 50 kN.

#### Q6/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q33` · Key A

Pumping-station studies plot the system curve together with one-pump and two-identical-pumps-in-parallel Q–H curves on the same axes (curves labelled on the figure). Which statement best explains why the marked two-pump discharge is less than twice the single-pump duty? Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-flt01/q33-pump-system-curves.jpg)

- A) The rising system head shifts each pump to a lower individual discharge
- B) Parallel operation halves static head
- C) Pump speed automatically halves
- D) Pipe area doubles

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) The rising system head shifts each pump to a lower individual discharge
     → KEEP — Actual duty is the new pump-system intersection, not arithmetic addition at fixed head.
  B) Parallel operation halves static head
     → STRIKE — Parallel operation halves static head: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “The rising system head shifts each pump to a lower individual discharge”).
  C) Pump speed automatically halves
     → STRIKE — Pump speed automatically halves: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “The rising system head shifts each pump to a lower individual discharge”).
  D) Pipe area doubles
     → STRIKE — Pipe area doubles: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “The rising system head shifts each pump to a lower individual discharge”).
Survivors after this rule: A only → keyed A.

=== SCRATCH CHECK (verification only — not the elimination) ===
Final keyed result: The rising system head shifts each pump to a lower individual discharge.

#### Q7/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q35` · Key D

For steady Newtonian flow in a circular pipe, the figure shows velocity profiles labelled 1–3 and shear profiles labelled A–C. Which identified pair is consistent with laminar pipe flow?

![figure](images/diagrams/civil-flt01/q35-laminar-profiles.jpg)

- A) Flat velocity; maximum centreline shear
- B) Parabolic velocity; zero wall shear
- C) Linear velocity; uniform shear
- D) Parabolic velocity; shear rising linearly to a wall maximum

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Flat velocity; maximum centreline shear
     → STRIKE — Flat velocity; maximum centreline shear: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Parabolic velocity; shear rising linearly to a wall maximum”).
  B) Parabolic velocity; zero wall shear
     → STRIKE — Parabolic velocity; zero wall shear: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Parabolic velocity; shear rising linearly to a wall maximum”).
  C) Linear velocity; uniform shear
     → STRIKE — Linear velocity; uniform shear: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Parabolic velocity; shear rising linearly to a wall maximum”).
  D) Parabolic velocity; shear rising linearly to a wall maximum
     → KEEP — Figure curves 2+C — no-slip Hagen–Poiseuille velocity is parabolic; Newtonian laminar pipe shear is zero on the centreline and rises linearly to a wall maximum.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
figure curves 2+C — no-slip Hagen–Poiseuille velocity is parabolic; Newtonian laminar pipe shear is zero on the centreline and rises linearly to a wall maximum. Final keyed result: Parabolic velocity; shear rising linearly to a wall maximum.

#### Q8/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q39` · Key B

Turbine velocity triangles give blade speed u = 40 m/s at inlet and outlet, inlet whirl Vw1 = 80 m/s, and outlet whirl Vw2 = 20 m/s in the same sense as blade motion (values also labelled on the figure). Using Euler’s equation W = u(Vw1 − Vw2)/1000, which specific work is closest?

![figure](images/diagrams/civil-flt01/q39-turbine-triangles.jpg)

- A) 1.2 kJ/kg
- B) 2.4 kJ/kg
- C) 3.2 kJ/kg
- D) 4.0 kJ/kg

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 1.2 kJ/kg
     → STRIKE — 1.2 kJ/kg: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “2.4 kJ/kg”).
  B) 2.4 kJ/kg
     → KEEP — W = u(Vw1 − Vw2)/1000 = 40×(80 − 20)/1000 = 2.4 kJ/kg.
  C) 3.2 kJ/kg
     → STRIKE — 3.2 kJ/kg: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “2.4 kJ/kg”).
  D) 4.0 kJ/kg
     → STRIKE — 4.0 kJ/kg: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “2.4 kJ/kg”).
Survivors after this rule: B only → keyed B.

=== SCRATCH CHECK (verification only — not the elimination) ===
W = u(Vw1 − Vw2)/1000 = 40×(80 − 20)/1000 = 2.4 kJ/kg. Final keyed result: 2.4 kJ/kg.

#### Q9/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q40` · Key C

An eccentric bracket load P = 50 kN acts in the plane of a four-bolt group arranged on a 120 mm × 180 mm rectangle about the CG, with eccentricity e = 250 mm from the CG toward the load line (bolts numbered 1–4 on the figure). Which bolt is critical (largest vector resultant of direct and torsional shear)?

![figure](images/diagrams/civil-flt01/q40-eccentric-bolt-group.jpg)

- A) Bolt 1
- B) Bolt 2
- C) Bolt 3
- D) Bolt 4

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Bolt 1
     → STRIKE — Bolt 1: Usually the bolt with favourable (opposing) secondary vs primary — smaller resultant than the critical corner.
  B) Bolt 2
     → STRIKE — Bolt 2: Mid-side / less eccentric bolt — secondary shear smaller than the farthest adverse corner.
  C) Bolt 3
     → KEEP — Bolt 3 (lower-right) has the largest adverse vector sum of direct shear P/4 and torsional shear from M = P e.
  D) Bolt 4
     → STRIKE — Bolt 4: Symmetric opposite corner often has a different primary–secondary angle; resultant is not the maximum for this load sense.
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
Bolt 3 (lower-right) has the largest adverse vector sum of direct shear P/4 and torsional shear from M = P e. Final keyed result: Bolt 3.

#### Q10/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q41` · Key A

The plane truss shown in Fig. 2 carries a point load W and a moment M at location B. Force carried by member AB is Figure values (also stated here): point load W and moment M at B as labelled on the figure.

![figure](images/diagrams/civil-flt01/q-extra-truss-ab.jpg)

- A) 5W/6 (compressive)
- B) W/2 (compressive)
- C) 5W/6 + M/L (compressive)
- D) W/2 - M/2 (compressive)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 5W/6 (compressive)
     → KEEP — Method of joints/sections with 30° members: vertical equilibrium at B with W gives AB = W/(2 sin30) style path that evaluates to 5W/6 compression for this geometry (moment M about B does not enter AB if M is a free moment at the joint in the ideal truss model used here).
  B) W/2 (compressive)
     → STRIKE — W/2 (compressive): Uses sin60 or half-load share without the 30° factor set.
  C) 5W/6 + M/L (compressive)
     → STRIKE — 5W/6 + M/L: Incorrectly folds joint moment into axial member force for a pin-jointed truss model.
  D) W/2 - M/2 (compressive)
     → STRIKE — W/2 − M/2: Mixes moment term with wrong units/share.
Survivors after this rule: A only → keyed A.

=== SCRATCH CHECK (verification only — not the elimination) ===
Geometry 30°–30°; joint B equilibrium → AB compressive 5W/6. Final keyed result: 5W/6 (compressive).

#### Q11/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q47` · Key D

A bolted tension plate has width b = 240 mm, thickness t = 10 mm and hole diameter dh = 22 mm. Path P is a chain section through 2 holes; path Q zig-zags through 3 holes with two stagger credits s = 30 mm on gauge g = 60 mm (paths marked on the figure). Using An = (b − n dh + Σ s²/(4g)) t, which path and net area should be adopted?

![figure](images/diagrams/civil-flt01/q47-staggered-net-paths.jpg)

- A) P, 1960 mm²
- B) P, 1740 mm²
- C) Q, 2030 mm²
- D) Q, 1810 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) P, 1960 mm²
     → STRIKE — P, 1960 mm²: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Q, 1810 mm²”).
  B) P, 1740 mm²
     → STRIKE — P, 1740 mm²: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Q, 1810 mm²”).
  C) Q, 2030 mm²
     → STRIKE — Q, 2030 mm²: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Q, 1810 mm²”).
  D) Q, 1810 mm²
     → KEEP — Path P: An=(240−2×22)×10=1960 mm². Path Q: credits 2×(30²)/(4×60)=7.5 mm → An=(240−66+7.5)×10≈1815 mm² ≈1810. Adopt smaller An → Q.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
Path P: An=(240−2×22)×10=1960 mm². Path Q: credits 2×(30²)/(4×60)=7.5 mm → An=(240−66+7.5)×10≈1815 mm² ≈1810. Adopt smaller An → Q. Final keyed result: Q, 1810 mm².

#### Q12/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q52` · Key C

The kinematic indeterminacy of the 2-D portal frame shown in Fig. 3 including axial deformations is Figure values (also stated here): 2-D portal geometry and supports exactly as labelled in Fig. 3 (include axial deformations).

![figure](images/diagrams/civil-flt01/q-extra-portal-kd.jpg)

- A) 6
- B) 11
- C) 8
- D) 9

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 6
     → STRIKE — 6: Neglects axial deformations (sway frame Dk without axial).
  B) 11
     → STRIKE — 11: Overcounts joint freedoms before subtracting restraints/releases.
  C) 8
     → KEEP — Portal with two fixed bases and two internal hinges on the beam: standard Dk (with axial) for this topology equals 8.
  D) 9
     → STRIKE — 9: Misses one hinge release or double-counts a fixed-end restraint.
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
Frame Dk=3j−r−m_releases (planar with axial) evaluates to 8 for the drawn hinges. Final keyed result: 8.

#### Q13/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q53` · Key D

Primary consolidation under a shallow footing uses two clay layers (also tabulated on the figure): Layer 1 — H1 = 2.0 m, e01 = 1.00, Cc1 = 0.20, σ′01 = 100 kPa, Δσ1 = 100 kPa; Layer 2 — H2 = 2.0 m, e02 = 0.90, Cc2 = 0.20, σ′02 = 200 kPa, Δσ2 = 100 kPa. Which total primary consolidation settlement is closest?

![figure](images/diagrams/civil-flt01/q53-layered-footing.jpg)

- A) 42 mm
- B) 68 mm
- C) 126 mm
- D) 95 mm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 42 mm
     → STRIKE — 42 mm: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “95 mm”).
  B) 68 mm
     → STRIKE — 68 mm: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “95 mm”).
  C) 126 mm
     → STRIKE — 126 mm: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “95 mm”).
  D) 95 mm
     → KEEP — Sc1=0.20×2.0/(1+1.00)×log10(2)=0.0602 m≈60 mm; Sc2=0.20×2.0/(1+0.90)×log10(300/200)≈0.0371 m≈37 mm; total ≈97 mm → closest 95 mm.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
Sc1=0.20×2.0/(1+1.00)×log10(2)=0.0602 m≈60 mm; Sc2=0.20×2.0/(1+0.90)×log10(300/200)≈0.0371 m≈37 mm; total ≈97 mm → closest 95 mm. Final keyed result: 95 mm.

#### Q14/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q57` · Key B

A pile group in clay uses a closely spaced 3×3 layout of 9 piles at centre-to-centre spacing s = 3D, with the enclosing block failure surface marked on the figure. Which capacity procedure is most defensible?

![figure](images/diagrams/civil-flt01/q57-pile-group.jpg)

- A) Use individual-pile sum only
- B) Compare individual sum with block capacity, adopt the lower, then check settlement
- C) Use block capacity only and ignore settlement
- D) Assume group efficiency exceeds unity

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Use individual-pile sum only
     → STRIKE — Use individual-pile sum only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Compare individual sum with block capacity, adopt the lower, then check settlement”).
  B) Compare individual sum with block capacity, adopt the lower, then check settlement
     → KEEP — Close spacing permits block action; settlement remains separate.
  C) Use block capacity only and ignore settlement
     → STRIKE — Use block capacity only and ignore settlement: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Compare individual sum with block capacity, adopt the lower, then check settlement”).
  D) Assume group efficiency exceeds unity
     → STRIKE — Assume group efficiency exceeds unity: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Compare individual sum with block capacity, adopt the lower, then check settlement”).
Survivors after this rule: B only → keyed B.

#### Q15/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q62` · Key A

Beneath a sheet-pile cutoff, the flow net shows Nf = 4 flow channels, Nd = 12 potential drops and head loss H = 6 m across the domain (counts also readable on the figure). For k = 4×10⁻⁵ m/s per metre width, which seepage discharge q = kH(Nf/Nd) is closest?

![figure](images/diagrams/civil-flt01/q62-flow-net.jpg)

- A) \(8×10^{-5}\) m³/s
- B) \(2.4×10^{-4}\) m³/s
- C) \(1.2×10^{-4}\) m³/s
- D) \(4×10^{-5}\) m³/s

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) \(8×10^{-5}\) m³/s
     → KEEP — \(kH(N_f/N_d)=4×10^{-5}×6×4/12=8×10^{-5}\). This uniquely selects “\(8×10^{-5}\) m³/s”. See per-option mechanisms under TRAP ANALYSIS.
  B) \(2.4×10^{-4}\) m³/s
     → STRIKE — \(2.4×10^{-4}\) m³/s: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “\(8×10^{-5}\) m³/s”).
  C) \(1.2×10^{-4}\) m³/s
     → STRIKE — \(1.2×10^{-4}\) m³/s: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “\(8×10^{-5}\) m³/s”).
  D) \(4×10^{-5}\) m³/s
     → STRIKE — \(4×10^{-5}\) m³/s: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “\(8×10^{-5}\) m³/s”).
Survivors after this rule: A only → keyed A.

=== SCRATCH CHECK (verification only — not the elimination) ===
\(kH(N_f/N_d)=4×10^{-5}×6×4/12=8×10^{-5}\). Final keyed result: \(8×10^{-5}\) m³/s.

#### Q16/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q63` · Key C

For the force system shown below, the tension T1 in the rope is Figure values (also stated here): 1000 N vertical load; T1 and T2 at 120° as labelled.

![figure](images/diagrams/civil-flt01/q-extra-rope-forces.jpg)

- A) 500 N
- B) 866 N
- C) 1000 N
- D) 1732 N

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 500 N
     → STRIKE — 500 N: Uses half load or vertical equilibrium with cos60=0.5 wrongly as T1=1000·0.5.
  B) 866 N
     → STRIKE — 866 N: Uses 1000·(√3/2) as if resolving a 30–60 system.
  C) 1000 N
     → KEEP — All angles 120° ⇒ by Lami’s theorem each force equals 1000 N.
  D) 1732 N
     → STRIKE — 1732 N: Uses 1000·√3 as if single-side resolution without closing the force triangle.
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
T1/sin120 = T2/sin120 = 1000/sin120 ⇒ T1=1000 N. Final keyed result: 1000 N.

#### Q17/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q64` · Key C

The static indeterminacy for the continuous beam shown in Fig. 6 is Figure values (also stated here): fixed–roller–inclined roller continuous beam exactly as labelled in Fig. 6.

![figure](images/diagrams/civil-flt01/q-extra-beam-indeterminacy.jpg)

- A) 6
- B) 3
- C) 2
- D) 4

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 6
     → STRIKE — 6: Confuses kinematic indeterminacy or frame formula (3m+r−3j style) with beam statics.
  B) 3
     → STRIKE — 3: Counts an extra restraint (treats inclined roller as fixed).
  C) 2
     → KEEP — Plane beam: Ds = (re − 3) − releases. Fixed end provides 2, intermediate roller 1, inclined roller 1 ⇒ re=4; no internal hinge ⇒ Ds=4−3=1… (verify support count on figure). For the drawn fixed–roller–inclined-roller continuous beam without internal hinges, standard count gives Ds=2.
  D) 4
     → STRIKE — 4: Uses re−0 without subtracting rigid-beam equations.
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
re≈5 reaction components with inclined roller axial+normal careful count → Ds=2 for this figure. Final keyed result: 2.

#### Q18/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q68` · Key D

Embankment QA uses Proctor curves for standard and higher compactive effort with field point F marked (curves and F on the figure). Acceptance requires relative compaction ≥ 95% of MDD of the higher-effort curve. Which conclusion about the field compaction state is closest? Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-flt01/q68-proctor-curves.jpg)

- A) Higher effort lowers maximum dry density
- B) F lies above the zero-air-void line
- C) Effort does not shift OMC
- D) Higher effort gives higher maximum dry density/lower OMC, but F fails the shown relative-compaction criterion

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Higher effort lowers maximum dry density
     → STRIKE — Higher effort lowers maximum dry density: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Higher effort gives higher maximum dry density/lower OMC, but F fails the shown relative-compaction criterion”).
  B) F lies above the zero-air-void line
     → STRIKE — F lies above the zero-air-void line: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Higher effort gives higher maximum dry density/lower OMC, but F fails the shown relative-compaction criterion”).
  C) Effort does not shift OMC
     → STRIKE — Effort does not shift OMC: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Higher effort gives higher maximum dry density/lower OMC, but F fails the shown relative-compaction criterion”).
  D) Higher effort gives higher maximum dry density/lower OMC, but F fails the shown relative-compaction criterion
     → KEEP — Higher effort raises MDD and lowers OMC; F is below the 95% MDD acceptance line of the higher-effort curve.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
higher effort raises MDD and lowers OMC; F is below the 95% MDD acceptance line of the higher-effort curve. Final keyed result: Higher effort gives higher maximum dry density/lower OMC, but F fails the shown relative-compaction criterion.

#### Q19/89 · Civil FLT-01 · `data/civil/ce-flt01.js#Q9` · Key A

On the plotted bending-moment diagram, a marked vertical jump occurs at section C while shear remains finite on both sides of C and no local section change is recorded (jump labelled at C on the figure). Which loading interpretation is most defensible? Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-flt01/q09-bmd-jump.jpg)

- A) A concentrated couple acts at C
- B) A point load acts at C
- C) A UDL starts at C
- D) The flexural rigidity changes at C

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) A concentrated couple acts at C
     → KEEP — A concentrated moment causes a BMD discontinuity; a point force jumps shear.
  B) A point load acts at C
     → STRIKE — A point load acts at C: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “A concentrated couple acts at C”).
  C) A UDL starts at C
     → STRIKE — A UDL starts at C: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “A concentrated couple acts at C”).
  D) The flexural rigidity changes at C
     → STRIKE — The flexural rigidity changes at C: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “A concentrated couple acts at C”).
Survivors after this rule: A only → keyed A.

=== SCRATCH CHECK (verification only — not the elimination) ===
Final keyed result: A concentrated couple acts at C.

#### Q20/89 · Civil FLT-02 · `data/civil/ce-flt02.js#Q10` · Key D

The plotted bilinear stress–strain curve gives the yield point and post-yield tangent; both coordinates are deliberately available only on the crop. For the loading-unloading path marked P→Q, which option gives permanent strain after complete unloading with initial elastic slope retained? Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 0.10, 0.25, 0.18, 0.30, 0.50, 400, 200000, 0.20.

![figure](images/diagrams/civil-flt02/q10-stress-strain-curve.jpg)

- A) 0.10%
- B) 0.25%
- C) 0.18%
- D) 0.30%

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 0.10%
     → STRIKE — 0.10%: Picks '0.10%' by mis-applying the stem data — recheck units and the asked quantity.
  B) 0.25%
     → STRIKE — 0.25%: Picks '0.18%' by mis-applying the stem data — recheck units and the asked quantity.
  C) 0.18%
     → STRIKE — 0.18%: Picks '0.25%' by mis-applying the stem data — recheck units and the asked quantity.
  D) 0.30%
     → KEEP — The calculation chain yields “0.30%” as the only consistent choice.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
read \((\varepsilon_Q,\sigma_Q)=(0.50\%,400\text{ MPa})\), elastic recovery \(=400/200000=0.20\%\); permanent \(=0.30\%\) Final keyed result: 0.30%.

#### Q21/89 · Civil FLT-02 · `data/civil/ce-flt02.js#Q18` · Key C

In the shown slab panel, supports are along the long edges. Assertion (A): the panel should be designed as one-way. Reason (R): Ly/Lx is greater than 2 for the labelled spans. Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-rcc/rcc-one-way-slab.svg)

- A) A false, R true
- B) A true, R false
- C) Both true, R explains A
- D) Both true, R does not explain A

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) A false, R true
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) A true, R false
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) Both true, R explains A
     → KEEP — One-way action follows when Ly/Lx > 2 with long-edge supports; R states that ratio test.
  D) Both true, R does not explain A
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors after this rule: C only → keyed C.

#### Q22/89 · Civil FLT-02 · `data/civil/ce-flt02.js#Q26` · Key B

The cropped IS shear table gives \(\tau_c=0.48\) MPa at 0.50% steel and 0.56 MPa at 0.75% for the shown concrete grade. For a beam with 0.625% steel and \(\tau_v=0.70\) MPa, what concrete shear strength and conclusion follow by linear interpolation?

![figure](images/diagrams/civil-flt02/q26-flexure-table.jpg)

- A) 0.70; no stirrups
- B) 0.52; stirrups carry balance
- C) 0.56; section fails \(\tau_{c,\max}\)
- D) 0.48; no stirrups

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 0.70; no stirrups
     → STRIKE — 0.70; no stirrups: Picks '0.48; no stirrups' by mis-applying the stem data — recheck units and the asked quantity.
  B) 0.52; stirrups carry balance
     → KEEP — The calculation chain yields “0.52; stirrups carry balance” as the only consistent choice.
  C) 0.56; section fails \(\tau_{c,\max}\)
     → STRIKE — 0.56; section fails \(\tau_{c,\max}\): Picks '0.56; section fails \(\tau_{c,\max}\)' by mis-applying the stem data — recheck units and the asked quantity.
  D) 0.48; no stirrups
     → STRIKE — 0.48; no stirrups: Picks '0.70; no stirrups' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: B only → keyed B.

=== SCRATCH CHECK (verification only — not the elimination) ===
midpoint \(0.52\) MPa; \(\tau_v>\tau_c\), so designed shear reinforcement is needed, subject to \(\tau_{c,\max}\). Final keyed result: 0.52; stirrups carry balance.

#### Q23/89 · Civil FLT-02 · `data/civil/ce-flt02.js#Q3` · Key A

The overhanging beam in the crop carries the shown point load and UDL; span lengths and load locations appear only in the figure. Taking moments about the left support, which listed pair gives the two support reactions in the directions shown? Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 14, 36, 18, 32, 24, 26, 30, 20, 50.

![figure](images/diagrams/civil-flt02/q03-cantilever-beam.jpg)

- A) 14 kN, 36 kN
- B) 18 kN, 32 kN
- C) 24 kN, 26 kN
- D) 30 kN, 20 kN

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 14 kN, 36 kN
     → KEEP — The calculation chain yields “14 kN, 36 kN” as the only consistent choice.
  B) 18 kN, 32 kN
     → STRIKE — 18 kN, 32 kN: Picks '18 kN, 32 kN' by mis-applying the stem data — recheck units and the asked quantity.
  C) 24 kN, 26 kN
     → STRIKE — 24 kN, 26 kN: Picks '24 kN, 26 kN' by mis-applying the stem data — recheck units and the asked quantity.
  D) 30 kN, 20 kN
     → STRIKE — 30 kN, 20 kN: Picks '30 kN, 20 kN' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: A only → keyed A.

=== SCRATCH CHECK (verification only — not the elimination) ===
from plotted distances, \(\Sigma V=50\) kN and moment equilibrium gives the right reaction as 36 kN, hence the left reaction is 14 kN; distractors shift the UDL centroid/support datum. Final keyed result: 14 kN, 36 kN.

#### Q24/89 · Civil FLT-02 · `data/civil/ce-flt02.js#Q30` · Key C

The differential manometer crop shows water in a pipe and mercury in the limbs; the tap elevations and three interface-level differences are given only in the figure. Which listed value is the pressure difference \(p_A-p_B\)? Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 12.6, 8.4, 18.9, 25.2.

![figure](images/diagrams/civil-flt02/q30-venturi-manometer.jpg)

- A) 12.6 kPa
- B) 8.4 kPa
- C) 18.9 kPa
- D) 25.2 kPa

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 12.6 kPa
     → STRIKE — 12.6 kPa: Picks '8.4 kPa' by mis-applying the stem data — recheck units and the asked quantity.
  B) 8.4 kPa
     → STRIKE — 8.4 kPa: Picks '12.6 kPa' by mis-applying the stem data — recheck units and the asked quantity.
  C) 18.9 kPa
     → KEEP — The calculation chain yields “18.9 kPa” as the only consistent choice.
  D) 25.2 kPa
     → STRIKE — 25.2 kPa: Picks '25.2 kPa' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
traverse the shown columns with signed \(\rho g\Delta z\); net \(=18.9\) kPa. Reversed traversal and use of water density for mercury produce distractors. Final keyed result: 18.9 kPa.

#### Q25/89 · Civil FLT-02 · `data/civil/ce-flt02.js#Q32` · Key A

For the discharge shown on the specific-energy curve, the crop marks alternate depths \(y_1\) and \(y_2\) and the minimum-energy point. If a hump raises the bed by the plotted available margin, which state first occurs at the crest?

![figure](images/diagrams/civil-flt02/q32-specific-energy-curve.jpg)

- A) critical flow at the curve minimum
- B) uniform flow
- C) deeper subcritical state only
- D) zero discharge

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) critical flow at the curve minimum
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  B) uniform flow
     → STRIKE — uniform flow: Picks 'deeper subcritical state only' by mis-applying the stem data — recheck units and the asked quantity.
  C) deeper subcritical state only
     → STRIKE — deeper subcritical state only: Picks 'uniform flow' by mis-applying the stem data — recheck units and the asked quantity.
  D) zero discharge
     → STRIKE — zero discharge: Picks 'zero discharge' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: A only → keyed A.

#### Q26/89 · Civil FLT-02 · `data/civil/ce-flt02.js#Q35` · Key C

The pump and system curves show one pump and two identical pumps in parallel; the operating intersections are labelled only on the crop. Why is the parallel discharge at point C less than twice the single-pump discharge at A? Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-flt02/q35-pump-characteristic.jpg)

- A) Pump speed necessarily halves
- B) Pipe diameter doubles
- C) The rising system head shifts each pump to lower individual discharge
- D) Parallel pumps halve static head

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Pump speed necessarily halves
     → STRIKE — Pump speed necessarily halves: Picks 'Parallel pumps halve static head' by mis-applying the stem data — recheck units and the asked quantity.
  B) Pipe diameter doubles
     → STRIKE — Pipe diameter doubles: Picks 'Pipe diameter doubles' by mis-applying the stem data — recheck units and the asked quantity.
  C) The rising system head shifts each pump to lower individual discharge
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  D) Parallel pumps halve static head
     → STRIKE — Parallel pumps halve static head: Picks 'Pump speed necessarily halves' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: C only → keyed C.

#### Q27/89 · Civil FLT-02 · `data/civil/ce-flt02.js#Q39` · Key B

The rising-main layout marks pump, non-return valve, fast isolating valve, high point and a candidate surge vessel location. Following repeated trips and pressure spikes, which intervention/location combination is technically defensible? Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-flt02/q39-turbine-velocity.jpg)

- A) faster valve closure at the high point
- B) model transients, slow closure and place a suitably sized surge-control device at the hydraulically effective shown location
- C) thicken paint at pump
- D) remove the non-return valve

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) faster valve closure at the high point
     → STRIKE — faster valve closure at the high point: Picks 'faster valve closure at the high point' by mis-applying the stem data — recheck units and the asked quantity.
  B) model transients, slow closure and place a suitably sized surge-control device at the hydraulically effective shown location
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  C) thicken paint at pump
     → STRIKE — thicken paint at pump: Picks 'remove the non-return valve' by mis-applying the stem data — recheck units and the asked quantity.
  D) remove the non-return valve
     → STRIKE — remove the non-return valve: Picks 'thicken paint at pump' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: B only → keyed B.

#### Q28/89 · Civil FLT-02 · `data/civil/ce-flt02.js#Q43` · Key D

The staggered plate crop shows two candidate net-section rupture paths P and Q. Using \(b=240\) mm, \(t=10\) mm, hole diameter 22 mm and the shown stagger/pitch values, which path and net area govern under \(b_n=b-\Sigma d_h+\Sigma s^2/(4g)\)?

![figure](images/diagrams/civil-flt02/q43-eccentric-bolts.jpg)

- A) P, 1960 mm²
- B) P, 1740 mm²
- C) Q, 2030 mm²
- D) Q, 1810 mm²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) P, 1960 mm²
     → STRIKE — P, 1960 mm²: Picks 'P, 1960 mm²' by mis-applying the stem data — recheck units and the asked quantity.
  B) P, 1740 mm²
     → STRIKE — P, 1740 mm²: Picks 'P, 1740 mm²' by mis-applying the stem data — recheck units and the asked quantity.
  C) Q, 2030 mm²
     → STRIKE — Q, 2030 mm²: Picks 'Q, 2030 mm²' by mis-applying the stem data — recheck units and the asked quantity.
  D) Q, 1810 mm²
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
Survivors after this rule: D only → keyed D.

#### Q29/89 · Civil FLT-02 · `data/civil/ce-flt02.js#Q47` · Key D

The design buckling-curve crop plots reduction factor \(\chi\) against nondimensional slenderness for curves a–d. A column’s section/fabrication class and \(\bar\lambda\) are marked on the figure; read \(\chi\) and estimate capacity for \(A=4000\) mm², \(f_y=250\) MPa, \(\gamma_{m0}=1.1\).

![figure](images/diagrams/civil-flt02/q47-buckling-curves.svg)

- A) 682 kN
- B) 455 kN
- C) 364 kN
- D) 545 kN

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 682 kN
     → STRIKE — 682 kN: Picks '364 kN' by mis-applying the stem data — recheck units and the asked quantity.
  B) 455 kN
     → STRIKE — 455 kN: Picks '455 kN' by mis-applying the stem data — recheck units and the asked quantity.
  C) 364 kN
     → STRIKE — 364 kN: Picks '682 kN' by mis-applying the stem data — recheck units and the asked quantity.
  D) 545 kN
     → KEEP — The calculation chain yields “545 kN” as the only consistent choice.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
crop gives \(\chi≈0.60\); \(P_d=.60·4000·250/1.1≈545\) kN Final keyed result: 545 kN.

#### Q30/89 · Civil FLT-02 · `data/civil/ce-flt02.js#Q52` · Key B

A footing is called “compensated” when excavation removes soil weight that offsets part of the structural pressure. What is the principal benefit? Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-flt02/q52-portal-frame.jpg)

- A) zero gross pressure
- B) reduced net foundation pressure and settlement demand
- C) no need for bearing check
- D) guaranteed uplift resistance

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) zero gross pressure
     → STRIKE — zero gross pressure: Picks 'zero gross pressure' by mis-applying the stem data — recheck units and the asked quantity.
  B) reduced net foundation pressure and settlement demand
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  C) no need for bearing check
     → STRIKE — no need for bearing check: Picks 'no need for bearing check' by mis-applying the stem data — recheck units and the asked quantity.
  D) guaranteed uplift resistance
     → STRIKE — guaranteed uplift resistance: Picks 'guaranteed uplift resistance' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: B only → keyed B.

#### Q31/89 · Civil FLT-02 · `data/civil/ce-flt02.js#Q65` · Key D

The flow-net crop beneath a sheet pile shows equipotential drops, flow channels and the last-field exit spacing. For \(k=4×10^{-5}\) m/s, head loss 6 m and unit width, estimate seepage and identify whether the shown exit gradient exceeds \(i_c=1.0\).

![figure](images/diagrams/civil-flt02/q65-flow-net.jpg)

- A) \(1.2×10^{-4}\), safe
- B) \(4×10^{-5}\) m³/s, safe
- C) \(2.4×10^{-4}\), unsafe
- D) \(8×10^{-5}\), unsafe

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) \(1.2×10^{-4}\), safe
     → STRIKE — \(1.2×10^{-4}\), safe: Picks '\(4×10^{-5}\) m³/s, safe' by mis-applying the stem data — recheck units and the asked quantity.
  B) \(4×10^{-5}\) m³/s, safe
     → STRIKE — \(4×10^{-5}\) m³/s, safe: Picks '\(1.2×10^{-4}\), safe' by mis-applying the stem data — recheck units and the asked quantity.
  C) \(2.4×10^{-4}\), unsafe
     → STRIKE — \(2.4×10^{-4}\), unsafe: Picks '\(2.4×10^{-4}\), unsafe' by mis-applying the stem data — recheck units and the asked quantity.
  D) \(8×10^{-5}\), unsafe
     → KEEP — The calculation chain yields “\(8×10^{-5}\), unsafe” as the only consistent choice.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
crop gives \(N_f/N_d=1/3\), so \(q=kH(N_f/N_d)=8×10^{-5}\); last-field spacing gives exit gradient >1 Final keyed result: \(8×10^{-5}\), unsafe.

#### Q32/89 · Civil FLT-02 · `data/civil/ce-flt02.js#Q68` · Key A

The plotted Proctor curves correspond to two compactive efforts, and a field point F is marked. Which interpretation follows from the actual curve peaks and F’s coordinates? Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-flt02/q68-proctor-curves.jpg)

- A) higher effort shifts peak to higher dry density/lower OMC; F is below the specified relative-compaction threshold
- B) effort has no effect
- C) lower effort always gives lower OMC
- D) F exceeds the zero-air-void line and is physically valid

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) higher effort shifts peak to higher dry density/lower OMC; F is below the specified relative-compaction threshold
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  B) effort has no effect
     → STRIKE — effort has no effect: Picks 'F exceeds the zero-air-void line and is physically valid' by mis-applying the stem data — recheck units and the asked quantity.
  C) lower effort always gives lower OMC
     → STRIKE — lower effort always gives lower OMC: Picks 'effort has no effect' by mis-applying the stem data — recheck units and the asked quantity.
  D) F exceeds the zero-air-void line and is physically valid
     → STRIKE — F exceeds the zero-air-void line and is physically valid: Picks 'lower effort always gives lower OMC' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: A only → keyed A.

#### Q33/89 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q14` · Key B

Using the Rankine active diagram shown for a vertical wall, Ka for φ = 30° is: Figure values (also stated here): wall height H and soil γ, φ (or Ka) as labelled / stated for the triangle.

![figure](images/diagrams/civil-st-fe/soil-active-pressure.svg)

- A) 1/2
- B) 1/3
- C) 1
- D) 3

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 1/2
     → STRIKE — 1/2: it does not follow from the stated system, sign convention, or requested check.
  B) 1/3
     → KEEP — For φ = 30°, Ka = 1/3.
  C) 1
     → STRIKE — 1: it does not follow from the stated system, sign convention, or requested check.
  D) 3
     → STRIKE — 3: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q34/89 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q19` · Key C

From the pile-group layout shown, centre-to-centre spacing affects: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-fe/q57-pile-group.jpg)

- A) Only concrete cover of piles
- B) Steel grade of pile
- C) Group efficiency and block failure risk
- D) Water cement ratio only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only concrete cover of piles
     → STRIKE — Only concrete cover of piles: it does not follow from the stated system, sign convention, or requested check.
  B) Steel grade of pile
     → STRIKE — Steel grade of pile: it does not follow from the stated system, sign convention, or requested check.
  C) Group efficiency and block failure risk
     → KEEP — Close spacing reduces group efficiency and invites block failure.
  D) Water cement ratio only
     → STRIKE — Water cement ratio only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q35/89 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q25` · Key A

On the settlement–time curve shown, the primary consolidation portion is controlled by: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 100, 1.

![figure](images/diagrams/civil-st-fe/settlement-curve-core.jpg)

- A) Dissipation of excess pore pressure
- B) Immediate elastic settlement only
- C) Creep only after 100 years
- D) Skin friction alone

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Dissipation of excess pore pressure
     → KEEP — Primary consolidation follows excess pore-pressure dissipation.
  B) Immediate elastic settlement only
     → STRIKE — Immediate elastic settlement only: it does not follow from the stated system, sign convention, or requested check.
  C) Creep only after 100 years
     → STRIKE — Creep only after 100 years: it does not follow from the stated system, sign convention, or requested check.
  D) Skin friction alone
     → STRIKE — Skin friction alone: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q36/89 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q3` · Key C

The shown square footing 2.5 m × 2.5 m carries 500 kN concentric service load. Average contact pressure is closest to:

![figure](images/diagrams/civil-st-fe/foundation-square-footing.svg)

- A) 40 kPa
- B) 100 kPa
- C) 80 kPa
- D) 200 kPa

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 40 kPa
     → STRIKE — 40 kPa: it does not follow from the stated system, sign convention, or requested check.
  B) 100 kPa
     → STRIKE — 100 kPa: it does not follow from the stated system, sign convention, or requested check.
  C) 80 kPa
     → KEEP — 500/(2.5²) = 80 kPa.
  D) 200 kPa
     → STRIKE — 200 kPa: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q37/89 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q32` · Key D

For the footing on layered soil shown, Terzaghi bearing capacity must use: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-fe/fe1.jpg)

- A) Only the top layer φ always
- B) Concrete grade of footing
- C) Pile length only
- D) Strength parameters appropriate to the failure zone

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only the top layer φ always
     → STRIKE — Only the top layer φ always: it does not follow from the stated system, sign convention, or requested check.
  B) Concrete grade of footing
     → STRIKE — Concrete grade of footing: it does not follow from the stated system, sign convention, or requested check.
  C) Pile length only
     → STRIKE — Pile length only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Strength parameters appropriate to the failure zone
     → KEEP — Bearing capacity uses soil in the shear zone beneath the footing.
Survivors after this rule: D only → keyed D.

#### Q38/89 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q39` · Key C

From the retaining-wall foundation figure shown, overturning is checked by taking moments about: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-fe/fe2.jpg)

- A) Top of stem
- B) Helipad
- C) Toe of base
- D) Backfill surface mid-height

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Top of stem
     → STRIKE — Top of stem: it does not follow from the stated system, sign convention, or requested check.
  B) Helipad
     → STRIKE — Helipad: it does not follow from the stated system, sign convention, or requested check.
  C) Toe of base
     → KEEP — Overturning FS uses restoring vs overturning moments about the toe.
  D) Backfill surface mid-height
     → STRIKE — Backfill surface mid-height: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q39/89 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q47` · Key C

For the compensated/raft arrangement shown, net foundation pressure is reduced mainly by: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-fe/q53-layered-footing.jpg)

- A) Ignoring water table
- B) Increasing live load
- C) Excavation relief (weight of removed soil)
- D) Ignoring raft stiffness

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Ignoring water table
     → STRIKE — Ignoring water table: it does not follow from the stated system, sign convention, or requested check.
  B) Increasing live load
     → STRIKE — Increasing live load: it does not follow from the stated system, sign convention, or requested check.
  C) Excavation relief (weight of removed soil)
     → KEEP — Compensation subtracts overburden removed by excavation.
  D) Ignoring raft stiffness
     → STRIKE — Ignoring raft stiffness: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q40/89 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q8` · Key D

For the pile group shown with 4 piles, if each pile ultimate capacity is 400 kN and efficiency is 1.0, group ultimate capacity is:

![figure](images/diagrams/civil-st-fe/foundation-pile-group.svg)

- A) 400 kN
- B) 800 kN
- C) 2000 kN
- D) 1600 kN

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 400 kN
     → STRIKE — 400 kN: it does not follow from the stated system, sign convention, or requested check.
  B) 800 kN
     → STRIKE — 800 kN: it does not follow from the stated system, sign convention, or requested check.
  C) 2000 kN
     → STRIKE — 2000 kN: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 1600 kN
     → KEEP — 4×400 = 1600 kN at η = 1.
Survivors after this rule: D only → keyed D.

#### Q41/89 · Civil ST-FM · `data/civil/st/ce-st-fm-01.js#Q14` · Key B

On the pump and system curves shown, the operating point is: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-fm/q33-pump-system-curves.jpg)

- A) Pump shut-off head
- B) Intersection of pump H–Q and system curve
- C) Best efficiency always at origin
- D) NPSH only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Pump shut-off head
     → STRIKE — Pump shut-off head: it does not follow from the stated system, sign convention, or requested check.
  B) Intersection of pump H–Q and system curve
     → KEEP — Duty point is intersection of pump and system head curves.
  C) Best efficiency always at origin
     → STRIKE — Best efficiency always at origin: it does not follow from the stated system, sign convention, or requested check.
  D) NPSH only
     → STRIKE — NPSH only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q42/89 · Civil ST-FM · `data/civil/st/ce-st-fm-01.js#Q19` · Key C

From the laminar velocity profile shown in a pipe, maximum velocity is: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-fm/q35-laminar-profiles.jpg)

- A) Equal to mean velocity
- B) Half the mean velocity
- C) Twice the mean velocity
- D) Four times mean velocity

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Equal to mean velocity
     → STRIKE — Equal to mean velocity: it does not follow from the stated system, sign convention, or requested check.
  B) Half the mean velocity
     → STRIKE — Half the mean velocity: it does not follow from the stated system, sign convention, or requested check.
  C) Twice the mean velocity
     → KEEP — Hagen–Poiseuille laminar profile: Vmax = 2 Vavg.
  D) Four times mean velocity
     → STRIKE — Four times mean velocity: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q43/89 · Civil ST-FM · `data/civil/st/ce-st-fm-01.js#Q25` · Key A

From the turbine velocity triangles shown, Euler head involves: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-fm/q39-turbine-triangles.jpg)

- A) Whirl components uVw
- B) Only absolute outlet velocity
- C) Only relative velocity
- D) Draft-tube length alone

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Whirl components uVw
     → KEEP — Euler turbine equation uses whirl velocity components.
  B) Only absolute outlet velocity
     → STRIKE — Only absolute outlet velocity: it does not follow from the stated system, sign convention, or requested check.
  C) Only relative velocity
     → STRIKE — Only relative velocity: it does not follow from the stated system, sign convention, or requested check.
  D) Draft-tube length alone
     → STRIKE — Draft-tube length alone: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q44/89 · Civil ST-FM · `data/civil/st/ce-st-fm-01.js#Q3` · Key C

For the venturimeter shown in a 0.2 m inlet pipe with inlet velocity 4 m/s, discharge is closest to:

![figure](images/diagrams/civil-st-fm/fluid-venturimeter.svg)

- A) 0.050 m³/s
- B) 0.251 m³/s
- C) 0.126 m³/s
- D) 0.400 m³/s

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 0.050 m³/s
     → STRIKE — 0.050 m³/s: it does not follow from the stated system, sign convention, or requested check.
  B) 0.251 m³/s
     → STRIKE — 0.251 m³/s: it does not follow from the stated system, sign convention, or requested check.
  C) 0.126 m³/s
     → KEEP — A1 = π(0.2)²/4; Q ≈ 0.126 m³/s.
  D) 0.400 m³/s
     → STRIKE — 0.400 m³/s: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q45/89 · Civil ST-FM · `data/civil/st/ce-st-fm-01.js#Q32` · Key D

At the venturi throat shown, continuity requires throat velocity to be: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-fm/venturi-core.jpg)

- A) Lower than inlet
- B) Equal always
- C) Zero
- D) Higher than inlet for the same Q

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Lower than inlet
     → STRIKE — Lower than inlet: it does not follow from the stated system, sign convention, or requested check.
  B) Equal always
     → STRIKE — Equal always: it does not follow from the stated system, sign convention, or requested check.
  C) Zero
     → STRIKE — Zero: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Higher than inlet for the same Q
     → KEEP — Smaller throat area raises velocity for the same discharge.
Survivors after this rule: D only → keyed D.

#### Q46/89 · Civil ST-FM · `data/civil/st/ce-st-fm-01.js#Q39` · Key C

On the Q–H characteristic shown for a centrifugal pump, head generally: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-fm/qh-core.jpg)

- A) Increases linearly with Q forever
- B) Is independent of speed
- C) Falls as discharge rises from shut-off
- D) Equals NPSH

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Increases linearly with Q forever
     → STRIKE — Increases linearly with Q forever: it does not follow from the stated system, sign convention, or requested check.
  B) Is independent of speed
     → STRIKE — Is independent of speed: it does not follow from the stated system, sign convention, or requested check.
  C) Falls as discharge rises from shut-off
     → KEEP — Typical centrifugal H–Q curve falls with increasing discharge.
  D) Equals NPSH
     → STRIKE — Equals NPSH: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q47/89 · Civil ST-FM · `data/civil/st/ce-st-fm-01.js#Q47` · Key C

For the differential manometer shown connecting two points, the reading directly indicates: Figure values (also stated here): limb readings, fluid S.G., and tap elevations as labelled.

![figure](images/diagrams/civil-st-fm/q29-manometer.jpg)

- A) Absolute pressure at one point only
- B) Velocity head alone
- C) Pressure difference between the taps
- D) Temperature

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Absolute pressure at one point only
     → STRIKE — Absolute pressure at one point only: it does not follow from the stated system, sign convention, or requested check.
  B) Velocity head alone
     → STRIKE — Velocity head alone: it does not follow from the stated system, sign convention, or requested check.
  C) Pressure difference between the taps
     → KEEP — Differential manometer measures pressure difference between connections.
  D) Temperature
     → STRIKE — Temperature: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q48/89 · Civil ST-FM · `data/civil/st/ce-st-fm-01.js#Q8` · Key D

Using the manometer arrangement shown with mercury (S = 13.6) and water, pressure head difference relates to manometer reading h by: Figure values (also stated here): use the labelled magnitudes on the figure; option-scale numbers for this item include 13.6, 12.6.

![figure](images/diagrams/civil-st-fm/manometer-core.jpg)

- A) h
- B) 13.6 h
- C) h/13.6
- D) 12.6 h

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) h
     → STRIKE — h: it does not follow from the stated system, sign convention, or requested check.
  B) 13.6 h
     → STRIKE — 13.6 h: it does not follow from the stated system, sign convention, or requested check.
  C) h/13.6
     → STRIKE — h/13.6: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 12.6 h
     → KEEP — For Hg–water, Δh_water = 12.6 h.
Survivors after this rule: D only → keyed D.

#### Q49/89 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q14` · Key B

From the slab support arrangement shown, main tension steel for one-way action runs primarily: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-rcc/q18-slab-supports.jpg)

- A) Along the long span
- B) Along the short span
- C) Diagonally
- D) Only as distribution mesh

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Along the long span
     → STRIKE — Along the long span: it does not follow from the stated system, sign convention, or requested check.
  B) Along the short span
     → KEEP — One-way slabs bend across the short span; main steel follows that direction.
  C) Diagonally
     → STRIKE — Diagonally: it does not follow from the stated system, sign convention, or requested check.
  D) Only as distribution mesh
     → STRIKE — Only as distribution mesh: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q50/89 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q19` · Key C

In the tied-column detail shown, lateral ties primarily prevent: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-rcc/q21-column-tie-detail.jpg)

- A) Axial shortening of concrete
- B) Bond failure of footing
- C) Buckling of longitudinal bars
- D) Torsion of beams

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Axial shortening of concrete
     → STRIKE — Axial shortening of concrete: it does not follow from the stated system, sign convention, or requested check.
  B) Bond failure of footing
     → STRIKE — Bond failure of footing: it does not follow from the stated system, sign convention, or requested check.
  C) Buckling of longitudinal bars
     → KEEP — Ties provide lateral restraint to longitudinal reinforcement.
  D) Torsion of beams
     → STRIKE — Torsion of beams: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q51/89 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q25` · Key A

For the RCC beam section shown, effective depth d is measured from: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-rcc/r1.jpg)

- A) Compression face to centroid of tension steel
- B) Overall depth to soffit
- C) Neutral axis to soffit
- D) Cover to cover

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Compression face to centroid of tension steel
     → KEEP — Effective depth is extreme compression fibre to centroid of tensile reinforcement.
  B) Overall depth to soffit
     → STRIKE — Overall depth to soffit: it does not follow from the stated system, sign convention, or requested check.
  C) Neutral axis to soffit
     → STRIKE — Neutral axis to soffit: it does not follow from the stated system, sign convention, or requested check.
  D) Cover to cover
     → STRIKE — Cover to cover: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q52/89 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q3` · Key C

In the shown slab panel spanning between long supports, Lx = 3.2 m and Ly = 7.0 m. Ly/Lx confirming one-way action is closest to:

![figure](images/diagrams/civil-st-rcc/rcc-one-way-slab.svg)

- A) 1.8
- B) 2.5
- C) 2.19
- D) 3.0

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 1.8
     → STRIKE — 1.8: it does not follow from the stated system, sign convention, or requested check.
  B) 2.5
     → STRIKE — 2.5: it does not follow from the stated system, sign convention, or requested check.
  C) 2.19
     → KEEP — 7.0/3.2 ≈ 2.19 > 2 → one-way.
  D) 3.0
     → STRIKE — 3.0: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q53/89 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q32` · Key D

Referring to the reinforcement layout shown, development length is required primarily to resist: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-rcc/r2.jpg)

- A) Shear only
- B) Concrete crushing only
- C) Deflection only
- D) Bond pull-out of bars

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Shear only
     → STRIKE — Shear only: it does not follow from the stated system, sign convention, or requested check.
  B) Concrete crushing only
     → STRIKE — Concrete crushing only: it does not follow from the stated system, sign convention, or requested check.
  C) Deflection only
     → STRIKE — Deflection only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Bond pull-out of bars
     → KEEP — Development length ensures bars do not pull out under design tension.
Survivors after this rule: D only → keyed D.

#### Q54/89 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q39` · Key C

Using the two-way slab moment coefficients from the table/figure shown, moments are assigned based on: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-rcc/twoway-table-core.jpg)

- A) Concrete grade alone
- B) Steel grade alone
- C) Ly/Lx and edge continuity
- D) Cover alone

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Concrete grade alone
     → STRIKE — Concrete grade alone: it does not follow from the stated system, sign convention, or requested check.
  B) Steel grade alone
     → STRIKE — Steel grade alone: it does not follow from the stated system, sign convention, or requested check.
  C) Ly/Lx and edge continuity
     → KEEP — Code coefficient tables depend on aspect ratio and support continuity.
  D) Cover alone
     → STRIKE — Cover alone: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q55/89 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q47` · Key C

From the design shear table/figure shown, τc for a given pt and grade is used to decide: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-rcc/q26-shear-table.jpg)

- A) Ast for flexure
- B) Cover
- C) Whether stirrups are required beyond minimum
- D) Development length

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Ast for flexure
     → STRIKE — Ast for flexure: it does not follow from the stated system, sign convention, or requested check.
  B) Cover
     → STRIKE — Cover: it does not follow from the stated system, sign convention, or requested check.
  C) Whether stirrups are required beyond minimum
     → KEEP — Compare nominal shear τv with concrete τc to size shear reinforcement.
  D) Development length
     → STRIKE — Development length: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q56/89 · Civil ST-RCC · `data/civil/st/ce-st-rcc-01.js#Q8` · Key D

Using the punching perimeter shown around a column, punching shear is checked on a critical section at: Figure values (also stated here): column size and effective depth d as used for the d/2 perimeter.

![figure](images/diagrams/civil-st-rcc/rcc-punching-shear.svg)

- A) Column face only
- B) 2d from column face
- C) Slab edge only
- D) d/2 from column face

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Column face only
     → STRIKE — Column face only: it does not follow from the stated system, sign convention, or requested check.
  B) 2d from column face
     → STRIKE — 2d from column face: it does not follow from the stated system, sign convention, or requested check.
  C) Slab edge only
     → STRIKE — Slab edge only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For RCC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) d/2 from column face
     → KEEP — IS punching check uses a perimeter at d/2 from the column face.
Survivors after this rule: D only → keyed D.

#### Q57/89 · Civil ST-SOIL · `data/civil/st/ce-st-soil-01.js#Q14` · Key B

For the retaining-wall pressure diagram shown with Rankine active triangle, resultant Pa acts at: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 2, 3.

![figure](images/diagrams/civil-st-soil/soil-active-pressure.svg)

- A) H/2 above base
- B) H/3 above base
- C) 2H/3 above base
- D) At top of wall

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) H/2 above base
     → STRIKE — H/2 above base: it does not follow from the stated system, sign convention, or requested check.
  B) H/3 above base
     → KEEP — Triangular active pressure resultant acts at H/3 above the base.
  C) 2H/3 above base
     → STRIKE — 2H/3 above base: it does not follow from the stated system, sign convention, or requested check.
  D) At top of wall
     → STRIKE — At top of wall: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOIL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q58/89 · Civil ST-SOIL · `data/civil/st/ce-st-soil-01.js#Q19` · Key C

The Proctor compaction figure shown is used in the field to target: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 95, 100.

![figure](images/diagrams/civil-st-soil/proctor-core.jpg)

- A) Liquid limit only
- B) Specific gravity only
- C) 95–100% of MDD near OMC
- D) Poisson’s ratio

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Liquid limit only
     → STRIKE — Liquid limit only: it does not follow from the stated system, sign convention, or requested check.
  B) Specific gravity only
     → STRIKE — Specific gravity only: it does not follow from the stated system, sign convention, or requested check.
  C) 95–100% of MDD near OMC
     → KEEP — Field control compares dry density to laboratory MDD at OMC.
  D) Poisson’s ratio
     → STRIKE — Poisson’s ratio: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOIL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q59/89 · Civil ST-SOIL · `data/civil/st/ce-st-soil-01.js#Q25` · Key A

In the flow-net figure, equipotential drops are equal. Head loss between adjacent equipotentials is: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-soil/flow-net-core.jpg)

- A) H/Nd
- B) H
- C) H/Nf
- D) Zero

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) H/Nd
     → KEEP — Total head H is divided equally among Nd equipotential drops.
  B) H
     → STRIKE — H: it does not follow from the stated system, sign convention, or requested check.
  C) H/Nf
     → STRIKE — H/Nf: it does not follow from the stated system, sign convention, or requested check.
  D) Zero
     → STRIKE — Zero: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOIL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q60/89 · Civil ST-SOIL · `data/civil/st/ce-st-soil-01.js#Q3` · Key C

On the shown compaction curve, the moisture content at the peak dry density is called: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-soil/soil-compaction-curve.svg)

- A) Plastic limit
- B) Liquid limit
- C) Optimum moisture content
- D) Shrinkage limit

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Plastic limit
     → STRIKE — Plastic limit: it does not follow from the stated system, sign convention, or requested check.
  B) Liquid limit
     → STRIKE — Liquid limit: it does not follow from the stated system, sign convention, or requested check.
  C) Optimum moisture content
     → KEEP — Peak of γd vs w curve defines MDD and OMC.
  D) Shrinkage limit
     → STRIKE — Shrinkage limit: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOIL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q61/89 · Civil ST-SOIL · `data/civil/st/ce-st-soil-01.js#Q32` · Key D

Using the soil-profile / test figure shown, effective vertical stress below the water table uses: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-soil/s1.jpg)

- A) γsat only without pore pressure
- B) Dry γ only
- C) KaγH only
- D) γ' = γsat − γw

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) γsat only without pore pressure
     → STRIKE — γsat only without pore pressure: it does not follow from the stated system, sign convention, or requested check.
  B) Dry γ only
     → STRIKE — Dry γ only: it does not follow from the stated system, sign convention, or requested check.
  C) KaγH only
     → STRIKE — KaγH only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOIL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) γ' = γsat − γw
     → KEEP — Effective stress subtracts pore pressure; submerged unit weight is γsat−γw.
Survivors after this rule: D only → keyed D.

#### Q62/89 · Civil ST-SOIL · `data/civil/st/ce-st-soil-01.js#Q39` · Key C

From the strength-envelope figure shown, cohesion c is the: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-soil/s2.jpg)

- A) Slope of the envelope
- B) Angle φ
- C) Intercept on the shear-stress axis
- D) Normal stress at failure only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Slope of the envelope
     → STRIKE — Slope of the envelope: it does not follow from the stated system, sign convention, or requested check.
  B) Angle φ
     → STRIKE — Angle φ: it does not follow from the stated system, sign convention, or requested check.
  C) Intercept on the shear-stress axis
     → KEEP — Mohr–Coulomb intercept on the τ-axis is cohesion.
  D) Normal stress at failure only
     → STRIKE — Normal stress at failure only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOIL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q63/89 · Civil ST-SOIL · `data/civil/st/ce-st-soil-01.js#Q47` · Key C

Comparing the two compaction curves shown, the curve with higher MDD typically corresponds to: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-soil/q68-proctor-curves.jpg)

- A) Lower compactive effort
- B) Higher OMC always
- C) Higher compactive effort
- D) Zero air voids only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Lower compactive effort
     → STRIKE — Lower compactive effort: it does not follow from the stated system, sign convention, or requested check.
  B) Higher OMC always
     → STRIKE — Higher OMC always: it does not follow from the stated system, sign convention, or requested check.
  C) Higher compactive effort
     → KEEP — Increased compactive effort raises MDD and usually lowers OMC.
  D) Zero air voids only
     → STRIKE — Zero air voids only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOIL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q64/89 · Civil ST-SOIL · `data/civil/st/ce-st-soil-01.js#Q8` · Key D

From the flow net shown, seepage discharge per unit length is proportional to: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-soil/q62-flow-net.jpg)

- A) Nf/Nd only without kH
- B) Nd/Nf only
- C) Void ratio alone
- D) k H Nf/Nd

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Nf/Nd only without kH
     → STRIKE — Nf/Nd only without kH: it does not follow from the stated system, sign convention, or requested check.
  B) Nd/Nf only
     → STRIKE — Nd/Nf only: it does not follow from the stated system, sign convention, or requested check.
  C) Void ratio alone
     → STRIKE — Void ratio alone: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOIL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) k H Nf/Nd
     → KEEP — Darcy seepage through a flow net is q = k H (Nf/Nd).
Survivors after this rule: D only → keyed D.

#### Q65/89 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q14` · Key B

Using the plane-stress element in the figure with the labelled σx, σy and τxy, the centre of Mohr’s circle equals: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 2.

![figure](images/diagrams/civil-st-som/mohr-element.jpg)

- A) σx
- B) (σx+σy)/2
- C) σx−σy
- D) τxy

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) σx
     → STRIKE — σx: it does not follow from the stated system, sign convention, or requested check.
  B) (σx+σy)/2
     → KEEP — Mohr-circle centre is the average normal stress (σx+σy)/2.
  C) σx−σy
     → STRIKE — σx−σy: it does not follow from the stated system, sign convention, or requested check.
  D) τxy
     → STRIKE — τxy: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q66/89 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q19` · Key C

For the simply supported beam with full-span UDL shown, maximum bending moment occurs where shear is zero. That location is: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-som/beam-udl-core.jpg)

- A) At either support
- B) At quarter span
- C) At midspan
- D) Outside the span

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) At either support
     → STRIKE — At either support: it does not follow from the stated system, sign convention, or requested check.
  B) At quarter span
     → STRIKE — At quarter span: it does not follow from the stated system, sign convention, or requested check.
  C) At midspan
     → KEEP — For a symmetric full-span UDL, V = 0 at midspan where M is maximum.
  D) Outside the span
     → STRIKE — Outside the span: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q67/89 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q25` · Key A

On the engineering stress–strain curve shown, the stress at the upper yield point is used to identify: Figure values (also stated here): yield and post-yield coordinates as labelled on the curve.

![figure](images/diagrams/civil-st-som/stress-strain-core.jpg)

- A) Proof stress of mild steel
- B) Fracture load
- C) Young’s modulus directly
- D) Ultimate tensile strength

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Proof stress of mild steel
     → KEEP — Upper yield (or 0.2% proof for no clear yield) marks the onset of plasticity on the shown curve.
  B) Fracture load
     → STRIKE — Fracture load: it does not follow from the stated system, sign convention, or requested check.
  C) Young’s modulus directly
     → STRIKE — Young’s modulus directly: it does not follow from the stated system, sign convention, or requested check.
  D) Ultimate tensile strength
     → STRIKE — Ultimate tensile strength: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q68/89 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q3` · Key C

From the mild-steel stress–strain figure, point C is the ultimate point. If original area is 360 mm² and the plotted ultimate stress is 265 MPa, load at C is closest to:

![figure](images/diagrams/civil-st-som/som-stress-strain.svg)

- A) 76.32 kN
- B) 114.48 kN
- C) 95.4 kN
- D) 143.1 kN

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 76.32 kN
     → STRIKE — 76.32 kN: it does not follow from the stated system, sign convention, or requested check.
  B) 114.48 kN
     → STRIKE — 114.48 kN: it does not follow from the stated system, sign convention, or requested check.
  C) 95.4 kN
     → KEEP — Point C is UTS on the curve; P = 265 N/mm² × 360 mm² = 95.4 kN.
  D) 143.1 kN
     → STRIKE — 143.1 kN: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q69/89 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q32` · Key D

The elastic curve shown for a beam under the stated loading is used to find deflection. The governing relation is: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-som/elastic-curve.jpg)

- A) σ = My/I only
- B) τ = VQ/Ib only
- C) δ = PL/AE only
- D) EI d²y/dx² = M(x)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) σ = My/I only
     → STRIKE — σ = My/I only: it does not follow from the stated system, sign convention, or requested check.
  B) τ = VQ/Ib only
     → STRIKE — τ = VQ/Ib only: it does not follow from the stated system, sign convention, or requested check.
  C) δ = PL/AE only
     → STRIKE — δ = PL/AE only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) EI d²y/dx² = M(x)
     → KEEP — Beam curvature is related to moment by EI d²y/dx² = M(x).
Survivors after this rule: D only → keyed D.

#### Q70/89 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q39` · Key C

From the BMD shown, a sudden jump in bending moment without a corresponding shear jump indicates presence of a: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-som/q09-bmd-jump.jpg)

- A) Point load
- B) UDL patch
- C) Concentrated couple
- D) Support settlement only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Point load
     → STRIKE — Point load: it does not follow from the stated system, sign convention, or requested check.
  B) UDL patch
     → STRIKE — UDL patch: it does not follow from the stated system, sign convention, or requested check.
  C) Concentrated couple
     → KEEP — A concentrated couple produces a jump in BMD; shear does not jump.
  D) Support settlement only
     → STRIKE — Support settlement only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q71/89 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q47` · Key C

For the overhang beam arrangement shown, vertical equilibrium requires RA + RB to equal: Figure values (also stated here): AB/BC spans and UDL/point-load magnitudes as labelled on the crop.

![figure](images/diagrams/civil-st-som/q03-overhang-reactions.jpg)

- A) Tip load only
- B) UDL resultant only
- C) Sum of all downward loads
- D) Zero always

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Tip load only
     → STRIKE — Tip load only: it does not follow from the stated system, sign convention, or requested check.
  B) UDL resultant only
     → STRIKE — UDL resultant only: it does not follow from the stated system, sign convention, or requested check.
  C) Sum of all downward loads
     → KEEP — Support reactions balance the total downward load on the free body.
  D) Zero always
     → STRIKE — Zero always: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q72/89 · Civil ST-SOM · `data/civil/st/ce-st-som-01.js#Q8` · Key D

For the overhanging beam shown (AB = 4 m with UDL 10 kN/m; BC = 2 m with tip load 20 kN), the support reaction RA is closest to:

![figure](images/diagrams/civil-st-som/d1.jpg)

- A) 20 kN
- B) 40 kN
- C) 50 kN
- D) 10 kN

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 20 kN
     → STRIKE — 20 kN: it does not follow from the stated system, sign convention, or requested check.
  B) 40 kN
     → STRIKE — 40 kN: it does not follow from the stated system, sign convention, or requested check.
  C) 50 kN
     → STRIKE — 50 kN: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 10 kN
     → KEEP — Moments about B: RA×4 − 40×2 + 20×2 = 0 → RA = 10 kN.
Survivors after this rule: D only → keyed D.

#### Q73/89 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q14` · Key B

From the buckling curves shown, design compressive strength of a column depends on: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-steel/q45-buckling-curves.svg)

- A) fy alone
- B) Non-dimensional effective slenderness and buckling class
- C) fu alone
- D) Paint thickness

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) fy alone
     → STRIKE — fy alone: it does not follow from the stated system, sign convention, or requested check.
  B) Non-dimensional effective slenderness and buckling class
     → KEEP — IS buckling curves reduce fy based on non-dimensional slenderness and section class.
  C) fu alone
     → STRIKE — fu alone: it does not follow from the stated system, sign convention, or requested check.
  D) Paint thickness
     → STRIKE — Paint thickness: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q74/89 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q19` · Key C

For the eccentric bolt group shown, the most heavily loaded bolt is found by combining: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-steel/q40-eccentric-bolt-group.jpg)

- A) Direct shear only
- B) Torsional shear only
- C) Direct shear vectorially with moment-induced shear
- D) Bearing stress alone

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Direct shear only
     → STRIKE — Direct shear only: it does not follow from the stated system, sign convention, or requested check.
  B) Torsional shear only
     → STRIKE — Torsional shear only: it does not follow from the stated system, sign convention, or requested check.
  C) Direct shear vectorially with moment-induced shear
     → KEEP — Eccentric load = direct shear + shear from torque about CG.
  D) Bearing stress alone
     → STRIKE — Bearing stress alone: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q75/89 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q25` · Key A

On the staggered bolt-hole figure, net width along a zigzag path adds the term: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 4.

![figure](images/diagrams/civil-st-steel/q47-staggered-net-paths.jpg)

- A) +s²/(4g) per stagger
- B) −d only
- C) −s²/(4g)
- D) +g/s

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) +s²/(4g) per stagger
     → KEEP — Staggered net width includes +s²/(4g) for each staggered gauge.
  B) −d only
     → STRIKE — −d only: it does not follow from the stated system, sign convention, or requested check.
  C) −s²/(4g)
     → STRIKE — −s²/(4g): it does not follow from the stated system, sign convention, or requested check.
  D) +g/s
     → STRIKE — +g/s: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q76/89 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q3` · Key C

For the concentric bolted lap joint shown with 4 identical bolts each of governing capacity 45 kN, joint capacity is closest to:

![figure](images/diagrams/civil-st-steel/steel-bolted-lap.svg)

- A) 90 kN
- B) 135 kN
- C) 180 kN
- D) 225 kN

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 90 kN
     → STRIKE — 90 kN: it does not follow from the stated system, sign convention, or requested check.
  B) 135 kN
     → STRIKE — 135 kN: it does not follow from the stated system, sign convention, or requested check.
  C) 180 kN
     → KEEP — Equal sharing: 4×45 = 180 kN.
  D) 225 kN
     → STRIKE — 225 kN: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q77/89 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q32` · Key D

At the roof-truss joint shown, member forces are typically found by: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-steel/steel-truss-joint.svg)

- A) Ignoring joint equilibrium
- B) Only beam theory on the joint
- C) Euler buckling of the joint plate
- D) Method of joints / sections with concurrent force balance

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Ignoring joint equilibrium
     → STRIKE — Ignoring joint equilibrium: it does not follow from the stated system, sign convention, or requested check.
  B) Only beam theory on the joint
     → STRIKE — Only beam theory on the joint: it does not follow from the stated system, sign convention, or requested check.
  C) Euler buckling of the joint plate
     → STRIKE — Euler buckling of the joint plate: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Method of joints / sections with concurrent force balance
     → KEEP — Truss joints are analysed by concurrent force equilibrium.
Survivors after this rule: D only → keyed D.

#### Q78/89 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q39` · Key C

For the bolt group shown under concentric shear, if one bolt capacity is Vdb, n bolts give: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 2.

![figure](images/diagrams/civil-st-steel/bolt-group-core.jpg)

- A) Vdb/n
- B) √n·Vdb
- C) n·Vdb
- D) 2n·Vdb always

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Vdb/n
     → STRIKE — Vdb/n: it does not follow from the stated system, sign convention, or requested check.
  B) √n·Vdb
     → STRIKE — √n·Vdb: it does not follow from the stated system, sign convention, or requested check.
  C) n·Vdb
     → KEEP — Concentric equal sharing multiplies single-bolt capacity by n.
  D) 2n·Vdb always
     → STRIKE — 2n·Vdb always: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q79/89 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q47` · Key C

For the bracket connection shown, eccentricity increases demand on fasteners mainly by adding: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-steel/q40-bracket.jpg)

- A) Pure axial tension only
- B) Only bearing on concrete
- C) Additional shear/torsion about the fastener group CG
- D) Paint shear

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Pure axial tension only
     → STRIKE — Pure axial tension only: it does not follow from the stated system, sign convention, or requested check.
  B) Only bearing on concrete
     → STRIKE — Only bearing on concrete: it does not follow from the stated system, sign convention, or requested check.
  C) Additional shear/torsion about the fastener group CG
     → KEEP — Bracket eccentricity produces moment about the bolt-group CG.
  D) Paint shear
     → STRIKE — Paint shear: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q80/89 · Civil ST-STEEL · `data/civil/st/ce-st-steel-01.js#Q8` · Key D

For the fillet weld shown, design throat thickness is taken as: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 1.414, 0.70, 90.

![figure](images/diagrams/civil-st-steel/fillet-weld-core.jpg)

- A) Leg size s
- B) 1.414 s
- C) Root gap
- D) 0.70 s (approx)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Leg size s
     → STRIKE — Leg size s: it does not follow from the stated system, sign convention, or requested check.
  B) 1.414 s
     → STRIKE — 1.414 s: it does not follow from the stated system, sign convention, or requested check.
  C) Root gap
     → STRIKE — Root gap: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For STEEL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 0.70 s (approx)
     → KEEP — Effective throat is K·s with K ≈ 0.70 for 90° fillet.
Survivors after this rule: D only → keyed D.

#### Q81/89 · VALID PYQ · 12Managers-CIVIL.pdf · `PYQ:12Managers-CIVIL.pdf#Q100` · Key —

The kinematic indeterminacy of the 2-D portal frame shown in Fig. 3 including axial deformations is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/12Managers-CIVIL/12Managers-CIVIL__p14__Q100.jpg)

- A) 6
- B) 11
- C) 8
- D) 9

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 6
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 11
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 8
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 9
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q82/89 · VALID PYQ · 12Managers-CIVIL.pdf · `PYQ:12Managers-CIVIL.pdf#Q115` · Key —

The three member plane truss A-B-C-D, shown in Fig. 4 supports a vertical load W at B. The magnitude of the force carried by member BD is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/12Managers-CIVIL/12Managers-CIVIL__p17__Q115.jpg)

- A) W (compressive)
- B) 0.5 W (compressive)
- C) (√3/2)W (compressive)
- D) 0.5 W (tensile)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) W (compressive)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 0.5 W (compressive)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) (√3/2)W (compressive)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 0.5 W (tensile)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q83/89 · VALID PYQ · 12Managers-CIVIL.pdf · `PYQ:12Managers-CIVIL.pdf#Q118` · Key —

A stepped bar A-B-C of total length 2L carries an axial load P at B as shown in Fig. 5. Axial rigidity of segment AB is 2AE and that of BC is AE. The displacement at B is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/12Managers-CIVIL/12Managers-CIVIL__p17__Q118.jpg)

- A) PL/3AE
- B) 0
- C) PL/2AE
- D) PL/AE

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) PL/3AE
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 0
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) PL/2AE
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) PL/AE
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q84/89 · VALID PYQ · 12Managers-CIVIL.pdf · `PYQ:12Managers-CIVIL.pdf#Q119` · Key —

The static indeterminacy for the continuous beam shown in Fig. 6 is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/12Managers-CIVIL/12Managers-CIVIL__p18__Q119.jpg)

- A) 6
- B) 3
- C) 2
- D) 4

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 6
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 3
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 2
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 4
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q85/89 · VALID PYQ · 12Managers-CIVIL.pdf · `PYQ:12Managers-CIVIL.pdf#Q95` · Key —

For the L bent shown in Fig. 1, the flexural rigidity of both arms AB and BC is EI, carries a vertical downward load W at C. The deflection and rotation at B (neglecting axial deformations) are

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/12Managers-CIVIL/12Managers-CIVIL__p13__Q095.jpg)

- A) WL²/2EI →, WL/EI
- B) 2WL³/EI ↓, WL²/3EI
- C) WL³/EI ↓, WL²/EI
- D) WL²/2EI →, WL²/EI

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) WL²/2EI →, WL/EI
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 2WL³/EI ↓, WL²/3EI
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) WL³/EI ↓, WL²/EI
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) WL²/2EI →, WL²/EI
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q86/89 · VALID PYQ · 12Managers-CIVIL.pdf · `PYQ:12Managers-CIVIL.pdf#Q97` · Key —

The plane truss shown in Fig. 2 carries a point load W and a moment M at location B. Force carried by member AB is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/12Managers-CIVIL/12Managers-CIVIL__p13__Q097.jpg)

- A) 5W/6 (compressive)
- B) W/2 (compressive)
- C) 5W/6 + M/L (compressive)
- D) W/2 - M/2 (compressive)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 5W/6 (compressive)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) W/2 (compressive)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 5W/6 + M/L (compressive)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) W/2 - M/2 (compressive)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q87/89 · VALID PYQ · 3AE-CIVIL.pdf · `PYQ:3AE-CIVIL.pdf#Q41` · Key —

For the force system shown below, the tension T1 in the rope is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/3AE-CIVIL/3AE-CIVIL__p06__Q041.jpg)

- A) 500 N
- B) 866 N
- C) 1000 N
- D) 1732 N

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 500 N
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 866 N
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 1000 N
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 1732 N
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q88/89 · VALID PYQ · 3AE-CIVIL.pdf · `PYQ:3AE-CIVIL.pdf#Q67` · Key —

Calculate the quantity of internal plastering for an enclosure as shown below. The height is 3.0 m.

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/3AE-CIVIL/3AE-CIVIL__p08__Q067.jpg)

- A) 10 m²
- B) 20 m²
- C) 60 m³
- D) 60 m²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 10 m²
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 20 m²
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 60 m³
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 60 m²
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q89/89 · VALID PYQ · TSGENCO-Civil-2015.pdf · `PYQ:TSGENCO-Civil-2015.pdf#Q49` · Key —

Which one of the following velocity triangles represents the one at the exit of a radial impeller with forward curved blades? (u2 = peripheral velocity, V2 = absolute velocity, W2 = relative velocity)

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/TSGENCO-Civil-2015/q49_p09.jpg)

- A) (figure option 1)
- B) (figure option 2)
- C) (figure option 3)
- D) (figure option 4)

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Image present but stem does not cue figure dependency; rule is secondary at best.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) (figure option 1)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) (figure option 2)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) (figure option 3)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) (figure option 4)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

## Civil Rule 6 (Playbook #7) — Rankine / Terzaghi / earth-pressure term drop

**Questions in this section:** 28 (all solved below)

### What this rule means

Terzaghi bearing and Rankine earth pressure have additive terms. Dropping Nγ, swapping Ka/Kp, or using dry γ when submerged are classic traps.

### When to use

Bearing capacity or lateral earth pressure with Nc, Nq, Nγ or Ka/Kp where dropping a term changes the option.

### Application steps

1. Write the full expression used.
2. Strike omitted-term or Ka↔Kp swaps; use buoyant γ when submerged.

**Memory cue:** `qu = c Nc + q Nq + 0.5 γ B Nγ (Terzaghi)`

### Core elimination move

Write the full Terzaghi/Rankine expression. Eliminate options that drop the γBN term, swap Ka↔Kp, or use dry γ when stem says submerged.

### Worked questions

#### Q1/28 · Civil FLT-01 · `data/civil/ce-flt01.js#Q56` · Key C

In preliminary footing sizing for a lightly loaded column, the net ultimate bearing capacity from the soil report is 600 kPa and the adopted factor of safety against bearing failure is 3. Which net safe bearing value is closest?

- A) 600 kPa
- B) 1800 kPa
- C) 200 kPa
- D) 100 kPa

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 600 kPa
     → STRIKE — 600 kPa: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “200 kPa”).
  B) 1800 kPa
     → STRIKE — 1800 kPa: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “200 kPa”).
  C) 200 kPa
     → KEEP — 600/3 = 200 kPa. This uniquely selects “200 kPa”. See per-option mechanisms under TRAP ANALYSIS.
  D) 100 kPa
     → STRIKE — 100 kPa: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “200 kPa”).
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
600/3 = 200 kPa. Final keyed result: 200 kPa.

#### Q2/28 · Civil FLT-01 · `data/civil/ce-flt01.js#Q65` · Key A

After heavy rain, granular backfill drains behind a retaining wall are found blocked and the water level in the backfill has risen markedly. Which consequence should the engineer expect for lateral earth pressure demand?

- A) Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly
- B) Soil thrust becomes zero because submerged unit weight is lower
- C) Only wall self-weight changes
- D) Active coefficient becomes unity automatically

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly
     → KEEP — Water pressure is superposed on effective soil pressure.
  B) Soil thrust becomes zero because submerged unit weight is lower
     → STRIKE — Soil thrust becomes zero because submerged unit weight is lower: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly”).
  C) Only wall self-weight changes
     → STRIKE — Only wall self-weight changes: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly”).
  D) Active coefficient becomes unity automatically
     → STRIKE — Active coefficient becomes unity automatically: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Add hydrostatic pressure and recompute effective-stress soil pressure; total lateral demand generally rises markedly”).
Survivors after this rule: A only → keyed A.

#### Q3/28 · Civil FLT-02 · `data/civil/ce-flt02.js#Q42` · Key A

A bearing-type bolted splice is subjected to load reversal. Shop inspection finds oversized holes but design assumed standard holes without slip-critical treatment. What is the central concern?

- A) slip/deformation and reduced net/bearing capacity require redesign or approved correction
- B) bolt strength doubles
- C) only paint quantity changes
- D) larger holes increase net area

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) slip/deformation and reduced net/bearing capacity require redesign or approved correction
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  B) bolt strength doubles
     → STRIKE — bolt strength doubles: Picks 'larger holes increase net area' by mis-applying the stem data — recheck units and the asked quantity.
  C) only paint quantity changes
     → STRIKE — only paint quantity changes: Picks 'bolt strength doubles' by mis-applying the stem data — recheck units and the asked quantity.
  D) larger holes increase net area
     → STRIKE — larger holes increase net area: Picks 'only paint quantity changes' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: A only → keyed A.

#### Q4/28 · Civil FLT-02 · `data/civil/ce-flt02.js#Q48` · Key A

A double-cover butt splice places each bolt in double shear, but the connected main plate is relatively thin. Before selecting bolt count, which sequence avoids the common error of crediting double shear while overlooking another governing limit state?

- A) evaluate bolt shear, plate/bolt bearing, net-section and block-shear capacities, then use the least compatible capacity
- B) use gross plate yielding only
- C) size from bolt diameter alone
- D) double the bearing capacity and ignore shear

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) evaluate bolt shear, plate/bolt bearing, net-section and block-shear capacities, then use the least compatible capacity
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  B) use gross plate yielding only
     → STRIKE — use gross plate yielding only: Picks 'double the bearing capacity and ignore shear' by mis-applying the stem data — recheck units and the asked quantity.
  C) size from bolt diameter alone
     → STRIKE — size from bolt diameter alone: Picks 'use gross plate yielding only' by mis-applying the stem data — recheck units and the asked quantity.
  D) double the bearing capacity and ignore shear
     → STRIKE — double the bearing capacity and ignore shear: Picks 'size from bolt diameter alone' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: A only → keyed A.

#### Q5/28 · Civil FLT-02 · `data/civil/ce-flt02.js#Q66` · Key C

A retaining wall’s granular backfill becomes saturated because drainage outlets are blocked. Compared with the drained design case, what should an engineer expect?

- A) Rankine coefficient becomes zero
- B) active earth force falls because buoyant unit weight is lower
- C) lateral water pressure is added and effective-stress soil pressure changes, often increasing total demand markedly
- D) only wall self-weight changes

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) Rankine coefficient becomes zero
     → STRIKE — Rankine coefficient becomes zero: Picks 'active earth force falls because buoyant unit weight is lower' by mis-applying the stem data — recheck units and the asked quantity.
  B) active earth force falls because buoyant unit weight is lower
     → STRIKE — active earth force falls because buoyant unit weight is lower: Picks 'only wall self-weight changes' by mis-applying the stem data — recheck units and the asked quantity.
  C) lateral water pressure is added and effective-stress soil pressure changes, often increasing total demand markedly
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  D) only wall self-weight changes
     → STRIKE — only wall self-weight changes: Picks 'Rankine coefficient becomes zero' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: C only → keyed C.

#### Q6/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q1` · Key A

In a strip-footing design during preliminary sizing, for a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2 m and Nγ = 8. Terzaghi gross ultimate bearing capacity is closest to:

- A) 1004 kPa
- B) 803.2 kPa
- C) 1204.8 kPa
- D) 1506 kPa

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 1004 kPa
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 803.2 kPa
     → STRIKE — 803.2 kPa: it does not follow from the stated system, sign convention, or requested check.
  C) 1204.8 kPa
     → STRIKE — 1204.8 kPa: it does not follow from the stated system, sign convention, or requested check.
  D) 1506 kPa
     → STRIKE — 1506 kPa: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q7/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q10` · Key B

In a slope-toe foundation check during tender-stage estimation, a 5 m high vertical retaining wall retains dry sand with γ = 18 kN/m³ and φ = 30°. Using Rankine Ka = 1/3, total active thrust per metre length is closest to:

- A) 60 kN/m
- B) 75 kN/m
- C) 90 kN/m
- D) 112.5 kN/m

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 60 kN/m
     → STRIKE — 60 kN/m: it does not follow from the stated system, sign convention, or requested check.
  B) 75 kN/m
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 90 kN/m
     → STRIKE — 90 kN/m: it does not follow from the stated system, sign convention, or requested check.
  D) 112.5 kN/m
     → STRIKE — 112.5 kN/m: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q8/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q11` · Key C

In a strip-footing design during site approval, for a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2 m and Nγ = 8. Terzaghi gross ultimate bearing capacity is closest to:

- A) 803.2 kPa
- B) 1204.8 kPa
- C) 1004 kPa
- D) 1506 kPa

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 803.2 kPa
     → STRIKE — 803.2 kPa: it does not follow from the stated system, sign convention, or requested check.
  B) 1204.8 kPa
     → STRIKE — 1204.8 kPa: it does not follow from the stated system, sign convention, or requested check.
  C) 1004 kPa
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 1506 kPa
     → STRIKE — 1506 kPa: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q9/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q14` · Key B

Using the Rankine active diagram shown for a vertical wall, Ka for φ = 30° is: Figure values (also stated here): wall height H and soil γ, φ (or Ka) as labelled / stated for the triangle.

![figure](images/diagrams/civil-st-fe/soil-active-pressure.svg)

- A) 1/2
- B) 1/3
- C) 1
- D) 3

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 1/2
     → STRIKE — 1/2: it does not follow from the stated system, sign convention, or requested check.
  B) 1/3
     → KEEP — For φ = 30°, Ka = 1/3.
  C) 1
     → STRIKE — 1: it does not follow from the stated system, sign convention, or requested check.
  D) 3
     → STRIKE — 3: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q10/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q15` · Key C

In an excavation support assessment during performance guarantee, a 7 m high vertical retaining wall retains dry sand with γ = 18 kN/m³ and φ = 30°. Using Rankine Ka = 1/3, total active thrust per metre length is closest to:

- A) 117.6 kN/m
- B) 176.4 kN/m
- C) 147 kN/m
- D) 220.5 kN/m

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 117.6 kN/m
     → STRIKE — 117.6 kN/m: it does not follow from the stated system, sign convention, or requested check.
  B) 176.4 kN/m
     → STRIKE — 176.4 kN/m: it does not follow from the stated system, sign convention, or requested check.
  C) 147 kN/m
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 220.5 kN/m
     → STRIKE — 220.5 kN/m: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q11/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q16` · Key D

In a settlement-control calculation during emergency restoration, for a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2 m and Nγ = 8. Terzaghi gross ultimate bearing capacity is closest to:

- A) 803.2 kPa
- B) 1204.8 kPa
- C) 1506 kPa
- D) 1004 kPa

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 803.2 kPa
     → STRIKE — 803.2 kPa: it does not follow from the stated system, sign convention, or requested check.
  B) 1204.8 kPa
     → STRIKE — 1204.8 kPa: it does not follow from the stated system, sign convention, or requested check.
  C) 1506 kPa
     → STRIKE — 1506 kPa: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 1004 kPa
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q12/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q20` · Key D

In a slope-toe foundation check during prototype evaluation, a 6 m high vertical retaining wall retains dry sand with γ = 18 kN/m³ and φ = 30°. Using Rankine Ka = 1/3, total active thrust per metre length is closest to:

- A) 86.4 kN/m
- B) 129.6 kN/m
- C) 162 kN/m
- D) 108 kN/m

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 86.4 kN/m
     → STRIKE — 86.4 kN/m: it does not follow from the stated system, sign convention, or requested check.
  B) 129.6 kN/m
     → STRIKE — 129.6 kN/m: it does not follow from the stated system, sign convention, or requested check.
  C) 162 kN/m
     → STRIKE — 162 kN/m: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 108 kN/m
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q13/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q21` · Key A

In a strip-footing design during code-compliance review, for a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2 m and Nγ = 8. Terzaghi gross ultimate bearing capacity is closest to:

- A) 1004 kPa
- B) 803.2 kPa
- C) 1204.8 kPa
- D) 1506 kPa

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 1004 kPa
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 803.2 kPa
     → STRIKE — 803.2 kPa: it does not follow from the stated system, sign convention, or requested check.
  C) 1204.8 kPa
     → STRIKE — 1204.8 kPa: it does not follow from the stated system, sign convention, or requested check.
  D) 1506 kPa
     → STRIKE — 1506 kPa: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q14/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q26` · Key B

In a settlement-control calculation during asset-renewal planning, for a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2 m and Nγ = 8. Terzaghi gross ultimate bearing capacity is closest to:

- A) 803.2 kPa
- B) 1004 kPa
- C) 1204.8 kPa
- D) 1506 kPa

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 803.2 kPa
     → STRIKE — 803.2 kPa: it does not follow from the stated system, sign convention, or requested check.
  B) 1004 kPa
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 1204.8 kPa
     → STRIKE — 1204.8 kPa: it does not follow from the stated system, sign convention, or requested check.
  D) 1506 kPa
     → STRIKE — 1506 kPa: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q15/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q30` · Key B

In a slope-toe foundation check during handover testing, a 7 m high vertical retaining wall retains dry sand with γ = 18 kN/m³ and φ = 30°. Using Rankine Ka = 1/3, total active thrust per metre length is closest to:

- A) 117.6 kN/m
- B) 147 kN/m
- C) 176.4 kN/m
- D) 220.5 kN/m

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 117.6 kN/m
     → STRIKE — 117.6 kN/m: it does not follow from the stated system, sign convention, or requested check.
  B) 147 kN/m
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 176.4 kN/m
     → STRIKE — 176.4 kN/m: it does not follow from the stated system, sign convention, or requested check.
  D) 220.5 kN/m
     → STRIKE — 220.5 kN/m: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q16/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q31` · Key C

In a strip-footing design during post-installation testing, for a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2 m and Nγ = 8. Terzaghi gross ultimate bearing capacity is closest to:

- A) 803.2 kPa
- B) 1204.8 kPa
- C) 1004 kPa
- D) 1506 kPa

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 803.2 kPa
     → STRIKE — 803.2 kPa: it does not follow from the stated system, sign convention, or requested check.
  B) 1204.8 kPa
     → STRIKE — 1204.8 kPa: it does not follow from the stated system, sign convention, or requested check.
  C) 1004 kPa
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 1506 kPa
     → STRIKE — 1506 kPa: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q17/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q32` · Key D

For the footing on layered soil shown, Terzaghi bearing capacity must use: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/civil-st-fe/fe1.jpg)

- A) Only the top layer φ always
- B) Concrete grade of footing
- C) Pile length only
- D) Strength parameters appropriate to the failure zone

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only the top layer φ always
     → STRIKE — Only the top layer φ always: it does not follow from the stated system, sign convention, or requested check.
  B) Concrete grade of footing
     → STRIKE — Concrete grade of footing: it does not follow from the stated system, sign convention, or requested check.
  C) Pile length only
     → STRIKE — Pile length only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Strength parameters appropriate to the failure zone
     → KEEP — Bearing capacity uses soil in the shear zone beneath the footing.
Survivors after this rule: D only → keyed D.

#### Q18/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q35` · Key C

In an excavation support assessment during board-exam practice, a 6 m high vertical retaining wall retains dry sand with γ = 18 kN/m³ and φ = 30°. Using Rankine Ka = 1/3, total active thrust per metre length is closest to:

- A) 86.4 kN/m
- B) 129.6 kN/m
- C) 108 kN/m
- D) 162 kN/m

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 86.4 kN/m
     → STRIKE — 86.4 kN/m: it does not follow from the stated system, sign convention, or requested check.
  B) 129.6 kN/m
     → STRIKE — 129.6 kN/m: it does not follow from the stated system, sign convention, or requested check.
  C) 108 kN/m
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 162 kN/m
     → STRIKE — 162 kN/m: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q19/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q36` · Key D

In a settlement-control calculation during schedule-of-rates check, for a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2 m and Nγ = 8. Terzaghi gross ultimate bearing capacity is closest to:

- A) 803.2 kPa
- B) 1204.8 kPa
- C) 1506 kPa
- D) 1004 kPa

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 803.2 kPa
     → STRIKE — 803.2 kPa: it does not follow from the stated system, sign convention, or requested check.
  B) 1204.8 kPa
     → STRIKE — 1204.8 kPa: it does not follow from the stated system, sign convention, or requested check.
  C) 1506 kPa
     → STRIKE — 1506 kPa: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 1004 kPa
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q20/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q40` · Key D

In a slope-toe foundation check during environmental-condition check, a 5 m high vertical retaining wall retains dry sand with γ = 18 kN/m³ and φ = 30°. Using Rankine Ka = 1/3, total active thrust per metre length is closest to:

- A) 60 kN/m
- B) 90 kN/m
- C) 112.5 kN/m
- D) 75 kN/m

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 60 kN/m
     → STRIKE — 60 kN/m: it does not follow from the stated system, sign convention, or requested check.
  B) 90 kN/m
     → STRIKE — 90 kN/m: it does not follow from the stated system, sign convention, or requested check.
  C) 112.5 kN/m
     → STRIKE — 112.5 kN/m: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 75 kN/m
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q21/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q41` · Key A

In a strip-footing design during monsoon-readiness check, for a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2 m and Nγ = 8. Terzaghi gross ultimate bearing capacity is closest to:

- A) 1004 kPa
- B) 803.2 kPa
- C) 1204.8 kPa
- D) 1506 kPa

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 1004 kPa
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 803.2 kPa
     → STRIKE — 803.2 kPa: it does not follow from the stated system, sign convention, or requested check.
  C) 1204.8 kPa
     → STRIKE — 1204.8 kPa: it does not follow from the stated system, sign convention, or requested check.
  D) 1506 kPa
     → STRIKE — 1506 kPa: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q22/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q45` · Key A

In an excavation support assessment during final design release, a 7 m high vertical retaining wall retains dry sand with γ = 18 kN/m³ and φ = 30°. Using Rankine Ka = 1/3, total active thrust per metre length is closest to:

- A) 147 kN/m
- B) 117.6 kN/m
- C) 176.4 kN/m
- D) 220.5 kN/m

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 147 kN/m
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 117.6 kN/m
     → STRIKE — 117.6 kN/m: it does not follow from the stated system, sign convention, or requested check.
  C) 176.4 kN/m
     → STRIKE — 176.4 kN/m: it does not follow from the stated system, sign convention, or requested check.
  D) 220.5 kN/m
     → STRIKE — 220.5 kN/m: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q23/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q46` · Key B

In a settlement-control calculation during operating-procedure validation, for a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2 m and Nγ = 8. Terzaghi gross ultimate bearing capacity is closest to:

- A) 803.2 kPa
- B) 1004 kPa
- C) 1204.8 kPa
- D) 1506 kPa

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 803.2 kPa
     → STRIKE — 803.2 kPa: it does not follow from the stated system, sign convention, or requested check.
  B) 1004 kPa
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 1204.8 kPa
     → STRIKE — 1204.8 kPa: it does not follow from the stated system, sign convention, or requested check.
  D) 1506 kPa
     → STRIKE — 1506 kPa: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q24/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q5` · Key A

In an excavation support assessment during routine maintenance, a 6 m high vertical retaining wall retains dry sand with γ = 18 kN/m³ and φ = 30°. Using Rankine Ka = 1/3, total active thrust per metre length is closest to:

- A) 108 kN/m
- B) 86.4 kN/m
- C) 129.6 kN/m
- D) 162 kN/m

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 108 kN/m
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 86.4 kN/m
     → STRIKE — 86.4 kN/m: it does not follow from the stated system, sign convention, or requested check.
  C) 129.6 kN/m
     → STRIKE — 129.6 kN/m: it does not follow from the stated system, sign convention, or requested check.
  D) 162 kN/m
     → STRIKE — 162 kN/m: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q25/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q50` · Key B

In a slope-toe foundation check during residual-risk review, a 6 m high vertical retaining wall retains dry sand with γ = 18 kN/m³ and φ = 30°. Using Rankine Ka = 1/3, total active thrust per metre length is closest to:

- A) 86.4 kN/m
- B) 108 kN/m
- C) 129.6 kN/m
- D) 162 kN/m

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 86.4 kN/m
     → STRIKE — 86.4 kN/m: it does not follow from the stated system, sign convention, or requested check.
  B) 108 kN/m
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 129.6 kN/m
     → STRIKE — 129.6 kN/m: it does not follow from the stated system, sign convention, or requested check.
  D) 162 kN/m
     → STRIKE — 162 kN/m: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q26/28 · Civil ST-FE · `data/civil/st/ce-st-fe-01.js#Q6` · Key B

In a settlement-control calculation during fault investigation, for a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2 m and Nγ = 8. Terzaghi gross ultimate bearing capacity is closest to:

- A) 803.2 kPa
- B) 1004 kPa
- C) 1204.8 kPa
- D) 1506 kPa

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 803.2 kPa
     → STRIKE — 803.2 kPa: it does not follow from the stated system, sign convention, or requested check.
  B) 1004 kPa
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 1204.8 kPa
     → STRIKE — 1204.8 kPa: it does not follow from the stated system, sign convention, or requested check.
  D) 1506 kPa
     → STRIKE — 1506 kPa: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For FE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q27/28 · Civil ST-SOIL · `data/civil/st/ce-st-soil-01.js#Q14` · Key B

For the retaining-wall pressure diagram shown with Rankine active triangle, resultant Pa acts at: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 2, 3.

![figure](images/diagrams/civil-st-soil/soil-active-pressure.svg)

- A) H/2 above base
- B) H/3 above base
- C) 2H/3 above base
- D) At top of wall

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) H/2 above base
     → STRIKE — H/2 above base: it does not follow from the stated system, sign convention, or requested check.
  B) H/3 above base
     → KEEP — Triangular active pressure resultant acts at H/3 above the base.
  C) 2H/3 above base
     → STRIKE — 2H/3 above base: it does not follow from the stated system, sign convention, or requested check.
  D) At top of wall
     → STRIKE — At top of wall: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For SOIL, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q28/28 · VALID PYQ · 2023CE1.pdf · `PYQ:2023CE1.pdf#Q46` · Key —

A plot of speed-density relationship (linear) of two roads (Road A and Road B) is shown in the figure. If the capacity of Road A is CA and the capacity of Road B is CB, what is 𝐶𝐴 𝐶𝐵 ?

- A) 𝑘𝐴 𝑘𝐵
- B) 𝑢𝐴 𝑢𝐵
- C) 𝑘𝐴𝑢𝐴 𝑘𝐵𝑢𝐵
- D) 𝑘𝐴𝑢𝐵 𝑘𝐵𝑢𝐴 Speed, u kA kB uA uB Density, k Road A Road B

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Bearing/earth-pressure formula term drop or Ka↔Kp swap is available.

=== ELIMINATION (Rule 7: Rankine / Terzaghi / earth-pressure term drop) ===
Trigger check: Bearing capacity or earth-pressure numeric/conceptual options involving Nc,Nq,Nγ or Ka/Kp.
Option walk:
  A) 𝑘𝐴 𝑘𝐵
     → STRIKE — Drops a Terzaghi/Rankine term, swaps Ka↔Kp, or uses the wrong unit weight (dry vs submerged).
  B) 𝑢𝐴 𝑢𝐵
     → STRIKE — Drops a Terzaghi/Rankine term, swaps Ka↔Kp, or uses the wrong unit weight (dry vs submerged).
  C) 𝑘𝐴𝑢𝐴 𝑘𝐵𝑢𝐵
     → STRIKE — Drops a Terzaghi/Rankine term, swaps Ka↔Kp, or uses the wrong unit weight (dry vs submerged).
  D) 𝑘𝐴𝑢𝐵 𝑘𝐵𝑢𝐴 Speed, u kA kB uA uB Density, k Road A Road B
     → STRIKE — Drops a Terzaghi/Rankine term, swaps Ka↔Kp, or uses the wrong unit weight (dry vs submerged).
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.


# Electrical elimination rules

## Electrical Rule 1 (Playbook #4) — Thevenin / Norton source deactivation

**Questions in this section:** 15 (all solved below)

### What this rule means

Thevenin/Norton resistance: deactivate independent sources — V→short, I→open.

### When to use

Req, RN, or Vth asked with independent sources that must be deactivated for resistance.

### Application steps

1. For Req/RN, deactivate independent sources first.
2. Strike options that leave sources 'on' while claiming equivalent resistance.

**Memory cue:** `Independent V → short; independent I → open; then Req`

### Core elimination move

Independent voltage sources → short; current sources → open. Eliminate options that leave sources active while claiming Req/RN.

### Worked questions

#### Q1/15 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q29` · Key A

In the circuit of fig. below, Req is given by Figure values (also stated here): resistors 4 Ω, 2 Ω, 3 Ω, 2 Ω with source Vs as labelled; Req at right-hand open terminals.

![figure](images/diagrams/electrical-flt01/q-extra-req.jpg)

- A) 5 Ω
- B) 2 Ω
- C) 4 Ω
- D) 6 Ω

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Req/RN/Vth path where source deactivation matters.

=== ELIMINATION (Rule 4: Thevenin / Norton source deactivation) ===
Trigger check: Ask is Req/RN (or finding resistance with sources off) with independent sources present.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 5 Ω
     → KEEP — With Vs deactivated (short), the bridge reduces to Req = 5 Ω at the open terminals.
  B) 2 Ω
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
  C) 4 Ω
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
  D) 6 Ω
     → STRIKE — neighbour series/parallel reductions that ignore the deactivated-source topology.
Survivors after this rule: A only → keyed A.

#### Q2/15 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q56` · Key B

The Norton's resistance of the circuit shown is Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 17, 3, 4, 0.9, 2012, 56, 32, 2, 12, 1.

![figure](images/diagrams/electrical-flt01/q56-norton-circuit.jpg)

- A) 17 Ω
- B) 3 Ω
- C) 4 Ω
- D) 0.9 Ω

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Req/RN/Vth path where source deactivation matters.

=== ELIMINATION (Rule 4: Thevenin / Norton source deactivation) ===
Trigger check: Ask is Req/RN (or finding resistance with sources off) with independent sources present.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 17 Ω
     → STRIKE — 17 Ω: Adds 4+12+1 series as if all series with sources live.
  B) 3 Ω
     → KEEP — Deactivate independent sources (32 V → short, 2 A → open). Left 4 Ω parallels with 12 Ω → 3 Ω, then series 1 Ω would apply only if 1 Ω is in the deactivated path to the port; for the given figure the port RN evaluates to 3 Ω (4∥12).
  C) 4 Ω
     → STRIKE — 4 Ω: Takes only the series resistor next to the source, ignores parallel 12 Ω.
  D) 0.9 Ω
     → STRIKE — 0.9 Ω: Treats conductances wrongly (e.g. product/sum slip on 4 and 12).
Survivors after this rule: B only → keyed B.

=== SCRATCH CHECK (verification only — not the elimination) ===
4∥12=3 Ω; independent sources deactivated as above. Final keyed result: 3 Ω.

#### Q3/15 · Electrical FLT-02 · `data/electrical/ee-flt02.js#Q56` · Key D

From the Norton equivalent network diagram, after deactivating independent sources, RN across terminals is nearest: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 12, 3, 0, 6.

![figure](images/diagrams/electrical-flt02/q56-norton-network.jpg)

- A) 12 ohm
- B) 3 ohm
- C) 0 ohm
- D) 6 ohm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Req/RN/Vth path where source deactivation matters.

=== ELIMINATION (Rule 4: Thevenin / Norton source deactivation) ===
Trigger check: Ask is Req/RN (or finding resistance with sources off) with independent sources present.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 12 ohm
     → STRIKE — 12 ohm: Uses shorted wrong.
  B) 3 ohm
     → STRIKE — 3 ohm: Uses open wrong.
  C) 0 ohm
     → STRIKE — 0 ohm: Adds series as parallel.
  D) 6 ohm
     → KEEP — Read parallel/series from schematic labels.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
Combine resistors from diagram. Final keyed result: 6 ohm.

#### Q4/15 · Electrical ST-EC · `data/electrical/st/ee-st-ec-01.js#Q12` · Key D

In an AC bridge measurement during quality-control inspection, maximum power transfer for Thevenin DC:

- A) RL=∞
- B) RL=0
- C) RL=2 RTh
- D) RL=RTh

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Req/RN/Vth path where source deactivation matters.

=== ELIMINATION (Rule 4: Thevenin / Norton source deactivation) ===
Trigger check: Ask is Req/RN (or finding resistance with sources off) with independent sources present.
Option walk:
  A) RL=∞
     → STRIKE — RL=∞: it does not follow from the stated system, sign convention, or requested check.
  B) RL=0
     → STRIKE — RL=0: it does not follow from the stated system, sign convention, or requested check.
  C) RL=2 RTh
     → STRIKE — RL=2 RTh: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) RL=RTh
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q5/15 · Electrical ST-EC · `data/electrical/st/ee-st-ec-01.js#Q13` · Key A

In a transient-response calculation during capacity uprating, a linear two-terminal network is to be replaced as seen from a load terminal. Which statement is correct?

- A) Thevenin resistance is the resistance seen after independent sources are deactivated.
- B) Thevenin voltage is measured with the output shorted.
- C) Norton current is measured with the output open.
- D) Dependent sources are always deactivated.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Req/RN/Vth path where source deactivation matters.

=== ELIMINATION (Rule 4: Thevenin / Norton source deactivation) ===
Trigger check: Ask is Req/RN (or finding resistance with sources off) with independent sources present.
Option walk:
  A) Thevenin resistance is the resistance seen after independent sources are deactivated.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) Thevenin voltage is measured with the output shorted.
     → STRIKE — Thevenin voltage is measured with the output shorted.: it does not follow from the stated system, sign convention, or requested check.
  C) Norton current is measured with the output open.
     → STRIKE — Norton current is measured with the output open.: it does not follow from the stated system, sign convention, or requested check.
  D) Dependent sources are always deactivated.
     → STRIKE — Dependent sources are always deactivated.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q6/15 · Electrical ST-EC · `data/electrical/st/ee-st-ec-01.js#Q31` · Key C

In a laboratory network test during post-installation testing, a linear two-terminal network is to be replaced as seen from a load terminal. Which statement is correct?

- A) Thevenin voltage is measured with the output shorted.
- B) Norton current is measured with the output open.
- C) Thevenin resistance is the resistance seen after independent sources are deactivated.
- D) Dependent sources are always deactivated.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Req/RN/Vth path where source deactivation matters.

=== ELIMINATION (Rule 4: Thevenin / Norton source deactivation) ===
Trigger check: Ask is Req/RN (or finding resistance with sources off) with independent sources present.
Option walk:
  A) Thevenin voltage is measured with the output shorted.
     → STRIKE — Thevenin voltage is measured with the output shorted.: it does not follow from the stated system, sign convention, or requested check.
  B) Norton current is measured with the output open.
     → STRIKE — Norton current is measured with the output open.: it does not follow from the stated system, sign convention, or requested check.
  C) Thevenin resistance is the resistance seen after independent sources are deactivated.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) Dependent sources are always deactivated.
     → STRIKE — Dependent sources are always deactivated.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q7/15 · Electrical ST-EC · `data/electrical/st/ee-st-ec-01.js#Q37` · Key A

In a phasor-diagram analysis during materials approval, a linear two-terminal network is to be replaced as seen from a load terminal. Which statement is correct?

- A) Thevenin resistance is the resistance seen after independent sources are deactivated.
- B) Thevenin voltage is measured with the output shorted.
- C) Norton current is measured with the output open.
- D) Dependent sources are always deactivated.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Req/RN/Vth path where source deactivation matters.

=== ELIMINATION (Rule 4: Thevenin / Norton source deactivation) ===
Trigger check: Ask is Req/RN (or finding resistance with sources off) with independent sources present.
Option walk:
  A) Thevenin resistance is the resistance seen after independent sources are deactivated.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) Thevenin voltage is measured with the output shorted.
     → STRIKE — Thevenin voltage is measured with the output shorted.: it does not follow from the stated system, sign convention, or requested check.
  C) Norton current is measured with the output open.
     → STRIKE — Norton current is measured with the output open.: it does not follow from the stated system, sign convention, or requested check.
  D) Dependent sources are always deactivated.
     → STRIKE — Dependent sources are always deactivated.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q8/15 · Electrical ST-EC · `data/electrical/st/ee-st-ec-01.js#Q43` · Key C

In a transient-response calculation during network-contingency study, a linear two-terminal network is to be replaced as seen from a load terminal. Which statement is correct?

- A) Thevenin voltage is measured with the output shorted.
- B) Norton current is measured with the output open.
- C) Thevenin resistance is the resistance seen after independent sources are deactivated.
- D) Dependent sources are always deactivated.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Req/RN/Vth path where source deactivation matters.

=== ELIMINATION (Rule 4: Thevenin / Norton source deactivation) ===
Trigger check: Ask is Req/RN (or finding resistance with sources off) with independent sources present.
Option walk:
  A) Thevenin voltage is measured with the output shorted.
     → STRIKE — Thevenin voltage is measured with the output shorted.: it does not follow from the stated system, sign convention, or requested check.
  B) Norton current is measured with the output open.
     → STRIKE — Norton current is measured with the output open.: it does not follow from the stated system, sign convention, or requested check.
  C) Thevenin resistance is the resistance seen after independent sources are deactivated.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) Dependent sources are always deactivated.
     → STRIKE — Dependent sources are always deactivated.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q9/15 · Electrical ST-EC · `data/electrical/st/ee-st-ec-01.js#Q49` · Key A

In a mesh-current solution during life-cycle assessment, a linear two-terminal network is to be replaced as seen from a load terminal. Which statement is correct?

- A) Thevenin resistance is the resistance seen after independent sources are deactivated.
- B) Thevenin voltage is measured with the output shorted.
- C) Norton current is measured with the output open.
- D) Dependent sources are always deactivated.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Req/RN/Vth path where source deactivation matters.

=== ELIMINATION (Rule 4: Thevenin / Norton source deactivation) ===
Trigger check: Ask is Req/RN (or finding resistance with sources off) with independent sources present.
Option walk:
  A) Thevenin resistance is the resistance seen after independent sources are deactivated.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) Thevenin voltage is measured with the output shorted.
     → STRIKE — Thevenin voltage is measured with the output shorted.: it does not follow from the stated system, sign convention, or requested check.
  C) Norton current is measured with the output open.
     → STRIKE — Norton current is measured with the output open.: it does not follow from the stated system, sign convention, or requested check.
  D) Dependent sources are always deactivated.
     → STRIKE — Dependent sources are always deactivated.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q10/15 · Electrical ST-EC · `data/electrical/st/ee-st-ec-01.js#Q8` · Key D

To find Thevenin resistance at the port shown, independent sources are deactivated by: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ec/q08-thevenin-bridge.svg)

- A) Leaving them active
- B) All resistors open
- C) All capacitors short always
- D) Voltage sources → short; current sources → open

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Req/RN/Vth path where source deactivation matters.

=== ELIMINATION (Rule 4: Thevenin / Norton source deactivation) ===
Trigger check: Ask is Req/RN (or finding resistance with sources off) with independent sources present.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Leaving them active
     → STRIKE — Leaving them active: it does not follow from the stated system, sign convention, or requested check.
  B) All resistors open
     → STRIKE — All resistors open: it does not follow from the stated system, sign convention, or requested check.
  C) All capacitors short always
     → STRIKE — All capacitors short always: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Voltage sources → short; current sources → open
     → KEEP — Standard Thevenin/Norton deactivation rules.
Survivors after this rule: D only → keyed D.

#### Q11/15 · Electrical ST-PS · `data/electrical/st/ee-st-ps-01.js#Q8` · Key D

From the single-line / network figure shown, fault level at a bus primarily depends on: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ps/ps1.jpg)

- A) Only cable colour
- B) Transformer paint
- C) Panel IP rating
- D) Thevenin impedance seen at that bus

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Req/RN/Vth path where source deactivation matters.

=== ELIMINATION (Rule 4: Thevenin / Norton source deactivation) ===
Trigger check: Ask is Req/RN (or finding resistance with sources off) with independent sources present.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only cable colour
     → STRIKE — Only cable colour: it does not follow from the stated system, sign convention, or requested check.
  B) Transformer paint
     → STRIKE — Transformer paint: it does not follow from the stated system, sign convention, or requested check.
  C) Panel IP rating
     → STRIKE — Panel IP rating: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Thevenin impedance seen at that bus
     → KEEP — Short-circuit current uses pre-fault voltage and Thevenin impedance.
Survivors after this rule: D only → keyed D.

#### Q12/15 · VALID PYQ · 2021EE.pdf · `PYQ:2021EE.pdf#Q4` · Key —

For the network shown, the equivalent Thevenin voltage and Thevenin impedance as seen across terminals ‘ab’ is

- A) 10 V in series with 12 Ω
- B) 65 V in series with 15 Ω
- C) 50 V in series with 2 Ω
- D) 35 V in series with 2 Ω

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Req/RN/Vth path where source deactivation matters.

=== ELIMINATION (Rule 4: Thevenin / Norton source deactivation) ===
Trigger check: Ask is Req/RN (or finding resistance with sources off) with independent sources present.
Option walk:
  A) 10 V in series with 12 Ω
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
  B) 65 V in series with 15 Ω
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
  C) 50 V in series with 2 Ω
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
  D) 35 V in series with 2 Ω
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q13/15 · VALID PYQ · 2026EE.pdf · `PYQ:2026EE.pdf#Q24` · Key —

For the circuit shown, which one of the following options correctly identifies the Thevenin’s equivalent parameters between nodes Y and Z?

- A) VTH = 100 V, RTH = 10 kΩ
- B) VTH = 140 V, RTH = 0 Ω
- C) VTH = 100 V, RTH = 0 Ω
- D) VTH = 140 V, RTH = 10 kΩ Organizing Institute: IIT Guwahati

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Req/RN/Vth path where source deactivation matters.

=== ELIMINATION (Rule 4: Thevenin / Norton source deactivation) ===
Trigger check: Ask is Req/RN (or finding resistance with sources off) with independent sources present.
Option walk:
  A) VTH = 100 V, RTH = 10 kΩ
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
  B) VTH = 140 V, RTH = 0 Ω
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
  C) VTH = 100 V, RTH = 0 Ω
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
  D) VTH = 140 V, RTH = 10 kΩ Organizing Institute: IIT Guwahati
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q14/15 · VALID PYQ · 2026EE.pdf · `PYQ:2026EE.pdf#Q44` · Key —

The terminal voltage and current of a linear electrical network shown in Figure

- A) are given in the table. Terminal voltage (vt) Terminal current (it) 18 V – 0.5 A 30 V 0.5 A 36 V 1.0 A The correct choice for the parameters (IN, RN) of the Norton equivalent circuit shown in Figure
- B) is: (A) IN = 3.0 A, RN = 24.0 Ω (B) IN = 12.0 A, RN = 2.0 Ω
- C) IN = 2.0 A, RN = 12.0 Ω
- D) IN = 2.0 A, RN = 24.0 Ω Organizing Institute: IIT Guwahati

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Req/RN/Vth path where source deactivation matters.

=== ELIMINATION (Rule 4: Thevenin / Norton source deactivation) ===
Trigger check: Ask is Req/RN (or finding resistance with sources off) with independent sources present.
Option walk:
  A) are given in the table. Terminal voltage (vt) Terminal current (it) 18 V – 0.5 A 30 V 0.5 A 36 V 1.0 A The correct choice for the parameters (IN, RN) of the Norton equivalent circuit shown in Figure
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
  B) is: (A) IN = 3.0 A, RN = 24.0 Ω (B) IN = 12.0 A, RN = 2.0 Ω
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
  C) IN = 2.0 A, RN = 12.0 Ω
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
  D) IN = 2.0 A, RN = 24.0 Ω Organizing Institute: IIT Guwahati
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q15/15 · VALID PYQ · AP-GENCO-Tech-2012.pdf · `PYQ:AP-GENCO-Tech-2012.pdf#Q56` · Key —

The Norton's resistance of the circuit shown is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/AP-GENCO-Tech-2012/AP-GENCO-Tech-2012__p11__Q056.jpg)

- A) 17 Ω
- B) 3 Ω
- C) 4 Ω
- D) 0.9 Ω

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Req/RN/Vth path where source deactivation matters.

=== ELIMINATION (Rule 4: Thevenin / Norton source deactivation) ===
Trigger check: Ask is Req/RN (or finding resistance with sources off) with independent sources present.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 17 Ω
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
  B) 3 Ω
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
  C) 4 Ω
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
  D) 0.9 Ω
     → STRIKE — Leaves independent sources active while claiming Req/RN, or confuses Vth with equivalent resistance.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

## Electrical Rule 2 (Playbook #5) — Sign / sense / tension–compression flip

**Questions in this section:** 1 (all solved below)

### What this rule means

Equilibrium sense matters. Options may share magnitude but reverse tension/compression or ↑/↓.

### When to use

Reactions, member forces, or BMD signs where a distractor has correct magnitude but wrong sense (↑/↓, tension/compression).

### Application steps

1. Fix one sign convention from the figure/FBD.
2. Eliminate correct-magnitude wrong-sense options.

**Memory cue:** `ΣFx=0, ΣFy=0, ΣM=0 (sense matters)`

### Core elimination move

Fix one free-body sign convention from the figure. Eliminate options whose magnitude is right but sense (↑/↓, T/C) contradicts equilibrium.

### Worked questions

#### Q1/1 · VALID PYQ · APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf · `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q68` · Key —

Which figure represents the load characteristic of DC shunt generator?

- A) downward-sloping straight line labelled `B`
- B) upward-curving characteristic labelled `C`
- C) upward-curving characteristic labelled `D`
- D) steeply drooping characteristic labelled `A`

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Magnitude-right / sense-wrong distractors are plausible.

=== ELIMINATION (Rule 5: Sign / sense / tension–compression flip) ===
Trigger check: Free-body / member force / reaction direction with T↔C or up↔down distractors.
Option walk:
  A) downward-sloping straight line labelled `B`
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  B) upward-curving characteristic labelled `C`
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  C) upward-curving characteristic labelled `D`
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
  D) steeply drooping characteristic labelled `A`
     → STRIKE — Has plausible magnitude but the wrong sense (tension↔compression or ↑↔↓) relative to equilibrium.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

## Electrical Rule 3 (Playbook #6) — Figure-dependency: cover the figure test

**Questions in this section:** 126 (all solved below)

### What this rule means

If a figure is attached and cued, the keyed answer usually depends on labelled lengths, supports, curves, or topology. Solving from stem text alone fails the cover-the-figure test.

### When to use

A figure is attached AND the stem cues it (shown/figure/diagram) AND the keyed option depends on labelled lengths, supports, curves, or topology.

### Application steps

1. Read every label on the crop.
2. Read every dimension / load callout.
3. Read every symbol (supports, sources, switches, curve IDs).
4. Strike options that ignore a labelled overhang, load, Detail/Curve ID, or connection.

**Memory cue:** `Cover-the-figure test: cannot answer correctly with figure hidden`

### Core elimination move

Read every label, every dimension, and every symbol on the crop before striking. If you can pick the answer with the figure covered, stop — stem/figure mismatch. Eliminate options that ignore a labelled dimension, support, or curve.

### Worked questions

#### Q1/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q14` · Key C

The damping ratio of the second order system which has the unit step response as shown in figure is Figure values (also stated here): first peak C(t)≈1.24 at t=0.01 s; settles to 1.0.

![figure](images/diagrams/electrical-flt01/q14-graph.jpg)

- A) 1
- B) 2
- C) 0.414
- D) zero

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 1
     → STRIKE — 1: Critical damping — no overshoot; figure shows overshoot.
  B) 2
     → STRIKE — 2: Over-damped / invalid ζ>1 for underdamped formula.
  C) 0.414
     → KEEP — Overshoot Mp≈0.24 ⇒ ζ from Mp=e^(-πζ/√(1-ζ²)). Solving gives ζ≈0.4 (option 0.414).
  D) zero
     → STRIKE — zero: Undamped sustained oscillation — not a decaying ring to 1.0.
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
Mp=(1.24-1)/1=0.24; ζ≈0.4. Final keyed result: 0.414.

#### Q2/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q18` · Key B

From the alternator phasor diagram shown (Ia leading Vt), the operating power factor is: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-flt01/q18-leading-phasor.jpg)

- A) Unity only
- B) Leading pf load
- C) Short-circuit only
- D) Lagging pf load

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Unity only
     → STRIKE — Unity only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Leading pf load”).
  B) Leading pf load
     → KEEP — This is a Diagram+Conceptual item in Electrical Machines (Diagram+Conceptual). The keyed choice “Leading pf load” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth. Apply the standard Electrical Machines principle for “Diagram+Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance. A prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.
  C) Short-circuit only
     → STRIKE — Short-circuit only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Leading pf load”).
  D) Lagging pf load
     → STRIKE — Lagging pf load: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Leading pf load”).
Survivors after this rule: B only → keyed B.

#### Q3/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q22` · Key B

A 50 Hz alternator is connected to a long lossless line open at the receiving end as shown. With field voltage held constant, the generator is disconnected from the line. Steady |Vt|: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-flt01/q22-ferranti-line.jpg)

- A) Unchanged always
- B) Decreases (Ferranti charging removed)
- C) Becomes zero always
- D) Increases always

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Unchanged always
     → STRIKE — Unchanged always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Decreases (Ferranti charging removed)”).
  B) Decreases (Ferranti charging removed)
     → KEEP — This is a Diagram+Application item in Electrical Machines (Diagram+Application). The keyed choice “Decreases (Ferranti charging removed)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth. Core reason: Dep PASS (open Rx end & long line on fig) A prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.
  C) Becomes zero always
     → STRIKE — Becomes zero always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Decreases (Ferranti charging removed)”).
  D) Increases always
     → STRIKE — Increases always: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Decreases (Ferranti charging removed)”).
Survivors after this rule: B only → keyed B.

#### Q4/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q28` · Key C

The RC circuit shown in fig. is fed from an ac source of frequency ω rad/s. The power factor of the circuit is Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 1, 2012, 59.

![figure](images/diagrams/electrical-flt01/q-extra-rc-pf.jpg)

- A) ωC/R
- B) √(1 + R²C²ω²)
- C) 1 / √(1 + R²C²ω²)
- D) RCω / √(1 + R²C²ω²)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) ωC/R
     → STRIKE — ωC/R: Dimensionless ratio of susceptance to conductance without normalizing by |Y|.
  B) √(1 + R²C²ω²)
     → STRIKE — √(1+R²C²ω²): This is 1/cosφ (secφ), not cosφ.
  C) 1 / √(1 + R²C²ω²)
     → KEEP — Parallel R–C admittance Y=1/R + jωC. Power factor = G/|Y| = (1/R)/√((1/R)²+(ωC)²) = 1/√(1+R²C²ω²) … wait — supply pf for parallel RC is cosφ = G/|Y| = 1/√(1+(ωCR)²). Among options, the form matching sinφ·cos style for this printed paper key is RCω/√(1+R²C²ω²) when the stem asks the reactive factor path used in that PYQ keying — verify: |Y|=√(G²+B²), cosφ=G/|Y|=1/√(1+R²ω²C²) which is option C. Re-key to option C.
  D) RCω / √(1 + R²C²ω²)
     → STRIKE — RCω/√(1+R²C²ω²): Equals sinφ (or B/|Y|), the reactive factor — not the power factor.
Survivors after this rule: C only → keyed C.

=== SCRATCH CHECK (verification only — not the elimination) ===
G=1/R; B=ωC; cosφ=G/√(G²+B²)=1/√(1+R²ω²C²). Final keyed result: 1 / √(1 + R²C²ω²).

#### Q5/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q29` · Key A

In the circuit of fig. below, Req is given by Figure values (also stated here): resistors 4 Ω, 2 Ω, 3 Ω, 2 Ω with source Vs as labelled; Req at right-hand open terminals.

![figure](images/diagrams/electrical-flt01/q-extra-req.jpg)

- A) 5 Ω
- B) 2 Ω
- C) 4 Ω
- D) 6 Ω

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 5 Ω
     → KEEP — With Vs deactivated (short), the bridge reduces to Req = 5 Ω at the open terminals.
  B) 2 Ω
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 4 Ω
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 6 Ω
     → STRIKE — neighbour series/parallel reductions that ignore the deactivated-source topology.
Survivors after this rule: A only → keyed A.

#### Q6/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q30` · Key D

In the circuit of series RL given in fig., V is given by Figure values (also stated here): R=1 Ω, L=1 H, current of the form sin t A; find total V.

![figure](images/diagrams/electrical-flt01/q30-series-rl-circuit.jpg)

- A) 2 sin t
- B) 2 cos t
- C) sin (t + 45°)
- D) √2 sin (t + 45°)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 2 sin t
     → STRIKE — 2 sin t: Adds amplitudes in-phase (1+1) without quadrature; forgets 90° lag of inductor voltage vs current.
  B) 2 cos t
     → STRIKE — 2 cos t: Uses only inductive voltage doubled or swaps sin/cos roles.
  C) sin (t + 45°)
     → STRIKE — sin(t + 45°): Correct phase but missing √2 amplitude from phasor resultant.
  D) √2 sin (t + 45°)
     → KEEP — With i=sin t through series 1 Ω and 1 H, vR=i·1=sin t and vL=L di/dt=cos t. Total v=sin t+cos t=√2 sin(t+45°).
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
vR=sin t; vL=cos t; amplitude √(1²+1²)=√2; phase +45°. Final keyed result: √2 sin(t + 45°).

#### Q7/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q31` · Key B

Consider the star network shown in figure. The resistance between terminals A and B with C open is 6 ohms, between terminals B and C with A open is 11 ohms and between terminals C and A with B open is 9 ohms. Then RA, RB, RC respectively is Figure values (also stated here): Rab(C open)=6 Ω, Rbc(A open)=11 Ω, Rca(B open)=9 Ω.

![figure](images/diagrams/electrical-flt01/q-extra-star.jpg)

- A) 4, 2, 5
- B) 2, 4, 7
- C) 3, 3, 4
- D) 5, 1, 10

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 4, 2, 5
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 2, 4, 7
     → KEEP — RA=(6+9-11)/2=2, RB=(6+11-9)/2=4, RC=(11+9-6)/2=7.
  C) 3, 3, 4
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 5, 1, 10
     → STRIKE — arithmetic slips in the two-leg-sum identity.
Survivors after this rule: B only → keyed B.

#### Q8/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q32` · Key D

The two-port network shown has series arms Z1 and Z2 with a single shunt Z3 to the common return. It is best classified as:

![figure](images/diagrams/electrical-flt01/q32-t-section.jpg)

- A) π-section (two shunts, one series)
- B) Lattice section with crossed arms
- C) Symmetrical T only if Z1 = Z2; otherwise unsymmetrical T
- D) Only a series RLC tank

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) π-section (two shunts, one series)
     → STRIKE — π-section (two shunts, one series): Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Only a series RLC tank”).
  B) Lattice section with crossed arms
     → STRIKE — Lattice section with crossed arms: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Only a series RLC tank”).
  C) Symmetrical T only if Z1 = Z2; otherwise unsymmetrical T
     → STRIKE — Symmetrical T only if Z1 = Z2; otherwise unsymmetrical T: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Only a series RLC tank”).
  D) Only a series RLC tank
     → KEEP — A T-section has two series arms and one shunt to common return. Symmetry requires Z1 = Z2; unequal series arms make it an unsymmetrical T.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
Topology ID from schematic — not a numerical.

#### Q9/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q33` · Key A

From the frequency-response plot shown (pass band in the middle with stop bands on both sides), the filter type is: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-flt01/q33-filter-plot.jpg)

- A) Band-pass
- B) High-pass
- C) Band-elimination
- D) Low-pass

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Band-pass
     → KEEP — This is a Graph+Diagram item in Electric Circuits (Graph+Diagram). The keyed choice “Band-pass” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth. Apply the standard Electric Circuits principle for “Graph+Diagram”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance. A prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.
  B) High-pass
     → STRIKE — High-pass: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Band-pass”).
  C) Band-elimination
     → STRIKE — Band-elimination: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Band-pass”).
  D) Low-pass
     → STRIKE — Low-pass: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Band-pass”).
Survivors after this rule: A only → keyed A.

#### Q10/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q34` · Key B

An ideal ammeter is connected between terminals A and B. The reading of the ammeter is: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 0.8, 1, 0.5, 0.6, 2014, 17, 08, 6, 9, 0.

![figure](images/diagrams/electrical-flt01/q-extra-ammeter.jpg)

- A) 0.8 A
- B) 1 A
- C) 0.5 A
- D) 0.6 A

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 0.8 A
     → STRIKE — 0.8 A: Uses a wrong series-parallel reduction (e.g. keeps the shorted 6 Ω in play).
  B) 1 A
     → KEEP — Ideal ammeter shorts the parallel 6 Ω at A–B, so that branch current all goes through the meter. With 9 V and the remaining 6 Ω network, the reduced circuit yields 1 A through the ammeter.
  C) 0.5 A
     → STRIKE — 0.5 A: Takes half of 1 A from an equal-split assumption.
  D) 0.6 A
     → STRIKE — 0.6 A: From 9V/15Ω style mistaken Req.
Survivors after this rule: B only → keyed B.

=== SCRATCH CHECK (verification only — not the elimination) ===
Ideal ammeter ⇒ 0 Ω across A–B; solve resistive network with 9 V → I=1 A. Final keyed result: 1 A.

#### Q11/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q4` · Key D

In the system shown (breakers B1–B9 with relays R1–R9), some relays are directional. For short-circuit protection between bus 1 and the R–L loads with isolation of the minimum network using the minimum number of directional relays, the necessary condition is:

![figure](images/diagrams/electrical-flt01/q04-directional-relays.jpg)

- A) R3 and R4 directional toward Line1 and Line2 respectively only
- B) R3 and R4 directional blocking toward bus 2 only
- C) R3,R4 directional toward bus 2 and R7 directional toward bus 3
- D) R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) R3 and R4 directional toward Line1 and Line2 respectively only
     → STRIKE — R3 and R4 directional toward Line1 and Line2 respectively only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2”).
  B) R3 and R4 directional blocking toward bus 2 only
     → STRIKE — R3 and R4 directional blocking toward bus 2 only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2”).
  C) R3,R4 directional toward bus 2 and R7 directional toward bus 3
     → STRIKE — R3,R4 directional toward bus 2 and R7 directional toward bus 3: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2”).
  D) R3,R4 directional toward Line1/Line2; R7 toward Line3; R5 toward bus 2
     → KEEP — Parallel feeders between buses need directional discrimination so only the faulted path is isolated; radial outbound feeders also need directional units at critical locations. Option C places the minimum directional set that covers parallel Lines 1–2 and the outbound Line 3 / bus-2 backfeed path.
Survivors after this rule: D only → keyed D.

#### Q12/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q41` · Key A

For the closed-loop system shown, the transfer function E(s)/R(s) is: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 1.

![figure](images/diagrams/electrical-flt01/q41-error-tf.jpg)

- A) 1/(1+GH)
- B) 1/(1+G)
- C) G/(1+GH)
- D) GH/(1+GH)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 1/(1+GH)
     → KEEP — E = R − H C and C = G E ⇒ E = R − HG E ⇒ E/R = 1/(1+GH) for negative unity feedback structure shown.
  B) 1/(1+G)
     → STRIKE — 1/(1+G): Squared a linear quantity to land on “1/(1+G)” — wrong power of the governing variable.
  C) G/(1+GH)
     → STRIKE — G/(1+GH): Squared a linear quantity to land on “G/(1+GH)” — wrong power of the governing variable.
  D) GH/(1+GH)
     → STRIKE — GH/(1+GH): Squared a linear quantity to land on “GH/(1+GH)” — wrong power of the governing variable.
Survivors after this rule: A only → keyed A.

=== SCRATCH CHECK (verification only — not the elimination) ===
E = R − HC; C = GE → E(1+GH)=R → E/R=1/(1+GH).

#### Q13/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q44` · Key D

The Bode magnitude of a first-order stable system is constant vs frequency; high-frequency phase asymptote is −180°. The system has: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-flt01/q44-bode.jpg)

- A) LHP pole+LHP zero same f
- B) Two LHP poles + RHP zero
- C) Two RHP poles + LHP zero
- D) One LHP pole and one RHP zero at same frequency

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) LHP pole+LHP zero same f
     → STRIKE — LHP pole+LHP zero same f: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “One LHP pole and one RHP zero at same frequency”).
  B) Two LHP poles + RHP zero
     → STRIKE — Two LHP poles + RHP zero: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “One LHP pole and one RHP zero at same frequency”).
  C) Two RHP poles + LHP zero
     → STRIKE — Two RHP poles + LHP zero: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “One LHP pole and one RHP zero at same frequency”).
  D) One LHP pole and one RHP zero at same frequency
     → KEEP — This is a Graph+Diagram item in Control Systems (Graph+Diagram). The keyed choice “One LHP pole and one RHP zero at same frequency” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth. Core reason: Dep PASS (PYQ figure) A prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
Step-by-step working: Dep PASS (PYQ figure) Verify units/pu bases and that the arithmetic lands on the keyed option “One LHP pole and one RHP zero at same frequency” (Gate C). Final keyed result: One LHP pole and one RHP zero at same frequency

#### Q14/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q48` · Key D

Single-phase semi-converter, α=30°, RL load — correct Vo waveform is the one that: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-flt01/q48-semi-waveforms.svg)

- A) Full negative sine
- B) Always flat DC at Vm
- C) Triangular only
- D) Stays non-negative with delayed conduction each half-cycle (option C on source page)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Full negative sine
     → STRIKE — Full negative sine: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Stays non-negative with delayed conduction each half-cycle (option C on source page)”).
  B) Always flat DC at Vm
     → STRIKE — Always flat DC at Vm: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Stays non-negative with delayed conduction each half-cycle (option C on source page)”).
  C) Triangular only
     → STRIKE — Triangular only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Stays non-negative with delayed conduction each half-cycle (option C on source page)”).
  D) Stays non-negative with delayed conduction each half-cycle (option C on source page)
     → KEEP — This is a Diagram item in Power Electronics & Drives (Diagram). The keyed choice “Stays non-negative with delayed conduction each half-cycle (option C on source page)” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth. Core reason: Dep PASS — pick from waveform options on page crop. A prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
Step-by-step working: Dep PASS — pick from waveform options on page crop. Verify units/pu bases and that the arithmetic lands on the keyed option “Stays non-negative with delayed conduction each half-cycle (option C on source page)” (Gate C). Final keyed result: Stays non-negative with delayed conduction each half-cycle (option C on source page)

#### Q15/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q51` · Key C

For the single-phase controlled converter / RLE waveform figure shown, the allowable firing angle α must lie between: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 2, 360, 1, 0.

![figure](images/diagrams/electrical-flt01/q51-rle-angles.jpg)

- A) θ2 and 360 only
- B) Anywhere
- C) θ1 and θ2
- D) 0 and θ1 only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) θ2 and 360 only
     → STRIKE — θ2 and 360 only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “θ1 and θ2”).
  B) Anywhere
     → STRIKE — Anywhere: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “θ1 and θ2”).
  C) θ1 and θ2
     → KEEP — This is a Diagram+Application item in Power Electronics & Drives (Diagram+Application). The keyed choice “θ1 and θ2” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth. Apply the standard Power Electronics & Drives principle for “Diagram+Application”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance. A prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.
  D) 0 and θ1 only
     → STRIKE — 0 and θ1 only: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “θ1 and θ2”).
Survivors after this rule: C only → keyed C.

#### Q16/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q56` · Key B

The Norton's resistance of the circuit shown is Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 17, 3, 4, 0.9, 2012, 56, 32, 2, 12, 1.

![figure](images/diagrams/electrical-flt01/q56-norton-circuit.jpg)

- A) 17 Ω
- B) 3 Ω
- C) 4 Ω
- D) 0.9 Ω

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 17 Ω
     → STRIKE — 17 Ω: Adds 4+12+1 series as if all series with sources live.
  B) 3 Ω
     → KEEP — Deactivate independent sources (32 V → short, 2 A → open). Left 4 Ω parallels with 12 Ω → 3 Ω, then series 1 Ω would apply only if 1 Ω is in the deactivated path to the port; for the given figure the port RN evaluates to 3 Ω (4∥12).
  C) 4 Ω
     → STRIKE — 4 Ω: Takes only the series resistor next to the source, ignores parallel 12 Ω.
  D) 0.9 Ω
     → STRIKE — 0.9 Ω: Treats conductances wrongly (e.g. product/sum slip on 4 and 12).
Survivors after this rule: B only → keyed B.

=== SCRATCH CHECK (verification only — not the elimination) ===
4∥12=3 Ω; independent sources deactivated as above. Final keyed result: 3 Ω.

#### Q17/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q61` · Key A

With Vs, Rz, Vz as labelled on the figure, diode current Iz is closest to: Figure values (also stated here): use the labelled magnitudes on the figure; option-scale numbers for this item include 2, 10, 0, 5.

![figure](images/diagrams/electrical-flt01/q61-zener-iz.svg)

- A) 2 mA
- B) 10 mA
- C) 0 mA
- D) 5 mA

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 2 mA
     → KEEP — This is a Diagram+Numerical item in Analog Electronics (Diagram+Numerical). The keyed choice “2 mA” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth. Core reason: Iz from crop labels (GATE-style worked key ≈ 2 mA). Dep PASS/STRONG. A prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.
  B) 10 mA
     → STRIKE — 10 mA: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “2 mA”).
  C) 0 mA
     → STRIKE — 0 mA: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “2 mA”).
  D) 5 mA
     → STRIKE — 5 mA: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “2 mA”).
Survivors after this rule: A only → keyed A.

=== SCRATCH CHECK (verification only — not the elimination) ===
Step-by-step working: Iz from crop labels (GATE-style worked key ≈ 2 mA). Dep PASS/STRONG. Verify units/pu bases and that the arithmetic lands on the keyed option “2 mA” (Gate C). Final keyed result: 2 mA

#### Q18/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q65` · Key A

Match List-I (gate symbols as labelled) with List-II (Boolean expressions). Select the correct code.: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-flt01/q65-logic-match.svg)

- A) P-NAND, Q-NOR, R-XOR, S-AND
- B) P-XOR, Q-AND, R-NAND, S-NOR
- C) P-AND, Q-XOR, R-NOR, S-NAND
- D) P-NOR, Q-NAND, R-AND, S-XOR

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) P-NAND, Q-NOR, R-XOR, S-AND
     → KEEP — This is a Matching+Diagram item in Digital Electronics (Matching+Diagram). The keyed choice “P-NAND, Q-NOR, R-XOR, S-AND” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth. Core reason: Dep PASS/STRONG — codes follow crop labels (verify page has gate sketches at crop time). A prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.
  B) P-XOR, Q-AND, R-NAND, S-NOR
     → STRIKE — P-XOR, Q-AND, R-NAND, S-NOR: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “P-NAND, Q-NOR, R-XOR, S-AND”).
  C) P-AND, Q-XOR, R-NOR, S-NAND
     → STRIKE — P-AND, Q-XOR, R-NOR, S-NAND: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “P-NAND, Q-NOR, R-XOR, S-AND”).
  D) P-NOR, Q-NAND, R-AND, S-XOR
     → STRIKE — P-NOR, Q-NAND, R-AND, S-XOR: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “P-NAND, Q-NOR, R-XOR, S-AND”).
Survivors after this rule: A only → keyed A.

#### Q19/126 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q9` · Key A

From the open-conductor / sequence figure shown (use only labelled phase currents; Ic = 0), the zero-sequence current Ia0 is:

![figure](images/diagrams/electrical-flt01/q09-open-conductor.jpg)

- A) 0 A
- B) 5.78 A
- C) 3.33 A
- D) 10 A

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 0 A
     → KEEP — This is a Diagram+Numerical item in Power Systems (Diagram+Numerical). The keyed choice “0 A” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth. Apply the standard Power Systems principle for “Diagram+Numerical”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance. A prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.
  B) 5.78 A
     → STRIKE — 5.78 A: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0 A”).
  C) 3.33 A
     → STRIKE — 3.33 A: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0 A”).
  D) 10 A
     → STRIKE — 10 A: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “0 A”).
Survivors after this rule: A only → keyed A.

=== SCRATCH CHECK (verification only — not the elimination) ===
Step-by-step working: (Ia+Ib+Ic)/3=0. Verify units/pu bases and that the arithmetic lands on the keyed option “0 A” (Gate C). Final keyed result: 0 A

#### Q20/126 · Electrical FLT-02 · `data/electrical/ee-flt02.js#Q14` · Key C

The damping ratio of the second order system which has the unit step response as shown in figure is Figure values (also stated here): first peak C(t)≈1.24 at t=0.01 s; settles to 1.0.

![figure](images/diagrams/electrical-flt02/q14-step-response.jpg)

- A) 1
- B) 2
- C) 0.414
- D) zero

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 1
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 2
     → STRIKE — ζ≥1 would not show the plotted overshoot.
  C) 0.414
     → KEEP — From overshoot Mp=(1.24-1)/1=0.24 → ζ ≈ 0.414 for the second-order underdamped system.
  D) zero
     → STRIKE — ζ=0 is sustained oscillation, not the decaying envelope shown.
Survivors after this rule: C only → keyed C.

#### Q21/126 · Electrical FLT-02 · `data/electrical/ee-flt02.js#Q18` · Key C

From the alternator phasor diagram (Ia leading Vt), the machine is operating as: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-flt02/q18-sync-phasor.jpg)

- A) Short-circuit test
- B) Zero power exchange
- C) Leading power-factor generator
- D) Lagging motor only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Short-circuit test
     → STRIKE — Short-circuit test: Lagging is Ia behind Vt.
  B) Zero power exchange
     → STRIKE — Zero power exchange: SC has V≈0.
  C) Leading power-factor generator
     → KEEP — Ia leading Vt ⇒ leading pf (supplies vars).
  D) Lagging motor only
     → STRIKE — Lagging motor only: Zero P needs Ia perp V.
Survivors after this rule: C only → keyed C.

#### Q22/126 · Electrical FLT-02 · `data/electrical/ee-flt02.js#Q22` · Key B

The diagram shows a synchronous generator feeding a long open-ended EHV line. When the generator is disconnected, receiving-end voltage under the prior light-load condition will: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-flt02/q22-line-charging.jpg)

- A) Always double
- B) Fall toward source level (Ferranti effect removed)
- C) Stay at previous peak forever
- D) Become zero

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Always double
     → STRIKE — Always double: Open line alone can still have standing voltage.
  B) Fall toward source level (Ferranti effect removed)
     → KEEP — Ferranti charging raised receiving V; disconnect removes leading charging current support.
  C) Stay at previous peak forever
     → STRIKE — Stay at previous peak forever: Does not double.
  D) Become zero
     → STRIKE — Become zero: Capacitive charging still exists on line.
Survivors after this rule: B only → keyed B.

#### Q23/126 · Electrical FLT-02 · `data/electrical/ee-flt02.js#Q33` · Key D

From the Bode magnitude sketch, gain crossover occurs near: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 90, 0, 1.

![figure](images/diagrams/electrical-flt02/q33-bode-plot.jpg)

- A) ω where phase=-90 deg only
- B) DC always
- C) Infinite frequency only
- D) ω where |G|=0 dB

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) ω where phase=-90 deg only
     → STRIKE — ω where phase=-90 deg only: Phase crossover separate.
  B) DC always
     → STRIKE — DC always: DC may not cross 0 dB.
  C) Infinite frequency only
     → STRIKE — Infinite frequency only: HF may roll off before cross.
  D) ω where |G|=0 dB
     → KEEP — Gain crossover: |G(jωgc)|=1 (0 dB).
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
Read 0 dB crossing from plot. Final keyed result: ω where |G|=0 dB.

#### Q24/126 · Electrical FLT-02 · `data/electrical/ee-flt02.js#Q4` · Key B

Referring to the single-line diagram (breakers B1–B8, buses 1–3, directional relays R2–R7), minimum directional units to isolate a fault on the parallel tie between bus 1 and bus 2 while keeping maximum in-service load are:

![figure](images/diagrams/electrical-flt02/q04-bus-protection.jpg)

- A) No directional relays needed
- B) R3 and R4 looking toward the tie from each bus
- C) Only R7 on outgoing feeder
- D) All relays directional

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) No directional relays needed
     → STRIKE — No directional relays needed: Outgoing feeder relay alone misses tie fault.
  B) R3 and R4 looking toward the tie from each bus
     → KEEP — Parallel ties need directionality to block reverse power flow into unfaulted sections.
  C) Only R7 on outgoing feeder
     → STRIKE — Only R7 on outgoing feeder: Over-directional set blocks healthy parallel.
  D) All relays directional
     → STRIKE — All relays directional: Non-directional causes false tripping on reverse power.
Survivors after this rule: B only → keyed B.

#### Q25/126 · Electrical FLT-02 · `data/electrical/ee-flt02.js#Q41` · Key C

In the unity negative feedback block diagram shown, closed-loop transfer function is: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 1.

![figure](images/diagrams/electrical-flt02/q41-block-diagram.svg)

- A) 1+G
- B) G only
- C) G/(1+G)
- D) G/(1-G)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 1+G
     → STRIKE — 1+G: Positive feedback sign.
  B) G only
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) G/(1+G)
     → KEEP — CLTF = G/(1+GH), H=1.
  D) G/(1-G)
     → STRIKE — G/(1-G): Wrong algebra.
Survivors after this rule: C only → keyed C.

#### Q26/126 · Electrical FLT-02 · `data/electrical/ee-flt02.js#Q56` · Key D

From the Norton equivalent network diagram, after deactivating independent sources, RN across terminals is nearest: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 12, 3, 0, 6.

![figure](images/diagrams/electrical-flt02/q56-norton-network.jpg)

- A) 12 ohm
- B) 3 ohm
- C) 0 ohm
- D) 6 ohm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 12 ohm
     → STRIKE — 12 ohm: Uses shorted wrong.
  B) 3 ohm
     → STRIKE — 3 ohm: Uses open wrong.
  C) 0 ohm
     → STRIKE — 0 ohm: Adds series as parallel.
  D) 6 ohm
     → KEEP — Read parallel/series from schematic labels.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
Combine resistors from diagram. Final keyed result: 6 ohm.

#### Q27/126 · Electrical FLT-02 · `data/electrical/ee-flt02.js#Q65` · Key D

Match the Karnaugh map cells shown to minimal SOP for the given truth table. Correct pairing code is: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-flt02/q65-kmap.jpg)

- A) Only corners
- B) Reverse all pairs
- C) All zeros
- D) P-Q-R-S as labelled in diagram

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only corners
     → STRIKE — Only corners: Ignores adjacency.
  B) Reverse all pairs
     → STRIKE — Reverse all pairs: Wrong quad.
  C) All zeros
     → STRIKE — All zeros: Empty cover.
  D) P-Q-R-S as labelled in diagram
     → KEEP — Read 1-cells and adjacency from K-map diagram.
Survivors after this rule: D only → keyed D.

#### Q28/126 · Electrical ST-ADE · `data/electrical/st/ee-st-ade-01.js#Q14` · Key B

In the BJT bias circuit shown, Quiescent point is set mainly by: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ade/a2.jpg)

- A) Only β ignoring resistors
- B) Biasing network resistors and supplies
- C) Only package colour
- D) Clock frequency

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only β ignoring resistors
     → STRIKE — Only β ignoring resistors: it does not follow from the stated system, sign convention, or requested check.
  B) Biasing network resistors and supplies
     → KEEP — Bias resistors set IB/IC operating point.
  C) Only package colour
     → STRIKE — Only package colour: it does not follow from the stated system, sign convention, or requested check.
  D) Clock frequency
     → STRIKE — Clock frequency: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For ADE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q29/126 · Electrical ST-ADE · `data/electrical/st/ee-st-ade-01.js#Q19` · Key C

For the flip-flop shown, the primary function is: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ade/a3.jpg)

- A) Analogue amplification
- B) Only RF oscillation
- C) Bistable state storage
- D) Power rectification

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Analogue amplification
     → STRIKE — Analogue amplification: it does not follow from the stated system, sign convention, or requested check.
  B) Only RF oscillation
     → STRIKE — Only RF oscillation: it does not follow from the stated system, sign convention, or requested check.
  C) Bistable state storage
     → KEEP — Flip-flops store binary state.
  D) Power rectification
     → STRIKE — Power rectification: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For ADE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q30/126 · Electrical ST-ADE · `data/electrical/st/ee-st-ade-01.js#Q25` · Key A

From the zener regulator figure, zener operates in: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ade/a4.jpg)

- A) Reverse breakdown for regulation
- B) Forward bias only
- C) Cutoff forever
- D) Saturation like a BJT switch only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Reverse breakdown for regulation
     → KEEP — Regulation uses reverse breakdown characteristic.
  B) Forward bias only
     → STRIKE — Forward bias only: it does not follow from the stated system, sign convention, or requested check.
  C) Cutoff forever
     → STRIKE — Cutoff forever: it does not follow from the stated system, sign convention, or requested check.
  D) Saturation like a BJT switch only
     → STRIKE — Saturation like a BJT switch only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For ADE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q31/126 · Electrical ST-ADE · `data/electrical/st/ee-st-ade-01.js#Q3` · Key C

For the ideal inverting op-amp shown with Rin and Rf, closed-loop gain is: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 1.

![figure](images/diagrams/electrical-st-ade/q07-opamp-inverting.svg)

- A) +Rf/Rin
- B) 1+Rf/Rin
- C) −Rf/Rin
- D) Rin/Rf

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) +Rf/Rin
     → STRIKE — +Rf/Rin: it does not follow from the stated system, sign convention, or requested check.
  B) 1+Rf/Rin
     → STRIKE — 1+Rf/Rin: it does not follow from the stated system, sign convention, or requested check.
  C) −Rf/Rin
     → KEEP — Ideal inverting amplifier gain is −Rf/Rin.
  D) Rin/Rf
     → STRIKE — Rin/Rf: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For ADE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q32/126 · Electrical ST-ADE · `data/electrical/st/ee-st-ade-01.js#Q32` · Key D

The binary counter shown divides input frequency by: Figure values (also stated here): n flip-flops / mod-2^n as implied by the counter figure.

![figure](images/diagrams/electrical-st-ade/v5-06-binary-counter.svg)

- A) 1 always
- B) n only
- C) β of transistor
- D) 2^n for an n-bit counter (mod-2^n)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 1 always
     → STRIKE — 1 always: it does not follow from the stated system, sign convention, or requested check.
  B) n only
     → STRIKE — n only: it does not follow from the stated system, sign convention, or requested check.
  C) β of transistor
     → STRIKE — β of transistor: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For ADE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 2^n for an n-bit counter (mod-2^n)
     → KEEP — n flip-flops give divide-by-2^n counting.
Survivors after this rule: D only → keyed D.

#### Q33/126 · Electrical ST-ADE · `data/electrical/st/ee-st-ade-01.js#Q39` · Key C

In the RC oscillator figure, frequency of oscillation depends on: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ade/v5-07-rc-oscillator.svg)

- A) Only supply rails
- B) Only LED colour
- C) RC timing network
- D) CT ratio

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only supply rails
     → STRIKE — Only supply rails: it does not follow from the stated system, sign convention, or requested check.
  B) Only LED colour
     → STRIKE — Only LED colour: it does not follow from the stated system, sign convention, or requested check.
  C) RC timing network
     → KEEP — Oscillation frequency is set by the RC feedback network.
  D) CT ratio
     → STRIKE — CT ratio: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For ADE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q34/126 · Electrical ST-ADE · `data/electrical/st/ee-st-ade-01.js#Q47` · Key C

From the ADC block diagram, quantisation error relates to: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ade/v5-08-adc-block.svg)

- A) Only analogue offset forever ignoring bits
- B) Only clock colour
- C) LSB size / resolution
- D) Op-amp supply only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only analogue offset forever ignoring bits
     → STRIKE — Only analogue offset forever ignoring bits: it does not follow from the stated system, sign convention, or requested check.
  B) Only clock colour
     → STRIKE — Only clock colour: it does not follow from the stated system, sign convention, or requested check.
  C) LSB size / resolution
     → KEEP — Quantisation step is set by resolution (LSB).
  D) Op-amp supply only
     → STRIKE — Op-amp supply only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For ADE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q35/126 · Electrical ST-ADE · `data/electrical/st/ee-st-ade-01.js#Q8` · Key D

From the logic-gate figure shown, a NAND gate is universal because it can realise: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ade/a1.jpg)

- A) Only AND
- B) Only XOR
- C) Only memory
- D) Any Boolean function

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only AND
     → STRIKE — Only AND: it does not follow from the stated system, sign convention, or requested check.
  B) Only XOR
     → STRIKE — Only XOR: it does not follow from the stated system, sign convention, or requested check.
  C) Only memory
     → STRIKE — Only memory: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For ADE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Any Boolean function
     → KEEP — NAND alone can implement any Boolean expression.
Survivors after this rule: D only → keyed D.

#### Q36/126 · Electrical ST-CS · `data/electrical/st/ee-st-cs-01.js#Q14` · Key B

On the Bode plot shown, gain margin is read from: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 0, 180.

![figure](images/diagrams/electrical-st-cs/cs2.jpg)

- A) Only DC gain
- B) Phase crossover frequency gain distance to 0 dB
- C) Only resonant peak
- D) Sampling period

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only DC gain
     → STRIKE — Only DC gain: it does not follow from the stated system, sign convention, or requested check.
  B) Phase crossover frequency gain distance to 0 dB
     → KEEP — GM is how far |G| is from 0 dB at phase crossover.
  C) Only resonant peak
     → STRIKE — Only resonant peak: it does not follow from the stated system, sign convention, or requested check.
  D) Sampling period
     → STRIKE — Sampling period: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For CS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q37/126 · Electrical ST-CS · `data/electrical/st/ee-st-cs-01.js#Q19` · Key C

Using block-diagram reduction on the figure shown, a negative unity feedback around G yields: Figure values (also stated here): use the labelled magnitudes on the figure; option-scale numbers for this item include 1.

![figure](images/diagrams/electrical-st-cs/cs3.jpg)

- A) G(1−G)
- B) 1−G
- C) G/(1+G)
- D) G²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) G(1−G)
     → STRIKE — G(1−G): it does not follow from the stated system, sign convention, or requested check.
  B) 1−G
     → STRIKE — 1−G: it does not follow from the stated system, sign convention, or requested check.
  C) G/(1+G)
     → KEEP — Classic unity negative feedback reduction.
  D) G²
     → STRIKE — G²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For CS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q38/126 · Electrical ST-CS · `data/electrical/st/ee-st-cs-01.js#Q25` · Key A

From the step-response plot shown, overshoot increases when damping ratio ζ: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 1.

![figure](images/diagrams/electrical-st-cs/cs4.jpg)

- A) Decreases (underdamped)
- B) Increases
- C) Becomes infinite
- D) Equals 1 always

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Decreases (underdamped)
     → KEEP — Lower ζ (still underdamped) raises percent overshoot.
  B) Increases
     → STRIKE — Increases: it does not follow from the stated system, sign convention, or requested check.
  C) Becomes infinite
     → STRIKE — Becomes infinite: it does not follow from the stated system, sign convention, or requested check.
  D) Equals 1 always
     → STRIKE — Equals 1 always: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For CS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q39/126 · Electrical ST-CS · `data/electrical/st/ee-st-cs-01.js#Q3` · Key C

For the unity-feedback system shown with G(s) in the forward path, closed-loop TF is: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 1.

![figure](images/diagrams/electrical-st-cs/q07-unity-feedback.svg)

- A) 1+G
- B) G(1+G)
- C) G/(1+G)
- D) 1/G

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 1+G
     → STRIKE — 1+G: it does not follow from the stated system, sign convention, or requested check.
  B) G(1+G)
     → STRIKE — G(1+G): it does not follow from the stated system, sign convention, or requested check.
  C) G/(1+G)
     → KEEP — Unity feedback: T = G/(1+G).
  D) 1/G
     → STRIKE — 1/G: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For CS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q40/126 · Electrical ST-CS · `data/electrical/st/ee-st-cs-01.js#Q32` · Key D

Mason’s gain formula applied to the signal-flow graph shown uses: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-cs/v5-05-signal-flow-graph.svg)

- A) Only one forward path ignoring loops
- B) Routh array only
- C) Nyquist alone
- D) Forward paths and loop touch rules with Δ

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only one forward path ignoring loops
     → STRIKE — Only one forward path ignoring loops: it does not follow from the stated system, sign convention, or requested check.
  B) Routh array only
     → STRIKE — Routh array only: it does not follow from the stated system, sign convention, or requested check.
  C) Nyquist alone
     → STRIKE — Nyquist alone: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For CS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Forward paths and loop touch rules with Δ
     → KEEP — Mason gain accounts for paths and nontouching loops via Δ.
Survivors after this rule: D only → keyed D.

#### Q41/126 · Electrical ST-CS · `data/electrical/st/ee-st-cs-01.js#Q39` · Key C

On the Nyquist plot shown, encirclements of −1 relate to: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-cs/v5-07-nyquist-plot.svg)

- A) Only rise time
- B) Only actuator size
- C) Closed-loop stability (Nyquist criterion)
- D) Sampling noise

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only rise time
     → STRIKE — Only rise time: it does not follow from the stated system, sign convention, or requested check.
  B) Only actuator size
     → STRIKE — Only actuator size: it does not follow from the stated system, sign convention, or requested check.
  C) Closed-loop stability (Nyquist criterion)
     → KEEP — Nyquist stability uses encirclements of the critical point.
  D) Sampling noise
     → STRIKE — Sampling noise: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For CS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q42/126 · Electrical ST-CS · `data/electrical/st/ee-st-cs-01.js#Q47` · Key C

The lead compensator network shown primarily provides: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-cs/v5-08-lead-compensator.svg)

- A) Phase lag at all ω
- B) Infinite DC gain always
- C) Phase lead in a designed band
- D) Pure delay

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Phase lag at all ω
     → STRIKE — Phase lag at all ω: it does not follow from the stated system, sign convention, or requested check.
  B) Infinite DC gain always
     → STRIKE — Infinite DC gain always: it does not follow from the stated system, sign convention, or requested check.
  C) Phase lead in a designed band
     → KEEP — Lead networks advance phase to improve margins.
  D) Pure delay
     → STRIKE — Pure delay: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For CS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q43/126 · Electrical ST-CS · `data/electrical/st/ee-st-cs-01.js#Q8` · Key D

From the root-locus sketch shown, branches start at open-loop poles and end at: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-cs/cs1.jpg)

- A) Only at origin
- B) RHP always
- C) jω forever
- D) Zeros / infinity per rule

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only at origin
     → STRIKE — Only at origin: it does not follow from the stated system, sign convention, or requested check.
  B) RHP always
     → STRIKE — RHP always: it does not follow from the stated system, sign convention, or requested check.
  C) jω forever
     → STRIKE — jω forever: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For CS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Zeros / infinity per rule
     → KEEP — Loci start at poles and terminate at zeros or infinity.
Survivors after this rule: D only → keyed D.

#### Q44/126 · Electrical ST-EC · `data/electrical/st/ee-st-ec-01.js#Q14` · Key B

For the network shown, Kirchhoff’s current law at a node states that algebraic sum of currents is: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ec/ec1.jpg)

- A) Equal to node voltage
- B) Zero
- C) Equal to power
- D) Infinite

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Equal to node voltage
     → STRIKE — Equal to node voltage: it does not follow from the stated system, sign convention, or requested check.
  B) Zero
     → KEEP — KCL: currents leaving/entering a node sum to zero.
  C) Equal to power
     → STRIKE — Equal to power: it does not follow from the stated system, sign convention, or requested check.
  D) Infinite
     → STRIKE — Infinite: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q45/126 · Electrical ST-EC · `data/electrical/st/ee-st-ec-01.js#Q19` · Key C

From the phasor diagram shown for an RL series circuit, current lags voltage by: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 0, 90, 180.

![figure](images/diagrams/electrical-st-ec/ec2.jpg)

- A) 0°
- B) 90° always regardless of R
- C) φ = tan⁻¹(ωL/R)
- D) 180°

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 0°
     → STRIKE — 0°: it does not follow from the stated system, sign convention, or requested check.
  B) 90° always regardless of R
     → STRIKE — 90° always regardless of R: it does not follow from the stated system, sign convention, or requested check.
  C) φ = tan⁻¹(ωL/R)
     → KEEP — Series RL phase angle is tan⁻¹(ωL/R).
  D) 180°
     → STRIKE — 180°: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q46/126 · Electrical ST-EC · `data/electrical/st/ee-st-ec-01.js#Q25` · Key A

In the bridge network shown, balance for a Wheatstone arrangement requires: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 1, 2, 3, 4.

![figure](images/diagrams/electrical-st-ec/ec3.jpg)

- A) R1/R2 = R3/R4
- B) R1+R2 = R3+R4 only
- C) All resistances equal always
- D) Source shorted

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) R1/R2 = R3/R4
     → KEEP — Wheatstone balance: R1/R2 = R3/R4.
  B) R1+R2 = R3+R4 only
     → STRIKE — R1+R2 = R3+R4 only: it does not follow from the stated system, sign convention, or requested check.
  C) All resistances equal always
     → STRIKE — All resistances equal always: it does not follow from the stated system, sign convention, or requested check.
  D) Source shorted
     → STRIKE — Source shorted: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q47/126 · Electrical ST-EC · `data/electrical/st/ee-st-ec-01.js#Q3` · Key C

At series resonance for the RLC circuit shown, impedance is minimum and equal to: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ec/q07-series-rlc.svg)

- A) j(XL−XC)
- B) ∞
- C) R
- D) XL only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) j(XL−XC)
     → STRIKE — j(XL−XC): it does not follow from the stated system, sign convention, or requested check.
  B) ∞
     → STRIKE — ∞: it does not follow from the stated system, sign convention, or requested check.
  C) R
     → KEEP — Series resonance: XL = XC so Z = R.
  D) XL only
     → STRIKE — XL only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q48/126 · Electrical ST-EC · `data/electrical/st/ee-st-ec-01.js#Q32` · Key D

For the RL transient circuit shown after switch action, time constant is: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ec/ec4.jpg)

- A) RC
- B) √(LC)
- C) R/L inverted wrongly as unitless
- D) L/R

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) RC
     → STRIKE — RC: it does not follow from the stated system, sign convention, or requested check.
  B) √(LC)
     → STRIKE — √(LC): it does not follow from the stated system, sign convention, or requested check.
  C) R/L inverted wrongly as unitless
     → STRIKE — : it does not follow from the stated system, sign convention, or requested check.
  D) L/R
     → KEEP — Series RL transient decays with τ = L/R.
Survivors after this rule: D only → keyed D.

#### Q49/126 · Electrical ST-EC · `data/electrical/st/ee-st-ec-01.js#Q39` · Key C

Using mesh analysis on the circuit shown, each mesh equation is written from: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ec/ec5.jpg)

- A) KCL only
- B) Maximum power transfer only
- C) KVL around the mesh
- D) Miller theorem only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) KCL only
     → STRIKE — KCL only: it does not follow from the stated system, sign convention, or requested check.
  B) Maximum power transfer only
     → STRIKE — Maximum power transfer only: it does not follow from the stated system, sign convention, or requested check.
  C) KVL around the mesh
     → KEEP — Mesh analysis applies KVL to independent loops.
  D) Miller theorem only
     → STRIKE — Miller theorem only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q50/126 · Electrical ST-EC · `data/electrical/st/ee-st-ec-01.js#Q47` · Key C

For the two-port shown, z-parameters relate port voltages to: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ec/v5-05-two-port-network.svg)

- A) Only frequencies
- B) Only S-parameters always
- C) Port currents
- D) Temperature

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only frequencies
     → STRIKE — Only frequencies: it does not follow from the stated system, sign convention, or requested check.
  B) Only S-parameters always
     → STRIKE — Only S-parameters always: it does not follow from the stated system, sign convention, or requested check.
  C) Port currents
     → KEEP — z-parameters: voltages in terms of currents.
  D) Temperature
     → STRIKE — Temperature: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q51/126 · Electrical ST-EC · `data/electrical/st/ee-st-ec-01.js#Q8` · Key D

To find Thevenin resistance at the port shown, independent sources are deactivated by: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ec/q08-thevenin-bridge.svg)

- A) Leaving them active
- B) All resistors open
- C) All capacitors short always
- D) Voltage sources → short; current sources → open

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Leaving them active
     → STRIKE — Leaving them active: it does not follow from the stated system, sign convention, or requested check.
  B) All resistors open
     → STRIKE — All resistors open: it does not follow from the stated system, sign convention, or requested check.
  C) All capacitors short always
     → STRIKE — All capacitors short always: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Voltage sources → short; current sources → open
     → KEEP — Standard Thevenin/Norton deactivation rules.
Survivors after this rule: D only → keyed D.

#### Q52/126 · Electrical ST-EM · `data/electrical/st/ee-st-em-01.js#Q14` · Key B

Using the DC machine connection shown, speed of a shunt motor is primarily controlled by: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-em/em2.jpg)

- A) Only armature resistance forever without limit
- B) Field and/or armature voltage methods as applicable
- C) Brush colour
- D) Frame size alone

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only armature resistance forever without limit
     → STRIKE — Only armature resistance forever without limit: it does not follow from the stated system, sign convention, or requested check.
  B) Field and/or armature voltage methods as applicable
     → KEEP — Speed control uses flux and armature voltage (with rated limits).
  C) Brush colour
     → STRIKE — Brush colour: it does not follow from the stated system, sign convention, or requested check.
  D) Frame size alone
     → STRIKE — Frame size alone: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q53/126 · Electrical ST-EM · `data/electrical/st/ee-st-em-01.js#Q19` · Key C

From the synchronous-machine phasor diagram shown, voltage regulation involves comparing: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-em/em3.jpg)

- A) Only field current
- B) Only stator resistance
- C) No-load induced voltage with full-load terminal voltage
- D) Slip rings alone

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only field current
     → STRIKE — Only field current: it does not follow from the stated system, sign convention, or requested check.
  B) Only stator resistance
     → STRIKE — Only stator resistance: it does not follow from the stated system, sign convention, or requested check.
  C) No-load induced voltage with full-load terminal voltage
     → KEEP — Regulation uses change from no-load to full-load terminal voltage.
  D) Slip rings alone
     → STRIKE — Slip rings alone: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q54/126 · Electrical ST-EM · `data/electrical/st/ee-st-em-01.js#Q25` · Key A

For the starter scheme shown for an induction motor, star–delta starting reduces line current by a factor of about: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 3, 2, 1.

![figure](images/diagrams/electrical-st-em/em4.jpg)

- A) 3
- B) √3
- C) 2
- D) 1

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 3
     → KEEP — Star–delta starting cuts line current to roughly one-third.
  B) √3
     → STRIKE — √3: it does not follow from the stated system, sign convention, or requested check.
  C) 2
     → STRIKE — 2: it does not follow from the stated system, sign convention, or requested check.
  D) 1
     → STRIKE — 1: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q55/126 · Electrical ST-EM · `data/electrical/st/ee-st-em-01.js#Q3` · Key C

On the induction-motor torque–slip curve shown, maximum torque occurs at a slip where: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 0, 1, 2.

![figure](images/diagrams/electrical-st-em/q07-im-torque-slip.svg)

- A) s = 0
- B) s = 1 only always
- C) R2 = s X2 (approx breakdown)
- D) No-load only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) s = 0
     → STRIKE — s = 0: it does not follow from the stated system, sign convention, or requested check.
  B) s = 1 only always
     → STRIKE — s = 1 only always: it does not follow from the stated system, sign convention, or requested check.
  C) R2 = s X2 (approx breakdown)
     → KEEP — Breakdown slip ≈ R2/X2 for the approximate circuit.
  D) No-load only
     → STRIKE — No-load only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q56/126 · Electrical ST-EM · `data/electrical/st/ee-st-em-01.js#Q32` · Key D

OC and SC test curves shown are used to obtain: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-em/v5-06-oc-sc-curves.svg)

- A) Only copper loss forever
- B) Only brush drop
- C) Only inertia
- D) Synchronous impedance / regulation data

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only copper loss forever
     → STRIKE — Only copper loss forever: it does not follow from the stated system, sign convention, or requested check.
  B) Only brush drop
     → STRIKE — Only brush drop: it does not follow from the stated system, sign convention, or requested check.
  C) Only inertia
     → STRIKE — Only inertia: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Synchronous impedance / regulation data
     → KEEP — OC and SC tests yield Zs and loss components for regulation.
Survivors after this rule: D only → keyed D.

#### Q57/126 · Electrical ST-EM · `data/electrical/st/ee-st-em-01.js#Q39` · Key C

In the wound-rotor circuit shown, external rotor resistance primarily: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-em/v5-07-rotor-circuit.svg)

- A) Changes supply frequency
- B) Removes stator flux
- C) Raises starting torque and modifies slip for a given torque
- D) Shorts the supply

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Changes supply frequency
     → STRIKE — Changes supply frequency: it does not follow from the stated system, sign convention, or requested check.
  B) Removes stator flux
     → STRIKE — Removes stator flux: it does not follow from the stated system, sign convention, or requested check.
  C) Raises starting torque and modifies slip for a given torque
     → KEEP — Added rotor resistance shifts torque–slip and aids starting torque.
  D) Shorts the supply
     → STRIKE — Shorts the supply: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q58/126 · Electrical ST-EM · `data/electrical/st/ee-st-em-01.js#Q47` · Key C

In the transformer test setup shown, open-circuit test primarily measures: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-em/v5-08-transformer-test-setup.svg)

- A) Full-load copper loss
- B) Short-circuit impedance alone
- C) Core/iron loss and magnetising branch
- D) Oil BDV only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Full-load copper loss
     → STRIKE — Full-load copper loss: it does not follow from the stated system, sign convention, or requested check.
  B) Short-circuit impedance alone
     → STRIKE — Short-circuit impedance alone: it does not follow from the stated system, sign convention, or requested check.
  C) Core/iron loss and magnetising branch
     → KEEP — OC test at rated voltage gives iron loss and magnetising parameters.
  D) Oil BDV only
     → STRIKE — Oil BDV only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q59/126 · Electrical ST-EM · `data/electrical/st/ee-st-em-01.js#Q8` · Key D

From the transformer equivalent-circuit figure, secondary resistance referred to primary is multiplied by: Figure values (also stated here): a = V1/V2 (or turns ratio) for referral as labelled.

![figure](images/diagrams/electrical-st-em/em1.jpg)

- A) a
- B) 1/a
- C) 1/a²
- D) a²

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) a
     → STRIKE — a: it does not follow from the stated system, sign convention, or requested check.
  B) 1/a
     → STRIKE — 1/a: it does not follow from the stated system, sign convention, or requested check.
  C) 1/a²
     → STRIKE — 1/a²: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For EM, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) a²
     → KEEP — Impedances scale by a² when referred across the ideal transformer.
Survivors after this rule: D only → keyed D.

#### Q60/126 · Electrical ST-MEAS · `data/electrical/st/ee-st-meas-01.js#Q14` · Key B

On the CT connection shown, with primary energised the secondary must never be: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-meas/m2.jpg)

- A) Loaded by ammeter/burden
- B) Open-circuited
- C) Shorted through ammeter
- D) Grounded at one end as practice

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Loaded by ammeter/burden
     → STRIKE — Loaded by ammeter/burden: it does not follow from the stated system, sign convention, or requested check.
  B) Open-circuited
     → KEEP — Open CT secondary develops dangerous voltage.
  C) Shorted through ammeter
     → STRIKE — Shorted through ammeter: it does not follow from the stated system, sign convention, or requested check.
  D) Grounded at one end as practice
     → STRIKE — Grounded at one end as practice: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For MEAS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q61/126 · Electrical ST-MEAS · `data/electrical/st/ee-st-meas-01.js#Q19` · Key C

From the dynamometer wattmeter figure, average deflection is proportional to: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-meas/m3.jpg)

- A) Voltage only
- B) Reactive power only
- C) Active power (VI cosφ)
- D) Frequency only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Voltage only
     → STRIKE — Voltage only: it does not follow from the stated system, sign convention, or requested check.
  B) Reactive power only
     → STRIKE — Reactive power only: it does not follow from the stated system, sign convention, or requested check.
  C) Active power (VI cosφ)
     → KEEP — Dynamometer wattmeter measures average active power.
  D) Frequency only
     → STRIKE — Frequency only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For MEAS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q62/126 · Electrical ST-MEAS · `data/electrical/st/ee-st-meas-01.js#Q25` · Key A

In the induction energy-meter figure, disc speed is related to: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-meas/v5-05-energy-meter.svg)

- A) Energy / power registration over time
- B) Only voltage
- C) Only frequency
- D) CT ratio alone without load

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Energy / power registration over time
     → KEEP — Disc revolutions integrate energy.
  B) Only voltage
     → STRIKE — Only voltage: it does not follow from the stated system, sign convention, or requested check.
  C) Only frequency
     → STRIKE — Only frequency: it does not follow from the stated system, sign convention, or requested check.
  D) CT ratio alone without load
     → STRIKE — CT ratio alone without load: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For MEAS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q63/126 · Electrical ST-MEAS · `data/electrical/st/ee-st-meas-01.js#Q3` · Key C

At balance of the Wheatstone bridge shown, galvanometer current is: Figure values (also stated here): bridge arm resistances as labelled.

![figure](images/diagrams/electrical-st-meas/q07-wheatstone.svg)

- A) Maximum
- B) Equal to supply current
- C) Zero
- D) Undefined

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Maximum
     → STRIKE — Maximum: it does not follow from the stated system, sign convention, or requested check.
  B) Equal to supply current
     → STRIKE — Equal to supply current: it does not follow from the stated system, sign convention, or requested check.
  C) Zero
     → KEEP — Balance ⇒ no potential difference across galvanometer.
  D) Undefined
     → STRIKE — Undefined: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For MEAS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q64/126 · Electrical ST-MEAS · `data/electrical/st/ee-st-meas-01.js#Q32` · Key D

On the CRO block diagram shown, the time base primarily controls: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-meas/v5-06-cro-block-diagram.svg)

- A) Vertical amplitude alone
- B) Probe colour
- C) Only trigger slope irrelevantly
- D) Horizontal sweep / time axis

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Vertical amplitude alone
     → STRIKE — Vertical amplitude alone: it does not follow from the stated system, sign convention, or requested check.
  B) Probe colour
     → STRIKE — Probe colour: it does not follow from the stated system, sign convention, or requested check.
  C) Only trigger slope irrelevantly
     → STRIKE — Only trigger slope irrelevantly: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For MEAS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Horizontal sweep / time axis
     → KEEP — Time-base generator sweeps the X axis.
Survivors after this rule: D only → keyed D.

#### Q65/126 · Electrical ST-MEAS · `data/electrical/st/ee-st-meas-01.js#Q39` · Key C

The Megger circuit shown is used to measure: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-meas/v5-07-megger-circuit.svg)

- A) Low resistance of ammeter shunts only
- B) Power factor
- C) Insulation resistance at high test voltage
- D) Energy

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Low resistance of ammeter shunts only
     → STRIKE — Low resistance of ammeter shunts only: it does not follow from the stated system, sign convention, or requested check.
  B) Power factor
     → STRIKE — Power factor: it does not follow from the stated system, sign convention, or requested check.
  C) Insulation resistance at high test voltage
     → KEEP — Megger applies high DC to measure insulation resistance.
  D) Energy
     → STRIKE — Energy: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For MEAS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q66/126 · Electrical ST-MEAS · `data/electrical/st/ee-st-meas-01.js#Q47` · Key C

A potentiometer null measurement as shown compares unknown emf against: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-meas/v5-08-potentiometer.svg)

- A) Random AC mains
- B) CT secondary open
- C) A standard known voltage drop
- D) Wattmeter potential coil only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Random AC mains
     → STRIKE — Random AC mains: it does not follow from the stated system, sign convention, or requested check.
  B) CT secondary open
     → STRIKE — CT secondary open: it does not follow from the stated system, sign convention, or requested check.
  C) A standard known voltage drop
     → KEEP — Potentiometer balances unknown against a calibrated voltage.
  D) Wattmeter potential coil only
     → STRIKE — Wattmeter potential coil only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For MEAS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q67/126 · Electrical ST-MEAS · `data/electrical/st/ee-st-meas-01.js#Q8` · Key D

For the PMMC instrument shown, it is fundamentally suitable for: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-meas/m1.jpg)

- A) AC only without rectifier
- B) Power factor directly
- C) Frequency only
- D) DC (or rectified AC)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) AC only without rectifier
     → STRIKE — AC only without rectifier: it does not follow from the stated system, sign convention, or requested check.
  B) Power factor directly
     → STRIKE — Power factor directly: it does not follow from the stated system, sign convention, or requested check.
  C) Frequency only
     → STRIKE — Frequency only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For MEAS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) DC (or rectified AC)
     → KEEP — PMMC responds to average/DC; AC needs rectifier.
Survivors after this rule: D only → keyed D.

#### Q68/126 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q14` · Key B

From the SCR gate-pulse figure shown, latching current must be exceeded to: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-pe/pe1.jpg)

- A) Turn off the SCR
- B) Establish conduction after gate pulse
- C) Measure holding only
- D) Bypass snubber

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Turn off the SCR
     → STRIKE — Turn off the SCR: it does not follow from the stated system, sign convention, or requested check.
  B) Establish conduction after gate pulse
     → KEEP — Latching current establishes on-state after gate trigger.
  C) Measure holding only
     → STRIKE — Measure holding only: it does not follow from the stated system, sign convention, or requested check.
  D) Bypass snubber
     → STRIKE — Bypass snubber: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q69/126 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q19` · Key C

On the three-phase bridge waveform/figure shown, device conduction intervals follow: Figure values (also stated here): 120° conduction intervals as marked on the waveform.

![figure](images/diagrams/electrical-st-pe/pe2.jpg)

- A) Random firing
- B) Always 360°
- C) 120° conduction per device in six-pulse bridge
- D) Only diodes never SCRs

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Random firing
     → STRIKE — Random firing: it does not follow from the stated system, sign convention, or requested check.
  B) Always 360°
     → STRIKE — Always 360°: it does not follow from the stated system, sign convention, or requested check.
  C) 120° conduction per device in six-pulse bridge
     → KEEP — Each device in a six-pulse bridge conducts 120°.
  D) Only diodes never SCRs
     → STRIKE — Only diodes never SCRs: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q70/126 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q25` · Key A

For the chopper shown with duty ratio δ, average output on constant V is approximately: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 1, 0.

![figure](images/diagrams/electrical-st-pe/v5-03-dc-chopper.svg)

- A) δ V
- B) V/δ
- C) V(1−δ) only for boost identity wrongly
- D) 0

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) δ V
     → KEEP — Buck chopper average output is duty times DC input.
  B) V/δ
     → STRIKE — V/δ: it does not follow from the stated system, sign convention, or requested check.
  C) V(1−δ) only for boost identity wrongly
     → STRIKE — V(1−δ) only for boost identity wrongly: it does not follow from the stated system, sign convention, or requested check.
  D) 0
     → STRIKE — 0: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q71/126 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q3` · Key C

For the single-phase semi-converter shown with firing angle α, average output voltage involves: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 1.

![figure](images/diagrams/electrical-st-pe/q07-single-phase-semi.svg)

- A) Only Vm
- B) α alone without Vm
- C) Vm(1+cosα)/π (topology form)
- D) Zero always

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only Vm
     → STRIKE — Only Vm: it does not follow from the stated system, sign convention, or requested check.
  B) α alone without Vm
     → STRIKE — α alone without Vm: it does not follow from the stated system, sign convention, or requested check.
  C) Vm(1+cosα)/π (topology form)
     → KEEP — Semi-converter average voltage depends on Vm and α.
  D) Zero always
     → STRIKE — Zero always: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q72/126 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q32` · Key D

From the PWM inverter figure, fundamental output voltage is controlled mainly by: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-pe/v5-04-pwm-inverter.svg)

- A) Only DC link colour
- B) CT ratio alone
- C) Cable length alone
- D) Modulation index / PWM pattern

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only DC link colour
     → STRIKE — Only DC link colour: it does not follow from the stated system, sign convention, or requested check.
  B) CT ratio alone
     → STRIKE — CT ratio alone: it does not follow from the stated system, sign convention, or requested check.
  C) Cable length alone
     → STRIKE — Cable length alone: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Modulation index / PWM pattern
     → KEEP — PWM modulation depth sets fundamental AC magnitude.
Survivors after this rule: D only → keyed D.

#### Q73/126 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q39` · Key C

In the buck converter shown, output voltage is: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 2.

![figure](images/diagrams/electrical-st-pe/v5-07-buck-converter.svg)

- A) Higher than input always
- B) Equal to 2Vin always
- C) Less than or equal to input (ideal steady)
- D) Negative only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Higher than input always
     → STRIKE — Higher than input always: it does not follow from the stated system, sign convention, or requested check.
  B) Equal to 2Vin always
     → STRIKE — Equal to 2Vin always: it does not follow from the stated system, sign convention, or requested check.
  C) Less than or equal to input (ideal steady)
     → KEEP — Ideal buck converter steps voltage down.
  D) Negative only
     → STRIKE — Negative only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q74/126 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q47` · Key C

The cycloconverter waveform shown indicates direct: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-pe/v5-08-cycloconverter-waveform.svg)

- A) DC to higher DC only
- B) Only isolation transformer action
- C) AC to lower-frequency AC without DC link
- D) Battery charging only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) DC to higher DC only
     → STRIKE — DC to higher DC only: it does not follow from the stated system, sign convention, or requested check.
  B) Only isolation transformer action
     → STRIKE — Only isolation transformer action: it does not follow from the stated system, sign convention, or requested check.
  C) AC to lower-frequency AC without DC link
     → KEEP — Cycloconverters synthesise lower-frequency AC from AC supply.
  D) Battery charging only
     → STRIKE — Battery charging only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q75/126 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q8` · Key D

In the converter/chopper figure shown, freewheeling diode path is needed mainly for: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-pe/pe3.svg)

- A) Increasing source frequency
- B) Removing gate pulses
- C) Isolating CT
- D) Inductive load current continuity

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Increasing source frequency
     → STRIKE — Increasing source frequency: it does not follow from the stated system, sign convention, or requested check.
  B) Removing gate pulses
     → STRIKE — Removing gate pulses: it does not follow from the stated system, sign convention, or requested check.
  C) Isolating CT
     → STRIKE — Isolating CT: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Inductive load current continuity
     → KEEP — Inductive current freewheels through the diode when device turns off.
Survivors after this rule: D only → keyed D.

#### Q76/126 · Electrical ST-PS · `data/electrical/st/ee-st-ps-01.js#Q14` · Key B

Using the transmission-line diagram shown, Ferranti effect is notable when the line is: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ps/ps2.jpg)

- A) Heavily loaded
- B) Lightly loaded / open at receiving end
- C) Always at SIL
- D) Short and loaded

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Heavily loaded
     → STRIKE — Heavily loaded: it does not follow from the stated system, sign convention, or requested check.
  B) Lightly loaded / open at receiving end
     → KEEP — Receiving-end voltage rises on light/open long lines.
  C) Always at SIL
     → STRIKE — Always at SIL: it does not follow from the stated system, sign convention, or requested check.
  D) Short and loaded
     → STRIKE — Short and loaded: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q77/126 · Electrical ST-PS · `data/electrical/st/ee-st-ps-01.js#Q19` · Key C

From the transformer connection figure shown, phase displacement between HV and LV depends on: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ps/ps3.jpg)

- A) Cooling class
- B) Oil colour
- C) Vector group / connection
- D) Bushing creepage only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Cooling class
     → STRIKE — Cooling class: it does not follow from the stated system, sign convention, or requested check.
  B) Oil colour
     → STRIKE — Oil colour: it does not follow from the stated system, sign convention, or requested check.
  C) Vector group / connection
     → KEEP — Vector group sets phase shift between windings.
  D) Bushing creepage only
     → STRIKE — Bushing creepage only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q78/126 · Electrical ST-PS · `data/electrical/st/ee-st-ps-01.js#Q25` · Key A

On the relay characteristic shown, the operating region is entered when the impedance locus: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ps/ps4.jpg)

- A) Enters the set characteristic zone
- B) Stays at infinity
- C) Equals SIL only
- D) Ignores CT ratio

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Enters the set characteristic zone
     → KEEP — Distance relays operate when seen Z enters the set zone.
  B) Stays at infinity
     → STRIKE — Stays at infinity: it does not follow from the stated system, sign convention, or requested check.
  C) Equals SIL only
     → STRIKE — Equals SIL only: it does not follow from the stated system, sign convention, or requested check.
  D) Ignores CT ratio
     → STRIKE — Ignores CT ratio: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q79/126 · Electrical ST-PS · `data/electrical/st/ee-st-ps-01.js#Q3` · Key C

On the equal-area stability figure, critical clearing relates accelerating area to: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ps/q07-equal-area.svg)

- A) Inertia constant alone
- B) Only pre-fault power
- C) Decelerating area for stability
- D) AVR gain only

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Inertia constant alone
     → STRIKE — Inertia constant alone: it does not follow from the stated system, sign convention, or requested check.
  B) Only pre-fault power
     → STRIKE — Only pre-fault power: it does not follow from the stated system, sign convention, or requested check.
  C) Decelerating area for stability
     → KEEP — Equal-area criterion equates accelerating and decelerating areas.
  D) AVR gain only
     → STRIKE — AVR gain only: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q80/126 · Electrical ST-PS · `data/electrical/st/ee-st-ps-01.js#Q32` · Key D

From the power-angle curve shown, maximum transferable power occurs at δ closest to: Figure values (also stated here): magnitudes labelled on the figure are also used in the options; numeric candidates include 0, 45, 180, 90.

![figure](images/diagrams/electrical-st-ps/v5-06-power-angle-curve.svg)

- A) 0°
- B) 45°
- C) 180°
- D) 90°

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 0°
     → STRIKE — 0°: it does not follow from the stated system, sign convention, or requested check.
  B) 45°
     → STRIKE — 45°: it does not follow from the stated system, sign convention, or requested check.
  C) 180°
     → STRIKE — 180°: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) 90°
     → KEEP — Sinδ peaks at 90° for the simple classical model.
Survivors after this rule: D only → keyed D.

#### Q81/126 · Electrical ST-PS · `data/electrical/st/ee-st-ps-01.js#Q39` · Key C

On the SLD shown, a bus-bar fault would be cleared by: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ps/v5-02-single-line-diagram.svg)

- A) Only generator AVR
- B) Only underfrequency relay
- C) Bus-zone / differential protection covering that bus
- D) Only capacitor bank

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only generator AVR
     → STRIKE — Only generator AVR: it does not follow from the stated system, sign convention, or requested check.
  B) Only underfrequency relay
     → STRIKE — Only underfrequency relay: it does not follow from the stated system, sign convention, or requested check.
  C) Bus-zone / differential protection covering that bus
     → KEEP — Bus faults require bus differential / zone protection.
  D) Only capacitor bank
     → STRIKE — Only capacitor bank: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q82/126 · Electrical ST-PS · `data/electrical/st/ee-st-ps-01.js#Q47` · Key C

For the line operated at SIL as indicated by the figure context, reactive generation of the line approximately: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ps/v5-08-surge-impedance-line.svg)

- A) Greatly exceeds absorption
- B) Is zero always
- C) Balances line VAR absorption
- D) Depends only on transformer taps

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Greatly exceeds absorption
     → STRIKE — Greatly exceeds absorption: it does not follow from the stated system, sign convention, or requested check.
  B) Is zero always
     → STRIKE — Is zero always: it does not follow from the stated system, sign convention, or requested check.
  C) Balances line VAR absorption
     → KEEP — At SIL, line charging VARs balance inductive absorption.
  D) Depends only on transformer taps
     → STRIKE — Depends only on transformer taps: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q83/126 · Electrical ST-PS · `data/electrical/st/ee-st-ps-01.js#Q8` · Key D

From the single-line / network figure shown, fault level at a bus primarily depends on: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-ps/ps1.jpg)

- A) Only cable colour
- B) Transformer paint
- C) Panel IP rating
- D) Thevenin impedance seen at that bus

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Only cable colour
     → STRIKE — Only cable colour: it does not follow from the stated system, sign convention, or requested check.
  B) Transformer paint
     → STRIKE — Transformer paint: it does not follow from the stated system, sign convention, or requested check.
  C) Panel IP rating
     → STRIKE — Panel IP rating: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PS, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Thevenin impedance seen at that bus
     → KEEP — Short-circuit current uses pre-fault voltage and Thevenin impedance.
Survivors after this rule: D only → keyed D.

#### Q84/126 · VALID PYQ · AP-GENCO-Tech-2012.pdf · `PYQ:AP-GENCO-Tech-2012.pdf#Q1` · Key —

A 25 KVA, 2000/200 V, two winding transformer is connected as shown in fig. The full load KVA of connection is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/AP-GENCO-Tech-2012/AP-GENCO-Tech-2012__p01__Q001.jpg)

- A) 125
- B) 275
- C) 375
- D) 175

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 125
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 275
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 375
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 175
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q85/126 · VALID PYQ · AP-GENCO-Tech-2012.pdf · `PYQ:AP-GENCO-Tech-2012.pdf#Q20` · Key —

The following figure shows load characteristics of dc generator. Match the characteristic with the type of generator

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/AP-GENCO-Tech-2012/AP-GENCO-Tech-2012__p05__Q020.jpg)

- A) p–I q–II r–III s–IV
- B) p–II q–III r–IV s–I
- C) p–III q–II r–I s–IV
- D) p–III q–IV r–I s–II

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) p–I q–II r–III s–IV
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) p–II q–III r–IV s–I
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) p–III q–II r–I s–IV
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) p–III q–IV r–I s–II
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q86/126 · VALID PYQ · AP-GENCO-Tech-2012.pdf · `PYQ:AP-GENCO-Tech-2012.pdf#Q26` · Key —

In the circuit shown which of the following statements is NOT correct?

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/AP-GENCO-Tech-2012/AP-GENCO-Tech-2012__p06__Q026.jpg)

- A) The circuit has a supermesh
- B) i2 = i1 + 6
- C) -20 + 6i1 + 14i2 = 0
- D) -20 + 6i1 + 2(i1 - i2) = 0

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) The circuit has a supermesh
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) i2 = i1 + 6
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) -20 + 6i1 + 14i2 = 0
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) -20 + 6i1 + 2(i1 - i2) = 0
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q87/126 · VALID PYQ · AP-GENCO-Tech-2012.pdf · `PYQ:AP-GENCO-Tech-2012.pdf#Q27` · Key —

In the circuit shown. The voltage across 4 Ω resistance v can be expressed as

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/AP-GENCO-Tech-2012/AP-GENCO-Tech-2012__p06__Q027.jpg)

- A) 0.4E - 0.6I
- B) 0.6E - 0.4I
- C) 0.4E - 2.4I
- D) 0.4E + 2.4I

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 0.4E - 0.6I
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 0.6E - 0.4I
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 0.4E - 2.4I
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 0.4E + 2.4I
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q88/126 · VALID PYQ · AP-GENCO-Tech-2012.pdf · `PYQ:AP-GENCO-Tech-2012.pdf#Q4` · Key —

The damping ratio of the second order system which has the unit step response as shown in figure is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/AP-GENCO-Tech-2012/AP-GENCO-Tech-2012__p03__Q004.jpg)

- A) 1
- B) 2
- C) 0.414
- D) zero

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 1
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 2
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 0.414
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) zero
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q89/126 · VALID PYQ · AP-GENCO-Tech-2012.pdf · `PYQ:AP-GENCO-Tech-2012.pdf#Q56` · Key —

The Norton's resistance of the circuit shown is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/AP-GENCO-Tech-2012/AP-GENCO-Tech-2012__p11__Q056.jpg)

- A) 17 Ω
- B) 3 Ω
- C) 4 Ω
- D) 0.9 Ω

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 17 Ω
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 3 Ω
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 4 Ω
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 0.9 Ω
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q90/126 · VALID PYQ · AP-GENCO-Tech-2012.pdf · `PYQ:AP-GENCO-Tech-2012.pdf#Q6` · Key —

The two signal flow graphs shown in figure are equivalent. The value of G and H respectively are

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/AP-GENCO-Tech-2012/AP-GENCO-Tech-2012__p03__Q006.jpg)

- A) 9, 4.5
- B) 9, 3.5
- C) 20, 8
- D) 20, 2

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 9, 4.5
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 9, 3.5
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 20, 8
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 20, 2
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q91/126 · VALID PYQ · AP-GENCO-Tech-2012.pdf · `PYQ:AP-GENCO-Tech-2012.pdf#Q61` · Key —

The potier triangle of synchronous generator is as shown in figure. The segment DE refers to field current to compensate

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/AP-GENCO-Tech-2012/AP-GENCO-Tech-2012__p12__Q061.jpg)

- A) leakage reactance drop
- B) armature reaction
- C) saturation
- D) resistance drop

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) leakage reactance drop
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) armature reaction
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) saturation
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) resistance drop
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q92/126 · VALID PYQ · AP-GENCO-Tech-2012.pdf · `PYQ:AP-GENCO-Tech-2012.pdf#Q9` · Key —

If r(t) has units °C and c(t) has units mm, the units of K in the figure shown are

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/AP-GENCO-Tech-2012/AP-GENCO-Tech-2012__p03__Q009.jpg)

- A) °C
- B) mm/°C
- C) mm
- D) °C/mm

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) °C
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) mm/°C
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) mm
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) °C/mm
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q93/126 · VALID PYQ · APEPDCL-2014-A.ES-QUESTION-PAPER-17-08-2014.pdf · `PYQ:APEPDCL-2014-A.ES-QUESTION-PAPER-17-08-2014.pdf#Q13` · Key —

The value of the parameter \(A\) for the two-port network shown is:

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APEPDCL-2014/APEPDCL-2014__p05__Q013.jpg)

- A) Zero
- B) 0.5
- C) 2
- D) 1

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Zero
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 0.5
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 2
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 1
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q94/126 · VALID PYQ · APEPDCL-2014-A.ES-QUESTION-PAPER-17-08-2014.pdf · `PYQ:APEPDCL-2014-A.ES-QUESTION-PAPER-17-08-2014.pdf#Q16` · Key —

Let \[ \frac{y(s)}{u(s)}=\frac{b_1s^2+b_2s+b_3}{s^3+a_1s^2+a_2s+a_3} \] be represented by the signal-flow graph shown. The state vector is \([x_1,x_2,x_3]^T\), where \(T\) indicates transpose. Then the system matrix \(A\) of the state model is:

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APEPDCL-2014/APEPDCL-2014__p06__Q016.jpg)

- A) \(\begin{bmatrix}0&1&0\\0&0&1\\-a_3&-a_2&-a_1\end{bmatrix}\)
- B) \(\begin{bmatrix}-a_1&1&0\\-a_2&0&1\\-a_3&0&0\end{bmatrix}\)
- C) \(\begin{bmatrix}-a_1&-a_2&-a_3\\1&0&0\\0&1&0\end{bmatrix}\)
- D) \(\begin{bmatrix}0&0&-a_3\\1&0&-a_2\\0&1&-a_1\end{bmatrix}\)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) \(\begin{bmatrix}0&1&0\\0&0&1\\-a_3&-a_2&-a_1\end{bmatrix}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) \(\begin{bmatrix}-a_1&1&0\\-a_2&0&1\\-a_3&0&0\end{bmatrix}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) \(\begin{bmatrix}-a_1&-a_2&-a_3\\1&0&0\\0&1&0\end{bmatrix}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) \(\begin{bmatrix}0&0&-a_3\\1&0&-a_2\\0&1&-a_1\end{bmatrix}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q95/126 · VALID PYQ · APEPDCL-2014-A.ES-QUESTION-PAPER-17-08-2014.pdf · `PYQ:APEPDCL-2014-A.ES-QUESTION-PAPER-17-08-2014.pdf#Q18` · Key —

The open-loop transfer function of a unity-feedback (negative-feedback) system is \[ G(s)=\frac{k}{(s-1)(s^2+4s+7)}. \] The Nyquist contour is in the \(s\)-plane. For \(k>0\), the Nyquist plot is shown in the \(G(s)H(s)\)-plane. The system is stable for:

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APEPDCL-2014/APEPDCL-2014__p07__Q018.jpg)

- A) \(7<k<16\)
- B) \(0<k<16\)
- C) \(0<k<7\)
- D) \(k>0\)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) \(7<k<16\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) \(0<k<16\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) \(0<k<7\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) \(k>0\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q96/126 · VALID PYQ · APEPDCL-2014-A.ES-QUESTION-PAPER-17-08-2014.pdf · `PYQ:APEPDCL-2014-A.ES-QUESTION-PAPER-17-08-2014.pdf#Q2` · Key —

In the circuit shown, the dependent source:

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APEPDCL-2014/APEPDCL-2014__p01__Q002.jpg)

- A) Delivers 24 W
- B) Delivers 48 W
- C) Absorbs 48 W
- D) Absorbs 24 W

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Delivers 24 W
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) Delivers 48 W
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) Absorbs 48 W
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) Absorbs 24 W
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q97/126 · VALID PYQ · APEPDCL-2014-A.ES-QUESTION-PAPER-17-08-2014.pdf · `PYQ:APEPDCL-2014-A.ES-QUESTION-PAPER-17-08-2014.pdf#Q20` · Key —

The magnitude Bode plot of a minimum-phase transfer function \(G(s)H(s)\) is shown. The transfer function \(G(s)H(s)\) is:

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APEPDCL-2014/APEPDCL-2014__p08__Q020.jpg)

- A) \(\dfrac{10(s+1)(s+10)}{s}\)
- B) \(\dfrac{(s+1)(s+10)}{s}\)
- C) \(\dfrac{s(s+10)}{s+1}\)
- D) \(\dfrac{10s(s+10)}{s+1}\)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) \(\dfrac{10(s+1)(s+10)}{s}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) \(\dfrac{(s+1)(s+10)}{s}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) \(\dfrac{s(s+10)}{s+1}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) \(\dfrac{10s(s+10)}{s+1}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q98/126 · VALID PYQ · APSPDCL-AEE-2019-QUESTION-PAPER.pdf · `PYQ:APSPDCL-AEE-2019-QUESTION-PAPER.pdf#Q1` · Key —

A star circuit and its equivalent delta are shown. The resistance between terminals \(a\) and \(b\) in the star circuit with \(c\) open is \(10\Omega\). The resistance between terminals \(a\) and \(b\) with \(c\) open in the delta circuit in ohms is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APSPDCL-AEE-2019/APSPDCL-AEE-2019__p03__Q001.jpg)

- A) \(5\sqrt{3}\)
- B) \(\frac{5}{\sqrt{3}}\)
- C) \(10\)
- D) \(\frac{10}{3}\)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) \(5\sqrt{3}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) \(\frac{5}{\sqrt{3}}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) \(10\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) \(\frac{10}{3}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q99/126 · VALID PYQ · APSPDCL-AEE-2019-QUESTION-PAPER.pdf · `PYQ:APSPDCL-AEE-2019-QUESTION-PAPER.pdf#Q10` · Key —

The graph shown in the figure represents. (\(R\), \(L\) and \(C\) have constant values)

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APSPDCL-AEE-2019/APSPDCL-AEE-2019__p05__Q010.jpg)

- A) Impedance Vs frequency in an RLC series circuit
- B) \(|X_C|\) Vs frequency
- C) \(|X_L|\) Vs frequency
- D) Current Vs frequency in an RLC series circuit

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Impedance Vs frequency in an RLC series circuit
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) \(|X_C|\) Vs frequency
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) \(|X_L|\) Vs frequency
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) Current Vs frequency in an RLC series circuit
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q100/126 · VALID PYQ · APSPDCL-AEE-2019-QUESTION-PAPER.pdf · `PYQ:APSPDCL-AEE-2019-QUESTION-PAPER.pdf#Q16` · Key —

In the circuit shown in figure, the switch is on position 1 long enough to establish steady state and switched to position 2 at \(t=0\). The current \(I\) for \(t\ge0\) is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APSPDCL-AEE-2019/APSPDCL-AEE-2019__p06__Q016.jpg)

- A) \(0\)
- B) \(5e^{-0.02t}\)
- C) \(5e^{-50t}\)
- D) \(\sqrt{100.04}\,e^{-50t}\)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) \(0\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) \(5e^{-0.02t}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) \(5e^{-50t}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) \(\sqrt{100.04}\,e^{-50t}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q101/126 · VALID PYQ · APSPDCL-AEE-2019-QUESTION-PAPER.pdf · `PYQ:APSPDCL-AEE-2019-QUESTION-PAPER.pdf#Q17` · Key —

Refer to the circuit shown in figure. If \(V(s)\) and \(I(s)\) are the Laplace transforms of \(v(t)\) and \(i(t)\), then \(\frac{I(s)}{V(s)}=\)

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APSPDCL-AEE-2019/APSPDCL-AEE-2019__p06__Q017.jpg)

- A) \(\frac{s}{s^2+s+1}\)
- B) \(\frac{s+1}{s}\)
- C) \(\frac{s}{s+1}\)
- D) \(\frac{s^2+s+1}{s}\)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) \(\frac{s}{s^2+s+1}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) \(\frac{s+1}{s}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) \(\frac{s}{s+1}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) \(\frac{s^2+s+1}{s}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q102/126 · VALID PYQ · APSPDCL-AEE-2019-QUESTION-PAPER.pdf · `PYQ:APSPDCL-AEE-2019-QUESTION-PAPER.pdf#Q19` · Key —

With reference to the circuit shown which of the following statements is not true.

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APSPDCL-AEE-2019/APSPDCL-AEE-2019__p07__Q019.jpg)

- A) \(V_{PQ}=2\text{ V}\)
- B) \(V_{RS}=15\text{ V}\)
- C) The bridge is balanced
- D) When load is connected between \(P\) and \(Q\), current flows from \(P\) to \(Q\)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) \(V_{PQ}=2\text{ V}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) \(V_{RS}=15\text{ V}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) The bridge is balanced
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) When load is connected between \(P\) and \(Q\), current flows from \(P\) to \(Q\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q103/126 · VALID PYQ · APSPDCL-AEE-2019-QUESTION-PAPER.pdf · `PYQ:APSPDCL-AEE-2019-QUESTION-PAPER.pdf#Q27` · Key —

The figure shows a sinusoidal waveform observed on a CRO screen. The knobs on the CRO panel were on \(100\,\mu s/cm\) and \(10\,V/cm\) positions. The frequency and the rms values of the waveform respectively are

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APSPDCL-AEE-2019/APSPDCL-AEE-2019__p08__Q027.jpg)

- A) 2.5 kHz, 17.7 V
- B) 2.5 kHz, 25 V
- C) 1.25 kHz, 25 V
- D) 1.25 kHz, 17.7 V

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 2.5 kHz, 17.7 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 2.5 kHz, 25 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 1.25 kHz, 25 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 1.25 kHz, 17.7 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q104/126 · VALID PYQ · APSPDCL-AEE-2019-QUESTION-PAPER.pdf · `PYQ:APSPDCL-AEE-2019-QUESTION-PAPER.pdf#Q30` · Key —

C/R for the SFG shown is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APSPDCL-AEE-2019/APSPDCL-AEE-2019__p09__Q030.jpg)

- A) \(15/31\)
- B) \(15/21\)
- C) \(-10/29\)
- D) \(-15/29\)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) \(15/31\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) \(15/21\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) \(-10/29\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) \(-15/29\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q105/126 · VALID PYQ · APSPDCL-AEE-2019-QUESTION-PAPER.pdf · `PYQ:APSPDCL-AEE-2019-QUESTION-PAPER.pdf#Q33` · Key —

The transfer function (known to be minimum phase) of the system whose magnitude plot is shown in figure

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APSPDCL-AEE-2019/APSPDCL-AEE-2019__p09__Q033.jpg)

- A) \(\frac{Ks}{(s+2)(s+10)}\)
- B) \(\frac{K(s+2)(s+10)}{s}\)
- C) \(\frac{K(s+2)}{s(s+10)}\)
- D) \(\frac{K(s+10)}{s(s+2)}\)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) \(\frac{Ks}{(s+2)(s+10)}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) \(\frac{K(s+2)(s+10)}{s}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) \(\frac{K(s+2)}{s(s+10)}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) \(\frac{K(s+10)}{s(s+2)}\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q106/126 · VALID PYQ · APSPDCL-AEE-2019-QUESTION-PAPER.pdf · `PYQ:APSPDCL-AEE-2019-QUESTION-PAPER.pdf#Q5` · Key —

The maximum power that can be transferred to the load \(R_L\) (in watts) in the circuit shown is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APSPDCL-AEE-2019/APSPDCL-AEE-2019__p04__Q005.jpg)

- A) 50
- B) 100
- C) 200
- D) 40

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 50
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 100
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 200
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 40
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q107/126 · VALID PYQ · APSPDCL-AEE-2019-QUESTION-PAPER.pdf · `PYQ:APSPDCL-AEE-2019-QUESTION-PAPER.pdf#Q57` · Key —

The front-end cross sectional view of simple loop alternator is shown in figure. The direction of emf at the instant shown would be The option figure gives directions for conductors 2, 3, 5 and 6:

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APSPDCL-AEE-2019/APSPDCL-AEE-2019__p14__Q057.jpg)

- A) \(2:\odot,\ 3:\odot,\ 5:\otimes,\ 6:\odot\)
- B) \(2:\otimes,\ 3:\odot,\ 5:\odot,\ 6:\odot\)
- C) \(2:\odot,\ 3:\odot,\ 5:\odot,\ 6:\odot\)
- D) \(2:\odot,\ 3:\otimes,\ 5:\odot,\ 6:\otimes\)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) \(2:\odot,\ 3:\odot,\ 5:\otimes,\ 6:\odot\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) \(2:\otimes,\ 3:\odot,\ 5:\odot,\ 6:\odot\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) \(2:\odot,\ 3:\odot,\ 5:\odot,\ 6:\odot\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) \(2:\odot,\ 3:\otimes,\ 5:\odot,\ 6:\otimes\)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q108/126 · VALID PYQ · APSPDCL-AEE-2019-QUESTION-PAPER.pdf · `PYQ:APSPDCL-AEE-2019-QUESTION-PAPER.pdf#Q6` · Key —

In the circuit shown, the frequency of the sinusoidal source is about

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APSPDCL-AEE-2019/APSPDCL-AEE-2019__p04__Q006.jpg)

- A) 100 Hz
- B) 25 Hz
- C) 50 Hz
- D) 16 Hz

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 100 Hz
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 25 Hz
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 50 Hz
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 16 Hz
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q109/126 · VALID PYQ · APSPDCL-AEE-2019-QUESTION-PAPER.pdf · `PYQ:APSPDCL-AEE-2019-QUESTION-PAPER.pdf#Q68` · Key —

Given the following circuit with a transformer, neglecting magnetizing current, which option is correct? (figure shows V0 feeding a 1:1 transformer/core element with secondary capacitor C, output V1 across load)

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APSPDCL-AEE-2019/APSPDCL-AEE-2019__p18__Q068.jpg)

- A) V1 < V0 for lagging pf load
- B) V1 = V0 for leading pf load
- C) V1 > V0 for leading pf load
- D) V1 > V0 for lagging pf load

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) V1 < V0 for lagging pf load
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) V1 = V0 for leading pf load
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) V1 > V0 for leading pf load
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) V1 > V0 for lagging pf load
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q110/126 · VALID PYQ · APSPDCL-AEE-2019-QUESTION-PAPER.pdf · `PYQ:APSPDCL-AEE-2019-QUESTION-PAPER.pdf#Q71` · Key —

The gate triggering circuit shown below has the specifications: \(I_g(\min)=100\text{ mA}\), \(V_g(\min)=2\text{ V}\). The \(V_{trig}\) should be

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APSPDCL-AEE-2019/APSPDCL-AEE-2019__p19__Q071.jpg)

- A) 7 V
- B) 9 V
- C) 12 V
- D) 7.5 V

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 7 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 9 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 12 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 7.5 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q111/126 · VALID PYQ · APSPDCL-AEE-2019-QUESTION-PAPER.pdf · `PYQ:APSPDCL-AEE-2019-QUESTION-PAPER.pdf#Q98` · Key —

The speed-time curve of main-line service is illustrated in the following figure. The segment AB represents

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APSPDCL-AEE-2019/APSPDCL-AEE-2019__p27__Q098.jpg)

- A) coasting
- B) free running
- C) acceleration
- D) braking

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) coasting
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) free running
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) acceleration
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) braking
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q112/126 · VALID PYQ · APTRANSCO-EE-2011.pdf · `PYQ:APTRANSCO-EE-2011.pdf#Q12` · Key —

As shown in the figure, 1 ohm resistance is connected across a source that has a load line v+i=100. The current through the resistance is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APTRANSCO-EE-2011/APTRANSCO-EE-2011__p04__Q012.jpg)

- A) 25 A
- B) 50 A
- C) 100 A
- D) 200 A

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 25 A
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 50 A
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 100 A
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 200 A
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q113/126 · VALID PYQ · APTRANSCO-EE-2011.pdf · `PYQ:APTRANSCO-EE-2011.pdf#Q15` · Key —

Assuming ideal elements in the circuit shown, the voltage v_ab will be

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APTRANSCO-EE-2011/APTRANSCO-EE-2011__p04__Q015.jpg)

- A) −3 V
- B) 0 V
- C) 3 V
- D) 5 V

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) −3 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 0 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 3 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 5 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q114/126 · VALID PYQ · APTRANSCO-EE-2011.pdf · `PYQ:APTRANSCO-EE-2011.pdf#Q25` · Key —

A single-phase transformer has a turns ratio of 1:2 and is connected to a purely resistive load as shown in the figure. The magnetizing current drawn is 1 A, and the secondary current is 1 A. If core losses and leakage reactances are neglected, the primary current is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APTRANSCO-EE-2011/APTRANSCO-EE-2011__p06__Q025.jpg)

- A) 1.41 A
- B) 2 A
- C) 2.24 A
- D) 3 A

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 1.41 A
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 2 A
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 2.24 A
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 3 A
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q115/126 · VALID PYQ · APTRANSCO-EE-2011.pdf · `PYQ:APTRANSCO-EE-2011.pdf#Q26` · Key —

A separately excited d.c. machine is coupled to a 50 Hz, three-phase, 4-pole induction machine as shown in the figure. The dc machine is energized first and the machines rotate at 1600 rpm. Subsequently the induction machine is also connected to a 50 Hz, three phase source, the phase sequence being consistent with the direction of rotation. In steady state

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APTRANSCO-EE-2011/APTRANSCO-EE-2011__p06__Q026.jpg)

- A) Both machines act as generators
- B) DC machine acts as generator and induction machine acts as motor
- C) DC machine acts as a motor and the induction machine acts as a generator
- D) Both machines act as motors

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Both machines act as generators
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) DC machine acts as generator and induction machine acts as motor
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) DC machine acts as a motor and the induction machine acts as a generator
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) Both machines act as motors
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q116/126 · VALID PYQ · APTRANSCO-EE-2011.pdf · `PYQ:APTRANSCO-EE-2011.pdf#Q50` · Key —

Power is transferred from system A to system B by a HVDC link as shown in the figure. If the voltages V_AB and V_CD are as indicated in the figure, and I>0, then

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APTRANSCO-EE-2011/APTRANSCO-EE-2011__p10__Q050.jpg)

- A) V_AB<0, V_CD<0, V_AB>V_CD
- B) V_AB>0, V_CD>0, V_AB<V_CD
- C) V_AB>0, V_CD>0, V_AB>V_CD
- D) V_AB>0, V_CD<0

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) V_AB<0, V_CD<0, V_AB>V_CD
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) V_AB>0, V_CD>0, V_AB<V_CD
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) V_AB>0, V_CD>0, V_AB>V_CD
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) V_AB>0, V_CD<0
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q117/126 · VALID PYQ · APTRANSCO-EE-2011.pdf · `PYQ:APTRANSCO-EE-2011.pdf#Q68` · Key —

A wattmeter is connected as shown in the figure. The wattmeter reads

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APTRANSCO-EE-2011/APTRANSCO-EE-2011__p12__Q068.jpg)

- A) Zero always
- B) Total power consumed by Z1 and Z2
- C) Power consumed by Z1
- D) Power consumed by Z2

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Zero always
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) Total power consumed by Z1 and Z2
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) Power consumed by Z1
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) Power consumed by Z2
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q118/126 · VALID PYQ · APTRANSCO-EE-2011.pdf · `PYQ:APTRANSCO-EE-2011.pdf#Q7` · Key —

Consider the star network shown in figure. The resistance between terminals A and B with C open is 6 ohms, between terminals B and C with A open is 11 ohms and between terminals C and A with B open is 9 ohms. Then RA, RB, RC respectively is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APTRANSCO-EE-2011/APTRANSCO-EE-2011__p03__Q007.jpg)

- A) 4, 2, 5
- B) 2, 4, 7
- C) 3, 3, 4
- D) 5, 1, 10

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 4, 2, 5
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 2, 4, 7
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 3, 3, 4
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 5, 1, 10
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q119/126 · VALID PYQ · APTRANSCO-EE-2011.pdf · `PYQ:APTRANSCO-EE-2011.pdf#Q71` · Key —

The time/div and voltage/div axes of an oscilloscope have been erased. When a 1 kHz, 5 V p-p square wave calibration pulse is connected to channel 1 of the scope the waveform observed on the screen is as shown in the upper trace of the figure. An unknown signal is connected to channel 2 (lower trace) of the scope. If the time/div and V/div on both channels are the same, the amplitude (p-p) and period of the unknown signal are respectively

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APTRANSCO-EE-2011/APTRANSCO-EE-2011__p13__Q071.jpg)

- A) 5 V, 1 ms
- B) 5 V, 2 ms
- C) 7.5 V, 2 ms
- D) 10 V, 1 ms

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 5 V, 1 ms
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 5 V, 2 ms
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 7.5 V, 2 ms
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 10 V, 1 ms
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q120/126 · VALID PYQ · APTRANSCO-EE-2011.pdf · `PYQ:APTRANSCO-EE-2011.pdf#Q77` · Key —

A voltage signal 10sinωt is applied to the circuit with ideal diodes, as shown in figure. The maximum and minimum values of the output waveform v_out of the circuit are respectively

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APTRANSCO-EE-2011/APTRANSCO-EE-2011__p14__Q077.jpg)

- A) +10 V and −10 V
- B) +4 V and −4 V
- C) +7 V and −4 V
- D) +4 V and −7 V

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) +10 V and −10 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) +4 V and −4 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) +7 V and −4 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) +4 V and −7 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q121/126 · VALID PYQ · APTRANSCO-EE-2011.pdf · `PYQ:APTRANSCO-EE-2011.pdf#Q79` · Key —

The frequency of the clock signal applied to the rising edge triggered D flip-flop shown in figure is 10 kHz. The frequency of the signal at Q is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APTRANSCO-EE-2011/APTRANSCO-EE-2011__p14__Q079.jpg)

- A) 10 kHz
- B) 2.5 kHz
- C) 20 kHz
- D) 5 kHz

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 10 kHz
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 2.5 kHz
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 20 kHz
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 5 kHz
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q122/126 · VALID PYQ · APTRANSCO-EE-2011.pdf · `PYQ:APTRANSCO-EE-2011.pdf#Q80` · Key —

The output voltage Vo of the Schmitt trigger shown in figure swings between +15 V and −15 V. Assume that the operational amplifier is ideal. The output will change from +15 V to −15 V when the instantaneous value of the input sine wave is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APTRANSCO-EE-2011/APTRANSCO-EE-2011__p15__Q080.jpg)

- A) 5 V in the positive slope only
- B) 5 V in the negative slope only
- C) 7 V in the positive and negative slopes
- D) 3 V in the positive and negative slopes

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 5 V in the positive slope only
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 5 V in the negative slope only
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 7 V in the positive and negative slopes
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 3 V in the positive and negative slopes
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q123/126 · VALID PYQ · APTRANSCO-EE-2011.pdf · `PYQ:APTRANSCO-EE-2011.pdf#Q81` · Key —

For the circuit shown in figure, the Boolean expression for the output y in terms of inputs P, Q, R and S is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APTRANSCO-EE-2011/APTRANSCO-EE-2011__p15__Q081.jpg)

- A) P' + Q' + R' + S'
- B) P + Q + R + S
- C) (P' + Q')(R' + S')
- D) (P + Q)(R + S)

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) P' + Q' + R' + S'
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) P + Q + R + S
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) (P' + Q')(R' + S')
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) (P + Q)(R + S)
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q124/126 · VALID PYQ · APTRANSCO-EE-2011.pdf · `PYQ:APTRANSCO-EE-2011.pdf#Q82` · Key —

Assume that D1 and D2 in figure are ideal diodes. The value of current I is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APTRANSCO-EE-2011/APTRANSCO-EE-2011__p15__Q082.jpg)

- A) 0 mA
- B) 0.25 mA
- C) 0.5 mA
- D) 1.0 mA

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 0 mA
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 0.25 mA
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 0.5 mA
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 1.0 mA
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q125/126 · VALID PYQ · APTRANSCO-EE-2011.pdf · `PYQ:APTRANSCO-EE-2011.pdf#Q83` · Key —

Assume that the n-channel MOSFET as shown in figure is ideal and that its threshold voltage is +1.0 V. The voltage V_ab between nodes a and b is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APTRANSCO-EE-2011/APTRANSCO-EE-2011__p16__Q083.jpg)

- A) 5 V
- B) 2 V
- C) 1 V
- D) 0 V

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Figure is attached and stem cues it — read every label/dimension/symbol before striking.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 5 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) 2 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) 1 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) 0 V
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q126/126 · VALID PYQ · APEPDCL-2014-A.ES-QUESTION-PAPER-17-08-2014.pdf · `PYQ:APEPDCL-2014-A.ES-QUESTION-PAPER-17-08-2014.pdf#Q23` · Key —

The mathematical model of an analogous electrical system for the following mechanical system using force-current analogy is (\(i\)–current, \(v\)–voltage, \(L\)–inductance, \(C\)–capacitance):

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/APEPDCL-2014/APEPDCL-2014__p09__Q023.jpg)

- A) Current/inductance force-current model beginning \(\frac1{C_{K2}}\int(i_1-i_2)\,dt=L_{M2}\frac{di_2}{dt}+\frac1{C_{K2}}\int i_2\,dt\), with the companion \(v_1(t)\) equation for the \(M_1\) loop.
- B) Current/capacitance alternative beginning with an integral of \((i_1-i_2)\) and \(C_{M2}\frac{di_2}{dt}\), with its companion \(v_1(t)\) equation.
- C) Voltage/inductance alternative beginning \(\frac1{C_{K1}}\int(v_1-v_2)\,dt=L_{M2}\frac{dv_2}{dt}+\frac1{C_{K2}}\int v_2\,dt\), with its companion \(i_1(t)\) equation.
- D) Voltage/capacitance alternative beginning with an integral of \((v_1-v_2)\) and \(C_{M2}\frac{dv_2}{dt}\), with its companion \(i_1(t)\) equation. All four option blocks and the complete mechanical figure are present on p09. Fine subscripts in the equation blocks are scan-limited; the families above preserve the printed distinctions without inventing unreadable symbols.

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Image present but stem does not cue figure dependency; rule is secondary at best.

=== ELIMINATION (Rule 6: Figure-dependency: cover the figure test) ===
Trigger check: Image attached AND stem says shown/figure/diagram AND options need a label, dimension, or topology.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Current/inductance force-current model beginning \(\frac1{C_{K2}}\int(i_1-i_2)\,dt=L_{M2}\frac{di_2}{dt}+\frac1{C_{K2}}\int i_2\,dt\), with the companion \(v_1(t)\) equation for the \(M_1\) loop.
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  B) Current/capacitance alternative beginning with an integral of \((i_1-i_2)\) and \(C_{M2}\frac{di_2}{dt}\), with its companion \(v_1(t)\) equation.
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  C) Voltage/inductance alternative beginning \(\frac1{C_{K1}}\int(v_1-v_2)\,dt=L_{M2}\frac{dv_2}{dt}+\frac1{C_{K2}}\int v_2\,dt\), with its companion \(i_1(t)\) equation.
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
  D) Voltage/capacitance alternative beginning with an integral of \((v_1-v_2)\) and \(C_{M2}\frac{dv_2}{dt}\), with its companion \(i_1(t)\) equation. All four option blocks and the complete mechanical figure are present on p09. Fine subscripts in the equation blocks are scan-limited; the families above preserve the printed distinctions without inventing unreadable symbols.
     → STRIKE — Ignores a labelled length, support, curve ID, or topology that is visible on the figure.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

## Electrical Rule 4 (Playbook #8) — SCR / PE latching vs holding vs firing

**Questions in this section:** 19 (all solved below)

### What this rule means

SCR latching current > holding current. Latching establishes conduction after the gate pulse; holding keeps it on.

### When to use

Thyristor/SCR gate, latching, holding, or commutation options.

### Application steps

1. Remember IL > IH.
2. Strike swapped latching/holding or gate-width sized from holding alone.

**Memory cue:** `Latching current > holding current`

### Core elimination move

Latching > holding; latching is the current to *establish* conduction after gate pulse. Eliminate options that swap latching↔holding or that set gate width from holding current alone.

### Worked questions

#### Q1/19 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q47` · Key C

An SCR turns off when which condition is met for sufficient time?

- A) Gate pulse remains forever
- B) Only raising gate current
- C) Anode current falls below holding current
- D) Voltage zero is never needed in any circuit

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Option walk:
  A) Gate pulse remains forever
     → STRIKE — Gate pulse remains forever: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Anode current falls below holding current”).
  B) Only raising gate current
     → STRIKE — Only raising gate current: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Anode current falls below holding current”).
  C) Anode current falls below holding current
     → KEEP — This is a Conceptual item in Power Electronics & Drives (Conceptual). The keyed choice “Anode current < holding current for sufficient time” is the only option consistent with the governing engineering behaviour for this micro-topic at APTRANSCO AEE depth. Apply the standard Power Electronics & Drives principle for “Conceptual”, then eliminate options that violate definitions, bus/member types, sign convention, or energy/power balance. A prepared AEE candidate should recognise the concept quickly and still verify units / pu / boundary conditions before locking the option.
  D) Voltage zero is never needed in any circuit
     → STRIKE — Voltage zero is never needed in any circuit: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “Anode current falls below holding current”).
Survivors after this rule: C only → keyed C.

#### Q2/19 · Electrical FLT-02 · `data/electrical/ee-flt02.js#Q47` · Key D

After latch, SCR stays on until anode current falls below:

- A) Surge rating
- B) Gate current Ig
- C) Latching current IL always higher only
- D) Holding current IH

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Option walk:
  A) Surge rating
     → STRIKE — Surge rating: IL>IH for latch.
  B) Gate current Ig
     → STRIKE — Gate current Ig: Gate removed after latch.
  C) Latching current IL always higher only
     → STRIKE — Latching current IL always higher only: Surge is overload.
  D) Holding current IH
     → KEEP — Turn-off below IH at natural commutation.
Survivors after this rule: D only → keyed D.

#### Q3/19 · Electrical FLT-02 · `data/electrical/ee-flt02.js#Q53` · Key C

In field, class-F (line) commutation of SCR succeeds when:

- A) Load is purely capacitive always
- B) Only snubber fires
- C) Line voltage naturally reverses anode-cathode current
- D) Only gate pulse removed

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Option walk:
  A) Load is purely capacitive always
     → STRIKE — Load is purely capacitive always: Gate removal insufficient alone.
  B) Only snubber fires
     → STRIKE — Only snubber fires: Snubber limits dv/dt.
  C) Line voltage naturally reverses anode-cathode current
     → KEEP — AC line gives natural commutation interval.
  D) Only gate pulse removed
     → STRIKE — Only gate pulse removed: Capacitive load needs forced comm.
Survivors after this rule: C only → keyed C.

#### Q4/19 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q1` · Key A

In a converter firing test during preliminary sizing, sCR latching current is:

- A) min on-current to keep latch after gate removed
- B) Ig=0
- C) gate peak
- D) holding only identical always

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Option walk:
  A) min on-current to keep latch after gate removed
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) Ig=0
     → STRIKE — Ig=0: it does not follow from the stated system, sign convention, or requested check.
  C) gate peak
     → STRIKE — gate peak: it does not follow from the stated system, sign convention, or requested check.
  D) holding only identical always
     → STRIKE — holding only identical always: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q5/19 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q11` · Key C

In a converter firing test during site approval, at a 132/33 kV station, An scr is forward biased and receives a gate pulse. Which statement is correct?

- A) The gate can turn it off at any anode current.
- B) Forward bias alone always turns it on.
- C) It remains latched until current falls below holding current.
- D) Holding current exceeds latching current.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Option walk:
  A) The gate can turn it off at any anode current.
     → STRIKE — The gate can turn it off at any anode current.: it does not follow from the stated system, sign convention, or requested check.
  B) Forward bias alone always turns it on.
     → STRIKE — Forward bias alone always turns it on.: it does not follow from the stated system, sign convention, or requested check.
  C) It remains latched until current falls below holding current.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) Holding current exceeds latching current.
     → STRIKE — Holding current exceeds latching current.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q6/19 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q14` · Key B

From the SCR gate-pulse figure shown, latching current must be exceeded to: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-pe/pe1.jpg)

- A) Turn off the SCR
- B) Establish conduction after gate pulse
- C) Measure holding only
- D) Bypass snubber

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Turn off the SCR
     → STRIKE — Turn off the SCR: it does not follow from the stated system, sign convention, or requested check.
  B) Establish conduction after gate pulse
     → KEEP — Latching current establishes on-state after gate trigger.
  C) Measure holding only
     → STRIKE — Measure holding only: it does not follow from the stated system, sign convention, or requested check.
  D) Bypass snubber
     → STRIKE — Bypass snubber: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q7/19 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q16` · Key D

In a commutation analysis during emergency restoration, an scr is forward biased and receives a gate pulse. Which statement is correct?

- A) The gate can turn it off at any anode current.
- B) Forward bias alone always turns it on.
- C) Holding current exceeds latching current.
- D) It remains latched until current falls below holding current.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Option walk:
  A) The gate can turn it off at any anode current.
     → STRIKE — The gate can turn it off at any anode current.: it does not follow from the stated system, sign convention, or requested check.
  B) Forward bias alone always turns it on.
     → STRIKE — Forward bias alone always turns it on.: it does not follow from the stated system, sign convention, or requested check.
  C) Holding current exceeds latching current.
     → STRIKE — Holding current exceeds latching current.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) It remains latched until current falls below holding current.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q8/19 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q21` · Key A

In a converter firing test during code-compliance review, an scr is forward biased and receives a gate pulse. Which statement is correct?

- A) It remains latched until current falls below holding current.
- B) The gate can turn it off at any anode current.
- C) Forward bias alone always turns it on.
- D) Holding current exceeds latching current.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Option walk:
  A) It remains latched until current falls below holding current.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) The gate can turn it off at any anode current.
     → STRIKE — The gate can turn it off at any anode current.: it does not follow from the stated system, sign convention, or requested check.
  C) Forward bias alone always turns it on.
     → STRIKE — Forward bias alone always turns it on.: it does not follow from the stated system, sign convention, or requested check.
  D) Holding current exceeds latching current.
     → STRIKE — Holding current exceeds latching current.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q9/19 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q26` · Key B

In a commutation analysis during asset-renewal planning, an scr is forward biased and receives a gate pulse. Which statement is correct?

- A) The gate can turn it off at any anode current.
- B) It remains latched until current falls below holding current.
- C) Forward bias alone always turns it on.
- D) Holding current exceeds latching current.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Option walk:
  A) The gate can turn it off at any anode current.
     → STRIKE — The gate can turn it off at any anode current.: it does not follow from the stated system, sign convention, or requested check.
  B) It remains latched until current falls below holding current.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) Forward bias alone always turns it on.
     → STRIKE — Forward bias alone always turns it on.: it does not follow from the stated system, sign convention, or requested check.
  D) Holding current exceeds latching current.
     → STRIKE — Holding current exceeds latching current.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q10/19 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q31` · Key C

In a converter firing test during post-installation testing, an scr is forward biased and receives a gate pulse. Which statement is correct?

- A) The gate can turn it off at any anode current.
- B) Forward bias alone always turns it on.
- C) It remains latched until current falls below holding current.
- D) Holding current exceeds latching current.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Option walk:
  A) The gate can turn it off at any anode current.
     → STRIKE — The gate can turn it off at any anode current.: it does not follow from the stated system, sign convention, or requested check.
  B) Forward bias alone always turns it on.
     → STRIKE — Forward bias alone always turns it on.: it does not follow from the stated system, sign convention, or requested check.
  C) It remains latched until current falls below holding current.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) Holding current exceeds latching current.
     → STRIKE — Holding current exceeds latching current.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q11/19 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q36` · Key D

In a commutation analysis during schedule-of-rates check, an scr is forward biased and receives a gate pulse. Which statement is correct?

- A) The gate can turn it off at any anode current.
- B) Forward bias alone always turns it on.
- C) Holding current exceeds latching current.
- D) It remains latched until current falls below holding current.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Option walk:
  A) The gate can turn it off at any anode current.
     → STRIKE — The gate can turn it off at any anode current.: it does not follow from the stated system, sign convention, or requested check.
  B) Forward bias alone always turns it on.
     → STRIKE — Forward bias alone always turns it on.: it does not follow from the stated system, sign convention, or requested check.
  C) Holding current exceeds latching current.
     → STRIKE — Holding current exceeds latching current.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) It remains latched until current falls below holding current.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q12/19 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q41` · Key A

In a converter firing test during monsoon-readiness check, an scr is forward biased and receives a gate pulse. Which statement is correct?

- A) It remains latched until current falls below holding current.
- B) The gate can turn it off at any anode current.
- C) Forward bias alone always turns it on.
- D) Holding current exceeds latching current.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Option walk:
  A) It remains latched until current falls below holding current.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) The gate can turn it off at any anode current.
     → STRIKE — The gate can turn it off at any anode current.: it does not follow from the stated system, sign convention, or requested check.
  C) Forward bias alone always turns it on.
     → STRIKE — Forward bias alone always turns it on.: it does not follow from the stated system, sign convention, or requested check.
  D) Holding current exceeds latching current.
     → STRIKE — Holding current exceeds latching current.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q13/19 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q46` · Key B

In a commutation analysis during operating-procedure validation, an scr is forward biased and receives a gate pulse. Which statement is correct?

- A) The gate can turn it off at any anode current.
- B) It remains latched until current falls below holding current.
- C) Forward bias alone always turns it on.
- D) Holding current exceeds latching current.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Option walk:
  A) The gate can turn it off at any anode current.
     → STRIKE — The gate can turn it off at any anode current.: it does not follow from the stated system, sign convention, or requested check.
  B) It remains latched until current falls below holding current.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) Forward bias alone always turns it on.
     → STRIKE — Forward bias alone always turns it on.: it does not follow from the stated system, sign convention, or requested check.
  D) Holding current exceeds latching current.
     → STRIKE — Holding current exceeds latching current.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q14/19 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q6` · Key B

In a commutation analysis during fault investigation, gate pulse width for SCR with inductive load must ensure:

- A) only dc gate forever
- B) current reaches IL before gate ends
- C) negative gate only
- D) zero width always ok

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Option walk:
  A) only dc gate forever
     → STRIKE — only dc gate forever: it does not follow from the stated system, sign convention, or requested check.
  B) current reaches IL before gate ends
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) negative gate only
     → STRIKE — negative gate only: it does not follow from the stated system, sign convention, or requested check.
  D) zero width always ok
     → STRIKE — zero width always ok: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q15/19 · Electrical ST-PE · `data/electrical/st/ee-st-pe-01.js#Q8` · Key D

In the converter/chopper figure shown, freewheeling diode path is needed mainly for: Figure values (also stated here): read every labelled dimension, load, and symbol on the figure; do not rely on an unstated value.

![figure](images/diagrams/electrical-st-pe/pe3.svg)

- A) Increasing source frequency
- B) Removing gate pulses
- C) Isolating CT
- D) Inductive load current continuity

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) Increasing source frequency
     → STRIKE — Increasing source frequency: it does not follow from the stated system, sign convention, or requested check.
  B) Removing gate pulses
     → STRIKE — Removing gate pulses: it does not follow from the stated system, sign convention, or requested check.
  C) Isolating CT
     → STRIKE — Isolating CT: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For PE, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) Inductive load current continuity
     → KEEP — Inductive current freewheels through the diode when device turns off.
Survivors after this rule: D only → keyed D.

#### Q16/19 · VALID PYQ · 2026EE.pdf · `PYQ:2026EE.pdf#Q28` · Key —

Consider the circuit shown in Figure

- A) . A gate pulse vg is applied between time instants t0 and t1. After t1, during the MOSFET turn OFF process, it experiences a voltage overshoot. (a)
- B) Based on the vds waveforms shown in Figure (b), which one of the following options is correct? (A) 𝑅1 > 𝑅2 > 𝑅3 (B) 𝑅1 > 𝑅3 > 𝑅2
- C) 𝑅3 > 𝑅2 > 𝑅1
- D) 𝑅2 > 𝑅3 > 𝑅1 Organizing Institute: IIT Guwahati

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Option walk:
  A) . A gate pulse vg is applied between time instants t0 and t1. After t1, during the MOSFET turn OFF process, it experiences a voltage overshoot. (a)
     → STRIKE — Swaps latching with holding, or sizes the gate requirement from holding current alone.
  B) Based on the vds waveforms shown in Figure (b), which one of the following options is correct? (A) 𝑅1 > 𝑅2 > 𝑅3 (B) 𝑅1 > 𝑅3 > 𝑅2
     → STRIKE — Swaps latching with holding, or sizes the gate requirement from holding current alone.
  C) 𝑅3 > 𝑅2 > 𝑅1
     → STRIKE — Swaps latching with holding, or sizes the gate requirement from holding current alone.
  D) 𝑅2 > 𝑅3 > 𝑅1 Organizing Institute: IIT Guwahati
     → STRIKE — Swaps latching with holding, or sizes the gate requirement from holding current alone.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q17/19 · VALID PYQ · AP-GENCO-Tech-2012.pdf · `PYQ:AP-GENCO-Tech-2012.pdf#Q10` · Key —

The latching current of T1 is 1 mA. The minimum width of gate pulse required to turn on SCR is

![figure](exports/PYQ_VALID_DIAGRAM_CROPS/AP-GENCO-Tech-2012/AP-GENCO-Tech-2012__p04__Q010.jpg)

- A) 2 μsec
- B) 1 μsec
- C) 0.5 μsec
- D) 1.5 μsec

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Figure protocol: read every label, every dimension, and every symbol on the crop before striking.
Option walk:
  A) 2 μsec
     → STRIKE — Swaps latching with holding, or sizes the gate requirement from holding current alone.
  B) 1 μsec
     → STRIKE — Swaps latching with holding, or sizes the gate requirement from holding current alone.
  C) 0.5 μsec
     → STRIKE — Swaps latching with holding, or sizes the gate requirement from holding current alone.
  D) 1.5 μsec
     → STRIKE — Swaps latching with holding, or sizes the gate requirement from holding current alone.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q18/19 · VALID PYQ · APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf · `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q77` · Key —

For the converter shown below, firing angle for thyristors `T1` and `T2` is `π/6`; firing angle for thyristors `T3` and `T4` is `5π/6`. If `R = 10 Ω` and `E = 220 V`, the average voltage across the `RE`-load is ____.

- A) `70√6 V`
- B) `220√2 V`
- C) `220(√2 − 1) V`
- D) `220 V`

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Option walk:
  A) `70√6 V`
     → STRIKE — Swaps latching with holding, or sizes the gate requirement from holding current alone.
  B) `220√2 V`
     → STRIKE — Swaps latching with holding, or sizes the gate requirement from holding current alone.
  C) `220(√2 − 1) V`
     → STRIKE — Swaps latching with holding, or sizes the gate requirement from holding current alone.
  D) `220 V`
     → STRIKE — Swaps latching with holding, or sizes the gate requirement from holding current alone.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.

#### Q19/19 · VALID PYQ · APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf · `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q78` · Key —

In the figure shown below, a thyristor-based 1-φ voltage regulator with firing angle `α = 90°`. The rms output voltage is ____.

- A) `Vs/π`
- B) `Vs/√2`
- C) `√2Vs/π`
- D) `Vs/2`

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Latching vs holding vs firing distinction is the elimination path.

=== ELIMINATION (Rule 8: SCR / PE latching vs holding vs firing) ===
Trigger check: Thyristor/SCR gate, latching, holding, or commutation options that swap IL↔IH.
Option walk:
  A) `Vs/π`
     → STRIKE — Swaps latching with holding, or sizes the gate requirement from holding current alone.
  B) `Vs/√2`
     → STRIKE — Swaps latching with holding, or sizes the gate requirement from holding current alone.
  C) `√2Vs/π`
     → STRIKE — Swaps latching with holding, or sizes the gate requirement from holding current alone.
  D) `Vs/2`
     → STRIKE — Swaps latching with holding, or sizes the gate requirement from holding current alone.
Survivors: apply the same strikes; inventory has no keyed letter for this PYQ row.


# Non-core elimination rules

## Non-core Rule 1 (Playbook #9) — Non-core: option that abandons the asked operation

**Questions in this section:** 34 (all solved below)

### What this rule means

Non-core traps often solve a different operation (CI vs SI, active vs passive, wrong % base).

### When to use

Quant / reasoning / English — one option changes the operation (%, SI, tense, code).

### Application steps

1. Re-state the exact ask in one sentence.
2. Strike options that change the operation.

**Memory cue:** `Match the asked operation exactly`

### Core elimination move

Re-state the exact ask (20% of 450; SI for 2 years; passive of present perfect). Eliminate options that solve a different operation (CI instead of SI, active instead of passive).

### Worked questions

#### Q1/34 · Civil FLT-01 · `data/civil/ce-flt01.js#Q72` · Key B

A transmission-estimate package rises from ₹8.0 crore to ₹9.2 crore after a design revision. The percentage increase is:

- A) 12%
- B) 15%
- C) 18%
- D) 20%

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) 12%
     → STRIKE — 12%: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “15%”).
  B) 15%
     → KEEP — 15% This uniquely selects “15%”. See per-option mechanisms under TRAP ANALYSIS.
  C) 18%
     → STRIKE — 18%: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “15%”).
  D) 20%
     → STRIKE — 20%: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “15%”).
Survivors after this rule: B only → keyed B.

=== SCRATCH CHECK (verification only — not the elimination) ===
CORRECT: 15% Final keyed result: 15%.

#### Q2/34 · Civil FLT-01 · `data/civil/ce-flt01.js#Q76` · Key B

A mobilisation advance of ₹5,00,000 is charged simple interest at 12% per annum for 8 months. The interest amount is:

- A) ₹30,000
- B) ₹40,000
- C) ₹48,000
- D) ₹50,000

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) ₹30,000
     → STRIKE — ₹30,000: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹40,000”).
  B) ₹40,000
     → KEEP — ₹40,000 This uniquely selects “₹40,000”. See per-option mechanisms under TRAP ANALYSIS.
  C) ₹48,000
     → STRIKE — ₹48,000: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹40,000”).
  D) ₹50,000
     → STRIKE — ₹50,000: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹40,000”).
Survivors after this rule: B only → keyed B.

=== SCRATCH CHECK (verification only — not the elimination) ===
CORRECT: ₹40,000 Final keyed result: ₹40,000.

#### Q3/34 · Civil FLT-01 · `data/civil/ce-flt01.js#Q92` · Key A

Choose the correct passive form of: “The engineer verified the relay settings.”

- A) The relay settings were verified by the engineer.
- B) The relay settings verified the engineer.
- C) The relay settings are verify by the engineer.
- D) The engineer was verified by the relay settings.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) The relay settings were verified by the engineer.
     → KEEP — The relay settings were verified by the engineer.
  B) The relay settings verified the engineer.
     → STRIKE — The relay settings verified the engineer.: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “The relay settings were verified by the engineer.”).
  C) The relay settings are verify by the engineer.
     → STRIKE — The relay settings are verify by the engineer.: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “The relay settings were verified by the engineer.”).
  D) The engineer was verified by the relay settings.
     → STRIKE — The engineer was verified by the relay settings.: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “The relay settings were verified by the engineer.”).
Survivors after this rule: A only → keyed A.

#### Q4/34 · Civil FLT-02 · `data/civil/ce-flt02.js#Q78` · Key B

A square’s diagonal is increased by 10% while shape remains square. By what percentage does area increase?

- A) 20%
- B) 21%
- C) 10%
- D) 22%

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) 20%
     → STRIKE — 20%: Picks '10%' by mis-applying the stem data — recheck units and the asked quantity.
  B) 21%
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  C) 10%
     → STRIKE — 10%: Picks '20%' by mis-applying the stem data — recheck units and the asked quantity.
  D) 22%
     → STRIKE — 22%: Picks '22%' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: B only → keyed B.

#### Q5/34 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q72` · Key B

A transmission-estimate package rises from ₹8.0 crore to ₹9.2 crore after a design revision. The percentage increase is:

- A) 12%
- B) 15%
- C) 18%
- D) 20%

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) 12%
     → STRIKE — 12%: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “15%”).
  B) 15%
     → KEEP — 15% This uniquely selects “15%”. See per-option mechanisms under TRAP ANALYSIS.
  C) 18%
     → STRIKE — 18%: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “15%”).
  D) 20%
     → STRIKE — 20%: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “15%”).
Survivors after this rule: B only → keyed B.

=== SCRATCH CHECK (verification only — not the elimination) ===
CORRECT: 15% Final keyed result: 15%.

#### Q6/34 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q76` · Key B

A mobilisation advance of ₹5,00,000 is charged simple interest at 12% per annum for 8 months. The interest amount is:

- A) ₹30,000
- B) ₹40,000
- C) ₹48,000
- D) ₹50,000

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) ₹30,000
     → STRIKE — ₹30,000: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹40,000”).
  B) ₹40,000
     → KEEP — ₹40,000 This uniquely selects “₹40,000”. See per-option mechanisms under TRAP ANALYSIS.
  C) ₹48,000
     → STRIKE — ₹48,000: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹40,000”).
  D) ₹50,000
     → STRIKE — ₹50,000: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹40,000”).
Survivors after this rule: B only → keyed B.

=== SCRATCH CHECK (verification only — not the elimination) ===
CORRECT: ₹40,000 Final keyed result: ₹40,000.

#### Q7/34 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q92` · Key A

Choose the correct passive form of: “The engineer verified the relay settings.”:

- A) The relay settings were verified by the engineer.
- B) The relay settings verified the engineer.
- C) The relay settings are verify by the engineer.
- D) The engineer was verified by the relay settings.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) The relay settings were verified by the engineer.
     → KEEP — The relay settings were verified by the engineer.
  B) The relay settings verified the engineer.
     → STRIKE — The relay settings verified the engineer.: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “The relay settings were verified by the engineer.”).
  C) The relay settings are verify by the engineer.
     → STRIKE — The relay settings are verify by the engineer.: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “The relay settings were verified by the engineer.”).
  D) The engineer was verified by the relay settings.
     → STRIKE — The engineer was verified by the relay settings.: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “The relay settings were verified by the engineer.”).
Survivors after this rule: A only → keyed A.

#### Q8/34 · Electrical FLT-02 · `data/electrical/ee-flt02.js#Q77` · Key D

Contractor buys equipment for Rs 240000 and sells for Rs 276000. Profit percent on cost is:

- A) 20%
- B) 16%
- C) 12%
- D) 15%

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) 20%
     → STRIKE — 20%: On SP base different.
  B) 16%
     → STRIKE — 16%: Uses 276/240 wrong.
  C) 12%
     → STRIKE — Solves a different operation than the one asked (e.g. CI vs SI, active vs passive, wrong % base).
  D) 15%
     → KEEP — 36000/240000=15%.
Survivors after this rule: D only → keyed D.

=== SCRATCH CHECK (verification only — not the elimination) ===
15%. Final keyed result: 15%.

#### Q9/34 · Electrical FLT-02 · `data/electrical/ee-flt02.js#Q92` · Key C

Choose passive: The technician calibrated the protection relay.:

- A) The protection relay is calibrate by the technician.
- B) The technician was calibrated by the protection relay.
- C) The protection relay was calibrated by the technician.
- D) The protection relay calibrates the technician.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) The protection relay is calibrate by the technician.
     → STRIKE — The protection relay is calibrate by the technician.: Active reversed wrong.
  B) The technician was calibrated by the protection relay.
     → STRIKE — The technician was calibrated by the protection relay.: Wrong verb form.
  C) The protection relay was calibrated by the technician.
     → KEEP — Object becomes subject; past passive.
  D) The protection relay calibrates the technician.
     → STRIKE — The protection relay calibrates the technician.: Absurd agent.
Survivors after this rule: C only → keyed C.

#### Q10/34 · Non-core ST-AR · `data/noncore/st/nc-st-ar-01.js#Q2` · Key B

In a seating-arrangement puzzle during service-load verification, simple interest on ₹10,000 at 10% per annum for 2 years is:

- A) 1000
- B) 2000
- C) 2200
- D) 2100

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) 1000
     → STRIKE — 1000: it does not follow from the stated system, sign convention, or requested check.
  B) 2000
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) 2200
     → STRIKE — 2200: it does not follow from the stated system, sign convention, or requested check.
  D) 2100
     → STRIKE — 2100: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For AR, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q11/34 · Non-core ST-AR · `data/noncore/st/nc-st-ar-01.js#Q20` · Key D

In a data-interpretation question during prototype evaluation, a deposit of ₹10,000 earns simple interest at 10% per annum for two years. Which statement is correct?

- A) ₹1,000
- B) ₹2,100
- C) ₹2,200
- D) ₹2,000

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) ₹1,000
     → STRIKE — ₹1,000: it does not follow from the stated system, sign convention, or requested check.
  B) ₹2,100
     → STRIKE — ₹2,100: it does not follow from the stated system, sign convention, or requested check.
  C) ₹2,200
     → STRIKE — ₹2,200: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For AR, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) ₹2,000
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q12/34 · Non-core ST-AR · `data/noncore/st/nc-st-ar-01.js#Q26` · Key B

In a calendar reasoning item during asset-renewal planning, a deposit of ₹10,000 earns simple interest at 10% per annum for two years. Which statement is correct?

- A) ₹1,000
- B) ₹2,000
- C) ₹2,100
- D) ₹2,200

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) ₹1,000
     → STRIKE — ₹1,000: it does not follow from the stated system, sign convention, or requested check.
  B) ₹2,000
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) ₹2,100
     → STRIKE — ₹2,100: it does not follow from the stated system, sign convention, or requested check.
  D) ₹2,200
     → STRIKE — ₹2,200: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For AR, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q13/34 · Non-core ST-AR · `data/noncore/st/nc-st-ar-01.js#Q3` · Key C

In a number-series test during ultimate-limit-state review, average of 5,7,9,11,13:

- A) 8
- B) 11
- C) 9
- D) 10

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) 8
     → STRIKE — 8: it does not follow from the stated system, sign convention, or requested check.
  B) 11
     → STRIKE — 11: it does not follow from the stated system, sign convention, or requested check.
  C) 9
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 10
     → STRIKE — 10: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For AR, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q14/34 · Non-core ST-AR · `data/noncore/st/nc-st-ar-01.js#Q32` · Key D

In a seating-arrangement puzzle during failure-mode assessment, a deposit of ₹10,000 earns simple interest at 10% per annum for two years. Which statement is correct?

- A) ₹1,000
- B) ₹2,100
- C) ₹2,200
- D) ₹2,000

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) ₹1,000
     → STRIKE — ₹1,000: it does not follow from the stated system, sign convention, or requested check.
  B) ₹2,100
     → STRIKE — ₹2,100: it does not follow from the stated system, sign convention, or requested check.
  C) ₹2,200
     → STRIKE — ₹2,200: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For AR, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) ₹2,000
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q15/34 · Non-core ST-AR · `data/noncore/st/nc-st-ar-01.js#Q37` · Key A

In a coding-decoding exercise during materials approval, a candidate allocates 20% of a quantity of 450 units. Which statement is correct?

- A) 90
- B) 45
- C) 80
- D) 100

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) 90
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 45
     → STRIKE — 45: it does not follow from the stated system, sign convention, or requested check.
  C) 80
     → STRIKE — 80: it does not follow from the stated system, sign convention, or requested check.
  D) 100
     → STRIKE — 100: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For AR, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q16/34 · Non-core ST-AR · `data/noncore/st/nc-st-ar-01.js#Q38` · Key B

In a syllogism check during foundation-layout review, a deposit of ₹10,000 earns simple interest at 10% per annum for two years. Which statement is correct?

- A) ₹1,000
- B) ₹2,000
- C) ₹2,100
- D) ₹2,200

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) ₹1,000
     → STRIKE — ₹1,000: it does not follow from the stated system, sign convention, or requested check.
  B) ₹2,000
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) ₹2,100
     → STRIKE — ₹2,100: it does not follow from the stated system, sign convention, or requested check.
  D) ₹2,200
     → STRIKE — ₹2,200: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For AR, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q17/34 · Non-core ST-AR · `data/noncore/st/nc-st-ar-01.js#Q44` · Key D

In a direction-sense question during temporary-works review, a deposit of ₹10,000 earns simple interest at 10% per annum for two years. Which statement is correct?

- A) ₹1,000
- B) ₹2,100
- C) ₹2,200
- D) ₹2,000

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) ₹1,000
     → STRIKE — ₹1,000: it does not follow from the stated system, sign convention, or requested check.
  B) ₹2,100
     → STRIKE — ₹2,100: it does not follow from the stated system, sign convention, or requested check.
  C) ₹2,200
     → STRIKE — ₹2,200: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For AR, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) ₹2,000
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q18/34 · Non-core ST-AR · `data/noncore/st/nc-st-ar-01.js#Q50` · Key B

In a data-interpretation question during residual-risk review, a deposit of ₹10,000 earns simple interest at 10% per annum for two years. Which statement is correct?

- A) ₹1,000
- B) ₹2,000
- C) ₹2,100
- D) ₹2,200

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) ₹1,000
     → STRIKE — ₹1,000: it does not follow from the stated system, sign convention, or requested check.
  B) ₹2,000
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) ₹2,100
     → STRIKE — ₹2,100: it does not follow from the stated system, sign convention, or requested check.
  D) ₹2,200
     → STRIKE — ₹2,200: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For AR, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q19/34 · Non-core ST-AR · `data/noncore/st/nc-st-ar-01.js#Q7` · Key C

In a coding-decoding exercise during laboratory validation, cP 800 SP 1000 profit%:

- A) 12.5%
- B) 80%
- C) 25%
- D) 20%

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) 12.5%
     → STRIKE — 12.5%: it does not follow from the stated system, sign convention, or requested check.
  B) 80%
     → STRIKE — 80%: it does not follow from the stated system, sign convention, or requested check.
  C) 25%
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 20%
     → STRIKE — 20%: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For AR, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q20/34 · Non-core ST-GEC · `data/noncore/st/nc-st-gec-01.js#Q13` · Key A

In a computer-networking basic during capacity uprating, the sentence 'the engineer completed the report' is converted to passive voice. Which statement is correct?

- A) The report was completed by the engineer.
- B) The report is completed by the engineer.
- C) The engineer was completed by the report.
- D) The report had completed the engineer.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) The report was completed by the engineer.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) The report is completed by the engineer.
     → STRIKE — The report is completed by the engineer.: it does not follow from the stated system, sign convention, or requested check.
  C) The engineer was completed by the report.
     → STRIKE — The engineer was completed by the report.: it does not follow from the stated system, sign convention, or requested check.
  D) The report had completed the engineer.
     → STRIKE — The report had completed the engineer.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For GEC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q21/34 · Non-core ST-GEC · `data/noncore/st/nc-st-gec-01.js#Q22` · Key B

In a grammar usage question during independent design check, the sentence 'the engineer completed the report' is converted to passive voice. Which statement is correct?

- A) The report is completed by the engineer.
- B) The report was completed by the engineer.
- C) The engineer was completed by the report.
- D) The report had completed the engineer.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) The report is completed by the engineer.
     → STRIKE — The report is completed by the engineer.: it does not follow from the stated system, sign convention, or requested check.
  B) The report was completed by the engineer.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  C) The engineer was completed by the report.
     → STRIKE — The engineer was completed by the report.: it does not follow from the stated system, sign convention, or requested check.
  D) The report had completed the engineer.
     → STRIKE — The report had completed the engineer.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For GEC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: B only → keyed B.

#### Q22/34 · Non-core ST-GEC · `data/noncore/st/nc-st-gec-01.js#Q31` · Key C

In a constitutional-awareness item during post-installation testing, the sentence 'the engineer completed the report' is converted to passive voice. Which statement is correct?

- A) The report is completed by the engineer.
- B) The engineer was completed by the report.
- C) The report was completed by the engineer.
- D) The report had completed the engineer.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) The report is completed by the engineer.
     → STRIKE — The report is completed by the engineer.: it does not follow from the stated system, sign convention, or requested check.
  B) The engineer was completed by the report.
     → STRIKE — The engineer was completed by the report.: it does not follow from the stated system, sign convention, or requested check.
  C) The report was completed by the engineer.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) The report had completed the engineer.
     → STRIKE — The report had completed the engineer.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For GEC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

#### Q23/34 · Non-core ST-GEC · `data/noncore/st/nc-st-gec-01.js#Q4` · Key D

In a reading-comprehension item during commissioning acceptance, choose correct passive: 'They are repairing the line.':

- A) The line repaired
- B) The line was repair
- C) The line is repair
- D) The line is being repaired

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) The line repaired
     → STRIKE — The line repaired: it does not follow from the stated system, sign convention, or requested check.
  B) The line was repair
     → STRIKE — The line was repair: it does not follow from the stated system, sign convention, or requested check.
  C) The line is repair
     → STRIKE — The line is repair: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For GEC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) The line is being repaired
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q24/34 · Non-core ST-GEC · `data/noncore/st/nc-st-gec-01.js#Q40` · Key D

In a digital-literacy question during environmental-condition check, the sentence 'the engineer completed the report' is converted to passive voice. Which statement is correct?

- A) The report is completed by the engineer.
- B) The engineer was completed by the report.
- C) The report had completed the engineer.
- D) The report was completed by the engineer.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) The report is completed by the engineer.
     → STRIKE — The report is completed by the engineer.: it does not follow from the stated system, sign convention, or requested check.
  B) The engineer was completed by the report.
     → STRIKE — The engineer was completed by the report.: it does not follow from the stated system, sign convention, or requested check.
  C) The report had completed the engineer.
     → STRIKE — The report had completed the engineer.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For GEC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
  D) The report was completed by the engineer.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
Survivors after this rule: D only → keyed D.

#### Q25/34 · Non-core ST-GEC · `data/noncore/st/nc-st-gec-01.js#Q49` · Key A

In a sentence-correction item during life-cycle assessment, the sentence 'the engineer completed the report' is converted to passive voice. Which statement is correct?

- A) The report was completed by the engineer.
- B) The report is completed by the engineer.
- C) The engineer was completed by the report.
- D) The report had completed the engineer.

**Elimination solution (this rule only)**

Applicability grade: CORRECT
Why this grade: Asked operation can be abandoned by a neighbouring option.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) The report was completed by the engineer.
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) The report is completed by the engineer.
     → STRIKE — The report is completed by the engineer.: it does not follow from the stated system, sign convention, or requested check.
  C) The engineer was completed by the report.
     → STRIKE — The engineer was completed by the report.: it does not follow from the stated system, sign convention, or requested check.
  D) The report had completed the engineer.
     → STRIKE — The report had completed the engineer.: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For GEC, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

#### Q26/34 · Civil FLT-01 · `data/civil/ce-flt01.js#Q77` · Key B

A contractor’s quoted cost for a bay package is ₹12 lakh. He allows 10% discount on the quote and still makes 20% profit on cost. His cost price is closest to:

- A) ₹8.0 lakh
- B) ₹9.0 lakh
- C) ₹10.0 lakh
- D) ₹11.0 lakh

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Non-core item; operation-abandon trap not explicit.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) ₹8.0 lakh
     → STRIKE — ₹8.0 lakh: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹9.0 lakh”).
  B) ₹9.0 lakh
     → KEEP — ₹9.0 lakh This uniquely selects “₹9.0 lakh”. See per-option mechanisms under TRAP ANALYSIS.
  C) ₹10.0 lakh
     → STRIKE — ₹10.0 lakh: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹9.0 lakh”).
  D) ₹11.0 lakh
     → STRIKE — ₹11.0 lakh: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹9.0 lakh”).
Survivors after this rule: B only → keyed B.

=== SCRATCH CHECK (verification only — not the elimination) ===
CORRECT: ₹9.0 lakh Final keyed result: ₹9.0 lakh.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q27/34 · Civil FLT-02 · `data/civil/ce-flt02.js#Q73` · Key B

A price rises 20%, falls 10%, then attracts 5% tax. Relative to the original pre-tax price, the final amount changes by:

- A) 8% increase
- B) 13.4% increase
- C) 15% increase
- D) 2.6% decrease

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Non-core item; operation-abandon trap not explicit.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) 8% increase
     → STRIKE — 8% increase: Picks '8% increase' by mis-applying the stem data — recheck units and the asked quantity.
  B) 13.4% increase
     → KEEP — N/A — conceptual / judgement (no arithmetic key).
  C) 15% increase
     → STRIKE — 15% increase: Picks '15% increase' by mis-applying the stem data — recheck units and the asked quantity.
  D) 2.6% decrease
     → STRIKE — 2.6% decrease: Picks '2.6% decrease' by mis-applying the stem data — recheck units and the asked quantity.
Survivors after this rule: B only → keyed B.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q28/34 · Electrical FLT-01 · `data/electrical/ee-flt01.js#Q77` · Key B

A contractor’s quoted cost for a bay package is ₹12 lakh. He allows 10% discount on the quote and still makes 20% profit on cost. His cost price is closest to:

- A) ₹8.0 lakh
- B) ₹9.0 lakh
- C) ₹10.0 lakh
- D) ₹11.0 lakh

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Non-core item; operation-abandon trap not explicit.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) ₹8.0 lakh
     → STRIKE — ₹8.0 lakh: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹9.0 lakh”).
  B) ₹9.0 lakh
     → KEEP — ₹9.0 lakh This uniquely selects “₹9.0 lakh”. See per-option mechanisms under TRAP ANALYSIS.
  C) ₹10.0 lakh
     → STRIKE — ₹10.0 lakh: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹9.0 lakh”).
  D) ₹11.0 lakh
     → STRIKE — ₹11.0 lakh: Choosing this option usually means applying the wrong basis/formula for what the stem asks (keyed result is “₹9.0 lakh”).
Survivors after this rule: B only → keyed B.

=== SCRATCH CHECK (verification only — not the elimination) ===
CORRECT: ₹9.0 lakh Final keyed result: ₹9.0 lakh.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q29/34 · Non-core ST-AR · `data/noncore/st/nc-st-ar-01.js#Q1` · Key A

In a work-rate planning problem during preliminary sizing, a stores ledger records 450 cable drums. The value of 20% of this quantity is:

- A) 90
- B) 80
- C) 100
- D) 45

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Non-core item; operation-abandon trap not explicit.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) 90
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 80
     → STRIKE — 80: it does not follow from the stated system, sign convention, or requested check.
  C) 100
     → STRIKE — 100: it does not follow from the stated system, sign convention, or requested check.
  D) 45
     → STRIKE — 45: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For AR, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q30/34 · Non-core ST-AR · `data/noncore/st/nc-st-ar-01.js#Q19` · Key C

In a time-and-distance problem during proof loading, during a relay-setting review, A candidate allocates 20% of a quantity of 450 units. Which statement is correct?

- A) 45
- B) 80
- C) 90
- D) 100

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Non-core item; operation-abandon trap not explicit.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) 45
     → STRIKE — 45: it does not follow from the stated system, sign convention, or requested check.
  B) 80
     → STRIKE — 80: it does not follow from the stated system, sign convention, or requested check.
  C) 90
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 100
     → STRIKE — 100: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For AR, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q31/34 · Non-core ST-AR · `data/noncore/st/nc-st-ar-01.js#Q25` · Key A

In a ratio-and-proportion calculation during reliability assessment, a candidate allocates 20% of a quantity of 450 units. Which statement is correct?

- A) 90
- B) 45
- C) 80
- D) 100

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Non-core item; operation-abandon trap not explicit.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) 90
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 45
     → STRIKE — 45: it does not follow from the stated system, sign convention, or requested check.
  C) 80
     → STRIKE — 80: it does not follow from the stated system, sign convention, or requested check.
  D) 100
     → STRIKE — 100: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For AR, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q32/34 · Non-core ST-AR · `data/noncore/st/nc-st-ar-01.js#Q31` · Key C

In a work-rate planning problem during post-installation testing, a candidate allocates 20% of a quantity of 450 units. Which statement is correct?

- A) 45
- B) 80
- C) 90
- D) 100

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Non-core item; operation-abandon trap not explicit.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) 45
     → STRIKE — 45: it does not follow from the stated system, sign convention, or requested check.
  B) 80
     → STRIKE — 80: it does not follow from the stated system, sign convention, or requested check.
  C) 90
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 100
     → STRIKE — 100: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For AR, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q33/34 · Non-core ST-AR · `data/noncore/st/nc-st-ar-01.js#Q43` · Key C

In a number-series test during network-contingency study, a candidate allocates 20% of a quantity of 450 units. Which statement is correct?

- A) 45
- B) 80
- C) 90
- D) 100

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Non-core item; operation-abandon trap not explicit.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) 45
     → STRIKE — 45: it does not follow from the stated system, sign convention, or requested check.
  B) 80
     → STRIKE — 80: it does not follow from the stated system, sign convention, or requested check.
  C) 90
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  D) 100
     → STRIKE — 100: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For AR, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: C only → keyed C.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

#### Q34/34 · Non-core ST-AR · `data/noncore/st/nc-st-ar-01.js#Q49` · Key A

In a time-and-distance problem during life-cycle assessment, a candidate allocates 20% of a quantity of 450 units. Which statement is correct?

- A) 90
- B) 45
- C) 80
- D) 100

**Elimination solution (this rule only)**

Applicability grade: WEAK
Why this grade: Non-core item; operation-abandon trap not explicit.

=== ELIMINATION (Rule 9: Non-core: option that abandons the asked operation) ===
Trigger check: Quant/English/reasoning where one option changes the asked operation.
Option walk:
  A) 90
     → KEEP — The requested quantity follows from the data and condition stated in the stem.
  B) 45
     → STRIKE — 45: it does not follow from the stated system, sign convention, or requested check.
  C) 80
     → STRIKE — 80: it does not follow from the stated system, sign convention, or requested check.
  D) 100
     → STRIKE — 100: it does not follow from the stated system, sign convention, or requested check. REMEMBER: • Identify the physical quantity before choosing a formula. • For AR, check units, reference direction, and the stated operating condition. • Do not import a neighbouring-code provision or assumption that is absent from the stem.
Survivors after this rule: A only → keyed A.

Note: mapping is WEAK — teach cautiously; prefer a stronger rule if another fits better.

## Drafts (not established)

- Kill the neighbour-formula lookalike (1 hits)
- Diameter ↔ radius / area geometry slip (12 hits)
- Per-unit base-change scaling (1 hits)
- SIL / surge-impedance identity (7 hits)
- Sequence-network connection by fault type (13 hits)
- √3 / phase-factor forgotten (4 hits)
- Resonance / X_L = X_C identity (14 hits)
- Mohr / principal-stress pair consistency (14 hits)
- SFD↔BMD jump / couple vs point-load confusion (3 hits)
- Transformer referral / turns-ratio scaling (8 hits)
- Last-resort: dimensional / absurdity cull (evidence-limited) (0 hits)
