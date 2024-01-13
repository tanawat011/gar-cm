'use client'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider as ReduxProvider } from 'react-redux'

import '@/assets/css/global.css'
import { TW_THEME } from '@/libs/pureTailwind'
import { store } from '@/store'

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
})

const AppContainer = ({ children }: { children: React.ReactNode }) => {
  if (process.env.NODE_ENV === 'development') {
    // Adds messages only in a dev environment
    loadDevMessages()
    loadErrorMessages()
  }

  return (
    <ReduxProvider store={store}>
      <NextUIProvider>
        <NextThemesProvider attribute='class' defaultTheme={TW_THEME.DARK}>
          <ApolloProvider client={client}>
            <UserProvider>{children}</UserProvider>
          </ApolloProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </ReduxProvider>
  )
}

export default AppContainer
