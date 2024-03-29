/* eslint-disable @next/next/no-img-element */
import { memo } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { AspectRatio } from 'react-aspect-ratio'; // Recommended: if you are using React > 15.6
import Icon from './icon';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { blockProps } from './types';
import TimelineIcon from './timeline-icon';
import { transformDate } from './helpers';

const getIcon = (location: string) => {
  switch (location) {
    case 'Tokyo, JP':
      return (
        <span className="icon-size">
          <Icon type="olympics" />
        </span>
      );
    case 'Kazan, RU':
      return (
        <span className="icon-size icon-size-bk">
          <Icon type="escc" />
        </span>
      );
    case 'Tallinn, EE':
      return (
        <span className="icon-size icon-size-bk">
          <Icon type="eaa" />
        </span>
      );
    case 'Asunción, PY':
      return (
        <span className="icon-size icon-size-bk">
          <Icon type="aswc" />
        </span>
      );
    case 'Ferrara, IT':
      return (
        <span className="icon-size icon-size-bk">
          <Icon type="trigames" />
        </span>
      );
    default:
      return (
        <span className="icon-size icon-size-small">
          <Icon type="location" />
        </span>
      );
  }
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
  link,
  playVideo,
}: blockProps) {
  return (
    <VerticalTimelineElement
      className="flag-color"
      date={transformDate(date)}
      icon={
        <TimelineIcon
          className={type}
          title={title}
          slug={img.slug}
          icon={() => <Icon type={type} />}
        />
      }
    >
      <h2 id={img.slug} className="vertical-timeline-element-title">
        {title}
      </h2>
      <h3 className="vertical-timeline-element-subtitle">
        <span>
          {getIcon(location)}
          {location}
        </span>
        <small> {vs && `Runner-up: ${vs}`}</small>
      </h3>

      {img && (
        <>
          <AspectRatio ratio={(img.width / img.height).toFixed(2)}>
            <LazyLoadImage alt={title} src={`../images/${img.slug}.webp`} />
            {video && playVideo && (
              <>
                <button
                  aria-label={`play video of "${title}"`}
                  onClick={() => playVideo(video)}
                  className="play"
                />
                <span className="icon-size icon-video">
                  <Icon type="video" />
                </span>
              </>
            )}{' '}
          </AspectRatio>
          {(extended || link) && (
            <p>
              {extended}
              {extended && <br />}
              {link && (
                <a href={link} rel="noopener noreferrer" target="_blank">
                  source
                </a>
              )}
            </p>
          )}
        </>
      )}
    </VerticalTimelineElement>
  );
});
