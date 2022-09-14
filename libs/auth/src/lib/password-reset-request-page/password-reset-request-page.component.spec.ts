import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetRequestPageComponent } from './password-reset-request-page.component';

describe('PasswordResetRequestPageComponent', () => {
  let component: PasswordResetRequestPageComponent;
  let fixture: ComponentFixture<PasswordResetRequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordResetRequestPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordResetRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
