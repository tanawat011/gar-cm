// graphql/context.ts
import type { Auth0TokenResult } from '@/libs/nextAuth0'
import type { Session } from '@auth0/nextjs-auth0'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { NextRequest, NextResponse } from 'next/server'

import { getSession } from '@auth0/nextjs-auth0'

import { getSession as getAppSession } from '@/libs/nextAppSession'

export type Context = {
  req: NextRequest
  res: NextResponse
  user: Session
  accessToken: Auth0TokenResult
} & ReturnType<typeof createContext>

export async function createContext({ request, response }: { request: NextApiRequest; response: NextApiResponse }) {
  const session = await getSession(request, response)
  const accessToken = await getAppSession<Auth0TokenResult>('accessToken')

  // if the user is not logged in, return null
  if (!session || typeof session === 'undefined') throw new Error('You must be logged in to perform this action')

  const { user } = session

  return {
    req: request,
    res: response,
    user,
    accessToken,
  }
}
