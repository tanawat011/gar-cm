'use client'

import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'

function RootAdminTemplate({ children }: { children: React.ReactNode }) {
  return children
}

export default withPageAuthRequired(RootAdminTemplate as never)
