const toggle = document.querySelector('.toggle')
const navList = document.querySelector('.nav__list')
const navLinks = document.querySelectorAll('.nav__link')
const logo = document.querySelector('.nav__logo')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('toggle--active')
    navList.classList.toggle('nav__list--active')
})

const closeNavMenu = () => {
    navList.classList.remove('nav__list--active')
    toggle.classList.remove('toggle--active')
}

navLinks.forEach(link => {
    link.addEventListener('click', closeNavMenu)
})

logo.addEventListener('click', closeNavMenu)