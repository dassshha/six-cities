import {StateType} from '../types/state-type';
import {ActionsType, ActionType} from '../types/action-type';
import {Paris} from '../mocks/city';
import {SORT_TYPE} from '../const';

const initialState: StateType = {
  city: Paris,
  offers: [],
  sortType: SORT_TYPE.DEFAULT,
  isDataLoaded: false
};

function reducer(state: StateType = initialState, action: ActionsType): StateType {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.ChangeSort:
      return {...state, sortType: action.payload};
    case ActionType.LoadOffers:
      return {...state, offers: action.payload, isDataLoaded: true};
  }
  return state;
}

export {reducer};
