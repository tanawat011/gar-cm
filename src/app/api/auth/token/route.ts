import type { NextRequest } from 'next/server'

import { getManagementApiToken } from '@/libs/nextAuth0'

export const POST = async (req: NextRequest) => {
  return getManagementApiToken(req)
}
