const menuBtns = document.getElementById("menuBtn");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

menuBtns.addEventListener('click', ()=>{
    if (mobileMenu.classList.contains('hide')){
        menuBtns.classList.add('burger');
        mobileMenu.classList.remove('hide');
        body.classList.add('noscroll');
    } else {
        mobileMenu.classList.add('hide');
        menuBtns.classList.remove('burger');
        body.classList.remove('noscroll');
    }
})

console.log("Hello, World!");