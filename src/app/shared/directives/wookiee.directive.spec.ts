import { ElementRefMock } from '../../../mocks';
import { WookieeDirective } from './wookiee.directive';

describe('WookieeDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = new ElementRefMock();
    const directive = new WookieeDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
