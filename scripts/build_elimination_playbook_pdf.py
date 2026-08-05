#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build student Elimination Rules playbook (HTML → Chrome PDF).

Structure (user requirement):
  Civil section → each Civil rule → EVERY matching Q fully solved (elimination only)
  Electrical section → each EE rule → EVERY matching Q fully solved
  Non-core section → each NC rule → EVERY matching Q fully solved

No sample caps. No question dumps without the rule first.
"""
from __future__ import annotations

import csv
import html
import re
import subprocess
import sys
from collections import defaultdict
from pathlib import Path
from typing import Dict, List, Optional, Tuple

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from build_elimination_rules_playbook import (  # noqa: E402
    MIN_EVIDENCE,
    RULES,
    _exam_label,
    match_blob,
    matches_rule,
    pyq_blob,
    pyq_stream,
    stream_of,
)
from gate_question_banks import load_bank  # noqa: E402
from elimination_applicability import grade  # noqa: E402
from elimination_pedagogy import (  # noqa: E402
    PEDAGOGY,
    elim_solution_lines,
    overall_score,
)

OUT_DIR = ROOT / "exports" / "elimination_drills"
HTML_OUT = OUT_DIR / "ELIMINATION_RULES_PLAYBOOK_PRINT.html"
PDF_OUT = OUT_DIR / "ELIMINATION_RULES_PLAYBOOK.pdf"
MD_CLEAN = ROOT / "exports" / "ELIMINATION_RULES_PLAYBOOK_CLEAN.md"

STREAMS = ("Civil", "Electrical", "Non-core")
STREAM_FILE = {
    "Civil": "ELIMINATION_RULES_CIVIL",
    "Electrical": "ELIMINATION_RULES_ELECTRICAL",
    "Non-core": "ELIMINATION_RULES_NONCORE",
}

# Extra pedagogy for each internal rule id
# Pedagogy + elim text: elimination_pedagogy.py
# Applicability grading: elimination_applicability.py — never force a rule onto a Q.

PUBLISH_GRADES = {"CORRECT", "WEAK"}  # INCORRECT -> audit only
AUDIT_OUT = ROOT / "exports" / "ELIMINATION_HOD_AUDIT.md"


def esc(s: str) -> str:
    return html.escape(s or "", quote=True)


def collect():
    """Match on stem+options only; grade each hit; publish CORRECT/WEAK under the rule."""
    banks = []
    for p in sorted((ROOT / "data").rglob("*.js")):
        if "elimination" in p.as_posix().replace("\\", "/").lower():
            continue
        try:
            banks.append((p.relative_to(ROOT), load_bank(p)))
        except Exception:
            continue
    pyq_rows = []
    pyq_csv = ROOT / "exports" / "PYQ_VALID_DIAGRAM_QUESTIONS.csv"
    if pyq_csv.exists():
        pyq_rows = list(csv.DictReader(pyq_csv.open(encoding="utf-8")))

    matched = defaultdict(list)
    audit_rows = []  # all graded mappings

    for path, qs in banks:
        for q in qs:
            b = match_blob(q)
            st = stream_of(path, q.get("subject") or "")
            img_rel = (q.get("image") or "").strip().replace("\\", "/")
            has_img = bool(img_rel)
            img_abs = (ROOT / img_rel) if has_img and (ROOT / img_rel).exists() else None
            for rule in RULES:
                if not matches_rule(rule, b, has_image=has_img, stream=st):
                    continue
                item = {
                    "ref": f"{path.as_posix()}#Q{q.get('id')}",
                    "kind": "bank",
                    "exam": _exam_label(path),
                    "subject": q.get("subject") or "",
                    "stem": (q.get("question") or "").replace("\n", " ").strip(),
                    "answer": q.get("answer"),
                    "options": list(q.get("options") or []),
                    "explanation": q.get("explanation") or "",
                    "stream": st,
                    "image_rel": img_rel,
                    "image_abs": img_abs,
                }
                g, reason, suggest = grade(rule["id"], item)
                item["grade"] = g
                item["grade_reason"] = reason
                item["suggest"] = suggest or ""
                audit_rows.append(
                    {
                        "rule_id": rule["id"],
                        "title": rule["title"],
                        "ref": item["ref"],
                        "stream": st,
                        "grade": g,
                        "reason": reason,
                        "suggest": suggest or "",
                    }
                )
                if g in PUBLISH_GRADES:
                    matched[rule["id"]].append(item)

    crop_root = ROOT / "exports" / "PYQ_VALID_DIAGRAM_CROPS"
    for row in pyq_rows:
        st = pyq_stream(row)
        text = pyq_blob(row)
        pdf = row.get("pdf") or "PYQ"
        qn = row.get("q_number") or "?"
        img_abs = None
        pdf_stem = Path(str(pdf)).stem
        folder = crop_root / pdf_stem
        if not folder.exists() and crop_root.exists():
            for d in crop_root.iterdir():
                if d.is_dir() and pdf_stem.lower()[:12] in d.name.lower():
                    folder = d
                    break
        if folder.exists():
            for f in folder.glob("*.jpg"):
                try:
                    if str(qn).isdigit() and (
                        f"q{qn}" in f.stem.lower() or f"q{int(qn):03d}" in f.stem.lower()
                    ):
                        img_abs = f
                        break
                except Exception:
                    pass
        for rule in RULES:
            if not matches_rule(rule, text, has_image=True, stream=st):
                continue
            item = {
                "ref": f"PYQ:{pdf}#Q{qn}",
                "kind": "pyq",
                "exam": f"VALID PYQ · {pdf}",
                "subject": row.get("topic") or st,
                "stem": (row.get("stem") or "").replace("\n", " ").strip(),
                "answer": None,
                "options": [
                    row.get("option_A") or "",
                    row.get("option_B") or "",
                    row.get("option_C") or "",
                    row.get("option_D") or "",
                ],
                "explanation": "",
                "stream": st,
                "image_rel": str(img_abs.relative_to(ROOT)).replace("\\", "/") if img_abs else "",
                "image_abs": img_abs,
            }
            g, reason, suggest = grade(rule["id"], item)
            item["grade"] = g
            item["grade_reason"] = reason
            item["suggest"] = suggest or ""
            audit_rows.append(
                {
                    "rule_id": rule["id"],
                    "title": rule["title"],
                    "ref": item["ref"],
                    "stream": st,
                    "grade": g,
                    "reason": reason,
                    "suggest": suggest or "",
                }
            )
            if g in PUBLISH_GRADES:
                matched[rule["id"]].append(item)

    full = {}
    for rule in RULES:
        seen = set()
        uniq = []
        for it in matched[rule["id"]]:
            if it["ref"] in seen:
                continue
            seen.add(it["ref"])
            uniq.append(it)
        # CORRECT first, then WEAK
        uniq.sort(
            key=lambda x: (0 if x.get("grade") == "CORRECT" else 1, x["exam"], x["ref"])
        )
        full[rule["id"]] = uniq

    established = [r for r in RULES if len(full[r["id"]]) >= MIN_EVIDENCE]
    drafts = [r for r in RULES if len(full[r["id"]]) < MIN_EVIDENCE]
    return established, drafts, full, audit_rows


def write_hod_audit(established, drafts, full, audit_rows, pub) -> None:
    lines = [
        "# Elimination Playbook — HOD / Chief Examiner Audit",
        "",
        "## Principle",
        "",
        "> A rule may only be applied when that rule genuinely explains why incorrect options can be eliminated. Never force a question to fit a rule.",
        "",
        "## Rule scores",
        "",
        "| Playbook # | Rule | Tech | Applicability | FP control | Edu | Reuse | Overall | Published CORRECT+WEAK |",
        "|---:|---|---:|---:|---:|---:|---:|---:|---:|",
    ]
    for r in established:
        ped = PEDAGOGY.get(r["id"], {})
        sc = ped.get("scores", {})
        ov = overall_score(sc) if sc else "—"
        n = len(full[r["id"]])
        lines.append(
            f"| {pub[r['id']]} | {r['title']} | {sc.get('tech','—')} | {sc.get('applicability','—')} | "
            f"{sc.get('fp_rate','—')} | {sc.get('edu','—')} | {sc.get('reuse','—')} | {ov} | {n} |"
        )
    lines += ["", "## Issues found (systematic)", ""]
    lines += [
        "1. Prior matcher used **explanation text**, so words like `diagram`/`diameter`/`pu` created mass false positives.",
        "2. Boilerplate strikes (`violates Rule`, `classic distractor`) were not technically defensible.",
        "3. Figure-dependency and sign/sense rules were over-assigned to conceptual items (e.g. corona).",
        "4. Units last-resort was too broad when `mm²` appeared anywhere.",
        "5. Per-unit rule fired without an explicit base change.",
        "",
        "## Recommended fixes applied",
        "",
        "- Match on **stem + options only**.",
        "- Per-rule **Trigger / Do NOT Use / False Positives / Confidence**.",
        "- Applicability grader: **CORRECT / WEAK / INCORRECT**; only CORRECT+WEAK published under a rule.",
        "- Elimination text separated from **Scratch Check** verification.",
        "- Option strikes use bank trap analysis or rule-specific engineering reasons (no generic boilerplate).",
        "",
        "## Questions assigned incorrectly (INCORRECT grade — removed from rule worked sets)",
        "",
        "| Rule | Ref | Stream | Why | Suggested |",
        "|---|---|---|---|---|",
    ]
    bad = [a for a in audit_rows if a["grade"] == "INCORRECT"]
    # Cap table size but keep count
    for a in bad[:400]:
        lines.append(
            f"| {a['title']} | `{a['ref']}` | {a['stream']} | {a['reason']} | {a['suggest'] or '—'} |"
        )
    if len(bad) > 400:
        lines.append(f"| … | … | … | ({len(bad)-400} more omitted) | … |")
    lines += ["", f"**Total INCORRECT mappings removed:** {len(bad)}", ""]

    weak = [a for a in audit_rows if a["grade"] == "WEAK"]
    lines += [
        "## Weak mappings (published with caution badge)",
        "",
        f"Count: **{len(weak)}**. These remain only when the stem loosely fits; solutions mark WEAK.",
        "",
        "## Suggested new rules (from repeated patterns)",
        "",
        "1. **Concept / definition cull** — for pure conceptual stems (corona statements, theory assumptions) where numerical geometry rules must not fire.",
        "2. **Neighbour-quantity (formula lookalike)** — promote from draft once ≥15 high-confidence hits with asked-quantity underline.",
        "3. **SIL / Zc identity** — keep as draft until evidence ≥15 with SIL-specific options.",
        "4. **Transformer a² referral** — keep as draft until evidence ≥15.",
        "",
        "## Draft rules (not established)",
        "",
    ]
    for r in drafts:
        lines.append(f"- {r['title']} ({len(full.get(r['id'], []))} CORRECT+WEAK hits; need ≥{MIN_EVIDENCE})")
    lines.append("")
    AUDIT_OUT.write_text("\n".join(lines), encoding="utf-8")
    print("AUDIT", AUDIT_OUT)


CSS = """
@page { size: A4; margin: 14mm 12mm; }
* { box-sizing: border-box; }
body { font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif; color: #15202b;
       font-size: 10pt; line-height: 1.4; }
