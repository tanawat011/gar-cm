import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="min-w-[calc(100%-theme('width.80'))]">{children}</div>
}
