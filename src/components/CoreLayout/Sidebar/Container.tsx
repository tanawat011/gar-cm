import React, { useContext, useEffect } from 'react'

import clsx from 'clsx'
import { useSelector } from 'react-redux'

import { Drawer } from '@/components/Common'
import { appSettingSelector } from '@/store/selector'

import { CoreLayoutContext } from '../Provider'

import { Content } from './Content'

const sidebarId = 'sidebar-container'

export const Container = () => {
  const { openSidebar, onToggleSidebar } = useContext(CoreLayoutContext)

  const { sidebarType } = useSelector(appSettingSelector)

  useEffect(() => {
    const sidebarEl = document.getElementById(sidebarId)

    switch (sidebarType) {
      case 'drawer':
        sidebarEl?.classList.add('w-0')
        sidebarEl?.classList.remove('w-16', 'w-64')
        break
      case 'mini':
        sidebarEl?.classList.add('w-16')
        sidebarEl?.classList.remove('w-64', 'w-0')
        break
      case 'full':
        sidebarEl?.classList.add('w-64')
        sidebarEl?.classList.remove('w-16', 'w-0')
        break
    }
  }, [sidebarType])

  return (
    <div id={sidebarId} className='transition-width'>
      {sidebarType === 'drawer' && (
        <Drawer id='sidebar-drawer' open={openSidebar} onClose={() => onToggleSidebar(false)}>
          <Content className='w-64' />
        </Drawer>
      )}

      {sidebarType === 'mini' && (
        <div className='h-full w-16 transition-width'>
          <div className='h-full w-16 hover:w-64 fixed z-20 overflow-hidden hover:overflow-auto bg-white dark:bg-base-gradient-sidebar dark:border-gunmetal border-solid border-r transition-width'>
            <Content className='w-[calc(theme(spacing.64)-1px)]' />
          </div>
        </div>
      )}

      {sidebarType === 'full' && (
        <div
          className={clsx(
            'bg-white h-full dark:bg-base-gradient-sidebar dark:border-gunmetal border-solid border-r transition-width',
          )}
        >
          <Content className='w-64' />
        </div>
      )}
    </div>
  )
}
