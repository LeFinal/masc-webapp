import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeviceManagementEditDeviceModal } from './app-device-management-edit-device-modal.component';

describe('AppDeviceManagementEditDeviceModalComponent', () => {
  let component: AppDeviceManagementEditDeviceModal;
  let fixture: ComponentFixture<AppDeviceManagementEditDeviceModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDeviceManagementEditDeviceModal ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDeviceManagementEditDeviceModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
