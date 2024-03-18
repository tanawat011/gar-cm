'use client'

import type { InputProps } from '@nextui-org/react'

import React from 'react'

import { Input } from '@nextui-org/react'

export type TextInputProps = {
  _ref?: React.Ref<HTMLInputElement>
  label: string
  placeholder: string
  className?: string
  type?: InputProps['type']
  startContent?: React.ReactNode
  endContent?: React.ReactNode
  clearable?: boolean
  invalid?: boolean
  errorMessage?: InputProps['errorMessage']
  color?: InputProps['color']
  onChange?: InputProps['onChange']
  onClear?: InputProps['onClear']
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <Input
      {...props}
      ref={props._ref}
      labelPlacement='outside'
      isClearable={props?.clearable}
      isInvalid={props?.invalid}
      autoComplete='off'
    />
  )
}
