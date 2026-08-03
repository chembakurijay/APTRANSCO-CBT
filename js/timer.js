import { appState } from './storage.js';
import { qs, formatTime } from './utils.js';

export const startTimer = () => {
    const timerDisplay = qs('#countdown');
    if (!timerDisplay) return;

    timerDisplay.textContent = formatTime(appState.remainingTime);
    appState.timerId = window.setInterval(() => {
        if (appState.remainingTime <= 0) {
            window.clearInterval(appState.timerId);
            window.dispatchEvent(new Event('examTimeout'));
            return;
        }
        appState.remainingTime -= 1;
        timerDisplay.textContent = formatTime(appState.remainingTime);
    }, 1000);
};

export const stopTimer = () => {
    if (appState.timerId !== null) {
        window.clearInterval(appState.timerId);
        appState.timerId = null;
    }
};
