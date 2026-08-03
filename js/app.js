import { appState, resetState } from './storage.js';
import { loadQuestionBank } from './questionLoader.js';
import { bindNavigation } from './navigation.js';
import { switchPage, populateHomePage, populateInstructionsPage, bindInstructionActions, renderQuestionPage, showSubmitModal, populateResultPage, bindResultActions } from './ui.js';
import { startTimer, stopTimer } from './timer.js';
import { qs } from './utils.js';

const mockList = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `FLT-${String(index + 1).padStart(2, '0')}`,
    questions: 100,
    marks: 100,
    duration: 120,
}));

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

const initializeApp = () => {
    resetState();
    populateHomePage(mockList);
    populateInstructionsPage();
    bindInstructionActions();
    bindNavigation();
    bindResultActions();
    bindApplicationEvents();
    bindBackButtons();
    switchPage('homePage');
};

window.addEventListener('DOMContentLoaded', initializeApp);
