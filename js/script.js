// Variaveis
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let header = document.querySelector("header");
let logo = document.querySelector(".logo");
let img = document.querySelector("img");
let body = document.querySelector("body");
let links = document.querySelectorAll(".nav-link");


// Funções
function menuMobile() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("fixo");
}

function menuDesktop() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("fixo");
}

function headerFixed() {
    let top = window.scrollY || document.documentElement.scrollTop;
    if(top > 100) {
        img.style.display = "none";
        logo.style.backgroundColor = "#207652";
        header.style.position = "sticky";
        header.style.top = "-100px";
    } else if(top > -100){
        img.style.display = "inline";
        logo.style.opacity = 1;
        header.style.position = "initial";
        logo.style.backgroundColor = "#1D6949";
    }
}

function menuInitial() {
    img.style.display = "inline";
    logo.style.opacity = 1;
    header.style.position = "initial";
    logo.style.backgroundColor = "#1D6949";
}

window.onresize = minWidth;

function minWidth() {
    if(window.innerWidth <= 768) {
        return window.onscroll = headerFixed;
    } else {
        return window.onscroll = menuInitial;
    }
}

// Chamada das funções
hamburger.addEventListener("click", menuMobile);

links.forEach((link) =>
    link.addEventListener("click", menuDesktop)
);




















