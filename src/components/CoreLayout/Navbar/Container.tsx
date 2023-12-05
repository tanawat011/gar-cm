import React from 'react'

import clsx from 'clsx'
import { isMobile } from 'react-device-detect'

import { LeftContainer } from './Left'
import { RightContainer } from './Right'

type NavbarContainerProps = {
  id: string
}

export const Container: React.FC<NavbarContainerProps> = ({ id }) => {
  return (
    <div
      id={id}
      className={clsx(
        'dark:border-gunmetal border-solid border-b flex justify-between w-full top-0 bg-background',
        isMobile ? 'fixed' : 'sticky',
      )}
    >
      <LeftContainer />

      <RightContainer />
    </div>
  )
}
