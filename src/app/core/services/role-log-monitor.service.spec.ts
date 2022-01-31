import { TestBed } from '@angular/core/testing';

import { RoleLogMonitorService } from './role-log-monitor.service';

describe('RoleLogMonitorService', () => {
  let service: RoleLogMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleLogMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
