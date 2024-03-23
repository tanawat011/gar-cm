import nextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import auth0Api from '@/libs/axios'

const handleRequest = nextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials) {
          try {
            const tokenResult = await auth0Api.post('/oauth/token', {
              username: credentials.username,
              password: credentials.password,
              client_id: process.env.AUTH0_CLIENT_ID,
              client_secret: process.env.AUTH0_CLIENT_SECRET,
              grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
              scope: 'openid profile email',
              audience: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/`,
              realm: 'Username-Password-Authentication',
              response_type: 'token id_token',
            })

            const infoResult = await auth0Api.get('/userinfo', {
              headers: {
                Authorization: `Bearer ${tokenResult.data.access_token}`,
              },
            })

            return {
              ...infoResult.data,
              id: infoResult.data.sub,
              exp: tokenResult.data.expires_in,
            }
          } catch (error) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            console.error('error', (error as any).response?.data || (error as any).message)

            throw error
          }
        }

        return null
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: false,
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: process.env.NEXT_PUBLIC_AUTH_SIGN_IN_URI,
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
      }

      return token
    },
    async session({ session, token }) {
      session.user = token

      return session
    },
  },
})

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }
