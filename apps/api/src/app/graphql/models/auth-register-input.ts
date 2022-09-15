import { IsEmail, IsPhoneNumber, Length } from 'class-validator';

import { ApiConstants } from '@ts/api-interfaces';

export class AuthRegisterInput {
  @Length(ApiConstants.USERNAME_MIN_LENGTH, ApiConstants.USERNAME_MAX_LENGTH)
  readonly name: string;

  @IsPhoneNumber()
  readonly phone: string;

  @IsEmail()
  @Length(1, 254)
  readonly email: string;

  @Length(ApiConstants.PASSWORD_MIN_LENGTH, ApiConstants.PASSWORD_MAX_LENGTH)
  readonly password: string;
}
