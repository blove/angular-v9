import { ElementRefMock } from '../../../mocks';
import { HanDirective } from './han.directive';

describe('HanDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = new ElementRefMock();
    const directive = new HanDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
