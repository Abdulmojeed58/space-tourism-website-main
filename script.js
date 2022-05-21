const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const MENU = $(".menu")
const NAV = $("nav")
const ul = $("ul")
const navLinks = $$(".nav-link")
const CONTAINER = $(".container")




let ulHeight = ul.getBoundingClientRect().height;
MENU.addEventListener("click", ()=>{
    if(NAV.style.height == "0px") {
        CONTAINER.style.position = `fixed`
        NAV.style.height = `${ulHeight}px`
        MENU.src = "./assets/shared/icon-close.svg"
        // CLOSE.classList.remove("active")
    } else{
        CONTAINER.style.position = `static`
        NAV.style.height = "0px"
        MENU.src = "./assets/shared/icon-hamburger.svg"
    }
})
navLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
        CONTAINER.style.position = `static`
        NAV.style.height = "0px"
        MENU.src = "./assets/shared/icon-hamburger.svg"
    })
})


