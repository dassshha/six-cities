import {StateType} from '../../types/state-type';
import {ReviewsListType} from '../../types/reviews-list-type';
import {Namespace} from '../reducer';

export function getAuthStatus(state: StateType): string {
  return state[Namespace.userSpace].authorizationStatus;
}
