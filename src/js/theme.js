function initChangeTheme() {
    const toggle = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    if (!toggle || !icon) return;

    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme');

    function updateIcon(theme) {
        const newHref = theme === 'dark'
                        ? '/src/assets/icons/icons.svg#icon-moon' 
                        : '/src/assets/icons/icons.svg#icon-sun';

        /*
        we can't do something like: 
        icon.src = "/relativo/path";
        cause the svg it is set by the `href` attribute
        */
        icon.setAttribute('href', newHref);
    }

    if (savedTheme) {
        root.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    }

    toggle.addEventListener('click', () => {
        const next =
            root.getAttribute('data-theme') === 'dark'
                ? 'light' 
                : 'dark'; 

        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateIcon(next);
    });
}

export default initChangeTheme;
