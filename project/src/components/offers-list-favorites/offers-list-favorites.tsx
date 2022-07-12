import {CardFavorites} from '../card-favorites/card-favorites';
import {OffersListType} from '../../types/offers-list-type';

type OffersListFavoritesProps = {
  offers: OffersListType
}

function OffersListFavorites({offers}: OffersListFavoritesProps): JSX.Element {

  return (
    <div className="favorites__places">
      {offers.filter((offer) => offer.isFavorite).map((offer) => <CardFavorites {...offer} key={offer.id}/>)}
    </div>
  );
}

export {OffersListFavorites};
