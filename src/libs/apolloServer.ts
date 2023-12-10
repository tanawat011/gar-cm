import type { NextRequest } from 'next/server'

import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

import { typeDefs, dataSources, resolvers } from '@/graphql/options'

const server = new ApolloServer({
  resolvers,
  typeDefs,
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
