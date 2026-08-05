# Elimination Playbook — HOD / Chief Examiner Audit

## Principle

> A rule may only be applied when that rule genuinely explains why incorrect options can be eliminated. Never force a question to fit a rule.

## Rule scores

| Playbook # | Rule | Tech | Applicability | FP control | Edu | Reuse | Overall | Published CORRECT+WEAK |
|---:|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | Service vs factored / partial-factor mix | 9 | 8 | 6 | 9 | 8 | 8.0 | 42 |
| 2 | Gross vs net / hole deduction | 9 | 9 | 8 | 9 | 9 | 8.8 | 16 |
| 3 | Cover vs effective depth | 9 | 8 | 7 | 9 | 8 | 8.2 | 17 |
| 4 | Thevenin / Norton source deactivation | 10 | 9 | 8 | 9 | 9 | 9.0 | 15 |
| 5 | Sign / sense / tension–compression flip | 8 | 6 | 5 | 8 | 7 | 6.8 | 86 |
| 6 | Figure-dependency: cover the figure test | 8 | 7 | 5 | 9 | 8 | 7.4 | 215 |
| 7 | Rankine / Terzaghi / earth-pressure term drop | 9 | 9 | 8 | 9 | 8 | 8.6 | 28 |
| 8 | SCR / PE latching vs holding vs firing | 9 | 9 | 8 | 8 | 8 | 8.4 | 19 |
| 9 | Non-core: option that abandons the asked operation | 7 | 7 | 6 | 8 | 7 | 7.0 | 34 |

## Issues found (systematic)

1. Prior matcher used **explanation text**, so words like `diagram`/`diameter`/`pu` created mass false positives.
2. Boilerplate strikes (`violates Rule`, `classic distractor`) were not technically defensible.
3. Figure-dependency and sign/sense rules were over-assigned to conceptual items (e.g. corona).
4. Units last-resort was too broad when `mm²` appeared anywhere.
5. Per-unit rule fired without an explicit base change.

## Recommended fixes applied

- Match on **stem + options only**.
- Per-rule **Trigger / Do NOT Use / False Positives / Confidence**.
- Applicability grader: **CORRECT / WEAK / INCORRECT**; only CORRECT+WEAK published under a rule.
- Elimination text separated from **Scratch Check** verification.
- Option strikes use bank trap analysis or rule-specific engineering reasons (no generic boilerplate).

## Questions assigned incorrectly (INCORRECT grade — removed from rule worked sets)

