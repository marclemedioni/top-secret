import { PrismaAbility, Subjects } from '@casl/prisma';
import {
  Chat,
  Message,
  User,
} from '@prisma/client';

export type Ability = PrismaAbility<
  [
    string,
    Subjects<{
      Chat: Chat;
      Message: Message;
      User: User;
    }>
  ]
>;
