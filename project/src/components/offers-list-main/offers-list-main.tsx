import {Offer} from '../../types/offer';
import {CardMain} from '../card-main/card-main';
import {useState} from 'react';

type OffersListProps = {
  offers: Offer[]
}


function OffersList({offers}: OffersListProps): JSX.Element {
  const [hoveredCard, setHoveredCard] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content" >
      {offers.map((offer) => <CardMain {...offer} key={offer.id} onHover={() => setHoveredCard(offer.id)} onLeave={() => setHoveredCard(0)}/>)}
      <h1>{hoveredCard}</h1>
    </div>
  );
}

export {OffersList};
