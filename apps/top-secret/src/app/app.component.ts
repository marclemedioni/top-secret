import { Component } from '@angular/core';

import { AuthService } from '@top-secret/auth';

@Component({
  selector: 'ts-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(public auth: AuthService) {}
}
