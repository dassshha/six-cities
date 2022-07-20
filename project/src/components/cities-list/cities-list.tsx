import {CitiesListType} from '../../types/cities-list-type';
import {CityType} from '../../types/city-type';
import {compareCities} from '../../offers-in-city';
import {bindActionCreators, Dispatch} from 'redux';
import {ActionsType} from '../../types/action-type';
import {changeCity} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';

type CitiesListProps = {
  activeCity: CityType,
  cities: CitiesListType
}

function mapDispatchToProps(dispatch: Dispatch<ActionsType>) {
  return bindActionCreators({
    onCityClick: changeCity
  }, dispatch);
}

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = CitiesListProps & PropsFromRedux;

function CitiesList({activeCity, cities, onCityClick}: ConnectedComponentProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) =>
        <li key={city.name} className="locations__item" onClick={() => onCityClick(city)}>
        <a className={`locations__item-link tabs__item ${compareCities(activeCity, city) && 'tabs__item--active'}`} href="#">
          <span>{city.name}</span>
        </a>
      </li>)}
    </ul>
  );
}

export {CitiesList};
export default connector(CitiesList);
