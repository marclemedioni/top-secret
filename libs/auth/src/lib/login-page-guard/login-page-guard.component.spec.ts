import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageGuardComponent } from './login-page-guard.component';

describe('LoginPageGuardComponent', () => {
  let component: LoginPageGuardComponent;
  let fixture: ComponentFixture<LoginPageGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPageGuardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
