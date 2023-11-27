import React, { useContext, useEffect } from 'react'

import clsx from 'clsx'
import { useSelector } from 'react-redux'

import { Drawer } from '@/components/Common'
import { TAG_ID } from '@/constants'
import { appSettingSelector } from '@/store/selector'
import { toggleOnSidebarContainer } from '@/utils/sidebar'

import { CoreLayoutContext } from '../Provider'

import { Content } from './Content'

type ContainerProps = {
  isMobileDevice?: boolean
}

export const Container: React.FC<ContainerProps> = ({ isMobileDevice }) => {
  const { openSidebar, onToggleSidebar } = useContext(CoreLayoutContext)

  const { sidebarCollapsed, sidebarType } = useSelector(appSettingSelector)

  useEffect(() => {
    // toggleOnSidebarContainer({
    //   id: TAG_ID.SIDEBAR,
    //   sidebarType,
    //   sidebarCollapsed,
    // })
  }, [sidebarCollapsed, sidebarType])

  if (sidebarType === 'drawer') {
    return (
      <Drawer id='sidebar-drawer' open={openSidebar} onClose={() => onToggleSidebar(false)}>
        <Content isMobileDevice={isMobileDevice} items={[]} />
      </Drawer>
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
