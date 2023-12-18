import type { NextApiRequest, NextApiResponse } from 'next'

import { createYoga } from 'graphql-yoga'

import { createContext } from '@/graphql/context'
import { schema } from '@/graphql/schema'

const { handleRequest } = createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema,
  context: createContext,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
})

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }
