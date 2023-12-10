import { gql } from '@apollo/client'

export const schema = gql`
  type User {
    _id: ID!
    username: String
    email: String
    firstName: String
    lastName: String
    age: Int
    active: Boolean
  }

  input NewUserInput {
    username: String!
    password: String!
    email: String!
    firstName: String
    lastName: String
    age: Int
  }

  input UpdateUserInput {
    _id: String!
    username: String
    email: String
    firstName: String
    lastName: String
    age: Int
  }

  type Query {
    users: [User]
    user(_id: ID!): User
  }

  type Mutation {
    createUser(input: NewUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(_id: ID!): String
    # deletePermanentlyUser(_id: ID!): String
  }
`
