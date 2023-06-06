let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let header = document.querySelector("header");
let logo = document.querySelector(".logo");
let img = document.querySelector("img");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("fixo");
});

document.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        body.classList.remove("fixo");
    })
);

window.onresize = function(){
    if(window.innerWidth <= 768) {
        window.onscroll = function(){
            var top = window.pageYOffset || document.documentElement.scrollTop
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












