import gql from 'graphql-tag';

export const MessageFields = gql`
  fragment MessageFields on Message {
    id
    # TODO: Add fields
  }
`;
