// import {MainScreen} from '../../pages/main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {SignInScreen} from '../../pages/sign-in-screen/sign-in-screen';
import {FavoritesScreen} from '../../pages/favorites-screen/favorites-screen';
import {RoomScreen} from '../../pages/room-screen/room-screen';
import {PageNotFoundScreen} from '../../pages/page-not-found-screen/page-not-found-screen';
import {PrivateRoute} from '../private-route/private-route';
import {OffersListType} from '../../types/offers-list-type';
import {CityType} from '../../types/city-type';
import {ReviewsListType} from '../../types/reviews-list-type';
import {CitiesListType} from '../../types/cities-list-type';
import MainScreenConnected from '../../pages/main-screen/main-screen';
// import {Map, TestMap} from '../map/map';

type AppProps = {
  offers: OffersListType,
  reviews: ReviewsListType
  city: CityType,
  cities: CitiesListType
};

function App(props: AppProps): JSX.Element {
  const {offers, reviews, city, cities} = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreenConnected cities={cities}/>} />
        <Route path={AppRoute.SignIn} element={<SignInScreen/>} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authStatus={AuthStatus.Auth}>
            <FavoritesScreen/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Room} element={<RoomScreen offers={offers} offersNear={offers} reviews={reviews} city={city}/>}/>
        <Route path='*' element={<PageNotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
