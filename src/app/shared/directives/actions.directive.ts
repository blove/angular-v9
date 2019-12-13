import {
  AfterContentInit,
  Directive,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[swrActions]'
})
export class ActionsDirective implements AfterContentInit {
  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  ngAfterContentInit() {
    const el = this.elementRef.nativeElement;
    this.renderer.setStyle(el, 'display', 'flex');
    this.renderer.setStyle(el, 'flexDirection', 'row');
    this.renderer.setStyle(el, 'justifyContent', 'flex-end');
  }
}
