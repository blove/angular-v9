import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  PLATFORM_ID,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Directive({
  selector: '[swrGreedo]'
})
export class GreedoDirective implements OnChanges {
  /** The directive data. */
  @Input('swrGreedo') fire: boolean;

  constructor(
    private readonly elementRef: ElementRef,
    // tslint:disable-next-line:ban-types
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly renderer: Renderer2
  ) {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const el = this.elementRef.nativeElement as HTMLImageElement;
    let src: string;

    // set the image source value
    if (simpleChanges.fire.currentValue) {
      src = '/assets/img/dizzy-face-emoji.png';
    } else {
      src = '/assets/img/greedo.png';
    }

    // after 500 millisconds update the image src attribute
    interval(500)
      .pipe(first())
      .subscribe(() => this.renderer.setProperty(el, 'src', src));
  }
}
