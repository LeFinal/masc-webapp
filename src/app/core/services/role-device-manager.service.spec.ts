import { TestBed } from '@angular/core/testing';

import { RoleDeviceManagerService } from './role-device-manager.service';

describe('RoleDeviceManagerService', () => {
  let service: RoleDeviceManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleDeviceManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
