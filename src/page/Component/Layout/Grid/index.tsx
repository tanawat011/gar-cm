'use client'

import { ContentDisplay } from '@/components/Common'

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
    <div className='flex gap-6'>
      <div className='[&>:not(:last-child)]:mb-8'>
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
      </div>

      <div className='min-w-[218px] select-none hidden lg:flex flex-col gap-2'>
        <div className='fixed'>
          <ContentDisplay contents={contents} />
        </div>
      </div>
    </div>
  )
}
