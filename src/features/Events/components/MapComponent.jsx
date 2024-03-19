import { TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import { MarkerIcon } from '../../../icons';

function MapComponent({ eventLocation = [] }) {
  const customIcon = (className, fill) =>
    L.divIcon({
      className: 'custom-div-icon',
      html: ReactDOMServer.renderToString(
        <MarkerIcon className={className} fill={fill} />
      ),
      iconSize: [25, 41],
    });

  return (
    <div>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={eventLocation}
        icon={customIcon('size-10', '#007467')}
      />
    </div>
  );
}

export default MapComponent;
