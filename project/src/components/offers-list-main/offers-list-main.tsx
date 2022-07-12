import {CardMain} from '../card-main/card-main';
import {OffersListType} from '../../types/offers-list-type';

type OffersListMainProps = {
  offers: OffersListType,
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
