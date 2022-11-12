function closeStartPage() {
  document.querySelector('.start-page').style.display = 'none';
}

function openStartPage() {
  document.querySelector('.start-page').style.display = 'block';
}

export { openStartPage, closeStartPage };
