# MASTER_RULES

This document is the highest authority for the APTRANSCO CBT project.
All implementation and question generation must strictly follow these rules.

## Primary Aim — APTRANSCO Level Match (Non-Negotiable)

The main aim of every FLT is to **match the real APTRANSCO AEE CBT level** with **high efficiency and high quality**.

This overrides “filler”, textbook-LKG, or template-style questions.

### What “APTRANSCO level” means
- Style and depth similar to **APTRANSCO / APPSC AEE / APGENCO / TSTRANSCO** technical papers
- Prefer **application, design judgement, numerical multi-step, diagram-dependent, and site/practical** questions over definition recall
- Difficulty feel: mostly **Medium**, with controlled Hard; Easy capped at **25% only**
- A serious AEE aspirant should find the paper **exam-like**, not coaching-drill easy and not GATE-research hard

### High-efficiency generation rules
1. One concept → one question (no duplicate concepts in the same paper)
2. Every numerical must be dual-method verified before inclusion
3. Every diagram question must use a **cropped relevant figure** from approved sources (civil-core / PYQ / question banks) — never paste a full page in the CBT
4. Reject any question that fails the scored Quality Rubric (total < 9/10) or a separate Human Examiner REJECT
5. Do not inflate Easy count to “fill” the paper
6. The question setter must NEVER self-assign ACCEPT. ACCEPT / MODIFY / REJECT is allowed only in a separate Human Examiner pass

### High-quality bar (paper is publishable only if)
- Weightage + sequence exact
- Pattern mix meets mandatory types
- Diagrams are essential and cropped correctly
- Distractors are real engineering mistakes
- Explanations are complete (why correct + why each wrong + formula/steps)
- Overall paper would pass a senior APTRANSCO examiner review

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
- Match-the-Following / Matching Matrix Questions
- Table-Based Questions
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
- **1 Graph/Curve interpretation question** (candidate reads a plotted curve)
- **4 Assertion–Reason questions** (distributed across subjects)
- **4 IS Code / Standard value questions** (see policy below)

### Duplicate Control
- Maintain a global registry of every generated question.
- Reject identical or near-identical questions.
- Avoid duplicate concepts, formulas, numerical patterns, diagrams, and answer patterns.

### Diagram Rules
- Search uploaded source files first.
- Use original diagrams when available.
- Only generate simple engineering schematics when necessary.
- Use standard engineering symbols and labels.

### Solution & Review Rules
- Provide detailed solutions for every question.
- Include correct option, reason, formula, calculation steps, and common mistake discussion.
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
- Duplicate validation
- Diagram validation
- Source validation
- Detailed solutions generated

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

### Practical Questions (5)
Site-oriented: Concrete placement, Compaction, Inspection, Construction sequencing, Maintenance, Failures.

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

### Graph / Curve Questions (3–4)
Include: Stress-strain curve, Compaction curve, Consolidation curve, Flow curve.
At least **1 graph/curve question is mandatory per paper** (see Mandatory Per-Paper Requirements above).

### Matching Matrix Questions (≥1 per paper)
Each paper must have at least one question where the candidate matches a **Column A** list to a **Column B** list.
Format: Four items in Column A, four in Column B (or similar), question asks for the correct combination.
Use for: Turbine types vs head/flow, Footing types vs condition, Soil tests vs parameters, Logic gates vs truth tables.

### Table-Based Questions (≥1 per paper)
At least one question must provide a **data table** (not just a text list) that the candidate must read to answer.
Use for: Comparative properties, Code design values, SPT vs density correlation, Efficiency vs load data, Test results table.

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

### Golden Rule 4 – Hard Question Depth
Every hard question must require **at least two engineering concepts** or **multiple solution steps**.

### Golden Rule 5 – APTRANSCO Level Gate
Before accepting any question, ask:
> “Would this appear in a real APTRANSCO AEE CBT, and would a prepared AEE candidate need real engineering skill to solve it?”

If No → reject or rewrite.  
Definition-only, nursery-level arithmetic, or decorative diagrams fail this gate automatically.

### Paper Quality Scoring Weights
| Dimension                       | Weight |
|----------------------------------|--------|
| Numerical quality               | 30%    |
| Conceptual quality              | 20%    |
| Diagram / Figure integration    | 20%    |
| Application & Practical         | 15%    |
| Difficulty calibration          | 10%    |
| IS Code and standards           | 5%     |

---

## Diagram Selection & Validation Rules (HIGHEST PRIORITY)

Diagram-based questions are a core part of the CBT.
Use diagrams **only when they directly help solve the question**.

