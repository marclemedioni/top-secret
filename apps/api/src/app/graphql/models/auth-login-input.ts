import { IsBoolean, Length } from 'class-validator';

import { ApiConstants } from '@ts/api-interfaces';

export class AuthLoginInput {
  @Length(ApiConstants.USERNAME_MIN_LENGTH, ApiConstants.USERNAME_MAX_LENGTH)
  readonly name: string;

  @Length(1, ApiConstants.PASSWORD_MAX_LENGTH)
  readonly password: string;

  @IsBoolean()
  readonly rememberMe: boolean;
}
