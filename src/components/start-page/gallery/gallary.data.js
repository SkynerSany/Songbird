const itemsData = {};

const items = [
  {
    tag: 'div',
    attributes: {
      class: 'gallary__card',
    },
  },
  {
    tag: 'div',
    attributes: {
      class: 'gallary__title',
    },
    parent: 0,
  },
  {
    tag: 'div',
    attributes: {
      class: 'gallary__description',
    },
    parent: 0,
  },
  {
    tag: 'img',
    attributes: {
      class: 'gallary__card-img',
      src: '',
      alt: '',
    },
    parent: 1,
  },
  {
    tag: 'div',
    attributes: {
      class: 'gallary__title-info',
    },
    parent: 1,
  },
  {
    tag: 'p',
    attributes: {
      class: 'gallary__name',
    },
    parent: 4,
  },
  {
    tag: 'p',
    attributes: {
      class: 'gallary__name-latins',
    },
    parent: 4,
  },
  {
    tag: 'div',
    attributes: {
      class: 'player gallary__player',
    },
    parent: 4,
  },
  {
    tag: 'div',
    attributes: {
      class: 'player__container',
    },
    parent: 7,
  },
];

export { itemsData, items };
