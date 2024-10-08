function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
    sidenav.classList.toggle("open");
}

function closeNav() {
    const sidenav = document.getElementById("mySidenav");
    sidenav.classList.remove("open");
}

document.addEventListener('DOMContentLoaded', () => {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const body = document.body;
    const ul = document.querySelector('ul');
    const header = document.querySelector('header');
    const main = document.querySelector('.main');
    const main2 = document.querySelector('.main2');
    const group = document.querySelector('.group');
    

    function applyDarkMode(isDarkMode) {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            ul.classList.add('dark-mode');
            header.classList.add('dark-mode');
            main.classList.add('dark-mode');
            main2.classList.add('dark-mode');
            group.classList.add('dark-mode');
            darkModeSwitch.checked = true;
        } else {
            body.classList.remove('dark-mode');
            ul.classList.remove('dark-mode');
            header.classList.remove('dark-mode');
            main.classList.remove('dark-mode');
            main2.classList.remove('dark-mode');
            group.classList.remove('dark-mode');
            darkModeSwitch.checked = false;
        }
    }

    const darkModePreference = localStorage.getItem('dark-mode') === 'true';
    applyDarkMode(darkModePreference);

    if (darkModeSwitch) {
        darkModeSwitch.addEventListener('change', () => {
            const isDarkMode = darkModeSwitch.checked;
            applyDarkMode(isDarkMode);
            localStorage.setItem('dark-mode', isDarkMode);
        });
    }
});
