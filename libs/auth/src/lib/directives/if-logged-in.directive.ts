import { Directive } from '@angular/core';

@Directive({
  selector: '[topSecretIfLoggedIn]'
})
export class IfLoggedInDirective {

  constructor() { }

}
