const popup = document.querySelector(".burger");
const burger = document.querySelector(".header__burger");
const closeBurger = document.querySelector(".burger__header-close")

popup.style.display = "none"

burger.addEventListener("click", () => {
    popup.style.display = "flex"
})

closeBurger.addEventListener("click", () => {
    popup.style.display = "none"
})

