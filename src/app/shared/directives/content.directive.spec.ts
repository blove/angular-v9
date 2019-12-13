import { CommonModule } from '@angular/common';
import { Component, DebugElement, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ContentDirective } from './content.directive';

@Component({
  template: `
    <div swrContent></div>
  `
})
class TestContentDirectiveComponent {}

describe('ContentDirective', () => {
  let fixture: ComponentFixture<TestContentDirectiveComponent>;
  let testComponent: TestContentDirectiveComponent;
  let debugEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentDirective, TestContentDirectiveComponent],
      imports: [CommonModule],
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }, Renderer2]
    });

    fixture = TestBed.createComponent(TestContentDirectiveComponent);
    testComponent = fixture.componentInstance;
    debugEl = fixture.debugElement.query(By.css('[swrContent]'));
    fixture.detectChanges();
  });

  it('should create', () => expect(testComponent).toBeTruthy());

  it('should be styled', () => {
    const el = debugEl.nativeElement as HTMLElement;
    expect(el.style.display).toBe('flex');
  });
});
