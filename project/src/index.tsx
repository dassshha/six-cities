import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';
import {cities} from './mocks/city';
import {createApi} from './services/api';
import {checkAuth, fetchOffersList} from './store/api-actions';
import {changeAuthStatus} from './store/action';
import {AuthStatus} from './const';
import {configureStore} from '@reduxjs/toolkit';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const api = createApi(() => store.dispatch(changeAuthStatus(AuthStatus.NoAuth)));

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cities={cities}/>
    </Provider>
  </React.StrictMode>,
);
