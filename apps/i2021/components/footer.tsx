import { memo } from 'react';
import { blockProps } from './types';

type footerProps = {
  filter: string;
  updateList: (a: [string, Array<blockProps>]) => void;
  data: Array<blockProps>;
};

export default memo(function footer({ filter, updateList, data }: footerProps) {
  return (
    <footer>
      {filter && (
        <button
          style={{ margin: 'auto', cursor: 'pointer' }}
          onClick={() => {
            updateList(['', data]);
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 0);
          }}
        >
          reset filters
        </button>
      )}
      <p>
        <strong>Italians</strong> do <strong>it</strong> better!
      </p>
      <span>
        <em>
          <strong>It</strong>
        </em>{' '}
        what? All of{' '}
        <em>
          <strong>it</strong>!
        </em>
      </span>
      <small>
        by <a href="https://cedmax.com">cedmax</a>{' '}
        <span aria-label="Italy flag" role="img">
          🇮🇹
        </span>
      </small>
    </footer>
  );
});
