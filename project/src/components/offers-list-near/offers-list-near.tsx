import {OffersListType} from '../../types/offers-list-type';
import {OffersList} from '../offers-list/offers-list';
import {LIST_TYPE} from '../../const';

type OffersListNearProps = {
  offers: OffersListType
}

function OffersListNear({offers}:OffersListNearProps): JSX.Element {
  return <OffersList offers={offers} className='near-places__list places__list' type={LIST_TYPE.NEAR}/>;
}

export {OffersListNear};
