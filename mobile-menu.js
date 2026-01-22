const mobileMenu = document.querySelector('.mobile__menu');
const menuBtnOpen = document.querySelector('.mobile__menu__open');
const menuBtnClose = document.querySelector('.mobile__menu__close');
const mobileLinks = document.querySelectorAll('.mobile__link');

const openMenu = () => {
  mobileMenu.classList.add('is-open');
};

const closeMenu = () => {
  mobileMenu.classList.remove('is-open');
};

    
menuBtnOpen.addEventListener('click', openMenu);


menuBtnClose.addEventListener('click', closeMenu);


mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});