### Mandatory Selection Criteria
A diagram may be used ONLY if ALL of the following are true:
- It represents the exact engineering concept being tested.
- It belongs to the correct engineering subject.
- It is clear, complete, and readable.
- All symbols, dimensions, labels, arrows, values, supports, terminals, or components are visible.
- It improves the quality of the question.
- The question and options correspond directly to the diagram.

### Reject These Images — Never Use:
- Book covers, chapter titles, headers, footers
- Logos, watermarks, QR codes, page numbers
- Decorative icons, screenshots
- Paragraphs converted to images
- Tables (unless the question requires table interpretation)
- Cropped or incomplete diagrams
- Duplicate diagrams
- Blurry images
- Images unrelated to the question
- Images from another engineering subject

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

### Diagram Matching Procedure
Before attaching any diagram:
1. Identify the engineering concept being tested.
2. Search only diagrams related to that concept.
3. Match the question and diagram exactly.
4. Verify all labels and symbols.
5. Reject partial or ambiguous figures.
6. Prefer textbook-quality engineering diagrams.
7. If no suitable diagram exists, generate the question as text-only.

### Diagram Source Priority
When multiple diagrams exist for the same concept:
1. Previous APTRANSCO / APPSC AEE papers
2. SSC JE / RRB JE papers
3. GATE papers
4. Standard engineering textbooks
5. Clean black-and-white line diagrams with standard engineering symbols

Never prefer AI-generated or decorative illustrations over the above sources.

### Diagram Final Validation Checklist
Approve a diagram only if ALL of the following pass:
- ✓ Correct subject
- ✓ Correct topic
- ✓ Clear and readable
- ✓ Complete figure (nothing cropped)
- ✓ Relevant to the question
- ✓ Options depend on the diagram
- ✓ No unnecessary graphics
- ✓ No screenshots or decorative images
- ✓ Engineering value is high

If any check fails → reject the image and generate a text-only question.

---

## Question Validation Pipeline (Mandatory for Every Question)

Every generated question must pass ALL stages before acceptance. Rejection at any stage = question is discarded and rewritten.

```
Stage 1 — Subject Validation
  Is the concept within the official APTRANSCO syllabus for this subject?
  Does it belong to the correct sequence slot?

Stage 2 — Difficulty Validation (Difficulty Engine)
  Hard   → must satisfy ≥ 2 of: diagram, multi-step numerical, IS code application,
             engineering judgement, two-concept intersection, application design
  Medium → satisfies 1 of the above
  Easy   → direct single-step application or well-known formula
  Self-declaration ("Hard") without satisfying criteria → downgrade automatically.

Stage 3 — Pattern Validation
  Confirm the stated pattern (Numerical/Diagram/Conceptual/etc.) is genuine.
  A question claiming "Diagram" without a valid image path is REJECTED.
  A question claiming "Application" that only asks for recall is REJECTED.

Stage 4 — Diagram Validation (10-Point Check)
  ✓ Diagram exists at the declared file path
  ✓ Diagram is correct engineering type (not screenshot/logo/header)
  ✓ Diagram is readable and complete — no cropping
  ✓ All labels, dimensions, arrows, values visible
  ✓ Question CANNOT be solved without the diagram
  ✓ All options depend on reading the diagram
  ✓ Correct subject match
  ✓ No watermarks, page numbers, or decorative elements
  ✓ Diagram is from approved source (textbook / past paper)
  ✓ Engineering value is high
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

Stage 7 — Explanation Verification
  The explanation must include ALL four:
  (a) Why the correct answer is right (engineering reason)
  (b) Why each wrong option is wrong (specific error it represents)
  (c) Formula / engineering concept used
  (d) Calculation steps (for numerical questions)
  Missing any element → reject.

Stage 8 — Practical Question Gate
  A question claiming "Practical/Site Engineering" MUST involve one of:
  site inspection | construction execution | maintenance | troubleshooting |
  failure investigation | field decision making
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

For every question tagged Diagram / Figure / Graph-with-figure:

```
Diagram dependency check:
- Image path + crop region:
- Without diagram, can a well-prepared candidate still pick the correct option? YES/NO
- If YES → FAIL. Remove diagram tag or rewrite so options require the figure.
- If NO → PASS (options depend on reading labels/geometry/curves in the crop)
```

A Diagram question is **invalid** unless the dependency check result is **NO** (cannot answer correctly without the diagram).

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
- Is the engineering concept correct?
- Is the answer unquestionably correct?
- Is Easy/Medium/Hard label justified (and Hard/Application justifications present if claimed)?
- For diagram Qs: does Diagram dependency check truly pass (cannot solve without figure)?
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

No paper may contain more than 2 Direct PYQs. Modified + Inspired combined must not exceed 40% of technical questions.
