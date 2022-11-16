import { game } from './game';
import { changeQuestion } from '../game-page/question/question';
import { setItemInfo } from '../game-page/answer/info/info';
import addPlayer from '../shared/player/player';

function setScore() {
  document.querySelector('.game-page__score-number').textContent = game.score;
}

function resetScore() {
  game.score = 0;
  setScore();
}

function updateScore() {
  game.score += game.maxLevelScore;
  setScore();
}

function getScore() {
  return game.score;
}

function getCurrentSong() {
  return game.currentSong;
}

function checkComlete() {
  const currentLang = localStorage.songBird_lang;

  if (game.curentLevel === game.data.length - 2) {
    document.querySelector('.next-level').textContent = currentLang === 'ru' ? 'Финишь' : 'Finish';
  }

  if (game.curentLevel === game.data.length - 1) {
    document.querySelector('.next-level').textContent = currentLang === 'ru' ? 'Следующий уровень' : 'Next Level';
    return 'finish';
  }

  if (game.levelComplite) {
    game.setNextLevel();
    return 'next';
  }

  return false;
}

function setInfo(currentItemId) {
  setItemInfo(game.currentSectionData[currentItemId]);
}

function checkTroothVariant(currentItemId) {
  if (currentItemId === game.currentAnimal) {
    updateScore();
    changeQuestion(game.currentSectionData[game.currentAnimal]);
    game.levelComplite = true;
    game.maxLevelScore = 5;
    return true;
  }

  game.maxLevelScore -= 1;
  return false;
}

function getCurrentLevel() {
  return game.curentLevel;
}

function setDefaultVariants() {
  const variantCheckers = document.querySelectorAll('.answer__check');

  variantCheckers.forEach((item) => {
    item.className = 'answer__check answer__check_default';
  });
}

function setCurrentProgress() {
  const progressItems = document.querySelectorAll('.game-page__progress-item');
  const activeItem = document.querySelector('.game-page__progress-item_active');
  const currentLevel = getCurrentLevel();
  activeItem.classList.toggle('game-page__progress-item_active');
  progressItems[currentLevel].classList.toggle('game-page__progress-item_active');
}

function changeToDefault() {
  setDefaultVariants();
  setCurrentProgress();
  game.levelComplite = false;
}

function startGame() {
  game.setDefault();
  game.setCurentAnimal();

  changeToDefault();
  game.setCurrentSong();
  game.setVariants();
  setScore();
  addPlayer(document.querySelector('.question__player'), game.currentSong);
}

export {
  checkTroothVariant,
  checkComlete,
  changeToDefault,
  startGame,
  setInfo,
  getScore,
  resetScore,
  getCurrentSong,
};
