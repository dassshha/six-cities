import {OffersListFavorites} from '../offers-list-favorites/offers-list-favorites';
import {OffersListType} from '../../types/offers-list-type';
import {CityType} from '../../types/city-type';
type FavoriteOffersInCityProps = {
  offers: OffersListType,
  city: CityType
}

function FavoriteOffersInCity({offers, city}: FavoriteOffersInCityProps): JSX.Element | undefined {
  if (offers.length){
    return (
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city.name}</span>
            </a>
          </div>
        </div>
        {/*<OffersListFavorites offers={offers}/>*/}
        <OffersListFavorites offers={offers}/>
      </li>);
  }
}

export {FavoriteOffersInCity};
