import {CityType} from './city-type';

export enum ActionType {
  ChangeCity = 'changeCity',
  FillOffersList = 'fillOffersList'
}

export type ChangeCityActionType = {
  type: ActionType.ChangeCity,
  payload: CityType
}

export type FillOffersListActionType = {
  type: ActionType.FillOffersList
}

export type ActionsType = ChangeCityActionType | FillOffersListActionType;
