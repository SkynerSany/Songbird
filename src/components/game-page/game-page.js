import { checkComlete, changeToDefault, resetScore, getCurrentSong } from '../game/gameEvents';
import { setDefaultQuestion } from './question/question';
import changePageState from '../shared/pageState';
import { setDefaultInfo } from './answer/info/info';
import { setMessage } from '../result-page/result-page';
import addPlayer from '../shared/player/player';

function accessDenied(btn) {
  btn.classList.toggle('access-denied');
  btn.disabled = true;

  setTimeout(() => {
    btn.classList.toggle('access-denied');
    btn.disabled = false;
  }, 500);
}

function changeBtnStyle() {
  const btn = document.querySelector('.next-level');
  btn.classList.toggle('next-level_disabled');
  btn.classList.toggle('next-level_active');
}

function clickNextLevel(e) {
  const state = checkComlete();
  document.querySelectorAll('.player__container').forEach((item) => {
    item.dispatchEvent(new CustomEvent('removeAudio'));
  });

  if (state === 'finish') {
    changePageState('gamePage', 'close');
    changePageState('resultPage', 'open');
    setMessage();
    changeBtnStyle();
    setDefaultQuestion();
    setDefaultInfo();
    resetScore();
    return;
  }

  if (state === 'next') {
    changeToDefault();
    changeBtnStyle();
    setDefaultQuestion();
    setDefaultInfo();
    addPlayer(document.querySelector('.question__player'), getCurrentSong());
    return;
  }

  accessDenied(e.target);
}

function setGamePageEvents() {
  document.querySelector('.next-level').addEventListener('click', clickNextLevel);
}

export {
  setGamePageEvents,
  changeBtnStyle,
  accessDenied,
};
