import type { todo as Todo } from '@prisma/client'
import type { Control, FieldErrors } from 'react-hook-form'

import React from 'react'

import { Icon } from '@/components/Icon'
import { SwitchInput, TextInput, TextareaInput } from '@/components/NextUI'
import { DatePickerInput } from '@/components/NextUI/Input/DatePickerInput'

type FormConfigProps = {
  errors?: FieldErrors<Todo>
  control: Control<Todo>
}

export const FormConfig: React.FC<FormConfigProps> = ({ control }) => {
  return (
    <div className='flex flex-col gap-4'>
      <TextInput name='name' control={control} label='Todo name' />

      <TextareaInput name='detail' control={control} label='Detail' />

      <DatePickerInput
        name='duedate'
        control={control}
        label='Duedate'
        description="We'll never share your email with anyone else."
      />

      <div className='flex justify-evenly'>
        <SwitchInput name='done' control={control} color='success' startContent={<Icon name='FaCheck' />}>
          Done?
        </SwitchInput>

        <SwitchInput name='important' control={control} color='warning' startContent={<Icon name='FaStar' />}>
          Important?
        </SwitchInput>
      </div>
    </div>
  )
}
