import gql from 'graphql-tag';

export default gql`
  scalar DateTime

  type BatchPayload {
    count: Int!
  }
  enum ChatScalarFieldEnum {
    id
    receiverId
    senderId
    title
    createdAt
    updatedAt
  }

  enum MessageScalarFieldEnum {
    id
    chatId
    content
    isRead
    createdAt
    updatedAt
    isRemoved
  }

  enum QueryMode {
    default
    insensitive
  }

  enum SortOrder {
    asc
    desc
  }

  enum TransactionIsolationLevel {
    ReadUncommitted
    ReadCommitted
    RepeatableRead
    Serializable
  }

  enum UserScalarFieldEnum {
    id
    name
    email
    password
    phone
    isAdmin
    createdAt
    updatedAt
    roles
  }

  input UserWhereInput {
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
    id: IntFilter
    name: StringNullableFilter
    email: StringFilter
    password: StringNullableFilter
    phone: StringNullableFilter
    isAdmin: BoolNullableFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    roles: StringNullableListFilter
    Chat: ChatListRelationFilter
    messages: ChatListRelationFilter
  }

  input UserOrderByWithRelationInput {
    id: SortOrder
    name: SortOrder
    email: SortOrder
    password: SortOrder
    phone: SortOrder
    isAdmin: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    roles: SortOrder
    Chat: ChatOrderByRelationAggregateInput
    messages: ChatOrderByRelationAggregateInput
  }

  input UserWhereUniqueInput {
    id: Int
    name: String
    email: String
  }

  input UserOrderByWithAggregationInput {
    id: SortOrder
    name: SortOrder
    email: SortOrder
    password: SortOrder
    phone: SortOrder
    isAdmin: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    roles: SortOrder
    _count: UserCountOrderByAggregateInput
    _avg: UserAvgOrderByAggregateInput
    _max: UserMaxOrderByAggregateInput
    _min: UserMinOrderByAggregateInput
    _sum: UserSumOrderByAggregateInput
  }

  input UserScalarWhereWithAggregatesInput {
    AND: [UserScalarWhereWithAggregatesInput!]
    OR: [UserScalarWhereWithAggregatesInput!]
    NOT: [UserScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    name: StringNullableWithAggregatesFilter
    email: StringWithAggregatesFilter
    password: StringNullableWithAggregatesFilter
    phone: StringNullableWithAggregatesFilter
    isAdmin: BoolNullableWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
    roles: StringNullableListFilter
  }

  input ChatWhereInput {
    AND: [ChatWhereInput!]
    OR: [ChatWhereInput!]
    NOT: [ChatWhereInput!]
    id: IntFilter
    receiverId: IntFilter
    receiver: UserWhereInput
    sender: UserWhereInput
    senderId: IntFilter
    title: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    messages: MessageListRelationFilter
  }

  input ChatOrderByWithRelationInput {
    id: SortOrder
    receiverId: SortOrder
    receiver: UserOrderByWithRelationInput
    sender: UserOrderByWithRelationInput
    senderId: SortOrder
    title: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    messages: MessageOrderByRelationAggregateInput
  }

  input ChatWhereUniqueInput {
    id: Int
  }

  input ChatOrderByWithAggregationInput {
    id: SortOrder
    receiverId: SortOrder
    senderId: SortOrder
    title: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    _count: ChatCountOrderByAggregateInput
    _avg: ChatAvgOrderByAggregateInput
    _max: ChatMaxOrderByAggregateInput
    _min: ChatMinOrderByAggregateInput
    _sum: ChatSumOrderByAggregateInput
  }

  input ChatScalarWhereWithAggregatesInput {
    AND: [ChatScalarWhereWithAggregatesInput!]
    OR: [ChatScalarWhereWithAggregatesInput!]
    NOT: [ChatScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    receiverId: IntWithAggregatesFilter
    senderId: IntWithAggregatesFilter
    title: StringWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
  }

  input MessageWhereInput {
    AND: [MessageWhereInput!]
    OR: [MessageWhereInput!]
    NOT: [MessageWhereInput!]
    id: IntFilter
    chatId: IntFilter
    chat: ChatWhereInput
    content: StringFilter
    isRead: BoolFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    isRemoved: BoolFilter
  }

  input MessageOrderByWithRelationInput {
    id: SortOrder
    chatId: SortOrder
    chat: ChatOrderByWithRelationInput
    content: SortOrder
    isRead: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    isRemoved: SortOrder
  }

  input MessageWhereUniqueInput {
    id: Int
  }

  input MessageOrderByWithAggregationInput {
    id: SortOrder
    chatId: SortOrder
    content: SortOrder
    isRead: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    isRemoved: SortOrder
    _count: MessageCountOrderByAggregateInput
    _avg: MessageAvgOrderByAggregateInput
    _max: MessageMaxOrderByAggregateInput
    _min: MessageMinOrderByAggregateInput
    _sum: MessageSumOrderByAggregateInput
  }

  input MessageScalarWhereWithAggregatesInput {
    AND: [MessageScalarWhereWithAggregatesInput!]
    OR: [MessageScalarWhereWithAggregatesInput!]
    NOT: [MessageScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    chatId: IntWithAggregatesFilter
    content: StringWithAggregatesFilter
    isRead: BoolWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
    isRemoved: BoolWithAggregatesFilter
  }

  input UserCreateInput {
    name: String
    email: String!
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    roles: [String!]
    Chat: ChatCreateNestedManyWithoutReceiverInput
    messages: ChatCreateNestedManyWithoutSenderInput
  }

  input UserUncheckedCreateInput {
    id: Int
    name: String
    email: String!
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    roles: [String!]
    Chat: ChatUncheckedCreateNestedManyWithoutReceiverInput
    messages: ChatUncheckedCreateNestedManyWithoutSenderInput
  }

  input UserUpdateInput {
    name: String
    email: String
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    roles: [String!]
    Chat: ChatUpdateManyWithoutReceiverNestedInput
    messages: ChatUpdateManyWithoutSenderNestedInput
  }

  input UserUncheckedUpdateInput {
    id: Int
    name: String
    email: String
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    roles: [String!]
    Chat: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    messages: ChatUncheckedUpdateManyWithoutSenderNestedInput
  }

  input UserCreateManyInput {
    id: Int
    name: String
    email: String!
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    roles: [String!]
  }

  input UserUpdateManyMutationInput {
    name: String
    email: String
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    roles: [String!]
  }

  input UserUncheckedUpdateManyInput {
    id: Int
    name: String
    email: String
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    roles: [String!]
  }

  input ChatCreateInput {
    receiver: UserCreateNestedOneWithoutChatInput!
    sender: UserCreateNestedOneWithoutMessagesInput!
    title: String!
    createdAt: DateTime
    updatedAt: DateTime
    messages: MessageCreateNestedManyWithoutChatInput
  }

  input ChatUncheckedCreateInput {
    id: Int
    receiverId: Int!
    senderId: Int!
    title: String!
    createdAt: DateTime
    updatedAt: DateTime
    messages: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  input ChatUpdateInput {
    receiver: UserUpdateOneRequiredWithoutChatNestedInput
    sender: UserUpdateOneRequiredWithoutMessagesNestedInput
    title: String
    createdAt: DateTime
    updatedAt: DateTime
    messages: MessageUpdateManyWithoutChatNestedInput
  }

  input ChatUncheckedUpdateInput {
    id: Int
    receiverId: Int
    senderId: Int
    title: String
    createdAt: DateTime
    updatedAt: DateTime
    messages: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  input ChatCreateManyInput {
    id: Int
    receiverId: Int!
    senderId: Int!
    title: String!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input ChatUpdateManyMutationInput {
    title: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input ChatUncheckedUpdateManyInput {
    id: Int
    receiverId: Int
    senderId: Int
    title: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input MessageCreateInput {
    chat: ChatCreateNestedOneWithoutMessagesInput!
    content: String!
    isRead: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    isRemoved: Boolean
  }

  input MessageUncheckedCreateInput {
    id: Int
    chatId: Int!
    content: String!
    isRead: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    isRemoved: Boolean
  }

  input MessageUpdateInput {
    chat: ChatUpdateOneRequiredWithoutMessagesNestedInput
    content: String
    isRead: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    isRemoved: Boolean
  }

  input MessageUncheckedUpdateInput {
    id: Int
    chatId: Int
    content: String
    isRead: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    isRemoved: Boolean
  }

  input MessageCreateManyInput {
    id: Int
    chatId: Int!
    content: String!
    isRead: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    isRemoved: Boolean
  }

  input MessageUpdateManyMutationInput {
    content: String
    isRead: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    isRemoved: Boolean
  }

  input MessageUncheckedUpdateManyInput {
    id: Int
    chatId: Int
    content: String
    isRead: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    isRemoved: Boolean
  }

  input IntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input StringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringNullableFilter
  }

  input StringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringFilter
  }

  input BoolNullableFilter {
    equals: Boolean
    not: NestedBoolNullableFilter
  }

  input DateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input StringNullableListFilter {
    equals: [String!]
    has: String
    hasEvery: [String!]
    hasSome: [String!]
    isEmpty: Boolean
  }

  input ChatListRelationFilter {
    every: ChatWhereInput
    some: ChatWhereInput
    none: ChatWhereInput
  }

  input ChatOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input UserCountOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
    email: SortOrder
    password: SortOrder
    phone: SortOrder
    isAdmin: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    roles: SortOrder
  }

  input UserAvgOrderByAggregateInput {
    id: SortOrder
  }

  input UserMaxOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
    email: SortOrder
    password: SortOrder
    phone: SortOrder
    isAdmin: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input UserMinOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
    email: SortOrder
    password: SortOrder
    phone: SortOrder
    isAdmin: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input UserSumOrderByAggregateInput {
    id: SortOrder
  }

  input IntWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntWithAggregatesFilter
    _count: NestedIntFilter
    _avg: NestedFloatFilter
    _sum: NestedIntFilter
    _min: NestedIntFilter
    _max: NestedIntFilter
  }

  input StringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input StringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input BoolNullableWithAggregatesFilter {
    equals: Boolean
    not: NestedBoolNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedBoolNullableFilter
    _max: NestedBoolNullableFilter
  }

  input DateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input UserRelationFilter {
    is: UserWhereInput
    isNot: UserWhereInput
  }

  input MessageListRelationFilter {
    every: MessageWhereInput
    some: MessageWhereInput
    none: MessageWhereInput
  }

  input MessageOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input ChatCountOrderByAggregateInput {
    id: SortOrder
    receiverId: SortOrder
    senderId: SortOrder
    title: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input ChatAvgOrderByAggregateInput {
    id: SortOrder
    receiverId: SortOrder
    senderId: SortOrder
  }

  input ChatMaxOrderByAggregateInput {
    id: SortOrder
    receiverId: SortOrder
    senderId: SortOrder
    title: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input ChatMinOrderByAggregateInput {
    id: SortOrder
    receiverId: SortOrder
    senderId: SortOrder
    title: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input ChatSumOrderByAggregateInput {
    id: SortOrder
    receiverId: SortOrder
    senderId: SortOrder
  }

  input ChatRelationFilter {
    is: ChatWhereInput
    isNot: ChatWhereInput
  }

  input BoolFilter {
    equals: Boolean
    not: NestedBoolFilter
  }

  input MessageCountOrderByAggregateInput {
    id: SortOrder
    chatId: SortOrder
    content: SortOrder
    isRead: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    isRemoved: SortOrder
  }

  input MessageAvgOrderByAggregateInput {
    id: SortOrder
    chatId: SortOrder
  }

  input MessageMaxOrderByAggregateInput {
    id: SortOrder
    chatId: SortOrder
    content: SortOrder
    isRead: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    isRemoved: SortOrder
  }

  input MessageMinOrderByAggregateInput {
    id: SortOrder
    chatId: SortOrder
    content: SortOrder
    isRead: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    isRemoved: SortOrder
  }

  input MessageSumOrderByAggregateInput {
    id: SortOrder
    chatId: SortOrder
  }

  input BoolWithAggregatesFilter {
    equals: Boolean
    not: NestedBoolWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedBoolFilter
    _max: NestedBoolFilter
  }

  input UserCreaterolesInput {
    set: [String!]!
  }

  input ChatCreateNestedManyWithoutReceiverInput {
    create: [ChatCreateWithoutReceiverInput!]
    connectOrCreate: [ChatCreateOrConnectWithoutReceiverInput!]
    createMany: ChatCreateManyReceiverInputEnvelope
    connect: [ChatWhereUniqueInput!]
  }

  input ChatCreateNestedManyWithoutSenderInput {
    create: [ChatCreateWithoutSenderInput!]
    connectOrCreate: [ChatCreateOrConnectWithoutSenderInput!]
    createMany: ChatCreateManySenderInputEnvelope
    connect: [ChatWhereUniqueInput!]
  }

  input ChatUncheckedCreateNestedManyWithoutReceiverInput {
    create: [ChatCreateWithoutReceiverInput!]
    connectOrCreate: [ChatCreateOrConnectWithoutReceiverInput!]
    createMany: ChatCreateManyReceiverInputEnvelope
    connect: [ChatWhereUniqueInput!]
  }

  input ChatUncheckedCreateNestedManyWithoutSenderInput {
    create: [ChatCreateWithoutSenderInput!]
    connectOrCreate: [ChatCreateOrConnectWithoutSenderInput!]
    createMany: ChatCreateManySenderInputEnvelope
    connect: [ChatWhereUniqueInput!]
  }

  input NullableStringFieldUpdateOperationsInput {
    set: String
  }

  input StringFieldUpdateOperationsInput {
    set: String
  }

  input NullableBoolFieldUpdateOperationsInput {
    set: Boolean
  }

  input DateTimeFieldUpdateOperationsInput {
    set: DateTime
  }

  input UserUpdaterolesInput {
    set: [String!]
    push: [String!]
  }

  input ChatUpdateManyWithoutReceiverNestedInput {
    create: [ChatCreateWithoutReceiverInput!]
    connectOrCreate: [ChatCreateOrConnectWithoutReceiverInput!]
    upsert: [ChatUpsertWithWhereUniqueWithoutReceiverInput!]
    createMany: ChatCreateManyReceiverInputEnvelope
    set: [ChatWhereUniqueInput!]
    disconnect: [ChatWhereUniqueInput!]
    delete: [ChatWhereUniqueInput!]
    connect: [ChatWhereUniqueInput!]
    update: [ChatUpdateWithWhereUniqueWithoutReceiverInput!]
    updateMany: [ChatUpdateManyWithWhereWithoutReceiverInput!]
    deleteMany: [ChatScalarWhereInput!]
  }

  input ChatUpdateManyWithoutSenderNestedInput {
    create: [ChatCreateWithoutSenderInput!]
    connectOrCreate: [ChatCreateOrConnectWithoutSenderInput!]
    upsert: [ChatUpsertWithWhereUniqueWithoutSenderInput!]
    createMany: ChatCreateManySenderInputEnvelope
    set: [ChatWhereUniqueInput!]
    disconnect: [ChatWhereUniqueInput!]
    delete: [ChatWhereUniqueInput!]
    connect: [ChatWhereUniqueInput!]
    update: [ChatUpdateWithWhereUniqueWithoutSenderInput!]
    updateMany: [ChatUpdateManyWithWhereWithoutSenderInput!]
    deleteMany: [ChatScalarWhereInput!]
  }

  input IntFieldUpdateOperationsInput {
    set: Int
    increment: Int
    decrement: Int
    multiply: Int
    divide: Int
  }

  input ChatUncheckedUpdateManyWithoutReceiverNestedInput {
    create: [ChatCreateWithoutReceiverInput!]
    connectOrCreate: [ChatCreateOrConnectWithoutReceiverInput!]
    upsert: [ChatUpsertWithWhereUniqueWithoutReceiverInput!]
    createMany: ChatCreateManyReceiverInputEnvelope
    set: [ChatWhereUniqueInput!]
    disconnect: [ChatWhereUniqueInput!]
    delete: [ChatWhereUniqueInput!]
    connect: [ChatWhereUniqueInput!]
    update: [ChatUpdateWithWhereUniqueWithoutReceiverInput!]
    updateMany: [ChatUpdateManyWithWhereWithoutReceiverInput!]
    deleteMany: [ChatScalarWhereInput!]
  }

  input ChatUncheckedUpdateManyWithoutSenderNestedInput {
    create: [ChatCreateWithoutSenderInput!]
    connectOrCreate: [ChatCreateOrConnectWithoutSenderInput!]
    upsert: [ChatUpsertWithWhereUniqueWithoutSenderInput!]
    createMany: ChatCreateManySenderInputEnvelope
    set: [ChatWhereUniqueInput!]
    disconnect: [ChatWhereUniqueInput!]
    delete: [ChatWhereUniqueInput!]
    connect: [ChatWhereUniqueInput!]
    update: [ChatUpdateWithWhereUniqueWithoutSenderInput!]
    updateMany: [ChatUpdateManyWithWhereWithoutSenderInput!]
    deleteMany: [ChatScalarWhereInput!]
  }

  input UserCreateNestedOneWithoutChatInput {
    create: UserUncheckedCreateWithoutChatInput
    connectOrCreate: UserCreateOrConnectWithoutChatInput
    connect: UserWhereUniqueInput
  }

  input UserCreateNestedOneWithoutMessagesInput {
    create: UserUncheckedCreateWithoutMessagesInput
    connectOrCreate: UserCreateOrConnectWithoutMessagesInput
    connect: UserWhereUniqueInput
  }

  input MessageCreateNestedManyWithoutChatInput {
    create: [MessageCreateWithoutChatInput!]
    connectOrCreate: [MessageCreateOrConnectWithoutChatInput!]
    createMany: MessageCreateManyChatInputEnvelope
    connect: [MessageWhereUniqueInput!]
  }

  input MessageUncheckedCreateNestedManyWithoutChatInput {
    create: [MessageCreateWithoutChatInput!]
    connectOrCreate: [MessageCreateOrConnectWithoutChatInput!]
    createMany: MessageCreateManyChatInputEnvelope
    connect: [MessageWhereUniqueInput!]
  }

  input UserUpdateOneRequiredWithoutChatNestedInput {
    create: UserUncheckedCreateWithoutChatInput
    connectOrCreate: UserCreateOrConnectWithoutChatInput
    upsert: UserUpsertWithoutChatInput
    connect: UserWhereUniqueInput
    update: UserUncheckedUpdateWithoutChatInput
  }

  input UserUpdateOneRequiredWithoutMessagesNestedInput {
    create: UserUncheckedCreateWithoutMessagesInput
    connectOrCreate: UserCreateOrConnectWithoutMessagesInput
    upsert: UserUpsertWithoutMessagesInput
    connect: UserWhereUniqueInput
    update: UserUncheckedUpdateWithoutMessagesInput
  }

  input MessageUpdateManyWithoutChatNestedInput {
    create: [MessageCreateWithoutChatInput!]
    connectOrCreate: [MessageCreateOrConnectWithoutChatInput!]
    upsert: [MessageUpsertWithWhereUniqueWithoutChatInput!]
    createMany: MessageCreateManyChatInputEnvelope
    set: [MessageWhereUniqueInput!]
    disconnect: [MessageWhereUniqueInput!]
    delete: [MessageWhereUniqueInput!]
    connect: [MessageWhereUniqueInput!]
    update: [MessageUpdateWithWhereUniqueWithoutChatInput!]
    updateMany: [MessageUpdateManyWithWhereWithoutChatInput!]
    deleteMany: [MessageScalarWhereInput!]
  }

  input MessageUncheckedUpdateManyWithoutChatNestedInput {
    create: [MessageCreateWithoutChatInput!]
    connectOrCreate: [MessageCreateOrConnectWithoutChatInput!]
    upsert: [MessageUpsertWithWhereUniqueWithoutChatInput!]
    createMany: MessageCreateManyChatInputEnvelope
    set: [MessageWhereUniqueInput!]
    disconnect: [MessageWhereUniqueInput!]
    delete: [MessageWhereUniqueInput!]
    connect: [MessageWhereUniqueInput!]
    update: [MessageUpdateWithWhereUniqueWithoutChatInput!]
    updateMany: [MessageUpdateManyWithWhereWithoutChatInput!]
    deleteMany: [MessageScalarWhereInput!]
  }

  input ChatCreateNestedOneWithoutMessagesInput {
    create: ChatUncheckedCreateWithoutMessagesInput
    connectOrCreate: ChatCreateOrConnectWithoutMessagesInput
    connect: ChatWhereUniqueInput
  }

  input ChatUpdateOneRequiredWithoutMessagesNestedInput {
    create: ChatUncheckedCreateWithoutMessagesInput
    connectOrCreate: ChatCreateOrConnectWithoutMessagesInput
    upsert: ChatUpsertWithoutMessagesInput
    connect: ChatWhereUniqueInput
    update: ChatUncheckedUpdateWithoutMessagesInput
  }

  input BoolFieldUpdateOperationsInput {
    set: Boolean
  }

  input NestedIntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input NestedStringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableFilter
  }

  input NestedStringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringFilter
  }

  input NestedBoolNullableFilter {
    equals: Boolean
    not: NestedBoolNullableFilter
  }

  input NestedDateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input NestedIntWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntWithAggregatesFilter
    _count: NestedIntFilter
    _avg: NestedFloatFilter
    _sum: NestedIntFilter
    _min: NestedIntFilter
    _max: NestedIntFilter
  }

  input NestedFloatFilter {
    equals: Float
    in: [Float!]
    notIn: [Float!]
    lt: Float
    lte: Float
    gt: Float
    gte: Float
    not: NestedFloatFilter
  }

  input NestedStringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input NestedIntNullableFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableFilter
  }

  input NestedStringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input NestedBoolNullableWithAggregatesFilter {
    equals: Boolean
    not: NestedBoolNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedBoolNullableFilter
    _max: NestedBoolNullableFilter
  }

  input NestedDateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input NestedBoolFilter {
    equals: Boolean
    not: NestedBoolFilter
  }

  input NestedBoolWithAggregatesFilter {
    equals: Boolean
    not: NestedBoolWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedBoolFilter
    _max: NestedBoolFilter
  }

  input ChatCreateWithoutReceiverInput {
    sender: UserCreateNestedOneWithoutMessagesInput!
    title: String!
    createdAt: DateTime
    updatedAt: DateTime
    messages: MessageCreateNestedManyWithoutChatInput
  }

  input ChatUncheckedCreateWithoutReceiverInput {
    id: Int
    senderId: Int!
    title: String!
    createdAt: DateTime
    updatedAt: DateTime
    messages: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  input ChatCreateOrConnectWithoutReceiverInput {
    where: ChatWhereUniqueInput!
    create: ChatUncheckedCreateWithoutReceiverInput!
  }

  input ChatCreateManyReceiverInputEnvelope {
    data: [ChatCreateManyReceiverInput!]!
    skipDuplicates: Boolean
  }

  input ChatCreateWithoutSenderInput {
    receiver: UserCreateNestedOneWithoutChatInput!
    title: String!
    createdAt: DateTime
    updatedAt: DateTime
    messages: MessageCreateNestedManyWithoutChatInput
  }

  input ChatUncheckedCreateWithoutSenderInput {
    id: Int
    receiverId: Int!
    title: String!
    createdAt: DateTime
    updatedAt: DateTime
    messages: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  input ChatCreateOrConnectWithoutSenderInput {
    where: ChatWhereUniqueInput!
    create: ChatUncheckedCreateWithoutSenderInput!
  }

  input ChatCreateManySenderInputEnvelope {
    data: [ChatCreateManySenderInput!]!
    skipDuplicates: Boolean
  }

  input ChatUpsertWithWhereUniqueWithoutReceiverInput {
    where: ChatWhereUniqueInput!
    update: ChatUncheckedUpdateWithoutReceiverInput!
    create: ChatUncheckedCreateWithoutReceiverInput!
  }

  input ChatUpdateWithWhereUniqueWithoutReceiverInput {
    where: ChatWhereUniqueInput!
    data: ChatUncheckedUpdateWithoutReceiverInput!
  }

  input ChatUpdateManyWithWhereWithoutReceiverInput {
    where: ChatScalarWhereInput!
    data: ChatUncheckedUpdateManyWithoutChatInput!
  }

  input ChatScalarWhereInput {
    AND: [ChatScalarWhereInput!]
    OR: [ChatScalarWhereInput!]
    NOT: [ChatScalarWhereInput!]
    id: IntFilter
    receiverId: IntFilter
    senderId: IntFilter
    title: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
  }

  input ChatUpsertWithWhereUniqueWithoutSenderInput {
    where: ChatWhereUniqueInput!
    update: ChatUncheckedUpdateWithoutSenderInput!
    create: ChatUncheckedCreateWithoutSenderInput!
  }

  input ChatUpdateWithWhereUniqueWithoutSenderInput {
    where: ChatWhereUniqueInput!
    data: ChatUncheckedUpdateWithoutSenderInput!
  }

  input ChatUpdateManyWithWhereWithoutSenderInput {
    where: ChatScalarWhereInput!
    data: ChatUncheckedUpdateManyWithoutMessagesInput!
  }

  input UserCreateWithoutChatInput {
    name: String
    email: String!
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    roles: [String!]
    messages: ChatCreateNestedManyWithoutSenderInput
  }

  input UserUncheckedCreateWithoutChatInput {
    id: Int
    name: String
    email: String!
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    roles: [String!]
    messages: ChatUncheckedCreateNestedManyWithoutSenderInput
  }

  input UserCreateOrConnectWithoutChatInput {
    where: UserWhereUniqueInput!
    create: UserUncheckedCreateWithoutChatInput!
  }

  input UserCreateWithoutMessagesInput {
    name: String
    email: String!
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    roles: [String!]
    Chat: ChatCreateNestedManyWithoutReceiverInput
  }

  input UserUncheckedCreateWithoutMessagesInput {
    id: Int
    name: String
    email: String!
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    roles: [String!]
    Chat: ChatUncheckedCreateNestedManyWithoutReceiverInput
  }

  input UserCreateOrConnectWithoutMessagesInput {
    where: UserWhereUniqueInput!
    create: UserUncheckedCreateWithoutMessagesInput!
  }

  input MessageCreateWithoutChatInput {
    content: String!
    isRead: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    isRemoved: Boolean
  }

  input MessageUncheckedCreateWithoutChatInput {
    id: Int
    content: String!
    isRead: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    isRemoved: Boolean
  }

  input MessageCreateOrConnectWithoutChatInput {
    where: MessageWhereUniqueInput!
    create: MessageUncheckedCreateWithoutChatInput!
  }

  input MessageCreateManyChatInputEnvelope {
    data: [MessageCreateManyChatInput!]!
    skipDuplicates: Boolean
  }

  input UserUpsertWithoutChatInput {
    update: UserUncheckedUpdateWithoutChatInput!
    create: UserUncheckedCreateWithoutChatInput!
  }

  input UserUpdateWithoutChatInput {
    name: String
    email: String
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    roles: [String!]
    messages: ChatUpdateManyWithoutSenderNestedInput
  }

  input UserUncheckedUpdateWithoutChatInput {
    id: Int
    name: String
    email: String
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    roles: [String!]
    messages: ChatUncheckedUpdateManyWithoutSenderNestedInput
  }

  input UserUpsertWithoutMessagesInput {
    update: UserUncheckedUpdateWithoutMessagesInput!
    create: UserUncheckedCreateWithoutMessagesInput!
  }

  input UserUpdateWithoutMessagesInput {
    name: String
    email: String
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    roles: [String!]
    Chat: ChatUpdateManyWithoutReceiverNestedInput
  }

  input UserUncheckedUpdateWithoutMessagesInput {
    id: Int
    name: String
    email: String
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    roles: [String!]
    Chat: ChatUncheckedUpdateManyWithoutReceiverNestedInput
  }

  input MessageUpsertWithWhereUniqueWithoutChatInput {
    where: MessageWhereUniqueInput!
    update: MessageUncheckedUpdateWithoutChatInput!
    create: MessageUncheckedCreateWithoutChatInput!
  }

  input MessageUpdateWithWhereUniqueWithoutChatInput {
    where: MessageWhereUniqueInput!
    data: MessageUncheckedUpdateWithoutChatInput!
  }

  input MessageUpdateManyWithWhereWithoutChatInput {
    where: MessageScalarWhereInput!
    data: MessageUncheckedUpdateManyWithoutMessagesInput!
  }

  input MessageScalarWhereInput {
    AND: [MessageScalarWhereInput!]
    OR: [MessageScalarWhereInput!]
    NOT: [MessageScalarWhereInput!]
    id: IntFilter
    chatId: IntFilter
    content: StringFilter
    isRead: BoolFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    isRemoved: BoolFilter
  }

  input ChatCreateWithoutMessagesInput {
    receiver: UserCreateNestedOneWithoutChatInput!
    sender: UserCreateNestedOneWithoutMessagesInput!
    title: String!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input ChatUncheckedCreateWithoutMessagesInput {
    id: Int
    receiverId: Int!
    senderId: Int!
    title: String!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input ChatCreateOrConnectWithoutMessagesInput {
    where: ChatWhereUniqueInput!
    create: ChatUncheckedCreateWithoutMessagesInput!
  }

  input ChatUpsertWithoutMessagesInput {
    update: ChatUncheckedUpdateWithoutMessagesInput!
    create: ChatUncheckedCreateWithoutMessagesInput!
  }

  input ChatUpdateWithoutMessagesInput {
    receiver: UserUpdateOneRequiredWithoutChatNestedInput
    sender: UserUpdateOneRequiredWithoutMessagesNestedInput
    title: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input ChatUncheckedUpdateWithoutMessagesInput {
    id: Int
    receiverId: Int
    senderId: Int
    title: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input ChatCreateManyReceiverInput {
    id: Int
    senderId: Int!
    title: String!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input ChatCreateManySenderInput {
    id: Int
    receiverId: Int!
    title: String!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input ChatUpdateWithoutReceiverInput {
    sender: UserUpdateOneRequiredWithoutMessagesNestedInput
    title: String
    createdAt: DateTime
    updatedAt: DateTime
    messages: MessageUpdateManyWithoutChatNestedInput
  }

  input ChatUncheckedUpdateWithoutReceiverInput {
    id: Int
    senderId: Int
    title: String
    createdAt: DateTime
    updatedAt: DateTime
    messages: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  input ChatUncheckedUpdateManyWithoutChatInput {
    id: Int
    senderId: Int
    title: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input ChatUpdateWithoutSenderInput {
    receiver: UserUpdateOneRequiredWithoutChatNestedInput
    title: String
    createdAt: DateTime
    updatedAt: DateTime
    messages: MessageUpdateManyWithoutChatNestedInput
  }

  input ChatUncheckedUpdateWithoutSenderInput {
    id: Int
    receiverId: Int
    title: String
    createdAt: DateTime
    updatedAt: DateTime
    messages: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  input ChatUncheckedUpdateManyWithoutMessagesInput {
    id: Int
    receiverId: Int
    title: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input MessageCreateManyChatInput {
    id: Int
    content: String!
    isRead: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    isRemoved: Boolean
  }

  input MessageUpdateWithoutChatInput {
    content: String
    isRead: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    isRemoved: Boolean
  }

  input MessageUncheckedUpdateWithoutChatInput {
    id: Int
    content: String
    isRead: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    isRemoved: Boolean
  }

  input MessageUncheckedUpdateManyWithoutMessagesInput {
    id: Int
    content: String
    isRead: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    isRemoved: Boolean
  }

  type AggregateUser {
    _count: UserCountAggregateOutputType
    _avg: UserAvgAggregateOutputType
    _sum: UserSumAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type AggregateChat {
    _count: ChatCountAggregateOutputType
    _avg: ChatAvgAggregateOutputType
    _sum: ChatSumAggregateOutputType
    _min: ChatMinAggregateOutputType
    _max: ChatMaxAggregateOutputType
  }

  type AggregateMessage {
    _count: MessageCountAggregateOutputType
    _avg: MessageAvgAggregateOutputType
    _sum: MessageSumAggregateOutputType
    _min: MessageMinAggregateOutputType
    _max: MessageMaxAggregateOutputType
  }

  type UserCountOutputType {
    Chat: Int!
    messages: Int!
  }

  type UserCountAggregateOutputType {
    id: Int!
    name: Int!
    email: Int!
    password: Int!
    phone: Int!
    isAdmin: Int!
    createdAt: Int!
    updatedAt: Int!
    roles: Int!
    _all: Int!
  }

  type UserAvgAggregateOutputType {
    id: Float
  }

  type UserSumAggregateOutputType {
    id: Int
  }

  type UserMinAggregateOutputType {
    id: Int
    name: String
    email: String
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  type UserMaxAggregateOutputType {
    id: Int
    name: String
    email: String
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  type ChatCountOutputType {
    messages: Int!
  }

  type ChatCountAggregateOutputType {
    id: Int!
    receiverId: Int!
    senderId: Int!
    title: Int!
    createdAt: Int!
    updatedAt: Int!
    _all: Int!
  }

  type ChatAvgAggregateOutputType {
    id: Float
    receiverId: Float
    senderId: Float
  }

  type ChatSumAggregateOutputType {
    id: Int
    receiverId: Int
    senderId: Int
  }

  type ChatMinAggregateOutputType {
    id: Int
    receiverId: Int
    senderId: Int
    title: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type ChatMaxAggregateOutputType {
    id: Int
    receiverId: Int
    senderId: Int
    title: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type MessageCountAggregateOutputType {
    id: Int!
    chatId: Int!
    content: Int!
    isRead: Int!
    createdAt: Int!
    updatedAt: Int!
    isRemoved: Int!
    _all: Int!
  }

  type MessageAvgAggregateOutputType {
    id: Float
    chatId: Float
  }

  type MessageSumAggregateOutputType {
    id: Int
    chatId: Int
  }

  type MessageMinAggregateOutputType {
    id: Int
    chatId: Int
    content: String
    isRead: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    isRemoved: Boolean
  }

  type MessageMaxAggregateOutputType {
    id: Int
    chatId: Int
    content: String
    isRead: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    isRemoved: Boolean
  }
`;
