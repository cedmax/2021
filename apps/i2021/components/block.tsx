import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import icons from './icons';

const Olympics = icons.olympics;
const Eaa = icons.eaa;
const LocationIcon = icons.location;
const VideoIcon = icons.video;

type blockProps = {
  location: string;
  title: string;
  type: string;
  date: string;
  img?: string;
  vs?: string;
  video?: string;
  playVideo: (a: string) => void;
};

const getIcon = (location: string) => {
  switch (location) {
    case 'Tokyo, JP':
      return (
        <span className="icon-size">
          <Olympics />
        </span>
      );
    case 'Tallin, EE':
      return (
        <span className="icon-size icon-size-bk">
          <Eaa />
        </span>
      );
    default:
      return (
        <span className="icon-size icon-size-small">
          <LocationIcon />
        </span>
      );
  }
};

export default function Block({
  location,
  title,
  type,
  date,
  img,
  vs,
  video,
  playVideo,
}: blockProps) {
  const Icon = icons[type];
  return (
    <VerticalTimelineElement className="flag-color" date={date} icon={<Icon />}>
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">
        <span>
          {getIcon(location)}
          {location}
        </span>
        <small> {vs && `Runner-up: ${vs}`}</small>
      </h4>

      {img && (
        <p>
          <img alt={title} src={`../images/${img}`} />
          {video && (
            <>
              <button onClick={() => playVideo(video)} className="play" />
              <span className="icon-size icon-video">
                <VideoIcon />
              </span>
            </>
          )}
        </p>
      )}
    </VerticalTimelineElement>
  );
}
