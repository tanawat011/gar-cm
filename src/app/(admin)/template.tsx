'use client'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev'

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
})

export default function RootAdminTemplate({ children }: { children: React.ReactNode }) {
  if (true) {
    // Adds messages only in a dev environment
    loadDevMessages()
    loadErrorMessages()
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
