import type { Auth0TokenResult } from './type'
import type { NextApiRequest, NextApiResponse } from 'next'

import { handleProfile } from '@auth0/nextjs-auth0'
import axios from 'axios'
import { NextResponse } from 'next/server'

import { setSession } from '../nextAppSession'

export const profile = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await axios.post<Auth0TokenResult>('http://localhost:3000/api/auth/token')

    await setSession('accessToken', data)

    return handleProfile(req, res)
  } catch (error) {
    if (error instanceof Error) {
      const _error = error as Error & { status?: number }

      return NextResponse.json(_error.message, { status: _error?.status || 400 })
    }

    return NextResponse.json(error, { status: 500 })
  }
}
