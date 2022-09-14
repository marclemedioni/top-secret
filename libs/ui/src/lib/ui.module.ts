import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ChatsComponent } from './chats/chats.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [ChatsComponent, LoginComponent, RegisterComponent],
  exports: [ChatsComponent],
})
export class UiModule {}
