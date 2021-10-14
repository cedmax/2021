import { memo, useState, useEffect } from 'react';
import Share from './share';
import NativeShare from './native-share';

const ShareIcon = ({ icon: Icon, slug, title }) => {
  const [isNativeShare, setNativeShare] = useState(false);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      setNativeShare(true);
    }
  }, []);

  return (
    <>
      <Icon />
      <div className="sharer-wrapper">
        {isNativeShare ? (
          <NativeShare slug={slug} title={title} />
        ) : (
          <Share slug={slug} title={title} />
        )}
      </div>
    </>
  );
};

export default memo(ShareIcon);
