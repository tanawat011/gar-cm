import React from 'react'

type LogoProps = {
  children: React.ReactNode
}

export const Logo: React.FC<LogoProps> = ({ children }) => {
  return <div className='w-80'>{children}</div>
}
