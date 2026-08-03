# ELECTRICAL FLT-01 — HUMAN EXAMINER PASS (independent)
# Per MASTER_RULES: scored rubric; no self-ACCEPT; Hard/Application justifications; diagram dependency
# Companion to: exports/ELECTRICAL_FLT01_REGENERATED_v1.md

**Role:** Senior APTRANSCO AEE examiner reviewing Electrical FLT-01 for publication.  
**Setter must not decide Accept.** Accept / Modify / Reject = this pass only.  
**Code status:** NOT allowed until user replies **APPROVED** after this pass.

---

## A. Diagram dependency verification

| Q | Source / crop intent | Without diagram, can correct option still be chosen? | Result |
|---|---|---|---|
| Q4 | Xfmr Δ/Y sketches | NO — matching needs sketches | **PASS** |
| Q9 | Open conductor Ia,Ib,Ic | NO — values on figure | **PASS** (ensure stem does not restate 10∠0°, 10∠180°) |
| Q18 | Leading pf phasor | NO — identify orientation | **PASS** |
| Q22 | Long open line | WEAK if stem says “open Rx” in words only | **MODIFY** — hide open-end detail; force fig |
| Q30 | Half-gap dielectric | NO — geometry on fig | **PASS** |
| Q33 | Filter α–f plots | NO — must read which plot | **PASS** |
| Q41 | Block diagram Ex.17 | NO — topology required | **PASS** |
| Q44 | Bode mag/phase (PYQ) | NO — shape required | **PASS** |
| Q48 | Semi-converter waves | NO — pick waveform | **PASS** (crop must show A–D waves clearly) |
| Q51 | RLE θ1/θ2/α | NO — angles on fig | **PASS** |
| Q56 | CRO vertical path | PARTIAL — recallable by experienced techs | **MODIFY** — ask specific block on crop (“which block feeds delay”) |
| Q61 | Zener Iz | NO — labels required | **MODIFY** — lock single numeric key after crop QA |
| Q62 | FWR PRV | NO — 50-0-50 on fig | **PASS** |
| Q65 | Logic match | NO — symbols on fig | **MODIFY** — AnalogDigital_pg0088 must be verified to contain gate symbols; else replace page |

**Diagram gate summary:** Core figures are strong; Q22/Q56/Q61/Q65 need stem/crop tightening before code. PYQ Bode (Q44) is acceptable rank-3 prior-year figure when APTRANSCO-family figure unavailable.

---

## B. Hard / Application justification audit

| Q | Claim | Valid? | Examiner view |
|---|---|---|---|
| Q5 Hard AR | Sequence + grounding | OK | **Accept** Hard |
| Q7 Application | Shunt reactor choice | OK | **Accept** |
| Q9 Hard | Sym components + fig | OK | **Accept** |
| Q12 Hard+App | Fault pu | OK | **Accept** |
| Q14 Hard Graph | Equal area | OK | **Accept** |
| Q18 Hard | Phasor read | OK | **Accept** |
| Q20 Application | 1φ start | OK | **Accept** |
| Q22 Hard+App | Ferranti disconnect | OK if fig forced | **Modify** stem |
| Q25 Hard | Regulation sign | Borderline Hard | **Modify** — add numeric dual or downgrade Medium |
| Q27 Hard+App | Parallel alts | OK | **Accept** |
| Q32 Application | Max power | OK | **Accept** |
| Q33 Hard Graph | Filter ID | OK | **Accept** |
| Q36 Hard | Charge max | OK | **Accept** |
| Q38 AR | Resonance current | OK | **Accept** |
| Q42 Hard+App | RHP zero | OK | **Accept** |
| Q44 Hard | Bode all-pass | OK | **Accept** |
| Q46 AR | Unstable CE | OK | **Accept** |
| Q50 Hard | Buck Vo | One-step — weak Hard | **Modify** — deepen or Medium |
| Q51 Hard+App | α window | OK | **Accept** |
| Q52 Hard+App | Inverter α | OK | **Accept** |
| Q57 Hard | CT burden | OK | **Accept** |
| Q58 Application | Kelvin | OK | **Accept** |
| Q61 Hard | Zener | OK after key lock | **Modify** |
| Q62 Hard | PRV | OK | **Accept** |
| Q65 Hard Match | Gates | OK if fig OK | **Modify** verify page |
| Q69 Hard+App | Crane drive | OK | **Accept** |

---

## C. Scored rubric sample + Human Examiner (independent)

Format: `C|Calc|D|L|E` each /2. Examiner may disagree with setter 10/10.

### Power Systems

