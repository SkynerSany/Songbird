const pageNames = {
  gamePage: {
    class: '.game-page',
    open: 'block',
    close: 'none',
  },

  resultPage: {
    class: '.result-page',
    open: 'block',
    close: 'none',
  },

  startPage: {
    class: '.start-page',
    open: 'block',
    close: 'none',
  },
};

export default function changePageState(page, state) {
  document.querySelector(pageNames[page].class).style.display = pageNames[page][state];
}
