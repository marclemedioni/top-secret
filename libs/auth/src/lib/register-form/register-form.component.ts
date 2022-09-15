import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Environment } from '@ts/common';
import {
  ApiError,
  AuthRegister,
  AuthRegisterGQL,
  AuthRegisterInput,
  AuthSession,
  GqlErrors,
  parseGqlErrors,
} from '@ts/graphql';

import { AuthService } from '../auth.service';
import { emailValidator, passwordValidatorFn, usernameValidator } from '../validators';

interface FormType {
  username: FormControl<AuthRegisterInput['name']>;
  email: FormControl<AuthRegisterInput['email']>;
  phone: FormControl<AuthRegisterInput['phone']>;
  password: FormControl<AuthRegisterInput['password']>;
  passwordConfirm: FormControl<AuthRegisterInput['password']>;
  acceptTerms: FormControl<boolean>;
}

@Component({
  selector: 'ts-register-form',
  templateUrl: 'register-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent implements OnDestroy {
  @ViewChild('usernameInput') usernameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;
  @Output() registered = new EventEmitter<AuthSession>();

  #subs: Subscription[] = [];
  #usernameTaken = false;
  #emailTaken = false;
  loading = false;
  generalError = false;
  hidePassword = true;
  form = new FormGroup<FormType>({
    username: new FormControl('', {
      validators: [Validators.required, usernameValidator(), this.usernameTakenValidator()],
      nonNullable: true,
    }),
    phone: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [Validators.required, emailValidator(), this.emailTakenValidator()],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required, this.passwordValidator()],
      nonNullable: true,
    }),
    passwordConfirm: new FormControl('', {
      validators: [Validators.required, this.passwordConfirmValidator()],
      nonNullable: true,
    }),
    acceptTerms: new FormControl(false, {
      validators: [Validators.requiredTrue],
      nonNullable: true,
    }),
  });

  constructor(
    private auth: AuthService,
    private authRegisterGQL: AuthRegisterGQL,
    public env: Environment
  ) {
    const sub1 = this.username.valueChanges.subscribe(() => {
      this.#usernameTaken = false;
    });
    this.#subs.push(sub1);

    const sub2 = this.email.valueChanges.subscribe(() => {
      this.#emailTaken = false;
    });
    this.#subs.push(sub2);
  }

  get username() {
    return this.form.get('username') as FormType['username'];
  }

  get email() {
    return this.form.get('email') as FormType['email'];
  }

  get phone() {
    return this.form.get('phone') as FormType['phone'];
  }

  get password() {
    return this.form.get('password') as FormType['password'];
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm') as FormType['passwordConfirm'];
  }

  get acceptTerms() {
    return this.form.get('acceptTerms') as FormType['acceptTerms'];
  }

  usernameTakenValidator(): ValidatorFn {
    return () => {
      if (this.#usernameTaken) return { usernameTaken: true };
      return null;
    };
  }

  emailTakenValidator(): ValidatorFn {
    return () => {
      if (this.#emailTaken) return { emailTaken: true };
      return null;
    };
  }

  passwordValidator(): ValidatorFn {
    return control => {
      if (this.form) {
        this.passwordConfirm.updateValueAndValidity();
        return passwordValidatorFn(control);
      }
      return null;
    };
  }

  passwordConfirmValidator(): ValidatorFn {
    return control => {
      if (this.form) {
        const notMatching = control.value && this.password.value !== control.value;
        return notMatching ? { notMatching: true } : null;
      }
      return null;
    };
  }

  onSubmit() {
    if (!this.loading) {
      this.loading = true;
      this.generalError = false;

      this.authRegisterGQL
        .mutate(
          {
            data: {
              name: this.username.value.trim(),
              email: this.email.value.trim(),
              phone: this.phone.value.trim(),
              password: this.password.value,
            },
          },
          { fetchPolicy: 'no-cache' }
        )
        .pipe(catchError(parseGqlErrors))
        .subscribe({
          next: ({ data }) => {
            this.loading = false;
            this.registered.emit((<AuthRegister>data).authRegister);
          },

          error: (errors: GqlErrors<ApiError.AuthRegister>) => {
            this.loading = false;
            this.form.enable();

            this.generalError = true;

            if (errors.find(e => e === 'EMAIL_TAKEN')) {
              this.generalError = false;
              this.#emailTaken = true;
              this.email.updateValueAndValidity();
              this.emailInput.nativeElement.select();
            }

            if (errors.find(e => e === 'USERNAME_TAKEN')) {
              this.generalError = false;
              this.#usernameTaken = true;
              this.username.updateValueAndValidity();
              this.usernameInput.nativeElement.select();
            }
          },
        });

      this.form.disable();
    }
  }

  ngOnDestroy() {
    this.#subs.forEach(s => s.unsubscribe());
  }
}
