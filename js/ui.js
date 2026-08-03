import { appState } from './storage.js';
import { qs, clearElement, createElement } from './utils.js';
import { renderDiagram } from './diagram.js';
import { renderPalette, updatePalette } from './palette.js';
import { getCurrentQuestion, saveCurrentAnswer, buildResultSummary } from './result.js';
import {
    getAttemptHistory,
    getAttemptById,
    clearAttemptHistory,
    getAttemptsForFlt,
} from './attemptHistory.js';

/** Last mock list used on the Start (home) page — history UI lives only here. */
let homeMockList = [];

const beginTestFromHome = (mock) => {
    appState.selectedFlt = mock.id;
    appState.selectedTest = mock;
    window.dispatchEvent(new CustomEvent('startInstructions'));
};

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
    // Attempt history is Start-page only — refresh cards when returning home.
    if (pageId === 'homePage' && homeMockList.length) {
        populateHomePage(homeMockList);
    }
};

export const populateHomePage = (mockList) => {
    const container = qs('#mockGrid');
    if (!container) return;
    homeMockList = Array.isArray(mockList) ? mockList : homeMockList;
    clearElement(container);

    homeMockList.forEach((mock) => {
        const attempts = getAttemptsForFlt(mock.id);
        const latest = attempts[0] || null;
        const attempted = attempts.length > 0;
        const card = createElement('article', {
            className: `mock-card${attempted ? ' mock-card-attempted' : ''}`,
        });

        const statusHtml = attempted && latest
            ? `<div class="mock-attempt-status">
                    <span class="mock-attempt-badge">Attempted ${attempts.length}×</span>
                    <p class="mock-last-score">Last score: <strong>${latest.score}</strong> (${latest.percentage})</p>
                    <p class="mock-last-when">Last attempt: ${latest.completedAtLocal || latest.completedAt}</p>
               </div>`
            : `<div class="mock-attempt-status mock-attempt-status-new">
                    <span class="mock-attempt-badge is-new">Not attempted yet</span>
               </div>`;

        const actionLabel = attempted ? 'Reattempt' : 'Attempt';
        card.innerHTML = `
            <div class="mock-card-header">
                <span class="mock-title">${mock.title}</span>
                <span class="mock-meta">${mock.questions} Questions</span>
            </div>
            <div class="mock-card-body">
                <p class="mock-category">${mock.category}</p>
                <p>Marks: ${mock.marks}</p>
                <p>Duration: ${mock.duration} minutes</p>
                ${statusHtml}
            </div>
            <div class="mock-card-actions">
                <button class="button button-primary start-test-button" type="button" data-flt="${mock.id}">${actionLabel}</button>
                ${attempted ? `<button class="button button-secondary view-flt-history" type="button" data-flt="${mock.id}">View History</button>` : ''}
            </div>
        `;
        card.querySelector('.start-test-button')?.addEventListener('click', () => beginTestFromHome(mock));
        card.querySelector('.view-flt-history')?.addEventListener('click', () => {
            const section = qs('#attemptHistorySection');
            renderAttemptHistory(mock.id);
            section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        container.appendChild(card);
    });
    renderAttemptHistory();
};

export const renderAttemptHistory = (filterFltId = null) => {
    const listEl = qs('#attemptHistoryList');
    const emptyEl = qs('#attemptHistoryEmpty');
    const filterLabel = qs('#attemptHistoryFilterLabel');
    if (!listEl) return;

    const history = filterFltId
        ? getAttemptHistory().filter((item) => item.fltId === filterFltId)
        : getAttemptHistory();
    clearElement(listEl);

    if (filterLabel) {
        if (filterFltId) {
            const title = history[0]?.title || filterFltId;
            filterLabel.hidden = false;
            filterLabel.textContent = `Showing history for ${title}`;
        } else {
            filterLabel.hidden = true;
            filterLabel.textContent = '';
        }
    }

    if (emptyEl) {
        emptyEl.hidden = history.length > 0;
        emptyEl.textContent = filterFltId
            ? 'No attempts for this test yet.'
            : 'No attempts yet. Complete a mock test to see history here.';
    }

    history.forEach((attempt) => {
        const row = createElement('article', { className: 'attempt-row' });
        row.innerHTML = `
            <div class="attempt-row-main">
                <strong>${attempt.title || attempt.fltId}</strong>
                <span class="attempt-meta">${attempt.category || ''}</span>
            </div>
            <div class="attempt-row-stats">
                <span>Date &amp; time: <strong>${attempt.completedAtLocal || attempt.completedAt}</strong></span>
                <span>Started: ${attempt.startedAtLocal || attempt.startedAt}</span>
                <span>Score: <strong>${attempt.score}</strong> / ${attempt.totalQuestions} (${attempt.percentage})</span>
                <span>Correct ${attempt.correctCount} · Wrong ${attempt.wrongCount} · Not answered ${attempt.notAnsweredCount}</span>
                <span>Time taken: ${attempt.timeTaken}</span>
            </div>
            <div class="attempt-row-actions">
                <button type="button" class="button button-secondary attempt-view-analysis" data-attempt-id="${attempt.id}">View Answers</button>
                <button type="button" class="button button-primary attempt-reattempt" data-flt="${attempt.fltId}">Reattempt</button>
            </div>
        `;
        row.querySelector('.attempt-view-analysis')?.addEventListener('click', () => {
            showAttemptAnalysis(attempt.id);
        });
        row.querySelector('.attempt-reattempt')?.addEventListener('click', () => {
            const mock = homeMockList.find((item) => item.id === attempt.fltId);
            if (mock) beginTestFromHome(mock);
        });
        listEl.appendChild(row);
    });
};

const loadQuestionsForFltReview = async (fltId) => {
    if (!fltId) return [];
    const match = String(fltId).match(/^(civil|electrical)(\d{2})$/);
    const paths = [];
    if (match) {
        const folder = match[1];
        const num = match[2];
        if (folder === 'civil') {
            paths.push(`../data/civil/ce-flt${num}.js`, `../data/civil/flt${num}.js`);
        } else {
            paths.push(`../data/electrical/ee-flt${num}.js`, `../data/electrical/flt${num}.js`);
        }
    }
    for (const path of paths) {
        try {
            const module = await import(path);
            if (Array.isArray(module.questions)) return module.questions;
        } catch {
            // try next
        }
    }
    try {
        const module = await import('../data/questionBanks.js');
        const bank = module.questionBanks?.[fltId];
        if (Array.isArray(bank)) return bank;
    } catch {
        // ignore
    }
    return [];
};

const historyOptionLetter = (index) => String.fromCharCode(65 + Number(index));

const getHistoryStatus = (attempt, index, question) => {
    const selected = attempt.answers?.[index];
    const keyItem = attempt.answerKey?.[index];
    if (keyItem?.status) return keyItem.status;
    if (selected === undefined || selected === null) return 'unattempted';
    const correct = question?.answer ?? keyItem?.correct;
    return selected === correct ? 'correct' : 'wrong';
};

const renderHistoryReviewDetail = (attempt, questions, index, detailEl, paletteEl) => {
    const question = questions[index];
    if (!detailEl || !question) {
        if (detailEl) detailEl.innerHTML = '<p>Select a question number above to view the detailed solution.</p>';
        return;
    }

    const selected = attempt.answers?.[index];
    const status = getHistoryStatus(attempt, index, question);
    const statusLabel = status === 'correct' ? 'Correct' : status === 'wrong' ? 'Wrong' : 'Not Attempted';
    const yourAnswer = selected === undefined || selected === null
        ? 'Not attempted'
        : `${historyOptionLetter(selected)}. ${question.options?.[selected] ?? ''}`;
    const correctIdx = question.answer;
    const correctAnswer = `${historyOptionLetter(correctIdx)}. ${question.options?.[correctIdx] ?? ''}`;

    const optionsHtml = (question.options || []).map((option, optionIndex) => {
        const classes = ['review-option'];
        if (optionIndex === correctIdx) classes.push('correct-option');
        if (selected !== undefined && selected !== null && optionIndex === selected && selected !== correctIdx) {
            classes.push('wrong-option');
        }
        const tags = [];
        if (optionIndex === correctIdx) tags.push('<strong>Correct</strong>');
        if (selected !== undefined && selected !== null && optionIndex === selected) tags.push('<em>Your answer</em>');
        return `
            <div class="${classes.join(' ')}">
                <span>${historyOptionLetter(optionIndex)}.</span>
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

    detailEl.innerHTML = `
        <div class="review-detail-meta">
            <span class="review-badge ${status}">Q${index + 1} · ${statusLabel}</span>
            <span class="review-badge">${question.subject || 'General'}${question.topic ? ` · ${question.topic}` : ''}</span>
            <span class="review-badge">${question.difficulty || ''}</span>
            <span class="review-badge">${question.questionType || ''}</span>
        </div>
        <h4>${question.question || ''}</h4>
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

    paletteEl?.querySelectorAll('.review-palette-btn').forEach((btn) => {
        btn.classList.toggle('active', Number(btn.dataset.index) === index);
    });
};

const renderHistoryAnswerReview = (attempt, questions, filter, paletteEl, detailEl) => {
    if (!paletteEl) return;
    clearElement(paletteEl);

    questions.forEach((question, index) => {
        const status = getHistoryStatus(attempt, index, question);
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
        button.addEventListener('click', () => {
            renderHistoryReviewDetail(attempt, questions, index, detailEl, paletteEl);
        });
        paletteEl.appendChild(button);
    });

    const firstVisible = paletteEl.querySelector('.review-palette-btn');
    if (firstVisible) {
        renderHistoryReviewDetail(attempt, questions, Number(firstVisible.dataset.index), detailEl, paletteEl);
    } else if (detailEl) {
        detailEl.innerHTML = '<p>No questions in this filter.</p>';
    }
};

export const showAttemptAnalysis = async (attemptId) => {
    const attempt = getAttemptById(attemptId);
    const panel = qs('#attemptKeyPanel');
    const body = qs('#attemptKeyBody');
    if (!panel || !body || !attempt) return;

    body.innerHTML = '<p class="attempt-history-hint">Loading answers panel…</p>';
    panel.hidden = false;

    let questions = Array.isArray(attempt.questionsSnapshot) && attempt.questionsSnapshot.length
        ? attempt.questionsSnapshot
        : await loadQuestionsForFltReview(attempt.fltId);

    if (!questions.length) {
        body.innerHTML = '<p>Could not load question paper for this attempt. Reattempt the test to save a full answers panel.</p>';
        return;
    }

    body.innerHTML = `
        <div class="attempt-key-header">
            <h3>${attempt.title} — Answers</h3>
            <p>Completed: <strong>${attempt.completedAtLocal || attempt.completedAt}</strong> · Score: <strong>${attempt.score}</strong> (${attempt.percentage})</p>
            <p>Correct ${attempt.correctCount} · Wrong ${attempt.wrongCount} · Not answered ${attempt.notAnsweredCount} · Time ${attempt.timeTaken}</p>
        </div>
        <section class="review-section attempt-history-review" aria-label="Attempt answers review">
            <h3>Detailed Answer Analysis</h3>
            <p class="review-hint">Green = correct, Red = wrong, Grey = not attempted. Click a number for full solution (same as after Submit).</p>
            <div class="review-filters" id="historyReviewFilters">
                <button type="button" class="review-filter active" data-filter="all">All</button>
                <button type="button" class="review-filter" data-filter="correct">Correct</button>
                <button type="button" class="review-filter" data-filter="wrong">Wrong</button>
                <button type="button" class="review-filter" data-filter="unattempted">Not Attempted</button>
            </div>
            <div class="review-palette" id="historyReviewPalette"></div>
            <div class="review-detail" id="historyReviewDetail">
                <p>Select a question number above to view the detailed solution.</p>
            </div>
        </section>
        <div class="attempt-row-actions attempt-analysis-actions">
            <button type="button" class="button button-primary" id="analysisReattemptBtn" data-flt="${attempt.fltId}">Reattempt this test</button>
        </div>
    `;

    const paletteEl = body.querySelector('#historyReviewPalette');
    const detailEl = body.querySelector('#historyReviewDetail');
    const filtersEl = body.querySelector('#historyReviewFilters');

    renderHistoryAnswerReview(attempt, questions, 'all', paletteEl, detailEl);

    filtersEl?.addEventListener('click', (event) => {
        const button = event.target.closest('.review-filter');
        if (!button) return;
        filtersEl.querySelectorAll('.review-filter').forEach((el) => {
            el.classList.toggle('active', el === button);
        });
        renderHistoryAnswerReview(attempt, questions, button.dataset.filter || 'all', paletteEl, detailEl);
    });

    body.querySelector('#analysisReattemptBtn')?.addEventListener('click', () => {
        const mock = homeMockList.find((item) => item.id === attempt.fltId);
        if (mock) beginTestFromHome(mock);
    });

    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

/** @deprecated use showAttemptAnalysis */
export const showAttemptAnswerKey = showAttemptAnalysis;

export const bindAttemptHistoryActions = () => {
    qs('#clearAttemptHistory')?.addEventListener('click', () => {
        if (!window.confirm('Clear all saved attempt history on this browser?')) return;
        clearAttemptHistory();
        if (homeMockList.length) populateHomePage(homeMockList);
        else renderAttemptHistory();
        const panel = qs('#attemptKeyPanel');
        if (panel) {
            panel.hidden = true;
            const body = qs('#attemptKeyBody');
            if (body) body.innerHTML = '';
        }
    });

    qs('#showAllAttemptHistory')?.addEventListener('click', () => {
        renderAttemptHistory();
        qs('#attemptHistorySection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    qs('#closeAttemptKey')?.addEventListener('click', () => {
        const panel = qs('#attemptKeyPanel');
        if (panel) panel.hidden = true;
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

    const removeModal = () => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    };

    modal.querySelector('#cancelSubmit')?.addEventListener('click', removeModal);
    modal.querySelector('#confirmSubmit')?.addEventListener('click', () => {
        removeModal();
        window.dispatchEvent(new Event('confirmSubmit'));
    });

    // Fullscreen only shows the fullscreen element's subtree — append there so the prompt appears.
    const host = document.fullscreenElement || document.body;
    host.appendChild(modal);
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

    const meta = qs('#attemptResultMeta');
    if (meta) {
        const attempt = appState.lastAttemptId ? getAttemptById(appState.lastAttemptId) : getAttemptHistory()[0];
        if (attempt) {
            meta.innerHTML = `Saved to <strong>Attempt History</strong> on the Start page · ${attempt.completedAtLocal} · Score ${attempt.score} (${attempt.percentage}). Use <em>Return Home</em> for history, detailed analysis, or Reattempt.`;
            meta.hidden = false;
        } else {
            meta.hidden = true;
        }
    }

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

    qs('#resultReattemptButton')?.addEventListener('click', () => {
        const fltId = appState.selectedFlt || appState.selectedTest?.id || '';
        if (fltId) sessionStorage.setItem('aptransco_reattempt_flt', fltId);
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
