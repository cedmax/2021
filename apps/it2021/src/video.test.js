/*eslint no-console: 0 */

require('colors');
const axios = require('axios');

const events = require('./assets/data.json')
  .filter((event) => event.video)
  .map((event) => {
    return {
      title: event.title,
      video: 'https://www.youtube.com/watch?v=' + event.video,
    };
  });

describe('videos are still available', () => {
  for (const { title, video } of events) {
    test(`validating "${title}"`, async () => {
      const { data } = await axios.get(`http://noembed.com/embed?url=${video}`);
      console.log(data);
      expect(data.error).toBeUndefined();
    });
  }
});
