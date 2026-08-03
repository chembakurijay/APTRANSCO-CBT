import { appState } from './storage.js';
import { saveCurrentAnswer } from './result.js';

export const bindNavigation = () => {
    const previous = document.getElementById('previousButton');
    const next = document.getElementById('nextButton');
    const saveNext = document.getElementById('saveNextButton');
    const reviewNext = document.getElementById('reviewButton');
    const clear = document.getElementById('clearButton');
    const submit = document.getElementById('submitButton');

    previous?.addEventListener('click', () => {
        moveToQuestion(Math.max(0, appState.currentQuestionIndex - 1));
    });

    next?.addEventListener('click', () => {
        moveToQuestion(Math.min(appState.questions.length - 1, appState.currentQuestionIndex + 1));
    });

    saveNext?.addEventListener('click', () => {
        saveCurrentAnswer();
        next?.click();
    });

    reviewNext?.addEventListener('click', () => {
        appState.reviewFlags[appState.currentQuestionIndex] = true;
        saveCurrentAnswer();
        next?.click();
    });

    clear?.addEventListener('click', () => {
        appState.answers[appState.currentQuestionIndex] = undefined;
        appState.reviewFlags[appState.currentQuestionIndex] = false;
        window.dispatchEvent(new CustomEvent('questionChanged'));
    });

    submit?.addEventListener('click', () => {
        window.dispatchEvent(new Event('requestSubmit'));
    });
};

export const moveToQuestion = (index) => {
    if (index === appState.currentQuestionIndex) return;
    appState.currentQuestionIndex = index;
    window.dispatchEvent(new CustomEvent('questionChanged'));
};
