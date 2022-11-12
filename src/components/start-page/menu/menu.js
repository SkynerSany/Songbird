import { openGamePage } from '../../game-page/game-page';
import { game } from '../../game/game';
import { closeStartPage } from '../start-page';

function startGame() {
  game.startGame();

  closeStartPage();
  openGamePage();
}

function setStartPageEvents() {
  document.querySelector('.menu__btn-start').addEventListener('click', startGame);
  document.querySelector('#link-quiz').addEventListener('click', startGame);
}

export { setStartPageEvents };
