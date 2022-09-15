import gql from 'graphql-tag';

import { MessageFields } from '../fields';

export default gql`
  query FindUniqueMessage($where: MessageWhereUniqueInput!) {
    findUniqueMessage(where: $where) {
      ...MessageFields
    }
  }

  query FindFirstMessage(
    $where: MessageWhereInput
    $orderBy: [MessageOrderByWithRelationInput]
    $cursor: MessageWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [MessageScalarFieldEnum]
  ) {
    findFirstMessage(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...MessageFields
    }
  }

  query FindManyMessage(
    $where: MessageWhereInput
    $orderBy: [MessageOrderByWithRelationInput]
    $cursor: MessageWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [MessageScalarFieldEnum]
  ) {
    findManyMessage(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...MessageFields
    }
  }

  query FindManyMessageCount(
    $where: MessageWhereInput
    $orderBy: [MessageOrderByWithRelationInput]
    $cursor: MessageWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [MessageScalarFieldEnum]
  ) {
    findManyMessageCount(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    )
  }

  mutation CreateOneMessage($data: MessageCreateInput!) {
    createOneMessage(data: $data) {
      ...MessageFields
    }
  }

  mutation UpdateOneMessage($data: MessageUpdateInput!, $where: MessageWhereUniqueInput!) {
    updateOneMessage(data: $data, where: $where) {
      ...MessageFields
    }
  }

  mutation UpdateManyMessage($data: MessageUpdateManyMutationInput!, $where: MessageWhereInput!) {
    updateManyMessage(data: $data, where: $where) {
      count
    }
  }

  mutation UpsertOneMessage(
    $where: MessageWhereUniqueInput!
    $create: MessageCreateInput!
    $update: MessageUpdateInput!
  ) {
    upsertOneMessage(where: $where, create: $create, update: $update) {
      ...MessageFields
    }
  }

  mutation DeleteOneMessage($where: MessageWhereUniqueInput!) {
    deleteOneMessage(where: $where) {
      id
    }
  }

  mutation DeleteManyMessage($where: MessageWhereInput!) {
    deleteManyMessage(where: $where) {
      count
    }
  }

  ${MessageFields}
`;
