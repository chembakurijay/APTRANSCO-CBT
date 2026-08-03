import { createElement, clearElement } from './utils.js';
import { renderDiagram } from './diagram.js';

const escapeHtml = (value) => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Render a data table question block (CBT HTML table — not markdown text). */
export const renderDataTable = (container, dataTable) => {
    if (!container || !dataTable || !Array.isArray(dataTable.headers) || !Array.isArray(dataTable.rows)) {
        return false;
    }

    const wrap = createElement('div', { className: 'question-data-table-wrap' });
    if (dataTable.caption) {
        wrap.appendChild(createElement('p', {
            className: 'question-structured-caption',
            textContent: dataTable.caption,
        }));
    }

    const table = createElement('table', {
        className: 'question-data-table',
        attributes: { role: 'table' },
    });
    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    dataTable.headers.forEach((header) => {
        const th = document.createElement('th');
        th.textContent = header;
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    dataTable.rows.forEach((row) => {
        const tr = document.createElement('tr');
        (row || []).forEach((cell) => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);
    container.appendChild(wrap);
    return true;
};

/** Render List-I / List-II matching matrix as paired HTML tables. */
export const renderMatchingMatrix = (container, matrix) => {
    if (!container || !matrix) return false;
    const listI = matrix.listI || [];
    const listII = matrix.listII || [];
    if (!listI.length || !listII.length) return false;

    const wrap = createElement('div', { className: 'question-matching-wrap' });
    if (matrix.caption) {
        wrap.appendChild(createElement('p', {
            className: 'question-structured-caption',
            textContent: matrix.caption,
        }));
    }

    const grid = createElement('div', { className: 'question-matching-grid' });

    const buildListTable = (title, items, sideClass) => {
        const side = createElement('div', { className: `question-matching-side ${sideClass}` });
        side.appendChild(createElement('h4', { textContent: title || 'List' }));
        const table = createElement('table', { className: 'question-matching-table' });
        const tbody = document.createElement('tbody');
        items.forEach((item) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<th scope="row">${escapeHtml(item.code)}</th><td>${escapeHtml(item.text)}</td>`;
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        side.appendChild(table);
        return side;
    };

    grid.appendChild(buildListTable(matrix.listITitle || 'List-I', listI, 'is-list-i'));
    grid.appendChild(buildListTable(matrix.listIITitle || 'List-II', listII, 'is-list-ii'));
    wrap.appendChild(grid);

    if (matrix.instruction) {
        wrap.appendChild(createElement('p', {
            className: 'question-matching-instruction',
            textContent: matrix.instruction,
        }));
    }

    container.appendChild(wrap);
    return true;
};

/**
 * Render diagram + optional dataTable / matchingMatrix into exam or review media area.
 * MASTER_RULES: Table and Matching Matrix questions must show real HTML tables in CBT.
 */
export const renderQuestionMedia = (container, question) => {
    if (!container) return;
    clearElement(container);

    const hasTable = question?.dataTable
        && Array.isArray(question.dataTable.headers)
        && Array.isArray(question.dataTable.rows);
    const hasMatrix = question?.matchingMatrix
        && Array.isArray(question.matchingMatrix.listI)
        && Array.isArray(question.matchingMatrix.listII);
    const hasImage = Boolean(question?.image);

    if (!hasTable && !hasMatrix && !hasImage) {
        container.style.display = 'none';
        return;
    }

    container.style.display = '';

    if (hasTable) {
        renderDataTable(container, question.dataTable);
    }
    if (hasMatrix) {
        renderMatchingMatrix(container, question.matchingMatrix);
    }
    if (hasImage) {
        const diagramHost = createElement('div', { className: 'question-diagram-host' });
        container.appendChild(diagramHost);
        renderDiagram(diagramHost, question.image);
    }
};

/** HTML fragment for history / result review (same tables as live exam). */
export const structuredMediaHtml = (question) => {
    if (!question) return '';
    const parts = [];

    if (question.dataTable?.headers && question.dataTable?.rows) {
        const headers = question.dataTable.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join('');
        const rows = question.dataTable.rows.map((row) => (
            `<tr>${(row || []).map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`
        )).join('');
        parts.push(`
            <div class="question-data-table-wrap">
                ${question.dataTable.caption ? `<p class="question-structured-caption">${escapeHtml(question.dataTable.caption)}</p>` : ''}
                <table class="question-data-table"><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>
            </div>
        `);
    }

    if (question.matchingMatrix?.listI?.length && question.matchingMatrix?.listII?.length) {
        const side = (title, items) => `
            <div class="question-matching-side">
                <h4>${escapeHtml(title || 'List')}</h4>
                <table class="question-matching-table"><tbody>
                    ${items.map((item) => `<tr><th scope="row">${escapeHtml(item.code)}</th><td>${escapeHtml(item.text)}</td></tr>`).join('')}
                </tbody></table>
            </div>`;
        parts.push(`
            <div class="question-matching-wrap">
                ${question.matchingMatrix.caption ? `<p class="question-structured-caption">${escapeHtml(question.matchingMatrix.caption)}</p>` : ''}
                <div class="question-matching-grid">
                    ${side(question.matchingMatrix.listITitle || 'List-I', question.matchingMatrix.listI)}
                    ${side(question.matchingMatrix.listIITitle || 'List-II', question.matchingMatrix.listII)}
                </div>
                ${question.matchingMatrix.instruction ? `<p class="question-matching-instruction">${escapeHtml(question.matchingMatrix.instruction)}</p>` : ''}
            </div>
        `);
    }

    if (question.image) {
        parts.push(`<div class="question-media"><img src="${escapeHtml(question.image)}" alt="Question diagram" loading="lazy" /></div>`);
    }

    return parts.join('');
};
