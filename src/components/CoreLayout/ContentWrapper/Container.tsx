import React from 'react'

import clsx from 'clsx'

import { TAG_ID } from '@/constants'

type ContainerProps = {
  isMobileDevice?: boolean
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children, isMobileDevice }) => {
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
