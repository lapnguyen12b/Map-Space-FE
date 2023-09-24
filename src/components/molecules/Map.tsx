'use client';

import 'mapbox-gl/dist/mapbox-gl.css';
import MapBox, {
  AttributionControl,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
} from 'react-map-gl';

const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

function Map() {
  return (
    <MapBox
      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      reuseMaps
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 9,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle='mapbox://styles/mapbox/streets-v12'
      attributionControl={false}
    >
      <FullscreenControl />
      <GeolocateControl />
      <AttributionControl customAttribution='Map design by me' />
      <NavigationControl />
    </MapBox>
  );
}

export default Map;
