import { gql } from '@apollo/client'

export const schema = gql`
  type User {
    _id: ID!
    username: String!
    firstName: String!
    lastName: String!
    email: String!
    age: Int!
    active: Boolean
  }

  input NewUserInput {
    username: String!
    password: String!
    firstName: String!
    lastName: String!
    email: String!
    age: Int!
  }

  input UpdateUserInput {
    _id: String!
    firstName: String
    lastName: String
    email: String
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
  }
`
