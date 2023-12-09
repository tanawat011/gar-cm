import * as todo from './todo'
import * as user from './user'

export const typeDefs = [todo.schema, user.schema]

export const dataSources = {
  todos: new todo.DataSource({ modelOrCollection: todo.Model as never }),
  users: new user.DataSource({ modelOrCollection: user.Model as never }),
}

export const resolvers = {
  Query: {
    ...todo.resolvers.Query,
    ...user.resolvers.Query,
  },
  Mutation: {
    ...todo.resolvers.Mutation,
    ...user.resolvers.Mutation,
  },
}
