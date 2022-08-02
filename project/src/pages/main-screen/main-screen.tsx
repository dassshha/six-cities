import {OffersListMain} from '../../components/offers-list-main/offers-list-main';
import {useState} from 'react';
import {CitiesListType} from '../../types/cities-list-type';
import {useSelector} from 'react-redux';
import {Map} from '../../components/map/map';
import {getOffersInCity} from '../../offers-in-city';
import {sortOffers} from '../../sort-offers';
import {getOffers} from '../../store/data/selectors';
import {getCity, getSortType} from '../../store/app/selectors';
import {Header} from '../../components/header/header';
import {CitiesList} from '../../components/cities-list/cities-list';
import {Sort} from '../../components/sort/sort';
import {NoOffersInCity} from '../../components/no-offers-in-city/no-offers-in-city';

type MainScreenProps = {
  cities: CitiesListType
}

function MainScreen({cities}: MainScreenProps): JSX.Element {
  const [hoveredOfferId, setHoveredOfferId] = useState<number | undefined>(undefined);
  const [isSortListOpened, setIsSortListOpened] = useState(false);

  const offers = useSelector(getOffers);
  const city = useSelector(getCity);
  const sortType = useSelector(getSortType);

  const offersInCity = sortOffers(sortType, getOffersInCity(city, offers));


  const onOfferHover = (offerId: number) => setHoveredOfferId(offerId);
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities} activeCity={city}/>
          </section>
        </div>
        <div className="cities">
          {offersInCity.length ?
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
                  <Sort activeSortType={sortType} isOpened={isSortListOpened}/>
                </form>
                <OffersListMain offers={offersInCity} onOfferHover={onOfferHover}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={city} points={offersInCity} selectedPoint={hoveredOfferId}/>
                </section>
              </div>
            </div> : <NoOffersInCity/>}
        </div>
      </main>
    </div>
  );
}

export {MainScreen};
