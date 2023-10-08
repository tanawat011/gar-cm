'use client'
import type { SidebarProps } from './Sidebar'
import type { SidebarItem } from '@/types/sidebar'

import React, { useEffect, useState } from 'react'

import { RouteProvider } from '@/contexts/RouteProvider'

import { Children } from './Children'
import { Content } from './Content'
// import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

type SidebarContainerProps = {
  children: React.ReactNode
  sidebarItems: SidebarProps['items']
}

export default function Container({
  children,
  sidebarItems,
}: SidebarContainerProps) {
  const [item, setItem] = useState<SidebarItem | undefined>()

  useEffect(() => {
    const init = async () => {
      const { Datepicker, Input, initTE, Collapse, Dropdown, Sidenav, Ripple } =
        await import('tw-elements')
      initTE({
        Datepicker,
        Input,
        Collapse,
        Dropdown,
        Sidenav,
        Ripple,
      })
    }

    init()
  }, [])

  const onClick = (_item: SidebarItem) => {
    setItem(_item)
  }

  return (
    <RouteProvider value={item}>
      <header>
        <Sidebar items={sidebarItems} onClick={onClick} />

        <Navbar />
      </header>

      <Content>
        <Children>{children}</Children>
      </Content>

      {/* <Footer /> */}
    </RouteProvider>
  )
}
