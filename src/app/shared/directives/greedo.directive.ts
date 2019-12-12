import {
  Directive,
  OnChanges,
  ElementRef,
  SimpleChanges,
  Input
} from '@angular/core';
import { interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Directive({
  selector: '[swrGreedo]'
})
export class GreedoDirective implements OnChanges {
  /** The directive data. */
  @Input('swrGreedo') fire: boolean;

  constructor(private readonly elementRef: ElementRef) {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    let src: string;

    // set the image source value
    if (simpleChanges.fire.currentValue) {
      src = '/assets/img/dizzy-face-emoji.png';
    } else {
      src = '/assets/img/greedo.png';
    }

    // get the native element from the injected ElementRef instance
    const el = this.elementRef.nativeElement as HTMLImageElement;

    // after 500 millisconds update the image src attribute
    interval(500)
      .pipe(first())
      .subscribe(() => {
        el.src = src;
      });
  }
}
