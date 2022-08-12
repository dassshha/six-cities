import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {offers} from '../../mocks/offers';
import {CardMain} from './card-main';

const fakeOffer = offers[0];


jest.mock('../rating/rating', () => ({
  Rating: () => <div data-testid='Rating'></div>
}))

jest.mock('../premium/premium', () => ({
  Premium: () => <div data-testid='Premium'></div>
}))

jest.mock('../favorite/favorite', () => ({
  Favorite: () => <div data-testid='Favorite'></div>
}))

describe('Component: CardMain', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <CardMain {...fakeOffer} onOfferHover={jest.fn()}/>
      </BrowserRouter>
    );
    expect(screen.getByTestId('Premium')).toBeInTheDocument();
    expect(screen.getByAltText(/Place image/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${fakeOffer.price}`, 'i'))).toBeInTheDocument();
    expect(screen.getByTestId('Favorite')).toBeInTheDocument();
    expect(screen.getByTestId('Rating')).toBeInTheDocument();
    expect(screen.getByText(fakeOffer.title)).toBeInTheDocument();
    expect(screen.getByText(fakeOffer.type)).toBeInTheDocument();
  });
});
