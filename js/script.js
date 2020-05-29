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

const toggleModal = () => {
  const body = document.querySelector('body');
  const modal = document.querySelector('.modal')
  ;
  body.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.contacts') ||  target.closest('.close-btn') ||  target.classList.contains('modal')) {
      e.preventDefault();
      console.log(target);
      modal.classList.toggle('d-block');
    }
  });
};
toggleModal();

$('.carousel').carousel({
  interval: 2000
});