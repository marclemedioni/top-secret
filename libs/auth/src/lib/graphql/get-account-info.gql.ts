import gql from 'graphql-tag';

import { AccountInfoFields } from '@ts/graphql/fields';

export default gql`
  query GetAccountInfo {
    accountInfo {
      ...AccountInfoFields
    }
  }

  ${AccountInfoFields}
`;
