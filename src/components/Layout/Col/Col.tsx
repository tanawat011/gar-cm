import type { LayoutProps } from '../type'

import React from 'react'

import { transformHeight, transformJustify, transformWidth } from '../utils'

type ColProps = LayoutProps

export const Col: React.FC<ColProps> = (props) => {
  const { children, className, items, justify, gap, width, height } = props

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        ...(items && { alignItems: items }),
        ...(justify && { justifyContent: transformJustify(justify) }),
        ...(gap && { gap: `${gap * 4}px` }),
        ...(width && { width: transformWidth(width) }),
        ...(height && { height: transformHeight(height) }),
      }}
    >
      {children}
    </div>
  )
}
