import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

import { ChatsComponent } from './chats/chats.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [ChatsComponent],
  exports: [ChatsComponent],
})
export class UiModule {}
