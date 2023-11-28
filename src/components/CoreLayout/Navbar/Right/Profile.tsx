import type { AvatarProps } from '@nextui-org/react'

import React from 'react'

import { Avatar, User } from '@nextui-org/react'

import { DropdownInput } from '@/components/Input'

export const Profile = () => {
  const profileInfo: Partial<AvatarProps> = {
    isBordered: true,
    as: 'button',
    className: 'transition-transform',
    color: 'success',
    size: 'sm',
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  }

  return (
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
      <div>
        <User
          name='Tanawat P'
          description='tanawat.p@gmail.com'
          className='cursor-pointer mx-3 hidden md:flex'
          avatarProps={profileInfo}
        />

        <Avatar {...profileInfo} className='cursor-pointer mx-3 block md:hidden' />
      </div>
    </DropdownInput>
  )
}
