import changePageState from '../game/pageState';
import { startGame, getScore } from '../game/gameEvents';

function openConfirm() {
  document.querySelector('.result-page__unconfirm').style.display = 'none';
  document.querySelector('.result-page__confirm').style.display = 'block';
}

function openUnconfirm() {
  document.querySelector('.result-page__unconfirm').style.display = 'block';
  document.querySelector('.result-page__confirm').style.display = 'none';
}

function setMessage() {
  const score = getScore();

  if (score === 30) {
    openConfirm();
    return;
  }

  document.querySelector('.result-page__score').textContent = score;
  document.querySelector('.result-page__unscore').textContent = 30 - score;
  openUnconfirm();
}

function startNewGame() {
  startGame();
  changePageState('resultPage', 'close');
  changePageState('gamePage', 'open');
}

function openMenu() {
  changePageState('resultPage', 'close');
  changePageState('startPage', 'open');
}

function setResultPageEvents() {
  document.querySelector('.result-page__btn-new').addEventListener('click', startNewGame);
  document.querySelector('.result-page__btn-menu').addEventListener('click', openMenu);
}

export {
  openConfirm,
  openUnconfirm,
  setResultPageEvents,
  setMessage,
};
