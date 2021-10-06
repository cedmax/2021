import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import data from '../data.json';
import Body from '../components/body';
import Banner from '../components/banner';

const dataOrdered = data.reverse();

const Wrapper = styled.main`
  font-family: Arial, Helvetica, sans-serif;
`;

export default function App() {
  return (
    <Wrapper>
      <Banner />
      <h1>
        <span aria-label="Italy flag" role="img">
          🇮🇹
        </span>{' '}
        How was your 2021?
      </h1>
      <Body data={dataOrdered} />
      {typeof window !== 'undefined' && (
        <ReactTooltip effect="solid" className="tooltip" />
      )}
    </Wrapper>
  );
}
