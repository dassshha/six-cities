import {CityType} from './city-type';
import {OffersListType} from './offers-list-type';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {StateType} from './state-type';
import {AxiosInstance} from 'axios';

export enum ActionType {
  ChangeCity = 'app/changeCity',
  LoadOffers = 'data/loadOffers',
  ChangeSort = 'app/changeSort'
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

export type ActionsType = ChangeCityActionType | LoadOffersActionType | ChangeSortActionType;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateType, AxiosInstance, ActionsType>;
export type ThunkAppDispatch = ThunkDispatch<StateType, AxiosInstance, ActionsType>;
