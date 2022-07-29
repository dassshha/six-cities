import {CityType} from './city-type';
import {OffersListType} from './offers-list-type';
import {OfferType} from './offer-type';
import {ReviewsListType} from './reviews-list-type';

export type StateType = {
  city: CityType,
  offers: OffersListType,
  sortType: string,
  isDataLoaded: boolean,
  authorizationStatus: string,
  currentOffer: OfferType,
  offersNearBy: OffersListType,
  comments: ReviewsListType
}
