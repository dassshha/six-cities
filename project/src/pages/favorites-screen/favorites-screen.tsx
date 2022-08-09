import {Header} from '../../components/header/header';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {appDispatch} from '../../types/state-type';
import {fetchFavoriteOffers} from '../../store/api-actions';
import {getFavoriteOffers, getFavoritesLoadedFlag} from '../../store/data/selectors';
import {LoadingScreen} from '../loading-screen/loading-screen';
import {CitiesListType} from '../../types/cities-list-type';
import {FavoritesFull} from '../../components/favorites-full/favorites-full';
import {FavoritesEmpty} from '../../components/favorites-empty/favorites-empty';

type FavoritesScreenProps = {
  cities: CitiesListType
}

function FavoritesScreen({cities}: FavoritesScreenProps): JSX.Element {
  const dispatch = useDispatch<appDispatch>();
  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, []);

  const offers = useSelector(getFavoriteOffers);
  const isDataLoaded = useSelector(getFavoritesLoadedFlag);

  if (!isDataLoaded) {
    return <LoadingScreen/>;
  }
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {offers.length ? <FavoritesFull offers={offers} cities={cities}/> : <FavoritesEmpty/>}
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
