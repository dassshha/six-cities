import {StateType} from '../types/state-type';
import {ActionsType, ActionType} from '../types/action-type';
import {Paris} from '../mocks/city';
import {offers} from '../mocks/offers';
import {SORT_TYPE} from '../const';

const initialState: StateType = {
  city: Paris,
  offers: offers,
  sortType: SORT_TYPE.DEFAULT
};

function reducer(state: StateType = initialState, action: ActionsType): StateType {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.ChangeSort:
      return {...state, sortType: action.payload};
  }
  return state;
}

export {reducer};
