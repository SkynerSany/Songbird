import birdsData from './birdsData';
import { setCurrentSong } from '../game-page/question/question';
import { setVariants } from '../game-page/answer/variants/variants';
import { accessDenied } from '../game-page/game-page';

class Game {
  setCurentAnimal() {
    this.currentAnimal = Math.floor(Math.random() * (5 - 0 + 1));
  }

  setNextLevel() {
    this.curentLevel += 1;
    this.setCurentAnimal();
    this.currentSectionData = birdsData[this.curentLevel];

    setCurrentSong(this.currentSectionData[this.currentAnimal].audio);
    setVariants(this.currentSectionData);
  }

  checkComlete(e) {
    if (this.levelComplite) {
      this.setNextLevel();
      return;
    }

    accessDenied(e.target);
  }

  chooseVariant(e) {
    const target = e.currentTarget;

    if (!target.firstElementChild.classList.contains('answer__check_default')) return;

    const currentItemId = [...document.querySelectorAll('.answer__variant')].indexOf(target);

    target.firstElementChild.classList.toggle('answer__check_default');

    if (currentItemId === this.currentAnimal) {
      target.firstElementChild.classList.toggle('answer__check_accept');
      this.levelComplite = true;
      return;
    }

    target.firstElementChild.classList.toggle('answer__check_denied');
  }

  setEvents() {
    const variantBtns = document.querySelectorAll('.answer__variant');
    variantBtns.forEach((variant) => variant.addEventListener('click', this.chooseVariant.bind(this)));
    document.querySelector('.next-level').addEventListener('click', this.checkComlete.bind(this));
  }

  startGame() {
    this.setDefault();
    this.setCurentAnimal();

    setCurrentSong(this.currentSectionData[this.currentAnimal].audio);
    setVariants(this.currentSectionData);
  }

  setDefault() {
    this.score = 0;
    this.curentLevel = 0;
    this.currentAnimal = 0;
    this.currentSectionData = birdsData[this.curentLevel];
    this.levelComplite = false;
  }
}

const game = new Game();
game.setEvents();

export { game };
