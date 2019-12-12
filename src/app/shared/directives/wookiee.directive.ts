import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges
  } from '@angular/core';
import { Film, Person } from '../../core';

@Directive({
  selector: '[swrWookiee]'
})
export class WookieeDirective implements AfterViewInit, OnChanges {
  /** The directive data. */
  @Input('swrWookiee') translate: boolean;

  /** The wookiee language lookup table for each character. */
  lookup = {
    a: 'ra',
    b: 'rh',
    c: 'oa',
    d: 'wa',
    e: 'wo',
    f: 'ww',
    g: 'rr',
    h: 'ac',
    i: 'ah',
    j: 'sh',
    k: 'or',
    l: 'an',
    m: 'sc',
    n: 'wh',
    o: 'oo',
    p: 'ak',
    q: 'rq',
    r: 'rc',
    s: 'c',
    t: 'ao',
    u: 'hu',
    v: 'ho',
    w: 'oh',
    x: 'k',
    y: 'ro',
    z: 'uf'
  };

  /** The original inner text. */
  private original = '';

  constructor(private readonly elementRef: ElementRef) {}

  ngAfterViewInit() {
    const el = this.elementRef.nativeElement as HTMLElement;

    // verify native element exists
    if (el === null) {
      return;
    }

    this.original = el.innerText;

    if (this.translate) {
      el.innerText = this.translateToWookiee(el.innerText);
    }
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.translate && this.original.length > 0) {
      this.updateInnerText();
    }
  }

  private translateToWookiee(source: string): string {
    source = source.toLowerCase();
    let output = '';
    for (let i = 0; i < source.length; i++) {
      output += this.lookup[source.charAt(i)];
    }
    return output;
  }

  private updateInnerText(): void {
    const el = this.elementRef.nativeElement as HTMLElement;

    // verify native element exists
    if (el === null) {
      return;
    }

    if (this.translate) {
      el.innerText = this.translateToWookiee(el.innerText);
    } else {
      el.innerText = this.original;
    }
  }
}
