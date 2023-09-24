import React from 'react'

import { Content } from './Content'

export const Container = () => {
  return (
    <div className="w-80 h-[calc(100vh-theme('height.16'))]">
      <Content />
    </div>
  )
}
