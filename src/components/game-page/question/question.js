function setDefaultQuestion() {
  document.querySelector('.question__img').src = './src/assets/images/unknown-bird.jpg';
  document.querySelector('.question__item-name').textContent = '******';
}

function changeQuestion(data) {
  document.querySelector('.question__img').src = data.image;
  document.querySelector('.question__item-name').textContent = data.name;
}

export { setDefaultQuestion, changeQuestion };
