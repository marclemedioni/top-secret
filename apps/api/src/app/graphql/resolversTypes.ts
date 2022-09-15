import * as Client from '@prisma/client';

import { Context } from './context';

import { GraphQLResolveInfo } from 'graphql';

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<R>;

export interface Resolvers {
  [key: string]: { [key: string]: Resolver<any, any, any> };
  User?: User;
  Chat?: Chat;
  Message?: Message;
  Query?: Query;
  Mutation?: Mutation;
  AggregateUser?: AggregateUser;
  UserGroupByOutputType?: UserGroupByOutputType;
  AggregateChat?: AggregateChat;
  ChatGroupByOutputType?: ChatGroupByOutputType;
  AggregateMessage?: AggregateMessage;
  MessageGroupByOutputType?: MessageGroupByOutputType;
  AffectedRowsOutput?: AffectedRowsOutput;
  UserCountOutputType?: UserCountOutputType;
  UserCountAggregateOutputType?: UserCountAggregateOutputType;
  UserAvgAggregateOutputType?: UserAvgAggregateOutputType;
  UserSumAggregateOutputType?: UserSumAggregateOutputType;
  UserMinAggregateOutputType?: UserMinAggregateOutputType;
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType;
  ChatCountOutputType?: ChatCountOutputType;
  ChatCountAggregateOutputType?: ChatCountAggregateOutputType;
  ChatAvgAggregateOutputType?: ChatAvgAggregateOutputType;
  ChatSumAggregateOutputType?: ChatSumAggregateOutputType;
  ChatMinAggregateOutputType?: ChatMinAggregateOutputType;
  ChatMaxAggregateOutputType?: ChatMaxAggregateOutputType;
  MessageCountAggregateOutputType?: MessageCountAggregateOutputType;
  MessageAvgAggregateOutputType?: MessageAvgAggregateOutputType;
  MessageSumAggregateOutputType?: MessageSumAggregateOutputType;
  MessageMinAggregateOutputType?: MessageMinAggregateOutputType;
  MessageMaxAggregateOutputType?: MessageMaxAggregateOutputType;
}

export interface User {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.User, {}, number>;
  name?: Resolver<Client.User, {}, string | null>;
  email?: Resolver<Client.User, {}, string>;
  password?: Resolver<Client.User, {}, string | null>;
  phone?: Resolver<Client.User, {}, string | null>;
  isAdmin?: Resolver<Client.User, {}, boolean | null>;
  createdAt?: Resolver<Client.User, {}, Date>;
  updatedAt?: Resolver<Client.User, {}, Date>;
  roles?: Resolver<Client.User, {}, string[] | null>;
  Chat?: Resolver<Client.User, UserChatArgs, Client.Chat[] | null>;
  messages?: Resolver<Client.User, UserMessagesArgs, Client.Chat[] | null>;
  _count?: Resolver<Client.User, {}, Client.Prisma.UserCountOutputType>;
}

export interface Chat {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Chat, {}, number>;
  receiverId?: Resolver<Client.Chat, {}, number>;
  receiver?: Resolver<Client.Chat, {}, Client.User>;
  sender?: Resolver<Client.Chat, {}, Client.User>;
  senderId?: Resolver<Client.Chat, {}, number>;
  title?: Resolver<Client.Chat, {}, string>;
  createdAt?: Resolver<Client.Chat, {}, Date>;
  updatedAt?: Resolver<Client.Chat, {}, Date>;
  messages?: Resolver<Client.Chat, ChatMessagesArgs, Client.Message[] | null>;
  _count?: Resolver<Client.Chat, {}, Client.Prisma.ChatCountOutputType>;
}

export interface Message {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Message, {}, number>;
  chatId?: Resolver<Client.Message, {}, number>;
  chat?: Resolver<Client.Message, {}, Client.Chat>;
  content?: Resolver<Client.Message, {}, string>;
  isRead?: Resolver<Client.Message, {}, boolean>;
  createdAt?: Resolver<Client.Message, {}, Date>;
  updatedAt?: Resolver<Client.Message, {}, Date>;
  isRemoved?: Resolver<Client.Message, {}, boolean>;
}

export interface Query {
  [key: string]: Resolver<any, any, any>;
  findFirstUser?: Resolver<{}, FindFirstUserArgs, Client.User | null>;
  findManyUser?: Resolver<{}, FindManyUserArgs, Client.User[]>;
  findManyUserCount?: Resolver<{}, FindManyUserArgs, number>;
  aggregateUser?: Resolver<
    {},
    AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<AggregateUserArgs>
  >;
  groupByUser?: Resolver<
    {},
    GroupByUserArgs,
    Client.Prisma.UserGroupByOutputType[]
  >;
  findUniqueUser?: Resolver<{}, FindUniqueUserArgs, Client.User | null>;
  findFirstChat?: Resolver<{}, FindFirstChatArgs, Client.Chat | null>;
  findManyChat?: Resolver<{}, FindManyChatArgs, Client.Chat[]>;
  findManyChatCount?: Resolver<{}, FindManyChatArgs, number>;
  aggregateChat?: Resolver<
    {},
    AggregateChatArgs,
    Client.Prisma.GetChatAggregateType<AggregateChatArgs>
  >;
  groupByChat?: Resolver<
    {},
    GroupByChatArgs,
    Client.Prisma.ChatGroupByOutputType[]
  >;
  findUniqueChat?: Resolver<{}, FindUniqueChatArgs, Client.Chat | null>;
  findFirstMessage?: Resolver<{}, FindFirstMessageArgs, Client.Message | null>;
  findManyMessage?: Resolver<{}, FindManyMessageArgs, Client.Message[]>;
  findManyMessageCount?: Resolver<{}, FindManyMessageArgs, number>;
  aggregateMessage?: Resolver<
    {},
    AggregateMessageArgs,
    Client.Prisma.GetMessageAggregateType<AggregateMessageArgs>
  >;
  groupByMessage?: Resolver<
    {},
    GroupByMessageArgs,
    Client.Prisma.MessageGroupByOutputType[]
  >;
  findUniqueMessage?: Resolver<
    {},
    FindUniqueMessageArgs,
    Client.Message | null
  >;
}

