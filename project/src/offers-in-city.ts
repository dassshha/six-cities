import {CityType} from './types/city-type';
import {OffersListType} from './types/offers-list-type';

function getOffersInCity(city: CityType, offers: OffersListType): OffersListType {
  return offers.filter((offer) =>
    offer.city.name === city.name &&
    offer.city.location.latitude === city.location.latitude &&
    offer.city.location.longitude === city.location.longitude);
}

export {getOffersInCity};
