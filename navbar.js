const toggleMenu = () => {
  nav.classList.toggle('menu--open')
}

const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);