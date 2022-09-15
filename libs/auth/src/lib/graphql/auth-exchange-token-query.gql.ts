import gql from 'graphql-tag';

import { AuthSessionFields } from '@ts/graphql/fields';

export default gql`
  query AuthExchangeToken($data: AuthExchangeTokenInput!) {
    authExchangeToken(data: $data) {
      ...AuthSessionFields
    }
  }

  ${AuthSessionFields}
`;
