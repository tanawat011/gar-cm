import type {
  TwUnionProp,
  TwGridColAmount,
  TwGridGapAmount,
  TwGridRowAmount,
  TwAlignItems,
  TwAlignSelf,
  TwJustifyItems,
  TwWidth,
} from '@/libs/pureTailwind'

import React, { useMemo } from 'react'

import {
  TW_GRID_WIDTH_SCREEN,
  TW_GRID_COL_SCREEN,
  TW_GRID_ROW_SCREEN,
  TW_GRID_GAP_SCREEN,
  TW_GRID_ROW_GAP_SCREEN,
  TW_GRID_COL_GAP_SCREEN,
  generateTwClassName,
  TW_ALIGN_ITEMS_SCREEN,
  TW_ALIGN_SELF_SCREEN,
  TW_JUSTIFY_ITEMS_SCREEN,
} from '@/libs/pureTailwind'

export type GridProps = {
  children: React.ReactNode
  col?: TwUnionProp<TwGridColAmount>
  row?: TwUnionProp<TwGridRowAmount>
  gap?: TwUnionProp<TwGridGapAmount>
  rowGap?: TwUnionProp<TwGridGapAmount>
  colGap?: TwUnionProp<TwGridGapAmount>
  alignItems?: TwUnionProp<TwAlignItems>
  alignSelf?: TwUnionProp<TwAlignSelf>
  justifyItems?: TwUnionProp<TwJustifyItems>
  className?: string
  width?: TwUnionProp<Exclude<TwWidth, 'wide'>>
}

export const Grid: React.FC<GridProps> = (props) => {
  const { className, children, width, col, row, gap, rowGap, colGap, alignItems, alignSelf, justifyItems } = props

  const generateClassName = useMemo(() => {
    return [
      className,
      'grid',
      width && generateTwClassName(TW_GRID_WIDTH_SCREEN, width),
      col && generateTwClassName(TW_GRID_COL_SCREEN, col),
      row && generateTwClassName(TW_GRID_ROW_SCREEN, row),
      gap && generateTwClassName(TW_GRID_GAP_SCREEN, gap),
      rowGap && generateTwClassName(TW_GRID_ROW_GAP_SCREEN, rowGap),
      colGap && generateTwClassName(TW_GRID_COL_GAP_SCREEN, colGap),
      alignItems && generateTwClassName(TW_ALIGN_ITEMS_SCREEN, alignItems),
      alignSelf && generateTwClassName(TW_ALIGN_SELF_SCREEN, alignSelf),
      justifyItems && generateTwClassName(TW_JUSTIFY_ITEMS_SCREEN, justifyItems),
    ]
      .join(' ')
      .replace(/  +/g, ' ')
  }, [width, col, row, gap, rowGap, colGap, className, alignItems, alignSelf, justifyItems])

  return <div className={generateClassName}>{children}</div>
}
