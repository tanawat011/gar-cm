import type { LayoutProps } from '../type'

import React from 'react'

import { transformHeight, transformJustify, transformWidth } from '../utils'

type RowProps = LayoutProps

export const Row: React.FC<RowProps> = (props) => {
  const { children, className, items, justify, gap, width, height } = props

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'row',
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
