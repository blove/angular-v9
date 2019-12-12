import { ElementRef } from '@angular/core';

export class ElementRefMock extends ElementRef {
  constructor() {
    super(undefined);
  }
  nativeElement = null;
}
