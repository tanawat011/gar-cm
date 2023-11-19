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
        'overflow-y-scroll scrolling-touch w-full bg-white dark:bg-base-gradient-content',
        !isMobileDevice && 'scrolling-auto h-screen',
      )}
    >
      {children}
    </div>
  )
}
