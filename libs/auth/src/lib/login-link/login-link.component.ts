import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
  selector: 'ts-login-link',
  templateUrl: 'login-link.component.html',
})
export class LoginLinkComponent {
  @Input() displayLogout = true;
  displayLogin$: Observable<boolean>;

  constructor(public auth: AuthService, private router: Router) {
    this.displayLogin$ = this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        const url = event.url.split('?')[0];
        if (url === '/login') return false;
        return true;
      })
    );
  }
}
