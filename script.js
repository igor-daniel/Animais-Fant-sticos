function initMenuTab(){
const tabImg = document.querySelectorAll(".js-tabImg li");
const tabContent = document.querySelectorAll(".js-tabContent section")


function tabClass(index){
    tabContent.forEach((section) => {
        section.classList.remove("ativo")
    })

    tabContent[index].classList.add("ativo")
}

tabImg.forEach((link, index) => {
    link.addEventListener("click", () => {
        tabClass(index)
    })
})
}
initMenuTab()


function initAcordin(){
    const listaDT = document.querySelectorAll(".js-acordinList dt")

listaDT[0].classList.add('ativo')
listaDT[0].nextElementSibling.classList.add('ativo')

function plusText(){
    this.classList.toggle("ativo")
    this.nextElementSibling.classList.toggle("ativo")
}
listaDT.forEach((el) => {
    el.addEventListener('click', plusText);
})
}
initAcordin()

function initScrollSuave(){
    const menu = document.querySelectorAll(".js-menu a[href^='#']")

    function scrollSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        
        section.scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
    }

    menu.forEach((el)=> {
    el.addEventListener("click", scrollSection);
    })
}
initScrollSuave()

function initAnimaScroll(){

const sections = document.querySelectorAll(".js-scroll")
const windowMetade = window.innerHeight * 0.6;

function animaScroll(){
    sections.forEach((section) => {
        const topo = section.getBoundingClientRect().top;
        const isSectionVisible = (topo - windowMetade) < 0;
        if(isSectionVisible) {
            section.classList.add("ativo")
        }
     })
}

animaScroll()

window.addEventListener("scroll", animaScroll)
    
}
initAnimaScroll()