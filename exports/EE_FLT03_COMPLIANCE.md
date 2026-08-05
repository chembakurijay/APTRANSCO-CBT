# EE FLT-03 Compliance

**Bank:** `data/electrical/ee-flt03.js`  
**Diagrams:** `images/diagrams/electrical-flt03/` (17 SVGs)  
**Date:** 2026-08-05

## Gates

| Check | Result |
|---|---|
| `gate_question_banks.py --mode flt` vs `ee-flt01.js` | PASS |
| `gate_question_banks.py --mode flt` vs `ee-flt02.js` | PASS |
| Dual-parameter enforce (`ee-flt03.js` in BANKS) | PASS (0 gaps) |
| Shared Non-core Q71–100 ≡ CE FLT-03 | PASS |
| Missing diagram files | 0 |
| Orphan Diagram/Graph types without image | 0 |

## Diagram alignment

Post-balance QID remap via `scripts/fix_flt03_diagrams.py`:

| Q | Asset | Source |
|---|---|---|
| 4 | q04-sld.svg | electrical-st-ps/v5-02 |
| 9 | q09-equal-area.svg | electrical-st-ps/v5-01 |
| 12 | q12-xfmr-conn.svg | electrical-st-ps/v5-04 |
| 18 | q18-torque-slip.svg | electrical-st-em/v5-01 |
| 21 | q21-xfmr-eq.svg | electrical-st-em/v5-02 |
| 24 | q24-sync-phasor.svg | electrical-st-em/v5-04 |
| 29 | q29-series-rlc.svg | electrical-st-ec/v5-01 |
| 30 | q30-thevenin.svg | electrical-st-ec/v5-02 |
| 31 | q31-mesh.svg | electrical-st-ec/v5-07 |
| 40 | q40-step-resp.svg | electrical-st-cs/v5-06 |
| 43 | q43-unity-fb.svg | electrical-st-cs/v5-01 |
| 45 | q45-root-locus.svg | electrical-st-cs/v5-02 |
| 48 | q48-1ph-conv.svg | electrical-st-pe/v5-01 |
| 50 | q50-chopper.svg | electrical-st-pe/v5-03 |
| 55 | q55-wheatstone.svg | electrical-st-meas/v5-01 |
| 61 | q61-opamp.svg | electrical-st-ade/v5-01 |
| 65 | q65-nand.svg | electrical-st-ade/v5-04 |

## Anti-clone fix

Q41 rewritten from Type-1 step `ess` (near-clone of FLT-01 Q39) to Type-1 **ramp** error for `G(s)=K/[s(s+4)]` with options `4/K | Zero | Infinite | K/4`.

## Subject mix (Q1–70)

| Subject | Count |
|---|---|
| Power Systems | 14 |
| Electrical Machines | 13 |
| Electric Circuits | 11 |
| Control Systems | 8 |
| Power Electronics & Drives | 7 |
| Electrical Measurements | 6 |
| Analog Electronics | 4 |
| Utilization of Electrical Energy | 4 |
| Digital Electronics | 3 |

## Difficulty (100 Q)

Easy 23 / Medium 56 / Hard 21

## Notes

- Circuit schematics: RLC / Thevenin / mesh (EC ≥2 requirement met via ST schematic-matched SVGs).
- Non-core Q71–100 identical to Civil FLT-03.
