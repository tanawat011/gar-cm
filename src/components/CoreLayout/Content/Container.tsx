import React from 'react'

import clsx from 'clsx'

type ContainerProps = {
  isMobileDevice?: boolean
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({
  children,
  isMobileDevice,
}) => {
  return (
    <div
      className={clsx(
        'dark:bg-base-gradient-content px-6 pt-4 pb-6',
        isMobileDevice ? 'mt-[--navbar-h]' : 'mt-0',
      )}
    >
      {children}
    </div>
  )
}
