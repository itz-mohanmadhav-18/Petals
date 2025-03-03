import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($userId: String!, $password: String!) {
    login(userId: $userId, password: $password) {
      token
      user {
        id
        name
        role
        email
      }
    }
  }
`;