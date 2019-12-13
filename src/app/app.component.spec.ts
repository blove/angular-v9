import { CommonModule } from '@angular/common';
import { ComponentFixture, async } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { ConfigureFn, configureTests } from '../test-config.helper';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { SharedModule } from './shared';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    const configure: ConfigureFn = testBed => {
      testBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [
          CommonModule,
          NoopAnimationsModule,
          RouterTestingModule,
          MaterialModule,
          SharedModule
        ]
      });
    };

    configureTests(configure).then(testBed => {
      fixture = testBed.createComponent(AppComponent);
      app = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should render html', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    // @ts-ignore
    expect(compiled).toMatchSnapshot();
  }));
});
