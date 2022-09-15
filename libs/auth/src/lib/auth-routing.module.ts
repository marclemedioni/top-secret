import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicRegistrationGuard } from './guards';
import { LoginPageGuard } from './guards/login-page.guard';
import { LoginConfirmedComponent } from './login-confirmed/login-confirmed.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PasswordResetConfirmationPageComponent } from './password-reset-confirmation-page/password-reset-confirmation-page.component';
import { PasswordResetRequestPageComponent } from './password-reset-request-page/password-reset-request-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [LoginPageGuard],
  },
  {
    path: 'login-confirmed',
    component: LoginConfirmedComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    canActivate: [PublicRegistrationGuard],
  },
  { path: 'password-reset-request', component: PasswordResetRequestPageComponent },
  {
    path: 'password-reset-confirmation',
    component: PasswordResetConfirmationPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
