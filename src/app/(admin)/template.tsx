'use client'

import { useRouteProtect } from '@/hooks'

export default function RootAdminTemplate({ children }: { children: React.ReactNode }) {
  useRouteProtect()

  return children
}
