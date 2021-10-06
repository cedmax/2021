import { memo } from 'react';
import styled from 'styled-components';

const Banner = styled.a`
  background: #ffd700;
  padding: 20px;
  margin: -10px;
  text-decoration: none;
  color: black;
  border-bottom: 3px solid #daa520;
  display: block;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

const ShamelessPlug = () => (
  <Banner
    href="https://www.crowdfunder.co.uk/landing-short-film"
    target="_blank"
    rel="noopener noreferrer"
  >
    <strong>Shameless Plug:</strong> Please support{' '}
    <em>
      <strong>Landing</strong>
    </em>
    , an independent movie produced by an amazing Italian director
  </Banner>
);

export default memo(ShamelessPlug);
