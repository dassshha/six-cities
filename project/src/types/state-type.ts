import {CityType} from './city-type';
import {OffersListType} from './offers-list-type';

export type StateType = {
  city: CityType,
  offers: OffersListType,
  sortType: string
}
