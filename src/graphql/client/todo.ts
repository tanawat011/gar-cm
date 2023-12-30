import { gql } from '@apollo/client'

export const queryTodos = gql`
  query {
    todos {
      id
      name
      detail
      tags
      done
      important
      duedate
      createdAt
      updatedAt
      deletedAt
    }
  }
`

export const mutationCreateTodo = gql`
  mutation ($name: String!, $detail: String, $tags: [String!], $done: Boolean, $important: Boolean, $duedate: String) {
    createTodo(name: $name, detail: $detail, tags: $tags, done: $done, important: $important, duedate: $duedate) {
      id
      name
      detail
      tags
      done
      important
      duedate
      createdAt
      updatedAt
      deletedAt
    }
  }
`

export const mutationUpdateTodo = gql`
  mutation (
    $id: String!
    $name: String
    $detail: String
    $tags: [String!]
    $done: Boolean
    $important: Boolean
    $duedate: String
  ) {
    updateTodo(
      id: $id
      name: $name
      detail: $detail
      tags: $tags
      done: $done
      important: $important
      duedate: $duedate
    ) {
      id
      name
      detail
      tags
      done
      important
      duedate
      createdAt
      updatedAt
      deletedAt
    }
  }
`

export const mutationDeleteTodo = gql`
  mutation ($id: String!) {
    deleteTodo(id: $id) {
      id
    }
  }
`

export const mutationForceDeleteTodo = gql`
  mutation ($id: String!) {
    forceDeleteTodo(id: $id) {
      id
    }
  }
`
