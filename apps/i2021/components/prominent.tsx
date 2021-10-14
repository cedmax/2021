import { useState, useCallback } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import Block from './block';

Modal.setAppElement('#modal-root');

const style = {
  overlay: {
    background: 'rgba(0,0,0,0.5)',
    // pointerEvents: 'none',
  },
  content: {
    // pointerEvents: 'all',
    width: 640,
    maxWidth: '90%',
    background: 'none',
    border: 0,
    padding: 0,
    left: '50%',
    top: '50%',
    transform: 'translate3d(-50%, -70%, 0)',
    overflow: 'visible',
  },
};

const Prominent = ({ event }) => {
  const router = useRouter();
  const close = useCallback(() => {
    router.push('/', null, { shallow: true });
  }, [router]);

  return (
    <Modal style={style} onRequestClose={close} isOpen={true}>
      <Block {...event} />
    </Modal>
  );
};

export default Prominent;
