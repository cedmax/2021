import { useCallback } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import {
  facebook,
  linkedin,
  twitter,
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
        'width=800,height=600'
      );
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
        text: title,
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
        url={shareData.url}
        shareUrl="https://www.facebook.com/sharer/sharer.php?u="
        icon={facebook}
      />
      <OpenWindow
        url={shareData.url}
        shareUrl="https://twitter.com/share?url="
        icon={twitter}
      />
      <OpenWindow
        url={shareData.url}
        shareUrl="https://www.linkedin.com/sharing/share-offsite/?url="
        icon={linkedin}
      />
      <a onClick={isNativeShare ? navigatorShare : copyShare}>
        {isNativeShare ? <Share /> : <Copy />}
      </a>
    </div>
  );
};

export default ShareBlock;
