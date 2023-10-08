import type { Metadata } from 'next'

import dynamic from 'next/dynamic'

import { AppContainer } from '@/components/AppContainer'
import { Loading } from '@/components/BaseLayout/Loading'
import { sidebarItems } from '@/configs'
import { METADATA_BASE } from '@/constants'

const DynamicComponent = dynamic(() => import('@/components/BaseLayout'), {
  ssr: false,
  loading: Loading,
})

type AppProps = {
  children: React.ReactNode
}

export const metadata: Metadata = METADATA_BASE

export default function RootLayout({ children }: AppProps) {
  return (
    <AppContainer>
      <DynamicComponent sidebarItems={sidebarItems}>
        {children}
      </DynamicComponent>
    </AppContainer>
  )
}
