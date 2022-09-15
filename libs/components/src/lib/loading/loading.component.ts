import { Component, Input } from '@angular/core';

@Component({
  selector: 'ts-loading',
  templateUrl: 'loading.component.html',
  styleUrls: ['loading.component.scss'],
})
export class LoadingComponent {
  @Input() backdrop = true;
}
