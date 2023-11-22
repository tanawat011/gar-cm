import React, { useEffect } from 'react'

import clsx from 'clsx'
import { useSelector } from 'react-redux'

import { TAG_ID } from '@/constants'
import { appSettingSelector } from '@/store/selector'
import { toggleOnSidebarContainer } from '@/utils/sidebar'

import { Content } from './Content'

type ContainerProps = {
  isMobileDevice?: boolean
}

export const Container: React.FC<ContainerProps> = ({ isMobileDevice }) => {
  const { sidebarCollapsed, sidebarType } = useSelector(appSettingSelector)

  useEffect(() => {
    toggleOnSidebarContainer({
      id: TAG_ID.SIDEBAR,
      sidebarType,
      sidebarCollapsed,
    })
  }, [sidebarCollapsed, sidebarType])

  return (
    <div
      id={TAG_ID.SIDEBAR}
      className={clsx(
        'bg-white dark:bg-base-gradient-sidebar dark:border-gunmetal border-solid border-r transition-all',
      )}
    >
      <Content isMobileDevice={isMobileDevice} items={[]} />
    </div>
  )
}
