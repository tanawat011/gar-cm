'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import '@/assets/css/global.css'
import { THEME } from '@/constants'

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body className='font-monaspace-neon bg-base-gradient-content text-black dark:text-white'>
        <time dateTime={new Date().toISOString()} suppressHydrationWarning />

        <NextUIProvider>
          <NextThemesProvider attribute='class' defaultTheme={THEME.DARK}>
            {children}
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
