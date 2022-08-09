import {useDispatch, useSelector} from 'react-redux';
import {appDispatch} from '../../types/state-type';
import {addOfferToFavorites} from '../../store/api-actions';
import {getCurrentOffer} from '../../store/data/selectors';
import {getAuthStatus} from '../../store/user/selectors';
import {AddToFavoritesCardPlace, AppRoute, AuthStatus} from '../../const';
import {useNavigate} from 'react-router-dom';

type FavoriteProps = {
  cardPlace: string
  offerId: number
  className: string,
  isFavorite: boolean,
  size: {
    width: number,
    height: number
  }
}

function Favorite({className, isFavorite, size, offerId, cardPlace}: FavoriteProps): JSX.Element {
  const dispatch = useDispatch<appDispatch>();
  const authStatus = useSelector(getAuthStatus);
  const navigate = useNavigate();
  const mainOfferId = useSelector(getCurrentOffer).id;
  function addToFavorites() {
    if (authStatus !== AuthStatus.Auth) {
      navigate(AppRoute.SignIn);
    }
    dispatch(addOfferToFavorites(offerId, Number(!isFavorite), cardPlace, cardPlace === AddToFavoritesCardPlace.NearBy ? mainOfferId : undefined));
  }
  return (
    <button className={`${className}__bookmark-button ${isFavorite && `${className}__bookmark-button--active`} button`} type="button" onClick={addToFavorites}>
      <svg className={`${className}__bookmark-icon`} width={size.width} height={size.height}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export {Favorite};
