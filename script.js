const menuIcon = document.getElementById("menuIcon")
const menuBox = document.querySelector(".menu-box")

menuIcon.addEventListener("click", () => {
    menuBox.classList.toggle("active")

    if(menuBox.classList.contains("active")){
        menuIcon.src = "img/close.png"
    }else{
        menuIcon.src = "img/menu.png"
    }
})