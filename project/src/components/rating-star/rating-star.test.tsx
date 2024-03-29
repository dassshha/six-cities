import {render, screen} from '@testing-library/react';
import {RatingStar} from './rating-star';
import {RATING} from '../../const';

const fakeRating = {
  value: RATING.PERFECT.value,
  title: RATING.PERFECT.title
};

describe('Component: RatingStar', () => {
  it('should render correctly', () => {
    render(
      <RatingStar {...fakeRating}/>
    );
    expect(screen.getByTestId('Star')).toBeInTheDocument();
  });
});
