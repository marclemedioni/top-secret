import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatsController, ChatsService } from '@top-secret/chats'

@Module({
  imports: [],
  controllers: [AppController, ChatsController],
  providers: [AppService, ChatsService],
})
export class AppModule {}
