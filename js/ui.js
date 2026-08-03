import { appState } from './storage.js';
import { qs, clearElement, createElement } from './utils.js';
import { renderDiagram } from './diagram.js';
import { renderPalette, updatePalette } from './palette.js';
import { getCurrentQuestion, saveCurrentAnswer, buildResultSummary } from './result.js';

export const switchPage = (pageId) => {
    const pageIds = ['homePage', 'instructionPage', 'examPage', 'resultPage'];
    pageIds.forEach((id) => {
        const element = qs(`#${id}`);
        if (element) {
            element.hidden = id !== pageId;
            element.style.display = id === pageId ? 'block' : 'none';
        }
    });
    appState.currentPage = pageId;
    const shell = qs('.page-shell');
    if (shell) {
        shell.classList.toggle('exam-shell', pageId === 'examPage');
    }
};

export const populateHomePage = (mockList) => {
    const container = qs('#mockGrid');
    if (!container) return;
    clearElement(container);

    mockList.forEach((mock) => {
        const card = createElement('article', { className: 'mock-card' });
        card.innerHTML = `
            <div class="mock-card-header">
                <span class="mock-title">${mock.title}</span>
                <span class="mock-meta">${mock.questions} Questions</span>
            </div>
            <div class="mock-card-body">
                <p class="mock-category">${mock.category}</p>
                <p>Marks: ${mock.marks}</p>
                <p>Duration: ${mock.duration} minutes</p>
            </div>
            <button class="button button-primary start-test-button" type="button" data-flt="${mock.id}">Start Test</button>
        `;
        card.querySelector('.start-test-button')?.addEventListener('click', () => {
            appState.selectedFlt = mock.id;
            appState.selectedTest = mock;
            window.dispatchEvent(new CustomEvent('startInstructions'));
        });
        container.appendChild(card);
    });
};

export const populateInstructionsPage = () => {
    const duration = qs('#instructionDuration');
    const questions = qs('#instructionQuestions');
    const marks = qs('#instructionMarks');
    const negative = qs('#instructionNegative');
    const selected = appState.selectedTest || { duration: 180, questions: 100, marks: 100 };
    if (duration) duration.textContent = `${selected.duration} minutes`;
    if (questions) questions.textContent = `${selected.questions} questions`;
    if (marks) marks.textContent = `${selected.marks} marks`;
    if (negative) negative.textContent = 'No negative marking';
};

export const bindInstructionActions = () => {
    const declarationCheckbox = qs('#declaration');
    const startButton = qs('#startExamButton');
    declarationCheckbox?.addEventListener('change', () => {
        if (startButton) startButton.disabled = !declarationCheckbox.checked;
    });
    startButton?.addEventListener('click', () => {
        window.dispatchEvent(new Event('startExam'));
    });
};

export const renderQuestionPage = () => {
    const question = getCurrentQuestion();
    if (!question) return;

    qs('#questionStatus').textContent = `Question ${appState.currentQuestionIndex + 1} of ${appState.questions.length}`;
    qs('#questionSubject').textContent = `${question.subject}${question.topic ? ` • ${question.topic}` : ''}`;
    qs('#questionText').textContent = question.question;
    renderDiagram(qs('#questionMedia'), question.image);

    const optionsList = qs('#optionsList');
    clearElement(optionsList);
    question.options.forEach((option, optionIndex) => {
        const optionId = `option-${optionIndex}`;
        const optionItem = createElement('label', { className: 'option-item', attributes: { for: optionId } });
        optionItem.innerHTML = `
            <input type="radio" name="answer" id="${optionId}" value="${optionIndex}" />
            <div class="option-label">
                <span class="option-text">${option}</span>
            </div>
        `;
        const input = optionItem.querySelector('input');
        if (input) {
            input.checked = appState.answers[appState.currentQuestionIndex] === optionIndex;
            input.addEventListener('click', (event) => {
                event.stopPropagation();
            });
            input.addEventListener('change', (event) => {
                event.stopPropagation();
                saveCurrentAnswer();
                updatePalette();
            });
        }
        optionItem.addEventListener('click', (event) => {
            event.stopPropagation();
        });
        optionsList.appendChild(optionItem);
    });

    renderPalette();
};

export const showSubmitModal = () => {
    const summary = buildResultSummary();
    const answeredAndReview = appState.questions.reduce((count, _, index) => {
        const answered = appState.answers[index] !== undefined;
        const review = Boolean(appState.reviewFlags[index]);
        return count + (answered && review ? 1 : 0);
    }, 0);
    const reviewOnly = Math.max(0, summary.reviewCount - answeredAndReview);

    const modal = createElement('div', { className: 'submit-overlay' });
    modal.innerHTML = `
        <div class="submit-card">
            <h2>Submit Exam</h2>
            <p class="submit-text">Review your attempt summary (TCS iON style):</p>
            <div class="submit-grid">
                <div class="submit-stat">
                    <div class="stat-left"><i class="stat-dot answered"></i> Answered</div>
                    <span>${summary.answeredCount}</span>
                </div>
                <div class="submit-stat">
                    <div class="stat-left"><i class="stat-dot unanswered"></i> Not Answered</div>
                    <span>${summary.notAnsweredCount}</span>
                </div>
                <div class="submit-stat">
                    <div class="stat-left"><i class="stat-dot review"></i> Marked for Review</div>
                    <span>${summary.reviewCount}</span>
                </div>
                <div class="submit-stat">
                    <div class="stat-left"><i class="stat-dot answered-review"></i> Answered + Review</div>
                    <span>${answeredAndReview}</span>
                </div>
            </div>
            <p class="submit-warning">Not answered: ${summary.notAnsweredCount} · Review only (no answer): ${reviewOnly}. Submit now?</p>
            <div class="submit-actions">
                <button class="button button-secondary" id="cancelSubmit" type="button">Cancel</button>
                <button class="button button-primary" id="confirmSubmit" type="button">Submit</button>
            </div>
        </div>
    `;

    modal.querySelector('#cancelSubmit')?.addEventListener('click', () => document.body.removeChild(modal));
    modal.querySelector('#confirmSubmit')?.addEventListener('click', () => {
        document.body.removeChild(modal);
        window.dispatchEvent(new Event('confirmSubmit'));
    });
    document.body.appendChild(modal);
};

