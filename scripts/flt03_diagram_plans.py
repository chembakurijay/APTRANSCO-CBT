# -*- coding: utf-8 -*-
"""Locked diagram plans for Civil + Electrical FLT-03 (MASTER quotas)."""
from __future__ import annotations

# (qid, src_rel, dest_name, diagramSource, diagramSourcePath, dual_values_hint)
# QIDs aligned to post-balance bank order (see scripts/fix_flt03_diagrams.py).
CE_DIAGRAM_PLAN = [
    # SOM ×2
    (3, "images/diagrams/civil-st-som/v5-02-simply-supported-beam.svg", "q03-ss-beam.svg", "core", "civil-st-som/v5-02", "L=6 m; UDL w=12 kN/m"),
    (10, "images/diagrams/civil-st-som/v5-03-mohr-circle.svg", "q10-mohr.svg", "core", "civil-st-som/v5-03", "sx=80; sy=20; txy=30 MPa"),
    # RCC ×3
    (17, "images/diagrams/civil-st-rcc/v5-03-beam-section.svg", "q17-rcc-beam.svg", "core", "civil-st-rcc/v5-03", "D=450; cover=25; phi=20 mm"),
    (20, "images/diagrams/civil-st-rcc/v5-01-one-way-slab.svg", "q20-one-way-slab.svg", "core", "civil-st-rcc/v5-01", "Lx=3.2 m; Ly=7.5 m"),
    (23, "images/diagrams/civil-st-rcc/v5-05-punching-perimeter.svg", "q23-punching.svg", "core", "civil-st-rcc/v5-05", "column 400; d=180; Vu=420 kN"),
    # FM ×2 + HHM ×2
    (30, "images/diagrams/civil-st-fm/v5-01-venturimeter.svg", "q30-venturi.svg", "core", "civil-st-fm/v5-01", "D1=0.2; D2=0.1; Cd=0.98; h=0.25 m"),
    (33, "images/diagrams/civil-st-fm/v5-05-hydraulic-jump.svg", "q33-jump.svg", "core", "civil-st-fm/v5-05", "y1=0.4 m; Fr1=2.5"),
    (35, "images/diagrams/civil-st-fm/v5-04-centrifugal-pump.svg", "q35-pump.svg", "core", "civil-st-fm/v5-04", "N1=1450 rpm; Q1=0.05; D1=250 mm"),
    (37, "images/diagrams/civil-st-fm/v5-07-turbine-runner.svg", "q37-turbine.svg", "core", "civil-st-fm/v5-07", "Pelton; H=300 m"),
    # Steel ×2
    (40, "images/diagrams/civil-st-steel/v5-01-bolted-lap-joint.svg", "q40-bolted-lap.svg", "core", "civil-st-steel/v5-01", "120x10 plate; 2 holes 22 mm"),
    (43, "images/diagrams/civil-st-steel/v5-03-column-buckling-curve.svg", "q43-buckling.svg", "core", "civil-st-steel/v5-03", "curve b; fy=250; lambda~80"),
    # FE ×2
    (53, "images/diagrams/civil-st-fe/v5-01-square-footing.svg", "q53-footing.svg", "core", "civil-st-fe/v5-01", "B=2.5 m; q=180 kPa"),
    (55, "images/diagrams/civil-st-fe/v5-02-pile-group.svg", "q55-pile-group.svg", "core", "civil-st-fe/v5-02", "3x3; s=3d; d=400 mm"),
    # Soil ×2
    (63, "images/diagrams/civil-st-soil/v5-01-compaction-curve.svg", "q63-proctor.svg", "core", "civil-st-soil/v5-01", "OMC~16%; gd,max~18.2"),
    (65, "images/diagrams/civil-st-soil/v5-02-flow-net.svg", "q65-flow-net.svg", "core", "civil-st-soil/v5-02", "Nf=4; Nd=8; H=6 m; k=2e-5"),
]

