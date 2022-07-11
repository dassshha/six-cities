import {CardMain} from '../card-main/card-main';
import {OffersList} from '../../types/offers-list';

type OffersListMainProps = {
  offers: OffersList,
  onOfferHover: (offerId: number) => void
}

function OffersListMain({offers, onOfferHover}: OffersListMainProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content" >
      {offers.map((offer) => <CardMain {...offer} key={offer.id} onOfferHover={onOfferHover}/>)}
    </div>
  );
}

export {OffersListMain};
