'use client'

import type { SidebarItem } from '@/types/sidebar'

import React from 'react'

import Link from 'next/link'

export type ContentProps = {
  items: SidebarItem[]
  onClick?: (item: SidebarItem) => void
}

export const Content: React.FC<ContentProps> = () => {
  return (
    <div className='w-60'>
      <p>Sidebar</p>
      <br />
      <br />
      <p className='underline'>
        <Link href={'/'}>Dashboard</Link>
      </p>
      <p className='underline'>
        <Link href={'/app/to-do'}>Road Map</Link>
      </p>
    </div>
  )
}
