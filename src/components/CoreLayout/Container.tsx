'use client'

import { useEffect, useState } from 'react'

import { isMobile } from 'react-device-detect'

import { useInitAppSetting, useResize } from '@/hooks'

import { FullScreenLoading } from '../FullScreenLoading'

import { Content } from './Content'
import { ContentWrapper } from './ContentWrapper'
import { DrawerIconTrigger, DrawerSetting } from './DrawerSetting'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

type SidebarContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: SidebarContainerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>()

  const setupChildContainer = () => {
    const elNavbar = document.getElementById('navbar')
    const navbarHeight = elNavbar?.clientHeight || 0

    document
      .getElementsByTagName('html')[0]
      .style.setProperty('--navbar-h', `${navbarHeight + 1}px`)
  }

  useInitAppSetting()
  useResize({
    isMobileDevice,
    cb: setupChildContainer,
  })

  useEffect(() => {
    setupChildContainer()
  }, [isLoading])

  useEffect(() => {
    setIsMobileDevice(isMobile)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [isMobile])

  if (isLoading) return <FullScreenLoading />

  return (
    <>
      <div className='flex relative overflow-hidden'>
        <Sidebar isMobileDevice={isMobileDevice} />

        <ContentWrapper isMobileDevice={isMobileDevice}>
          <Navbar isMobileDevice={isMobileDevice} />

          <Content isMobileDevice={isMobileDevice}>{children}</Content>
        </ContentWrapper>

        <DrawerIconTrigger />
      </div>

      <DrawerSetting />
    </>
  )
}
