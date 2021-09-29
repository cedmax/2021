import { memo } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#modal-root');

const style = {
  overlay: {
    zIndex: 1000,
    background: 'transparent',
    // pointerEvents: 'none',
  },
  content: {
    // pointerEvents: 'all',
    width: 640,
    maxWidth: '90%',
    background: 'none',
    border: 0,
    padding: 0,
    right: 20,
    top: 'auto',
    left: 'auto',
    bottom: 20,
    overflow: 'visible',
  },
};

type modal = {
  children: React.ReactNode;
  close: () => void;
  isOpen: boolean;
};

export default memo(function VideoModal({ children, close, isOpen }: modal) {
  return (
    <Modal style={style} onRequestClose={close} isOpen={isOpen}>
      <button onClick={close} className="close">
        <span>close</span>
      </button>
      {children}
    </Modal>
  );
});
