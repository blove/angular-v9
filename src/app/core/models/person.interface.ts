import { generate } from 'rxjs';

export interface Person {
  fields: {
    pk: number;
    edited: string;
    name: string;
    created: string;
    gender: string;
    skin_color: string;
    hair_color: string;
    height: string;
    eye_color: string;
    mass: string;
    homeworld: number;
    birth_year: string;
  };
  pk: number;
}

export function generatePerson() {
  return {
    fields: {
      edited: '2014-12-20T21:17:56.891Z',
      name: 'Luke Skywalker',
      created: '2014-12-09T13:50:51.644Z',
      gender: 'male',
      skin_color: 'fair',
      hair_color: 'blond',
      height: '172',
      eye_color: 'blue',
      mass: '77',
      homeworld: 1,
      birth_year: '19BBY'
    },
    model: 'resources.people',
    pk: 1
  };
}
