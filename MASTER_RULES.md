# MASTER_RULES

This document is the highest authority for the APTRANSCO CBT project.
All implementation and question generation must strictly follow these rules.

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
- Easy: 30–35%
- Medium: 45–50%
- Hard: 20–25%

### Question Type Distribution
- Conceptual Questions
- Numerical Questions
- Formula-Based Questions
- Practical Engineering Questions
- Statement-Based Questions
- Diagram-Based Questions
- Assertion & Reason Questions
- Match-the-Following (where applicable)

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
