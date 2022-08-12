import {userReducer} from './user';
import {AuthStatus} from '../../const';
import {changeAuthStatus} from '../action';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(userReducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({ authorizationStatus: AuthStatus.Unknown});
  });

  it('should change current auth status to a given auth status', () => {
    const state = {authorizationStatus: AuthStatus.Unknown};

    expect(userReducer(state, changeAuthStatus(AuthStatus.Auth)))
      .toEqual({authorizationStatus: AuthStatus.Auth});

    expect(userReducer(state, changeAuthStatus(AuthStatus.NoAuth)))
      .toEqual({authorizationStatus: AuthStatus.NoAuth});
  });
});

