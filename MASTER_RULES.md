# MASTER_RULES

This document is the highest authority for the APTRANSCO CBT project.
All implementation and question generation must strictly follow these rules.

## Primary Aim — APTRANSCO Level Match (Non-Negotiable)

The main aim of every FLT is to **match the real APTRANSCO AEE CBT level** with **high efficiency and high quality**.

This overrides “filler”, textbook-LKG, or template-style questions.

### What “APTRANSCO level” means
- Style and depth similar to **APTRANSCO / APPSC AEE / APGENCO / TSTRANSCO** technical papers
- Prefer **application, design judgement, numerical multi-step, diagram-dependent, and site/practical** questions over definition recall
- Include **practically able** questions — stems a field / design / substation / site engineer could face in real work, not classroom trivia
- Difficulty feel: mostly **Medium**, with controlled Hard; Easy capped at **25% only**
- **Calibrate UP:** historical setter bias labels items **1–2 levels too easy** vs real APTRANSCO AEE — apply the **Difficulty Calibration Bias Correction** below on every paper from now on
- A serious AEE aspirant should find the paper **exam-like**, not coaching-drill easy and not GATE-research hard

### Difficulty Calibration Bias Correction (STRICT — plan from next paper onward)

Observed failure mode: the agent/setter **states** Easy / Medium / Hard correctly in rules, but **writes** stems that feel **one to two levels below** the claimed label (claimed Medium ≈ real Easy; claimed Hard ≈ real Medium).

**Mandatory correction for every future FLT (and any regenerate):**
1. When drafting, target difficulty **one notch harder** than the “comfortable” first draft, then label honestly against the Difficulty Engine.
2. **Label ↔ feel map (after correction):**
   - **Easy** = what previously felt like “very easy / direct recall” — still capped at 25%; must still be exam-plausible, not LKG
   - **Medium** = what previously felt like “comfortable Hard” — multi-step or judgement; default technical feel
   - **Hard** = genuine two-concept / diagram-read + calc / design decision — not merely a longer Easy stem
3. Before tagging Medium/Hard, ask: *“Would a well-prepared AEE say this is at least as hard as a typical APTRANSCO item with the same label?”* If No → harden stem/options or **downgrade the label** (do not keep a soft stem with an inflated label).
4. Examiner / Compliance must flag **soft-labelled** items (label Hard but solvable by recall; label Medium but one-step formula plug) as MODIFY.
5. Paper planning: build the **Medium and Hard slots first** at true exam depth; fill Easy last — never start from Easy and “upgrade labels.”

**Fail condition:** a paper whose overall feel is “coaching worksheet one level below APTRANSCO” cannot be APPROVED even if Easy/Medium/Hard **counts** match 25/50/25.
### High-efficiency generation rules
1. One concept → one question (no duplicate concepts in the same paper)
2. Every numerical must be dual-method verified before inclusion
3. Every diagram question must use a **neat cropped, syllabus-correct, professional engineering figure** selected by **Diagram Source Priority by Stream** — never paste a full PDF page; never use a decorative / cartoon / “simple AI sketch” as the main figure
4. Reject any question that fails the scored Quality Rubric (total < 9/10) or a separate Human Examiner REJECT
5. Do not inflate Easy count to “fill” the paper
6. The question setter must NEVER self-assign ACCEPT. ACCEPT / MODIFY / REJECT is allowed only in a separate Human Examiner pass
7. When filling remaining slots, prefer **Practical → Diagram (Medium–Hard) → Application** over Easy recall (see pattern Priority stars)

### High-quality bar (paper is publishable only if)
- Weightage + sequence exact
- Pattern mix meets mandatory types (including **≥5 Practical** and **12–15 Diagram**)
- Diagrams are **essential**, cropped correctly, **technically correct for the syllabus topic**, and feel like real exam / textbook engineering figures (not toy AI art)
- Diagram-tagged questions are mostly **Medium–Hard** (see Diagram Professional Quality Bar)
- Distractors are real engineering mistakes
- Explanations are complete (why correct + why each wrong + formula/steps)
- Overall paper would pass a senior APTRANSCO examiner review
- **Full Final Approval Workflow** complete (Subject Weightage → PYQ Themes → Compliance → Setter Rubric → Answer Verification → Examiner → Diagram Dependency → Hard/App Justifications → Audits G–O → Non-core Subject Gates) and **Acceptance Threshold** met before APPROVED

---

## Official Exam Structure

### Civil Engineering Technical Weightage (70 Questions)
- Strength of Materials: 22% → 15 questions
- Reinforced Concrete (RCC): 19% → 13 questions
- Fluid Mechanics & Hydraulic Machinery: 16% → 11 questions
- Steel Structures: 16% → 12 questions
- Foundation Engineering: 14% → 10 questions
- Soil Mechanics: 13% → 9 questions
- Total Technical: 70 questions

### Electrical Engineering Technical Weightage (70 Questions)
- Power Systems: 14 questions
- Electrical Machines: 13 questions
- Electric Circuits: 11 questions
- Control Systems: 8 questions
- Power Electronics & Drives: 7 questions
- Measurements: 6 questions
- Analog Electronics: 4 questions
- Digital Electronics: 3 questions
- Utilization of Electrical Energy: 4 questions
- Total Technical: 70 questions

### Non-Core Weightage (30 Questions)
- Quantitative Aptitude: 8 questions
- General Awareness: 7 questions
- Reasoning & General Intelligence: 5 questions
- English Language & Comprehension: 5 questions
- Computer Knowledge: 5 questions
- Total Non-Core: 30 questions

### Exam Pattern
- Technical Section → 70 questions
- Non-Core Section → 30 questions
- Total → 100 MCQs
- CBT Pattern

## Official Question Sequence

### Civil Technical Sequence
- Q1–Q15: Strength of Materials
- Q16–Q28: Reinforced Concrete (RCC)
- Q29–Q39: Fluid Mechanics & Hydraulic Machinery
- Q40–Q51: Steel Structures
- Q52–Q61: Foundation Engineering
- Q62–Q70: Soil Mechanics

### Electrical Technical Sequence
- Q1–Q14: Power Systems
- Q15–Q27: Electrical Machines
- Q28–Q38: Electric Circuits
- Q39–Q46: Control Systems
- Q47–Q53: Power Electronics & Drives
- Q54–Q59: Measurements
- Q60–Q63: Analog Electronics
- Q64–Q66: Digital Electronics
- Q67–Q70: Utilization of Electrical Energy

### Non-Core Sequence
- Q71–Q78: Quantitative Aptitude
- Q79–Q85: General Awareness
- Q86–Q90: Reasoning & General Intelligence
- Q91–Q95: English Language & Comprehension
- Q96–Q100: Computer Knowledge

## Source & Knowledge Base Policy

The uploaded folder `APTRANSCO_SourceFiles/` is the project knowledge base.
All question generation must primarily use documents inside this folder.

### Source Priority
1. Official APTRANSCO Syllabus
2. MASTER_RULES.md
3. Official APTRANSCO Previous Year Papers
4. APPSC AEE
5. APPSC AE
6. APGENCO
7. TSGENCO
8. TSTRANSCO
9. SSC JE
10. RRB JE
11. GATE (Easy to Moderate)
12. Uploaded Question Banks
13. Uploaded Study Materials
14. Uploaded Current Affairs Notes
15. Uploaded Personal Notes

Higher-priority sources must override lower-priority sources.

## Question Generation Principles

- Use only prescribed syllabus subjects and micro-topics.
- Never hardcode syllabus or weightage.
- Extract syllabus, chapters, micro-topics, PYQ trends, and weightage automatically from uploaded files.
- Avoid duplicate questions, concepts, numerical values, diagrams, and answer patterns across all mock papers.
- Generate fresh APTRANSCO-style questions, not verbatim copyrighted PYQs.
- Maintain a question history registry for duplicate detection.
- Always validate questions technically and grammatically.
- Every question must include a correct answer, detailed explanation, formula used, calculation steps, engineering concept, and option analysis.
- Every question must be traceable to source files when possible.

## Quality & Validation Rules

### Difficulty Distribution
- Easy: **25% only** (fixed — do not exceed)
- Medium: 50%
- Hard: 25%

### Question Type Distribution
- Conceptual Questions
- Numerical Questions
- Formula-Based Questions
- Practical Engineering Questions
- Statement-Based Questions
- Diagram-Based Questions
- Assertion & Reason Questions
- Match-the-Following / Matching Matrix Questions (**rendered as HTML List-I / List-II tables in CBT**)
- Table-Based Questions (**rendered as HTML `<table>` in CBT — not markdown-only**)
- Graph / Curve Interpretation Questions

### Image Source Declaration Rule
**When presenting any paper in chat for approval, you MUST list for every diagram question:**
- The exact image file path that will be used
- The source PDF it came from
- A brief description of what the diagram shows
- Confirmation that question options depend on the diagram

No diagram question may be submitted for approval without this declaration.

### Mandatory Per-Paper Requirements
**Every FLT paper must include at minimum:**
- **1 Matching Matrix question** (match engineering terms, types, or properties in column A to column B)
- **1 Table-based question** (candidate reads a given data table to answer the question)
- **≥1 Graph/Curve interpretation question with a real plotted curve figure** (see Graph Mandate — not stem-only “graph” tags without an image)
- **4 Assertion–Reason questions** (distributed across subjects)
- **4 IS Code / Standard value questions** (see policy below)
- **5 Practical / site / field-decision questions** that are **practically able** (see Practical Questions bar)
- **12–15 Diagram / Figure questions** meeting the **Diagram Professional Quality Bar**, filled to the **Subject-wise Diagram Quota** below, using **priority-sourced cropped figures** (not invented SVGs when core/PYQ exists)

