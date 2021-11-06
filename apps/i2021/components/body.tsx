import { useState, useCallback, memo, useRef } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import Block from './block';
import Menu from './menu';
import Map from './map';
import Video from './video';
import Modal from './modal';
import Footer from './footer';
import { getMonth, parse } from 'date-fns';
import { dataProps, blockProps } from './types';

type bodyProps = {
  data: Array<dataProps>;
};

type opType = { type: string; location: string; date: Array<string> };

export default memo(function Body({ data }: bodyProps) {
  const [playing, setPlaying] = useState('');
  const [mapVisibile, setMapVisibile] = useState(false);

  const [[filter, list], updateList] = useState(['', data]);

  const showMap = useCallback(() => {
    setMapVisibile(true);
  }, []);
  const hideMap = useCallback(() => {
    setMapVisibile(false);
  }, []);

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
        if (!isNaN(newFilter)) {
          newList = data.filter(
            ({ date: [initialDate] }: opType) =>
              getMonth(parse(initialDate, 'd/L/y', new Date())) === newFilter
          );
        } else if (newFilter === 'olympics') {
          newList = data.filter(
            ({ location }: opType) => location === 'Tokyo, JP'
          );
        } else if (newFilter === 'eaa') {
          newList = data.filter(
            ({ location }: opType) => location === 'Tallinn, EE'
          );
        } else if (newFilter === 'aswc') {
          newList = data.filter(
            ({ location }: opType) => location === 'Asunción, PY'
          );
        } else if (newFilter === 'trigames') {
          newList = data.filter(
            ({ location }: opType) => location === 'Ferrara, IT'
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
        showMap={showMap}
        selected={filter}
        data={data}
        filter={filterList}
      />
      <VerticalTimeline animate={false}>
        {list.map((event: blockProps) => (
          <Block key={event.title} playVideo={playVideo} {...event} />
        ))}
      </VerticalTimeline>

      <Modal close={closeModal} isOpen={!!playing}>
        <Video video={playing} />
      </Modal>
      <Map data={data} close={hideMap} isOpen={!!mapVisibile} />
      <Footer filter={filter} updateList={updateList} data={data} />
    </>
  );
});
