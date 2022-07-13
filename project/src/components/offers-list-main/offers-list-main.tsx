
import {OffersListType} from '../../types/offers-list-type';
import {OffersList} from '../offers-list/offers-list';
import {LIST_TYPE} from '../../const';

type OffersListMainProps = {
  onOfferHover: (offerId: number) => void,
  offers: OffersListType
}

function OffersListMain({onOfferHover, offers}:OffersListMainProps): JSX.Element {
  return <OffersList offers={offers} className='cities__places-list places__list tabs__content' type={LIST_TYPE.MAIN} onOfferHover={onOfferHover}/>;
}

export {OffersListMain};
