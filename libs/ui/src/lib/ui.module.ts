import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsComponent } from './chats/chats.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ChatsComponent],
  exports: [ChatsComponent],
})
export class UiModule {}
