import type { Metadata } from 'next'

import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign In to access the admin dashboard.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  if (session) return redirect(process.env.NEXT_PUBLIC_AUTH_REDIRECT_URI)

  return children
}
