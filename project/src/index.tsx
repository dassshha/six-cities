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
import {fetchOffersList} from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const api = createApi();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(fetchOffersList());


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cities={cities}/>
    </Provider>
  </React.StrictMode>,
);
