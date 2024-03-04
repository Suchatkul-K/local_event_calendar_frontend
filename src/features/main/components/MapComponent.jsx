import { TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import { getAllEventInScope } from '../../../api/event';

const BkkLatLon = [13.756329334391024, 100.50176927408629];

function MapComponent() {
  const map = useMap();

  // Fetch data based on the specified bounds
  const fetchData = async (bounds) => {
    console.log('Fetching data for bounds:', bounds);
    return await getAllEventInScope(bounds);
  };

  const handleMapChange = () => {
    // const centerMap = map.getCenter();
    // console.log('Map center :', centerMap);

    // Check if the zoom level is 10 or above
    if (map.getZoom() >= 10) {
      // Fetch data based on the bounds of the visible area
      const bounds = map.getBounds();
      const result = fetchData(bounds);
      console.log(result);
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

  return (
    <>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={BkkLatLon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
}

export default MapComponent;
