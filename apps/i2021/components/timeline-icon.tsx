import { memo, useState, useEffect } from 'react';
import Share from './share';
import NativeShare from './native-share';

const ShareIcon = ({ icon: Icon, slug, title, className }) => {
  const [isNativeShare, setNativeShare] = useState(false);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      setNativeShare(true);
    }
  }, []);

  return (
    <>
      <Icon className={`icon-${className}`} />
      <div className="sharer-wrapper">
        {isNativeShare ? (
          <NativeShare slug={slug} title={title} />
        ) : (
          <Share slug={slug} />
        )}
      </div>
    </>
  );
};

export default memo(ShareIcon);
