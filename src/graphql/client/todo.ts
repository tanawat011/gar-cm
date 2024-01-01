import { gql } from '@apollo/client'

export const queryTodos = gql`
  query (
    $search: String
    $done: Boolean
    $important: Boolean
    $deleted: Boolean
    $undone: Boolean
    $unimportant: Boolean
    $undeleted: Boolean
    $page: Int
    $limit: Int
  ) {
    todos(
      search: $search
      done: $done
      important: $important
      deleted: $deleted
      undone: $undone
      unimportant: $unimportant
      undeleted: $undeleted
      page: $page
      limit: $limit
    ) {
      count
      data {
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
