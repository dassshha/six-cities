import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {city} from './mocks/city';
import {reviews} from './mocks/reviews';
import {createStore} from 'redux';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const store = createStore(reducer, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} city={city} reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
);
