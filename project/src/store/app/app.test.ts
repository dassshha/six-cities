import {appReducer} from './app';
import {cities, Paris} from '../../mocks/city';
import {SORT_TYPE} from '../../const';
import {changeCity, changeSortType} from '../action';

describe('Reducer: app', () => {
  it('without additional parameters should return initial state', () => {
    expect(appReducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({city: Paris, sortType: SORT_TYPE.DEFAULT});
  });

  it('should change current city to a given city', () => {
    const state = {city: Paris, sortType: SORT_TYPE.DEFAULT};
    cities.forEach((city) => {
      expect(appReducer(state, changeCity(city)))
        .toEqual({city, sortType: SORT_TYPE.DEFAULT});
    });
  });

  it('should change current sort type to a given sort type', () => {
    let state = {city: Paris, sortType: SORT_TYPE.DEFAULT};
    expect(appReducer(state, changeSortType(SORT_TYPE.TOP_RATED_FIRST)))
      .toEqual({city: Paris, sortType: SORT_TYPE.TOP_RATED_FIRST});
    expect(appReducer(state, changeSortType(SORT_TYPE.PRICE.HIGH_TO_LOW)))
      .toEqual({city: Paris, sortType: SORT_TYPE.PRICE.HIGH_TO_LOW});
    expect(appReducer(state, changeSortType(SORT_TYPE.PRICE.LOW_TO_HIGH)))
      .toEqual({city: Paris, sortType: SORT_TYPE.PRICE.LOW_TO_HIGH});

    state = {city: Paris, sortType: SORT_TYPE.TOP_RATED_FIRST};
    expect(appReducer(state, changeSortType(SORT_TYPE.DEFAULT)))
      .toEqual({city: Paris, sortType: SORT_TYPE.DEFAULT});
  });
});
