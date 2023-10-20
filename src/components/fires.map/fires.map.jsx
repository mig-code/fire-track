/* eslint-disable react/prop-types */
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

import FireActiveIcon from '../../assets/fire-active-icon.svg';
import FireContIcon from '../../assets/fire-cont-icon.svg';
import fireExtIcon from '../../assets/fire-ext-icon.svg';

import './fires.map.scss';

const FiresMap = ({ fireMarkers }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const center = {
    lat: 41.5,
    lng: -5.01,
  };

  // helper function to set the icon type
  function setIconType(fireMarker) {
    if (fireMarker.situacion_actual === 'ACTIVO') return FireActiveIcon;
    if (fireMarker.situacion_actual === 'EXTINGUIDO') return fireExtIcon;
    if (fireMarker.situacion_actual === 'CONTROLADO') return FireContIcon;

    // If the fire is not active, extinguished or controlled null render default icon

    return null;
  }

  return (
    <div className='map-container'>
      {isLoaded && (
        <GoogleMap
          zoom={7}
          center={center}
          mapContainerClassName='map-container__google-map'
          mapTypeId='hybrid'
        >
          {fireMarkers.map((fireMarker, index) => {
            // If both latitud and long are present, render the marker
            if (fireMarker.posicion?.lat && fireMarker.posicion?.lon) {
              return (
                <MarkerF
                  key={fireMarker.id}
                  position={{
                    lat: fireMarker.posicion?.lat,
                    lng: fireMarker.posicion?.lon,
                  }}
                  icon={setIconType(fireMarker)}
                  label={{
                    text: `${index + 1}`,
                    color: 'white',
                    fontWeight: 'bold',
                    className: 'marker-label',
                  }}
                ></MarkerF>
              );
            }
            return null;
          })}
        </GoogleMap>
      )}
    </div>
  );
};

export default FiresMap;
