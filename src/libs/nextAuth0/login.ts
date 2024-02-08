import type { NextApiRequest, NextApiResponse } from 'next'

import { handleLogin } from '@auth0/nextjs-auth0'

export const login = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    return handleLogin(req, res, {
      authorizationParams: {
        scope: 'openid profile email',
      },
    })
  } catch (error) {
    console.error(error)

    if (error instanceof Error) {
      const _error = error as Error & { status?: number }

      return res.status(_error?.status || 400).end(_error.message)
    }

    return res.status(500).end(error)
  }
}
