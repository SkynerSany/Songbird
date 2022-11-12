function openGamePage() {
  document.querySelector('.game-page').style.display = 'block';
}

function closeGamePage() {
  document.querySelector('.game-page').style.display = 'none';
}

function accessDenied(btn) {
  btn.classList.toggle('access-denied');
  btn.disabled = true;

  setTimeout(() => {
    btn.classList.toggle('access-denied');
    btn.disabled = false;
  }, 500);
}

function activateBtn() {
  const btn = document.querySelector('.next-level');
  btn.classList.toggle('next-level_disabled');
  btn.classList.toggle('next-level_active');
}

export {
  openGamePage,
  closeGamePage,
  activateBtn,
  accessDenied,
};
