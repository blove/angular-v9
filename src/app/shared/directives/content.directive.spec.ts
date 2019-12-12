import { ElementRefMock } from '../../../mocks';
import { ContentDirective } from './content.directive';

describe('ContentDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = new ElementRefMock();
    const win = ({
      document: {
        createElement: jest.fn()
      }
    } as unknown) as Window;
    const directive = new ContentDirective(elementRefMock, win);
    expect(directive).toBeTruthy();
  });
});
