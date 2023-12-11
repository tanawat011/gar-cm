import { gql } from '@apollo/client'

export const schema = gql`
  type AuthInfo {
    _id: ID!
    username: String
    email: String
    firstName: String
    lastName: String
    age: Int
    active: Boolean
    token: String
  }

  type Mutation {
    signIn(email: String!, password: String!): AuthInfo
  }
`
