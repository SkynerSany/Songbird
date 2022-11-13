export default class Player {
  constructor(playerContainer) {
    this.playerContainer = document.querySelector(`.${playerContainer}`).children[0].children;
  }

  setData() {
    let time = Math.round(this.audio.duration);

    if (time > 60) {
      const minutes = `${Math.floor(time / 60)}`.padStart(2, '0');
      const seconds = `${Math.floor(time - Math.floor(time / 60) * 60)}`.padStart(2, '0');
      console.log(minutes, seconds)
      time = `${minutes}:${seconds}`;
    } else {
      const seconds = `${time}`.padStart(2, '0');
      time = `00:${seconds}`;
    }

    this.bar.lastElementChild.children[1].textContent = time;
  }

  clickPlay() {
    this.audio.paused ? this.audio.play() : this.audio.pause();
  }

  setEvents() {
    [this.audio, this.btn, this.bar] = this.playerContainer;

    console.log();
    this.playerContainer[1].addEventListener('click', this.clickPlay.bind(this));
    this.audio.addEventListener('canplaythrough', this.setData.bind(this));
  }
}
