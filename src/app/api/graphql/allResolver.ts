import * as user from './user'

export const allResolver = {
  Query: {
    ...user.resolvers.Query,
  },
  Mutation: {
    ...user.resolvers.Mutation,
  },
}
