import { useCallback } from 'react';
import Icon from './icon';

const ShareBlock = ({ slug, title }) => {
  const url = `https://2021.dsgn.it/${slug}`;

  const navigatorShare = useCallback(
    () =>
      navigator.share({
        text: title,
        url: url,
      }),
    [url, title]
  );

  return (
    <a onClick={navigatorShare}>
      <Icon type="share" />
    </a>
  );
};

export default ShareBlock;
