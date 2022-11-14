import * as playerData from './player.data';
import createPlayer from './createPlayer';

class Player {
  constructor(parent, audio, area = document) {
    this.parent = area.querySelector(`.${parent}`);
    this.audio = new Audio(audio);
  }

  formatTime(notFormatedTime) {
    const time = Math.round(notFormatedTime);
    if (time > 60) {
      const minutes = `${Math.floor(time / 60)}`.padStart(2, '0');
      const seconds = `${Math.floor(time - Math.floor(time / 60) * 60)}`.padStart(2, '0');
      return `${minutes}:${seconds}`;
    }

    const seconds = `${time}`.padStart(2, '0');
    return `00:${seconds}`;
  }

  setData() {
    const time = this.formatTime(this.audio.duration);
    this.bar.lastElementChild.children[1].textContent = time;
  }

  clickPlay(remove) {
    if (this.audio.paused && !remove) {
      this.onPlay();
      return;
    }

    this.onPause();
  }

  onPlay() {
    this.btn.firstElementChild.style.display = 'none';
    this.btn.lastElementChild.style.display = 'block';
    this.audio.play();
  }

  onPause() {
    this.btn.firstElementChild.style.display = 'block';
    this.btn.lastElementChild.style.display = 'none';
    this.audio.pause();
  }

  updateProgress() {
    const { currentTime, duration } = this.audio;
    const progressWidth = (currentTime / duration) * 100;

    if (!this.drag) {
      this.bar.querySelector('.player__bar-circle').style.left = `${progressWidth}%`;
    }

    this.bar.querySelector('.player__bar').style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${progressWidth}%, rgb(115, 115, 115) ${progressWidth}%, rgb(115, 115, 115) 100%)`;
    this.bar.querySelectorAll('.player__time')[0].textContent = this.formatTime(currentTime);
  }

  getCircle(e) {
    this.drag = true;
    const circlePos = this.bar.querySelector('.player__bar-circle').offsetLeft;
    const downPos = e.clientX;

    window.onmousemove = (event) => this.moveCircle(event, downPos, circlePos);
    window.onmouseup = (event) => this.setCircle(event);

    return false;
  }

  moveCircle(e, downPos, circlePos) {
    const currentPos = e.clientX - downPos;
    const progressWidth = (this.audio.currentTime / this.audio.duration) * 100;
    this.movePos = circlePos + currentPos;

    if (this.movePos < 0) this.movePos = 0;
    if (this.movePos > this.bar.offsetWidth) this.movePos = this.bar.offsetWidth;

    this.bar.querySelector('.player__bar').style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${progressWidth}%, rgb(115, 115, 115) ${progressWidth}%, rgb(115, 115, 115) 100%)`;
    this.audio.currentTime = (this.audio.duration * this.movePos) / this.bar.clientWidth;
    this.bar.querySelector('.player__bar-circle').style.left = `${this.movePos}px`;
    return false;
  }

  setCircle() {
    this.drag = false;
    window.onmousemove = false;
    return false;
  }

  changePlayers() {
    this.parent.firstElementChild.dispatchEvent(new CustomEvent('removeAudio'));
    this.parent.removeChild(this.parent.firstElementChild);
    this.parent.append(this.playerContainer);
  }

  setDefault() {
    this.playerContainer = createPlayer(playerData);
    [this.btn, this.bar, this.volume] = this.playerContainer.children;
    this.drag = false;
    this.volume.value = localStorage.songBird_volume * 10;
    this.audio.volume = localStorage.songBird_volume;
  }

  setVolume(volume) {
    localStorage.songBird_volume = volume.value / 10;
    this.audio.volume = localStorage.songBird_volume;
  }

  setEvents() {
    this.setDefault();
    this.changePlayers();

    this.btn.addEventListener('click', () => this.clickPlay());
    this.audio.addEventListener('canplaythrough', this.setData.bind(this));
    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('ended', () => this.onPause());
    this.bar.querySelector('.player__bar-circle').addEventListener('mousedown', (e) => this.getCircle(e));
    this.playerContainer.addEventListener('removeAudio', () => this.onPause());
    this.volume.addEventListener('input', (e) => this.setVolume(e.target));
  }
}

export default function addPlayer(container, song, area) {
  const playerContainer = container;
  const player = new Player(playerContainer.classList[1], song, area);
  player.setEvents();
}
