import { appState } from './storage.js';
import { qs, clearElement, createElement } from './utils.js';

/** TCS iON-style status classes for palette buttons. */
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

export const renderPalette = () => {
    const palette = qs('#questionPalette');
    if (!palette) return;
    clearElement(palette);

    appState.questions.forEach((_, index) => {
        const button = createElement('button', {
            className: `palette-button ${paletteStatus(index)}`,
            textContent: String(index + 1).padStart(2, '0'),
            attributes: {
                type: 'button',
                'data-question-index': index,
                title: paletteStatus(index).replace(/current/, '').trim() || 'unanswered',
            },
        });

        button.addEventListener('click', () => {
            appState.currentQuestionIndex = index;
            window.dispatchEvent(new CustomEvent('questionChanged'));
        });

        palette.appendChild(button);
    });
};

export const updatePalette = () => {
    const buttons = qs('#questionPalette')?.querySelectorAll('button') || [];
    buttons.forEach((button) => {
        const index = Number(button.getAttribute('data-question-index'));
        button.className = `palette-button ${paletteStatus(index)}`;
    });
};
