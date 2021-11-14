import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeviceManagementView } from './app-device-management-view.component';

describe('AppDeviceManagementViewComponent', () => {
  let component: AppDeviceManagementView;
  let fixture: ComponentFixture<AppDeviceManagementView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDeviceManagementView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDeviceManagementView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
