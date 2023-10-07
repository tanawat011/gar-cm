'use client'

import React from 'react'

import { FaGears, FaHouseChimneyCrack, FaLock } from 'react-icons/fa6'

import { Item } from './Item'

type ContainerProps = {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <ul className='relative m-0 list-none px-[0.2rem]' data-te-sidenav-menu-ref>
      {children}
    </ul>
  )
}

export const Content = () => {
  const items = [
    {
      title: 'Website traffic',
      icon: FaHouseChimneyCrack,
      link: '#!',
    },
    {
      title: 'Settings',
      icon: FaGears,
      subItems: [{ title: 'Profile' }, { title: 'Account' }],
    },
    {
      title: 'Password',
      icon: FaLock,
      subItems: [{ title: 'Request password' }, { title: 'Reset password' }],
    },
  ]

  return (
    <Container>
      {items.map((item) => (
        <Item
          key={item.title}
          title={item.title}
          icon={item?.icon}
          link={item?.link}
          subItems={item?.subItems}
        />
      ))}
    </Container>
  )
}
