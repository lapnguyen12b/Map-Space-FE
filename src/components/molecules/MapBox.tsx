import Map from 'react-map-gl';

export const MapBox = () => {
  console.log('📢 [MapBox.tsx:4]', process.env.MAPBOX_API_KEY);
  return (
    <Map
      mapboxAccessToken={process.env.MAPBOX_API_KEY}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
    />
  );
};
