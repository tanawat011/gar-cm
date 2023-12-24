import React from 'react'

import { Input } from '@nextui-org/react'

import { Icon } from '@/components/Icon'

import { Profile } from './Profile'
import { ToggleDrawerSetting } from './ToggleDrawerSetting'
import { ToggleLang } from './ToggleLang'
import { ToggleTheme } from './ToggleTheme'

export const Container = () => {
  return (
    <div className='flex items-center'>
      <Input
        size='sm'
        placeholder='Quick Search...'
        className='mx-2 max-w-60 hidden lg:block'
        startContent={<Icon name='FaMagnifyingGlass' />}
        classNames={{
          inputWrapper: 'bg-transparent hover:bg-transparent focus:bg-transparent',
        }}
      />

      <ToggleDrawerSetting />

      <div className='items-center hidden lg:flex'>
        <Icon name='FaRegBell' className='cursor-pointer mx-3 hover:opacity-80' />
        <ToggleTheme />
        <ToggleLang />
      </div>

      <Profile />
    </div>
  )
}
