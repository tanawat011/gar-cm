'use client'

import { usePathname } from 'next/navigation'

export default function Theme() {
  const pathname = usePathname()

  return <div>App {pathname}</div>
}
