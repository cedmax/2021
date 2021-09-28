import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import data from '../assets/data.json';
import Body from './components/body';
import 'react-vertical-timeline-component/style.min.css';
import './extend.scss';

const Wrapper = styled.main`
  font-family: Arial, Helvetica, sans-serif;
`;

export default function App() {
  return (
    <Wrapper>
      <h1>
        <span aria-label="Italy flag" role="img">
          🇮🇹
        </span>{' '}
        How was your 2021?
      </h1>
      <Body data={data} />
      <ReactTooltip effect="solid" className="tooltip" />
    </Wrapper>
  );
}
