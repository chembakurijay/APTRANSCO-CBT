import { appState } from './storage.js';
import { qs, clearElement, createElement } from './utils.js';

const paletteStatus = (index) => {
    if (index === appState.currentQuestionIndex) {
        return 'current';
    }
    if (appState.reviewFlags[index]) {
        return 'review';
    }
    if (appState.answers[index] !== undefined) {
        return 'answered';
    }
    return 'unanswered';
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
        // Do not focus palette buttons here — focusing them while answering
        // steals focus from options and can hide/scroll the palette panel.
    });
};
