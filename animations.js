var nav = document.querySelector('.nav-ul');
var navlist = document.querySelector('.nav-list');
var navbar = document.querySelector('.nav-bar');
// var stripe2 = document.querySelector('#stripe2');
// var stripe3 = document.querySelector('#stripe3');

// menu.addEventListener('click', displayMenu);
function mobileMenu(menu) {
    menu.classList.toggle('rotate');
    nav.classList.toggle('nav-show');
    navlist.classList.toggle('nav-show');
    navbar.classList.toggle('align-start');
}