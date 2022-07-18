import { MapContainer, TileLayer, Marker, useMap} from 'react-leaflet';
import {CityType} from '../../types/city-type';
import {OffersListType} from '../../types/offers-list-type';
import {Icon} from 'leaflet';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';

type MapProps = {
  city: CityType,
  points: OffersListType,
  selectedPoint: number | undefined,
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type UpdateMapCenterProps = {
  city: CityType
}

function UpdateMapCenter({city}: UpdateMapCenterProps): null {
  const map = useMap();
  map.panTo([city.location.latitude, city.location.longitude]);
  return null;
}

function Map({city, points, selectedPoint}: MapProps): JSX.Element {
  return (
    <MapContainer center={[city.location.latitude, city.location.longitude]} zoom={city.location.zoom} scrollWheelZoom={false} style={{height: '500px'}}>
      <UpdateMapCenter city={city}/>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
      />
      {points.map((point) => <Marker position={[point.location.latitude, point.location.longitude]} key={point.id} icon={selectedPoint !== undefined && point.id === selectedPoint ? currentCustomIcon : defaultCustomIcon}/>)}
    </MapContainer>
  );
}

export {Map};
