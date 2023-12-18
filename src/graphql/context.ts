// graphql/context.ts
import type { NextApiRequest, NextApiResponse } from 'next'

import { getSession } from '@auth0/nextjs-auth0'

export async function createContext({ req, res }: { req: NextApiRequest; res: NextApiResponse }) {
  return {
    email: 'test@gmail.com',
    username: 'test',
    accessToken: 'xxxxxx-xxxx-xxxx-xxxxx',
  }
}
