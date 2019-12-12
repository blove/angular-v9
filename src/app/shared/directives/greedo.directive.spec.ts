import { ElementRefMock } from '../../../mocks';
import { GreedoDirective } from './greedo.directive';

describe('GreedoDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = new ElementRefMock();
    const directive = new GreedoDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
