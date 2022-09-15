import gql from 'graphql-tag';

export const AccountInfoFields = gql`
  fragment AccountInfoFields on AccountInfo {
    name
    hasPassword
  }
`;
