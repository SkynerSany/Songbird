import createGallery from './createGallery';
import addPlayer from '../../shared/player/player';
import birdsData from '../../shared/birdsData';

function setGallery(id = 0) {
  birdsData[localStorage.songBird_lang][id + 1].forEach((bird) => {
    const card = createGallery();
    card.querySelector('.gallary__card-img').src = bird.image;
    card.querySelector('.gallary__card-img').alt = bird.name;
    card.querySelector('.gallary__name').textContent = bird.name;
    card.querySelector('.gallary__name-latins').textContent = bird.species;
    card.querySelector('.gallary__description').textContent = bird.description;
    addPlayer(card.querySelector('.gallary__player'), bird.audio, card);

    document.querySelector('.gallery__list').append(card);
  });
}

function checkType(target) {
  const id = [...document.querySelectorAll('.gallery__progress-item')].indexOf(target);
  document.querySelector('.gallery__list').replaceChildren();
  setGallery(id);
}

function clickType(e) {
  checkType(e.target);
  document.querySelector('.gallery__progress-item_active').classList.toggle('gallery__progress-item_active');
  e.target.classList.toggle('gallery__progress-item_active');
}

function setGalleryEvents() {
  document.querySelector('.gallery__types-container').addEventListener('click', clickType);
}

export { setGalleryEvents, setGallery };
