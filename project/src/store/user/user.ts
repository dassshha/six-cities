import {AuthStatus} from '../../const';
import {UserStateType} from '../../types/state-type';
import {createReducer} from '@reduxjs/toolkit';
import {changeAuthStatus} from '../action';

const initialState: UserStateType = {
  authorizationStatus: AuthStatus.Unknown,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {userReducer};
