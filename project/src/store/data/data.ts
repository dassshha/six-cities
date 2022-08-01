import {ActionsType, ActionType} from '../../types/action-type';
import {OfferType} from '../../types/offer-type';
import {DataStateType} from '../../types/state-type';

const initialState: DataStateType = {
  offers: [],
  isDataLoaded: false,
  currentOffer: <OfferType>{},
  offersNearBy: [],
  comments: []
};

function dataReducer(state = initialState, action: ActionsType): DataStateType {
  switch (action.type) {
    case ActionType.LoadOffers:
      return {...state, offers: action.payload, isDataLoaded: true};
    case ActionType.LoadCurrentOffer:
      return {...state, currentOffer: action.payload};
    case ActionType.LoadComments:
      return {...state, comments: action.payload};
    case ActionType.LoadOffersNearBy:
      return {...state, offersNearBy: action.payload};
  }
  return state;
}

export {dataReducer};
