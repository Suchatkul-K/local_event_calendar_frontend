import { TileLayer, useMap, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
import { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import useCreateEvent from '../hook/useCreateEvent';
import { MarkerIcon } from '../../../icons';

function EventMap() {
  const { CreateEventContextObject } = useCreateEvent();
  const { input, setInput, error } = CreateEventContextObject;
  const [marker, setMarker] = useState(null);
  const map = useMap();

  const customIcon = (className, fill) =>
    L.divIcon({
      className: 'custom-div-icon',
      html: ReactDOMServer.renderToString(
        <MarkerIcon className={className} fill={fill} />
      ),
      iconSize: [25, 41],
    });

  useMapEvent('click', (e) => {
    if (marker) {
      marker.remove();
    }

    // Add a marker at the clicked location
    const newMarker = L.marker(e.latlng)
      .addTo(map)
      .setIcon(customIcon('size-10 border', '#007467'));

    // Set the new marker && update input
    setMarker(newMarker);
    delete error.lat;
    setInput({ ...input, lat: e.latlng.lat, long: e.latlng.lng });
  });

  return (
    <div>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </div>
  );
}

export default EventMap;
