export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const RATING = {
  'PERFECT': {title: 'perfect', value: 5},
  'GOOD': {title: 'good', value: 4},
  'NOT_BAD': {title: 'not bad', value: 3},
  'BADLY': {title: 'badly', value: 2},
  'TERRIBLY': {title: 'terribly', value: 1}
};