| Rule | Ref | Stream | Why | Suggested |
|---|---|---|---|---|
| Cover vs effective depth | `data/civil/ce-flt01.js#Q23` | Civil | Not an effective-depth vs cover elimination item. | — |
| Cover vs effective depth | `data/civil/ce-flt01.js#Q26` | Civil | Not an effective-depth vs cover elimination item. | — |
| Cover vs effective depth | `data/civil/ce-flt01.js#Q28` | Civil | Not an effective-depth vs cover elimination item. | — |
| Diameter ↔ radius / area geometry slip | `data/civil/ce-flt02.js#Q4` | Civil | No circular area/stress/torsion path where diameter-radius confusion changes the result. | Reassign by asked quantity |
| Cover vs effective depth | `data/civil/ce-flt02.js#Q19` | Civil | Not an effective-depth vs cover elimination item. | — |
| Cover vs effective depth | `data/civil/ce-flt02.js#Q23` | Civil | Not an effective-depth vs cover elimination item. | — |
| Cover vs effective depth | `data/civil/ce-flt02.js#Q27` | Civil | Not an effective-depth vs cover elimination item. | — |
| Last-resort: dimensional / absurdity cull (evidence-limited) | `data/civil/ce-flt02.js#Q47` | Civil | Units last-resort must not be forced onto every numerical — only when units mismatch is the remaining cull. | — |
| Cover vs effective depth | `data/civil/ce-flt02.js#Q48` | Civil | Not an effective-depth vs cover elimination item. | — |
| Cover vs effective depth | `data/civil/st/ce-st-fe-01.js#Q19` | Civil | Not an effective-depth vs cover elimination item. | — |
| Cover vs effective depth | `data/civil/st/ce-st-rcc-01.js#Q39` | Civil | Not an effective-depth vs cover elimination item. | — |
| Cover vs effective depth | `data/civil/st/ce-st-rcc-01.js#Q47` | Civil | Not an effective-depth vs cover elimination item. | — |
| Last-resort: dimensional / absurdity cull (evidence-limited) | `data/civil/st/ce-st-steel-01.js#Q14` | Civil | Units last-resort must not be forced onto every numerical — only when units mismatch is the remaining cull. | — |
| Per-unit base-change scaling | `data/electrical/ee-flt01.js#Q5` | Electrical | No Zpu/Xpu base-change elimination path. | — |
| Per-unit base-change scaling | `data/electrical/ee-flt02.js#Q5` | Electrical | No Zpu/Xpu base-change elimination path. | — |
| Figure-dependency: cover the figure test | `PYQ:2019CE1.pdf#Q5` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2019CE1.pdf#Q7` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Cover vs effective depth | `PYQ:2019CE1.pdf#Q9` | Civil | Not an effective-depth vs cover elimination item. | — |
| Figure-dependency: cover the figure test | `PYQ:2019CE1.pdf#Q9` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2019CE1.pdf#Q31` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2019CE1.pdf#Q32` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2019CE1.pdf#Q33` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2019CE2.pdf#Q27` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2019CE2.pdf#Q29` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2021CE1.pdf#Q8` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2021CE1.pdf#Q29` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2021CE1.pdf#Q31` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2021CE2.pdf#Q9` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2021CE2.pdf#Q7` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2021CE2.pdf#Q28` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2021CE2.pdf#Q29` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022CE1.pdf#Q16` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Diameter ↔ radius / area geometry slip | `PYQ:2022CE1.pdf#Q37` | Civil | No circular area/stress/torsion path where diameter-radius confusion changes the result. | Reassign by asked quantity |
| Figure-dependency: cover the figure test | `PYQ:2022CE1.pdf#Q37` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022CE1.pdf#Q38` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022CE1.pdf#Q44` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022CE1.pdf#Q46` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022CE2.pdf#Q16` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022CE2.pdf#Q18` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022CE2.pdf#Q37` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022CE2.pdf#Q38` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022CE2.pdf#Q41` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE1.pdf#Q3` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE1.pdf#Q5` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE1.pdf#Q12` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE1.pdf#Q18` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE1.pdf#Q36` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE1.pdf#Q38` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE1.pdf#Q39` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE1.pdf#Q43` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE1.pdf#Q46` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE1.pdf#Q49` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE2.pdf#Q20` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE2.pdf#Q26` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE2.pdf#Q39` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Last-resort: dimensional / absurdity cull (evidence-limited) | `PYQ:2023CE2.pdf#Q39` | Civil | Units last-resort must not be forced onto every numerical — only when units mismatch is the remaining cull. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE2.pdf#Q40` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE2.pdf#Q41` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE2.pdf#Q43` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023CE2.pdf#Q50` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2025CE1.pdf#Q17` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2025CE1.pdf#Q18` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2025CE1.pdf#Q29` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2025CE1.pdf#Q37` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2025CE1.pdf#Q40` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2025CE1.pdf#Q41` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2025CE2.pdf#Q4` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2025CE2.pdf#Q7` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2025CE2.pdf#Q10` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2025CE2.pdf#Q38` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2025CE2.pdf#Q39` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2025CE2.pdf#Q46` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:CE_1.pdf#Q2` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:CE_1.pdf#Q5` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:CE_1.pdf#Q7` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:CE_1.pdf#Q9` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:CE_1.pdf#Q38` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:CE_1.pdf#Q39` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:CE_1.pdf#Q42` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:CE_2.pdf#Q8` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:CE_2.pdf#Q9` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:CE_2.pdf#Q10` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:CE_2.pdf#Q18` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:CE_2.pdf#Q38` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:CE_2.pdf#Q39` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:CE_2.pdf#Q41` | Civil | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2019EE.pdf#Q12` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2019EE.pdf#Q35` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2019EE.pdf#Q36` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2021EE.pdf#Q7` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2021EE.pdf#Q4` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2021EE.pdf#Q9` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2021EE.pdf#Q30` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2021EE.pdf#Q34` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022EE.pdf#Q5` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022EE.pdf#Q14` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022EE.pdf#Q16` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022EE.pdf#Q21` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022EE.pdf#Q25` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022EE.pdf#Q37` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022EE.pdf#Q39` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022EE.pdf#Q48` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2022EE.pdf#Q53` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023EE.pdf#Q5` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023EE.pdf#Q10` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023EE.pdf#Q12` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023EE.pdf#Q13` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023EE.pdf#Q20` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023EE.pdf#Q22` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023EE.pdf#Q23` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023EE.pdf#Q24` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023EE.pdf#Q36` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023EE.pdf#Q37` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023EE.pdf#Q39` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023EE.pdf#Q40` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023EE.pdf#Q41` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023EE.pdf#Q43` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2023EE.pdf#Q44` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q2` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q5` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q7` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q9` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q19` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q22` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q24` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q27` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q28` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q37` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q38` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q39` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q43` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q44` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q45` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q46` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q47` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q48` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:2026EE.pdf#Q51` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:AP-Transco-AEE_ELECTRICAL-ENGINEERING-PAPER-II-2012.pdf#Q59` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:AP-Transco-AEE_ELECTRICAL-ENGINEERING-PAPER-II-2012.pdf#Q86` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:AP-Transco-AEE_ELECTRICAL-ENGINEERING-PAPER-III-2012.pdf#Q114` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q17` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q20` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q21` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q64` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q68` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q77` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q78` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q83` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q98` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q99` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q102` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q134` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |
| Figure-dependency: cover the figure test | `PYQ:APEPDCL-Assistant-Engineer-2019-Official-Paper.pdf#Q148` | Electrical | No figure attached — cover-the-figure test cannot fire. | — |

