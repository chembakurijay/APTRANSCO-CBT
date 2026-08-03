import { qs, createElement } from './utils.js';

const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    '(', ')', 'C', '⌫'
];

const safeEval = (expression) => {
    try {
        if (/[^0-9.+\-*/() ]/.test(expression)) return 'Error';
        // eslint-disable-next-line no-new-func
        const result = Function(`"use strict"; return (${expression})`)();
        return Number.isFinite(result) ? result : 'Error';
    } catch {
        return 'Error';
    }
};

const renderCalculator = () => {
    const calculatorRoot = qs('#calculator');
    if (!calculatorRoot) return;

    const calculator = createElement('div', { className: 'calculator' });
    calculator.innerHTML = `
        <div class="calculator-screen">
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

let expression = '';

const updateDisplay = (value) => {
    const display = qs('#calcDisplay');
    if (display) display.textContent = value;
};

const handleCalculatorInput = (input) => {
    if (input === 'C') {
        expression = '';
        updateDisplay('0');
        return;
    }
    if (input === '⌫') {
        expression = expression.slice(0, -1);
        updateDisplay(expression || '0');
        return;
    }
    if (input === '=') {
        const result = safeEval(expression);
        expression = result === 'Error' ? '' : String(result);
        updateDisplay(result);
        return;
    }
    expression += input;
    updateDisplay(expression);
};

export const initCalculator = () => {
    renderCalculator();
};
