import translatorData from './translator.data';

function changeLanguage() {
  const currentData = translatorData[localStorage.songBird_lang];
  Object.keys(currentData).forEach((key) => {
    if (Array.isArray(currentData[key])) {
      document.querySelectorAll(`.${key}`).forEach((item, i) => {
        item.textContent = currentData[key][i];
      });

      return;
    }

    document.querySelector(`.${key}`).textContent = currentData[key];
  });

  if (!localStorage.songBird_name) {
    document.querySelector('.menu__name').textContent = localStorage.songBird_name
      || localStorage.songBird_lang === 'ru' ? '[ваше имя]' : '[Your name]';
  }
}

function clickTranslate() {
  this.dataset.lang = this.dataset.lang === 'en' ? 'ru' : 'en';
  localStorage.songBird_lang = this.dataset.lang;
  changeLanguage();
}

export default function setTranslatorEvents() {
  const btnTranslate = document.querySelector('.translator-btn');
  btnTranslate.addEventListener('click', clickTranslate);

  if (!localStorage.songBird_lang) {
    localStorage.songBird_lang = 'ru';
    btnTranslate.dataset.lang = 'ru';
  } else {
    btnTranslate.dataset.lang = localStorage.songBird_lang;
  }

  changeLanguage();
}
