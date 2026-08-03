import { appState, resetState } from './storage.js';
import { loadQuestionBank } from './questionLoader.js';
import { bindNavigation } from './navigation.js';
import { switchPage, populateHomePage, populateInstructionsPage, bindInstructionActions, renderQuestionPage, showSubmitModal, populateResultPage, bindResultActions, bindAttemptHistoryActions } from './ui.js';
import { startTimer, stopTimer } from './timer.js';
import { initCalculator, showFloatingCalculator, hideFloatingCalculator } from './calculator.js';
import { saveCurrentAttempt } from './attemptHistory.js';
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
        if (document.fullscreenElement && document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
        }
        saveCurrentAttempt();
        populateResultPage();
        switchPage('resultPage');
    });

    window.addEventListener('examTimeout', () => {
        if (appState.submitted) return;
        appState.submitted = true;
        saveCurrentAttempt();
        populateResultPage();
        switchPage('resultPage');
    });
};

const beginExam = async () => {
    try {
        await loadQuestionBank(appState.selectedFlt);
        appState.examStarted = true;
        appState.examStartedAt = Date.now();
        appState.submitted = false;
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
    const examBody = qs('#examBody');
    const palettePanel = qs('#palettePanel');
    const calculatorPanel = qs('#calculatorPanel');
    const paletteToggle = qs('#togglePalette');
    const calculatorToggle = qs('#toggleCalculator');
    const fullscreenButton = qs('#fullscreenButton');

    const setPanelVisible = (panel, button, visible, showLabel, hideLabel) => {
        if (!panel || !button) return;
        panel.classList.toggle('collapsed', !visible);
        panel.hidden = !visible;
        panel.style.display = visible ? '' : 'none';
        button.setAttribute('aria-expanded', String(visible));
        button.textContent = visible ? hideLabel : showLabel;
        // Flex layout auto-expands question; force reflow for stubborn browsers
        if (examBody) {
            examBody.style.display = 'flex';
            void examBody.offsetWidth;
        }
    };

    const togglePanel = (panel, button, showLabel, hideLabel) => {
        if (!panel || !button) return;
        const willShow = panel.classList.contains('collapsed') || panel.hidden;
        setPanelVisible(panel, button, willShow, showLabel, hideLabel);
    };

    // Default: palette on, calculator off (floating — does not take exam layout space)
    setPanelVisible(palettePanel, paletteToggle, true, 'Show Palette', 'Hide Palette');
    hideFloatingCalculator();
    if (calculatorToggle) {
        calculatorToggle.setAttribute('aria-expanded', 'false');
        calculatorToggle.textContent = 'Show Calculator';
    }

    paletteToggle?.addEventListener('click', () => {
        togglePanel(palettePanel, paletteToggle, 'Show Palette', 'Hide Palette');
    });
    calculatorToggle?.addEventListener('click', () => {
        const willShow = calculatorPanel.classList.contains('collapsed') || calculatorPanel.hidden;
        if (willShow) {
            showFloatingCalculator();
            calculatorToggle.setAttribute('aria-expanded', 'true');
            calculatorToggle.textContent = 'Hide Calculator';
        } else {
            hideFloatingCalculator();
            calculatorToggle.setAttribute('aria-expanded', 'false');
            calculatorToggle.textContent = 'Show Calculator';
        }
        if (examBody) {
            examBody.style.display = 'flex';
            void examBody.offsetWidth;
        }
    });

    fullscreenButton?.addEventListener('click', async () => {
        const examPage = qs('#examPage') || qs('.exam-page');
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
        if (examBody) {
            examBody.style.display = 'flex';
            void examBody.offsetWidth;
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
    bindAttemptHistoryActions();
    bindApplicationEvents();
    bindBackButtons();
    bindPanelActions();
    initCalculator();
    switchPage('homePage');

    const reattemptFlt = sessionStorage.getItem('aptransco_reattempt_flt');
    if (reattemptFlt) {
        sessionStorage.removeItem('aptransco_reattempt_flt');
        const mock = mockList.find((item) => item.id === reattemptFlt);
        if (mock) {
            appState.selectedFlt = mock.id;
            appState.selectedTest = mock;
            populateInstructionsPage();
            switchPage('instructionPage');
        }
    }
};

window.addEventListener('DOMContentLoaded', initializeApp);
