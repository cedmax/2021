const { prompt } = require('enquirer');
const download = require('image-downloader');
const sharp = require('sharp');
const webp = require('webp-converter');
const fs = require('fs');
const sizeOf = require('image-size');

const path = './apps/i2021';

(async () => {
  const { slug, url } = await prompt([
    {
      type: 'input',
      name: 'slug',
      message: 'What slug do you want to use?',
    },
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
    }, []);

    fs.writeFileSync(
      `${path}/data.json`,
      JSON.stringify(newData, null, 2),
      'utf8'
    );
  }
})();
