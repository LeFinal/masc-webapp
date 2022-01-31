import { TestBed } from '@angular/core/testing';

import { RoleLightSwitchManagerService } from './role-light-switch-manager.service';

describe('RoleLightSwitchManagerService', () => {
  let service: RoleLightSwitchManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleLightSwitchManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
