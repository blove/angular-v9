import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[swrActions]'
})
export class ActionsDirective {
  constructor(elementRef: ElementRef) {
    const el = elementRef.nativeElement as HTMLElement;

    // verify native element exists
    if (el === null) {
      return;
    }

    el.style.display = 'flex';
    el.style.flexDirection = 'row';
    el.style.justifyContent = 'flex-end';
  }
}
