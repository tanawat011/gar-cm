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

const baseUri = '/'

export const Content = () => {
  const items = [
    {
      title: 'Dashboard',
      icon: FaHouseChimneyCrack,
      link: '/',
    },
    {
      title: 'App',
      icon: FaLock,
      link: 'app',
      subItems: [
        { title: 'TO-DO', link: 'to-do' },
        { title: 'Something', link: 'something' },
      ],
    },
    {
      title: 'Settings',
      icon: FaGears,
      link: 'setting',
      subItems: [
        { title: 'Profile', link: 'profile' },
        { title: 'Theme', link: 'theme' },
      ],
    },
    {
      title: 'About ME',
      icon: FaHouseChimneyCrack,
      link: 'about-me',
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
          baseUri={baseUri}
        />
      ))}
    </Container>
  )
}