export interface Mutation {
  [key: string]: Resolver<any, any, any>;
  createOneUser?: Resolver<{}, CreateOneUserArgs, Client.User>;
  upsertOneUser?: Resolver<{}, UpsertOneUserArgs, Client.User>;
  createManyUser?: Resolver<{}, CreateManyUserArgs, Client.Prisma.BatchPayload>;
  deleteOneUser?: Resolver<{}, DeleteOneUserArgs, Client.User | null>;
  updateOneUser?: Resolver<{}, UpdateOneUserArgs, Client.User | null>;
  updateManyUser?: Resolver<{}, UpdateManyUserArgs, Client.Prisma.BatchPayload>;
  deleteManyUser?: Resolver<{}, DeleteManyUserArgs, Client.Prisma.BatchPayload>;
  createOneChat?: Resolver<{}, CreateOneChatArgs, Client.Chat>;
  upsertOneChat?: Resolver<{}, UpsertOneChatArgs, Client.Chat>;
  createManyChat?: Resolver<{}, CreateManyChatArgs, Client.Prisma.BatchPayload>;
  deleteOneChat?: Resolver<{}, DeleteOneChatArgs, Client.Chat | null>;
  updateOneChat?: Resolver<{}, UpdateOneChatArgs, Client.Chat | null>;
  updateManyChat?: Resolver<{}, UpdateManyChatArgs, Client.Prisma.BatchPayload>;
  deleteManyChat?: Resolver<{}, DeleteManyChatArgs, Client.Prisma.BatchPayload>;
  createOneMessage?: Resolver<{}, CreateOneMessageArgs, Client.Message>;
  upsertOneMessage?: Resolver<{}, UpsertOneMessageArgs, Client.Message>;
  createManyMessage?: Resolver<
    {},
    CreateManyMessageArgs,
    Client.Prisma.BatchPayload
  >;
  deleteOneMessage?: Resolver<{}, DeleteOneMessageArgs, Client.Message | null>;
  updateOneMessage?: Resolver<{}, UpdateOneMessageArgs, Client.Message | null>;
  updateManyMessage?: Resolver<
    {},
    UpdateManyMessageArgs,
    Client.Prisma.BatchPayload
  >;
  deleteManyMessage?: Resolver<
    {},
    DeleteManyMessageArgs,
    Client.Prisma.BatchPayload
  >;
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>;
  queryRaw?: Resolver<{}, QueryRawArgs, any>;
}

export interface AggregateUser {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >;
}

export interface UserGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, number>;
  name?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  email?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>;
  password?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  phone?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  isAdmin?: Resolver<Client.Prisma.UserGroupByOutputType, {}, boolean | null>;
  createdAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>;
  updatedAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>;
  roles?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string[] | null>;
  _count?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >;
}

export interface AggregateChat {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateChat,
    {},
    Client.Prisma.ChatCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateChat,
    {},
    Client.Prisma.ChatAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateChat,
    {},
    Client.Prisma.ChatSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateChat,
    {},
    Client.Prisma.ChatMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateChat,
    {},
    Client.Prisma.ChatMaxAggregateOutputType | null
  >;
}

export interface ChatGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ChatGroupByOutputType, {}, number>;
  receiverId?: Resolver<Client.Prisma.ChatGroupByOutputType, {}, number>;
  senderId?: Resolver<Client.Prisma.ChatGroupByOutputType, {}, number>;
  title?: Resolver<Client.Prisma.ChatGroupByOutputType, {}, string>;
  createdAt?: Resolver<Client.Prisma.ChatGroupByOutputType, {}, Date>;
  updatedAt?: Resolver<Client.Prisma.ChatGroupByOutputType, {}, Date>;
  _count?: Resolver<
    Client.Prisma.ChatGroupByOutputType,
    {},
    Client.Prisma.ChatCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.ChatGroupByOutputType,
    {},
    Client.Prisma.ChatAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.ChatGroupByOutputType,
    {},
    Client.Prisma.ChatSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.ChatGroupByOutputType,
    {},
    Client.Prisma.ChatMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.ChatGroupByOutputType,
    {},
    Client.Prisma.ChatMaxAggregateOutputType | null
  >;
}

export interface AggregateMessage {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateMessage,
    {},
    Client.Prisma.MessageCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateMessage,
    {},
    Client.Prisma.MessageAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateMessage,
    {},
    Client.Prisma.MessageSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateMessage,
    {},
    Client.Prisma.MessageMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateMessage,
    {},
    Client.Prisma.MessageMaxAggregateOutputType | null
  >;
}

export interface MessageGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.MessageGroupByOutputType, {}, number>;
  chatId?: Resolver<Client.Prisma.MessageGroupByOutputType, {}, number>;
  content?: Resolver<Client.Prisma.MessageGroupByOutputType, {}, string>;
  isRead?: Resolver<Client.Prisma.MessageGroupByOutputType, {}, boolean>;
  createdAt?: Resolver<Client.Prisma.MessageGroupByOutputType, {}, Date>;
  updatedAt?: Resolver<Client.Prisma.MessageGroupByOutputType, {}, Date>;
  isRemoved?: Resolver<Client.Prisma.MessageGroupByOutputType, {}, boolean>;
  _count?: Resolver<
    Client.Prisma.MessageGroupByOutputType,
    {},
    Client.Prisma.MessageCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.MessageGroupByOutputType,
    {},
    Client.Prisma.MessageAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.MessageGroupByOutputType,
    {},
    Client.Prisma.MessageSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.MessageGroupByOutputType,
    {},
    Client.Prisma.MessageMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.MessageGroupByOutputType,
    {},
    Client.Prisma.MessageMaxAggregateOutputType | null
  >;
}

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>;
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>;
}

export interface UserCountOutputType {
  [key: string]: Resolver<any, any, any>;
  Chat?: Resolver<Client.Prisma.UserCountOutputType, {}, number>;
  messages?: Resolver<Client.Prisma.UserCountOutputType, {}, number>;
}

export interface UserCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  name?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  email?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  password?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  phone?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  isAdmin?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  createdAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  updatedAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  roles?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
}

export interface UserAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserAvgAggregateOutputType, {}, number | null>;
}

export interface UserSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserSumAggregateOutputType, {}, number | null>;
}

export interface UserMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, number | null>;
  name?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  email?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  password?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >;
  phone?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  isAdmin?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    boolean | null
  >;
  createdAt?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >;
  updatedAt?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >;
}

export interface UserMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, number | null>;
  name?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  email?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  password?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >;
  phone?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  isAdmin?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    boolean | null
  >;
  createdAt?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >;
  updatedAt?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >;
}

export interface ChatCountOutputType {
  [key: string]: Resolver<any, any, any>;
  messages?: Resolver<Client.Prisma.ChatCountOutputType, {}, number>;
}

export interface ChatCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ChatCountAggregateOutputType, {}, number>;
  receiverId?: Resolver<Client.Prisma.ChatCountAggregateOutputType, {}, number>;
  senderId?: Resolver<Client.Prisma.ChatCountAggregateOutputType, {}, number>;
  title?: Resolver<Client.Prisma.ChatCountAggregateOutputType, {}, number>;
  createdAt?: Resolver<Client.Prisma.ChatCountAggregateOutputType, {}, number>;
  updatedAt?: Resolver<Client.Prisma.ChatCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.ChatCountAggregateOutputType, {}, number>;
}

export interface ChatAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ChatAvgAggregateOutputType, {}, number | null>;
  receiverId?: Resolver<
    Client.Prisma.ChatAvgAggregateOutputType,
    {},
    number | null
  >;
  senderId?: Resolver<
    Client.Prisma.ChatAvgAggregateOutputType,
    {},
    number | null
  >;
}

