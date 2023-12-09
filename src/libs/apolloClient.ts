import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    })

    if (networkError) console.error(`[Network error]: ${networkError}`)
  }
})

const httpLink = new HttpLink({
  uri: '/api/graphql',
})

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL,
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
})

export default client
