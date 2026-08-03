import { qs, createElement } from './utils.js';

const buttons = [
    'deg', 'rad', 'C', '⌫', 'sin', 'cos', 'tan', '√',
    'asin', 'acos', 'atan', 'log', 'sinh', 'cosh', 'tanh', 'ln',
    'π', 'e', '(', ')', '7', '8', '9', '/',
    '4', '5', '6', '*', '1', '2', '3', '-',
    '0', '.', '^', '+', '%', 'Exp', '=',
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
            <div id="calcMode" class="calculator-mode" hidden aria-hidden="true">${mode.toUpperCase()}</div>
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
    updateModeDisplay();
};

const updateDisplay = (value) => {
    const display = qs('#calcDisplay');
    if (display) display.textContent = value;
};

const updateModeDisplay = () => {
    const modeDisplay = qs('#calcMode');
    if (modeDisplay) {
        modeDisplay.textContent = mode.toUpperCase();
        modeDisplay.hidden = true;
        modeDisplay.setAttribute('aria-hidden', 'true');
    }
    // Highlight active angle-mode button instead of showing DEG on the result
    qs('#calculator')?.querySelectorAll('.calculator-button').forEach((button) => {
        if (button.textContent === 'deg' || button.textContent === 'rad') {
            button.classList.toggle('is-active-mode', button.textContent === mode);
        }
    });
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
    initFloatingCalculator();
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const getCalcBoundsParent = () => {
    const examPage = qs('#examPage');
    if (document.fullscreenElement === examPage) {
        return examPage;
    }
    return null;
};

const getParentMetrics = () => {
    const parent = getCalcBoundsParent();
    if (parent) {
        const rect = parent.getBoundingClientRect();
        return {
            parent,
            originX: rect.left,
            originY: rect.top,
            width: parent.clientWidth,
            height: parent.clientHeight,
        };
    }
    return {
        parent: null,
        originX: 0,
        originY: 0,
        width: window.innerWidth,
        height: window.innerHeight,
    };
};

const placeCalculatorDefault = (panel) => {
    const width = panel.offsetWidth || 640;
    const height = panel.offsetHeight || 360;
    const { width: parentW, height: parentH } = getParentMetrics();
    const left = Math.max(12, parentW - width - 24);
    const top = Math.max(12, Math.min(parentH - height - 24, 96));
    panel.style.width = `${Math.min(640, parentW - 24)}px`;
    panel.style.height = 'auto';
    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
    panel.style.right = 'auto';
    panel.style.bottom = 'auto';
};

export const showFloatingCalculator = () => {
    const panel = qs('#calculatorPanel');
    if (!panel) return;
    panel.classList.remove('collapsed');
    panel.hidden = false;
    panel.style.display = 'flex';
    if (!panel.dataset.placed) {
        requestAnimationFrame(() => {
            placeCalculatorDefault(panel);
            panel.dataset.placed = '1';
        });
    }
};

export const hideFloatingCalculator = () => {
    const panel = qs('#calculatorPanel');
    if (!panel) return;
    panel.classList.add('collapsed');
    panel.hidden = true;
    panel.style.display = 'none';
};

const initFloatingCalculator = () => {
    const panel = qs('#calculatorPanel');
    const handle = qs('#calculatorDragHandle');
    const resizeHandle = qs('#calculatorResizeHandle');
    const closeBtn = qs('#calculatorCloseBtn');
    if (!panel || !handle) return;

    let dragging = false;
    let resizing = false;
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;
    let startW = 0;
    let startH = 0;

    const readPanelLocalPos = () => {
        const { originX, originY } = getParentMetrics();
        const rect = panel.getBoundingClientRect();
        return {
            left: rect.left - originX,
            top: rect.top - originY,
            width: rect.width,
            height: rect.height,
        };
    };

    const onPointerMove = (event) => {
        if (!dragging && !resizing) return;
        const { width: parentW, height: parentH } = getParentMetrics();

        if (dragging) {
            const dx = event.clientX - startX;
            const dy = event.clientY - startY;
            const w = panel.offsetWidth;
            const h = panel.offsetHeight;
            const left = clamp(startLeft + dx, 0, Math.max(0, parentW - w));
            const top = clamp(startTop + dy, 0, Math.max(0, parentH - h));
            panel.style.left = `${left}px`;
            panel.style.top = `${top}px`;
            panel.style.right = 'auto';
            panel.style.bottom = 'auto';
        }

        if (resizing) {
            const dx = event.clientX - startX;
            const dy = event.clientY - startY;
            const minW = 420;
            const minH = 280;
            const maxW = Math.min(720, parentW - startLeft);
            const maxH = Math.min(520, parentH - startTop);
            panel.style.width = `${clamp(startW + dx, minW, maxW)}px`;
            panel.style.height = `${clamp(startH + dy, minH, maxH)}px`;
        }
    };

    const stopInteract = () => {
        dragging = false;
        resizing = false;
        document.body.classList.remove('calculator-dragging');
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', stopInteract);
    };

    handle.addEventListener('pointerdown', (event) => {
        if (event.target.closest('.calculator-close')) return;
        event.preventDefault();
        dragging = true;
        panel.dataset.placed = '1';
        const pos = readPanelLocalPos();
        startX = event.clientX;
        startY = event.clientY;
        startLeft = pos.left;
        startTop = pos.top;
        document.body.classList.add('calculator-dragging');
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', stopInteract);
    });

    resizeHandle?.addEventListener('pointerdown', (event) => {
        event.preventDefault();
        event.stopPropagation();
        resizing = true;
        panel.dataset.placed = '1';
        const pos = readPanelLocalPos();
        startX = event.clientX;
        startY = event.clientY;
        startLeft = pos.left;
        startTop = pos.top;
        startW = pos.width;
        startH = pos.height;
        document.body.classList.add('calculator-dragging');
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', stopInteract);
    });

    closeBtn?.addEventListener('click', () => {
        hideFloatingCalculator();
        const toggle = qs('#toggleCalculator');
        if (toggle) {
            toggle.setAttribute('aria-expanded', 'false');
            toggle.textContent = 'Show Calculator';
        }
    });

    document.addEventListener('fullscreenchange', () => {
        if (panel.hidden || panel.classList.contains('collapsed')) return;
        const { width: parentW, height: parentH } = getParentMetrics();
        const pos = readPanelLocalPos();
        const left = clamp(pos.left, 0, Math.max(0, parentW - pos.width));
        const top = clamp(pos.top, 0, Math.max(0, parentH - pos.height));
        panel.style.left = `${left}px`;
        panel.style.top = `${top}px`;
        panel.style.right = 'auto';
        panel.style.bottom = 'auto';
    });
};

