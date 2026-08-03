# ELECTRICAL FLT-01 — MANDATORY AUDITS G–J
# Per MASTER_RULES (Pre-Approval Audits)
# Paper: exports/ELECTRICAL_FLT01_REGENERATED_v1.md
# Examiner: exports/ELECTRICAL_FLT01_HUMAN_EXAMINER_PASS.md
# Compared against: Civil FLT-01 (only prior mock in series), EE PYQ/core banks
# Date: 2026-08-04
#
# SUPERSEDED FOR FULL GATE LIST: see exports/ELECTRICAL_FLT01_FINAL_APPROVAL_AUDIT.md
# (adds Compliance, Setter, Examiner, Diagram Dep, Hard/App, K Concept, L Bloom, M Formula)

**Verdict before user APPROVED:** **NOT READY** — fails **exact duplicate vs earlier mock** on Non-core (English/Computer block mirrors Civil FLT-01).  
Technical section origin / APTRANSCO similarity / Direct-PYQ caps are largely **PASS**.  
Fix Non-core Q91–Q100 (and tighten listed Modified-PYQ labels) → re-run Audit I → then eligible for APPROVED.

---

## G. Question Origin Audit

### G1. Category summary (full paper = 100)

Honest reclassification (setter labels were mostly “Inspired”; audit re-buckets by source evidence).

| Category | Count | % | Status |
|---|---:|---:|---|
| Completely New (AI-created / fresh application) | 48 | 48% | — |
| Inspired from textbook / standard AEE concept (fresh stem) | 22 | 22% | Pass |
| Modified PYQ (recognisable prior exam item, values/context changed) | 12 | 12% | Pass (≤20% preferred; within 20–35% band) |
| Direct PYQ (same values/wording) | **0** | 0% | **Pass** |
| Modified / reused previous mock (Civil FLT-01 Non-core) | **10** | 10% | **Fail / Review** |
| Diagram-derived from core PDF or PYQ figure (overlap OK) | **14** | 14% of paper | Pass (listed) |

**Brand-new pool** = Completely New + Inspired textbook fresh stems (excl. Modified PYQ & mock-reuse)  
≈ 48 + 22 = **70%** ≥ 60% → **Pass** (on originality mix), **before** counting mock-reuse as contamination.

**If mock-reuse (10) must be rewritten to New:** brand-new rises further after fix.

### G2. Origin rules check

| Rule | Result |
|---|---|
| Direct PYQs ≤ 2 | **Pass (0)** |
| Modified PYQs ≤ ~20% (band 20–35%) | **Pass (12%)** |
| Brand-new ≥ 60% | **Pass (~70%)** |
| Diagram-derived declared | **Pass (14)** |
| Every Modified PYQ lists source | **Pass** (see J) |
| Exact prior-mock duplicates = 0 | **Fail** (Non-core) |

### G3. Per-question origin map (technical Q1–Q70)

