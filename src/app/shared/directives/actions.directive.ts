import {
  AfterContentInit,
  ContentChild,
  Directive,
  ElementRef,
  Renderer
} from '@angular/core';

@Directive({
  selector: '[swrActions]'
})
export class ActionsDirective implements AfterContentInit {
  // [TODO]: Angular v9 ContentChild will not return host element!!
  @ContentChild(ActionsDirective, { static: true, read: ElementRef })
  selfElementRef: ElementRef;

  constructor(private renderer: Renderer) {}

  ngAfterContentInit() {
    const el = this.selfElementRef.nativeElement;
    // [TODO]: Angular v9: Renderer is deprecated!!
    this.renderer.setElementStyle(el, 'display', 'flex');
    this.renderer.setElementStyle(el, 'flexDirection', 'row');
    this.renderer.setElementStyle(el, 'justifyContent', 'flex-end');
  }
}
