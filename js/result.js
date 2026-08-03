import { appState } from './storage.js';
import { qs } from './utils.js';

export const getCurrentQuestion = () => appState.questions[appState.currentQuestionIndex];

export const saveCurrentAnswer = () => {
    const selected = qs('input[name="answer"]:checked');
    if (!selected) {
        appState.answers[appState.currentQuestionIndex] = undefined;
        return;
    }
    appState.answers[appState.currentQuestionIndex] = Number(selected.value);
};

export const buildResultSummary = () => {
    const totalQuestions = appState.questions.length;
    const answeredCount = appState.answers.filter((value) => value !== undefined).length;
    const reviewCount = appState.reviewFlags.filter(Boolean).length;
    const notAnsweredCount = totalQuestions - answeredCount;
    const correctCount = appState.questions.reduce((sum, question, index) => {
        return sum + (appState.answers[index] === question.answer ? 1 : 0);
    }, 0);
    const wrongCount = answeredCount - correctCount;
    const score = correctCount - wrongCount * 0.25;
    const percentage = totalQuestions ? Math.max(0, (score / totalQuestions) * 100) : 0;

    return {
        totalQuestions,
        answeredCount,
        notAnsweredCount,
        reviewCount,
        correctCount,
        wrongCount,
        score: score.toFixed(2),
        percentage: `${percentage.toFixed(2)}%`,
        timeTaken: formatTime(120 * 60 - appState.remainingTime),
    };
};

const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
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
