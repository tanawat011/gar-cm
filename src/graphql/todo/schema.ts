import { gql } from '@apollo/client'

export const schema = gql`
  type Todo {
    _id: ID!
    title: String!
    detail: String!
    status: String!
    active: Boolean
  }

  input NewTodoInput {
    title: String!
    detail: String!
    status: String!
  }

  input UpdateTodoInput {
    _id: String!
    title: String!
    detail: String!
    status: String!
  }

  type Query {
    todos: [Todo]
    todo(_id: ID!): Todo
  }

  type Mutation {
    createTodo(input: NewTodoInput!): Todo
    updateTodo(input: UpdateTodoInput!): Todo
    deleteTodo(_id: ID!): String
  }
`
