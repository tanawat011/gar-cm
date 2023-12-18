// graphql/context.ts
import type { NextApiRequest, NextApiResponse } from 'next'

import { getSession } from '@auth0/nextjs-auth0'

export async function createContext({ req, res }: { req: NextApiRequest; res: NextApiResponse }) {
  // const session = await getSession(req, res)

  // // if the user is not logged in, return null
  // if (!session || typeof session === 'undefined') return {}

  // const { user, accessToken } = session

  return {
    email: 'test@gmail.com',
    accessToken: 'xxxxxx-xxxx-xxxx-xxxxx',
  }
}
