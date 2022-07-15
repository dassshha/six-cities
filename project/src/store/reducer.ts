import {StateType} from '../types/state-type';
import {ActionsType} from '../types/action-type';
import {Paris} from '../mocks/city';
import {offers} from '../mocks/offers';

const initialState: StateType = {
  city: Paris,
  offers: offers
}
function reducer(state: StateType = initialState, action: ActionsType): StateType {
  return state;
}