### Diagram Rules (STRICT — Fail packaging if violated)
- Search **all** uploaded source files under `sourcefiles-ce/Aptransco_sourcefiles/` **and** extracted folders `images/electrical-core-diagrams/`, `images/civil-core-diagrams/`, `images/diagram-questions-EE/`, `images/diagram-questions/` **before** inventing any figure.
- **Forbidden default:** shipping hand-drawn / AI SVG placeholders when a usable core or PYQ figure exists for the same concept — that is an automatic Fail of Diagram Source Priority.
- **Electrical:** ≥ **50%** of Diagram questions must use **PYQ / prior-year board-family** cropped figures (APTRANSCO / APGENCO / DISCOM / APPSC / GATE Easy–Moderate paper pages with a real engineering figure). Remaining Diagram Qs use **electrical-core** textbook crops. Rank-4 AI schematics only if ranks 1–3 truly have no usable figure after full search.
- **Civil:** **Default to civil-core crops** (SOM / DDRC / Steel / Fluid / Soil). Second priority = neat PYQ / bank crops from `images/diagram-questions/`. Do not skip a neat core page for a weaker SVG.
- Every diagram image path must be a **tight crop of the figure region** (never full PDF page with headers/unrelated MCQs).
- Declare per Diagram Q: `diagramSource` = `pyq` | `core` | `bank` | `schematic-last-resort` and the source file path.
- Follow **Diagram Source Priority by Stream** and **Subject-wise Diagram Quota** — both are mandatory gates.

### Duplicate Control
- Maintain a global registry of every generated question.
- Reject identical or near-identical questions.
- Avoid duplicate concepts, formulas, numerical patterns, diagrams, and answer patterns.

### Solution & Review Rules
- Provide **detailed, exam-level solutions** for every question (see **Detailed Explanation Standard** below).
- Include correct option, reason, formula, calculation steps, exam-level trap analysis, and topic high-yield points.
- Never ship one-line explanations or LKG-style distractor notes.
- Provide candidate performance summaries and learning recommendations.

### Non-Core Topics
- Quantitative Aptitude
- General Awareness
- Reasoning & General Intelligence
- English Language & Comprehension
- Computer Knowledge

Use only uploaded current affairs and general knowledge sources for non-core questions.

## Implementation Scope

The AI is responsible for:
- Question paper generation
- Question validation
- Difficulty balancing
- Chapter balancing
- Micro-topic rotation
- Diagram selection
- Trap option generation
- Answer validation
- Detailed solution generation
- Compliance verification

The AI is not responsible for website UI generation beyond CBT compatibility.

## Compliance

Before finalizing any paper, verify:
- Official syllabus compliance
- Subject-wise weightage
- Question sequence
- Chapter distribution
- Micro-topic coverage
- Difficulty balance
- Duplicate validation (**Audit I**)
- Diagram validation
- Source validation
- Detailed solutions generated
- Question Origin Audit (**G**)
- APTRANSCO Similarity Audit (**H**) ≥ 90%
- PYQ Traceability Audit (**J**)
- Subject Weightage Coverage, PYQ Themes Coverage, and Answer Key & Calculation Verification gates Pass
- Acceptance Threshold gates all Pass before **APPROVED**
- Concept Coverage, Bloom’s Taxonomy, Formula Reuse, Distractor Quality, and Key Distribution audits (**K–O**) Pass
- Non-core Subject Gates (Quant / GA / Reasoning / English / Computer) Pass
- User has explicitly said **APPROVED**

Final papers must be certified as fully compliant.

---

## Question Pattern Distribution (Technical Section – 70 Questions)

| Question Pattern              | Count  | % of Paper | Priority   |
|-------------------------------|--------|------------|------------|
| Numerical (Engineering Calc.) | 21     | 30%        | ★★★★★ |
| Conceptual                    | 14     | 20%        | ★★★★★ |
| Diagram / Figure Based        | 12–15  | 17–21%     | ★★★★★ |
| Application / Design Based    | 10     | 14%        | ★★★★★ |
| Practical / Site Engineering  | 5      | 7%         | ★★★★☆ |
| Assertion–Reason              | 4      | 6%         | ★★★★☆ |
| IS Code / Standard Based      | 4      | 6%         | ★★★★☆ |
| Graph / Curve Interpretation  | 3–4    | 5%         | ★★★☆☆ |

> These categories overlap. A single question can combine Numerical + Diagram + Application.

### Numerical Questions (21)
Must not be simple formula substitution. Suggested difficulty split: 5 Easy, 11 Medium, 5 Hard (aligned to overall Easy 25% / Medium 50% / Hard 25%).
Topics: Stress, Strain, Beam reactions, SFD/BMD, Deflection, Torsion, RCC design, Slab, Footing, Flow, Turbines, Bearing capacity, Settlement.

### Conceptual Questions (14)
Avoid definition-type questions. Ask: Why? When? Which is most suitable? What happens if? Engineering consequences.

### Application Questions (10)
Examples: Which footing is correct? Which turbine is suitable? Which reinforcement detailing is correct? Which section will fail first?

### Practical Questions (5) — “Practically able” (mandatory quality)
Must feel like decisions an AEE / site / substation / construction engineer would actually make — not memorised handbook trivia.

**Required flavour (pick from real work contexts):**
- **Civil:** placement / curing / formwork / compaction / inspection / sequencing / maintenance / failure investigation / detailing mistakes on site
- **Electrical:** substation / bay / protection / CT-PT polarity / transformer parallel / cable / earthing / commissioning / outage decision / metering connection / switchgear interlocking

**Quality bar:**
- Stem describes a **field-plausible situation** (what is observed / what must be decided)
- Correct option is the **engineering action or diagnosis** a competent AEE would choose
- Distractors are **plausible wrong field decisions**, not random labels
- Prefer **Medium** difficulty; at most **1 Easy** among the 5 Practical questions
- May combine with Diagram / IS / Application tags when the figure or code is what the site decision depends on

**Reject as Practical (reclassify):** pure definition, bare code-clause recall, or “name this equipment” with no decision context.

### Assertion–Reason Questions (4)
Distribute across subjects. Never cluster all in one subject.

### IS Code / Standard Values Questions (4)
**Policy on standards framing:**
- Do NOT ask for clause numbers or code section identifiers.
- Do NOT restrict all standard-based questions to Indian Standards (IS) only.
- Questions can be framed using any of the following equally valid references:
  - IS code provisions (IS 456, IS 800, IS 1904, IS 1498, IS 875 etc.)
  - Standard engineering values (e.g., modulus of elasticity of steel = 200 GPa)
  - Standard design tables (e.g., Terzaghi bearing capacity factors, Rankine Ka/Kp)
  - Standard charts (e.g., Moody diagram, IS plasticity chart, Proctor curves)
  - International standards where IS equivalent is not available
- Always frame the question as application: "Which section classifies as under-reinforced per IS 456?", "Using standard Ka for φ = 30°...", "Given that E for steel = 200 GPa..."

### Graph / Curve Questions (3–4 preferred; **≥1 mandatory with real curve image**)
Include: Stress-strain curve, Compaction curve, Consolidation curve, Flow curve, Bode / torque-slip / Q–H / hydrograph as stream-appropriate.
At least **1 graph/curve question is mandatory per paper** and **must attach a cropped curve figure** from core/PYQ (see Graph / Curve Mandate). Text-only “graph” tags without `image` Fail.
### Matching Matrix Questions (≥1 per paper)
Each paper must have at least one question where the candidate matches a **Column A / List-I** list to a **Column B / List-II** list.
Format: Four items in List-I, four in List-II (or similar); options give the correct combination codes.

**CBT / code requirement (mandatory — not text-only):**
- Do **not** leave List-I / List-II only as plain paragraph text in the stem.
- Every Matching Matrix (and Matching+Diagram) question **must** include a structured `matchingMatrix` object in the question bank JSON/JS:
  ```js
  matchingMatrix: {
    caption: "Match List-I with List-II",
    listITitle: "List-I",
    listIITitle: "List-II",
    listI: [ { code: "P", text: "…" }, … ],
    listII: [ { code: "1", text: "…" }, … ],
    instruction: "Select the correct matching code"
  }
  ```
- The exam UI **must render** List-I and List-II as **HTML tables / matrix panels** on the site (via code). Markdown pipes or “P) … Q) …” prose alone is **Fail** for this pattern.
- If a diagram also applies, keep `image` for the figure **and** still render `matchingMatrix` tables.

Use for: Turbine types vs head/flow, Footing types vs condition, Soil tests vs parameters, Logic gates vs expressions, Transformer connections vs names.

### Table-Based Questions (≥1 per paper)
At least one question must provide a **data table** that the candidate must read to answer.

**CBT / code requirement (mandatory — not text-only):**
- Do **not** embed the table only as markdown `| … |` or a long single-line string in `question`.
- Every Table question **must** include a structured `dataTable` object:
  ```js
  dataTable: {
    caption: "Bus data for NR load flow",
    headers: ["Bus", "Type", "|V| pu", "P MW"],
    rows: [
      ["1", "Slack", "1.05", "—"],
      ["2", "PV", "1.02", "50"],
      ["3", "PQ", "—", "30"]
    ]
  }
  ```
- The exam UI **must render** an HTML `<table>` on the site (via code) so candidates see a real table, not raw markdown.
- Stem text should ask the question; table content lives in `dataTable`.

Use for: Comparative properties, Code design values, SPT vs density correlation, Efficiency vs load data, Bus / load-flow data, Test results table.

### Difficulty Distribution (Technical Section – 70 Questions)
| Difficulty | Questions | % of Technical |
|------------|-----------|----------------|
| Easy       | 18        | 25% (fixed max) |
| Medium     | 35        | 50% |
| Hard       | 17        | 25% |

### Difficulty Distribution (Full Paper – 100 Questions)
| Difficulty | Questions | % of Paper |
|------------|-----------|------------|
| Easy       | 25        | **25% only** |
| Medium     | 50        | 50% |
| Hard       | 25        | 25% |

> Easy must not exceed 25% of the paper. Do not use the older 30–35% Easy band.

---

## Golden Rules for Question Quality

### Golden Rule 1 – Pattern Overlap
At least **50% of technical questions must combine two or more patterns**.
Valid combinations: Numerical + Diagram, Numerical + Application, Diagram + Conceptual, Practical + IS Code, Diagram + Numerical + Application.

### Golden Rule 2 – No Direct Recall Dominance
No subject should contain more than **25% direct recall** questions.

### Golden Rule 3 – Distractor Engineering
At least **70% of distractors** must reflect real engineering mistakes:
- Unit conversion errors
- Sign convention mistakes
- Wrong effective length
- Wrong boundary conditions
- Incorrect code assumptions
- Common design misconceptions

