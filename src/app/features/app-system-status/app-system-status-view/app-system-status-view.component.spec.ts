import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSystemStatusView } from './app-system-status-view.component';

describe('AppSystemStatusViewComponent', () => {
  let component: AppSystemStatusView;
  let fixture: ComponentFixture<AppSystemStatusView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSystemStatusView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSystemStatusView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
