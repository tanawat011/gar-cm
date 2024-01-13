'use client'

import type { ComponentProps, ComponentType } from 'react'
import React from 'react'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider as ReduxProvider } from 'react-redux'

import { TW_THEME } from '@/libs/pureTailwind'
import { store } from '@/store'

type Providers = [ComponentType<any>, ComponentProps<any>?][]

const CombineProviders = (providers: Providers): React.FC<{ children: React.ReactNode }> =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props = {}]) =>
      // eslint-disable-next-line react/display-name
      ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>
            <>{children}</>
          </Provider>
        </AccumulatedProviders>
      ),
    ({ children }) => <>{children}</>,
  )

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
})

export const AllProviders = CombineProviders([
  [UserProvider],
  [ReduxProvider, { store }],
  [NextUIProvider],
  [NextThemesProvider, { attribute: 'class', defaultTheme: TW_THEME.DARK }],
  [ApolloProvider, { client }],
])
