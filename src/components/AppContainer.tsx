'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider as ReduxProvider } from 'react-redux'

import '@/assets/css/global.css'
import { THEME } from '@/constants'
import { store } from '@/store'

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body className='w-full h-full font-monaspace-neon bg-white dark:bg-base-gradient-content text-black dark:text-white'>
        <time dateTime={new Date().toISOString()} suppressHydrationWarning />

        <ReduxProvider store={store}>
          <NextUIProvider>
            <NextThemesProvider attribute='class' defaultTheme={THEME.DARK}>
              {children}
            </NextThemesProvider>
          </NextUIProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
