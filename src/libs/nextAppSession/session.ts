import type { Auth0TokenResult } from '../nextAuth0'

import nextAppSession from 'next-app-session'

export type NextAppSession = {
  accessToken: Auth0TokenResult
}

export const session = nextAppSession<NextAppSession>({
  name: process.env.SERVER_SIDE_SESSION_NAME,
  secret: process.env.SERVER_SIDE_SESSION_SECRET,
})

export const setSession = async <T = unknown>(key: string, value: T) => {
  await session().set(key, value)
}

export const getSession = async <T = unknown>(key: string) => {
  return (await session().get(key)) as T
}
