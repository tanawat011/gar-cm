import type { Metadata } from 'next'

import { withPageAuthRequired } from '@auth0/nextjs-auth0'

import { AppContainer } from '@/components/AppContainer'
import CoreLayout from '@/components/CoreLayout'
import { METADATA_BASE } from '@/constants'

type AppProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  ...METADATA_BASE,
  viewport: 'width=device-width, initial-scale=1',
}

function RootAdminLayout({ children }: AppProps) {
  return (
    <AppContainer>
      <CoreLayout>{children}</CoreLayout>
    </AppContainer>
  )
}

export default withPageAuthRequired(RootAdminLayout as never)
