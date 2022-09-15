import { PrismaAbility, Subjects } from '@casl/prisma';
import {
  User,
} from '@prisma/client';

export type Ability = PrismaAbility<
  [
    string,
    Subjects<{
      User: User;
    }>
  ]
>;
