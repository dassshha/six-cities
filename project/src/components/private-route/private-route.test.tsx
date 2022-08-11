import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AppRoute, AuthStatus} from '../../const';
import {BrowserRouter, MemoryRouter, Route, Routes, useNavigate} from 'react-router-dom';
import {PrivateRoute} from './private-route';

// const fakeReviews = reviews;
//
// jest.mock("../review/review", () => ({
//   Review: () => {
//     return <li data-testid='Review'></li>
//   }
// }))

const fakeStore = configureMockStore();
// const navigate = useNavigate();

describe('Component: PrivateRoute', () => {
  it('should render component for private route, when user authorized', () => {
    const store = fakeStore({
      USER: {authorizationStatus: AuthStatus.Auth}
    });
    render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/private']}>
            <Routes>
              <Route path={AppRoute.SignIn} element={<h1>Public route</h1>} />
              <Route path='/private' element={<PrivateRoute><h1>Private route</h1></PrivateRoute>} />
            </Routes>
          </MemoryRouter>
        </Provider>
    );
    expect(screen.getByText(/Private route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public route/i)).not.toBeInTheDocument();
  });

  it('should render component for public route, when user not authorized', () => {
    const store = fakeStore({
      USER: {authorizationStatus: AuthStatus.NoAuth}
    });
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/private']}>
          <Routes>
            <Route path={AppRoute.SignIn} element={<h1>Public route</h1>} />
            <Route path='/private' element={<PrivateRoute><h1>Private route</h1></PrivateRoute>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.queryByText(/Private route/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Public route/i)).toBeInTheDocument();
  });
});
