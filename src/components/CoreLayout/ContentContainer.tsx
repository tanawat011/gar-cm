import React from 'react'

import clsx from 'clsx'
import { isMobile } from 'react-device-detect'

type ContentContainerProps = {
  children: React.ReactNode
}

export const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return (
    <div
      className={clsx(
        'overflow-auto scrolling-touch bg-white dark:bg-base-gradient-content relative transition-all w-full',
        isMobile ? 'h-full mt-16' : 'scrolling-auto h-screen',
      )}
    >
      {children}
    </div>
  )
}
