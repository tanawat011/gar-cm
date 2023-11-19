import React from 'react'

import clsx from 'clsx'

import { LeftContainer } from './LeftContainer'
import { RightContainer } from './RightContainer'

type ContainerProps = {
  isMobileDevice?: boolean
}

export const Container: React.FC<ContainerProps> = ({ isMobileDevice }) => {
  return (
    <div
      id='navbar'
      className={clsx(
        'bg-white dark:bg-base-gradient-navbar dark:border-gunmetal border-solid border-b flex justify-between w-full top-0',
        isMobileDevice ? 'fixed' : 'sticky',
      )}
    >
      <LeftContainer isMobileDevice={isMobileDevice} />

      <RightContainer isMobileDevice={isMobileDevice} />
    </div>
  )
}
