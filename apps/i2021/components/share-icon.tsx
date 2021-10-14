import { memo, useState } from 'react';
import { share } from './icons';
import { useRouter } from 'next/router';
const ShareIcon = ({ icon, slug }) => {
  const [Icon, setIcon] = useState(icon);
  const router = useRouter();
  return (
    <Icon
      onClick={() => router.push(`/${slug}`, null, { shallow: true })}
      style={{ cursor: 'pointer' }}
      onMouseOver={() => setIcon(share)}
      onMouseOut={() => setIcon(icon)}
    />
  );
};

export default memo(ShareIcon);
