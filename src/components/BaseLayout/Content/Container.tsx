import React from 'react'

import Breadcrumb from './Breadcrumb'

type ContainerProps = {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className='mt-[58px] xl:ml-60 p-9 h-[calc(100vh-58px)] overflow-auto scroll-smooth'>
      <Breadcrumb className='pb-7' />

      {children}
    </main>
  )
}
