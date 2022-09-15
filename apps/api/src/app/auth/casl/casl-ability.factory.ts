import { Ability as CaslAbility, AbilityBuilder, AbilityClass } from '@casl/ability';
import { PrismaAbility } from '@casl/prisma';
import { Injectable } from '@nestjs/common';

import { Action } from '@ts/api-interfaces';

import { RequestUser } from '../models/request-user.model';
import { Ability } from './generated';

const APP_ABILITY = PrismaAbility as AbilityClass<Ability>;

/** @description A union of subjects to extend the ability beyond just Prisma models */
type ExtendedSubjects = 'Sample';

@Injectable()
export class CaslAbilityFactory {
  async createAbility(user: RequestUser) {
    const { can, cannot, build } = new AbilityBuilder(APP_ABILITY);

    if (user.roles.includes('Super')) {
      can('manage', 'all'); // read-write access to everything
    } else {
      // Customize user permissions here.  Use `as any` for extended subjects
      // can('read', 'User', { id: user.id });
    }

    return build() as Ability & CaslAbility<[Action, ExtendedSubjects]>;
  }
}
