import {ReviewForm} from '../../components/review-form/review-form';
import {ReviewsList} from '../../components/reviews-list/reviews-list';
import {RoomGallery} from '../../components/room-gallery/room-gallery';
import {ReviewsListType} from '../../types/reviews-list-type';
import {Goods} from '../../components/goods/goods';
import {Host} from '../../components/host/host';
import {Premium} from '../../components/premium/premium';
import {Favorite} from '../../components/favorite/favorite';
import {Rating} from '../../components/rating/rating';
import {OffersListNear} from '../../components/offers-list-near/offers-list-near';
import {OffersListType} from '../../types/offers-list-type';
import {CityType} from '../../types/city-type';
import {Header} from '../../components/header/header';
import {useParams} from 'react-router-dom';
import {Map} from '../../components/map/map';
import {useEffect} from 'react';
import {StateType} from '../../types/state-type';
import {connect, ConnectedProps} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {ActionsType} from '../../types/action-type';
import {fetchCommentsList, fetchCurrentOffer, fetchOffersListNearBy} from '../../store/api-actions';
import {LoadingScreen} from '../loading-screen/loading-screen';

// type RoomScreenProps = {
//   offers: OffersListType,
//   reviews: ReviewsListType,
//   offersNear: OffersListType,
// };

function mapStateToProps({city, currentOffer, offersNearBy, comments}: StateType) {
  return {city, offer: currentOffer, offersNear: offersNearBy, reviews: comments};
}

function mapDispatchToProps(dispatch: Dispatch<ActionsType>) {
  return bindActionCreators({
    loadCurrentOffer: fetchCurrentOffer,
    loadOffersNearBy: fetchOffersListNearBy,
    loadComments: fetchCommentsList
  }, dispatch);
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function RoomScreen({reviews, offersNear, city, loadComments, loadOffersNearBy, loadCurrentOffer, offer}: ConnectedComponentProps): JSX.Element {
  const {id} = useParams();

  useEffect(() => {
    loadCurrentOffer(Number(id));
    loadOffersNearBy(Number(id));
    loadComments(Number(id));
  }, [id]);

  if (!Object.entries(offer).length || !offersNear.length) {
    return <LoadingScreen/>
  }

  const offersNearWithCurrentOffer = offersNear.slice()
    offersNearWithCurrentOffer.push(offer);

  return (
    <div className="page">
      {/*<Header/>*/}
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
                <Favorite className='property' isFavorite={offer.isFavorite} size={{width: 31, height: 33}}/>
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
                <ReviewForm/>
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
export default connector(RoomScreen);
