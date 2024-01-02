import type { InputProps } from '@nextui-org/react'
import type { Control } from 'react-hook-form'

import React from 'react'

import { Textarea } from '@nextui-org/react'
import { Controller } from 'react-hook-form'

type TextareaInputProps = {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  errorMessage?: string
} & InputProps

export const TextareaInput: React.FC<TextareaInputProps> = (props) => {
  const { control, ...leftProps } = props

  return (
    <Controller
      control={control}
      name={leftProps.name}
      render={({ field, formState: { errors } }) => {
        const errorField = errors[field.name]

        return (
          <Textarea
            defaultValue=''
            {...leftProps}
            {...field}
            value={field.value || ''}
            isInvalid={!!errorField}
            errorMessage={errorField && leftProps?.errorMessage}
            color={errorField ? 'danger' : leftProps.color || 'default'}
            onValueChange={field.onChange}
          />
        )
      }}
    />
  )
}
