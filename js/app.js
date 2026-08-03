import { appState, resetState } from './storage.js';
import { loadQuestionBank } from './questionLoader.js';
import { bindNavigation } from './navigation.js';
import { switchPage, populateHomePage, populateInstructionsPage, bindInstructionActions, renderQuestionPage, showSubmitModal, populateResultPage, bindResultActions } from './ui.js';
import { startTimer, stopTimer } from './timer.js';
import { initCalculator } from './calculator.js';
import { qs } from './utils.js';

const mockList = [
    ...Array.from({ length: 20 }, (_, index) => ({
        id: `civil${String(index + 1).padStart(2, '0')}`,
        title: `FLT-Civil-${String(index + 1).padStart(2, '0')}`,
        category: 'Civil Engineering',
        questions: 100,
        marks: 100,
        duration: 180,
    })),
    ...Array.from({ length: 20 }, (_, index) => ({
        id: `electrical${String(index + 1).padStart(2, '0')}`,
        title: `FLT-Electrical-${String(index + 1).padStart(2, '0')}`,
        category: 'Electrical Engineering',
        questions: 100,
        marks: 100,
        duration: 180,
    })),
];

const bindApplicationEvents = () => {
    window.addEventListener('startInstructions', () => {
        populateInstructionsPage();
        switchPage('instructionPage');
    });

    window.addEventListener('startExam', async () => {
        await beginExam();
    });

    window.addEventListener('questionChanged', () => {
        renderQuestionPage();
    });

    window.addEventListener('requestSubmit', () => {
        showSubmitModal();
    });

    window.addEventListener('confirmSubmit', () => {
        stopTimer();
        appState.submitted = true;
        populateResultPage();
        switchPage('resultPage');
    });

    window.addEventListener('examTimeout', () => {
        if (appState.submitted) return;
        appState.submitted = true;
        populateResultPage();
        switchPage('resultPage');
    });
};

const beginExam = async () => {
    try {
        await loadQuestionBank(appState.selectedFlt);
        renderQuestionPage();
        startTimer();
        switchPage('examPage');
    } catch (error) {
        const main = qs('.page-shell');
        if (main) {
            main.innerHTML = `<section class="content-card"><h2>Error loading exam</h2><p>${error.message}</p></section>`;
        }
    }
};

const bindBackButtons = () => {
    qs('#backHomeButton')?.addEventListener('click', () => {
        switchPage('homePage');
    });
};

const bindPanelActions = () => {
    const palettePanel = qs('#palettePanel');
    const calculatorPanel = qs('#calculatorPanel');
    const questionCard = qs('.question-card');

    qs('#togglePalette')?.addEventListener('click', () => {
        if (!palettePanel) return;
        const expanded = palettePanel.classList.toggle('collapsed');
        qs('#togglePalette')?.setAttribute('aria-expanded', String(!expanded));
    });

    qs('#toggleCalculator')?.addEventListener('click', () => {
        if (!calculatorPanel) return;
        const expanded = calculatorPanel.classList.toggle('collapsed');
        qs('#toggleCalculator')?.setAttribute('aria-expanded', String(!expanded));
    });

    const fullscreenButton = qs('#fullscreenButton');

    qs('#fullscreenButton')?.addEventListener('click', async () => {
        const examPage = qs('.exam-page');
        if (!examPage) return;

        if (!document.fullscreenElement) {
            try {
                await examPage.requestFullscreen();
            } catch (err) {
                console.error('Fullscreen request failed', err);
            }
            return;
        }

        if (document.exitFullscreen) {
            await document.exitFullscreen();
        }
    });

    document.addEventListener('fullscreenchange', () => {
        if (!fullscreenButton) return;
        if (document.fullscreenElement) {
            fullscreenButton.textContent = 'Exit Fullscreen';
        } else {
            fullscreenButton.textContent = 'Fullscreen';
        }
    });

};

const initializeApp = () => {
    resetState();
    populateHomePage(mockList);
    populateInstructionsPage();
    bindInstructionActions();
    bindNavigation();
    bindResultActions();
    bindApplicationEvents();
    bindBackButtons();
    bindPanelActions();
    initCalculator();
    switchPage('homePage');
};

window.addEventListener('DOMContentLoaded', initializeApp);
