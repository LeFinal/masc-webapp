import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeviceManagementViewComponent } from './app-device-management-view.component';

describe('AppDeviceManagementViewComponent', () => {
  let component: AppDeviceManagementViewComponent;
  let fixture: ComponentFixture<AppDeviceManagementViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDeviceManagementViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDeviceManagementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
