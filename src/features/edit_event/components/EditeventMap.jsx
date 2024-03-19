import { TileLayer, useMap, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { MarkerIcon } from '../../../icons';

export default function EditeventMap({ error, setInput, input, event }) {
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
    const newMarker = L.marker(e.latlng).addTo(map);
    // Set the new marker && update input
    setMarker(newMarker);
    delete error.lat;
    setInput({ ...input, lat: e.latlng.lat, long: e.latlng.lng });
  });

  useEffect(() => {
    // Check if event.EventAddress.lat and event.EventAddress.long exist
    if (event) {
      // Set the view to the specified coordinates
      map.setView(
        [event.EventAddress.lat, event.EventAddress.long],
        map.getZoom()
      );

      // Add a marker at the specified location
      const newMarker = L.marker([
        event.EventAddress.lat,
        event.EventAddress.long,
      ])
        .addTo(map)
        .setIcon(customIcon('size-10 border', '#007467'));
      setMarker(newMarker);
    }
  }, [event, map]);

  return (
    <div>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </div>
  );
}