h1 { font-size: 18pt; margin: 0 0 6pt; }
h2 { font-size: 14pt; margin: 20pt 0 8pt; border-bottom: 2px solid #0b5cab; padding-bottom: 3pt;
     page-break-before: always; }
h2.stream-first { page-break-before: avoid; }
h3 { font-size: 12pt; margin: 14pt 0 6pt; color: #0b5cab; page-break-after: avoid; }
h4 { font-size: 10.5pt; margin: 10pt 0 4pt; page-break-after: avoid; }
p, li { margin: 0 0 5pt; }
.eyebrow { text-transform: uppercase; letter-spacing: .08em; color: #5b6b7c; font-size: 8.5pt; }
.box { border: 1px solid #cfd8e3; border-radius: 6px; padding: 8pt 10pt; margin: 8pt 0; background: #f7fafc; }
.rule-head { border: 2px solid #0b5cab; border-radius: 8px; padding: 10pt 12pt; margin: 12pt 0 10pt;
             background: #f0f6fc; page-break-after: avoid; }
.meta { color: #5b6b7c; font-size: 9pt; }
table { width: 100%; border-collapse: collapse; font-size: 8.5pt; margin: 6pt 0 10pt; }
th, td { border: 1px solid #d0d7e0; padding: 3pt 4pt; vertical-align: top; }
th { background: #e8eef6; text-align: left; }
.formula { font-family: Consolas, monospace; background: #eef3f9; padding: 6pt 8pt; border-radius: 4px; margin: 6pt 0; }
ol.apply { padding-left: 18pt; }
.qcard { border: 1px solid #c5d0dc; border-radius: 6px; padding: 8pt 10pt; margin: 0 0 12pt;
         page-break-inside: avoid; background: #fff; }
.qcard.weak { border-color: #c9a227; background: #fffdf5; }
.qcard img { max-width: 100%; max-height: 220px; width: auto; height: auto; display: block;
             margin: 6pt auto; border: 1px solid #e2e8f0; }
.opts { margin: 4pt 0 6pt; padding-left: 16pt; }
.sol { background: #f4faf4; border-left: 3px solid #2e7d32; padding: 6pt 8pt; margin-top: 6pt;
       font-size: 9pt; white-space: pre-wrap; font-family: "Segoe UI", Arial, sans-serif; }
.stream-banner { background: #0b5cab; color: #fff; padding: 10pt 12pt; border-radius: 6px; margin: 8pt 0 12pt; }
.footer-note { font-size: 8pt; color: #5b6b7c; margin-top: 12pt; }
.keep { color: #1b5e20; font-weight: 600; }
.strike { color: #b71c1c; }
.rna { background: #fdecea; border-left: 3px solid #c62828; }
"""


def rules_for_stream(established: list, stream: str) -> list:
    return [r for r in established if stream in r["streams"]]


def items_for_stream(items: list[dict], stream: str) -> list[dict]:
    return [it for it in items if it.get("stream") == stream]


def render_rule_block(
    parts: list[str],
    rule: dict,
    pub_n: int,
    stream: str,
    items: list[dict],
    *,
    stream_rule_n=None,  # type: Optional[int]
) -> None:
    ped = PEDAGOGY.get(rule["id"], {})
    stream_items = items_for_stream(items, stream)
    n_correct = sum(1 for it in stream_items if it.get("grade") == "CORRECT")
    n_weak = sum(1 for it in stream_items if it.get("grade") == "WEAK")
    label = f"Rule {pub_n}"
    if stream_rule_n is not None:
        label = f"{stream} Rule {stream_rule_n} (Playbook #{pub_n})"

    parts.append("<div class='rule-head'>")
    parts.append(f"<h3>{esc(label)} — {esc(rule['title'])}</h3>")
    sc = ped.get("scores") or {}
    if sc:
        parts.append(
            f"<p class='meta'><strong>Rule score (HOD):</strong> tech {sc.get('tech')} · "
            f"applicability {sc.get('applicability')} · FP-control {sc.get('fp_rate')} · "
            f"edu {sc.get('edu')} · reuse {sc.get('reuse')} · overall {overall_score(sc)}</p>"
        )
    parts.append(
        f"<p class='meta'><strong>Stream:</strong> {esc(stream)} · "
        f"<strong>Published questions:</strong> {len(stream_items)} "
        f"({n_correct} CORRECT + {n_weak} WEAK). INCORRECT mappings are excluded (see HOD audit).</p>"
    )
    parts.append(f"<h4>What this rule means</h4><p>{esc(ped.get('explain', rule['when']))}</p>")
    parts.append(f"<h4>Trigger</h4><p>{esc(ped.get('trigger', rule['when']))}</p>")
    parts.append(f"<h4>Do NOT Use</h4><p>{esc(ped.get('do_not_use', 'Do not force this rule onto unrelated stems.'))}</p>")
    parts.append(f"<h4>False positives</h4><p>{esc(ped.get('false_positives', 'Over-broad keyword hits.'))}</p>")
    parts.append(f"<h4>Confidence</h4><p>{esc(ped.get('confidence', 'Medium'))}</p>")
    parts.append("<h4>Application steps</h4><ol class='apply'>")
    for step in ped.get("apply", [rule["how"]]):
        parts.append(f"<li>{esc(step)}</li>")
    parts.append("</ol>")
    if ped.get("formula"):
        parts.append(f"<div class='formula'><strong>Memory cue:</strong> {esc(ped['formula'])}</div>")
    parts.append(f"<h4>Core elimination move</h4><p>{esc(rule['how'])}</p>")
    parts.append(
        "<p class='meta'>Below: every <strong>CORRECT/WEAK</strong> question for this rule in this stream. "
        "Solutions separate <em>ELIMINATION</em> from <em>SCRATCH CHECK</em>. "
        "No forced INCORRECT assignments.</p>"
    )
    parts.append("</div>")

    if not stream_items:
        parts.append(
            f"<p class='meta'><em>No CORRECT/WEAK {esc(stream)} hits after HOD grading "
            "(rule may be draft or multi-stream).</em></p>"
        )
        return

    for qi, it in enumerate(stream_items, 1):
        key_i = it.get("answer")
        key_letter = "ABCD"[int(key_i)] if key_i in (0, 1, 2, 3) else "—"
        g = it.get("grade") or "CORRECT"
        cls = "qcard weak" if g == "WEAK" else "qcard"
        parts.append(f"<div class='{cls}'>")
        parts.append(
            f"<h4>Q{qi} of {len(stream_items)} · {esc(it['exam'])} · "
            f"<code>{esc(it['ref'])}</code> · Key {esc(key_letter)} · "
            f"<strong>{esc(g)}</strong></h4>"
        )
        if it.get("subject"):
            parts.append(f"<p class='meta'>Subject: {esc(it['subject'])}</p>")
        parts.append(f"<p><strong>Stem:</strong> {esc(it['stem'])}</p>")
        if it.get("image_abs") and Path(it["image_abs"]).exists():
            uri = Path(it["image_abs"]).resolve().as_uri()
            parts.append(f'<img src="{esc(uri)}" alt="Figure for {esc(it["ref"])}" />')
            parts.append(
                f"<p class='meta'>Figure: {esc(it.get('image_rel') or Path(it['image_abs']).name)}</p>"
            )
        if it.get("options"):
            parts.append("<ol class='opts' type='A'>")
            for opt in it["options"][:4]:
                parts.append(f"<li>{esc(str(opt))}</li>")
            parts.append("</ol>")
        sol = elim_solution_lines(rule, pub_n, it, ped)
        sol_cls = "sol rna" if any("RULE NOT APPLICABLE" in x for x in sol) else "sol"
        parts.append(f"<div class='{sol_cls}'><strong>Elimination write-up</strong>\n")
        parts.append(esc("\n".join(sol)))
        parts.append("</div></div>")


def build_stream_html(
    stream: str,
    established: list,
    drafts: list,
    full: dict,
    pub: dict[int, int],
    *,
    standalone: bool,
) -> str:
    stream_rules = rules_for_stream(established, stream)
    parts = [
        "<!DOCTYPE html><html lang='en'><head><meta charset='utf-8'/>",
        f"<title>Elimination Rules — {stream}</title><style>{CSS}</style></head><body>",
    ]
    if standalone:
        parts += [
            "<div class='stream-banner'>",
            f"<p class='eyebrow' style='color:#cfe3f7'>APTRANSCO AEE CBT · Elimination playbook</p>",
            f"<h1 style='color:#fff;margin:0'>Elimination Rules — {esc(stream)} only</h1>",
            "<p style='margin:6pt 0 0'>Each rule is explained first. Then every matching question "
            "is solved one-by-one using only that elimination rule.</p>",
            "</div>",
        ]
    else:
        parts.append(
            f"<h2 class='{'stream-first' if stream == 'Civil' else ''}'>"
            f"Part — {esc(stream)} elimination rules</h2>"
        )
        parts.append(
            f"<div class='stream-banner'><strong>{esc(stream)}</strong> — "
            f"{len(stream_rules)} established rule(s) in this stream. "
            "Format for each rule: explain → then every question fully solved.</div>"
        )

    # index for this stream
    parts.append("<div class='box'><h3>Rules in this stream</h3><table>")
    parts.append(
        "<thead><tr><th># in stream</th><th>Playbook #</th><th>Title</th>"
        "<th>Q count (this stream)</th></tr></thead><tbody>"
    )
    for si, r in enumerate(stream_rules, 1):
        n_stream = len(items_for_stream(full[r["id"]], stream))
        parts.append(
            f"<tr><td>{si}</td><td>{pub[r['id']]}</td><td>{esc(r['title'])}</td>"
            f"<td>{n_stream}</td></tr>"
        )
    parts.append("</tbody></table></div>")

    for si, r in enumerate(stream_rules, 1):
        render_rule_block(
            parts,
            r,
            pub[r["id"]],
            stream,
            full[r["id"]],
            stream_rule_n=si,
        )

    # drafts that mention this stream
    stream_drafts = [r for r in drafts if stream in r["streams"]]
    if stream_drafts:
        parts.append(f"<h3>Draft {esc(stream)} rules (not established — do not teach)</h3><ul>")
        for r in stream_drafts:
            n = len(items_for_stream(full[r["id"]], stream))
            parts.append(
                f"<li>{esc(r['title'])} — {len(full[r['id']])} total hits "
                f"({n} in {esc(stream)}; need ≥{MIN_EVIDENCE})</li>"
            )
        parts.append("</ul>")

    parts.append(
        "<p class='footer-note'>Regenerate: python scripts/build_elimination_playbook_pdf.py</p>"
        "</body></html>"
    )
    return "\n".join(parts)


def build_master_html(established, drafts, full) -> str:
    pub = {r["id"]: i for i, r in enumerate(established, 1)}
    parts = [
        "<!DOCTYPE html><html lang='en'><head><meta charset='utf-8'/>",
        f"<title>Elimination Rules Playbook (Civil / Electrical / Non-core)</title>",
        f"<style>{CSS}</style></head><body>",
        "<p class='eyebrow'>APTRANSCO AEE CBT · Study aid</p>",
        "<h1>Elimination Rules Playbook</h1>",
        "<p><strong>Separated by stream:</strong> Civil → Electrical → Non-core. "
        "Inside each stream: explain the rule, then solve <em>every</em> matching question "
        "one after another with elimination only.</p>",
        "<div class='box'><h3>How to use</h3><ol class='apply'>",
        "<li>Open the stream section that matches the stuck MCQ.</li>",
        "<li>Read that rule’s meaning, when, and application steps.</li>",
        "<li>Work the listed questions in order — each solution shows only how this rule strikes options.</li>",
        "<li>Never use letter myths (pick C / longest / middle value).</li>",
        "</ol></div>",
        "<h3>Master index</h3><table><thead><tr>"
        "<th>#</th><th>Rule</th><th>Streams</th><th>Total evidence</th>"
        "<th>Civil Q</th><th>EE Q</th><th>NC Q</th></tr></thead><tbody>",
    ]
    for r in established:
        items = full[r["id"]]
        parts.append(
            f"<tr><td>{pub[r['id']]}</td><td>{esc(r['title'])}</td>"
            f"<td>{esc(', '.join(r['streams']))}</td><td>{len(items)}</td>"
            f"<td>{len(items_for_stream(items,'Civil'))}</td>"
            f"<td>{len(items_for_stream(items,'Electrical'))}</td>"
            f"<td>{len(items_for_stream(items,'Non-core'))}</td></tr>"
        )
    parts.append("</tbody></table>")

    # Full stream bodies (Civil first page-break avoided)
    for stream in STREAMS:
        # inject without duplicate html shell — rebuild body sections only
        stream_rules = rules_for_stream(established, stream)
        first = stream == "Civil"
        parts.append(
            f"<h2 class='{'stream-first' if first else ''}'>Part — {esc(stream)} elimination rules</h2>"
        )
        parts.append(
            f"<div class='stream-banner'><strong>{esc(stream)}</strong> — "
            f"{len(stream_rules)} established rule(s). "
            "Each rule: full explanation, then every question solved.</div>"
        )
        parts.append("<div class='box'><h3>Rules in this stream</h3><table>")
        parts.append(
            "<thead><tr><th># in stream</th><th>Playbook #</th><th>Title</th>"
            "<th>Q count</th></tr></thead><tbody>"
        )
        for si, r in enumerate(stream_rules, 1):
            n_stream = len(items_for_stream(full[r["id"]], stream))
            parts.append(
                f"<tr><td>{si}</td><td>{pub[r['id']]}</td><td>{esc(r['title'])}</td>"
                f"<td>{n_stream}</td></tr>"
            )
        parts.append("</tbody></table></div>")
        for si, r in enumerate(stream_rules, 1):
            render_rule_block(
                parts, r, pub[r["id"]], stream, full[r["id"]], stream_rule_n=si
            )

    parts.append("<h2>Anti-rules (unsupported myths)</h2><ul>")
    parts.append("<li><strong>Pick C when unsure</strong> — unsupported.</li>")
    parts.append("<li><strong>Longest option is correct</strong> — unsupported.</li>")
    parts.append("<li><strong>Always middle numerical value</strong> — often the classic slip.</li>")
    parts.append("<li><strong>Ignore the figure</strong> — imaged items are figure-dependent.</li>")
    parts.append("</ul>")
    parts.append(
        "<p class='footer-note'>Also generated as separate Civil / Electrical / Non-core PDFs "
        "in the same folder. Regenerate: python scripts/build_elimination_playbook_pdf.py</p>"
        "</body></html>"
    )
    return "\n".join(parts)


def build_clean_md(established, drafts, full) -> str:
    pub = {r["id"]: i for i, r in enumerate(established, 1)}
    lines = [
        "# Elimination Rules Playbook (Civil / Electrical / Non-core)",
        "",
        "Each stream is separate. Inside each rule: explain the rule, then every matching question "
        "with an elimination-only solution (no skipped items).",
        "",
        "## Master index",
        "",
        "| # | Rule | Streams | Total | Civil | EE | NC |",
        "|---:|---|---|---:|---:|---:|---:|",
    ]
    for r in established:
        items = full[r["id"]]
        lines.append(
            f"| {pub[r['id']]} | {r['title']} | {', '.join(r['streams'])} | {len(items)} | "
            f"{len(items_for_stream(items,'Civil'))} | {len(items_for_stream(items,'Electrical'))} | "
            f"{len(items_for_stream(items,'Non-core'))} |"
        )

    for stream in STREAMS:
        lines += ["", f"# {stream} elimination rules", ""]
        stream_rules = rules_for_stream(established, stream)
        for si, r in enumerate(stream_rules, 1):
            ped = PEDAGOGY.get(r["id"], {})
            items = items_for_stream(full[r["id"]], stream)
            lines += [
                f"## {stream} Rule {si} (Playbook #{pub[r['id']]}) — {r['title']}",
                "",
                f"**Questions in this section:** {len(items)} (all solved below)",
                "",
                "### What this rule means",
                "",
                ped.get("explain", r["when"]),
                "",
                "### When to use",
                "",
                r["when"],
                "",
                "### Application steps",
                "",
            ]
            for i, step in enumerate(ped.get("apply", [r["how"]]), 1):
                lines.append(f"{i}. {step}")
            if ped.get("formula"):
                lines += ["", f"**Memory cue:** `{ped['formula']}`", ""]
            lines += ["### Core elimination move", "", r["how"], "", "### Worked questions", ""]
            for qi, it in enumerate(items, 1):
                key_i = it.get("answer")
                key_letter = "ABCD"[int(key_i)] if key_i in (0, 1, 2, 3) else "—"
                lines += [
                    f"#### Q{qi}/{len(items)} · {it['exam']} · `{it['ref']}` · Key {key_letter}",
                    "",
                    it["stem"],
                    "",
                ]
                if it.get("image_rel"):
                    lines += [f"![figure]({it['image_rel']})", ""]
                for i, opt in enumerate((it.get("options") or [])[:4]):
                    lines.append(f"- {'ABCD'[i]}) {opt}")
                lines += ["", "**Elimination solution (this rule only)**", ""]
                for ln in elim_solution_lines(r, pub[r["id"]], it, ped):
                    lines.append(ln)
                lines.append("")
    lines += ["## Drafts (not established)", ""]
    for r in drafts:
        lines.append(f"- {r['title']} ({len(full[r['id']])} hits)")
    lines.append("")
    return "\n".join(lines)


def chrome_pdf(html_path: Path, pdf_path: Path) -> None:
    chrome = Path(r"C:\Program Files\Google\Chrome\Application\chrome.exe")
    if not chrome.exists():
        chrome = Path(r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe")
    html_uri = html_path.resolve().as_uri()
    pdf_path.parent.mkdir(parents=True, exist_ok=True)
    cmd = [
        str(chrome),
        "--headless=new",
        "--disable-gpu",
        f"--print-to-pdf={pdf_path.resolve()}",
        "--no-pdf-header-footer",
        html_uri,
    ]
    subprocess.run(cmd, check=True, capture_output=True, timeout=600)
    print("PDF", pdf_path.name, "bytes", pdf_path.stat().st_size)


def copy_to_push(paths: list[Path]) -> None:
    push = Path(r"c:\Users\W520531\Downloads\APTRANSCO-CBT-push\exports")
    if not push.exists():
        return
    drills = push / "elimination_drills"
    drills.mkdir(parents=True, exist_ok=True)
    for src in paths:
        name = src.name
        if name.endswith("_CLEAN.md") or name == "ELIMINATION_HOD_AUDIT.md":
            dest = push / name
        elif name.endswith(".pdf") and name.startswith("ELIMINATION_RULES_"):
            (push / name).write_bytes(src.read_bytes())
            dest = drills / name
        else:
            dest = drills / name
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(src.read_bytes())
        print("Copied", dest)


def main():
    established, drafts, full, audit_rows = collect()
    pub = {r["id"]: i for i, r in enumerate(established, 1)}
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    write_hod_audit(established, drafts, full, audit_rows, pub)

    # Master combined HTML/PDF
    HTML_OUT.write_text(build_master_html(established, drafts, full), encoding="utf-8")
    MD_CLEAN.write_text(build_clean_md(established, drafts, full), encoding="utf-8")

    outputs = [HTML_OUT, MD_CLEAN, AUDIT_OUT]

    # Per-stream HTML + PDF
    stream_htmls = []
    for stream in STREAMS:
        base = STREAM_FILE[stream]
        html_path = OUT_DIR / f"{base}.html"
        html_path.write_text(
            build_stream_html(stream, established, drafts, full, pub, standalone=True),
            encoding="utf-8",
        )
        stream_htmls.append((stream, html_path, OUT_DIR / f"{base}.pdf"))
        outputs.append(html_path)

    for stream, html_path, pdf_path in stream_htmls:
        try:
            chrome_pdf(html_path, pdf_path)
            outputs.append(pdf_path)
            print(f"OK {stream} PDF")
        except Exception as e:
            print(f"FAIL {stream} PDF:", e)

    try:
        chrome_pdf(HTML_OUT, PDF_OUT)
        outputs.append(PDF_OUT)
        print("OK master PDF")
    except Exception as e:
        print("FAIL master PDF (use per-stream PDFs):", e)

    # Also copy PDFs to exports/ root
    for name in (
        "ELIMINATION_RULES_CIVIL.pdf",
        "ELIMINATION_RULES_ELECTRICAL.pdf",
        "ELIMINATION_RULES_NONCORE.pdf",
        "ELIMINATION_RULES_PLAYBOOK.pdf",
    ):
        src = OUT_DIR / name
        if src.exists():
            (ROOT / "exports" / name).write_bytes(src.read_bytes())
            outputs.append(ROOT / "exports" / name)

    print("---")
    print(f"Established {len(established)}; drafts {len(drafts)}")
    for stream in STREAMS:
        srules = rules_for_stream(established, stream)
        total_q = sum(len(items_for_stream(full[r["id"]], stream)) for r in srules)
        print(f"{stream}: {len(srules)} rules, {total_q} CORRECT+WEAK slots")
    n_bad = sum(1 for a in audit_rows if a["grade"] == "INCORRECT")
    print(f"INCORRECT mappings removed from worked sets: {n_bad}")

    copy_to_push(outputs)


if __name__ == "__main__":
    main()
