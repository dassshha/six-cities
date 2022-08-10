import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {CitiesList} from './cities-list';
import {cities} from '../../mocks/city';

const fakeStore = configureMockStore();
const fakeCities = cities;


describe('Component: CitiesList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={fakeStore({})}>
        <CitiesList cities={fakeCities} activeCity={fakeCities[0]}/>
      </Provider>
    );
    const cities = screen.getAllByTestId('City');
    expect(cities).toHaveLength(fakeCities.length);
    cities.forEach((city, i) => expect(city).toHaveTextContent(fakeCities[i].name));
  });
});
