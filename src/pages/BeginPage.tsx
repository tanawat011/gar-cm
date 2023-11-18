'use client'
import { usePathname } from 'next/navigation'

const BeginPage = () => {
  const pathname = usePathname()

  return <div>App {pathname}</div>
}

export default BeginPage
