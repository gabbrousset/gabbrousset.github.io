document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const ageSpan = document.getElementById('age');
    const zsh = document.getElementById('zsh-entries');
    const entryTemplate = zsh.lastElementChild.cloneNode(true);

    document.addEventListener('keydown', (event) => {
        const { key, metaKey, ctrlKey } = event;
        const lastEntry = zsh.lastElementChild;
        const entryText = lastEntry.children[1];
        if ((key == 'k' && metaKey) || (key == 'l' && ctrlKey)) {
            zsh.querySelectorAll('.terminal-entry').forEach((e) => e.remove());
            zsh.appendChild(entryTemplate.cloneNode(true));
        } else if (key.match(/^.$/) && !metaKey) {
            entryText.innerHTML += key.toString();
        } else if (key === 'Backspace') {
            entryText.innerHTML = entryText.innerHTML.slice(0, -1);
        } else if (key === 'Enter') {
            lastEntry.removeChild(lastEntry.lastElementChild);
            zsh.appendChild(entryTemplate.cloneNode(true));
            zsh.lastElementChild.scrollIntoView();
        } else {
            console.log('unsupported key', key);
        }
    });

    const updateAge = () => {
        const birthDate = new Date(2001, 9, 28);
        const currentDate = new Date();

        const milliseconds = currentDate.getTime() - birthDate.getTime();

        const age = milliseconds / (3.154e10).toFixed(10);
        ageSpan.innerHTML = age.toFixed(9);
    };

    window.setInterval(updateAge, 100);
});
