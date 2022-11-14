import changePageState from '../../shared/pageState';
import { startGame } from '../../game/gameEvents';
import { setGallery } from '../gallery/gallery';

function startNewGame() {
  startGame();

  changePageState('startPage', 'close');
  changePageState('gamePage', 'open');
}

function removeName(e) {
  e.target.textContent = '';
}

function saveName(name) {
  localStorage.songBird_name = name;
}

function setName() {
  document.querySelector('.menu__name').textContent = localStorage.songBird_name || '[ваше имя]';
}

function checkName(e) {
  if (e.target.textContent === '') {
    e.target.textContent = localStorage.songBird_name || '[ваше имя]';
    return;
  }

  saveName(e.target.textContent);
}

function openGallery() {
  document.querySelector('#link-menu').classList.toggle('start-page__link_active');
  changePageState('menu', 'close');
  changePageState('gallery', 'open');
  setGallery();
}

function setStartPageEvents() {
  setName();

  document.querySelector('.menu__btn-start').addEventListener('click', startNewGame);
  document.querySelector('.menu__btn-gallery').addEventListener('click', openGallery);
  document.querySelector('.menu__name').addEventListener('click', removeName);
  document.querySelector('.menu__name').addEventListener('blur', checkName);
}

export { setStartPageEvents, startNewGame };
