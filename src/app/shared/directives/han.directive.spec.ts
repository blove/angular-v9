import { CommonModule } from '@angular/common';
import { Component, DebugElement, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HanDirective } from './han.directive';

@Component({
  template: `
    <div swrContent></div>
  `
})
class TestHanDirectiveComponent {}

describe('HanDirective', () => {
  let fixture: ComponentFixture<TestHanDirectiveComponent>;
  let testComponent: TestHanDirectiveComponent;
  let debugEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HanDirective, TestHanDirectiveComponent],
      imports: [CommonModule],
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }, Renderer2]
    });

    fixture = TestBed.createComponent(TestHanDirectiveComponent);
    testComponent = fixture.componentInstance;
    debugEl = fixture.debugElement.query(By.css('[swrContent]'));
    fixture.detectChanges();
  });

  it('should create', () => expect(testComponent).toBeTruthy());
});
