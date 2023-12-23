const openMobileMenuIcon = document.querySelector('.header__hamburger-menu');
const closeMobileMenuIcon = document.querySelector('.nav__close-icon');
const mobileMenu = document.querySelector('.nav');
const links = document.querySelectorAll('.nav__link');


openMobileMenuIcon.addEventListener('click', openMobileMenu);

closeMobileMenuIcon.addEventListener('click', closeMobileMenu);

// click on any menu item should diclose menu drawer
links.forEach(link => link.addEventListener('click', closeMobileMenu));

function openMobileMenu() {
    mobileMenu.classList.add('open-drawer');
    document.body.classList.add('overlay');
}

function closeMobileMenu() {
    mobileMenu.classList.remove('open-drawer');
    document.body.classList.remove('overlay');
}