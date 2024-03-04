import { MapContainer } from 'react-leaflet';
import MapComponent from './MapComponent';

const BkkLatLon = [13.756329334391024, 100.50176927408629];

function Map() {
  return (
    <MapContainer center={BkkLatLon} zoom={13} style={{ height: '400px' }}>
      <MapComponent />
    </MapContainer>
  );
}

export default Map;
