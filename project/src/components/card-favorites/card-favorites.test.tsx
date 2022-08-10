import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {offers} from '../../mocks/offers';
import {CardFavorites} from './card-favorites';

const fakeOffer = offers[0];


jest.mock('../rating/rating', () => ({
  Rating: () => {
    return <div data-testid='Rating'></div>
  }
}))

jest.mock('../premium/premium', () => ({
  Premium: () => {
    return <div data-testid='Premium'></div>
  }
}))

jest.mock('../favorite/favorite', () => ({
  Favorite: () => {
    return <div data-testid='Favorite'></div>
  }
}))

describe('Component: CardFavorites', () => {
  it('should render correctly', () => {
    render(
        <BrowserRouter>
          <CardFavorites {...fakeOffer}/>
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
