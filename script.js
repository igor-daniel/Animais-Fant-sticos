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