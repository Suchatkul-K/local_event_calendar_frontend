import { MapContainer } from 'react-leaflet';
import { useState } from 'react';
import MapComponent from './MapComponent';
import EventCardGanX from '../../../global_components/EventCardGanX';

const BkkLatLon = [13.756329334391024, 100.50176927408629];

function Map() {
  const [events, setEvents] = useState([]);
  // console.log(events);

  return (
    <div>
      <MapContainer center={BkkLatLon} zoom={13} style={{ height: '400px' }}>
        <MapComponent events={events} setEvents={setEvents} />
      </MapContainer>
      {events?.length > 0 && (
        <div className='font-bold text-[1.5rem] p-4'>Event Around Here</div>
      )}
      {events?.length > 0 ? (
        events.map((event) => (
          <div className='p-4'>
            <EventCardGanX event={event} />
          </div>
        ))
      ) : (
        <div className='w-full h-[20rem] flex justify-center items-center font-bold text-gray-500'>
          No Event around here
        </div>
      )}
    </div>
  );
}

export default Map;
