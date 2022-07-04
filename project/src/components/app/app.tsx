import {MainScreen} from '../main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {SignInScreen} from '../sign-in-screen/sign-in-screen';
import {FavoritesScreen} from '../favorites-screen/favorites-screen';
import {RoomScreen} from '../room-screen/room-screen';
import {PageNotFoundScreen} from '../page-not-found-screen/page-not-found-screen';
import {PrivateRoute} from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen/>} />
        <Route path={AppRoute.SignIn} element={<SignInScreen/>} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authStatus={AuthStatus.NoAuth}>
            <FavoritesScreen/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Room} element={<RoomScreen/>}/>
        <Route path='*' element={<PageNotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
