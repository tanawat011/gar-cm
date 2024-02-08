import type { NextApiRequest } from 'next'

import { getManagementApiToken } from '@/libs/nextAuth0'

export const POST = async (req: NextApiRequest) => {
  return getManagementApiToken(req)
}
