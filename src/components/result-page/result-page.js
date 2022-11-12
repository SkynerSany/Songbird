import { openStartPage } from '../start-page/start-page';
import { openGamePage } from '../game-page/game-page';
import { game } from '../game/game';

function openResultPage() {
  document.querySelector('.result-page').style.display = 'block';
}

function closeResultPage() {
  document.querySelector('.result-page').style.display = 'none';
}

function openConfirm() {
  document.querySelector('.result-page__unconfirm').style.display = 'none';
  document.querySelector('.result-page__confirm').style.display = 'block';
}

function openUnconfirm() {
  document.querySelector('.result-page__unconfirm').style.display = 'block';
  document.querySelector('.result-page__confirm').style.display = 'none';
}

function startNewGame() {
  game.startGame();
  closeResultPage();
  openGamePage();
}

function openMenu() {
  closeResultPage();
  openStartPage();
}

function setResultPageEvents() {
  document.querySelector('.result-page__btn-new').addEventListener('click', startNewGame);
  document.querySelector('.result-page__btn-menu').addEventListener('click', openMenu);
}

export {
  openResultPage,
  closeResultPage,
  openConfirm,
  openUnconfirm,
  setResultPageEvents,
};
