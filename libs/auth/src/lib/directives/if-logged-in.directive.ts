import {
  Directive,
  EmbeddedViewRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[tsIfLoggedIn]',
})
export class IfLoggedInDirective {
  #embededViewRef: EmbeddedViewRef<any> | undefined;
  #tsIfLoggedIn?: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {

  }

  @Input()
  set tsIfLoggedIn(value: boolean) {
    this.#tsIfLoggedIn = value;
    this.update();
  }

  get ifLoggedIn() {
    return this.#tsIfLoggedIn ?? true;
  }

  update() {
    //TODO implement logic
    const loggedIn = true;
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
}
