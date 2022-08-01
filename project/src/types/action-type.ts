import {CityType} from './city-type';
import {OffersListType} from './offers-list-type';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {StateType} from './state-type';
import {AxiosInstance} from 'axios';
import {OfferType} from './offer-type';
import {ReviewsListType} from './reviews-list-type';
import {Action} from 'redux';

export enum ActionType {
  ChangeCity = 'app/changeCity',
  LoadOffers = 'data/loadOffers',
  LoadCurrentOffer = 'data/loadCurrentOffer',
  ChangeSort = 'app/changeSort',
  ChangeAuthStatus = 'user/changeAuthStatus',
  LoadOffersNearBy = 'data/loadOffersNearBy',
  LoadComments = 'data/loadComments'
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateType, AxiosInstance, Action>;
export type ThunkAppDispatch = ThunkDispatch<StateType, AxiosInstance, Action>;
