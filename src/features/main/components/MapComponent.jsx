import {
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
  useMapEvent,
} from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { getAllEventInScope } from '../../../api/event';
import { MarkerIcon } from '../../../icons';

// const BkkLatLon = [13.756329334391024, 100.50176927408629];

function MapComponent() {
  const [events, setEvents] = useState();
  const [user, setUser] = useState(null);
  const map = useMap();

  // Fetch data based on the specified bounds
  const fetchData = (bounds) =>
    // console.log('Fetching data for bounds:', bounds);
    getAllEventInScope(bounds);
  const handleMapChange = async () => {
    // const centerMap = map.getCenter();
    // console.log('Map center :', centerMap);

    console.log('Map zoom: ', map.getZoom());

    // Check if the zoom level is 10 or above
    if (map.getZoom() >= 10) {
      // Fetch data based on the bounds of the visible area
      const bounds = map.getBounds();
      const result = await fetchData(bounds);
      console.log(result.data);
      setEvents(result.data);
    } else {
      setEvents(null);
    }
  };

  // Attach zoom change event listener to the map
  useMapEvents({
    zoomend: handleMapChange,
    moveend: handleMapChange,
    click: () => {
      map.locate();
    },
    locationfound: (location) => {
      console.log('My location found:', location);
    },
  });

  useEffect(() => {
    map.on('locationfound', (e) => {
      setUser(e.latlng);
      // console.log(e.latlng);
    });

    map.locate();

    return () => {
      map.off('locationfound', (e) => {
        setUser(e.latlng);
      });
    };
  }, [map]);

  const customIcon = (className, fill) =>
    L.divIcon({
      className: 'custom-div-icon',
      html: ReactDOMServer.renderToString(
        <MarkerIcon className={className} fill={fill} />
      ), // Render the SVG marker component with the specified color
      iconSize: [25, 41],
    });

  return (
    <>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {user && (
        <Marker
          position={[user.lat, user.lng]}
          icon={customIcon('size-10', 'red')}
        >
          <Popup>
            <MarkerIcon />
            Mock up Location
          </Popup>
        </Marker>
      )}
      {events &&
        events.map((event) => (
          <Marker
            position={[event.EventAddress.lat, event.EventAddress.long]}
            key={event.id}
            icon={customIcon('size-10', 'green')}
          >
            <Popup>{event.title}</Popup>
          </Marker>
        ))}
    </>
  );
}

export default MapComponent;
