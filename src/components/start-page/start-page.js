import './start-page.scss';
import './header/header';
import './menu/menu';
import { openGamePage } from '../game-page/game-page';

function closeStartPage() {
  document.querySelector('.start-page').style.display = 'none';
}

function openStartPage() {
  document.querySelector('.start-page').style.display = 'block';
}

function startGame() {
  closeStartPage();
  openGamePage();
}

function setEvents() {
  document.querySelector('.menu__btn-start').addEventListener('click', startGame);
  document.querySelector('#link-quiz').addEventListener('click', startGame);
}

setEvents();

export { openStartPage, closeStartPage };
