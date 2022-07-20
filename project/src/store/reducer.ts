import {StateType} from '../types/state-type';
import {ActionsType, ActionType} from '../types/action-type';
import {Paris} from '../mocks/city';
import {offers} from '../mocks/offers';

const initialState: StateType = {
  city: Paris,
  offers: offers
}
function reducer(state: StateType = initialState, action: ActionsType): StateType {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload}
  }
  return state;
}

export {reducer};
