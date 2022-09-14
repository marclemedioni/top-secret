import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let service: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersController],
    }).compile();

    service = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
