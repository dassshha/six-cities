import {MainScreen} from '../../pages/main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {SignInScreen} from '../../pages/sign-in-screen/sign-in-screen';
import {FavoritesScreen} from '../../pages/favorites-screen/favorites-screen';
import {RoomScreen} from '../../pages/room-screen/room-screen';
import {PageNotFoundScreen} from '../../pages/page-not-found-screen/page-not-found-screen';
import {PrivateRoute} from '../private-route/private-route';
import {OffersList} from '../../types/offers-list';
import {City} from '../../types/city';
import {ReviewsListType} from '../../types/reviews-list-type';

type AppProps = {
  offers: OffersList,
  reviews: ReviewsListType
  city: City
};

function App(props: AppProps): JSX.Element {
  const {offers, reviews, city} = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen offers={offers} city={city}/>} />
        <Route path={AppRoute.SignIn} element={<SignInScreen/>} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authStatus={AuthStatus.Auth}>
            <FavoritesScreen/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Room} element={<RoomScreen reviews={reviews}/>}/>
        <Route path='*' element={<PageNotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
