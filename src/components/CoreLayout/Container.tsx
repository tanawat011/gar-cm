'use client'

import { useEffect, useState } from 'react'

import { isMobile } from 'react-device-detect'
import tw from 'twin.macro'

import { useInitAppSetting, useResize } from '@/hooks'

import { FullScreenFirstLoading } from '../FullScreenFirstLoading'

import { Content } from './Content'
import { ContentContainer } from './ContentContainer'
import { DrawerSetting, DrawerTriggerButton } from './DrawerSetting'
import { Footer } from './Footer'
import { Loading } from './Loading'
import { Navbar } from './Navbar'
import { CoreLayoutProvider } from './Provider'
import { Sidebar } from './Sidebar'

type SidebarContainerProps = {
  children: React.ReactNode
}

const navbarId = 'navbar'

export default function Container({ children }: SidebarContainerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  const setupChildContainer = () => {
    const elNavbar = document.getElementById(navbarId)
    const navbarHeight = elNavbar?.clientHeight || 0

    document.getElementsByTagName('html')[0].style.setProperty('--navbar-h', `${navbarHeight}px`)
  }

  useInitAppSetting()
  useResize({
    cb: setupChildContainer,
  })

  useEffect(() => {
    setupChildContainer()
  }, [isLoading])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [isMobile])

  if (isLoading) return <FullScreenFirstLoading />

  return (
    <CoreLayoutProvider>
      <StyledCoreLayoutContainer>
        <Loading />

        <Sidebar />

        <ContentContainer setIsScrolled={setIsScrolled}>
          <Navbar id={navbarId} isScrolled={isScrolled} />

          <Content>{children}</Content>

          <Footer />
        </ContentContainer>

        <DrawerTriggerButton />
      </StyledCoreLayoutContainer>

      <DrawerSetting />
    </CoreLayoutProvider>
  )
}

const StyledCoreLayoutContainer = tw.div`flex relative overflow-hidden`
