'use client'

import { usePathname } from 'next/navigation'

export default function Profile() {
  const pathname = usePathname()

  return <div>App {pathname}</div>
}
