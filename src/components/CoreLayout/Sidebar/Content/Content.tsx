import type { SidebarType } from '@/types'

import React from 'react'

import { useSelector } from 'react-redux'
import tw, { styled } from 'twin.macro'

import { appSettingSelector } from '@/store/selector'

import { Footer } from './Footer'
import { Logo } from './Logo'
import { Menu } from './Menu'

export const Content = () => {
  const { sidebarType } = useSelector(appSettingSelector)

  return (
    <StyledContent $sidebarType={sidebarType}>
      <Logo />

      <Menu />

      <Footer />
    </StyledContent>
  )
}

const StyledContent = styled.div<{ $sidebarType: SidebarType }>(({ $sidebarType }) => {
  return [tw`flex flex-col h-full transition-width`, $sidebarType === 'mini' ? tw`w-20` : tw`w-64`]
})
