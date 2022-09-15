import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthSession } from '@ts/graphql';

import { AuthService } from '../auth.service';

@Component({
  selector: 'ts-register-page',
  templateUrl: 'register-page.component.html',
})
export class RegisterPageComponent {
  constructor(private router: Router, private auth: AuthService) {}

  registered(authSession: AuthSession) {
    this.auth.setSession(authSession);
    this.router.navigateByUrl('/');
  }
}
