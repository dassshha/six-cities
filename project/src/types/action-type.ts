import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {StateType} from './state-type';
import {AxiosInstance} from 'axios';
import {Action} from 'redux';

export enum ActionType {
  ChangeCity = 'app/changeCity',
  LoadOffers = 'data/loadOffers',
  LoadCurrentOffer = 'data/loadCurrentOffer',
  ChangeSort = 'app/changeSort',
  ChangeAuthStatus = 'user/changeAuthStatus',
  LoadOffersNearBy = 'data/loadOffersNearBy',
  LoadComments = 'data/loadComments',
  LoadFavoriteOffers = 'data/loadFavoriteOffers'
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateType, AxiosInstance, Action>;
export type ThunkAppDispatch = ThunkDispatch<StateType, AxiosInstance, Action>;
