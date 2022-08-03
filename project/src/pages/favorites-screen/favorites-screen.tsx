import {OffersListFavorites} from '../../components/offers-list-favorites/offers-list-favorites';
import {Header} from '../../components/header/header';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {appDispatch} from '../../types/state-type';
import {fetchFavoriteOffers} from '../../store/api-actions';
import {getFavoriteOffers, getFavoritesLoadedFlag} from '../../store/data/selectors';
import {LoadingScreen} from '../loading-screen/loading-screen';

function FavoritesScreen(): JSX.Element {
  const dispatch = useDispatch<appDispatch>();
  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, []);

  const offers = useSelector(getFavoriteOffers);
  const isDataLoaded = useSelector(getFavoritesLoadedFlag);

  if (!isDataLoaded) {
    return <LoadingScreen/>
  }
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                {/*<OffersListFavorites offers={offers}/>*/}
                <OffersListFavorites offers={offers}/>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <OffersListFavorites offers={offers}/>
                {/*<OffersListFavorites offers={offers}/>*/}
                {/*<OffersList offers={offers} type={LIST_TYPE.FAVORITES}/>*/}
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export {FavoritesScreen};
