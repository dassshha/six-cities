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

export enum APIRoute {
  Hotels = '/hotels',
}

export const RATING = {
  'PERFECT': {title: 'perfect', value: 5},
  'GOOD': {title: 'good', value: 4},
  'NOT_BAD': {title: 'not bad', value: 3},
  'BADLY': {title: 'badly', value: 2},
  'TERRIBLY': {title: 'terribly', value: 1}
};

export const LIST_TYPE = {
  MAIN : 'MAIN',
  FAVORITES: 'FAVORITES',
  NEAR: 'NEAR'
};

export const SORT_TYPE = {
  DEFAULT: 'Popular',
  PRICE: {
    LOW_TO_HIGH: 'Price: low to high',
    HIGH_TO_LOW: 'Price: high to low'
  },
  TOP_RATED_FIRST: 'Top rated first'
};
export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

