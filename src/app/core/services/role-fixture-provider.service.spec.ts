import { TestBed } from '@angular/core/testing';

import { RoleFixtureProviderService } from './role-fixture-provider.service';

describe('RoleFixtureProviderService', () => {
  let service: RoleFixtureProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleFixtureProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
