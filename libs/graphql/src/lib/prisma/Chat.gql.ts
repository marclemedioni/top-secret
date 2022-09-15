import gql from 'graphql-tag';

import { ChatFields } from '../fields';

export default gql`
  query FindUniqueChat($where: ChatWhereUniqueInput!) {
    findUniqueChat(where: $where) {
      ...ChatFields
    }
  }

  query FindFirstChat(
    $where: ChatWhereInput
    $orderBy: [ChatOrderByWithRelationInput]
    $cursor: ChatWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [ChatScalarFieldEnum]
  ) {
    findFirstChat(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...ChatFields
    }
  }

  query FindManyChat(
    $where: ChatWhereInput
    $orderBy: [ChatOrderByWithRelationInput]
    $cursor: ChatWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [ChatScalarFieldEnum]
  ) {
    findManyChat(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...ChatFields
    }
  }

  query FindManyChatCount(
    $where: ChatWhereInput
    $orderBy: [ChatOrderByWithRelationInput]
    $cursor: ChatWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [ChatScalarFieldEnum]
  ) {
    findManyChatCount(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    )
  }

  mutation CreateOneChat($data: ChatCreateInput!) {
    createOneChat(data: $data) {
      ...ChatFields
    }
  }

  mutation UpdateOneChat($data: ChatUpdateInput!, $where: ChatWhereUniqueInput!) {
    updateOneChat(data: $data, where: $where) {
      ...ChatFields
    }
  }

  mutation UpdateManyChat($data: ChatUpdateManyMutationInput!, $where: ChatWhereInput!) {
    updateManyChat(data: $data, where: $where) {
      count
    }
  }

  mutation UpsertOneChat(
    $where: ChatWhereUniqueInput!
    $create: ChatCreateInput!
    $update: ChatUpdateInput!
  ) {
    upsertOneChat(where: $where, create: $create, update: $update) {
      ...ChatFields
    }
  }

  mutation DeleteOneChat($where: ChatWhereUniqueInput!) {
    deleteOneChat(where: $where) {
      id
    }
  }

  mutation DeleteManyChat($where: ChatWhereInput!) {
    deleteManyChat(where: $where) {
      count
    }
  }

  ${ChatFields}
`;