**Forbidden distractors / trap notes (LKG ban):**
- Silly / nursery options (“conductor colour”, “only tower height always”, joke options) used as if they were serious traps — either rewrite the option to a real engineering mistake, or if kept for Easy only, the explanation must **not** treat them as high-value traps
- Trap explanations that say only “wrong” / “incorrect” with no mechanism
- Trap explanations that invent mistakes a prepared AEE would never make

**Required trap quality:** each wrong option’s explanation must name the **specific exam-level misconception** (wrong formula, forgotten √3, Ra neglected wrongly, PV vs PQ variable mix-up, cover vs effective depth, etc.).

### Golden Rule 3A – Detailed Explanation Depth (Mandatory)
Every `explanation` field must meet the **Detailed Explanation Standard** (next section). One-line keys like `SIL = V²/Zc` alone are **Fail** for APPROVED packaging.

### Golden Rule 4 – Hard Question Depth
Every hard question must require **at least two engineering concepts** or **multiple solution steps**.

### Golden Rule 5 – APTRANSCO Level Gate
Before accepting any question, ask:
> “Would this appear in a real APTRANSCO AEE CBT, and would a prepared AEE candidate need real engineering skill to solve it?”

If No → reject or rewrite.  
Definition-only, nursery-level arithmetic, or decorative diagrams fail this gate automatically.

Also apply **Difficulty Calibration Bias Correction**: if the item is labelled Medium/Hard but feels one–two levels easier than a real paper’s same label → harden or relabel before keep.

### Golden Rule 6 – Diagram Shortage Is a Scan Duty
If diagram quotas, PYQ/core share, or figure quality look short: **full re-scan all sources** (see Diagram Matching Procedure step 9). Do not lower difficulty or skip diagram slots because “not enough figures were found” on the first pass.

---

## Detailed Explanation Standard (Mandatory — every question)

Explanations are part of the **exam product**, not a key footnote. Weak one-liners Fail approval packaging even if the keyed answer is correct.

### Minimum structure (store in `explanation`; use clear line breaks)

```
CORRECT: <option letter/text>

WHY CORRECT:
<2–5 sentences of engineering reasoning; cite concept / law / code behaviour>

CALCULATION:   (mandatory for Numerical / Diagram+Numerical / any Q with numbers)
<formula>
<substituted values>
<arithmetic steps>
<final result matching the keyed option>
(If non-numerical: write "CALCULATION: N/A — conceptual / matching / AR")

TRAP ANALYSIS (exam-level only — no LKG jokes):
A) <why wrong — name the specific misconception / wrong formula / slip>
B) <…>
C) <…>
D) <…>   (skip the correct letter; cover all three wrong options)

TOPIC HIGH-YIELD (same micro-topic — high exam probability):
• <must-know point 1 closely related to this Q>
• <must-know point 2 (formula / thumb rule / standard value / typical trap)>
• <must-know point 3 (linked PYQ-style theme candidates often see)>
```

Optional but preferred: fill `formula` with the governing equation(s) used in CALCULATION.

### Length / depth bar
| Pattern | Min explanation depth |
|---|---|
| Numerical / Diagram+Numerical | Full CALCULATION + all traps + ≥3 topic points |
| Conceptual / Application / Practical / AR / Matching / Table | WHY CORRECT with real depth + all traps + ≥3 topic points |
| Non-core Quant | Full arithmetic + exam traps (wrong %, base slip) — still no silly jokes |
| Other Non-core | WHY + trap mechanism + ≥2 high-yield points for that skill |

Rough length guide: technical explanations typically **≥ 450 characters**; one-liners under ~120 characters are automatic Fail for APPROVED banks.

### Trap analysis rules (match exam level)
- Each wrong option must map to a **plausible AEE / GATE-moderate mistake** (forgot √3, used Z instead of Zc, mixed PV/PQ unknowns, gross vs net area, wrong BMD sign, etc.).
- **Do not** teach LKG options as serious traps — rewrite such options in a MODIFY pass; until rewritten, note briefly that the option is non-engineering and state the **real** trap type used in actual exams.
- Never invent traps that contradict the stem.

### Topic high-yield rules
- Points must be from the **same subject micro-topic** as the question.
- Prefer **high PYQ / AEE probability** items: standard formulas, standard values, classic comparison traps, “what is often asked next” on the same theme.
- Do **not** paste entire chapter notes — 3 focused bullets tied to this question’s theme.

### Packaging Fail conditions (explanations)
- Missing WHY CORRECT, TRAP ANALYSIS (all wrong options), or TOPIC HIGH-YIELD
- Numerical without CALCULATION steps that reach the keyed option
- LKG-style trap commentary presented as serious engineering teaching
- Explanation contradicts the keyed answer

### Paper Quality Scoring Weights
| Dimension                       | Weight |
|----------------------------------|--------|
| Numerical quality               | 30%    |
| Conceptual quality              | 20%    |
| Diagram / Figure integration    | 20%    |
| Application & Practical         | 15%    |
| Difficulty calibration          | 10%    |
| IS Code and standards           | 5%     |

*(Explanation depth is gated by Stage 7 + this Standard — Fail explanations block APPROVED packaging.)*

---

## Diagram Selection & Validation Rules (HIGHEST PRIORITY)

Diagram-based questions are a core part of the CBT.
Use diagrams **only when they directly help solve the question**.

### Diagram Professional Quality Bar (Mandatory — Medium–Hard feel)

Diagram questions must read as **high-professional, exam-grade engineering items**, not decorative illustrations glued to Easy recall.

**Difficulty mix for the 12–15 Diagram / Figure questions (technical):**
| Difficulty | Target share of Diagram Qs | Rule |
|---|---|---|
| **Medium** | **≥ 60%** | Preferred default for diagram stems |
| **Hard** | **25–35%** | Multi-step read of figure, or figure + calculation / judgement |
| **Easy** | **≤ 15%** (max 2) | Only if figure is still **PASS/STRONG** dependent and not toy-level |

**What “professional / reality feel” means:**
- Figure uses **correct syllabus engineering conventions** (IS/IEC symbols, support conventions, SLD notation, reinforcement marks, phasor sense, polarity dots, etc. as applicable)
- Candidate must **read the figure** (labels, topology, values, detailing) to answer — not merely recognise a clip-art icon
- Stem + figure together feel like a **real AEE/APTRANSCO item** (beam/SFD, RCC detailing, SLD bay, transformer connections, relay CT circuit, earth-pressure diagram, etc.)
- Prefer figures that look like **PYQ / core textbook engineering drawings**, not simplified cartoon schematics

**Forbidden as primary diagram (Fail quality — even if “pretty”):**
- Obvious **simple AI-generated** sketches with wrong topology, missing standards, toy proportions, or decorative style
- Clip-art / icon / emoji-like equipment drawings
- Invented symbols that are **not** in syllabus / standard practice
- Figures that a junior school student could answer without engineering reading

**If regenerating a figure (last resort after priority search):**
- Must be a **clean engineering line drawing** matching approved diagram types and syllabus conventions
- Must pass the same technical-correctness checks as a source crop
- Must **not** be preferred over a usable PYQ/core figure (see priority ranks below)

### Mandatory Selection Criteria
A diagram may be used ONLY if ALL of the following are true:
- It represents the exact engineering concept being tested.
- It belongs to the correct engineering subject **and micro-topic in syllabus**.
- It is clear, complete, and readable.
- All symbols, dimensions, labels, arrows, values, supports, terminals, or components are visible **and technically correct**.
- It improves the quality of the question to **Medium–Hard exam depth** (see bar above).
- The question and options correspond directly to the diagram.
- Source was chosen by **stream priority** (do not skip a higher-rank usable figure for a lower-rank or AI sketch).

### Reject These Images — Never Use:
- Book covers, chapter titles, headers, footers
- Logos, watermarks, QR codes, page numbers
- Decorative icons, screenshots
- Paragraphs converted to images
- Tables (unless the question requires table interpretation — then use `dataTable` HTML, not a photo of a table unless needed)
- Over-cropped or incomplete engineering figures (essential labels/parts missing)
- Duplicate diagrams
- Blurry images
- Images unrelated to the question
- Images from another engineering subject
- Simple / decorative AI generations that fail the Professional Quality Bar
- Technically wrong figures (incorrect polarity, impossible SLD, wrong reinforcement detailing, wrong support symbols)

### Civil Engineering — Approved Diagram Types

**Strength of Materials:** SFD, BMD, Beam loading, Mohr's Circle, Stress-Strain Curve, Torsion, Deflected shapes

**RCC:** Beam reinforcement, Slab reinforcement, Column reinforcement, Footings, Stair reinforcement, Development length detailing

**Fluid Mechanics:** Venturimeter, Orifice meter, Pipe systems, Flow nets, Hydraulic gradient, Pelton, Francis, Kaplan, Pumps

**Steel Structures:** Trusses, Connections, Plate girders, Built-up sections, Buckling modes

**Foundation Engineering:** Isolated footing, Combined footing, Raft, Pile group, Pressure distribution

**Soil Mechanics:** Compaction curve, Consolidation curve, Flow net, Soil profile, Earth pressure diagrams

### Electrical Engineering — Approved Diagram Types

**Electric Circuits:** DC circuits, AC circuits, RLC circuits, Bridge circuits, Thevenin/Norton networks

**Network Theory:** Circuit diagrams, Current flow, Node/mesh networks

**Machines:** DC machine construction, Transformer core, Transformer equivalent circuit, Induction motor, Synchronous machine, Rotor/Stator, Winding diagrams

**Power Systems:** Single Line Diagram (SLD), Bus bar arrangements, Substations, Transmission line towers, Protection schemes, Relay connections, CT/PT connections

**Control Systems:** Block diagrams, Signal flow graphs, Feedback systems

**Power Electronics:** Rectifiers, Inverters, Choppers, Converters, SCR triggering circuits, Waveforms

**Electrical Measurements:** Instrument connections, Wattmeter, Energy meter, CRO setup, Bridge circuits

