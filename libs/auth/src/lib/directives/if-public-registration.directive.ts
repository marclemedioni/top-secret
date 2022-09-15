import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { Environment } from '@ts/common';

@Directive({
  selector: '[tsIfPublicRegistration]',
})
export class IfPublicRegistrationDirective {
  #embededViewRef: EmbeddedViewRef<any> | undefined;
  #tsIfPublicRegistration?: boolean | '';

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private env: Environment
  ) {
    this.update();
  }

  @Input()
  set tsIfPublicRegistration(value: boolean | '' | undefined) {
    this.#tsIfPublicRegistration = value;
    this.update();
  }

  get tsIfPublicRegistration() {
    return this.#tsIfPublicRegistration ?? true;
  }

  update() {
    if (
      (this.tsIfPublicRegistration && this.env.publicRegistration) ||
      (!this.tsIfPublicRegistration && !this.env.publicRegistration)
    ) {
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
}
