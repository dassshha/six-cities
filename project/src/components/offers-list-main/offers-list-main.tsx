import {CardMain} from '../card-main/card-main';
import {useState} from 'react';
import {OffersList} from '../../types/offers-list';

type OffersListMainProps = {
  offers: OffersList
}

function OffersListMain({offers}: OffersListMainProps): JSX.Element {
  const [hoveredCard, setHoveredCard] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content" >
      {offers.map((offer) => <CardMain {...offer} key={offer.id} onHover={() => setHoveredCard(offer.id)} onLeave={() => setHoveredCard(0)}/>)}
      <h1>{hoveredCard}</h1>
    </div>
  );
}

export {OffersListMain};
