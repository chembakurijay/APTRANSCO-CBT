# Elimination Rules Playbook

**APTRANSCO AEE CBT · Evidence-based last-resort heuristics**

Established rules must have ≥15 independent supporting questions (FLTs + Subject Tests + VALID PYQs). Drafts below that floor are not published as heuristics.

## How to apply

1. Solve normally first.
2. If stuck, classify the trap family.
3. Run that rule’s application steps and strike violators.
4. If two options remain, use the units/figure last-resort rule — never letter myths.

## Index of established rules

| # | Rule | Streams | Evidence |
|---:|---|---|---:|
| 1 | Diameter ↔ radius / area geometry slip | Civil, Electrical | 129 |
| 2 | Service vs factored / partial-factor mix | Civil | 104 |
| 3 | Gross vs net / hole deduction | Civil | 95 |
| 4 | Cover vs effective depth | Civil | 40 |
| 5 | Per-unit base-change scaling | Electrical | 95 |
| 6 | Sequence-network connection by fault type | Electrical | 25 |
| 7 | √3 / phase-factor forgotten | Electrical | 24 |
| 8 | Thevenin / Norton source deactivation | Electrical | 18 |
| 9 | Resonance / X_L = X_C identity | Electrical | 47 |
| 10 | Sign / sense / tension–compression flip | Civil, Electrical | 270 |
| 11 | Figure-dependency: cover the figure test | Civil, Electrical | 304 |
| 12 | Rankine / Terzaghi / earth-pressure term drop | Civil | 86 |
| 13 | Mohr / principal-stress pair consistency | Civil | 26 |
| 14 | SFD↔BMD jump / couple vs point-load confusion | Civil | 39 |
| 15 | SCR / PE latching vs holding vs firing | Electrical | 18 |
| 16 | Non-core: option that abandons the asked operation | Non-core | 37 |
| 17 | Last-resort: dimensional / absurdity cull (evidence-limited) | Civil, Electrical, Non-core | 232 |

## Rules

### Rule 1. Diameter ↔ radius / area geometry slip

**Streams:** Civil, Electrical  
**Evidence:** 129 independent hits

**Explanation**

Circular geometry questions almost always hide a diameter-versus-radius mistake. Area is A = pi*d^2/4. Candidates who treat the given diameter as a radius get areas four times too large (or stresses four times too small).

**When to use**

Circular section, shaft, hanger, pipe, or bolt with diameter given in mm.

**Application steps**

1. Circle the numeric diameter in the stem and write r = d/2 on scratch paper.
2. Compute A = pi*d^2/4 once; do not reuse a remembered 'pi r^2' with d plugged in as r.
3. Strike any option that matches P/(pi*d^2), P/(pi*r), or 4x/0.25x of the correct stress.
4. If net area of a plate with holes is asked, apply hole deductions after the correct gross area.

**Memory cue:** `A = pi*d^2/4 ; sigma = P/A`

**Core elimination move**

Compute A = πd²/4 (or r = d/2) once on scratch paper. Eliminate options that match P/(πd²), P/(πr), or treating d as r.

**Sample evidence**

