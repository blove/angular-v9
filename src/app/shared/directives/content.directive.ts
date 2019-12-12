import {
  AfterContentInit,
  Directive,
  ElementRef,
  Inject
  } from '@angular/core';
import { WINDOW } from '../../core';

@Directive({
  selector: '[swrContent]'
})
export class ContentDirective implements AfterContentInit {
  constructor(
    private readonly elementRef: ElementRef,
    @Inject(WINDOW) private window: Window
  ) {
    const el = this.elementRef.nativeElement as HTMLElement;

    // The native element can be null if Angular is not executed in the context of a browser
    if (el === null) {
      return;
    }

    el.style.display = 'flex';
    el.style.flexDirection = 'column';
    el.style.justifyContent = 'flex-start';
    el.style.alignItems = 'center';
    el.style.padding = '10px';
  }

  ngAfterContentInit() {
    const el = this.elementRef.nativeElement as HTMLElement;

    // verify native element is a browser element
    if (el === null) {
      return;
    }

    // create a new container div and assign the width
    const container = this.window.document.createElement('div');
    container.style.width = '50%';

    // move all child nodes of the directive element into the container
    const children = el.childNodes;
    while (children.length > 0) {
      container.appendChild(children[0]);
    }

    // append the container div to the directive element
    el.appendChild(container);
  }
}
