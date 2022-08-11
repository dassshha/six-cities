import {CitiesListType} from '../../types/cities-list-type';
import {CityType} from '../../types/city-type';
import {compareCities} from '../../offers-in-city';
import {changeCity} from '../../store/action';
import {useDispatch} from 'react-redux';
import {appDispatch} from '../../types/state-type';
import {Link, NavLink} from 'react-router-dom';
import {AppRoute} from '../../const';

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
          <Link className={`locations__item-link tabs__item ${compareCities(activeCity, city) && 'tabs__item--active'}`} to={AppRoute.Main}>
            <span>{city.name}</span>
          </Link>
        </li>))}
    </ul>
  );
}

export {CitiesList};
