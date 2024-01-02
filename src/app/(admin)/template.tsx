'use client'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
})

function RootAdminTemplate({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === 'development') {
    // Adds messages only in a dev environment
    loadDevMessages()
    loadErrorMessages()
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default withPageAuthRequired(RootAdminTemplate as never)
