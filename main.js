const openMenu = document.getElementById("openMenu")
const menu = document.querySelector('.menu')
const triangle = document.querySelector('.triangle')

openMenu.addEventListener('click', () => {
    menu.classList.toggle('show')
    triangle.classList.toggle('show')
})