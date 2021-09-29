import { useState } from 'react';
import styled from 'styled-components';
import icons from './icons';
import labels from './constants';

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

type menuProps = {
  selected: string;
  availableTypes: string[];
  filter: (a: string) => void;
};

export default function Block({ selected, availableTypes, filter }: menuProps) {
  const [allTypes] = useState(['olympics', 'eaa', ...availableTypes]);
  return (
    <Menu>
      {allTypes.map((type) => {
        const Icon = icons[type];
        return (
          <MenuItem key={type}>
            <button
              data-tip={labels[type] || type}
              onClick={() => filter(type)}
              className={`vertical-timeline-element-icon icon-${type} ${
                selected === type && ' vertical-timeline-element-icon-selected'
              }`}
            >
              <Icon />
            </button>
          </MenuItem>
        );
      })}
    </Menu>
  );
}
