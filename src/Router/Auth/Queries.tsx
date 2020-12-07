import { gql } from "@apollo/client";

export const GqlLogin = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      error
      token
    }
  }
`;

export const GqlCreateUser = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $username: String!
    $firstName: String
    $lastName: String
  ) {
    createUser(
      input: {
        email: $email
        password: $password
        username: $username
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      ok
      error
    }
  }
`;
