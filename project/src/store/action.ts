import {
  ActionType, ChangeAuthStatusActionType,
  ChangeCityActionType,
  ChangeSortActionType, LoadCommentsActionType, LoadCurrentOfferActionType,
  LoadOffersActionType, LoadOffersNearByActionType
} from '../types/action-type';
import {CityType} from '../types/city-type';
import {OffersListType} from '../types/offers-list-type';
import {OfferType} from '../types/offer-type';
import {ReviewsListType} from '../types/reviews-list-type';

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

function loadOffersNearBy(offers: OffersListType): LoadOffersNearByActionType {
  return {
    type: ActionType.LoadOffersNearBy,
    payload: offers
  };
}

function loadComments(comments: ReviewsListType): LoadCommentsActionType {
  return {
    type: ActionType.LoadComments,
    payload: comments
  };
}

function changeAuthStatus(status: string): ChangeAuthStatusActionType {
  return {
    type: ActionType.ChangeAuthStatus,
    payload: status
  };
}

export {changeCity, loadOffers, changeSortType, changeAuthStatus, loadCurrentOffer, loadComments, loadOffersNearBy};
