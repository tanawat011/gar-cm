import type { CommonOption } from '@/types'
import type { TabsProps as NextTabsProps } from '@nextui-org/react'

import React from 'react'

import { Tabs as NextTabs, Tab } from '@nextui-org/react'

export type TabsProps = {
  items: CommonOption[]
  selectedKey: string
  onSelectionChange: (key: React.Key) => void
  size?: NextTabsProps['size']
  radius?: NextTabsProps['radius']
  fullWidth?: NextTabsProps['fullWidth']
  renderTab?: (item: CommonOption) => React.ReactNode
}

export const Tabs: React.FC<TabsProps> = ({
  selectedKey,
  items,
  onSelectionChange,
  size,
  radius,
  fullWidth,
  renderTab,
}) => {
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
            key={item.key}
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
