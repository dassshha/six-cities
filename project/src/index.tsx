import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
// import {offers} from './mocks/offers';
// import {city} from './mocks/city';
// import {reviews} from './mocks/reviews';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {cities} from './mocks/city';
import {createApi} from './services/api';
// import {ThunkAppDispatch} from './types/action-type';
import {checkAuth, fetchOffersList} from './store/api-actions';
import {changeAuthStatus} from './store/action';
import {AppRoute, AuthStatus} from './const';
import {ThunkAppDispatch} from './types/action-type';
import {Navigate} from 'react-router-dom';
import {PageNotFoundScreen} from './pages/page-not-found-screen/page-not-found-screen';
import {SignInScreen} from './pages/sign-in-screen/sign-in-screen';
import {configureStore} from '@reduxjs/toolkit';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const api = createApi(() => store.dispatch(changeAuthStatus(AuthStatus.NoAuth)));

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});

(store.dispatch as ThunkAppDispatch)(checkAuth());
(store.dispatch as ThunkAppDispatch)(fetchOffersList());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cities={cities}/>
    </Provider>
  </React.StrictMode>,
);
