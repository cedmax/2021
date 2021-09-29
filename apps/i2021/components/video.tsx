import { memo } from 'react';
import Tuber from 'react-youtube';

export default memo(function Video({ video }: { video: string }) {
  const [videoId, start = '0'] = video.split('#');

  return videoId ? (
    <Tuber
      className="yt"
      opts={{
        playerVars: {
          start: parseInt(start, 10),
          autoplay: 1,
          controls: 1,
          iv_load_policy: 3,
          modestbranding: 1,
        },
      }}
      containerClassName="ytWrapper"
      videoId={videoId}
    />
  ) : (
    <div />
  );
});
