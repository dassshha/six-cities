import {ThunkActionResult} from '../types/action-type';
import {OffersListType} from '../types/offers-list-type';
import {APIRoute} from '../const';
import {loadOffers} from './action';

export function fetchOffersList(): ThunkActionResult {
  return async function (dispatch, _getState, api): Promise<void> {
    const {data} = await api.get<OffersListType>(APIRoute.Hotels);
    dispatch(loadOffers(data));
  };
}
