const cities = require('all-the-cities');
const fs = require('fs');
const prettier = require('prettier');
const path = './apps/i2021';
const data = require(`.${path}/data.json`);

const fix = (isoCode) =>
  isoCode === 'UK' ? 'GB' : isoCode === 'GB' ? 'UK' : isoCode;

const dataCities = [...new Set(data.map(({ location }) => location))]
  .map((location) => location.split(', '))
  .filter(([nation, isoCode]) => !!isoCode && nation !== 'Virtual Event');

const dataCitiesWithCoords = dataCities
  .map(([city, isoCode]) => {
    const found = cities.find(
      ({ name, country }) => name === city && country.match(fix(isoCode))
    );

    return found || city + ' ' + isoCode;
  })
  .filter((item) => typeof item === 'object' || console.log(item));

fs.writeFileSync(
  `${path}/map.json`,
  prettier.format(
    JSON.stringify(
      dataCitiesWithCoords
        .filter((loc) => typeof loc !== 'string')
        .map(({ name, loc, country }) => ({
          location: `${name}, ${fix(country)}`,
          coordinates: loc.coordinates,
        })),
      null,
      2
    ),
    {
      filepath: `${path}/map.json`,
    }
  ),
  'utf8'
);
