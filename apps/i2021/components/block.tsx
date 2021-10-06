/* eslint-disable @next/next/no-img-element */
import { memo } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { AspectRatio } from 'react-aspect-ratio'; // Recommended: if you are using React > 15.6
import icons from './icons';
import { format, parse } from 'date-fns';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { blockProps } from './types';

const Olympics = icons.olympics;
const Eaa = icons.eaa;
const Aswc = icons.aswc;

const LocationIcon = icons.location;
const VideoIcon = icons.video;

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
    case 'Asunción, PY':
      return (
        <span className="icon-size icon-size-bk">
          <Aswc />
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
            <AspectRatio ratio={(img.width / img.height).toFixed()}>
              <LazyLoadImage alt={title} src={`../images/${img.slug}.webp`} />
            </AspectRatio>
            {video && (
              <>
                <button
                  aria-label={`play video of "${title}"`}
                  onClick={() => playVideo(video)}
                  className="play"
                />
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
