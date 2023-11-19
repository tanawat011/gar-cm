import React, { useEffect } from 'react'

import clsx from 'clsx'

import { Content } from './Content'

type ContainerProps = {
  isMobileDevice?: boolean
}

export const Container: React.FC<ContainerProps> = ({ isMobileDevice }) => {
  // const listenStorageChange = () => {
  //   const type = localStorage.getItem('sidebarType')
  //   const collapse = localStorage.getItem('sidebarCollapse')

  //   console.log('type', type)
  //   console.log('collapse', collapse)
  // }

  // useEffect(() => {
  //   window.addEventListener('storage', listenStorageChange)

  //   return () => window.removeEventListener('storage', listenStorageChange)
  // }, [localStorage.getItem('sidebarType')])

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
