import {ActionsType, ActionType} from '../../types/action-type';
import {Paris} from '../../mocks/city';
import {SORT_TYPE} from '../../const';
import {AppStateType} from '../../types/state-type';

const initialState: AppStateType = {
  city: Paris,
  sortType: SORT_TYPE.DEFAULT,
};

function appReducer(state= initialState, action: ActionsType): AppStateType {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.ChangeSort:
      return {...state, sortType: action.payload};
  }
  return state;
}

export {appReducer};
