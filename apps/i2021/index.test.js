/*eslint no-console: 0 */

require('colors');
const axios = require('axios');

const events = require('./data.json')
  .filter((event) => event.video)
  .map((event) => {
    return {
      title: event.title,
      video: 'https://www.youtube.com/watch?v=' + event.video,
    };
  });

describe.skip('videos are still available', () => {
  for (const { title, video } of events) {
    test(`validating "${title}: ${video}"`, async () => {
      const { data } = await axios.get(`http://noembed.com/embed?url=${video}`);

      expect(data.error).toBeUndefined();
    });
  }
});