**Electrical Graphs:** Phasor diagrams, Torque-speed characteristics, Magnetization curve, Load characteristics, V-I characteristics, Efficiency curves, Power factor triangle

### Diagram Matching Procedure (priority-first)
Before attaching any diagram:
1. Identify the **syllabus subject + micro-topic** and the engineering concept being tested.
2. Search diagrams **only for that concept**, walking **priority ranks in order** (EE: PYQ → electrical-core → banks → last-resort schematic; CE: neat core/PYQ → other sources → last-resort).
3. Stop at the **highest-rank usable** figure that crops cleanly and is technically correct — do not “upgrade” to AI art.
4. Match the question and diagram exactly; verify all labels and symbols against syllabus conventions.
5. Reject partial, ambiguous, or technically wrong figures.
6. Prefer textbook / PYQ–quality engineering diagrams with **reality feel**.
7. Write the stem so difficulty is **Medium or Hard** whenever the figure supports it (Easy diagram only as rare exception).
8. If no suitable diagram exists after a full priority search, generate the question as **text-only** (or Practical/Application without fake figure) — do **not** invent a weak AI diagram just to hit the Diagram count.
9. **Diagram gap → mandatory full re-scan (STRICT):** If subject quota is short, crops feel weak, PYQ share &lt; 50% (EE), core was skipped (CE), or the setter “feels” diagram content is thin — **do not proceed with AI/schematic fillers**. Immediately re-scan **all** of:
   - `sourcefiles-ce/Aptransco_sourcefiles/` (every PDF for that stream)
   - `images/diagram-questions-EE/` or `images/diagram-questions/`
   - `images/electrical-core-diagrams/` or `images/civil-core-diagrams/`
   - Paper Analysis / PYQ theme folders  
   Extract or re-extract diagram pages if needed, then **re-plan** which stems become Diagram / Graph Qs from the newly found figures. Gaps are a **search failure**, not a content shortage, until this full scan is documented.

### Diagram Source Priority by Stream (Mandatory)

Priorities differ for Electrical vs Civil. Always **search the full source tree** (`sourcefiles-ce/Aptransco_sourcefiles/` + extracted diagram folders). If any relevant neat figure exists anywhere in sources, prefer it over AI drawing.

#### Electrical — Priority Order (strict)
Same utility family papers drive the real exam style (APTRANSCO / APGENCO / APEPDCL / APCPDCL / APSPDCL). Use in this order:

| Rank | Source | Local / folder cues |
|------|--------|---------------------|
| **1 (highest)** | **PYQ diagram pages** from APTRANSCO, APGENCO, APEPDCL, APCPDCL, APSPDCL (and related DISCOM/GENCO/TRANSCO papers) | `APTRANSCO.pdf`, `APGENCO.pdf`, `APCPDCL.pdf`, `APSPDCL.pdf`, `Paper Analysis-EE/`, `images/diagram-questions-EE/`, other EE PYQ extracts |
| **2** | **Electrical core textbook diagrams** (vector-extracted core-7) | `images/electrical-core-diagrams/` from AnalogDigital, ControlSystems, Circuits, Machines, Measurements, PowerElectronics, PowerSystems |
| **3** | Other EE question banks / SSC JE / RRB JE / GATE (Easy–Moderate) diagram pages | banks under `Electrical/` and shared PYQ sets |
| **4 (lowest)** | Clean standard line schematic only if ranks 1–3 have no usable figure | hand-drawn / AI schematic last resort |

**Electrical rule of thumb:** Prefer a **real PYQ figure** (same board family) over a textbook core figure when both fit the concept and crop cleanly. **≥50% of Diagram Qs in every EE paper must be PYQ-sourced** (count `diagramSource=pyq`). Skipping available PYQ/core for AI SVG is Fail.

#### Civil — Priority & Fitness Rule (core-first — STRICT)
Civil **defaults to core textbook crops**. PYQ is second when neater/better matched. Main requirement: the figure must be **neat and fit for question usage** (tight crop, readable labels, options depend on it).

| Rank | Source | Local / folder cues |
|------|--------|---------------------|
| **1 (highest default)** | **Civil core diagrams** — MUST search here first for SOM / DDRC / Steel / Fluid / Soil concepts | `images/civil-core-diagrams/` |
| **2** | **PYQ / bank diagram pages** when core has no usable match or PYQ crop is clearly better | `images/diagram-questions/`, APTRANSCO/APPSC civil papers |
| **3** | Any other relevant figure under Civil + shared sources | `sourcefiles-ce/Aptransco_sourcefiles/Civil/` |
| **4 (lowest)** | Clean standard line schematic only if ranks 1–3 fail | last resort |

**Civil rule of thumb:** If a neat `civil-core-diagrams` page exists for the concept, **you must crop and use it** (or a tighter crop of it). Invented SVGs while core sits unused = Fail.

---

## Subject-wise Diagram Quota (STRICT — every FLT)

Diagram counts below are **mandatory ranges** inside the technical 12–15 Diagram total. Typical APTRANSCO diagram types listed are preferred figure families.

### Civil Engineering — Diagram quota by subject

| Subject | Diagram Questions | Typical APTRANSCO Diagram Types |
|---|:---:|---|
| **Strength of Materials (SOM)** | **2** | BMD, SFD, stress–strain, Mohr's circle, torsion |
| **Steel Structures** | **1–2** | Trusses, bolted/welded joints, tension members |
| **RCC / DDRC** | **3** | Beam/slab/column detailing, footing reinforcement, development length |
| **Soil Mechanics** | **2** | Soil phase diagram, compaction, permeability, Mohr circle |
| **Foundation Engineering** | **2** | Footings, piles, retaining walls, bearing-capacity sketches |
| **Fluid Mechanics (FM)** | **2** | HGL/EGL, venturimeter, pipe systems, flow nets, manometers |
| **Hydrology & Hydraulic Machines (HHM)** | **2** | Hydrographs, pumps, turbines, canals, spillways |

> Official CBT sequence keeps FM+HHM under **Fluid Mechanics & Hydraulic Machinery** — still deliver **2 FM + 2 HHM** diagram flavours inside that block. Total Civil Diagram Qs ≈ **14–15**.

### Electrical Engineering — Diagram quota by subject

| Subject | Diagram Questions | Typical APTRANSCO Diagram Types |
|---|:---:|---|
| **Power Systems** | **3** | SLD, relay/protection, sequence networks, transformer connections |
| **Electrical Machines** | **2–3** | Phasor diagrams, equivalent circuits, OCC/SCC, torque-slip |
| **Electrical Circuits** | **2** | RLC networks, bridge circuits, transient circuits |
| **Control Systems** | **2** | Block diagrams, root locus, Bode, signal-flow graphs |
| **Power Electronics & Drives** | **2** | Converter circuits, chopper/inverter waveforms, firing circuits |
| **Measurements** | **1** | CT/PT, bridge circuits, CRO blocks |
| **Analog & Digital Electronics** | **1–2** | Op-amp circuits, logic circuits, timing diagrams |

> **EE PYQ share:** at least **half** of these Diagram questions must be `diagramSource=pyq`. Utilization may contribute 0 Diagram Qs unless a strong PYQ/core figure exists.

### Graph / Curve Mandate (STRICT — every FLT)
- At least **one** question must be tagged Graph/Curve **and** display a **real plotted curve image** (`image` path to a cropped graph from core/PYQ — stress–strain, compaction, Bode, torque-slip, Q–H, hydrograph, etc.).
- A text-only stem that says “from the graph” **without** an attached curve image is **Fail**.
- Prefer graphs already available in `civil-core-diagrams` / `electrical-core-diagrams` / PYQ extracts — do not invent decorative charts when source graphs exist.

**Quota Fail → paper cannot be APPROVED** until Diagram Qs are redistributed and re-sourced.
#### Shared crop / usage rules (both streams)
- Never paste a full PDF page into the CBT.
- Crop only the **figure region** needed for the question; keep all essential labels/dimensions; strip headers, footers, page chrome, adjacent unrelated text.
- “Complete figure” means the **engineering figure is intact**, not that the whole textbook page is kept.
- Always scan **all** source files for a relevant diagram before concluding “no diagram available.”

Never prefer AI-generated or decorative illustrations over ranked sources above.
**Selection principle:** priority rank + technical correctness + crop quality + exam depth **together** decide the figure — never “any image that looks related.”

### Diagram Final Validation Checklist
Approve a diagram only if ALL of the following pass:
- ✓ Correct subject **and syllabus micro-topic**
- ✓ Correct topic; symbols / topology **technically correct**
- ✓ Clear and readable (neat CBT crop)
- ✓ Engineering figure intact (no essential labels/parts cut off)
- ✓ Relevant to the question and **fit for usage**
- ✓ Options depend on the diagram (**PASS** or **STRONG** dependency)
- ✓ No unnecessary graphics / full-page paste
- ✓ No screenshots, decorative images, or **simple AI toy sketches**
- ✓ Source follows stream priority (EE: PYQ → core → others; CE: neat fit from core/PYQ/all sources)
- ✓ Engineering value is high — question feels **Medium–Hard**, professional, exam-real
- ✓ Priority search documented (which rank supplied the figure)

If any check fails → reject the image and generate a text-only question.

---

## Question Validation Pipeline (Mandatory for Every Question)

Every generated question must pass ALL stages before acceptance. Rejection at any stage = question is discarded and rewritten.

