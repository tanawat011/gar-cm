import type { TabsProps } from '@/components/Common'
import type { CommonOption } from '@/types'
import type { AnyAction } from '@reduxjs/toolkit'

import React from 'react'

import { Switch } from '@nextui-org/react'

import { Tabs } from '@/components/Common'
import { Icon } from '@/components/Icon'
import { useToggleAppSetting } from '@/hooks'

import { Item } from './Item'

type ToggleAppSettingProps<T> = {
  toggleStyle?: 'switch' | 'tab'
  title: string
  storageName: string
  value: T
  defaultValue?: T
  dispatchSetting: (value: T) => AnyAction
  items: CommonOption<T>[]
  renderTab?: TabsProps<T>['renderTab']
}

export const ToggleAppSetting = <T = string,>(props: ToggleAppSettingProps<T>) => {
  const {
    toggleStyle = 'switch',
    items = [],
    title,
    value,
    defaultValue,
    renderTab,
    storageName,
    dispatchSetting,
  } = props
  const { toggleSetting } = useToggleAppSetting<T>({
    storageName,
    defaultValue,
    items,
    dispatchSetting,
  })

  return (
    <Item label={title} center>
      {toggleStyle === 'switch' && items.length === 2 && (
        <>
          <p className='cursor-pointer' onClick={() => toggleSetting(items[0].key)}>
            {items[0].label}
          </p>

          <Switch
            defaultSelected
            size='lg'
            value={value as string}
            {...(items[0].icon && { endContent: <Icon name={items[0].icon} /> })}
            {...(items[1].icon && { startContent: <Icon name={items[1].icon} /> })}
            isSelected={value === items[1].key}
            onValueChange={(isSecondValue) => {
              toggleSetting(isSecondValue ? items[1].key : items[0].key)
            }}
          />

          <p className='cursor-pointer' onClick={() => toggleSetting(items[1].key)}>
            {items[1].label}
          </p>
        </>
      )}

      {toggleStyle === 'tab' && (
        <Tabs
          items={[...items]}
          selectedKey={value as string}
          onSelectionChange={(key) => toggleSetting(key as T)}
          fullWidth
          size='sm'
          radius='full'
          renderTab={renderTab}
        />
      )}
    </Item>
  )
}
