import type {
  TwUnionProp,
  TwGridColAmount,
  TwGridGapAmount,
  TwGridRowAmount,
  TwAlignItems,
  TwWidth,
  TwJustifyContent,
} from '@/libs/pureTailwind'

import React, { useMemo } from 'react'

import {
  TW_GRID_WIDTH_SCREEN,
  // TW_GRID_COL_SCREEN,
  // TW_GRID_ROW_SCREEN,
  TW_GRID_GAP_SCREEN,
  TW_GRID_ROW_GAP_SCREEN,
  TW_GRID_COL_GAP_SCREEN,
  generateTwClassName,
  TW_ALIGN_ITEMS_SCREEN,
  TW_JUSTIFY_ITEMS_SCREEN,
} from '@/libs/pureTailwind'

export type ColProps = {
  children: React.ReactNode
  col?: TwUnionProp<TwGridColAmount>
  row?: TwUnionProp<TwGridRowAmount>
  gap?: TwUnionProp<TwGridGapAmount>
  rowGap?: TwUnionProp<TwGridGapAmount>
  colGap?: TwUnionProp<TwGridGapAmount>
  alignItems?: TwUnionProp<TwAlignItems>
  justifyContent?: TwUnionProp<TwJustifyContent>
  className?: string
  width?: TwUnionProp<Exclude<TwWidth, 'wide'>>
}

export const Col: React.FC<ColProps> = (props) => {
  const { className, children, width, col, row, gap, rowGap, colGap, alignItems, justifyContent } = props

  const generateClassName = useMemo(() => {
    return [
      className,
      'flex flex-col',
      width && generateTwClassName(TW_GRID_WIDTH_SCREEN, width),
      // col && generateTwClassName(TW_GRID_COL_SCREEN, col),
      // row && generateTwClassName(TW_GRID_ROW_SCREEN, row),
      gap && generateTwClassName(TW_GRID_GAP_SCREEN, gap),
      rowGap && generateTwClassName(TW_GRID_ROW_GAP_SCREEN, rowGap),
      colGap && generateTwClassName(TW_GRID_COL_GAP_SCREEN, colGap),
      alignItems && generateTwClassName(TW_ALIGN_ITEMS_SCREEN, alignItems),
      justifyContent && generateTwClassName(TW_JUSTIFY_ITEMS_SCREEN, justifyContent),
    ]
      .join(' ')
      .replace(/  +/g, ' ')
  }, [width, col, row, gap, rowGap, colGap, className, alignItems, justifyContent])

  return <div className={generateClassName}>{children}</div>
}
