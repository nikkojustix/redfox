import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

// mobile menu
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const menu = document.querySelector('.menu');
  const menuInner = document.querySelector('.menu__inner');
  document.body.classList.add('locked');
  menu.classList.add('menu--opened');
  menuInner.classList.add('menu__inner--opened');
  menu.addEventListener('click', (e) => {
    if (e.target === menu) {
      document.body.classList.remove('locked');
      menu.classList.remove('menu--opened');
      menuInner.classList.remove('menu__inner--opened');
    }
  });
});

// modals
flsFunctions.bindModal('.header__callback', '.modal--callback', '.modal__close');
