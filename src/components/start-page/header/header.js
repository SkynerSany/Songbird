import changePageState from '../../shared/pageState';
import { startNewGame } from '../menu/menu';

function clickBurgerMenu() {
  const burgerMenu = document.querySelector('.start-page__menu-bar');
  burgerMenu.classList.toggle('start-page__menu-bar_active');
  const menu = document.querySelector('.start-page__nav');
  menu.style.transform = burgerMenu.classList.contains('start-page__menu-bar_active') ? 'translateX(0vw)' : 'translateX(100vw)';
}

export default function setStartPageHeaderEvents() {
  document.querySelector('.start-page__menu-bar').addEventListener('click', clickBurgerMenu);
  document.querySelector('#link-quiz').addEventListener('click', () => {
    if (document.documentElement.scrollWidth < 577) {
      clickBurgerMenu();
    }

    startNewGame();
  });
  document.querySelector('#link-menu').addEventListener('click', (e) => {
    if (document.documentElement.scrollWidth < 577) {
      clickBurgerMenu();
    }
    e.target.classList.toggle('start-page__link_active');
    changePageState('menu', 'open');
    changePageState('gallery', 'close');
  });
}
