import {
  ActionType,
  ChangeCityActionType,
  ChangeSortActionType,
  LoadOffersActionType
} from '../types/action-type';
import {CityType} from '../types/city-type';
import {OffersListType} from '../types/offers-list-type';

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

function loadOffers(offers: OffersListType): LoadOffersActionType {
  return {
    type: ActionType.LoadOffers,
    payload: offers
  };
}

export {changeCity, loadOffers, changeSortType};