export interface ChatSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ChatSumAggregateOutputType, {}, number | null>;
  receiverId?: Resolver<
    Client.Prisma.ChatSumAggregateOutputType,
    {},
    number | null
  >;
  senderId?: Resolver<
    Client.Prisma.ChatSumAggregateOutputType,
    {},
    number | null
  >;
}

export interface ChatMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ChatMinAggregateOutputType, {}, number | null>;
  receiverId?: Resolver<
    Client.Prisma.ChatMinAggregateOutputType,
    {},
    number | null
  >;
  senderId?: Resolver<
    Client.Prisma.ChatMinAggregateOutputType,
    {},
    number | null
  >;
  title?: Resolver<Client.Prisma.ChatMinAggregateOutputType, {}, string | null>;
  createdAt?: Resolver<
    Client.Prisma.ChatMinAggregateOutputType,
    {},
    Date | null
  >;
  updatedAt?: Resolver<
    Client.Prisma.ChatMinAggregateOutputType,
    {},
    Date | null
  >;
}

export interface ChatMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ChatMaxAggregateOutputType, {}, number | null>;
  receiverId?: Resolver<
    Client.Prisma.ChatMaxAggregateOutputType,
    {},
    number | null
  >;
  senderId?: Resolver<
    Client.Prisma.ChatMaxAggregateOutputType,
    {},
    number | null
  >;
  title?: Resolver<Client.Prisma.ChatMaxAggregateOutputType, {}, string | null>;
  createdAt?: Resolver<
    Client.Prisma.ChatMaxAggregateOutputType,
    {},
    Date | null
  >;
  updatedAt?: Resolver<
    Client.Prisma.ChatMaxAggregateOutputType,
    {},
    Date | null
  >;
}

export interface MessageCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.MessageCountAggregateOutputType, {}, number>;
  chatId?: Resolver<Client.Prisma.MessageCountAggregateOutputType, {}, number>;
  content?: Resolver<Client.Prisma.MessageCountAggregateOutputType, {}, number>;
  isRead?: Resolver<Client.Prisma.MessageCountAggregateOutputType, {}, number>;
  createdAt?: Resolver<
    Client.Prisma.MessageCountAggregateOutputType,
    {},
    number
  >;
  updatedAt?: Resolver<
    Client.Prisma.MessageCountAggregateOutputType,
    {},
    number
  >;
  isRemoved?: Resolver<
    Client.Prisma.MessageCountAggregateOutputType,
    {},
    number
  >;
  _all?: Resolver<Client.Prisma.MessageCountAggregateOutputType, {}, number>;
}

export interface MessageAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.MessageAvgAggregateOutputType, {}, number | null>;
  chatId?: Resolver<
    Client.Prisma.MessageAvgAggregateOutputType,
    {},
    number | null
  >;
}

export interface MessageSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.MessageSumAggregateOutputType, {}, number | null>;
  chatId?: Resolver<
    Client.Prisma.MessageSumAggregateOutputType,
    {},
    number | null
  >;
}

export interface MessageMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.MessageMinAggregateOutputType, {}, number | null>;
  chatId?: Resolver<
    Client.Prisma.MessageMinAggregateOutputType,
    {},
    number | null
  >;
  content?: Resolver<
    Client.Prisma.MessageMinAggregateOutputType,
    {},
    string | null
  >;
  isRead?: Resolver<
    Client.Prisma.MessageMinAggregateOutputType,
    {},
    boolean | null
  >;
  createdAt?: Resolver<
    Client.Prisma.MessageMinAggregateOutputType,
    {},
    Date | null
  >;
  updatedAt?: Resolver<
    Client.Prisma.MessageMinAggregateOutputType,
    {},
    Date | null
  >;
  isRemoved?: Resolver<
    Client.Prisma.MessageMinAggregateOutputType,
    {},
    boolean | null
  >;
}

export interface MessageMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.MessageMaxAggregateOutputType, {}, number | null>;
  chatId?: Resolver<
    Client.Prisma.MessageMaxAggregateOutputType,
    {},
    number | null
  >;
  content?: Resolver<
    Client.Prisma.MessageMaxAggregateOutputType,
    {},
    string | null
  >;
  isRead?: Resolver<
    Client.Prisma.MessageMaxAggregateOutputType,
    {},
    boolean | null
  >;
  createdAt?: Resolver<
    Client.Prisma.MessageMaxAggregateOutputType,
    {},
    Date | null
  >;
  updatedAt?: Resolver<
    Client.Prisma.MessageMaxAggregateOutputType,
    {},
    Date | null
  >;
  isRemoved?: Resolver<
    Client.Prisma.MessageMaxAggregateOutputType,
    {},
    boolean | null
  >;
}

export interface UserChatArgs {
  where?: ChatWhereInput | null;
  orderBy?: ChatOrderByWithRelationInput[] | null;
  cursor?: ChatWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: ChatScalarFieldEnum[] | null;
}

export interface UserMessagesArgs {
  where?: ChatWhereInput | null;
  orderBy?: ChatOrderByWithRelationInput[] | null;
  cursor?: ChatWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: ChatScalarFieldEnum[] | null;
}

export interface ChatMessagesArgs {
  where?: MessageWhereInput | null;
  orderBy?: MessageOrderByWithRelationInput[] | null;
  cursor?: MessageWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: MessageScalarFieldEnum[] | null;
}

export interface FindFirstUserArgs {
  where?: UserWhereInput | null;
  orderBy?: UserOrderByWithRelationInput[] | null;
  cursor?: UserWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UserScalarFieldEnum[] | null;
}

export interface FindManyUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface AggregateUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.UserCountAggregateInputType;
  _avg?: Client.Prisma.UserAvgAggregateInputType;
  _sum?: Client.Prisma.UserSumAggregateInputType;
  _min?: Client.Prisma.UserMinAggregateInputType;
  _max?: Client.Prisma.UserMaxAggregateInputType;
}

export interface GroupByUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithAggregationInput[];
  by: UserScalarFieldEnum[];
  having?: UserScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface FindUniqueUserArgs {
  where: UserWhereUniqueInput | null;
}

export interface FindFirstChatArgs {
  where?: ChatWhereInput | null;
  orderBy?: ChatOrderByWithRelationInput[] | null;
  cursor?: ChatWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: ChatScalarFieldEnum[] | null;
}

export interface FindManyChatArgs {
  where?: ChatWhereInput;
  orderBy?: ChatOrderByWithRelationInput[];
  cursor?: ChatWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ChatScalarFieldEnum[];
}

export interface AggregateChatArgs {
  where?: ChatWhereInput;
  orderBy?: ChatOrderByWithRelationInput[];
  cursor?: ChatWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.ChatCountAggregateInputType;
  _avg?: Client.Prisma.ChatAvgAggregateInputType;
  _sum?: Client.Prisma.ChatSumAggregateInputType;
  _min?: Client.Prisma.ChatMinAggregateInputType;
  _max?: Client.Prisma.ChatMaxAggregateInputType;
}

