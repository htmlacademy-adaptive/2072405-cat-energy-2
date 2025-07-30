document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.main-nav');
  const openBtn = nav.querySelector('.main-nav__toggle:not(.main-nav__toggle--close)');
  const closeBtn = nav.querySelector('.main-nav__toggle--close');
  const menu = nav.querySelector('.main-nav__list');

  menu.classList.remove('main-nav__list--open');
  menu.classList.add('main-nav__list--close');
  closeBtn.style.display = 'none';
  openBtn.style.display = 'block';

  openBtn.addEventListener('click', () => {
    menu.classList.remove('main-nav__list--close');
    menu.classList.add('main-nav__list--open');

    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('main-nav__list--open');
    menu.classList.add('main-nav__list--close');

    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
  });
});
