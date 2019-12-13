import { CommonModule } from '@angular/common';
import { Component, DebugElement, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GreedoDirective } from './greedo.directive';

@Component({
  template: `
    <div swrGreedo></div>
  `
})
class TestGreedoDirectiveComponent {}

describe('GreedoDirective', () => {
  let fixture: ComponentFixture<TestGreedoDirectiveComponent>;
  let testComponent: TestGreedoDirectiveComponent;
  let debugEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreedoDirective, TestGreedoDirectiveComponent],
      imports: [CommonModule],
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }, Renderer2]
    });

    fixture = TestBed.createComponent(TestGreedoDirectiveComponent);
    testComponent = fixture.componentInstance;
    debugEl = fixture.debugElement.query(By.css('[swrGreedo]'));
    fixture.detectChanges();
  });

  it('should create', () => expect(testComponent).toBeTruthy());
});
