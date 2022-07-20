import {CityType} from './types/city-type';
import {OffersListType} from './types/offers-list-type';

function compareCities(city1: CityType, city2: CityType): boolean {
  return city1.name === city2.name &&
    city1.location.longitude === city2.location.longitude &&
    city1.location.latitude === city2.location.latitude;
}

function getOffersInCity(city: CityType, offers: OffersListType): OffersListType {
  return offers.filter((offer) => compareCities(offer.city, city));
}

export {getOffersInCity, compareCities};
