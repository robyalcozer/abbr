let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let thumbnails = document.getElementsByClassName("thumbnail");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active-thumbnail");
    }

    slides[slideIndex - 1].style.display = "block";

    
    thumbnails[slideIndex - 1].classList.add("active-thumbnail");
}

setInterval(() => {
    plusSlides(1);
}, 5000); 


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
    const sidenav = document.querySelector('.sidenav');
    
    

    function applyDarkMode(isDarkMode) {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            ul.classList.add('dark-mode');
            header.classList.add('dark-mode');
            main.classList.add('dark-mode');
            main2.classList.add('dark-mode');
            group.classList.add('dark-mode');
            sidenav.classList.add('dark-mode');
            darkModeSwitch.checked = true;
        } else {
            body.classList.remove('dark-mode');
            ul.classList.remove('dark-mode');
            header.classList.remove('dark-mode');
            main.classList.remove('dark-mode');
            main2.classList.remove('dark-mode');
            group.classList.remove('dark-mode');
            sidenav.classList.remove('dark-mode');
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
