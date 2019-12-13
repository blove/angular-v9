export interface Planet {
  fields: {
    edited: string;
    climate: string;
    surface_water: string;
    name: string;
    diameter: string;
    rotation_period: string;
    created: string;
    terrain: string;
    gravity: string;
    orbital_period: string;
    population: string;
  };
  pk: number;
}

export const generatePlanet = () => ({
  fields: {
    edited: '2014-12-20T20:58:18.411Z',
    climate: 'arid',
    surface_water: '1',
    name: 'Tatooine',
    diameter: '10465',
    rotation_period: '23',
    created: '2014-12-09T13:50:49.641Z',
    terrain: 'desert',
    gravity: '1 standard',
    orbital_period: '304',
    population: '200000'
  },
  model: 'resources.planet',
  pk: 1
});
