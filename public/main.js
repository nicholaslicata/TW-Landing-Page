const hamburgerBtn = document.querySelector('#hamburger-btn');
const nav = document.querySelector('#nav');

hamburgerBtn.addEventListener('click', function() {
    if (nav.classList.contains('h-0')) {
        nav.classList.remove('h-0');
        nav.classList.add('h-40');
        nav.style.top = '10%';
    } else if (nav.classList.contains('h-40')) {
        nav.classList.remove('h-40');
        nav.classList.add('h-0');
        nav.style.top = '100%';
    }
})