```
Stage 1 — Subject Validation
  Is the concept within the official APTRANSCO syllabus for this subject?
  Does it belong to the correct sequence slot?

Stage 2 — Difficulty Validation (Difficulty Engine + Bias Correction)
  Hard   → must satisfy ≥ 2 of: diagram, multi-step numerical, IS code application,
             engineering judgement, two-concept intersection, application design
  Medium → satisfies 1 of the above **at true AEE depth** (not one-step plug-in)
  Easy   → direct single-step application or well-known formula (still exam-plausible)
  Self-declaration ("Hard") without satisfying criteria → downgrade automatically.
  Soft-labelling check: if claimed Medium/Hard but solvable by recall / single formula
  without judgement → MODIFY (harden stem) or downgrade label (Bias Correction).
  Plan Medium/Hard first at corrected depth; never fill Easy then inflate labels.

Stage 3 — Pattern Validation
  Confirm the stated pattern (Numerical/Diagram/Conceptual/etc.) is genuine.
  A question claiming "Diagram" without a valid image path is REJECTED.
  A question claiming "Application" that only asks for recall is REJECTED.

Stage 4 — Diagram Validation (Professional + Priority Check)
  ✓ Diagram exists at the declared file path
  ✓ Diagram is correct engineering type (not screenshot/logo/header / toy AI art)
  ✓ Diagram is neat, readable, and CBT-cropped (figure intact — no essential parts cut off)
  ✓ All labels, dimensions, arrows, values visible and syllabus-technically correct
  ✓ Question CANNOT be solved without the diagram (PASS/STRONG)
  ✓ All options depend on reading the diagram
  ✓ Correct subject + micro-topic match
  ✓ No watermarks, page numbers, decorative elements, or simple AI toy sketches
  ✓ Source follows stream priority (higher usable rank not skipped for AI sketch)
  ✓ Engineering value high; reality / exam feel; difficulty Medium or Hard (Easy only within ≤15% / max 2 Diagram Easy cap)
  Fail any check → remove image, reclassify or rewrite question.

Stage 5 — Numerical Verification (Dual-Method Rule)
  Every numerical must be independently solved by TWO methods:
  Method 1: formula substitution
  Method 2: dimensional check + alternate formula or unit analysis
  If answers differ → reject and rewrite.
  Never accept a calculated answer without verification.

Stage 6 — Distractor Verification
  Each wrong option must trace to a SPECIFIC engineering error:
  - Wrong unit (kN vs N, m vs mm)
  - Wrong sign convention
  - Wrong effective length / depth (D vs d, Le vs L)
  - Wrong IS code value
  - Wrong formula (e.g., using gross instead of net area)
  - Common design misconception
  Random numbers without engineering basis → REJECT all options, rewrite.

Stage 7 — Explanation Verification (Detailed Explanation Standard)
  The explanation must include ALL of:
  (a) WHY CORRECT — engineering reason (not a one-liner key)
  (b) TRAP ANALYSIS — each wrong option tied to a specific exam-level misconception (no LKG joke teaching)
  (c) Formula / concept used (also prefer `formula` field filled)
  (d) CALCULATION steps for any numerical / numbered stem — result must match keyed option
  (e) TOPIC HIGH-YIELD — ≥3 micro-topic points with high exam probability linked to this Q
  Missing any element → reject / rewrite before APPROVED packaging.

Stage 8 — Practical Question Gate
  A question claiming "Practical/Site Engineering" MUST involve one of:
  site inspection | construction execution | maintenance | troubleshooting |
  failure investigation | field decision making | substation / bay / protection /
  commissioning / outage / polarity / earthing / metering connection decision
  Stem must be **practically able** (real AEE-style decision context).
  Prefer Medium; max 1 Easy among Practical-tagged Qs in the paper.
  "What is the minimum curing period?" is NOT Practical — it is Recall.
  Reclassify such questions as IS Code or Conceptual.

Stage 9 — Application Question Gate
  A question claiming "Application" MUST require the student to APPLY knowledge, not recall it.
  ❌ "What is the nominal cover?" → Recall
  ✅ "Cover is 15 mm instead of 45 mm — which failure mode is most likely?" → Application
  Fail this test → reclassify to Conceptual or IS Code.

Stage 10 — Duplicate Check (Concept-Based)
  Compare ENGINEERING CONCEPT, not wording.
  Stress = P/A, Normal stress formula, Axial stress = same concept = duplicate.
  Any concept appearing more than once in the same paper → reject second occurrence.
```

---

## Question Quality Rubric (Mandatory — replaces flat “9/10” stamps)

Every question must be scored with an **explicit rubric**.  
**Forbidden:** writing only `Quality Score: 9/10` or `QS 9` without dimension scores.  
**Forbidden:** the question setter writing `Examiner: ACCEPT` / `ACCEPT` on their own generation.

### Rubric dimensions (Total = 10)

| Dimension | Max | What to score |
|---|---|---|
| **Concept** | 2 | Syllabus-correct, single clear concept, no ambiguity |
| **Calculation** | 2 | Dual-method verified if numerical; N/A items score on logic consistency (0–2) |
| **Distractors** | 2 | Each wrong option maps to a real engineering mistake |
| **Language** | 2 | Clear, unambiguous CBT wording (score 0, 1, or 2) |
| **Exam similarity** | 2 | Feels like APTRANSCO / APPSC AEE (not LKG / school recall) |

**Minimum to keep a question in the draft paper:** **total ≥ 9/10**, and **Exam similarity must be ≥ 1**.  
If Exam similarity = 0 → automatic reject/rewrite even if other scores are high.

### Required output format per question (setter pass)

```
Rubric: Concept _/2 | Calculation _/2 | Distractors _/2 | Language _/2 | Exam similarity _/2 | Total _/10
```

No ACCEPT/MODIFY/REJECT label is allowed in the setter pass.

---

## Pattern Classification Justifications (Mandatory)

### Hard justification (required on every Hard question)
After the stem, the setter must add one short line:

```
Hard justification: <why Hard — must cite ≥2 of: multi-step numerical, diagram interpretation,
IS/standard application, engineering judgement, two-concept intersection, design decision>
```

If this line cannot be written honestly → downgrade difficulty.

### Application justification (required on every Application question)
```
Application justification: <what knowledge is APPLIED; why this is not mere recall>
```

Fail Stage-9 Application Gate → reclassify; do not keep the Application label.

---

## Diagram Dependency Verification (Mandatory for every Diagram question)

For every question tagged Diagram / Figure / Graph-with-figure, assign **one** dependency level:

| Status | Meaning | Approval action |
|---|---|---|
| **PASS** | Impossible to select the correct option without the diagram | Keep |
| **STRONG** | Diagram clearly improves / almost necessary for solving | Keep (preferred for most diagram Qs) |
| **WEAK** | Diagram helpful but not essential; stem alone often enough | **MODIFY** — tighten stem/options or demote tag |
| **FAIL** | Diagram unnecessary / decorative | **Fail gate** — remove figure or rewrite |

```
Diagram dependency check (per Q):
- Image path + crop region:
- Dependency level: PASS / STRONG / WEAK / FAIL
- Without diagram, can a well-prepared candidate still pick the correct option? YES/NO
- Notes:
```

**Gate Pass rule:** every Diagram Q must be **PASS** or **STRONG**. Any **WEAK** → Modify before APPROVED. Any **FAIL** → Fail Diagram Dependency Audit.

This is in addition to Stage 4 Diagram Validation (10-point check).

---

## Human Examiner Mode (Separate Pass — Final Gate Before Approval)

After the setter finishes the paper + rubrics, a **separate Human Examiner pass** is mandatory.

> **"You are no longer the question setter. You are a senior APTRANSCO AEE examiner reviewing this paper for publication."**

### Separation rules (non-negotiable)
1. The examiner must **not** copy setter rubrics blindly.
2. The examiner must **independently** assign Accept / Modify / Reject.
3. The setter must **not** pre-label Accept.
4. Any Reject must be rewritten and re-examined before user approval for code.

### Examiner checklist per question
- Is the answer unquestionably correct (Gate C verified — calculation / derivation matches the keyed option)?
- Is Easy/Medium/Hard label justified (and Hard/Application justifications present if claimed)?
- For diagram Qs: is dependency **PASS** or **STRONG** (not WEAK/FAIL)? Is the figure **professionally / technically correct** (not a toy AI sketch)? Is difficulty Medium–Hard unless within Easy diagram cap?
- For Practical Qs: is the stem **practically able** (real field / substation decision), not bare recall?
- Are distractors realistic engineering errors?
- Does this resemble a real APTRANSCO/APPSC AEE item (not LKG)?
- Independent final verdict: **Accept** / **Modify** / **Reject**

### Examiner output format per question

```
Human Examiner: Accept | Modify | Reject
Examiner note: <one-line reason>
```

Paper may be shown to the user for approval only after the Human Examiner pass is complete.  
User approval is still required before converting to code.

**Mandatory before any paper is marked APPROVED:** complete the **Final Approval Workflow** end-to-end (Subject Weightage → PYQ Themes → Compliance → Setter Rubric → Answer Verification → Examiner through Audits G–O and Non-core Subject Gates). A paper that passes Human Examiner but fails any later audit must not be APPROVED.

---

## Subject Coverage Heatmap (Must Be Checked Before Generation)

Before generating any FLT, verify which micro-topics are covered and which are missing. Generate missing topics FIRST.

### Civil SOM Coverage Check
| Topic | Must Cover | Covered in FLT-01 |
|---|---|---|
| Direct Stress/Strain | ✓ | Q1, Q2 |
| Bending Stress | ✓ | Q3 |
| Column/Effective Length | ✓ | Q4 |
| Principal Stresses/Mohr Circle | ✓ | Q5 |
| Shear Stress Distribution | ✓ | Q6 |
| Torsion | ✓ | Q7 |
| Statically Indeterminate Beams | ✓ | Q8 |
| Stress-Strain Curve | ✓ | Q9 |
| Buckling/Euler | ✓ | Q10 |
| Strain Energy | ✓ | Q11 |
| Section Modulus/MI | ✓ | Q13 |
| Modular Ratio | ✓ | Q14 |
| SFD-BMD Relationship | ✓ | Q15 |

### Civil RCC Coverage Check
| Topic | Must Cover | Covered in FLT-01 |
|---|---|---|
| Nominal Cover / IS 456 | ✓ | Q16 |
| Neutral Axis (Limiting) | ✓ | Q17 |
| Under/Over Reinforced | ✓ | Q18 |
| T-Beam | ✓ | Q19 |
| Two-Way Slab | ✓ | Q20 |
| Column Detailing | ✓ | Q21 |
| Shear Design | ✓ | Q22 |
| Development Length | ✓ | Q23 |
| Combined Footing | ✓ | Q24 |
| Doubly Reinforced Beam | ✓ | Q25 |
| Minimum Steel | ✓ | Q26 |
| Shear Reinforcement Type | ✓ | Q27 |
| Curing | ✓ | Q28 |

---

## PYQ Classification (Required for Every Question)

