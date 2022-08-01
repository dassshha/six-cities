import {CityType} from './city-type';
import {OffersListType} from './offers-list-type';
import {OfferType} from './offer-type';
import {ReviewsListType} from './reviews-list-type';
import {State} from '../store/reducer';

export type StateType = State;

export type AppStateType = {
  city: CityType,
  sortType: string,
}

export type DataStateType = {
  offers: OffersListType,
  isDataLoaded: boolean,
  currentOffer: OfferType,
  offersNearBy: OffersListType,
  comments: ReviewsListType
}

export type UserStateType = {
  authorizationStatus: string,
}
