import { Test } from '@nestjs/testing';
import { ChatsService } from './chats.service';

describe('ChatsService', () => {
  let service: ChatsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ChatsService],
    }).compile();

    service = module.get(ChatsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
