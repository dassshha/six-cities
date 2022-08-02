import {OfferType} from '../../types/offer-type';
import {Rating} from '../rating/rating';
import {Favorite} from '../favorite/favorite';
import {Premium} from '../premium/premium';
import {AddToFavoritesCardPlace} from '../../const';
import {useSelector} from 'react-redux';
import {getCurrentOffer} from '../../store/data/selectors';

type CardNearProps = OfferType
function CardNear({previewImage, isPremium, price, title, type, isFavorite, rating, id}: CardNearProps): JSX.Element {
  return (
    <article className="near-places__card place-card">
      <Premium className='place-card' isPremium={isPremium}/>
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Favorite isFavorite={isFavorite} size={{width: 18, height: 19}} className='place-card' offerId={id} cardPlace={AddToFavoritesCardPlace.NearBy}/>
        </div>
        <div className="place-card__rating rating">
          <Rating value={rating} className='place-card'/>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export {CardNear};
