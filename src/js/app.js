import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

// mobile menu
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const menu = document.querySelector('.menu');
  const menuInner = document.querySelector('.menu__inner');
  const menuClose = document.querySelector('.menu__close');
  function showMenu() {
    document.body.classList.add('locked');
    menu.classList.add('menu--opened');
    menuInner.classList.add('menu__inner--opened');
  }
  function hideMenu() {
    document.body.classList.remove('locked');
    menu.classList.remove('menu--opened');
    menuInner.classList.remove('menu__inner--opened');
  }

  showMenu();
  menu.addEventListener('click', (e) => {
    if (e.target === menu) {
      hideMenu();
    }
  });
  menuClose.addEventListener('click', hideMenu);
});

// modals
flsFunctions.bindModal('.header__callback', '.modal--callback', '.modal__close');

// intro bg
const bgImgs = document.querySelectorAll('.intro__bg-img');
document.addEventListener('DOMContentLoaded', () => {
  bgImgs[0].classList.add('intro__bg-img--active');
});
let i = 1;
setInterval(() => {
  const img = bgImgs[i];
  let prev = i - 1;
  if (prev < 0) prev += bgImgs.length;
  bgImgs[prev].classList.add('intro__bg-img--prev');
  bgImgs[prev].classList.remove('intro__bg-img--active');

  let toRem = i - 2;
  if (toRem < 0) toRem += bgImgs.length;
  bgImgs[toRem].classList.remove('intro__bg-img--prev');

  img.classList.add('intro__bg-img--active');
  i++;
  if (i == bgImgs.length) i = 0;
}, 4000);
