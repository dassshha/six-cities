import {
  ActionType, ChangeAuthStatusActionType,
  ChangeCityActionType,
  ChangeSortActionType, LoadCurrentOfferActionType,
  LoadOffersActionType
} from '../types/action-type';
import {CityType} from '../types/city-type';
import {OffersListType} from '../types/offers-list-type';
import {OfferType} from '../types/offer-type';

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

function loadCurrentOffer(offer: OfferType): LoadCurrentOfferActionType {
  return {
    type: ActionType.LoadCurrentOffer,
    payload: offer
  };
}

function changeAuthStatus(status: string): ChangeAuthStatusActionType {
  return {
    type: ActionType.ChangeAuthStatus,
    payload: status
  };
}

export {changeCity, loadOffers, changeSortType, changeAuthStatus, loadCurrentOffer};
