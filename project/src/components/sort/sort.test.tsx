import {render, screen} from '@testing-library/react';
import {Sort} from './sort';
import {SORT_TYPE} from '../../const';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

const fakeSortProps = {
  activeSortType: 'fakeSortType',
  isOpened: true
};

const fakeStore = configureMockStore();

describe('Component: Sort', () => {
  it('should render correctly', () => {
    render(
      <Provider store={fakeStore({})}>
        <Sort {...fakeSortProps}/>
      </Provider>
    );
    expect(screen.getByText(SORT_TYPE.DEFAULT)).toBeInTheDocument();
    expect(screen.getByText(SORT_TYPE.TOP_RATED_FIRST)).toBeInTheDocument();
    expect(screen.getByText(SORT_TYPE.PRICE.LOW_TO_HIGH)).toBeInTheDocument();
    expect(screen.getByText(SORT_TYPE.PRICE.HIGH_TO_LOW)).toBeInTheDocument();
  });
});
