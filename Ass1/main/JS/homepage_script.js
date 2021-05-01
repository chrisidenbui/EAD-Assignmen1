// Transparent navbar when scroll window down
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY);
})

// Burger menu
const burger = document.querySelector('.menu-button');
const navmenu = document.querySelector('.nav-menu');
let burgerclick = false;
burger.addEventListener('click', () => {
    if (!burgerclick) {
        burger.classList.add('open');
        navmenu.classList.add('display');
        burgerclick = true;
    }
    else {
        burger.classList.remove('open');
        navmenu.classList.remove('display');
        burgerclick = false;
    }
})