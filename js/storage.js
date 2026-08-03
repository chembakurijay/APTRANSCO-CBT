export const EXAM_DURATION = 180 * 60;

export const appState = {
    currentPage: 'home',
    currentQuestionIndex: 0,
    questions: [],
    answers: [],
    reviewFlags: [],
    remainingTime: EXAM_DURATION,
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
    appState.remainingTime = EXAM_DURATION;
    appState.timerId = null;
    appState.examStarted = false;
    appState.submitted = false;
};
