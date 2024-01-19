'use client'

import { ComponentDocument } from '@/libs/componentDocument'

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
import { useData } from './useData'

export const ComponentLayoutGrid = () => {
  const { contents } = useData()

  return (
    <ComponentDocument contents={contents}>
      <Basic />
      <RowGap />
      <ColGap />
      <Responsive />
      <RowSpan />
      <ColSpan />
      <ResponsiveSpan />
      <AlignItems />
      <AlignSelf />
      <JustifyItems />
    </ComponentDocument>
  )
}
