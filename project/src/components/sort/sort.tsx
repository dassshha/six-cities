import {bindActionCreators, Dispatch} from 'redux';
import {ActionsType} from '../../types/action-type';
import {changeSortType} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';
import {SORT_TYPE} from '../../const';

type SortProps = {
  activeSortType: string,
  isOpened: boolean
};

function mapDispatchToProps(dispatch: Dispatch<ActionsType>) {
  return bindActionCreators({
    onSortTypeClick: changeSortType
  }, dispatch);
}

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = SortProps & PropsFromRedux;
function Sort({activeSortType, onSortTypeClick, isOpened}: ConnectedComponentProps): JSX.Element {
  return (
    <ul className={`places__options places__options--custom places__options--${isOpened ? 'opened' : 'closed'}`}>
      <li className={`places__option ${activeSortType === SORT_TYPE.DEFAULT && 'places__option--active'}`} onClick={() => onSortTypeClick(SORT_TYPE.DEFAULT)} tabIndex={0}>Popular</li>
      <li className={`places__option ${activeSortType === SORT_TYPE.PRICE.LOW_TO_HIGH && 'places__option--active'}`} onClick={() => onSortTypeClick(SORT_TYPE.PRICE.LOW_TO_HIGH)} tabIndex={0}>Price: low to high</li>
      <li className={`places__option ${activeSortType === SORT_TYPE.PRICE.HIGH_TO_LOW && 'places__option--active'}`} onClick={() => onSortTypeClick(SORT_TYPE.PRICE.HIGH_TO_LOW)}tabIndex={0}>Price: high to low</li>
      <li className={`places__option ${activeSortType === SORT_TYPE.TOP_RATED_FIRST && 'places__option--active'}`} onClick={() => onSortTypeClick(SORT_TYPE.TOP_RATED_FIRST)} tabIndex={0}>Top rated first</li>
    </ul>
  );
}

export {Sort};
export default connector(Sort);
