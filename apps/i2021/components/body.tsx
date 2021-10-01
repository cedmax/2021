import { useState, useCallback } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import Block from './block';
import Menu from './menu';
import Video from './video';
import Modal from './modal';
import Footer from './footer';

type blockProps = {
  location: string;
  title: string;
  type: string;
  date: Array<string>;
  img?: string;
  vs?: string;
  video?: string;
};

type bodyProps = {
  data: Array<blockProps>;
};

type opType = { type: string; location: string };

type availableTypes = string[];

export default function Body({ data }: bodyProps) {
  const [playing, setPlaying] = useState('');
  const [[filter, list], updateList] = useState(['', data]);
  const [availableTypes] = useState<availableTypes>(
    Array.from(new Set(data.map(({ type }: opType) => type))).sort()
  );
  const playVideo = useCallback((video) => {
    setPlaying(video);
  }, []);
  const closeModal = useCallback(() => {
    setPlaying('');
  }, []);
  const filterList = useCallback(
    (newFilter) => {
      updateList(([filter]) => {
        if (filter === newFilter) {
          return ['', data];
        }
        let newList;
        if (newFilter === 'olympics') {
          newList = data.filter(
            ({ location }: opType) => location === 'Tokyo, JP'
          );
        } else if (newFilter === 'eaa') {
          newList = data.filter(
            ({ location }: opType) => location === 'Tallin, EE'
          );
        } else {
          newList = data.filter(({ type }: opType) => type === newFilter);
        }

        return [newFilter, newList];
      });
    },
    [data]
  );
  return (
    <>
      <Menu
        selected={filter}
        availableTypes={availableTypes}
        filter={filterList}
      />
      <VerticalTimeline>
        {list.map((event: blockProps) => (
          <Block key={event.title} playVideo={playVideo} {...event} />
        ))}
      </VerticalTimeline>
      <Modal close={closeModal} isOpen={!!playing}>
        <Video video={playing} />
      </Modal>
      <Footer filter={filter} updateList={updateList} data={data} />
    </>
  );
}
