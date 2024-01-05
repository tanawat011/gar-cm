'use client'

import React from 'react'

import { Input, Popover, type InputProps, PopoverTrigger, PopoverContent, Card, CardBody } from '@nextui-org/react'
import { Controller, type Control } from 'react-hook-form'

import { Icon } from '@/components/Icon'

type DatePickerInputProps = {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  errorMessage?: string
} & InputProps

export const DatePickerInput: React.FC<DatePickerInputProps> = (props) => {
  const { control, ...leftProps } = props

  return (
    <Controller
      control={control}
      name={leftProps.name}
      render={({ field, formState: { errors } }) => {
        const errorField = errors[field.name]

        return (
          <div className='relative'>
            <Input
              {...leftProps}
              {...field}
              labelPlacement='outside'
              endContent={
                <div className='cursor-pointer select-none'>
                  <Icon name='FaCalendarDays' />
                </div>
              }
              isInvalid={!!errorField}
              errorMessage={errorField && leftProps?.errorMessage}
              color={errorField ? 'danger' : leftProps.color || 'default'}
              onValueChange={field.onChange}
            />

            <Card className='absolute top-[75%]'>
              <CardBody>
                <div className='flex flex-col'>xxx</div>
              </CardBody>
            </Card>
          </div>
        )
      }}
    />
  )
}
