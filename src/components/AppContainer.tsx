'use client'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider as ReduxProvider } from 'react-redux'

import '@/assets/css/global.css'
import { THEME } from '@/constants'
import { store } from '@/store'

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
})

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  if (process.env.NODE_ENV === 'development') {
    // Adds messages only in a dev environment
    loadDevMessages()
    loadErrorMessages()
  }

  return (
    <ReduxProvider store={store}>
      <NextUIProvider>
        <NextThemesProvider attribute='class' defaultTheme={THEME.DARK}>
          <ApolloProvider client={client}>
            <UserProvider>{children}</UserProvider>
          </ApolloProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </ReduxProvider>
  )
}
