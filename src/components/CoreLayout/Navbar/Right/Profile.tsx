import type { AvatarProps } from '@nextui-org/react'

import React, { useContext } from 'react'

import { Avatar, User } from '@nextui-org/react'

import { DropdownInput } from '@/components/NextUI'

import { CoreLayoutContext } from '../../Provider'

export const Profile = () => {
  const { onLoading } = useContext(CoreLayoutContext)

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
      uncontrolled
      name='profile-actions'
      selectionMode='none'
      items={[
        {
          key: 'settings',
          label: 'My Settings',
        },
        {
          key: 'help-and-feedback',
          label: 'Help & Feedback',
        },
        {
          key: 'logout',
          label: 'Log Out',
          onClick: () => {
            onLoading(true)
            window.location.href = '/api/auth/logout'
          },
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
