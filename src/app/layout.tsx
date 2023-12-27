type AppProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: AppProps) {
  return <>{children}</>
}
