import React from 'react'

import clsx from 'clsx'

type ContentProps = {
  children: React.ReactNode
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className={clsx('bg-white dark:bg-base-gradient-content px-8 py-8')}>{children}</div>
}
