import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import App from './app';
import {cities} from '../../mocks/city';
import {AppRoute} from '../../const';

jest.mock('../../pages/main-screen/main-screen', () => ({
  MainScreen: () => <div data-testid='MainScreen'></div>

}));

jest.mock('../../pages/sign-in-screen/sign-in-screen', () => ({
  SignInScreen: () => <div data-testid='SignInScreen'></div>

}));

jest.mock('../../pages/room-screen/room-screen', () => ({
  RoomScreen: () => <div data-testid='RoomScreen'></div>
}));

jest.mock('../../pages/page-not-found-screen/page-not-found-screen', () => ({
  PageNotFoundScreen: () => <div data-testid='PageNotFoundScreen'></div>
}));

jest.mock('../../components/private-route/private-route', () => ({
  PrivateRoute: () => <div data-testid='PrivateRoute'></div>
}));


const fakeStore = configureMockStore();
const store = fakeStore({
  DATA: {isDataLoaded: true}
});
const fakeCities = cities;

describe('Component: App', () => {
  it('should render component MainScreen, when user on /', () => {

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[AppRoute.Main]}>
          <App cities={fakeCities}/>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('MainScreen')).toBeInTheDocument();
    expect(screen.queryByTestId('SignInScreen')).not.toBeInTheDocument();
    expect(screen.queryByTestId('RoomScreen')).not.toBeInTheDocument();
    expect(screen.queryByTestId('PageNotFoundScreen')).not.toBeInTheDocument();
  });

  it('should render component SignInScreen, when user on /login', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[AppRoute.SignIn]}>
          <App cities={fakeCities}/>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.queryByTestId('MainScreen')).not.toBeInTheDocument();
    expect(screen.queryByTestId('RoomScreen')).not.toBeInTheDocument();
    expect(screen.queryByTestId('PageNotFoundScreen')).not.toBeInTheDocument();
    expect(screen.getByTestId('SignInScreen')).toBeInTheDocument();
  });

  it('should render component RoomScreen, when user on /offer:id', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[AppRoute.Room]}>
          <App cities={fakeCities}/>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.queryByTestId('MainScreen')).not.toBeInTheDocument();
    expect(screen.queryByTestId('SignInScreen')).not.toBeInTheDocument();
    expect(screen.queryByTestId('PageNotFoundScreen')).not.toBeInTheDocument();
    expect(screen.getByTestId('RoomScreen')).toBeInTheDocument();
  });

  it('should render component PageNotFoundScreen, when user on unknown path', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/fakeUnknownPath']}>
          <App cities={fakeCities}/>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.queryByTestId('MainScreen')).not.toBeInTheDocument();
    expect(screen.queryByTestId('SignInScreen')).not.toBeInTheDocument();
    expect(screen.queryByTestId('RoomScreen')).not.toBeInTheDocument();
    expect(screen.getByTestId('PageNotFoundScreen')).toBeInTheDocument();
  });

  it('should render component PrivateRoute , when user on /favorites', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[AppRoute.Favorites]}>
          <App cities={fakeCities}/>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.queryByTestId('MainScreen')).not.toBeInTheDocument();
    expect(screen.queryByTestId('SignInScreen')).not.toBeInTheDocument();
    expect(screen.queryByTestId('RoomScreen')).not.toBeInTheDocument();
    expect(screen.queryByTestId('PageNotFoundScreen')).not.toBeInTheDocument();
    expect(screen.getByTestId('PrivateRoute')).toBeInTheDocument();
  });
});
