import React from 'react'

import { Content } from './Content'
import { Logo } from './Logo'

export const Container = () => {
  return (
    <div className='h-16 flex items-center justify-between'>
      <Logo>Logo Header</Logo>

      <Content>Header</Content>
    </div>
  )
}
