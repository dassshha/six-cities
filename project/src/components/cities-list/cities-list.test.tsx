import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {CitiesList} from './cities-list';
import {cities} from '../../mocks/city';
import {BrowserRouter} from 'react-router-dom';

const fakeStore = configureMockStore();
const fakeCities = cities;


describe('Component: CitiesList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={fakeStore({})}>
        <BrowserRouter>
          <CitiesList cities={fakeCities} activeCity={fakeCities[0]}/>
        </BrowserRouter>
      </Provider>
    );
    const citiesOnScreen = screen.getAllByTestId('City');
    expect(citiesOnScreen).toHaveLength(fakeCities.length);
    citiesOnScreen.forEach((city, i) => expect(city).toHaveTextContent(fakeCities[i].name));
  });
});
