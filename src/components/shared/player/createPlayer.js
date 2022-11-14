function createItem(item, itemsData) {
  let tag = '';

  if (item.tag === 'svg' || item.tag === 'path') {
    tag = document.createElementNS('http://www.w3.org/2000/svg', item.tag);
  } else {
    tag = document.createElement(item.tag);
  }

  for (let key in item.attributes) {
    tag.setAttribute(key, item.attributes[key]);
  }

  if (Object.keys(itemsData).includes(tag.classList[0])) {
    tag.textContent = itemsData[tag.classList[0]];
  }

  return tag;
}

export default function createPlayer(data) {
  let HTMLelements = [];

  data.items.forEach((element) => {
    const item = createItem(element, data.itemsData);

    if (element.parent !== undefined) HTMLelements[element.parent].append(item);

    HTMLelements.push(item);
  });

  return HTMLelements[0];
}
