#!/usr/bin/env python3
"""Create electrical-flt01 SVG diagrams and wire image paths into ee-flt01.js."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "images" / "diagrams" / "electrical-flt01"
JS_PATH = ROOT / "data" / "electrical" / "ee-flt01.js"

FONT = "Segoe UI, Arial, sans-serif"


def svg(w, h, body, title=""):
    title_el = f'<text x="24" y="28" font-family="{FONT}" font-size="16" font-weight="700" fill="#0f172a">{title}</text>' if title else ""
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <rect width="{w}" height="{h}" fill="#f8fafc"/>
  {title_el}
  {body}
</svg>
'''


def write(name, content):
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    path = OUT_DIR / name
    path.write_text(content, encoding="utf-8")
    return f"images/diagrams/electrical-flt01/{name}"


def q04():
    # Transformer connection sketches P Q R S
    body = ""
    labels = [("P", "Δ–Δ"), ("Q", "Δ–Y"), ("R", "Y–Δ"), ("S", "Y–Y")]
    for i, (lab, name) in enumerate(labels):
        x = 40 + i * 220
        body += f'''
  <rect x="{x}" y="50" width="200" height="200" rx="12" fill="#fff" stroke="#cbd5e1"/>
  <text x="{x+16}" y="78" font-family="{FONT}" font-size="18" font-weight="700">({lab}) {name}</text>
'''
        # simple windings
        if lab in ("P", "Q"):
            # delta left
            body += f'<polygon points="{x+40},{170} {x+70},{120} {x+100},{170}" fill="none" stroke="#1d4ed8" stroke-width="3"/>'
        else:
            body += f'<circle cx="{x+70}" cy="145" r="28" fill="none" stroke="#1d4ed8" stroke-width="3"/>'
            body += f'<line x1="{x+70}" y1="117" x2="{x+70}" y2="100" stroke="#1d4ed8" stroke-width="3"/>'
        if lab in ("P", "R"):
            body += f'<polygon points="{x+120},{170} {x+150},{120} {x+180},{170}" fill="none" stroke="#b91c1c" stroke-width="3"/>'
        else:
            body += f'<circle cx="{x+150}" cy="145" r="28" fill="none" stroke="#b91c1c" stroke-width="3"/>'
            body += f'<line x1="{x+150}" y1="117" x2="{x+150}" y2="100" stroke="#b91c1c" stroke-width="3"/>'
        body += f'<text x="{x+50}" y="210" font-family="{FONT}" font-size="13" fill="#64748b">HV</text>'
        body += f'<text x="{x+130}" y="210" font-family="{FONT}" font-size="13" fill="#64748b">LV</text>'
    return write("q04-xfmr-connections.svg", svg(920, 280, body, "Q4 — Transformer connections (match from sketches)"))


def q09():
    body = f'''
  <text x="40" y="70" font-family="{FONT}" font-size="16" fill="#334155">Open-conductor fault — phase currents on figure</text>
  <circle cx="200" cy="180" r="90" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 4"/>
  <!-- Ia -->
  <line x1="200" y1="180" x2="340" y2="180" stroke="#1d4ed8" stroke-width="4" marker-end="url(#arrow)"/>
  <text x="300" y="168" font-family="{FONT}" font-size="16" fill="#1d4ed8" font-weight="700">Ia = 10∠0°</text>
  <!-- Ib -->
  <line x1="200" y1="180" x2="60" y2="180" stroke="#b91c1c" stroke-width="4"/>
  <text x="40" y="168" font-family="{FONT}" font-size="16" fill="#b91c1c" font-weight="700">Ib = 10∠180°</text>
  <!-- Ic -->
  <circle cx="200" cy="180" r="6" fill="#0f172a"/>
  <text x="210" y="260" font-family="{FONT}" font-size="16" fill="#0f172a" font-weight="700">Ic = 0</text>
  <text x="400" y="160" font-family="{FONT}" font-size="15" fill="#64748b">Find Ia⁰ = (Ia+Ib+Ic)/3</text>
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#1d4ed8"/>
    </marker>
  </defs>
'''
    return write("q09-open-conductor.svg", svg(720, 300, body, "Q9 — Symmetrical components (read figure)"))


def q18():
    body = f'''
  <line x1="80" y1="200" x2="520" y2="200" stroke="#94a3b8" stroke-width="2"/>
  <line x1="200" y1="60" x2="200" y2="300" stroke="#94a3b8" stroke-width="2"/>
  <!-- Vt -->
  <line x1="200" y1="200" x2="420" y2="200" stroke="#0f172a" stroke-width="4"/>
  <text x="360" y="190" font-family="{FONT}" font-size="16" font-weight="700">Vt</text>
  <!-- Ia leading -->
  <line x1="200" y1="200" x2="380" y2="100" stroke="#1d4ed8" stroke-width="4"/>
  <text x="360" y="100" font-family="{FONT}" font-size="16" fill="#1d4ed8" font-weight="700">Ia (leading)</text>
  <path d="M 280 200 A 40 40 0 0 0 260 160" fill="none" stroke="#b91c1c" stroke-width="2"/>
  <text x="290" y="150" font-family="{FONT}" font-size="14" fill="#b91c1c">φ lead</text>
  <text x="80" y="330" font-family="{FONT}" font-size="14" fill="#64748b">Identify pf type from phasor orientation</text>
'''
    return write("q18-alt-phasor-lead.svg", svg(560, 360, body, "Q18 — Alternator phasor (Ia vs Vt)"))


def q22():
    body = f'''
  <rect x="40" y="80" width="70" height="100" rx="8" fill="#e0e7ff" stroke="#1d4ed8"/>
  <text x="52" y="140" font-family="{FONT}" font-size="14" font-weight="700">Gen</text>
  <line x1="110" y1="130" x2="520" y2="130" stroke="#0f172a" stroke-width="4"/>
  <line x1="110" y1="150" x2="520" y2="150" stroke="#0f172a" stroke-width="4"/>
  <text x="250" y="110" font-family="{FONT}" font-size="15">Long transmission line</text>
  <circle cx="520" cy="140" r="10" fill="#fff" stroke="#b91c1c" stroke-width="3"/>
  <text x="480" y="190" font-family="{FONT}" font-size="15" fill="#b91c1c" font-weight="700">Open Rx end</text>
  <text x="40" y="240" font-family="{FONT}" font-size="14" fill="#64748b">Field voltage held constant · Ferranti / charging on figure</text>
'''
    return write("q22-ferranti-line.svg", svg(600, 280, body, "Q22 — Generator + long open-circuited line"))


def q30():
    body = f'''
  <text x="40" y="70" font-family="{FONT}" font-size="15">(a) Air capacitor C0</text>
  <rect x="60" y="100" width="20" height="100" fill="#94a3b8"/>
  <rect x="140" y="100" width="20" height="100" fill="#94a3b8"/>
  <text x="85" y="155" font-family="{FONT}" font-size="14">air</text>
  <text x="40" y="240" font-family="{FONT}" font-size="15">(b) Half gap filled εr</text>
  <rect x="60" y="270" width="20" height="100" fill="#94a3b8"/>
  <rect x="140" y="270" width="20" height="100" fill="#94a3b8"/>
  <rect x="80" y="320" width="60" height="50" fill="#bfdbfe" stroke="#1d4ed8"/>
  <text x="90" y="350" font-family="{FONT}" font-size="13" fill="#1d4ed8">εr</text>
  <text x="200" y="320" font-family="{FONT}" font-size="14" fill="#64748b">Find modified C vs C0</text>
'''
    return write("q30-cap-dielectric.svg", svg(420, 420, body, "Q30 — Parallel-plate dielectric fill"))


def q33():
    # band-pass plot among filter types
    body = f'''
  <text x="40" y="60" font-family="{FONT}" font-size="14">α (dB) vs f — identify filter type</text>
  <!-- axes -->
  <line x1="80" y1="220" x2="520" y2="220" stroke="#0f172a" stroke-width="2"/>
  <line x1="80" y1="80" x2="80" y2="220" stroke="#0f172a" stroke-width="2"/>
  <text x="500" y="240" font-family="{FONT}" font-size="14">f</text>
  <text x="40" y="100" font-family="{FONT}" font-size="14">α</text>
  <!-- band pass: high stop, low pass mid, high stop -->
  <path d="M90,100 L160,100 L200,200 L320,200 L360,100 L500,100" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <text x="230" y="190" font-family="{FONT}" font-size="13" fill="#1d4ed8">pass band</text>
  <text x="100" y="90" font-family="{FONT}" font-size="12" fill="#64748b">stop</text>
  <text x="400" y="90" font-family="{FONT}" font-size="12" fill="#64748b">stop</text>
'''
    return write("q33-filter-types.svg", svg(560, 280, body, "Q33 — Filter attenuation plot"))


def q41():
    body = f'''
  <rect x="40" y="120" width="90" height="50" rx="8" fill="#fff" stroke="#0f172a" stroke-width="2"/>
  <text x="55" y="150" font-family="{FONT}" font-size="14">G1(s)</text>
  <rect x="180" y="120" width="90" height="50" rx="8" fill="#fff" stroke="#0f172a" stroke-width="2"/>
  <text x="195" y="150" font-family="{FONT}" font-size="14">G2(s)</text>
  <rect x="320" y="120" width="90" height="50" rx="8" fill="#fff" stroke="#0f172a" stroke-width="2"/>
  <text x="335" y="150" font-family="{FONT}" font-size="14">G3(s)</text>
  <line x1="20" y1="145" x2="40" y2="145" stroke="#0f172a" stroke-width="2"/>
  <text x="10" y="130" font-family="{FONT}" font-size="14">R</text>
  <line x1="130" y1="145" x2="180" y2="145" stroke="#0f172a" stroke-width="2"/>
  <line x1="270" y1="145" x2="320" y2="145" stroke="#0f172a" stroke-width="2"/>
  <line x1="410" y1="145" x2="480" y2="145" stroke="#0f172a" stroke-width="2"/>
  <text x="490" y="150" font-family="{FONT}" font-size="14">C</text>
  <!-- feedback H -->
  <path d="M450,145 L450,220 L90,220 L90,170" fill="none" stroke="#b91c1c" stroke-width="2"/>
  <rect x="200" y="200" width="80" height="40" rx="6" fill="#fef2f2" stroke="#b91c1c"/>
  <text x="220" y="225" font-family="{FONT}" font-size="14" fill="#b91c1c">H(s)</text>
  <text x="40" y="280" font-family="{FONT}" font-size="14" fill="#64748b">Find C(s)/R(s) for topology shown</text>
'''
    return write("q41-block-diagram.svg", svg(540, 310, body, "Q41 — Control block diagram"))


def q44():
    body = f'''
  <text x="40" y="55" font-family="{FONT}" font-size="14">Bode: |G| flat; phase → −180° at high f</text>
  <line x1="60" y1="140" x2="500" y2="140" stroke="#94a3b8"/>
  <line x1="60" y1="60" x2="60" y2="200" stroke="#94a3b8"/>
  <line x1="80" y1="100" x2="480" y2="100" stroke="#1d4ed8" stroke-width="3"/>
  <text x="200" y="90" font-family="{FONT}" font-size="13" fill="#1d4ed8">|G| ≈ constant</text>
  <line x1="60" y1="280" x2="500" y2="280" stroke="#94a3b8"/>
  <line x1="60" y1="220" x2="60" y2="340" stroke="#94a3b8"/>
  <path d="M80,250 L200,250 L360,310 L480,320" fill="none" stroke="#b91c1c" stroke-width="3"/>
  <text x="300" y="335" font-family="{FONT}" font-size="13" fill="#b91c1c">∠G → −180°</text>
'''
    return write("q44-bode-allpass.svg", svg(540, 360, body, "Q44 — Bode magnitude & phase"))


def q48():
    body = f'''
  <text x="40" y="55" font-family="{FONT}" font-size="14">1-φ semi-converter · α = 30° · RL load — Vo waveform</text>
  <line x1="60" y1="180" x2="520" y2="180" stroke="#94a3b8"/>
  <path d="M80,180 Q120,60 160,180 Q200,60 240,180" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 3"/>
  <path d="M160,180 Q200,70 240,180 L280,180 Q320,70 360,180 L400,180" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <text x="170" y="100" font-family="{FONT}" font-size="13" fill="#1d4ed8">delayed conduction</text>
  <text x="40" y="230" font-family="{FONT}" font-size="13" fill="#64748b">Vo stays non-negative with firing delay each half-cycle</text>
'''
    return write("q48-semi-waveforms.svg", svg(560, 260, body, "Q48 — Semi-converter output waveform"))


def q51():
    body = f'''
  <text x="40" y="55" font-family="{FONT}" font-size="14">Half-wave RLE — angles on figure</text>
  <line x1="60" y1="160" x2="500" y2="160" stroke="#94a3b8"/>
  <path d="M80,160 Q140,40 200,160 Q260,40 320,160" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <line x1="150" y1="40" x2="150" y2="200" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="4 2"/>
  <text x="140" y="220" font-family="{FONT}" font-size="14" fill="#1d4ed8" font-weight="700">α</text>
  <line x1="250" y1="40" x2="250" y2="200" stroke="#b91c1c" stroke-width="2" stroke-dasharray="4 2"/>
  <text x="240" y="220" font-family="{FONT}" font-size="14" fill="#b91c1c" font-weight="700">β</text>
  <text x="300" y="100" font-family="{FONT}" font-size="14" font-weight="700">θ1</text>
  <text x="40" y="260" font-family="{FONT}" font-size="13" fill="#64748b">Firing α must lie in the allowed window vs β, θ1</text>
'''
    return write("q51-rle-angles.svg", svg(540, 290, body, "Q51 — RLE converter angles"))


def q56():
    body = f'''
  <rect x="40" y="70" width="120" height="50" rx="8" fill="#fff" stroke="#0f172a"/>
  <text x="55" y="100" font-family="{FONT}" font-size="13">Vertical input</text>
  <rect x="200" y="70" width="120" height="50" rx="8" fill="#dbeafe" stroke="#1d4ed8"/>
  <text x="215" y="100" font-family="{FONT}" font-size="13">Vert. amp</text>
  <rect x="360" y="70" width="120" height="50" rx="8" fill="#fff" stroke="#0f172a"/>
  <text x="385" y="100" font-family="{FONT}" font-size="13">Delay line</text>
  <rect x="520" y="70" width="100" height="50" rx="8" fill="#fff" stroke="#0f172a"/>
  <text x="550" y="100" font-family="{FONT}" font-size="13">CRT</text>
  <line x1="160" y1="95" x2="200" y2="95" stroke="#0f172a" stroke-width="2"/>
  <line x1="320" y1="95" x2="360" y2="95" stroke="#0f172a" stroke-width="2"/>
  <line x1="480" y1="95" x2="520" y2="95" stroke="#0f172a" stroke-width="2"/>
  <rect x="200" y="160" width="120" height="50" rx="8" fill="#fff" stroke="#0f172a"/>
  <text x="220" y="190" font-family="{FONT}" font-size="13">Trigger</text>
  <rect x="360" y="160" width="120" height="50" rx="8" fill="#fff" stroke="#0f172a"/>
  <text x="375" y="190" font-family="{FONT}" font-size="13">Time base</text>
  <text x="40" y="260" font-family="{FONT}" font-size="13" fill="#64748b">Which block feeds delay / vertical path to CRT?</text>
'''
    return write("q56-cro-blocks.svg", svg(660, 290, body, "Q56 — CRO block diagram"))


def q61():
    body = f'''
  <text x="40" y="55" font-family="{FONT}" font-size="14">Zener regulator — read Vs, Rz, Vz from labels</text>
  <circle cx="80" cy="140" r="18" fill="none" stroke="#0f172a" stroke-width="2"/>
  <text x="68" y="145" font-family="{FONT}" font-size="12">Vs</text>
  <line x1="98" y1="140" x2="200" y2="140" stroke="#0f172a" stroke-width="2"/>
  <rect x="200" y="120" width="70" height="40" fill="#fff" stroke="#0f172a"/>
  <text x="215" y="145" font-family="{FONT}" font-size="14">Rz</text>
  <line x1="270" y1="140" x2="360" y2="140" stroke="#0f172a" stroke-width="2"/>
  <!-- zener -->
  <line x1="360" y1="100" x2="360" y2="180" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="345" y1="140" x2="375" y2="140" stroke="#1d4ed8" stroke-width="3"/>
  <text x="380" y="130" font-family="{FONT}" font-size="14" fill="#1d4ed8" font-weight="700">Vz</text>
  <text x="380" y="155" font-family="{FONT}" font-size="14" fill="#1d4ed8">Iz →</text>
  <line x1="80" y1="200" x2="360" y2="200" stroke="#0f172a" stroke-width="2"/>
  <line x1="80" y1="158" x2="80" y2="200" stroke="#0f172a" stroke-width="2"/>
  <text x="40" y="250" font-family="{FONT}" font-size="13" fill="#64748b">Iz = (Vs − Vz)/Rz (use figure values)</text>
'''
    return write("q61-zener-iz.svg", svg(520, 280, body, "Q61 — Zener branch current"))


def q62():
    body = f'''
  <text x="40" y="55" font-family="{FONT}" font-size="14">CT / centre-tap FWR — 50-0-50 secondary</text>
  <rect x="40" y="90" width="50" height="80" fill="#e2e8f0" stroke="#0f172a"/>
  <text x="50" y="135" font-family="{FONT}" font-size="12">230 V</text>
  <line x1="90" y1="110" x2="160" y2="110" stroke="#0f172a" stroke-width="2"/>
  <line x1="90" y1="150" x2="160" y2="150" stroke="#0f172a" stroke-width="2"/>
  <circle cx="180" cy="130" r="35" fill="none" stroke="#0f172a" stroke-width="2"/>
  <text x="155" y="100" font-family="{FONT}" font-size="12">50 V</text>
  <text x="155" y="175" font-family="{FONT}" font-size="12">50 V</text>
  <text x="200" y="135" font-family="{FONT}" font-size="12">0</text>
  <line x1="215" y1="110" x2="300" y2="80" stroke="#0f172a" stroke-width="2"/>
  <line x1="215" y1="150" x2="300" y2="180" stroke="#0f172a" stroke-width="2"/>
  <polygon points="300,80 320,90 300,100" fill="#1d4ed8"/>
  <text x="330" y="95" font-family="{FONT}" font-size="13" fill="#1d4ed8">D1</text>
  <polygon points="300,180 320,170 300,160" fill="#b91c1c"/>
  <text x="330" y="175" font-family="{FONT}" font-size="13" fill="#b91c1c">D2</text>
  <text x="40" y="240" font-family="{FONT}" font-size="13" fill="#64748b">PRV on diode ≈ peak of other half ≈ 100√2 V</text>
'''
    return write("q62-fwr-prv.svg", svg(480, 280, body, "Q62 — Full-wave rectifier CT"))


def q65():
    body = f'''
  <text x="40" y="50" font-family="{FONT}" font-size="14">Match gate symbols (List-I) to expressions</text>
'''
    gates = [
        (60, "NAND", "¬(A·B)"),
        (220, "NOR", "¬(A+B)"),
        (380, "XOR", "A⊕B"),
        (540, "AND", "A·B"),
    ]
    for x, name, expr in gates:
        body += f'''
  <rect x="{x}" y="70" width="140" height="120" rx="10" fill="#fff" stroke="#cbd5e1"/>
  <text x="{x+45}" y="100" font-family="{FONT}" font-size="16" font-weight="700">{name}</text>
  <text x="{x+40}" y="140" font-family="{FONT}" font-size="14" fill="#64748b">{expr}</text>
  <circle cx="{x+70}" cy="165" r="12" fill="none" stroke="#1d4ed8" stroke-width="2"/>
'''
    body += f'<text x="40" y="230" font-family="{FONT}" font-size="13" fill="#64748b">Select the correct matching code from options</text>'
    return write("q65-logic-match.svg", svg(720, 260, body, "Q65 — Logic gate matching"))


def main():
    mapping = {
        4: q04(),
        9: q09(),
        18: q18(),
        22: q22(),
        30: q30(),
        33: q33(),
        41: q41(),
        44: q44(),
        48: q48(),
        51: q51(),
        56: q56(),
        61: q61(),
        62: q62(),
        65: q65(),
    }
    text = JS_PATH.read_text(encoding="utf-8")
    m = re.search(r"export const questions = (\[[\s\S]*\]);", text)
    qs = json.loads(m.group(1))
    for qid, path in mapping.items():
        qs[qid - 1]["image"] = path
        # ensure questionType mentions Diagram if missing
        qt = qs[qid - 1].get("questionType") or ""
        if "Diagram" not in qt and "Graph" not in qt and "Matching" not in qt:
            qs[qid - 1]["questionType"] = f"Diagram+{qt}" if qt else "Diagram"
    JS_PATH.write_text(
        "// Electrical Engineering FLT-01 — APTRANSCO AEE CBT\n"
        "// Generated from exports/ELECTRICAL_FLT01_REGENERATED_v2.md\n"
        "// Diagrams: images/diagrams/electrical-flt01/*.svg\n"
        "// answer is 0-based index into options\n\n"
        f"export const questions = {json.dumps(qs, indent=2, ensure_ascii=False)};\n",
        encoding="utf-8",
    )
    with_img = sum(1 for q in qs if q.get("image"))
    print(f"Wrote {len(mapping)} SVGs; questions with images: {with_img}")
    for qid, path in sorted(mapping.items()):
        print(f"  Q{qid}: {path}")


if __name__ == "__main__":
    main()
