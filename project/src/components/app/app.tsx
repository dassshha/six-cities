import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import {SignInScreen} from '../../pages/sign-in-screen/sign-in-screen';
import {FavoritesScreen} from '../../pages/favorites-screen/favorites-screen';
import {PageNotFoundScreen} from '../../pages/page-not-found-screen/page-not-found-screen';
import {CitiesListType} from '../../types/cities-list-type';
import {useSelector} from 'react-redux';
import {LoadingScreen} from '../../pages/loading-screen/loading-screen';
import {PrivateRoute} from '../../components/private-route/private-route';
import {RoomScreen} from '../../pages/room-screen/room-screen';
import {getDataLoadedFlag} from '../../store/data/selectors';
import {MainScreen} from '../../pages/main-screen/main-screen';

type AppProps = {
  cities: CitiesListType;
};

function App(props: AppProps): JSX.Element {
  const {cities} = props;
  const isDataLoaded = useSelector(getDataLoadedFlag);

  if (!isDataLoaded){
    return (
      <LoadingScreen/>
    );
  }

  return (
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen cities={cities}/>} />
        <Route path={AppRoute.SignIn} element={<SignInScreen/>} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute>
            <FavoritesScreen cities={cities}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Room} element={<RoomScreen/>}/>
        <Route path='*' element={<PageNotFoundScreen/>}/>
      </Routes>
  );
}

export default App;
