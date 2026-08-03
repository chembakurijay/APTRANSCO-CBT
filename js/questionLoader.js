import { appState } from './storage.js';

export const loadQuestionBank = async (fltNumber) => {
    const module = await import(`../data/flt${String(fltNumber).padStart(2, '0')}.js`);
    if (!Array.isArray(module.questions)) {
        throw new Error('Invalid question data.');
    }
    appState.questions = module.questions;
    appState.answers = new Array(module.questions.length).fill(undefined);
    appState.reviewFlags = new Array(module.questions.length).fill(false);
    return module.questions;
};

export const getQuestionByIndex = (index) => appState.questions[index];
