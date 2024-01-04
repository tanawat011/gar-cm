'use client'

import type { InputProps } from '@nextui-org/react'
import type { Control } from 'react-hook-form'

import React, { useEffect } from 'react'

import { Input } from '@nextui-org/react'
import { Controller } from 'react-hook-form'

type DatePickerInputProps = {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  errorMessage?: string
} & InputProps

export const DatePickerInput: React.FC<DatePickerInputProps> = (props) => {
  const { control, ...leftProps } = props

  useEffect(() => {
    const init = async () => {
      const { Datepicker, initTE } = await import('tw-elements')

      initTE({ Datepicker })
    }
    init()
  }, [])

  return (
    <Controller
      control={control}
      name={leftProps.name}
      render={({ field, formState: { errors } }) => {
        const errorField = errors[field.name]

        return (
          <div className='relative mb-3' data-te-datepicker-init data-te-input-wrapper-init data-te-inline>
            <input
              placeholder='Select a date'
              {...field}
              className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
            />
            <label
              htmlFor='floatingInput'
              className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'
            >
              Select a date
            </label>
          </div>
        )

        {
          /* return (
          <Input
            {...leftProps}
            {...field}
            type='date'
            isInvalid={!!errorField}
            errorMessage={errorField && leftProps?.errorMessage}
            color={errorField ? 'danger' : leftProps.color || 'default'}
            onValueChange={field.onChange}
          />
        ) */
        }
      }}
    />
  )
}
