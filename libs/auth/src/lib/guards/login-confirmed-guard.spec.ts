import { TestBed } from '@angular/core/testing';

import { LoginConfirmedGuard } from './login-confirmed-guard';

describe('LoginConfirmedGuard', () => {
  let guard: LoginConfirmedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginConfirmedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
