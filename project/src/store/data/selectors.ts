import {StateType} from '../../types/state-type';
import {Namespace} from '../reducer';
import {OffersListType} from '../../types/offers-list-type';
import {OfferType} from '../../types/offer-type';
import {ReviewsListType} from '../../types/reviews-list-type';

export function getOffers(state: StateType): OffersListType {
  return state[Namespace.dataSpace].offers;
}

export function getDataLoadedFlag(state: StateType): boolean {
  return state[Namespace.dataSpace].isDataLoaded;
}

export function getCurrentOffer(state: StateType): OfferType {
  return state[Namespace.dataSpace].currentOffer;
}

export function getOffersNearBy(state: StateType): OffersListType {
  return state[Namespace.dataSpace].offersNearBy;
}

export function getComments(state: StateType): ReviewsListType {
  return state[Namespace.dataSpace].comments;
}
