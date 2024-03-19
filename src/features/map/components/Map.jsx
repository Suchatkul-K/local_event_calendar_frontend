import { MapContainer } from 'react-leaflet';
import MapComponent from './MapComponent';
import MapEventSection from './MapEventSection';

const BkkLatLon = [13.756329334391024, 100.50176927408629];

function Map() {
  return (
    <div className='static'>
      <div className='relative z-10'>
        <MapContainer
          center={BkkLatLon}
          zoom={13}
          className='h-[17.1875rem] md:h-[25rem] lg:h-[100vh] xl:h-[100vh]'
        >
          <MapComponent />
        </MapContainer>
      </div>
      <div className='no-scrollbar lg:absolute lg:top-[8rem] lg:left-0 z-20 lg:w-[62vh] lg:h-[90vh] xl:w-[75vh] xl:h-[91vh] overflow-scroll backdrop-filter backdrop-blur-md'>
        <MapEventSection />
      </div>
    </div>
  );
}

export default Map;
