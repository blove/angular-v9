import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StormtroopersComponent } from './stormtroopers.component';

describe('StormtroopersComponent', () => {
  let component: StormtroopersComponent;
  let fixture: ComponentFixture<StormtroopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StormtroopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StormtroopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
