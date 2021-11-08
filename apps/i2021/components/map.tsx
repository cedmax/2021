import { memo, Suspense, lazy } from 'react';
import Modal from 'react-modal';
import { dataProps } from './types';

Modal.setAppElement('#modal-root');

const style = {
  overlay: {
    zIndex: 1000,
    background: 'rgba(0,0,0,.5)',
  },
  content: {
    overflow: 'visible',
    color: 'black',
    background: 'none',
    border: 0,
    padding: 0,
    right: 'calc(2vw + 10px)',
    top: 'calc(2vw + 10px)',
    left: 'calc(2vw + 10px)',
    bottom: 'calc(2vw + 10px)',
  },
};

type modal = {
  close: () => void;
  isOpen: boolean;
  data: Array<dataProps>;
};

const MapComponent = lazy(() => import('./map-wrapper'));

export default memo(function MapModal({ close, isOpen, data }: modal) {
  return (
    <Modal style={style} onRequestClose={close} isOpen={isOpen}>
      <button onClick={close} className="close">
        <span>close</span>
      </button>

      <div className="map-loader">
        <Suspense fallback={<div />}>
          <MapComponent data={data} />
        </Suspense>
      </div>
    </Modal>
  );
});
