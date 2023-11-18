'use client'

import type { SidebarItem } from '@/types/sidebar'

import React from 'react'

export type ContentProps = {
  items: SidebarItem[]
  onClick?: (item: SidebarItem) => void
}

export const Content: React.FC<ContentProps> = () => {
  return <div className='w-60'>Sidebar</div>
}
