import React, { useEffect } from 'react'

import clsx from 'clsx'
import { useSelector } from 'react-redux'

import { useSidebar } from '@/hooks'
import { toggleOnContentWrapper } from '@/utils/sidebar'

type ContainerProps = {
  isMobileDevice?: boolean
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({
  children,
  isMobileDevice,
}) => {
  const { toggleSidebarCollapse } = useSidebar(isMobileDevice)
  const { sidebarCollapsed, sidebarType } = useSelector(
    (state: any) => state.appSetting,
  )

  useEffect(() => {
    toggleOnContentWrapper({
      id: 'content-wrapper',
      sidebarCollapsed,
      sidebarType,
      isMobileDevice,
    })
  }, [sidebarCollapsed, sidebarType])

  return (
    <>
      {sidebarType === 'drawer' && !sidebarCollapsed && (
        <div
          className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-70 z-[2]'
          onClick={() => toggleSidebarCollapse(!sidebarCollapsed)}
        />
      )}

      <div
        id='content-wrapper'
        className={clsx(
          'overflow-auto scrolling-touch bg-white dark:bg-base-gradient-content relative transition-all',
          isMobileDevice ? 'h-full' : 'scrolling-auto h-screen',
        )}
      >
        {children}
      </div>
    </>
  )
}
