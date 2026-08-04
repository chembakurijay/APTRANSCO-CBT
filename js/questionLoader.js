import { appState } from './storage.js';

const CACHE_BUST = '20260804ai';

const getPerTestPaths = (fltKey) => {
    const match = fltKey.match(/^(civil|electrical)(\d{2})$/);
    if (!match) return null;
    const folder = match[1];
    const testNumber = match[2];
    const q = `?v=${CACHE_BUST}`;
    if (folder === 'civil') {
        return [
            `../data/civil/ce-flt${testNumber}.js${q}`,
            `../data/civil/flt${testNumber}.js${q}`,
        ];
    }
    if (folder === 'electrical') {
        return [
            `../data/electrical/ee-flt${testNumber}.js${q}`,
            `../data/electrical/flt${testNumber}.js${q}`,
        ];
    }
    return [`../data/${folder}/flt${testNumber}.js${q}`];
};

export const loadQuestionBank = async (fltKey) => {
    let questions;
    const perTestPaths = getPerTestPaths(fltKey);

    if (perTestPaths) {
        for (const perTestPath of perTestPaths) {
            try {
                const module = await import(perTestPath);
                if (Array.isArray(module.questions)) {
                    questions = module.questions;
                    break;
                }
            } catch {
                // Try next path / fall back to questionBanks.js
            }
        }
    }

    if (!Array.isArray(questions)) {
        const module = await import(`../data/questionBanks.js?v=${CACHE_BUST}`);
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
