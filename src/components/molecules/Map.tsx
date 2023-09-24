'use client';

import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import MapBox, {
  AttributionControl,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
} from 'react-map-gl';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

function Map() {
  return (
    <MapBox
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      attributionControl={false}
    >
      <FullscreenControl />
      <GeolocateControl />
      <AttributionControl customAttribution='Map design by me' />
      <NavigationControl />
    </MapBox>
  );
}

export default React.memo(Map);
