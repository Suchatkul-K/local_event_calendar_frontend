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
        {events?.length > 0 && (
          <div className='font-bold text-[1.5rem] p-4'>Event Around Here</div>
        )}
        {events?.length > 0 ? (
          events.map((event) => (
            <div className='p-4' key={event.id}>
              <EventCardGanX event={event} key={event.id} />
            </div>
          ))
        ) : (
          <div className='w-full h-[20rem] flex justify-center items-center font-bold text-gray-500'>
            No Event around here
          </div>
        )}
      </div>
    </div>
  );
}

export default Map;
