import { useCallback } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import {
  facebook,
  linkedin,
  twitter,
  tumblr,
  share as Share,
  copy as Copy,
} from './icons';

const OpenWindow = ({ shareUrl, url, icon: Icon }) => (
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
    <Icon />
  </a>
);

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
    <>
      <a className="sharer-activator">
        <Share />
      </a>
      <div className="sharer">
        <OpenWindow
          url={url}
          shareUrl="https://twitter.com/share?url="
          icon={twitter}
        />
        <OpenWindow
          url={url}
          shareUrl="https://www.facebook.com/sharer.php?u="
          icon={facebook}
        />
        <OpenWindow
          url={url}
          shareUrl="http://www.tumblr.com/share?s=&v=3&u="
          icon={tumblr}
        />
        <OpenWindow
          url={url}
          shareUrl="https://www.linkedin.com/sharing/share-offsite/?url="
          icon={linkedin}
        />
        <a onClick={copyShare}>
          <Copy />
        </a>
      </div>
    </>
  );
};

export default ShareBlock;
