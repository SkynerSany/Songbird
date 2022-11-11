import './game-page.scss';
import './header/header';
import './question/question';
import './answer/answer';

function openGamePage() {
  document.querySelector('.game-page').style.display = 'block';
}

function closeGamePage() {
  document.querySelector('.game-page').style.display = 'none';
}

export { openGamePage, closeGamePage };
