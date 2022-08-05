import {createApi} from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateType} from '../types/state-type';
import {Action} from 'redux';
import {APIRoute, AuthStatus} from '../const';
import {offers} from '../mocks/offers';
import {
  checkAuth,
  fetchCommentsList,
  fetchCurrentOffer,
  fetchFavoriteOffers,
  fetchOffersList,
  fetchOffersListNearBy, postComment
} from './api-actions';
import {
  changeAuthStatus,
  loadComments,
  loadCurrentOffer,
  loadFavoriteOffers,
  loadOffers,
  loadOffersNearBy
} from './action';
import {reviews} from '../mocks/reviews';
import {CommentPostType} from '../types/comment';

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createApi(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    StateType,
    Action,
    ThunkDispatch<StateType, typeof api, Action>
    >(middlewares);

  it('should dispatch loadOffers when GET /hotels', async () => {
    mockAPI.onGet(APIRoute.Hotels).reply(200, offers);

    const store = mockStore();
    await store.dispatch(fetchOffersList());

    expect(store.getActions()).toEqual([loadOffers(offers)]);
  });

  it('should dispatch loadCurrentOffer when GET /hotels:id', async () => {
    const randomId = 0
    mockAPI.onGet(`${APIRoute.Hotels}/${randomId}`).reply(200, offers[0]);

    const store = mockStore();
    await store.dispatch(fetchCurrentOffer(randomId));

    expect(store.getActions()).toEqual([loadCurrentOffer(offers[0])]);
  });

  it('should dispatch loadOffersNearBy when GET /hotels:id/nearby', async () => {
    const randomId = 0
    mockAPI.onGet(`${APIRoute.Hotels}/${randomId}/nearby`).reply(200, offers);

    const store = mockStore();
    await store.dispatch(fetchOffersListNearBy(randomId));

    expect(store.getActions()).toEqual([loadOffersNearBy(offers)]);
  });

  it('should dispatch loadComments when GET /comments:id', async () => {
    const randomId = 0
    mockAPI.onGet(`${APIRoute.Comments}/${randomId}`).reply(200, reviews);

    const store = mockStore();
    await store.dispatch(fetchCommentsList(randomId));

    expect(store.getActions()).toEqual([loadComments(reviews)]);
  });

  it('should dispatch loadFavoriteOffers when GET /favorite', async () => {
    mockAPI.onGet(APIRoute.Favorites).reply(200, offers);

    const store = mockStore();
    await store.dispatch(fetchFavoriteOffers());

    expect(store.getActions()).toEqual([loadFavoriteOffers(offers)]);
  });

  it('should change auth status to <<auth>> when server returns 200 ', async () => {
    mockAPI.onGet(APIRoute.Login).reply(200, []);

    const store = mockStore();
    await store.dispatch(checkAuth());

    expect(store.getActions()).toEqual([changeAuthStatus(AuthStatus.Auth)]);
  });

  it('should dispatch loadComments when POST /comments:id', async () => {
    const randomId = 0
    const fakeComment: CommentPostType = {comment: reviews[reviews.length-1].comment, rating: reviews[reviews.length-1].rating}
    mockAPI.onPost(`${APIRoute.Comments}/${randomId}`).reply(200, reviews);

    const store = mockStore();
    await store.dispatch(postComment(fakeComment, randomId));

    expect(store.getActions()).toEqual([loadComments(reviews)]);
  });
});

