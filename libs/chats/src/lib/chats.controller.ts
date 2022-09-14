import { Controller, Get } from '@nestjs/common'
import { ChatsService } from './chats.service'

@Controller('Chats')
export class ChatsController {
  constructor(private ChatsService: ChatsService) {}

  @Get()
  public getChats() {
    return this.ChatsService.getChats()
  }
}