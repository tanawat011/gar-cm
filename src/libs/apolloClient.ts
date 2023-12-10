import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    })

    if (networkError) console.error(`[Network error]: ${networkError}`)
  }
})

const uri = process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL ?? 'http://localhost:3000/api/graphql'

const httpLink = new HttpLink({
  uri,
  credentials: 'same-origin',
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
  credentials: 'same-origin',
  link: from([errorLink, httpLink, authLink]),
})

export default client
