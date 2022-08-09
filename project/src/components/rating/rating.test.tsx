import {render, screen} from '@testing-library/react';
import {RATING} from '../../const';
import {Rating} from './rating';

const fakeRating = {
  value: RATING.PERFECT.value,
  className: 'fakeClassName'
};

describe('Component: Rating', () => {
  it('should render correctly', () => {
    render(
      <Rating {...fakeRating}/>
    );
    expect(screen.getByRole('rating')).toBeInTheDocument();
  });
});
