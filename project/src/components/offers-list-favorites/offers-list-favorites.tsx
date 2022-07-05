import {CardFavorites} from '../card-favorites/card-favorites';
import {OffersList} from '../../types/offers-list';

type OffersListFavoritesProps = {
  offers: OffersList
}

function OffersListFavorites({offers}: OffersListFavoritesProps): JSX.Element {

  return (
    <div className="favorites__places">
      {offers.filter((offer) => offer.isFavorite).map((offer) => <CardFavorites {...offer} key={offer.id}/>)}
    </div>
  );
}

export {OffersListFavorites};
