import { memo } from 'react';
import ReactTooltip from 'react-tooltip';
import Body from '../components/body';
import Banner from '../components/banner';

const Layout = ({ data }) => (
  <>
    <Banner />
    <h1>
      <span aria-label="Italy flag" role="img">
        🇮🇹
      </span>{' '}
      How was your 2021?
    </h1>
    <Body data={data} />
    {typeof window !== 'undefined' && (
      <ReactTooltip effect="solid" className="tooltip" />
    )}
  </>
);

export default memo(Layout);
