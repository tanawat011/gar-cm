import { gql } from '@apollo/client'

export const todos = gql`
  query {
    todos {
      id
      name
      done
      category
    }
  }
`

export const createTodo = gql`
  mutation ($name: String!, $done: Boolean, $category: String) {
    createTodo(name: $name, done: $done, category: $category) {
      id
      name
      done
      category
    }
  }
`

export const updateTodo = gql`
  mutation ($id: String!, $name: String!, $done: Boolean, $category: String) {
    updateTodo(id: $id, name: $name, done: $done, category: $category) {
      id
      name
      done
      category
    }
  }
`

export const deleteTodo = gql`
  mutation ($id: String!) {
    deleteTodo(id: $id) {
      id
    }
  }
`
