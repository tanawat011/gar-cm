'use client'
import { usePathname } from 'next/navigation'

const JustInitPage = () => {
  const pathname = usePathname()

  return <div>App {pathname}</div>
}

export default JustInitPage
