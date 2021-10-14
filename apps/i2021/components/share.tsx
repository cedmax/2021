import { useCallback } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import {
  getFacebookUrl,
  getLinkedinUrl,
  getTwitterUrl,
} from '@phntms/react-share';
import {
  facebook,
  linkedin,
  twitter,
  share as Share,
  copy as Copy,
} from './icons';

const OpenWindow = ({ url, icon: Icon }) => (
  <a
    href={url}
    onClick={(e) => {
      e.preventDefault();
      window.open(url, 'sharer', 'width=550,height=450');
    }}
  >
    <Icon />
  </a>
);

const ShareBlock = ({ slug, title }) => {
  const shareData = {
    url: `https://2021.dsgn.it/${slug}`,
    title,
  };

  const isNativeShare = typeof navigator !== 'undefined' && navigator.share;

  const navigatorShare = useCallback(
    () =>
      navigator.share({
        title,
        text: 'Check out web.dev.',
        url: shareData.url,
      }),
    [shareData.url, title]
  );
  const clipboard = useClipboard();
  const copyShare = useCallback(() => {
    clipboard.copy(shareData.url); // programmatically copying a value
  }, [clipboard, shareData.url]);

  return (
    <div className="sharer">
      <OpenWindow
        url={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareData.url
        )}`}
        icon={facebook}
      />
      <OpenWindow
        url={`https://twitter.com/share?text=${encodeURIComponent(
          '#italiansdoitbetter'
        )}&url=${encodeURIComponent(shareData.url)}`}
        icon={twitter}
      />
      <OpenWindow
        url={`http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          shareData.url
        )}&title=${encodeURIComponent(shareData.title)}`}
        icon={linkedin}
      />
      <a onClick={isNativeShare ? navigatorShare : copyShare}>
        {isNativeShare ? <Share /> : <Copy />}
      </a>
    </div>
  );
};

export default ShareBlock;
