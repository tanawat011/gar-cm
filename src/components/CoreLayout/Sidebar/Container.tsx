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
    console.log('sidebarType', sidebarType)
    console.log('sidebarCollapsed', sidebarCollapsed)
  }, [sidebarCollapsed])

  return (
    <div
      className={clsx(
        'bg-white dark:bg-base-gradient-sidebar dark:border-gunmetal border-solid border-r',
        isMobileDevice ? 'hidden' : 'hidden md:block',
      )}
    >
      <Content items={[]} />
    </div>
  )
}
