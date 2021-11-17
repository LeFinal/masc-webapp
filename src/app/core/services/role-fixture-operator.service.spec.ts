import { TestBed } from '@angular/core/testing';

import { RoleFixtureOperatorService } from './role-fixture-operator.service';

describe('RoleFixtureOperatorService', () => {
  let service: RoleFixtureOperatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleFixtureOperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
