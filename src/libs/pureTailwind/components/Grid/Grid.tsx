import type {
  TwUnionProp,
  TwGridColAmount,
  TwGapAmount,
  TwGridRowAmount,
  TwAlignItems,
  TwAlignSelf,
  TwJustifyItems,
  TwWidth,
  TwHeight,
} from '@/libs/pureTailwind'

import React, { useMemo } from 'react'

import {
  TW_GRID_COL_SCREEN,
  TW_GRID_ROW_SCREEN,
  TW_GAP_SCREEN,
  TW_GRID_ROW_GAP_SCREEN,
  TW_GRID_COL_GAP_SCREEN,
  generateTwClassName,
  TW_ALIGN_ITEMS_SCREEN,
  TW_ALIGN_SELF_SCREEN,
  TW_JUSTIFY_ITEMS_SCREEN,
  TW_WIDTH_SCREEN,
  TW_HEIGHT_SCREEN,
} from '@/libs/pureTailwind'

export type GridProps = {
  children: React.ReactNode
  col?: TwUnionProp<TwGridColAmount>
  row?: TwUnionProp<TwGridRowAmount>
  gap?: TwUnionProp<TwGapAmount>
  rowGap?: TwUnionProp<TwGapAmount>
  colGap?: TwUnionProp<TwGapAmount>
  alignItems?: TwUnionProp<TwAlignItems>
  alignSelf?: TwUnionProp<TwAlignSelf>
  justifyItems?: TwUnionProp<TwJustifyItems>
  className?: string
  width?: TwUnionProp<Exclude<TwWidth, 'wide'>>
  height?: TwUnionProp<Exclude<TwHeight, 'wide'>>
}

export const Grid: React.FC<GridProps> = (props) => {
  const { className, children, width, height, col, row, gap, rowGap, colGap, alignItems, alignSelf, justifyItems } =
    props

  const generateClassName = useMemo(() => {
    return [
      'grid',
      className,
      width && generateTwClassName(TW_WIDTH_SCREEN, width),
      height && generateTwClassName(TW_HEIGHT_SCREEN, height),
      col && generateTwClassName(TW_GRID_COL_SCREEN, col),
      row && generateTwClassName(TW_GRID_ROW_SCREEN, row),
      gap && generateTwClassName(TW_GAP_SCREEN, gap),
      rowGap && generateTwClassName(TW_GRID_ROW_GAP_SCREEN, rowGap),
      colGap && generateTwClassName(TW_GRID_COL_GAP_SCREEN, colGap),
      alignItems && generateTwClassName(TW_ALIGN_ITEMS_SCREEN, alignItems),
      alignSelf && generateTwClassName(TW_ALIGN_SELF_SCREEN, alignSelf),
      justifyItems && generateTwClassName(TW_JUSTIFY_ITEMS_SCREEN, justifyItems),
    ]
      .join(' ')
      .replace(/  +/g, ' ')
  }, [width, height, col, row, gap, rowGap, colGap, className, alignItems, alignSelf, justifyItems])

  return <div className={generateClassName}>{children}</div>
}
