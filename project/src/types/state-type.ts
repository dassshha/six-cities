import {CityType} from './city-type';
import {OffersListType} from './offers-list-type';
import {OfferType} from './offer-type';
import {ReviewsListType} from './reviews-list-type';
import {State} from '../store/reducer';
import {store} from '../index';
import {AuthStatus} from '../const';

export type StateType = State;

export type appDispatch = typeof store.dispatch;

export type AppStateType = {
  city: CityType,
  sortType: string,
}

export type DataStateType = {
  offers: OffersListType,
  isDataLoaded: boolean,
  currentOffer: OfferType,
  offersNearBy: OffersListType,
  comments: ReviewsListType,
  favoriteOffers: OffersListType
  areFavoriteOffersLoaded: boolean
}

export type UserStateType = {
  authorizationStatus: AuthStatus,
}