Every question must carry one of these five labels:

| Label | Meaning |
|---|---|
| **Direct PYQ** | Same question (same values/wording) as a published paper |
| **Modified PYQ** | Similar question but values or context changed |
| **Inspired by PYQ** | Same topic/theme appeared in past exams, question freshly written |
| **AI Generated** | Novel question — concept not seen in collected PYQ database |
| **New Concept** | Topic never tested in any available source paper |

No paper may contain more than **2 Direct PYQs**.  
Origin mix must also satisfy the **Final Approval Workflow** (Weightage + PYQ Themes + Answer Verification + Audits G–O + Non-core gates) and the **Acceptance Threshold** below (brand-new ≥ 60%, Modified PYQ band per threshold, exact mock duplicates = 0).

---

## Final Approval Workflow (Mandatory — locked)

Only after **all** of the following pass may a paper be marked **APPROVED** (and only then may code / CBT packaging begin).

| # | Gate | What it proves |
|---|---|---|
| 1 | **A. Subject Weightage Coverage Check** | Exact subject counts + official sequence (tech + Non-core) |
| 2 | **B. PYQ Themes Coverage Check** | High-frequency APTRANSCO-family themes hit (or deferred in writing) |
| 3 | **Compliance Dashboard** | Difficulty, pattern minima, Direct-PYQ cap (weightage → Gate 1) |
| 4 | **Setter Rubric** | Every Q scored (Concept/Calc/Distractors/Language/Exam sim); no self-ACCEPT |
| 5 | **C. Answer Key & Calculation Verification** | Every keyed option reworked from stem; matches one given option exactly |
| 6 | **Human Examiner Pass** | Independent Accept / Modify / Reject |
| 7 | **Diagram Dependency Audit** | Every Diagram Q is **PASS** or **STRONG** (not WEAK/FAIL) |
| 8 | **Hard / Application Justification Audit** | Every Hard/Application claim has a valid justification line |
| 9 | **G. Question Origin Audit** | Where each Q came from; Direct ≤2; brand-new ≥60% |
| 10 | **H. APTRANSCO Similarity Audit** | Subject-wise match; overall ≥90%; honesty on differences |
| 11 | **I. Duplicate Audit** | Vs prior FLTs / ST / mini / PYQ use in mocks; exact dups = 0 |
| 12 | **J. PYQ Traceability Audit** | Every PYQ-derived Q lists source + modification level |
| 13 | **K. Concept Coverage Audit** | Syllabus micro-topics covered; no accidental holes or triple-stacking |
| 14 | **L. Bloom’s Taxonomy Audit** | Overall + **by-subject** Apply/Analyze mix; Remember capped |
| 15 | **M. Formula Reuse Audit** | Same formula / numerical pattern not overused inside the paper |
| 16 | **N. Distractor Quality Audit** | Every wrong option is a plausible mistake; no joke/impossible options |
| 17 | **O. Answer Key Distribution Audit** | A/B/C/D balanced; no long same-letter runs |
| 18 | **P. Non-core Subject Gates** | Quant / GA / Reasoning / English / Computer each pass detailed checks |

**Fail any gate → not APPROVED.** Fix → re-run failed gates (and Human Examiner if stems changed materially).

---

## Top gates (run first — before setter polish)

### A. Subject Weightage Coverage Check (Mandatory — Gate 1)

Proves the paper matches **official subject weightage and sequence** exactly (not “about right”).

#### Technical weightage table (stream-specific)

Use the counts from **Official Exam Structure** above.

**Electrical example template:**

| Subject | Required Qs | Actual Qs | Q-range | Sequence OK? | Status |
|---|---:|---:|---|---|---|
| Power Systems | 14 | … | Q1–Q14 | Y/N | Pass/Fail |
| Electrical Machines | 13 | … | Q15–Q27 | Y/N | Pass/Fail |
| Electric Circuits | 11 | … | Q28–Q38 | Y/N | Pass/Fail |
| Control Systems | 8 | … | Q39–Q46 | Y/N | Pass/Fail |
| Power Electronics & Drives | 7 | … | Q47–Q53 | Y/N | Pass/Fail |
| Measurements | 6 | … | Q54–Q59 | Y/N | Pass/Fail |
| Analog Electronics | 4 | … | Q60–Q63 | Y/N | Pass/Fail |
| Digital Electronics | 3 | … | Q64–Q66 | Y/N | Pass/Fail |
| Utilization | 4 | … | Q67–Q70 | Y/N | Pass/Fail |
| **Tech total** | **70** | … | | | |

**Civil:** use SOM 15 / RCC 13 / Fluid 11 / Steel 12 / Foundation 10 / Soil 9 with official Q-ranges.

#### Non-core weightage table

| Subject | Required | Actual | Q-range | Status |
|---|---:|---:|---|---|
| Quantitative Aptitude | 8 | … | Q71–Q78 | Pass/Fail |
| General Awareness | 7 | … | Q79–Q85 | Pass/Fail |
| Reasoning | 5 | … | Q86–Q90 | Pass/Fail |
| English | 5 | … | Q91–Q95 | Pass/Fail |
| Computer | 5 | … | Q96–Q100 | Pass/Fail |
| **Non-core total** | **30** | … | | |

#### Weightage rules
- **Exact** required counts — no ±1 drift without written user waiver
- Subject order must match **Official Question Sequence** (no subject block swapped)
- No technical Q placed inside Non-core ranges (and vice versa)
- Intra-subject: questions must belong to that subject’s syllabus (misfiled Q = Fail)
- Sum tech = 70, Non-core = 30, paper = 100

**Gate 1 Pass** only if every row Pass and totals exact.

---

### B. PYQ Themes Coverage Check (Mandatory — Gate 2)

Proves the paper reflects **what APTRANSCO-family exams actually ask**, not only syllabus labels.

Distinct from:
- **Gate 1** (counts/sequence)
- **Audit J** (source of a specific PYQ-derived stem)
- **Audit K** (syllabus micro-topics / over-stack)

#### Theme register (build from uploaded PYQ / heatmap)

For each technical subject, list **high-frequency PYQ themes** (recurring topics across APTRANSCO / GENCO / DISCOM / APPSC AEE family papers). Mark each as **Covered / Deferred / Missing**.

**Electrical example themes (illustrative — expand from your PYQ bank):**

| Subject | High-frequency PYQ themes (examples) | Covered in this FLT | Deferred to later FLT | Missing (no plan) |
|---|---|---|---|---|
| Power Systems | SIL, pu Zbase, Ferranti, string efficiency, faults/symmetrical components, corona/bundling, load flow type, xfmr connections, stability/swing, protection intro | … | … | … |
| Machines | Transformer (equiv/auto/oil), sync machine pf/V-curves, IM slip/torque, parallel alts, starter | … | … | … |
| Circuits | RLC resonance, Thevenin/Norton, 2-wattmeter, mutual M, filters, transients | … | … | … |
| Control | Type/ess, 2nd-order ζ/ωn, Bode/Nyquist/root-locus (rotate across FLTs), block reduction, stability | … | … | … |
| PE | SCR, controlled rectifier, chopper, inverter, drives/thermal | … | … | … |
| Measurements | Bridges, CRO, CT/PT burden, extension, energy/PF meter (rotate) | … | … | … |
| Analog / Digital / Util | Op-amp, diode/Zener, gates/FF, traction/lighting/SEC | … | … | … |

**Civil:** build analogous theme rows (SOM beams/torsion, RCC design clauses, fluid turbines, steel connections, foundation bearing, soil compaction, etc.).

#### PYQ theme rules
- For subjects in this FLT, cover **≥ 60%** of that subject’s **high-frequency** theme list (or justify shortfall)
- Every **Missing** theme must either be **Deferred** (named later FLT) or rewritten into this paper — bare Missing = Fail
- Prefer themes that appear in APTRANSCO-family papers over rare GATE-only research themes
- Covering a theme does **not** require a Direct PYQ — Inspired / AI on that theme counts
- Non-core: at least one classic theme each for Quant, Reasoning, English, Computer; GA must mix ≥3 buckets (see Gate P)
- Across the FLT **series**, the union of Covered themes should approach full high-frequency set (track in a running heatmap)

**Gate 2 Pass** only if no unplanned Missing themes and per-subject coverage ≥ 60% (or waived in writing).

---

### C. Answer Key & Calculation Verification (Mandatory — Gate 5)

Proves the **keyed answer is actually correct** for the stem and that the computed/derived result **matches one of the given options** (not a value that isn’t listed).

This is independent of Distractor Quality (N) and Key Distribution (O): N checks wrong options; O checks letter balance; **C checks that the right option is right**.

#### Per-question verification template

| Q | Type | Work shown? | Computed / derived result | Matches option? | Keyed | Verified key | Status |
|---|---|---|---|---|---|---|---|
| Q2 | Numerical | Y | Zb=484 Ω | Yes → (A) | A | A | Pass |
| Q8 | Numerical | Y | η=… | Yes → (C) | C | C | Pass |
| Q16 | Numerical | Soft | … | Options unresolved | ? | ? | Fail |
| Q70 | Conceptual | Y | Definition SEC | Yes → (A) | A | A | Pass |

#### Verification rules (all must hold)
- **Every Numerical** question: full recalculation from stem data (and diagram-read values if Diagram Q); show formula + arithmetic
- **Computed value must equal** the keyed option (within stated rounding); if result is not among A/B/C/D → **Fail** (fix options or stem)
- **Exactly one** option matches the verified result; if two options both fit → **Fail** (ambiguous key)
- **Conceptual / Standard / AR / Match:** re-derive from syllabus / code / definition; confirm keyed statement is uniquely correct among the four
- **Diagram Qs:** use only data visible after crop + stem; key must match what the figure forces
- **Non-core Quant:** same numerical recalculation rule; GA/English/Computer/Reasoning: fact / logic re-check against a standard source
- **No “Ans A by habit”:** after any option reshuffle (Gate O), **re-run Gate C** on every moved key
- Soft / “lock after crop” / placeholder keys = **Fail** until locked

#### Summary counts (mandatory in approval pack)