EE_DIAGRAM_PLAN = [
    # PS ×3
    (4, "images/diagrams/electrical-st-ps/v5-02-single-line-diagram.svg", "q04-sld.svg", "schematic-matched", "electrical-st-ps/v5-02", "132/33 kV; CB1, CB2"),
    (9, "images/diagrams/electrical-st-ps/v5-01-equal-area-curve.svg", "q09-equal-area.svg", "schematic-matched", "electrical-st-ps/v5-01", "Pm=1.0; Pemax=1.8; d0=30 deg"),
    (12, "images/diagrams/electrical-st-ps/v5-04-transformer-connection.svg", "q12-xfmr-conn.svg", "schematic-matched", "electrical-st-ps/v5-04", "Dyn11; 50 MVA; 132/33"),
    # EM ×3
    (18, "images/diagrams/electrical-st-em/v5-01-torque-slip-curve.svg", "q18-torque-slip.svg", "schematic-matched", "electrical-st-em/v5-01", "Tmax at s=0.20"),
    (21, "images/diagrams/electrical-st-em/v5-02-transformer-equivalent-circuit.svg", "q21-xfmr-eq.svg", "schematic-matched", "electrical-st-em/v5-02", "R1=0.5; X1=1.2; a=2"),
    (24, "images/diagrams/electrical-st-em/v5-04-synchronous-generator-phasor.svg", "q24-sync-phasor.svg", "schematic-matched", "electrical-st-em/v5-04", "Ef=1.2; V=1.0; delta=25"),
    # EC ×3
    (29, "images/diagrams/electrical-st-ec/v5-01-series-rlc-circuit.svg", "q29-series-rlc.svg", "schematic-matched", "electrical-st-ec/v5-01", "R=10; L=20 mH; C=50 uF"),
    (30, "images/diagrams/electrical-st-ec/v5-02-thevenin-network.svg", "q30-thevenin.svg", "schematic-matched", "electrical-st-ec/v5-02", "Vs=24; R1=4; R2=8; R3=8"),
    (31, "images/diagrams/electrical-st-ec/v5-07-mesh-network.svg", "q31-mesh.svg", "schematic-matched", "electrical-st-ec/v5-07", "12 V; 3 ohm meshes"),
    # CS ×3
    (40, "images/diagrams/electrical-st-cs/v5-06-step-response.svg", "q40-step-resp.svg", "schematic-matched", "electrical-st-cs/v5-06", "Mp~20%; ts~4 s"),
    (43, "images/diagrams/electrical-st-cs/v5-01-unity-feedback-loop.svg", "q43-unity-fb.svg", "schematic-matched", "electrical-st-cs/v5-01", "G=K/(s(s+2)); H=1"),
    (45, "images/diagrams/electrical-st-cs/v5-02-root-locus-plot.svg", "q45-root-locus.svg", "schematic-matched", "electrical-st-cs/v5-02", "poles 0,-2,-4"),
    # PE ×2
    (48, "images/diagrams/electrical-st-pe/v5-01-single-phase-converter.svg", "q48-1ph-conv.svg", "schematic-matched", "electrical-st-pe/v5-01", "alpha=30; Vm=230*sqrt(2)"),
    (50, "images/diagrams/electrical-st-pe/v5-03-dc-chopper.svg", "q50-chopper.svg", "schematic-matched", "electrical-st-pe/v5-03", "Vs=200; duty=0.4; R=10"),
    # Meas ×1
    (55, "images/diagrams/electrical-st-meas/v5-01-wheatstone-bridge.svg", "q55-wheatstone.svg", "schematic-matched", "electrical-st-meas/v5-01", "P=Q=100; R=350"),
    # ADE ×2
    (61, "images/diagrams/electrical-st-ade/v5-01-inverting-op-amp.svg", "q61-opamp.svg", "schematic-matched", "electrical-st-ade/v5-01", "Rin=10k; Rf=100k; Vin=0.5"),
    (65, "images/diagrams/electrical-st-ade/v5-04-nand-realisation.svg", "q65-nand.svg", "schematic-matched", "electrical-st-ade/v5-04", "NAND-only OR; A,B"),
]
