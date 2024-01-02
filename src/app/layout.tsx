import { UserProvider } from '@auth0/nextjs-auth0/client'

type AppProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: AppProps) {
  return <UserProvider>{children}</UserProvider>
}
