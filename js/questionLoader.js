import { appState } from './storage.js';

const CACHE_BUST = '20260804flt02';

const getPerTestPaths = (fltKey) => {
    const fltMatch = fltKey.match(/^(civil|electrical)(\d{2})$/);
    if (fltMatch) {
        const folder = fltMatch[1];
        const testNumber = fltMatch[2];
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
    }

    // Subject-wise High-Yield: civil-st-som-01 → data/civil/st/ce-st-som-01.js
    const stCivil = fltKey.match(/^civil-st-([a-z]+)-(\d{2})$/);
    if (stCivil) {
        const key = stCivil[1];
        const num = stCivil[2];
        const q = `?v=${CACHE_BUST}`;
        return [
            `../data/civil/st/ce-st-${key}-${num}.js${q}`,
            `../data/civil/ce-st-${key}-${num}.js${q}`,
        ];
    }
    const stEe = fltKey.match(/^electrical-st-([a-z]+)-(\d{2})$/);
    if (stEe) {
        const key = stEe[1];
        const num = stEe[2];
        const q = `?v=${CACHE_BUST}`;
        return [
            `../data/electrical/st/ee-st-${key}-${num}.js${q}`,
            `../data/electrical/ee-st-${key}-${num}.js${q}`,
        ];
    }
    const stNc = fltKey.match(/^noncore-st-([a-z]+)-(\d{2})$/);
    if (stNc) {
        const key = stNc[1];
        const num = stNc[2];
        const q = `?v=${CACHE_BUST}`;
        return [
            `../data/noncore/st/nc-st-${key}-${num}.js${q}`,
            `../data/noncore/nc-st-${key}-${num}.js${q}`,
        ];
    }
    return null;
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
        throw new Error('Invalid question data. Bank not found for: ' + fltKey);
    }

    appState.questions = questions;
    appState.answers = new Array(questions.length).fill(undefined);
    appState.reviewFlags = new Array(questions.length).fill(false);
    return questions;
};

export const getQuestionByIndex = (index) => appState.questions[index];
