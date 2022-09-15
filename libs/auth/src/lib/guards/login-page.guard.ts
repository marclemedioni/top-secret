import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Environment } from '@ts/common';
import { loggedInVar } from '@ts/graphql/client';

@Injectable({
  providedIn: 'root',
})
export class LoginPageGuard implements CanActivate {
  constructor(private router: Router, private env: Environment) {}

  canActivate() {
    return loggedInVar() ? this.router.parseUrl(this.env.url.loginRedirect) : true;
  }
}
