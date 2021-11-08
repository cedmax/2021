import { useCallback } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import Icon from './icon';

const OpenWindow = ({ shareUrl, url, icon }) => (
  <a
    href={shareUrl + encodeURIComponent(url)}
    onClick={(e) => {
      e.preventDefault();
      window.open(
        shareUrl + encodeURIComponent(url),
        'sharer',
        'width=560,height=640'
      );
    }}
  >
    <Icon type={icon} />
  </a>
);

const ShareBlock = ({ slug }) => {
  const url = `https://2021.dsgn.it/${slug}`;

  const clipboard = useClipboard();
  const copyShare = useCallback(() => {
    clipboard.copy(url);
  }, [clipboard, url]);

  return (
    <>
      <span className="sharer-activator">
        <Icon type="share" />
      </span>
      <div className="sharer">
        <OpenWindow
          url={url}
          shareUrl="https://twitter.com/share?url="
          icon="twitter"
        />
        <OpenWindow
          url={url}
          shareUrl="https://www.facebook.com/sharer.php?u="
          icon="facebook"
        />
        <OpenWindow
          url={url}
          shareUrl="http://www.tumblr.com/share?s=&v=3&u="
          icon="tumblr"
        />
        <OpenWindow
          url={url}
          shareUrl="https://www.linkedin.com/sharing/share-offsite/?url="
          icon="linkedin"
        />
        <a onClick={copyShare}>
          <Icon type="copy" />
        </a>
      </div>
    </>
  );
};

export default ShareBlock;
