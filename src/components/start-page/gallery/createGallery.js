import * as gallaryData from './gallary.data';

function createItem(item) {
  let tag = '';
  tag = document.createElement(item.tag);

  for (let key in item.attributes) {
    tag.setAttribute(key, item.attributes[key]);
  }

  return tag;
}

export default function createGallery() {
  let HTMLelements = [];

  gallaryData.items.forEach((element) => {
    const item = createItem(element);

    if (element.parent !== undefined) HTMLelements[element.parent].append(item);

    HTMLelements.push(item);
  });

  return HTMLelements[0];
}
