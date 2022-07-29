// import {MainScreen} from '../../pages/main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
// import {SignInScreen} from '../../pages/sign-in-screen/sign-in-screen';
import SignInConnected from '../../pages/sign-in-screen/sign-in-screen';
import {FavoritesScreen} from '../../pages/favorites-screen/favorites-screen';
import {RoomScreen} from '../../pages/room-screen/room-screen';
import {PageNotFoundScreen} from '../../pages/page-not-found-screen/page-not-found-screen';
import {PrivateRoute} from '../private-route/private-route';
import {OffersListType} from '../../types/offers-list-type';
import {CityType} from '../../types/city-type';
import {ReviewsListType} from '../../types/reviews-list-type';
import {CitiesListType} from '../../types/cities-list-type';
import MainScreenConnected from '../../pages/main-screen/main-screen';
import {StateType} from '../../types/state-type';
import {connect, ConnectedProps} from 'react-redux';
import {LoadingScreen} from '../../pages/loading-screen/loading-screen';
import PrivateRouteConnected from '../../components/private-route/private-route';
import {browserHistory} from '../../browser-history';
import RoomScreenConnected from '../../pages/room-screen/room-screen';
import {offers} from '../../mocks/offers';
import {reviews} from '../../mocks/reviews';

type AppProps = {
  // offers: OffersListType,
  // reviews: ReviewsListType
  // city: CityType,
  cities: CitiesListType
};

function mapStateToProps({isDataLoaded}: StateType) {
  return {isDataLoaded};
}

// function mapDispatchToProps(dispatch: Dispatch<ActionsType>) {
//   return bindActionCreators({
//     onCityClick: changeCity
//   }, dispatch);
// }

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = AppProps & PropsFromRedux;

function App(props: ConnectedComponentProps): JSX.Element {
  const {cities, isDataLoaded} = props;

  if (!isDataLoaded){
    return (
      <LoadingScreen/>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreenConnected cities={cities}/>} />
        <Route path={AppRoute.SignIn} element={<SignInConnected/>} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRouteConnected>
            <FavoritesScreen/>
          </PrivateRouteConnected>
        }
        />
        <Route path={AppRoute.Room} element={<RoomScreenConnected offers={offers} offersNear={offers} reviews={reviews}/>}/>
        <Route path='*' element={<PageNotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default connector(App);
