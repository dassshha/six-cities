import {CityType} from './city-type';

export enum ActionType {
  ChangeCity = 'changeCity',
  FillOffersList = 'fillOffersList',
  ChangeSort = 'changeSort'
}

export type ChangeCityActionType = {
  type: ActionType.ChangeCity,
  payload: CityType
}

export type ChangeSortActionType = {
  type: ActionType.ChangeSort,
  payload: string,
}

export type FillOffersListActionType = {
  type: ActionType.FillOffersList
}

export type ActionsType = ChangeCityActionType | FillOffersListActionType | ChangeSortActionType;
