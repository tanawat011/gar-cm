import type { NextApiRequest, NextApiResponse } from 'next'

import { createYoga } from 'graphql-yoga'

import { createContext } from '@/graphql/context'
import { schema } from '@/graphql/schema'

export const yoga = createYoga<{
  request: NextApiRequest
  response: NextApiResponse
}>({
  schema,
  context: createContext,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
})