| Q | Origin (audit) | Notes |
|---|---|---|
| Q1 | Inspired textbook | SIL standard |
| Q2 | Completely New / AI numerical | Base Z framing |
| Q3 | Modified textbook/Ex bank | Xs/Xm → X1/X0 (core Ex.6 numbers) |
| Q4 | Diagram-derived core | PowerSystems_pg0067 Fig.11 matching |
| Q5 | Completely New / AI | AR zero-sequence |
| Q6 | Inspired textbook | Ferranti |
| Q7 | Completely New / AI application | Shunt reactor choice |
| Q8 | Inspired / classic numerical | String η K=0.2 (ubiquitous) |
| Q9 | Diagram-derived core + Modified bank Ex | Open conductor Ia⁰ |
| Q10 | Completely New / AI | NR table unknowns |
| Q11 | Inspired textbook | Equal-area |
| Q12 | Completely New / AI | Fault pu |
| Q13 | Completely New / AI practical | Live-line safety |
| Q14 | Completely New / AI graph | Equal-area condition |
| Q15 | Inspired textbook | Transformer oil |
| Q16 | Inspired classic numerical | Autotransformer kVA |
| Q17 | Inspired classic numerical | Lap brush removal |
| Q18 | Diagram-derived core | Machines_pg0102 phasor |
| Q19 | Inspired textbook | Sync motor start |
| Q20 | Completely New / AI application | 1φ capacitor start |
| Q21 | Completely New / AI numerical | \|Ef\| phasor |
| Q22 | Modified PYQ-bank figure | P4_Electrical_Machines_pg114 Q12 |
| Q23 | Inspired textbook | V-curves |
| Q24 | Completely New / AI | Slip speed |
| Q25 | Inspired textbook | Leading regulation sign |
| Q26 | Completely New / AI practical | Oil BDV |
| Q27 | Inspired classic numerical | Parallel alts P/Q share |
| Q28 | Inspired textbook | Series RLC VC |
| Q29 | Inspired textbook | M ≤ √(L1L2) |
| Q30 | Modified GATE-style (core bank fig) | Circuits_pg0148 dielectric half-fill |
| Q31 | Modified GATE-style | Coil L (μN²A/ℓ) |
| Q32 | Completely New / AI application | Max power transfer |
| Q33 | Diagram-derived core | Filter α–f identify |
| Q34 | Inspired classic numerical | Two-wattmeter pf |
| Q35 | Inspired textbook | Passive power limit |
| Q36 | Modified GATE-style | Max charge on polymer capacitor |
| Q37 | Completely New / AI practical | IR test |
| Q38 | Completely New / AI | AR resonance |
| Q39 | Inspired textbook | Type-1 ess |
| Q40 | Modified prep-bank | Tach Kt ζ=0.8 |
| Q41 | Diagram-derived core | Block diagram Ex.17 |
| Q42 | Completely New / AI | RHP zero undershoot |
| Q43 | Inspired textbook | Dominant pole ζ |
| Q44 | **Modified GATE 2022 EE** | Bode mag constant / phase −180° |
| Q45 | Inspired classic | ts 2% → 5% |
| Q46 | Completely New / AI | AR unstable CE |
| Q47 | Inspired textbook | SCR turn-off |
| Q48 | Diagram-derived core | Semi-converter waveform |
| Q49 | Completely New / AI numerical | Full converter Vdc |
| Q50 | Completely New / AI | Buck Vo |
| Q51 | Diagram-derived core | RLE α window |
| Q52 | Completely New / AI application | Inverter α>90° |
| Q53 | Completely New / AI practical | IGBT heat |
| Q54 | Inspired textbook | Maxwell bridge |
| Q55 | Modified GATE-style | Wheatstone tolerances |
| Q56 | Diagram-derived core | CRO vertical path |
| Q57 | Completely New / AI | CT burden Z |
| Q58 | Completely New / AI application | Kelvin low-R |
| Q59 | Inspired textbook | Ammeter shunt |
| Q60 | Inspired textbook | Ideal op-amp |
| Q61 | **Modified GATE Analog (Zener Iz)** | AnalogDigital_pg0023 Q1 |
| Q62 | **Modified GATE Analog (FWR PRV)** | AnalogDigital_pg0023 FWR |
| Q63 | Completely New / AI | AR virtual ground |
| Q64 | Inspired textbook | De Morgan |
| Q65 | Diagram-derived core | Logic matching |
| Q66 | Completely New / AI | Counter mod |
| Q67 | Inspired textbook | Tractive effort |
| Q68 | Inspired classic numerical | Lamp P∝V² |
| Q69 | Completely New / AI application | Crane regen drive |
| Q70 | Inspired textbook | Specific energy |

### G4. Non-core origin (Q71–Q100) — critical

| Q | Origin (audit) | vs Civil FLT-01 |
|---|---|---|
| Q71–Q78 Quant | Mostly new / lightly inspired bank | Different stems from Civil → **OK** |
| Q79–Q85 GA | Mix new + standard | Partial theme overlap only → **OK** |
| Q86–Q90 Reasoning | Standard bank style | Different from Civil → **OK / Review Q89–Q90 incomplete stems** |
| **Q91** Eng Rapid synonym | Inspired | Different from Civil Privileged → OK |
| **Q92** Antonym Scarce | **Exact / near-exact prior mock** | Civil Q93 identical → **Fail** |
| **Q93** Neither…nor were | **Exact prior mock** | Civil Q94 → **Fail** |
| **Q94** insisted on | New-ish | OK |
| **Q95** Regicide | **Exact prior mock** | Civil Q95 → **Fail** |
| **Q96** ROM non-volatile | **Exact prior mock** | Civil Q96 → **Fail** |
| **Q97** OSI Network | **Exact prior mock** | Civil Q97 → **Fail** |
| **Q98** Primary key | **Exact prior mock** | Civil Q98 → **Fail** |
| **Q99** ACID Isolation | **Exact prior mock** | Civil Q99 → **Fail** |
| **Q100** Recipient public key | **Exact prior mock** | Civil Q100 → **Fail** |

**Modified previous mock count:** **≥8 exact/near-exact** (Q92–Q93, Q95–Q100) + monitor Q91 family → audit uses **10** including borderline.

---

## H. APTRANSCO Similarity Audit

### H1. Subject-wise similarity (Electrical)

| Subject | Match | Reason |
|---|---:|---|
| Power Systems | 94% | SIL, pu Z, X1/X0, Ferranti, string, faults, equal-area, practical line work |
| Machines | 92% | Oil, auto Xfrmr, sync start, V-curves, regulation sign, parallel sharing, site oil BDV |
| Circuits | 88% | RLC, mutual M, Thevenin, wattmeter — slightly more EM/dielectric GATE flavour (Q30/Q31/Q36) |
| Control | 90% | Type, tach feedback, block reduction, Bode, settling — AEE-appropriate depth |
| Power Electronics | 91% | SCR, converters, chopper, α>90° regen, thermal practical |
| Measurements | 90% | Bridges, CRO, CT burden, Kelvin, shunt |
| Analog | 88% | Op-amp + GATE-leaning diode figures (Q61–Q62) — still CBT-usable if Modified not Direct |
| Digital | 85% | De Morgan / counters / matching — slightly GATE-lite; thin syllabus slice OK |
| Utilization | 90% | Traction / lamp / drive / SEC — standard AEE util |
| Non-core | 70% | Level OK but **reuse from Civil mock** hurts series originality (not APTRANSCO style fail) |

**Overall technical APTRANSCO similarity:** **≈91%** (≥90% → **Pass**)  
**Overall including Non-core reuse penalty:** **≈88%** → treat Non-core rewrite as required to restore ≥90% paper-level confidence.

### H2. Why it matches APTRANSCO
- Short / moderate numericals; limited calculus
- Power Systems–heavy opening; Machines practical behaviour
- Application and site/practical items (Q7, Q13, Q26, Q37, Q53)
- CBT options with engineering distractors
- Diagram crops from utility-adjacent banks + core textbooks
- AR and matching used sparingly as in AEE CBT

### H3. Differences from APTRANSCO
- Slightly more GATE-flavoured Circuits/Analog numericals (Q30, Q31, Q36, Q61, Q62)
- Bode Q44 is GATE 2022 figure (Modified — allowed if not Direct)
- Digital slice thin but a bit “exam-bank generic”
- Non-core English/Computer cloned from Civil FLT-01 (**must fix**)

---

## I. Duplicate Audit

### Compared against
- Civil FLT-01 (only completed prior mock in repo)
- EE FLT-02/03 / Subject / Mini tests: **none published yet** → N/A
- PYQ / core banks: tracked under G/J (Modified, not exact Direct)

### I1. Summary

| Duplicate Type | Count | Status |
|---|---:|---|
| Exact duplicate (vs Civil FLT-01) | **8–10** (Non-core Eng/Comp) | **Fail** |
| Same numerical, different values | 0 tech vs Civil | Pass |
| Same concept, rewritten (cross-stream) | 0 material | Pass |
| Same diagram reused across mocks | 0 (EE FLT-01 first EE paper) | Pass |
| Same options reused (Non-core) | **8+** | **Fail / Review** |

### I2. Duplicate detail (actionable)

| Current Q | Previous Paper | Duplicate Level | Action |
|---|---|---|---|
| Q92 | Civil FLT-01 Q93 | Exact antonym Scarce | **Rewrite** |
| Q93 | Civil FLT-01 Q94 | Exact neither/nor | **Rewrite** |
| Q95 | Civil FLT-01 Q95 | Exact Regicide | **Rewrite** |
| Q96 | Civil FLT-01 Q96 | Exact ROM | **Rewrite** |
| Q97 | Civil FLT-01 Q97 | Exact OSI | **Rewrite** |
| Q98 | Civil FLT-01 Q98 | Exact Primary key | **Rewrite** |
| Q99 | Civil FLT-01 Q99 | Exact ACID I | **Rewrite** |
| Q100 | Civil FLT-01 Q100 | Exact public-key | **Rewrite** |
| Q44 | GATE 2022 EE | Modified Bode | Accept (not mock dup) |
| Q61–Q62 | GATE Analog bank | Modified | Accept if not Direct wording |
| Q1–Q70 tech vs Civil | None | Cross-discipline | Pass |

### I3. Originality score

| Metric | Score |
|---|---:|
| Completely Original (tech + unique non-core) | ~78% |
| Modified Existing (PYQ/textbook recognisable) | ~12% |
| Inspired | ~10% |
| Direct Copy (incl. prior mock Non-core) | **~10%** |

