'use strict';

const menuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.navigation');
const menuLinks = menu.querySelectorAll('.navigation__link');
const subMenu = menu.querySelector('.navigation__submenu');
const subMenuLinks = subMenu.querySelectorAll('.navigation__submenu-link');
const body = document.querySelector('body');
const button = menu.querySelector('.navigation__button');
const overlay = document.querySelector('.overlay');

export const menuControl = () => {
  const toggleMenu = () => {
    mobileBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    overlay.classList.toggle('active');
  };
};