**Total INCORRECT mappings removed:** 153

## Weak mappings (published with caution badge)

Count: **47**. These remain only when the stem loosely fits; solutions mark WEAK.

## Suggested new rules (from repeated patterns)

1. **Concept / definition cull** — for pure conceptual stems (corona statements, theory assumptions) where numerical geometry rules must not fire.
2. **Neighbour-quantity (formula lookalike)** — promote from draft once ≥15 high-confidence hits with asked-quantity underline.
3. **SIL / Zc identity** — keep as draft until evidence ≥15 with SIL-specific options.
4. **Transformer a² referral** — keep as draft until evidence ≥15.

## Draft rules (not established)

- Kill the neighbour-formula lookalike (1 CORRECT+WEAK hits; need ≥15)
- Diameter ↔ radius / area geometry slip (12 CORRECT+WEAK hits; need ≥15)
- Per-unit base-change scaling (1 CORRECT+WEAK hits; need ≥15)
- SIL / surge-impedance identity (7 CORRECT+WEAK hits; need ≥15)
- Sequence-network connection by fault type (13 CORRECT+WEAK hits; need ≥15)
- √3 / phase-factor forgotten (4 CORRECT+WEAK hits; need ≥15)
- Resonance / X_L = X_C identity (14 CORRECT+WEAK hits; need ≥15)
- Mohr / principal-stress pair consistency (14 CORRECT+WEAK hits; need ≥15)
- SFD↔BMD jump / couple vs point-load confusion (3 CORRECT+WEAK hits; need ≥15)
- Transformer referral / turns-ratio scaling (8 CORRECT+WEAK hits; need ≥15)
- Last-resort: dimensional / absurdity cull (evidence-limited) (0 CORRECT+WEAK hits; need ≥15)
