import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonHomePlanetDialogComponent } from './person-home-planet-dialog.component';

describe('PersonHomePlanetDialogComponent', () => {
  let component: PersonHomePlanetDialogComponent;
  let fixture: ComponentFixture<PersonHomePlanetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonHomePlanetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonHomePlanetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
