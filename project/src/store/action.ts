import {ActionType} from '../types/action-type';
import {CityType} from '../types/city-type';
import {OffersListType} from '../types/offers-list-type';
import {OfferType} from '../types/offer-type';
import {ReviewsListType} from '../types/reviews-list-type';
import {createAction} from '@reduxjs/toolkit';
import {AuthStatus} from '../const';

export const changeCity = createAction<CityType>(ActionType.ChangeCity);

export const changeSortType = createAction<string>(ActionType.ChangeSort);

export const loadOffers = createAction<OffersListType>(ActionType.LoadOffers);

export const loadCurrentOffer = createAction<OfferType>(ActionType.LoadCurrentOffer);

export const loadOffersNearBy = createAction<OffersListType>(ActionType.LoadOffersNearBy);

export const loadComments = createAction<ReviewsListType>(ActionType.LoadComments);

export const changeAuthStatus = createAction<AuthStatus>(ActionType.ChangeAuthStatus);

export const loadFavoriteOffers = createAction<OffersListType>(ActionType.LoadFavoriteOffers);

