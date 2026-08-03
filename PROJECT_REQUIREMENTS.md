# APTRANSCO CBT Portal – Master Project Specification

## Objective
Develop a **professional offline/online Computer Based Test (CBT) portal** for APTRANSCO AEE mock examinations.

The portal should closely resemble modern CBT platforms such as **TCS iON, APPSC, SSC, RRB, and GATE**.

The application must be developed using only:

- HTML5
- CSS3
- Vanilla JavaScript
No frameworks.

No backend.

No database.

No login.

No internet dependency except when hosted.

---

# General Requirements
The project must:

- be fully responsive
- work on desktop, laptop, tablet and mobile
- run by simply opening index.html
- also work perfectly when hosted on GitHub Pages
- contain clean modular code
- avoid inline CSS
- avoid inline JavaScript
- use semantic HTML
- use modern CSS
- use ES6 JavaScript
- separate HTML, CSS and JavaScript

---

# Folder Structure

```
APTRANSCO-CBT/

index.html

instructions.html

exam.html

result.html

css/
    style.css
    exam.css

js/
    app.js
    timer.js
    navigation.js
    palette.js
    scoring.js

data/
    flt01.js
    flt02.js
    ...
    flt10.js

images/

assets/

README.md
```

---

# Home Page
Display

```
APTRANSCO AEE

FULL LENGTH MOCK TESTS

FLT-01

FLT-02

FLT-03

...

FLT-10

Start Test
```
Each mock card should show

- mock number
- questions
- marks
- duration

---

# Instructions Page
Display

- exam duration
- number of questions
- marks
- negative marking
- navigation instructions
- colour legend
- declaration checkbox
- Start Exam button

---

# CBT Interface
The exam page must resemble TCS iON.

Layout

```
--------------------------------------------------

Candidate Info

Timer

--------------------------------------------------

Question Area

Diagram

Options

--------------------------------------------------

Previous

Save & Next

Mark for Review

Clear Response

--------------------------------------------------

Question Palette

--------------------------------------------------
```

---

# Timer
120-minute countdown

Display

```
01:59:59
```
When timer reaches zero

Auto submit.

---

# Question Palette
Question buttons

```
01
02
03
...
100
```
Colours

Green

Answered

Blue

Current Question

Yellow

Marked for Review

White

Not Answered

Clickable

User can jump to any question.

---

# Navigation Buttons
Previous

Next

Save & Next

Mark for Review & Next

Clear Response

Submit

All buttons must behave exactly like CBT exams.

---

# Questions
Support

Single Correct MCQs

Numerical

Assertion Reason

Match the Following

Image Questions

Table Questions

Diagram Questions

---

# Diagrams
Diagrams should

fit inside question card

maintain aspect ratio

never overflow

be zoomable on click

lazy load

responsive

---

# Images
Maximum width

100%

Maximum height

400px

Object fit

contain

---

# Mathematical Symbols
Support

Ω

μ

π

α

β

γ

√

∑

Superscript

Subscript

---

# Tables
Responsive

Scrollable on mobile

Proper borders

Alternate row colours

---

# Question Card
Modern design

Rounded corners

Shadow

Good spacing

Readable font

---

# Typography
Font

Segoe UI

Fallback

Arial

Sans Serif

Question size

20px

Option size

18px

---

# Colours
White background

Blue header

Green answered

Yellow review

Grey buttons

Professional colour palette

No bright colours

---

# Result Page
Display

Total Questions

Attempted

Not Attempted

Correct

Wrong

Score

Percentage

Time Taken

---

# Review Mode
After submission

User can

see

question

chosen answer

correct answer

explanation

---

# Data Structure
Questions should come from JavaScript files.

Example

```
const questions = [

{

id:1,

subject:"Electrical Circuits",

question:"....",

image:"",

options:[

"A",

"B",

"C",

"D"

],

answer:1,

explanation:"..."

}

];
```

---

# Performance
Fast loading

No page refresh during exam

No lag

Lazy load images

Efficient DOM updates

---

# Responsive Design
Desktop

Laptop

Tablet

Mobile

Portrait

Landscape

---

# Browser Support
Chrome

Edge

Firefox

Brave

---

# Accessibility
Keyboard navigation

Focus indicators

Readable contrast

Large buttons

---

# Code Quality
Use

functions

modules

constants

avoid duplicate code

use comments

meaningful variable names

---

# Future Ready
Design the architecture so that

additional FLTs

additional subjects

additional images

additional question types

can be added without modifying the CBT engine.

---

## My recommendation
Don't ask Copilot to "build the whole CBT portal."

Instead, work in phases:

1. Project structure
2. Home page
3. Instructions page
4. CBT layout
5. Question loading
6. Timer
7. Question palette
8. Navigation
9. Scoring
10. Result page
11. Diagram/image handling
12. Final polishing
This produces much cleaner code and makes debugging far easier. I can also act as your code reviewer after each phase and suggest improvements before you move to the next one.