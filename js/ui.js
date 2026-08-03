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
            input.addEventListener('change', () => {
                saveCurrentAnswer();
                updatePalette();
            });
        }
        optionsList.appendChild(optionItem);
    });

    renderPalette();
};

export const showSubmitModal = () => {
    const summary = buildResultSummary();
    const modal = createElement('div', { className: 'submit-overlay' });
    modal.innerHTML = `
        <div class="submit-card">
            <h2>Submit Exam</h2>
            <p class="submit-text">You have:</p>
            <div class="submit-grid">
                <div><strong>Answered</strong><span>${summary.answeredCount}</span></div>
                <div><strong>Not Answered</strong><span>${summary.notAnsweredCount}</span></div>
                <div><strong>Marked Review</strong><span>${summary.reviewCount}</span></div>
            </div>
            <p class="submit-warning">Are you sure you want to submit?</p>
            <div class="submit-actions">
                <button class="button button-secondary" id="cancelSubmit">Cancel</button>
                <button class="button button-primary" id="confirmSubmit">Submit</button>
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
};

export const bindResultActions = () => {
    qs('#returnHomeButton')?.addEventListener('click', () => {
        window.location.reload();
    });
};
