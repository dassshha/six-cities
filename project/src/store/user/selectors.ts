import {StateType} from '../../types/state-type';
import {Namespace} from '../reducer';

export function getAuthStatus(state: StateType): string {
  return state[Namespace.userSpace].authorizationStatus;
}
