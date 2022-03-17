import { icon } from 'leaflet';
import { useEffect, useState } from 'react';
import {
  MapContainer, Marker, TileLayer,
} from 'react-leaflet';
import { useSelector } from 'react-redux';

import iconLocation from '../../assets/images/icon-location.svg';

const IconLocation = icon({ iconUrl: iconLocation });

const { REACT_APP_MAP_TOKEN } = process.env;

function Map() {
  const [map, setMap] = useState(null);
  const { lat, lng } = useSelector(({ tracker }) => tracker);
  const position = [lat, lng];

  useEffect(() => {
    if (map) map.setView([lat, lng], 16);
  }, [lat, lng]);

  return (
    <MapContainer
      center={map ? map.getCenter() : position}
      zoom={16}
      style={{ zIndex: -1 }}
      zoomControl={false}
      whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.mapbox.com/styles/v1/abizmo/cl0v92jdw000t15ozt63uzsk3/tiles/{z}/{x}/{y}?access_token=${REACT_APP_MAP_TOKEN}`}
      />
      <Marker position={position} icon={IconLocation} />
    </MapContainer>
  );
}

export default Map;
