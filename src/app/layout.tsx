import { withPageAuthRequired } from '@auth0/nextjs-auth0'

type AppProps = {
  children: React.ReactNode
}

function RootLayout({ children }: AppProps) {
  return <>{children}</>
}

export default withPageAuthRequired(RootLayout as never)
