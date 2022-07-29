import {ThunkActionResult} from '../types/action-type';
import {OffersListType} from '../types/offers-list-type';
import {APIRoute, AuthStatus} from '../const';
import {changeAuthStatus, loadOffers} from './action';
import {AxiosError} from 'axios';
import {AuthType} from '../types/auth-type';
import {dropToken, saveToken, Token} from '../services/token';
const enum HttpCode {
  Unauthorized= 401
}

export function fetchOffersList(): ThunkActionResult {
  return async function (dispatch, _getState, api): Promise<void> {
    const {data} = await api.get<OffersListType>(APIRoute.Hotels);
    dispatch(loadOffers(data));
  };
}

export function checkAuth(): ThunkActionResult {
  return async function (dispatch, _getState, api) {
    await api.get(APIRoute.Login)
      .then(() => {
      dispatch(changeAuthStatus(AuthStatus.Auth));
    })
      // .catch((error: AxiosError) => {
      //   const {response} = error;
      //   if (response?.status === HttpCode.Unauthorized) {
      //     dispatch(changeAuthStatus(AuthStatus.NoAuth));
      //   }
      // });
  };
}

export function login({email, password}: AuthType): ThunkActionResult {
  return async function(dispatch, _getState, api) {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(changeAuthStatus(AuthStatus.Auth));
  };
}

export function logout(): ThunkActionResult {
  return async function (dispatch, _getState, api) {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(changeAuthStatus(AuthStatus.NoAuth));
  };
}
