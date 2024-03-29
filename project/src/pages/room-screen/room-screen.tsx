import {ReviewsList} from '../../components/reviews-list/reviews-list';
import {RoomGallery} from '../../components/room-gallery/room-gallery';
import {Goods} from '../../components/goods/goods';
import {Host} from '../../components/host/host';
import {Premium} from '../../components/premium/premium';
import {Favorite} from '../../components/favorite/favorite';
import {Rating} from '../../components/rating/rating';
import {OffersListNear} from '../../components/offers-list-near/offers-list-near';
import {Header} from '../../components/header/header';
import {useParams} from 'react-router-dom';
import {Map} from '../../components/map/map';
import {useEffect} from 'react';
import {appDispatch} from '../../types/state-type';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCommentsList, fetchCurrentOffer, fetchOffersListNearBy} from '../../store/api-actions';
import {LoadingScreen} from '../loading-screen/loading-screen';
import {AddToFavoritesCardPlace, AuthStatus} from '../../const';
import {PageNotFoundScreen} from '../page-not-found-screen/page-not-found-screen';
import {getCity} from '../../store/app/selectors';
import {getComments, getCurrentOffer, getOffers, getOffersNearBy} from '../../store/data/selectors';
import {getAuthStatus} from '../../store/user/selectors';
import {ReviewForm} from '../../components/review-form/review-form';

function RoomScreen(): JSX.Element {
  const {id} = useParams();
  const dispatch = useDispatch<appDispatch>();

  const city = useSelector(getCity);
  const offer = useSelector(getCurrentOffer);
  const offersNear = useSelector(getOffersNearBy);
  const reviews = useSelector(getComments);
  const offers = useSelector(getOffers);
  const authorizationStatus = useSelector(getAuthStatus);

  useEffect(() => {
    dispatch(fetchCurrentOffer(Number(id)));
    dispatch(fetchOffersListNearBy(Number(id)));
    dispatch(fetchCommentsList(Number(id)));
  }, [id]);

  const isExistOffer = offers.filter((off) => off.id === Number(id));

  if (!isExistOffer.length) {
    return <PageNotFoundScreen/>;
  }

  if (!Object.entries(offer).length || !offersNear.length) {
    return <LoadingScreen/>;
  }

  const offersNearWithCurrentOffer = offersNear.slice();
  offersNearWithCurrentOffer.push(offer);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <RoomGallery images={offer.images}/>
          <div className="property__container container">
            <div className="property__wrapper">
              <Premium className='property' isPremium={offer.isPremium}/>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <Favorite className='property' isFavorite={offer.isFavorite} size={{width: 31, height: 33}} offerId={offer.id} cardPlace={AddToFavoritesCardPlace.Room}/>
              </div>
              <div className="property__rating rating">
                <Rating className='property' value={offer.rating}/>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">Whats inside</h2>
                <Goods goods={offer.goods}/>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <Host host={offer.host}/>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews ·
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews}/>
                {authorizationStatus === AuthStatus.Auth && <ReviewForm/>}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={city} points={offersNearWithCurrentOffer} selectedPoint={offer.id}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersListNear offers={offersNear}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export {RoomScreen};
