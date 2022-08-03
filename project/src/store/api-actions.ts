import {ThunkActionResult} from '../types/action-type';
import {OffersListType} from '../types/offers-list-type';
import {AddToFavoritesCardPlace, APIRoute, AuthStatus} from '../const';
import {
  changeAuthStatus,
  loadComments,
  loadCurrentOffer,
  loadFavoriteOffers,
  loadOffers,
  loadOffersNearBy
} from './action';
import {AuthType} from '../types/auth-type';
import {dropToken, saveToken, Token} from '../services/token';
import {OfferType} from '../types/offer-type';
import {ReviewsListType} from '../types/reviews-list-type';
import {CommentPostType} from '../types/comment';


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
      });
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

export function fetchCurrentOffer(id: number): ThunkActionResult {
  return async function (dispatch, _getState, api) {
    const {data} = await api.get<OfferType>(`${APIRoute.Hotels}/${id}`);
    dispatch(loadCurrentOffer(data));
  };
}

export function fetchOffersListNearBy(id: number): ThunkActionResult {
  return async function (dispatch, _getState, api) {
    const {data} = await api.get<OffersListType>(`${APIRoute.Hotels}/${id}/nearby`);
    dispatch(loadOffersNearBy(data));
  };
}

export function fetchCommentsList(id: number): ThunkActionResult {
  return async function (dispatch, _getState, api) {
    const {data} = await api.get<ReviewsListType>(`${APIRoute.Comments}/${id}`);
    dispatch(loadComments(data));
  };
}

export function fetchFavoriteOffers(): ThunkActionResult {
  return async function (dispatch, _getState, api) {
    const {data} = await api.get<OffersListType>(APIRoute.Favorites);
    dispatch(loadFavoriteOffers(data));
  };
}

export function postComment({comment, rating}: CommentPostType, id: number): ThunkActionResult {
  return async function(dispatch, _getState, api) {
    const {data} = await api.post<ReviewsListType>(`${APIRoute.Comments}/${id}`, {comment, rating});
    dispatch(loadComments(data));
  };
}

export function addOfferToFavorites(id: number, status: number, place: string, mainOfferId?: number): ThunkActionResult {
  return async function(dispatch, _getState, api) {
    await api.post<OfferType>(`${APIRoute.Favorites}/${id}/${status}`);
    switch (place) {
      case AddToFavoritesCardPlace.Main:
        await dispatch(fetchOffersList());
        return;
      case AddToFavoritesCardPlace.NearBy:
        if (mainOfferId) {
          await dispatch(fetchOffersListNearBy(mainOfferId));
        }
        return;
      case AddToFavoritesCardPlace.Room:
        await dispatch(fetchCurrentOffer(id));
        return
      default:
        return;
    }

  };
}
