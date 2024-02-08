import { handleAuth } from '@auth0/nextjs-auth0'

import { profile, login, callback } from '@/libs/nextAuth0'

export const GET = handleAuth({
  login,
  callback,
  profile,
})