export interface GroupByChatArgs {
  where?: ChatWhereInput;
  orderBy?: ChatOrderByWithAggregationInput[];
  by: ChatScalarFieldEnum[];
  having?: ChatScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface FindUniqueChatArgs {
  where: ChatWhereUniqueInput | null;
}

export interface FindFirstMessageArgs {
  where?: MessageWhereInput | null;
  orderBy?: MessageOrderByWithRelationInput[] | null;
  cursor?: MessageWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: MessageScalarFieldEnum[] | null;
}

export interface FindManyMessageArgs {
  where?: MessageWhereInput;
  orderBy?: MessageOrderByWithRelationInput[];
  cursor?: MessageWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: MessageScalarFieldEnum[];
}

export interface AggregateMessageArgs {
  where?: MessageWhereInput;
  orderBy?: MessageOrderByWithRelationInput[];
  cursor?: MessageWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.MessageCountAggregateInputType;
  _avg?: Client.Prisma.MessageAvgAggregateInputType;
  _sum?: Client.Prisma.MessageSumAggregateInputType;
  _min?: Client.Prisma.MessageMinAggregateInputType;
  _max?: Client.Prisma.MessageMaxAggregateInputType;
}

export interface GroupByMessageArgs {
  where?: MessageWhereInput;
  orderBy?: MessageOrderByWithAggregationInput[];
  by: MessageScalarFieldEnum[];
  having?: MessageScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface FindUniqueMessageArgs {
  where: MessageWhereUniqueInput | null;
}

export interface CreateOneUserArgs {
  data: UserCreateInput;
}

export interface UpsertOneUserArgs {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
}

export interface CreateManyUserArgs {
  data: UserCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface DeleteOneUserArgs {
  where: UserWhereUniqueInput | null;
}

export interface UpdateOneUserArgs {
  data: UserUpdateInput | null;
  where: UserWhereUniqueInput | null;
}

export interface UpdateManyUserArgs {
  data: UserUpdateManyMutationInput;
  where?: UserWhereInput;
}

export interface DeleteManyUserArgs {
  where?: UserWhereInput;
}

export interface CreateOneChatArgs {
  data: ChatCreateInput;
}

export interface UpsertOneChatArgs {
  where: ChatWhereUniqueInput;
  create: ChatCreateInput;
  update: ChatUpdateInput;
}

export interface CreateManyChatArgs {
  data: ChatCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface DeleteOneChatArgs {
  where: ChatWhereUniqueInput | null;
}

export interface UpdateOneChatArgs {
  data: ChatUpdateInput | null;
  where: ChatWhereUniqueInput | null;
}

export interface UpdateManyChatArgs {
  data: ChatUpdateManyMutationInput;
  where?: ChatWhereInput;
}

export interface DeleteManyChatArgs {
  where?: ChatWhereInput;
}

export interface CreateOneMessageArgs {
  data: MessageCreateInput;
}

export interface UpsertOneMessageArgs {
  where: MessageWhereUniqueInput;
  create: MessageCreateInput;
  update: MessageUpdateInput;
}

export interface CreateManyMessageArgs {
  data: MessageCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface DeleteOneMessageArgs {
  where: MessageWhereUniqueInput | null;
}

export interface UpdateOneMessageArgs {
  data: MessageUpdateInput | null;
  where: MessageWhereUniqueInput | null;
}

export interface UpdateManyMessageArgs {
  data: MessageUpdateManyMutationInput;
  where?: MessageWhereInput;
}

export interface DeleteManyMessageArgs {
  where?: MessageWhereInput;
}

export interface ExecuteRawArgs {
  query: string;
  parameters?: any;
}

export interface QueryRawArgs {
  query: string;
  parameters?: any;
}

export interface UserWhereInput {
  AND?: UserWhereInput[];
  OR?: UserWhereInput[];
  NOT?: UserWhereInput[];
  id?: IntFilter;
  name?: StringNullableFilter | null;
  email?: StringFilter;
  password?: StringNullableFilter | null;
  phone?: StringNullableFilter | null;
  isAdmin?: BoolNullableFilter | null;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  roles?: StringNullableListFilter;
  Chat?: ChatListRelationFilter;
  messages?: ChatListRelationFilter;
}

export interface UserOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  isAdmin?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  roles?: SortOrder;
  Chat?: ChatOrderByRelationAggregateInput;
  messages?: ChatOrderByRelationAggregateInput;
}

export interface UserWhereUniqueInput {
  id?: number;
  name?: string;
  email?: string;
}

export interface UserOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  isAdmin?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  roles?: SortOrder;
  _count?: UserCountOrderByAggregateInput;
  _avg?: UserAvgOrderByAggregateInput;
  _max?: UserMaxOrderByAggregateInput;
  _min?: UserMinOrderByAggregateInput;
  _sum?: UserSumOrderByAggregateInput;
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[];
  OR?: UserScalarWhereWithAggregatesInput[];
  NOT?: UserScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  name?: StringNullableWithAggregatesFilter | null;
  email?: StringWithAggregatesFilter;
  password?: StringNullableWithAggregatesFilter | null;
  phone?: StringNullableWithAggregatesFilter | null;
  isAdmin?: BoolNullableWithAggregatesFilter | null;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
  roles?: StringNullableListFilter;
}

export interface ChatWhereInput {
  AND?: ChatWhereInput[];
  OR?: ChatWhereInput[];
  NOT?: ChatWhereInput[];
  id?: IntFilter;
  receiverId?: IntFilter;
  receiver?: UserWhereInput;
  sender?: UserWhereInput;
  senderId?: IntFilter;
  title?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  messages?: MessageListRelationFilter;
}

export interface ChatOrderByWithRelationInput {
  id?: SortOrder;
  receiverId?: SortOrder;
  receiver?: UserOrderByWithRelationInput;
  sender?: UserOrderByWithRelationInput;
  senderId?: SortOrder;
  title?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  messages?: MessageOrderByRelationAggregateInput;
}

export interface ChatWhereUniqueInput {
  id?: number;
}

export interface ChatOrderByWithAggregationInput {
  id?: SortOrder;
  receiverId?: SortOrder;
  senderId?: SortOrder;
  title?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: ChatCountOrderByAggregateInput;
  _avg?: ChatAvgOrderByAggregateInput;
  _max?: ChatMaxOrderByAggregateInput;
  _min?: ChatMinOrderByAggregateInput;
  _sum?: ChatSumOrderByAggregateInput;
}

export interface ChatScalarWhereWithAggregatesInput {
  AND?: ChatScalarWhereWithAggregatesInput[];
  OR?: ChatScalarWhereWithAggregatesInput[];
  NOT?: ChatScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  receiverId?: IntWithAggregatesFilter;
  senderId?: IntWithAggregatesFilter;
  title?: StringWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface MessageWhereInput {
  AND?: MessageWhereInput[];
  OR?: MessageWhereInput[];
  NOT?: MessageWhereInput[];
  id?: IntFilter;
  chatId?: IntFilter;
  chat?: ChatWhereInput;
  content?: StringFilter;
  isRead?: BoolFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  isRemoved?: BoolFilter;
}

export interface MessageOrderByWithRelationInput {
  id?: SortOrder;
  chatId?: SortOrder;
  chat?: ChatOrderByWithRelationInput;
  content?: SortOrder;
  isRead?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isRemoved?: SortOrder;
}

export interface MessageWhereUniqueInput {
  id?: number;
}

export interface MessageOrderByWithAggregationInput {
  id?: SortOrder;
  chatId?: SortOrder;
  content?: SortOrder;
  isRead?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isRemoved?: SortOrder;
  _count?: MessageCountOrderByAggregateInput;
  _avg?: MessageAvgOrderByAggregateInput;
  _max?: MessageMaxOrderByAggregateInput;
  _min?: MessageMinOrderByAggregateInput;
  _sum?: MessageSumOrderByAggregateInput;
}

export interface MessageScalarWhereWithAggregatesInput {
  AND?: MessageScalarWhereWithAggregatesInput[];
  OR?: MessageScalarWhereWithAggregatesInput[];
  NOT?: MessageScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  chatId?: IntWithAggregatesFilter;
  content?: StringWithAggregatesFilter;
  isRead?: BoolWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
  isRemoved?: BoolWithAggregatesFilter;
}

export interface UserCreateInput {
  name?: string | null;
  email: string;
  password?: string | null;
  phone?: string | null;
  isAdmin?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: UserCreaterolesInput;
  Chat?: ChatCreateNestedManyWithoutReceiverInput;
  messages?: ChatCreateNestedManyWithoutSenderInput;
}

export interface UserUncheckedCreateInput {
  id?: number;
  name?: string | null;
  email: string;
  password?: string | null;
  phone?: string | null;
  isAdmin?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: UserCreaterolesInput;
  Chat?: ChatUncheckedCreateNestedManyWithoutReceiverInput;
  messages?: ChatUncheckedCreateNestedManyWithoutSenderInput;
}

export interface UserUpdateInput {
  name?: string | null;
  email?: string;
  password?: string | null;
  phone?: string | null;
  isAdmin?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: UserUpdaterolesInput;
  Chat?: ChatUpdateManyWithoutReceiverInput;
  messages?: ChatUpdateManyWithoutSenderInput;
}

export interface UserUncheckedUpdateInput {
  id?: number;
  name?: string | null;
  email?: string;
  password?: string | null;
  phone?: string | null;
  isAdmin?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: UserUpdaterolesInput;
  Chat?: ChatUncheckedUpdateManyWithoutReceiverInput;
  messages?: ChatUncheckedUpdateManyWithoutSenderInput;
}

export interface UserCreateManyInput {
  id?: number;
  name?: string | null;
  email: string;
  password?: string | null;
  phone?: string | null;
  isAdmin?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: UserCreaterolesInput;
}

export interface UserUpdateManyMutationInput {
  name?: string | null;
  email?: string;
  password?: string | null;
  phone?: string | null;
  isAdmin?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: UserUpdaterolesInput;
}

export interface UserUncheckedUpdateManyInput {
  id?: number;
  name?: string | null;
  email?: string;
  password?: string | null;
  phone?: string | null;
  isAdmin?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: UserUpdaterolesInput;
}

export interface ChatCreateInput {
  receiver: UserCreateNestedOneWithoutChatInput;
  sender: UserCreateNestedOneWithoutMessagesInput;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
  messages?: MessageCreateNestedManyWithoutChatInput;
}

export interface ChatUncheckedCreateInput {
  id?: number;
  receiverId: number;
  senderId: number;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
  messages?: MessageUncheckedCreateNestedManyWithoutChatInput;
}

export interface ChatUpdateInput {
  receiver?: UserUpdateOneRequiredWithoutChatInput;
  sender?: UserUpdateOneRequiredWithoutMessagesInput;
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
  messages?: MessageUpdateManyWithoutChatInput;
}

export interface ChatUncheckedUpdateInput {
  id?: number;
  receiverId?: number;
  senderId?: number;
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
  messages?: MessageUncheckedUpdateManyWithoutChatInput;
}

export interface ChatCreateManyInput {
  id?: number;
  receiverId: number;
  senderId: number;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ChatUpdateManyMutationInput {
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ChatUncheckedUpdateManyInput {
  id?: number;
  receiverId?: number;
  senderId?: number;
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface MessageCreateInput {
  chat: ChatCreateNestedOneWithoutMessagesInput;
  content: string;
  isRead?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isRemoved?: boolean;
}

export interface MessageUncheckedCreateInput {
  id?: number;
  chatId: number;
  content: string;
  isRead?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isRemoved?: boolean;
}

export interface MessageUpdateInput {
  chat?: ChatUpdateOneRequiredWithoutMessagesInput;
  content?: string;
  isRead?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isRemoved?: boolean;
}

export interface MessageUncheckedUpdateInput {
  id?: number;
  chatId?: number;
  content?: string;
  isRead?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isRemoved?: boolean;
}

export interface MessageCreateManyInput {
  id?: number;
  chatId: number;
  content: string;
  isRead?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isRemoved?: boolean;
}

export interface MessageUpdateManyMutationInput {
  content?: string;
  isRead?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isRemoved?: boolean;
}

export interface MessageUncheckedUpdateManyInput {
  id?: number;
  chatId?: number;
  content?: string;
  isRead?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isRemoved?: boolean;
}

export interface IntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface StringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableFilter | null;
}

export interface StringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringFilter;
}

export interface BoolNullableFilter {
  equals?: boolean | null;
  not?: NestedBoolNullableFilter | null;
}

export interface DateTimeFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeFilter;
}

export interface StringNullableListFilter {
  equals?: string[] | null;
  has?: string | null;
  hasEvery?: string[];
  hasSome?: string[];
  isEmpty?: boolean;
}

export interface ChatListRelationFilter {
  every?: ChatWhereInput;
  some?: ChatWhereInput;
  none?: ChatWhereInput;
}

export interface ChatOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface UserCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  isAdmin?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  roles?: SortOrder;
}

export interface UserAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface UserMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  isAdmin?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface UserMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  isAdmin?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface UserSumOrderByAggregateInput {
  id?: SortOrder;
}

export interface IntWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
}

export interface StringNullableWithAggregatesFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface StringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface BoolNullableWithAggregatesFilter {
  equals?: boolean | null;
  not?: NestedBoolNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedBoolNullableFilter;
  _max?: NestedBoolNullableFilter;
}

export interface DateTimeWithAggregatesFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface UserRelationFilter {
  is?: UserWhereInput;
  isNot?: UserWhereInput;
}

export interface MessageListRelationFilter {
  every?: MessageWhereInput;
  some?: MessageWhereInput;
  none?: MessageWhereInput;
}

export interface MessageOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface ChatCountOrderByAggregateInput {
  id?: SortOrder;
  receiverId?: SortOrder;
  senderId?: SortOrder;
  title?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ChatAvgOrderByAggregateInput {
  id?: SortOrder;
  receiverId?: SortOrder;
  senderId?: SortOrder;
}

export interface ChatMaxOrderByAggregateInput {
  id?: SortOrder;
  receiverId?: SortOrder;
  senderId?: SortOrder;
  title?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ChatMinOrderByAggregateInput {
  id?: SortOrder;
  receiverId?: SortOrder;
  senderId?: SortOrder;
  title?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ChatSumOrderByAggregateInput {
  id?: SortOrder;
  receiverId?: SortOrder;
  senderId?: SortOrder;
}

export interface ChatRelationFilter {
  is?: ChatWhereInput;
  isNot?: ChatWhereInput;
}

export interface BoolFilter {
  equals?: boolean;
  not?: NestedBoolFilter;
}

export interface MessageCountOrderByAggregateInput {
  id?: SortOrder;
  chatId?: SortOrder;
  content?: SortOrder;
  isRead?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isRemoved?: SortOrder;
}

export interface MessageAvgOrderByAggregateInput {
  id?: SortOrder;
  chatId?: SortOrder;
}

export interface MessageMaxOrderByAggregateInput {
  id?: SortOrder;
  chatId?: SortOrder;
  content?: SortOrder;
  isRead?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isRemoved?: SortOrder;
}

export interface MessageMinOrderByAggregateInput {
  id?: SortOrder;
  chatId?: SortOrder;
  content?: SortOrder;
  isRead?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isRemoved?: SortOrder;
}

export interface MessageSumOrderByAggregateInput {
  id?: SortOrder;
  chatId?: SortOrder;
}

export interface BoolWithAggregatesFilter {
  equals?: boolean;
  not?: NestedBoolWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedBoolFilter;
  _max?: NestedBoolFilter;
}

export interface UserCreaterolesInput {
  set: string[];
}

export interface ChatCreateNestedManyWithoutReceiverInput {
  create?: ChatCreateWithoutReceiverInput[];
  connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput[];
  createMany?: ChatCreateManyReceiverInputEnvelope;
  connect?: ChatWhereUniqueInput[];
}

export interface ChatCreateNestedManyWithoutSenderInput {
  create?: ChatCreateWithoutSenderInput[];
  connectOrCreate?: ChatCreateOrConnectWithoutSenderInput[];
  createMany?: ChatCreateManySenderInputEnvelope;
  connect?: ChatWhereUniqueInput[];
}

export interface ChatUncheckedCreateNestedManyWithoutReceiverInput {
  create?: ChatCreateWithoutReceiverInput[];
  connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput[];
  createMany?: ChatCreateManyReceiverInputEnvelope;
  connect?: ChatWhereUniqueInput[];
}

export interface ChatUncheckedCreateNestedManyWithoutSenderInput {
  create?: ChatCreateWithoutSenderInput[];
  connectOrCreate?: ChatCreateOrConnectWithoutSenderInput[];
  createMany?: ChatCreateManySenderInputEnvelope;
  connect?: ChatWhereUniqueInput[];
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null;
}

export interface StringFieldUpdateOperationsInput {
  set?: string;
}

export interface NullableBoolFieldUpdateOperationsInput {
  set?: boolean | null;
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: Date;
}

export interface UserUpdaterolesInput {
  set?: string[];
  push?: string;
}

export interface ChatUpdateManyWithoutReceiverInput {
  create?: ChatCreateWithoutReceiverInput[];
  connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput[];
  upsert?: ChatUpsertWithWhereUniqueWithoutReceiverInput[];
  createMany?: ChatCreateManyReceiverInputEnvelope;
  set?: ChatWhereUniqueInput[];
  disconnect?: ChatWhereUniqueInput[];
  delete?: ChatWhereUniqueInput[];
  connect?: ChatWhereUniqueInput[];
  update?: ChatUpdateWithWhereUniqueWithoutReceiverInput[];
  updateMany?: ChatUpdateManyWithWhereWithoutReceiverInput[];
  deleteMany?: ChatScalarWhereInput[];
}

export interface ChatUpdateManyWithoutSenderInput {
  create?: ChatCreateWithoutSenderInput[];
  connectOrCreate?: ChatCreateOrConnectWithoutSenderInput[];
  upsert?: ChatUpsertWithWhereUniqueWithoutSenderInput[];
  createMany?: ChatCreateManySenderInputEnvelope;
  set?: ChatWhereUniqueInput[];
  disconnect?: ChatWhereUniqueInput[];
  delete?: ChatWhereUniqueInput[];
  connect?: ChatWhereUniqueInput[];
  update?: ChatUpdateWithWhereUniqueWithoutSenderInput[];
  updateMany?: ChatUpdateManyWithWhereWithoutSenderInput[];
  deleteMany?: ChatScalarWhereInput[];
}

export interface IntFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface ChatUncheckedUpdateManyWithoutReceiverInput {
  create?: ChatCreateWithoutReceiverInput[];
  connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput[];
  upsert?: ChatUpsertWithWhereUniqueWithoutReceiverInput[];
  createMany?: ChatCreateManyReceiverInputEnvelope;
  set?: ChatWhereUniqueInput[];
  disconnect?: ChatWhereUniqueInput[];
  delete?: ChatWhereUniqueInput[];
  connect?: ChatWhereUniqueInput[];
  update?: ChatUpdateWithWhereUniqueWithoutReceiverInput[];
  updateMany?: ChatUpdateManyWithWhereWithoutReceiverInput[];
  deleteMany?: ChatScalarWhereInput[];
}

export interface ChatUncheckedUpdateManyWithoutSenderInput {
  create?: ChatCreateWithoutSenderInput[];
  connectOrCreate?: ChatCreateOrConnectWithoutSenderInput[];
  upsert?: ChatUpsertWithWhereUniqueWithoutSenderInput[];
  createMany?: ChatCreateManySenderInputEnvelope;
  set?: ChatWhereUniqueInput[];
  disconnect?: ChatWhereUniqueInput[];
  delete?: ChatWhereUniqueInput[];
  connect?: ChatWhereUniqueInput[];
  update?: ChatUpdateWithWhereUniqueWithoutSenderInput[];
  updateMany?: ChatUpdateManyWithWhereWithoutSenderInput[];
  deleteMany?: ChatScalarWhereInput[];
}

export interface UserCreateNestedOneWithoutChatInput {
  create?: UserUncheckedCreateWithoutChatInput;
  connectOrCreate?: UserCreateOrConnectWithoutChatInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateNestedOneWithoutMessagesInput {
  create?: UserUncheckedCreateWithoutMessagesInput;
  connectOrCreate?: UserCreateOrConnectWithoutMessagesInput;
  connect?: UserWhereUniqueInput;
}

export interface MessageCreateNestedManyWithoutChatInput {
  create?: MessageCreateWithoutChatInput[];
  connectOrCreate?: MessageCreateOrConnectWithoutChatInput[];
  createMany?: MessageCreateManyChatInputEnvelope;
  connect?: MessageWhereUniqueInput[];
}

export interface MessageUncheckedCreateNestedManyWithoutChatInput {
  create?: MessageCreateWithoutChatInput[];
  connectOrCreate?: MessageCreateOrConnectWithoutChatInput[];
  createMany?: MessageCreateManyChatInputEnvelope;
  connect?: MessageWhereUniqueInput[];
}

export interface UserUpdateOneRequiredWithoutChatInput {
  create?: UserUncheckedCreateWithoutChatInput;
  connectOrCreate?: UserCreateOrConnectWithoutChatInput;
  upsert?: UserUpsertWithoutChatInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutChatInput;
}

export interface UserUpdateOneRequiredWithoutMessagesInput {
  create?: UserUncheckedCreateWithoutMessagesInput;
  connectOrCreate?: UserCreateOrConnectWithoutMessagesInput;
  upsert?: UserUpsertWithoutMessagesInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutMessagesInput;
}

export interface MessageUpdateManyWithoutChatInput {
  create?: MessageCreateWithoutChatInput[];
  connectOrCreate?: MessageCreateOrConnectWithoutChatInput[];
  upsert?: MessageUpsertWithWhereUniqueWithoutChatInput[];
  createMany?: MessageCreateManyChatInputEnvelope;
  set?: MessageWhereUniqueInput[];
  disconnect?: MessageWhereUniqueInput[];
  delete?: MessageWhereUniqueInput[];
  connect?: MessageWhereUniqueInput[];
  update?: MessageUpdateWithWhereUniqueWithoutChatInput[];
  updateMany?: MessageUpdateManyWithWhereWithoutChatInput[];
  deleteMany?: MessageScalarWhereInput[];
}

export interface MessageUncheckedUpdateManyWithoutChatInput {
  create?: MessageCreateWithoutChatInput[];
  connectOrCreate?: MessageCreateOrConnectWithoutChatInput[];
  upsert?: MessageUpsertWithWhereUniqueWithoutChatInput[];
  createMany?: MessageCreateManyChatInputEnvelope;
  set?: MessageWhereUniqueInput[];
  disconnect?: MessageWhereUniqueInput[];
  delete?: MessageWhereUniqueInput[];
  connect?: MessageWhereUniqueInput[];
  update?: MessageUpdateWithWhereUniqueWithoutChatInput[];
  updateMany?: MessageUpdateManyWithWhereWithoutChatInput[];
  deleteMany?: MessageScalarWhereInput[];
}

export interface ChatCreateNestedOneWithoutMessagesInput {
  create?: ChatUncheckedCreateWithoutMessagesInput;
  connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput;
  connect?: ChatWhereUniqueInput;
}

export interface ChatUpdateOneRequiredWithoutMessagesInput {
  create?: ChatUncheckedCreateWithoutMessagesInput;
  connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput;
  upsert?: ChatUpsertWithoutMessagesInput;
  connect?: ChatWhereUniqueInput;
  update?: ChatUncheckedUpdateWithoutMessagesInput;
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean;
}

export interface NestedIntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface NestedStringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableFilter | null;
}

export interface NestedStringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringFilter;
}

export interface NestedBoolNullableFilter {
  equals?: boolean | null;
  not?: NestedBoolNullableFilter | null;
}

export interface NestedDateTimeFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeFilter;
}

export interface NestedIntWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
}

export interface NestedFloatFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatFilter;
}

export interface NestedStringNullableWithAggregatesFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface NestedIntNullableFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableFilter | null;
}

