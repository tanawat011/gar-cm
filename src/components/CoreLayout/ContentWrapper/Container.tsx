import React, { useEffect } from 'react'

import clsx from 'clsx'
import { useSelector } from 'react-redux'

import { Backdrop } from '@/components/Common'
import { TAG_ID } from '@/constants'
import { useSidebar } from '@/hooks'
import { appSettingSelector } from '@/store/selector'
import { toggleOnContentWrapper } from '@/utils/sidebar'

type ContainerProps = {
  isMobileDevice?: boolean
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children, isMobileDevice }) => {
  const { toggleSidebarCollapse } = useSidebar(isMobileDevice)
  const { sidebarCollapsed, sidebarType } = useSelector(appSettingSelector)

  useEffect(() => {
    // toggleOnContentWrapper({
    //   id: TAG_ID.CONTENT_WRAPPER,
    //   sidebarCollapsed,
    //   sidebarType,
    //   isMobileDevice,
    // })
  }, [sidebarCollapsed, sidebarType])

  return (
    <>
      <div
        id={TAG_ID.CONTENT_WRAPPER}
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
