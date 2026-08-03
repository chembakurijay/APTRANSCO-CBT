export const EXAM_DURATION = 180 * 60;

export const appState = {
    currentPage: 'home',
    currentQuestionIndex: 0,
    questions: [],
    answers: [],
    reviewFlags: [],
    remainingTime: EXAM_DURATION,
    timerId: null,
    selectedFlt: 'civil01',
    selectedTest: null,
    examStarted: false,
    examStartedAt: null,
    submitted: false,
    lastAttemptId: null,
};

export const resetState = () => {
    appState.currentQuestionIndex = 0;
    appState.questions = [];
    appState.answers = [];
    appState.reviewFlags = [];
    appState.remainingTime = EXAM_DURATION;
    appState.timerId = null;
    appState.examStarted = false;
    appState.examStartedAt = null;
    appState.submitted = false;
    appState.selectedTest = null;
    appState.lastAttemptId = null;
};
