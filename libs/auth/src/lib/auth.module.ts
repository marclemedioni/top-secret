import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IfLoggedInDirective } from './directives/if-logged-in.directive';
import { LoginLinkComponent } from './login-link/login-link.component';
import { LoginPageGuardComponent } from './login-page-guard/login-page-guard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PasswordResetConfirmationPageComponent } from './password-reset-confirmation-page/password-reset-confirmation-page.component';
import { PasswordResetRequestPageComponent } from './password-reset-request-page/password-reset-request-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LoginPageComponent,
    LoginPageGuardComponent,
    PasswordResetConfirmationPageComponent,
    PasswordResetRequestPageComponent,
    RegisterPageComponent,
    IfLoggedInDirective,
    LoginLinkComponent,
  ],
  exports: [
    IfLoggedInDirective,
    LoginLinkComponent
  ],
})
export class AuthModule {}
