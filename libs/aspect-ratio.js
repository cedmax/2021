const fs = require('fs');
const sizeOf = require('image-size');

const path = './apps/i2021';

const data = require(`.${path}/data.json`).reduce(
  (acc, { img, ...itemData }) => {
    const slug = typeof img === 'string' ? img : img.slug;
    const { width, height } = sizeOf(`${path}/public/images/${slug}.webp`);
    imgData = { slug, width, height };

    return [
      ...acc,
      {
        ...itemData,
        img: imgData,
      },
    ];
  },
  []
);

fs.writeFileSync(`${path}/data.json`, JSON.stringify(data, null, 2), 'utf8');
