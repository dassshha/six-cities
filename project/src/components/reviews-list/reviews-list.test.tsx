import {render, screen} from '@testing-library/react';
import {ReviewsList} from './reviews-list';
import {reviews} from '../../mocks/reviews';

const fakeReviews = reviews;

describe('Component: ReviewsList', () => {
  it('should render correctly', () => {
    render(
        <ReviewsList reviews={fakeReviews}/>
    );
    expect(screen.getAllByRole('review')).toHaveLength(fakeReviews.length);
  });
});
