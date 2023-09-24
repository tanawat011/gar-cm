import React from 'react'

type ContentProps = {
  children: React.ReactNode
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className="min-w-[calc(100%-theme('width.80'))]">{children}</div>
}
