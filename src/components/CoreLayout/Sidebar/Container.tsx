import React, { useEffect } from 'react'

import clsx from 'clsx'
import { useSelector } from 'react-redux'

import { Content } from './Content'

type ContainerProps = {
  isMobileDevice?: boolean
}

export const Container: React.FC<ContainerProps> = ({ isMobileDevice }) => {
  const { sidebarCollapsed, sidebarType } = useSelector(
    (state: any) => state.appSetting,
  )

  useEffect(() => {
    const elContainer = document.getElementById('sidebar-container')

    if (sidebarCollapsed) {
      elContainer?.classList.add('-translate-x-full')
    } else {
      elContainer?.classList.remove('-translate-x-full')
    }
  }, [sidebarCollapsed, sidebarType])

  return (
    <div
      id='sidebar-container'
      className={clsx(
        'bg-white dark:bg-base-gradient-sidebar absolute z-10 h-full dark:border-gunmetal border-solid border-r transition-all',
        // isMobileDevice ? 'hidden' : 'hidden md:flex',
      )}
    >
      <Content isMobileDevice={isMobileDevice} items={[]} />
    </div>
  )
}
