import { appState } from './storage.js';

const getPerTestPath = (fltKey) => {
    const match = fltKey.match(/^(civil|electrical)(\d{2})$/);
    if (!match) return null;
    const folder = match[1];
    const testNumber = match[2];
    return `../data/${folder}/flt${testNumber}.js`;
};

export const loadQuestionBank = async (fltKey) => {
    let questions;
    const perTestPath = getPerTestPath(fltKey);

    if (perTestPath) {
        try {
            const module = await import(perTestPath);
            questions = module.questions;
        } catch {
            // Fallback to single file if per-test file is missing
        }
    }

    if (!Array.isArray(questions)) {
        const module = await import('../data/questionBanks.js');
        questions = module.questionBanks[fltKey];
    }

    if (!Array.isArray(questions)) {
        throw new Error('Invalid question data.');
    }

    appState.questions = questions;
    appState.answers = new Array(questions.length).fill(undefined);
    appState.reviewFlags = new Array(questions.length).fill(false);
    return questions;
};

export const getQuestionByIndex = (index) => appState.questions[index];
