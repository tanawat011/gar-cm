import React, { useEffect } from 'react'

import clsx from 'clsx'
import { useSelector } from 'react-redux'

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
    const elContainer = document.getElementById('content-wrapper')

    if (sidebarType === 'normal') {
      if (sidebarCollapsed) {
        elContainer?.classList.remove('ml-60')
      } else {
        elContainer?.classList.add('ml-60')
      }
    } else {
      elContainer?.classList.remove('ml-60')
    }
  }, [sidebarCollapsed, sidebarType])

  return (
    <div
      id='content-wrapper'
      className={clsx(
        'overflow-auto scrolling-touch w-full bg-white dark:bg-base-gradient-content relative transition-all',
        isMobileDevice ? 'h-full' : 'scrolling-auto h-screen',
      )}
    >
      {children}
    </div>
  )
}
