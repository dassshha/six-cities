type City = {
  'location': {
    'latitude': number,
    'longitude': number,
    'zoom': number
  },
  'name': string
}

export type HostType = {
  'avatarUrl': string,
  'id': number,
  'isPro': boolean,
  'name': string
}

type Location = {
  'latitude': number,
  'longitude': number,
  'zoom': number
}

export type Offer = {
  'bedrooms': number,
  'city': City,
  'description': string,
  'goods': string[],
  'host': HostType,
  'id': number,
  'images': string[],
  'isFavorite': boolean,
  'isPremium': boolean,
  'location': Location,
  'maxAdults': number,
  'previewImage': string,
  'price': number,
  'rating': number,
  'title': string,
  'type': string
};
