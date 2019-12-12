import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[swrBtnGrow]'
})
export class BtnGrowDirective {
  @HostBinding('class.btn-grow') btnGrow = false;

  @HostListener('mouseover') onMouseOver() {
    this.btnGrow = true;
  }

  @HostListener('mouseout') onMouseOut() {
    this.btnGrow = false;
  }
}
