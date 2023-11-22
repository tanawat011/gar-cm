'use client'

import type { SidebarItem } from '@/types/sidebar'

import React, { useEffect } from 'react'

import Link from 'next/link'
import { useSelector } from 'react-redux'

import { Icon } from '@/components/Icon'
import { TAG_ID } from '@/constants'
import { useSidebar } from '@/hooks'
import { appSettingSelector } from '@/store/selector'
import { toggleOnSidebarContent } from '@/utils/sidebar'

export type ContentProps = {
  isMobileDevice?: boolean
  items: SidebarItem[]
  onClick?: (item: SidebarItem) => void
}

export const Content: React.FC<ContentProps> = ({ isMobileDevice }) => {
  const { toggleSidebarCollapse } = useSidebar(isMobileDevice)
  const { sidebarCollapsed, sidebarType } = useSelector(appSettingSelector)

  useEffect(() => {
    toggleOnSidebarContent({
      id: TAG_ID.SIDEBAR_CONTENT,
      sidebarType,
    })
  }, [sidebarType])

  return (
    <div id={TAG_ID.SIDEBAR_CONTENT} className='w-64 transition-all'>
      <div className='flex items-center justify-between'>
        <p>Sidebar</p>

        {sidebarType === 'drawer' && (
          <Icon
            id={TAG_ID.SIDEBAR_TOGGLE_ICON_DRAWER}
            name='FaBars'
            className='cursor-pointer mx-3'
            onClick={() => toggleSidebarCollapse(!sidebarCollapsed)}
          />
        )}
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
