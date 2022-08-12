import {render, screen} from '@testing-library/react';
import {ReviewsList} from './reviews-list';
import {reviews} from '../../mocks/reviews';

const fakeReviews = reviews;

jest.mock('../review/review', () => ({
  Review: () => <li data-testid='Review'></li>
}));

describe('Component: ReviewsList', () => {
  it('should render correctly', () => {
    render(
      <ReviewsList reviews={fakeReviews}/>
    );
    expect(screen.getAllByTestId('Review')).toHaveLength(fakeReviews.length);
  });
});
