import { MapContainer } from 'react-leaflet';
import MapComponent from './MapComponent';
import MapEventSection from './MapEventSection';

const BkkLatLon = [13.756329334391024, 100.50176927408629];

function Map() {
  return (
    <div className='min-h-full'>
      <MapContainer
        center={BkkLatLon}
        zoom={13}
        style={{ height: '400px', zIndex: '0' }}
      >
        <MapComponent />
      </MapContainer>
      <MapEventSection />
    </div>
  );
}

export default Map;
