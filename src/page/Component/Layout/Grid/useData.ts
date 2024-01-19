import type { ShowOffContent } from '@/types'

import { useMemo } from 'react'

export const useData = () => {
  const contents = useMemo(
    () =>
      [
        {
          title: 'Basic Grid',
          id: 'basic-grid',
        },
        {
          title: 'Gap',
          id: 'gap',
          children: [
            {
              title: 'Row Gap',
              id: 'row-gap',
            },
            {
              title: 'Column Gap',
              id: 'col-gap',
            },
          ],
        },
        {
          title: 'Responsive',
          id: 'responsive',
        },
        {
          title: 'Span',
          id: 'span',
          children: [
            {
              title: 'Row Span',
              id: 'row-span',
            },
            {
              title: 'Column Span',
              id: 'col-span',
            },
            {
              title: 'Responsive Span',
              id: 'responsive-span',
            },
          ],
        },
        {
          title: 'Placement',
          id: 'placement',
          children: [
            {
              title: 'Align Items',
              id: 'align-items',
            },
            {
              title: 'Align Self',
              id: 'align-self',
            },
            {
              title: 'Justify Items',
              id: 'justify-items',
            },
          ],
        },
      ] as ShowOffContent[],
    [],
  )

  return { contents }
}
