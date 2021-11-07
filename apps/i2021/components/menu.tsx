import { useState, memo } from 'react';
import styled from 'styled-components';
import * as icons from './icons';
import labels from './constants';
import { format, getMonth, parse } from 'date-fns';
import { blockProps } from './types';
import { map as Icon } from './icons';

const Menu = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  border-bottom: 4px solid #fff;
  margin: 0 auto;
  padding: 1rem 0 1rem;
  color: white;
  justify-content: center;
  box-sizing: border-box;
  max-width: 1170px;
  transition: all 0.3s ease;
  @media (max-width: 1170px) {
    max-width: 800px;
  }
  @media (max-width: 820px) {
    max-width: 90%;
  }
  @media (max-width: 600px) {
    max-width: 95%;
  }

  a,
  a:link,
  a:visited {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
  .map {
    border: 0;
    background: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    width: 35px;
    height: 35px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
const MenuItem = styled.li`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  margin: 7px;
  cursor: pointer;

  button {
    width: 100%;
    height: 100%;
  }
`;
const MenuMonthItem = styled.li`
  display: inline-block;
  position: relative;
  margin: 7px;
  cursor: pointer;

  button {
    width: 100%;
    height: 100%;
    border: 0;
    background: 0;
    cursor: pointer;
    color: white;

    &:disabled {
      opacity: 0.5;
    }
    &[data-selected='true'] {
      font-weight: bold;
      text-decoration: underline;
      text-decoration-style: wavy;
      text-underline-offset: 5px;
    }
  }
`;

type availableTypes = {
  [id: string]: number;
};

type menuProps = {
  selected: string | number;
  data: Array<blockProps>;
  filter: (a: string | number) => void;
  showMap: () => void;
};

export default memo(function MenuBloc({
  selected,
  data,
  filter,
  showMap,
}: menuProps) {
  const [[eventsOlympics, eventsEaa, eventsAswc, eventsTrigames, eventsEscc]] =
    useState<Array<number>>([
      data.filter(({ location }) => location === 'Tokyo, JP').length,
      data.filter(({ location }) => location === 'Tallinn, EE').length,
      data.filter(({ location }) => location === 'Asunción, PY').length,
      data.filter(({ location }) => location === 'Ferrara, IT').length,
      data.filter(({ location }) => location === 'Kazan, RU').length,
    ]);
  const [availableTypes] = useState<availableTypes>(
    data.reduce((acc, item) => {
      const currentVal = acc[item.type] ? ++acc[item.type] : 1;
      return {
        ...acc,
        [item.type]: currentVal,
      };
    }, {})
  );
  const [availableMonths] = useState<availableTypes>(
    data.reduce((acc, item) => {
      const [date] = item.date;
      const month = getMonth(parse(date, 'd/L/y', new Date()));
      const currentVal = acc[month] ? ++acc[month] : 1;

      return {
        ...acc,
        [month]: currentVal,
      };
    }, {})
  );
  const [allTypes] = useState([
    'olympics',
    'eaa',
    'aswc',
    'trigames',
    'escc',
    ...Object.keys(availableTypes).sort(),
  ]);

  availableTypes.olympics = eventsOlympics;
  availableTypes.eaa = eventsEaa;
  availableTypes.escc = eventsEscc;
  availableTypes.trigames = eventsTrigames;
  availableTypes.aswc = eventsAswc;

  return (
    <>
      <Menu>
        {allTypes.map((type) => {
          const Icon = icons[type];
          return (
            <MenuItem key={type}>
              <button
                aria-label={`See only ${labels[type] || type}${
                  availableTypes[type] ? ` (${availableTypes[type]})` : ''
                }`}
                data-tip={`${labels[type] || type}${
                  availableTypes[type] ? ` (${availableTypes[type]})` : ''
                }`}
                onClick={() => filter(type)}
                className={`vertical-timeline-element-icon icon-${type} ${
                  selected === type &&
                  ' vertical-timeline-element-icon-selected'
                }`}
              >
                <Icon className={`icon-${type}`} />
              </button>
            </MenuItem>
          );
        })}
      </Menu>
      <Menu>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((monthIdx) => {
          const month = format(new Date(2021, monthIdx, 1), 'LLLL');

          return (
            <MenuMonthItem key={month}>
              <button
                aria-label={`See only ${month}`}
                disabled={!availableMonths[monthIdx]}
                data-selected={selected === monthIdx}
                onClick={() => filter(monthIdx)}
                key={month}
              >
                {month}{' '}
                {availableMonths[monthIdx]
                  ? `(${availableMonths[monthIdx]})`
                  : ''}
              </button>
            </MenuMonthItem>
          );
        })}
      </Menu>
      <Menu
        as="div"
        style={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <span>
          Did I miss anything?{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://m.me/cedmax"
          >
            Send me the link
          </a>
        </span>
        <button title="Show on map" className="map" onClick={showMap}>
          <Icon />
        </button>
      </Menu>
    </>
  );
});
