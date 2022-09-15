import {
  Directive,
  EmbeddedViewRef,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { Role } from '@ts/api-interfaces';
import { UserRolesGQL } from '@ts/graphql';

import { AuthService } from '../auth.service';

@Directive({
  selector: '[tsRoles]',
})
export class RolesDirective implements OnDestroy {
  #subsciption: Subscription;
  #tsRoles?: string | string[];
  #embededViewRef: EmbeddedViewRef<any> | undefined;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auth: AuthService,
    private userRolesGQL: UserRolesGQL
  ) {
    this.#subsciption = this.userRolesGQL.watch().valueChanges.subscribe(() => this.update());
  }

  @Input()
  set tsRoles(roles: keyof typeof Role | Array<keyof typeof Role>) {
    this.#tsRoles = roles;
    this.update();
  }

  update() {
    if (this.#tsRoles === undefined || this.#tsRoles === null) {
      this.render();
    } else {
      if (this.auth.userHasRole(this.#tsRoles)) {
        this.render();
      } else {
        this.clear();
      }
    }
  }

  render() {
    if (!this.#embededViewRef)
      this.#embededViewRef = this.viewContainer.createEmbeddedView(this.templateRef);
  }

  clear() {
    this.viewContainer.clear();
    this.#embededViewRef = undefined;
  }

  ngOnDestroy() {
    this.#subsciption.unsubscribe();
  }
}
