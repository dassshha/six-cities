import {StateType} from '../../types/state-type';
import {CityType} from '../../types/city-type';
import {Namespace} from '../reducer';

export function getCity(state: StateType): CityType {
  return state[Namespace.appSpace].city;
}

export function getSortType(state: StateType): string {
  return state[Namespace.appSpace].sortType;
}
