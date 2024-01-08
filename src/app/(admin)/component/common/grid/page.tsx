'use client'

import { usePathname } from 'next/navigation'

import { Grid } from '@/components/Common'

export default function PageGrid() {
  const pathname = usePathname()

  return <Grid>App {pathname}</Grid>
}
