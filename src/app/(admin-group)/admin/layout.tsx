import type { Metadata } from 'next'

import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Admin management',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  if (!session) return redirect(process.env.NEXT_PUBLIC_AUTH_SIGN_IN_URI)

  return children
}
