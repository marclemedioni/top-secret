import gql from 'graphql-tag';

import { AuthSessionFields } from '@ts/graphql/fields';

gql`
  query AuthLogin($data: AuthLoginInput!) {
    authLogin(data: $data) {
      ...AuthSessionFields
    }
  }

  ${AuthSessionFields}
`;
