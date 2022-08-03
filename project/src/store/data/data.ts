import {OfferType} from '../../types/offer-type';
import {DataStateType} from '../../types/state-type';
import {createReducer} from '@reduxjs/toolkit';
import {loadComments, loadCurrentOffer, loadFavoriteOffers, loadOffers, loadOffersNearBy} from '../action';

const initialState: DataStateType = {
  offers: [],
  isDataLoaded: false,
  currentOffer: <OfferType>{},
  offersNearBy: [],
  comments: [],
  favoriteOffers: [],
  areFavoriteOffersLoaded: false
};

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadOffersNearBy, (state, action) => {
      state.offersNearBy = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
      state.areFavoriteOffersLoaded = true;
    });
});

export {dataReducer};
