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

export const getAttemptsForFlt = (fltId) => {
    if (!fltId) return [];
    return getAttemptHistory().filter((item) => item.fltId === fltId);
};

export const getLatestAttemptForFlt = (fltId) => getAttemptsForFlt(fltId)[0] || null;

export const hasAttemptedFlt = (fltId) => getAttemptsForFlt(fltId).length > 0;

/** Subject-wise breakdown for detailed analysis on the home history panel. */
export const buildSubjectAnalysis = (attempt) => {
    const map = new Map();
    (attempt?.answerKey || []).forEach((item) => {
        const subject = item.subject || 'General';
        if (!map.has(subject)) {
            map.set(subject, { subject, total: 0, correct: 0, wrong: 0, unattempted: 0 });
        }
        const row = map.get(subject);
        row.total += 1;
        if (item.status === 'correct') row.correct += 1;
        else if (item.status === 'wrong') row.wrong += 1;
        else row.unattempted += 1;
    });
    return [...map.values()];
};

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

    // Full question snapshot so home "View Answers" matches the post-submit review panel.
    const questionsSnapshot = appState.questions.map((question) => ({
        id: question.id,
        subject: question.subject || '',
        topic: question.topic || '',
        question: question.question || '',
        image: question.image || '',
        options: Array.isArray(question.options) ? [...question.options] : [],
        answer: question.answer,
        difficulty: question.difficulty || '',
        questionType: question.questionType || '',
        formula: question.formula || '',
        explanation: question.explanation || '',
        dataTable: question.dataTable || null,
        matchingMatrix: question.matchingMatrix || null,
    }));

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
        questionsSnapshot,
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
