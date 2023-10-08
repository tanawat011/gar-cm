import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className='mt-[58px] xl:pl-60 h-[calc(100vh-58px)] overflow-auto scroll-smooth'>
      {children}
    </main>
  )
}
