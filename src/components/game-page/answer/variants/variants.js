import { checkTroothVariant, setInfo } from '../../../game/gameEvents';
import { changeBtnStyle, accessDenied } from '../../game-page';

function playTrue() {
  const sound = new Audio('src/assets/audio/accept.mp3');
  sound.play();
}

function playFalse() {
  const sound = new Audio('src/assets/audio/denied.mp3');
  sound.play();
}

function blockBtns() {
  const defaultCheckers = document.querySelectorAll('.answer__check_default');
  defaultCheckers.forEach((item) => {
    item.classList.toggle('answer__check_default');
  });
}

function chooseVariant(e) {
  const target = e.currentTarget;
  const currentItemId = [...document.querySelectorAll('.answer__variant')].indexOf(target);

  setInfo(currentItemId);

  if (!target.firstElementChild.classList.contains('answer__check_default')) return;

  target.firstElementChild.classList.toggle('answer__check_default');

  if (checkTroothVariant(currentItemId)) {
    target.firstElementChild.classList.toggle('answer__check_accept');
    changeBtnStyle();
    playTrue();
    blockBtns();
    return;
  }

  target.firstElementChild.classList.toggle('answer__check_denied');
  playFalse();
  accessDenied(target.firstElementChild);
  accessDenied(target.lastElementChild);
}

function setVariantEvents() {
  const variantBtns = document.querySelectorAll('.answer__variant');
  variantBtns.forEach((variant) => variant.addEventListener('click', chooseVariant));
}

export { setVariantEvents };
