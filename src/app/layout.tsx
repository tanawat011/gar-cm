import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'

import '@/assets/css/global.css'
import { AllProviders } from '@/components/AllProviders'

type AppProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: AppProps) {
  if (process.env.NODE_ENV === 'development') {
    // Adds messages only in a dev environment
    loadDevMessages()
    loadErrorMessages()
  }

  return (
    <html suppressHydrationWarning>
      <body
        id='core-body'
        className='w-full h-full relative font-monaspace-neon bg-background text-black dark:text-white'
      >
        <time dateTime={new Date().toISOString()} suppressHydrationWarning />

        <AllProviders>{children}</AllProviders>
      </body>
    </html>
  )
}
