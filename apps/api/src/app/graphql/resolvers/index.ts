import { mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

import PALJS_TYPE_DEFS from '../paljs/typeDefs';
import { typeDefs as GlobalTypeDefs } from '../global-schema.gql';
import { ChatResolver, typeDefs as ChatTypeDefs } from './Chat';
import { MessageResolver, typeDefs as MessageTypeDefs } from './Message';
import { UserResolver, typeDefs as UserTypeDefs } from './User';

export const NEST_RESOLVERS = [ChatResolver, MessageResolver, UserResolver];

export const NEST_TYPE_DEFS = [
  ChatTypeDefs,
  MessageTypeDefs,
  UserTypeDefs,
].filter((x) => x);

export const ALL_TYPE_DEFS = mergeTypeDefs([
  GlobalTypeDefs,
  PALJS_TYPE_DEFS,
  ...NEST_TYPE_DEFS,
]);
export const GRAPHQL_SCHEMA = makeExecutableSchema({ typeDefs: ALL_TYPE_DEFS });
