import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import {Rating} from '../rating/rating';
import {Premium} from '../premium/premium';

type CardMainProps = Offer & {
  onOfferHover: (offerId: number) => void
}

function CardMain(props: CardMainProps): JSX.Element {
  const {id, previewImage, isPremium, price, title, type, isFavorite, rating, onOfferHover} = props;
  return (
    <article className="cities__place-card place-card" onMouseEnter={() => onOfferHover(id)}>
      <Premium className='place-card' isPremium={isPremium}/>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : null} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <Rating className='place-card' value={rating}/>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/:${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export {CardMain};
