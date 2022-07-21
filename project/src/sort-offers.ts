import {OffersListType} from './types/offers-list-type';
import {SORT_TYPE} from './const';

function sortOffers(sortType: string, offers: OffersListType): OffersListType {
  switch (sortType) {
    case SORT_TYPE.PRICE.HIGH_TO_LOW:
      return offers.sort((offer1, offer2) => offer2.price - offer1.price);
    case SORT_TYPE.PRICE.LOW_TO_HIGH:
      return offers.sort((offer1, offer2) => offer1.price - offer2.price);
    case SORT_TYPE.TOP_RATED_FIRST:
      return offers.sort((offer1, offer2) => offer2.rating - offer1.rating);
  }
  return offers;
}

export {sortOffers};
