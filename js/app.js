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

    const togglePanel = (panel, button) => {
        if (!panel || !button) return;
        const isHidden = panel.classList.toggle('collapsed');
        panel.hidden = isHidden;
        panel.style.display = isHidden ? 'none' : '';
        button.setAttribute('aria-expanded', String(!isHidden));
    };

    const paletteToggle = qs('#togglePalette');
    const calculatorToggle = qs('#toggleCalculator');
    const fullscreenButton = qs('#fullscreenButton');

    paletteToggle?.addEventListener('click', () => togglePanel(palettePanel, paletteToggle));
    calculatorToggle?.addEventListener('click', () => togglePanel(calculatorPanel, calculatorToggle));

    fullscreenButton?.addEventListener('click', async () => {
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

        try {
            if (document.exitFullscreen) {
                await document.exitFullscreen();
            }
        } catch (err) {
            console.error('Exit fullscreen failed', err);
        }
    });

    document.addEventListener('fullscreenchange', () => {
        if (!fullscreenButton) return;
        fullscreenButton.textContent = document.fullscreenElement ? 'Exit Fullscreen' : 'Fullscreen';
    });

    if (questionCard) {
        questionCard.addEventListener('click', () => {
            if (palettePanel && !palettePanel.classList.contains('collapsed')) {
                palettePanel.classList.add('collapsed');
                palettePanel.hidden = true;
                palettePanel.style.display = 'none';
                paletteToggle?.setAttribute('aria-expanded', 'false');
            }
        });
    }
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
