import type { NextApiRequest, NextApiResponse } from 'next'

import { handleAuth, handleCallback } from '@auth0/nextjs-auth0'

export const GET = handleAuth({
  callback: async (req: NextApiRequest, res: NextApiResponse) => {
    const defaultUrl = 'http://localhost:3000'
    let redirectUri = process.env.AUTH0_BASE_URL || defaultUrl

    try {
      if (process.env.NODE_ENV === 'development' && !req.url?.includes('localhost')) {
        redirectUri = process.env.AUTH0_BASE_URL_IP || defaultUrl
      }

      return handleCallback(req, res, { redirectUri })
    } catch (error) {
      console.error(error)

      res.redirect(redirectUri)
    }
  },
})
