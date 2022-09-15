import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Environment } from '@ts/common';

@Component({
  selector: 'ts-login-page',
  templateUrl: 'login-page.component.html'
})
export class LoginPageComponent {
  constructor(private router: Router, private env: Environment) {}

  onLoggedIn() {
    this.router.navigateByUrl(this.env.url.loginRedirect);
  }
}
