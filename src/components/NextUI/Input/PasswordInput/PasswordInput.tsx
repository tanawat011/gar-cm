'use client'

import type { TextInputProps } from '..'

import React, { useMemo } from 'react'

import { Icon } from '@/components/Icon'

import { TextInput } from '..'

type PasswordInputProps = Omit<TextInputProps, 'type' | 'startContent' | 'endContent'>

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  const endContent = useMemo(() => {
    return (
      <button className='focus:outline-none' type='button' onClick={toggleVisibility}>
        {isVisible ? (
          <Icon name='FaEyeSlash' className='text-2xl text-default-400 pointer-events-none' />
        ) : (
          <Icon name='FaEye' className='text-2xl text-default-400 pointer-events-none' />
        )}
      </button>
    )
  }, [isVisible])

  return <TextInput {...props} type={isVisible ? 'text' : 'password'} endContent={endContent} />
}
