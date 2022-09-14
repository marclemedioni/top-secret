import { Test } from '@nestjs/testing';
import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';

describe('ChatsController', () => {
  let controller: ChatsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ChatsService],
      controllers: [ChatsController],
    }).compile();

    controller = module.get(ChatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
