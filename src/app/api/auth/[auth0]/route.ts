import type { NextApiRequest, NextApiResponse } from 'next'

import { handleAuth, handleCallback, handleLogin } from '@auth0/nextjs-auth0'

export const GET = handleAuth({
  login: async (req: NextApiRequest, res: NextApiResponse) => {
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
  },
  callback: async (req: NextApiRequest, res: NextApiResponse) => {
    const defaultUrl = 'http://localhost:3000'
    const redirectUri = process.env.AUTH0_BASE_URL || defaultUrl

    try {
      // if (process.env.NODE_ENV === 'development' && !req.url?.includes('localhost')) {
      //   redirectUri = process.env.AUTH0_BASE_URL_IP || defaultUrl
      // }

      return handleCallback(req, res, { redirectUri })
    } catch (error) {
      console.error(error)

      res.redirect(redirectUri)
    }
  },
})