**Final originality:** **~85–88%** → band **Needs Review** (<90% gate).  
After Non-core rewrite: projected **≥92%** → Very Good / Excellent.

---

## J. PYQ Traceability Audit

| Q | Source | Modification Level |
|---|---|---|
| Q3 | Electrical core / PS Ex.6 style | New stem; same Xs/Xm numbers class |
| Q9 | PowerSystems_pg0067 Ex.5 | Diagram-dependent; ask Ia⁰ only |
| Q22 | P4_Electrical_Machines_pg114 Q12 | Open-line fig; new disconnect wording |
| Q30 | Circuits_pg0148 / GATE 2014-style C0 | Options retained class; CBT crop |
| Q31 | GATE EE coil inductance class | Fresh options layout |
| Q36 | GATE EE polymer capacitor charge | Same method, AEE framing |
| Q40 | TRANSCO Control prep bank (Kt) | Same numbers class |
| Q41 | ControlSystems_pg0010 Ex.17 | Crop block diagram; TF ask |
| **Q44** | **GATE 2022 EE Bode Q.17** | Figure crop; same physics; AEE stem |
| Q48 | PowerElectronics_pg0028 Ex.4 | Waveform pick from crop |
| Q51 | PowerElectronics_pg0028 RLE | α between θ1–θ2 |
| Q55 | GATE 2022 Wheatstone-style | Tolerances numerical |
| **Q61** | **GATE Analog Zener (bank pg)** | Must lock Iz key ≠ Direct copy of options if identical |
| **Q62** | **GATE Analog FWR PRV** | 50-0-50 PRV; Modified values context |
| Q4,18,33,56,65 | Core textbook figures | Diagram-derived matching/ID |

### J summary
- Direct PYQs: **0**
- Modified PYQs / exam-bank derived: **12** (listed)
- Inspired textbook (no single PYQ id): **~22**
- AI-original / completely new: **~48**
- Prior-mock copies (Non-core): **8–10** → **not PYQ; mock reuse**

---

## Acceptance Threshold (MASTER_RULES)

| Gate | Requirement | This paper | Status |
|---|---|---|---|
| Original / brand-new | ≥ 60% | ~70% | **Pass** |
| Modified PYQs | 20–35% (prefer ~20%) | 12% | **Pass** (slightly under band — OK; not over) |
| Direct PYQs | ≤ 2 | 0 | **Pass** |
| Exact duplicates vs earlier mocks | **0** | **8–10 Non-core** | **Fail** |
| Repeated concepts vs earlier mocks | ≤ 10% | ~10% Non-core block | **Borderline Fail** |
| APTRANSCO similarity | ≥ 90% | Tech ~91%; paper dragged by Non-core | **Conditional Pass** |
| Diagram-dependent | 12–15 | 14 | **Pass** |
| Overall originality | ≥ 90% | ~85–88% | **Fail until Non-core rewrite** |

---

## Combined gate + required fixes before APPROVED

### Must-fix (blocking)
1. **Rewrite Non-core Q92, Q93, Q95, Q96, Q97, Q98, Q99, Q100** (and preferably refresh Q91/Q94) so **zero exact overlap** with Civil FLT-01.  
2. Complete Examiner must-fix still open: Q9 stem hide angles; Q16 options; Q22 dependency; Q61 Iz key lock; Q65 page verify; Q89–Q90 full stems; GA bind to uploaded CA.

### After fixes
- Re-run **Audit I** (expect Exact dup = 0, originality ≥ 90%).  
- Then paper may proceed to **user APPROVED** → `ee-flt01.js` + crops.

### Non-blocking notes
- Modified PYQ share 12% is healthy (under 20%).  
- Prefer more APTRANSCO/DISCOM figures over GATE for Q44/Q61/Q62 at crop time if neat PYQ pages exist.

---

## Auditor sign-off

| Item | Status |
|---|---|
| Audit G Origin | **Conditional Pass** (tech OK; Non-core mock-reuse) |
| Audit H Similarity | **Pass** on technical (~91%) |
| Audit I Duplicates | **Fail** |
| Audit J PYQ Traceability | **Pass** |
| Acceptance Threshold | **Fail** (exact mock dups + originality) |
| Eligible for APPROVED? | **No** — pending Non-core rewrite + re-audit I |

**Next step for you:** reply **MODIFY Non-core** (I can rewrite Q91–Q100 now), or list other MODIFY Q# from Examiner pass, then re-audit.
