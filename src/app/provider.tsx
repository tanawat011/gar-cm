'use client'
import React from 'react'

import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export const AllProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <SessionProvider session={null}>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        <NextUIProvider>{children}</NextUIProvider>
      </NextThemesProvider>
    </SessionProvider>
  )
}
