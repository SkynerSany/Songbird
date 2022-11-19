const pageNames = {
  gamePage: {
    class: '.game-page',
    open: 'block',
    close: 'none',
  },

  resultPage: {
    class: '.result-page',
    open: 'flex',
    close: 'none',
  },

  startPage: {
    class: '.start-page',
    open: 'block',
    close: 'none',
  },

  gallery: {
    class: '.gallery',
    open: 'flex',
    close: 'none',
  },

  menu: {
    class: '.menu',
    open: 'flex',
    close: 'none',
  },
};

export default function changePageState(page, state) {
  document.querySelector(pageNames[page].class).style.display = pageNames[page][state];
}
