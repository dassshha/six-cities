import {CityType} from './city-type';
import {OffersListType} from './offers-list-type';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {StateType} from './state-type';
import {AxiosInstance} from 'axios';
import {OfferType} from './offer-type';
import {ReviewsListType} from './reviews-list-type';

export enum ActionType {
  ChangeCity = 'app/changeCity',
  LoadOffers = 'data/loadOffers',
  LoadCurrentOffer = 'data/loadCurrentOffer',
  ChangeSort = 'app/changeSort',
  ChangeAuthStatus = 'user/changeAuthStatus',
  LoadOffersNearBy = 'data/loadOffersNearBy',
  LoadComments = 'data/loadComments'
}

export type ChangeCityActionType = {
  type: ActionType.ChangeCity,
  payload: CityType
}

export type ChangeSortActionType = {
  type: ActionType.ChangeSort,
  payload: string,
}

export type LoadOffersActionType = {
  type: ActionType.LoadOffers,
  payload: OffersListType
}

export type LoadOffersNearByActionType = {
  type: ActionType.LoadOffersNearBy,
  payload: OffersListType
}

export type LoadCommentsActionType = {
  type: ActionType.LoadComments,
  payload: ReviewsListType
}

export type LoadCurrentOfferActionType = {
  type: ActionType.LoadCurrentOffer,
  payload: OfferType
}

export type ChangeAuthStatusActionType = {
  type: ActionType.ChangeAuthStatus,
  payload: string
}

export type ActionsType =
  ChangeCityActionType | LoadOffersActionType | ChangeSortActionType | LoadCommentsActionType |
  ChangeAuthStatusActionType | LoadCurrentOfferActionType | LoadOffersNearByActionType;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateType, AxiosInstance, ActionsType>;
export type ThunkAppDispatch = ThunkDispatch<StateType, AxiosInstance, ActionsType>;
