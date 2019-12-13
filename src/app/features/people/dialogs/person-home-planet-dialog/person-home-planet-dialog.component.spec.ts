import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, async } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ConfigureFn, configureTests } from '../../../../../test-config.helper';
import { Person, PlanetService } from '../../../../core';
import { MaterialModule } from '../../../../material';
import { SharedModule } from '../../../../shared';
import { PlanetComponent } from '../../presenters/planet/planet.component';
import { PersonHomePlanetDialogComponent } from './person-home-planet-dialog.component';

const person = {
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
const planet = {
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
};

describe('PersonHomePlanetDialogComponent', () => {
  let fixture: ComponentFixture<PersonHomePlanetDialogComponent>;
  let app: PersonHomePlanetDialogComponent;

  beforeEach(async(() => {
    const configure: ConfigureFn = testBed => {
      testBed.configureTestingModule({
        declarations: [PersonHomePlanetDialogComponent, PlanetComponent],
        imports: [
          CommonModule,
          HttpClientTestingModule,
          NoopAnimationsModule,
          RouterTestingModule,
          MaterialModule,
          SharedModule
        ],
        providers: [
          {
            provide: MAT_DIALOG_DATA,
            useValue: { person }
          },
          {
            provide: PlanetService,
            useValue: {
              getPlanetForPerson: jest.fn((_: Person) => of(planet))
            }
          }
        ]
      });
    };

    configureTests(configure).then(testBed => {
      fixture = testBed.createComponent(PersonHomePlanetDialogComponent);
      app = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should render html', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    // @ts-ignore
    expect(compiled).toMatchSnapshot();
  }));
});
