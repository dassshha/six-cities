import {OffersListMain} from '../../components/offers-list-main/offers-list-main';
// import {OffersListType} from '../../types/offers-list-type';
import {useState} from 'react';
// import {Header} from '../../components/header/header';
import ConnectedHeader from '../../components/header/header';
import {CitiesListType} from '../../types/cities-list-type';
import {StateType} from '../../types/state-type';
import {connect, ConnectedProps} from 'react-redux';
import CitiesListConnected from '../../components/cities-list/cities-list';
import {Map} from '../../components/map/map';
import {getOffersInCity} from '../../offers-in-city';
// import {Sort} from '../../components/sort/sort';
import SortConnected from '../../components/sort/sort';
import {sortOffers} from '../../sort-offers';
// import {CityType} from '../../types/city-type';
// import {CitiesList} from '../../components/cities-list/cities-list';
// import {bindActionCreators, Dispatch} from 'redux';
// import {ActionsType} from '../../types/action-type';
// import {changeCity} from '../../store/action';

type MainScreenProps = {
  cities: CitiesListType
  // city: CityType
}

function mapStateToProps({city, offers, sortType}: StateType) {
  return {city, offers, sortType};
}

// function mapDispatchToProps(dispatch: Dispatch<ActionsType>) {
//   return bindActionCreators({
//     onCityClick: changeCity
//   }, dispatch);
// }

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = MainScreenProps & PropsFromRedux;

function MainScreen({offers, cities, city, sortType}: ConnectedComponentProps): JSX.Element {
  const [hoveredOfferId, setHoveredOfferId] = useState<number | undefined>(undefined);
  const [isSortListOpened, setIsSortListOpened] = useState(false);

  const offersInCity = sortOffers(sortType, getOffersInCity(city, offers));


  const onOfferHover = (offerId: number) => setHoveredOfferId(offerId);
  return (
    <div className="page page--gray page--main">
      <ConnectedHeader/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesListConnected cities={cities} activeCity={city}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersInCity.length} places to stay in {city.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0} onClick={() => setIsSortListOpened(!isSortListOpened)}>
                  {sortType}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <SortConnected activeSortType={sortType} isOpened={isSortListOpened}/>
              </form>
              {/*<OffersListMain offers={offers} onOfferHover={onOfferHover}/>*/}
              <OffersListMain offers={offersInCity} onOfferHover={onOfferHover}/>
              {/*<OffersList offers={offers} type={LIST_TYPE.MAIN} onOfferHover={onOfferHover}/>*/}
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} points={offersInCity} selectedPoint={hoveredOfferId}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export {MainScreen};
export default connector(MainScreen);