export interface NestedStringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface NestedBoolNullableWithAggregatesFilter {
  equals?: boolean | null;
  not?: NestedBoolNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedBoolNullableFilter;
  _max?: NestedBoolNullableFilter;
}

export interface NestedDateTimeWithAggregatesFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface NestedBoolFilter {
  equals?: boolean;
  not?: NestedBoolFilter;
}

export interface NestedBoolWithAggregatesFilter {
  equals?: boolean;
  not?: NestedBoolWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedBoolFilter;
  _max?: NestedBoolFilter;
}

export interface ChatCreateWithoutReceiverInput {
  sender: UserCreateNestedOneWithoutMessagesInput;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
  messages?: MessageCreateNestedManyWithoutChatInput;
}

export interface ChatUncheckedCreateWithoutReceiverInput {
  id?: number;
  senderId: number;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
  messages?: MessageUncheckedCreateNestedManyWithoutChatInput;
}

export interface ChatCreateOrConnectWithoutReceiverInput {
  where: ChatWhereUniqueInput;
  create: ChatUncheckedCreateWithoutReceiverInput;
}

export interface ChatCreateManyReceiverInputEnvelope {
  data: ChatCreateManyReceiverInput[];
  skipDuplicates?: boolean;
}

export interface ChatCreateWithoutSenderInput {
  receiver: UserCreateNestedOneWithoutChatInput;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
  messages?: MessageCreateNestedManyWithoutChatInput;
}

