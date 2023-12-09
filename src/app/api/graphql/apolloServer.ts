import type { NextRequest } from 'next/server'

import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

import { typeDefs, dataSources, resolvers } from './options'

const server = new ApolloServer({
  resolvers,
  typeDefs: typeDefs,
})

export const handlerApolloServer = startServerAndCreateNextHandler<NextRequest>(server as never, {
  context: async (req, res) => {
    return {
      req,
      res,
      dataSources,
    }
  },
})
