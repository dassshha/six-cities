import {loadComments, loadCurrentOffer, loadFavoriteOffers, loadOffers, loadOffersNearBy} from '../action';
import {dataReducer} from './data';
import {OfferType} from '../../types/offer-type';
import {offers} from '../../mocks/offers';
import {reviews} from '../../mocks/reviews';

const state = {
  offers: [],
  isDataLoaded: false,
  currentOffer: <OfferType>{},
  offersNearBy: [],
  comments: [],
  favoriteOffers: [],
  areFavoriteOffersLoaded: false
};

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(dataReducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  })

  it('should load offers and change data loaded flag', () => {
    expect(dataReducer(state, loadOffers(offers)))
      .toEqual({...state, offers, isDataLoaded: true});
  });

  it('should load current offer', () => {
    expect(dataReducer(state, loadCurrentOffer(offers[0])))
      .toEqual({...state, currentOffer: offers[0]});
  });

  it('should load offers near by', () => {
    expect(dataReducer(state, loadOffersNearBy(offers)))
      .toEqual({...state, offersNearBy: offers});
  });

  it('should load comments', () => {
    expect(dataReducer(state, loadComments(reviews)))
      .toEqual({...state, comments: reviews});
  });

  it('should load favorite offers and change data loaded flag', () => {
    expect(dataReducer(state, loadFavoriteOffers(offers)))
      .toEqual({...state, favoriteOffers: offers, areFavoriteOffersLoaded: true});
  });
});

