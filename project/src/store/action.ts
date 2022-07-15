import {ActionType, ChangeCityActionType, FillOffersListActionType} from '../types/action-type';
import {CityType} from '../types/city-type';

function changeCity(city: CityType): ChangeCityActionType {
  return {
    type: ActionType.ChangeCity,
    payload: city
  }
}

function fillOffersList(): FillOffersListActionType {
  return {
    type: ActionType.FillOffersList
  }
}

export {changeCity, fillOffersList};
