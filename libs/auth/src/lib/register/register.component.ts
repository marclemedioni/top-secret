import { Component, EventEmitter, Output } from '@angular/core';

import { AuthSession } from '@ts/graphql';

@Component({
  selector: 'ts-register',
  templateUrl: 'register.component.html',
})
export class RegisterComponent {
  @Output() registered = new EventEmitter<AuthSession>();
}
