import React, { useEffect } from 'react'

import clsx from 'clsx'
import { useSelector } from 'react-redux'

import { toggleOnContentWrapper } from '@/utils/sidebar'

type ContainerProps = {
  isMobileDevice?: boolean
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({
  children,
  isMobileDevice,
}) => {
  const { sidebarCollapsed, sidebarType } = useSelector(
    (state: any) => state.appSetting,
  )

  useEffect(() => {
    toggleOnContentWrapper({
      id: 'content-wrapper',
      sidebarCollapsed,
      sidebarType,
    })
  }, [sidebarCollapsed, sidebarType])

  return (
    <div
      id='content-wrapper'
      className={clsx(
        'overflow-auto scrolling-touch bg-white dark:bg-base-gradient-content relative transition-all',
        isMobileDevice ? 'h-full' : 'scrolling-auto h-screen',
      )}
    >
      {children}
    </div>
  )
}
