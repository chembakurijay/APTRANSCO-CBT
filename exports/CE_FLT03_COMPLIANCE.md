# CE FLT-03 Compliance

**Bank:** `data/civil/ce-flt03.js`  
**Diagrams:** `images/diagrams/civil-flt03/` (15 SVGs)  
**Date:** 2026-08-05

## Gates

| Check | Result |
|---|---|
| `gate_question_banks.py --mode flt` vs `ce-flt01.js` | PASS |
| `gate_question_banks.py --mode flt` vs `ce-flt02.js` | PASS |
| Dual-parameter enforce (`ce-flt03.js` in BANKS) | PASS (0 gaps) |
| Shared Non-core Q71–100 ≡ EE FLT-03 | PASS |
| Missing diagram files | 0 |
| Orphan Diagram/Graph types without image | 0 |

## Diagram alignment

Post-balance QID remap via `scripts/fix_flt03_diagrams.py` (plan locked in `scripts/flt03_diagram_plans.py`):

| Q | Asset | Source |
|---|---|---|
| 3 | q03-ss-beam.svg | civil-st-som/v5-02 |
| 10 | q10-mohr.svg | civil-st-som/v5-03 |
| 17 | q17-rcc-beam.svg | civil-st-rcc/v5-03 |
| 20 | q20-one-way-slab.svg | civil-st-rcc/v5-01 |
| 23 | q23-punching.svg | civil-st-rcc/v5-05 |
| 30 | q30-venturi.svg | civil-st-fm/v5-01 |
| 33 | q33-jump.svg | civil-st-fm/v5-05 |
| 35 | q35-pump.svg | civil-st-fm/v5-04 |
| 37 | q37-turbine.svg | civil-st-fm/v5-07 |
| 40 | q40-bolted-lap.svg | civil-st-steel/v5-01 |
| 43 | q43-buckling.svg | civil-st-steel/v5-03 |
| 53 | q53-footing.svg | civil-st-fe/v5-01 |
| 55 | q55-pile-group.svg | civil-st-fe/v5-02 |
| 63 | q63-proctor.svg | civil-st-soil/v5-01 |
| 65 | q65-flow-net.svg | civil-st-soil/v5-02 |

All diagram stems carry `Figure values (also stated here): …`. Stem leakage from earlier dual-append cleaned (`scripts/clean_flt03_stems.py`).

## Subject mix (Q1–70)

| Subject | Count |
|---|---|
| Strength of Materials | 15 |
| Reinforced Concrete | 13 |
| Steel Structures | 12 |
| Fluid Mechanics and Hydraulic Machinery | 11 |
| Foundation Engineering | 10 |
| Soil Mechanics | 9 |

## Difficulty (100 Q)

Easy 29 / Medium 57 / Hard 14

## Notes

- Technical uniqueness vs FLT-01/02: no exact or near-clones under FLT Jaccard 0.55.
- Non-core authored once and forced CE→EE identical (MASTER P0).
