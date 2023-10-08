'use client'

import type { SidebarItem } from '@/types/sidebar'

import React from 'react'

import { Item } from './Item'

type ContainerProps = {
  children: React.ReactNode
}

const ContainerContent: React.FC<ContainerProps> = ({ children }) => {
  return (
    <ul className='relative m-0 list-none px-[0.2rem]' data-te-sidenav-menu-ref>
      {children}
    </ul>
  )
}

export type ContentProps = {
  items: SidebarItem[]
}

const baseUri = '/'

export const Content: React.FC<ContentProps> = ({ items }) => {
  return (
    <ContainerContent>
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
    </ContainerContent>
  )
}
