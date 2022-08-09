import {render, screen} from '@testing-library/react';
import {NoOffersInCity} from './no-offers-in-city';

describe('Component: NoOffersInCity', () => {
  it('should render correctly', () => {
    render(
        <NoOffersInCity/>
    );
    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });
});
