import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {CityType} from '../../types/city-type';
import {OffersListType} from '../../types/offers-list-type';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import {useMap} from '../../hooks/useMap';

type MyMapProps = {
  city: CityType,
  points: OffersListType,
  selectedPoint: number | undefined,
  className: string
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

function MyMap({city, points, selectedPoint,className}: MyMapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.city.location.latitude,
          lng: point.city.location.longitude
        });
        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <section className={`${className}__map map`} ref={mapRef}></section>;
}

export {MyMap};
