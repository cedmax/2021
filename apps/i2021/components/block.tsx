/* eslint-disable @next/next/no-img-element */
import { memo } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import icons from './icons';
import { format, parse } from 'date-fns';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Olympics = icons.olympics;
const Eaa = icons.eaa;
const LocationIcon = icons.location;
const VideoIcon = icons.video;

type blockProps = {
  location: string;
  title: string;
  type: string;
  date: Array<string>;
  img?: string;
  vs?: string;
  extended?: string;
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

const transformDate = (dates: Array<string>): string => {
  const parsedDates = dates.map((date) => parse(date, 'd/L/y', new Date()));
  const result = [];
  if (parsedDates.length > 1) {
    result.push(format(parsedDates.shift(), 'do') + ' to ');
  }
  result.push(
    format(parsedDates[0], 'do') + ' of ' + format(parsedDates[0], 'MMMM')
  );
  return result.join('');
};

export default memo(function Block({
  location,
  title,
  type,
  date,
  img,
  extended,
  vs,
  video,
  playVideo,
}: blockProps) {
  const Icon = icons[type];
  return (
    <VerticalTimelineElement
      className="flag-color"
      date={transformDate(date)}
      icon={<Icon />}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">
        <span>
          {getIcon(location)}
          {location}
        </span>
        <small> {vs && `Runner-up: ${vs}`}</small>
      </h4>

      {img && (
        <>
          <p>
            <LazyLoadImage alt={title} src={`../images/${img}.webp`} />
            {video && (
              <>
                <button onClick={() => playVideo(video)} className="play" />
                <span className="icon-size icon-video">
                  <VideoIcon />
                </span>
              </>
            )}
          </p>
          <p>{extended}</p>
        </>
      )}
    </VerticalTimelineElement>
  );
});
