import { memo, useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReactMapGl, { Popup, Marker } from 'react-map-gl';
import mapData from '../map.json';
import { dataProps } from './types';
import { transformDate } from './helpers';

Modal.setAppElement('#modal-root');
const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 12;

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

export default memo(function MapModal({ close, isOpen, data }: modal) {
  const [popupInfo, setPopupInfo] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 41.9028,
    longitude: 12.4964,
    zoom: 1.5,
  });

  const dataToShow = popupInfo
    ? data.filter(({ location }) => location === popupInfo.location).reverse()
    : [];
  const isALot = dataToShow.length > 7 ? dataToShow.length - 7 : 0;
  if (isALot) {
    dataToShow.length = 7;
  }

  useEffect(() => {
    const eventListener = () => {
      window.requestAnimationFrame(() => {
        setViewport((viewport) => ({
          ...viewport,
          width: '100%',
          height: '100%',
        }));
      });
    };

    window.addEventListener('resize', eventListener);

    return () => {
      window.removeEventListener('resize', eventListener);
    };
  }, []);

  return (
    <Modal style={style} onRequestClose={close} isOpen={isOpen}>
      <button onClick={close} className="close">
        <span>close</span>
      </button>

      <ReactMapGl
        onClick={() => setPopupInfo(null)}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/cedmax/ckvmu3zqw4w0614pfl42eanwm"
        mapboxApiAccessToken="pk.eyJ1IjoiY2VkbWF4IiwiYSI6ImNpenBrZDhkazAwMTUyd255cWpocjFpMmYifQ.OBuGt4CZx9oezTqD0-JYaw"
      >
        {mapData.map(({ location, coordinates: [longitude, latitude] }) => (
          <Marker
            key={`marker-${location}`}
            longitude={longitude}
            latitude={latitude}
          >
            <svg
              height={SIZE}
              viewBox="0 0 24 24"
              style={{
                cursor: 'pointer',
                fill: '#d00',
                stroke: 'none',
                transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
              }}
              onClick={() => setPopupInfo({ longitude, latitude, location })}
            >
              <path d={ICON} />
            </svg>
          </Marker>
        ))}
        {popupInfo && (
          <Popup
            className="map-popover"
            tipSize={5}
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            <h3>{popupInfo.location}</h3>
            {dataToShow.map(({ title, date }) => (
              <p key={title}>
                <strong>{transformDate(date)}</strong>
                <br />
                {title}
              </p>
            ))}
            {!!isALot && `...and other ${isALot}`}
          </Popup>
        )}
      </ReactMapGl>
    </Modal>
  );
});
