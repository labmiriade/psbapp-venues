import { components } from './schema';
import * as faker from 'faker';

export function PlaceList(): components['schemas']['PlaceList'] {
  const places = [];

  for (let i = 0; i < 50; i++) {
    places.push(PlaceInfo());
  }

  return {
    places,
  };
}

export function PlaceInfo(placeId?: string): components['schemas']['PlaceInfo'] {
  return {
    placeId: placeId ?? faker.random.word(),
    city: faker.address.city(),
    streetName: faker.address.streetAddress(),
    streetNumber: faker.datatype.number().toString(),
    province: faker.address.county(),
    lat: faker.address.latitude(),
    lon: faker.address.longitude(),
    category: faker.random.word(),
    name: faker.company.companyName(),
    description: faker.random.words(20),
    emailAddress: faker.name.firstName() + '@gmail.com',
    website: `https://wwww.${faker.internet.domainName()}.com`,
    istatCode: `${faker.datatype.string(1)}${faker.datatype.number(999)}`,
    availability: 'Su prenotazione',
    equipment: faker.random.words(4),
    maxCapacity: `${faker.datatype.number(999)}`,
    size: `${faker.datatype.number(99)}`,
    collocation: faker.random.word(),
    accessibility: faker.random.words(3),
    wifi: 'si',
    contact: faker.random.words(7),
  };
}
export function CategoriesList(): components['schemas']['CategoriesList'] {
  return {
    categories: [
      'Esposizioni Permanenti',
      'Percorsi e proposte didattiche',
      'Territorio',
      'Esposizioni Permanenti',
      'Percorsi e proposte didattiche',
      'Territorio',
      'Esposizioni Permanenti',
      'Percorsi e proposte didattiche',
      'Territorio',
      'Esposizioni Permanenti',
      'Percorsi e proposte didattiche',
      'Territorio',
      'Esposizioni Permanenti',
      'Percorsi e proposte didattiche',
      'Territorio',
    ],
  };
}
