type AppProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: AppProps) {
  return (
    <html suppressHydrationWarning>
      <body
        id='core-body'
        className='w-full h-full relative font-monaspace-neon bg-background text-black dark:text-white'
      >
        <time dateTime={new Date().toISOString()} suppressHydrationWarning />

        {children}
      </body>
    </html>
  )
}
