import type { ScreenSizeOptionWithDefault } from '@/libs/twClassName'

import React from 'react'

type Option<T> = T | ScreenSizeOptionWithDefault<T>

export type GridProps = {
  children: React.ReactNode
  col?: Option<GridColAmount>
  row?: Option<GridRowAmount>
  gap?: Option<GridGapAmount>
  rowGap?: Option<GridGapAmount>
  colGap?: Option<GridGapAmount>
  alignItems?: Option<AlignItems>
  alignSelf?: Option<AlignSelf>
  justifyItem?: Option<JustifyItems>
  className?: string
  dataTestId?: string
  width?: Option<Exclude<Width, 'wide'>>
}

export const Grid: React.FC<GridProps> = (props) => {
  return <div>{props.children}</div>
}
