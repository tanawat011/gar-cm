import React from 'react'

import clsx from 'clsx'
import { isMobile } from 'react-device-detect'

import { LeftContainer } from './Left'
import { RightContainer } from './Right'

export const Container = () => {
  return (
    <div
      className={clsx(
        'bg-white dark:bg-base-gradient-navbar dark:border-gunmetal border-solid border-b flex justify-between w-full top-0',
        isMobile ? 'fixed' : 'sticky',
      )}
    >
      <LeftContainer />

      <RightContainer />
    </div>
  )
}
