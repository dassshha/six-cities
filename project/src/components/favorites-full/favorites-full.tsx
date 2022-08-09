import {FavoriteOffersInCity} from '../favorite-offers-in-city/favorite-offers-in-city';
import {getOffersInCity} from '../../offers-in-city';
import {CitiesListType} from '../../types/cities-list-type';
import {OffersListType} from '../../types/offers-list-type';

type FavoritesFullProps = {
  cities: CitiesListType,
  offers: OffersListType
}

function FavoritesFull({cities, offers}:FavoritesFullProps): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((city) => <FavoriteOffersInCity key={city.name} city={city} offers={getOffersInCity(city, offers)}/>)}
      </ul>
    </section>);
}

export {FavoritesFull};
