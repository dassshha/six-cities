import {combineReducers} from 'redux';
import {dataReducer} from './data/data';
import {appReducer} from './app/app';
import {userReducer} from './user/user';

export enum Namespace {
  dataSpace ='DATA',
  appSpace = 'APP',
  userSpace = 'USER',
}

export const reducer = combineReducers({
  [Namespace.dataSpace]: dataReducer,
  [Namespace.appSpace]: appReducer,
  [Namespace.userSpace]: userReducer
});

export type State = ReturnType<typeof reducer>;
