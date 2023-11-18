import type { Metadata } from 'next'

import { AppContainer } from '@/components/AppContainer'
import CoreLayout from '@/components/CoreLayout'
import { METADATA_BASE } from '@/constants'

type AppProps = {
  children: React.ReactNode
}

export const metadata: Metadata = METADATA_BASE

export default function RootLayout({ children }: AppProps) {
  return (
    <AppContainer>
      <CoreLayout>{children}</CoreLayout>
    </AppContainer>
  )
}
