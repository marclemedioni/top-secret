import {
  Directive,
  EmbeddedViewRef,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { LoggedInGQL } from '@ts/graphql';
import { loggedInVar } from '@ts/graphql/client';

@Directive({
  selector: '[tsIfLoggedIn]',
})
export class IfLoggedInDirective implements OnDestroy {
  #subsciption: Subscription;
  #embededViewRef: EmbeddedViewRef<any> | undefined;
  #tsIfLoggedIn?: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private loggedInGQL: LoggedInGQL
  ) {
    this.#subsciption = this.loggedInGQL.watch().valueChanges.subscribe(() => this.update());
  }

  @Input()
  set tsIfLoggedIn(value: boolean) {
    this.#tsIfLoggedIn = value;
    this.update();
  }

  get tsIfLoggedIn() {
    return this.#tsIfLoggedIn ?? true;
  }

  update() {
    const loggedIn = loggedInVar();
    if ((this.tsIfLoggedIn && loggedIn) || (!this.tsIfLoggedIn && !loggedIn)) {
      this.render();
    } else {
      this.clear();
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
