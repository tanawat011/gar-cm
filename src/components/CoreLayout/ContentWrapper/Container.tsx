import React from 'react'

import clsx from 'clsx'

type ContainerProps = {
  isMobileDevice?: boolean
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children, isMobileDevice }) => {
  return (
    <div
      className={clsx(
        'overflow-auto scrolling-touch bg-white dark:bg-base-gradient-content relative transition-all w-full',
        isMobileDevice ? 'h-full' : 'scrolling-auto h-screen',
      )}
    >
      {children}
    </div>
  )
}