| Bucket | Count | Verified Pass | Fail / Soft |
|---|---:|---:|---:|
| Technical numerical | … | … | … |
| Technical non-numerical | … | … | … |
| Non-core | … | … | … |
| **Paper total** | **100** | … | … |

**Gate 5 Pass** only if **100/100** keys verified (0 soft, 0 mismatch, 0 “result not in options”).

---

## Mandatory Pre-Approval Audits (G–O + Non-core)

Audits **G–J** cover originality, APTRANSCO realism, and reuse across the mock series.  
Audits **K–M** cover syllabus coverage, cognitive level, and intra-paper formula/pattern reuse.  
Audits **N–O** cover option quality and answer-key fairness.  
Audit **P** covers Non-core (Quant / GA / Reasoning / English / Computer) in detail.

Together with **Subject Weightage (A)**, **PYQ Themes (B)**, **Answer Verification (C)**, Compliance, Setter Rubric, Human Examiner, Diagram Dependency, and Hard/Application Justification audits, they form the complete QA gate.

### G. Question Origin Audit (Mandatory)

Shows exactly where every question came from.

| Category | Count | % | Status |
|---|---:|---:|---|
| Completely New (AI-created) | XX | XX% | Pass |
| Inspired from textbook concept | XX | XX% | Pass |
| Modified PYQ | XX | XX% | Pass |
| Direct PYQ | XX | XX% | Pass/Reject |
| Modified previous mock | XX | XX% | Review |
| Diagram-derived from core PDF / PYQ figure | XX | XX% | Pass |

#### Origin rules
- Direct PYQs ≤ **2**
- Modified PYQs preferred ≤ **20%** (approval band: see Acceptance Threshold)
- Brand-new questions (Completely New + New Concept + fresh AI-original) ≥ **60%**
- Diagram-derived questions counted and listed (may overlap other origin labels; declare crop source)
- Every Modified PYQ must list its source paper/year/topic

#### Per-question origin example

| Q | Origin |
|---|---|
| Q4 | Modified textbook figure |
| Q12 | AI-generated numerical |
| Q22 | Modified APTRANSCO-family PYQ |
| Q44 | Modified GATE 2022 Bode figure |
| Q61 | Modified GATE Analog Electronics |
| Q69 | Completely new application question |

---

### H. APTRANSCO Similarity Audit (Mandatory)

More useful than only stating “looks like APTRANSCO.” Score each technical subject (and Non-core) with a short reason.

#### Subject-wise similarity (template)

| Subject | Match | Reason |
|---|---:|---|
| Power Systems / SOM (stream) | XX% | … |
| Machines / RCC | XX% | … |
| Circuits / Fluid | XX% | … |
| Control / Steel | XX% | … |
| Power Electronics / Foundation | XX% | … |
| Measurements / Soil | XX% | … |
| Analog / … | XX% | … |
| Digital / … | XX% | … |
| Utilization / … | XX% | … |
| Non-core | XX% | … |

**Overall Similarity:** ≈ **XX% APTRANSCO** (target ≥ **90%**)

#### Why it matches APTRANSCO (examples — adapt per paper)
- Short one-step and moderate multi-step calculations
- Practical / site / substation or field engineering flavour
- Correct subject-weight emphasis (e.g. Power Systems–heavy for EE)
- More application than long derivation
- Limited calculus / research-style proofs
- Moderate formula depth
- Mostly textbook-standard numericals at AEE level
- CBT-style options and distractors
- No unnecessary theory paragraphs

#### Differences from APTRANSCO (must list honestly)
- e.g. Slightly more Control / PE / Digital than older papers — flag and justify or rebalance

---

### I. Duplicate Audit (Mandatory)

Essential for a mock series. Compare the draft against:

- FLT-01, FLT-02, FLT-03, … (all prior FLTs in stream)
- Subject Tests and Mini Tests already published
- Collected PYQ bank / diagram banks used in prior mocks

#### Duplicate summary

| Duplicate Type | Count | Status |
|---|---:|---|
| Exact duplicate | X | Pass if 0 |
| Same numerical, different values | X | Pass / Review |
| Same concept, rewritten | X | Pass if ≤10% of paper |
| Same diagram reused | X | Review |
| Same options reused | X | Review |

#### Duplicate detail (template)

| Current Q | Previous Paper | Duplicate Level | Action |
|---|---|---|---|
| Q22 | Mock-02 Q17 | Same concept | Accept / Rewrite |
| Q44 | GATE PYQ | Modified | Accept |
| Q61 | Analog ST-03 | Similar diagram | Review |
| Q69 | None | Original | Pass |

#### Originality score

| Metric | Score |
|---|---:|
| Completely Original | XX% |
| Modified Existing | XX% |
| Inspired | XX% |
| Direct Copy | XX% |

**Final originality bands**
- **95–100%** → Excellent
- **90–94%** → Very Good
- **80–89%** → Needs Review
- **<80%** → Rework Required

Target for APPROVED: overall originality ≥ **90%**.

---

### J. PYQ Traceability Audit (Mandatory)

Every PYQ-derived question must be traceable.

| Q | Source | Modification Level |
|---|---|---|
| Q22 | APTRANSCO-family | Diagram / values / stem changed |
| Q44 | GATE 2022 | Modified options and context |
| Q61 | GATE Analog | New numerical values |
| Q65 | Textbook gate symbols | Newly written matching |

#### Traceability summary
- Direct PYQs: X
- Modified PYQs: X
- Inspired questions: X
- AI-original / completely new questions: X

---

### K. Concept Coverage Audit (Mandatory)

Ensures the paper covers the official APTRANSCO syllabus micro-topics for the stream **without holes** and **without stacking the same concept** three times.

#### Per-subject coverage table (template)

| Subject | Must-cover micro-topics (from syllabus / heatmap) | Covered in this FLT | Missing | Over-stacked (≥3 Qs same concept) |
|---|---|---|---|---|
| … | … | Q… | … | … |

#### Coverage rules
- Every **must-cover** micro-topic for subjects present in the FLT appears at least once (or is explicitly deferred with user approval for a later FLT)
- No single engineering concept appears in **> 2** technical questions in the same paper (prefer 1)
- Diagram questions must map to a named concept (not decorative)
- Non-core: Quant / GA / Reasoning / English / Computer each hit distinct topic types (no five identical synonym items)

**Pass** only if missing must-cover = 0 (or waived in writing) and over-stack count = 0.

---

### L. Bloom’s Taxonomy Audit (Mandatory)

Checks cognitive level mix for AEE CBT realism (not school recall dominance).

| Bloom level | Typical use in AEE CBT | Target share of technical (guide) |
|---|---|---|
| Remember | Definitions, pure recall | **≤ 15%** |
| Understand | Explain / identify / interpret | 15–25% |
| Apply | Formula use, procedure, code application | **35–45%** |
| Analyze | Multi-step, diagram read, compare modes | **25–35%** |
| Evaluate | Choose best method / site decision | 5–10% |
| Create | Design-from-scratch (rare in CBT) | ≤ 5% |

#### Bloom rules
- **Remember ≤ 15%** of technical questions (aligns with “no direct recall dominance”)
- **Apply + Analyze ≥ 60%** of technical questions
- Every **Hard** question must be Analyze and/or Evaluate (not Remember)
- Every **Application** / **Practical** tagged question must be Apply or Evaluate (Stage 8–9 gates)

#### Mandatory: Bloom by subject (not only paper totals)

Report Apply / Analyze (and Remember if high) **per technical subject** so one subject cannot hide recall-heavy items behind a healthy overall mix:

| Subject | Remember | Understand | Apply | Analyze | Evaluate | Status |
|---|---:|---:|---:|---:|---:|---|
| e.g. Power Systems | … | … | … | … | … | Pass/Fail |
| e.g. Machines | … | … | … | … | … | Pass/Fail |

**By-subject Fail** if any technical subject with ≥ 4 Qs has Remember > 30% of that subject’s Qs, or Apply+Analyze < 50% of that subject’s Qs.

Report: overall counts + by-subject table + list any Hard/Application Qs that fail Bloom alignment.

---

### M. Formula Reuse Audit (Mandatory)

Prevents the same formula or numerical template from dominating the paper.

#### Formula / pattern register (template)

| Formula or pattern | Questions using it | Count | Status |
|---|---|---:|---|
| e.g. Zb = kV²/MVA | Q2 | 1 | Pass |
| e.g. Vo = δ Vs (buck) | Q50 | 1 | Pass |
| e.g. P∝V² | Q68 | 1 | Pass |

#### Formula reuse rules
- Same **core formula** (identical engineering relation) in **> 2** technical questions → **Fail** (rewrite one)
- Same **numerical template** (same steps, only numbers changed) in **> 1** pair → **Fail**
- Acceptable: related but distinct uses (e.g. X1 vs fault current both use reactance, different procedure)
- Distractors may reuse wrong-formula traps; that does **not** count as stem formula reuse

**Pass** only if no formula exceeds 2 uses and no clone numerical templates remain.

---

### N. Distractor Quality Audit (Mandatory)

Reviews **every incorrect option**, not only the keyed answer. Often improves paper quality more than adding new stems.

#### Per-question template

| Q | Good distractors? | Notes |
|---|---|---|
| Q2 | ✓ | Common calculation mistakes |
| Q8 | ✓ | Typical misconceptions |
| Q16 | ✗ | One option physically impossible |
| Q49 | ✗ | Two options obviously unrealistic |

#### Distractor rules (all must hold)
- **No joke / absurd options** (nonsense units, cartoon values)
- **No obviously impossible** values when the stem implies a physical range
- Every distractor reflects a **plausible student mistake** (wrong formula, sign error, omitted √3, wrong code clause, etc.)
- **No duplicate distractors** (two options that are the same after rounding / synonym)
- **Exactly one** unambiguously correct answer
- Numerical options: wrong answers should land near common error paths, not random far-off numbers
- Verbal options: each wrong choice maps to a known misconception; not three synonyms of “none”

**Pass** only if ≥ **95%** of questions have all three distractors rated Good; any Fail items listed for rewrite before APPROVED.

---

### O. Answer Key Distribution Audit (Mandatory)

Ensures the answer key is fair and not pattern-guessable.

#### Distribution table (template)