- Civil FLT-01 — `data/civil/ce-flt01.js#Q1` — Following a gantry-tie inspection at a substation, the engineer records a 20 mm diameter member unde
- Civil FLT-01 — `data/civil/ce-flt01.js#Q2` — While reviewing a rigid-ended hanger, equal-length steel and brass rods are found to have \(A_s=600\
- Civil FLT-01 — `data/civil/ce-flt01.js#Q13` — During beam-section selection, the service moment is 36 kN·m and the allowable bending stress is 150
- Civil FLT-01 — `data/civil/ce-flt01.js#Q23` — Before approving a beam bar cut-off near a support on the shop drawing, the detailing team finds tha
- Civil FLT-01 — `data/civil/ce-flt01.js#Q32` — For a pipeline commissioning check, the engineer records diameter 50 mm, mean velocity 0.02 m/s and 
- Civil FLT-01 — `data/civil/ce-flt01.js#Q47` — A bolted tension plate has width b = 240 mm, thickness t = 10 mm and hole diameter dh = 22 mm. Path 

### Rule 2. Service vs factored / partial-factor mix

**Streams:** Civil  
**Evidence:** 104 independent hits

**Explanation**

Limit-state design mixes service loads, factored loads, and material strengths (fy, fck). A classic trap is to treat fy as the computed member stress, or to apply load factors twice.

**When to use**

Stem mixes service loads with limit-state options, or quotes fy/fck beside Mu/Vu.

**Application steps**

1. Label the stem: SLS (service) or ULS (factored Mu/Vu).
2. If Mu/Vu is already factored, do not multiply by gamma_f again.
3. Strike options that equal fy or 0.87 fy when the ask is a computed stress from P/A or M/Z.
4. Keep Ast calculations on the factored Mu and design stress 0.87 fy (or the code path stated).

**Memory cue:** `ULS actions use gamma_f; design steel stress is typically 0.87 fy (IS 456 path)`

**Core elimination move**

Ask: is this SLS or ULS? Strike options that apply γf to an already-factored action, or that treat fy as the computed stress.

**Sample evidence**

- Civil FLT-01 — `data/civil/ce-flt01.js#Q1` — Following a gantry-tie inspection at a substation, the engineer records a 20 mm diameter member unde
- Civil FLT-01 — `data/civil/ce-flt01.js#Q3` — Proof-load planning uses an overhanging beam A–B–C with supports at A and B: AB = 4 m, overhang BC =
- Civil FLT-01 — `data/civil/ce-flt01.js#Q7` — During review of a stepped shaft ABC, an end torque of 1000 N·m is applied at C while B is an interm
- Civil FLT-01 — `data/civil/ce-flt01.js#Q10` — While preparing a design-aid sheet, match List-I beam cases to List-II max BM (same w, length l): (a
- Civil FLT-01 — `data/civil/ce-flt01.js#Q12` — A steel bar with fixed ends is reviewed for temperature lock-up using α = 12×10⁻⁶ /°C, E = 200 GPa, 
- Civil FLT-01 — `data/civil/ce-flt01.js#Q13` — During beam-section selection, the service moment is 36 kN·m and the allowable bending stress is 150

### Rule 3. Gross vs net / hole deduction

**Streams:** Civil  
**Evidence:** 95 independent hits

**Explanation**

Tension capacity of bolted plates uses net area, not gross. For staggered holes, add s^2/(4g) terms. Options that equal gross area ignore the holes entirely.

**When to use**

Tension member, plate with bolt holes, staggered pitch, or chain of holes.

**Application steps**

1. Write Anet = (gross width - n*d_hole)*t (+ stagger terms if shown).
2. Strike the gross-area option immediately.
3. If stagger is drawn, include s^2/(4g); if chain is transverse only, do not invent stagger credit.

**Memory cue:** `Anet ~ (b - n*dh)*t ; staggered: + sum s^2/(4g)`

**Core elimination move**

Net = gross − holes (± s²/4g). Eliminate options that equal gross area, or that deduct diameter without adding the staggered term when stagger is shown.

**Sample evidence**

- Civil FLT-01 — `data/civil/ce-flt01.js#Q1` — Following a gantry-tie inspection at a substation, the engineer records a 20 mm diameter member unde
- Civil FLT-01 — `data/civil/ce-flt01.js#Q3` — Proof-load planning uses an overhanging beam A–B–C with supports at A and B: AB = 4 m, overhang BC =
- Civil FLT-01 — `data/civil/ce-flt01.js#Q7` — During review of a stepped shaft ABC, an end torque of 1000 N·m is applied at C while B is an interm
- Civil FLT-01 — `data/civil/ce-flt01.js#Q10` — While preparing a design-aid sheet, match List-I beam cases to List-II max BM (same w, length l): (a
- Civil FLT-01 — `data/civil/ce-flt01.js#Q19` — Mid-pour on a continuous RCC floor, top bars over an interior support are found displaced downward b
- Civil FLT-01 — `data/civil/ce-flt01.js#Q21` — At reinforcement inspection, a tied column shows the longitudinal-bar layout with intermediate bars 

### Rule 4. Cover vs effective depth

**Streams:** Civil  
**Evidence:** 40 independent hits

**Explanation**

RCC flexural and shear formulas use effective depth d, not overall depth D. Cover and bar diameter set d = D - cover - phi/2 (as defined in the stem).

**When to use**

RCC beam/slab with overall D, cover, bar dia — options in Ast, τv, or lever arm.

**Application steps**

1. Extract D, cover, and bar size; compute d before Ast or tau_v.
2. Strike options that use D in place of d in Mu = 0.87 fy Ast z or tau_v = Vu/(b d).

**Memory cue:** `d = D - cover - phi/2 ; tau_v = Vu/(b d)`

**Core elimination move**

d = D − cover − φ/2 (or as stem defines). Strike options that use overall depth as effective depth.

**Sample evidence**

- Civil FLT-01 — `data/civil/ce-flt01.js#Q16` — Before a pour on an RCC beam in moderate exposure, measured cover is below the durability requiremen
- Civil FLT-01 — `data/civil/ce-flt01.js#Q17` — While checking an Fe415 singly reinforced beam, the trial neutral-axis depth is 225 mm for an effect
- Civil FLT-01 — `data/civil/ce-flt01.js#Q19` — Mid-pour on a continuous RCC floor, top bars over an interior support are found displaced downward b
- Civil FLT-01 — `data/civil/ce-flt01.js#Q22` — While checking two beams of equal section under IS shear rules, Beam X has nominal shear below concr
- Civil FLT-01 — `data/civil/ce-flt01.js#Q23` — Before approving a beam bar cut-off near a support on the shop drawing, the detailing team finds tha
- Civil FLT-01 — `data/civil/ce-flt01.js#Q24` — In design review, factored moment is 160 kN·m while the limiting singly reinforced capacity of the f

### Rule 5. Per-unit base-change scaling

**Streams:** Electrical  
**Evidence:** 95 independent hits

**Explanation**

Per-unit impedance scales with the chosen bases: Zpu = Zohm * Sbase / Vbase^2. Changing only Sbase scales Zpu in direct proportion.

**When to use**

Zpu / Xpu and base MVA or kV changes.

**Application steps**

1. Note old and new Sbase and Vbase.
2. If Sbase doubles and Vbase is unchanged, Zpu halves — strike 'unchanged', 'doubles', 'squared'.
3. If Vbase also changes, recompute the full ratio.

**Memory cue:** `Zpu = Zohm * Sbase / Vbase^2`

**Core elimination move**

Zpu ∝ Sbase / Vbase². If Sbase doubles and Vbase fixed → Zpu halves. Eliminate ‘unchanged’, ‘doubles’, or ‘squared’ unless the stem changed Vbase too.

**Sample evidence**

- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q1` — A lossless 400 kV line has Zc = 250 Ω. Its SIL (MW) is closest to:
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q2` — On 100 MVA, 220 kV base, a line reactance 48.4 Ω equals how many pu?
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q3` — A 3-φ feeder has positive-sequence impedance j0.2 pu and zero-sequence j0.5 pu on same base. For a s
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q5` — Two identical 50 MVA, 11 kV, Xd″=0.15 pu machines feed a bus. On 100 MVA base, the bus short-circuit
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q6` — Ferranti rise on a long EHV line is most severe when:
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q9` — From the open-conductor / sequence figure shown (use only labelled phase currents; Ic = 0), the zero

### Rule 6. Sequence-network connection by fault type

**Streams:** Electrical  
**Evidence:** 25 independent hits

**Explanation**

Unsymmetrical faults require specific sequence-network connections. Memorising the four classic connections eliminates most wrong options instantly.

**When to use**

LG / LL / LLG / 3φ fault; options name sequence networks.

**Application steps**

1. Identify fault type: 3-ph, LG, LL, LLG.
2. 3-ph → positive only; LG → 1-2-0 in series; LL → 1 parallel 2; LLG → 1 series (2 parallel 0).
3. Strike any option that omits a required sequence or uses only zero-sequence.

**Memory cue:** `LG: Z1+Z2+Z0 ; LL: Z1||Z2 ; LLG: Z1+(Z2||Z0)`

**Core elimination move**

3φ → positive only. LG → series 1-2-0. LL → 1 parallel 2. LLG → 1 series (2∥0). Eliminate any option that omits a required sequence or uses only zero-sequence.

**Sample evidence**

- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q3` — A 3-φ feeder has positive-sequence impedance j0.2 pu and zero-sequence j0.5 pu on same base. For a s
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q8` — For a symmetrical 3-φ fault, sequence networks are connected in:
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q9` — From the open-conductor / sequence figure shown (use only labelled phase currents; Ic = 0), the zero
- Electrical FLT-02 — `data/electrical/ee-flt02.js#Q3` — Solid LG fault: Z1=Z2=j0.15 pu, Z0=j0.60 pu, Vpref=1 pu. |If| (pu) nearest:
- Electrical FLT-02 — `data/electrical/ee-flt02.js#Q8` — During a bolted three-phase short circuit on an unloaded radial feeder, which sequence network combi
- Electrical FLT-02 — `data/electrical/ee-flt02.js#Q9` — From the sequence-network sketch (open conductor on phase C, Ia=Ib=5 A, Ic=0), the zero-sequence com

### Rule 7. √3 / phase-factor forgotten

**Streams:** Electrical  
**Evidence:** 24 independent hits

**Explanation**

Three-phase power and current conversions carry a root-3 factor. Forgetting it, or using 3 instead of root-3, produces the most common distractors.

**When to use**

3-phase power, line vs phase quantities, line current from kVA.

**Application steps**

1. Write P = root3 * VL * IL * cos(phi) (or the form asked).
2. Strike options that drop root3 or replace it with 3 without justification.

**Memory cue:** `P = √3 · VL · IL · cosφ`

**Core elimination move**

P = √3 VL IL cosφ. Eliminate options that drop √3 or use 3 instead of √3 (or vice versa) without stem justification.

**Sample evidence**

- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q3` — A 3-φ feeder has positive-sequence impedance j0.2 pu and zero-sequence j0.5 pu on same base. For a s
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q5` — Two identical 50 MVA, 11 kV, Xd″=0.15 pu machines feed a bus. On 100 MVA base, the bus short-circuit
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q8` — For a symmetrical 3-φ fault, sequence networks are connected in:
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q12` — A generator Xs = 0.20 pu feeds an infinite bus through a transformer Xt = 0.10 pu (same base). For a
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q16` — A 3-φ, 50 Hz, 4-pole turboalternator has Xs=1.2 pu and Ra≈0. On infinite bus 1.0 pu, delivering 0.8 
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q20` — In a 3-φ induction motor, air-gap power Pg = 12 kW, slip s=0.04. Rotor copper loss (kW) is:

### Rule 8. Thevenin / Norton source deactivation

**Streams:** Electrical  
**Evidence:** 18 independent hits

**Explanation**

Thevenin/Norton resistance is found with independent sources deactivated: voltage sources shorted, current sources opened.

**When to use**

Req, RN, or Vth with independent sources in the figure.

**Application steps**

1. For Req/RN, deactivate independent sources first.
2. Strike options that leave sources 'on' while claiming equivalent resistance.
3. Do not confuse Vth (open-circuit voltage) with RN.

**Memory cue:** `Independent V → short; independent I → open; then find Req`

**Core elimination move**

Independent voltage sources → short; current sources → open. Eliminate options that leave sources active while claiming Req/RN.

**Sample evidence**

- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q29` — In the resistor network shown driven by Vs, the equivalent resistance Req looking into the right-han
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q34` — An ideal ammeter is connected between terminals A and B in the circuit shown. The ammeter reading is
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q56` — For the network shown, Norton’s resistance RN seen at the open terminals is:
- Electrical FLT-02 — `data/electrical/ee-flt02.js#Q35` — Superposition theorem applies to:
- Electrical FLT-02 — `data/electrical/ee-flt02.js#Q56` — From the Norton equivalent network diagram, after deactivating independent sources, RN across termin
- Electrical ST-EC — `data/electrical/st/ee-st-ec-01.js#Q3` — After independent sources are deactivated, the Norton resistance seen at the output terminals is:

### Rule 9. Resonance / X_L = X_C identity

**Streams:** Electrical  
**Evidence:** 47 independent hits

**Explanation**

At series resonance XL = XC so net reactive part is zero and Z = R (minimum). Parallel resonance is the dual (impedance maximum).

**When to use**

Series/parallel RLC, ω0, or impedance at resonance.

**Application steps**

1. Confirm series vs parallel from the figure/stem.
2. At series resonance strike any option that still carries j(XL-XC) ≠ 0.
3. Use omega0 = 1/√(LC) only when that is the ask.

**Memory cue:** `Series resonance: XL = XC → Z = R`

**Core elimination move**

Series resonance → Z = R (min). Parallel → Z max. Eliminate options that keep j(XL−XC) nonzero at the stated resonance.

**Sample evidence**

- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q13` — In equal-area criterion, for a sudden load rejection on a machine, accelerating area is bounded by:
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q19` — A separately excited DC motor has Va=220 V, Ra=1 Ω, Ia=20 A, φ constant. If Va is halved and torque 
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q21` — Alternator: Vt=1 pu, Ia=1 pu, Xs=1.0 pu, Ra≈0, pf=0.8 lag. |Ef| ≈:
- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q32` — The two-port network shown has series arms Z1 and Z2 with a single shunt Z3 to the common return. It
- Electrical FLT-02 — `data/electrical/ee-flt02.js#Q18` — From the alternator phasor diagram (Ia leading Vt), the machine is operating as:
- Electrical FLT-02 — `data/electrical/ee-flt02.js#Q19` — Separately excited DC motor: Va=440 V, Ra=2 Ω, Ia=25 A, flux constant. If Va halved and Ia unchanged

### Rule 10. Sign / sense / tension–compression flip

**Streams:** Civil, Electrical  
**Evidence:** 270 independent hits

**Explanation**

Many options are numerically close but reverse tension/compression or reaction direction. Equilibrium sense is part of the answer.

**When to use**

Reactions, BMD jump, member force T/C, or direction in options.

**Application steps**

1. Fix one free-body sign convention from the figure.
2. Eliminate options with correct magnitude but wrong sense (T/C or up/down).

**Memory cue:** `Sum Fx = 0, Sum Fy = 0, Sum M = 0 (sense matters)`

**Core elimination move**

Fix one free-body sign convention from the figure. Eliminate options whose magnitude is right but sense (↑/↓, T/C) contradicts equilibrium.

**Sample evidence**

- Civil FLT-01 — `data/civil/ce-flt01.js#Q1` — Following a gantry-tie inspection at a substation, the engineer records a 20 mm diameter member unde
- Civil FLT-01 — `data/civil/ce-flt01.js#Q3` — Proof-load planning uses an overhanging beam A–B–C with supports at A and B: AB = 4 m, overhang BC =
- Civil FLT-01 — `data/civil/ce-flt01.js#Q7` — During review of a stepped shaft ABC, an end torque of 1000 N·m is applied at C while B is an interm
- Civil FLT-01 — `data/civil/ce-flt01.js#Q8` — While assessing a propped cantilever under full-span UDL, the prop is found to settle downward by ha
- Civil FLT-01 — `data/civil/ce-flt01.js#Q9` — On the plotted bending-moment diagram, a marked vertical jump occurs at section C while shear remain
- Civil FLT-01 — `data/civil/ce-flt01.js#Q10` — While preparing a design-aid sheet, match List-I beam cases to List-II max BM (same w, length l): (a

### Rule 11. Figure-dependency: cover the figure test

**Streams:** Civil, Electrical  
**Evidence:** 304 independent hits

**Explanation**

If a figure is attached, the keyed answer usually depends on a labelled length, support, or curve. Solving from the stem alone is a dependency failure.

**When to use**

Stem says ‘shown’, ‘figure’, or options name Detail/Curve labels.

**Application steps**

1. Read every dimension and support on the crop before picking.
2. Strike options that ignore a labelled overhang, load, or curve name.
3. If the stem names Detail/Curve labels, those labels must appear on the figure.

**Memory cue:** `Cover-the-figure test: cannot answer correctly with figure hidden`

**Core elimination move**

If you can pick the answer without the figure, stop — stem/figure mismatch. Otherwise eliminate options that ignore a labelled dimension, support, or curve on the crop.

**Sample evidence**

- Civil FLT-01 — `data/civil/ce-flt01.js#Q3` — Proof-load planning uses an overhanging beam A–B–C with supports at A and B: AB = 4 m, overhang BC =
- Civil FLT-01 — `data/civil/ce-flt01.js#Q9` — On the plotted bending-moment diagram, a marked vertical jump occurs at section C while shear remain
- Civil FLT-01 — `data/civil/ce-flt01.js#Q18` — An RC slab panel has clear spans lx = 3.5 m (short) and ly = 5.0 m (long), so ly/lx ≈ 1.43, and all 
- Civil FLT-01 — `data/civil/ce-flt01.js#Q21` — At reinforcement inspection, a tied column shows the longitudinal-bar layout with intermediate bars 
- Civil FLT-01 — `data/civil/ce-flt01.js#Q26` — From the design shear table (also shown), τc = 0.48 MPa at 0.50% tension steel and τc = 0.56 MPa at 
- Civil FLT-01 — `data/civil/ce-flt01.js#Q29` — A differential mercury manometer between water mains A and B has mercury specific gravity S = 13.6, 

### Rule 12. Rankine / Terzaghi / earth-pressure term drop

**Streams:** Civil  
**Evidence:** 86 independent hits

**Explanation**

Bearing capacity and earth-pressure formulae have multiple additive terms. Dropping Nγ, swapping Ka/Kp, or using dry unit weight under water are classic traps.

**When to use**

Bearing capacity or lateral earth pressure with Nc, Nq, Nγ or Ka/Kp.

**Application steps**

1. Write the full Terzaghi or Rankine expression used in the stem.
2. Strike options that omit a term or use Ka where Kp is required (or vice versa).
3. If submerged, use buoyant unit weight as required.

**Memory cue:** `qu = c Nc + q Nq + 0.5 γ B Nγ (Terzaghi form)`

**Core elimination move**

Write the full Terzaghi/Rankine expression. Eliminate options that drop the γBN term, swap Ka↔Kp, or use dry γ when stem says submerged.

**Sample evidence**

- Civil FLT-01 — `data/civil/ce-flt01.js#Q11` — During buckling checks for a slender pin-ended strut, a junior engineer proposes to use the classica
- Civil FLT-01 — `data/civil/ce-flt01.js#Q38` — At pump inspection during a commissioning hold, crackling noise, fluctuating delivery head and pitti
- Civil FLT-01 — `data/civil/ce-flt01.js#Q53` — Primary consolidation under a shallow footing uses two clay layers (also tabulated on the figure): L
- Civil FLT-01 — `data/civil/ce-flt01.js#Q55` — A square footing sized for allowable net bearing pressure under the service column load still shows 
- Civil FLT-01 — `data/civil/ce-flt01.js#Q56` — In preliminary footing sizing for a lightly loaded column, the net ultimate bearing capacity from th
- Civil FLT-01 — `data/civil/ce-flt01.js#Q61` — Detailing of a property-line foundation uses a stiff strap that connects the exterior and interior f

### Rule 13. Mohr / principal-stress pair consistency

**Streams:** Civil  
**Evidence:** 26 independent hits

**Explanation**

Principal stresses from Mohr's circle must satisfy σ1 + σ2 = σx + σy. Treating shear as a normal stress breaks that invariant.

**When to use**

σx, σy, τxy given; options are σ1, σ2, or θp.

**Application steps**

1. Compute σ_avg and R; then σ1,2 = σ_avg ± R.
2. Strike pairs that violate σ1+σ2 = σx+σy.

**Memory cue:** `σ1,2 = (σx+σy)/2 ± √[((σx-σy)/2)^2 + τ^2]`

**Core elimination move**

σavg = (σx+σy)/2; R = √[((σx−σy)/2)²+τ²]. Eliminate pairs that violate σ1+σ2 = σx+σy or that treat τ as a normal stress.

**Sample evidence**

- Civil FLT-01 — `data/civil/ce-flt01.js#Q5` — While interpreting a strain-rosette investigation on a critical plane-stress element, the engineer r
- Civil FLT-01 — `data/civil/ce-flt01.js#Q43` — A built-up column reviewed in the design office has different effective lengths and different radii 
- Civil FLT-01 — `data/civil/ce-flt01.js#Q51` — While checking an inclined-roof purlin under combined gravity and wind-reversal actions, the resulta
- Civil FLT-01 — `data/civil/ce-flt01.js#Q53` — Primary consolidation under a shallow footing uses two clay layers (also tabulated on the figure): L
- Civil FLT-02 — `data/civil/ce-flt02.js#Q12` — At a point, \(\sigma_x=80\) MPa tension, \(\sigma_y=20\) MPa compression and \(\tau_{xy}=30\) MPa. D
- Civil FLT-02 — `data/civil/ce-flt02.js#Q13` — A circular shaft \(d=60\) mm transmits 12 kN·m torque while carrying 80 kN tensile force. Under maxi

### Rule 14. SFD↔BMD jump / couple vs point-load confusion

**Streams:** Civil  
**Evidence:** 39 independent hits

**Explanation**

On SFDs/BMDs: a point load causes a shear jump; a couple causes a moment jump (no shear jump).

**When to use**

Beam figure with point load, UDL, or couple; options describe jumps.

**Application steps**

1. Identify whether the singularity is a force or a couple.
2. Strike options that swap shear-jump and moment-jump rules.

**Memory cue:** `Point load → ΔV ; Couple → ΔM`

**Core elimination move**

Point load → shear jump; couple → moment jump (no shear jump). Eliminate options that swap those rules.

**Sample evidence**

- Civil FLT-01 — `data/civil/ce-flt01.js#Q9` — On the plotted bending-moment diagram, a marked vertical jump occurs at section C while shear remain
- Civil FLT-01 — `data/civil/ce-flt01.js#Q24` — In design review, factored moment is 160 kN·m while the limiting singly reinforced capacity of the f
- Civil FLT-01 — `data/civil/ce-flt01.js#Q25` — A design review finds that the factored moment exceeds the limiting capacity of the same section as 
- Civil FLT-01 — `data/civil/ce-flt01.js#Q31` — In a spillway stilling-basin design review, the hydraulic engineer debates energy dissipation across
- Civil FLT-01 — `data/civil/ce-flt01.js#Q61` — Detailing of a property-line foundation uses a stiff strap that connects the exterior and interior f
- Civil FLT-02 — `data/civil/ce-flt02.js#Q14` — Match loading change with the qualitative SFD/BMD consequence: (1) point load, (2) applied couple, (

### Rule 15. SCR / PE latching vs holding vs firing

**Streams:** Electrical  
**Evidence:** 18 independent hits

**Explanation**

For SCRs, latching current is larger than holding current. Latching is needed to establish conduction after the gate pulse; holding keeps it on.

**When to use**

Thyristor/SCR gate, latching, holding, or commutation options.

**Application steps**

1. Remember IL > IH.
2. Strike options that swap latching with holding or that size gate width from holding alone.

**Memory cue:** `Latching current > holding current`

**Core elimination move**

Latching > holding; latching is the current to *establish* conduction after gate pulse. Eliminate options that swap latching↔holding or that set gate width from holding current alone.

**Sample evidence**

- Electrical FLT-01 — `data/electrical/ee-flt01.js#Q47` — An SCR turns off when which condition is met for sufficient time?
- Electrical FLT-02 — `data/electrical/ee-flt02.js#Q47` — After latch, SCR stays on until anode current falls below:
- Electrical FLT-02 — `data/electrical/ee-flt02.js#Q53` — In field, class-F (line) commutation of SCR succeeds when:
- Electrical ST-PE — `data/electrical/st/ee-st-pe-01.js#Q1` — SCR latching current is:
- Electrical ST-PE — `data/electrical/st/ee-st-pe-01.js#Q6` — Gate pulse width for SCR with inductive load must ensure:
- Electrical ST-PE — `data/electrical/st/ee-st-pe-01.js#Q8` — Commutation in class B (self) SCR circuit uses:

### Rule 16. Non-core: option that abandons the asked operation

**Streams:** Non-core  
**Evidence:** 37 independent hits

**Explanation**

Non-core items often include one option that solves a different operation (CI instead of SI, active instead of passive, wrong percentage base).

**When to use**

Quant / reasoning / English — one option changes the operation (%, SI, tense, code).

**Application steps**

1. Re-state the exact ask in one short sentence.
2. Strike any option that changes the operation.

**Memory cue:** `Match the asked operation exactly (%, SI, tense, code rule)`

**Core elimination move**

Re-state the exact ask (20% of 450; SI for 2 years; passive of present perfect). Eliminate options that solve a different operation (CI instead of SI, active instead of passive).

**Sample evidence**

- Civil FLT-01 — `data/civil/ce-flt01.js#Q72` — A transmission-estimate package rises from ₹8.0 crore to ₹9.2 crore after a design revision. The per
- Civil FLT-01 — `data/civil/ce-flt01.js#Q76` — A mobilisation advance of ₹5,00,000 is charged simple interest at 12% per annum for 8 months. The in
- Civil FLT-01 — `data/civil/ce-flt01.js#Q77` — A contractor’s quoted cost for a bay package is ₹12 lakh. He allows 10% discount on the quote and st
- Civil FLT-01 — `data/civil/ce-flt01.js#Q86` — In a certain code used in a mock dispatch sheet, each letter is shifted +1, −1, +1, −1… alternately.
- Civil FLT-01 — `data/civil/ce-flt01.js#Q92` — Choose the correct passive form of: “The engineer verified the relay settings.”
- Civil FLT-02 — `data/civil/ce-flt02.js#Q73` — A price rises 20%, falls 10%, then attracts 5% tax. Relative to the original pre-tax price, the fina

### Rule 17. Last-resort: dimensional / absurdity cull (evidence-limited)

**Streams:** Civil, Electrical, Non-core  
**Evidence:** 232 independent hits

**Explanation**

When two options remain, cull any survivor whose units cannot equal the asked quantity (mm^2 vs N/mm^2, ohm vs siemens, kN vs kn·m).

**When to use**

Time pressure; two options already killed by other established rules; two remain.

**Application steps**

1. Write the unit of the asked quantity.
2. Strike options whose units cannot match.
3. Then prefer consistency with figure boundary conditions — never 'pick C' myths.

**Memory cue:** `Units(asked) must equal Units(option)`

**Core elimination move**

Cull any remaining option whose units cannot match the ask (mm² vs N/mm², Ω vs S, kN vs kN·m). Then prefer the option consistent with the figure’s boundary conditions. Do **not** guess from ‘middle value’ myths — our banks do not support that heuristic.

**Sample evidence**

- Civil FLT-01 — `data/civil/ce-flt01.js#Q41` — The plane truss shown carries load W and moment M at apex B. Force in member AB is:
- Civil FLT-02 — `data/civil/ce-flt02.js#Q47` — The design buckling-curve crop plots reduction factor \(\chi\) against nondimensional slenderness fo
- Civil ST-FE — `data/civil/st/ce-st-fe-01.js#Q1` — For a strip footing, take c = 20 kPa, Nc = 25, q = 30 kPa, Nq = 12, γ = 18 kN/m³, B = 2 m and Nγ = 8
- Civil ST-FE — `data/civil/st/ce-st-fe-01.js#Q2` — A 2 m clay layer drains from both faces. With Cv = 0.004 m²/day and Tv = 0.197 for 50% consolidation
- Civil ST-FE — `data/civil/st/ce-st-fe-01.js#Q3` — The shown square footing distributes a concentric service load of 260 kN over a 2.3 m × 2.3 m base. 
- Civil ST-FE — `data/civil/st/ce-st-fe-01.js#Q5` — A 6 m high vertical retaining wall retains dry sand with γ = 18 kN/m³ and φ = 30°. Using Rankine Ka 

## Drafts (not established)

- Kill the neighbour-formula lookalike (4 hits)
- SIL / surge-impedance identity (5 hits)
- Transformer referral / turns-ratio scaling (7 hits)
