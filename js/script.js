'use strict';

const stickyMenu = () => {
  const menu = document.querySelector('.header-nav');
    let heightToMenu = (-menu.getBoundingClientRect().top) + document.body.getBoundingClientRect().top;
    const fixedMenu = () => {
      let bodyYCoord = document.body.getBoundingClientRect().top;
      if (heightToMenu >= bodyYCoord) {
        menu.classList.add('fixed');
      } else {
        menu.classList.remove('fixed');
      }
    };
  document.addEventListener('scroll', fixedMenu);
};
stickyMenu();
