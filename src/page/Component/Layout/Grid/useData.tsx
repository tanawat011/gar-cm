import type { ShowOffContent } from '@/libs/componentDocument/types'

import { useMemo } from 'react'

import { AlignItems } from './AlignItems'
import { AlignSelf } from './AlignSelf'
import { Basic } from './Basic'
import { ColGap } from './ColGap'
import { ColSpan } from './ColSpan'
import { JustifyItems } from './JustifyItems'
import { Responsive } from './Responsive'
import { ResponsiveSpan } from './ResponsiveSpan'
import { RowGap } from './RowGap'
import { RowSpan } from './RowSpan'
import { ELEMENT_ID } from './constants'

export const useData = () => {
  const contents = useMemo(
    () =>
      [
        {
          title: 'Basic Grid',
          detail:
            'The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design`s responsive UI is based on a 12-column grid layout.',
          id: ELEMENT_ID.BASIC_GRID,
          element: <Basic />,
        },
        {
          title: 'Gap',
          detail: 'The gap between grid items.',
          id: ELEMENT_ID.GAP,
          children: [
            {
              title: 'Row Gap',
              detail: 'The gap between grid rows.',
              id: ELEMENT_ID.ROW_GAP,
              element: <RowGap />,
            },
            {
              title: 'Column Gap',
              detail: 'The gap between grid columns.',
              id: ELEMENT_ID.COL_GAP,
              element: <ColGap />,
            },
          ],
        },
        {
          title: 'Responsive',
          detail: 'The grid layout is responsive to the screen size.',
          id: ELEMENT_ID.RESPONSIVE,
          element: <Responsive />,
        },
        {
          title: 'Span',
          detail: 'The span of grid items.',
          id: ELEMENT_ID.SPAN,
          children: [
            {
              title: 'Row Span',
              detail: 'The span of grid rows.',
              id: ELEMENT_ID.ROW_SPAN,
              element: <RowSpan />,
            },
            {
              title: 'Column Span',
              detail: 'The span of grid columns.',
              id: ELEMENT_ID.COL_SPAN,
              element: <ColSpan />,
            },
            {
              title: 'Responsive Span',
              detail: 'The span of grid items is responsive to the screen size.',
              id: ELEMENT_ID.RESPONSIVE_SPAN,
              element: <ResponsiveSpan />,
            },
          ],
        },
        {
          title: 'Placement',
          detail: 'The placement of grid items.',
          id: ELEMENT_ID.PLACEMENT,
          children: [
            {
              title: 'Align Items',
              detail: 'The alignment of grid items.',
              id: ELEMENT_ID.ALIGN_ITEMS,
              element: <AlignItems />,
            },
            {
              title: 'Align Self',
              detail: 'The alignment of a grid item within its grid area.',
              id: ELEMENT_ID.ALIGN_SELF,
              element: <AlignSelf />,
            },
            {
              title: 'Justify Items',
              detail: 'The alignment of grid items.',
              id: ELEMENT_ID.JUSTIFY_ITEMS,
              element: <JustifyItems />,
            },
          ],
        },
      ] as ShowOffContent[],
    [],
  )

  return { contents }
}
