import type { NextRequest } from 'next/server'

import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { applyMiddleware } from 'graphql-middleware'

import { authMiddleware, metricsMiddleware } from '@/graphql/middleware'
import { typeDefs, dataSources, resolvers, middlewares } from '@/graphql/options'

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})

const schemaWithMiddleware = applyMiddleware(schema, metricsMiddleware, authMiddleware, ...middlewares)

const server = new ApolloServer({
  schema: schemaWithMiddleware,
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
