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

@Directive({
  selector: '[swrHan]'
})
export class HanDirective implements OnChanges {
  /** The directive data. */
  @Input('swrHan') fire: boolean;

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

    // get the native element from the injected ElementRef instance
    const el = this.elementRef.nativeElement as HTMLImageElement;

    // set the image source value
    let src: string;
    if (simpleChanges.fire.currentValue) {
      src = '/assets/img/han-solo-fire.png';
    } else {
      src = '/assets/img/han-solo.png';
    }

    // set the updated image src attribute
    this.renderer.setProperty(el, 'src', src);
  }
}
