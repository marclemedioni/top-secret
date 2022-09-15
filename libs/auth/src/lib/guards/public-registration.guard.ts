import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Environment } from '@ts/common';

@Injectable({
  providedIn: 'root',
})
export class PublicRegistrationGuard implements CanActivate {
  constructor(private router: Router, private env: Environment) {}

  canActivate() {
    return this.env.publicRegistration ? true : this.router.parseUrl('/');
  }
}
