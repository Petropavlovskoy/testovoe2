import React from 'react';
import Map from './components/Map/Map';
import { useJsApiLoader } from '@react-google-maps/api';
import Autocomlete from './components/Autocomplite/Autocomplite';

import s from './Map1.module.css';

const API_KEY = 'AIzaSyBEHNSrHnSoQOC5g2ozztpgPVHKIQUpVvA'

const defaultCenter = {
  lat: -3.745,
  lng: -38.523
};

const libraries = ['places']

const Map1 = () => {
  const [center, setCenter] = React.useState(defaultCenter)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries
  })

  const onPlaceSelect = React.useCallback(
    (coordinates) => {
      setCenter(coordinates)
    },

    [],
  )

  return (
    <div >
      <div className={s.addressSearchContainer}>
        <Autocomlete isLoaded={isLoaded} onSelect={onPlaceSelect} />
      <button className={s.modeToggle}>Пошук</button>
      </div>

      {isLoaded ? <Map center={center} /> : <h2> Loading </h2>}
    </div>
  );
}

export default Map1;