export interface ChatUncheckedCreateWithoutSenderInput {
  id?: number;
  receiverId: number;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
  messages?: MessageUncheckedCreateNestedManyWithoutChatInput;
}

export interface ChatCreateOrConnectWithoutSenderInput {
  where: ChatWhereUniqueInput;
  create: ChatUncheckedCreateWithoutSenderInput;
}

export interface ChatCreateManySenderInputEnvelope {
  data: ChatCreateManySenderInput[];
  skipDuplicates?: boolean;
}

export interface ChatUpsertWithWhereUniqueWithoutReceiverInput {
  where: ChatWhereUniqueInput;
  update: ChatUncheckedUpdateWithoutReceiverInput;
  create: ChatUncheckedCreateWithoutReceiverInput;
}

export interface ChatUpdateWithWhereUniqueWithoutReceiverInput {
  where: ChatWhereUniqueInput;
  data: ChatUncheckedUpdateWithoutReceiverInput;
}

export interface ChatUpdateManyWithWhereWithoutReceiverInput {
  where: ChatScalarWhereInput;
  data: ChatUncheckedUpdateManyWithoutChatInput;
}

export interface ChatScalarWhereInput {
  AND?: ChatScalarWhereInput[];
  OR?: ChatScalarWhereInput[];
  NOT?: ChatScalarWhereInput[];
  id?: IntFilter;
  receiverId?: IntFilter;
  senderId?: IntFilter;
  title?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ChatUpsertWithWhereUniqueWithoutSenderInput {
  where: ChatWhereUniqueInput;
  update: ChatUncheckedUpdateWithoutSenderInput;
  create: ChatUncheckedCreateWithoutSenderInput;
}

export interface ChatUpdateWithWhereUniqueWithoutSenderInput {
  where: ChatWhereUniqueInput;
  data: ChatUncheckedUpdateWithoutSenderInput;
}

export interface ChatUpdateManyWithWhereWithoutSenderInput {
  where: ChatScalarWhereInput;
  data: ChatUncheckedUpdateManyWithoutMessagesInput;
}

export interface UserCreateWithoutChatInput {
  name?: string | null;
  email: string;
  password?: string | null;
  phone?: string | null;
  isAdmin?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: UserCreaterolesInput;
  messages?: ChatCreateNestedManyWithoutSenderInput;
}

export interface UserUncheckedCreateWithoutChatInput {
  id?: number;
  name?: string | null;
  email: string;
  password?: string | null;
  phone?: string | null;
  isAdmin?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: UserCreaterolesInput;
  messages?: ChatUncheckedCreateNestedManyWithoutSenderInput;
}

export interface UserCreateOrConnectWithoutChatInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutChatInput;
}

