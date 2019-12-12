import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Pipe({
  name: 'wookiee'
})
export class WookieePipe implements PipeTransform {
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

  transform(value: string, translate: boolean): string {
    if (translate) {
      return this.translateToWookiee(value);
    }

    return value;
  }

  private translateToWookiee(source: string): string {
    source = source.toLowerCase();
    let output = '';
    for (let i = 0; i < source.length; i++) {
      output += this.lookup[source.charAt(i)];
    }
    return output;
  }
}
