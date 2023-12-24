import type { CommonOption } from '@/types'
import type { TabsProps as NextTabsProps } from '@nextui-org/react'

import React from 'react'

import { Tabs as NextTabs, Tab } from '@nextui-org/react'

export type TabsProps<T> = {
  items: CommonOption<T>[]
  selectedKey: string
  onSelectionChange: (key: React.Key) => void
  size?: NextTabsProps['size']
  radius?: NextTabsProps['radius']
  fullWidth?: NextTabsProps['fullWidth']
  renderTab?: (item: CommonOption<T>) => React.ReactNode
}

export const Tabs = <T,>({
  selectedKey,
  items,
  onSelectionChange,
  size,
  radius,
  fullWidth,
  renderTab,
}: TabsProps<T>) => {
  return (
    <NextTabs
      size={size}
      radius={radius}
      fullWidth={fullWidth}
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
    >
      {items.map((item) => {
        return (
          <Tab
            key={item.key as string}
            className='font-bold'
            title={
              renderTab ? (
                renderTab(item)
              ) : (
                <div className='flex items-center'>
                  <span>{item.label}</span>
                </div>
              )
            }
          />
        )
      })}
    </NextTabs>
  )
}
