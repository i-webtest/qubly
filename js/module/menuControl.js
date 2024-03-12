'use strict';

const menuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.navigation');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

export const menuControl = () => {
  const toggleMenu = () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    overlay.classList.toggle('active');
  };

  const handleMenu = ({ target }) => {
    if (menu.classList.contains('active')) {
      if (!target.closest('.navigation')) {
        toggleMenu();
      } else if (
        (target.closest('.navigation') && target.closest('.navigation__link')) ||
        target.closest('.navigation__submenu-link') ||
        target.closest('.navigation__button')
      ) {
        toggleMenu();
      }
    } else if (target.closest('.hamburger')) {
      toggleMenu();
    }
  };

  document.addEventListener('click', handleMenu);
};
