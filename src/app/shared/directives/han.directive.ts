import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[swrHan]'
})
export class HanDirective implements OnChanges {
  /** The directive data. */
  @Input('swrHan') fire: boolean;

  constructor(private readonly elementRef: ElementRef) {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    let src: string;

    // set the image source value
    if (simpleChanges.fire.currentValue) {
      src = '/assets/img/han-solo-fire.png';
    } else {
      src = '/assets/img/han-solo.png';
    }

    // get the native element from the injected ElementRef instance
    const el = this.elementRef.nativeElement as HTMLImageElement;

    // set the updated image src attribute
    el.src = src;
  }
}
