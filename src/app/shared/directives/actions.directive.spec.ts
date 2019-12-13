import { CommonModule } from '@angular/common';
import { Component, DebugElement, PLATFORM_ID, Renderer } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ActionsDirective } from './actions.directive';

@Component({
  template: `
    <div swrActions></div>
  `
})
class TestActionsDirectiveComponent {}

describe('ActionsDirective', () => {
  let fixture: ComponentFixture<TestActionsDirectiveComponent>;
  let testComponent: TestActionsDirectiveComponent;
  let debugEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionsDirective, TestActionsDirectiveComponent],
      imports: [CommonModule],
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }, Renderer]
    });

    fixture = TestBed.createComponent(TestActionsDirectiveComponent);
    testComponent = fixture.componentInstance;
    debugEl = fixture.debugElement.query(By.css('[swrActions]'));
    fixture.detectChanges();
  });

  it('should create', () => expect(testComponent).toBeTruthy());

  it('should be styled', () => {
    const el = debugEl.nativeElement as HTMLElement;
    expect(el.style.display).toBe('flex');
  });
});
