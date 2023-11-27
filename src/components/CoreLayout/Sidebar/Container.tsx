import React, { useContext, useEffect } from 'react'

import clsx from 'clsx'
import { useSelector } from 'react-redux'

import { Drawer } from '@/components/Common'
import { appSettingSelector } from '@/store/selector'

import { CoreLayoutContext } from '../Provider'

import { Content } from './Content'

type ContainerProps = {
  isMobileDevice?: boolean
}

const sidebarId = 'sidebar-container'

export const Container: React.FC<ContainerProps> = ({ isMobileDevice }) => {
  const { openSidebar, onToggleSidebar } = useContext(CoreLayoutContext)

  const { sidebarType } = useSelector(appSettingSelector)

  useEffect(() => {
    const sidebarEl = document.getElementById(sidebarId)

    switch (sidebarType) {
      case 'drawer':
        sidebarEl?.classList.remove('min-w-unit-16', 'min-w-unit-64')
        break
      case 'mini':
        sidebarEl?.classList.add('min-w-unit-16')
        sidebarEl?.classList.remove('min-w-unit-64')
        break
      case 'full':
        sidebarEl?.classList.add('min-w-unit-64')
        sidebarEl?.classList.remove('min-w-unit-16')
        break
    }
  }, [sidebarType])

  return (
    <div id={sidebarId} className='transition-all'>
      {sidebarType === 'drawer' && (
        <Drawer id='sidebar-drawer' open={openSidebar} onClose={() => onToggleSidebar(false)}>
          <Content isMobileDevice={isMobileDevice} items={[]} />
        </Drawer>
      )}

      {sidebarType === 'mini' && (
        <div className='h-full w-16'>
          <div className='h-full w-16 hover:w-64 fixed z-20 overflow-hidden hover:overflow-auto bg-white dark:bg-base-gradient-sidebar dark:border-gunmetal border-solid border-r transition-width'>
            <Content isMobileDevice={isMobileDevice} items={[]} />
          </div>
        </div>
      )}

      {sidebarType === 'full' && (
        <div
          className={clsx(
            'bg-white dark:bg-base-gradient-sidebar dark:border-gunmetal border-solid border-r transition-transform',
          )}
        >
          <Content isMobileDevice={isMobileDevice} items={[]} />
        </div>
      )}
    </div>
  )
}
