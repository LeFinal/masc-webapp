import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSplashComponent } from './logo-splash.component';

describe('LogoSplashComponent', () => {
  let component: LogoSplashComponent;
  let fixture: ComponentFixture<LogoSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
