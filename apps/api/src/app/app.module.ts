import { Module } from '@nestjs/common';

import { ChatsController, ChatsService } from '@top-secret/chats'
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, ChatsController],
  providers: [AppService, ChatsService],
})
export class AppModule {}