export const populateResultPage = () => {
    const summary = buildResultSummary();
    qs('#totalQuestions').textContent = summary.totalQuestions;
    qs('#attemptedQuestions').textContent = summary.answeredCount;
    qs('#notAttemptedQuestions').textContent = summary.notAnsweredCount;
    qs('#correctAnswers').textContent = summary.correctCount;
    qs('#wrongAnswers').textContent = summary.wrongCount;
    qs('#finalScore').textContent = summary.score;
    qs('#percentageScore').textContent = summary.percentage;
    qs('#timeTaken').textContent = `Time Taken: ${summary.timeTaken}`;
    renderAnswerReview('all');
};

const optionLetter = (index) => String.fromCharCode(65 + index);

const getReviewStatus = (index) => {
    const question = appState.questions[index];
    const selected = appState.answers[index];
    if (selected === undefined) return 'unattempted';
    return selected === question.answer ? 'correct' : 'wrong';
};

const renderReviewDetail = (index) => {
    const detail = qs('#reviewDetail');
    if (!detail) return;
    const question = appState.questions[index];
    if (!question) {
        detail.innerHTML = '<p>Select a question number above to view the detailed solution.</p>';
        return;
    }

    const selected = appState.answers[index];
    const status = getReviewStatus(index);
    const statusLabel = status === 'correct' ? 'Correct' : status === 'wrong' ? 'Wrong' : 'Not Attempted';
    const yourAnswer = selected === undefined
        ? 'Not attempted'
        : `${optionLetter(selected)}. ${question.options[selected]}`;
    const correctAnswer = `${optionLetter(question.answer)}. ${question.options[question.answer]}`;

    const optionsHtml = question.options.map((option, optionIndex) => {
        const classes = ['review-option'];
        if (optionIndex === question.answer) classes.push('correct-option');
        if (selected !== undefined && optionIndex === selected && selected !== question.answer) {
            classes.push('wrong-option');
        }
        const tags = [];
        if (optionIndex === question.answer) tags.push('<strong>Correct</strong>');
        if (selected !== undefined && optionIndex === selected) tags.push('<em>Your answer</em>');
        return `
            <div class="${classes.join(' ')}">
                <span>${optionLetter(optionIndex)}.</span>
                <div>
                    <div>${option}</div>
                    ${tags.length ? `<div>${tags.join(' · ')}</div>` : ''}
                </div>
            </div>
        `;
    }).join('');

    const imageHtml = question.image
        ? `<div class="question-media"><img src="${question.image}" alt="Question diagram" loading="lazy" /></div>`
        : '';

    detail.innerHTML = `
        <div class="review-detail-meta">
            <span class="review-badge ${status}">Q${index + 1} · ${statusLabel}</span>
            <span class="review-badge">${question.subject || 'General'}${question.topic ? ` · ${question.topic}` : ''}</span>
            <span class="review-badge">${question.difficulty || ''}</span>
            <span class="review-badge">${question.questionType || ''}</span>
        </div>
        <h4>${question.question}</h4>
        ${imageHtml}
        ${optionsHtml}
        <div class="review-solution">
            <h4>Detailed Solution</h4>
            <p><strong>Your answer:</strong> ${yourAnswer}</p>
            <p><strong>Correct answer:</strong> ${correctAnswer}</p>
            ${question.formula ? `<p><strong>Formula:</strong> ${question.formula}</p>` : ''}
            <p><strong>Explanation:</strong> ${question.explanation || 'No explanation recorded for this question.'}</p>
        </div>
    `;

    qs('#reviewPalette')?.querySelectorAll('.review-palette-btn').forEach((btn) => {
        btn.classList.toggle('active', Number(btn.dataset.index) === index);
    });
};

export const renderAnswerReview = (filter = 'all') => {
    const palette = qs('#reviewPalette');
    if (!palette) return;
    clearElement(palette);

    appState.questions.forEach((_, index) => {
        const status = getReviewStatus(index);
        if (filter !== 'all' && status !== filter) return;

        const button = createElement('button', {
            className: `review-palette-btn ${status}`,
            textContent: String(index + 1).padStart(2, '0'),
            attributes: {
                type: 'button',
                'data-index': String(index),
                'aria-label': `Question ${index + 1}, ${status}`,
            },
        });
        button.addEventListener('click', () => renderReviewDetail(index));
        palette.appendChild(button);
    });

    const firstVisible = palette.querySelector('.review-palette-btn');
    if (firstVisible) {
        renderReviewDetail(Number(firstVisible.dataset.index));
    } else {
        const detail = qs('#reviewDetail');
        if (detail) detail.innerHTML = '<p>No questions in this filter.</p>';
    }
};

export const bindResultActions = () => {
    qs('#returnHomeButton')?.addEventListener('click', () => {
        window.location.reload();
    });

    qs('#reviewFilters')?.addEventListener('click', (event) => {
        const button = event.target.closest('.review-filter');
        if (!button) return;
        qs('#reviewFilters')?.querySelectorAll('.review-filter').forEach((el) => {
            el.classList.toggle('active', el === button);
        });
        renderAnswerReview(button.dataset.filter || 'all');
    });
};
