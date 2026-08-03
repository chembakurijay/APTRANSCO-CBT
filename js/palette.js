import { appState } from './storage.js';
import { qs, clearElement, createElement } from './utils.js';

/** Palette button status classes (during exam: unanswered stays white). */
export const paletteStatus = (index) => {
    const classes = [];
    const answered = appState.answers[index] !== undefined;
    const review = Boolean(appState.reviewFlags[index]);

    if (answered && review) {
        classes.push('answered', 'review');
    } else if (review) {
        classes.push('review');
    } else if (answered) {
        classes.push('answered');
    } else {
        classes.push('unanswered');
    }

    if (index === appState.currentQuestionIndex) {
        classes.push('current');
    }

    return classes.join(' ');
};

export const updatePaletteSummary = () => {
    const total = appState.questions.length;
    const answered = appState.answers.filter((value) => value !== undefined).length;
    const review = appState.reviewFlags.filter(Boolean).length;
    const unanswered = Math.max(0, total - answered);

    const answeredEl = qs('#paletteAnsweredCount');
    const unansweredEl = qs('#paletteUnansweredCount');
    const reviewEl = qs('#paletteReviewCount');
    if (answeredEl) answeredEl.textContent = String(answered);
    if (unansweredEl) unansweredEl.textContent = String(unanswered);
    if (reviewEl) reviewEl.textContent = String(review);
};

export const renderPalette = () => {
    const palette = qs('#questionPalette');
    if (!palette) return;
    clearElement(palette);

    appState.questions.forEach((_, index) => {
        const status = paletteStatus(index);
        const button = createElement('button', {
            className: `palette-button ${status}`,
            textContent: String(index + 1).padStart(2, '0'),
            attributes: {
                type: 'button',
                'data-question-index': index,
                title: status.replace(/\bcurrent\b/, '').trim() || 'unanswered',
            },
        });

        button.addEventListener('click', () => {
            appState.currentQuestionIndex = index;
            window.dispatchEvent(new CustomEvent('questionChanged'));
        });

        palette.appendChild(button);
    });

    updatePaletteSummary();
};

export const updatePalette = () => {
    const buttons = qs('#questionPalette')?.querySelectorAll('button') || [];
    buttons.forEach((button) => {
        const index = Number(button.getAttribute('data-question-index'));
        button.className = `palette-button ${paletteStatus(index)}`;
    });
    updatePaletteSummary();
};
