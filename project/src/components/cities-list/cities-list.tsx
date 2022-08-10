import {CitiesListType} from '../../types/cities-list-type';
import {CityType} from '../../types/city-type';
import {compareCities} from '../../offers-in-city';
import {changeCity} from '../../store/action';
import {useDispatch} from 'react-redux';
import {appDispatch} from '../../types/state-type';

type CitiesListProps = {
  activeCity: CityType,
  cities: CitiesListType
}

function CitiesList({activeCity, cities}: CitiesListProps): JSX.Element {
  const dispatch = useDispatch<appDispatch>();
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city.name} className="locations__item" onClick={() => dispatch(changeCity(city))} data-testid='City'>
          <a className={`locations__item-link tabs__item ${compareCities(activeCity, city) && 'tabs__item--active'}`} href="#">
            <span>{city.name}</span>
          </a>
        </li>))}
    </ul>
  );
}

export {CitiesList};
