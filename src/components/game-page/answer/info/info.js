function setDefaultInfo() {
  document.querySelector('.answer__instuction').style.display = 'block';
  document.querySelector('.answer__card-info').style.display = 'none';
}

function openInfo() {
  document.querySelector('.answer__instuction').style.display = 'none';
  document.querySelector('.answer__card-info').style.display = 'block';
}

function setItemInfo(data) {
  document.querySelector('.answer__img').src = data.image;
  document.querySelector('.answer__name').textContent = data.name;
  document.querySelector('.answer__name-latins').textContent = data.species;
  document.querySelector('.answer__player-audio').src = data.audio;
  document.querySelector('.answer__description').textContent = data.description;

  openInfo();
}

export { setDefaultInfo, setItemInfo };
