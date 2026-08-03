import { qs, createElement } from './utils.js';

const buttons = [
    'deg', 'rad', 'C', '⌫',
    'sin', 'cos', 'tan', '√',
    'asin', 'acos', 'atan', 'log',
    'sinh', 'cosh', 'tanh', 'ln',
    'π', 'e', '(', ')',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '^', '+',
    '%', 'Exp', '=',
];

let mode = 'deg';
let expressionTokens = [];

const mathFunctions = {
    sin: (x) => (mode === 'deg' ? Math.sin((x * Math.PI) / 180) : Math.sin(x)),
    cos: (x) => (mode === 'deg' ? Math.cos((x * Math.PI) / 180) : Math.cos(x)),
    tan: (x) => (mode === 'deg' ? Math.tan((x * Math.PI) / 180) : Math.tan(x)),
    asin: (x) => (mode === 'deg' ? (Math.asin(x) * 180) / Math.PI : Math.asin(x)),
    acos: (x) => (mode === 'deg' ? (Math.acos(x) * 180) / Math.PI : Math.acos(x)),
    atan: (x) => (mode === 'deg' ? (Math.atan(x) * 180) / Math.PI : Math.atan(x)),
    sinh: (x) => Math.sinh(x),
    cosh: (x) => Math.cosh(x),
    tanh: (x) => Math.tanh(x),
    ln: (x) => Math.log(x),
    log: (x) => Math.log10(x),
    sqrt: (x) => Math.sqrt(x),
    abs: (x) => Math.abs(x),
    exp: (x) => Math.exp(x),
};

const getDisplayExpression = () => expressionTokens.map((token) => token.display).join('');
const getEvalExpression = () => expressionTokens.map((token) => token.eval).join('');

const safeEval = (expression) => {
    try {
        if (/[^0-9+\-*/().%,^\sA-Za-z]/.test(expression)) return 'Error';
        const sanitized = expression
            .replace(/π/g, 'Math.PI')
            .replace(/Exp\(/g, 'exp(')
            .replace(/\^/g, '**')
            .replace(/log\(/g, 'log(')
            .replace(/ln\(/g, 'ln(')
            .replace(/√\(/g, 'sqrt(');

        const result = Function(
            'sin',
            'cos',
            'tan',
            'asin',
            'acos',
            'atan',
            'sinh',
            'cosh',
            'tanh',
            'log',
            'ln',
            'sqrt',
            'abs',
            'exp',
            'pow',
            'Math',
            `"use strict"; return (${sanitized})`
        )(
            mathFunctions.sin,
            mathFunctions.cos,
            mathFunctions.tan,
            mathFunctions.asin,
            mathFunctions.acos,
            mathFunctions.atan,
            mathFunctions.sinh,
            mathFunctions.cosh,
            mathFunctions.tanh,
            mathFunctions.log,
            mathFunctions.ln,
            mathFunctions.sqrt,
            mathFunctions.abs,
            mathFunctions.exp,
            Math.pow,
            Math
        );

        return Number.isFinite(result) ? result : 'Error';
    } catch {
        return 'Error';
    }
};

const renderCalculator = () => {
    const calculatorRoot = qs('#calculator');
    if (!calculatorRoot) return;

    calculatorRoot.innerHTML = '';
    const calculator = createElement('div', { className: 'calculator' });
    calculator.innerHTML = `
        <div class="calculator-screen">
            <div id="calcMode" class="calculator-mode">${mode.toUpperCase()}</div>
            <div id="calcDisplay" class="calculator-display">0</div>
        </div>
        <div class="calculator-buttons"></div>
    `;

    const buttonsContainer = calculator.querySelector('.calculator-buttons');
    buttons.forEach((label) => {
        const button = createElement('button', { className: 'calculator-button', textContent: label });
        button.type = 'button';
        button.addEventListener('click', () => handleCalculatorInput(label));
        buttonsContainer.appendChild(button);
    });

    calculatorRoot.appendChild(calculator);
};

const updateDisplay = (value) => {
    const display = qs('#calcDisplay');
    if (display) display.textContent = value;
};

const updateModeDisplay = () => {
    const modeDisplay = qs('#calcMode');
    if (modeDisplay) modeDisplay.textContent = mode.toUpperCase();
};

const clearExpression = () => {
    expressionTokens = [];
    updateDisplay('0');
};

const backspaceExpression = () => {
    expressionTokens.pop();
    updateDisplay(getDisplayExpression() || '0');
};

const addToken = (display, evalValue = display) => {
    expressionTokens.push({ display, eval: evalValue });
    updateDisplay(getDisplayExpression());
};

const handleCalculatorInput = (input) => {
    switch (input) {
        case 'C':
            clearExpression();
            break;
        case '⌫':
            backspaceExpression();
            break;
        case 'deg':
            mode = 'deg';
            updateModeDisplay();
            break;
        case 'rad':
            mode = 'rad';
            updateModeDisplay();
            break;
        case '=': {
            const expression = getEvalExpression();
            const result = safeEval(expression);
            if (result === 'Error') {
                clearExpression();
                updateDisplay('Error');
            } else {
                expressionTokens = [{ display: String(result), eval: String(result) }];
                updateDisplay(String(result));
            }
            break;
        }
        case 'π':
            addToken('π', 'Math.PI');
            break;
        case 'e':
            addToken('e', 'Math.E');
            break;
        case '√':
            addToken('√(', 'sqrt(');
            break;
        case 'Exp':
            addToken('Exp(', 'exp(');
            break;
        case 'sin':
        case 'cos':
        case 'tan':
        case 'asin':
        case 'acos':
        case 'atan':
        case 'sinh':
        case 'cosh':
        case 'tanh':
        case 'ln':
        case 'log':
            addToken(`${input}(`, `${input}(`);
            break;
        default:
            addToken(input, input);
            break;
    }
};

export const initCalculator = () => {
    renderCalculator();
};
