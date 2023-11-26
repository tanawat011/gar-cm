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
        'bg-white dark:bg-base-gradient-content px-8 py-8',
        isMobileDevice ? 'mt-[--navbar-h]' : 'mt-0',
      )}
    >
      {children}
    </div>
  )
}
