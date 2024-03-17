'use client'

import React from 'react'

import { Input } from '@nextui-org/react'

type TextInputProps = {
  _ref?: React.Ref<HTMLInputElement>
  label: string
  placeholder: string
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  startContent?: React.ReactNode
  endContent?: React.ReactNode
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  return <Input {...props} ref={props._ref} labelPlacement='outside' />
}
