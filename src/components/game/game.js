import birdsData from './birdsData';

class Game {
  setCurentAnimal() {
    this.currentAnimal = Math.floor(Math.random() * (5 - 0 + 1));
  }

  setCurrentSong() {
    document.querySelector('.question__player-audio').src = this.currentSectionData[this.currentAnimal].audio;
  }

  setVariants() {
    const variantsName = document.querySelectorAll('.answer__variant-name');

    variantsName.forEach((variant, i) => {
      variant.textContent = this.currentSectionData[i].name;
    });
  }

  setNextLevel() {
    this.curentLevel += 1;
    this.setCurentAnimal();
    this.currentSectionData = birdsData[this.curentLevel];

    this.setCurrentSong();
    this.setVariants();
  }

  setDefault() {
    this.score = 0;
    this.curentLevel = 0;
    this.currentAnimal = 0;
    this.maxLevelScore = 5;
    this.data = birdsData;
    this.currentSectionData = birdsData[this.curentLevel];
    this.levelComplite = false;
  }
}

const game = new Game();

export { game };
