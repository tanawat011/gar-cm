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
          id: ELEMENT_ID.BASIC_GRID,
          render: () => <Basic id={ELEMENT_ID.BASIC_GRID} />,
        },
        {
          title: 'Gap',
          id: ELEMENT_ID.GAP,
          children: [
            {
              title: 'Row Gap',
              id: ELEMENT_ID.ROW_GAP,
              render: () => <RowGap id={ELEMENT_ID.ROW_GAP} />,
            },
            {
              title: 'Column Gap',
              id: ELEMENT_ID.COL_GAP,
              render: () => <ColGap id={ELEMENT_ID.COL_GAP} />,
            },
          ],
        },
        {
          title: 'Responsive',
          id: ELEMENT_ID.RESPONSIVE,
          render: () => <Responsive id={ELEMENT_ID.RESPONSIVE} />,
        },
        {
          title: 'Span',
          id: ELEMENT_ID.SPAN,
          children: [
            {
              title: 'Row Span',
              id: ELEMENT_ID.ROW_SPAN,
              render: () => <RowSpan id={ELEMENT_ID.ROW_SPAN} />,
            },
            {
              title: 'Column Span',
              id: ELEMENT_ID.COL_SPAN,
              render: () => <ColSpan id={ELEMENT_ID.COL_SPAN} />,
            },
            {
              title: 'Responsive Span',
              id: ELEMENT_ID.RESPONSIVE_SPAN,
              render: () => <ResponsiveSpan id={ELEMENT_ID.RESPONSIVE_SPAN} />,
            },
          ],
        },
        {
          title: 'Placement',
          id: ELEMENT_ID.PLACEMENT,
          children: [
            {
              title: 'Align Items',
              id: ELEMENT_ID.ALIGN_ITEMS,
              render: () => <AlignItems id={ELEMENT_ID.ALIGN_ITEMS} />,
            },
            {
              title: 'Align Self',
              id: ELEMENT_ID.ALIGN_SELF,
              render: () => <AlignSelf id={ELEMENT_ID.ALIGN_SELF} />,
            },
            {
              title: 'Justify Items',
              id: ELEMENT_ID.JUSTIFY_ITEMS,
              render: () => <JustifyItems id={ELEMENT_ID.JUSTIFY_ITEMS} />,
            },
          ],
        },
      ] as ShowOffContent[],
    [],
  )

  return { contents }
}
