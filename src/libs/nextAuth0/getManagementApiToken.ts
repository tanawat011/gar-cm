import type { Auth0TokenResult } from './type'
import type { NextRequest } from 'next/server'

import axios from 'axios'
import { NextResponse } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getManagementApiToken = async (_: NextRequest) => {
  try {
    const { data } = await axios.post<Auth0TokenResult>(
      process.env.AUTH0_OAUTH_TOKEN_API_URL,
      {
        grant_type: 'client_credentials',
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: `${process.env.AUTH0_BASE_API_URL}/`,
      },
      {
        headers: { 'content-type': 'application/json' },
      },
    )

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    if (error instanceof Error) {
      const _error = error as Error & { status?: number }

      return NextResponse.json(_error.message, { status: _error?.status || 400 })
    }

    return NextResponse.json(error, { status: 500 })
  }
}
