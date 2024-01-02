import type { Metadata } from 'next'

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

export default function RootAdminLayout({ children }: AppProps) {
  return (
    <AppContainer>
      <CoreLayout>{children}</CoreLayout>
    </AppContainer>
  )
}
