import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// TODO
//import { Environment } from '@top-secret/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
  ) { }

  logout() {
    this.clearSession();
    this.router.navigateByUrl('/login');
  }

  private clearSession() {
    // Todo implement
  }
}
