import { appState } from './storage.js';

export const loadQuestionBank = async (fltKey) => {
    const module = await import('../data/questionBanks.js');
    const questions = module.questionBanks[fltKey];
    if (!Array.isArray(questions)) {
        throw new Error('Invalid question data.');
    }
    appState.questions = questions;
    appState.answers = new Array(questions.length).fill(undefined);
    appState.reviewFlags = new Array(questions.length).fill(false);
    return questions;
};

export const getQuestionByIndex = (index) => appState.questions[index];