| Option | Count | % of paper |
|---|---:|---:|
| A | XX | XX% |
| B | XX | XX% |
| C | XX | XX% |
| D | XX | XX% |

#### Key distribution rules
- Each of A/B/C/D ideally **22–28%** of the paper (100-Q paper: about **22–28** each)
- **Hard Fail** if any option is **> 35%** or **< 15%** of the paper
- **No run** of the **same letter ≥ 5** consecutive answers (e.g. A,A,A,A,A)
- Prefer no run ≥ 4; flag runs of 4 for optional reshuffle
- Within each Non-core block, avoid all answers clustering on one letter

**Pass** if distribution within bands and no run ≥ 5.

---

### P. Non-core Subject Gates (Mandatory — detailed)

Non-core is **10 marks** but often the approval blocker (exact clones across streams, weak English, trivial Computer). Every FLT must pass **all five** subject gates below **in addition to** Duplicate Audit I.

#### P0 — Non-core common rules (all five subjects)

| Check | Rule | Fail if |
|---|---|---|
| Count & order | Exact syllabus counts; order Quant → GA → Reasoning → English → Computer | Wrong count/order |
| Difficulty | Mix Easy/Medium; at most **1 Hard** in Non-core total | ≥2 Hard or all Easy |
| Originality | No exact clone of Civil↔Electrical Non-core or prior FLT Non-core | Exact/near-exact stem+options |
| Distractors | Same Distractor Audit N rules | Joke / impossible / duplicate options |
| One key | Unambiguous single correct answer | Two defendable keys |
| APTRANSCO tone | Short, exam-like; no essay stems | Paragraph-length stems |
| No tech bleed | Non-core must not require EE/CE core knowledge | Needs engineering syllabus |
| Freshness | Prefer ≥ **70%** Non-core brand-new vs other published mocks | Heavy reuse |

---

#### P1 — Quantitative Aptitude Gate

| Check | Detail |
|---|---|
| Topic spread | Distinct topics across Qs (e.g. %, ratio, time-work, SI/CI, averages, speed-distance, profit-loss, number system) — **no two Qs same micro-topic** in one FLT |
| Calculation load | Solvable in ≤ 90 s; one or two steps preferred |
| Numbers | Clean integers / standard fractions; avoid calculator-only decimals unless intentional |
| Options | Equally spaced or error-path based; no “all of these” unless carefully keyed |
| Traps | Include classic traps (forgot % of %, wrong base, LCM slip) as distractors |
| Level | SSC/banking AEE Non-core level — not CAT extreme |

**Pass:** topic uniqueness + timeable + Distractor N Pass for all Quant Qs.

---

#### P2 — General Awareness / Current Affairs Gate

| Check | Detail |
|---|---|
| Recency | Prefer facts stable for exam window; if CA, state year/context in audit notes |
| Verifiability | Every keyed fact must be checkable from a standard source |
| No controversy | Avoid unsettled politics / disputed claims |
| Utility mix | AP/India polity, geography, economy, science, awards, sports — **not five polity Qs** |
| Ambiguity | No “best known for” without a clear unique answer |
| Currency | Units and official names current (ministry renames, state capitals) |

**Pass:** all keys verified; topic diversity ≥ 3 buckets; zero ambiguous keys.

---

#### P3 — Reasoning Gate

| Check | Detail |
|---|---|
| Type mix | Across FLTs rotate: series, coding-decoding, blood relation, direction, syllogism, seating, analogy, odd-one — **this FLT: no two identical reasoning templates** |
| Diagram independence | Prefer text-only for Non-core; if figure used, apply Diagram Dependency PASS/STRONG |
| Ambiguity | Syllogism / seating must have unique conclusion under standard exam conventions |
| Language | Clear premises; no cultural knowledge required |
| Difficulty | Medium preferred; Hard only if multi-step but still ≤ 90 s |

**Pass:** unique templates in-paper; unique key; no cultural bias.

---

#### P4 — English Gate

| Check | Detail |
|---|---|
| Skill mix | Across English Qs in this FLT: different skills (synonym, antonym, one-word, error spotting, idiom, fill-blank, etc.) — **not multiple synonym-only items** |
| Dictionary sense | Keyed meaning must match standard usage for the stem context |
| Distractors | Near-synonyms that fail in context; not random unrelated words |
| No obsolete slang | Prefer formal/exam English |
| Cross-stream | **Must not** reuse Civil FLT English stems/options on Electrical (and vice versa) |
| Spelling | Stem and options free of typos that create a second “correct” reading |

**Pass:** distinct skills; verified key; zero cross-stream clones.

---

#### P5 — Computer Awareness Gate

| Check | Detail |
|---|---|
| Topic mix | Across Computer Qs in this FLT: distinct areas (e.g. hardware, OS, MS Office, networking, internet, cybersecurity, shortcuts, file types) — **no duplicate micro-topic** |
| Currency | Prefer still-true facts (USB, HTTP/HTTPS, RAM/ROM, phishing) over obsolete pack names unless classic |
| Depth | Awareness level — not programming / GATE CSE |
| Distractors | Plausible tech confusions (RAM vs ROM, HTTP vs HTTPS, phishing vs spam) |
| Cross-stream | **Must not** clone Civil↔Electrical Computer Qs |
| No vendor trivia | Avoid obscure product version numbers unless widely taught |

**Pass:** distinct topics; awareness-level; zero cross-stream clones.

---

#### Non-core gate summary table (mandatory in every approval pack)

| Subject | Qs | Topic uniqueness | Cross-stream clone? | Distractors | Key unique? | Gate |
|---|---|---|---|---|---|---|
| Quant | … | Pass/Fail | Y/N | Pass/Fail | Y/N | Pass/Fail |
| GA | … | Pass/Fail | Y/N | Pass/Fail | Y/N | Pass/Fail |
| Reasoning | … | Pass/Fail | Y/N | Pass/Fail | Y/N | Pass/Fail |
| English | … | Pass/Fail | Y/N | Pass/Fail | Y/N | Pass/Fail |
| Computer | … | Pass/Fail | Y/N | Pass/Fail | Y/N | Pass/Fail |

**Overall Non-core Gate P:** Pass only if **all five** subject rows Pass.

---

### Recommended Acceptance Threshold (Mandatory for APPROVED)

Before any paper is **APPROVED** (and before code / CBT packaging), **all Final Approval Workflow gates** must Pass, including:

| Gate | Requirement |
|---|---|
| Subject weightage (Gate A) | Exact subject counts + official sequence |
| PYQ themes (Gate B) | ≥60% high-frequency themes/subject; no unplanned Missing |
| Answer verification (Gate C) | **100/100** keys reworked; result matches exactly one given option |
| Original / brand-new questions | **≥ 60%** |
| Modified PYQs | **20–35%** (prefer closer to 20% when possible) |
| Direct PYQs | **≤ 2 questions** |
| Exact duplicates vs earlier mocks | **0** |
| Repeated concepts vs earlier mocks | **≤ 10%** |
| APTRANSCO similarity (overall) | **≥ 90%** |
| Diagram-dependent questions | **12–15** meeting Subject-wise Diagram Quota; Professional Quality Bar; Medium ≥60%, Easy ≤15% / max 2 |
| Diagram source honesty | EE: ≥50% `diagramSource=pyq`; CE: core-first (no AI SVG when core/PYQ exists); every figure tightly cropped |
| Diagram gap handling | If quotas/quality thin → documented full re-scan of all sources before any schematic filler |
| Difficulty calibration | Labels match true AEE feel (Bias Correction); not 1–2 levels soft vs claimed Easy/Medium/Hard |
| Graph with real curve image | ≥1 Graph/Curve Q with attached cropped curve (not stem-only) |
| Practical questions | **≥5** practically able field/substation decisions; ≤1 Easy among them |
| Overall originality (Audit I) | **≥ 90%** |
| Concept coverage (Audit K) | Missing must-cover = 0; over-stack = 0 |
| Bloom mix (Audit L) | Remember ≤15% tech; Apply+Analyze ≥60% tech; by-subject rules |
| Formula reuse (Audit M) | No formula in >2 tech Qs; no clone templates |
| Distractor quality (Audit N) | ≥95% Qs with all distractors Good |
| Key distribution (Audit O) | Each letter ~22–28%; no same-letter run ≥5 |
| Non-core (Audit P) | All five subject gates Pass; zero Civil↔EE Non-core clones |
| Matching Matrix CBT | Every Matching / Matching+Diagram Q has `matchingMatrix` and site renders List-I / List-II as HTML tables |
| Table CBT | Every Table / Table-Based Q has `dataTable` and site renders a real HTML `<table>` (not markdown-only stem) |
| Explanation depth | Every Q meets Detailed Explanation Standard (WHY + CALC if needed + exam-level traps + topic high-yield); no one-liner keys |

**Fail any gate → paper cannot be marked APPROVED.** Fix via MODIFY / rewrite, re-run Human Examiner if needed, then re-run failed audits.

> Packaging note: Civil/Electrical FLT-01 banks were upgraded to this Explanation Standard in-place (average explanation length ≫ 1000 characters). EE FLT-01 Q21 options/key corrected so CALCULATION matches |Ef|≈1.79 → **1.8 pu** (with **1.6 = Re(Ef)** as the classic trap).

---

### Approval sequence (locked)

```
1  A Subject Weightage Coverage Check
2  B PYQ Themes Coverage Check
3  Compliance Dashboard (difficulty / patterns / Direct-PYQ)
4  Setter Rubric (no self-ACCEPT)
5  C Answer Key & Calculation Verification (100/100; result ∈ options)
6  Human Examiner Pass
7  Diagram Dependency Audit (PASS / STRONG / WEAK / FAIL)
8  Hard / Application Justification Audit
9  G Question Origin
10 H APTRANSCO Similarity
11 I Duplicate Analysis
12 J PYQ Traceability
13 K Concept Coverage
14 L Bloom’s Taxonomy (overall + by subject)
15 M Formula Reuse
16 N Distractor Quality Audit
17 O Answer Key Distribution Audit
18 P Non-core Subject Gates (Quant / GA / Reasoning / English / Computer)
   → Acceptance Threshold all Pass
   → User APPROVED / MODIFY / REJECT
   → Code + crops only after APPROVED
```
