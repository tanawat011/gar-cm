import type { AvatarProps } from '@nextui-org/react'

import React, { useContext, useEffect } from 'react'

import { useQuery } from '@apollo/client'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Avatar, User } from '@nextui-org/react'
import { useDispatch } from 'react-redux'

import { DropdownInput } from '@/components/NextUI'
import { queryUserRoles } from '@/graphql/user'
import { setProfile } from '@/store/profile'

import { CoreLayoutContext } from '../../Provider'

export const Profile = () => {
  const { data } = useQuery(queryUserRoles)

  const { user } = useUser()

  const { onLoading } = useContext(CoreLayoutContext)

  const dispatch = useDispatch()

  useEffect(() => {
    if (data && user) {
      dispatch(
        setProfile({
          ...user,
          permission: data?.userRoles?.roles || [],
        }),
      )
    }
  }, [data, user])

  const profileInfo: Partial<AvatarProps> = {
    isBordered: true,
    as: 'button',
    className: 'transition-transform',
    color: 'success',
    size: 'sm',
    src: user?.picture || '',
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
          name={user?.name || '-'}
          description={user?.email || '-'}
          className='cursor-pointer mx-3 hidden md:flex'
          avatarProps={profileInfo}
        />

        <Avatar {...profileInfo} className='cursor-pointer mx-3 block md:hidden' />
      </div>
    </DropdownInput>
  )
}
