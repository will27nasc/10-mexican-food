// Seleção das tags que eu desejo manipular
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let header = document.querySelector("header");
let logo = document.querySelector(".logo");
let img = document.querySelector("img");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");

// Adicionando a classe active e a class fixo
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("fixo");
});

// Removendo a classe active
document.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        body.classList.remove("fixo");
    })
);

// Deixando o menu fixo a partir de 100px de rolagem e removendo o fico com width de 768px
window.onresize = function(){
    if(window.innerWidth <= 768) {
        window.onscroll = function(){
            var top = window.scrollY || document.documentElement.scrollTop
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
    } if(window.innerWidth > 768) {
        body.classList.remove("fixo");
    }
}












