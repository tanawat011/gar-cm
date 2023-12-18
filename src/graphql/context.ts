// graphql/context.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import type { NextRequest, NextResponse } from 'next/server'

import { getSession } from '@auth0/nextjs-auth0'

export type Context = {
  request: NextRequest
  response: NextResponse
} & ReturnType<typeof createContext>

export async function createContext({ req, res }: { req: NextApiRequest; res: NextApiResponse }) {
  const session = await getSession(req, res)

  // if the user is not logged in, return null
  if (!session || typeof session === 'undefined') throw new Error('You must be logged in to perform this action')

  const { user } = session

  return {
    ...user,
  }
}
