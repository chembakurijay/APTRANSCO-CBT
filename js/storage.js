export const appState = {
    currentPage: 'home',
    currentQuestionIndex: 0,
    questions: [],
    answers: [],
    reviewFlags: [],
    remainingTime: 120 * 60,
    timerId: null,
    selectedFlt: '01',
    examStarted: false,
    submitted: false,
};

export const resetState = () => {
    appState.currentQuestionIndex = 0;
    appState.questions = [];
    appState.answers = [];
    appState.reviewFlags = [];
    appState.remainingTime = 120 * 60;
    appState.timerId = null;
    appState.examStarted = false;
    appState.submitted = false;
};
