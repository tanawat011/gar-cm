import * as auth from './auth'
import * as todo from './todo'
import * as user from './user'

export const typeDefs = [auth.schema, todo.schema, user.schema]

export const middlewares = [user.middleware]

export const dataSources = {
  auth: new auth.DataSource({ modelOrCollection: user.Model as never }),
  todos: new todo.DataSource({ modelOrCollection: todo.Model as never }),
  users: new user.DataSource({ modelOrCollection: user.Model as never }),
}

export const resolvers = {
  Query: {
    ...todo.resolvers.Query,
    ...user.resolvers.Query,
  },
  Mutation: {
    ...auth.resolvers.Mutation,
    ...todo.resolvers.Mutation,
    ...user.resolvers.Mutation,
  },
}
