import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetConfirmationPageComponent } from './password-reset-confirmation-page.component';

describe('PasswordResetConfirmationPageComponent', () => {
  let component: PasswordResetConfirmationPageComponent;
  let fixture: ComponentFixture<PasswordResetConfirmationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordResetConfirmationPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordResetConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
