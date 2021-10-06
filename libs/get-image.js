const { prompt } = require('enquirer');
const download = require('image-downloader');
const sharp = require('sharp');
const webp = require('webp-converter');

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

  const filename = `./apps/i2021/public/o/${slug}.jpg`;
  const newFilename = filename.replace('/o/', '/images/');

  await download.image({ url, dest: filename });
  await sharp(filename).resize({ width: 800 }).toFile(newFilename);
  await webp.cwebp(newFilename, newFilename.replace('.jpg', '.webp'), '-q 75');
})();
