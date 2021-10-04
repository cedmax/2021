import { useState, memo } from 'react';
import styled from 'styled-components';
import icons from './icons';
import labels from './constants';
import { format, getMonth, parse } from 'date-fns';

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

type blockProps = {
  location: string;
  title: string;
  type: string;
  date: Array<string>;
  img?: string;
  vs?: string;
  video?: string;
};

type availableTypes = {
  [id: string]: number;
};

type menuProps = {
  selected: string | number;
  data: Array<blockProps>;
  filter: (a: string | number) => void;
};

export default memo(function MenuBloc({ selected, data, filter }: menuProps) {
  const [[eventsOlympics, eventsEaa]] = useState<Array<numbers>>([
    data.filter(({ location }) => location === 'Tokyo, JP').length,
    data.filter(({ location }) => location === 'Tallin, EE').length,
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
    ...Object.keys(availableTypes),
  ]);
  availableTypes.olympics = eventsOlympics;
  availableTypes.eaa = eventsEaa;

  return (
    <>
      <Menu>
        {allTypes.map((type) => {
          const Icon = icons[type];
          return (
            <MenuItem key={type}>
              <button
                name={`See only ${labels[type] || type}${
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
                <Icon />
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
                name={`See only ${month}`}
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
    </>
  );
});
