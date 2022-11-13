import changePageState from '../../game/pageState';
import { startGame } from '../../game/gameEvents';

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

function setStartPageEvents() {
  setName();

  document.querySelector('.menu__btn-start').addEventListener('click', startNewGame);
  document.querySelector('#link-quiz').addEventListener('click', startNewGame);
  document.querySelector('.menu__name').addEventListener('click', removeName);
  document.querySelector('.menu__name').addEventListener('blur', checkName);
}

export { setStartPageEvents };
