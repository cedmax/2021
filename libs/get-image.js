const { prompt } = require('enquirer');
const download = require('image-downloader');
const sharp = require('sharp');
const webp = require('webp-converter');
const fs = require('fs');
const sizeOf = require('image-size');
const prettier = require('prettier');
const path = './apps/i2021';

(async () => {
  let slug = process.argv.slice(2)[0];

  if (!slug) {
    const { userSlug } = await prompt([
      {
        type: 'input',
        name: 'userSlug',
        message: 'What is the slug for the image?',
      },
    ]);
    slug = userSlug;
  }

  const { url } = await prompt([
    {
      type: 'input',
      name: 'url',
      message: 'What is the URL of the image?',
    },
  ]);

  const filename = `${path}/public/o/${slug}.jpg`;
  const newFilename = filename.replace('/o/', '/images/');

  await download.image({ url, dest: filename });
  await sharp(filename).resize({ width: 800 }).toFile(newFilename);
  await webp.cwebp(newFilename, newFilename.replace('.jpg', '.webp'), '-q 75');

  const data = require(`.${path}/data.json`);

  if (data.find(({ img }) => img === slug)) {
    const newData = data.reduce((acc, { img, ...itemData }) => {
      let imgData = img;
      if (slug === imgData) {
        const { width, height } = sizeOf(`${path}/public/images/${slug}.webp`);
        imgData = { slug, width, height };
      }
      return [
        ...acc,
        {
          ...itemData,
          img: imgData,
        },
      ];
    }, []);

    fs.writeFileSync(
      `${path}/data.json`,
      prettier.format(JSON.stringify(newData, null, 2), {
        filepath: `${path}/data.json`,
      }),
      'utf8'
    );
  }
})();
