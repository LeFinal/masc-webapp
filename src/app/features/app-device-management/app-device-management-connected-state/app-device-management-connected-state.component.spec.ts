import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeviceManagementConnectedStateComponent } from './app-device-management-connected-state.component';

describe('AppDeviceManagementConnectedStateComponent', () => {
  let component: AppDeviceManagementConnectedStateComponent;
  let fixture: ComponentFixture<AppDeviceManagementConnectedStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDeviceManagementConnectedStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDeviceManagementConnectedStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
