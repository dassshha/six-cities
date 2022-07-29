import {OffersListType} from '../../types/offers-list-type';
import {OfferType} from '../../types/offer-type';
import {LIST_TYPE} from '../../const';
import {CardMain} from '../card-main/card-main';
import {CardFavorites} from '../card-favorites/card-favorites';
import {CardNear} from '../card-near/card-near';

type OffersListProps = {
  className: string,
  type: string,
  onOfferHover?: (offerId: number) => void,
  offers: OffersListType
};

function getElementByType(type: string, offer: OfferType, onOfferHover?: (offerId: number) => void) {
  switch (type) {
    case LIST_TYPE.MAIN:
      return onOfferHover && <CardMain {...offer} key={offer.id} onOfferHover={onOfferHover}/>;
    case LIST_TYPE.NEAR:
      return <CardNear key={offer.id} {...offer}/>;
  }
  return offer.isFavorite && <CardFavorites {...offer} key={offer.id}/>;
}

function OffersList({className, type, onOfferHover, offers}:OffersListProps): JSX.Element {
  return (
    <div className={className}>
      {offers.map((offer) => getElementByType(type, offer, onOfferHover))}
    </div>
  );
}

export {OffersList};
