import * as user from './user'

export const typeDefs = [user.schema]

export const dataSources = {
  users: new user.DataSource({ modelOrCollection: user.Model as never }),
}

export const resolvers = {
  Query: {
    ...user.resolvers.Query,
  },
  Mutation: {
    ...user.resolvers.Mutation,
  },
}
