import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {AuthUser} from './auth-user';

const fakeStore = configureMockStore();
const fakeUsername = 'Oliver.conner@gmail.com';


describe('Component: AuthUser', () => {
  it('should render correctly', () => {
    render(
      <Provider store={fakeStore({})}>
        <BrowserRouter>
          <AuthUser/>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByRole('link', {name: 'Sign out'})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: fakeUsername})).toBeInTheDocument();
  });
});
