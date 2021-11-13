import { TestBed } from '@angular/core/testing';
import { TokenMockService } from './token-mock.service';

describe('TokenMockService', () => {
  let service: TokenMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
