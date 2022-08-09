import {render, screen} from '@testing-library/react';
import {reviews} from '../../mocks/reviews';
import {Review} from './review';

const fakeReview = reviews[0];

describe('Component: Review', () => {
  it('should render correctly', () => {
    render(
      <Review {...fakeReview}/>
    );
    expect(screen.getByAltText(/Reviews avatar/i)).toBeInTheDocument();
    expect(screen.getByText(fakeReview.user.name)).toBeInTheDocument();
    expect(screen.getByText(fakeReview.comment)).toBeInTheDocument();
    expect(screen.getByText(fakeReview.date)).toBeInTheDocument();
    expect(screen.getByRole('rating')).toBeInTheDocument();
  });
});
