import {CardFavorites} from '../card-favorites/card-favorites';
import {OffersListType} from '../../types/offers-list-type';
import {OffersList} from '../offers-list/offers-list';
import {LIST_TYPE} from '../../const';

// type OffersListFavoritesProps = {
//   offers: OffersListType
// }
//
// function OffersListFavorites({offers}: OffersListFavoritesProps): JSX.Element {
//
//   return (
//     <div className="favorites__places">
//       {offers.filter((offer) => offer.isFavorite).map((offer) => <CardFavorites {...offer} key={offer.id}/>)}
//     </div>
//   );
// }
type OffersListFavoritesProps = {
  offers: OffersListType
};
function OffersListFavorites({offers}:OffersListFavoritesProps): JSX.Element {
  return <OffersList offers={offers} className='favorites__place' type={LIST_TYPE.FAVORITES}/>
}

export {OffersListFavorites};
