import {ActionsType, ActionType} from '../../types/action-type';
import {AuthStatus} from '../../const';
import {UserStateType} from '../../types/state-type';

const initialState: UserStateType = {
  authorizationStatus: AuthStatus.Unknown,
};

function userReducer(state = initialState, action: ActionsType): UserStateType {
  switch (action.type) {
    case ActionType.ChangeAuthStatus:
      return {...state, authorizationStatus: action.payload};
  }
  return state;
}

export {userReducer};
