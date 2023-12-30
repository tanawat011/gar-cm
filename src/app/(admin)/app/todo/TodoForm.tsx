import type { todo as Todo } from '@prisma/client'
import type { Control, FieldErrors, UseFormRegister } from 'react-hook-form'

import React from 'react'

import { Icon } from '@/components/Icon'
import { SwitchInput, TextInput, TextareaInput } from '@/components/NextUI'

type TodoFormProps = {
  register: UseFormRegister<Todo>
  errors?: FieldErrors<Todo>
  control: Control<Todo>
}

export const TodoForm: React.FC<TodoFormProps> = ({ register, control }) => {
  return (
    <div className='flex flex-col gap-4'>
      <TextInput {...register('name', { required: true })} control={control} label='Todo name' />

      <TextareaInput {...register('detail')} control={control} label='Detail' />

      <div className='flex justify-evenly'>
        <SwitchInput {...register('done')} control={control} color='success' startContent={<Icon name='FaCheck' />}>
          Done?
        </SwitchInput>

        <SwitchInput {...register('important')} control={control} color='warning' startContent={<Icon name='FaStar' />}>
          Important?
        </SwitchInput>
      </div>
    </div>
  )
}
