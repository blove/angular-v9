import {
  Component,
  Inject,
  ViewChild,
  ViewContainerRef,
  OnInit,
  OnDestroy,
  ComponentFactoryResolver,
  TemplateRef
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { tap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Person, PlanetService, Planet } from '../../../../core';

@Component({
  templateUrl: './person-home-planet-dialog.component.html',
  styleUrls: ['./person-home-planet-dialog.component.scss']
})
export class PersonHomePlanetDialogComponent implements OnDestroy, OnInit {
  /** The view container reference for the planet template. */
  @ViewChild(TemplateRef, { read: ViewContainerRef })
  planetViewContainerRef: ViewContainerRef;

  /** Unsubscribe from observable streams when the component is destroyed. */
  private unsubscribe = new Subject();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(MAT_DIALOG_DATA) public data: { person: Person },
    private readonly planetService: PlanetService
  ) {}

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit() {
    this.planetService
      .getPlanetForPerson(this.data.person)
      .pipe(
        tap(planet => this.lazyLoadPlanet(planet)),
        takeUntil(this.unsubscribe)
      )
      .subscribe();
  }

  private lazyLoadPlanet(planet: Planet): void {
    import('../../presenters/planet/planet.component').then(
      ({ PlanetComponent }) => {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          PlanetComponent
        );
        const componentRef = this.planetViewContainerRef.createComponent(
          componentFactory
        );
        componentRef.instance.planet = planet;
      }
    );
  }
}
