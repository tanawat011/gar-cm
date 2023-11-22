'use client'

import type { SidebarItem } from '@/types/sidebar'

import React, { useEffect } from 'react'

import Link from 'next/link'
import { useSelector } from 'react-redux'

import { Icon } from '@/components/Icon'
import { useSidebar } from '@/hooks'

export type ContentProps = {
  isMobileDevice?: boolean
  items: SidebarItem[]
  onClick?: (item: SidebarItem) => void
}

export const Content: React.FC<ContentProps> = ({ isMobileDevice }) => {
  const { toggleSidebarCollapse } = useSidebar(isMobileDevice)
  const { sidebarCollapsed } = useSelector((state: any) => state.appSetting)

  return (
    <div id='sidebar-content' className='w-60'>
      <div className='flex items-center justify-between'>
        <p>Sidebar</p>

        <Icon
          id='sidebar-toggle-icon-drawer'
          name='FaBars'
          className='cursor-pointer mx-3 block md:hidden'
          onClick={() => toggleSidebarCollapse(!sidebarCollapsed)}
        />
      </div>

      <br />
      <br />

      <p className='underline'>
        <Link href={'/'}>Dashboard</Link>
      </p>

      <p className='underline'>
        <Link href={'/app/to-do'}>Road Map</Link>
      </p>

      <p className='underline'>
        <Link href={'/error'}>Example Error Page</Link>
      </p>

      <p className='underline'>
        <Link href={'/not-found'}>Example Not-Found Page</Link>
      </p>
    </div>
  )
}