export interface UserCreateWithoutMessagesInput {
  name?: string | null;
  email: string;
  password?: string | null;
  phone?: string | null;
  isAdmin?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: UserCreaterolesInput;
  Chat?: ChatCreateNestedManyWithoutReceiverInput;
}

export interface UserUncheckedCreateWithoutMessagesInput {
  id?: number;
  name?: string | null;
  email: string;
  password?: string | null;
  phone?: string | null;
  isAdmin?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: UserCreaterolesInput;
  Chat?: ChatUncheckedCreateNestedManyWithoutReceiverInput;
}

export interface UserCreateOrConnectWithoutMessagesInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutMessagesInput;
}

export interface MessageCreateWithoutChatInput {
  content: string;
  isRead?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isRemoved?: boolean;
}

export interface MessageUncheckedCreateWithoutChatInput {
  id?: number;
  content: string;
  isRead?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isRemoved?: boolean;
}

export interface MessageCreateOrConnectWithoutChatInput {
  where: MessageWhereUniqueInput;
  create: MessageUncheckedCreateWithoutChatInput;
}

export interface MessageCreateManyChatInputEnvelope {
  data: MessageCreateManyChatInput[];
  skipDuplicates?: boolean;
}

export interface UserUpsertWithoutChatInput {
  update: UserUncheckedUpdateWithoutChatInput;
  create: UserUncheckedCreateWithoutChatInput;
}

