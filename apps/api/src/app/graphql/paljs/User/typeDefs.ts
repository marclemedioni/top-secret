import gql from 'graphql-tag';

export default gql`
  type User {
    id: Int!
    name: String
    email: String!
    password: String
    phone: String
    isAdmin: Boolean
    createdAt: DateTime!
    updatedAt: DateTime!
    roles: [String!]!
    Chat(
      where: ChatWhereInput
      orderBy: ChatOrderByWithRelationInput
      cursor: ChatWhereUniqueInput
      take: Int
      skip: Int
      distinct: ChatScalarFieldEnum
    ): [Chat!]!
    messages(
      where: ChatWhereInput
      orderBy: ChatOrderByWithRelationInput
      cursor: ChatWhereUniqueInput
      take: Int
      skip: Int
      distinct: ChatScalarFieldEnum
    ): [Chat!]!
    _count: UserCountOutputType!
  }

  type Query {
    findUniqueUser(where: UserWhereUniqueInput!): User
    findFirstUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): User
    findManyUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): [User!]
    findManyUserCount(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): Int!
    aggregateUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateUser
  }

  type Mutation {
    createOneUser(data: UserCreateInput!): User!
    updateOneUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User!
    deleteOneUser(where: UserWhereUniqueInput!): User
    upsertOneUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User
    deleteManyUser(where: UserWhereInput): BatchPayload
    updateManyUser(
      data: UserUpdateManyMutationInput!
      where: UserWhereInput
    ): BatchPayload
  }
`;
