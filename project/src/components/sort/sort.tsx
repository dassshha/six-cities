import {changeSortType} from '../../store/action';
import {useDispatch} from 'react-redux';
import {SORT_TYPE} from '../../const';
import {appDispatch} from '../../types/state-type';

type SortProps = {
  activeSortType: string,
  isOpened: boolean
};

function Sort({activeSortType, isOpened}: SortProps): JSX.Element {
  const dispatch = useDispatch<appDispatch>();
  function onSortTypeClick(sortType: string) {
    dispatch(changeSortType(sortType));
  }
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
