const fs = require('fs');
const sizeOf = require('image-size');

const path = './apps/i2021';

const data = require(`.${path}/data.json`).reduce(
  (acc, { img, ...itemData }) => {
    let imgData = img;
    if (typeof imgData === 'string') {
      const { width, height } = sizeOf(`${path}/public/images/${img}.webp`);
      imgData = { slug: img, width, height };
    }
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
