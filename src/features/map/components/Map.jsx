import { MapContainer, useMap } from 'react-leaflet';
import { useState, useEffect } from 'react';
import MapComponent from './MapComponent';
import { getAllEventInScope } from '../../../api/event';
// import EventCardGanX from '../../../global_components/EventCardGanX';

const BkkLatLon = [13.756329334391024, 100.50176927408629];

function Map() {
  const [events, setEvents] = useState();
  console.log(events);

  return (
    <div>
      <MapContainer center={BkkLatLon} zoom={13} style={{ height: '400px' }}>
        <MapComponent events={events} setEvents={setEvents} />
      </MapContainer>
    </div>
  );
}

export default Map;
