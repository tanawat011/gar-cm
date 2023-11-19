import { Input, User } from '@nextui-org/react'

import { Icon } from '@/components/Icon'
import { DropdownInput } from '@/components/Input'

import { ToggleLang } from './ToggleLang'
import { ToggleTheme } from './ToggleTheme'

export const RightContainer = () => {
  return (
    <div className='mr-6 py-4 flex items-center'>
      <Input
        size='sm'
        placeholder='Quick Search...'
        className='mx-2 w-60 hidden lg:block'
        startContent={<Icon name='FaMagnifyingGlass' />}
        classNames={{
          inputWrapper:
            'bg-transparent hover:bg-transparent focus:bg-transparent',
        }}
      />

      <Icon name='FaGear' className='cursor-pointer mx-3 block lg:hidden' />

      <div className='items-center hidden lg:flex'>
        <Icon
          name='FaRegBell'
          className='cursor-pointer mx-3 hover:opacity-80'
        />
        <ToggleTheme />
        <ToggleLang />
      </div>

      <DropdownInput
        ariaLabel='Profile Actions'
        mode='none'
        items={[
          {
            key: 'settings',
            label: 'My Settings',
          },
          {
            key: 'help_and_feedback',
            label: 'Help & Feedback',
          },
          {
            key: 'logout',
            label: 'Log Out',
          },
        ]}
      >
        <User
          name='Tanawat P'
          description='tanawat.p@gmail.com'
          className='cursor-pointer mx-3'
          avatarProps={{
            isBordered: true,
            as: 'button',
            className: 'transition-transform',
            color: 'success',
            size: 'sm',
            src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
          }}
        />
      </DropdownInput>
    </div>
  )
}
