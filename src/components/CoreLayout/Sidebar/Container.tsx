import React, { useContext } from 'react'

import clsx from 'clsx'
import { useSelector } from 'react-redux'

import { Drawer } from '@/components/Common'
import { TAG_ID } from '@/constants'
import { appSettingSelector } from '@/store/selector'

import { CoreLayoutContext } from '../Provider'

import { Content } from './Content'

type ContainerProps = {
  isMobileDevice?: boolean
}

export const Container: React.FC<ContainerProps> = ({ isMobileDevice }) => {
  const { openSidebar, onToggleSidebar } = useContext(CoreLayoutContext)

  const { sidebarType } = useSelector(appSettingSelector)

  if (sidebarType === 'drawer') {
    return (
      <Drawer id='sidebar-drawer' open={openSidebar} onClose={() => onToggleSidebar(false)}>
        <Content isMobileDevice={isMobileDevice} items={[]} />
      </Drawer>
    )
  }

  if (sidebarType === 'mini') {
    return (
      <div className='min-w-unit-16 z-10'>
        <div className='h-full w-16 hover:w-64 hover:fixed hover:z-10 transition-all overflow-hidden hover:overflow-auto'>
          <Content isMobileDevice={isMobileDevice} items={[]} />
        </div>
      </div>
    )
  }

  return (
    <div
      id={TAG_ID.SIDEBAR}
      className={clsx(
        'bg-white dark:bg-base-gradient-sidebar dark:border-gunmetal border-solid border-r transition-transform',
      )}
    >
      <Content isMobileDevice={isMobileDevice} items={[]} />
    </div>
  )
}
