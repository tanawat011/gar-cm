import React from 'react'

import { useSelector } from 'react-redux'
import tw, { styled } from 'twin.macro'

import { Menu } from '@/components/Common'
import { menu } from '@/configs'
import { appSettingSelector } from '@/store/appSetting'
import { profileSelector } from '@/store/profile'

import { StyledMenuContainer } from './Content.styled'
import { Footer } from './Footer'
import { Logo } from './Logo'

type ContentProps = {
  prefixPath?: string
}

export const Content: React.FC<ContentProps> = ({ prefixPath }) => {
  const { sidebarStyle } = useSelector(appSettingSelector)
  const { permission = [] } = useSelector(profileSelector)

  return (
    <StyledContent>
      <Logo />

      <StyledMenuContainer className='overflow-x-hidden' $sidebarStyle={sidebarStyle}>
        <Menu items={menu} prefixPath={prefixPath} currentPermission={permission} />
      </StyledMenuContainer>

      <Footer />
    </StyledContent>
  )
}

const StyledContent = styled.div(() => {
  return [tw`flex flex-col h-full transition-width`]
})
