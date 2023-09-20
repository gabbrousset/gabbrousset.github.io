document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const toggleThemeButton = document.getElementById('theme-button');
    const themeCSS = document.getElementById('theme-css');
    const themeSVG = document.getElementById('theme-SVG');
    const SVG_path = document.getElementById('SVG_path');
    const favicon = document.getElementById('favicon');
    const userTheme = localStorage.getItem('userTheme');
    const basePath = location.pathname === '/' ? '.' : '..';

    toggleThemeButton.addEventListener('click', () => {
        if (themeCSS.getAttribute('href') == `${basePath}/css/dark.css`) {
            changeTheme('light');
        } else {
            changeTheme('dark');
        }
    });

    const changeTheme = (theme) => {
        if (theme == 'light') {
            themeCSS.href = `${basePath}/css/light.css`;
            themeSVG.setAttribute('class', 'bi bi-moon');
            SVG_path.setAttribute(
                'd',
                'M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z'
            );
            favicon.href = `${basePath}/assets/favicon-light.png`;
            storeTheme('light');
        } else {
            themeCSS.href = `${basePath}/css/dark.css`;
            themeSVG.setAttribute('class', 'bi bi-sun');
            SVG_path.setAttribute(
                'd',
                'M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z'
            );
            favicon.href = `${basePath}/assets/favicon-dark.png`;
            storeTheme('dark');
        }
    };

    const storeTheme = (theme) => {
        localStorage.setItem('userTheme', theme);
    };

    changeTheme(userTheme);
});
