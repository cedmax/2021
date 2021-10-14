import { useCallback } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { share as Share } from './icons';

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
  const clipboard = useClipboard();
  const copyShare = useCallback(() => {
    clipboard.copy(url); // programmatically copying a value
  }, [clipboard, url]);

  return (
    <a onClick={navigatorShare}>
      <Share />
    </a>
  );
};

export default ShareBlock;
