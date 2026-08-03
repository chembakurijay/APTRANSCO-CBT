import { createElement } from './utils.js';

export const renderDiagram = (container, imageUrl) => {
    if (!container) return;
    container.innerHTML = '';

    if (!imageUrl) {
        container.style.display = 'none';
        return;
    }

    const wrapper = createElement('div', {
        className: 'diagram-wrapper',
    });

    const image = createElement('img', {
        attributes: {
            src: imageUrl,
            alt: 'Question diagram',
            loading: 'lazy',
        },
    });

    image.addEventListener('click', () => {
        const dialog = createElement('div', { className: 'diagram-overlay' });
        dialog.innerHTML = `
            <div class="diagram-modal">
                <button class="button button-secondary diagram-close">Close</button>
                <img src="${imageUrl}" alt="Expanded diagram" />
            </div>
        `;
        document.body.appendChild(dialog);
        dialog.querySelector('.diagram-close')?.addEventListener('click', () => document.body.removeChild(dialog));
    });

    wrapper.appendChild(image);
    container.appendChild(wrapper);
    container.style.display = '';
};
