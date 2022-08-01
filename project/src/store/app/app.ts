import {Paris} from '../../mocks/city';
import {SORT_TYPE} from '../../const';
import {AppStateType} from '../../types/state-type';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType} from '../action';

const initialState: AppStateType = {
  city: Paris,
  sortType: SORT_TYPE.DEFAULT,
};

const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload
    });
});

export {appReducer};
