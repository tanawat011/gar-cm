import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='container p-9'>{children}</div>
}
