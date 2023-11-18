import React from 'react'

import clsx from 'clsx'

import { Content } from './Content'

type ContainerProps = {
  isMobileDevice?: boolean
}

export const Container: React.FC<ContainerProps> = ({ isMobileDevice }) => {
  return (
    <div
      className={clsx(
        'dark:bg-base-gradient-sidebar dark:border-gunmetal border-solid border-r',
        isMobileDevice ? 'hidden' : 'hidden lg:block',
      )}
    >
      <Content items={[]} />
    </div>
  )
}
