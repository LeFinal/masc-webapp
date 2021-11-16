import { TestBed } from '@angular/core/testing';

import { RoleFixtureManagerService } from './role-fixture-manager.service';

describe('RoleFixtureManagerServiceService', () => {
  let service: RoleFixtureManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleFixtureManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
