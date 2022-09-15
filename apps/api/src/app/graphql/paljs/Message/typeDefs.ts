import gql from 'graphql-tag';

export default gql`
  type Message {
    id: Int!
    chatId: Int!
    chat: Chat!
    content: String!
    isRead: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    isRemoved: Boolean!
  }

  type Query {
    findUniqueMessage(where: MessageWhereUniqueInput!): Message
    findFirstMessage(
      where: MessageWhereInput
      orderBy: [MessageOrderByWithRelationInput]
      cursor: MessageWhereUniqueInput
      take: Int
      skip: Int
      distinct: [MessageScalarFieldEnum]
    ): Message
    findManyMessage(
      where: MessageWhereInput
      orderBy: [MessageOrderByWithRelationInput]
      cursor: MessageWhereUniqueInput
      take: Int
      skip: Int
      distinct: [MessageScalarFieldEnum]
    ): [Message!]
    findManyMessageCount(
      where: MessageWhereInput
      orderBy: [MessageOrderByWithRelationInput]
      cursor: MessageWhereUniqueInput
      take: Int
      skip: Int
      distinct: [MessageScalarFieldEnum]
    ): Int!
    aggregateMessage(
      where: MessageWhereInput
      orderBy: [MessageOrderByWithRelationInput]
      cursor: MessageWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateMessage
  }

  type Mutation {
    createOneMessage(data: MessageCreateInput!): Message!
    updateOneMessage(
      data: MessageUpdateInput!
      where: MessageWhereUniqueInput!
    ): Message!
    deleteOneMessage(where: MessageWhereUniqueInput!): Message
    upsertOneMessage(
      where: MessageWhereUniqueInput!
      create: MessageCreateInput!
      update: MessageUpdateInput!
    ): Message
    deleteManyMessage(where: MessageWhereInput): BatchPayload
    updateManyMessage(
      data: MessageUpdateManyMutationInput!
      where: MessageWhereInput
    ): BatchPayload
  }
`;
