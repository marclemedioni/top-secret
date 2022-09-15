import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginConfirmedComponent } from './login-confirmed.component';

describe('LoginConfirmedComponent', () => {
  let component: LoginConfirmedComponent;
  let fixture: ComponentFixture<LoginConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginConfirmedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
