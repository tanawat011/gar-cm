import React from 'react'

import clsx from 'clsx'
import { isMobile } from 'react-device-detect'

type ContentProps = {
  children: React.ReactNode
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className={clsx('bg-white dark:bg-base-gradient-content px-8 py-8', isMobile ? 'mt-[--navbar-h]' : 'mt-0')}>
      {children}
    </div>
  )
}
