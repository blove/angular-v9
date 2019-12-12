import { ElementRefMock } from '../../../mocks';
import { ActionsDirective } from './actions.directive';

describe('ActionsDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = new ElementRefMock();
    const directive = new ActionsDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
