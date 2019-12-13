import { isPlatformBrowser } from '@angular/common';
import {
  AfterContentInit,
  Directive,
  ElementRef,
  Inject,
  PLATFORM_ID,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[swrContent]'
})
export class ContentDirective implements AfterContentInit {
  /** The directive native element. */
  private el: HTMLElement;

  constructor(
    private readonly elementRef: ElementRef,
    // tslint:disable-next-line:ban-types
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly renderer: Renderer2
  ) {
    if (!isPlatformBrowser(platformId)) {
      return;
    }

    this.el = this.elementRef.nativeElement as HTMLElement;

    this.renderer.setStyle(this.el, 'display', 'flex');
    this.renderer.setStyle(this.el, 'flexDirection', 'column');
    this.renderer.setStyle(this.el, 'justifyContent', 'flex-start');
    this.renderer.setStyle(this.el, 'alignItems', 'center');
    this.renderer.setStyle(this.el, 'padding', '10px');
  }

  ngAfterContentInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // create a new container div and assign the width
    const container = this.renderer.createElement('div');
    this.renderer.setStyle(container, 'width', '50%');

    // move all child nodes of the directive element into the container
    const children = this.el.childNodes;
    while (children.length > 0) {
      this.renderer.appendChild(container, children[0]);
    }

    // append the container div to the directive element
    this.renderer.appendChild(this.el, container);
  }
}