| Q | Rubric | Total | Human Examiner | Note |
|---|---|---|---|---|
| Q1 | 2\|2\|2\|2\|2 | 10 | **Accept** | SIL concept exam-like |
| Q2 | 2\|2\|2\|2\|2 | 10 | **Accept** | Base Z |
| Q3 | 2\|2\|2\|2\|2 | 10 | **Accept** | X1/X0 |
| Q4 | 2\|2\|2\|2\|2 | 10 | **Accept** | Matching+fig |
| Q5 | 2\|2\|2\|2\|2 | 10 | **Accept** | AR OK |
| Q6 | 2\|2\|2\|2\|1 | 9 | **Accept** | Ferranti |
| Q7 | 2\|2\|2\|2\|2 | 10 | **Accept** | Application OK |
| Q8 | 2\|2\|2\|2\|2 | 10 | **Accept** | String η |
| Q9 | 2\|2\|2\|2\|2 | 10 | **Modify** | Hide Ia/Ib text |
| Q10 | 2\|2\|2\|2\|2 | 10 | **Accept** | Table NR |
| Q11 | 2\|2\|2\|2\|2 | 10 | **Accept** | Equal area |
| Q12 | 2\|2\|2\|2\|2 | 10 | **Accept** | Fault |
| Q13 | 2\|2\|2\|2\|2 | 10 | **Accept** | Practical |
| Q14 | 2\|2\|2\|2\|2 | 10 | **Accept** | Stability graph |

### Machines (summary)

| Band | Examiner |
|---|---|
| Q15–Q17, Q19–Q21, Q23–Q24, Q26–Q27 | **Accept** (Q16 options must be 12.5/10/40/8.75) |
| Q18 | **Accept** |
| Q22 | **Modify** stem/fig dependency |
| Q25 | **Modify** deepen or Medium |

### Circuits / Control / PE / Meas / Analog–Digital / Util

| Band | Examiner |
|---|---|
| Q28–Q38 | **Accept** majority; Q35 OK |
| Q39–Q46 | **Accept**; Q44 Bode **Accept** (PYQ) |
| Q47–Q53 | **Accept**; Q50 **Modify** difficulty label |
| Q54–Q59 | **Accept**; Q56 **Modify** stem specificity |
| Q60–Q66 | **Modify** Q61 key lock + Q65 page verify; else Accept |
| Q67–Q70 | **Accept** |

### Non-core

| Band | Examiner |
|---|---|
| Quant Q71–Q78 | **Accept** |
| GA Q79–Q85 | **Modify** Q79/Q84/Q85 against uploaded CA/notes at code time |
| Reasoning Q86–Q90 | **Modify** Q89–Q90 need full stems before code |
| English Q91–Q95 | **Accept** |
| Computer Q96–Q100 | **Accept** |

---

## D. Examiner summary counts (tech + paper)

| Verdict | Approx count | Action |
|---|---|---|
| **Accept** | ~82 | Keep |
| **Modify** | ~15 | Fix before code (listed below) |
| **Reject** | 0 | — |

### Must-fix before user final APPROVED → code

1. **Q9** — do not restate Ia/Ib angles in stem; figure-only.  
2. **Q16** — options = 12.5 / 10 / 40 / 8.75 kVA; Ans 12.5.  
3. **Q22** — strengthen diagram dependency wording.  
4. **Q25** — add numeric regulation or downgrade Medium.  
5. **Q50** — Medium or add second step (e.g. also find Iavg).  
6. **Q56** — ask which labelled block feeds delay line.  
7. **Q61** — lock Iz to verified figure labels (single Ans).  
8. **Q65** — confirm `AnalogDigital_pg0088` has gate symbols; else swap page.  
9. **Q79/Q84/Q85** — bind to uploaded GA/CA files.  
10. **Q89–Q90** — expand full reasoning stems + keys.

---

## E. Independent paper verdict

**Structure / weightage / Easy 25% / EE diagram priority:** **PASS**  
**APTRANSCO level feel:** **~8.8–9.1 / 10** (tech strong; non-core needs CA binding)  
**Diagram policy:** PYQ used where verified (Q44 Bode; Q22 machines bank fig); core used for remaining engineering figures after PYQ folder scan showed many text-only misfiles — **acceptable with note to re-scan at crop time**.

**Human Examiner overall:** **Conditionally Accept** — ready for **user review**.  
**Not self-APPROVED for code.**

Awaiting user:
- **APPROVED** (optionally “APPROVED with must-fix 1–10”)  
- **MODIFY Q#…**  
- **REJECT**

---

## F. 25-point audit (examiner)

| # | Criterion | Status |
|---|---|---|
| 1 Weightage | Pass |
| 2 Easy 25% | Pass (assigned) |
| 3 Numerical dual | Pass on key numericals |
| 4 Diagram coverage | Pass (14) + Modifies |
| 5 Practical | Pass |
| 6 AR | Pass (≥4) |
| 7 Application | Pass + justifications |
| 8 Standards | Pass |
| 9 APTRANSCO similarity | Pass lean |
| 10 Other exams | Inspired/PYQ-fig OK |
| 11 Duplicates | Pass |
| 12 Formula repeat | Pass |
| 13 Distractors | Pass |
| 14 Answer keys | Pass* (Q61 lock) |
| 15 Explanations | Pass |
| 16 Formula | Pass |
| 17 Units | Pass |
| 18 Calculations | Pass* |
| 19 Subject balance | Pass |
| 20 Bloom | Pass |
| 21 Cognitive | Pass |
| 22 Real exam feel | **Your call** |
| 23 Time 180 | Pass |
| 24 Image mapping | Pass with crop QA |
| 25 Overall | **~9.0 — pending your approval** |
