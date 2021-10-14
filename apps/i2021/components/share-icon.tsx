import { memo } from 'react';
import Share from './share';

const ShareIcon = ({ icon: Icon, slug, title }) => {
  return (
    <div className="sharer-wrapper">
      <Icon style={{ cursor: 'pointer' }} />
      <Share slug={slug} title={title} />
    </div>
  );
};

export default memo(ShareIcon);
