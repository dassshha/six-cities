import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {Favorite} from './favorite';
import {offers} from '../../mocks/offers';
import {AuthStatus} from '../../const';
import {BrowserRouter} from 'react-router-dom';

const fakeStore = configureMockStore();
const fakeFavoriteProps  = {
  cardPlace: 'fakeCardPlace',
  offerId: 0,
  className: 'fakeClassName',
  isFavorite: true,
  size: {
    width: 15,
    height: 15
  }
}
const fakeOffer = offers[0];


describe('Component: Favorite', () => {
  it("should render 'in bookmarks' if favorite", () => {
    const store = fakeStore({
      DATA: {currentOffer: fakeOffer},
      USER: {authorizationStatus: AuthStatus.Auth}
    });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Favorite {...fakeFavoriteProps}/>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByRole('button')).toHaveTextContent(/In bookmarks/i);
  });
  it("should render 'to bookmarks' if not favorite", () => {
    const store = fakeStore({
      DATA: {currentOffer: fakeOffer},
      USER: {authorizationStatus: AuthStatus.Auth}
    });
    fakeFavoriteProps.isFavorite = false;
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Favorite {...fakeFavoriteProps}/>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByRole('button')).toHaveTextContent(/To bookmarks/i);
  });
});
