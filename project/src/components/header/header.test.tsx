import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

import {AuthStatus} from '../../const';
import {Header} from './header';
import {BrowserRouter} from 'react-router-dom';

const fakeStore = configureMockStore();

jest.mock('../auth-user/auth-user', () => ({
  AuthUser: () => <div data-testid='AuthUser'></div>
}));

jest.mock('../not-auth-user/not-auth-user', () => ({
  NotAuthUser: () => <div data-testid='NotAuthUser'></div>
}));

describe('Component: Header', () => {
  it('should render auth component if auth status is true', () => {
    const store = fakeStore({
      USER: {authorizationStatus: AuthStatus.Auth}
    });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId('AuthUser')).toBeInTheDocument();
    expect(screen.queryByTestId('NotAuthUser')).not.toBeInTheDocument();
  });
  it('should render not-auth component if auth status is false', () => {
    const store = fakeStore({
      USER: {authorizationStatus: AuthStatus.NoAuth}
    });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId('NotAuthUser')).toBeInTheDocument();
    expect(screen.queryByTestId('AuthUser')).not.toBeInTheDocument();
  });
});
