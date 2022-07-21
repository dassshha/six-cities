import {ActionType, ChangeCityActionType, ChangeSortActionType, FillOffersListActionType} from '../types/action-type';
import {CityType} from '../types/city-type';

function changeCity(city: CityType): ChangeCityActionType {
  return {
    type: ActionType.ChangeCity,
    payload: city
  };
}

function changeSortType(sortType: string): ChangeSortActionType {
  return {
    type: ActionType.ChangeSort,
    payload: sortType
  };
}

function fillOffersList(): FillOffersListActionType {
  return {
    type: ActionType.FillOffersList
  };
}

export {changeCity, fillOffersList, changeSortType};
