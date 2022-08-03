import {OfferType} from '../../types/offer-type';
import {Rating} from '../rating/rating';
import {Premium} from '../premium/premium';
import {Favorite} from '../favorite/favorite';
import {AddToFavoritesCardPlace} from '../../const';

function CardFavorites(props: OfferType): JSX.Element {
  const {previewImage, isPremium, price, title, type, isFavorite, rating, id} = props;
  return (
    <article className="favorites__card place-card">
      <Premium className='place-card' isPremium={isPremium}/>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Favorite className='place-card' isFavorite={isFavorite} size={{width: 18, height: 19}} offerId={id} cardPlace={AddToFavoritesCardPlace.Favorites}/>
        </div>
        <div className="place-card__rating rating">
          <Rating className='place-card' value={rating}/>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export {CardFavorites};
