import type { link_remember as LinkRemember } from '@prisma/client'
import type { Control, FieldErrors } from 'react-hook-form'

import React from 'react'

import { TextInput } from '@/components/NextUI'

type FormConfigProps = {
  errors?: FieldErrors<LinkRemember>
  control: Control<LinkRemember>
}

export const FormConfig: React.FC<FormConfigProps> = ({ control }) => {
  return (
    <div className='flex flex-col gap-4'>
      <TextInput name='name' control={control} label='Name' />

      <TextInput name='link' control={control} label='Link' />
    </div>
  )
}
