import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AbilityModule } from '@casl/angular';

import { ComponentsModule } from '@ts/components';

import { AuthRoutingModule } from './auth-routing.module';
import {
  IfLoggedInDirective,
  IfPublicRegistrationDirective,
  NotRolesDirective,
  RolesDirective,
} from './directives';
import { LoginConfirmedComponent } from './login-confirmed/login-confirmed.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginLinkComponent } from './login-link/login-link.component';
import { LoginPageComponent } from './login-page/login-page.component';
//import { LoginComponent } from './login/login.component';
//import { LogoComponent } from './logo/logo.component';
//import { PasswordChangeFormComponent } from './password-change-form/password-change-form.component';
//import { PasswordChangeComponent } from './password-change/password-change.component';
//import { PasswordResetConfirmationFormComponent } from './password-reset-confirmation-form/password-reset-confirmation-form.component';
import { PasswordResetConfirmationPageComponent } from './password-reset-confirmation-page/password-reset-confirmation-page.component';
//import { PasswordResetConfirmationComponent } from './password-reset-confirmation/password-reset-confirmation.component';
//import { PasswordResetRequestFormComponent } from './password-reset-request-form/password-reset-request-form.component';
//import { PasswordResetRequestPageComponent } from './password-reset-request-page-password-reset-request-page.component';
//import { PasswordResetRequestComponent } from './password-reset-request/password-reset-request.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    AuthRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    IfLoggedInDirective,
    IfPublicRegistrationDirective,
    NotRolesDirective,
    RolesDirective,

    //LoginComponent,
    LoginConfirmedComponent,
    LoginFormComponent,
    LoginLinkComponent,
    LoginPageComponent,
    //LogoComponent,
    //PasswordChangeComponent,
    //PasswordChangeFormComponent,
    //PasswordResetConfirmationComponent,
    //PasswordResetConfirmationFormComponent,
    PasswordResetConfirmationPageComponent,
    //PasswordResetRequestComponent,
    //PasswordResetRequestFormComponent,
    //PasswordResetRequestPageComponent,
    RegisterComponent,
    RegisterFormComponent,
    RegisterPageComponent,
  ],
  exports: [
    AbilityModule,
    IfLoggedInDirective,
    IfPublicRegistrationDirective,
    NotRolesDirective,
    RolesDirective,

    //LoginComponent,
    LoginConfirmedComponent,
    LoginFormComponent,
    LoginLinkComponent,
    //LogoComponent,
    //PasswordChangeComponent,
    //PasswordChangeFormComponent,
    //PasswordResetConfirmationComponent,
    //PasswordResetConfirmationFormComponent,
    //PasswordResetRequestComponent,
    //PasswordResetRequestFormComponent,
    RegisterComponent,
    RegisterFormComponent,
  ],
})
export class AuthModule {}
