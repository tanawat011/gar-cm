import type {
  TwAlignSelf,
  TwGridColSpanAmount,
  TwGridColStartAmount,
  TwGridRowSpanAmount,
  TwGridRowStartAmount,
  TwJustifySelf,
  TwUnionProp,
} from '@/libs/pureTailwind'

import React, { useMemo } from 'react'

import {
  generateTwClassName,
  TW_ALIGN_SELF_SCREEN,
  TW_GRID_COL_SPAN_SCREEN,
  TW_GRID_COL_START_SCREEN,
  TW_GRID_COL_END_SCREEN,
  TW_GRID_ROW_SPAN_SCREEN,
  TW_GRID_ROW_START_SCREEN,
  TW_GRID_ROW_END_SCREEN,
  TW_JUSTIFY_SELF_SCREEN,
} from '@/libs/pureTailwind'

export type GridItemProps = {
  children: React.ReactNode
  colSpan?: TwUnionProp<TwGridColSpanAmount>
  colStart?: TwUnionProp<TwGridColStartAmount>
  colEnd?: TwUnionProp<TwGridColStartAmount>
  rowSpan?: TwUnionProp<TwGridRowSpanAmount>
  rowStart?: TwUnionProp<TwGridRowStartAmount>
  rowEnd?: TwUnionProp<TwGridRowStartAmount>
  alignSelf?: TwUnionProp<TwAlignSelf>
  justifySelf?: TwUnionProp<TwJustifySelf>
  fullWidth?: boolean
  className?: string
}

export const GridItem: React.FC<GridItemProps> = (props) => {
  const {
    className,
    children,
    colSpan,
    colStart,
    colEnd,
    rowSpan,
    rowStart,
    rowEnd,
    alignSelf,
    justifySelf,
    fullWidth,
  } = props

  const generateClassName = useMemo(() => {
    return [
      className,
      fullWidth && 'w-full',
      colSpan && generateTwClassName(TW_GRID_COL_SPAN_SCREEN, colSpan),
      colStart && generateTwClassName(TW_GRID_COL_START_SCREEN, colStart),
      colEnd && generateTwClassName(TW_GRID_COL_END_SCREEN, colEnd),
      rowSpan && generateTwClassName(TW_GRID_ROW_SPAN_SCREEN, rowSpan),
      rowStart && generateTwClassName(TW_GRID_ROW_START_SCREEN, rowStart),
      rowEnd && generateTwClassName(TW_GRID_ROW_END_SCREEN, rowEnd),
      alignSelf && generateTwClassName(TW_ALIGN_SELF_SCREEN, alignSelf),
      justifySelf && generateTwClassName(TW_JUSTIFY_SELF_SCREEN, justifySelf),
    ]
      .join(' ')
      .replace(/  +/g, ' ')
  }, [colSpan, colStart, colEnd, rowSpan, rowStart, rowEnd, alignSelf, justifySelf, fullWidth])

  return <div className={generateClassName}>{children}</div>
}
