import { TestBed } from '@angular/core/testing';

import { PublicRegistrationGuard } from './public-registration.guard';

describe('PublicRegistrationGuard', () => {
  let guard: PublicRegistrationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PublicRegistrationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
