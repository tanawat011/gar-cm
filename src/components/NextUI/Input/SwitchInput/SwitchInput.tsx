import type { SwitchProps as NextUISwitchProps } from '@nextui-org/react'
import type { Control } from 'react-hook-form'

import React from 'react'

import { Switch as NextUISwitch } from '@nextui-org/react'
import { Controller } from 'react-hook-form'

type SwitchInputProps = {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
} & NextUISwitchProps

export const SwitchInput: React.FC<SwitchInputProps> = (props) => {
  const { control, ...leftProps } = props

  return (
    <Controller
      control={control}
      name={leftProps.name}
      defaultValue={false}
      render={({ field }) => {
        return (
          <NextUISwitch
            {...leftProps}
            {...field}
            isSelected={field.value}
            value={field.value}
            onValueChange={field.onChange}
          />
        )
      }}
    />
  )
}
