'use client'

import { ApolloProvider } from '@apollo/client'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider as ReduxProvider } from 'react-redux'

import '@/assets/css/global.css'
import { THEME } from '@/constants'
import client from '@/libs/apolloClient'
import { store } from '@/store'

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body
        id='core-body'
        className='w-full h-full relative font-monaspace-neon bg-background text-black dark:text-white'
      >
        <time dateTime={new Date().toISOString()} suppressHydrationWarning />

        <ApolloProvider client={client}>
          <ReduxProvider store={store}>
            <NextUIProvider>
              <NextThemesProvider attribute='class' defaultTheme={THEME.DARK}>
                {children}
              </NextThemesProvider>
            </NextUIProvider>
          </ReduxProvider>
        </ApolloProvider>
      </body>
    </html>
  )
}
