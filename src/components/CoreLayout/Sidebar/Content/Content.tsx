import React from 'react'

import { useSelector } from 'react-redux'
import tw, { styled } from 'twin.macro'

import { Menu } from '@/components/Common'
import { menu } from '@/configs'
import { appSettingSelector } from '@/store/selector'

import { StyledMenuContainer } from './Content.styled'
import { Footer } from './Footer'
import { Logo } from './Logo'

export const Content = () => {
  const { sidebarStyle } = useSelector(appSettingSelector)

  return (
    <StyledContent>
      <Logo />

      <StyledMenuContainer className='overflow-x-hidden' $sidebarStyle={sidebarStyle}>
        <Menu items={menu} />
      </StyledMenuContainer>

      <Footer />
    </StyledContent>
  )
}

const StyledContent = styled.div(() => {
  return [tw`flex flex-col h-full transition-width`]
})
