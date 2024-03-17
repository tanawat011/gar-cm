import type { TwUnionProp, TwGapAmount, TwAlignItems, TwWidth, TwHeight, TwJustifyContent } from '@/libs/pureTailwind'

import React, { useMemo } from 'react'

import {
  TW_GAP_SCREEN,
  generateTwClassName,
  TW_ALIGN_ITEMS_SCREEN,
  TW_WIDTH_SCREEN,
  TW_HEIGHT_SCREEN,
  TW_JUSTIFY_CONTENT_SCREEN,
} from '@/libs/pureTailwind'

export type ColProps = {
  children: React.ReactNode
  gap?: TwUnionProp<TwGapAmount>
  rowGap?: TwUnionProp<TwGapAmount>
  colGap?: TwUnionProp<TwGapAmount>
  alignItems?: TwUnionProp<TwAlignItems>
  justifyContent?: TwUnionProp<TwJustifyContent>
  className?: string
  width?: TwUnionProp<Exclude<TwWidth, 'wide'>>
  height?: TwUnionProp<Exclude<TwHeight, 'wide'>>
}

export const Col: React.FC<ColProps> = (props) => {
  const { className, children, width, height, gap, rowGap, colGap, alignItems, justifyContent } = props

  const generateClassName = useMemo(() => {
    return [
      'flex flex-col',
      className,
      width && generateTwClassName(TW_WIDTH_SCREEN, width),
      height && generateTwClassName(TW_HEIGHT_SCREEN, height),
      gap && generateTwClassName(TW_GAP_SCREEN, gap),
      alignItems && generateTwClassName(TW_ALIGN_ITEMS_SCREEN, alignItems),
      justifyContent && generateTwClassName(TW_JUSTIFY_CONTENT_SCREEN, justifyContent),
    ]
      .join(' ')
      .replace(/  +/g, ' ')
  }, [width, height, gap, rowGap, colGap, className, alignItems, justifyContent])

  return <div className={generateClassName}>{children}</div>
}