export interface UserUpdateWithoutChatInput {
  name?: string | null;
  email?: string;
  password?: string | null;
  phone?: string | null;
  isAdmin?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: UserUpdaterolesInput;
  messages?: ChatUpdateManyWithoutSenderInput;
}

export interface UserUncheckedUpdateWithoutChatInput {
  id?: number;
  name?: string | null;
  email?: string;
  password?: string | null;
  phone?: string | null;
  isAdmin?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: UserUpdaterolesInput;
  messages?: ChatUncheckedUpdateManyWithoutSenderInput;
}

export interface UserUpsertWithoutMessagesInput {
  update: UserUncheckedUpdateWithoutMessagesInput;
  create: UserUncheckedCreateWithoutMessagesInput;
}

export interface UserUpdateWithoutMessagesInput {
  name?: string | null;
  email?: string;
  password?: string | null;
  phone?: string | null;
  isAdmin?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: UserUpdaterolesInput;
  Chat?: ChatUpdateManyWithoutReceiverInput;
}

export interface UserUncheckedUpdateWithoutMessagesInput {
  id?: number;
  name?: string | null;
  email?: string;
  password?: string | null;
  phone?: string | null;
  isAdmin?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: UserUpdaterolesInput;
  Chat?: ChatUncheckedUpdateManyWithoutReceiverInput;
}

export interface MessageUpsertWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput;
  update: MessageUncheckedUpdateWithoutChatInput;
  create: MessageUncheckedCreateWithoutChatInput;
}

export interface MessageUpdateWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput;
  data: MessageUncheckedUpdateWithoutChatInput;
}

export interface MessageUpdateManyWithWhereWithoutChatInput {
  where: MessageScalarWhereInput;
  data: MessageUncheckedUpdateManyWithoutMessagesInput;
}

export interface MessageScalarWhereInput {
  AND?: MessageScalarWhereInput[];
  OR?: MessageScalarWhereInput[];
  NOT?: MessageScalarWhereInput[];
  id?: IntFilter;
  chatId?: IntFilter;
  content?: StringFilter;
  isRead?: BoolFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  isRemoved?: BoolFilter;
}

export interface ChatCreateWithoutMessagesInput {
  receiver: UserCreateNestedOneWithoutChatInput;
  sender: UserCreateNestedOneWithoutMessagesInput;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ChatUncheckedCreateWithoutMessagesInput {
  id?: number;
  receiverId: number;
  senderId: number;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ChatCreateOrConnectWithoutMessagesInput {
  where: ChatWhereUniqueInput;
  create: ChatUncheckedCreateWithoutMessagesInput;
}

export interface ChatUpsertWithoutMessagesInput {
  update: ChatUncheckedUpdateWithoutMessagesInput;
  create: ChatUncheckedCreateWithoutMessagesInput;
}

export interface ChatUpdateWithoutMessagesInput {
  receiver?: UserUpdateOneRequiredWithoutChatInput;
  sender?: UserUpdateOneRequiredWithoutMessagesInput;
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ChatUncheckedUpdateWithoutMessagesInput {
  id?: number;
  receiverId?: number;
  senderId?: number;
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ChatCreateManyReceiverInput {
  id?: number;
  senderId: number;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ChatCreateManySenderInput {
  id?: number;
  receiverId: number;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ChatUpdateWithoutReceiverInput {
  sender?: UserUpdateOneRequiredWithoutMessagesInput;
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
  messages?: MessageUpdateManyWithoutChatInput;
}

export interface ChatUncheckedUpdateWithoutReceiverInput {
  id?: number;
  senderId?: number;
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
  messages?: MessageUncheckedUpdateManyWithoutChatInput;
}

export interface ChatUncheckedUpdateManyWithoutChatInput {
  id?: number;
  senderId?: number;
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ChatUpdateWithoutSenderInput {
  receiver?: UserUpdateOneRequiredWithoutChatInput;
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
  messages?: MessageUpdateManyWithoutChatInput;
}

export interface ChatUncheckedUpdateWithoutSenderInput {
  id?: number;
  receiverId?: number;
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
  messages?: MessageUncheckedUpdateManyWithoutChatInput;
}

export interface ChatUncheckedUpdateManyWithoutMessagesInput {
  id?: number;
  receiverId?: number;
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface MessageCreateManyChatInput {
  id?: number;
  content: string;
  isRead?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isRemoved?: boolean;
}

export interface MessageUpdateWithoutChatInput {
  content?: string;
  isRead?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isRemoved?: boolean;
}

export interface MessageUncheckedUpdateWithoutChatInput {
  id?: number;
  content?: string;
  isRead?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isRemoved?: boolean;
}

export interface MessageUncheckedUpdateManyWithoutMessagesInput {
  id?: number;
  content?: string;
  isRead?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isRemoved?: boolean;
}

export enum UserScalarFieldEnum {
  id = 'id',
  name = 'name',
  email = 'email',
  password = 'password',
  phone = 'phone',
  isAdmin = 'isAdmin',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  roles = 'roles',
}
export enum ChatScalarFieldEnum {
  id = 'id',
  receiverId = 'receiverId',
  senderId = 'senderId',
  title = 'title',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum MessageScalarFieldEnum {
  id = 'id',
  chatId = 'chatId',
  content = 'content',
  isRead = 'isRead',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  isRemoved = 'isRemoved',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}
