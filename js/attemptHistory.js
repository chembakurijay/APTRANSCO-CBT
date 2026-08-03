import { appState, EXAM_DURATION } from './storage.js';
import { buildResultSummary } from './result.js';

const STORAGE_KEY = 'aptransco_cbt_attempt_history_v1';
const MAX_ATTEMPTS = 100;

const letter = (index) => (index === undefined || index === null || Number.isNaN(index)
    ? '—'
    : String.fromCharCode(65 + Number(index)));

export const getAttemptHistory = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
};

const writeHistory = (list) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, MAX_ATTEMPTS)));
};

export const getAttemptById = (id) => getAttemptHistory().find((item) => item.id === id) || null;

/** Persist one completed attempt with score, timestamps, and per-question answer key. */
export const saveCurrentAttempt = () => {
    const summary = buildResultSummary();
    const completedAt = new Date();
    const startedAt = appState.examStartedAt ? new Date(appState.examStartedAt) : new Date(
        completedAt.getTime() - Math.max(0, EXAM_DURATION - appState.remainingTime) * 1000
    );

    const answerKey = appState.questions.map((question, index) => {
        const selected = appState.answers[index];
        const correct = question.answer;
        let status = 'unattempted';
        if (selected !== undefined) {
            status = selected === correct ? 'correct' : 'wrong';
        }
        return {
            q: index + 1,
            id: question.id ?? index + 1,
            subject: question.subject || '',
            topic: question.topic || '',
            selected,
            selectedLetter: letter(selected),
            correct,
            correctLetter: letter(correct),
            status,
            review: Boolean(appState.reviewFlags[index]),
        };
    });

    const record = {
        id: `att_${completedAt.getTime()}_${Math.random().toString(36).slice(2, 8)}`,
        fltId: appState.selectedFlt || '',
        title: appState.selectedTest?.title || appState.selectedFlt || 'Mock Test',
        category: appState.selectedTest?.category || '',
        startedAt: startedAt.toISOString(),
        completedAt: completedAt.toISOString(),
        startedAtLocal: startedAt.toLocaleString(),
        completedAtLocal: completedAt.toLocaleString(),
        timeTakenSeconds: Math.max(0, EXAM_DURATION - appState.remainingTime),
        timeTaken: summary.timeTaken,
        totalQuestions: summary.totalQuestions,
        answeredCount: summary.answeredCount,
        notAnsweredCount: summary.notAnsweredCount,
        correctCount: summary.correctCount,
        wrongCount: summary.wrongCount,
        score: summary.score,
        percentage: summary.percentage,
        answers: [...appState.answers],
        reviewFlags: [...appState.reviewFlags],
        answerKey,
    };

    const history = getAttemptHistory();
    history.unshift(record);
    writeHistory(history);
    appState.lastAttemptId = record.id;
    return record;
};

export const clearAttemptHistory = () => {
    localStorage.removeItem(STORAGE_KEY);
};
