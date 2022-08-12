import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {ReviewForm} from './review-form';
import {offers} from '../../mocks/offers';

const fakeStore = configureMockStore();
const fakeOffer = offers[0];

jest.mock('../rating-star/rating-star', () => ({
  RatingStar: () => <div data-testid='RatingStar'></div>
}));

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    const store = fakeStore({
      DATA: {currentOffer: fakeOffer}
    });
    render(
      <Provider store={store}>
        <ReviewForm/>
      </Provider>
    );
    expect(screen.getByLabelText(/Your review/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('RatingStar')).toHaveLength(5);
    expect(screen.getByRole('button')).toHaveTextContent(/Submit/i);
  });
});
